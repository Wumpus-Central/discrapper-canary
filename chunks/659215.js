n.d(t, {
    default: () => f,
    m: () => g
});
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(230711),
    a = n(104494),
    s = n(639119),
    l = n(790527),
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
        { onClose: r, analyticsSource: f } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['onClose', 'analyticsSource']);
    let b = d.NW.format(d.t['JmbS+f'], {
            onClick: () => {
                o.Z.open(u.oAB.PREMIUM), r();
            }
        }),
        j = (0, s.N)(),
        v = (0, a.Ng)(),
        O = null != j || null != v;
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
                onClose: r,
                subscribeButtonText: O ? void 0 : d.NW.string(d.t['8x0jKS']),
                subscriptionTier: null != (n = null == j || null == (t = j.subscription_trial) ? void 0 : t.sku_id) ? n : c.Si.TIER_2,
                backButtonText: d.NW.string(d.t.f3Pet7)
            },
            g
        )
    );
}
function g(e) {
    let { analytics: t } = e;
    (0, r.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) => (0, i.jsx)(e, m({ analyticsSource: t }, n));
    });
}
