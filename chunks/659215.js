n.d(t, {
    default: () => m,
    m: () => g
});
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(230711),
    l = n(104494),
    s = n(639119),
    a = n(790527),
    c = n(474936),
    u = n(981631),
    d = n(388032),
    h = n(628755),
    p = n(784370);
function f(e) {
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
function m(e) {
    var t,
        n,
        { onClose: r, analyticsSource: m } = e,
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
    let b = d.intl.format(d.t['JmbS+f'], {
            onClick: () => {
                o.Z.open(u.oAB.PREMIUM), r();
            }
        }),
        O = (0, s.N)(),
        v = (0, l.Ng)(),
        j = null != O || null != v;
    return (0, i.jsx)(
        a.Z,
        f(
            {
                artURL: p,
                artContainerClassName: h.artContainer,
                modalClassName: h.modalContainer,
                bodyClassName: h.bodyContainer,
                type: c.cd.BURST_REACTION_UPSELL,
                title: d.intl.string(d.t.N4SCJy),
                body: b,
                glowUp: b,
                analyticsSource: m,
                analyticsLocation: {
                    page: u.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
                    object: u.qAy.BUTTON_CTA
                },
                onClose: r,
                subscribeButtonText: j ? void 0 : d.intl.string(d.t['8x0jKS']),
                subscriptionTier: null != (n = null == O || null == (t = O.subscription_trial) ? void 0 : t.sku_id) ? n : c.Si.TIER_2,
                backButtonText: d.intl.string(d.t.f3Pet7)
            },
            g
        )
    );
}
function g(e) {
    let { analytics: t } = e;
    (0, r.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) => (0, i.jsx)(e, f({ analyticsSource: t }, n));
    });
}
