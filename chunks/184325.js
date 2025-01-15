r.d(n, {
    Z: function () {
        return C;
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
    _ = r(617136),
    h = r(497505),
    p = r(626135),
    m = r(291175),
    g = r(785717),
    E = r(221292),
    v = r(485341),
    I = r(797321),
    T = r(228168),
    b = r(981631),
    y = r(474936),
    S = r(388032),
    A = r(1906);
let N = (e) => {
    if (null != e)
        switch (e) {
            case y.VU.PREMIUM_TENURE_1_MONTH:
                return A.tieredTenureBadgeBronzeGlow;
            case y.VU.PREMIUM_TENURE_3_MONTH:
                return A.tieredTenureBadgeSilverGlow;
            case y.VU.PREMIUM_TENURE_6_MONTH:
                return A.tieredTenureBadgeGoldGlow;
            case y.VU.PREMIUM_TENURE_12_MONTH:
                return A.tieredTenureBadgePlatinumGlow;
            case y.VU.PREMIUM_TENURE_24_MONTH:
                return A.tieredTenureBadgeDiamondGlow;
            case y.VU.PREMIUM_TENURE_36_MONTH:
                return A.tieredTenureBadgeEmeraldGlow;
            case y.VU.PREMIUM_TENURE_60_MONTH:
                return A.tieredTenureBadgeRubyGlow;
            case y.VU.PREMIUM_TENURE_72_MONTH:
                return A.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function C(e) {
    let { badges: n, className: r, badgeClassName: i, onClose: o } = e,
        { analyticsLocations: y } = (0, f.ZP)(d.Z.BADGE),
        { context: C, trackUserProfileAction: R } = (0, g.KZ)(),
        [O, D] = s.useState(!1);
    return (0, a.jsx)('div', {
        className: l()(A.container, r),
        'aria-label': S.intl.string(S.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            let n = (n) => {
                    R({ action: 'PRESS_BADGE' }),
                        (0, E.NE)({
                            badge: e.id,
                            analyticsLocations: y,
                            ...C
                        });
                    let r = null != e.link ? (0, c.default)(e.link, { analyticsLocations: y }) : null;
                    if (null != r) return null == o || o(), r(n);
                },
                r = () => {
                    e.id === v.i && p.default.track(b.rMx.QUEST_CONTENT_VIEWED, { ...(0, _.mH)(h.jn.QUEST_BADGE) }),
                        R({ action: 'HOVER_BADGE' }),
                        (0, E.Qf)({
                            badge: e.id,
                            analyticsLocations: y,
                            ...C
                        });
                },
                s = (0, m.gn)(e.id),
                d = N(s),
                f = null != s && O;
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: e.description,
                    delay: T.vB,
                    tooltipClassName: d,
                    onTooltipShow: () => D(null != s),
                    onTooltipHide: () => D(!1),
                    children: (0, a.jsxs)(u.Anchor, {
                        onClick: n,
                        onMouseEnter: r,
                        href: e.link,
                        children: [
                            (0, a.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, T.jC)(e.icon),
                                className: l()(A.badge, i)
                            }),
                            f &&
                                (0, a.jsxs)('div', {
                                    className: A.starContainer,
                                    children: [(0, a.jsx)(I.Z, { className: A.topLeftStar }), (0, a.jsx)(I.Z, { className: A.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
