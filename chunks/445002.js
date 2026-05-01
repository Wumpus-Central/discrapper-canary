i.d(t, { default: () => O });
var l = i(627968),
    a = i(64700),
    n = i(835245),
    s = i(830917),
    r = i(189213),
    u = i(270003),
    g = i(452027),
    o = i(17928),
    d = i(750943),
    c = i(691540),
    m = i(857250),
    f = i(97483),
    p = i(292666),
    j = i(260598),
    h = i(834730),
    E = i(77257),
    b = i(61310),
    x = i(159273),
    S = i(776568),
    A = i(643374),
    k = i(71393),
    y = i(287809),
    _ = i(174459),
    w = i(255438),
    C = i(975571),
    I = i(515718),
    z = i(631576),
    R = i(194004),
    T = i(68935),
    v = i(148355),
    D = i(823894),
    L = i(652215),
    N = i(375708),
    B = i(557155);
let U = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    F = [{ name: "Sticker file", extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"] }];
function G(e, t) {
    _.default.track(L.HAw.STICKER_UPLOAD_COMPLETED, { successful: e, error: t ?? "" });
}
let K = (e) => {
    let { stickerPreview: t } = e;
    return (0, l.jsxs)("div", {
        className: B.VH,
        children: [
            (0, l.jsx)("div", {
                className: B.rA,
                children:
                    t ??
                    (0, l.jsx)(d.X, { size: "lg", color: "currentColor", "aria-label": N.intl.string(N.t.qOsjZh) }),
            }),
            (0, l.jsx)("div", {
                className: B.F_,
                children:
                    t ??
                    (0, l.jsx)(d.X, { size: "lg", color: "currentColor", "aria-label": N.intl.string(N.t.YC5NAI) }),
            }),
        ],
    });
};
async function P(e) {
    let t = await (0, I.We)(e),
        i = new Image();
    (i.src = t), await i.decode();
    let l = (0, s.h_)(i, 320, 320);
    return (0, I.bX)(l, e.name, "image/png");
}
function O(e) {
    let { transitionState: t, onClose: i, guildId: s, sticker: d } = e,
        O = (0, o.bG)([x.Ay], () => (d?.tags != null ? x.Ay.getCustomEmojiById(d.tags) : null)),
        M = y.default.getCurrentUser()?.isStaff() ? D.Ny : 524288,
        [X, H] = a.useState(null),
        [V, Z] = a.useState(d?.name ?? ""),
        [q, Y] = a.useState({ file: null, filename: (0, T.sL)(d) ?? "" }),
        W = a.useRef(null),
        [J, Q] = a.useState(O?.id),
        [$, ee] = a.useState(O?.name ?? d?.tags),
        [et, ei] = a.useState(d?.description ?? ""),
        [el, ea] = a.useState(!1),
        [en, es] = a.useState(null),
        er = (0, o.bG)([k.A], () => k.A.getGuild(s)),
        eu = er?.features.has(L.GuildFeatures.PARTNERED) || er?.features.has(L.GuildFeatures.VERIFIED),
        eg = null != d,
        eo = eg || q?.file != null,
        ed = 0 === et.length || (et.length >= 2 && et.length <= 100),
        ec =
            !el &&
            en?.isBlocking !== !0 &&
            V.length >= 2 &&
            (null != J || null != $ || (d?.tags != null && d?.tags !== "")) &&
            eo &&
            ed,
        em = async (e) => {
            if (null == e) return;
            let t = e.type?.split(";")[0];
            if (!U.has(t)) return void es({ message: N.intl.string(N.t.B2hGAG), isBlocking: !0 });
            let i = e;
            if ("image/jpeg" === t || "image/jpg" === t) i = await P(e);
            else if ("image/png" === t && e.size > M && !(await (0, I.LZ)(e))) {
                let t = (i = await P(e)).size > M;
                _.default.track(L.HAw.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: i.size,
                    resized_file_too_big: t,
                });
            }
            if (i.size > M) {
                es({
                    message: N.intl.formatToPlainString(N.t["3eK7Ru"], { maxSize: (0, w.up)(M, { useKibibytes: !0 }) }),
                    isBlocking: null == q.file,
                }),
                    _.default.track(L.HAw.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { size: i.size, filetype: i.type });
                return;
            }
            let l = (0, T.l3)(i.type);
            if (l === R.TG.LOTTIE) {
                if (!eu)
                    return void es({
                        message: N.intl.format(N.t.RNNjy6, { articleURL: C.A.getArticleURL(L.MVz.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    H({ id: (0, n.A)(), formatType: l, content: e.result }), es(null);
                }),
                    e.readAsText(i);
            } else {
                let e = await (0, I.We)(i);
                H({ id: (0, n.A)(), formatType: l, content: e }), es(null);
            }
            (W.current = E.A.fromBlob(b.f.STICKER, e)), Y({ file: i, filename: i.name });
        },
        ef = async (e) => {
            e.preventDefault();
            let t = J ?? $ ?? d?.tags ?? "";
            try {
                if ((ea(!0), eg)) await (0, z.MO)(s, d?.id ?? "", { name: V, tags: t, description: et });
                else {
                    var l;
                    let e = new FormData();
                    e.append("name", V),
                        e.append("tags", t),
                        e.append("description", et),
                        q?.file != null && e.append("file", q.file),
                        (l = q.file?.type ?? ""),
                        _.default.track(L.HAw.STICKER_UPLOAD_STARTED, { filetype: l });
                    let i = (await W.current?.getOriginalMd5()) ?? null;
                    await (0, z.p9)({ guildId: s, body: e, platform: "web", originalMd5: i }),
                        G(!0),
                        (0, c.P0)((0, m.o)(N.intl.string(N.t.QR85gd), f.Ck.SUCCESS));
                }
                i();
            } catch (e) {
                es({ message: e.body.message, isBlocking: !1 }), G(!1, e.body.message);
            } finally {
                ea(!1);
            }
        },
        ep = ((e) => {
            let { sticker: t, previewData: i, onStickerError: a } = e;
            if (null != t) return (0, l.jsx)(v.A, { size: 160, sticker: t });
            if (null == i) return null;
            let { id: n, formatType: s, content: r } = i;
            return (0, l.jsx)(
                v.A,
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
            previewData: X,
            onStickerError: a.useCallback(() => {
                es({ message: N.intl.string(N.t["/WIYNX"]), isBlocking: !0 });
            }, []),
        }),
        ej = eu ? N.t.alYXBF : N.t.kpcMft;
    return (0, l.jsx)("form", {
        onSubmit: ef,
        className: B.Zd,
        children: (0, l.jsx)(r.Modal, {
            transitionState: t,
            onClose: i,
            title: N.intl.string(N.t.yxVsBJ),
            subtitle: N.intl.format(ej, { fileSize: (0, w.up)(524288, { useKibibytes: !0 }) }),
            actions: [
                { variant: "secondary", text: N.intl.string(N.t.oEAioF), onClick: i },
                {
                    variant: "primary",
                    text: eg ? N.intl.string(N.t.Arwnev) : N.intl.string(N.t["3UB9ad"]),
                    onSubmit: ef,
                    disabled: !ec,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(u.n, {
                children: [
                    (0, l.jsx)(g.D, {
                        label: N.intl.string(N.t.gjdiKE),
                        children: (0, l.jsx)(K, { stickerPreview: ep }),
                    }),
                    eg
                        ? (0, l.jsx)(p.k, {
                              label: N.intl.string(N.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: q?.filename ?? "",
                          })
                        : (0, l.jsx)(g.D, {
                              label: N.intl.string(N.t.AM3mzX),
                              required: !0,
                              children: (0, l.jsx)(A.A, {
                                  buttonText: N.intl.string(N.t.xEnDUa),
                                  filters: F,
                                  filename: q?.filename ?? "",
                                  placeholder: N.intl.string(N.t.rUYLJ4),
                                  onFileSelect: em,
                              }),
                          }),
                    (0, l.jsx)(S.A, {
                        className: B.uR,
                        guildId: s,
                        emojiId: J,
                        emojiName: $,
                        setEmojiId: Q,
                        setEmojiName: ee,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, l.jsx)(p.k, {
                        label: N.intl.string(N.t["0VRh6n"]),
                        required: !0,
                        value: V,
                        onChange: Z,
                        placeholder: N.intl.string(N.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, l.jsx)(j.f, {
                        label: N.intl.string(N.t.uGccej),
                        helperText: N.intl.string(N.t.S6jlDj),
                        value: et,
                        onChange: ei,
                        placeholder: N.intl.string(N.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != en &&
                        (0, l.jsx)(h.E, {
                            className: B.kz,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: en.message,
                        }),
                ],
            }),
        }),
    });
}
