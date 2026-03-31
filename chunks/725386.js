n.d(t, { A: () => m });
var i = n(64700),
    a = n(540185),
    l = n(417597),
    s = n(395332),
    r = n(287809),
    o = n(403362),
    d = n(633075),
    c = n(289173),
    u = n(667049),
    g = n(229231);
function m(e) {
    let t = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, u.A)(t?.id),
        m = (0, s.DB)(e);
    return i.useMemo(() => {
        let e = new Set(n.filter((e) => e instanceof d.R).map((e) => e.applicationId)),
            t = new Set(n.map((e) => e.type));
        return g.Zc.flatMap((n) =>
            n === a.x.APPLICATION
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
