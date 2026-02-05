n.d(e, { $P: () => m, rc: () => g, wF: () => E });
var i,
    l = n(627968);
n(64700);
var r = n(323125),
    s = n(397927),
    u = n(793574),
    a = n(688810),
    o = n(897100),
    c = n(638643),
    d = n(976860),
    A = n(954571),
    p = n(580630),
    S = n(56754),
    I = n(652215),
    f = n(985018),
    E =
        (((i = {})[(i.AVAILABLE = 0)] = "AVAILABLE"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (i[(i.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (i[(i.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        i);
function g(t) {
    let { appId: e, onClick: n, onHasClicked: i, skuId: r, subscriptionPlan: s, icon: u, state: a = 0 } = t,
        o = null != s ? (0, p._J)(s) : null,
        c = 1 === a;
    return 0 === a || c
        ? (0, l.jsx)(T, {
              appId: e,
              skuId: r,
              onClick: (t) => {
                  n(t), i?.();
              },
              loading: c,
              icon: u,
              text: null != o ? f.intl.formatToPlainString(f.t.i4T8vz, { rate: o }) : f.intl.string(f.t.uuzaAK),
          })
        : (0, l.jsx)(_, {
              text: (function (t, e) {
                  switch (t) {
                      case 2:
                          return f.intl.formatToPlainString(f.t.k1ew5N, { rate: e });
                      case 3:
                          return f.intl.formatToPlainString(f.t["Hs3Y+I"], { rate: e });
                      case 4:
                          return f.intl.string(f.t.DLAKbi);
                  }
              })(a, o ?? ""),
          });
}
function m(t) {
    let { appId: e, onClick: n, onHasClicked: i, sku: r, icon: s } = t,
        { analyticsLocations: o } = (0, a.Ay)(u.A.APP_STOREFRONT),
        d = (0, S.L)(r.id),
        A = r.type === I.Puh.DURABLE && d,
        { price: E } = r;
    return null == E
        ? null
        : A
          ? (0, l.jsx)(_, { text: f.intl.string(f.t["6cfuDj"]) })
          : (0, l.jsx)(T, {
                appId: e,
                skuId: r.id,
                onClick: (t) => {
                    (
                        n ??
                        (() => {
                            (0, c.k)({ appId: e, skuId: r.id, analyticsLocations: o });
                        })
                    )(t),
                        i?.();
                },
                text: f.intl.format(f.t.Xp5WTn, { price: (0, p.$g)(E.amount, E.currency) }),
                icon: s,
            });
}
function T(t) {
    let { appId: e, skuId: n, onClick: i, ...u } = t,
        a = (0, o.A)();
    return (0, l.jsx)(s.Button, {
        ...u,
        onClick: (t) => {
            if ((A.default.track(I.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: e, sku_id: n }), !a)) {
                t.preventDefault(), t.stopPropagation();
                let i = I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, n),
                    l = (0, r.T2)(i, !1);
                (0, d.pX)(l);
                return;
            }
            i?.(t);
        },
    });
}
function _(t) {
    let { text: e } = t;
    return (0, l.jsx)(s.Button, { text: e, disabled: !0, variant: "primary" });
}
