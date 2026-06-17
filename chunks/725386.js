i.d(t, { A: () => A });
var n = i(64700),
    l = i(598748),
    s = i(540185),
    a = i(702841),
    r = i(382483),
    c = i(385113),
    u = i(369374),
    o = i(457965),
    d = i(885386),
    g = i(287809),
    m = i(403362),
    f = i(633075),
    x = i(289173),
    p = i(667049),
    I = i(229231);
function A(e) {
    let { enabled: t } = u.A.useConfig({ location: e.location }),
        i = d.Q_.useSetting(),
        A = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        E = (0, p.A)(A?.id),
        h = (0, o.w$)(e),
        j = (0, a.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        N = (0, a.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        T = (0, a.bG)([c.A], () => c.A.getDeveloperApplicationIds());
    return (
        n.useEffect(() => {
            t && ((0, r.Wq)().catch(() => {}), i && (0, r.i$)().catch(() => {}));
        }, [t, i]),
        n.useMemo(() => {
            let e = new Set(E.filter((e) => e instanceof f.R).map((e) => e.applicationId)),
                n = new Set(E.map((e) => e.type));
            return I.Zc.flatMap((a) => {
                if (a === s.x.APPLICATION) {
                    if (t) {
                        let t = new Set([...N, ...(i ? T : [])]);
                        return Object.values(j)
                            .map((e) => e[0])
                            .filter(m.Vq)
                            .filter((e) => t.has(e.application_id))
                            .filter((t) => !e.has(t.application_id))
                            .filter(
                                (e) =>
                                    null != e.surfaces[l.m.WIDGET_TOP] &&
                                    null != e.surfaces[l.m.WIDGET_BOTTOM] &&
                                    null != e.surfaces[l.m.ADD_WIDGET_PREVIEW],
                            )
                            .map((e) => new f.R({ applicationId: e.application_id }));
                    }
                    return null == h
                        ? []
                        : h
                              .filter((t) => !e.has(t.applicationId))
                              .map((e) => new f.R({ applicationId: e.applicationId }));
                }
                if ((0, x.hL)(a)) return n.has(a) ? [] : new x.Yy({ type: a, games: [] });
                (0, m.xb)(a);
            });
        }, [t, i, j, N, T, h, E])
    );
}
