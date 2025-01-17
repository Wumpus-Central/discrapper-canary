r.d(n, {
    Z: function () {
        return x;
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
    _ = r(787528),
    h = r(768865),
    p = r(617136),
    m = r(497505),
    g = r(594174),
    E = r(483444),
    v = r(626135),
    I = r(111361),
    T = r(291175),
    b = r(785717),
    y = r(221292),
    S = r(485341),
    A = r(797321),
    N = r(228168),
    C = r(981631),
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
    let { badges: n, className: r, badgeClassName: i, onClose: o } = e,
        { analyticsLocations: x } = (0, f.ZP)(d.Z.BADGE),
        { context: w, trackUserProfileAction: P } = (0, b.KZ)(),
        [M, k] = s.useState(!1),
        U = g.default.getCurrentUser(),
        B = (0, I.yd)(null == U ? void 0 : U.premiumType, R.p9.TIER_2);
    return (0, a.jsx)('div', {
        className: l()(D.container, r),
        'aria-label': O.intl.string(O.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            let n = (0, T.fv)(e.id),
                r = (r) => {
                    if (
                        (P({ action: 'PRESS_BADGE' }),
                        (0, y.NE)({
                            badge: e.id,
                            analyticsLocations: x,
                            ...w
                        }),
                        null != n && 2 === n.badgeVersion && (r.preventDefault(), !B))
                    ) {
                        (0, h.k)(x), null == o || o();
                        return;
                    }
                    let i = null != e.link ? (0, c.default)(e.link, { analyticsLocations: x }) : null;
                    if (null != i) return null == o || o(), i(r);
                },
                s = () => {
                    e.id === S.i && v.default.track(C.rMx.QUEST_CONTENT_VIEWED, { ...(0, p.mH)(m.jn.QUEST_BADGE) }),
                        P({ action: 'HOVER_BADGE' }),
                        (0, y.Qf)({
                            badge: e.id,
                            analyticsLocations: x,
                            ...w
                        });
                },
                d = L(null == n ? void 0 : n.id),
                f = null != n && M,
                g =
                    (null == n ? void 0 : n.badgeVersion) === 2
                        ? (0, a.jsxs)('div', {
                              className: D.tieredTenureBadgeTooltip,
                              children: [
                                  (0, a.jsx)('img', {
                                      src: (0, _.J)(n.id),
                                      alt: ''
                                  }),
                                  (0, a.jsx)('div', {
                                      className: D.tieredTenureBadgeTooltipWordmarkContainer,
                                      children: (0, a.jsx)(E.Z, {
                                          width: 56,
                                          className: D.tieredTenureBadgeTooltipWordmark
                                      })
                                  }),
                                  (0, a.jsx)(u.Heading, {
                                      variant: 'heading-xl/extrabold',
                                      children: O.intl.string(n.nameUnformatted)
                                  }),
                                  (0, a.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      className: D.tieredTenureBadgeTooltipDescription,
                                      children: e.description
                                  })
                              ]
                          })
                        : e.description;
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: g,
                    'aria-label': e.description,
                    delay: N.vB,
                    tooltipClassName: d,
                    onTooltipShow: () => k(null != n && 1 === n.badgeVersion),
                    onTooltipHide: () => k(!1),
                    children: (0, a.jsxs)(u.Anchor, {
                        onClick: r,
                        onMouseEnter: s,
                        href: e.link,
                        children: [
                            (0, a.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, N.jC)(e.icon),
                                className: l()(D.badge, i)
                            }),
                            f &&
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
