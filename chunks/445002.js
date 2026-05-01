i.d(t, { default: () => P });
var l = i(627968),
    a = i(64700),
    n = i(132500),
    s = i(830917),
    r = i(189213),
    g = i(270003),
    u = i(452027),
    o = i(17928),
    d = i(750943),
    c = i(691540),
    m = i(857250),
    f = i(97483),
    p = i(292666),
    j = i(260598),
    h = i(834730),
    E = i(159273),
    x = i(776568),
    b = i(643374),
    S = i(71393),
    k = i(287809),
    A = i(954571),
    y = i(255438),
    _ = i(975571),
    w = i(515718),
    C = i(631576),
    z = i(194004),
    I = i(68935),
    R = i(148355),
    v = i(823894),
    D = i(652215),
    T = i(985018),
    L = i(557155);
let N = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
    U = [{ name: "Sticker file", extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"] }];
function B(e, t) {
    A.default.track(D.HAw.STICKER_UPLOAD_COMPLETED, { successful: e, error: t ?? "" });
}
let F = (e) => {
    let { stickerPreview: t } = e;
    return (0, l.jsxs)("div", {
        className: L.VH,
        children: [
            (0, l.jsx)("div", {
                className: L.rA,
                children:
                    t ??
                    (0, l.jsx)(d.X, { size: "lg", color: "currentColor", "aria-label": T.intl.string(T.t.qOsjZh) }),
            }),
            (0, l.jsx)("div", {
                className: L.F_,
                children:
                    t ??
                    (0, l.jsx)(d.X, { size: "lg", color: "currentColor", "aria-label": T.intl.string(T.t.YC5NAI) }),
            }),
        ],
    });
};
async function G(e) {
    let t = await (0, w.We)(e),
        i = new Image();
    (i.src = t), await i.decode();
    let l = (0, s.h_)(i, 320, 320);
    return (0, w.bX)(l, e.name, "image/png");
}
function P(e) {
    let { transitionState: t, onClose: i, guildId: s, sticker: d } = e,
        P = (0, o.bG)([E.Ay], () => (d?.tags != null ? E.Ay.getCustomEmojiById(d.tags) : null)),
        K = k.default.getCurrentUser()?.isStaff() ? v.Ny : 524288,
        [O, M] = a.useState(null),
        [X, H] = a.useState(d?.name ?? ""),
        [V, Z] = a.useState({ file: null, filename: (0, I.sL)(d) ?? "" }),
        [q, Y] = a.useState(P?.id),
        [W, J] = a.useState(P?.name ?? d?.tags),
        [Q, $] = a.useState(d?.description ?? ""),
        [ee, et] = a.useState(!1),
        [ei, el] = a.useState(null),
        ea = (0, o.bG)([S.A], () => S.A.getGuild(s)),
        en = ea?.features.has(D.GuildFeatures.PARTNERED) || ea?.features.has(D.GuildFeatures.VERIFIED),
        es = null != d,
        er = es || V?.file != null,
        eg = 0 === Q.length || (Q.length >= 2 && Q.length <= 100),
        eu =
            !ee &&
            ei?.isBlocking !== !0 &&
            X.length >= 2 &&
            (null != q || null != W || (d?.tags != null && d?.tags !== "")) &&
            er &&
            eg,
        eo = async (e) => {
            if (null == e) return;
            let t = e.type?.split(";")[0];
            if (!N.has(t)) return void el({ message: T.intl.string(T.t.B2hGAG), isBlocking: !0 });
            let i = e;
            if ("image/jpeg" === t || "image/jpg" === t) i = await G(e);
            else if ("image/png" === t && e.size > K && !(await (0, w.LZ)(e))) {
                let t = (i = await G(e)).size > K;
                A.default.track(D.HAw.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: i.size,
                    resized_file_too_big: t,
                });
            }
            if (i.size > K) {
                el({
                    message: T.intl.formatToPlainString(T.t["3eK7Ru"], { maxSize: (0, y.up)(K, { useKibibytes: !0 }) }),
                    isBlocking: null == V.file,
                }),
                    A.default.track(D.HAw.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, { size: i.size, filetype: i.type });
                return;
            }
            let l = (0, I.l3)(i.type);
            if (l === z.TG.LOTTIE) {
                if (!en)
                    return void el({
                        message: T.intl.format(T.t.RNNjy6, { articleURL: _.A.getArticleURL(D.MVz.STICKERS_UPLOAD) }),
                        isBlocking: !0,
                    });
                let e = new FileReader();
                e.addEventListener("load", () => {
                    M({ id: (0, n.A)(), formatType: l, content: e.result }), el(null);
                }),
                    e.readAsText(i);
            } else {
                let e = await (0, w.We)(i);
                M({ id: (0, n.A)(), formatType: l, content: e }), el(null);
            }
            Z({ file: i, filename: i.name });
        },
        ed = async (e) => {
            e.preventDefault();
            let t = q ?? W ?? d?.tags ?? "";
            try {
                if ((et(!0), es)) await (0, C.MO)(s, d?.id ?? "", { name: X, tags: t, description: Q });
                else {
                    var l;
                    let e = new FormData();
                    e.append("name", X),
                        e.append("tags", t),
                        e.append("description", Q),
                        V?.file != null && e.append("file", V.file),
                        (l = V.file?.type ?? ""),
                        A.default.track(D.HAw.STICKER_UPLOAD_STARTED, { filetype: l }),
                        await (0, C.p9)({ guildId: s, body: e, platform: "web" }),
                        B(!0),
                        (0, c.P0)((0, m.o)(T.intl.string(T.t.QR85gd), f.Ck.SUCCESS));
                }
                i();
            } catch (e) {
                el({ message: e.body.message, isBlocking: !1 }), B(!1, e.body.message);
            } finally {
                et(!1);
            }
        },
        ec = ((e) => {
            let { sticker: t, previewData: i, onStickerError: a } = e;
            if (null != t) return (0, l.jsx)(R.A, { size: 160, sticker: t });
            if (null == i) return null;
            let { id: n, formatType: s, content: r } = i;
            return (0, l.jsx)(
                R.A,
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
            previewData: O,
            onStickerError: a.useCallback(() => {
                el({ message: T.intl.string(T.t["/WIYNX"]), isBlocking: !0 });
            }, []),
        }),
        em = en ? T.t.alYXBF : T.t.kpcMft;
    return (0, l.jsx)("form", {
        onSubmit: ed,
        className: L.Zd,
        children: (0, l.jsx)(r.Modal, {
            transitionState: t,
            onClose: i,
            title: T.intl.string(T.t.yxVsBJ),
            subtitle: T.intl.format(em, { fileSize: (0, y.up)(524288, { useKibibytes: !0 }) }),
            actions: [
                { variant: "secondary", text: T.intl.string(T.t.oEAioF), onClick: i },
                {
                    variant: "primary",
                    text: es ? T.intl.string(T.t.Arwnev) : T.intl.string(T.t["3UB9ad"]),
                    onSubmit: ed,
                    disabled: !eu,
                    type: "submit",
                },
            ],
            children: (0, l.jsxs)(g.n, {
                children: [
                    (0, l.jsx)(u.D, {
                        label: T.intl.string(T.t.gjdiKE),
                        children: (0, l.jsx)(F, { stickerPreview: ec }),
                    }),
                    es
                        ? (0, l.jsx)(p.k, {
                              label: T.intl.string(T.t.wp36sx),
                              required: !0,
                              disabled: !0,
                              value: V?.filename ?? "",
                          })
                        : (0, l.jsx)(u.D, {
                              label: T.intl.string(T.t.AM3mzX),
                              required: !0,
                              children: (0, l.jsx)(b.A, {
                                  buttonText: T.intl.string(T.t.xEnDUa),
                                  filters: U,
                                  filename: V?.filename ?? "",
                                  placeholder: T.intl.string(T.t.rUYLJ4),
                                  onFileSelect: eo,
                              }),
                          }),
                    (0, l.jsx)(x.A, {
                        className: L.uR,
                        guildId: s,
                        emojiId: q,
                        emojiName: W,
                        setEmojiId: Y,
                        setEmojiName: J,
                        shouldUpdateBothEmojiFields: !0,
                    }),
                    (0, l.jsx)(p.k, {
                        label: T.intl.string(T.t["0VRh6n"]),
                        required: !0,
                        value: X,
                        onChange: H,
                        placeholder: T.intl.string(T.t["3fGttT"]),
                        maxLength: 30,
                    }),
                    (0, l.jsx)(j.f, {
                        label: T.intl.string(T.t.uGccej),
                        helperText: T.intl.string(T.t.S6jlDj),
                        value: Q,
                        onChange: $,
                        placeholder: T.intl.string(T.t.zwR0fa),
                        maxLength: 100,
                    }),
                    null != ei &&
                        (0, l.jsx)(h.E, {
                            className: L.kz,
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: ei.message,
                        }),
                ],
            }),
        }),
    });
}
