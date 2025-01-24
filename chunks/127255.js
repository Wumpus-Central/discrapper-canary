n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(442837),
    r = n(115130),
    o = n(694312),
    a = n(405625),
    u = n(664097);
function c(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: c } = (0, l.cj)([r.Z], () => ({ filter: r.Z.getFilter() })),
        d = (0, o.E)(t),
        f = (0, a.Z)(d),
        s = (0, u.o)();
    return i.useMemo(() => {
        function e(e) {
            return !!(!n || '' === c || e.application.name.toLowerCase().includes(c.toLowerCase())) || !1;
        }
        let t = [...s].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let n of f) !i.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [s, n, c, f]);
}
