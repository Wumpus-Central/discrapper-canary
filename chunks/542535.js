n.d(t, {
    A: () => B,
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
    p = n(987237),
    _ = n(508591),
    h = n(603538),
    m = n(30084),
    g = n(216456),
    E = n(341915),
    y = n(976860),
    b = n(305003),
    O = n(588455),
    v = n(287809),
    A = n(954571),
    I = n(474090),
    S = n(439174),
    T = n(183555),
    C = n(672385),
    N = n(262),
    w = n(950191),
    R = n(518477),
    P = n(652215),
    D = n(758836),
    x = n(788868),
    L = n(854232),
    j = n(985018),
    M = n(448263);

function k(e, t, n) {
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

function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}

function G(e, t) {
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

function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === b.A.ORB_PROFILE_BADGE
        ? (0, r.jsx)(O.A, {
              showSubtext: !i && !t.isPreviewMode,
          })
        : void 0 !== n && t.id !== L.K
          ? (0, r.jsx)(h.A, {
                profileBadge: t,
                tenureBadge: n,
            })
          : t.description;
};

function B(e) {
    var t;
    let {
            badges: n,
            className: a,
            badgeClassName: h,
            displayProfile: O,
            onClose: k,
            shouldOpenBadgeTooltip: G,
            shouldGlowTenureBadge: B,
        } = e,
        H = i.useRef(null),
        { analyticsLocations: Y } = (0, d.Ay)(u.A.BADGE),
        { context: W, trackUserProfileAction: K } = (0, T.NJ)(),
        z = v.default.getCurrentUser(),
        q = (0, I.CC)(null == z ? void 0 : z.premiumType, x.PremiumTypes.TIER_2),
        Z = (0, w.AP)(null != (t = null == z ? void 0 : z.id) ? t : null),
        X = (0, N.A)(Z).some((e) => e.id === b.A.ORB_PROFILE_BADGE),
        Q = (0, p.C)(z, "UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: s()(M.k, a),
        "aria-label": j.intl.string(j.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === b.A.ORB_PROFILE_BADGE,
                a = (0, S.e0)(e.id),
                d = null != a || e.id === L.K,
                v = (null == O ? void 0 : O.userId) === (null == z ? void 0 : z.id),
                I = (t) => {
                    if (
                        (K({
                            action: "PRESS_BADGE",
                        }),
                        (0, C.R9)(
                            U(
                                {
                                    badge: e.id,
                                    analyticsLocations: Y,
                                },
                                W,
                            ),
                        ),
                        i)
                    )
                        return void (0, f.Cz)({
                            tab: D.G2.ORBS,
                            analyticsLocations: Y,
                            analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (d) {
                        if (
                            (t.preventDefault(),
                            A.default.track(P.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: q,
                                viewed_user_id: null == O ? void 0 : O.userId,
                            }),
                            q)
                        ) {
                            v
                                ? (0, y.pX)(P.BVt.NITRO_HOME)
                                : (0, m.D)({
                                      analyticsLocations: Y,
                                      displayProfile: O,
                                  }),
                                null == k || k();
                            return;
                        }
                        if (v) {
                            let n =
                                null != e.link
                                    ? (0, c.default)(e.link, {
                                          analyticsLocations: Y,
                                      })
                                    : null;
                            if (null == n) return;
                            return null == k || k(), n(t);
                        }
                        return (
                            (0, m.D)({
                                analyticsLocations: Y,
                                displayProfile: O,
                            }),
                            void (null == k || k())
                        );
                    }
                    let n =
                        null != e.link
                            ? (0, c.default)(e.link, {
                                  analyticsLocations: Y,
                              })
                            : null;
                    if (null != n) return null == k || k(), n(t);
                },
                T = () => {
                    e.id === N.h &&
                        A.default.track(
                            P.HAw.QUEST_CONTENT_VIEWED,
                            V(U({}, (0, g.fF)(E.uF.QUEST_BADGE)), {
                                is_targeted: !1,
                            }),
                        ),
                        K({
                            action: "HOVER_BADGE",
                        }),
                        (0, C.sQ)(
                            U(
                                {
                                    badge: e.id,
                                    analyticsLocations: Y,
                                },
                                W,
                            ),
                        );
                },
                w = void 0 !== a && e.id !== L.K,
                x = v && Q && w,
                j = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, R.L7)(e.icon),
                    className: s()(M.q, h),
                }),
                Z = {
                    onClick: I,
                    onMouseEnter: T,
                    href: e.link,
                    "aria-label": e.description,
                    style: {
                        filter: B && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0,
                    },
                };
            if (x) {
                let n = (0, r.jsx)(
                    l.MzZ,
                    V(U({}, Z), {
                        ref: H,
                        children: j,
                    }),
                );
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(p.A, {
                            targetElementRef: H,
                            mode: "tooltip",
                            tooltipDelay: R.In,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            if (w) {
                let n = (0, r.jsx)(
                    l.MzZ,
                    V(U({}, Z), {
                        ref: H,
                        children: j,
                    }),
                );
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(_.A, {
                            badgeId: e.id,
                            targetElementRef: H,
                            mode: "tooltip",
                            tooltipDelay: R.In,
                            body: e.description,
                            onShow: () => {
                                A.default.track(P.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (v ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: 220,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let J = (0, r.jsx)(
                    l.MzZ,
                    V(U({}, Z), {
                        children: j,
                    }),
                ),
                $ = F({
                    badge: e,
                    tieredTenureBadge: d && e.id !== L.K ? a : void 0,
                    currentUserOwnsOrbBadge: X,
                });
            return (0, r.jsx)(
                o.m,
                {
                    __unsupportedReactNodeAsText: $,
                    forceOpen: null != G && G(e.id),
                    delay: R.In,
                    ariaHidden: !0,
                    children: J,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
