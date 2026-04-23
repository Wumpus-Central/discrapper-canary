n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    s = n(419354),
    a = n(573613),
    r = n(311907),
    o = n(717421),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    h = n(351966),
    A = n(361628),
    _ = n(713517),
    m = n(673843),
    g = n(594832),
    p = n(183555),
    f = n(622543),
    E = n(950191),
    x = n(679492),
    I = n(657331),
    C = n(718019),
    b = n(915614),
    N = n(439053),
    S = n(312381),
    v = n(379654),
    T = n(946356),
    y = n(490752),
    j = n(587168),
    R = n(193738),
    L = n(615952),
    O = n(853397),
    G = n(159218),
    M = n(534189),
    D = n(747524),
    U = n(179242),
    P = n(968975),
    w = n(518477),
    k = n(996988),
    V = n(985018),
    B = n(556818);
function H(e) {
    let { user: t, currentUser: n, channel: H } = e,
        F = __OVERLAY__,
        W = (0, E.Ay)(t.id),
        Y = (0, A.A)(W?.profileFrame?.skuId, "UserProfileSidebar"),
        K = (0, d.Ay)(),
        z = l.useRef(Date.now()),
        { analyticsLocations: q } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        X = (0, p.pb)({ layout: "SIDEBAR", userId: t.id, channelId: H.id }),
        Q = l.useRef(null),
        { isHoveringOrFocusing: Z, isHovering: J } = (0, _.A)(Q),
        $ = (0, x.fC)(),
        ee = (0, o.z)({ opacity: +(null != $.interactionType), config: { duration: 150 } }),
        et = (e) => {
            (0, I.openUserProfileModal)({ sourceAnalyticsLocations: q, hideRestrictedProfile: !0, ...X, ...e });
        },
        en = W?.widgets != null && W.widgets.length > 0,
        { defaultWishlistId: ei } = (0, r.cf)([f.A], () => ({ defaultWishlistId: f.A.getFirstWishlistId(t.id) })),
        { wishlist: el } = (0, g.fw)({ wishlistId: ei, userId: t.id });
    (0, m.A)(el);
    let es = l.useMemo(() => (null == el ? null : el.items.filter((e) => !e.isOwned)), [el]);
    return (0, i.jsx)(u.f5, {
        value: q,
        children: (0, i.jsx)(p.of, {
            value: X,
            openedAt: z.current,
            fetchStartedAt: W?.fetchStartedAt,
            fetchEndedAt: W?.fetchEndedAt,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: $,
                children: (0, i.jsxs)(T.A, {
                    ref: Q,
                    user: t,
                    displayProfile: W,
                    themeType: k.d.SIDEBAR,
                    themeOverride: K,
                    privateBanner: W?.private === !0 ? (0, i.jsx)(S.A, {}) : void 0,
                    children: [
                        null != $.interactionType && (0, i.jsx)(s.animated.div, { style: ee, className: B.tB }),
                        (0, i.jsxs)(a.d_, {
                            className: null != Y ? B.It : void 0,
                            children: [
                                (0, i.jsxs)(j.A, {
                                    children: [
                                        (0, i.jsx)(R.A, { user: t, themeType: k.d.SIDEBAR }),
                                        (0, i.jsx)(L.A, { user: t }),
                                        t.bot ? (0, i.jsx)(y.A, { user: t }) : (0, i.jsx)(O.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: B.wx,
                                    children: [
                                        (0, i.jsx)(b.A, {
                                            user: t,
                                            displayProfile: W,
                                            themeType: k.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !Z,
                                            className: B.vK,
                                        }),
                                        (0, i.jsx)(N.A, { userId: t.id, className: B.oR }),
                                        (0, i.jsx)(C.A, {
                                            user: t,
                                            displayProfile: W,
                                            channelId: H.id,
                                            themeType: k.d.SIDEBAR,
                                            onOpenProfile: F ? void 0 : et,
                                        }),
                                        (0, i.jsx)(G.A, {
                                            user: t,
                                            channelId: H.id,
                                            themeType: k.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(M.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: W,
                                    channel: H,
                                    isHoveringOrFocusing: null == $.interactionType && Z,
                                    onOpenProfile: F ? void 0 : et,
                                }),
                                en &&
                                    (0, i.jsx)("div", {
                                        className: B.sJ,
                                        children: (0, i.jsx)(v.A, {
                                            user: t,
                                            widgets: W.widgets,
                                            onOpenUserProfileModal: et,
                                        }),
                                    }),
                                null != es &&
                                    es.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: B.vS,
                                        children: (0, i.jsx)(P.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: es,
                                            wishlistId: ei,
                                            title: V.intl.string(V.t["7lZ31J"]),
                                            onClick: () => {
                                                et?.({ tabSection: w.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(U.A, { user: t, channelId: H.id }),
                            ],
                        }),
                        !F &&
                            (0, i.jsx)(D.A, {
                                context: X,
                                analyticsLocations: q,
                                profileFrame: Y,
                                handleOpenProfile: et,
                            }),
                        W?.profileEffect != null && (0, i.jsx)(h.A, { skuId: W?.profileEffect?.skuId, isHovering: J }),
                    ],
                }),
            }),
        }),
    });
}
