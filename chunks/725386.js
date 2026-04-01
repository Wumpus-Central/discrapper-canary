n.d(t, { A: () => f });
var i = n(64700),
    l = n(540185),
    a = n(417597),
    s = n(382483),
    r = n(385113),
    o = n(369374),
    c = n(395332),
    d = n(287809),
    u = n(403362),
    g = n(633075),
    m = n(289173),
    x = n(667049),
    p = n(229231);
function f(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        n = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        f = (0, x.A)(n?.id),
        h = (0, c.w$)(e),
        _ = (0, a.bG)([r.A], () => r.A.getAllConfigsByApplication());
    return (
        i.useEffect(() => {
            t && (0, s.W)();
        }, [t]),
        i.useMemo(() => {
            let e = new Set(f.filter((e) => e instanceof g.R).map((e) => e.applicationId)),
                n = new Set(f.map((e) => e.type));
            return p.Zc.flatMap((i) =>
                i === l.x.APPLICATION
                    ? t
                        ? Object.values(_)
                              .map((e) => e[0])
                              .filter(u.Vq)
                              .filter((t) => !e.has(t.application_id))
                              .map((e) => new g.R({ applicationId: e.application_id }))
                        : null == h
                          ? []
                          : h
                                .filter((t) => !e.has(t.applicationId))
                                .map((e) => new g.R({ applicationId: e.applicationId }))
                    : (0, m.hL)(i)
                      ? n.has(i)
                          ? []
                          : new m.Yy({ type: i, games: [] })
                      : void (0, u.xb)(i),
            );
        }, [t, _, h, f])
    );
}
