var i,
    l = e(477900);
e(582128);
var r = e(323125),
    s = e(821609),
    a = e(793574),
    o = e(688810),
    u = e(998312),
    d = e(897100),
    c = e(638643),
    A = e(976860),
    p = e(129230),
    I = e(448645),
    m = e(580630),
    f = e(56754),
    S = e(652215),
    g = e(792996),
    h =
        (((i = {})[(i.AVAILABLE = 0)] = "AVAILABLE"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (i[(i.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (i[(i.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        i);
function v(t) {
    let { appId: n, skuId: e, onClick: i, ...a } = t,
        o = (0, d.A)();
    return (0, l.jsx)(s.$, {
        ...a,
        onClick: function (t) {
            if ((p.default.track(S.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: n, sku_id: e }), !o)) {
                (t.preventDefault(), t.stopPropagation());
                let i = S.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, e),
                    l = (0, r.T2)(i, !1);
                (0, A.pX)(l);
                return;
            }
            i?.(t);
        },
    });
}
function b(t) {
    let { text: n } = t;
    return (0, l.jsx)(s.$, { text: n, disabled: !0, variant: "primary" });
}
e.d(
    n,
    {},
    {
        $P: function (t) {
            let { appId: n, onClick: e, onHasClicked: i, sku: r, icon: s } = t,
                { analyticsLocations: d } = (0, o.Ay)(a.A.APP_STOREFRONT),
                A = (0, f.L)(r.id),
                p = r.type === S.Puh.DURABLE && A,
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
                                e ??
                                function () {
                                    (0, c.k)({
                                        appId: n,
                                        skuId: r.id,
                                        analyticsLocations: d,
                                        checkoutFlow: u.C.PREMIUM_APPS_OTP_CHECKOUT,
                                    });
                                }
                            )(t),
                                i?.());
                        },
                        text: g.intl.format(g.t.Xp5WTn, { price: (0, m.$g)(I.amount, I.currency) }),
                        icon: s,
                    });
        },
        rc: function (t) {
            let { appId: n, onClick: e, onHasClicked: i, skuId: r, subscriptionPlan: s, icon: a, state: o = 0 } = t,
                u = null != s ? (0, I._J)(s) : null,
                d = 1 === o;
            return 0 === o || d
                ? (0, l.jsx)(v, {
                      appId: n,
                      skuId: r,
                      onClick: function (t) {
                          (e(t), i?.());
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
