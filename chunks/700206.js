"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    a = n(73825),
    s = n(97352),
    o = n(166403),
    l = n(636194),
    u = n(624456),
    c = n(652215);
function d(e) {
    let t = (0, i.bG)([o.A], () => o.A.getSubscriptions()),
        n = r.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === c.rzx.GUILD && (e[(0, u.M)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: d, activeSubscriptionListing: _ } = (0, i.cf)([l.A], () => {
            let t,
                r = null,
                i = null != e ? l.A.getSubscriptionGroupListing(e) : null;
            for (let e of i?.subscription_listings_ids ?? []) {
                let i = l.A.getSubscriptionListing(e),
                    a = i?.subscription_plans[0].id;
                if (null == a) continue;
                let s = n[a];
                if (null != s) {
                    (r = s), (t = i);
                    break;
                }
            }
            return { activeSubscription: r, activeSubscriptionListing: t };
        }),
        f = _?.subscription_plans[0],
        p = f?.id,
        h = f?.sku_id,
        m = (0, i.bG)([s.A], () => (null != p ? s.A.get(p) : null)),
        g = _?.soft_deleted;
    return (
        r.useEffect(() => {
            null != m || null == h || s.A.isFetchingForSKU(h) || (0, a.ur)(h, void 0, void 0, g);
        }, [m, h, g]),
        { activeSubscription: d, activeSubscriptionListing: _, activeSubscriptionPlanFromStore: m }
    );
}
