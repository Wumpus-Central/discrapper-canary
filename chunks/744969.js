n.d(t, { s: () => y }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(544891),
    s = n(481060),
    l = n(570140),
    c = n(171246),
    u = n(509545),
    d = n(55563),
    f = n(551428),
    p = n(74538),
    _ = n(937615),
    m = n(147496),
    h = n(519896),
    g = n(981631),
    E = n(388032);
let b = (0, a.Kb)([d.Z, u.Z, f.Z], {
    getQueryId: g.McO.APP_PREMIUM_BUTTON,
    get: (e) => {
        var t;
        if (null == e) return;
        let n = d.Z.get(e),
            r = null != (t = u.Z.getForSKU(e)) ? t : [],
            i = f.Z.getForSKU(e),
            a = d.Z.getParentSKU(e);
        return null == n || null == i || (null != n && n.type === g.epS.SUBSCRIPTION && null == a)
            ? null
            : {
                  parentSku: a,
                  sku: n,
                  storeListing: i,
                  subscriptionPlans: r,
              };
    },
    load: async (e) => {
        if (null == e) return;
        let t = {
                url: g.ANM.STOREFRONT_PREMIUM_BUTTON(e),
                rejectWithError: !1,
            },
            { body: n } = await o.tn.get(t);
        l.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: n.store_listings,
        }),
            null != n.subscription_plans &&
                l.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    l.Z.dispatch({
                        type: "SKU_FETCH_SUCCESS",
                        sku: e,
                    });
                });
    },
});
function y(e) {
    let { data: t } = b(e),
        n = null == t ? void 0 : t.parentSku,
        a = null == t ? void 0 : t.sku,
        o = null == t ? void 0 : t.storeListing,
        l = null == t ? void 0 : t.subscriptionPlans,
        u = i.useCallback(() => {
            if (
                (null == a ? void 0 : a.applicationId) == null ||
                (null == a ? void 0 : a.id) == null ||
                (null == a ? void 0 : a.flags) == null
            )
                return null;
            (0, s.h7j)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, r.jsx)(h.SubscriptionDetailsModal, {
                    appId: a.applicationId,
                    subscriptionType: (0, c.KW)(a.flags) ? "user" : "guild",
                    onClose: t,
                    skuId: a.id,
                    transitionState: n,
                    guildId: null,
                });
            });
        }, [null == a ? void 0 : a.applicationId, null == a ? void 0 : a.id, null == a ? void 0 : a.flags]),
        d = i.useCallback(() => {
            if (null == a) return null;
            (0, s.h7j)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, r.jsx)(m.ItemDetailsModal, {
                    appId: a.applicationId,
                    skuId: a.id,
                    onClose: t,
                    transitionState: n,
                });
            });
        }, [a]);
    if (null != a && null != o && (null == a || a.type !== g.epS.SUBSCRIPTION || null != n)) {
        if (null == e || (null != a && !a.available))
            return {
                disabled: !0,
                label: E.intl.string(E.t.CHa0vN),
            };
        if (a.type === g.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
                return {
                    disabled: !0,
                    label: E.intl.string(E.t.CHa0vN),
                };
            let e = l[0],
                t = (0, p.aS)(e.id);
            return {
                disabled: !1,
                label: E.intl.formatToPlainString(E.t["c6Q+B3"], {
                    skuName: a.name,
                    price: (0, _.T4)(t.amount, t.currency),
                }),
                onClick: u,
            };
        }
        return null == a.price
            ? {
                  disabled: !0,
                  label: E.intl.string(E.t.CHa0vN),
              }
            : {
                  disabled: !1,
                  label: E.intl.formatToPlainString(E.t["c6Q+B3"], {
                      skuName: a.name,
                      price: (0, _.T4)(a.price.amount, a.price.currency),
                  }),
                  onClick: d,
              };
    }
}
