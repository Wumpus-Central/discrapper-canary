n.d(t, { A: () => k }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(432022),
    a = n(158954),
    s = n(397927),
    o = n(736653),
    c = n(793574),
    u = n(688810),
    d = n(713517),
    f = n(182592),
    p = n(594832),
    h = n(996353),
    b = n(183555),
    g = n(672385),
    m = n(950191),
    A = n(679492),
    y = n(657331),
    O = n(718019),
    j = n(915614),
    v = n(439053),
    x = n(379654),
    E = n(946356),
    _ = n(490752),
    C = n(587168),
    S = n(193738),
    I = n(853397),
    N = n(159218),
    T = n(534189),
    P = n(179242),
    w = n(968975),
    R = n(518477),
    D = n(996988),
    M = n(985018),
    L = n(743789);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e) {
    var t;
    let { user: n, currentUser: g, channel: M } = e,
        k = __OVERLAY__,
        V = (0, m.Ay)(n.id),
        F = (0, o.Ay)(),
        H = l.useRef(Date.now()),
        { analyticsLocations: B } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR),
        K = (0, b.pb)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: M.id,
        }),
        W = l.useRef(null),
        { isHoveringOrFocusing: z, isHovering: Y } = (0, d.A)(W),
        q = (0, A.fC)(),
        X = (0, s.zhh)({
            opacity: +(null != q.interactionType),
            config: { duration: 150 },
        }),
        J = (e) => {
            (0, y.openUserProfileModal)(
                G(
                    {
                        sourceAnalyticsLocations: B,
                        hideRestrictedProfile: !0,
                    },
                    K,
                    e,
                ),
            );
        },
        Q = (null == V ? void 0 : V.widgets) != null && V.widgets.length > 0,
        {
            displayedWishlistItems: Z,
            defaultWishlistId: $,
            title: ee,
        } = (0, h.aO)({
            user: n,
            numItems: h.h,
            source: p.mQ.DM_SIDE_PANEL,
            location: "UserProfileSidebar",
        }),
        et = null != Z && Z.length > 0;
    return (0, r.jsx)(u.f5, {
        value: B,
        children: (0, r.jsx)(b.of, {
            value: K,
            openedAt: H.current,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, r.jsx)(A.Hl, {
                value: q,
                children: (0, r.jsxs)(E.A, {
                    ref: W,
                    user: n,
                    displayProfile: V,
                    themeType: D.d.SIDEBAR,
                    themeOverride: F,
                    children: [
                        null != q.interactionType &&
                            (0, r.jsx)(i.animated.div, {
                                style: X,
                                className: L.tB,
                            }),
                        (0, r.jsxs)(a.d_W, {
                            children: [
                                (0, r.jsxs)(C.A, {
                                    children: [
                                        (0, r.jsx)(S.A, {
                                            user: n,
                                            themeType: D.d.SIDEBAR,
                                        }),
                                        n.bot ? (0, r.jsx)(_.A, { user: n }) : (0, r.jsx)(I.yo, { user: n }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: L.wx,
                                    children: [
                                        (0, r.jsx)(j.A, {
                                            user: n,
                                            displayProfile: V,
                                            themeType: D.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !z,
                                            className: L.vK,
                                        }),
                                        (0, r.jsx)(v.A, {
                                            userId: n.id,
                                            className: L.oR,
                                        }),
                                        (0, r.jsx)(O.A, {
                                            user: n,
                                            displayProfile: V,
                                            channelId: M.id,
                                            themeType: D.d.SIDEBAR,
                                            onOpenProfile: k ? void 0 : J,
                                        }),
                                        (0, r.jsx)(N.A, {
                                            user: n,
                                            channelId: M.id,
                                            themeType: D.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(T.A, {
                                    user: n,
                                    currentUser: g,
                                    displayProfile: V,
                                    channel: M,
                                    isHoveringOrFocusing: null == q.interactionType && z,
                                    onOpenProfile: k ? void 0 : J,
                                }),
                                Q &&
                                    (0, r.jsx)("div", {
                                        className: L.sJ,
                                        children: (0, r.jsx)(x.A, {
                                            user: n,
                                            widgets: V.widgets,
                                            onOpenUserProfileModal: J,
                                        }),
                                    }),
                                et &&
                                    (0, r.jsx)("div", {
                                        className: L.vS,
                                        children: (0, r.jsx)(w.A, {
                                            profileOwner: n,
                                            wishlistItems: Z,
                                            wishlistId: $,
                                            title: ee,
                                            onClick: () => {
                                                null == J || J({ tabSection: R.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(P.A, {
                                    user: n,
                                    channelId: M.id,
                                }),
                            ],
                        }),
                        !k &&
                            (0, r.jsx)(U, {
                                handleOpenProfile: J,
                                analyticsLocations: B,
                                context: K,
                            }),
                        (null == V ? void 0 : V.profileEffect) != null &&
                            (0, r.jsx)(f.A, {
                                skuId: null == V || null == (t = V.profileEffect) ? void 0 : t.skuId,
                                isHovering: Y,
                            }),
                    ],
                }),
            }),
        }),
    });
}
let U = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: i } = e,
        [a, o] = l.useState("interactive-text-default");
    return (0, r.jsx)("div", {
        className: L.qr,
        children: (0, r.jsx)(s.DUT, {
            onMouseEnter: () => o("interactive-text-hover"),
            onMouseLeave: () => o("interactive-text-default"),
            onClick: () => {
                t(),
                    (0, g.Wn)(
                        G(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            i,
                        ),
                    );
            },
            className: L.wC,
            children: (0, r.jsx)(s.Text, {
                color: a,
                variant: "text-sm/normal",
                children: M.intl.string(M.t["+Xp3hq"]),
            }),
        }),
    });
};
