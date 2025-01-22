r.d(n, {
    Z: function () {
        return w;
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
    p = r(787528),
    h = r(768865),
    _ = r(617136),
    m = r(497505),
    g = r(703656),
    E = r(594174),
    v = r(483444),
    y = r(626135),
    b = r(111361),
    I = r(291175),
    T = r(785717),
    S = r(221292),
    A = r(485341),
    C = r(797321),
    N = r(228168),
    R = r(981631),
    O = r(474936),
    D = r(388032),
    L = r(153225);
let x = (e) => {
    if (null != e)
        switch (e) {
            case O.JN.PREMIUM_TENURE_1_MONTH:
                return L.tieredTenureBadgeBronzeGlow;
            case O.JN.PREMIUM_TENURE_3_MONTH:
                return L.tieredTenureBadgeSilverGlow;
            case O.JN.PREMIUM_TENURE_6_MONTH:
                return L.tieredTenureBadgeGoldGlow;
            case O.JN.PREMIUM_TENURE_12_MONTH:
                return L.tieredTenureBadgePlatinumGlow;
            case O.JN.PREMIUM_TENURE_24_MONTH:
                return L.tieredTenureBadgeDiamondGlow;
            case O.JN.PREMIUM_TENURE_36_MONTH:
                return L.tieredTenureBadgeEmeraldGlow;
            case O.JN.PREMIUM_TENURE_60_MONTH:
                return L.tieredTenureBadgeRubyGlow;
            case O.JN.PREMIUM_TENURE_72_MONTH:
                return L.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function w(e) {
    let { badges: n, className: r, badgeClassName: i, onClose: s } = e,
        { analyticsLocations: w } = (0, f.ZP)(d.Z.BADGE),
        { context: P, trackUserProfileAction: M } = (0, T.KZ)(),
        [k, U] = o.useState(!1),
        B = E.default.getCurrentUser(),
        G = (0, b.yd)(null == B ? void 0 : B.premiumType, O.p9.TIER_2);
    return (0, a.jsx)('div', {
        className: l()(L.container, r),
        'aria-label': D.intl.string(D.t.VWV0y8),
        role: 'group',
        children: n.map((e) => {
            let n = (0, I.fv)(e.id),
                r = (r) => {
                    if (
                        (M({ action: 'PRESS_BADGE' }),
                        (0, S.NE)({
                            badge: e.id,
                            analyticsLocations: w,
                            ...P
                        }),
                        (null == n ? void 0 : n.badgeVersion) === 2)
                    ) {
                        if ((r.preventDefault(), !G)) {
                            (0, h.k)(w), null == s || s();
                            return;
                        }
                        (0, g.uL)(R.Z5c.APPLICATION_STORE, {
                            source: d.Z.BADGE,
                            sourceLocationStack: w,
                            search: '?autoScroll=true'
                        }),
                            null == s || s();
                        return;
                    }
                    let i = null != e.link ? (0, c.default)(e.link, { analyticsLocations: w }) : null;
                    if (null != i) return null == s || s(), i(r);
                },
                o = () => {
                    e.id === A.i && y.default.track(R.rMx.QUEST_CONTENT_VIEWED, { ...(0, _.mH)(m.jn.QUEST_BADGE) }),
                        M({ action: 'HOVER_BADGE' }),
                        (0, S.Qf)({
                            badge: e.id,
                            analyticsLocations: w,
                            ...P
                        });
                },
                f = x(null == n ? void 0 : n.id),
                E = null != n && k,
                b =
                    (null == n ? void 0 : n.badgeVersion) === 2
                        ? (0, a.jsxs)('div', {
                              className: L.tieredTenureBadgeTooltip,
                              children: [
                                  (0, a.jsx)('img', {
                                      src: (0, p.J)(n.id),
                                      alt: ''
                                  }),
                                  (0, a.jsx)('div', {
                                      className: L.tieredTenureBadgeTooltipWordmarkContainer,
                                      children: (0, a.jsx)(v.Z, {
                                          width: 56,
                                          className: L.tieredTenureBadgeTooltipWordmark
                                      })
                                  }),
                                  (0, a.jsx)(u.Heading, {
                                      variant: 'heading-xl/extrabold',
                                      children: D.intl.string(n.nameUnformatted)
                                  }),
                                  (0, a.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      className: L.tieredTenureBadgeTooltipDescription,
                                      children: e.description
                                  })
                              ]
                          })
                        : e.description;
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: b,
                    'aria-label': e.description,
                    delay: N.vB,
                    tooltipClassName: f,
                    onTooltipShow: () => U(null != n && 1 === n.badgeVersion),
                    onTooltipHide: () => U(!1),
                    children: (0, a.jsxs)(u.Anchor, {
                        onClick: r,
                        onMouseEnter: o,
                        href: e.link,
                        children: [
                            (0, a.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, N.jC)(e.icon),
                                className: l()(L.badge, i)
                            }),
                            E &&
                                (0, a.jsxs)('div', {
                                    className: L.starContainer,
                                    children: [(0, a.jsx)(C.Z, { className: L.topLeftStar }), (0, a.jsx)(C.Z, { className: L.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
