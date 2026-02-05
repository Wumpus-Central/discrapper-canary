"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(155718),
    o = n(827785),
    l = n(264322),
    u = n(842209),
    c = n(768879),
    d = n(73510);
function _(e) {
    let { context: t } = e,
        n = "channel" === t.type ? t.channel : void 0,
        i = (0, l.ON)(n?.guild_id, !0),
        { commandsByActiveSection: _, loading: f } = u.cu({
            context: t,
            filters: { commandTypes: [s.kc.CHAT, s.kc.PRIMARY_ENTRY_POINT] },
            options: { placeholderCount: 0, limit: d.Hi, includeFrecency: !0 },
            allowFetch: !0,
        }),
        p = r.useMemo(
            () =>
                _.reduce((e, t) => {
                    let { section: n, data: r } = t;
                    return r.length > 0 && e.add(n.id), e;
                }, new Set()),
            [_],
        ),
        h = r.useMemo(
            () =>
                Object.values(i.result?.sections ?? {})
                    .map((e) => {
                        let { descriptor: t } = e;
                        return t;
                    })
                    .filter((e) => !(e.id in o.gZ) && p.has(e.id)),
            [i.result?.sections, p],
        ),
        m = (0, c.I)(h);
    return {
        appsInThisServer: r.useMemo(
            () =>
                a()
                    .compact(
                        m.map((e) => {
                            let { application: t } = e;
                            return t;
                        }),
                    )
                    .map((e) => ({ application: e })),
            [m],
        ),
        isLoading: i.fetchState.fetching || f,
    };
}
