n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(571457),
    s = n(823379),
    o = n(275131),
    c = n(356164),
    u = n(726115),
    d = n(962486),
    p = n(149788),
    f = n(128449);
function g(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: a } = e,
        s = (0, l.e7)([c.Z], () => {
            var e;
            return null != (e = c.Z.getGuildIds({ categoryId: f.Hk })) ? e : f.q5;
        }),
        u = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getIsFetching({ categoryId: f.Hk })) || e;
        });
    return (
        i.useEffect(() => {
            o.Z.fetchFeaturedGuilds();
        }, []),
        (0, r.jsx)(d.Z, {
            tab: f.vf.FEATURED,
            guildIds: s,
            loading: u,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: a,
        })
    );
}
function h(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: a, onGuildCardClick: s } = e,
        p = (0, u.lg)(t),
        g = (0, l.e7)([c.Z], () => {
            var e;
            return null != (e = c.Z.getGuildIds({ categoryId: p })) ? e : f.q5;
        }),
        h = (0, l.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getIsFetching({ categoryId: p })) || e;
        });
    return (
        i.useEffect(() => {
            o.Z.fetchCategoryFeaturedGuilds({ categoryId: p });
        }, [p]),
        (0, r.jsx)(d.Z, {
            tab: t,
            guildIds: g,
            loading: h,
            onScroll: n,
            onGuildCardSeen: a,
            onGuildCardClick: s,
        })
    );
}
function m(e) {
    let { selectedTab: t, onScroll: n, onGuildCardSeen: l, onGuildCardClick: o } = e;
    switch (
        (i.useEffect(() => {
            let e = (0, u.lg)(t);
            (0, a.kR)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case f.vf.FEATURED:
            return (0, r.jsx)(g, {
                tab: t,
                onScroll: n,
                onGuildCardClick: o,
                onGuildCardSeen: l,
            });
        case f.vf.GAMING:
        case f.vf.MUSIC:
        case f.vf.ENTERTAINMENT:
        case f.vf.TECH:
        case f.vf.EDUCATION:
            return (0, r.jsx)(
                h,
                {
                    tab: t,
                    onScroll: n,
                    onGuildCardClick: o,
                    onGuildCardSeen: l,
                },
                t,
            );
        case f.vf.HUBS:
            return (0, r.jsx)(p.Z, { onScroll: n });
        default:
            (0, s.vE)(t);
    }
}
