"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(490249),
    r = n(158954),
    a = n(311907),
    o = n(397927),
    c = n(736653),
    d = n(793574),
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
    N = n(439053),
    b = n(312381),
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
    w = n(750623);
function k(e) {
    let { user: t, currentUser: n, channel: g } = e,
        k = __OVERLAY__,
        B = (0, f.Ay)(t.id),
        H = (0, c.Ay)(),
        { analyticsLocations: F } = (0, u.Ay)(d.A.USER_PROFILE_SIDEBAR),
        K = (0, p.pb)({ layout: "SIDEBAR", userId: t.id, channelId: g.id }),
        W = s.useRef(null),
        { isHoveringOrFocusing: Y, isHovering: z } = (0, h.A)(W),
        q = (0, x.fC)(),
        X = (0, o.zhh)({ opacity: +(null != q.interactionType), config: { duration: 150 } }),
        J = (e) => {
            (0, C.openUserProfileModal)({ sourceAnalyticsLocations: F, hideRestrictedProfile: !0, ...K, ...e });
        },
        Q = B?.widgets != null && B.widgets.length > 0,
        { defaultWishlistId: $ } = (0, a.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(t.id) })),
        { wishlist: Z } = (0, m.fw)({ wishlistId: $, userId: t.id }),
        ee = s.useMemo(() => (null == Z ? null : Z.items.filter((e) => !e.isOwned)), [Z]);
    return (0, i.jsx)(u.f5, {
        value: F,
        children: (0, i.jsx)(p.of, {
            value: K,
            isLoaded: B?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: q,
                children: (0, i.jsxs)(T.A, {
                    ref: W,
                    user: t,
                    displayProfile: B,
                    themeType: U.d.SIDEBAR,
                    themeOverride: H,
                    privateBanner: B?.private === !0 ? (0, i.jsx)(b.A, {}) : void 0,
                    children: [
                        null != q.interactionType && (0, i.jsx)(l.animated.div, { style: X, className: w.tB }),
                        (0, i.jsxs)(r.d_W, {
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
                                            animateOnHoverOrFocusOnly: !Y,
                                            className: w.vK,
                                        }),
                                        (0, i.jsx)(N.A, { userId: t.id, className: w.oR }),
                                        (0, i.jsx)(E.A, {
                                            user: t,
                                            displayProfile: B,
                                            channelId: g.id,
                                            themeType: U.d.SIDEBAR,
                                            onOpenProfile: k ? void 0 : J,
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
                                    isHoveringOrFocusing: null == q.interactionType && Y,
                                    onOpenProfile: k ? void 0 : J,
                                }),
                                Q &&
                                    (0, i.jsx)("div", {
                                        className: w.sJ,
                                        children: (0, i.jsx)(S.A, {
                                            user: t,
                                            widgets: B.widgets,
                                            onOpenUserProfileModal: J,
                                        }),
                                    }),
                                null != ee &&
                                    ee.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: w.vS,
                                        children: (0, i.jsx)(D.A, {
                                            profileOwner: t,
                                            unownedWishlistItems: ee,
                                            wishlistId: $,
                                            title: P.intl.string(P.t["7lZ31J"]),
                                            onClick: () => {
                                                J?.({ tabSection: G.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(M.A, { user: t, channelId: g.id }),
                            ],
                        }),
                        !k && (0, i.jsx)(V, { handleOpenProfile: J, analyticsLocations: F, context: K }),
                        B?.profileEffect != null && (0, i.jsx)(A.A, { skuId: B?.profileEffect?.skuId, isHovering: z }),
                    ],
                }),
            }),
        }),
    });
}
let V = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [r, a] = s.useState("interactive-text-default");
    return (0, i.jsx)("div", {
        className: w.qr,
        children: (0, i.jsx)(o.DUT, {
            onMouseEnter: () => a("interactive-text-hover"),
            onMouseLeave: () => a("interactive-text-default"),
            onClick: () => {
                t(), (0, g.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...l });
            },
            className: w.wC,
            children: (0, i.jsx)(o.Text, {
                color: r,
                variant: "text-sm/normal",
                children: P.intl.string(P.t["+Xp3hq"]),
            }),
        }),
    });
};
