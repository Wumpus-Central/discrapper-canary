n.d(t, { Z: () => c }), n(388685), n(539854);
var i = n(73800),
    r = n(442837),
    l = n(115130),
    o = n(694312),
    a = n(405625),
    s = n(664097);
function c(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: c } = (0, r.cj)([l.Z], () => ({ filter: l.Z.getFilter() })),
        u = (0, o.E)(t),
        d = (0, a.Z)(u),
        p = (0, s.o)();
    return i.useMemo(() => {
        function e(e) {
            return !!(!n || '' === c || e.application.name.toLowerCase().includes(c.toLowerCase()));
        }
        let t = [...p].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let n of d) !i.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [p, n, c, d]);
}
