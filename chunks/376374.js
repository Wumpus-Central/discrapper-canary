e.d(n, { $P: () => v, rc: () => g, wF: () => m });
var i,
    l = e(627968);
e(64700);
var r = e(323125),
    s = e(821609),
    a = e(793574),
    u = e(688810),
    o = e(75304),
    d = e(897100),
    c = e(638643),
    A = e(976860),
    p = e(174459),
    I = e(580630),
    S = e(56754),
    f = e(652215),
    h = e(375708),
    m =
        (((i = {})[(i.AVAILABLE = 0)] = "AVAILABLE"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (i[(i.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (i[(i.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        i);
function g(t) {
    let { appId: n, onClick: e, onHasClicked: i, skuId: r, subscriptionPlan: s, icon: a, state: u = 0 } = t,
        o = null != s ? (0, I._J)(s) : null,
        d = 1 === u;
    return 0 === u || d
        ? (0, l.jsx)(x, {
              appId: n,
              skuId: r,
              onClick: function (t) {
                  e(t), i?.();
              },
              loading: d,
              icon: a,
              text: null != o ? h.intl.formatToPlainString(h.t.i4T8vz, { rate: o }) : h.intl.string(h.t.uuzaAK),
          })
        : (0, l.jsx)(P, {
              text: (function (t, n) {
                  switch (t) {
                      case 2:
                          return h.intl.formatToPlainString(h.t.k1ew5N, { rate: n });
                      case 3:
                          return h.intl.formatToPlainString(h.t["Hs3Y+I"], { rate: n });
                      case 4:
                          return h.intl.string(h.t.DLAKbi);
                  }
              })(u, o ?? ""),
          });
}
function v(t) {
    let { appId: n, onClick: e, onHasClicked: i, sku: r, icon: s } = t,
        { analyticsLocations: d } = (0, u.Ay)(a.A.APP_STOREFRONT),
        A = (0, S.L)(r.id),
        p = r.type === f.Puh.DURABLE && A,
        { price: m } = r;
    return null == m
        ? null
        : p
          ? (0, l.jsx)(P, { text: h.intl.string(h.t["6cfuDj"]) })
          : (0, l.jsx)(x, {
                appId: n,
                skuId: r.id,
                onClick: function (t) {
                    (
                        e ??
                        function () {
                            (0, c.k)({
                                appId: n,
                                skuId: r.id,
                                analyticsLocations: d,
                                checkoutFlow: o.C.PREMIUM_APPS_OTP_CHECKOUT,
                            });
                        }
                    )(t),
                        i?.();
                },
                text: h.intl.format(h.t.Xp5WTn, { price: (0, I.$g)(m.amount, m.currency) }),
                icon: s,
            });
}
function x(t) {
    let { appId: n, skuId: e, onClick: i, ...a } = t,
        u = (0, d.A)();
    return (0, l.jsx)(s.$, {
        ...a,
        onClick: function (t) {
            if ((p.default.track(f.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: n, sku_id: e }), !u)) {
                t.preventDefault(), t.stopPropagation();
                let i = f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, e),
                    l = (0, r.T2)(i, !1);
                (0, A.pX)(l);
                return;
            }
            i?.(t);
        },
    });
}
function P(t) {
    let { text: n } = t;
    return (0, l.jsx)(s.$, { text: n, disabled: !0, variant: "primary" });
}
