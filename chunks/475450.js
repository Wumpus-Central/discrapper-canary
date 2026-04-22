n.d(t, { A: () => c, l: () => u });
var r = n(64700),
    l = n(311907),
    i = n(99753),
    a = n(609190),
    s = n(630390),
    o = n(948443);
function u(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function c(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: c, filters: d } = (0, l.cf)([i.A], () => ({ feed: i.A.getFeed(t), filters: i.A.getFilters() })),
        _ = r.useMemo(() => {
            let e = n ? c?.unranked_game_entries.map((e) => e.content) : c?.entries.map((e) => e.content);
            return null != d ? e?.filter((e) => u(d, e)) : e;
        }, [c, d, n]);
    return (_ = (0, a.A)(_)), (_ = (0, s.A)(_)), (_ = (0, o.A)(_));
}
