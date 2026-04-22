n.d(e, { k: () => k });
var i = n(627968),
    d = n(289873),
    r = n(189213),
    s = n(31502),
    h = n(975571),
    a = n(792656),
    b = n(597758),
    l = n(35587),
    o = n(593687),
    u = n(294219),
    c = n(788868),
    p = n(652215),
    m = n(985018),
    f = n(237146);
function k(t) {
    let { transitionState: e, onClose: n, partnerIds: k } = t,
        S = (0, u.G)(k),
        { promotionsLoaded: P } = (0, l.y7)();
    if (((0, s.l)("Premium3PRewardsLockedModal"), !1 === P)) return (0, i.jsx)(d.y, {});
    let R = h.A.getArticleURL(p.MVz.NITRO_2_POINT_0);
    return (0, i.jsxs)(r.Modal, {
        title: m.intl.string(m.t.NG1e6l),
        subtitle: m.intl.format(f.default.zS4GBR, { termsLink: R }),
        actions: [],
        preview: (0, i.jsx)(a.A, {
            subscriptionTier: c.pe.TIER_2,
            fullWidth: !0,
            onClick: () => {
                n();
            },
            onSubscribeModalClose: (t) => {
                if (t) return b.Ay.fetchActivePromotions();
            },
        }),
        transitionState: e,
        onClose: n,
        children: [!1, (0, i.jsx)(o._, { partnerIds: S })],
    });
}
