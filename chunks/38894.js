a.d(t, { A: () => m });
var s = a(627968),
    l = a(64700),
    r = a(311907),
    i = a(533129),
    n = a(403362),
    c = a(670412),
    o = a(351022),
    d = a(965660),
    u = a(161089),
    h = a(166641),
    g = a(324580);
function A(e) {
    let { onScroll: t, onGuildCardSeen: a, onGuildCardClick: i } = e,
        n = (0, r.bG)([o.A], () => o.A.getGuildIds({ categoryId: g.Iq }) ?? g.VX),
        d = (0, r.bG)([o.A], () => o.A.getIsFetching({ categoryId: g.Iq }) ?? !0);
    return (
        l.useEffect(() => {
            c.A.fetchFeaturedGuilds();
        }, []),
        (0, s.jsx)(u.A, {
            tab: g.o.FEATURED,
            guildIds: n,
            loading: d,
            onScroll: t,
            onGuildCardSeen: a,
            onGuildCardClick: i,
        })
    );
}
function _(e) {
    let { tab: t, onScroll: a, onGuildCardSeen: i, onGuildCardClick: n } = e,
        h = (0, d.Ub)(t),
        A = (0, r.bG)([o.A], () => o.A.getGuildIds({ categoryId: h }) ?? g.VX),
        _ = (0, r.bG)([o.A], () => o.A.getIsFetching({ categoryId: h }) ?? !0);
    return (
        l.useEffect(() => {
            c.A.fetchCategoryFeaturedGuilds({ categoryId: h });
        }, [h]),
        (0, s.jsx)(u.A, { tab: t, guildIds: A, loading: _, onScroll: a, onGuildCardSeen: i, onGuildCardClick: n })
    );
}
function m(e) {
    let { selectedTab: t, onScroll: a, onGuildCardSeen: r, onGuildCardClick: c } = e;
    switch (
        (l.useEffect(() => {
            let e = (0, d.Ub)(t);
            (0, i.np)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case g.o.FEATURED:
            return (0, s.jsx)(A, { tab: t, onScroll: a, onGuildCardClick: c, onGuildCardSeen: r });
        case g.o.GAMING:
        case g.o.MUSIC:
        case g.o.ENTERTAINMENT:
        case g.o.TECH:
        case g.o.EDUCATION:
            return (0, s.jsx)(_, { tab: t, onScroll: a, onGuildCardClick: c, onGuildCardSeen: r }, t);
        case g.o.HUBS:
            return (0, s.jsx)(h.A, { onScroll: a });
        default:
            (0, n.xb)(t);
    }
}
