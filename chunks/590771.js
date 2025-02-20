n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(571457),
    a = n(823379),
    s = n(275131),
    c = n(356164),
    u = n(726115),
    d = n(962486),
    p = n(149788),
    h = n(128449);
function g(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: o } = e,
        a = (0, l.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: h.Hk })) && void 0 !== e ? e : h.q5;
        }),
        u = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: h.Hk })) || void 0 === e || e;
        });
    return (
        i.useEffect(() => {
            s.Z.fetchFeaturedGuilds();
        }, []),
        (0, r.jsx)(d.Z, {
            tab: h.vf.FEATURED,
            guildIds: a,
            loading: u,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: o
        })
    );
}
function f(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: o, onGuildCardClick: a } = e,
        p = (0, u.lg)(t),
        g = (0, l.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: p })) && void 0 !== e ? e : h.q5;
        }),
        f = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: p })) || void 0 === e || e;
        });
    return (
        i.useEffect(() => {
            s.Z.fetchCategoryFeaturedGuilds({ categoryId: p });
        }, [p]),
        (0, r.jsx)(d.Z, {
            tab: t,
            guildIds: g,
            loading: f,
            onScroll: n,
            onGuildCardSeen: o,
            onGuildCardClick: a
        })
    );
}
function m(e) {
    let { selectedTab: t, onScroll: n, onGuildCardSeen: l, onGuildCardClick: s } = e;
    switch (
        (i.useEffect(() => {
            let e = (0, u.lg)(t);
            (0, o.kR)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case h.vf.FEATURED:
            return (0, r.jsx)(g, {
                tab: t,
                onScroll: n,
                onGuildCardClick: s,
                onGuildCardSeen: l
            });
        case h.vf.GAMING:
        case h.vf.MUSIC:
        case h.vf.ENTERTAINMENT:
        case h.vf.TECH:
        case h.vf.EDUCATION:
            return (0, r.jsx)(
                f,
                {
                    tab: t,
                    onScroll: n,
                    onGuildCardClick: s,
                    onGuildCardSeen: l
                },
                t
            );
        case h.vf.HUBS:
            return (0, r.jsx)(p.Z, { onScroll: n });
        default:
            (0, a.vE)(t);
    }
}
