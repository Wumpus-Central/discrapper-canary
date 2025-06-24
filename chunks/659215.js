n.d(t, {
    default: () => f,
    m: () => g
});
var i = n(255367);
n(73800);
var o = n(481060),
    l = n(230711),
    r = n(104494),
    a = n(639119),
    s = n(790527),
    c = n(474936),
    u = n(981631),
    d = n(388032),
    h = n(628755),
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
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['onClose', 'analyticsSource']);
    let b = d.intl.format(d.t['JmbS+f'], {
            onClick: () => {
                l.Z.open(u.oAB.PREMIUM), o();
            }
        }),
        j = (0, a.N)(),
        v = (0, r.Ng)(),
        O = null != j || null != v;
    return (0, i.jsx)(
        s.Z,
        m(
            {
                artURL: p,
                artContainerClassName: h.artContainer,
                modalClassName: h.modalContainer,
                bodyClassName: h.bodyContainer,
                type: c.cd.BURST_REACTION_UPSELL,
                title: d.intl.string(d.t.N4SCJy),
                body: b,
                glowUp: b,
                analyticsSource: f,
                analyticsLocation: {
                    page: u.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
                    object: u.qAy.BUTTON_CTA
                },
                onClose: o,
                subscribeButtonText: O ? void 0 : d.intl.string(d.t['8x0jKS']),
                subscriptionTier: null != (n = null == j || null == (t = j.subscription_trial) ? void 0 : t.sku_id) ? n : c.Si.TIER_2,
                backButtonText: d.intl.string(d.t.f3Pet7)
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
