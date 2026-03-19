i.d(e, { $P: () => f, rc: () => C, wF: () => E });
var n,
    l = i(627968);
i(64700);
var s = i(323125),
    a = i(397927),
    r = i(793574),
    u = i(688810),
    o = i(285871),
    c = i(897100),
    d = i(638643),
    S = i(976860),
    p = i(954571),
    I = i(580630),
    A = i(56754),
    _ = i(652215),
    T = i(985018),
    E =
        (((n = {})[(n.AVAILABLE = 0)] = "AVAILABLE"),
        (n[(n.LOADING = 1)] = "LOADING"),
        (n[(n.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (n[(n.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (n[(n.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        n);
function C(t) {
    let { appId: e, onClick: i, onHasClicked: n, skuId: s, subscriptionPlan: a, icon: r, state: u = 0 } = t,
        o = null != a ? (0, I._J)(a) : null,
        c = 1 === u;
    return 0 === u || c
        ? (0, l.jsx)(h, {
              appId: e,
              skuId: s,
              onClick: (t) => {
                  i(t), n?.();
              },
              loading: c,
              icon: r,
              text: null != o ? T.intl.formatToPlainString(T.t.i4T8vz, { rate: o }) : T.intl.string(T.t.uuzaAK),
          })
        : (0, l.jsx)(N, {
              text: (function (t, e) {
                  switch (t) {
                      case 2:
                          return T.intl.formatToPlainString(T.t.k1ew5N, { rate: e });
                      case 3:
                          return T.intl.formatToPlainString(T.t["Hs3Y+I"], { rate: e });
                      case 4:
                          return T.intl.string(T.t.DLAKbi);
                  }
              })(u, o ?? ""),
          });
}
function f(t) {
    let { appId: e, onClick: i, onHasClicked: n, sku: s, icon: a } = t,
        { analyticsLocations: c } = (0, u.Ay)(r.A.APP_STOREFRONT),
        S = (0, A.L)(s.id),
        p = s.type === _.Puh.DURABLE && S,
        { price: E } = s;
    return null == E
        ? null
        : p
          ? (0, l.jsx)(N, { text: T.intl.string(T.t["6cfuDj"]) })
          : (0, l.jsx)(h, {
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
                                checkoutFlow: o.C.PREMIUM_APPS_OTP_CHECKOUT,
                            });
                        })
                    )(t),
                        n?.();
                },
                text: T.intl.format(T.t.Xp5WTn, { price: (0, I.$g)(E.amount, E.currency) }),
                icon: a,
            });
}
function h(t) {
    let { appId: e, skuId: i, onClick: n, ...r } = t,
        u = (0, c.A)();
    return (0, l.jsx)(a.Button, {
        ...r,
        onClick: (t) => {
            if ((p.default.track(_.HAw.STOREFRONT_PURCHASE_CLICKED, { application_id: e, sku_id: i }), !u)) {
                t.preventDefault(), t.stopPropagation();
                let n = _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, i),
                    l = (0, s.T2)(n, !1);
                (0, S.pX)(l);
                return;
            }
            n?.(t);
        },
    });
}
function N(t) {
    let { text: e } = t;
    return (0, l.jsx)(a.Button, { text: e, disabled: !0, variant: "primary" });
}
