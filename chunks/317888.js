n.d(e, { Premium3PRewardsModalEntry: () => w });
var i = n(627968);
n(64700);
var d = n(17928),
    r = n(715547),
    s = n(287809),
    h = n(927578),
    a = n(289873),
    b = n(189213),
    l = n(975571),
    o = n(792656),
    u = n(597758),
    c = n(35587),
    p = n(593687),
    m = n(294219),
    f = n(788868),
    S = n(652215),
    P = n(985018),
    R = n(237146);
function k(t) {
    let { transitionState: e, onClose: n, partnerIds: d } = t,
        s = (0, m.G)(d),
        { promotionsLoaded: h } = (0, c.y7)();
    if (((0, r.l)("Premium3PRewardsLockedModal"), !1 === h)) return (0, i.jsx)(a.y, {});
    let k = l.A.getArticleURL(S.MVz.NITRO_2_POINT_0);
    return (0, i.jsxs)(b.Modal, {
        title: P.intl.string(P.t.NG1e6l),
        subtitle: P.intl.format(R.default.zS4GBR, { termsLink: k }),
        actions: [],
        preview: (0, i.jsx)(o.A, {
            subscriptionTier: f.pe.TIER_2,
            fullWidth: !0,
            onClick: () => {
                n();
            },
            onSubscribeModalClose: (t) => {
                if (t) return u.Ay.fetchActivePromotions();
            },
        }),
        transitionState: e,
        onClose: n,
        children: [!1, (0, i.jsx)(p._, { partnerIds: s })],
    });
}
var C = n(382259);
function w(t) {
    let { transitionState: e, onClose: n, partnerIds: a } = t,
        b = (0, r.l)("NitroRewards3PRewardsModalEntry"),
        l = (0, d.bG)([s.default], () => s.default.getCurrentUser()),
        o = !1 === h.Ay.isPremiumExactly(l, f.PremiumTypes.TIER_2),
        u = l?.isFractionalPremiumWithNoStandardSub();
    return (null == l || o || u) && b
        ? (0, i.jsx)(k, { transitionState: e, onClose: n, partnerIds: a })
        : (0, i.jsx)(C.w, { transitionState: e, onClose: n, partnerIds: a });
}
