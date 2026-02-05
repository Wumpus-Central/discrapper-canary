n.d(t, { Q: () => I }), n(938796);
var l = n(627968),
    a = n(64700),
    r = n(311907),
    s = n(562465),
    i = n(397927),
    o = n(73153),
    d = n(163437),
    c = n(97352),
    u = n(67480),
    m = n(328968),
    p = n(927578),
    A = n(580630),
    h = n(963179),
    C = n(168393),
    E = n(652215),
    x = n(985018);
let N = (0, r.UT)([u.A, c.A, m.A], {
    getQueryId: E.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = u.A.get(e),
            n = c.A.getForSKU(e) ?? [],
            l = m.A.getForSKU(e),
            a = u.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === E.Puh.SUBSCRIPTION && null == a)
            ? null
            : { parentSku: a, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: E.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await s.Bo.get(t);
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
function I(e) {
    let { data: t } = N(e),
        n = t?.parentSku,
        r = t?.sku,
        s = t?.storeListing,
        o = t?.subscriptionPlans,
        c = a.useCallback(() => {
            if (r?.applicationId == null || r?.id == null || r?.flags == null) return null;
            (0, i.qfG)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, l.jsx)(C.SubscriptionDetailsModal, {
                    appId: r.applicationId,
                    subscriptionType: (0, d.bg)(r.flags) ? "user" : "guild",
                    onClose: t,
                    skuId: r.id,
                    transitionState: n,
                    guildId: null,
                });
            });
        }, [r?.applicationId, r?.id, r?.flags]),
        u = a.useCallback(() => {
            if (null == r) return null;
            (0, i.qfG)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, l.jsx)(h.ItemDetailsModal, {
                    appId: r.applicationId,
                    skuId: r.id,
                    onClose: t,
                    transitionState: n,
                });
            });
        }, [r]);
    if (null != r && null != s && (null == r || r.type !== E.Puh.SUBSCRIPTION || null != n)) {
        if (null == e || (null != r && !r.available)) return { disabled: !0, label: x.intl.string(x.t.CHa0vN) };
        if (r.type === E.Puh.SUBSCRIPTION) {
            if (null == o || 0 === o.length) return { disabled: !0, label: x.intl.string(x.t.CHa0vN) };
            let e = o[0],
                t = (0, p.y8)(e.id);
            return {
                disabled: !1,
                label: x.intl.formatToPlainString(x.t["c6Q+B3"], {
                    skuName: r.name,
                    price: (0, A.$g)(t.amount, t.currency),
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
                      price: (0, A.$g)(r.price.amount, r.price.currency),
                  }),
                  onClick: u,
              };
    }
}
