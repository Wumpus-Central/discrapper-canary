var l = i(582128),
    n = i(855986),
    s = i(73825),
    r = i(97352),
    a = i(166403),
    o = i(636194),
    c = i(624456),
    d = i(652215);
i.d(
    e,
    {},
    {
        A: function (t) {
            let e = (0, n.bG)([a.A], () => a.A.getSubscriptions()),
                i = l.useMemo(() => {
                    if (null == e) return {};
                    let t = {};
                    for (let i of Object.values(e)) i.type === d.rzx.GUILD && (t[(0, c.M)(i)] = i);
                    return t;
                }, [e]),
                { activeSubscription: u, activeSubscriptionListing: m } = (0, n.cf)([o.A], () => {
                    let e,
                        l = null,
                        n = null != t ? o.A.getSubscriptionGroupListing(t) : null;
                    for (let t of n?.subscription_listings_ids ?? []) {
                        let n = o.A.getSubscriptionListing(t),
                            s = n?.subscription_plans[0].id;
                        if (null == s) continue;
                        let r = i[s];
                        if (null != r) {
                            ((l = r), (e = n));
                            break;
                        }
                    }
                    return { activeSubscription: l, activeSubscriptionListing: e };
                }),
                h = m?.subscription_plans[0],
                x = h?.id,
                g = h?.sku_id,
                f = (0, n.bG)([r.A], () => (null != x ? r.A.get(x) : null)),
                v = m?.soft_deleted;
            return (
                l.useEffect(() => {
                    null != f || null == g || r.A.isFetchingForSKU(g) || (0, s.ur)(g, void 0, void 0, v);
                }, [f, g, v]),
                { activeSubscription: u, activeSubscriptionListing: m, activeSubscriptionPlanFromStore: f }
            );
        },
    },
);
