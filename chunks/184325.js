n.d(t, { Z: () => H }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(315263),
    u = n(100527),
    d = n(906732),
    f = n(335131),
    p = n(963249),
    _ = n(541337),
    m = n(494424),
    h = n(654939),
    g = n(927513),
    E = n(768865),
    b = n(617136),
    y = n(49436),
    O = n(703656),
    v = n(317257),
    S = n(976015),
    I = n(594174),
    T = n(626135),
    C = n(111361),
    A = n(291175),
    N = n(785717),
    P = n(221292),
    R = n(485341),
    w = n(687158),
    D = n(228168),
    x = n(981631),
    L = n(215023),
    j = n(474936),
    M = n(681642),
    k = n(388032),
    U = n(112287);
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
function Z(e) {
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
let V = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === v.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(S.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== M.a
          ? (0, r.jsx)(g.Z, {
                profileBadge: t,
                tenureBadge: n,
            })
          : t.description;
};
function H(e) {
    var t;
    let {
            badges: n,
            className: a,
            badgeClassName: g,
            displayProfile: S,
            onClose: G,
            shouldOpenBadgeTooltip: F,
            shouldGlowTenureBadge: H,
        } = e,
        Y = i.useRef(null),
        { analyticsLocations: W } = (0, d.ZP)(u.Z.BADGE),
        { context: K, trackUserProfileAction: z } = (0, N.KZ)(),
        q = I.default.getCurrentUser(),
        Q = (0, C.yd)(null == q ? void 0 : q.premiumType, j.PremiumTypes.TIER_2),
        X = (0, w.Of)(null != (t = null == q ? void 0 : q.id) ? t : null),
        J = (0, R.Z)(X).some((e) => e.id === v.l.ORB_PROFILE_BADGE),
        $ = (0, m.c)(q, "UserProfileBadgeList"),
        ee = (0, _.T)("UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: o()(U.container, a),
        "aria-label": k.intl.string(k.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === v.l.ORB_PROFILE_BADGE,
                a = (0, A.fv)(e.id),
                d = null != a || e.id === M.a,
                _ = (null == S ? void 0 : S.userId) === (null == q ? void 0 : q.id),
                I = (t) => {
                    if (
                        (z({ action: "PRESS_BADGE" }),
                        (0, P.NE)(
                            Z(
                                {
                                    badge: e.id,
                                    analyticsLocations: W,
                                },
                                K,
                            ),
                        ),
                        i)
                    )
                        return void (0, f.mK)({
                            tab: L.AW.ORBS,
                            analyticsLocations: W,
                            analyticsSource: u.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (d) {
                        if (
                            (t.preventDefault(),
                            T.default.track(x.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: Q,
                                viewed_user_id: null == S ? void 0 : S.userId,
                            }),
                            Q)
                        ) {
                            _
                                ? (0, O.uL)(x.Z5c.NITRO_HOME)
                                : (0, E.k)({
                                      analyticsLocations: W,
                                      displayProfile: S,
                                  }),
                                null == G || G();
                            return;
                        }
                        if (_) {
                            let n = null != e.link ? (0, c.default)(e.link, { analyticsLocations: W }) : null;
                            if (null == n) return;
                            return null == G || G(), n(t);
                        }
                        return (
                            (0, E.k)({
                                analyticsLocations: W,
                                displayProfile: S,
                            }),
                            void (null == G || G())
                        );
                    }
                    let n = null != e.link ? (0, c.default)(e.link, { analyticsLocations: W }) : null;
                    if (null != n) return null == G || G(), n(t);
                },
                C = () => {
                    e.id === R.i &&
                        T.default.track(
                            x.rMx.QUEST_CONTENT_VIEWED,
                            B(Z({}, (0, b.mH)(y.jn.QUEST_BADGE)), { is_targeted: !1 }),
                        ),
                        z({ action: "HOVER_BADGE" }),
                        (0, P.Qf)(
                            Z(
                                {
                                    badge: e.id,
                                    analyticsLocations: W,
                                },
                                K,
                            ),
                        );
                },
                N = void 0 !== a && e.id !== M.a,
                w = _ && $ && N,
                X = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, D.Ej)(e.icon),
                    className: o()(U.badge, g),
                }),
                et = {
                    onClick: I,
                    onMouseEnter: C,
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: H && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0 },
                };
            if (w) {
                let n = (0, r.jsx)(
                    l.eee,
                    B(Z({}, et), {
                        ref: Y,
                        children: X,
                    }),
                );
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(m.Z, {
                            targetElementRef: Y,
                            mode: "tooltip",
                            tooltipDelay: D.vB,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            if (N) {
                let n = (0, r.jsx)(
                        l.eee,
                        B(Z({}, et), {
                            ref: Y,
                            children: X,
                        }),
                    ),
                    i = () => {
                        (0, p.Z)({
                            initialPlanId: null,
                            subscriptionTier: j.Si.TIER_2,
                            analyticsLocations: W,
                        });
                    },
                    a = ee && !Q,
                    o = a
                        ? [
                              {
                                  text: k.intl.string(k.t.pj0XBN),
                                  variant: "expressive",
                                  icon: l.SrA,
                                  iconPosition: "start",
                                  onClick: i,
                              },
                          ]
                        : void 0,
                    s = a ? 262 : 220;
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(h.Z, {
                            badgeId: e.id,
                            targetElementRef: Y,
                            mode: "tooltip",
                            tooltipDelay: D.vB,
                            body: e.description,
                            actions: o,
                            onShow: () => {
                                T.default.track(x.rMx.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: s,
                            children: n,
                        }),
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let en = (0, r.jsx)(l.eee, B(Z({}, et), { children: X })),
                er = V({
                    badge: e,
                    tieredTenureBadge: d && e.id !== M.a ? a : void 0,
                    currentUserOwnsOrbBadge: J,
                });
            return (0, r.jsx)(
                s.u,
                {
                    __unsupportedReactNodeAsText: er,
                    forceOpen: null != F && F(e.id),
                    delay: D.vB,
                    ariaHidden: !0,
                    children: en,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
