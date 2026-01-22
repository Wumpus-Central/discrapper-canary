n.d(t, {
    _: () => c,
}),
    n(896048),
    n(638769);
var i = n(64700),
    r = n(485845),
    l = n(311907),
    a = n(155718),
    s = n(633334),
    o = n(803378);

function c() {
    let e = (0, l.cf)([o.A], () => {
            var e;
            return Object.values(null != (e = o.A.getCommands()) ? e : {});
        }),
        [t, n] = i.useState(""),
        c = i.useMemo(
            () =>
                e.filter((e) => {
                    var t;
                    return (
                        (null == e.integration_types || e.integration_types.includes(r.b.GUILD_INSTALL)) &&
                        (null == e.contexts || (null == (t = e.contexts) ? void 0 : t.includes(a.OL.GUILD)))
                    );
                }),
            [e],
        ),
        u = i.useMemo(
            () =>
                [...c].sort((e, t) => {
                    let n = a.kc.CHAT + 1,
                        i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                    return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                }),
            [c],
        ),
        b = i.useMemo(() => (t.startsWith("/") ? u.filter((e) => e.type === a.kc.CHAT) : u), [t, u]),
        f = i.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
    return {
        query: t,
        results: i.useMemo(() => (0, s.I)(b, d, f), [b, f]),
        setQuery: n,
        unfilteredCount: e.length,
    };
}

function d(e) {
    return {
        id: e.id,
        names: [e.displayName],
    };
}
