n.d(t, { Z: () => m }), n(47120);
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    o = n(911969),
    a = n(254711),
    s = n(213459),
    c = n(10718),
    u = n(148958),
    d = n(689079);
function m(e) {
    var t;
    let { context: n } = e,
        l = 'channel' === n.type ? n.channel : void 0,
        m = (0, s.LD)(null == l ? void 0 : l.guild_id, !0),
        { commandsByActiveSection: p, loading: h } = c.wi({
            context: n,
            filters: {
                commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: d.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        f = i.useMemo(
            () =>
                p.reduce((e, t) => {
                    let { section: n, data: i } = t;
                    return i.length > 0 && e.add(n.id), e;
                }, new Set()),
            [p]
        ),
        v = i.useMemo(() => {
            var e, t;
            return Object.values(null !== (t = null === (e = m.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {})
                .map((e) => {
                    let { descriptor: t } = e;
                    return t;
                })
                .filter((e) => !(e.id in a.Tm) && f.has(e.id));
        }, [null === (t = m.result) || void 0 === t ? void 0 : t.sections, f]),
        N = (0, u.h)(v);
    return {
        appsInThisServer: i.useMemo(
            () =>
                r()
                    .compact(
                        N.map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    )
                    .map((e) => ({ application: e })),
            [N]
        ),
        isLoading: m.fetchState.fetching || h
    };
}
