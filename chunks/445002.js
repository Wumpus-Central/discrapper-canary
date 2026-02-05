i.d(t, { default: () => D });
var l = i(627968),
    n = i(64700),
    a = i(835245),
    s = i(830917),
    r = i(158954),
    o = i(311907),
    u = i(397927),
    d = i(508675),
    m = i(78213),
    c = i(643374),
    g = i(71393),
    f = i(287809),
    p = i(954571),
    j = i(255438),
    x = i(975571),
    h = i(515718),
    A = i(631576),
    E = i(842086),
    b = i(378058),
    y = i(148355),
    S = i(823894),
    N = i(652215),
    v = i(985018),
    C = i(799764);
let k = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    I = [{ name: "Sticker file", extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"] }];
function T(e, t) {
    p.default.track(N.HAw.STICKER_UPLOAD_COMPLETED, { successful: e, error: t ?? "" });
}
let _ = (e) => {
    let { stickerPreview: t } = e;
    return (0, l.jsxs)("div", {
        className: C.VH,
        children: [
            (0, l.jsx)("div", {
                className: C.rA,
                children:
                    t ??
                    (0, l.jsx)(u.XGR, { size: "lg", color: "currentColor", "aria-label": v.intl.string(v.t.qOsjZh) }),
            }),
            (0, l.jsx)("div", {
                className: C.F_,
                children:
                    t ??
                    (0, l.jsx)(u.XGR, { size: "lg", color: "currentColor", "aria-label": v.intl.string(v.t.YC5NAI) }),
            }),
        ],
    });
};
async function w(e) {
    let t = await (0, h.We)(e),
        i = new Image();
    (i.src = t), await i.decode();
    let l = (0, s.h_)(i, 320, 320);
    return (0, h.bX)(l, e.name, "image/png");
}
function D(e) {
    let { transitionState: t, onClose: i, guildId: s, sticker: D } = e,
        R = (0, o.bG)([d.Ay], () => (D?.tags != null ? d.Ay.getCustomEmojiById(D.tags) : null)),
        z = f.default.getCurrentUser()?.isStaff() ? S.Ny : 524288,
        [L, B] = n.useState(null),
        [O, U] = n.useState(D?.name ?? ""),
        [F, G] = n.useState({ file: null, filename: (0, b.sL)(D) ?? "" }),
        [K, P] = n.useState(R?.id),
        [M, Y] = n.useState(R?.name ?? D?.tags),
        [X, q] = n.useState(D?.description ?? ""),
        [V, H] = n.useState(!1),
        [Z, J] = n.useState(null),
        $ = (0, o.bG)([g.A], () => g.A.getGuild(s)),
        Q = $?.features.has(N.GuildFeatures.PARTNERED) || $?.features.has(N.GuildFeatures.VERIFIED),
        W = null != D,
        ee = W || F?.file != null,
        et = 0 === X.length || (X.length >= 2 && X.length <= 100),
        ei =
            !V &&
            Z?.isBlocking !== !0 &&
            O.length >= 2 &&
            (null != K || null != M || (D?.tags != null && D?.tags !== "")) &&
            ee &&
            et,
        el = async (e) => {
            if (null == e) return;
            let t = e.type?.split(";")[0];
            if (!k.has(t)) return void J({ message: v.intl.string(v.t.B2hGAG), isBlocking: !0 });
            let i = e;
            if ("image/jpeg" === t || "image/jpg" === t) i = await w(e);
            else if ("image/png" === t && e.size > z && !(await (0, h.LZ)(e))) {
                let t = (i = await w(e)).size > z;
                p.default.track(N.HAw.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: i.size,
                    resized_file_too_big: t,
                });
            }
            if (i.size > z) {
                J({
                    message: v.intl.formatToPlainString(v.t["3eK7Ru"], { maxSize: (0, j.up)(z, { useKibibytes: !0 }) }),
                    isBlocking: null == F.file,
                }),
                    p.default.track(N.HAw.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { size: i.size, filetype: i.type });
                return;
            }
            let l = (0, b.l3)(i.type);
            if (l === E.TG.LOTTIE) {
                if (!Q)
                    return void J({
                        message: v.intl.format(v.t.RNNjy6, { articleURL: x.A.getArticleURL(N.MVz.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    B({ id: (0, a.A)(), formatType: l, content: e.result }), J(null);
                }),
                    e.readAsText(i);
            } else {
                let e = await (0, h.We)(i);
                B({ id: (0, a.A)(), formatType: l, content: e }), J(null);
            }
            G({ file: i, filename: i.name });
        },
        en = async (e) => {
            e.preventDefault();
            let t = K ?? M ?? D?.tags ?? "";
            try {
                if ((H(!0), W)) await (0, A.MO)(s, D?.id ?? "", { name: O, tags: t, description: X });
                else {
                    var l;
                    let e = new FormData();
                    e.append("name", O),
                        e.append("tags", t),
                        e.append("description", X),
                        F?.file != null && e.append("file", F.file),
                        (l = F.file?.type ?? ""),
                        p.default.track(N.HAw.STICKER_UPLOAD_STARTED, { filetype: l }),
                        await (0, A.p9)({ guildId: s, body: e, platform: "web" }),
                        T(!0),
                        (0, u.showToast)((0, u.createToast)(v.intl.string(v.t.QR85gd), u.ToastType.SUCCESS));
                }
                i();
            } catch (e) {
                J({ message: e.body.message, isBlocking: !1 }), T(!1, e.body.message);
            } finally {
                H(!1);
            }
        },
        ea = ((e) => {
            let { sticker: t, previewData: i, onStickerError: n } = e;
            if (null != t) return (0, l.jsx)(y.A, { size: 160, sticker: t });
            if (null == i) return null;
            let { id: a, formatType: s, content: r } = i;
            return (0, l.jsx)(
                y.A,
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
            sticker: D,
            previewData: L,
            onStickerError: n.useCallback(() => {
                J({ message: v.intl.string(v.t["/WIYNX"]), isBlocking: !0 });
            }, []),
        }),
        es = Q ? v.t.alYXBF : v.t.kpcMft;
    return (0, l.jsx)("form", {
        onSubmit: en,
        className: C.Zd,
        children: (0, l.jsx)(r.Modal, {
            transitionState: t,
            onClose: i,
            title: v.intl.string(v.t.yxVsBJ),
            subtitle: v.intl.format(es, { fileSize: (0, j.up)(524288, { useKibibytes: !0 }) }),
            actions: [
                { variant: "secondary", text: v.intl.string(v.t.oEAioF), onClick: i },
                {
                    variant: "primary",
                    text: W ? v.intl.string(v.t.Arwnev) : v.intl.string(v.t["3UB9ad"]),
                    onSubmit: en,
                    disabled: !ei,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(r.nVY, {
                children: [
                    (0, l.jsx)(r.D0$, {
                        label: v.intl.string(v.t.gjdiKE),
                        children: (0, l.jsx)(_, { stickerPreview: ea }),
                    }),
                    W
                        ? (0, l.jsx)(u.ksK, {
                              label: v.intl.string(v.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: F?.filename ?? "",
                          })
                        : (0, l.jsx)(r.D0$, {
                              label: v.intl.string(v.t.AM3mzX),
                              required: !0,
                              children: (0, l.jsx)(c.A, {
                                  buttonText: v.intl.string(v.t.xEnDUa),
                                  filters: I,
                                  filename: F?.filename ?? "",
                                  placeholder: v.intl.string(v.t.rUYLJ4),
                                  onFileSelect: el,
                              }),
                          }),
                    (0, l.jsx)(m.A, {
                        className: C.uR,
                        guildId: s,
                        emojiId: K,
                        emojiName: M,
                        setEmojiId: P,
                        setEmojiName: Y,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, l.jsx)(u.ksK, {
                        label: v.intl.string(v.t["0VRh6n"]),
                        required: !0,
                        value: O,
                        onChange: U,
                        placeholder: v.intl.string(v.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, l.jsx)(u.fs1, {
                        label: v.intl.string(v.t.uGccej),
                        helperText: v.intl.string(v.t.S6jlDj),
                        value: X,
                        onChange: q,
                        placeholder: v.intl.string(v.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != Z &&
                        (0, l.jsx)(u.Text, {
                            className: C.kz,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: Z.message,
                        }),
                ],
            }),
        }),
    });
}
