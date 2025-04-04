n.d(t, {
    DE: () => g,
    gr: () => b,
    i1: () => m,
    tD: () => E
}),
    n(47120),
    n(26686);
var r = n(192379),
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
function b(e, t, n, i, o) {
    let [a, s] = r.useReducer(
            (e, t) => p({}, e, t),
            null != n
                ? {
                      paymentSourceId: n,
                      currency: e,
                      loaded: !1
                  }
                : {
                      currency: e,
                      loaded: !1
                  }
        ),
        u = (0, l.V)(o),
        d = JSON.stringify(o),
        f = r.useRef(o);
    r.useEffect(() => {
        f.current = o;
    }),
        r.useEffect(() => {
            (async () => {
                let { current: e } = f;
                try {
                    await m(n, e);
                } catch (e) {
                    if (e.code !== h) throw e;
                }
                let r = [];
                null != t && null != c.Z.get(t) && (r = g(t, n, i)),
                    r.length > 0
                        ? s({
                              paymentSourceId: n,
                              currency: r[0],
                              loaded: !0
                          })
                        : s({
                              paymentSourceId: n,
                              loaded: !1
                          });
            })();
        }, [n, d, t, i, u]);
    let _ = a.paymentSourceId !== n || null == t || !u || !0 !== a.loaded;
    return {
        hasFetchedSubscriptionPlans: u,
        priceOptions: a,
        setCurrency: (e) => {
            s({ currency: e });
        },
        currencyLoading: _
    };
}
