n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    s = n(687498),
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
    g = n(594832),
    p = n(183555),
    f = n(622543),
    x = n(950191),
    E = n(679492),
    I = n(657331),
    C = n(718019),
    N = n(915614),
    T = n(439053),
    S = n(312381),
    b = n(379654),
    y = n(946356),
    v = n(490752),
    j = n(587168),
    R = n(193738),
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
        W = (0, x.Ay)(t.id),
        K = (0, A.A)(W?.profileFrame?.skuId, "UserProfileSidebar"),
        Y = (0, d.Ay)(),
        { analyticsLocations: z } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        q = (0, p.pb)({ layout: "SIDEBAR", userId: t.id, channelId: H.id }),
        X = l.useRef(null),
        { isHoveringOrFocusing: $, isHovering: J } = (0, _.A)(X),
        Q = (0, E.fC)(),
        Z = (0, o.zhh)({ opacity: +(null != Q.interactionType), config: { duration: 150 } }),
        ee = (e) => {
            (0, I.openUserProfileModal)({ sourceAnalyticsLocations: z, hideRestrictedProfile: !0, ...q, ...e });
        },
        et = W?.widgets != null && W.widgets.length > 0,
        { defaultWishlistId: en } = (0, r.cf)([f.A], () => ({ defaultWishlistId: f.A.getFirstWishlistId(t.id) })),
        { wishlist: ei } = (0, g.fw)({ wishlistId: en, userId: t.id });
    (0, m.A)(ei);
    let el = l.useMemo(() => (null == ei ? null : ei.items.filter((e) => !e.isOwned)), [ei]);
    return (0, i.jsx)(u.f5, {
        value: z,
        children: (0, i.jsx)(p.of, {
            value: q,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(E.Hl, {
                value: Q,
                children: (0, i.jsxs)(y.A, {
                    ref: X,
                    user: t,
                    displayProfile: W,
                    themeType: w.d.SIDEBAR,
                    themeOverride: Y,
                    privateBanner: W?.private === !0 ? (0, i.jsx)(S.A, {}) : void 0,
                    children: [
                        null != Q.interactionType && (0, i.jsx)(s.animated.div, { style: Z, className: V.tB }),
                        (0, i.jsxs)(a.d_W, {
                            className: null != K ? V.It : void 0,
                            children: [
                                (0, i.jsxs)(j.A, {
                                    children: [
                                        (0, i.jsx)(R.A, { user: t, themeType: w.d.SIDEBAR }),
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
                                            animateOnHoverOrFocusOnly: !$,
                                            className: V.vK,
                                        }),
                                        (0, i.jsx)(T.A, { userId: t.id, className: V.oR }),
                                        (0, i.jsx)(C.A, {
                                            user: t,
                                            displayProfile: W,
                                            channelId: H.id,
                                            themeType: w.d.SIDEBAR,
                                            onOpenProfile: F ? void 0 : ee,
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
                                    isHoveringOrFocusing: null == Q.interactionType && $,
                                    onOpenProfile: F ? void 0 : ee,
                                }),
                                et &&
                                    (0, i.jsx)("div", {
                                        className: V.sJ,
                                        children: (0, i.jsx)(b.A, {
                                            user: t,
                                            widgets: W.widgets,
                                            onOpenUserProfileModal: ee,
                                        }),
                                    }),
                                null != el &&
                                    el.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: V.vS,
                                        children: (0, i.jsx)(P.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: el,
                                            wishlistId: en,
                                            title: B.intl.string(B.t["7lZ31J"]),
                                            onClick: () => {
                                                ee?.({ tabSection: k.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(G.A, { user: t, channelId: H.id }),
                            ],
                        }),
                        !F &&
                            (0, i.jsx)(U.A, {
                                context: q,
                                analyticsLocations: z,
                                profileFrame: K,
                                handleOpenProfile: ee,
                            }),
                        W?.profileEffect != null && (0, i.jsx)(h.A, { skuId: W?.profileEffect?.skuId, isHovering: J }),
                    ],
                }),
            }),
        }),
    });
}
