l.d(t, { default: () => A }), l(388685), l(953529), l(35282);
var n = l(951288),
    i = l(647438),
    s = l(120356),
    r = l.n(s),
    a = l(772848),
    o = l(36793),
    u = l(793030),
    c = l(442837),
    d = l(28664),
    m = l(481060),
    f = l(339085),
    g = l(349709),
    p = l(763610),
    j = l(430824),
    x = l(594174),
    v = l(626135),
    h = l(424218),
    b = l(63063),
    y = l(956664),
    E = l(268350),
    I = l(373228),
    N = l(378233),
    S = l(419922),
    w = l(611480),
    C = l(981631),
    O = l(388032),
    k = l(491202),
    D = l(434227),
    P = l(600126);
let Z = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    R = [
        {
            name: "Sticker file",
            extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"],
        },
    ];
function T(e, t) {
    v.default.track(C.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : "",
    });
}
let _ = (e) => {
    let { stickerPreview: t } = e;
    return (0, n.jsxs)("div", {
        className: k.preview,
        children: [
            (0, n.jsx)("div", {
                className: k.previewDark,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)("img", {
                              src: D,
                              alt: O.intl.string(O.t.qOsjZm),
                          }),
            }),
            (0, n.jsx)("div", {
                className: k.previewLight,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)("img", {
                              src: P,
                              alt: O.intl.string(O.t.YC5NAA),
                          }),
            }),
        ],
    });
};
async function z(e) {
    let t = await (0, y.fD)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, o.Ae)(l, 320, 320);
    return (0, y.Bo)(n, e.name, "image/png");
}
function A(e) {
    var t, l, s, o, D, P, A, B;
    let { transitionState: U, onClose: L, guildId: K, sticker: M } = e,
        F = (0, c.e7)([f.ZP], () => ((null == M ? void 0 : M.tags) != null ? f.ZP.getCustomEmojiById(M.tags) : null)),
        Y = null != (l = null == (t = x.default.getCurrentUser()) ? void 0 : t.isStaff()) && l ? w.OC : w.Ht,
        [G, q] = i.useState(null),
        [V, X] = i.useState(null != (s = null == M ? void 0 : M.name) ? s : ""),
        [W, H] = i.useState({
            file: null,
            filename: null != (o = (0, N._V)(M)) ? o : "",
        }),
        [J, Q] = i.useState(null == F ? void 0 : F.id),
        [$, ee] = i.useState(null != (D = null == F ? void 0 : F.name) ? D : null == M ? void 0 : M.tags),
        [et, el] = i.useState(null != (P = null == M ? void 0 : M.description) ? P : ""),
        [en, ei] = i.useState(!1),
        [es, er] = i.useState(null),
        ea = (0, c.e7)([j.Z], () => j.Z.getGuild(K)),
        eo =
            (null == ea ? void 0 : ea.features.has(C.oNc.PARTNERED)) ||
            (null == ea ? void 0 : ea.features.has(C.oNc.VERIFIED)),
        eu = null != M,
        ec = eu || (null == W ? void 0 : W.file) != null,
        ed = 0 === et.length || (et.length >= 2 && et.length <= 100),
        em =
            !en &&
            (null == es ? void 0 : es.isBlocking) !== !0 &&
            V.length >= 2 &&
            (null != J ||
                null != $ ||
                ((null == M ? void 0 : M.tags) != null && (null == M ? void 0 : M.tags) !== "")) &&
            ec &&
            ed,
        ef = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(";")[0];
            if (!Z.has(l))
                return void er({
                    message: O.intl.string(O.t.B2hGAA),
                    isBlocking: !0,
                });
            let n = e;
            if ("image/jpeg" === l || "image/jpg" === l) n = await z(e);
            else if ("image/png" === l && e.size > Y && !(await (0, y.c0)(e))) {
                let t = (n = await z(e)).size > Y;
                v.default.track(C.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t,
                });
            }
            if (n.size > Y) {
                er({
                    message: O.intl.formatToPlainString(O.t["3eK7Rk"], { maxSize: (0, h.IC)(Y, { useKibibytes: !0 }) }),
                    isBlocking: null == W.file,
                }),
                    v.default.track(C.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type,
                    });
                return;
            }
            let i = (0, N.Zv)(n.type);
            if (i === I.u3.LOTTIE) {
                if (!eo)
                    return void er({
                        message: O.intl.format(O.t.RNNjy8, { articleURL: b.Z.getArticleURL(C.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    q({
                        id: (0, a.Z)(),
                        formatType: i,
                        content: e.result,
                    }),
                        er(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, y.fD)(n);
                q({
                    id: (0, a.Z)(),
                    formatType: i,
                    content: e,
                }),
                    er(null);
            }
            H({
                file: n,
                filename: n.name,
            });
        },
        eg = async (e) => {
            var t, l, n, i, s, r;
            e.preventDefault();
            let a = null != (l = null != (t = null != J ? J : $) ? t : null == M ? void 0 : M.tags) ? l : "";
            try {
                if ((ei(!0), eu))
                    await (0, E.Jf)(K, null != (n = null == M ? void 0 : M.id) ? n : "", {
                        name: V,
                        tags: a,
                        description: et,
                    });
                else {
                    let e = new FormData();
                    e.append("name", V),
                        e.append("tags", a),
                        e.append("description", et),
                        (null == W ? void 0 : W.file) != null && e.append("file", W.file),
                        (r = null != (s = null == (i = W.file) ? void 0 : i.type) ? s : ""),
                        v.default.track(C.rMx.STICKER_UPLOAD_STARTED, { filetype: r }),
                        await (0, E.lY)({
                            guildId: K,
                            body: e,
                            platform: "web",
                        }),
                        T(!0),
                        (0, m.showToast)((0, m.createToast)(O.intl.string(O.t.QR85gY), m.ToastType.SUCCESS));
                }
                L();
            } catch (e) {
                er({
                    message: e.body.message,
                    isBlocking: !1,
                }),
                    T(!1, e.body.message);
            } finally {
                ei(!1);
            }
        },
        ep = ((e) => {
            let { sticker: t, previewData: l, onStickerError: i } = e;
            if (null != t)
                return (0, n.jsx)(S.Z, {
                    size: 160,
                    sticker: t,
                });
            if (null == l) return null;
            let { id: s, formatType: r, content: a } = l;
            return (0, n.jsx)(
                S.Z,
                {
                    assetData: a,
                    fileUri: a,
                    size: 160,
                    sticker: {
                        name: s,
                        description: "",
                        id: s,
                        pack_id: "",
                        format_type: r,
                    },
                    onError: i,
                },
                s,
            );
        })({
            sticker: M,
            previewData: G,
            onStickerError: i.useCallback(() => {
                er({
                    message: O.intl.string(O.t["/WIYNT"]),
                    isBlocking: !0,
                });
            }, []),
        }),
        ej = eo ? O.t.alYXBA : O.t.kpcMfn;
    return (0, n.jsx)("form", {
        onSubmit: eg,
        className: k.form,
        children: (0, n.jsxs)(u.IX, {
            transitionState: U,
            onClose: L,
            size: "lg",
            children: [
                (0, n.jsx)(u.xBx, {
                    title: O.intl.string(O.t.yxVsBA),
                    subtitle: O.intl.format(ej, { fileSize: (0, h.IC)(w.Ht, { useKibibytes: !0 }) }),
                }),
                (0, n.jsxs)(u.fef, {
                    children: [
                        (0, n.jsx)(m.hjN, {
                            title: O.intl.string(O.t.gjdiKC),
                            className: k.formItem,
                            children: (0, n.jsx)(_, { stickerPreview: ep }),
                        }),
                        (0, n.jsxs)(m.hjN, {
                            className: r()(k.formItem, k.formItemRow),
                            children: [
                                (0, n.jsx)(m.xJW, {
                                    title: eu ? O.intl.string(O.t.wp36s7) : O.intl.string(O.t.AM3mzc),
                                    required: !0,
                                    className: k.formItemRowChild,
                                    children: eu
                                        ? (0, n.jsx)(m.oil, {
                                              disabled: !0,
                                              value: null != (A = null == W ? void 0 : W.filename) ? A : "",
                                          })
                                        : (0, n.jsx)(p.Z, {
                                              buttonText: O.intl.string(O.t.xEnDUV),
                                              filters: R,
                                              filename: null != (B = null == W ? void 0 : W.filename) ? B : "",
                                              placeholder: O.intl.string(O.t.rUYLJy),
                                              onFileSelect: ef,
                                          }),
                                }),
                                (0, n.jsx)(g.Z, {
                                    className: k.formItemRowChild,
                                    guildId: K,
                                    emojiId: J,
                                    emojiName: $,
                                    setEmojiId: Q,
                                    setEmojiName: ee,
                                    shouldUpdateBothEmojiFields: !0,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: k.formItem,
                            children: (0, n.jsx)(m.oil, {
                                label: O.intl.string(O.t["0VRh6u"]),
                                required: !0,
                                value: V,
                                onChange: X,
                                placeholder: O.intl.string(O.t["3fGttb"]),
                                maxLength: 30,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: k.formItem,
                            children: [
                                (0, n.jsxs)(m.vwX, {
                                    children: [
                                        O.intl.string(O.t.uGccen),
                                        (0, n.jsx)(d.u, {
                                            text: O.intl.string(O.t.S6jlDg),
                                            children: (0, n.jsx)(m.d3s, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: k.infoIcon,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(m.Kx8, {
                                    value: et,
                                    onChange: el,
                                    placeholder: O.intl.string(O.t.zwR0fX),
                                    maxLength: 100,
                                }),
                            ],
                        }),
                        null != es &&
                            (0, n.jsx)(m.Text, {
                                className: k.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: es.message,
                            }),
                    ],
                }),
                (0, n.jsx)(u.Go$, {
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t.oEAioK),
                            onClick: L,
                        },
                        {
                            variant: "primary",
                            text: eu ? O.intl.string(O.t.Arwnen) : O.intl.string(O.t["3UB9aW"]),
                            onSubmit: eg,
                            disabled: !em,
                            type: "submit",
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    });
}
