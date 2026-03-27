"use strict";
n.d(t, { A: () => B });
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
    A = n(361628),
    m = n(713517),
    _ = n(594832),
    p = n(183555),
    g = n(622543),
    f = n(950191),
    x = n(679492),
    C = n(657331),
    E = n(718019),
    I = n(915614),
    N = n(439053),
    b = n(312381),
    S = n(379654),
    T = n(946356),
    v = n(490752),
    y = n(587168),
    j = n(193738),
    R = n(615952),
    O = n(853397),
    L = n(159218),
    M = n(534189),
    D = n(747524),
    G = n(179242),
    U = n(968975),
    P = n(518477),
    w = n(996988),
    k = n(985018),
    V = n(374146);
function B(e) {
    let { user: t, currentUser: n, channel: B } = e,
        H = __OVERLAY__,
        F = (0, f.Ay)(t.id),
        K = (0, A.A)(F?.profileFrame?.skuId, "UserProfileSidebar"),
        W = (0, c.Ay)(),
        { analyticsLocations: Y } = (0, u.Ay)(d.A.USER_PROFILE_SIDEBAR),
        z = (0, p.pb)({ layout: "SIDEBAR", userId: t.id, channelId: B.id }),
        q = s.useRef(null),
        { isHoveringOrFocusing: X, isHovering: Q } = (0, m.A)(q),
        J = (0, x.fC)(),
        $ = (0, o.zhh)({ opacity: +(null != J.interactionType), config: { duration: 150 } }),
        Z = (e) => {
            (0, C.openUserProfileModal)({ sourceAnalyticsLocations: Y, hideRestrictedProfile: !0, ...z, ...e });
        },
        ee = F?.widgets != null && F.widgets.length > 0,
        { defaultWishlistId: et } = (0, r.cf)([g.A], () => ({ defaultWishlistId: g.A.getFirstWishlistId(t.id) })),
        { wishlist: en } = (0, _.fw)({ wishlistId: et, userId: t.id }),
        ei = s.useMemo(() => (null == en ? null : en.items.filter((e) => !e.isOwned)), [en]);
    return (0, i.jsx)(u.f5, {
        value: Y,
        children: (0, i.jsx)(p.of, {
            value: z,
            isLoaded: F?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: J,
                children: (0, i.jsxs)(T.A, {
                    ref: q,
                    user: t,
                    displayProfile: F,
                    themeType: w.d.SIDEBAR,
                    themeOverride: W,
                    privateBanner: F?.private === !0 ? (0, i.jsx)(b.A, {}) : void 0,
                    children: [
                        null != J.interactionType && (0, i.jsx)(l.animated.div, { style: $, className: V.tB }),
                        (0, i.jsxs)(a.d_W, {
                            className: null != K ? V.It : void 0,
                            children: [
                                (0, i.jsxs)(y.A, {
                                    children: [
                                        (0, i.jsx)(j.A, { user: t, themeType: w.d.SIDEBAR }),
                                        (0, i.jsx)(R.A, { user: t }),
                                        t.bot ? (0, i.jsx)(v.A, { user: t }) : (0, i.jsx)(O.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: V.wx,
                                    children: [
                                        (0, i.jsx)(I.A, {
                                            user: t,
                                            displayProfile: F,
                                            themeType: w.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !X,
                                            className: V.vK,
                                        }),
                                        (0, i.jsx)(N.A, { userId: t.id, className: V.oR }),
                                        (0, i.jsx)(E.A, {
                                            user: t,
                                            displayProfile: F,
                                            channelId: B.id,
                                            themeType: w.d.SIDEBAR,
                                            onOpenProfile: H ? void 0 : Z,
                                        }),
                                        (0, i.jsx)(L.A, {
                                            user: t,
                                            channelId: B.id,
                                            themeType: w.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(M.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: F,
                                    channel: B,
                                    isHoveringOrFocusing: null == J.interactionType && X,
                                    onOpenProfile: H ? void 0 : Z,
                                }),
                                ee &&
                                    (0, i.jsx)("div", {
                                        className: V.sJ,
                                        children: (0, i.jsx)(S.A, {
                                            user: t,
                                            widgets: F.widgets,
                                            onOpenUserProfileModal: Z,
                                        }),
                                    }),
                                null != ei &&
                                    ei.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: V.vS,
                                        children: (0, i.jsx)(U.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: ei,
                                            wishlistId: et,
                                            title: k.intl.string(k.t["7lZ31J"]),
                                            onClick: () => {
                                                Z?.({ tabSection: P.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(G.A, { user: t, channelId: B.id }),
                            ],
                        }),
                        !H &&
                            (0, i.jsx)(D.A, {
                                context: z,
                                analyticsLocations: Y,
                                profileFrame: K,
                                handleOpenProfile: Z,
                            }),
                        F?.profileEffect != null && (0, i.jsx)(h.A, { skuId: F?.profileEffect?.skuId, isHovering: Q }),
                    ],
                }),
            }),
        }),
    });
}
