n.d(t, {
    A: () => Y,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    c = n(352423),
    u = n(793574),
    d = n(688810),
    f = n(979286),
    p = n(532794),
    _ = n(22354),
    h = n(987237),
    m = n(508591),
    g = n(603538),
    E = n(30084),
    b = n(216456),
    y = n(341915),
    O = n(976860),
    A = n(305003),
    v = n(588455),
    S = n(287809),
    I = n(954571),
    T = n(474090),
    C = n(439174),
    N = n(183555),
    R = n(672385),
    w = n(262),
    P = n(950191),
    D = n(518477),
    x = n(652215),
    L = n(758836),
    j = n(788868),
    M = n(854232),
    k = n(985018),
    U = n(448263);

function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function V(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}

function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === A.A.ORB_PROFILE_BADGE
        ? (0, r.jsx)(v.A, {
              showSubtext: !i && !t.isPreviewMode,
          })
        : void 0 !== n && t.id !== M.K
          ? (0, r.jsx)(g.A, {
                profileBadge: t,
                tenureBadge: n,
            })
          : t.description;
};

function Y(e) {
    var t;
    let {
            badges: n,
            className: a,
            badgeClassName: g,
            displayProfile: v,
            onClose: G,
            shouldOpenBadgeTooltip: F,
            shouldGlowTenureBadge: Y,
        } = e,
        W = i.useRef(null),
        { analyticsLocations: K } = (0, d.Ay)(u.A.BADGE),
        { context: z, trackUserProfileAction: q } = (0, N.NJ)(),
        X = S.default.getCurrentUser(),
        Z = (0, T.CC)(null == X ? void 0 : X.premiumType, j.PremiumTypes.TIER_2),
        Q = (0, P.AP)(null != (t = null == X ? void 0 : X.id) ? t : null),
        $ = (0, w.A)(Q).some((e) => e.id === A.A.ORB_PROFILE_BADGE),
        J = (0, h.C)(X, "UserProfileBadgeList"),
        ee = (0, _.X)("UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: s()(U.k, a),
        "aria-label": k.intl.string(k.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === A.A.ORB_PROFILE_BADGE,
                a = (0, C.e0)(e.id),
                d = null != a || e.id === M.K,
                _ = (null == v ? void 0 : v.userId) === (null == X ? void 0 : X.id),
                S = (t) => {
                    if (
                        (q({
                            action: "PRESS_BADGE",
                        }),
                        (0, R.R9)(
                            V(
                                {
                                    badge: e.id,
                                    analyticsLocations: K,
                                },
                                z,
                            ),
                        ),
                        i)
                    )
                        return void (0, f.Cz)({
                            tab: L.G2.ORBS,
                            analyticsLocations: K,
                            analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (d) {
                        if (
                            (t.preventDefault(),
                            I.default.track(x.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: Z,
                                viewed_user_id: null == v ? void 0 : v.userId,
                            }),
                            Z)
                        ) {
                            _
                                ? (0, O.pX)(x.BVt.NITRO_HOME)
                                : (0, E.D)({
                                      analyticsLocations: K,
                                      displayProfile: v,
                                  }),
                                null == G || G();
                            return;
                        }
                        if (_) {
                            let n =
                                null != e.link
                                    ? (0, c.default)(e.link, {
                                          analyticsLocations: K,
                                      })
                                    : null;
                            if (null == n) return;
                            return null == G || G(), n(t);
                        }
                        return (
                            (0, E.D)({
                                analyticsLocations: K,
                                displayProfile: v,
                            }),
                            void (null == G || G())
                        );
                    }
                    let n =
                        null != e.link
                            ? (0, c.default)(e.link, {
                                  analyticsLocations: K,
                              })
                            : null;
                    if (null != n) return null == G || G(), n(t);
                },
                T = () => {
                    e.id === w.h &&
                        I.default.track(
                            x.HAw.QUEST_CONTENT_VIEWED,
                            B(V({}, (0, b.fF)(y.uF.QUEST_BADGE)), {
                                is_targeted: !1,
                            }),
                        ),
                        q({
                            action: "HOVER_BADGE",
                        }),
                        (0, R.sQ)(
                            V(
                                {
                                    badge: e.id,
                                    analyticsLocations: K,
                                },
                                z,
                            ),
                        );
                },
                N = void 0 !== a && e.id !== M.K,
                P = _ && J && N,
                Q = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, D.L7)(e.icon),
                    className: s()(U.q, g),
                }),
                et = {
                    onClick: S,
                    onMouseEnter: T,
                    href: e.link,
                    "aria-label": e.description,
                    style: {
                        filter: Y && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0,
                    },
                };
            if (P) {
                let n = (0, r.jsx)(
                    l.MzZ,
                    B(V({}, et), {
                        ref: W,
                        children: Q,
                    }),
                );
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(h.A, {
                            targetElementRef: W,
                            mode: "tooltip",
                            tooltipDelay: D.In,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            if (N) {
                let n = (0, r.jsx)(
                        l.MzZ,
                        B(V({}, et), {
                            ref: W,
                            children: Q,
                        }),
                    ),
                    i = () => {
                        (0, p.A)({
                            initialPlanId: null,
                            subscriptionTier: j.pe.TIER_2,
                            analyticsLocations: K,
                        });
                    },
                    a = ee && !Z,
                    s = a
                        ? [
                              {
                                  text: k.intl.string(k.t.pj0XBN),
                                  variant: "expressive",
                                  icon: l.tvc,
                                  iconPosition: "start",
                                  onClick: i,
                              },
                          ]
                        : void 0,
                    o = a ? 262 : 220;
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(m.A, {
                            badgeId: e.id,
                            targetElementRef: W,
                            mode: "tooltip",
                            tooltipDelay: D.In,
                            body: e.description,
                            actions: s,
                            onShow: () => {
                                I.default.track(x.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: o,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let en = (0, r.jsx)(
                    l.MzZ,
                    B(V({}, et), {
                        children: Q,
                    }),
                ),
                er = H({
                    badge: e,
                    tieredTenureBadge: d && e.id !== M.K ? a : void 0,
                    currentUserOwnsOrbBadge: $,
                });
            return (0, r.jsx)(
                o.m,
                {
                    __unsupportedReactNodeAsText: er,
                    forceOpen: null != F && F(e.id),
                    delay: D.In,
                    ariaHidden: !0,
                    children: en,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
