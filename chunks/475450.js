n.d(t, {
    A: () => u,
    l: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(99753),
    s = n(609190),
    o = n(630390),
    l = n(948443);

function c(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}

function u(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: u, filters: d } = (0, i.cf)([a.A], () => ({
            feed: a.A.getFeed(t),
            filters: a.A.getFilters(),
        })),
        f = r.useMemo(() => {
            let e = n
                ? null == u
                    ? void 0
                    : u.unranked_game_entries.map((e) => e.content)
                : null == u
                  ? void 0
                  : u.entries.map((e) => e.content);
            return null != d ? (null == e ? void 0 : e.filter((e) => c(d, e))) : e;
        }, [u, d, n]);
    return (f = (0, s.A)(f)), (f = (0, o.A)(f)), (f = (0, l.A)(f));
}
