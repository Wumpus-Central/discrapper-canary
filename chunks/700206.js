i.d(t, { A: () => u });
var l = i(64700),
    n = i(311907),
    a = i(73825),
    s = i(97352),
    r = i(166403),
    c = i(636194),
    d = i(624456),
    o = i(652215);
function u(e) {
    let t = (0, n.bG)([r.A], () => r.A.getSubscriptions()),
        i = l.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let i of Object.values(t)) i.type === o.rzx.GUILD && (e[(0, d.M)(i)] = i);
            return e;
        }, [t]),
        { activeSubscription: u, activeSubscriptionListing: m } = (0, n.cf)([c.A], () => {
            let t,
                l = null,
                n = null != e ? c.A.getSubscriptionGroupListing(e) : null;
            for (let e of n?.subscription_listings_ids ?? []) {
                let n = c.A.getSubscriptionListing(e),
                    a = n?.subscription_plans[0].id;
                if (null == a) continue;
                let s = i[a];
                if (null != s) {
                    (l = s), (t = n);
                    break;
                }
            }
            return { activeSubscription: l, activeSubscriptionListing: t };
        }),
        x = m?.subscription_plans[0],
        h = x?.id,
        g = x?.sku_id,
        v = (0, n.bG)([s.A], () => (null != h ? s.A.get(h) : null)),
        j = m?.soft_deleted;
    return (
        l.useEffect(() => {
            null != v || null == g || s.A.isFetchingForSKU(g) || (0, a.ur)(g, void 0, void 0, j);
        }, [v, g, j]),
        { activeSubscription: u, activeSubscriptionListing: m, activeSubscriptionPlanFromStore: v }
    );
}
