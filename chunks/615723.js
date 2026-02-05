n.d(t, { Q: () => c }), n(321073), n(667532);
var i = n(64700),
    l = n(168186),
    s = n(808728),
    a = n(576705),
    r = n(633334),
    o = n(652215),
    d = n(985018);
function c(e) {
    let t = i.useMemo(() => {
            let t = s.Ay.getChannels(e),
                n = [...t[s.I6]];
            n.push(...t[s.vM].filter((e) => e.channel.isGuildVocal()));
            let i = n.map((e) => ({
                id: e.channel.id,
                name: e.channel.name,
                canManage: a.A.can(o.xBc.MANAGE_ROLES, e.channel),
            }));
            return i.unshift({ id: (0, l.Ap)(e), name: d.intl.string(d.t["7YqSGx"]), canManage: !0 }), i;
        }, [e]),
        [n, c] = i.useState(""),
        m = i.useMemo(() => {
            var e;
            let i = (e = n).startsWith("#") ? e.substr(1) : e;
            return (0, r.I)(t, u, i);
        }, [t, n]);
    return { query: n, results: m, setQuery: c, unfilteredCount: t.length };
}
function u(e) {
    return { id: e.id, names: [e.name] };
}
