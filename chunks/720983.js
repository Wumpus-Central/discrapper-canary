t.d(n, { Z: () => E });
var l = t(54381),
    i = t(473749),
    a = t(120356),
    o = t.n(a),
    r = t(793030),
    s = t(442837),
    d = t(410030),
    c = t(100527),
    u = t(906732),
    g = t(984370),
    p = t(567400),
    _ = t(892001),
    f = t(594174),
    I = t(626135),
    h = t(63063),
    x = t(73346),
    m = t(590961),
    v = t(705338),
    C = t(181268),
    b = t(981631),
    k = t(228168),
    j = t(388032),
    S = t(260999);
function Z(e) {
    let { content: n, onClick: t, ariaLabel: i, className: a } = e;
    return (0, l.jsx)(r.P3F, {
        className: o()(S.iconButton, a),
        onClick: t,
        "aria-label": i,
        children: n,
    });
}
function E(e) {
    let { guildId: n, storefront: t, selectedPageIndex: a } = e,
        E = (0, r.wjy)((0, d.ZP)()),
        N = (0, p.Y)({ location: "SocialLayerStorefrontHeader" }),
        R = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        T = (0, m.oR)(),
        { analyticsLocations: L } = (0, u.ZP)(),
        A = i.useCallback(() => {
            (null == R ? void 0 : R.id) != null &&
                (0, _.openUserProfileModal)({
                    userId: R.id,
                    section: k.oh.WISHLIST,
                    showGuildProfile: !1,
                    sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT],
                });
        }, [R]),
        M = i.useCallback(() => {
            I.default.track(b.rMx.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == T ? void 0 : T.sessionId,
                cta_type: C.US.LEARN_MORE,
                location_stack: L,
            }),
                window.open(h.Z.getArticleURL(b.BhN.SOCIAL_LAYER_STOREFRONT));
        }, [T, L]);
    if (null == t) return null;
    let O = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
        P = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        y = null;
    return (
        (y = E ? (null != O ? O : P) : null != P ? P : O),
        (0, l.jsxs)(g.Z, {
            disableDoubleClick: !0,
            className: S.headerContainer,
            children: [
                (0, l.jsxs)(r.P3F, {
                    onClick: () => {
                        (0, v.Z)({
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
                                    (0, v.Z)({
                                        guildId: n,
                                        pageIndex: t,
                                    });
                                },
                                wrapperClassName: S.titleWrapper,
                                className: o()(S.pageTitleContainer, { [S.selectedPageIndicator]: a === t }),
                                children: (0, l.jsx)(r.xvT, {
                                    variant: "text-sm/medium",
                                    children: e.title,
                                }),
                            },
                            "".concat(e.title, "-").concat(t),
                        ),
                    ),
                }),
                N &&
                    (0, l.jsxs)("div", {
                        className: S.alignedRightContent,
                        children: [
                            (0, l.jsx)(Z, {
                                content: (0, l.jsx)(r.h_8, {
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
                                content: (0, l.jsx)(r.xvT, {
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
