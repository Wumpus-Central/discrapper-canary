n.d(t, { Z: () => B }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(315263),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    f = n(494424),
    p = n(654939),
    _ = n(927513),
    m = n(768865),
    h = n(617136),
    g = n(49436),
    E = n(703656),
    b = n(317257),
    y = n(976015),
    O = n(594174),
    v = n(626135),
    S = n(111361),
    I = n(291175),
    T = n(785717),
    A = n(221292),
    C = n(485341),
    N = n(687158),
    P = n(228168),
    R = n(981631),
    w = n(215023),
    D = n(474936),
    x = n(681642),
    L = n(388032),
    j = n(517793);
function M(e, t, n) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === b.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(y.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== x.a
          ? (0, r.jsx)(_.Z, {
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
            badgeClassName: _,
            displayProfile: y,
            onClose: M,
            shouldOpenBadgeTooltip: U,
            shouldGlowTenureBadge: B,
        } = e,
        F = i.useRef(null),
        { analyticsLocations: V } = (0, u.ZP)(c.Z.BADGE),
        { context: H, trackUserProfileAction: Y } = (0, T.KZ)(),
        W = O.default.getCurrentUser(),
        K = (0, S.yd)(null == W ? void 0 : W.premiumType, D.PremiumTypes.TIER_2),
        z = (0, N.Of)(null != (t = null == W ? void 0 : W.id) ? t : null),
        q = (0, C.Z)(z).some((e) => e.id === b.l.ORB_PROFILE_BADGE),
        Q = (0, f.c)(W, "UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: o()(j.container, a),
        "aria-label": L.intl.string(L.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === b.l.ORB_PROFILE_BADGE,
                a = (0, I.fv)(e.id),
                u = null != a || e.id === x.a,
                O = (null == y ? void 0 : y.userId) === (null == W ? void 0 : W.id),
                S = (t) => {
                    if (
                        (Y({ action: "PRESS_BADGE" }),
                        (0, A.NE)(
                            k(
                                {
                                    badge: e.id,
                                    analyticsLocations: V,
                                },
                                H,
                            ),
                        ),
                        i)
                    )
                        return void (0, d.mK)({
                            tab: w.AW.ORBS,
                            analyticsLocations: V,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (u) {
                        if (
                            (t.preventDefault(),
                            v.default.track(R.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: K,
                                viewed_user_id: null == y ? void 0 : y.userId,
                            }),
                            K)
                        ) {
                            O
                                ? (0, E.uL)(R.Z5c.NITRO_HOME)
                                : (0, m.k)({
                                      analyticsLocations: V,
                                      displayProfile: y,
                                  }),
                                null == M || M();
                            return;
                        }
                        if (O) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: V }) : null;
                            if (null == n) return;
                            return null == M || M(), n(t);
                        }
                        return (
                            (0, m.k)({
                                analyticsLocations: V,
                                displayProfile: y,
                            }),
                            void (null == M || M())
                        );
                    }
                    let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: V }) : null;
                    if (null != n) return null == M || M(), n(t);
                },
                T = () => {
                    e.id === C.i &&
                        v.default.track(
                            R.rMx.QUEST_CONTENT_VIEWED,
                            G(k({}, (0, h.mH)(g.jn.QUEST_BADGE)), { is_targeted: !1 }),
                        ),
                        Y({ action: "HOVER_BADGE" }),
                        (0, A.Qf)(
                            k(
                                {
                                    badge: e.id,
                                    analyticsLocations: V,
                                },
                                H,
                            ),
                        );
                },
                N = void 0 !== a && e.id !== x.a,
                D = O && Q && N,
                L = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, P.Ej)(e.icon),
                    className: o()(j.badge, _),
                }),
                z = {
                    onClick: S,
                    onMouseEnter: T,
                    href: e.link,
                    style: { filter: B && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0 },
                };
            if (D) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    G(k({}, z), {
                        ref: F,
                        children: L,
                    }),
                );
                return (0, r.jsx)(
                    f.Z,
                    {
                        targetElementRef: F,
                        mode: "tooltip",
                        tooltipDelay: P.vB,
                        children: n,
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            if (N) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    G(k({}, z), {
                        ref: F,
                        children: L,
                    }),
                );
                return (0, r.jsx)(
                    p.Z,
                    {
                        badgeId: e.id,
                        targetElementRef: F,
                        mode: "tooltip",
                        tooltipDelay: P.vB,
                        body: e.description,
                        onShow: () => {
                            v.default.track(R.rMx.TOOLTIP_VIEWED, {
                                type: "tiered_tenure_badge_profile_" + (O ? "self" : "other"),
                            });
                        },
                        estimatedTooltipHeight: 220,
                        children: n,
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let X = (0, r.jsx)(s.Anchor, G(k({}, z), { children: L })),
                J = Z({
                    badge: e,
                    tieredTenureBadge: u && e.id !== x.a ? a : void 0,
                    currentUserOwnsOrbBadge: q,
                });
            return (0, r.jsx)(
                s.jSM,
                {
                    text: J,
                    "aria-label": e.description,
                    forceOpen: null != U && U(e.id),
                    delay: P.vB,
                    children: X,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
