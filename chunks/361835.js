n.d(e, { Premium3PRewardsModalEntry: () => o });
var i = n(627968);
n(64700);
var d = n(311907),
    r = n(31502),
    s = n(287809),
    h = n(927578),
    a = n(588621),
    b = n(161319),
    l = n(788868);
function o(t) {
    let { transitionState: e, onClose: n, partnerIds: o } = t,
        u = (0, r.l)("NitroRewards3PRewardsModalEntry"),
        c = (0, d.bG)([s.default], () => s.default.getCurrentUser()),
        p = !1 === h.Ay.isPremiumExactly(c, l.PremiumTypes.TIER_2),
        m = c?.isFractionalPremiumWithNoStandardSub();
    return (null == c || p || m) && u
        ? (0, i.jsx)(a.k, { transitionState: e, onClose: n, partnerIds: o })
        : (0, i.jsx)(b.w, { transitionState: e, onClose: n, partnerIds: o });
}
