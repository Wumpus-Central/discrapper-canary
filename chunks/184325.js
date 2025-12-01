n.d(t, { Z: () => Z }), n(953529);
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
    _ = n(654939),
    p = n(927513),
    h = n(768865),
    m = n(617136),
    g = n(49436),
    E = n(703656),
    b = n(317257),
    y = n(976015),
    O = n(594174),
    v = n(626135),
    I = n(111361),
    T = n(291175),
    S = n(785717),
    A = n(221292),
    C = n(485341),
    N = n(687158),
    R = n(228168),
    P = n(981631),
    D = n(215023),
    w = n(474936),
    L = n(681642),
    x = n(388032),
    M = n(517793);
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
function j(e) {
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
let B = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === b.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(y.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== L.a
          ? (0, r.jsx)(p.Z, {
                profileBadge: t,
                tenureBadge: n,
            })
          : t.description;
};
function Z(e) {
    var t;
    let {
            badges: n,
            className: a,
            badgeClassName: p,
            displayProfile: y,
            onClose: k,
            shouldOpenBadgeTooltip: U,
            shouldGlowTenureBadge: Z,
        } = e,
        F = i.useRef(null),
        { analyticsLocations: V } = (0, u.ZP)(c.Z.BADGE),
        { context: H, trackUserProfileAction: W } = (0, S.KZ)(),
        Y = O.default.getCurrentUser(),
        K = (0, I.yd)(null == Y ? void 0 : Y.premiumType, w.PremiumTypes.TIER_2),
        z = (0, N.Of)(null != (t = null == Y ? void 0 : Y.id) ? t : null),
        q = (0, C.Z)(z).some((e) => e.id === b.l.ORB_PROFILE_BADGE),
        X = (0, f.c)(Y, "UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: o()(M.container, a),
        "aria-label": x.intl.string(x.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === b.l.ORB_PROFILE_BADGE,
                a = (0, T.fv)(e.id),
                u = null != a || e.id === L.a,
                O = (null == y ? void 0 : y.userId) === (null == Y ? void 0 : Y.id),
                I = (t) => {
                    if (
                        (W({ action: "PRESS_BADGE" }),
                        (0, A.NE)(
                            j(
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
                            tab: D.AW.ORBS,
                            analyticsLocations: V,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (u) {
                        if (
                            (t.preventDefault(),
                            v.default.track(P.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: K,
                                viewed_user_id: null == y ? void 0 : y.userId,
                            }),
                            K)
                        ) {
                            O
                                ? (0, E.uL)(P.Z5c.NITRO_HOME)
                                : (0, h.k)({
                                      analyticsLocations: V,
                                      displayProfile: y,
                                  }),
                                null == k || k();
                            return;
                        }
                        if (O) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: V }) : null;
                            if (null == n) return;
                            return null == k || k(), n(t);
                        }
                        return (
                            (0, h.k)({
                                analyticsLocations: V,
                                displayProfile: y,
                            }),
                            void (null == k || k())
                        );
                    }
                    let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: V }) : null;
                    if (null != n) return null == k || k(), n(t);
                },
                S = () => {
                    e.id === C.i &&
                        v.default.track(
                            P.rMx.QUEST_CONTENT_VIEWED,
                            G(j({}, (0, m.mH)(g.jn.QUEST_BADGE)), { is_targeted: !1 }),
                        ),
                        W({ action: "HOVER_BADGE" }),
                        (0, A.Qf)(
                            j(
                                {
                                    badge: e.id,
                                    analyticsLocations: V,
                                },
                                H,
                            ),
                        );
                },
                N = void 0 !== a && e.id !== L.a,
                w = O && X && N,
                x = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, R.Ej)(e.icon),
                    className: o()(M.badge, p),
                }),
                z = {
                    onClick: I,
                    onMouseEnter: S,
                    href: e.link,
                    style: { filter: Z && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0 },
                };
            if (w) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    G(j({}, z), {
                        ref: F,
                        children: x,
                    }),
                );
                return (0, r.jsx)(
                    f.Z,
                    {
                        targetElementRef: F,
                        mode: "tooltip",
                        tooltipDelay: R.vB,
                        children: n,
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            if (N) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    G(j({}, z), {
                        ref: F,
                        children: x,
                    }),
                );
                return (0, r.jsx)(
                    _.Z,
                    {
                        badgeId: e.id,
                        targetElementRef: F,
                        mode: "tooltip",
                        tooltipDelay: R.vB,
                        body: e.description,
                        onShow: () => {
                            v.default.track(P.rMx.TOOLTIP_VIEWED, {
                                type: "tiered_tenure_badge_profile_" + (O ? "self" : "other"),
                            });
                        },
                        estimatedTooltipHeight: 220,
                        children: n,
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let Q = (0, r.jsx)(s.Anchor, G(j({}, z), { children: x })),
                J = B({
                    badge: e,
                    tieredTenureBadge: u && e.id !== L.a ? a : void 0,
                    currentUserOwnsOrbBadge: q,
                });
            return (0, r.jsx)(
                s.jSM,
                {
                    text: J,
                    "aria-label": e.description,
                    forceOpen: null != U && U(e.id),
                    delay: R.vB,
                    children: Q,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
