n.d(t, {
    default: () => f,
    m: () => g
});
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(230711),
    a = n(104494),
    s = n(639119),
    l = n(790527),
    c = n(474936),
    u = n(981631),
    d = n(388032),
    h = n(12033),
    p = n(784370);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function f(e) {
    var t,
        n,
        { onClose: o, analyticsSource: f } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        o = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['onClose', 'analyticsSource']);
    let b = d.NW.format(d.t['JmbS+f'], {
            onClick: () => {
                r.Z.open(u.oAB.PREMIUM), o();
            }
        }),
        v = (0, s.N)(),
        j = (0, a.Ng)(),
        O = null != v || null != j;
    return (0, i.jsx)(
        l.Z,
        m(
            {
                artURL: p,
                artContainerClassName: h.artContainer,
                modalClassName: h.modalContainer,
                bodyClassName: h.bodyContainer,
                type: c.cd.BURST_REACTION_UPSELL,
                title: d.NW.string(d.t.N4SCJy),
                body: b,
                glowUp: b,
                analyticsSource: f,
                analyticsLocation: {
                    page: u.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
                    object: u.qAy.BUTTON_CTA
                },
                onClose: o,
                subscribeButtonText: O ? void 0 : d.NW.string(d.t['8x0jKS']),
                subscriptionTier: null !== (n = null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : c.Si.TIER_2,
                backButtonText: d.NW.string(d.t.f3Pet7)
            },
            g
        )
    );
}
function g(e) {
    let { analytics: t } = e;
    (0, o.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) => (0, i.jsx)(e, m({ analyticsSource: t }, n));
    });
}
