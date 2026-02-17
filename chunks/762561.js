n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(522160),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    h = n(713517),
    A = n(182592),
    p = n(594832),
    m = n(183555),
    g = n(672385),
    _ = n(622543),
    f = n(950191),
    x = n(679492),
    C = n(657331),
    E = n(718019),
    I = n(915614),
    b = n(439053),
    N = n(312381),
    S = n(379654),
    T = n(946356),
    v = n(490752),
    y = n(587168),
    j = n(193738),
    R = n(853397),
    O = n(159218),
    L = n(534189),
    M = n(179242),
    D = n(968975),
    G = n(518477),
    U = n(996988),
    P = n(985018),
    w = n(743789);
function k(e) {
    let { user: t, currentUser: n, channel: g } = e,
        k = __OVERLAY__,
        B = (0, f.Ay)(t.id),
        H = (0, d.Ay)(),
        F = l.useRef(Date.now()),
        { analyticsLocations: K } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        W = (0, m.pb)({ layout: "SIDEBAR", userId: t.id, channelId: g.id }),
        Y = l.useRef(null),
        { isHoveringOrFocusing: z, isHovering: q } = (0, h.A)(Y),
        X = (0, x.fC)(),
        J = (0, o.zhh)({ opacity: +(null != X.interactionType), config: { duration: 150 } }),
        Q = (e) => {
            (0, C.openUserProfileModal)({ sourceAnalyticsLocations: K, hideRestrictedProfile: !0, ...W, ...e });
        },
        $ = B?.widgets != null && B.widgets.length > 0,
        { defaultWishlistId: Z } = (0, r.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(t.id) })),
        { wishlist: ee } = (0, p.fw)({ wishlistId: Z, userId: t.id }),
        et = l.useMemo(() => (null == ee ? null : ee.items.filter((e) => !e.isOwned)), [ee]);
    return (0, i.jsx)(u.f5, {
        value: K,
        children: (0, i.jsx)(m.of, {
            value: W,
            openedAt: F.current,
            fetchStartedAt: B?.fetchStartedAt,
            fetchEndedAt: B?.fetchEndedAt,
            isLoaded: B?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: X,
                children: (0, i.jsxs)(T.A, {
                    ref: Y,
                    user: t,
                    displayProfile: B,
                    themeType: U.d.SIDEBAR,
                    themeOverride: H,
                    privateBanner: B?.private === !0 ? (0, i.jsx)(N.A, {}) : void 0,
                    children: [
                        null != X.interactionType && (0, i.jsx)(s.animated.div, { style: J, className: w.tB }),
                        (0, i.jsxs)(a.d_W, {
                            children: [
                                (0, i.jsxs)(y.A, {
                                    children: [
                                        (0, i.jsx)(j.A, { user: t, themeType: U.d.SIDEBAR }),
                                        t.bot ? (0, i.jsx)(v.A, { user: t }) : (0, i.jsx)(R.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: w.wx,
                                    children: [
                                        (0, i.jsx)(I.A, {
                                            user: t,
                                            displayProfile: B,
                                            themeType: U.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !z,
                                            className: w.vK,
                                        }),
                                        (0, i.jsx)(b.A, { userId: t.id, className: w.oR }),
                                        (0, i.jsx)(E.A, {
                                            user: t,
                                            displayProfile: B,
                                            channelId: g.id,
                                            themeType: U.d.SIDEBAR,
                                            onOpenProfile: k ? void 0 : Q,
                                        }),
                                        (0, i.jsx)(O.A, {
                                            user: t,
                                            channelId: g.id,
                                            themeType: U.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(L.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: B,
                                    channel: g,
                                    isHoveringOrFocusing: null == X.interactionType && z,
                                    onOpenProfile: k ? void 0 : Q,
                                }),
                                $ &&
                                    (0, i.jsx)("div", {
                                        className: w.sJ,
                                        children: (0, i.jsx)(S.A, {
                                            user: t,
                                            widgets: B.widgets,
                                            onOpenUserProfileModal: Q,
                                        }),
                                    }),
                                null != et &&
                                    et.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: w.vS,
                                        children: (0, i.jsx)(D.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: et,
                                            wishlistId: Z,
                                            title: P.intl.string(P.t["7lZ31J"]),
                                            onClick: () => {
                                                Q?.({ tabSection: G.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(M.A, { user: t, channelId: g.id }),
                            ],
                        }),
                        !k && (0, i.jsx)(V, { handleOpenProfile: Q, analyticsLocations: K, context: W }),
                        B?.profileEffect != null && (0, i.jsx)(A.A, { skuId: B?.profileEffect?.skuId, isHovering: q }),
                    ],
                }),
            }),
        }),
    });
}
let V = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: s } = e,
        [a, r] = l.useState("interactive-text-default");
    return (0, i.jsx)("div", {
        className: w.qr,
        children: (0, i.jsx)(o.DUT, {
            onMouseEnter: () => r("interactive-text-hover"),
            onMouseLeave: () => r("interactive-text-default"),
            onClick: () => {
                t(), (0, g.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...s });
            },
            className: w.wC,
            children: (0, i.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: P.intl.string(P.t["+Xp3hq"]),
            }),
        }),
    });
};
