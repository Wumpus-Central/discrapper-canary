a.d(t, { default: () => P });
var n = a(627968),
    s = a(64700),
    l = a(503698),
    r = a.n(l),
    i = a(311907),
    c = a(990078),
    u = a(732955),
    o = a(397927),
    d = a(793574),
    A = a(688810),
    h = a(753838),
    f = a(946274),
    g = a(702211),
    x = a(699576),
    m = a(392107),
    C = a(778576),
    p = a(45837),
    E = a(71393),
    T = a(967198),
    j = a(287809),
    N = a(954571),
    R = a(473145),
    v = a(927578),
    y = a(854896),
    _ = a(2553),
    F = a(652215),
    b = a(339984),
    S = a(693591),
    L = a(985018),
    w = a(341078);
let I = [
    { gif: a(981355), png: a(775788) },
    { gif: a(640237), png: a(689006) },
    { gif: a(964805), png: a(533798) },
    { gif: a(322821), png: a(891814) },
];
function H(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, n.jsx)("div", {
        className: w.p8,
        children: I.map((e) =>
            (0, n.jsx)("div", { className: w.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function M(e) {
    let { guildFeature: t, guild: a } = e;
    if (null == t || null == a) return;
    let n = (0, R.Ys)(t),
        s = a.features.has(t);
    if (null == n) return;
    let l = (0, R.gb)(n);
    return s
        ? L.intl.formatToPlainString(L.t.u3L3TX, { levelName: l })
        : L.intl.formatToPlainString(L.t["r/v25U"], { levelName: l });
}
function U(e) {
    let { guildFeature: t, guild: a } = e;
    return (0, n.jsx)("div", {
        className: w.x9,
        children: (0, n.jsx)(h.A, { guildFeature: t, guild: a, hideTooltip: !0 }),
    });
}
function O(e) {
    let { icon: t, label: a, guildFeature: s, guild: l, shouldShowPremiumIcon: i } = e,
        u = null != l && null != s;
    return (0, n.jsxs)("div", {
        className: r()(w.q3, { [w.j5]: u }),
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("div", {
                className: w.Mn,
                children: [
                    t,
                    (0, n.jsxs)(o.Text, {
                        variant: "text-sm/semibold",
                        className: r()(w.xo, { [w.Fy]: i }),
                        children: [
                            i &&
                                (0, n.jsx)(c.m, {
                                    asContainer: !0,
                                    text: L.intl.string(L.t["5AFxuK"]),
                                    children: (0, n.jsx)(o.tvc, { size: "xs", color: "currentColor", className: w.T$ }),
                                }),
                            a,
                        ],
                    }),
                ],
            }),
            u && (0, n.jsx)(U, { guild: l, guildFeature: s }),
        ],
    });
}
function k(e) {
    let {
            label: t,
            uploadType: a,
            guild: s,
            maxFileSizeBytes: l,
            filters: i,
            handleOpenImageEditingModal: c,
            handleFileSizeError: u,
        } = e,
        d = (0, y.CK)(a),
        A = (0, y.VS)(a, { isGIF: !1 }),
        h = M({ guildFeature: A, guild: s });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.vN3, {
                within: !0,
                children: (0, n.jsxs)("div", {
                    className: r()(w.uK, w.kU),
                    children: [
                        (0, n.jsx)(O, {
                            icon: (0, n.jsx)(o.XGR, { size: "md", color: "currentColor" }),
                            label: t,
                            guildFeature: A,
                            guild: s,
                            shouldShowPremiumIcon: d,
                        }),
                        (0, n.jsx)(f.Ay, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: l,
                            onFileSizeError: u,
                            filters: i,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != h && (0, n.jsx)(o.AC4, { children: h }),
        ],
    });
}
function D(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: s } = e,
        { shouldAnimate: l, onMouseEnter: r, onMouseLeave: i } = (0, p.A)(),
        c = (0, y.xc)(t),
        u = (0, y.VS)(t, { isGIF: !0 }),
        d = M({ guildFeature: u, guild: a });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.DUT, {
                className: w.uK,
                onClick: s,
                "aria-label": L.intl.string(L.t["xsC+/y"]),
                onMouseEnter: r,
                onMouseLeave: i,
                children: [
                    (0, n.jsx)(H, { shouldAnimate: l }),
                    (0, n.jsx)(O, {
                        icon: (0, n.jsx)(o.Osp, { size: "md", color: "currentColor" }),
                        label: L.intl.string(L.t["xsC+/y"]),
                        guildFeature: u,
                        guild: a,
                        shouldShowPremiumIcon: c,
                    }),
                ],
            }),
            null != d && (0, n.jsx)(o.AC4, { children: d }),
        ],
    });
}
function P(e) {
    let {
            transitionState: t,
            onClose: l,
            onComplete: r,
            uploadType: c,
            maxFileSizeBytes: h,
            showUpsellHeader: f,
            filters: p,
            analyticsLocation: R,
            analyticsLocations: y = [],
            imageSpecifications: I,
            modalTitle: H = L.intl.string(L.t.DToW4e),
            uploadOptionTitle: M = L.intl.string(L.t["MsUY/S"]),
            allowRecentAvatarsSelection: U = !0,
        } = e,
        O = (0, i.bG)([j.default], () => j.default.getCurrentUser()),
        P = (0, i.bG)([T.A], () => T.A.getGuildId()),
        V = (0, i.bG)([E.A], () => E.A.getGuild(P)),
        G = (0, o.k34)(),
        B = c === b.HL.AVATAR || c === b.HL.BANNER,
        z = !v.Ay.canUseAnimatedAvatar(O) && c === b.HL.AVATAR,
        q = (0, g.b)(!B),
        { analyticsLocations: J, newestAnalyticsLocation: K } = (0, A.Ay)(y, d.A.SELECT_IMAGE_MODAL),
        W = s.useCallback(
            (e) => {
                let { assetOrigin: t = m.E.NEW_ASSET, imageUri: a, file: n, originalAsset: s, isFromTenor: i = !1 } = e;
                l(), r({ assetOrigin: t, imageUri: a, file: n, originalAsset: s, isFromTenor: i });
            },
            [l, r],
        ),
        X = s.useCallback(
            (e, t) => {
                if (t.type === S.a.MP4) return W({ imageUri: e, file: t });
                (0, o.mMO)(
                    async () => {
                        let { default: s } = await Promise.all([a.e("35929"), a.e("74571"), a.e("1208")]).then(
                            a.bind(a, 142630),
                        );
                        return (a) =>
                            (0, n.jsx)(s, {
                                imageUri: e,
                                file: t,
                                onCrop: W,
                                uploadType: c,
                                showUpsellHeader: f,
                                analyticsPage: R?.page,
                                ...a,
                            });
                    },
                    { contextKey: G },
                );
            },
            [R?.page, G, W, f, c],
        ),
        Z = s.useCallback(() => {
            (0, _.A)(h);
        }, [h]),
        $ = s.useCallback(() => {
            (0, o.mMO)(
                async () => {
                    let { default: e } = await a.e("87916").then(a.bind(a, 682503));
                    return (t) =>
                        (0, n.jsx)(e, {
                            uploadType: c,
                            onComplete: (e) => {
                                let { imageUri: t, file: a } = e;
                                return W({ imageUri: t, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: f,
                            analyticsPage: R?.page,
                            ...t,
                        });
                },
                { contextKey: G },
            );
        }, [R?.page, G, W, f, c]);
    s.useEffect(() => {
        z &&
            N.default.track(F.HAw.PREMIUM_UPSELL_VIEWED, {
                type: F.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: J,
            }),
            N.default.track(F.HAw.OPEN_MODAL, {
                type: F.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: R,
                location_stack: J,
                upload_type: c,
            });
    }, [z, R, J, c]);
    let Y = f && q,
        Q = U && c === b.HL.AVATAR;
    return (0, n.jsx)(u.aFV, {
        transitionState: t,
        onClose: l,
        size: "md",
        title: H,
        actions: [],
        children: (0, n.jsxs)("div", {
            className: w.jE,
            children: [
                (0, n.jsxs)("div", {
                    className: w.pd,
                    children: [
                        (0, n.jsxs)("ul", {
                            className: w.f9,
                            "aria-label": L.intl.string(L.t.iBnqtQ),
                            children: [
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(k, {
                                        label: M,
                                        uploadType: c,
                                        guild: V,
                                        handleOpenImageEditingModal: X,
                                        maxFileSizeBytes: h,
                                        filters: p,
                                        handleFileSizeError: Z,
                                    }),
                                }),
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(D, { uploadType: c, guild: V, handleOpenGIFPickerModal: $ }),
                                }),
                            ],
                        }),
                        null != I
                            ? (0, n.jsx)(o.Text, {
                                  className: w.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I,
                              })
                            : null,
                    ],
                }),
                Q && (0, n.jsx)(C.A, { onComplete: W }),
                Y &&
                    (0, n.jsx)(x.A, {
                        uploadType: c,
                        analyticsSource: K,
                        showUpsell: !0,
                        position: "inline",
                        className: w.Lu,
                    }),
            ],
        }),
    });
}
