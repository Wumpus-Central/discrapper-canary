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
    g = t(984370),
    p = t(567400),
    _ = t(892001),
    I = t(594174),
    f = t(626135),
    h = t(63063),
    x = t(73346),
    m = t(590961),
    v = t(705338),
    C = t(181268),
    k = t(981631),
    j = t(228168),
    b = t(388032),
    S = t(260999);
function L(e) {
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
        E = (0, p.Y)({ location: "SocialLayerStorefrontHeader" }),
        R = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
        Z = (0, m.oR)(),
        { analyticsLocations: T } = (0, u.ZP)(),
        A = i.useCallback(() => {
            (null == R ? void 0 : R.id) != null &&
                (0, _.openUserProfileModal)({
                    userId: R.id,
                    section: j.oh.WISHLIST,
                    showGuildProfile: !1,
                    sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT],
                });
        }, [R]),
        M = i.useCallback(() => {
            f.default.track(k.rMx.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == Z ? void 0 : Z.sessionId,
                cta_type: C.US.LEARN_MORE,
                location_stack: T,
            }),
                window.open(h.Z.getArticleURL(k.BhN.SOCIAL_LAYER_STOREFRONT));
        }, [Z, T]);
    if (null == t) return null;
    let y = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
        O = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        P = null;
    return (
        (P = N ? (null != y ? y : O) : null != O ? O : y),
        (0, l.jsxs)(g.Z, {
            disableDoubleClick: !0,
            className: S.headerContainer,
            children: [
                (0, l.jsxs)(s.P3F, {
                    onClick: () => {
                        (0, v.default)({
                            guildId: n,
                            pageIndex: 0,
                        });
                    },
                    className: S.titleContainer,
                    children: [
                        null != P &&
                            (0, l.jsx)("img", {
                                className: S.logo,
                                src: P,
                                alt: t.title,
                            }),
                        (0, l.jsx)(g.Z.Title, { children: t.title }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: S.titles,
                    children: t.pages.map((e, t) =>
                        (0, l.jsx)(
                            g.Z.Title,
                            {
                                onClick: () => {
                                    (0, v.default)({
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
                            (0, l.jsx)(L, {
                                content: (0, l.jsx)(s.h_8, {
                                    size: "xs",
                                    color: "currentColor",
                                }),
                                onClick: A,
                                ariaLabel: b.intl.string(b.t["7lZ31J"]),
                                className: S.wishlistButton,
                            }),
                            (0, l.jsx)(L, {
                                onClick: M,
                                ariaLabel: b.intl.string(b.t.hvVgAZ),
                                content: (0, l.jsx)(s.xvT, {
                                    variant: "text-sm/medium",
                                    children: b.intl.string(b.t.hvVgAZ),
                                }),
                                className: S.learnMoreButton,
                            }),
                        ],
                    }),
            ],
        })
    );
}
