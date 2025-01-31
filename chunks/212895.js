n.d(t, {
    DE: () => h,
    gr: () => g,
    i1: () => p,
    tD: () => m
}),
    n(47120);
var i = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(570140),
    o = n(821849),
    l = n(15640),
    u = n(509545),
    c = n(74538),
    d = n(981631),
    f = n(474936);
let _ = 10027;
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.YQ];
    return null == e || u.Z.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              s.Z.wait(async () => {
                  try {
                      await (0, o.Gn)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}
function h(e, t, n) {
    let i,
        r = [],
        s = [],
        o = { purchaseType: n ? d.tuJ.GIFT : d.tuJ.DEFAULT };
    return (i = 'string' == typeof e ? u.Z.get(e) : e), a()(i, 'subscription plan not loaded'), null != t && u.Z.hasPaymentSourceForSKUId(t, i.skuId) && (o.paymentSourceId = t), (r = (s = (0, c.T4)(i.id, o)).map((e) => e.currency)).length < 1 && (r = [d.pKx.USD]), r;
}
function m(e, t, n) {
    let i = u.Z.get(e);
    return a()(null != i, 'plan is undefined'), h(i, n, !1).includes(t);
}
function g(e, t, n, r, a) {
    let [s, o] = i.useReducer(
            (e, t) => ({
                ...e,
                ...t
            }),
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
        c = (0, l.V)(a),
        d = JSON.stringify(a),
        f = i.useRef(a);
    i.useEffect(() => {
        f.current = a;
    }),
        i.useEffect(() => {
            (async () => {
                let { current: e } = f;
                try {
                    await p(n, e);
                } catch (e) {
                    if (e.code !== _) throw e;
                }
                let i = [];
                null != t && null != u.Z.get(t) && (i = h(t, n, r)),
                    i.length > 0
                        ? o({
                              paymentSourceId: n,
                              currency: i[0],
                              loaded: !0
                          })
                        : o({
                              paymentSourceId: n,
                              loaded: !1
                          });
            })();
        }, [n, d, t, r, c]);
    let m = s.paymentSourceId !== n || null == t || !c || !0 !== s.loaded;
    return {
        hasFetchedSubscriptionPlans: c,
        priceOptions: s,
        setCurrency: (e) => {
            o({ currency: e });
        },
        currencyLoading: m
    };
}
