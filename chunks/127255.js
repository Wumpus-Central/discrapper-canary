n.d(t, { Z: () => c }), n(388685), n(539854);
var i = n(192379),
    r = n(442837),
    l = n(115130),
    a = n(694312),
    o = n(405625),
    s = n(664097);
function c(e) {
    let { guildId: t, enableFilter: n = !1, context: c } = e,
        { filter: u } = (0, r.cj)([l.Z], () => ({ filter: l.Z.getFilter() })),
        d = (0, a.E)(t, c),
        p = (0, o.Z)(d),
        m = (0, s.o)();
    return i.useMemo(() => {
        function e(e) {
            return !!(!n || '' === u || e.application.name.toLowerCase().includes(u.toLowerCase()));
        }
        let t = [...m].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let n of p) !i.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [m, n, u, p]);
}
