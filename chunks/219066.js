t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(724458),
    t(47120);
var i = t(192379),
    l = t(392711),
    o = t.n(l),
    a = t(911969),
    r = t(254711),
    s = t(213459),
    c = t(10718),
    d = t(148958),
    u = t(689079);
function m(e) {
    var n;
    let { context: t } = e,
        l = 'channel' === t.type ? t.channel : void 0,
        m = (0, s.LD)(null == l ? void 0 : l.guild_id, !0),
        { commandsByActiveSection: p, loading: h } = c.wi({
            context: t,
            filters: {
                commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: u.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        f = i.useMemo(
            () =>
                p.reduce((e, n) => {
                    let { section: t, data: i } = n;
                    return i.length > 0 && e.add(t.id), e;
                }, new Set()),
            [p]
        ),
        C = i.useMemo(() => {
            var e, n;
            return Object.values(null !== (n = null === (e = m.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {})
                .map((e) => {
                    let { descriptor: n } = e;
                    return n;
                })
                .filter((e) => !(e.id in r.Tm) && f.has(e.id));
        }, [null === (n = m.result) || void 0 === n ? void 0 : n.sections, f]),
        v = (0, d.h)(C),
        x = i.useMemo(
            () =>
                o()
                    .compact(
                        v.map((e) => {
                            let { application: n } = e;
                            return n;
                        })
                    )
                    .map((e) => ({ application: e })),
            [v]
        );
    return {
        appsInThisServer: x,
        isLoading: m.fetchState.fetching || h.current
    };
}
