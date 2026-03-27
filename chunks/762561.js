"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    s = n(64700),
    l = n(4208),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    h = n(351966),
    A = n(713517),
    m = n(594832),
    _ = n(183555),
    p = n(622543),
    g = n(950191),
    f = n(679492),
    x = n(657331),
    E = n(718019),
    C = n(915614),
    I = n(439053),
    N = n(312381),
    b = n(379654),
    S = n(946356),
    T = n(490752),
    v = n(587168),
    y = n(193738),
    j = n(615952),
    R = n(853397),
    O = n(159218),
    L = n(534189),
    M = n(747524),
    D = n(179242),
    G = n(968975),
    U = n(518477),
    P = n(996988),
    w = n(985018),
    k = n(374146);
function V(e) {
    let { user: t, currentUser: n, channel: V } = e,
        B = __OVERLAY__,
        H = (0, g.Ay)(t.id),
        F = (0, c.Ay)(),
        { analyticsLocations: K } = (0, u.Ay)(d.A.USER_PROFILE_SIDEBAR),
        W = (0, _.pb)({ layout: "SIDEBAR", userId: t.id, channelId: V.id }),
        Y = s.useRef(null),
        { isHoveringOrFocusing: z, isHovering: q } = (0, A.A)(Y),
        X = (0, f.fC)(),
        Q = (0, o.zhh)({ opacity: +(null != X.interactionType), config: { duration: 150 } }),
        J = (e) => {
            (0, x.openUserProfileModal)({ sourceAnalyticsLocations: K, hideRestrictedProfile: !0, ...W, ...e });
        },
        $ = H?.widgets != null && H.widgets.length > 0,
        { defaultWishlistId: Z } = (0, r.cf)([p.A], () => ({ defaultWishlistId: p.A.getFirstWishlistId(t.id) })),
        { wishlist: ee } = (0, m.fw)({ wishlistId: Z, userId: t.id }),
        et = s.useMemo(() => (null == ee ? null : ee.items.filter((e) => !e.isOwned)), [ee]);
    return (0, i.jsx)(u.f5, {
        value: K,
        children: (0, i.jsx)(_.of, {
            value: W,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(f.Hl, {
                value: X,
                children: (0, i.jsxs)(S.A, {
                    ref: Y,
                    user: t,
                    displayProfile: H,
                    themeType: P.d.SIDEBAR,
                    themeOverride: F,
                    privateBanner: H?.private === !0 ? (0, i.jsx)(N.A, {}) : void 0,
                    children: [
                        null != X.interactionType && (0, i.jsx)(l.animated.div, { style: Q, className: k.tB }),
                        (0, i.jsxs)(a.d_W, {
                            children: [
                                (0, i.jsxs)(v.A, {
                                    children: [
                                        (0, i.jsx)(y.A, { user: t, themeType: P.d.SIDEBAR }),
                                        (0, i.jsx)(j.A, { user: t }),
                                        t.bot ? (0, i.jsx)(T.A, { user: t }) : (0, i.jsx)(R.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: k.wx,
                                    children: [
                                        (0, i.jsx)(C.A, {
                                            user: t,
                                            displayProfile: H,
                                            themeType: P.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !z,
                                            className: k.vK,
                                        }),
                                        (0, i.jsx)(I.A, { userId: t.id, className: k.oR }),
                                        (0, i.jsx)(E.A, {
                                            user: t,
                                            displayProfile: H,
                                            channelId: V.id,
                                            themeType: P.d.SIDEBAR,
                                            onOpenProfile: B ? void 0 : J,
                                        }),
                                        (0, i.jsx)(O.A, {
                                            user: t,
                                            channelId: V.id,
                                            themeType: P.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(L.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: H,
                                    channel: V,
                                    isHoveringOrFocusing: null == X.interactionType && z,
                                    onOpenProfile: B ? void 0 : J,
                                }),
                                $ &&
                                    (0, i.jsx)("div", {
                                        className: k.sJ,
                                        children: (0, i.jsx)(b.A, {
                                            user: t,
                                            widgets: H.widgets,
                                            onOpenUserProfileModal: J,
                                        }),
                                    }),
                                null != et &&
                                    et.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: k.vS,
                                        children: (0, i.jsx)(G.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: et,
                                            wishlistId: Z,
                                            title: w.intl.string(w.t["7lZ31J"]),
                                            onClick: () => {
                                                J?.({ tabSection: U.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(D.A, { user: t, channelId: V.id }),
                            ],
                        }),
                        !B && (0, i.jsx)(M.A, { handleOpenProfile: J, analyticsLocations: K, context: W }),
                        H?.profileEffect != null && (0, i.jsx)(h.A, { skuId: H?.profileEffect?.skuId, isHovering: q }),
                    ],
                }),
            }),
        }),
    });
}
