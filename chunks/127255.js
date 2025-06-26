n.d(t, { Z: () => s }), n(388685), n(539854);
var i = n(73800),
    l = n(442837),
    r = n(115130),
    o = n(694312),
    a = n(405625),
    c = n(664097);
function s(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: s } = (0, l.cj)([r.Z], () => ({ filter: r.Z.getFilter() })),
        u = (0, o.E)(t),
        d = (0, a.Z)(u),
        p = (0, c.o)();
    return i.useMemo(() => {
        function e(e) {
            return !!(!n || '' === s || e.application.name.toLowerCase().includes(s.toLowerCase()));
        }
        let t = [...p].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let n of d) !i.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [p, n, s, d]);
}
