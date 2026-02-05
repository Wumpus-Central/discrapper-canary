n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(92674),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    h = n(713517),
    A = n(182592),
    g = n(594832),
    m = n(183555),
    p = n(672385),
    _ = n(622543),
    x = n(950191),
    f = n(679492),
    E = n(657331),
    C = n(718019),
    I = n(915614),
    S = n(439053),
    b = n(379654),
    N = n(946356),
    T = n(490752),
    j = n(587168),
    v = n(193738),
    y = n(853397),
    R = n(159218),
    O = n(534189),
    L = n(179242),
    D = n(968975),
    M = n(518477),
    G = n(996988),
    U = n(985018),
    P = n(743789);
function k(e) {
    let { user: t, currentUser: n, channel: p } = e,
        k = __OVERLAY__,
        V = (0, x.Ay)(t.id),
        B = (0, d.Ay)(),
        H = l.useRef(Date.now()),
        { analyticsLocations: F } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        Y = (0, m.pb)({ layout: "SIDEBAR", userId: t.id, channelId: p.id }),
        W = l.useRef(null),
        { isHoveringOrFocusing: K, isHovering: z } = (0, h.A)(W),
        X = (0, f.fC)(),
        q = (0, o.zhh)({ opacity: +(null != X.interactionType), config: { duration: 150 } }),
        J = (e) => {
            (0, E.openUserProfileModal)({ sourceAnalyticsLocations: F, hideRestrictedProfile: !0, ...Y, ...e });
        },
        Q = V?.widgets != null && V.widgets.length > 0,
        { defaultWishlistId: Z } = (0, r.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(t.id) })),
        { wishlist: $ } = (0, g.fw)({ wishlistId: Z, userId: t.id }),
        ee = l.useMemo(() => (null == $ ? null : $.items.filter((e) => !e.isOwned)), [$]);
    return (0, i.jsx)(u.f5, {
        value: F,
        children: (0, i.jsx)(m.of, {
            value: Y,
            openedAt: H.current,
            fetchStartedAt: V?.fetchStartedAt,
            fetchEndedAt: V?.fetchEndedAt,
            isLoaded: V?.isLoaded,
            children: (0, i.jsx)(f.Hl, {
                value: X,
                children: (0, i.jsxs)(N.A, {
                    ref: W,
                    user: t,
                    displayProfile: V,
                    themeType: G.d.SIDEBAR,
                    themeOverride: B,
                    children: [
                        null != X.interactionType && (0, i.jsx)(s.animated.div, { style: q, className: P.tB }),
                        (0, i.jsxs)(a.d_W, {
                            children: [
                                (0, i.jsxs)(j.A, {
                                    children: [
                                        (0, i.jsx)(v.A, { user: t, themeType: G.d.SIDEBAR }),
                                        t.bot ? (0, i.jsx)(T.A, { user: t }) : (0, i.jsx)(y.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: P.wx,
                                    children: [
                                        (0, i.jsx)(I.A, {
                                            user: t,
                                            displayProfile: V,
                                            themeType: G.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !K,
                                            className: P.vK,
                                        }),
                                        (0, i.jsx)(S.A, { userId: t.id, className: P.oR }),
                                        (0, i.jsx)(C.A, {
                                            user: t,
                                            displayProfile: V,
                                            channelId: p.id,
                                            themeType: G.d.SIDEBAR,
                                            onOpenProfile: k ? void 0 : J,
                                        }),
                                        (0, i.jsx)(R.A, {
                                            user: t,
                                            channelId: p.id,
                                            themeType: G.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(O.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: V,
                                    channel: p,
                                    isHoveringOrFocusing: null == X.interactionType && K,
                                    onOpenProfile: k ? void 0 : J,
                                }),
                                Q &&
                                    (0, i.jsx)("div", {
                                        className: P.sJ,
                                        children: (0, i.jsx)(b.A, {
                                            user: t,
                                            widgets: V.widgets,
                                            onOpenUserProfileModal: J,
                                        }),
                                    }),
                                null != ee &&
                                    ee.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: P.vS,
                                        children: (0, i.jsx)(D.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: ee,
                                            wishlistId: Z,
                                            title: U.intl.string(U.t["7lZ31J"]),
                                            onClick: () => {
                                                J?.({ tabSection: M.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(L.A, { user: t, channelId: p.id }),
                            ],
                        }),
                        !k && (0, i.jsx)(w, { handleOpenProfile: J, analyticsLocations: F, context: Y }),
                        V?.profileEffect != null && (0, i.jsx)(A.A, { skuId: V?.profileEffect?.skuId, isHovering: z }),
                    ],
                }),
            }),
        }),
    });
}
let w = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: s } = e,
        [a, r] = l.useState("interactive-text-default");
    return (0, i.jsx)("div", {
        className: P.qr,
        children: (0, i.jsx)(o.DUT, {
            onMouseEnter: () => r("interactive-text-hover"),
            onMouseLeave: () => r("interactive-text-default"),
            onClick: () => {
                t(), (0, p.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...s });
            },
            className: P.wC,
            children: (0, i.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: U.intl.string(U.t["+Xp3hq"]),
            }),
        }),
    });
};
