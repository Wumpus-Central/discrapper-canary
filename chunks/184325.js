n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(315263),
    u = n(100527),
    c = n(906732),
    d = n(490248),
    f = n(768865),
    _ = n(617136),
    p = n(497505),
    h = n(703656),
    m = n(594174),
    g = n(626135),
    E = n(111361),
    v = n(291175),
    y = n(785717),
    I = n(221292),
    T = n(485341),
    b = n(797321),
    S = n(228168),
    A = n(981631),
    N = n(474936),
    C = n(388032),
    R = n(600787);
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
    let { badges: t, className: n, badgeClassName: a, displayProfile: D, onClose: L } = e,
        { analyticsLocations: x } = (0, c.ZP)(u.Z.BADGE),
        { context: w, trackUserProfileAction: P } = (0, y.KZ)(),
        [M, k] = r.useState(!1),
        U = m.default.getCurrentUser(),
        G = (0, E.yd)(null == U ? void 0 : U.premiumType, N.p9.TIER_2);
    return (0, i.jsx)('div', {
        className: s()(R.container, n),
        'aria-label': C.intl.string(C.t.VWV0y8),
        role: 'group',
        children: t.map((e) => {
            let t = (0, v.fv)(e.id),
                n = (n) => {
                    if (
                        (P({ action: 'PRESS_BADGE' }),
                        (0, I.NE)({
                            badge: e.id,
                            analyticsLocations: x,
                            ...w
                        }),
                        (null == t ? void 0 : t.badgeVersion) === 2)
                    ) {
                        if (
                            (n.preventDefault(),
                            g.default.track(A.rMx.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: G,
                                viewed_user_id: null == D ? void 0 : D.userId
                            }),
                            !G)
                        ) {
                            (0, f.k)(x), null == L || L();
                            return;
                        }
                        (0, h.uL)(A.Z5c.APPLICATION_STORE, {
                            source: u.Z.BADGE,
                            sourceLocationStack: x
                        }),
                            null == L || L();
                        return;
                    }
                    let i = null != e.link ? (0, l.default)(e.link, { analyticsLocations: x }) : null;
                    if (null != i) return null == L || L(), i(n);
                },
                r = () => {
                    e.id === T.i && g.default.track(A.rMx.QUEST_CONTENT_VIEWED, { ...(0, _.mH)(p.jn.QUEST_BADGE) }),
                        P({ action: 'HOVER_BADGE' }),
                        (0, I.Qf)({
                            badge: e.id,
                            analyticsLocations: x,
                            ...w
                        });
                },
                c = O(null == t ? void 0 : t.id),
                m = null != t && M,
                E =
                    (null == t ? void 0 : t.badgeVersion) === 2
                        ? (0, i.jsx)(d.Z, {
                              profileBadge: e,
                              tenureBadge: t
                          })
                        : e.description;
            return (0, i.jsx)(
                o.DY3,
                {
                    text: E,
                    'aria-label': e.description,
                    delay: S.vB,
                    tooltipClassName: c,
                    onTooltipShow: () => k(null != t && 1 === t.badgeVersion),
                    onTooltipHide: () => k(!1),
                    children: (0, i.jsxs)(o.eee, {
                        onClick: n,
                        onMouseEnter: r,
                        href: e.link,
                        children: [
                            (0, i.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, S.jC)(e.icon),
                                className: s()(R.badge, a)
                            }),
                            m &&
                                (0, i.jsxs)('div', {
                                    className: R.starContainer,
                                    children: [(0, i.jsx)(b.Z, { className: R.topLeftStar }), (0, i.jsx)(b.Z, { className: R.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
