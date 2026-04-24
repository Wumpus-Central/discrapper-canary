n.d(t, { A: () => x });
var i = n(64700),
    a = n(540185),
    l = n(702841),
    r = n(382483),
    s = n(385113),
    o = n(369374),
    c = n(457965),
    d = n(253932),
    u = n(287809),
    g = n(403362),
    _ = n(633075),
    f = n(289173),
    m = n(667049),
    p = n(229231);
function x(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        n = d.Q_.useSetting(),
        x = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        I = (0, m.A)(x?.id),
        h = (0, c.w$)(e),
        A = (0, l.bG)([s.A], () => s.A.getAllConfigsByApplication());
    return (
        i.useEffect(() => {
            t && ((0, r.Wq)(), n && (0, r.i$)());
        }, [t, n]),
        i.useMemo(() => {
            let e = new Set(I.filter((e) => e instanceof _.R).map((e) => e.applicationId)),
                n = new Set(I.map((e) => e.type));
            return p.Zc.flatMap((i) =>
                i === a.x.APPLICATION
                    ? t
                        ? Object.values(A)
                              .map((e) => e[0])
                              .filter(g.Vq)
                              .filter((t) => !e.has(t.application_id))
                              .map((e) => new _.R({ applicationId: e.application_id }))
                        : null == h
                          ? []
                          : h
                                .filter((t) => !e.has(t.applicationId))
                                .map((e) => new _.R({ applicationId: e.applicationId }))
                    : (0, f.hL)(i)
                      ? n.has(i)
                          ? []
                          : new f.Yy({ type: i, games: [] })
                      : void (0, g.xb)(i),
            );
        }, [t, A, h, I])
    );
}
