n.d(t, { A: () => m });
var l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(155718),
    r = n(827785),
    o = n(264322),
    c = n(842209),
    d = n(768879),
    u = n(73510);
function m(e) {
    let { context: t } = e,
        n = "channel" === t.type ? t.channel : void 0,
        i = (0, o.ON)(n?.guild_id, !0),
        { commandsByActiveSection: m, loading: p } = c.cu({
            context: t,
            filters: { commandTypes: [s.kc.CHAT, s.kc.PRIMARY_ENTRY_POINT] },
            options: { placeholderCount: 0, limit: u.Hi, includeFrecency: !0 },
            allowFetch: !0,
        }),
        _ = l.useMemo(
            () =>
                m.reduce((e, t) => {
                    let { section: n, data: l } = t;
                    return l.length > 0 && e.add(n.id), e;
                }, new Set()),
            [m],
        ),
        A = l.useMemo(
            () =>
                Object.values(i.result?.sections ?? {})
                    .map((e) => {
                        let { descriptor: t } = e;
                        return t;
                    })
                    .filter((e) => !(e.id in r.gZ) && _.has(e.id)),
            [i.result?.sections, _],
        ),
        h = (0, d.I)(A);
    return {
        appsInThisServer: l.useMemo(
            () =>
                a()
                    .compact(
                        h.map((e) => {
                            let { application: t } = e;
                            return t;
                        }),
                    )
                    .map((e) => ({ application: e })),
            [h],
        ),
        isLoading: i.fetchState.fetching || p,
    };
}
