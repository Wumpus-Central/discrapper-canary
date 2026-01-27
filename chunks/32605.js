n.d(t, {
    default: () => g,
    z: () => b,
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(780964),
    o = n(840065),
    a = n(422936),
    s = n(234419),
    u = n(244975),
    c = n(788868),
    d = n(652215),
    p = n(985018),
    h = n(511761),
    m = n(271110);

function f(e) {
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

function g(e) {
    var t, n;
    let { onClose: l, analyticsSource: g } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.getOwnPropertyNames(e);
                    for (i = 0; i < r.length; i++)
                        (n = r[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            return r;
        })(e, ["onClose", "analyticsSource"]),
        y = p.intl.format(p.t["JmbS+T"], {
            onClick: () => {
                (0, o.openUserSettings)(r.X.NITRO_PANEL, {
                    section: d.nc_.PREMIUM,
                }),
                    l();
            },
        }),
        O = (0, s.V)(),
        v = (0, a.O)(),
        j = null != O || null != v;
    return (0, i.jsx)(
        u.A,
        f(
            {
                artURL: m,
                artContainerClassName: h.JS,
                modalClassName: h.jT,
                bodyClassName: h.IP,
                type: c.e.BURST_REACTION_UPSELL,
                title: p.intl.string(p.t.N4SCJ0),
                body: y,
                glowUp: y,
                analyticsSource: g,
                analyticsLocation: {
                    page: d.liQ.PREMIUM_UPSELL_BURST_REACTIONS,
                    object: d.ZSU.BUTTON_CTA,
                },
                onClose: l,
                subscribeButtonText: j ? void 0 : p.intl.string(p.t["8x0jKT"]),
                subscriptionTier:
                    null != (t = null == O || null == (n = O.subscription_trial) ? void 0 : n.sku_id) ? t : c.pe.TIER_2,
                backButtonText: p.intl.string(p.t.f3Pet9),
            },
            b,
        ),
    );
}

function b(e) {
    let { analytics: t } = e;
    (0, l.mMO)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 32605));
        return (n) =>
            (0, i.jsx)(
                e,
                f(
                    {
                        analyticsSource: t,
                    },
                    n,
                ),
            );
    });
}
