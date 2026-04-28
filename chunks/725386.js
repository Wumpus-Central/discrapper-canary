n.d(t, { A: () => p });
var i = n(64700),
    l = n(540185),
    s = n(702841),
    a = n(382483),
    r = n(385113),
    c = n(369374),
    o = n(395332),
    u = n(253932),
    d = n(287809),
    g = n(403362),
    m = n(633075),
    f = n(289173),
    x = n(667049),
    I = n(229231);
function p(e) {
    let { enabled: t } = c.A.useConfig({ location: e.location }),
        n = u.Q_.useSetting(),
        p = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        A = (0, x.A)(p?.id),
        E = (0, o.w$)(e),
        h = (0, s.bG)([r.A], () => r.A.getAllConfigsByApplication());
    return (
        i.useEffect(() => {
            t && ((0, a.Wq)(), n && (0, a.i$)());
        }, [t, n]),
        i.useMemo(() => {
            let e = new Set(A.filter((e) => e instanceof m.R).map((e) => e.applicationId)),
                n = new Set(A.map((e) => e.type));
            return I.Zc.flatMap((i) =>
                i === l.x.APPLICATION
                    ? t
                        ? Object.values(h)
                              .map((e) => e[0])
                              .filter(g.Vq)
                              .filter((t) => !e.has(t.application_id))
                              .map((e) => new m.R({ applicationId: e.application_id }))
                        : null == E
                          ? []
                          : E.filter((t) => !e.has(t.applicationId)).map(
                                (e) => new m.R({ applicationId: e.applicationId }),
                            )
                    : (0, f.hL)(i)
                      ? n.has(i)
                          ? []
                          : new f.Yy({ type: i, games: [] })
                      : void (0, g.xb)(i),
            );
        }, [t, h, E, A])
    );
}
