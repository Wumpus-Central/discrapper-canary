n.d(t, { A: () => f });
var i = n(64700),
    a = n(540185),
    l = n(417597),
    s = n(382483),
    r = n(385113),
    o = n(369374),
    c = n(395332),
    d = n(287809),
    u = n(403362),
    m = n(633075),
    g = n(289173),
    p = n(667049),
    x = n(229231);
function f(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        n = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        f = (0, p.A)(n?.id),
        _ = (0, c.w$)(e),
        h = (0, l.bG)([r.A], () => r.A.getAllConfigsByApplication());
    return (
        i.useEffect(() => {
            t && (0, s.W)();
        }, [t]),
        i.useMemo(() => {
            let e = new Set(f.filter((e) => e instanceof m.R).map((e) => e.applicationId)),
                n = new Set(f.map((e) => e.type));
            return x.Zc.flatMap((i) =>
                i === a.x.APPLICATION
                    ? t
                        ? Object.values(h)
                              .map((e) => e[0])
                              .filter(u.Vq)
                              .filter((t) => !e.has(t.application_id))
                              .map((e) => new m.R({ applicationId: e.application_id }))
                        : null == _
                          ? []
                          : _.filter((t) => !e.has(t.applicationId)).map(
                                (e) => new m.R({ applicationId: e.applicationId }),
                            )
                    : (0, g.hL)(i)
                      ? n.has(i)
                          ? []
                          : new g.Yy({ type: i, games: [] })
                      : void (0, u.xb)(i),
            );
        }, [t, h, _, f])
    );
}
