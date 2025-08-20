n.d(t, {
    default: () => E,
    m: () => b,
});
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(230711),
    o = n(104494),
    s = n(639119),
    l = n(790527),
    c = n(474936),
    u = n(981631),
    d = n(388032),
    f = n(819620),
    _ = n(784370);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    var t,
        n,
        { onClose: i, analyticsSource: p } = e,
        g = m(e, ["onClose", "analyticsSource"]);
    let E = d.intl.format(d.t["JmbS+f"], {
            onClick: () => {
                a.Z.open(u.oAB.PREMIUM), i();
            },
        }),
        b = (0, s.N)(),
        y = (0, o.Ng)(),
        O = null != b || null != y;
    return (0, r.jsx)(
        l.Z,
        h(
            {
                artURL: _,
                artContainerClassName: f.artContainer,
                modalClassName: f.modalContainer,
                bodyClassName: f.bodyContainer,
                type: c.cd.BURST_REACTION_UPSELL,
                title: d.intl.string(d.t.N4SCJy),
                body: E,
                glowUp: E,
                analyticsSource: p,
                analyticsLocation: {
                    page: u.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
                    object: u.qAy.BUTTON_CTA,
                },
                onClose: i,
                subscribeButtonText: O ? void 0 : d.intl.string(d.t["8x0jKS"]),
                subscriptionTier:
                    null != (n = null == b || null == (t = b.subscription_trial) ? void 0 : t.sku_id) ? n : c.Si.TIER_2,
                backButtonText: d.intl.string(d.t.f3Pet7),
            },
            g,
        ),
    );
}
function b(e) {
    let { analytics: t } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) => (0, r.jsx)(e, h({ analyticsSource: t }, n));
    });
}
