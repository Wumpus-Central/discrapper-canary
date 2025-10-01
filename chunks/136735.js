l.d(t, { default: () => z }), l(388685), l(953529), l(35282);
var n = l(951288),
    i = l(647438),
    r = l(120356),
    s = l.n(r),
    a = l(772848),
    o = l(36793),
    u = l(793030),
    c = l(442837),
    d = l(481060),
    m = l(339085),
    f = l(349709),
    g = l(763610),
    p = l(430824),
    j = l(594174),
    v = l(626135),
    x = l(424218),
    h = l(63063),
    b = l(956664),
    y = l(268350),
    E = l(373228),
    I = l(378233),
    w = l(419922),
    S = l(611480),
    O = l(981631),
    N = l(388032),
    C = l(491202),
    P = l(434227),
    k = l(600126);
let D = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    Z = [
        {
            name: "Sticker file",
            extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"],
        },
    ];
function R(e, t) {
    v.default.track(O.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : "",
    });
}
let T = (e) => {
    let { stickerPreview: t } = e;
    return (0, n.jsxs)("div", {
        className: C.preview,
        children: [
            (0, n.jsx)("div", {
                className: C.previewDark,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)("img", {
                              src: P,
                              alt: N.intl.string(N.t.qOsjZm),
                          }),
            }),
            (0, n.jsx)("div", {
                className: C.previewLight,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)("img", {
                              src: k,
                              alt: N.intl.string(N.t.YC5NAA),
                          }),
            }),
        ],
    });
};
async function _(e) {
    let t = await (0, b.fD)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, o.Ae)(l, 320, 320);
    return (0, b.Bo)(n, e.name, "image/png");
}
function z(e) {
    var t, l, r, o, P, k, z, A;
    let { transitionState: B, onClose: U, guildId: L, sticker: K } = e,
        M = (0, c.e7)([m.ZP], () => ((null == K ? void 0 : K.tags) != null ? m.ZP.getCustomEmojiById(K.tags) : null)),
        F = null != (l = null == (t = j.default.getCurrentUser()) ? void 0 : t.isStaff()) && l ? S.OC : S.Ht,
        [Y, G] = i.useState(null),
        [q, V] = i.useState(null != (r = null == K ? void 0 : K.name) ? r : ""),
        [X, W] = i.useState({
            file: null,
            filename: null != (o = (0, I._V)(K)) ? o : "",
        }),
        [H, J] = i.useState(null == M ? void 0 : M.id),
        [Q, $] = i.useState(null != (P = null == M ? void 0 : M.name) ? P : null == K ? void 0 : K.tags),
        [ee, et] = i.useState(null != (k = null == K ? void 0 : K.description) ? k : ""),
        [el, en] = i.useState(!1),
        [ei, er] = i.useState(null),
        es = (0, c.e7)([p.Z], () => p.Z.getGuild(L)),
        ea =
            (null == es ? void 0 : es.features.has(O.oNc.PARTNERED)) ||
            (null == es ? void 0 : es.features.has(O.oNc.VERIFIED)),
        eo = null != K,
        eu = eo || (null == X ? void 0 : X.file) != null,
        ec = 0 === ee.length || (ee.length >= 2 && ee.length <= 100),
        ed =
            !el &&
            (null == ei ? void 0 : ei.isBlocking) !== !0 &&
            q.length >= 2 &&
            (null != H ||
                null != Q ||
                ((null == K ? void 0 : K.tags) != null && (null == K ? void 0 : K.tags) !== "")) &&
            eu &&
            ec,
        em = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(";")[0];
            if (!D.has(l))
                return void er({
                    message: N.intl.string(N.t.B2hGAA),
                    isBlocking: !0,
                });
            let n = e;
            if ("image/jpeg" === l || "image/jpg" === l) n = await _(e);
            else if ("image/png" === l && e.size > F && !(await (0, b.c0)(e))) {
                let t = (n = await _(e)).size > F;
                v.default.track(O.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t,
                });
            }
            if (n.size > F) {
                er({
                    message: N.intl.formatToPlainString(N.t["3eK7Rk"], { maxSize: (0, x.IC)(F, { useKibibytes: !0 }) }),
                    isBlocking: null == X.file,
                }),
                    v.default.track(O.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type,
                    });
                return;
            }
            let i = (0, I.Zv)(n.type);
            if (i === E.u3.LOTTIE) {
                if (!ea)
                    return void er({
                        message: N.intl.format(N.t.RNNjy8, { articleURL: h.Z.getArticleURL(O.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    G({
                        id: (0, a.Z)(),
                        formatType: i,
                        content: e.result,
                    }),
                        er(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, b.fD)(n);
                G({
                    id: (0, a.Z)(),
                    formatType: i,
                    content: e,
                }),
                    er(null);
            }
            W({
                file: n,
                filename: n.name,
            });
        },
        ef = async (e) => {
            var t, l, n, i, r, s;
            e.preventDefault();
            let a = null != (l = null != (t = null != H ? H : Q) ? t : null == K ? void 0 : K.tags) ? l : "";
            try {
                if ((en(!0), eo))
                    await (0, y.Jf)(L, null != (n = null == K ? void 0 : K.id) ? n : "", {
                        name: q,
                        tags: a,
                        description: ee,
                    });
                else {
                    let e = new FormData();
                    e.append("name", q),
                        e.append("tags", a),
                        e.append("description", ee),
                        (null == X ? void 0 : X.file) != null && e.append("file", X.file),
                        (s = null != (r = null == (i = X.file) ? void 0 : i.type) ? r : ""),
                        v.default.track(O.rMx.STICKER_UPLOAD_STARTED, { filetype: s }),
                        await (0, y.lY)({
                            guildId: L,
                            body: e,
                            platform: "web",
                        }),
                        R(!0),
                        (0, d.showToast)((0, d.createToast)(N.intl.string(N.t.QR85gY), d.ToastType.SUCCESS));
                }
                U();
            } catch (e) {
                er({
                    message: e.body.message,
                    isBlocking: !1,
                }),
                    R(!1, e.body.message);
            } finally {
                en(!1);
            }
        },
        eg = ((e) => {
            let { sticker: t, previewData: l, onStickerError: i } = e;
            if (null != t)
                return (0, n.jsx)(w.Z, {
                    size: 160,
                    sticker: t,
                });
            if (null == l) return null;
            let { id: r, formatType: s, content: a } = l;
            return (0, n.jsx)(
                w.Z,
                {
                    assetData: a,
                    fileUri: a,
                    size: 160,
                    sticker: {
                        name: r,
                        description: "",
                        id: r,
                        pack_id: "",
                        format_type: s,
                    },
                    onError: i,
                },
                r,
            );
        })({
            sticker: K,
            previewData: Y,
            onStickerError: i.useCallback(() => {
                er({
                    message: N.intl.string(N.t["/WIYNT"]),
                    isBlocking: !0,
                });
            }, []),
        }),
        ep = ea ? N.t.alYXBA : N.t.kpcMfn;
    return (0, n.jsx)("form", {
        onSubmit: ef,
        className: C.form,
        children: (0, n.jsxs)(u.IX, {
            transitionState: B,
            onClose: U,
            size: "lg",
            children: [
                (0, n.jsx)(u.xBx, {
                    title: N.intl.string(N.t.yxVsBA),
                    subtitle: N.intl.format(ep, { fileSize: (0, x.IC)(S.Ht, { useKibibytes: !0 }) }),
                }),
                (0, n.jsxs)(u.fef, {
                    children: [
                        (0, n.jsx)(d.hjN, {
                            title: N.intl.string(N.t.gjdiKC),
                            className: C.formItem,
                            children: (0, n.jsx)(T, { stickerPreview: eg }),
                        }),
                        (0, n.jsxs)(d.hjN, {
                            className: s()(C.formItem, C.formItemRow),
                            children: [
                                (0, n.jsx)(d.xJW, {
                                    title: eo ? N.intl.string(N.t.wp36s7) : N.intl.string(N.t.AM3mzc),
                                    required: !0,
                                    className: C.formItemRowChild,
                                    children: eo
                                        ? (0, n.jsx)(d.oil, {
                                              disabled: !0,
                                              value: null != (z = null == X ? void 0 : X.filename) ? z : "",
                                          })
                                        : (0, n.jsx)(g.Z, {
                                              buttonText: N.intl.string(N.t.xEnDUV),
                                              filters: Z,
                                              filename: null != (A = null == X ? void 0 : X.filename) ? A : "",
                                              placeholder: N.intl.string(N.t.rUYLJy),
                                              onFileSelect: em,
                                          }),
                                }),
                                (0, n.jsx)(f.Z, {
                                    className: C.formItemRowChild,
                                    guildId: L,
                                    emojiId: H,
                                    emojiName: Q,
                                    setEmojiId: J,
                                    setEmojiName: $,
                                    shouldUpdateBothEmojiFields: !0,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: C.formItem,
                            children: (0, n.jsx)(d.oil, {
                                label: N.intl.string(N.t["0VRh6u"]),
                                required: !0,
                                value: q,
                                onChange: V,
                                placeholder: N.intl.string(N.t["3fGttb"]),
                                maxLength: 30,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: C.formItem,
                            children: [
                                (0, n.jsxs)(d.vwX, {
                                    children: [
                                        N.intl.string(N.t.uGccen),
                                        (0, n.jsx)(d.ua7, {
                                            text: N.intl.string(N.t.S6jlDg),
                                            children: (e) =>
                                                (0, n.jsx)(
                                                    d.d3s,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var l = null != arguments[t] ? arguments[t] : {},
                                                                n = Object.keys(l);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (n = n.concat(
                                                                    Object.getOwnPropertySymbols(l).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(l, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                n.forEach(function (t) {
                                                                    var n;
                                                                    (n = l[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: n,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[t] = n);
                                                                });
                                                        }
                                                        return e;
                                                    })(
                                                        {
                                                            size: "xs",
                                                            color: "currentColor",
                                                            className: C.infoIcon,
                                                        },
                                                        e,
                                                    ),
                                                ),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(d.Kx8, {
                                    value: ee,
                                    onChange: et,
                                    placeholder: N.intl.string(N.t.zwR0fX),
                                    maxLength: 100,
                                }),
                            ],
                        }),
                        null != ei &&
                            (0, n.jsx)(d.Text, {
                                className: C.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: ei.message,
                            }),
                    ],
                }),
                (0, n.jsx)(u.Go$, {
                    actions: [
                        {
                            variant: "secondary",
                            text: N.intl.string(N.t.oEAioK),
                            onClick: U,
                        },
                        {
                            variant: "primary",
                            text: eo ? N.intl.string(N.t.Arwnen) : N.intl.string(N.t["3UB9aW"]),
                            onSubmit: ef,
                            disabled: !ed,
                            type: "submit",
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    });
}
