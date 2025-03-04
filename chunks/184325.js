n.d(t, { Z: () => j }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(315263),
    c = n(100527),
    u = n(906732),
    d = n(943180),
    f = n(490248),
    _ = n(768865),
    p = n(617136),
    h = n(497505),
    g = n(703656),
    m = n(317257),
    E = n(594174),
    v = n(626135),
    b = n(111361),
    y = n(291175),
    O = n(785717),
    S = n(221292),
    I = n(485341),
    T = n(797321),
    N = n(228168),
    A = n(981631),
    C = n(474936),
    R = n(681642),
    P = n(388032),
    D = n(219041),
    w = n(223640);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
let M = (e) => {
        if (null != e)
            switch (e) {
                case C.JN.PREMIUM_TENURE_1_MONTH:
                    return D.tieredTenureBadgeBronzeGlow;
                case C.JN.PREMIUM_TENURE_3_MONTH:
                    return D.tieredTenureBadgeSilverGlow;
                case C.JN.PREMIUM_TENURE_6_MONTH:
                    return D.tieredTenureBadgeGoldGlow;
                case C.JN.PREMIUM_TENURE_12_MONTH:
                    return D.tieredTenureBadgePlatinumGlow;
                case C.JN.PREMIUM_TENURE_24_MONTH:
                    return D.tieredTenureBadgeDiamondGlow;
                case C.JN.PREMIUM_TENURE_36_MONTH:
                    return D.tieredTenureBadgeEmeraldGlow;
                case C.JN.PREMIUM_TENURE_60_MONTH:
                    return D.tieredTenureBadgeRubyGlow;
                case C.JN.PREMIUM_TENURE_72_MONTH:
                    return D.tieredTenureBadgeFireGlow;
                default:
                    return;
            }
    },
    k = (e) => {
        let { badge: t, tieredTenureBadge: n } = e;
        return t.id === m.l.ORB_PROFILE_BADGE
            ? (0, r.jsx)(f.r4, { profileBadge: t })
            : void 0 !== n && t.id !== R.a
              ? (0, r.jsx)(f.L7, {
                    profileBadge: t,
                    tenureBadge: n
                })
              : t.description;
    };
function j(e) {
    let { badges: t, className: n, badgeClassName: o, displayProfile: f, onClose: L, shouldOpenBadgeTooltip: j } = e,
        { analyticsLocations: U } = (0, u.ZP)(c.Z.BADGE),
        { context: G, trackUserProfileAction: B } = (0, O.KZ)(),
        [V, F] = i.useState(!1),
        Z = E.default.getCurrentUser(),
        H = (0, b.yd)(null == Z ? void 0 : Z.premiumType, C.p9.TIER_2),
        { isBadgeVersion2: W } = (0, d.D)();
    return (0, r.jsx)('div', {
        className: a()(D.container, n),
        'aria-label': P.NW.string(P.t.VWV0y8),
        role: 'group',
        children: t.map((e) => {
            let t = e.id === m.l.ORB_PROFILE_BADGE,
                n = (0, y.fv)(e.id),
                i = W && (null != n || e.id === R.a),
                c = (t) => {
                    if (
                        (B({ action: 'PRESS_BADGE' }),
                        (0, S.NE)(
                            x(
                                {
                                    badge: e.id,
                                    analyticsLocations: U
                                },
                                G
                            )
                        ),
                        i)
                    ) {
                        if (
                            (t.preventDefault(),
                            v.default.track(A.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: H,
                                viewed_user_id: null == f ? void 0 : f.userId
                            }),
                            H)
                        ) {
                            (null == f ? void 0 : f.userId) === (null == Z ? void 0 : Z.id)
                                ? (0, g.uL)(A.Z5c.NITRO_HOME)
                                : (0, _.k)({
                                      analyticsLocations: U,
                                      displayProfile: f
                                  }),
                                null == L || L();
                            return;
                        }
                        if ((null == f ? void 0 : f.userId) === (null == Z ? void 0 : Z.id)) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: U }) : null;
                            if (null == n) return;
                            return null == L || L(), n(t);
                        }
                        return (
                            (0, _.k)({
                                analyticsLocations: U,
                                displayProfile: f
                            }),
                            void (null == L || L())
                        );
                    }
                    let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: U }) : null;
                    if (null != n) return null == L || L(), n(t);
                },
                u = () => {
                    e.id === I.i && v.default.track(A.rMx.QUEST_CONTENT_VIEWED, x({}, (0, p.mH)(h.jn.QUEST_BADGE))),
                        B({ action: 'HOVER_BADGE' }),
                        (0, S.Qf)(
                            x(
                                {
                                    badge: e.id,
                                    analyticsLocations: U
                                },
                                G
                            )
                        );
                },
                d = M(null == n ? void 0 : n.id),
                E = null != n && V,
                b = k({
                    badge: e,
                    tieredTenureBadge: i && e.id !== R.a ? n : void 0
                });
            return (0, r.jsx)(
                s.DY3,
                {
                    text: b,
                    'aria-label': e.description,
                    forceOpen: null != j && j(e.id),
                    delay: N.vB,
                    tooltipClassName: d,
                    onTooltipShow: () => F(null != n && 1 === n.badgeVersion),
                    onTooltipHide: () => F(!1),
                    children: (0, r.jsxs)(s.eee, {
                        onClick: c,
                        onMouseEnter: u,
                        href: e.link,
                        children: [
                            (0, r.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: t ? w : (0, N.jC)(e.icon),
                                className: a()(D.badge, o, { [D.orbBadge]: t })
                            }),
                            E &&
                                (0, r.jsxs)('div', {
                                    className: D.starContainer,
                                    children: [(0, r.jsx)(T.Z, { className: D.topLeftStar }), (0, r.jsx)(T.Z, { className: D.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
