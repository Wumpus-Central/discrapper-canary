i.d(e, { $P: () => C, rc: () => E, wF: () => h });
var n,
    l = i(627968);
i(64700);
var s = i(323125),
    a = i(821609),
    r = i(793574),
    o = i(688810),
    u = i(285871),
    c = i(897100),
    d = i(638643),
    p = i(976860),
    S = i(954571),
    I = i(580630),
    A = i(56754),
    _ = i(652215),
    T = i(985018),
    h =
        (((n = {})[(n.AVAILABLE = 0)] = "AVAILABLE"),
        (n[(n.LOADING = 1)] = "LOADING"),
        (n[(n.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (n[(n.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (n[(n.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        n);
function E(t) {
    let { appId: e, onClick: i, onHasClicked: n, skuId: s, subscriptionPlan: a, icon: r, state: o = 0 } = t,
        u = null != a ? (0, I._J)(a) : null,
        c = 1 === o;
    return 0 === o || c
        ? (0, l.jsx)(f, {
              appId: e,
              skuId: s,
              onClick: (t) => {
                  i(t), n?.();
              },
              loading: c,
              icon: r,
              text: null != u ? T.intl.formatToPlainString(T.t.i4T8vz, { rate: u }) : T.intl.string(T.t.uuzaAK),
          })
        : (0, l.jsx)(g, {
              text: (function (t, e) {
                  switch (t) {
                      case 2:
                          return T.intl.formatToPlainString(T.t.k1ew5N, { rate: e });
                      case 3:
                          return T.intl.formatToPlainString(T.t["Hs3Y+I"], { rate: e });
                      case 4:
                          return T.intl.string(T.t.DLAKbi);
                  }
              })(o, u ?? ""),
          });
}
function C(t) {
    let { appId: e, onClick: i, onHasClicked: n, sku: s, icon: a } = t,
        { analyticsLocations: c } = (0, o.Ay)(r.A.APP_STOREFRONT),
        p = (0, A.L)(s.id),
        S = s.type === _.Puh.DURABLE && p,
        { price: h } = s;
    return null == h
        ? null
        : S
          ? (0, l.jsx)(g, { text: T.intl.string(T.t["6cfuDj"]) })
          : (0, l.jsx)(f, {
                appId: e,
                skuId: s.id,
                onClick: (t) => {
                    (
                        i ??
                        (() => {
                            (0, d.k)({
                                appId: e,
                                skuId: s.id,
                                analyticsLocations: c,
                                checkoutFlow: u.C.PREMIUM_APPS_OTP_CHECKOUT,
                            });
                        })
                    )(t),
                        n?.();
                },
                text: T.intl.format(T.t.Xp5WTn, { price: (0, I.$g)(h.amount, h.currency) }),
                icon: a,
            });
}
function f(t) {
    let { appId: e, skuId: i, onClick: n, ...r } = t,
        o = (0, c.A)();
    return (0, l.jsx)(a.$, {
        ...r,
        onClick: (t) => {
            if ((S.default.track(_.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: e, sku_id: i }), !o)) {
                t.preventDefault(), t.stopPropagation();
                let n = _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, i),
                    l = (0, s.T2)(n, !1);
                (0, p.pX)(l);
                return;
            }
            n?.(t);
        },
    });
}
function g(t) {
    let { text: e } = t;
    return (0, l.jsx)(a.$, { text: e, disabled: !0, variant: "primary" });
}
