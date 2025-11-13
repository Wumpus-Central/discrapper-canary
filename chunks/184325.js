n.d(t, { Z: () => U }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(315263),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(927513),
    f = n(768865),
    _ = n(617136),
    p = n(497505),
    h = n(703656),
    m = n(317257),
    g = n(976015),
    E = n(594174),
    b = n(626135),
    y = n(111361),
    O = n(291175),
    v = n(785717),
    I = n(221292),
    T = n(485341),
    S = n(687158),
    A = n(228168),
    C = n(981631),
    N = n(215023),
    R = n(474936),
    P = n(681642),
    D = n(388032),
    w = n(517793);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === m.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(g.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== P.a
          ? (0, r.jsx)(d.Z, {
                profileBadge: t,
                tenureBadge: n,
            })
          : t.description;
};
function U(e) {
    var t;
    let {
            badges: n,
            className: i,
            badgeClassName: d,
            displayProfile: g,
            onClose: x,
            shouldOpenBadgeTooltip: M,
            shouldGlowTenureBadge: U,
        } = e,
        { analyticsLocations: G } = (0, c.ZP)(l.Z.BADGE),
        { context: B, trackUserProfileAction: Z } = (0, v.KZ)(),
        F = E.default.getCurrentUser(),
        V = (0, y.yd)(null == F ? void 0 : F.premiumType, R.PremiumTypes.TIER_2),
        H = (0, S.Of)(null != (t = null == F ? void 0 : F.id) ? t : null),
        Y = (0, T.Z)(H).some((e) => e.id === m.l.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: a()(w.container, i),
        "aria-label": D.intl.string(D.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === m.l.ORB_PROFILE_BADGE,
                c = (0, O.fv)(e.id),
                E = null != c || e.id === P.a,
                y = (t) => {
                    if (
                        (Z({ action: "PRESS_BADGE" }),
                        (0, I.NE)(
                            L(
                                {
                                    badge: e.id,
                                    analyticsLocations: G,
                                },
                                B,
                            ),
                        ),
                        i)
                    )
                        return void (0, u.mK)({
                            tab: N.AW.ORBS,
                            analyticsLocations: G,
                            analyticsSource: l.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (E) {
                        if (
                            (t.preventDefault(),
                            b.default.track(C.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: V,
                                viewed_user_id: null == g ? void 0 : g.userId,
                            }),
                            V)
                        ) {
                            (null == g ? void 0 : g.userId) === (null == F ? void 0 : F.id)
                                ? (0, h.uL)(C.Z5c.NITRO_HOME)
                                : (0, f.k)({
                                      analyticsLocations: G,
                                      displayProfile: g,
                                  }),
                                null == x || x();
                            return;
                        }
                        if ((null == g ? void 0 : g.userId) === (null == F ? void 0 : F.id)) {
                            let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: G }) : null;
                            if (null == n) return;
                            return null == x || x(), n(t);
                        }
                        return (
                            (0, f.k)({
                                analyticsLocations: G,
                                displayProfile: g,
                            }),
                            void (null == x || x())
                        );
                    }
                    let n = null != e.link ? (0, s.default)(e.link, { analyticsLocations: G }) : null;
                    if (null != n) return null == x || x(), n(t);
                },
                v = () => {
                    e.id === T.i &&
                        b.default.track(
                            C.rMx.QUEST_CONTENT_VIEWED,
                            j(L({}, (0, _.mH)(p.jn.QUEST_BADGE)), { is_targeted: !1 }),
                        ),
                        Z({ action: "HOVER_BADGE" }),
                        (0, I.Qf)(
                            L(
                                {
                                    badge: e.id,
                                    analyticsLocations: G,
                                },
                                B,
                            ),
                        );
                },
                S = k({
                    badge: e,
                    tieredTenureBadge: E && e.id !== P.a ? c : void 0,
                    currentUserOwnsOrbBadge: Y,
                });
            return (0, r.jsx)(
                o.jSM,
                {
                    text: S,
                    "aria-label": e.description,
                    forceOpen: null != M && M(e.id),
                    delay: A.vB,
                    children: (0, r.jsx)(o.Anchor, {
                        onClick: y,
                        onMouseEnter: v,
                        href: e.link,
                        style: { filter: U && null != c ? "drop-shadow(0 0 5px ".concat(c.glowColor, ")") : void 0 },
                        children: (0, r.jsx)("img", {
                            alt: " ",
                            "aria-hidden": !0,
                            src: null != (n = e.iconSrc) ? n : (0, A.Ej)(e.icon),
                            className: a()(w.badge, d),
                        }),
                    }),
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
