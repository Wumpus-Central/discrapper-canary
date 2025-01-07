r.d(n, {
    DE: function () {
        return g;
    },
    gr: function () {
        return v;
    },
    i1: function () {
        return m;
    },
    tD: function () {
        return E;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(512722),
    o = r.n(s),
    l = r(570140),
    u = r(821849),
    c = r(15640),
    d = r(509545),
    f = r(74538),
    _ = r(981631),
    h = r(474936);
let p = 10027;
function m(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...h.YQ];
    return null == e || d.Z.hasPaymentSourceForSKUIds(e, n)
        ? Promise.resolve()
        : new Promise((e, r) => {
              l.Z.wait(async () => {
                  try {
                      await (0, u.Gn)(n), e();
                  } catch (e) {
                      r(e);
                  }
              });
          });
}
function g(e, n, r) {
    let i,
        a = [],
        s = [],
        l = { purchaseType: r ? _.tuJ.GIFT : _.tuJ.DEFAULT };
    return (i = 'string' == typeof e ? d.Z.get(e) : e), o()(i, 'subscription plan not loaded'), null != n && d.Z.hasPaymentSourceForSKUId(n, i.skuId) && (l.paymentSourceId = n), (a = (s = (0, f.T4)(i.id, l)).map((e) => e.currency)).length < 1 && (a = [_.pKx.USD]), a;
}
function E(e, n, r) {
    let i = d.Z.get(e);
    return o()(null != i, 'plan is undefined'), g(i, r, !1).includes(n);
}
function v(e, n, r, i, s) {
    let [o, l] = a.useReducer(
            (e, n) => ({
                ...e,
                ...n
            }),
            null != r
                ? {
                      paymentSourceId: r,
                      currency: e,
                      loaded: !1
                  }
                : {
                      currency: e,
                      loaded: !1
                  }
        ),
        u = (0, c.V)(s),
        f = JSON.stringify(s),
        _ = a.useRef(s);
    a.useEffect(() => {
        _.current = s;
    }),
        a.useEffect(() => {
            (async () => {
                let { current: e } = _;
                try {
                    await m(r, e);
                } catch (e) {
                    if (e.code !== p) throw e;
                }
                let a = [];
                null != n && null != d.Z.get(n) && (a = g(n, r, i)),
                    a.length > 0
                        ? l({
                              paymentSourceId: r,
                              currency: a[0],
                              loaded: !0
                          })
                        : l({
                              paymentSourceId: r,
                              loaded: !1
                          });
            })();
        }, [r, f, n, i, u]);
    let h = o.paymentSourceId !== r || null == n || !u || !0 !== o.loaded;
    return {
        hasFetchedSubscriptionPlans: u,
        priceOptions: o,
        setCurrency: (e) => {
            l({ currency: e });
        },
        currencyLoading: h
    };
}
