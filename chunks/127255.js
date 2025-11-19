n.d(t, { Z: () => c }), n(388685), n(539854);
var r = n(473749),
    i = n(442837),
    a = n(115130),
    o = n(694312),
    s = n(405625),
    l = n(664097);
function c(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: c } = (0, i.cj)([a.Z], () => ({ filter: a.Z.getFilter() })),
        u = (0, o.E)(t),
        d = (0, s.Z)(u),
        f = (0, l.o)();
    return r.useMemo(() => {
        function e(e) {
            return !!(!n || "" === c || e.application.name.toLowerCase().includes(c.toLowerCase()));
        }
        let t = [...f].filter(e),
            r = new Set(t.map((e) => e.application.id));
        for (let n of d) !r.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [f, n, c, d]);
}
