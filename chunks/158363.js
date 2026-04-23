t.d(e, { A: () => V });
var a = t(64700),
    n = t(417597),
    r = t(562465),
    l = t(765178),
    i = t(73153),
    s = t(198982),
    o = t(743445),
    d = t(565150),
    c = t(900482),
    u = t(723444),
    g = t(626584),
    h = t(71393),
    p = t(292348),
    f = t(535736),
    m = t(871109),
    q = t(253141),
    v = t(652215),
    C = t(985018);
let x = new g.A("ProductAttachmentManager");
class U {
    guildId;
    editSkuId;
    target = new f.A();
    onFileSizeError;
    existingAttachmentIds = new Set();
    uploads = [];
    constructor({ guildId: A, editSkuId: e, onFileSizeError: t }) {
        (this.editSkuId = e), (this.guildId = A), (this.onFileSizeError = t);
        const a = m.A.getGuildProduct(e ?? "")?.attachments;
        null != a &&
            (this.uploads = a.map((e) => {
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
                (l.O.announce(C.intl.formatToPlainString(C.t["0QDZ4J"], { maxAttachmentsCount: t })),
                Error("Too many attachments"))
            );
        A.target = c.m.GUILD_PRODUCT_ATTACHMENT;
        let a = new o.bK(A, this.guildId);
        a.upload(),
            a.on("error", (t) => {
                t === v.t02.ENTITY_TOO_LARGE && this.onFileSizeError();
                let n = "number" == typeof t && t > 0 ? -t : -1,
                    r = (0, q.kt)(n),
                    i = A.file?.name;
                null != i
                    ? l.O.announce(C.intl.formatToPlainString(C.t["+YVkfX"], { filename: i, reason: r }))
                    : l.O.announce(C.intl.formatToPlainString(C.t.mBkf6Z, { reason: r })),
                    e((A) => ({ ...A, [a.id]: n }));
            }),
            a.on("progress", (A, t) => {
                e((e) => ({ ...e, [a.id]: A / t }));
            }),
            (this.uploads = [...this.uploads, a]);
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
            { priceTier: t, createNewRole: a, imageName: n, ...l } = A;
        if (this.uploads.some((A) => A.status === o.jP.ERROR))
            throw Error("Cannot create product with failed attachments");
        "unlinkRole" in l && (e = l.unlinkRole);
        let s = this.uploads.filter((A) => !this.existingAttachmentIds.has(A.id)),
            d = this.uploads
                .filter((A) => this.existingAttachmentIds.has(A.id))
                .map((A) => ({ filename: A.item.file?.name, id: A.id })),
            c = (0, u.I)(),
            g = (await c.uploadFiles(s)).map((A, e) => (0, p.OW)(A, e)),
            h = null != this.editSkuId ? r.Bo.patch : r.Bo.post,
            f =
                null != this.editSkuId
                    ? v.Rsh.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId)
                    : v.Rsh.GUILD_PRODUCTS(this.guildId),
            m = (
                await h({
                    url: f,
                    rejectWithError: !1,
                    body: {
                        ...l,
                        price_tier: t,
                        create_new_role: a,
                        image_name: n,
                        unlink_role: e,
                        attachments: d.length > 0 ? [...d, ...g] : g,
                    },
                })
            ).body;
        return (
            x.log("Created/updated product:", m),
            null != m &&
                (null != this.editSkuId
                    ? await i.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: m })
                    : await i.h.dispatch({ type: "GUILD_PRODUCT_CREATE", product: m })),
            m
        );
    }
}
function V(A, e) {
    let { editSkuId: t, onFileSizeError: r } = e,
        l = (0, n.bG)([h.A], () => h.A.getGuild(A)),
        [i, o] = a.useState({ editSkuId: t, onFileSizeError: r }),
        d = a.useMemo(() => new U({ guildId: A, ...i }), [A, i]),
        [c, u] = a.useState(d.generateInitialProgresses),
        [, g] = a.useState(null);
    a.useLayoutEffect(() => {
        u(d.generateInitialProgresses());
    }, [d]);
    let [p, f] = a.useState(),
        [m, q] = a.useState(),
        C = a.useCallback(
            (A) => {
                d.deleteAttachment(A) && g({});
            },
            [d],
        ),
        x = a.useCallback(
            (A) => {
                d.addAttachment(A, u), g({});
            },
            [d],
        ),
        V = a.useCallback(
            async (A) => {
                try {
                    f(A), q(void 0);
                    let e = await d.saveProductWithAttachments(A);
                    return null != e && o({ editSkuId: e.id, onFileSizeError: r }), g({}), e;
                } catch (A) {
                    q(A instanceof s.LG ? A : new s.LG(A));
                } finally {
                    f(void 0);
                }
            },
            [d, r],
        ),
        b = a.useCallback(() => {
            d.cancelUnusedUploads(), g({});
        }, [d]);
    a.useEffect(
        () => () => {
            d.cancelUnusedUploads();
        },
        [d],
    );
    let { uploads: j } = d,
        N = !j.every((A) => d.existingAttachmentIds.has(A.id)) || j.length !== d.existingAttachmentIds.size;
    return {
        addAttachment: x,
        cancelUnusedUploads: b,
        deleteAttachment: C,
        fileUploadProgresses: c,
        uploads: j,
        saveProductWithAttachments: V,
        isSaving: null != p,
        changesSaving: p,
        saveError: m,
        hasUnsavedAttachmentChanges: N,
        canAttachFiles: j.length < d.target.getMaxAttachmentsCount(),
        canAttachArchives: l?.features.has(v.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE) ?? !1,
    };
}
