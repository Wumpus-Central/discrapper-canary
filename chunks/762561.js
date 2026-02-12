n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    s = n(40153),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    h = n(713517),
    A = n(182592),
    m = n(594832),
    p = n(183555),
    g = n(672385),
    _ = n(622543),
    f = n(950191),
    x = n(679492),
    C = n(657331),
    E = n(718019),
    I = n(915614),
    b = n(439053),
    N = n(379654),
    S = n(946356),
    T = n(490752),
    v = n(587168),
    y = n(193738),
    j = n(853397),
    R = n(159218),
    O = n(534189),
    L = n(179242),
    M = n(968975),
    D = n(518477),
    G = n(996988),
    U = n(985018),
    P = n(743789);
function w(e) {
    let { user: t, currentUser: n, channel: g } = e,
        w = __OVERLAY__,
        V = (0, f.Ay)(t.id),
        B = (0, d.Ay)(),
        H = l.useRef(Date.now()),
        { analyticsLocations: F } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        K = (0, p.pb)({ layout: "SIDEBAR", userId: t.id, channelId: g.id }),
        W = l.useRef(null),
        { isHoveringOrFocusing: Y, isHovering: z } = (0, h.A)(W),
        q = (0, x.fC)(),
        X = (0, o.zhh)({ opacity: +(null != q.interactionType), config: { duration: 150 } }),
        J = (e) => {
            (0, C.openUserProfileModal)({ sourceAnalyticsLocations: F, hideRestrictedProfile: !0, ...K, ...e });
        },
        Q = V?.widgets != null && V.widgets.length > 0,
        { defaultWishlistId: $ } = (0, r.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(t.id) })),
        { wishlist: Z } = (0, m.fw)({ wishlistId: $, userId: t.id }),
        ee = l.useMemo(() => (null == Z ? null : Z.items.filter((e) => !e.isOwned)), [Z]);
    return (0, i.jsx)(u.f5, {
        value: F,
        children: (0, i.jsx)(p.of, {
            value: K,
            openedAt: H.current,
            fetchStartedAt: V?.fetchStartedAt,
            fetchEndedAt: V?.fetchEndedAt,
            isLoaded: V?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: q,
                children: (0, i.jsxs)(S.A, {
                    ref: W,
                    user: t,
                    displayProfile: V,
                    themeType: G.d.SIDEBAR,
                    themeOverride: B,
                    children: [
                        null != q.interactionType && (0, i.jsx)(s.animated.div, { style: X, className: P.tB }),
                        (0, i.jsxs)(a.d_W, {
                            children: [
                                (0, i.jsxs)(v.A, {
                                    children: [
                                        (0, i.jsx)(y.A, { user: t, themeType: G.d.SIDEBAR }),
                                        t.bot ? (0, i.jsx)(T.A, { user: t }) : (0, i.jsx)(j.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: P.wx,
                                    children: [
                                        (0, i.jsx)(I.A, {
                                            user: t,
                                            displayProfile: V,
                                            themeType: G.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !Y,
                                            className: P.vK,
                                        }),
                                        (0, i.jsx)(b.A, { userId: t.id, className: P.oR }),
                                        (0, i.jsx)(E.A, {
                                            user: t,
                                            displayProfile: V,
                                            channelId: g.id,
                                            themeType: G.d.SIDEBAR,
                                            onOpenProfile: w ? void 0 : J,
                                        }),
                                        (0, i.jsx)(R.A, {
                                            user: t,
                                            channelId: g.id,
                                            themeType: G.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(O.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: V,
                                    channel: g,
                                    isHoveringOrFocusing: null == q.interactionType && Y,
                                    onOpenProfile: w ? void 0 : J,
                                }),
                                Q &&
                                    (0, i.jsx)("div", {
                                        className: P.sJ,
                                        children: (0, i.jsx)(N.A, {
                                            user: t,
                                            widgets: V.widgets,
                                            onOpenUserProfileModal: J,
                                        }),
                                    }),
                                null != ee &&
                                    ee.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: P.vS,
                                        children: (0, i.jsx)(M.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: ee,
                                            wishlistId: $,
                                            title: U.intl.string(U.t["7lZ31J"]),
                                            onClick: () => {
                                                J?.({ tabSection: D.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(L.A, { user: t, channelId: g.id }),
                            ],
                        }),
                        !w && (0, i.jsx)(k, { handleOpenProfile: J, analyticsLocations: F, context: K }),
                        V?.profileEffect != null && (0, i.jsx)(A.A, { skuId: V?.profileEffect?.skuId, isHovering: z }),
                    ],
                }),
            }),
        }),
    });
}
let k = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: s } = e,
        [a, r] = l.useState("interactive-text-default");
    return (0, i.jsx)("div", {
        className: P.qr,
        children: (0, i.jsx)(o.DUT, {
            onMouseEnter: () => r("interactive-text-hover"),
            onMouseLeave: () => r("interactive-text-default"),
            onClick: () => {
                t(), (0, g.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...s });
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
