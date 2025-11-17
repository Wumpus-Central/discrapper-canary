l.d(t, { default: () => R }), l(388685), l(953529), l(35282);
var n = l(54381),
    i = l(473749),
    r = l(772848),
    a = l(36793),
    s = l(793030),
    o = l(442837),
    u = l(481060),
    d = l(339085),
    c = l(349709),
    m = l(763610),
    g = l(430824),
    f = l(594174),
    p = l(626135),
    j = l(424218),
    v = l(63063),
    x = l(956664),
    h = l(268350),
    b = l(373228),
    y = l(378233),
    E = l(419922),
    S = l(611480),
    I = l(981631),
    w = l(388032),
    C = l(491202),
    N = l(434227),
    O = l(600126);
let P = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    k = [
        {
            name: "Sticker file",
            extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"],
        },
    ];
function D(e, t) {
    p.default.track(I.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : "",
    });
}
let Z = (e) => {
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
                              src: N,
                              alt: w.intl.string(w.t.qOsjZh),
                          }),
            }),
            (0, n.jsx)("div", {
                className: C.previewLight,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)("img", {
                              src: O,
                              alt: w.intl.string(w.t.YC5NAI),
                          }),
            }),
        ],
    });
};
async function T(e) {
    let t = await (0, x.fD)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, a.Ae)(l, 320, 320);
    return (0, x.Bo)(n, e.name, "image/png");
}
function R(e) {
    var t, l, a, N, O, R, _, z;
    let { transitionState: B, onClose: A, guildId: U, sticker: L } = e,
        F = (0, o.e7)([d.ZP], () => ((null == L ? void 0 : L.tags) != null ? d.ZP.getCustomEmojiById(L.tags) : null)),
        K = null != (l = null == (t = f.default.getCurrentUser()) ? void 0 : t.isStaff()) && l ? S.OC : S.Ht,
        [M, G] = i.useState(null),
        [q, Y] = i.useState(null != (a = null == L ? void 0 : L.name) ? a : ""),
        [X, J] = i.useState({
            file: null,
            filename: null != (N = (0, y._V)(L)) ? N : "",
        }),
        [V, H] = i.useState(null == F ? void 0 : F.id),
        [Q, W] = i.useState(null != (O = null == F ? void 0 : F.name) ? O : null == L ? void 0 : L.tags),
        [$, ee] = i.useState(null != (R = null == L ? void 0 : L.description) ? R : ""),
        [et, el] = i.useState(!1),
        [en, ei] = i.useState(null),
        er = (0, o.e7)([g.Z], () => g.Z.getGuild(U)),
        ea =
            (null == er ? void 0 : er.features.has(I.GuildFeatures.PARTNERED)) ||
            (null == er ? void 0 : er.features.has(I.GuildFeatures.VERIFIED)),
        es = null != L,
        eo = es || (null == X ? void 0 : X.file) != null,
        eu = 0 === $.length || ($.length >= 2 && $.length <= 100),
        ed =
            !et &&
            (null == en ? void 0 : en.isBlocking) !== !0 &&
            q.length >= 2 &&
            (null != V ||
                null != Q ||
                ((null == L ? void 0 : L.tags) != null && (null == L ? void 0 : L.tags) !== "")) &&
            eo &&
            eu,
        ec = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(";")[0];
            if (!P.has(l))
                return void ei({
                    message: w.intl.string(w.t.B2hGAG),
                    isBlocking: !0,
                });
            let n = e;
            if ("image/jpeg" === l || "image/jpg" === l) n = await T(e);
            else if ("image/png" === l && e.size > K && !(await (0, x.c0)(e))) {
                let t = (n = await T(e)).size > K;
                p.default.track(I.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t,
                });
            }
            if (n.size > K) {
                ei({
                    message: w.intl.formatToPlainString(w.t["3eK7Ru"], { maxSize: (0, j.IC)(K, { useKibibytes: !0 }) }),
                    isBlocking: null == X.file,
                }),
                    p.default.track(I.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type,
                    });
                return;
            }
            let i = (0, y.Zv)(n.type);
            if (i === b.u3.LOTTIE) {
                if (!ea)
                    return void ei({
                        message: w.intl.format(w.t.RNNjy6, { articleURL: v.Z.getArticleURL(I.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    G({
                        id: (0, r.Z)(),
                        formatType: i,
                        content: e.result,
                    }),
                        ei(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, x.fD)(n);
                G({
                    id: (0, r.Z)(),
                    formatType: i,
                    content: e,
                }),
                    ei(null);
            }
            J({
                file: n,
                filename: n.name,
            });
        },
        em = async (e) => {
            var t, l, n, i, r, a;
            e.preventDefault();
            let s = null != (l = null != (t = null != V ? V : Q) ? t : null == L ? void 0 : L.tags) ? l : "";
            try {
                if ((el(!0), es))
                    await (0, h.Jf)(U, null != (n = null == L ? void 0 : L.id) ? n : "", {
                        name: q,
                        tags: s,
                        description: $,
                    });
                else {
                    let e = new FormData();
                    e.append("name", q),
                        e.append("tags", s),
                        e.append("description", $),
                        (null == X ? void 0 : X.file) != null && e.append("file", X.file),
                        (a = null != (r = null == (i = X.file) ? void 0 : i.type) ? r : ""),
                        p.default.track(I.rMx.STICKER_UPLOAD_STARTED, { filetype: a }),
                        await (0, h.lY)({
                            guildId: U,
                            body: e,
                            platform: "web",
                        }),
                        D(!0),
                        (0, u.showToast)((0, u.createToast)(w.intl.string(w.t.QR85gd), u.ToastType.SUCCESS));
                }
                A();
            } catch (e) {
                ei({
                    message: e.body.message,
                    isBlocking: !1,
                }),
                    D(!1, e.body.message);
            } finally {
                el(!1);
            }
        },
        eg = ((e) => {
            let { sticker: t, previewData: l, onStickerError: i } = e;
            if (null != t)
                return (0, n.jsx)(E.Z, {
                    size: 160,
                    sticker: t,
                });
            if (null == l) return null;
            let { id: r, formatType: a, content: s } = l;
            return (0, n.jsx)(
                E.Z,
                {
                    assetData: s,
                    fileUri: s,
                    size: 160,
                    sticker: {
                        name: r,
                        description: "",
                        id: r,
                        pack_id: "",
                        format_type: a,
                    },
                    onError: i,
                },
                r,
            );
        })({
            sticker: L,
            previewData: M,
            onStickerError: i.useCallback(() => {
                ei({
                    message: w.intl.string(w.t["/WIYNX"]),
                    isBlocking: !0,
                });
            }, []),
        }),
        ef = ea ? w.t.alYXBF : w.t.kpcMft;
    return (0, n.jsx)("form", {
        onSubmit: em,
        className: C.form,
        children: (0, n.jsxs)(s.IX, {
            transitionState: B,
            onClose: A,
            size: "lg",
            children: [
                (0, n.jsx)(s.xBx, {
                    title: w.intl.string(w.t.yxVsBJ),
                    subtitle: w.intl.format(ef, { fileSize: (0, j.IC)(S.Ht, { useKibibytes: !0 }) }),
                }),
                (0, n.jsx)(s.fef, {
                    children: (0, n.jsxs)(s.C3N, {
                        children: [
                            (0, n.jsx)(s.gNt, {
                                label: w.intl.string(w.t.gjdiKE),
                                children: (0, n.jsx)(Z, { stickerPreview: eg }),
                            }),
                            (0, n.jsxs)(s.NIo, {
                                children: [
                                    es
                                        ? (0, n.jsx)(u.oil, {
                                              label: w.intl.string(w.t.wp36sx),
                                              required: !0,
                                              disabled: !0,
                                              value: null != (_ = null == X ? void 0 : X.filename) ? _ : "",
                                          })
                                        : (0, n.jsx)(s.gNt, {
                                              label: w.intl.string(w.t.AM3mzX),
                                              required: !0,
                                              children: (0, n.jsx)(m.Z, {
                                                  buttonText: w.intl.string(w.t.xEnDUa),
                                                  filters: k,
                                                  filename: null != (z = null == X ? void 0 : X.filename) ? z : "",
                                                  placeholder: w.intl.string(w.t.rUYLJ4),
                                                  onFileSelect: ec,
                                              }),
                                          }),
                                    (0, n.jsx)(c.Z, {
                                        className: C.formItemRowChild,
                                        guildId: U,
                                        emojiId: V,
                                        emojiName: Q,
                                        setEmojiId: H,
                                        setEmojiName: W,
                                        shouldUpdateBothEmojiFields: !0,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(u.oil, {
                                label: w.intl.string(w.t["0VRh6n"]),
                                required: !0,
                                value: q,
                                onChange: Y,
                                placeholder: w.intl.string(w.t["3fGttT"]),
                                maxLength: 30,
                            }),
                            (0, n.jsx)(u.Kx8, {
                                label: w.intl.string(w.t.uGccej),
                                helperText: w.intl.string(w.t.S6jlDj),
                                value: $,
                                onChange: ee,
                                placeholder: w.intl.string(w.t.zwR0fa),
                                maxLength: 100,
                            }),
                            null != en &&
                                (0, n.jsx)(u.Text, {
                                    className: C.formItem,
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    children: en.message,
                                }),
                        ],
                    }),
                }),
                (0, n.jsx)(s.Go$, {
                    actions: [
                        {
                            variant: "secondary",
                            text: w.intl.string(w.t.oEAioF),
                            onClick: A,
                        },
                        {
                            variant: "primary",
                            text: es ? w.intl.string(w.t.Arwnev) : w.intl.string(w.t["3UB9ad"]),
                            onSubmit: em,
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
