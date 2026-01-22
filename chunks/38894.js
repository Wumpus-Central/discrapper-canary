n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(533129),
    s = n(403362),
    o = n(670412),
    c = n(351022),
    u = n(965660),
    d = n(383470),
    p = n(166641),
    f = n(324580);

function h(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: a } = e,
        s = (0, l.bG)([c.A], () => {
            var e;
            return null !=
                (e = c.A.getGuildIds({
                    categoryId: f.Iq,
                }))
                ? e
                : f.VX;
        }),
        u = (0, l.bG)([c.A], () => {
            var e;
            return (
                null ==
                    (e = c.A.getIsFetching({
                        categoryId: f.Iq,
                    })) || e
            );
        });
    return (
        i.useEffect(() => {
            o.A.fetchFeaturedGuilds();
        }, []),
        (0, r.jsx)(d.A, {
            tab: f.o.FEATURED,
            guildIds: s,
            loading: u,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: a,
        })
    );
}

function A(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: a, onGuildCardClick: s } = e,
        p = (0, u.Ub)(t),
        h = (0, l.bG)([c.A], () => {
            var e;
            return null !=
                (e = c.A.getGuildIds({
                    categoryId: p,
                }))
                ? e
                : f.VX;
        }),
        A = (0, l.bG)([c.A], () => {
            var e;
            return (
                null ==
                    (e = c.A.getIsFetching({
                        categoryId: p,
                    })) || e
            );
        });
    return (
        i.useEffect(() => {
            o.A.fetchCategoryFeaturedGuilds({
                categoryId: p,
            });
        }, [p]),
        (0, r.jsx)(d.A, {
            tab: t,
            guildIds: h,
            loading: A,
            onScroll: n,
            onGuildCardSeen: a,
            onGuildCardClick: s,
        })
    );
}

function g(e) {
    let { selectedTab: t, onScroll: n, onGuildCardSeen: l, onGuildCardClick: o } = e;
    switch (
        (i.useEffect(() => {
            let e = (0, u.Ub)(t);
            (0, a.np)({
                selectedCategoryId: e,
            });
        }, [t]),
        t)
    ) {
        case f.o.FEATURED:
            return (0, r.jsx)(h, {
                tab: t,
                onScroll: n,
                onGuildCardClick: o,
                onGuildCardSeen: l,
            });
        case f.o.GAMING:
        case f.o.MUSIC:
        case f.o.ENTERTAINMENT:
        case f.o.TECH:
        case f.o.EDUCATION:
            return (0, r.jsx)(
                A,
                {
                    tab: t,
                    onScroll: n,
                    onGuildCardClick: o,
                    onGuildCardSeen: l,
                },
                t,
            );
        case f.o.HUBS:
            return (0, r.jsx)(p.A, {
                onScroll: n,
            });
        default:
            (0, s.xb)(t);
    }
}
