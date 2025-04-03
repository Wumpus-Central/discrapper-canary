r.d(t, { s: () => h }), r(789020);
var n = r(200651),
    l = r(192379),
    i = r(442837),
    o = r(544891),
    a = r(481060),
    c = r(570140),
    s = r(171246),
    u = r(509545),
    p = r(55563),
    d = r(551428),
    f = r(74538),
    b = r(937615),
    O = r(147496),
    y = r(519896),
    m = r(981631),
    j = r(388032);
let g = (0, i.Kb)([p.Z, u.Z, d.Z], {
    queryId: (e) => m.McO.APP_PREMIUM_BUTTON(e),
    get: (e) => {
        var t;
        if (null == e) return;
        let r = p.Z.get(e),
            n = null != (t = u.Z.getForSKU(e)) ? t : [],
            l = d.Z.getForSKU(e),
            i = p.Z.getParentSKU(e);
        if (null != r && null != l && (null == r || r.type !== m.epS.SUBSCRIPTION || null != i))
            return {
                parentSku: i,
                sku: r,
                storeListing: l,
                subscriptionPlans: n
            };
    },
    load: async (e, t) => {
        if (null == t) return;
        let r = {
                url: m.ANM.STOREFRONT_PREMIUM_BUTTON(t),
                rejectWithError: !1
            },
            { body: n } = await o.tn.get(r);
        c.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_SUCCESS',
            storeListings: n.store_listings
        }),
            null != n.subscription_plans &&
                c.Z.dispatch({
                    type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
                    skuId: t,
                    subscriptionPlans: n.subscription_plans
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    c.Z.dispatch({
                        type: 'SKU_FETCH_SUCCESS',
                        sku: e
                    });
                });
    },
    useStateHook: i.cj
});
function h(e) {
    let { data: t } = g(e),
        r = null == t ? void 0 : t.parentSku,
        i = null == t ? void 0 : t.sku,
        o = null == t ? void 0 : t.storeListing,
        c = null == t ? void 0 : t.subscriptionPlans,
        u = l.useCallback(() => {
            if ((null == i ? void 0 : i.applicationId) == null || (null == i ? void 0 : i.id) == null || (null == i ? void 0 : i.flags) == null) return null;
            (0, a.h7j)((e) => {
                let { onClose: t, transitionState: r } = e;
                return (0, n.jsx)(y.SubscriptionDetailsModal, {
                    appId: i.applicationId,
                    subscriptionType: (0, s.KW)(i.flags) ? 'user' : 'guild',
                    onClose: t,
                    skuId: i.id,
                    transitionState: r,
                    guildId: null
                });
            });
        }, [null == i ? void 0 : i.applicationId, null == i ? void 0 : i.id, null == i ? void 0 : i.flags]),
        p = l.useCallback(() => {
            if (null == i) return null;
            (0, a.h7j)((e) => {
                let { onClose: t, transitionState: r } = e;
                return (0, n.jsx)(O.ItemDetailsModal, {
                    appId: i.applicationId,
                    skuId: i.id,
                    onClose: t,
                    transitionState: r
                });
            });
        }, [i]);
    if (null != i && null != o && (null == i || i.type !== m.epS.SUBSCRIPTION || null != r)) {
        if (null == e || (null != i && !i.available))
            return {
                disabled: !0,
                label: j.NW.string(j.t.CHa0vL)
            };
        if (i.type === m.epS.SUBSCRIPTION) {
            if (null == c || 0 === c.length)
                return {
                    disabled: !0,
                    label: j.NW.string(j.t.CHa0vL)
                };
            let e = c[0],
                t = (0, f.aS)(e.id);
            return {
                disabled: !1,
                label: j.NW.formatToPlainString(j.t['c6Q+Bw'], {
                    skuName: i.name,
                    price: (0, b.T4)(t.amount, t.currency)
                }),
                onClick: u
            };
        }
        return null == i.price
            ? {
                  disabled: !0,
                  label: j.NW.string(j.t.CHa0vL)
              }
            : {
                  disabled: !1,
                  label: j.NW.formatToPlainString(j.t['c6Q+Bw'], {
                      skuName: i.name,
                      price: (0, b.T4)(i.price.amount, i.price.currency)
                  }),
                  onClick: p
              };
    }
}
