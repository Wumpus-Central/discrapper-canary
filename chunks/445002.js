l.d(t, { default: () => T }), l(896048), l(228524), l(747238);
var n = l(627968),
    i = l(64700),
    a = l(835245),
    r = l(830917),
    s = l(158954),
    o = l(311907),
    u = l(397927),
    d = l(508675),
    c = l(78213),
    m = l(643374),
    g = l(71393),
    f = l(287809),
    p = l(954571),
    j = l(255438),
    v = l(975571),
    b = l(515718),
    x = l(631576),
    h = l(842086),
    y = l(378058),
    A = l(148355),
    E = l(823894),
    S = l(652215),
    O = l(985018),
    w = l(799764);
let N = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    k = [
        {
            name: "Sticker file",
            extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"],
        },
    ];
function C(e, t) {
    p.default.track(S.HAw.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : "",
    });
}
let D = (e) => {
    let { stickerPreview: t } = e;
    return (0, n.jsxs)("div", {
        className: w.VH,
        children: [
            (0, n.jsx)("div", {
                className: w.rA,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)(u.XGR, {
                              size: "lg",
                              color: "currentColor",
                              "aria-label": O.intl.string(O.t.qOsjZh),
                          }),
            }),
            (0, n.jsx)("div", {
                className: w.F_,
                children:
                    null != t
                        ? t
                        : (0, n.jsx)(u.XGR, {
                              size: "lg",
                              color: "currentColor",
                              "aria-label": O.intl.string(O.t.YC5NAI),
                          }),
            }),
        ],
    });
};
async function I(e) {
    let t = await (0, b.We)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, r.h_)(l, 320, 320);
    return (0, b.bX)(n, e.name, "image/png");
}
function T(e) {
    var t, l, r, T, _, R, z, P;
    let { transitionState: L, onClose: B, guildId: U, sticker: F } = e,
        G = (0, o.bG)([d.Ay], () => ((null == F ? void 0 : F.tags) != null ? d.Ay.getCustomEmojiById(F.tags) : null)),
        K = null != (t = null == (P = f.default.getCurrentUser()) ? void 0 : P.isStaff()) && t ? E.Ny : 524288,
        [M, Y] = i.useState(null),
        [X, q] = i.useState(null != (l = null == F ? void 0 : F.name) ? l : ""),
        [V, H] = i.useState({
            file: null,
            filename: null != (r = (0, y.sL)(F)) ? r : "",
        }),
        [Z, J] = i.useState(null == G ? void 0 : G.id),
        [Q, W] = i.useState(null != (T = null == G ? void 0 : G.name) ? T : null == F ? void 0 : F.tags),
        [$, ee] = i.useState(null != (_ = null == F ? void 0 : F.description) ? _ : ""),
        [et, el] = i.useState(!1),
        [en, ei] = i.useState(null),
        ea = (0, o.bG)([g.A], () => g.A.getGuild(U)),
        er =
            (null == ea ? void 0 : ea.features.has(S.GuildFeatures.PARTNERED)) ||
            (null == ea ? void 0 : ea.features.has(S.GuildFeatures.VERIFIED)),
        es = null != F,
        eo = es || (null == V ? void 0 : V.file) != null,
        eu = 0 === $.length || ($.length >= 2 && $.length <= 100),
        ed =
            !et &&
            (null == en ? void 0 : en.isBlocking) !== !0 &&
            X.length >= 2 &&
            (null != Z ||
                null != Q ||
                ((null == F ? void 0 : F.tags) != null && (null == F ? void 0 : F.tags) !== "")) &&
            eo &&
            eu,
        ec = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(";")[0];
            if (!N.has(l))
                return void ei({
                    message: O.intl.string(O.t.B2hGAG),
                    isBlocking: !0,
                });
            let n = e;
            if ("image/jpeg" === l || "image/jpg" === l) n = await I(e);
            else if ("image/png" === l && e.size > K && !(await (0, b.LZ)(e))) {
                let t = (n = await I(e)).size > K;
                p.default.track(S.HAw.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t,
                });
            }
            if (n.size > K) {
                ei({
                    message: O.intl.formatToPlainString(O.t["3eK7Ru"], { maxSize: (0, j.up)(K, { useKibibytes: !0 }) }),
                    isBlocking: null == V.file,
                }),
                    p.default.track(S.HAw.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type,
                    });
                return;
            }
            let i = (0, y.l3)(n.type);
            if (i === h.TG.LOTTIE) {
                if (!er)
                    return void ei({
                        message: O.intl.format(O.t.RNNjy6, { articleURL: v.A.getArticleURL(S.MVz.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    Y({
                        id: (0, a.A)(),
                        formatType: i,
                        content: e.result,
                    }),
                        ei(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, b.We)(n);
                Y({
                    id: (0, a.A)(),
                    formatType: i,
                    content: e,
                }),
                    ei(null);
            }
            H({
                file: n,
                filename: n.name,
            });
        },
        em = async (e) => {
            var t, l, n, i, a, r;
            e.preventDefault();
            let s = null != (t = null != (l = null != Z ? Z : Q) ? l : null == F ? void 0 : F.tags) ? t : "";
            try {
                if ((el(!0), es))
                    await (0, x.MO)(U, null != (n = null == F ? void 0 : F.id) ? n : "", {
                        name: X,
                        tags: s,
                        description: $,
                    });
                else {
                    let e = new FormData();
                    e.append("name", X),
                        e.append("tags", s),
                        e.append("description", $),
                        (null == V ? void 0 : V.file) != null && e.append("file", V.file),
                        (r = null != (i = null == (a = V.file) ? void 0 : a.type) ? i : ""),
                        p.default.track(S.HAw.STICKER_UPLOAD_STARTED, { filetype: r }),
                        await (0, x.p9)({
                            guildId: U,
                            body: e,
                            platform: "web",
                        }),
                        C(!0),
                        (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.QR85gd), u.ToastType.SUCCESS));
                }
                B();
            } catch (e) {
                ei({
                    message: e.body.message,
                    isBlocking: !1,
                }),
                    C(!1, e.body.message);
            } finally {
                el(!1);
            }
        },
        eg = ((e) => {
            let { sticker: t, previewData: l, onStickerError: i } = e;
            if (null != t)
                return (0, n.jsx)(A.A, {
                    size: 160,
                    sticker: t,
                });
            if (null == l) return null;
            let { id: a, formatType: r, content: s } = l;
            return (0, n.jsx)(
                A.A,
                {
                    assetData: s,
                    fileUri: s,
                    size: 160,
                    sticker: {
                        name: a,
                        description: "",
                        id: a,
                        pack_id: "",
                        format_type: r,
                    },
                    onError: i,
                },
                a,
            );
        })({
            sticker: F,
            previewData: M,
            onStickerError: i.useCallback(() => {
                ei({
                    message: O.intl.string(O.t["/WIYNX"]),
                    isBlocking: !0,
                });
            }, []),
        }),
        ef = er ? O.t.alYXBF : O.t.kpcMft;
    return (0, n.jsx)("form", {
        onSubmit: em,
        className: w.Zd,
        children: (0, n.jsx)(s.Modal, {
            transitionState: L,
            onClose: B,
            title: O.intl.string(O.t.yxVsBJ),
            subtitle: O.intl.format(ef, { fileSize: (0, j.up)(524288, { useKibibytes: !0 }) }),
            actions: [
                {
                    variant: "secondary",
                    text: O.intl.string(O.t.oEAioF),
                    onClick: B,
                },
                {
                    variant: "primary",
                    text: es ? O.intl.string(O.t.Arwnev) : O.intl.string(O.t["3UB9ad"]),
                    onSubmit: em,
                    disabled: !ed,
                    type: "submit",
                },
            ],
            children: (0, n.jsxs)(s.nVY, {
                children: [
                    (0, n.jsx)(s.D0$, {
                        label: O.intl.string(O.t.gjdiKE),
                        children: (0, n.jsx)(D, { stickerPreview: eg }),
                    }),
                    es
                        ? (0, n.jsx)(u.ksK, {
                              label: O.intl.string(O.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: null != (R = null == V ? void 0 : V.filename) ? R : "",
                          })
                        : (0, n.jsx)(s.D0$, {
                              label: O.intl.string(O.t.AM3mzX),
                              required: !0,
                              children: (0, n.jsx)(m.A, {
                                  buttonText: O.intl.string(O.t.xEnDUa),
                                  filters: k,
                                  filename: null != (z = null == V ? void 0 : V.filename) ? z : "",
                                  placeholder: O.intl.string(O.t.rUYLJ4),
                                  onFileSelect: ec,
                              }),
                          }),
                    (0, n.jsx)(c.A, {
                        className: w.uR,
                        guildId: U,
                        emojiId: Z,
                        emojiName: Q,
                        setEmojiId: J,
                        setEmojiName: W,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, n.jsx)(u.ksK, {
                        label: O.intl.string(O.t["0VRh6n"]),
                        required: !0,
                        value: X,
                        onChange: q,
                        placeholder: O.intl.string(O.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, n.jsx)(u.fs1, {
                        label: O.intl.string(O.t.uGccej),
                        helperText: O.intl.string(O.t.S6jlDj),
                        value: $,
                        onChange: ee,
                        placeholder: O.intl.string(O.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != en &&
                        (0, n.jsx)(u.Text, {
                            className: w.kz,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: en.message,
                        }),
                ],
            }),
        }),
    });
}
