n.d(t, { _: () => d });
var i = n(64700),
    l = n(485845),
    s = n(311907),
    a = n(155718),
    r = n(633334),
    o = n(803378);
function d() {
    let e = (0, s.cf)([o.A], () => Object.values(o.A.getCommands() ?? {})),
        [t, n] = i.useState(""),
        d = i.useMemo(
            () =>
                e.filter(
                    (e) =>
                        (null == e.integration_types || e.integration_types.includes(l.b.GUILD_INSTALL)) &&
                        (null == e.contexts || e.contexts?.includes(a.OL.GUILD)),
                ),
            [e],
        ),
        u = i.useMemo(
            () =>
                [...d].sort((e, t) => {
                    let n = a.kc.CHAT + 1,
                        i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                    return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                }),
            [d],
        ),
        m = i.useMemo(() => (t.startsWith("/") ? u.filter((e) => e.type === a.kc.CHAT) : u), [t, u]),
        g = i.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
    return { query: t, results: i.useMemo(() => (0, r.I)(m, c, g), [m, g]), setQuery: n, unfilteredCount: e.length };
}
function c(e) {
    return { id: e.id, names: [e.displayName] };
}
