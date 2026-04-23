i.d(t, { default: () => G });
var l = i(627968),
    n = i(64700),
    a = i(835245),
    s = i(830917),
    r = i(189213),
    o = i(270003),
    u = i(452027),
    d = i(311907),
    m = i(750943),
    c = i(691540),
    g = i(857250),
    f = i(97483),
    p = i(292666),
    j = i(260598),
    x = i(834730),
    h = i(508675),
    A = i(78213),
    E = i(643374),
    b = i(71393),
    y = i(287809),
    S = i(954571),
    v = i(255438),
    C = i(975571),
    k = i(515718),
    I = i(631576),
    N = i(842086),
    _ = i(378058),
    w = i(148355),
    D = i(823894),
    R = i(652215),
    z = i(985018),
    T = i(557155);
let L = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    B = [{ name: "Sticker file", extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"] }];
function U(e, t) {
    S.default.track(R.HAw.STICKER_UPLOAD_COMPLETED, { successful: e, error: t ?? "" });
}
let F = (e) => {
    let { stickerPreview: t } = e;
    return (0, l.jsxs)("div", {
        className: T.VH,
        children: [
            (0, l.jsx)("div", {
                className: T.rA,
                children:
                    t ??
                    (0, l.jsx)(m.X, { size: "lg", color: "currentColor", "aria-label": z.intl.string(z.t.qOsjZh) }),
            }),
            (0, l.jsx)("div", {
                className: T.F_,
                children:
                    t ??
                    (0, l.jsx)(m.X, { size: "lg", color: "currentColor", "aria-label": z.intl.string(z.t.YC5NAI) }),
            }),
        ],
    });
};
async function P(e) {
    let t = await (0, k.We)(e),
        i = new Image();
    (i.src = t), await i.decode();
    let l = (0, s.h_)(i, 320, 320);
    return (0, k.bX)(l, e.name, "image/png");
}
function G(e) {
    let { transitionState: t, onClose: i, guildId: s, sticker: m } = e,
        G = (0, d.bG)([h.Ay], () => (m?.tags != null ? h.Ay.getCustomEmojiById(m.tags) : null)),
        O = y.default.getCurrentUser()?.isStaff() ? D.Ny : 524288,
        [K, M] = n.useState(null),
        [X, q] = n.useState(m?.name ?? ""),
        [Y, H] = n.useState({ file: null, filename: (0, _.sL)(m) ?? "" }),
        [V, Z] = n.useState(G?.id),
        [J, Q] = n.useState(G?.name ?? m?.tags),
        [W, $] = n.useState(m?.description ?? ""),
        [ee, et] = n.useState(!1),
        [ei, el] = n.useState(null),
        en = (0, d.bG)([b.A], () => b.A.getGuild(s)),
        ea = en?.features.has(R.GuildFeatures.PARTNERED) || en?.features.has(R.GuildFeatures.VERIFIED),
        es = null != m,
        er = es || Y?.file != null,
        eo = 0 === W.length || (W.length >= 2 && W.length <= 100),
        eu =
            !ee &&
            ei?.isBlocking !== !0 &&
            X.length >= 2 &&
            (null != V || null != J || (m?.tags != null && m?.tags !== "")) &&
            er &&
            eo,
        ed = async (e) => {
            if (null == e) return;
            let t = e.type?.split(";")[0];
            if (!L.has(t)) return void el({ message: z.intl.string(z.t.B2hGAG), isBlocking: !0 });
            let i = e;
            if ("image/jpeg" === t || "image/jpg" === t) i = await P(e);
            else if ("image/png" === t && e.size > O && !(await (0, k.LZ)(e))) {
                let t = (i = await P(e)).size > O;
                S.default.track(R.HAw.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: i.size,
                    resized_file_too_big: t,
                });
            }
            if (i.size > O) {
                el({
                    message: z.intl.formatToPlainString(z.t["3eK7Ru"], { maxSize: (0, v.up)(O, { useKibibytes: !0 }) }),
                    isBlocking: null == Y.file,
                }),
                    S.default.track(R.HAw.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { size: i.size, filetype: i.type });
                return;
            }
            let l = (0, _.l3)(i.type);
            if (l === N.TG.LOTTIE) {
                if (!ea)
                    return void el({
                        message: z.intl.format(z.t.RNNjy6, { articleURL: C.A.getArticleURL(R.MVz.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    M({ id: (0, a.A)(), formatType: l, content: e.result }), el(null);
                }),
                    e.readAsText(i);
            } else {
                let e = await (0, k.We)(i);
                M({ id: (0, a.A)(), formatType: l, content: e }), el(null);
            }
            H({ file: i, filename: i.name });
        },
        em = async (e) => {
            e.preventDefault();
            let t = V ?? J ?? m?.tags ?? "";
            try {
                if ((et(!0), es)) await (0, I.MO)(s, m?.id ?? "", { name: X, tags: t, description: W });
                else {
                    var l;
                    let e = new FormData();
                    e.append("name", X),
                        e.append("tags", t),
                        e.append("description", W),
                        Y?.file != null && e.append("file", Y.file),
                        (l = Y.file?.type ?? ""),
                        S.default.track(R.HAw.STICKER_UPLOAD_STARTED, { filetype: l }),
                        await (0, I.p9)({ guildId: s, body: e, platform: "web" }),
                        U(!0),
                        (0, c.P0)((0, g.o)(z.intl.string(z.t.QR85gd), f.Ck.SUCCESS));
                }
                i();
            } catch (e) {
                el({ message: e.body.message, isBlocking: !1 }), U(!1, e.body.message);
            } finally {
                et(!1);
            }
        },
        ec = ((e) => {
            let { sticker: t, previewData: i, onStickerError: n } = e;
            if (null != t) return (0, l.jsx)(w.A, { size: 160, sticker: t });
            if (null == i) return null;
            let { id: a, formatType: s, content: r } = i;
            return (0, l.jsx)(
                w.A,
                {
                    assetData: r,
                    fileUri: r,
                    size: 160,
                    sticker: { name: a, description: "", id: a, pack_id: "", format_type: s },
                    onError: n,
                },
                a,
            );
        })({
            sticker: m,
            previewData: K,
            onStickerError: n.useCallback(() => {
                el({ message: z.intl.string(z.t["/WIYNX"]), isBlocking: !0 });
            }, []),
        }),
        eg = ea ? z.t.alYXBF : z.t.kpcMft;
    return (0, l.jsx)("form", {
        onSubmit: em,
        className: T.Zd,
        children: (0, l.jsx)(r.Modal, {
            transitionState: t,
            onClose: i,
            title: z.intl.string(z.t.yxVsBJ),
            subtitle: z.intl.format(eg, { fileSize: (0, v.up)(524288, { useKibibytes: !0 }) }),
            actions: [
                { variant: "secondary", text: z.intl.string(z.t.oEAioF), onClick: i },
                {
                    variant: "primary",
                    text: es ? z.intl.string(z.t.Arwnev) : z.intl.string(z.t["3UB9ad"]),
                    onSubmit: em,
                    disabled: !eu,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(o.n, {
                children: [
                    (0, l.jsx)(u.D, {
                        label: z.intl.string(z.t.gjdiKE),
                        children: (0, l.jsx)(F, { stickerPreview: ec }),
                    }),
                    es
                        ? (0, l.jsx)(p.k, {
                              label: z.intl.string(z.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: Y?.filename ?? "",
                          })
                        : (0, l.jsx)(u.D, {
                              label: z.intl.string(z.t.AM3mzX),
                              required: !0,
                              children: (0, l.jsx)(E.A, {
                                  buttonText: z.intl.string(z.t.xEnDUa),
                                  filters: B,
                                  filename: Y?.filename ?? "",
                                  placeholder: z.intl.string(z.t.rUYLJ4),
                                  onFileSelect: ed,
                              }),
                          }),
                    (0, l.jsx)(A.A, {
                        className: T.uR,
                        guildId: s,
                        emojiId: V,
                        emojiName: J,
                        setEmojiId: Z,
                        setEmojiName: Q,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, l.jsx)(p.k, {
                        label: z.intl.string(z.t["0VRh6n"]),
                        required: !0,
                        value: X,
                        onChange: q,
                        placeholder: z.intl.string(z.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, l.jsx)(j.f, {
                        label: z.intl.string(z.t.uGccej),
                        helperText: z.intl.string(z.t.S6jlDj),
                        value: W,
                        onChange: $,
                        placeholder: z.intl.string(z.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != ei &&
                        (0, l.jsx)(x.E, {
                            className: T.kz,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: ei.message,
                        }),
                ],
            }),
        }),
    });
}
