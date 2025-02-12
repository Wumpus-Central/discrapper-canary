n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(315263),
    u = n(100527),
    c = n(906732),
    d = n(943180),
    f = n(490248),
    _ = n(768865),
    p = n(617136),
    h = n(497505),
    m = n(703656),
    g = n(594174),
    E = n(626135),
    v = n(111361),
    y = n(291175),
    I = n(785717),
    T = n(221292),
    b = n(485341),
    S = n(797321),
    A = n(228168),
    N = n(981631),
    C = n(474936),
    R = n(681642),
    O = n(388032),
    D = n(196683);
let L = (e) => {
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
};
function x(e) {
    let { badges: t, className: n, badgeClassName: a, displayProfile: x, onClose: P } = e,
        { analyticsLocations: w } = (0, c.ZP)(u.Z.BADGE),
        { context: M, trackUserProfileAction: k } = (0, I.KZ)(),
        [U, G] = r.useState(!1),
        B = g.default.getCurrentUser(),
        Z = (0, v.yd)(null == B ? void 0 : B.premiumType, C.p9.TIER_2),
        { isBadgeVersion2: F } = (0, d.D)();
    return (0, i.jsx)('div', {
        className: s()(D.container, n),
        'aria-label': O.intl.string(O.t.VWV0y8),
        role: 'group',
        children: t.map((e) => {
            let t = (0, y.fv)(e.id),
                n = F && (null != t || e.id === R.a),
                r = (t) => {
                    if (
                        (k({ action: 'PRESS_BADGE' }),
                        (0, T.NE)({
                            badge: e.id,
                            analyticsLocations: w,
                            ...M
                        }),
                        n)
                    ) {
                        if (
                            (t.preventDefault(),
                            E.default.track(N.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: Z,
                                viewed_user_id: null == x ? void 0 : x.userId
                            }),
                            Z)
                        ) {
                            (null == x ? void 0 : x.userId) === (null == B ? void 0 : B.id)
                                ? (0, m.uL)(N.Z5c.NITRO_HOME)
                                : (0, _.k)({
                                      analyticsLocations: w,
                                      displayProfile: x
                                  }),
                                null == P || P();
                            return;
                        }
                        if ((null == x ? void 0 : x.userId) === (null == B ? void 0 : B.id)) {
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: w }) : null;
                            if (null == n) return;
                            return null == P || P(), n(t);
                        }
                        return (
                            (0, _.k)({
                                analyticsLocations: w,
                                displayProfile: x
                            }),
                            void (null == P || P())
                        );
                    }
                    let i = null != e.link ? (0, l.default)(e.link, { analyticsLocations: w }) : null;
                    if (null != i) return null == P || P(), i(t);
                },
                u = () => {
                    e.id === b.i && E.default.track(N.rMx.QUEST_CONTENT_VIEWED, { ...(0, p.mH)(h.jn.QUEST_BADGE) }),
                        k({ action: 'HOVER_BADGE' }),
                        (0, T.Qf)({
                            badge: e.id,
                            analyticsLocations: w,
                            ...M
                        });
                },
                c = L(null == t ? void 0 : t.id),
                d = null != t && U,
                g =
                    n && e.id !== R.a
                        ? (0, i.jsx)(f.Z, {
                              profileBadge: e,
                              tenureBadge: t
                          })
                        : e.description;
            return (0, i.jsx)(
                o.DY3,
                {
                    text: g,
                    'aria-label': e.description,
                    delay: A.vB,
                    tooltipClassName: c,
                    onTooltipShow: () => G(null != t && 1 === t.badgeVersion),
                    onTooltipHide: () => G(!1),
                    children: (0, i.jsxs)(o.eee, {
                        onClick: r,
                        onMouseEnter: u,
                        href: e.link,
                        children: [
                            (0, i.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, A.jC)(e.icon),
                                className: s()(D.badge, a)
                            }),
                            d &&
                                (0, i.jsxs)('div', {
                                    className: D.starContainer,
                                    children: [(0, i.jsx)(S.Z, { className: D.topLeftStar }), (0, i.jsx)(S.Z, { className: D.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
