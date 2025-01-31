n.d(t, {
    default: () => p,
    m: () => g
});
var i = n(200651);
n(192379);
var a = n(481060),
    o = n(230711),
    s = n(104494),
    l = n(639119),
    r = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    h = n(941604),
    m = n(784370);
function p(e) {
    var t, n;
    let { onClose: a, analyticsSource: p, ...g } = e,
        f = u.intl.format(u.t['JmbS+f'], {
            onClick: () => {
                o.Z.open(d.oAB.PREMIUM), a();
            }
        }),
        v = (0, l.N)(),
        T = (0, s.Ng)(),
        x = null != v || null != T;
    return (0, i.jsx)(r.Z, {
        artURL: m,
        artContainerClassName: h.artContainer,
        modalClassName: h.modalContainer,
        bodyClassName: h.bodyContainer,
        type: c.cd.BURST_REACTION_UPSELL,
        title: u.intl.string(u.t.N4SCJy),
        body: f,
        glowUp: f,
        analyticsSource: p,
        analyticsLocation: {
            page: d.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
            object: d.qAy.BUTTON_CTA
        },
        onClose: a,
        subscribeButtonText: x ? void 0 : u.intl.string(u.t['8x0jKS']),
        subscriptionTier: null !== (n = null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : c.Si.TIER_2,
        backButtonText: u.intl.string(u.t.f3Pet7),
        ...g
    });
}
function g(e) {
    let { analytics: t } = e;
    (0, a.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) =>
            (0, i.jsx)(e, {
                analyticsSource: t,
                ...n
            });
    });
}
