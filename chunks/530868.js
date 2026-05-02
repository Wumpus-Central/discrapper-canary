"use strict";
n.d(t, { x: () => S, j: () => N });
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
var _ = n(723090);
let f = (0, n(945810).mj)({
    name: "2026-04-storefront-pricing",
    kind: "user",
    defaultConfig: { enabled: !1, thresholdMs: 5 * o.A.Millis.MINUTE },
    variations: {
        0: { enabled: !1, thresholdMs: 5 * o.A.Millis.MINUTE },
        1: { enabled: !0, thresholdMs: +o.A.Millis.MINUTE },
        2: { enabled: !0, thresholdMs: 2 * o.A.Millis.MINUTE },
        3: { enabled: !0, thresholdMs: 5 * o.A.Millis.MINUTE },
        4: { enabled: !0, thresholdMs: 10 * o.A.Millis.MINUTE },
    },
});
var h = n(315069);
class p extends h.A {
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
        return new p({
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
var E = n(652215);
o.A.Millis.HOUR;
let m = 10 * o.A.Millis.MINUTE;
function g(e, t) {
    return e?.type === "error"
        ? m
        : (function (e) {
              let { location: t } = e;
              return f.getConfig({ location: t }).thresholdMs;
          })({ location: t });
}
async function A(e) {
    let { applicationId: t, location: n } = e;
    await T({ type: "application", applicationId: t }, n);
}
async function I(e) {
    let { skuIds: t, location: n } = e;
    await T({ type: "skus", skuIds: t }, n);
}
async function T(e, t) {
    let {
        shouldFetch: n,
        filteredSkuIds: i,
        applicationId: o,
    } = (function (e, t) {
        if (
            !(function (e) {
                let { location: t } = e;
                return f.getConfig({ location: t }).enabled;
            })({ location: t })
        )
            return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
        if ("application" === e.type) {
            let n = l.A.getFetchStateForApplicationId(e.applicationId),
                i = g(n, t);
            return null != n && ("loading" === n.type || n.fetchedAt > Date.now() - i)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let n = e.skuIds
                .filter((e) => {
                    let n = l.A.getFetchStateForSkuId(e);
                    if (null == n) return !0;
                    let i = g(n, t);
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
    let u = null != o ? { type: "application", applicationId: o } : { type: "skus", skuIds: i };
    try {
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: u });
        let e = (
            await r.Bo.get({
                url: E.Rsh.STOREFRONT_PRICES,
                query: {
                    ...(null != o ? { application_id: o } : { sku_ids: i }),
                    country_code: a.A.ipCountryCode ?? void 0,
                },
                rejectWithError: !0,
            })
        ).body;
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: u, data: (0, _.Oj)(e) });
    } catch {
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: u });
    }
}
function S(e) {
    let { applicationId: t, location: n } = e;
    i.useEffect(() => {
        null != t && A({ applicationId: t, location: n });
    }, [t, n]);
}
function N(e) {
    let { skuIds: t, location: n } = e;
    i.useEffect(() => {
        0 !== t.length && I({ skuIds: t, location: n });
    }, [t, n]);
}
