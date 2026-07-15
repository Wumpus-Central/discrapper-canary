"use strict";
n.d(t, { J_: () => N, N4: () => g, tx: () => p, l9: () => m });
var i = n(636537),
    r = n(228366),
    a = n(615405),
    s = n(927813),
    l = n(561573),
    o = n(937427),
    d = n(918467),
    c = n(993046),
    u = n(315069);
class _ extends u.A {
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
        return new _({
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
let A = 10 * s.A.Millis.MINUTE,
    h = s.A.Millis.MINUTE,
    I = s.A.Millis.MINUTE;
function f(e) {
    let t = d.A.getFetchState(e);
    if (void 0 === t) return !0;
    if ("loading" === t) return !1;
    let n = d.A.getFetchedAt(e);
    return null == n || Date.now() - n > ("error" === t ? A : h);
}
async function p(e) {
    let t = e.filter(f);
    if (0 !== t.length)
        try {
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_START", applicationIds: t });
            let e = o.A.getPromotionIdOverride(),
                n = (
                    await i.Bo.get({
                        url: E.Rsh.STOREFRONT_PROMOTIONS,
                        query: { application_ids: t, ...(null != e ? { promotion_id_override: e } : {}) },
                        rejectWithError: !0,
                    })
                ).body.promotions.map((e) => _.createFromServer(e));
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_SUCCESS", applicationIds: t, promotions: n });
        } catch {
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_FAIL", applicationIds: t });
        }
}
function T(e) {
    return e?.type === "error" ? A : I;
}
async function m(e) {
    let { applicationId: t } = e;
    await S({ type: "application", applicationId: t });
}
async function g(e) {
    let { skuIds: t } = e;
    await S({ type: "skus", skuIds: t });
}
async function S(e) {
    let {
        shouldFetch: t,
        filteredSkuIds: n,
        applicationId: s,
    } = (function (e) {
        if ("application" === e.type) {
            let t = l.A.getFetchStateForApplicationId(e.applicationId),
                n = T(t);
            return null != t && ("loading" === t.type || t.fetchedAt > Date.now() - n)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let t = e.skuIds
                .filter((e) => {
                    let t = l.A.getFetchStateForSkuId(e);
                    if (null == t) return !0;
                    let n = T(t);
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
    let d = null != s ? { type: "application", applicationId: s } : { type: "skus", skuIds: n };
    try {
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: d });
        let e = o.A.getPromotionIdOverride(),
            t = (
                await i.Bo.get({
                    url: E.Rsh.STOREFRONT_PRICES,
                    query: {
                        ...(null != s ? { application_id: s } : { sku_ids: n }),
                        country_code: a.A.ipCountryCode ?? void 0,
                        ...(null != e ? { promotion_id_override: e } : {}),
                    },
                    rejectWithError: !0,
                })
            ).body;
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: d, data: (0, c.Oj)(t) });
    } catch {
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: d });
    }
}
function N(e) {
    r.h.dispatch({ type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride: e });
}
