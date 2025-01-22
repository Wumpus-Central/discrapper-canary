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
    o = r(512722),
    s = r.n(o),
    l = r(570140),
    u = r(821849),
    c = r(15640),
    d = r(509545),
    f = r(74538),
    p = r(981631),
    h = r(474936);
let _ = 10027;
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
        o = [],
        l = { purchaseType: r ? p.tuJ.GIFT : p.tuJ.DEFAULT };
    return (i = 'string' == typeof e ? d.Z.get(e) : e), s()(i, 'subscription plan not loaded'), null != n && d.Z.hasPaymentSourceForSKUId(n, i.skuId) && (l.paymentSourceId = n), (a = (o = (0, f.T4)(i.id, l)).map((e) => e.currency)).length < 1 && (a = [p.pKx.USD]), a;
}
function E(e, n, r) {
    let i = d.Z.get(e);
    return s()(null != i, 'plan is undefined'), g(i, r, !1).includes(n);
}
function v(e, n, r, i, o) {
    let [s, l] = a.useReducer(
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
        u = (0, c.V)(o),
        f = JSON.stringify(o),
        p = a.useRef(o);
    a.useEffect(() => {
        p.current = o;
    }),
        a.useEffect(() => {
            (async () => {
                let { current: e } = p;
                try {
                    await m(r, e);
                } catch (e) {
                    if (e.code !== _) throw e;
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
    let h = s.paymentSourceId !== r || null == n || !u || !0 !== s.loaded;
    return {
        hasFetchedSubscriptionPlans: u,
        priceOptions: s,
        setCurrency: (e) => {
            l({ currency: e });
        },
        currencyLoading: h
    };
}
