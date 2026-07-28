"use strict";
n.d(t, { J_: () => C, N4: () => S, rd: () => T, l9: () => g, tx: () => p });
var i = n(562465),
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
    includeBundles;
    startsAt;
    endsAt;
    tenantMetadata;
    static createFromServer(e) {
        var t, n, i;
        let r, a;
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
                                      ? {
                                            id: t.discount.id,
                                            type: t.discount.type,
                                            amount: t.discount.amount,
                                            fiatEnabled: t.discount.fiat_enabled,
                                            orbsEnabled: t.discount.orbs_enabled,
                                        }
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
            includeBundles: e.include_bundles,
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
            tenantMetadata:
                null != e.tenant_metadata
                    ? {
                          collectibles:
                              null != (n = e.tenant_metadata).collectibles
                                  ? ((i = n.collectibles),
                                    (r = i.reward?.storefront?.nagbar),
                                    (a = i.reward?.checkout?.offer_notice),
                                    null == r && null == a
                                        ? {}
                                        : {
                                              reward: {
                                                  storefront:
                                                      null != r
                                                          ? {
                                                                nagbar: {
                                                                    headerText: r.header_text ?? void 0,
                                                                    cta:
                                                                        null != r.cta
                                                                            ? { text: r.cta.text ?? void 0 }
                                                                            : void 0,
                                                                    helpCenterId: r.help_center_id ?? void 0,
                                                                    icon: r.icon ?? void 0,
                                                                },
                                                            }
                                                          : void 0,
                                                  checkout:
                                                      null != a
                                                          ? {
                                                                offerNotice: {
                                                                    icon: a.icon ?? void 0,
                                                                    text: a.text ?? void 0,
                                                                },
                                                            }
                                                          : void 0,
                                              },
                                          })
                                  : void 0,
                      }
                    : null,
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
            (this.includeBundles = e.includeBundles),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt),
            (this.tenantMetadata = e.tenantMetadata);
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
    0 !== t.length && (await T(t));
}
async function T(e) {
    if (0 !== e.length)
        try {
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_START", applicationIds: e });
            let t = o.A.getPromotionIdOverride(),
                n = (
                    await i.Bo.get({
                        url: E.Rsh.STOREFRONT_PROMOTIONS,
                        query: { application_ids: e, ...(null != t ? { promotion_id_override: t } : {}) },
                        rejectWithError: !0,
                    })
                ).body.promotions.map((e) => _.createFromServer(e));
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_SUCCESS", applicationIds: e, promotions: n });
        } catch {
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_FAIL", applicationIds: e });
        }
}
function m(e) {
    return e?.type === "error" ? A : I;
}
async function g(e) {
    let { applicationId: t } = e;
    await N({ type: "application", applicationId: t });
}
async function S(e) {
    let { skuIds: t } = e;
    await N({ type: "skus", skuIds: t });
}
async function N(e) {
    let {
        shouldFetch: t,
        filteredSkuIds: n,
        applicationId: s,
    } = (function (e) {
        if ("application" === e.type) {
            let t = l.A.getFetchStateForApplicationId(e.applicationId),
                n = m(t);
            return null != t && ("loading" === t.type || t.fetchedAt > Date.now() - n)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let t = e.skuIds
                .filter((e) => {
                    let t = l.A.getFetchStateForSkuId(e);
                    if (null == t) return !0;
                    let n = m(t);
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
function C(e) {
    r.h.dispatch({ type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride: e });
}
