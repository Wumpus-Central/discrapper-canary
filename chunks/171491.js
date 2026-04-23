n.d(t, { x: () => S, j: () => N });
var i = n(64700),
    r = n(636537),
    a = n(228366),
    s = n(615405),
    _ = n(927813),
    l = n(561573);
n(918467);
var o = n(723090),
    E = n(970207);
n(65238);
var d = n(652215);
_.A.Millis.HOUR;
let c = 10 * _.A.Millis.MINUTE;
function u(e, t) {
    return e?.type === "error" ? c : (0, E.g6)({ location: t });
}
async function I(e) {
    let { applicationId: t, location: n } = e;
    await T({ type: "application", applicationId: t }, n);
}
async function A(e) {
    let { skuIds: t, location: n } = e;
    await T({ type: "skus", skuIds: t }, n);
}
async function T(e, t) {
    let {
        shouldFetch: n,
        filteredSkuIds: i,
        applicationId: _,
    } = (function (e, t) {
        if (!(0, E.yS)({ location: t })) return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
        if ("application" === e.type) {
            let n = l.A.getFetchStateForApplicationId(e.applicationId),
                i = u(n, t);
            return null != n && ("loading" === n.type || n.fetchedAt > Date.now() - i)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let n = e.skuIds
                .filter((e) => {
                    let n = l.A.getFetchStateForSkuId(e);
                    if (null == n) return !0;
                    let i = u(n, t);
                    return "loading" !== n.type && n.fetchedAt < Date.now() - i;
                })
                .sort((e, t) => {
                    let n = l.A.getFetchStateForSkuId(e),
                        i = l.A.getFetchStateForSkuId(t);
                    return null == n && null != i ? -1 : +(null != n && null == i);
                });
            return 0 === n.length
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
                : { shouldFetch: !0, filteredSkuIds: n.slice(0, 50), applicationId: null };
        }
    })(e, t);
    if (!n) return;
    let c = null != _ ? { type: "application", applicationId: _ } : { type: "skus", skuIds: i };
    try {
        a.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: c });
        let e = (
            await r.Bo.get({
                url: d.Rsh.STOREFRONT_PRICES,
                query: {
                    ...(null != _ ? { application_id: _ } : { sku_ids: i }),
                    country_code: s.A.ipCountryCode ?? void 0,
                },
                rejectWithError: !0,
            })
        ).body;
        a.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: c, data: (0, o.Oj)(e) });
    } catch {
        a.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: c });
    }
}
function S(e) {
    let { applicationId: t, location: n } = e;
    i.useEffect(() => {
        null != t && I({ applicationId: t, location: n });
    }, [t, n]);
}
function N(e) {
    let { skuIds: t, location: n } = e;
    i.useEffect(() => {
        0 !== t.length && A({ skuIds: t, location: n });
    }, [t, n]);
}
