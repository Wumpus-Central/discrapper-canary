t.d(n, { Z: () => Z });
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
    g = t(892001),
    p = t(594174),
    I = t(626135),
    h = t(63063),
    x = t(73346),
    _ = t(590961),
    m = t(705338),
    b = t(181268),
    v = t(981631),
    C = t(228168),
    k = t(388032),
    j = t(418993);
function S(e) {
    let { content: n, onClick: t, ariaLabel: i, className: a } = e;
    return (0, l.jsx)(s.P3F, {
        className: o()(j.iconButton, a),
        onClick: t,
        "aria-label": i,
        children: n,
    });
}
function Z(e) {
    let { guildId: n, storefront: t, selectedPageIndex: a } = e,
        Z = (0, s.wjy)((0, d.ZP)()),
        E = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
        N = (0, _.oR)(),
        { analyticsLocations: L } = (0, u.ZP)(),
        R = i.useCallback(() => {
            (null == E ? void 0 : E.id) != null &&
                (0, g.openUserProfileModal)({
                    userId: E.id,
                    tabSection: C.oh.WISHLIST,
                    showGuildProfile: !1,
                    sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT],
                });
        }, [E]),
        T = i.useCallback(() => {
            I.default.track(v.rMx.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == N ? void 0 : N.sessionId,
                cta_type: b.US.LEARN_MORE,
                location_stack: L,
            }),
                window.open(h.Z.getArticleURL(v.BhN.SOCIAL_LAYER_STOREFRONT));
        }, [N, L]);
    if (null == t) return null;
    let A = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
        M = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        O = null;
    return (
        (O = Z ? (null != A ? A : M) : null != M ? M : A),
        (0, l.jsxs)(f.Z, {
            disableDoubleClick: !0,
            className: j.headerContainer,
            children: [
                (0, l.jsxs)(s.P3F, {
                    onClick: () => {
                        (0, m.default)({
                            guildId: n,
                            pageIndex: 0,
                        });
                    },
                    className: j.titleContainer,
                    children: [
                        null != O &&
                            (0, l.jsx)("img", {
                                className: j.logo,
                                src: O,
                                alt: t.title,
                            }),
                        (0, l.jsx)(f.Z.Title, { children: t.title }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: j.titles,
                    children: t.pages.map((e, t) =>
                        (0, l.jsx)(
                            f.Z.Title,
                            {
                                onClick: () => {
                                    (0, m.default)({
                                        guildId: n,
                                        pageIndex: t,
                                    });
                                },
                                wrapperClassName: j.titleWrapper,
                                className: o()(j.pageTitleContainer, { [j.selectedPageIndicator]: a === t }),
                                children: (0, l.jsx)(s.xvT, {
                                    variant: "text-sm/medium",
                                    children: e.title,
                                }),
                            },
                            "".concat(e.title, "-").concat(t),
                        ),
                    ),
                }),
                (0, l.jsxs)("div", {
                    className: j.alignedRightContent,
                    children: [
                        (0, l.jsx)(S, {
                            content: (0, l.jsx)(s.h_8, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            onClick: R,
                            ariaLabel: k.intl.string(k.t["7lZ31J"]),
                            className: j.wishlistButton,
                        }),
                        (0, l.jsx)(S, {
                            onClick: T,
                            ariaLabel: k.intl.string(k.t.hvVgAZ),
                            content: (0, l.jsx)(s.xvT, {
                                variant: "text-sm/medium",
                                children: k.intl.string(k.t.hvVgAZ),
                            }),
                            className: j.learnMoreButton,
                        }),
                    ],
                }),
            ],
        })
    );
}
