"use strict";
n.d(t, { x: () => S, j: () => y });
var i = n(64700),
    r = n(636537),
    s = n(228366),
    a = n(615405),
    o = n(927813),
    l = n(561573);
n(321073);
var u = n(17928);
let c = {};
class d extends u.Ay.Store {
    static displayName = "StorefrontPromotionStore";
    getFetchState(e) {
        return c[e]?.state;
    }
    getFetchedAt(e) {
        let t = c[e];
        if (t?.state === "success" || t?.state === "error") return t.fetchedAt;
    }
    getPromotionsForApplication(e) {
        let t = c[e];
        return t?.state === "success" || t?.state === "loading" ? (t.promotions ?? null) : null;
    }
}
new d(s.h, {
    LOGOUT: function () {
        c = {};
    },
    STOREFRONT_PROMOTIONS_FETCH_START: function (e) {
        let { applicationIds: t } = e;
        for (let e of t) {
            let t = c[e];
            c[e] = { state: "loading", promotions: t?.state === "success" ? [...t.promotions] : void 0 };
        }
    },
    STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t, promotions: n } = e,
            i = Date.now(),
            r = { ...c };
        for (let e of t) r[e] = { state: "success", promotions: [], fetchedAt: i };
        for (let e of n) {
            let t = e.applicationId;
            r[t]?.state === "success" && r[t].promotions.push(e);
        }
        c = r;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = Date.now();
        for (let e of t) c[e] = { state: "error", fetchedAt: n };
    },
});
var _ = n(117218),
    h = n(315069);
class f extends h.A {
    id;
    applicationId;
    displayName;
    rewardType;
    rewardConfig;
    skuIds;
    appliesToAllSkus;
    startsAt;
    endsAt;
    static createFromServer(e) {
        var t;
        return new f({
            id: e.id,
            applicationId: e.application_id,
            displayName: e.display_name ?? null,
            rewardType: e.reward_type,
            rewardConfig:
                null != e.reward_config
                    ? null == (t = e.reward_config)
                        ? null
                        : {
                              discount:
                                  null != t.discount
                                      ? { id: t.discount.id, type: t.discount.type, amount: t.discount.amount }
                                      : null,
                          }
                    : null,
            skuIds: (function (e) {
                if (null == e) return null;
                let t = {};
                for (let [n, i] of Object.entries(e)) t[n] = { priceTiers: i.price_tiers };
                return t;
            })(e.sku_ids),
            appliesToAllSkus: e.applies_to_all_skus,
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.displayName = e.displayName),
            (this.rewardType = e.rewardType),
            (this.rewardConfig = e.rewardConfig),
            (this.skuIds = e.skuIds),
            (this.appliesToAllSkus = e.appliesToAllSkus),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt);
    }
}
var p = n(652215);
o.A.Millis.HOUR;
let E = 10 * o.A.Millis.MINUTE,
    m = o.A.Millis.MINUTE;
function g(e) {
    return e?.type === "error" ? E : m;
}
async function A(e) {
    let { applicationId: t } = e;
    await T({ type: "application", applicationId: t });
}
async function I(e) {
    let { skuIds: t } = e;
    await T({ type: "skus", skuIds: t });
}
async function T(e) {
    let {
        shouldFetch: t,
        filteredSkuIds: n,
        applicationId: i,
    } = (function (e) {
        if ("application" === e.type) {
            let t = l.A.getFetchStateForApplicationId(e.applicationId),
                n = g(t);
            return null != t && ("loading" === t.type || t.fetchedAt > Date.now() - n)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let t = e.skuIds
                .filter((e) => {
                    let t = l.A.getFetchStateForSkuId(e);
                    if (null == t) return !0;
                    let n = g(t);
                    return "loading" !== t.type && t.fetchedAt < Date.now() - n;
                })
                .sort((e, t) => {
                    let n = l.A.getFetchStateForSkuId(e),
                        i = l.A.getFetchStateForSkuId(t);
                    return null == n && null != i ? -1 : +(null != n && null == i);
                });
            return 0 === t.length
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
                : { shouldFetch: !0, filteredSkuIds: t.slice(0, 50), applicationId: null };
        }
    })(e);
    if (!t) return;
    let o = null != i ? { type: "application", applicationId: i } : { type: "skus", skuIds: n };
    try {
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: o });
        let e = (
            await r.Bo.get({
                url: p.Rsh.STOREFRONT_PRICES,
                query: {
                    ...(null != i ? { application_id: i } : { sku_ids: n }),
                    country_code: a.A.ipCountryCode ?? void 0,
                },
                rejectWithError: !0,
            })
        ).body;
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: o, data: (0, _.Oj)(e) });
    } catch {
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: o });
    }
}
function S(e) {
    let { applicationId: t } = e;
    i.useEffect(() => {
        null != t && A({ applicationId: t });
    }, [t]);
}
function y(e) {
    let { skuIds: t } = e;
    i.useEffect(() => {
        0 !== t.length && I({ skuIds: t });
    }, [t]);
}
