n.d(t, { default: () => P });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(311907),
    c = n(990078),
    o = n(732955),
    u = n(397927),
    A = n(793574),
    d = n(688810),
    g = n(753838),
    h = n(946274),
    f = n(702211),
    C = n(699576),
    m = n(392107),
    x = n(778576),
    E = n(45837),
    p = n(71393),
    T = n(967198),
    R = n(287809),
    N = n(954571),
    L = n(473145),
    y = n(927578),
    _ = n(854896),
    j = n(2553),
    v = n(652215),
    S = n(339984),
    b = n(693591),
    F = n(985018),
    H = n(341078);
let U = [
    { gif: n(203736), png: n(775788) },
    { gif: n(640237), png: n(689006) },
    { gif: n(964805), png: n(533798) },
    { gif: n(322821), png: n(891814) },
];
function M(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, a.jsx)("div", {
        className: H.p8,
        children: U.map((e) =>
            (0, a.jsx)("div", { className: H.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function I(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let a = (0, L.Ys)(t),
        l = n.features.has(t);
    if (null == a) return;
    let i = (0, L.gb)(a);
    return l
        ? F.intl.formatToPlainString(F.t.u3L3TX, { levelName: i })
        : F.intl.formatToPlainString(F.t["r/v25U"], { levelName: i });
}
function w(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, a.jsx)("div", {
        className: H.x9,
        children: (0, a.jsx)(g.A, { guildFeature: t, guild: n, hideTooltip: !0 }),
    });
}
function O(e) {
    let { icon: t, label: n, guildFeature: l, guild: i, shouldShowPremiumIcon: r } = e,
        o = null != i && null != l;
    return (0, a.jsxs)("div", {
        className: s()(H.q3, { [H.j5]: o }),
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: H.Mn,
                children: [
                    t,
                    (0, a.jsxs)(u.Text, {
                        variant: "text-sm/semibold",
                        className: s()(H.xo, { [H.Fy]: r }),
                        children: [
                            r &&
                                (0, a.jsx)(c.m, {
                                    asContainer: !0,
                                    text: F.intl.string(F.t["5AFxuK"]),
                                    children: (0, a.jsx)(u.tvc, { size: "xs", color: "currentColor", className: H.T$ }),
                                }),
                            n,
                        ],
                    }),
                ],
            }),
            o && (0, a.jsx)(w, { guild: i, guildFeature: l }),
        ],
    });
}
function V(e) {
    let {
            label: t,
            uploadType: n,
            guild: l,
            maxFileSizeBytes: i,
            filters: r,
            handleOpenImageEditingModal: c,
            handleFileSizeError: o,
        } = e,
        A = (0, _.CK)(n),
        d = (0, _.VS)(n, { isGIF: !1 }),
        g = I({ guildFeature: d, guild: l });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.vN3, {
                within: !0,
                children: (0, a.jsxs)("div", {
                    className: s()(H.uK, H.kU),
                    children: [
                        (0, a.jsx)(O, {
                            icon: (0, a.jsx)(u.XGR, { size: "md", color: "currentColor" }),
                            label: t,
                            guildFeature: d,
                            guild: l,
                            shouldShowPremiumIcon: A,
                        }),
                        (0, a.jsx)(h.Ay, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: i,
                            onFileSizeError: o,
                            filters: r,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != g && (0, a.jsx)(u.AC4, { children: g }),
        ],
    });
}
function D(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: i, onMouseEnter: s, onMouseLeave: r } = (0, E.A)(),
        c = (0, _.xc)(t),
        o = (0, _.VS)(t, { isGIF: !0 }),
        A = I({ guildFeature: o, guild: n });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(u.DUT, {
                className: H.uK,
                onClick: l,
                "aria-label": F.intl.string(F.t["xsC+/y"]),
                onMouseEnter: s,
                onMouseLeave: r,
                children: [
                    (0, a.jsx)(M, { shouldAnimate: i }),
                    (0, a.jsx)(O, {
                        icon: (0, a.jsx)(u.Osp, { size: "md", color: "currentColor" }),
                        label: F.intl.string(F.t["xsC+/y"]),
                        guildFeature: o,
                        guild: n,
                        shouldShowPremiumIcon: c,
                    }),
                ],
            }),
            null != A && (0, a.jsx)(u.AC4, { children: A }),
        ],
    });
}
function P(e) {
    let {
            transitionState: t,
            onClose: i,
            onComplete: s,
            uploadType: c,
            maxFileSizeBytes: g,
            showUpsellHeader: h,
            filters: E,
            analyticsLocation: L,
            analyticsLocations: _ = [],
            imageSpecifications: U,
            modalTitle: M = F.intl.string(F.t.DToW4e),
            uploadOptionTitle: I = F.intl.string(F.t["MsUY/S"]),
            allowRecentAvatarsSelection: w = !0,
        } = e,
        O = (0, r.bG)([R.default], () => R.default.getCurrentUser()),
        P = (0, r.bG)([T.A], () => T.A.getGuildId()),
        B = (0, r.bG)([p.A], () => p.A.getGuild(P)),
        k = (0, u.k34)(),
        G = c === S.HL.AVATAR || c === S.HL.BANNER,
        z = !y.Ay.canUseAnimatedAvatar(O) && c === S.HL.AVATAR,
        J = (0, f.b)(!G),
        { analyticsLocations: X, newestAnalyticsLocation: q } = (0, d.Ay)(_, A.A.SELECT_IMAGE_MODAL),
        K = l.useCallback(
            (e) => {
                let { assetOrigin: t = m.E.NEW_ASSET, imageUri: n, file: a, originalAsset: l, isFromTenor: r = !1 } = e;
                i(), s({ assetOrigin: t, imageUri: n, file: a, originalAsset: l, isFromTenor: r });
            },
            [i, s],
        ),
        Z = l.useCallback(
            (e, t) => {
                if (t.type === b.a.MP4) return K({ imageUri: e, file: t });
                (0, u.mMO)(
                    async () => {
                        let { default: l } = await Promise.all([n.e("35929"), n.e("74571"), n.e("1208")]).then(
                            n.bind(n, 142630),
                        );
                        return (n) =>
                            (0, a.jsx)(l, {
                                imageUri: e,
                                file: t,
                                onCrop: K,
                                uploadType: c,
                                showUpsellHeader: h,
                                analyticsPage: L?.page,
                                ...n,
                            });
                    },
                    { contextKey: k },
                );
            },
            [L?.page, k, K, h, c],
        ),
        W = l.useCallback(() => {
            (0, j.A)(g);
        }, [g]),
        $ = l.useCallback(() => {
            (0, u.mMO)(
                async () => {
                    let { default: e } = await n.e("87916").then(n.bind(n, 682503));
                    return (t) =>
                        (0, a.jsx)(e, {
                            uploadType: c,
                            onComplete: (e) => {
                                let { imageUri: t, file: n } = e;
                                return K({ imageUri: t, file: n, isFromTenor: !0 });
                            },
                            showUpsellHeader: h,
                            analyticsPage: L?.page,
                            ...t,
                        });
                },
                { contextKey: k },
            );
        }, [L?.page, k, K, h, c]);
    l.useEffect(() => {
        z &&
            N.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, {
                type: v.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: X,
            }),
            N.default.track(v.HAw.OPEN_MODAL, {
                type: v.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: L,
                location_stack: X,
                upload_type: c,
            });
    }, [z, L, X, c]);
    let Q = h && J,
        Y = w && c === S.HL.AVATAR;
    return (0, a.jsx)(o.aFV, {
        transitionState: t,
        onClose: i,
        size: "md",
        title: M,
        actions: [],
        children: (0, a.jsxs)("div", {
            className: H.jE,
            children: [
                (0, a.jsxs)("div", {
                    className: H.pd,
                    children: [
                        (0, a.jsxs)("ul", {
                            className: H.f9,
                            "aria-label": F.intl.string(F.t.iBnqtQ),
                            children: [
                                (0, a.jsx)("li", {
                                    children: (0, a.jsx)(V, {
                                        label: I,
                                        uploadType: c,
                                        guild: B,
                                        handleOpenImageEditingModal: Z,
                                        maxFileSizeBytes: g,
                                        filters: E,
                                        handleFileSizeError: W,
                                    }),
                                }),
                                (0, a.jsx)("li", {
                                    children: (0, a.jsx)(D, { uploadType: c, guild: B, handleOpenGIFPickerModal: $ }),
                                }),
                            ],
                        }),
                        null != U
                            ? (0, a.jsx)(u.Text, {
                                  className: H.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: U,
                              })
                            : null,
                    ],
                }),
                Y && (0, a.jsx)(x.A, { onComplete: K }),
                Q &&
                    (0, a.jsx)(C.A, {
                        uploadType: c,
                        analyticsSource: q,
                        showUpsell: !0,
                        position: "inline",
                        className: H.Lu,
                    }),
            ],
        }),
    });
}
