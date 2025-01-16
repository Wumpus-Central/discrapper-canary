n.r(t),
    n.d(t, {
        default: function () {
            return p;
        },
        openBurstReactionsUpsellModal: function () {
            return f;
        }
    });
var i = n(200651);
n(192379);
var o = n(481060),
    a = n(230711),
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
    let { onClose: o, analyticsSource: p, ...f } = e,
        g = u.intl.format(u.t['JmbS+f'], {
            onClick: () => {
                a.Z.open(d.oAB.PREMIUM), o();
            }
        }),
        v = (0, l.N)(),
        b = (0, s.Ng)(),
        T = null != v || null != b;
    return (0, i.jsx)(r.Z, {
        artURL: m,
        artContainerClassName: h.artContainer,
        modalClassName: h.modalContainer,
        bodyClassName: h.bodyContainer,
        type: c.cd.BURST_REACTION_UPSELL,
        title: u.intl.string(u.t.N4SCJy),
        body: g,
        glowUp: g,
        analyticsSource: p,
        analyticsLocation: {
            page: d.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
            object: d.qAy.BUTTON_CTA
        },
        onClose: o,
        subscribeButtonText: T ? void 0 : u.intl.string(u.t['8x0jKS']),
        subscriptionTier: null !== (n = null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : c.Si.TIER_2,
        backButtonText: u.intl.string(u.t.f3Pet7),
        ...f
    });
}
function f(e) {
    let { analytics: t } = e;
    (0, o.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) =>
            (0, i.jsx)(e, {
                analyticsSource: t,
                ...n
            });
    });
}
