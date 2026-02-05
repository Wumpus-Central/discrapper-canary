n.d(t, { A: () => m });
var i = n(64700),
    l = n(540185),
    a = n(417597),
    r = n(395332),
    s = n(287809),
    o = n(403362),
    d = n(633075),
    c = n(289173),
    u = n(667049),
    g = n(229231);
function m(e) {
    let t = (0, a.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, u.A)(t?.id),
        m = (0, r.DB)(e);
    return i.useMemo(() => {
        let e = new Set(n.filter((e) => e instanceof d.R).map((e) => e.applicationId)),
            t = new Set(n.map((e) => e.type));
        return g.Zc.flatMap((n) =>
            n === l.x.APPLICATION
                ? null == m
                    ? []
                    : m.filter((t) => !e.has(t.applicationId)).map((e) => new d.R({ applicationId: e.applicationId }))
                : (0, c.hL)(n)
                  ? t.has(n)
                      ? []
                      : new c.Yy({ type: n, games: [] })
                  : void (0, o.xb)(n),
        );
    }, [m, n]);
}
