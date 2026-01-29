n.d(t, {
    A: () => U,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(353709),
    s = n(158954),
    a = n(311907),
    o = n(397927),
    c = n(736653),
    u = n(793574),
    d = n(688810),
    p = n(713517),
    h = n(182592),
    f = n(594832),
    g = n(183555),
    m = n(672385),
    b = n(622543),
    A = n(950191),
    y = n(679492),
    _ = n(657331),
    O = n(718019),
    j = n(915614),
    v = n(439053),
    x = n(379654),
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
    M = n(996988),
    L = n(985018),
    k = n(743789);

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

function U(e) {
    var t;
    let { user: n, currentUser: m, channel: U } = e,
        V = __OVERLAY__,
        F = (0, A.Ay)(n.id),
        H = (0, c.Ay)(),
        K = l.useRef(Date.now()),
        { analyticsLocations: W } = (0, d.Ay)(u.A.USER_PROFILE_SIDEBAR),
        z = (0, g.pb)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: U.id,
        }),
        Y = l.useRef(null),
        { isHoveringOrFocusing: q, isHovering: X } = (0, p.A)(Y),
        J = (0, y.fC)(),
        Q = (0, o.zhh)({
            opacity: +(null != J.interactionType),
            config: {
                duration: 150,
            },
        }),
        Z = (e) => {
            (0, _.openUserProfileModal)(
                G(
                    {
                        sourceAnalyticsLocations: W,
                        hideRestrictedProfile: !0,
                    },
                    z,
                    e,
                ),
            );
        },
        $ = (null == F ? void 0 : F.widgets) != null && F.widgets.length > 0,
        { defaultWishlistId: ee } = (0, a.cf)([b.A], () => ({
            defaultWishlistId: b.A.getFirstWishlistId(n.id),
        })),
        { wishlist: et } = (0, f.fw)({
            wishlistId: ee,
            userId: n.id,
        }),
        en = l.useMemo(() => (null == et ? null : et.items.filter((e) => !e.isOwned)), [et]);
    return (0, r.jsx)(d.f5, {
        value: W,
        children: (0, r.jsx)(g.of, {
            value: z,
            openedAt: K.current,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(y.Hl, {
                value: J,
                children: (0, r.jsxs)(E.A, {
                    ref: Y,
                    user: n,
                    displayProfile: F,
                    themeType: M.d.SIDEBAR,
                    themeOverride: H,
                    children: [
                        null != J.interactionType &&
                            (0, r.jsx)(i.animated.div, {
                                style: Q,
                                className: k.tB,
                            }),
                        (0, r.jsxs)(s.d_W, {
                            children: [
                                (0, r.jsxs)(S.A, {
                                    children: [
                                        (0, r.jsx)(I.A, {
                                            user: n,
                                            themeType: M.d.SIDEBAR,
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
                                    className: k.wx,
                                    children: [
                                        (0, r.jsx)(j.A, {
                                            user: n,
                                            displayProfile: F,
                                            themeType: M.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !q,
                                            className: k.vK,
                                        }),
                                        (0, r.jsx)(v.A, {
                                            userId: n.id,
                                            className: k.oR,
                                        }),
                                        (0, r.jsx)(O.A, {
                                            user: n,
                                            displayProfile: F,
                                            channelId: U.id,
                                            themeType: M.d.SIDEBAR,
                                            onOpenProfile: V ? void 0 : Z,
                                        }),
                                        (0, r.jsx)(T.A, {
                                            user: n,
                                            channelId: U.id,
                                            themeType: M.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(P.A, {
                                    user: n,
                                    currentUser: m,
                                    displayProfile: F,
                                    channel: U,
                                    isHoveringOrFocusing: null == J.interactionType && q,
                                    onOpenProfile: V ? void 0 : Z,
                                }),
                                $ &&
                                    (0, r.jsx)("div", {
                                        className: k.sJ,
                                        children: (0, r.jsx)(x.A, {
                                            user: n,
                                            widgets: F.widgets,
                                            onOpenUserProfileModal: Z,
                                        }),
                                    }),
                                null != en &&
                                    en.length > 0 &&
                                    (0, r.jsx)("div", {
                                        className: k.vS,
                                        children: (0, r.jsx)(R.A, {
                                            profileOwner: n,
                                            unownedWishlistItems: en,
                                            wishlistId: ee,
                                            title: L.intl.string(L.t["7lZ31J"]),
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
                        !V &&
                            (0, r.jsx)(B, {
                                handleOpenProfile: Z,
                                analyticsLocations: W,
                                context: z,
                            }),
                        (null == F ? void 0 : F.profileEffect) != null &&
                            (0, r.jsx)(h.A, {
                                skuId: null == F || null == (t = F.profileEffect) ? void 0 : t.skuId,
                                isHovering: X,
                            }),
                    ],
                }),
            }),
        }),
    });
}
let B = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: i } = e,
        [s, a] = l.useState("interactive-text-default");
    return (0, r.jsx)("div", {
        className: k.qr,
        children: (0, r.jsx)(o.DUT, {
            onMouseEnter: () => a("interactive-text-hover"),
            onMouseLeave: () => a("interactive-text-default"),
            onClick: () => {
                t(),
                    (0, m.Wn)(
                        G(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            i,
                        ),
                    );
            },
            className: k.wC,
            children: (0, r.jsx)(o.Text, {
                color: s,
                variant: "text-sm/normal",
                children: L.intl.string(L.t["+Xp3hq"]),
            }),
        }),
    });
};
