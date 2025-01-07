t.d(n, {
    s: function () {
        return _;
    }
}),
    t(789020);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(544891),
    o = t(481060),
    s = t(570140),
    c = t(171246),
    u = t(509545),
    d = t(55563),
    m = t(551428),
    f = t(74538),
    p = t(937615),
    h = t(147496),
    x = t(519896),
    v = t(981631),
    C = t(388032);
let g = (0, r.Kb)([d.Z, u.Z, m.Z], {
    queryId: (e) => (null != e ? ['premium-button', e] : null),
    get: (e) => {
        var n;
        if (null == e) return;
        let t = d.Z.get(e),
            l = null !== (n = u.Z.getForSKU(e)) && void 0 !== n ? n : [],
            i = m.Z.getForSKU(e),
            r = d.Z.getParentSKU(e);
        if (null != t && null != i && (null == t || t.type !== v.epS.SUBSCRIPTION || null != r))
            return {
                parentSku: r,
                sku: t,
                storeListing: i,
                subscriptionPlans: l
            };
    },
    load: async (e, n) => {
        if (null == n) return;
        let t = {
                url: v.ANM.STOREFRONT_PREMIUM_BUTTON(n),
                rejectWithError: !1
            },
            { body: l } = await a.tn.get(t);
        s.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_SUCCESS',
            storeListings: l.store_listings
        }),
            null != l.subscription_plans &&
                s.Z.dispatch({
                    type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
                    skuId: n,
                    subscriptionPlans: l.subscription_plans
                }),
            null != l.skus &&
                l.skus.forEach((e) => {
                    s.Z.dispatch({
                        type: 'SKU_FETCH_SUCCESS',
                        sku: e
                    });
                });
    },
    useStateHook: r.cj
});
function _(e) {
    let { data: n } = g(e),
        t = null == n ? void 0 : n.parentSku,
        r = null == n ? void 0 : n.sku,
        a = null == n ? void 0 : n.storeListing,
        s = null == n ? void 0 : n.subscriptionPlans,
        u = i.useCallback(() => {
            if ((null == r ? void 0 : r.applicationId) == null || (null == r ? void 0 : r.id) == null || (null == r ? void 0 : r.flags) == null) return null;
            (0, o.openModal)((e) => {
                let { onClose: n, transitionState: t } = e;
                return (0, l.jsx)(x.SubscriptionDetailsModal, {
                    appId: r.applicationId,
                    subscriptionType: (0, c.KW)(r.flags) ? 'user' : 'guild',
                    onClose: n,
                    skuId: r.id,
                    transitionState: t,
                    guildId: null
                });
            });
        }, [null == r ? void 0 : r.applicationId, null == r ? void 0 : r.id, null == r ? void 0 : r.flags]),
        d = i.useCallback(() => {
            if (null == r) return null;
            (0, o.openModal)((e) => {
                let { onClose: n, transitionState: t } = e;
                return (0, l.jsx)(h.ItemDetailsModal, {
                    appId: r.applicationId,
                    skuId: r.id,
                    onClose: n,
                    transitionState: t
                });
            });
        }, [r]);
    if (null != r && null != a && (null == r || r.type !== v.epS.SUBSCRIPTION || null != t)) {
        if (null == e || (null != r && !r.available))
            return {
                disabled: !0,
                label: C.intl.string(C.t.CHa0vL)
            };
        if (r.type === v.epS.SUBSCRIPTION) {
            if (null == s || 0 === s.length)
                return {
                    disabled: !0,
                    label: C.intl.string(C.t.CHa0vL)
                };
            let e = s[0],
                n = (0, f.aS)(e.id);
            return {
                disabled: !1,
                label: C.intl.formatToPlainString(C.t['c6Q+Bw'], {
                    skuName: r.name,
                    price: (0, p.T4)(n.amount, n.currency)
                }),
                onClick: u
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
