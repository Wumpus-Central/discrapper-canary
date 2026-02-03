n.d(t, {
    A: () => U,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(92674),
    s = n(158954),
    a = n(311907),
    o = n(397927),
    c = n(736653),
    u = n(793574),
    d = n(688810),
    p = n(713517),
    h = n(182592),
    g = n(594832),
    f = n(183555),
    m = n(672385),
    b = n(622543),
    A = n(950191),
    y = n(679492),
    O = n(657331),
    j = n(718019),
    x = n(915614),
    _ = n(439053),
    v = n(379654),
    E = n(946356),
    C = n(490752),
    S = n(587168),
    I = n(193738),
    N = n(853397),
    T = n(159218),
    P = n(534189),
    w = n(179242),
    R = n(968975),
    D = n(518477),
    L = n(996988),
    M = n(985018),
    G = n(743789);

function k(e) {
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

function U(e) {
    var t;
    let { user: n, currentUser: m, channel: U } = e,
        B = __OVERLAY__,
        H = (0, A.Ay)(n.id),
        F = (0, c.Ay)(),
        Y = l.useRef(Date.now()),
        { analyticsLocations: K } = (0, d.Ay)(u.A.USER_PROFILE_SIDEBAR),
        W = (0, f.pb)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: U.id,
        }),
        z = l.useRef(null),
        { isHoveringOrFocusing: X, isHovering: q } = (0, p.A)(z),
        J = (0, y.fC)(),
        Q = (0, o.zhh)({
            opacity: +(null != J.interactionType),
            config: {
                duration: 150,
            },
        }),
        Z = (e) => {
            (0, O.openUserProfileModal)(
                k(
                    {
                        sourceAnalyticsLocations: K,
                        hideRestrictedProfile: !0,
                    },
                    W,
                    e,
                ),
            );
        },
        $ = (null == H ? void 0 : H.widgets) != null && H.widgets.length > 0,
        { defaultWishlistId: ee } = (0, a.cf)([b.A], () => ({
            defaultWishlistId: b.A.getFirstWishlistId(n.id),
        })),
        { wishlist: et } = (0, g.fw)({
            wishlistId: ee,
            userId: n.id,
        }),
        en = l.useMemo(() => (null == et ? null : et.items.filter((e) => !e.isOwned)), [et]);
    return (0, r.jsx)(d.f5, {
        value: K,
        children: (0, r.jsx)(f.of, {
            value: W,
            openedAt: Y.current,
            fetchStartedAt: null == H ? void 0 : H.fetchStartedAt,
            fetchEndedAt: null == H ? void 0 : H.fetchEndedAt,
            isLoaded: null == H ? void 0 : H.isLoaded,
            children: (0, r.jsx)(y.Hl, {
                value: J,
                children: (0, r.jsxs)(E.A, {
                    ref: z,
                    user: n,
                    displayProfile: H,
                    themeType: L.d.SIDEBAR,
                    themeOverride: F,
                    children: [
                        null != J.interactionType &&
                            (0, r.jsx)(i.animated.div, {
                                style: Q,
                                className: G.tB,
                            }),
                        (0, r.jsxs)(s.d_W, {
                            children: [
                                (0, r.jsxs)(S.A, {
                                    children: [
                                        (0, r.jsx)(I.A, {
                                            user: n,
                                            themeType: L.d.SIDEBAR,
                                        }),
                                        n.bot
                                            ? (0, r.jsx)(C.A, {
                                                  user: n,
                                              })
                                            : (0, r.jsx)(N.yo, {
                                                  user: n,
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: G.wx,
                                    children: [
                                        (0, r.jsx)(x.A, {
                                            user: n,
                                            displayProfile: H,
                                            themeType: L.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !X,
                                            className: G.vK,
                                        }),
                                        (0, r.jsx)(_.A, {
                                            userId: n.id,
                                            className: G.oR,
                                        }),
                                        (0, r.jsx)(j.A, {
                                            user: n,
                                            displayProfile: H,
                                            channelId: U.id,
                                            themeType: L.d.SIDEBAR,
                                            onOpenProfile: B ? void 0 : Z,
                                        }),
                                        (0, r.jsx)(T.A, {
                                            user: n,
                                            channelId: U.id,
                                            themeType: L.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(P.A, {
                                    user: n,
                                    currentUser: m,
                                    displayProfile: H,
                                    channel: U,
                                    isHoveringOrFocusing: null == J.interactionType && X,
                                    onOpenProfile: B ? void 0 : Z,
                                }),
                                $ &&
                                    (0, r.jsx)("div", {
                                        className: G.sJ,
                                        children: (0, r.jsx)(v.A, {
                                            user: n,
                                            widgets: H.widgets,
                                            onOpenUserProfileModal: Z,
                                        }),
                                    }),
                                null != en &&
                                    en.length > 0 &&
                                    (0, r.jsx)("div", {
                                        className: G.vS,
                                        children: (0, r.jsx)(R.A, {
                                            profileOwner: n,
                                            unownedWishlistItems: en,
                                            wishlistId: ee,
                                            title: M.intl.string(M.t["7lZ31J"]),
                                            onClick: () => {
                                                null == Z ||
                                                    Z({
                                                        tabSection: D.RP.WISHLIST,
                                                    });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(w.A, {
                                    user: n,
                                    channelId: U.id,
                                }),
                            ],
                        }),
                        !B &&
                            (0, r.jsx)(V, {
                                handleOpenProfile: Z,
                                analyticsLocations: K,
                                context: W,
                            }),
                        (null == H ? void 0 : H.profileEffect) != null &&
                            (0, r.jsx)(h.A, {
                                skuId: null == H || null == (t = H.profileEffect) ? void 0 : t.skuId,
                                isHovering: q,
                            }),
                    ],
                }),
            }),
        }),
    });
}
let V = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: i } = e,
        [s, a] = l.useState("interactive-text-default");
    return (0, r.jsx)("div", {
        className: G.qr,
        children: (0, r.jsx)(o.DUT, {
            onMouseEnter: () => a("interactive-text-hover"),
            onMouseLeave: () => a("interactive-text-default"),
            onClick: () => {
                t(),
                    (0, m.Wn)(
                        k(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            i,
                        ),
                    );
            },
            className: G.wC,
            children: (0, r.jsx)(o.Text, {
                color: s,
                variant: "text-sm/normal",
                children: M.intl.string(M.t["+Xp3hq"]),
            }),
        }),
    });
};
