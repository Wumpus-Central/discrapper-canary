n.d(t, { Z: () => m }), n(724458), n(47120);
var i = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(911969),
    s = n(254711),
    r = n(213459),
    c = n(10718),
    d = n(148958),
    u = n(689079);
function m(e) {
    var t;
    let { context: n } = e,
        l = 'channel' === n.type ? n.channel : void 0,
        m = (0, r.LD)(null == l ? void 0 : l.guild_id, !0),
        { commandsByActiveSection: p, loading: h } = c.wi({
            context: n,
            filters: {
                commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: u.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        v = i.useMemo(
            () =>
                p.reduce((e, t) => {
                    let { section: n, data: i } = t;
                    return i.length > 0 && e.add(n.id), e;
                }, new Set()),
            [p]
        ),
        x = i.useMemo(() => {
            var e, t;
            return Object.values(null !== (t = null === (e = m.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {})
                .map((e) => {
                    let { descriptor: t } = e;
                    return t;
                })
                .filter((e) => !(e.id in s.Tm) && v.has(e.id));
        }, [null === (t = m.result) || void 0 === t ? void 0 : t.sections, v]),
        f = (0, d.h)(x);
    return {
        appsInThisServer: i.useMemo(
            () =>
                a()
                    .compact(
                        f.map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    )
                    .map((e) => ({ application: e })),
            [f]
        ),
        isLoading: m.fetchState.fetching || h
    };
}
