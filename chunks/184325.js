r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(315263),
    d = r(100527),
    f = r(906732),
    _ = r(768865),
    h = r(617136),
    p = r(497505),
    m = r(594174),
    g = r(626135),
    E = r(111361),
    v = r(291175),
    I = r(785717),
    T = r(221292),
    b = r(485341),
    y = r(797321),
    S = r(228168),
    A = r(981631),
    N = r(474936),
    C = r(388032),
    R = r(153225);
let O = (e) => {
    if (null != e)
        switch (e) {
            case N.JN.PREMIUM_TENURE_1_MONTH:
                return R.tieredTenureBadgeBronzeGlow;
            case N.JN.PREMIUM_TENURE_3_MONTH:
                return R.tieredTenureBadgeSilverGlow;
            case N.JN.PREMIUM_TENURE_6_MONTH:
                return R.tieredTenureBadgeGoldGlow;
            case N.JN.PREMIUM_TENURE_12_MONTH:
                return R.tieredTenureBadgePlatinumGlow;
            case N.JN.PREMIUM_TENURE_24_MONTH:
                return R.tieredTenureBadgeDiamondGlow;
            case N.JN.PREMIUM_TENURE_36_MONTH:
                return R.tieredTenureBadgeEmeraldGlow;
            case N.JN.PREMIUM_TENURE_60_MONTH:
                return R.tieredTenureBadgeRubyGlow;
            case N.JN.PREMIUM_TENURE_72_MONTH:
                return R.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function D(e) {
    let { badges: n, className: r, badgeClassName: i, onClose: o } = e,
        { analyticsLocations: D } = (0, f.ZP)(d.Z.BADGE),
        { context: L, trackUserProfileAction: x } = (0, I.KZ)(),
        [w, P] = s.useState(!1),
        M = m.default.getCurrentUser(),
        k = (0, E.yd)(null == M ? void 0 : M.premiumType, N.p9.TIER_2);
    return (0, a.jsx)('div', {
        className: l()(R.container, r),
        'aria-label': C.intl.string(C.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            let n = (0, v.fv)(e.id),
                r = (r) => {
                    if (
                        (x({ action: 'PRESS_BADGE' }),
                        (0, T.NE)({
                            badge: e.id,
                            analyticsLocations: D,
                            ...L
                        }),
                        null != n && 2 === n.badgeVersion && (r.preventDefault(), !k))
                    ) {
                        (0, _.k)(D), null == o || o();
                        return;
                    }
                    let i = null != e.link ? (0, c.default)(e.link, { analyticsLocations: D }) : null;
                    if (null != i) return null == o || o(), i(r);
                },
                s = () => {
                    e.id === b.i && g.default.track(A.rMx.QUEST_CONTENT_VIEWED, { ...(0, h.mH)(p.jn.QUEST_BADGE) }),
                        x({ action: 'HOVER_BADGE' }),
                        (0, T.Qf)({
                            badge: e.id,
                            analyticsLocations: D,
                            ...L
                        });
                },
                d = O(null == n ? void 0 : n.id),
                f = null != n && w;
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: e.description,
                    delay: S.vB,
                    tooltipClassName: d,
                    onTooltipShow: () => P(null != n),
                    onTooltipHide: () => P(!1),
                    children: (0, a.jsxs)(u.Anchor, {
                        onClick: r,
                        onMouseEnter: s,
                        href: e.link,
                        children: [
                            (0, a.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, S.jC)(e.icon),
                                className: l()(R.badge, i)
                            }),
                            f &&
                                (0, a.jsxs)('div', {
                                    className: R.starContainer,
                                    children: [(0, a.jsx)(y.Z, { className: R.topLeftStar }), (0, a.jsx)(y.Z, { className: R.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
