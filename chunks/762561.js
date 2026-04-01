n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    s = n(773690),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    h = n(351966),
    A = n(361628),
    _ = n(713517),
    m = n(594832),
    g = n(183555),
    p = n(622543),
    f = n(950191),
    x = n(679492),
    E = n(657331),
    I = n(718019),
    C = n(915614),
    N = n(439053),
    T = n(312381),
    S = n(379654),
    b = n(946356),
    y = n(490752),
    v = n(587168),
    j = n(193738),
    R = n(615952),
    O = n(853397),
    L = n(159218),
    M = n(534189),
    D = n(747524),
    U = n(179242),
    G = n(968975),
    P = n(518477),
    k = n(996988),
    w = n(985018),
    B = n(374146);
function V(e) {
    let { user: t, currentUser: n, channel: V } = e,
        H = __OVERLAY__,
        F = (0, f.Ay)(t.id),
        K = (0, A.A)(F?.profileFrame?.skuId, "UserProfileSidebar"),
        W = (0, d.Ay)(),
        { analyticsLocations: Y } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        z = (0, g.pb)({ layout: "SIDEBAR", userId: t.id, channelId: V.id }),
        q = l.useRef(null),
        { isHoveringOrFocusing: X, isHovering: J } = (0, _.A)(q),
        Q = (0, x.fC)(),
        $ = (0, o.zhh)({ opacity: +(null != Q.interactionType), config: { duration: 150 } }),
        Z = (e) => {
            (0, E.openUserProfileModal)({ sourceAnalyticsLocations: Y, hideRestrictedProfile: !0, ...z, ...e });
        },
        ee = F?.widgets != null && F.widgets.length > 0,
        { defaultWishlistId: et } = (0, r.cf)([p.A], () => ({ defaultWishlistId: p.A.getFirstWishlistId(t.id) })),
        { wishlist: en } = (0, m.fw)({ wishlistId: et, userId: t.id }),
        ei = l.useMemo(() => (null == en ? null : en.items.filter((e) => !e.isOwned)), [en]);
    return (0, i.jsx)(u.f5, {
        value: Y,
        children: (0, i.jsx)(g.of, {
            value: z,
            isLoaded: F?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: Q,
                children: (0, i.jsxs)(b.A, {
                    ref: q,
                    user: t,
                    displayProfile: F,
                    themeType: k.d.SIDEBAR,
                    themeOverride: W,
                    privateBanner: F?.private === !0 ? (0, i.jsx)(T.A, {}) : void 0,
                    children: [
                        null != Q.interactionType && (0, i.jsx)(s.animated.div, { style: $, className: B.tB }),
                        (0, i.jsxs)(a.d_W, {
                            className: null != K ? B.It : void 0,
                            children: [
                                (0, i.jsxs)(v.A, {
                                    children: [
                                        (0, i.jsx)(j.A, { user: t, themeType: k.d.SIDEBAR }),
                                        (0, i.jsx)(R.A, { user: t }),
                                        t.bot ? (0, i.jsx)(y.A, { user: t }) : (0, i.jsx)(O.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: B.wx,
                                    children: [
                                        (0, i.jsx)(C.A, {
                                            user: t,
                                            displayProfile: F,
                                            themeType: k.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !X,
                                            className: B.vK,
                                        }),
                                        (0, i.jsx)(N.A, { userId: t.id, className: B.oR }),
                                        (0, i.jsx)(I.A, {
                                            user: t,
                                            displayProfile: F,
                                            channelId: V.id,
                                            themeType: k.d.SIDEBAR,
                                            onOpenProfile: H ? void 0 : Z,
                                        }),
                                        (0, i.jsx)(L.A, {
                                            user: t,
                                            channelId: V.id,
                                            themeType: k.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(M.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: F,
                                    channel: V,
                                    isHoveringOrFocusing: null == Q.interactionType && X,
                                    onOpenProfile: H ? void 0 : Z,
                                }),
                                ee &&
                                    (0, i.jsx)("div", {
                                        className: B.sJ,
                                        children: (0, i.jsx)(S.A, {
                                            user: t,
                                            widgets: F.widgets,
                                            onOpenUserProfileModal: Z,
                                        }),
                                    }),
                                null != ei &&
                                    ei.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: B.vS,
                                        children: (0, i.jsx)(G.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: ei,
                                            wishlistId: et,
                                            title: w.intl.string(w.t["7lZ31J"]),
                                            onClick: () => {
                                                Z?.({ tabSection: P.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(U.A, { user: t, channelId: V.id }),
                            ],
                        }),
                        !H &&
                            (0, i.jsx)(D.A, {
                                context: z,
                                analyticsLocations: Y,
                                profileFrame: K,
                                handleOpenProfile: Z,
                            }),
                        F?.profileEffect != null && (0, i.jsx)(h.A, { skuId: F?.profileEffect?.skuId, isHovering: J }),
                    ],
                }),
            }),
        }),
    });
}
