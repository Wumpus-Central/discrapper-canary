n.d(t, { Z: () => p }), n(388685);
var l = n(73800),
    i = n(392711),
    r = n.n(i),
    a = n(911969),
    o = n(254711),
    s = n(213459),
    c = n(10718),
    u = n(148958),
    d = n(689079);
function p(e) {
    var t;
    let { context: n } = e,
        i = 'channel' === n.type ? n.channel : void 0,
        p = (0, s.LD)(null == i ? void 0 : i.guild_id, !0),
        { commandsByActiveSection: m, loading: f } = c.wi({
            context: n,
            filters: {
                commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: d.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        h = l.useMemo(
            () =>
                m.reduce((e, t) => {
                    let { section: n, data: l } = t;
                    return l.length > 0 && e.add(n.id), e;
                }, new Set()),
            [m]
        ),
        v = l.useMemo(() => {
            var e, t;
            return Object.values(null != (t = null == (e = p.result) ? void 0 : e.sections) ? t : {})
                .map((e) => {
                    let { descriptor: t } = e;
                    return t;
                })
                .filter((e) => !(e.id in o.Tm) && h.has(e.id));
        }, [null == (t = p.result) ? void 0 : t.sections, h]),
        y = (0, u.h)(v);
    return {
        appsInThisServer: l.useMemo(
            () =>
                r()
                    .compact(
                        y.map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    )
                    .map((e) => ({ application: e })),
            [y]
        ),
        isLoading: p.fetchState.fetching || f
    };
}
