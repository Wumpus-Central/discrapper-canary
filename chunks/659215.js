n.d(t, {
    default: () => b,
    m: () => y,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(313789),
    o = n(518596),
    s = n(622909),
    l = n(639119),
    c = n(790527),
    u = n(474936),
    d = n(981631),
    f = n(388032),
    _ = n(338928),
    p = n(784370);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    var t,
        n,
        { onClose: i, analyticsSource: h } = e,
        E = g(e, ["onClose", "analyticsSource"]);
    let b = f.intl.format(f.t["JmbS+T"], {
            onClick: () => {
                (0, o.openUserSettings)(a.n.NITRO_PANEL, { section: d.oAB.PREMIUM }), i();
            },
        }),
        y = (0, l.N)(),
        O = (0, s.N)(),
        v = null != y || null != O;
    return (0, r.jsx)(
        c.Z,
        m(
            {
                artURL: p,
                artContainerClassName: _.artContainer,
                modalClassName: _.modalContainer,
                bodyClassName: _.bodyContainer,
                type: u.cd.BURST_REACTION_UPSELL,
                title: f.intl.string(f.t.N4SCJ0),
                body: b,
                glowUp: b,
                analyticsSource: h,
                analyticsLocation: {
                    page: d.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
                    object: d.qAy.BUTTON_CTA,
                },
                onClose: i,
                subscribeButtonText: v ? void 0 : f.intl.string(f.t["8x0jKT"]),
                subscriptionTier:
                    null != (n = null == y || null == (t = y.subscription_trial) ? void 0 : t.sku_id) ? n : u.Si.TIER_2,
                backButtonText: f.intl.string(f.t.f3Pet9),
            },
            E,
        ),
    );
}
function y(e) {
    let { analytics: t } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) => (0, r.jsx)(e, m({ analyticsSource: t }, n));
    });
}
