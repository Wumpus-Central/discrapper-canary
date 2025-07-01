(n.d(t, { Z: () => c }), n(388685), n(539854));
var l = n(73800),
    i = n(442837),
    r = n(115130),
    a = n(694312),
    o = n(405625),
    s = n(664097);
function c(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: c } = (0, i.cj)([r.Z], () => ({ filter: r.Z.getFilter() })),
        u = (0, a.E)(t),
        d = (0, o.Z)(u),
        p = (0, s.o)();
    return l.useMemo(() => {
        function e(e) {
            return !!(!n || '' === c || e.application.name.toLowerCase().includes(c.toLowerCase()));
        }
        let t = [...p].filter(e),
            l = new Set(t.map((e) => e.application.id));
        for (let n of d) !l.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [p, n, c, d]);
}
