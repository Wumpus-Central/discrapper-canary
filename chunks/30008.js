n.d(t, { Q: () => E }), n(938796);
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(562465),
    s = n(192308),
    o = n(73153),
    d = n(163437),
    c = n(97352),
    u = n(67480),
    m = n(328968),
    _ = n(927578),
    p = n(580630),
    h = n(963179),
    A = n(168393),
    C = n(652215),
    x = n(985018);
let f = (0, r.UT)([u.A, c.A, m.A], {
    getQueryId: C.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = u.A.get(e),
            n = c.A.getForSKU(e) ?? [],
            a = m.A.getForSKU(e),
            l = u.A.getParentSKU(e);
        return null == t || null == a || (null != t && t.type === C.Puh.SUBSCRIPTION && null == l)
            ? null
            : { parentSku: l, sku: t, storeListing: a, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: C.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await i.Bo.get(t);
        o.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                o.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    o.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                });
    },
});
function E(e) {
    let { data: t } = f(e),
        n = t?.parentSku,
        r = t?.sku,
        i = t?.storeListing,
        o = t?.subscriptionPlans,
        c = l.useCallback(() => {
            if (r?.applicationId == null || r?.id == null || r?.flags == null) return null;
            (0, s.openModal)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, a.jsx)(A.SubscriptionDetailsModal, {
                    appId: r.applicationId,
                    subscriptionType: (0, d.bg)(r.flags) ? "user" : "guild",
                    onClose: t,
                    skuId: r.id,
                    transitionState: n,
                    guildId: null,
                });
            });
        }, [r?.applicationId, r?.id, r?.flags]),
        u = l.useCallback(() => {
            if (null == r) return null;
            (0, s.openModal)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, a.jsx)(h.ItemDetailsModal, {
                    appId: r.applicationId,
                    skuId: r.id,
                    onClose: t,
                    transitionState: n,
                });
            });
        }, [r]);
    if (null != r && null != i && (null == r || r.type !== C.Puh.SUBSCRIPTION || null != n)) {
        if (null == e || (null != r && !r.available)) return { disabled: !0, label: x.intl.string(x.t.CHa0vN) };
        if (r.type === C.Puh.SUBSCRIPTION) {
            if (null == o || 0 === o.length) return { disabled: !0, label: x.intl.string(x.t.CHa0vN) };
            let e = o[0],
                t = (0, _.y8)(e.id);
            return {
                disabled: !1,
                label: x.intl.formatToPlainString(x.t["c6Q+B3"], {
                    skuName: r.name,
                    price: (0, p.$g)(t.amount, t.currency),
                }),
                onClick: c,
            };
        }
        return null == r.price
            ? { disabled: !0, label: x.intl.string(x.t.CHa0vN) }
            : {
                  disabled: !1,
                  label: x.intl.formatToPlainString(x.t["c6Q+B3"], {
                      skuName: r.name,
                      price: (0, p.$g)(r.price.amount, r.price.currency),
                  }),
                  onClick: u,
              };
    }
}
