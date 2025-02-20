n.d(t, { Z: () => u }), n(47120), n(653041);
var i = n(192379),
    r = n(442837),
    l = n(115130),
    o = n(694312),
    c = n(405625),
    a = n(664097);
function u(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: u } = (0, r.cj)([l.Z], () => ({ filter: l.Z.getFilter() })),
        d = (0, o.E)(t),
        p = (0, c.Z)(d),
        s = (0, a.o)();
    return i.useMemo(() => {
        function e(e) {
            return !!(!n || '' === u || e.application.name.toLowerCase().includes(u.toLowerCase()));
        }
        let t = [...s].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let n of p) !i.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [s, n, u, p]);
}
