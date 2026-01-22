n.d(t, {
    default: () => b,
    z: () => y,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(780964),
    s = n(840065),
    o = n(422936),
    l = n(234419),
    c = n(244975),
    u = n(788868),
    d = n(652215),
    f = n(985018),
    p = n(511761),
    _ = n(271110);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function b(e) {
    var t, n;
    let { onClose: i, analyticsSource: h } = e,
        E = g(e, ["onClose", "analyticsSource"]),
        b = f.intl.format(f.t["JmbS+T"], {
            onClick: () => {
                (0, s.openUserSettings)(a.X.NITRO_PANEL, {
                    section: d.nc_.PREMIUM,
                }),
                    i();
            },
        }),
        y = (0, l.V)(),
        O = (0, o.O)(),
        A = null != y || null != O;
    return (0, r.jsx)(
        c.A,
        m(
            {
                artURL: _,
                artContainerClassName: p.JS,
                modalClassName: p.jT,
                bodyClassName: p.IP,
                type: u.e.BURST_REACTION_UPSELL,
                title: f.intl.string(f.t.N4SCJ0),
                body: b,
                glowUp: b,
                analyticsSource: h,
                analyticsLocation: {
                    page: d.liQ.PREMIUM_UPSELL_BURST_REACTIONS,
                    object: d.ZSU.BUTTON_CTA,
                },
                onClose: i,
                subscribeButtonText: A ? void 0 : f.intl.string(f.t["8x0jKT"]),
                subscriptionTier:
                    null != (t = null == y || null == (n = y.subscription_trial) ? void 0 : n.sku_id) ? t : u.pe.TIER_2,
                backButtonText: f.intl.string(f.t.f3Pet9),
            },
            E,
        ),
    );
}

function y(e) {
    let { analytics: t } = e;
    (0, i.mMO)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 32605));
        return (n) =>
            (0, r.jsx)(
                e,
                m(
                    {
                        analyticsSource: t,
                    },
                    n,
                ),
            );
    });
}
