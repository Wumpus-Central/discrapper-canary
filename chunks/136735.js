l.d(t, { default: () => L }), l(388685), l(953529), l(35282);
var n = l(951288),
    i = l(647438),
    r = l(120356),
    s = l.n(r),
    a = l(772848),
    o = l(36793),
    u = l(442837),
    c = l(257465),
    d = l(369585),
    m = l(103866),
    f = l(37148),
    g = l(481060),
    p = l(339085),
    j = l(349709),
    v = l(763610),
    b = l(430824),
    x = l(594174),
    h = l(626135),
    y = l(424218),
    E = l(63063),
    w = l(956664),
    I = l(268350),
    S = l(373228),
    O = l(378233),
    N = l(419922),
    P = l(611480),
    C = l(981631),
    k = l(388032),
    D = l(491202),
    Z = l(434227),
    R = l(600126);
let _ = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    T = [
        {
            name: "Sticker file",
            extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"],
        },
    ];
function A(e, t) {
    h.default.track(C.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : "",
    });
}
let z = (e) => {
    let { stickerPreview: t } = e;
    return (0, n.jsxs)("div", {
        className: D.preview,
        children: [
            (0, n.jsx)("div", {
                className: D.previewDark,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)("img", {
                              src: Z,
                              alt: k.intl.string(k.t.qOsjZm),
                          }),
            }),
            (0, n.jsx)("div", {
                className: D.previewLight,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)("img", {
                              src: R,
                              alt: k.intl.string(k.t.YC5NAA),
                          }),
            }),
        ],
    });
};
async function B(e) {
    let t = await (0, w.fD)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, o.Ae)(l, 320, 320);
    return (0, w.Bo)(n, e.name, "image/png");
}
function L(e) {
    var t, l, r, o, Z, R, L, U;
    let { transitionState: K, onClose: M, guildId: F, sticker: Y } = e,
        q = (0, u.e7)([p.ZP], () => ((null == Y ? void 0 : Y.tags) != null ? p.ZP.getCustomEmojiById(Y.tags) : null)),
        G = null != (l = null == (t = x.default.getCurrentUser()) ? void 0 : t.isStaff()) && l ? P.OC : P.Ht,
        [V, X] = i.useState(null),
        [W, H] = i.useState(null != (r = null == Y ? void 0 : Y.name) ? r : ""),
        [J, Q] = i.useState({
            file: null,
            filename: null != (o = (0, O._V)(Y)) ? o : "",
        }),
        [$, ee] = i.useState(null == q ? void 0 : q.id),
        [et, el] = i.useState(null != (Z = null == q ? void 0 : q.name) ? Z : null == Y ? void 0 : Y.tags),
        [en, ei] = i.useState(null != (R = null == Y ? void 0 : Y.description) ? R : ""),
        [er, es] = i.useState(!1),
        [ea, eo] = i.useState(null),
        eu = (0, u.e7)([b.Z], () => b.Z.getGuild(F)),
        ec =
            (null == eu ? void 0 : eu.features.has(C.oNc.PARTNERED)) ||
            (null == eu ? void 0 : eu.features.has(C.oNc.VERIFIED)),
        ed = null != Y,
        em = ed || (null == J ? void 0 : J.file) != null,
        ef = 0 === en.length || (en.length >= 2 && en.length <= 100),
        eg =
            !er &&
            (null == ea ? void 0 : ea.isBlocking) !== !0 &&
            W.length >= 2 &&
            (null != $ ||
                null != et ||
                ((null == Y ? void 0 : Y.tags) != null && (null == Y ? void 0 : Y.tags) !== "")) &&
            em &&
            ef,
        ep = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(";")[0];
            if (!_.has(l))
                return void eo({
                    message: k.intl.string(k.t.B2hGAA),
                    isBlocking: !0,
                });
            let n = e;
            if ("image/jpeg" === l || "image/jpg" === l) n = await B(e);
            else if ("image/png" === l && e.size > G && !(await (0, w.c0)(e))) {
                let t = (n = await B(e)).size > G;
                h.default.track(C.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t,
                });
            }
            if (n.size > G) {
                eo({
                    message: k.intl.formatToPlainString(k.t["3eK7Rk"], { maxSize: (0, y.IC)(G, { useKibibytes: !0 }) }),
                    isBlocking: null == J.file,
                }),
                    h.default.track(C.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type,
                    });
                return;
            }
            let i = (0, O.Zv)(n.type);
            if (i === S.u3.LOTTIE) {
                if (!ec)
                    return void eo({
                        message: k.intl.format(k.t.RNNjy8, { articleURL: E.Z.getArticleURL(C.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    X({
                        id: (0, a.Z)(),
                        formatType: i,
                        content: e.result,
                    }),
                        eo(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, w.fD)(n);
                X({
                    id: (0, a.Z)(),
                    formatType: i,
                    content: e,
                }),
                    eo(null);
            }
            Q({
                file: n,
                filename: n.name,
            });
        },
        ej = async (e) => {
            var t, l, n, i, r, s;
            e.preventDefault();
            let a = null != (l = null != (t = null != $ ? $ : et) ? t : null == Y ? void 0 : Y.tags) ? l : "";
            try {
                if ((es(!0), ed))
                    await (0, I.Jf)(F, null != (n = null == Y ? void 0 : Y.id) ? n : "", {
                        name: W,
                        tags: a,
                        description: en,
                    });
                else {
                    let e = new FormData();
                    e.append("name", W),
                        e.append("tags", a),
                        e.append("description", en),
                        (null == J ? void 0 : J.file) != null && e.append("file", J.file),
                        (s = null != (r = null == (i = J.file) ? void 0 : i.type) ? r : ""),
                        h.default.track(C.rMx.STICKER_UPLOAD_STARTED, { filetype: s }),
                        await (0, I.lY)({
                            guildId: F,
                            body: e,
                            platform: "web",
                        }),
                        A(!0),
                        (0, g.showToast)((0, g.createToast)(k.intl.string(k.t.QR85gY), g.ToastType.SUCCESS));
                }
                M();
            } catch (e) {
                eo({
                    message: e.body.message,
                    isBlocking: !1,
                }),
                    A(!1, e.body.message);
            } finally {
                es(!1);
            }
        },
        ev = ((e) => {
            let { sticker: t, previewData: l, onStickerError: i } = e;
            if (null != t)
                return (0, n.jsx)(N.Z, {
                    size: 160,
                    sticker: t,
                });
            if (null == l) return null;
            let { id: r, formatType: s, content: a } = l;
            return (0, n.jsx)(
                N.Z,
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
            sticker: Y,
            previewData: V,
            onStickerError: i.useCallback(() => {
                eo({
                    message: k.intl.string(k.t["/WIYNT"]),
                    isBlocking: !0,
                });
            }, []),
        }),
        eb = ec ? k.t.alYXBA : k.t.kpcMfn;
    return (0, n.jsx)("form", {
        onSubmit: ej,
        className: D.form,
        children: (0, n.jsxs)(c.IX, {
            transitionState: K,
            onClose: M,
            size: "lg",
            children: [
                (0, n.jsx)(f.x, {
                    title: k.intl.string(k.t.yxVsBA),
                    subtitle: k.intl.format(eb, { fileSize: (0, y.IC)(P.Ht, { useKibibytes: !0 }) }),
                }),
                (0, n.jsxs)(m.f, {
                    children: [
                        (0, n.jsx)(g.hjN, {
                            title: k.intl.string(k.t.gjdiKC),
                            className: D.formItem,
                            children: (0, n.jsx)(z, { stickerPreview: ev }),
                        }),
                        (0, n.jsxs)(g.hjN, {
                            className: s()(D.formItem, D.formItemRow),
                            children: [
                                (0, n.jsx)(g.xJW, {
                                    title: ed ? k.intl.string(k.t.wp36s7) : k.intl.string(k.t.AM3mzc),
                                    required: !0,
                                    className: D.formItemRowChild,
                                    children: ed
                                        ? (0, n.jsx)(g.oil, {
                                              disabled: !0,
                                              value: null != (L = null == J ? void 0 : J.filename) ? L : "",
                                          })
                                        : (0, n.jsx)(v.Z, {
                                              buttonText: k.intl.string(k.t.xEnDUV),
                                              filters: T,
                                              filename: null != (U = null == J ? void 0 : J.filename) ? U : "",
                                              placeholder: k.intl.string(k.t.rUYLJy),
                                              onFileSelect: ep,
                                          }),
                                }),
                                (0, n.jsx)(j.Z, {
                                    className: D.formItemRowChild,
                                    guildId: F,
                                    emojiId: $,
                                    emojiName: et,
                                    setEmojiId: ee,
                                    setEmojiName: el,
                                    shouldUpdateBothEmojiFields: !0,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: D.formItem,
                            children: (0, n.jsx)(g.oil, {
                                label: k.intl.string(k.t["0VRh6u"]),
                                required: !0,
                                value: W,
                                onChange: H,
                                placeholder: k.intl.string(k.t["3fGttb"]),
                                maxLength: 30,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: D.formItem,
                            children: [
                                (0, n.jsxs)(g.vwX, {
                                    children: [
                                        k.intl.string(k.t.uGccen),
                                        (0, n.jsx)(g.ua7, {
                                            text: k.intl.string(k.t.S6jlDg),
                                            children: (e) =>
                                                (0, n.jsx)(
                                                    g.d3s,
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
                                                            className: D.infoIcon,
                                                        },
                                                        e,
                                                    ),
                                                ),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(g.Kx8, {
                                    value: en,
                                    onChange: ei,
                                    placeholder: k.intl.string(k.t.zwR0fX),
                                    maxLength: 100,
                                }),
                            ],
                        }),
                        null != ea &&
                            (0, n.jsx)(g.Text, {
                                className: D.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: ea.message,
                            }),
                    ],
                }),
                (0, n.jsx)(d.G, {
                    actions: [
                        {
                            variant: "secondary",
                            text: k.intl.string(k.t.oEAioK),
                            onClick: M,
                        },
                        {
                            variant: "primary",
                            text: ed ? k.intl.string(k.t.Arwnen) : k.intl.string(k.t["3UB9aW"]),
                            onSubmit: ej,
                            disabled: !eg,
                            type: "submit",
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    });
}
