i.d(t, {
    default: () => p,
    m: () => g
});
var n = i(200651);
i(192379);
var a = i(481060),
    o = i(230711),
    s = i(104494),
    l = i(639119),
    r = i(790527),
    c = i(474936),
    d = i(981631),
    u = i(388032),
    h = i(777447),
    m = i(784370);
function p(e) {
    var t, i;
    let { onClose: a, analyticsSource: p, ...g } = e,
        f = u.intl.format(u.t['JmbS+f'], {
            onClick: () => {
                o.Z.open(d.oAB.PREMIUM), a();
            }
        }),
        v = (0, l.N)(),
        x = (0, s.Ng)(),
        b = null != v || null != x;
    return (0, n.jsx)(r.Z, {
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
        subscribeButtonText: b ? void 0 : u.intl.string(u.t['8x0jKS']),
        subscriptionTier: null !== (i = null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : c.Si.TIER_2,
        backButtonText: u.intl.string(u.t.f3Pet7),
        ...g
    });
}
function g(e) {
    let { analytics: t } = e;
    (0, a.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 659215));
        return (i) =>
            (0, n.jsx)(e, {
                analyticsSource: t,
                ...i
            });
    });
}
