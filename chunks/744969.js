l.d(n, { s: () => j }), l(789020);
var t = l(200651),
    i = l(192379),
    r = l(442837),
    a = l(544891),
    s = l(481060),
    o = l(570140),
    u = l(171246),
    c = l(509545),
    d = l(55563),
    m = l(551428),
    h = l(74538),
    p = l(937615),
    x = l(147496),
    v = l(519896),
    f = l(981631),
    C = l(388032);
let g = (0, r.Kb)([d.Z, c.Z, m.Z], {
    queryId: (e) => (null != e ? ['premium-button', e] : null),
    get: (e) => {
        var n;
        if (null == e) return;
        let l = d.Z.get(e),
            t = null !== (n = c.Z.getForSKU(e)) && void 0 !== n ? n : [],
            i = m.Z.getForSKU(e),
            r = d.Z.getParentSKU(e);
        if (null != l && null != i && (null == l || l.type !== f.epS.SUBSCRIPTION || null != r))
            return {
                parentSku: r,
                sku: l,
                storeListing: i,
                subscriptionPlans: t
            };
    },
    load: async (e, n) => {
        if (null == n) return;
        let l = {
                url: f.ANM.STOREFRONT_PREMIUM_BUTTON(n),
                rejectWithError: !1
            },
            { body: t } = await a.tn.get(l);
        o.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_SUCCESS',
            storeListings: t.store_listings
        }),
            null != t.subscription_plans &&
                o.Z.dispatch({
                    type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
                    skuId: n,
                    subscriptionPlans: t.subscription_plans
                }),
            null != t.skus &&
                t.skus.forEach((e) => {
                    o.Z.dispatch({
                        type: 'SKU_FETCH_SUCCESS',
                        sku: e
                    });
                });
    },
    useStateHook: r.cj
});
function j(e) {
    let { data: n } = g(e),
        l = null == n ? void 0 : n.parentSku,
        r = null == n ? void 0 : n.sku,
        a = null == n ? void 0 : n.storeListing,
        o = null == n ? void 0 : n.subscriptionPlans,
        c = i.useCallback(() => {
            if ((null == r ? void 0 : r.applicationId) == null || (null == r ? void 0 : r.id) == null || (null == r ? void 0 : r.flags) == null) return null;
            (0, s.h7j)((e) => {
                let { onClose: n, transitionState: l } = e;
                return (0, t.jsx)(v.SubscriptionDetailsModal, {
                    appId: r.applicationId,
                    subscriptionType: (0, u.KW)(r.flags) ? 'user' : 'guild',
                    onClose: n,
                    skuId: r.id,
                    transitionState: l,
                    guildId: null
                });
            });
        }, [null == r ? void 0 : r.applicationId, null == r ? void 0 : r.id, null == r ? void 0 : r.flags]),
        d = i.useCallback(() => {
            if (null == r) return null;
            (0, s.h7j)((e) => {
                let { onClose: n, transitionState: l } = e;
                return (0, t.jsx)(x.ItemDetailsModal, {
                    appId: r.applicationId,
                    skuId: r.id,
                    onClose: n,
                    transitionState: l
                });
            });
        }, [r]);
    if (null != r && null != a && (null == r || r.type !== f.epS.SUBSCRIPTION || null != l)) {
        if (null == e || (null != r && !r.available))
            return {
                disabled: !0,
                label: C.intl.string(C.t.CHa0vL)
            };
        if (r.type === f.epS.SUBSCRIPTION) {
            if (null == o || 0 === o.length)
                return {
                    disabled: !0,
                    label: C.intl.string(C.t.CHa0vL)
                };
            let e = o[0],
                n = (0, h.aS)(e.id);
            return {
                disabled: !1,
                label: C.intl.formatToPlainString(C.t['c6Q+Bw'], {
                    skuName: r.name,
                    price: (0, p.T4)(n.amount, n.currency)
                }),
                onClick: c
            };
        }
        return null == r.price
            ? {
                  disabled: !0,
                  label: C.intl.string(C.t.CHa0vL)
              }
            : {
                  disabled: !1,
                  label: C.intl.formatToPlainString(C.t['c6Q+Bw'], {
                      skuName: r.name,
                      price: (0, p.T4)(r.price.amount, r.price.currency)
                  }),
                  onClick: d
              };
    }
}
