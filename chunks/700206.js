n.d(t, { A: () => d }), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(73825),
    s = n(97352),
    o = n(166403),
    l = n(636194),
    c = n(624456),
    u = n(652215);
function d(e) {
    let t = (0, i.bG)([o.A], () => o.A.getSubscriptions()),
        n = r.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === u.rzx.GUILD && (e[(0, c.M)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: d, activeSubscriptionListing: f } = (0, i.cf)([l.A], () => {
            var t;
            let r,
                i = null,
                a = null != e ? l.A.getSubscriptionGroupListing(e) : null;
            for (let e of null != (t = null == a ? void 0 : a.subscription_listings_ids) ? t : []) {
                let t = l.A.getSubscriptionListing(e),
                    a = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == a) continue;
                let s = n[a];
                if (null != s) {
                    (i = s), (r = t);
                    break;
                }
            }
            return {
                activeSubscription: i,
                activeSubscriptionListing: r,
            };
        }),
        p = null == f ? void 0 : f.subscription_plans[0],
        _ = null == p ? void 0 : p.id,
        h = null == p ? void 0 : p.sku_id,
        m = (0, i.bG)([s.A], () => (null != _ ? s.A.get(_) : null)),
        g = null == f ? void 0 : f.soft_deleted;
    return (
        r.useEffect(() => {
            null != m || null == h || s.A.isFetchingForSKU(h) || (0, a.ur)(h, void 0, void 0, g);
        }, [m, h, g]),
        {
            activeSubscription: d,
            activeSubscriptionListing: f,
            activeSubscriptionPlanFromStore: m,
        }
    );
}
