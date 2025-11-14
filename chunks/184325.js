n.d(t, { Z: () => B }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(315263),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    f = n(494424),
    _ = n(927513),
    p = n(768865),
    h = n(617136),
    m = n(497505),
    g = n(703656),
    E = n(317257),
    b = n(976015),
    y = n(594174),
    O = n(626135),
    v = n(111361),
    I = n(291175),
    T = n(785717),
    S = n(221292),
    A = n(485341),
    C = n(687158),
    N = n(228168),
    R = n(981631),
    P = n(215023),
    D = n(474936),
    w = n(681642),
    x = n(388032),
    L = n(517793);
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
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === E.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(b.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== w.a
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
            displayProfile: b,
            onClose: M,
            shouldOpenBadgeTooltip: j,
            shouldGlowTenureBadge: B,
        } = e,
        Z = i.useRef(null),
        { analyticsLocations: F } = (0, u.ZP)(c.Z.BADGE),
        { context: V, trackUserProfileAction: H } = (0, T.KZ)(),
        Y = y.default.getCurrentUser(),
        W = (0, v.yd)(null == Y ? void 0 : Y.premiumType, D.PremiumTypes.TIER_2),
        K = (0, C.Of)(null != (t = null == Y ? void 0 : Y.id) ? t : null),
        z = (0, A.Z)(K).some((e) => e.id === E.l.ORB_PROFILE_BADGE),
        q = (0, f.c)(Y, "UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: o()(L.container, a),
        "aria-label": x.intl.string(x.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === E.l.ORB_PROFILE_BADGE,
                a = (0, I.fv)(e.id),
                u = null != a || e.id === w.a,
                y = (t) => {
                    if (
                        (H({ action: "PRESS_BADGE" }),
                        (0, S.NE)(
                            k(
                                {
                                    badge: e.id,
                                    analyticsLocations: F,
                                },
                                V,
                            ),
                        ),
                        i)
                    )
                        return void (0, d.mK)({
                            tab: P.AW.ORBS,
                            analyticsLocations: F,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (u) {
                        if (
                            (t.preventDefault(),
                            O.default.track(R.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: W,
                                viewed_user_id: null == b ? void 0 : b.userId,
                            }),
                            W)
                        ) {
                            (null == b ? void 0 : b.userId) === (null == Y ? void 0 : Y.id)
                                ? (0, g.uL)(R.Z5c.NITRO_HOME)
                                : (0, p.k)({
                                      analyticsLocations: F,
                                      displayProfile: b,
                                  }),
                                null == M || M();
                            return;
                        }
                        if ((null == b ? void 0 : b.userId) === (null == Y ? void 0 : Y.id)) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: F }) : null;
                            if (null == n) return;
                            return null == M || M(), n(t);
                        }
                        return (
                            (0, p.k)({
                                analyticsLocations: F,
                                displayProfile: b,
                            }),
                            void (null == M || M())
                        );
                    }
                    let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: F }) : null;
                    if (null != n) return null == M || M(), n(t);
                },
                v = () => {
                    e.id === A.i &&
                        O.default.track(
                            R.rMx.QUEST_CONTENT_VIEWED,
                            U(k({}, (0, h.mH)(m.jn.QUEST_BADGE)), { is_targeted: !1 }),
                        ),
                        H({ action: "HOVER_BADGE" }),
                        (0, S.Qf)(
                            k(
                                {
                                    badge: e.id,
                                    analyticsLocations: F,
                                },
                                V,
                            ),
                        );
                },
                T =
                    (null == b ? void 0 : b.userId) === (null == Y ? void 0 : Y.id) &&
                    q &&
                    void 0 !== a &&
                    e.id !== w.a,
                C = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, N.Ej)(e.icon),
                    className: o()(L.badge, _),
                }),
                D = {
                    onClick: y,
                    onMouseEnter: v,
                    href: e.link,
                    style: { filter: B && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0 },
                };
            if (T) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    U(k({}, D), {
                        ref: Z,
                        children: C,
                    }),
                );
                return (0, r.jsx)(
                    f.Z,
                    {
                        targetElementRef: Z,
                        mode: "tooltip",
                        tooltipDelay: N.vB,
                        children: n,
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let x = (0, r.jsx)(s.Anchor, U(k({}, D), { children: C })),
                K = G({
                    badge: e,
                    tieredTenureBadge: u && e.id !== w.a ? a : void 0,
                    currentUserOwnsOrbBadge: z,
                });
            return (0, r.jsx)(
                s.jSM,
                {
                    text: K,
                    "aria-label": e.description,
                    forceOpen: null != j && j(e.id),
                    delay: N.vB,
                    children: x,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
