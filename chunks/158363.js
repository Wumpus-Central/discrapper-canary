t.d(e, { A: () => x });
var n = t(64700),
    a = t(417597),
    r = t(562465),
    i = t(582754),
    l = t(73153),
    s = t(198982),
    o = t(743445),
    d = t(565150),
    u = t(900482),
    c = t(723444),
    g = t(626584),
    q = t(71393),
    p = t(292348),
    f = t(535736),
    m = t(871109),
    h = t(253141),
    C = t(652215),
    v = t(985018);
let U = new g.A("ProductAttachmentManager");
class V {
    guildId;
    editSkuId;
    target = new f.A();
    onFileSizeError;
    existingAttachmentIds = new Set();
    uploads = [];
    constructor({ guildId: A, editSkuId: e, onFileSizeError: t }) {
        (this.editSkuId = e), (this.guildId = A), (this.onFileSizeError = t);
        const n = m.A.getGuildProduct(e ?? "")?.attachments;
        null != n &&
            (this.uploads = n.map((e) => {
                this.existingAttachmentIds.add(e.id);
                let t = new o.bK(
                    {
                        id: e.id,
                        platform: d.xz.WEB,
                        origin: "unknown:guild_product_attachment",
                        file: { name: e.filename, lastModified: 0, size: e.size ?? 0 },
                    },
                    A,
                );
                return (t.status = o.jP.COMPLETED), t;
            }));
    }
    generateInitialProgresses = () => {
        let A = {};
        for (let e of this.uploads) A[e.id] = 1;
        return A;
    };
    addAttachment(A, e) {
        let t = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= t)
            throw (
                (i.OR.announce(v.intl.formatToPlainString(v.t["0QDZ4J"], { maxAttachmentsCount: t })),
                Error("Too many attachments"))
            );
        A.target = u.m.GUILD_PRODUCT_ATTACHMENT;
        let n = new o.bK(A, this.guildId);
        n.upload(),
            n.on("error", (t) => {
                t === C.t02.ENTITY_TOO_LARGE && this.onFileSizeError();
                let a = "number" == typeof t && t > 0 ? -t : -1,
                    r = (0, h.kt)(a),
                    l = A.file?.name;
                null != l
                    ? i.OR.announce(v.intl.formatToPlainString(v.t["+YVkfX"], { filename: l, reason: r }))
                    : i.OR.announce(v.intl.formatToPlainString(v.t.mBkf6Z, { reason: r })),
                    e((A) => ({ ...A, [n.id]: a }));
            }),
            n.on("progress", (A, t) => {
                e((e) => ({ ...e, [n.id]: A / t }));
            }),
            (this.uploads = [...this.uploads, n]);
    }
    deleteAttachment(A) {
        let e = this.uploads.findIndex((e) => e.id === A);
        return -1 !== e && ((this.uploads = [...this.uploads]), this.uploads.splice(e, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let A of this.uploads) A.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(A) {
        let e,
            { priceTier: t, createNewRole: n, imageName: a, ...i } = A;
        if (this.uploads.some((A) => A.status === o.jP.ERROR))
            throw Error("Cannot create product with failed attachments");
        "unlinkRole" in i && (e = i.unlinkRole);
        let s = this.uploads.filter((A) => !this.existingAttachmentIds.has(A.id)),
            d = this.uploads
                .filter((A) => this.existingAttachmentIds.has(A.id))
                .map((A) => ({ filename: A.item.file?.name, id: A.id })),
            u = (0, c.I)(),
            g = (await u.uploadFiles(s)).map((A, e) => (0, p.OW)(A, e)),
            q = null != this.editSkuId ? r.Bo.patch : r.Bo.post,
            f =
                null != this.editSkuId
                    ? C.Rsh.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId)
                    : C.Rsh.GUILD_PRODUCTS(this.guildId),
            m = (
                await q({
                    url: f,
                    rejectWithError: !1,
                    body: {
                        ...i,
                        price_tier: t,
                        create_new_role: n,
                        image_name: a,
                        unlink_role: e,
                        attachments: d.length > 0 ? [...d, ...g] : g,
                    },
                })
            ).body;
        return (
            U.log("Created/updated product:", m),
            null != m &&
                (null != this.editSkuId
                    ? await l.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: m })
                    : await l.h.dispatch({ type: "GUILD_PRODUCT_CREATE", product: m })),
            m
        );
    }
}
function x(A, e) {
    let { editSkuId: t, onFileSizeError: r } = e,
        i = (0, a.bG)([q.A], () => q.A.getGuild(A)),
        [l, o] = n.useState({ editSkuId: t, onFileSizeError: r }),
        d = n.useMemo(() => new V({ guildId: A, ...l }), [A, l]),
        [u, c] = n.useState(d.generateInitialProgresses),
        [, g] = n.useState(null);
    n.useLayoutEffect(() => {
        c(d.generateInitialProgresses());
    }, [d]);
    let [p, f] = n.useState(),
        [m, h] = n.useState(),
        v = n.useCallback(
            (A) => {
                d.deleteAttachment(A) && g({});
            },
            [d],
        ),
        U = n.useCallback(
            (A) => {
                d.addAttachment(A, c), g({});
            },
            [d],
        ),
        x = n.useCallback(
            async (A) => {
                try {
                    f(A), h(void 0);
                    let e = await d.saveProductWithAttachments(A);
                    return null != e && o({ editSkuId: e.id, onFileSizeError: r }), g({}), e;
                } catch (A) {
                    h(A instanceof s.LG ? A : new s.LG(A));
                } finally {
                    f(void 0);
                }
            },
            [d, r],
        ),
        b = n.useCallback(() => {
            d.cancelUnusedUploads(), g({});
        }, [d]);
    n.useEffect(
        () => () => {
            d.cancelUnusedUploads();
        },
        [d],
    );
    let { uploads: j } = d,
        K = !j.every((A) => d.existingAttachmentIds.has(A.id)) || j.length !== d.existingAttachmentIds.size;
    return {
        addAttachment: U,
        cancelUnusedUploads: b,
        deleteAttachment: v,
        fileUploadProgresses: u,
        uploads: j,
        saveProductWithAttachments: x,
        isSaving: null != p,
        changesSaving: p,
        saveError: m,
        hasUnsavedAttachmentChanges: K,
        canAttachFiles: j.length < d.target.getMaxAttachmentsCount(),
        canAttachArchives: i?.features.has(C.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE) ?? !1,
    };
}
