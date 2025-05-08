n.d(t, {
    DE: () => g,
    gr: () => b,
    i1: () => m,
    tD: () => E
}),
    n(388685),
    n(49124);
var r = n(73800),
    i = n(512722),
    o = n.n(i),
    a = n(570140),
    s = n(821849),
    l = n(15640),
    c = n(509545),
    u = n(74538),
    d = n(981631),
    f = n(474936);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = 10027;
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.YQ];
    return null == e || c.Z.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              a.Z.wait(async () => {
                  try {
                      await (0, s.Gn)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}
function g(e, t, n) {
    let r,
        i = [],
        a = [],
        s = { purchaseType: n ? d.tuJ.GIFT : d.tuJ.DEFAULT };
    return (r = 'string' == typeof e ? c.Z.get(e) : e), o()(r, 'subscription plan not loaded'), null != t && c.Z.hasPaymentSourceForSKUId(t, r.skuId) && (s.paymentSourceId = t), (i = (a = (0, u.T4)(r.id, s)).map((e) => e.currency)).length < 1 && (i = [d.pKx.USD]), i;
}
function E(e, t, n) {
    let r = c.Z.get(e);
    return o()(null != r, 'plan is undefined'), g(r, n, !1).includes(t);
}
function b(e) {
    let { initialCurrency: t, subscriptionPlanId: n, paymentSourceId: i, isGift: o, skuIDs: a, excludeSubscriptionPlansBySKU: s } = e,
        [u, d] = r.useReducer(
            (e, t) => p({}, e, t),
            null != i
                ? {
                      paymentSourceId: i,
                      currency: t,
                      loaded: !1
                  }
                : {
                      currency: t,
                      loaded: !1
                  }
        ),
        f = (0, l.V)(a),
        _ = JSON.stringify(a),
        E = r.useRef(a);
    r.useEffect(() => {
        E.current = a;
    }),
        r.useEffect(() => {
            (async () => {
                let { current: e } = E;
                try {
                    e.length > 0 && !s && (await m(i, e));
                } catch (e) {
                    if (e.code !== h) throw e;
                }
                let t = [];
                null != n && null != c.Z.get(n) && (t = g(n, i, o)),
                    t.length > 0
                        ? d({
                              paymentSourceId: i,
                              currency: t[0],
                              loaded: !0
                          })
                        : d({
                              paymentSourceId: i,
                              loaded: !1
                          });
            })();
        }, [i, _, n, o, f, s]);
    let b = u.paymentSourceId !== i || null == n || !f || !0 !== u.loaded;
    return {
        hasFetchedSubscriptionPlans: f,
        priceOptions: u,
        setCurrency: (e) => {
            d({ currency: e });
        },
        currencyLoading: b
    };
}
