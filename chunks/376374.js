n.d(e, { $P: () => x, rc: () => g, wF: () => m });
var i,
    l = n(627968);
n(64700);
var r = n(323125),
    s = n(821609),
    a = n(793574),
    u = n(688810),
    o = n(75304),
    d = n(897100),
    c = n(638643),
    A = n(976860),
    p = n(174459),
    I = n(580630),
    S = n(56754),
    h = n(652215),
    f = n(375708),
    m =
        (((i = {})[(i.AVAILABLE = 0)] = "AVAILABLE"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (i[(i.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (i[(i.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        i);
function g(t) {
    let { appId: e, onClick: n, onHasClicked: i, skuId: r, subscriptionPlan: s, icon: a, state: u = 0 } = t,
        o = null != s ? (0, I._J)(s) : null,
        d = 1 === u;
    return 0 === u || d
        ? (0, l.jsx)(v, {
              appId: e,
              skuId: r,
              onClick: (t) => {
                  n(t), i?.();
              },
              loading: d,
              icon: a,
              text: null != o ? f.intl.formatToPlainString(f.t.i4T8vz, { rate: o }) : f.intl.string(f.t.uuzaAK),
          })
        : (0, l.jsx)(P, {
              text: (function (t, e) {
                  switch (t) {
                      case 2:
                          return f.intl.formatToPlainString(f.t.k1ew5N, { rate: e });
                      case 3:
                          return f.intl.formatToPlainString(f.t["Hs3Y+I"], { rate: e });
                      case 4:
                          return f.intl.string(f.t.DLAKbi);
                  }
              })(u, o ?? ""),
          });
}
function x(t) {
    let { appId: e, onClick: n, onHasClicked: i, sku: r, icon: s } = t,
        { analyticsLocations: d } = (0, u.Ay)(a.A.APP_STOREFRONT),
        A = (0, S.L)(r.id),
        p = r.type === h.Puh.DURABLE && A,
        { price: m } = r;
    return null == m
        ? null
        : p
          ? (0, l.jsx)(P, { text: f.intl.string(f.t["6cfuDj"]) })
          : (0, l.jsx)(v, {
                appId: e,
                skuId: r.id,
                onClick: (t) => {
                    (
                        n ??
                        (() => {
                            (0, c.k)({
                                appId: e,
                                skuId: r.id,
                                analyticsLocations: d,
                                checkoutFlow: o.C.PREMIUM_APPS_OTP_CHECKOUT,
                            });
                        })
                    )(t),
                        i?.();
                },
                text: f.intl.format(f.t.Xp5WTn, { price: (0, I.$g)(m.amount, m.currency) }),
                icon: s,
            });
}
function v(t) {
    let { appId: e, skuId: n, onClick: i, ...a } = t,
        u = (0, d.A)();
    return (0, l.jsx)(s.$, {
        ...a,
        onClick: (t) => {
            if ((p.default.track(h.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: e, sku_id: n }), !u)) {
                t.preventDefault(), t.stopPropagation();
                let i = h.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, n),
                    l = (0, r.T2)(i, !1);
                (0, A.pX)(l);
                return;
            }
            i?.(t);
        },
    });
}
function P(t) {
    let { text: e } = t;
    return (0, l.jsx)(s.$, { text: e, disabled: !0, variant: "primary" });
}
