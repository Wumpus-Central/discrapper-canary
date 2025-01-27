r.d(n, {
    Z: function () {
        return x;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(315263),
    d = r(100527),
    f = r(906732),
    p = r(490248),
    h = r(768865),
    _ = r(617136),
    m = r(497505),
    g = r(703656),
    E = r(594174),
    v = r(626135),
    y = r(111361),
    b = r(291175),
    I = r(785717),
    T = r(221292),
    S = r(485341),
    A = r(797321),
    C = r(228168),
    N = r(981631),
    R = r(474936),
    O = r(388032),
    D = r(153225);
let L = (e) => {
    if (null != e)
        switch (e) {
            case R.JN.PREMIUM_TENURE_1_MONTH:
                return D.tieredTenureBadgeBronzeGlow;
            case R.JN.PREMIUM_TENURE_3_MONTH:
                return D.tieredTenureBadgeSilverGlow;
            case R.JN.PREMIUM_TENURE_6_MONTH:
                return D.tieredTenureBadgeGoldGlow;
            case R.JN.PREMIUM_TENURE_12_MONTH:
                return D.tieredTenureBadgePlatinumGlow;
            case R.JN.PREMIUM_TENURE_24_MONTH:
                return D.tieredTenureBadgeDiamondGlow;
            case R.JN.PREMIUM_TENURE_36_MONTH:
                return D.tieredTenureBadgeEmeraldGlow;
            case R.JN.PREMIUM_TENURE_60_MONTH:
                return D.tieredTenureBadgeRubyGlow;
            case R.JN.PREMIUM_TENURE_72_MONTH:
                return D.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function x(e) {
    let { badges: n, className: r, badgeClassName: i, onClose: s } = e,
        { analyticsLocations: x } = (0, f.ZP)(d.Z.BADGE),
        { context: w, trackUserProfileAction: P } = (0, I.KZ)(),
        [M, k] = o.useState(!1),
        U = E.default.getCurrentUser(),
        B = (0, y.yd)(null == U ? void 0 : U.premiumType, R.p9.TIER_2);
    return (0, a.jsx)('div', {
        className: l()(D.container, r),
        'aria-label': O.intl.string(O.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            let n = (0, b.fv)(e.id),
                r = (r) => {
                    if (
                        (P({ action: 'PRESS_BADGE' }),
                        (0, T.NE)({
                            badge: e.id,
                            analyticsLocations: x,
                            ...w
                        }),
                        (null == n ? void 0 : n.badgeVersion) === 2)
                    ) {
                        if ((r.preventDefault(), !B)) {
                            (0, h.k)(x), null == s || s();
                            return;
                        }
                        (0, g.uL)(N.Z5c.APPLICATION_STORE, {
                            source: d.Z.BADGE,
                            sourceLocationStack: x
                        }),
                            null == s || s();
                        return;
                    }
                    let i = null != e.link ? (0, c.default)(e.link, { analyticsLocations: x }) : null;
                    if (null != i) return null == s || s(), i(r);
                },
                o = () => {
                    e.id === S.i && v.default.track(N.rMx.QUEST_CONTENT_VIEWED, { ...(0, _.mH)(m.jn.QUEST_BADGE) }),
                        P({ action: 'HOVER_BADGE' }),
                        (0, T.Qf)({
                            badge: e.id,
                            analyticsLocations: x,
                            ...w
                        });
                },
                f = L(null == n ? void 0 : n.id),
                E = null != n && M,
                y =
                    (null == n ? void 0 : n.badgeVersion) === 2
                        ? (0, a.jsx)(p.Z, {
                              profileBadge: e,
                              tenureBadge: n
                          })
                        : e.description;
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: y,
                    'aria-label': e.description,
                    delay: C.vB,
                    tooltipClassName: f,
                    onTooltipShow: () => k(null != n && 1 === n.badgeVersion),
                    onTooltipHide: () => k(!1),
                    children: (0, a.jsxs)(u.Anchor, {
                        onClick: r,
                        onMouseEnter: o,
                        href: e.link,
                        children: [
                            (0, a.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, C.jC)(e.icon),
                                className: l()(D.badge, i)
                            }),
                            E &&
                                (0, a.jsxs)('div', {
                                    className: D.starContainer,
                                    children: [(0, a.jsx)(A.Z, { className: D.topLeftStar }), (0, a.jsx)(A.Z, { className: D.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
