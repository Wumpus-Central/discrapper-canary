i.d(t, { default: () => M });
var l = i(627968),
    a = i(64700),
    n = i(132500),
    s = i(830917),
    r = i(189213),
    u = i(270003),
    g = i(452027),
    o = i(17928),
    d = i(750943),
    c = i(691540),
    f = i(857250),
    m = i(97483),
    p = i(292666),
    j = i(260598),
    h = i(834730),
    E = i(77257),
    b = i(61310),
    x = i(159273),
    S = i(7584),
    A = i(776568),
    k = i(643374),
    y = i(71393),
    _ = i(287809),
    w = i(174459),
    C = i(255438),
    I = i(975571),
    z = i(515718),
    R = i(631576),
    v = i(194004),
    T = i(68935),
    D = i(148355),
    L = i(823894),
    N = i(652215),
    B = i(375708),
    U = i(557155);
let F = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    G = [{ name: "Sticker file", extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"] }];
function K(e, t) {
    w.default.track(N.HAw.STICKER_UPLOAD_COMPLETED, { successful: e, error: t ?? "" });
}
function P(e) {
    let { stickerPreview: t } = e;
    return (0, l.jsxs)("div", {
        className: U.VH,
        children: [
            (0, l.jsx)("div", {
                className: U.rA,
                children:
                    t ??
                    (0, l.jsx)(d.X, { size: "lg", color: "currentColor", "aria-label": B.intl.string(B.t.qOsjZh) }),
            }),
            (0, l.jsx)("div", {
                className: U.F_,
                children:
                    t ??
                    (0, l.jsx)(d.X, { size: "lg", color: "currentColor", "aria-label": B.intl.string(B.t.YC5NAI) }),
            }),
        ],
    });
}
async function O(e) {
    let t = await (0, z.We)(e),
        i = new Image();
    (i.src = t), await i.decode();
    let l = (0, s.h_)(i, 320, 320);
    return (0, z.bX)(l, e.name, "image/png");
}
function M(e) {
    let { transitionState: t, onClose: i, guildId: s, sticker: d } = e,
        M = (0, o.bG)([x.Ay], () => (d?.tags != null ? x.Ay.getCustomEmojiById(d.tags) : null)),
        X = _.default.getCurrentUser()?.isStaff() ? L.Ny : 524288,
        [H, V] = a.useState(null),
        [Z, q] = a.useState(d?.name ?? ""),
        [Y, W] = a.useState({ file: null, filename: (0, T.sL)(d) ?? "" }),
        J = a.useRef(null),
        [Q, $] = a.useState(M?.id),
        [ee, et] = a.useState(M?.name ?? (d?.tags != null ? (S.Ay.getByName(d.tags)?.surrogates ?? d.tags) : void 0)),
        [ei, el] = a.useState(d?.description ?? ""),
        [ea, en] = a.useState(!1),
        [es, er] = a.useState(null),
        eu = (0, o.bG)([y.A], () => y.A.getGuild(s)),
        eg = eu?.features.has(N.GuildFeatures.PARTNERED) || eu?.features.has(N.GuildFeatures.VERIFIED),
        eo = null != d,
        ed = eo || Y?.file != null,
        ec = 0 === ei.length || (ei.length >= 2 && ei.length <= 100),
        ef =
            !ea &&
            es?.isBlocking !== !0 &&
            Z.length >= 2 &&
            (null != Q || null != ee || (d?.tags != null && d?.tags !== "")) &&
            ed &&
            ec;
    async function em(e) {
        if (null == e) return;
        let t = e.type?.split(";")[0];
        if (!F.has(t)) return void er({ message: B.intl.string(B.t.B2hGAG), isBlocking: !0 });
        let i = e;
        if ("image/jpeg" === t || "image/jpg" === t) i = await O(e);
        else if ("image/png" === t && e.size > X && !(await (0, z.LZ)(e))) {
            let t = (i = await O(e)).size > X;
            w.default.track(N.HAw.STICKER_FILE_RESIZED, {
                original_file_size_bytes: e.size,
                resized_file_size_bytes: i.size,
                resized_file_too_big: t,
            });
        }
        if (i.size > X) {
            er({
                message: B.intl.formatToPlainString(B.t["3eK7Ru"], { maxSize: (0, C.up)(X, { useKibibytes: !0 }) }),
                isBlocking: null == Y.file,
            }),
                w.default.track(N.HAw.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { size: i.size, filetype: i.type });
            return;
        }
        let l = (0, T.l3)(i.type);
        if (l === v.TG.LOTTIE) {
            if (!eg)
                return void er({
                    message: B.intl.format(B.t.RNNjy6, { articleURL: I.A.getArticleURL(N.MVz.STICKERS_UPLOAD) }),
                    isBlocking: !0,
                });
            let e = new FileReader();
            e.addEventListener("load", () => {
                V({ id: (0, n.A)(), formatType: l, content: e.result }), er(null);
            }),
                e.readAsText(i);
        } else {
            let e = await (0, z.We)(i);
            V({ id: (0, n.A)(), formatType: l, content: e }), er(null);
        }
        (J.current = E.A.fromBlob(b.f.STICKER, e)), W({ file: i, filename: i.name });
    }
    let ep = async (e) => {
            e.preventDefault();
            let t = Q ?? ee ?? d?.tags ?? "";
            try {
                if ((en(!0), eo)) await (0, R.MO)(s, d?.id ?? "", { name: Z, tags: t, description: ei });
                else {
                    var l;
                    let e = new FormData();
                    e.append("name", Z),
                        e.append("tags", t),
                        e.append("description", ei),
                        Y?.file != null && e.append("file", Y.file),
                        (l = Y.file?.type ?? ""),
                        w.default.track(N.HAw.STICKER_UPLOAD_STARTED, { filetype: l });
                    let i = (await J.current?.getOriginalMd5()) ?? null;
                    await (0, R.p9)({ guildId: s, body: e, platform: "web", originalMd5: i }),
                        K(!0),
                        (0, c.P0)((0, f.o)(B.intl.string(B.t.QR85gd), m.Ck.SUCCESS));
                }
                i();
            } catch (e) {
                er({ message: e.body.message, isBlocking: !1 }), K(!1, e.body.message);
            } finally {
                en(!1);
            }
        },
        ej = ((e) => {
            let { sticker: t, previewData: i, onStickerError: a } = e;
            if (null != t) return (0, l.jsx)(D.A, { size: 160, sticker: t });
            if (null == i) return null;
            let { id: n, formatType: s, content: r } = i;
            return (0, l.jsx)(
                D.A,
                {
                    assetData: r,
                    fileUri: r,
                    size: 160,
                    sticker: { name: n, description: "", id: n, pack_id: "", format_type: s },
                    onError: a,
                },
                n,
            );
        })({
            sticker: d,
            previewData: H,
            onStickerError: a.useCallback(() => {
                er({ message: B.intl.string(B.t["/WIYNX"]), isBlocking: !0 });
            }, []),
        }),
        eh = eg ? B.t.alYXBF : B.t.kpcMft;
    return (0, l.jsx)("form", {
        onSubmit: ep,
        className: U.Zd,
        children: (0, l.jsx)(r.Modal, {
            transitionState: t,
            onClose: i,
            title: B.intl.string(B.t.yxVsBJ),
            subtitle: B.intl.format(eh, { fileSize: (0, C.up)(524288, { useKibibytes: !0 }) }),
            actions: [
                { variant: "secondary", text: B.intl.string(B.t.oEAioF), onClick: i },
                {
                    variant: "primary",
                    text: eo ? B.intl.string(B.t.Arwnev) : B.intl.string(B.t["3UB9ad"]),
                    onSubmit: ep,
                    disabled: !ef,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(u.n, {
                children: [
                    (0, l.jsx)(g.D, {
                        label: B.intl.string(B.t.gjdiKE),
                        children: (0, l.jsx)(P, { stickerPreview: ej }),
                    }),
                    eo
                        ? (0, l.jsx)(p.k, {
                              label: B.intl.string(B.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: Y?.filename ?? "",
                          })
                        : (0, l.jsx)(g.D, {
                              label: B.intl.string(B.t.AM3mzX),
                              required: !0,
                              children: (0, l.jsx)(k.A, {
                                  buttonText: B.intl.string(B.t.xEnDUa),
                                  filters: G,
                                  filename: Y?.filename ?? "",
                                  placeholder: B.intl.string(B.t.rUYLJ4),
                                  onFileSelect: em,
                              }),
                          }),
                    (0, l.jsx)(A.A, {
                        className: U.uR,
                        guildId: s,
                        emojiId: Q,
                        emojiName: ee,
                        setEmojiId: $,
                        setEmojiName: et,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, l.jsx)(p.k, {
                        label: B.intl.string(B.t["0VRh6n"]),
                        required: !0,
                        value: Z,
                        onChange: q,
                        placeholder: B.intl.string(B.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, l.jsx)(j.f, {
                        label: B.intl.string(B.t.uGccej),
                        helperText: B.intl.string(B.t.S6jlDj),
                        value: ei,
                        onChange: el,
                        placeholder: B.intl.string(B.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != es &&
                        (0, l.jsx)(h.E, {
                            className: U.kz,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: es.message,
                        }),
                ],
            }),
        }),
    });
}
