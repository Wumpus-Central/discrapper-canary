t.d(n, { Z: () => N });
var l = t(54381),
    i = t(473749),
    a = t(120356),
    o = t.n(a),
    s = t(793030),
    r = t(442837),
    d = t(410030),
    c = t(100527),
    u = t(906732),
    f = t(984370),
    g = t(567400),
    p = t(892001),
    I = t(594174),
    h = t(626135),
    x = t(63063),
    _ = t(73346),
    m = t(590961),
    b = t(705338),
    v = t(181268),
    C = t(981631),
    k = t(228168),
    j = t(388032),
    S = t(418993);
function Z(e) {
    let { content: n, onClick: t, ariaLabel: i, className: a } = e;
    return (0, l.jsx)(s.P3F, {
        className: o()(S.iconButton, a),
        onClick: t,
        "aria-label": i,
        children: n,
    });
}
function N(e) {
    let { guildId: n, storefront: t, selectedPageIndex: a } = e,
        N = (0, s.wjy)((0, d.ZP)()),
        E = (0, g.Y)({ location: "SocialLayerStorefrontHeader" }),
        L = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
        R = (0, m.oR)(),
        { analyticsLocations: T } = (0, u.ZP)(),
        A = i.useCallback(() => {
            (null == L ? void 0 : L.id) != null &&
                (0, p.openUserProfileModal)({
                    userId: L.id,
                    tabSection: k.oh.WISHLIST,
                    showGuildProfile: !1,
                    sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT],
                });
        }, [L]),
        M = i.useCallback(() => {
            h.default.track(C.rMx.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == R ? void 0 : R.sessionId,
                cta_type: v.US.LEARN_MORE,
                location_stack: T,
            }),
                window.open(x.Z.getArticleURL(C.BhN.SOCIAL_LAYER_STOREFRONT));
        }, [R, T]);
    if (null == t) return null;
    let O = null != t.logoAssetId ? (0, _._W)(t.applicationId, t.logoAssetId, 75) : null,
        P = null != t.lightThemeLogoAssetId ? (0, _._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        y = null;
    return (
        (y = N ? (null != O ? O : P) : null != P ? P : O),
        (0, l.jsxs)(f.Z, {
            disableDoubleClick: !0,
            className: S.headerContainer,
            children: [
                (0, l.jsxs)(s.P3F, {
                    onClick: () => {
                        (0, b.default)({
                            guildId: n,
                            pageIndex: 0,
                        });
                    },
                    className: S.titleContainer,
                    children: [
                        null != y &&
                            (0, l.jsx)("img", {
                                className: S.logo,
                                src: y,
                                alt: t.title,
                            }),
                        (0, l.jsx)(f.Z.Title, { children: t.title }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: S.titles,
                    children: t.pages.map((e, t) =>
                        (0, l.jsx)(
                            f.Z.Title,
                            {
                                onClick: () => {
                                    (0, b.default)({
                                        guildId: n,
                                        pageIndex: t,
                                    });
                                },
                                wrapperClassName: S.titleWrapper,
                                className: o()(S.pageTitleContainer, { [S.selectedPageIndicator]: a === t }),
                                children: (0, l.jsx)(s.xvT, {
                                    variant: "text-sm/medium",
                                    children: e.title,
                                }),
                            },
                            "".concat(e.title, "-").concat(t),
                        ),
                    ),
                }),
                E &&
                    (0, l.jsxs)("div", {
                        className: S.alignedRightContent,
                        children: [
                            (0, l.jsx)(Z, {
                                content: (0, l.jsx)(s.h_8, {
                                    size: "xs",
                                    color: "currentColor",
                                }),
                                onClick: A,
                                ariaLabel: j.intl.string(j.t["7lZ31J"]),
                                className: S.wishlistButton,
                            }),
                            (0, l.jsx)(Z, {
                                onClick: M,
                                ariaLabel: j.intl.string(j.t.hvVgAZ),
                                content: (0, l.jsx)(s.xvT, {
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t.hvVgAZ),
                                }),
                                className: S.learnMoreButton,
                            }),
                        ],
                    }),
            ],
        })
    );
}
