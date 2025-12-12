l.d(t, { default: () => Z }), l(388685), l(953529), l(35282);
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
    w = l(981631),
    C = l(388032),
    I = l(71638);
let N = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    O = [
        {
            name: "Sticker file",
            extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"],
        },
    ];
function k(e, t) {
    p.default.track(w.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : "",
    });
}
let P = (e) => {
    let { stickerPreview: t } = e;
    return (0, n.jsxs)("div", {
        className: I.preview,
        children: [
            (0, n.jsx)("div", {
                className: I.previewDark,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)(u.FmF, {
                              size: "lg",
                              color: "currentColor",
                              "aria-label": C.intl.string(C.t.qOsjZh),
                          }),
            }),
            (0, n.jsx)("div", {
                className: I.previewLight,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)(u.FmF, {
                              size: "lg",
                              color: "currentColor",
                              "aria-label": C.intl.string(C.t.YC5NAI),
                          }),
            }),
        ],
    });
};
async function D(e) {
    let t = await (0, x.fD)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, a.Ae)(l, 320, 320);
    return (0, x.Bo)(n, e.name, "image/png");
}
function Z(e) {
    var t, l, a, Z, T, R, _, z;
    let { transitionState: B, onClose: A, guildId: U, sticker: L } = e,
        F = (0, o.e7)([d.ZP], () => ((null == L ? void 0 : L.tags) != null ? d.ZP.getCustomEmojiById(L.tags) : null)),
        K = null != (l = null == (t = f.default.getCurrentUser()) ? void 0 : t.isStaff()) && l ? S.OC : S.Ht,
        [M, G] = i.useState(null),
        [q, Y] = i.useState(null != (a = null == L ? void 0 : L.name) ? a : ""),
        [J, V] = i.useState({
            file: null,
            filename: null != (Z = (0, y._V)(L)) ? Z : "",
        }),
        [X, H] = i.useState(null == F ? void 0 : F.id),
        [Q, W] = i.useState(null != (T = null == F ? void 0 : F.name) ? T : null == L ? void 0 : L.tags),
        [$, ee] = i.useState(null != (R = null == L ? void 0 : L.description) ? R : ""),
        [et, el] = i.useState(!1),
        [en, ei] = i.useState(null),
        er = (0, o.e7)([g.Z], () => g.Z.getGuild(U)),
        ea =
            (null == er ? void 0 : er.features.has(w.GuildFeatures.PARTNERED)) ||
            (null == er ? void 0 : er.features.has(w.GuildFeatures.VERIFIED)),
        es = null != L,
        eo = es || (null == J ? void 0 : J.file) != null,
        eu = 0 === $.length || ($.length >= 2 && $.length <= 100),
        ed =
            !et &&
            (null == en ? void 0 : en.isBlocking) !== !0 &&
            q.length >= 2 &&
            (null != X ||
                null != Q ||
                ((null == L ? void 0 : L.tags) != null && (null == L ? void 0 : L.tags) !== "")) &&
            eo &&
            eu,
        ec = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(";")[0];
            if (!N.has(l))
                return void ei({
                    message: C.intl.string(C.t.B2hGAG),
                    isBlocking: !0,
                });
            let n = e;
            if ("image/jpeg" === l || "image/jpg" === l) n = await D(e);
            else if ("image/png" === l && e.size > K && !(await (0, x.c0)(e))) {
                let t = (n = await D(e)).size > K;
                p.default.track(w.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t,
                });
            }
            if (n.size > K) {
                ei({
                    message: C.intl.formatToPlainString(C.t["3eK7Ru"], { maxSize: (0, j.IC)(K, { useKibibytes: !0 }) }),
                    isBlocking: null == J.file,
                }),
                    p.default.track(w.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type,
                    });
                return;
            }
            let i = (0, y.Zv)(n.type);
            if (i === b.u3.LOTTIE) {
                if (!ea)
                    return void ei({
                        message: C.intl.format(C.t.RNNjy6, { articleURL: v.Z.getArticleURL(w.BhN.STICKERS_UPLOAD) }),
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
            V({
                file: n,
                filename: n.name,
            });
        },
        em = async (e) => {
            var t, l, n, i, r, a;
            e.preventDefault();
            let s = null != (l = null != (t = null != X ? X : Q) ? t : null == L ? void 0 : L.tags) ? l : "";
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
                        (null == J ? void 0 : J.file) != null && e.append("file", J.file),
                        (a = null != (r = null == (i = J.file) ? void 0 : i.type) ? r : ""),
                        p.default.track(w.rMx.STICKER_UPLOAD_STARTED, { filetype: a }),
                        await (0, h.lY)({
                            guildId: U,
                            body: e,
                            platform: "web",
                        }),
                        k(!0),
                        (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.QR85gd), u.ToastType.SUCCESS));
                }
                A();
            } catch (e) {
                ei({
                    message: e.body.message,
                    isBlocking: !1,
                }),
                    k(!1, e.body.message);
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
                    message: C.intl.string(C.t["/WIYNX"]),
                    isBlocking: !0,
                });
            }, []),
        }),
        ef = ea ? C.t.alYXBF : C.t.kpcMft;
    return (0, n.jsx)("form", {
        onSubmit: em,
        className: I.form,
        children: (0, n.jsx)(s.Modal, {
            transitionState: B,
            onClose: A,
            title: C.intl.string(C.t.yxVsBJ),
            subtitle: C.intl.format(ef, { fileSize: (0, j.IC)(S.Ht, { useKibibytes: !0 }) }),
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t.oEAioF),
                    onClick: A,
                },
                {
                    variant: "primary",
                    text: es ? C.intl.string(C.t.Arwnev) : C.intl.string(C.t["3UB9ad"]),
                    onSubmit: em,
                    disabled: !ed,
                    type: "submit",
                },
            ],
            children: (0, n.jsxs)(s.C3N, {
                children: [
                    (0, n.jsx)(s.gNt, {
                        label: C.intl.string(C.t.gjdiKE),
                        children: (0, n.jsx)(P, { stickerPreview: eg }),
                    }),
                    es
                        ? (0, n.jsx)(u.oil, {
                              label: C.intl.string(C.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: null != (_ = null == J ? void 0 : J.filename) ? _ : "",
                          })
                        : (0, n.jsx)(s.gNt, {
                              label: C.intl.string(C.t.AM3mzX),
                              required: !0,
                              children: (0, n.jsx)(m.Z, {
                                  buttonText: C.intl.string(C.t.xEnDUa),
                                  filters: O,
                                  filename: null != (z = null == J ? void 0 : J.filename) ? z : "",
                                  placeholder: C.intl.string(C.t.rUYLJ4),
                                  onFileSelect: ec,
                              }),
                          }),
                    (0, n.jsx)(c.Z, {
                        className: I.formItemRowChild,
                        guildId: U,
                        emojiId: X,
                        emojiName: Q,
                        setEmojiId: H,
                        setEmojiName: W,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, n.jsx)(u.oil, {
                        label: C.intl.string(C.t["0VRh6n"]),
                        required: !0,
                        value: q,
                        onChange: Y,
                        placeholder: C.intl.string(C.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, n.jsx)(u.Kx8, {
                        label: C.intl.string(C.t.uGccej),
                        helperText: C.intl.string(C.t.S6jlDj),
                        value: $,
                        onChange: ee,
                        placeholder: C.intl.string(C.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != en &&
                        (0, n.jsx)(u.Text, {
                            className: I.formItem,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: en.message,
                        }),
                ],
            }),
        }),
    });
}
