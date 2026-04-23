a.d(t, { default: () => W });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    s = a.n(r),
    i = a(311907),
    c = a(990078),
    o = a(189213),
    u = a(834730),
    d = a(403581),
    A = a(187322),
    h = a(750943),
    f = a(140735),
    g = a(939249),
    x = a(391242),
    m = a(638495),
    p = a(192308),
    C = a(793574),
    E = a(688810),
    N = a(753838),
    j = a(946274),
    T = a(702211),
    R = a(699576),
    y = a(392107),
    v = a(778576),
    b = a(45837),
    _ = a(71393),
    F = a(967198),
    L = a(287809),
    S = a(954571),
    H = a(473145),
    w = a(927578),
    I = a(854896),
    M = a(2553),
    k = a(652215),
    U = a(339984),
    O = a(693591),
    D = a(985018),
    V = a(294891);
let P = [
    { gif: a(203736), png: a(775788) },
    { gif: a(640237), png: a(689006) },
    { gif: a(964805), png: a(533798) },
    { gif: a(322821), png: a(891814) },
];
function G(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, n.jsx)("div", {
        className: V.p8,
        children: P.map((e) =>
            (0, n.jsx)("div", { className: V.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function z(e) {
    let { guildFeature: t, guild: a } = e;
    if (null == t || null == a) return;
    let n = (0, H.Ys)(t),
        l = a.features.has(t);
    if (null == n) return;
    let r = (0, H.gb)(n);
    return l
        ? D.intl.formatToPlainString(D.t.u3L3TX, { levelName: r })
        : D.intl.formatToPlainString(D.t["r/v25U"], { levelName: r });
}
function B(e) {
    let { guildFeature: t, guild: a } = e;
    return (0, n.jsx)("div", {
        className: V.x9,
        children: (0, n.jsx)(N.A, { guildFeature: t, guild: a, hideTooltip: !0 }),
    });
}
function J(e) {
    let { icon: t, label: a, guildFeature: l, guild: r, shouldShowPremiumIcon: i } = e,
        o = null != r && null != l;
    return (0, n.jsxs)("div", {
        className: s()(V.q3, { [V.j5]: o }),
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("div", {
                className: V.Mn,
                children: [
                    t,
                    (0, n.jsxs)(u.E, {
                        variant: "text-sm/semibold",
                        className: s()(V.xo, { [V.Fy]: i }),
                        children: [
                            i &&
                                (0, n.jsx)(c.m, {
                                    asContainer: !0,
                                    text: D.intl.string(D.t["5AFxuK"]),
                                    children: (0, n.jsx)(d.t, { size: "xs", color: "currentColor", className: V.T$ }),
                                }),
                            a,
                        ],
                    }),
                ],
            }),
            o && (0, n.jsx)(B, { guild: r, guildFeature: l }),
        ],
    });
}
function q(e) {
    let {
            label: t,
            uploadType: a,
            guild: l,
            maxFileSizeBytes: r,
            filters: i,
            handleOpenImageEditingModal: c,
            handleFileSizeError: o,
        } = e,
        u = (0, I.CK)(a),
        d = (0, I.VS)(a, { isGIF: !1 }),
        g = z({ guildFeature: d, guild: l });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(A.vN, {
                within: !0,
                children: (0, n.jsxs)("div", {
                    className: s()(V.uK, V.kU),
                    children: [
                        (0, n.jsx)(J, {
                            icon: (0, n.jsx)(h.X, { size: "md", color: "currentColor" }),
                            label: t,
                            guildFeature: d,
                            guild: l,
                            shouldShowPremiumIcon: u,
                        }),
                        (0, n.jsx)(j.Ay, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: r,
                            onFileSizeError: o,
                            filters: i,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != g && (0, n.jsx)(f.A, { children: g }),
        ],
    });
}
function K(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: r, onMouseEnter: s, onMouseLeave: i } = (0, b.A)(),
        c = (0, I.xc)(t),
        o = (0, I.VS)(t, { isGIF: !0 }),
        u = z({ guildFeature: o, guild: a });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(g.D, {
                className: V.uK,
                onClick: l,
                "aria-label": D.intl.string(D.t["xsC+/y"]),
                onMouseEnter: s,
                onMouseLeave: i,
                children: [
                    (0, n.jsx)(G, { shouldAnimate: r }),
                    (0, n.jsx)(J, {
                        icon: (0, n.jsx)(x.O, { size: "md", color: "currentColor" }),
                        label: D.intl.string(D.t["xsC+/y"]),
                        guildFeature: o,
                        guild: a,
                        shouldShowPremiumIcon: c,
                    }),
                ],
            }),
            null != u && (0, n.jsx)(f.A, { children: u }),
        ],
    });
}
function W(e) {
    let {
            transitionState: t,
            onClose: r,
            onComplete: s,
            uploadType: c,
            maxFileSizeBytes: d,
            showUpsellHeader: A,
            filters: h,
            analyticsLocation: f,
            analyticsLocations: g = [],
            imageSpecifications: x,
            modalTitle: N = D.intl.string(D.t.DToW4e),
            uploadOptionTitle: j = D.intl.string(D.t["MsUY/S"]),
            allowRecentAvatarsSelection: b = !0,
        } = e,
        H = (0, i.bG)([L.default], () => L.default.getCurrentUser()),
        I = (0, i.bG)([F.A], () => F.A.getGuildId()),
        P = (0, i.bG)([_.A], () => _.A.getGuild(I)),
        G = (0, m.k)(),
        z = c === U.HL.AVATAR || c === U.HL.BANNER,
        B = !w.Ay.canUseAnimatedAvatar(H) && c === U.HL.AVATAR,
        J = (0, T.b)(!z),
        { analyticsLocations: W } = (0, E.Ay)(g, C.A.SELECT_IMAGE_MODAL),
        X = l.useCallback(
            (e) => {
                let { assetOrigin: t = y.E.NEW_ASSET, imageUri: a, file: n, originalAsset: l, isFromTenor: i = !1 } = e;
                r(), s({ assetOrigin: t, imageUri: a, file: n, originalAsset: l, isFromTenor: i });
            },
            [r, s],
        ),
        Z = l.useCallback(
            (e, t) => {
                if (t.type === O.a.MP4) return X({ imageUri: e, file: t });
                (0, p.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([a.e("29259"), a.e("74571"), a.e("89973")]).then(
                            a.bind(a, 142630),
                        );
                        return (a) =>
                            (0, n.jsx)(l, {
                                imageUri: e,
                                file: t,
                                onCrop: X,
                                uploadType: c,
                                showUpsellHeader: A,
                                analyticsPage: f?.page,
                                ...a,
                            });
                    },
                    { contextKey: G },
                );
            },
            [f?.page, G, X, A, c],
        ),
        $ = l.useCallback(() => {
            (0, M.A)(d);
        }, [d]),
        Y = l.useCallback(() => {
            (0, p.openModalLazy)(
                async () => {
                    let { default: e } = await a.e("87916").then(a.bind(a, 682503));
                    return (t) =>
                        (0, n.jsx)(e, {
                            uploadType: c,
                            onComplete: (e) => {
                                let { imageUri: t, file: a } = e;
                                return X({ imageUri: t, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: A,
                            analyticsPage: f?.page,
                            ...t,
                        });
                },
                { contextKey: G },
            );
        }, [f?.page, G, X, A, c]);
    l.useEffect(() => {
        B &&
            S.default.track(k.HAw.PREMIUM_UPSELL_VIEWED, {
                type: k.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: W,
            }),
            S.default.track(k.HAw.OPEN_MODAL, {
                type: k.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: f,
                location_stack: W,
                upload_type: c,
            });
    }, [B, f, W, c]);
    let Q = A && J,
        ee = b && c === U.HL.AVATAR;
    return (0, n.jsx)(o.Modal, {
        transitionState: t,
        onClose: r,
        size: "md",
        title: N,
        actions: [],
        children: (0, n.jsxs)("div", {
            className: V.jE,
            children: [
                (0, n.jsxs)("div", {
                    className: V.pd,
                    children: [
                        (0, n.jsxs)("ul", {
                            className: V.f9,
                            "aria-label": D.intl.string(D.t.iBnqtQ),
                            children: [
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(q, {
                                        label: j,
                                        uploadType: c,
                                        guild: P,
                                        handleOpenImageEditingModal: Z,
                                        maxFileSizeBytes: d,
                                        filters: h,
                                        handleFileSizeError: $,
                                    }),
                                }),
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(K, { uploadType: c, guild: P, handleOpenGIFPickerModal: Y }),
                                }),
                            ],
                        }),
                        null != x
                            ? (0, n.jsx)(u.E, {
                                  className: V.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: x,
                              })
                            : null,
                    ],
                }),
                ee && (0, n.jsx)(v.A, { onComplete: X }),
                Q && (0, n.jsx)(R.A, { uploadType: c, showUpsell: !0, position: "inline", className: V.Lu }),
            ],
        }),
    });
}
