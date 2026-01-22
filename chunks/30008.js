n.d(t, {
    Q: () => y,
}),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(562465),
    o = n(397927),
    l = n(73153),
    c = n(163437),
    u = n(97352),
    d = n(67480),
    f = n(328968),
    p = n(927578),
    _ = n(580630),
    h = n(963179),
    m = n(168393),
    g = n(652215),
    E = n(985018);
let b = (0, a.UT)([d.A, u.A, f.A], {
    getQueryId: g.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        var t;
        if (null == e) return;
        let n = d.A.get(e),
            r = null != (t = u.A.getForSKU(e)) ? t : [],
            i = f.A.getForSKU(e),
            a = d.A.getParentSKU(e);
        return null == n || null == i || (null != n && n.type === g.Puh.SUBSCRIPTION && null == a)
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
                url: g.Rsh.STOREFRONT_PREMIUM_BUTTON(e),
                rejectWithError: !1,
            },
            { body: n } = await s.Bo.get(t);
        l.h.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: n.store_listings,
        }),
            null != n.subscription_plans &&
                l.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    l.h.dispatch({
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
        s = null == t ? void 0 : t.storeListing,
        l = null == t ? void 0 : t.subscriptionPlans,
        u = i.useCallback(() => {
            if (
                (null == a ? void 0 : a.applicationId) == null ||
                (null == a ? void 0 : a.id) == null ||
                (null == a ? void 0 : a.flags) == null
            )
                return null;
            (0, o.qfG)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, r.jsx)(m.SubscriptionDetailsModal, {
                    appId: a.applicationId,
                    subscriptionType: (0, c.bg)(a.flags) ? "user" : "guild",
                    onClose: t,
                    skuId: a.id,
                    transitionState: n,
                    guildId: null,
                });
            });
        }, [null == a ? void 0 : a.applicationId, null == a ? void 0 : a.id, null == a ? void 0 : a.flags]),
        d = i.useCallback(() => {
            if (null == a) return null;
            (0, o.qfG)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, r.jsx)(h.ItemDetailsModal, {
                    appId: a.applicationId,
                    skuId: a.id,
                    onClose: t,
                    transitionState: n,
                });
            });
        }, [a]);
    if (null != a && null != s && (null == a || a.type !== g.Puh.SUBSCRIPTION || null != n)) {
        if (null == e || (null != a && !a.available))
            return {
                disabled: !0,
                label: E.intl.string(E.t.CHa0vN),
            };
        if (a.type === g.Puh.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
                return {
                    disabled: !0,
                    label: E.intl.string(E.t.CHa0vN),
                };
            let e = l[0],
                t = (0, p.y8)(e.id);
            return {
                disabled: !1,
                label: E.intl.formatToPlainString(E.t["c6Q+B3"], {
                    skuName: a.name,
                    price: (0, _.$g)(t.amount, t.currency),
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
                      price: (0, _.$g)(a.price.amount, a.price.currency),
                  }),
                  onClick: d,
              };
    }
}
