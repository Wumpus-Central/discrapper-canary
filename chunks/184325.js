n.d(t, { Z: () => F }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(315263),
    c = n(100527),
    u = n(906732),
    d = n(335131),
    f = n(307225),
    _ = n(494424),
    p = n(654939),
    h = n(927513),
    m = n(768865),
    g = n(617136),
    E = n(497505),
    b = n(703656),
    y = n(317257),
    O = n(976015),
    v = n(594174),
    I = n(626135),
    T = n(111361),
    S = n(291175),
    A = n(785717),
    C = n(221292),
    N = n(485341),
    R = n(687158),
    P = n(228168),
    D = n(981631),
    w = n(215023),
    L = n(474936),
    x = n(681642),
    M = n(388032),
    j = n(311838);
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
function B(e, t) {
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
let Z = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === y.l.ORB_PROFILE_BADGE
        ? (0, r.jsx)(O.Z, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== x.a
          ? (0, r.jsx)(h.Z, {
                profileBadge: t,
                tenureBadge: n,
            })
          : t.description;
};
function F(e) {
    var t;
    let {
            badges: n,
            className: a,
            badgeClassName: h,
            displayProfile: O,
            onClose: k,
            shouldOpenBadgeTooltip: G,
            shouldGlowTenureBadge: F,
        } = e,
        V = i.useRef(null),
        { analyticsLocations: H } = (0, u.ZP)(c.Z.BADGE),
        { context: Y, trackUserProfileAction: W } = (0, A.KZ)(),
        K = v.default.getCurrentUser(),
        z = (0, T.yd)(null == K ? void 0 : K.premiumType, L.PremiumTypes.TIER_2),
        q = (0, R.Of)(null != (t = null == K ? void 0 : K.id) ? t : null),
        X = (0, N.Z)(q).some((e) => e.id === y.l.ORB_PROFILE_BADGE),
        Q = (0, _.c)(K, "UserProfileBadgeList"),
        J = (0, f.B)("UserProfileBadgeList");
    return (0, r.jsx)("div", {
        className: o()(j.container, a),
        "aria-label": M.intl.string(M.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === y.l.ORB_PROFILE_BADGE,
                a = (0, S.fv)(e.id),
                u = null != a || e.id === x.a,
                f = (null == O ? void 0 : O.userId) === (null == K ? void 0 : K.id),
                v = (t) => {
                    if (
                        (W({ action: "PRESS_BADGE" }),
                        (0, C.NE)(
                            U(
                                {
                                    badge: e.id,
                                    analyticsLocations: H,
                                },
                                Y,
                            ),
                        ),
                        i)
                    )
                        return void (0, d.mK)({
                            tab: w.AW.ORBS,
                            analyticsLocations: H,
                            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (u) {
                        if (
                            (t.preventDefault(),
                            I.default.track(D.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: z,
                                viewed_user_id: null == O ? void 0 : O.userId,
                            }),
                            z)
                        ) {
                            f
                                ? (0, b.uL)(D.Z5c.NITRO_HOME)
                                : (0, m.k)({
                                      analyticsLocations: H,
                                      displayProfile: O,
                                  }),
                                null == k || k();
                            return;
                        }
                        if (f) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: H }) : null;
                            if (null == n) return;
                            return null == k || k(), n(t);
                        }
                        return (
                            (0, m.k)({
                                analyticsLocations: H,
                                displayProfile: O,
                            }),
                            void (null == k || k())
                        );
                    }
                    let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: H }) : null;
                    if (null != n) return null == k || k(), n(t);
                },
                T = () => {
                    e.id === N.i &&
                        I.default.track(
                            D.rMx.QUEST_CONTENT_VIEWED,
                            B(U({}, (0, g.mH)(E.jn.QUEST_BADGE)), { is_targeted: !1 }),
                        ),
                        W({ action: "HOVER_BADGE" }),
                        (0, C.Qf)(
                            U(
                                {
                                    badge: e.id,
                                    analyticsLocations: H,
                                },
                                Y,
                            ),
                        );
                },
                A = void 0 !== a && e.id !== x.a,
                R = A && J,
                L = f && Q && A,
                M = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, P.Ej)(e.icon),
                    className: o()(j.badge, h),
                }),
                q = {
                    onClick: v,
                    onMouseEnter: T,
                    href: e.link,
                    style: { filter: F && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0 },
                };
            if (R) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    B(U({}, q), {
                        ref: V,
                        children: M,
                    }),
                );
                return (0, r.jsx)(
                    p.Z,
                    {
                        badgeId: e.id,
                        targetElementRef: V,
                        mode: "tooltip",
                        tooltipDelay: P.vB,
                        body: e.description,
                        onShow: () => {
                            I.default.track(D.rMx.TOOLTIP_VIEWED, {
                                type: "tiered_tenure_badge_profile_" + (f ? "self" : "other"),
                            });
                        },
                        children: n,
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            if (L) {
                let n = (0, r.jsx)(
                    s.Anchor,
                    B(U({}, q), {
                        ref: V,
                        children: M,
                    }),
                );
                return (0, r.jsx)(
                    _.Z,
                    {
                        targetElementRef: V,
                        mode: "tooltip",
                        tooltipDelay: P.vB,
                        children: n,
                    },
                    "".concat(e.id, "-").concat(t),
                );
            }
            let $ = (0, r.jsx)(s.Anchor, B(U({}, q), { children: M })),
                ee = Z({
                    badge: e,
                    tieredTenureBadge: u && e.id !== x.a ? a : void 0,
                    currentUserOwnsOrbBadge: X,
                });
            return (0, r.jsx)(
                s.jSM,
                {
                    text: ee,
                    "aria-label": e.description,
                    forceOpen: null != G && G(e.id),
                    delay: P.vB,
                    children: $,
                },
                "".concat(e.id, "-").concat(t),
            );
        }),
    });
}
