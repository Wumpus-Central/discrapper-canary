l.d(e, { $P: () => x, rc: () => v, wF: () => g });
var i,
    n = l(627968);
l(64700);
var a = l(323125),
    s = l(821609),
    r = l(793574),
    o = l(688810),
    d = l(285871),
    u = l(897100),
    c = l(638643),
    A = l(976860),
    p = l(954571),
    h = l(580630),
    I = l(56754),
    m = l(652215),
    f = l(985018),
    g =
        (((i = {})[(i.AVAILABLE = 0)] = "AVAILABLE"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (i[(i.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (i[(i.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        i);
function v(t) {
    let { appId: e, onClick: l, onHasClicked: i, skuId: a, subscriptionPlan: s, icon: r, state: o = 0 } = t,
        d = null != s ? (0, h._J)(s) : null,
        u = 1 === o;
    return 0 === o || u
        ? (0, n.jsx)(S, {
              appId: e,
              skuId: a,
              onClick: (t) => {
                  l(t), i?.();
              },
              loading: u,
              icon: r,
              text: null != d ? f.intl.formatToPlainString(f.t.i4T8vz, { rate: d }) : f.intl.string(f.t.uuzaAK),
          })
        : (0, n.jsx)(E, {
              text: (function (t, e) {
                  switch (t) {
                      case 2:
                          return f.intl.formatToPlainString(f.t.k1ew5N, { rate: e });
                      case 3:
                          return f.intl.formatToPlainString(f.t["Hs3Y+I"], { rate: e });
                      case 4:
                          return f.intl.string(f.t.DLAKbi);
                  }
              })(o, d ?? ""),
          });
}
function x(t) {
    let { appId: e, onClick: l, onHasClicked: i, sku: a, icon: s } = t,
        { analyticsLocations: u } = (0, o.Ay)(r.A.APP_STOREFRONT),
        A = (0, I.L)(a.id),
        p = a.type === m.Puh.DURABLE && A,
        { price: g } = a;
    return null == g
        ? null
        : p
          ? (0, n.jsx)(E, { text: f.intl.string(f.t["6cfuDj"]) })
          : (0, n.jsx)(S, {
                appId: e,
                skuId: a.id,
                onClick: (t) => {
                    (
                        l ??
                        (() => {
                            (0, c.k)({
                                appId: e,
                                skuId: a.id,
                                analyticsLocations: u,
                                checkoutFlow: d.C.PREMIUM_APPS_OTP_CHECKOUT,
                            });
                        })
                    )(t),
                        i?.();
                },
                text: f.intl.format(f.t.Xp5WTn, { price: (0, h.$g)(g.amount, g.currency) }),
                icon: s,
            });
}
function S(t) {
    let { appId: e, skuId: l, onClick: i, ...r } = t,
        o = (0, u.A)();
    return (0, n.jsx)(s.$, {
        ...r,
        onClick: (t) => {
            if ((p.default.track(m.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: e, sku_id: l }), !o)) {
                t.preventDefault(), t.stopPropagation();
                let i = m.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, l),
                    n = (0, a.T2)(i, !1);
                (0, A.pX)(n);
                return;
            }
            i?.(t);
        },
    });
}
function E(t) {
    let { text: e } = t;
    return (0, n.jsx)(s.$, { text: e, disabled: !0, variant: "primary" });
}
