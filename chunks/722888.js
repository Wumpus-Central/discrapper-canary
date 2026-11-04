var i = n(582128),
    l = n(855986),
    s = n(599941),
    r = n(58503),
    a = n(697627);
n.d(
    t,
    {},
    {
        G: function (e) {
            let { fetchSubscriptionsSettings: t, loading: n, error: l } = (0, s.XE)();
            i.useEffect(() => {
                t(e);
            }, [t, e]);
            let r = (0, s.Tq)(e);
            return { loaded: null != r && !n, subscriptionsSettings: r, loading: n, error: l };
        },
        _: function (e, t) {
            let n = (0, l.bG)([a.A], () => a.A.getPriceTiersForGuildAndType(e, t)),
                s = (0, l.bG)([a.A], () => a.A.getPriceTiersFetchStateForGuildAndType(e, t));
            return (
                i.useEffect(() => {
                    s === a.e.NOT_FETCHED && (0, r.F)(e, t);
                }, [e, s, t]),
                { loading: s === a.e.FETCHING, priceTiers: n }
            );
        },
    },
);
