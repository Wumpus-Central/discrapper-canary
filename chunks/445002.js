i.d(t, { default: () => P });
var l = i(477900),
    n = i(582128),
    a = i(132500),
    s = i(830917),
    r = i(17928),
    u = i(189213),
    g = i(750943),
    o = i(858899),
    c = i(270003),
    d = i(452027),
    f = i(95477),
    m = i(103557),
    p = i(834730),
    j = i(268429),
    h = i(61310),
    x = i(236285),
    E = i(7584),
    b = i(776568),
    A = i(643374),
    S = i(71393),
    y = i(287809),
    k = i(174459),
    _ = i(255438),
    w = i(975571),
    I = i(515718),
    z = i(631576),
    R = i(194004),
    v = i(378058),
    C = i(148355),
    T = i(823894),
    D = i(652215),
    L = i(105292),
    N = i(409262);
let B = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    F = [{ name: "Sticker file", extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"] }];
function U(e, t) {
    k.default.track(D.HAw.STICKER_UPLOAD_COMPLETED, { successful: e, error: t ?? "" });
}
function G(e) {
    let { stickerPreview: t } = e;
    return (0, l.jsxs)("div", {
        className: N.VH,
        children: [
            (0, l.jsx)("div", {
                className: N.rA,
                children:
                    t ??
                    (0, l.jsx)(g.X, { size: "lg", color: "currentColor", "aria-label": L.intl.string(L.t.qOsjZh) }),
            }),
            (0, l.jsx)("div", {
                className: N.F_,
                children:
                    t ??
                    (0, l.jsx)(g.X, { size: "lg", color: "currentColor", "aria-label": L.intl.string(L.t.YC5NAI) }),
            }),
        ],
    });
}
async function K(e) {
    let t = await (0, I.We)(e),
        i = new Image();
    ((i.src = t), await i.decode());
    let l = (0, s.h_)(i, 320, 320);
    return (0, I.bX)(l, e.name, "image/png");
}
function P(e) {
    let { transitionState: t, onClose: i, guildId: s, sticker: g } = e,
        P = (0, r.bG)([x.Ay], () => (g?.tags != null ? x.Ay.getCustomEmojiById(g.tags) : null)),
        O = y.default.getCurrentUser()?.isStaff() ? T.Ny : 524288,
        [M, X] = n.useState(null),
        [H, V] = n.useState(g?.name ?? ""),
        [Z, q] = n.useState({ file: null, filename: (0, v.sL)(g) ?? "" }),
        Y = n.useRef(null),
        [W, J] = n.useState(P?.id),
        [Q, $] = n.useState(P?.name ?? (g?.tags != null ? (E.Ay.getByName(g.tags)?.surrogates ?? g.tags) : void 0)),
        [ee, et] = n.useState(g?.description ?? ""),
        [ei, el] = n.useState(!1),
        [en, ea] = n.useState(null),
        es = (0, r.bG)([S.A], () => S.A.getGuild(s)),
        er = es?.features.has(D.GuildFeatures.PARTNERED) || es?.features.has(D.GuildFeatures.VERIFIED),
        eu = null != g,
        eg = eu || Z?.file != null,
        eo = 0 === ee.length || (ee.length >= 2 && ee.length <= 100),
        ec =
            !ei &&
            en?.isBlocking !== !0 &&
            H.length >= 2 &&
            (null != W || null != Q || (g?.tags != null && g?.tags !== "")) &&
            eg &&
            eo;
    async function ed(e) {
        if (null == e) return;
        let t = e.type?.split(";")[0];
        if (!B.has(t)) return void ea({ message: L.intl.string(L.t.B2hGAG), isBlocking: !0 });
        let i = e;
        if ("image/jpeg" === t || "image/jpg" === t) i = await K(e);
        else if ("image/png" === t && e.size > O && !(await (0, I.LZ)(e))) {
            let t = (i = await K(e)).size > O;
            k.default.track(D.HAw.STICKER_FILE_RESIZED, {
                original_file_size_bytes: e.size,
                resized_file_size_bytes: i.size,
                resized_file_too_big: t,
            });
        }
        if (i.size > O) {
            (ea({
                message: L.intl.formatToPlainString(L.t["3eK7Ru"], { maxSize: (0, _.up)(O, { useKibibytes: !0 }) }),
                isBlocking: null == Z.file,
            }),
                k.default.track(D.HAw.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { size: i.size, filetype: i.type }));
            return;
        }
        let l = (0, v.l3)(i.type);
        if (l === R.TG.LOTTIE) {
            if (!er)
                return void ea({
                    message: L.intl.format(L.t.RNNjy6, { articleURL: w.A.getArticleURL(D.MVz.STICKERS_UPLOAD) }),
                    isBlocking: !0,
                });
            let e = new FileReader();
            (e.addEventListener("load", () => {
                (X({ id: (0, a.A)(), formatType: l, content: e.result }), ea(null));
            }),
                e.readAsText(i));
        } else {
            let e = await (0, I.We)(i);
            (X({ id: (0, a.A)(), formatType: l, content: e }), ea(null));
        }
        ((Y.current = j.A.fromBlob(h.f.STICKER, e)), q({ file: i, filename: i.name }));
    }
    async function ef(e) {
        e.preventDefault();
        let t = W ?? Q ?? g?.tags ?? "";
        try {
            if ((el(!0), eu)) await (0, z.MO)(s, g?.id ?? "", { name: H, tags: t, description: ee });
            else {
                var l;
                let e = new FormData();
                (e.append("name", H),
                    e.append("tags", t),
                    e.append("description", ee),
                    Z?.file != null && e.append("file", Z.file),
                    (l = Z.file?.type ?? ""),
                    k.default.track(D.HAw.STICKER_UPLOAD_STARTED, { filetype: l }));
                let i = (await Y.current?.getOriginalMd5()) ?? null;
                (await (0, z.p9)({ guildId: s, body: e, platform: "web", originalMd5: i }),
                    U(!0),
                    (0, o.P0)({ text: L.intl.string(L.t.QR85gd), variant: "success" }));
            }
            i();
        } catch (e) {
            (ea({ message: e.body.message, isBlocking: !1 }), U(!1, e.body.message));
        } finally {
            el(!1);
        }
    }
    let em = (function (e) {
            let { sticker: t, previewData: i, onStickerError: n } = e;
            if (null != t) return (0, l.jsx)(C.A, { size: 160, sticker: t });
            if (null == i) return null;
            let { id: a, formatType: s, content: r } = i;
            return (0, l.jsx)(
                C.A,
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
            sticker: g,
            previewData: M,
            onStickerError: n.useCallback(() => {
                ea({ message: L.intl.string(L.t["/WIYNX"]), isBlocking: !0 });
            }, []),
        }),
        ep = er ? L.t.alYXBF : L.t.kpcMft;
    return (0, l.jsx)("form", {
        onSubmit: ef,
        className: N.Zd,
        children: (0, l.jsx)(u.a, {
            transitionState: t,
            onClose: i,
            title: L.intl.string(L.t.yxVsBJ),
            subtitle: L.intl.format(ep, { fileSize: (0, _.up)(524288, { useKibibytes: !0 }) }),
            actions: [
                { variant: "secondary", text: L.intl.string(L.t.oEAioF), onClick: i },
                {
                    variant: "primary",
                    text: eu ? L.intl.string(L.t.Arwnev) : L.intl.string(L.t["3UB9ad"]),
                    onSubmit: ef,
                    disabled: !ec,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(c.n, {
                children: [
                    (0, l.jsx)(d.D, {
                        label: L.intl.string(L.t.gjdiKE),
                        children: (0, l.jsx)(G, { stickerPreview: em }),
                    }),
                    eu
                        ? (0, l.jsx)(f.k, {
                              label: L.intl.string(L.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: Z?.filename ?? "",
                          })
                        : (0, l.jsx)(d.D, {
                              label: L.intl.string(L.t.AM3mzX),
                              required: !0,
                              children: (0, l.jsx)(A.A, {
                                  buttonText: L.intl.string(L.t.xEnDUa),
                                  filters: F,
                                  filename: Z?.filename ?? "",
                                  placeholder: L.intl.string(L.t.rUYLJ4),
                                  onFileSelect: ed,
                              }),
                          }),
                    (0, l.jsx)(b.A, {
                        className: N.uR,
                        guildId: s,
                        emojiId: W,
                        emojiName: Q,
                        setEmojiId: J,
                        setEmojiName: $,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, l.jsx)(f.k, {
                        label: L.intl.string(L.t["0VRh6n"]),
                        required: !0,
                        value: H,
                        onChange: V,
                        placeholder: L.intl.string(L.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, l.jsx)(m.f, {
                        label: L.intl.string(L.t.uGccej),
                        helperText: L.intl.string(L.t.S6jlDj),
                        value: ee,
                        onChange: et,
                        placeholder: L.intl.string(L.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != en &&
                        (0, l.jsx)(p.E, {
                            className: N.kz,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: en.message,
                        }),
                ],
            }),
        }),
    });
}
