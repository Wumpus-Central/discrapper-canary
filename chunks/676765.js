n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(155718),
    o = n(827785),
    l = n(264322),
    c = n(842209),
    u = n(768879),
    d = n(73510);

function f(e) {
    var t;
    let { context: n } = e,
        i = "channel" === n.type ? n.channel : void 0,
        f = (0, l.ON)(null == i ? void 0 : i.guild_id, !0),
        { commandsByActiveSection: p, loading: _ } = c.cu({
            context: n,
            filters: {
                commandTypes: [s.kc.CHAT, s.kc.PRIMARY_ENTRY_POINT],
            },
            options: {
                placeholderCount: 0,
                limit: d.Hi,
                includeFrecency: !0,
            },
            allowFetch: !0,
        }),
        h = r.useMemo(
            () =>
                p.reduce((e, t) => {
                    let { section: n, data: r } = t;
                    return r.length > 0 && e.add(n.id), e;
                }, new Set()),
            [p],
        ),
        m = r.useMemo(() => {
            var e, t;
            return Object.values(null != (e = null == (t = f.result) ? void 0 : t.sections) ? e : {})
                .map((e) => {
                    let { descriptor: t } = e;
                    return t;
                })
                .filter((e) => !(e.id in o.gZ) && h.has(e.id));
        }, [null == (t = f.result) ? void 0 : t.sections, h]),
        g = (0, u.I)(m);
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
                    .map((e) => ({
                        application: e,
                    })),
            [g],
        ),
        isLoading: f.fetchState.fetching || _,
    };
}
