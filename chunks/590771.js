n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(571457),
    s = n(823379),
    o = n(275131),
    c = n(356164),
    d = n(726115),
    u = n(962486),
    h = n(149788),
    m = n(128449);
function p(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: a } = e,
        s = (0, l.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: m.Hk })) && void 0 !== e ? e : m.q5;
        }),
        d = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: m.Hk })) || void 0 === e || e;
        });
    return (
        r.useEffect(() => {
            o.Z.fetchFeaturedGuilds();
        }, []),
        (0, i.jsx)(u.Z, {
            tab: m.vf.FEATURED,
            guildIds: s,
            loading: d,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: a
        })
    );
}
function g(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: a, onGuildCardClick: s } = e,
        h = (0, d.lg)(t),
        p = (0, l.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: h })) && void 0 !== e ? e : m.q5;
        }),
        g = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: h })) || void 0 === e || e;
        });
    return (
        r.useEffect(() => {
            o.Z.fetchCategoryFeaturedGuilds({ categoryId: h });
        }, [h]),
        (0, i.jsx)(u.Z, {
            tab: t,
            guildIds: p,
            loading: g,
            onScroll: n,
            onGuildCardSeen: a,
            onGuildCardClick: s
        })
    );
}
function f(e) {
    let { selectedTab: t, onScroll: n, onGuildCardSeen: l, onGuildCardClick: o } = e;
    switch (
        (r.useEffect(() => {
            let e = (0, d.lg)(t);
            (0, a.kR)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case m.vf.FEATURED:
            return (0, i.jsx)(p, {
                tab: t,
                onScroll: n,
                onGuildCardClick: o,
                onGuildCardSeen: l
            });
        case m.vf.GAMING:
        case m.vf.MUSIC:
        case m.vf.ENTERTAINMENT:
        case m.vf.TECH:
        case m.vf.EDUCATION:
            return (0, i.jsx)(
                g,
                {
                    tab: t,
                    onScroll: n,
                    onGuildCardClick: o,
                    onGuildCardSeen: l
                },
                t
            );
        case m.vf.HUBS:
            return (0, i.jsx)(h.Z, { onScroll: n });
        default:
            (0, s.vE)(t);
    }
}
