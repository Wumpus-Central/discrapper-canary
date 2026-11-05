var e,
    l = i(477900);
i(582128);
var r = i(323125),
    s = i(821609),
    a = i(793574),
    o = i(688810),
    u = i(998312),
    d = i(897100),
    c = i(638643),
    A = i(976860),
    p = i(129230),
    I = i(722178),
    m = i(580630),
    S = i(56754),
    f = i(652215),
    g = i(792996),
    h =
        (((e = {})[(e.AVAILABLE = 0)] = "AVAILABLE"),
        (e[(e.LOADING = 1)] = "LOADING"),
        (e[(e.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (e[(e.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (e[(e.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        e);
function v(t) {
    let { appId: n, skuId: i, onClick: e, ...a } = t,
        o = (0, d.A)();
    return (0, l.jsx)(s.$, {
        ...a,
        onClick: function (t) {
            if ((p.default.track(f.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: n, sku_id: i }), !o)) {
                (t.preventDefault(), t.stopPropagation());
                let e = f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, i),
                    l = (0, r.T2)(e, !1);
                (0, A.pX)(l);
                return;
            }
            e?.(t);
        },
    });
}
function b(t) {
    let { text: n } = t;
    return (0, l.jsx)(s.$, { text: n, disabled: !0, variant: "primary" });
}
i.d(
    n,
    {},
    {
        $P: function (t) {
            let { appId: n, onClick: i, onHasClicked: e, sku: r, icon: s } = t,
                { analyticsLocations: d } = (0, o.Ay)(a.A.APP_STOREFRONT),
                A = (0, S.L)(r.id),
                p = r.type === f.Puh.DURABLE && A,
                { price: I } = r;
            return null == I
                ? null
                : p
                  ? (0, l.jsx)(b, { text: g.intl.string(g.t["6cfuDj"]) })
                  : (0, l.jsx)(v, {
                        appId: n,
                        skuId: r.id,
                        onClick: function (t) {
                            ((
                                i ??
                                function () {
                                    (0, c.k)({
                                        appId: n,
                                        skuId: r.id,
                                        analyticsLocations: d,
                                        checkoutFlow: u.C.PREMIUM_APPS_OTP_CHECKOUT,
                                    });
                                }
                            )(t),
                                e?.());
                        },
                        text: g.intl.format(g.t.Xp5WTn, { price: (0, m.$g)(I.amount, I.currency) }),
                        icon: s,
                    });
        },
        rc: function (t) {
            let { appId: n, onClick: i, onHasClicked: e, skuId: r, subscriptionPlan: s, icon: a, state: o = 0 } = t,
                u = null != s ? (0, I._J)(s) : null,
                d = 1 === o;
            return 0 === o || d
                ? (0, l.jsx)(v, {
                      appId: n,
                      skuId: r,
                      onClick: function (t) {
                          (i(t), e?.());
                      },
                      loading: d,
                      icon: a,
                      text: null != u ? g.intl.formatToPlainString(g.t.i4T8vz, { rate: u }) : g.intl.string(g.t.uuzaAK),
                  })
                : (0, l.jsx)(b, {
                      text: (function (t, n) {
                          switch (t) {
                              case 2:
                                  return g.intl.formatToPlainString(g.t.k1ew5N, { rate: n });
                              case 3:
                                  return g.intl.formatToPlainString(g.t["Hs3Y+I"], { rate: n });
                              case 4:
                                  return g.intl.string(g.t.DLAKbi);
                          }
                      })(o, u ?? ""),
                  });
        },
        wF: h,
    },
);
