i.d(e, { x: () => y, j: () => g });
var r = i(64700),
    s = i(636537),
    l = i(228366),
    n = i(615405),
    a = i(927813),
    u = i(561573);
i(321073);
var o = i(17928);
let d = {};
class c extends o.Ay.Store {
    static displayName = "StorefrontPromotionStore";
    getFetchState(t) {
        return d[t]?.state;
    }
    getFetchedAt(t) {
        let e = d[t];
        if (e?.state === "success" || e?.state === "error") return e.fetchedAt;
    }
    getPromotionsForApplication(t) {
        let e = d[t];
        return e?.state === "success" || e?.state === "loading" ? (e.promotions ?? null) : null;
    }
}
new c(l.h, {
    LOGOUT: function () {
        d = {};
    },
    STOREFRONT_PROMOTIONS_FETCH_START: function (t) {
        let { applicationIds: e } = t;
        for (let t of e) {
            let e = d[t];
            d[t] = { state: "loading", promotions: e?.state === "success" ? [...e.promotions] : void 0 };
        }
    },
    STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function (t) {
        let { applicationIds: e, promotions: i } = t,
            r = Date.now(),
            s = { ...d };
        for (let t of e) s[t] = { state: "success", promotions: [], fetchedAt: r };
        for (let t of i) {
            let e = t.applicationId;
            s[e]?.state === "success" && s[e].promotions.push(t);
        }
        d = s;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (t) {
        let { applicationIds: e } = t,
            i = Date.now();
        for (let t of e) d[t] = { state: "error", fetchedAt: i };
    },
});
var p = i(723090);
let h = (0, i(945810).mj)({
    name: "2026-04-storefront-pricing",
    kind: "user",
    defaultConfig: { enabled: !1, thresholdMs: 5 * a.A.Millis.MINUTE },
    variations: {
        0: { enabled: !1, thresholdMs: 5 * a.A.Millis.MINUTE },
        1: { enabled: !0, thresholdMs: +a.A.Millis.MINUTE },
        2: { enabled: !0, thresholdMs: 2 * a.A.Millis.MINUTE },
        3: { enabled: !0, thresholdMs: 5 * a.A.Millis.MINUTE },
        4: { enabled: !0, thresholdMs: 10 * a.A.Millis.MINUTE },
    },
});
var S = i(315069);
class I extends S.A {
    id;
    applicationId;
    displayName;
    rewardType;
    rewardConfig;
    skuIds;
    appliesToAllSkus;
    startsAt;
    endsAt;
    static createFromServer(t) {
        var e;
        return new I({
            id: t.id,
            applicationId: t.application_id,
            displayName: t.display_name ?? null,
            rewardType: t.reward_type,
            rewardConfig:
                null != t.reward_config
                    ? null == (e = t.reward_config)
                        ? null
                        : {
                              discount:
                                  null != e.discount
                                      ? { id: e.discount.id, type: e.discount.type, amount: e.discount.amount }
                                      : null,
                          }
                    : null,
            skuIds: (function (t) {
                if (null == t) return null;
                let e = {};
                for (let [i, r] of Object.entries(t)) e[i] = { priceTiers: r.price_tiers };
                return e;
            })(t.sku_ids),
            appliesToAllSkus: t.applies_to_all_skus,
            startsAt: null != t.starts_at ? new Date(t.starts_at) : null,
            endsAt: null != t.ends_at ? new Date(t.ends_at) : null,
        });
    }
    constructor(t) {
        super(),
            (this.id = t.id),
            (this.applicationId = t.applicationId),
            (this.displayName = t.displayName),
            (this.rewardType = t.rewardType),
            (this.rewardConfig = t.rewardConfig),
            (this.skuIds = t.skuIds),
            (this.appliesToAllSkus = t.appliesToAllSkus),
            (this.startsAt = t.startsAt),
            (this.endsAt = t.endsAt);
    }
}
var f = i(652215);
a.A.Millis.HOUR;
let A = 10 * a.A.Millis.MINUTE;
function _(t, e) {
    return t?.type === "error"
        ? A
        : (function (t) {
              let { location: e } = t;
              return h.getConfig({ location: e }).thresholdMs;
          })({ location: e });
}
async function E(t) {
    let { applicationId: e, location: i } = t;
    await T({ type: "application", applicationId: e }, i);
}
async function m(t) {
    let { skuIds: e, location: i } = t;
    await T({ type: "skus", skuIds: e }, i);
}
async function T(t, e) {
    let {
        shouldFetch: i,
        filteredSkuIds: r,
        applicationId: a,
    } = (function (t, e) {
        if (
            !(function (t) {
                let { location: e } = t;
                return h.getConfig({ location: e }).enabled;
            })({ location: e })
        )
            return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
        if ("application" === t.type) {
            let i = u.A.getFetchStateForApplicationId(t.applicationId),
                r = _(i, e);
            return null != i && ("loading" === i.type || i.fetchedAt > Date.now() - r)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: t.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: t.applicationId };
        }
        {
            let i = t.skuIds
                .filter((t) => {
                    let i = u.A.getFetchStateForSkuId(t);
                    if (null == i) return !0;
                    let r = _(i, e);
                    return "loading" !== i.type && i.fetchedAt < Date.now() - r;
                })
                .sort((t, e) => {
                    let i = u.A.getFetchStateForSkuId(t),
                        r = u.A.getFetchStateForSkuId(e);
                    return null == i && null != r ? -1 : +(null != i && null == r);
                });
            return 0 === i.length
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
                : { shouldFetch: !0, filteredSkuIds: i.slice(0, 50), applicationId: null };
        }
    })(t, e);
    if (!i) return;
    let o = null != a ? { type: "application", applicationId: a } : { type: "skus", skuIds: r };
    try {
        l.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: o });
        let t = (
            await s.Bo.get({
                url: f.Rsh.STOREFRONT_PRICES,
                query: {
                    ...(null != a ? { application_id: a } : { sku_ids: r }),
                    country_code: n.A.ipCountryCode ?? void 0,
                },
                rejectWithError: !0,
            })
        ).body;
        l.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: o, data: (0, p.Oj)(t) });
    } catch {
        l.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: o });
    }
}
function y(t) {
    let { applicationId: e, location: i } = t;
    r.useEffect(() => {
        null != e && E({ applicationId: e, location: i });
    }, [e, i]);
}
function g(t) {
    let { skuIds: e, location: i } = t;
    r.useEffect(() => {
        0 !== e.length && m({ skuIds: e, location: i });
    }, [e, i]);
}
