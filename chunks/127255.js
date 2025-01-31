i.d(t, { Z: () => u }), i(47120), i(653041);
var l = i(192379),
    n = i(442837),
    a = i(115130),
    r = i(694312),
    d = i(405625),
    o = i(664097);
function u(e) {
    let { guildId: t, enableFilter: i = !1 } = e,
        { filter: u } = (0, n.cj)([a.Z], () => ({ filter: a.Z.getFilter() })),
        c = (0, r.E)(t),
        s = (0, d.Z)(c),
        p = (0, o.o)();
    return l.useMemo(() => {
        function e(e) {
            return !!(!i || '' === u || e.application.name.toLowerCase().includes(u.toLowerCase()));
        }
        let t = [...p].filter(e),
            l = new Set(t.map((e) => e.application.id));
        for (let i of s) !l.has(i.application.id) && e(i) && t.push(i);
        return t;
    }, [p, i, u, s]);
}
