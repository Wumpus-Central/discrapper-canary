n.d(t, { Q: () => d }), n(896048), n(321073), n(667532);
var i = n(64700),
    r = n(168186),
    l = n(808728),
    a = n(576705),
    s = n(633334),
    o = n(652215),
    c = n(985018);
function d(e) {
    let t = i.useMemo(() => {
            let t = l.Ay.getChannels(e),
                n = [...t[l.I6]];
            n.push(...t[l.vM].filter((e) => e.channel.isGuildVocal()));
            let i = n.map((e) => ({
                id: e.channel.id,
                name: e.channel.name,
                canManage: a.A.can(o.xBc.MANAGE_ROLES, e.channel),
            }));
            return (
                i.unshift({
                    id: (0, r.Ap)(e),
                    name: c.intl.string(c.t["7YqSGx"]),
                    canManage: !0,
                }),
                i
            );
        }, [e]),
        [n, d] = i.useState(""),
        b = i.useMemo(() => {
            var e;
            let i = (e = n).startsWith("#") ? e.substr(1) : e;
            return (0, s.I)(t, u, i);
        }, [t, n]);
    return {
        query: n,
        results: b,
        setQuery: d,
        unfilteredCount: t.length,
    };
}
function u(e) {
    return {
        id: e.id,
        names: [e.name],
    };
}
