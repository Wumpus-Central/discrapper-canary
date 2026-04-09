n.d(t, { Q: () => g }), n(321073), n(667532);
var i = n(64700),
    l = n(168186),
    s = n(47167),
    a = n(808728),
    r = n(576705),
    o = n(994500),
    d = n(287809),
    c = n(633334),
    u = n(652215),
    m = n(985018);
function g(e) {
    let t = i.useMemo(() => {
            let t = a.Ay.getChannels(e),
                n = [...t[a.I6]];
            n.push(...t[a.vM].filter((e) => e.channel.isGuildVocal()));
            let i = n.map((e) => ({
                id: e.channel.id,
                name: (0, s.m1)(e.channel, d.default, o.A),
                canManage: r.A.can(u.xBc.MANAGE_ROLES, e.channel),
            }));
            return i.unshift({ id: (0, l.Ap)(e), name: m.intl.string(m.t["7YqSGx"]), canManage: !0 }), i;
        }, [e]),
        [n, g] = i.useState(""),
        h = i.useMemo(() => {
            var e;
            let i = (e = n).startsWith("#") ? e.substr(1) : e;
            return (0, c.I)(t, x, i);
        }, [t, n]);
    return { query: n, results: h, setQuery: g, unfilteredCount: t.length };
}
function x(e) {
    return { id: e.id, names: [e.name] };
}
