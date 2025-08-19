n.d(t, {
    default: () => f,
    m: () => g,
});
var i = n(951288);
n(647438);
var l = n(481060),
    r = n(230711),
    o = n(104494),
    a = n(639119),
    s = n(790527),
    c = n(474936),
    u = n(981631),
    d = n(388032),
    h = n(819620),
    p = n(784370);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function f(e) {
    var t,
        n,
        { onClose: l, analyticsSource: f } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["onClose", "analyticsSource"]);
    let b = d.intl.format(d.t["JmbS+f"], {
            onClick: () => {
                r.Z.open(u.oAB.PREMIUM), l();
            },
        }),
        j = (0, a.N)(),
        v = (0, o.Ng)(),
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
                    object: u.qAy.BUTTON_CTA,
                },
                onClose: l,
                subscribeButtonText: O ? void 0 : d.intl.string(d.t["8x0jKS"]),
                subscriptionTier:
                    null != (n = null == j || null == (t = j.subscription_trial) ? void 0 : t.sku_id) ? n : c.Si.TIER_2,
                backButtonText: d.intl.string(d.t.f3Pet7),
            },
            g,
        ),
    );
}
function g(e) {
    let { analytics: t } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) => (0, i.jsx)(e, m({ analyticsSource: t }, n));
    });
}
