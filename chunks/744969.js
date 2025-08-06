n.d(t, { s: () => y }), n(997841);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(544891),
    s = n(481060),
    l = n(570140),
    c = n(171246),
    u = n(509545),
    d = n(55563),
    f = n(551428),
    _ = n(74538),
    p = n(937615),
    h = n(147496),
    m = n(519896),
    g = n(981631),
    E = n(388032);
let b = (0, o.Kb)([d.Z, u.Z, f.Z], {
    queryId: (e) => g.McO.APP_PREMIUM_BUTTON(e),
    get: (e) => {
        var t;
        if (null == e) return;
        let n = d.Z.get(e),
            r = null != (t = u.Z.getForSKU(e)) ? t : [],
            i = f.Z.getForSKU(e),
            o = d.Z.getParentSKU(e);
        if (null != n && null != i && (null == n || n.type !== g.epS.SUBSCRIPTION || null != o))
            return {
                parentSku: o,
                sku: n,
                storeListing: i,
                subscriptionPlans: r,
            };
    },
    load: async (e, t) => {
        if (null == t) return;
        let n = {
                url: g.ANM.STOREFRONT_PREMIUM_BUTTON(t),
                rejectWithError: !1,
            },
            { body: r } = await a.tn.get(n);
        l.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: r.store_listings,
        }),
            null != r.subscription_plans &&
                l.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: t,
                    subscriptionPlans: r.subscription_plans,
                }),
            null != r.skus &&
                r.skus.forEach((e) => {
                    l.Z.dispatch({
                        type: "SKU_FETCH_SUCCESS",
                        sku: e,
                    });
                });
    },
    useStateHook: o.cj,
});
function y(e) {
    let { data: t } = b(e),
        n = null == t ? void 0 : t.parentSku,
        o = null == t ? void 0 : t.sku,
        a = null == t ? void 0 : t.storeListing,
        l = null == t ? void 0 : t.subscriptionPlans,
        u = i.useCallback(() => {
            if (
                (null == o ? void 0 : o.applicationId) == null ||
                (null == o ? void 0 : o.id) == null ||
                (null == o ? void 0 : o.flags) == null
            )
                return null;
            (0, s.h7j)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, r.jsx)(m.SubscriptionDetailsModal, {
                    appId: o.applicationId,
                    subscriptionType: (0, c.KW)(o.flags) ? "user" : "guild",
                    onClose: t,
                    skuId: o.id,
                    transitionState: n,
                    guildId: null,
                });
            });
        }, [null == o ? void 0 : o.applicationId, null == o ? void 0 : o.id, null == o ? void 0 : o.flags]),
        d = i.useCallback(() => {
            if (null == o) return null;
            (0, s.h7j)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, r.jsx)(h.ItemDetailsModal, {
                    appId: o.applicationId,
                    skuId: o.id,
                    onClose: t,
                    transitionState: n,
                });
            });
        }, [o]);
    if (null != o && null != a && (null == o || o.type !== g.epS.SUBSCRIPTION || null != n)) {
        if (null == e || (null != o && !o.available))
            return {
                disabled: !0,
                label: E.intl.string(E.t.CHa0vL),
            };
        if (o.type === g.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
                return {
                    disabled: !0,
                    label: E.intl.string(E.t.CHa0vL),
                };
            let e = l[0],
                t = (0, _.aS)(e.id);
            return {
                disabled: !1,
                label: E.intl.formatToPlainString(E.t["c6Q+Bw"], {
                    skuName: o.name,
                    price: (0, p.T4)(t.amount, t.currency),
                }),
                onClick: u,
            };
        }
        return null == o.price
            ? {
                  disabled: !0,
                  label: E.intl.string(E.t.CHa0vL),
              }
            : {
                  disabled: !1,
                  label: E.intl.formatToPlainString(E.t["c6Q+Bw"], {
                      skuName: o.name,
                      price: (0, p.T4)(o.price.amount, o.price.currency),
                  }),
                  onClick: d,
              };
    }
}
