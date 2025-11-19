n.d(t, { Z: () => f }), n(388685);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(911969),
    s = n(254711),
    l = n(213459),
    c = n(10718),
    u = n(148958),
    d = n(689079);
function f(e) {
    var t;
    let { context: n } = e,
        i = "channel" === n.type ? n.channel : void 0,
        f = (0, l.LD)(null == i ? void 0 : i.guild_id, !0),
        { commandsByActiveSection: _, loading: p } = c.wi({
            context: n,
            filters: {
                commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT],
            },
            options: {
                placeholderCount: 0,
                limit: d.tn,
                includeFrecency: !0,
            },
            allowFetch: !0,
        }),
        h = r.useMemo(
            () =>
                _.reduce((e, t) => {
                    let { section: n, data: r } = t;
                    return r.length > 0 && e.add(n.id), e;
                }, new Set()),
            [_],
        ),
        m = r.useMemo(() => {
            var e, t;
            return Object.values(null != (t = null == (e = f.result) ? void 0 : e.sections) ? t : {})
                .map((e) => {
                    let { descriptor: t } = e;
                    return t;
                })
                .filter((e) => !(e.id in s.Tm) && h.has(e.id));
        }, [null == (t = f.result) ? void 0 : t.sections, h]),
        g = (0, u.h)(m);
    return {
        appsInThisServer: r.useMemo(
            () =>
                a()
                    .compact(
                        g.map((e) => {
                            let { application: t } = e;
                            return t;
                        }),
                    )
                    .map((e) => ({ application: e })),
            [g],
        ),
        isLoading: f.fetchState.fetching || p,
    };
}
