n.d(t, { A: () => h });
var i = n(64700),
    l = n(540185),
    a = n(417597),
    s = n(382483),
    r = n(385113),
    o = n(369374),
    c = n(395332),
    d = n(253932),
    u = n(287809),
    g = n(403362),
    m = n(633075),
    x = n(289173),
    p = n(667049),
    f = n(229231);
function h(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        n = d.Q_.useSetting(),
        h = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        _ = (0, p.A)(h?.id),
        A = (0, c.w$)(e),
        I = (0, a.bG)([r.A], () => r.A.getAllConfigsByApplication());
    return (
        i.useEffect(() => {
            t && ((0, s.Wq)(), n && (0, s.i$)());
        }, [t, n]),
        i.useMemo(() => {
            let e = new Set(_.filter((e) => e instanceof m.R).map((e) => e.applicationId)),
                n = new Set(_.map((e) => e.type));
            return f.Zc.flatMap((i) =>
                i === l.x.APPLICATION
                    ? t
                        ? Object.values(I)
                              .map((e) => e[0])
                              .filter(g.Vq)
                              .filter((t) => !e.has(t.application_id))
                              .map((e) => new m.R({ applicationId: e.application_id }))
                        : null == A
                          ? []
                          : A.filter((t) => !e.has(t.applicationId)).map(
                                (e) => new m.R({ applicationId: e.applicationId }),
                            )
                    : (0, x.hL)(i)
                      ? n.has(i)
                          ? []
                          : new x.Yy({ type: i, games: [] })
                      : void (0, g.xb)(i),
            );
        }, [t, I, A, _])
    );
}
