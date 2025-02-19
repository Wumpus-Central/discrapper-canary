n.d(t, { Z: () => L }), n(47120), n(266796);
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
    p = n(768865),
    _ = n(617136),
    h = n(497505),
    m = n(703656),
    g = n(594174),
    E = n(626135),
    v = n(111361),
    b = n(291175),
    y = n(785717),
    O = n(221292),
    S = n(485341),
    I = n(797321),
    T = n(228168),
    N = n(981631),
    A = n(474936),
    C = n(681642),
    R = n(388032),
    P = n(566076);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
let x = (e) => {
    if (null != e)
        switch (e) {
            case A.JN.PREMIUM_TENURE_1_MONTH:
                return P.tieredTenureBadgeBronzeGlow;
            case A.JN.PREMIUM_TENURE_3_MONTH:
                return P.tieredTenureBadgeSilverGlow;
            case A.JN.PREMIUM_TENURE_6_MONTH:
                return P.tieredTenureBadgeGoldGlow;
            case A.JN.PREMIUM_TENURE_12_MONTH:
                return P.tieredTenureBadgePlatinumGlow;
            case A.JN.PREMIUM_TENURE_24_MONTH:
                return P.tieredTenureBadgeDiamondGlow;
            case A.JN.PREMIUM_TENURE_36_MONTH:
                return P.tieredTenureBadgeEmeraldGlow;
            case A.JN.PREMIUM_TENURE_60_MONTH:
                return P.tieredTenureBadgeRubyGlow;
            case A.JN.PREMIUM_TENURE_72_MONTH:
                return P.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function L(e) {
    let { badges: t, className: n, badgeClassName: o, displayProfile: w, onClose: L } = e,
        { analyticsLocations: M } = (0, u.ZP)(c.Z.BADGE),
        { context: k, trackUserProfileAction: j } = (0, y.KZ)(),
        [U, G] = i.useState(!1),
        B = g.default.getCurrentUser(),
        Z = (0, v.yd)(null == B ? void 0 : B.premiumType, A.p9.TIER_2),
        { isBadgeVersion2: F } = (0, d.D)();
    return (0, r.jsx)('div', {
        className: a()(P.container, n),
        'aria-label': R.NW.string(R.t.VWV0y8),
        role: 'group',
        children: t.map((e) => {
            let t = (0, b.fv)(e.id),
                n = F && (null != t || e.id === C.a),
                i = (t) => {
                    if (
                        (j({ action: 'PRESS_BADGE' }),
                        (0, O.NE)(
                            D(
                                {
                                    badge: e.id,
                                    analyticsLocations: M
                                },
                                k
                            )
                        ),
                        n)
                    ) {
                        if (
                            (t.preventDefault(),
                            E.default.track(N.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: Z,
                                viewed_user_id: null == w ? void 0 : w.userId
                            }),
                            Z)
                        ) {
                            (null == w ? void 0 : w.userId) === (null == B ? void 0 : B.id)
                                ? (0, m.uL)(N.Z5c.NITRO_HOME)
                                : (0, p.k)({
                                      analyticsLocations: M,
                                      displayProfile: w
                                  }),
                                null == L || L();
                            return;
                        }
                        if ((null == w ? void 0 : w.userId) === (null == B ? void 0 : B.id)) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: M }) : null;
                            if (null == n) return;
                            return null == L || L(), n(t);
                        }
                        return (
                            (0, p.k)({
                                analyticsLocations: M,
                                displayProfile: w
                            }),
                            void (null == L || L())
                        );
                    }
                    let r = null != e.link ? (0, l.default)(e.link, { analyticsLocations: M }) : null;
                    if (null != r) return null == L || L(), r(t);
                },
                c = () => {
                    e.id === S.i && E.default.track(N.rMx.QUEST_CONTENT_VIEWED, D({}, (0, _.mH)(h.jn.QUEST_BADGE))),
                        j({ action: 'HOVER_BADGE' }),
                        (0, O.Qf)(
                            D(
                                {
                                    badge: e.id,
                                    analyticsLocations: M
                                },
                                k
                            )
                        );
                },
                u = x(null == t ? void 0 : t.id),
                d = null != t && U,
                g =
                    n && e.id !== C.a
                        ? (0, r.jsx)(f.Z, {
                              profileBadge: e,
                              tenureBadge: t
                          })
                        : e.description;
            return (0, r.jsx)(
                s.DY3,
                {
                    text: g,
                    'aria-label': e.description,
                    delay: T.vB,
                    tooltipClassName: u,
                    onTooltipShow: () => G(null != t && 1 === t.badgeVersion),
                    onTooltipHide: () => G(!1),
                    children: (0, r.jsxs)(s.eee, {
                        onClick: i,
                        onMouseEnter: c,
                        href: e.link,
                        children: [
                            (0, r.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, T.jC)(e.icon),
                                className: a()(P.badge, o)
                            }),
                            d &&
                                (0, r.jsxs)('div', {
                                    className: P.starContainer,
                                    children: [(0, r.jsx)(I.Z, { className: P.topLeftStar }), (0, r.jsx)(I.Z, { className: P.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
