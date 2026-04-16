n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    s = n(407045),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    h = n(351966),
    A = n(361628),
    _ = n(713517),
    m = n(673843),
    p = n(594832),
    g = n(183555),
    f = n(622543),
    E = n(950191),
    x = n(679492),
    I = n(657331),
    C = n(718019),
    N = n(915614),
    T = n(439053),
    S = n(312381),
    b = n(379654),
    y = n(946356),
    v = n(490752),
    R = n(587168),
    j = n(193738),
    O = n(615952),
    L = n(853397),
    M = n(159218),
    D = n(534189),
    U = n(747524),
    G = n(179242),
    P = n(968975),
    k = n(518477),
    w = n(996988),
    B = n(985018),
    V = n(374146);
function H(e) {
    let { user: t, currentUser: n, channel: H } = e,
        F = __OVERLAY__,
        W = (0, E.Ay)(t.id),
        K = (0, A.A)(W?.profileFrame?.skuId, "UserProfileSidebar"),
        Y = (0, d.Ay)(),
        z = l.useRef(Date.now()),
        { analyticsLocations: q } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        X = (0, g.pb)({ layout: "SIDEBAR", userId: t.id, channelId: H.id }),
        $ = l.useRef(null),
        { isHoveringOrFocusing: J, isHovering: Q } = (0, _.A)($),
        Z = (0, x.fC)(),
        ee = (0, o.zhh)({ opacity: +(null != Z.interactionType), config: { duration: 150 } }),
        et = (e) => {
            (0, I.openUserProfileModal)({ sourceAnalyticsLocations: q, hideRestrictedProfile: !0, ...X, ...e });
        },
        en = W?.widgets != null && W.widgets.length > 0,
        { defaultWishlistId: ei } = (0, r.cf)([f.A], () => ({ defaultWishlistId: f.A.getFirstWishlistId(t.id) })),
        { wishlist: el } = (0, p.fw)({ wishlistId: ei, userId: t.id });
    (0, m.A)(el);
    let es = l.useMemo(() => (null == el ? null : el.items.filter((e) => !e.isOwned)), [el]);
    return (0, i.jsx)(u.f5, {
        value: q,
        children: (0, i.jsx)(g.of, {
            value: X,
            openedAt: z.current,
            fetchStartedAt: W?.fetchStartedAt,
            fetchEndedAt: W?.fetchEndedAt,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: Z,
                children: (0, i.jsxs)(y.A, {
                    ref: $,
                    user: t,
                    displayProfile: W,
                    themeType: w.d.SIDEBAR,
                    themeOverride: Y,
                    privateBanner: W?.private === !0 ? (0, i.jsx)(S.A, {}) : void 0,
                    children: [
                        null != Z.interactionType && (0, i.jsx)(s.animated.div, { style: ee, className: V.tB }),
                        (0, i.jsxs)(a.d_W, {
                            className: null != K ? V.It : void 0,
                            children: [
                                (0, i.jsxs)(R.A, {
                                    children: [
                                        (0, i.jsx)(j.A, { user: t, themeType: w.d.SIDEBAR }),
                                        (0, i.jsx)(O.A, { user: t }),
                                        t.bot ? (0, i.jsx)(v.A, { user: t }) : (0, i.jsx)(L.yo, { user: t }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: V.wx,
                                    children: [
                                        (0, i.jsx)(N.A, {
                                            user: t,
                                            displayProfile: W,
                                            themeType: w.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !J,
                                            className: V.vK,
                                        }),
                                        (0, i.jsx)(T.A, { userId: t.id, className: V.oR }),
                                        (0, i.jsx)(C.A, {
                                            user: t,
                                            displayProfile: W,
                                            channelId: H.id,
                                            themeType: w.d.SIDEBAR,
                                            onOpenProfile: F ? void 0 : et,
                                        }),
                                        (0, i.jsx)(M.A, {
                                            user: t,
                                            channelId: H.id,
                                            themeType: w.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(D.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: W,
                                    channel: H,
                                    isHoveringOrFocusing: null == Z.interactionType && J,
                                    onOpenProfile: F ? void 0 : et,
                                }),
                                en &&
                                    (0, i.jsx)("div", {
                                        className: V.sJ,
                                        children: (0, i.jsx)(b.A, {
                                            user: t,
                                            widgets: W.widgets,
                                            onOpenUserProfileModal: et,
                                        }),
                                    }),
                                null != es &&
                                    es.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: V.vS,
                                        children: (0, i.jsx)(P.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: es,
                                            wishlistId: ei,
                                            title: B.intl.string(B.t["7lZ31J"]),
                                            onClick: () => {
                                                et?.({ tabSection: k.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(G.A, { user: t, channelId: H.id }),
                            ],
                        }),
                        !F &&
                            (0, i.jsx)(U.A, {
                                context: X,
                                analyticsLocations: q,
                                profileFrame: K,
                                handleOpenProfile: et,
                            }),
                        W?.profileEffect != null && (0, i.jsx)(h.A, { skuId: W?.profileEffect?.skuId, isHovering: Q }),
                    ],
                }),
            }),
        }),
    });
}
