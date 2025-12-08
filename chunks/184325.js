n.d(t, { Z: () => V }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(315263),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    f = n(963249),
    p = n(541337),
    _ = n(494424),
    m = n(654939),
    h = n(927513),
    g = n(768865),
    E = n(617136),
    b = n(49436),
    y = n(703656),
    O = n(317257),
    v = n(976015),
    S = n(594174),
    I = n(626135),
    T = n(111361),
    A = n(291175),
    C = n(785717),
    N = n(221292),
    P = n(485341),
    R = n(687158),
    w = n(228168),
    D = n(981631),
    x = n(215023),
    L = n(474936),
    j = n(681642),
    M = n(388032),
    k = n(517793);
function U(e, t, n) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === O.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(v.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== j.a
          ? (0, r.jsx)(h.Z, {
                profileBadge: t,
                tenureBadge: n,
            })
          : t.description;
};
function V(e) {
    var t;
    let {
            badges: n,
            className: a,
            badgeClassName: h,
            displayProfile: v,
            onClose: U,
            shouldOpenBadgeTooltip: Z,
            shouldGlowTenureBadge: V,
        } = e,
        H = i.useRef(null),
        { analyticsLocations: Y } = (0, u.ZP)(c.Z.BADGE),
        { context: W, trackUserProfileAction: K } = (0, C.KZ)(),
        z = S.default.getCurrentUser(),
        q = (0, T.yd)(null == z ? void 0 : z.premiumType, L.PremiumTypes.TIER_2),
        Q = (0, R.Of)(null != (t = null == z ? void 0 : z.id) ? t : null),
        X = (0, P.Z)(Q).some((e) => e.id === O.l.ORB_PROFILE_BADGE),
        J = (0, _.c)(z, "UserProfileBadgeList"),
        $ = (0, p.T)("UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: o()(k.container, a),
        "aria-label": M.intl.string(M.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === O.l.ORB_PROFILE_BADGE,
                a = (0, A.fv)(e.id),
                u = null != a || e.id === j.a,
                p = (null == v ? void 0 : v.userId) === (null == z ? void 0 : z.id),
                S = (t) => {
                    if (
                        (K({ action: "PRESS_BADGE" }),
                        (0, N.NE)(
                            G(
                                {
                                    badge: e.id,
                                    analyticsLocations: Y,
                                },
                                W,
                            ),
                        ),
                        i)
                    )
                        return void (0, d.mK)({
                            tab: x.AW.ORBS,
                            analyticsLocations: Y,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (u) {
                        if (
                            (t.preventDefault(),
                            I.default.track(D.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: q,
                                viewed_user_id: null == v ? void 0 : v.userId,
                            }),
                            q)
                        ) {
                            p
                                ? (0, y.uL)(D.Z5c.NITRO_HOME)
                                : (0, g.k)({
                                      analyticsLocations: Y,
                                      displayProfile: v,
                                  }),
                                null == U || U();
                            return;
                        }
                        if (p) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: Y }) : null;
                            if (null == n) return;
                            return null == U || U(), n(t);
                        }
                        return (
                            (0, g.k)({
                                analyticsLocations: Y,
                                displayProfile: v,
                            }),
                            void (null == U || U())
                        );
                    }
                    let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: Y }) : null;
                    if (null != n) return null == U || U(), n(t);
                },
                T = () => {
                    e.id === P.i &&
                        I.default.track(
                            D.rMx.QUEST_CONTENT_VIEWED,
                            B(G({}, (0, E.mH)(b.jn.QUEST_BADGE)), { is_targeted: !1 }),
                        ),
                        K({ action: "HOVER_BADGE" }),
                        (0, N.Qf)(
                            G(
                                {
                                    badge: e.id,
                                    analyticsLocations: Y,
                                },
                                W,
                            ),
                        );
                },
                C = void 0 !== a && e.id !== j.a,
                R = p && J && C,
                Q = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, w.Ej)(e.icon),
                    className: o()(k.badge, h),
                }),
                ee = {
                    onClick: S,
                    onMouseEnter: T,
                    href: e.link,
                    style: { filter: V && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0 },
                };
            if (R) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    B(G({}, ee), {
                        ref: H,
                        children: Q,
                    }),
                );
                return (0, r.jsx)(
                    "div",
                    {
                        "aria-label": e.description,
                        children: (0, r.jsx)(_.Z, {
                            targetElementRef: H,
                            mode: "tooltip",
                            tooltipDelay: w.vB,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            if (C) {
                let n = (0, r.jsx)(
                        s.Anchor,
                        B(G({}, ee), {
                            ref: H,
                            children: Q,
                        }),
                    ),
                    i = () => {
                        (0, f.Z)({
                            initialPlanId: null,
                            subscriptionTier: L.Si.TIER_2,
                            analyticsLocations: Y,
                        });
                    },
                    a = $ && !q,
                    o = a
                        ? [
                              {
                                  text: M.intl.string(M.t.pj0XBN),
                                  variant: "expressive",
                                  icon: s.SrA,
                                  iconPosition: "start",
                                  onClick: i,
                              },
                          ]
                        : void 0,
                    l = a ? 262 : 220;
                return (0, r.jsx)(
                    "div",
                    {
                        "aria-label": e.description,
                        children: (0, r.jsx)(m.Z, {
                            badgeId: e.id,
                            targetElementRef: H,
                            mode: "tooltip",
                            tooltipDelay: w.vB,
                            body: e.description,
                            actions: o,
                            onShow: () => {
                                I.default.track(D.rMx.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (p ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: l,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let et = (0, r.jsx)(s.Anchor, B(G({}, ee), { children: Q })),
                en = F({
                    badge: e,
                    tieredTenureBadge: u && e.id !== j.a ? a : void 0,
                    currentUserOwnsOrbBadge: X,
                });
            return (0, r.jsx)(
                s.jSM,
                {
                    text: en,
                    "aria-label": e.description,
                    forceOpen: null != Z && Z(e.id),
                    delay: w.vB,
                    children: et,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
