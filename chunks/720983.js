t.d(n, { Z: () => C });
var l = t(54381),
    i = t(473749),
    a = t(120356),
    o = t.n(a),
    s = t(793030),
    r = t(442837),
    d = t(410030),
    c = t(100527),
    u = t(984370),
    p = t(567400),
    g = t(892001),
    I = t(594174),
    x = t(73346),
    _ = t(705338),
    h = t(228168),
    m = t(388032),
    f = t(260999);
function v(e) {
    let { icon: n, onClick: t, ariaLabel: i, className: a } = e;
    return (0, l.jsx)(s.P3F, {
        className: o()(f.iconButton, a),
        onClick: t,
        "aria-label": i,
        children: n,
    });
}
function C(e) {
    let { guildId: n, storefront: t, selectedPageIndex: a } = e,
        C = (0, s.wjy)((0, d.ZP)()),
        j = (0, p.Y)({ location: "SocialLayerStorefrontHeader" }),
        k = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
        b = i.useCallback(() => {
            (null == k ? void 0 : k.id) != null &&
                (0, g.openUserProfileModal)({
                    userId: k.id,
                    section: h.oh.WISHLIST,
                    showGuildProfile: !1,
                    sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT],
                });
        }, [k]);
    if (null == t) return null;
    let Z = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
        N = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        S = null;
    return (
        (S = C ? (null != Z ? Z : N) : null != N ? N : Z),
        (0, l.jsxs)(u.Z, {
            disableDoubleClick: !0,
            className: f.headerContainer,
            children: [
                (0, l.jsxs)(s.P3F, {
                    onClick: () => {
                        (0, _.Z)({
                            guildId: n,
                            pageIndex: 0,
                        });
                    },
                    className: f.titleContainer,
                    children: [
                        null != S &&
                            (0, l.jsx)("img", {
                                className: f.logo,
                                src: S,
                                alt: t.title,
                            }),
                        (0, l.jsx)(u.Z.Title, { children: t.title }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: f.titles,
                    children: t.pages.map((e, t) =>
                        (0, l.jsx)(
                            u.Z.Title,
                            {
                                onClick: () => {
                                    (0, _.Z)({
                                        guildId: n,
                                        pageIndex: t,
                                    });
                                },
                                wrapperClassName: f.titleWrapper,
                                className: o()(f.pageTitleContainer, { [f.selectedPageIndicator]: a === t }),
                                children: (0, l.jsx)(s.xvT, {
                                    variant: "text-sm/medium",
                                    children: e.title,
                                }),
                            },
                            "".concat(e.title, "-").concat(t),
                        ),
                    ),
                }),
                j &&
                    (0, l.jsx)("div", {
                        className: f.alignedRightContent,
                        children: (0, l.jsx)(v, {
                            icon: (0, l.jsx)(s.h_8, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            onClick: b,
                            ariaLabel: m.intl.string(m.t["7lZ31J"]),
                            className: f.wishlistButton,
                        }),
                    }),
            ],
        })
    );
}
