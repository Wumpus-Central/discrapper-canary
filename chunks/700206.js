i.d(e, { A: () => d });
var l = i(582128),
    n = i(17928),
    s = i(73825),
    a = i(97352),
    r = i(166403),
    c = i(636194),
    o = i(624456),
    u = i(652215);
function d(t) {
    let e = (0, n.bG)([r.A], () => r.A.getSubscriptions()),
        i = l.useMemo(() => {
            if (null == e) return {};
            let t = {};
            for (let i of Object.values(e)) i.type === u.rzx.GUILD && (t[(0, o.M)(i)] = i);
            return t;
        }, [e]),
        { activeSubscription: d, activeSubscriptionListing: m } = (0, n.cf)([c.A], () => {
            let e,
                l = null,
                n = null != t ? c.A.getSubscriptionGroupListing(t) : null;
            for (let t of n?.subscription_listings_ids ?? []) {
                let n = c.A.getSubscriptionListing(t),
                    s = n?.subscription_plans[0].id;
                if (null == s) continue;
                let a = i[s];
                if (null != a) {
                    (l = a), (e = n);
                    break;
                }
            }
            return { activeSubscription: l, activeSubscriptionListing: e };
        }),
        x = m?.subscription_plans[0],
        h = x?.id,
        g = x?.sku_id,
        f = (0, n.bG)([a.A], () => (null != h ? a.A.get(h) : null)),
        j = m?.soft_deleted;
    return (
        l.useEffect(() => {
            null != f || null == g || a.A.isFetchingForSKU(g) || (0, s.ur)(g, void 0, void 0, j);
        }, [f, g, j]),
        { activeSubscription: d, activeSubscriptionListing: m, activeSubscriptionPlanFromStore: f }
    );
}
