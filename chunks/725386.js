i.d(t, { A: () => A });
var n = i(64700),
    l = i(598748),
    s = i(540185),
    a = i(702841),
    r = i(382483),
    c = i(385113),
    o = i(369374),
    u = i(457965),
    d = i(885386),
    m = i(287809),
    g = i(403362),
    f = i(633075),
    x = i(289173),
    I = i(667049),
    p = i(229231);
function A(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        i = d.Q_.useSetting(),
        A = (0, a.bG)([m.default], () => m.default.getCurrentUser()),
        h = (0, I.A)(A?.id),
        E = (0, u.w$)(e),
        j = (0, a.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        N = (0, a.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        v = (0, a.bG)([c.A], () => c.A.getDeveloperApplicationIds());
    return (
        n.useEffect(() => {
            t && ((0, r.Wq)(), i && (0, r.i$)());
        }, [t, i]),
        n.useMemo(() => {
            let e = new Set(h.filter((e) => e instanceof f.R).map((e) => e.applicationId)),
                n = new Set(h.map((e) => e.type));
            return p.Zc.flatMap((a) => {
                if (a === s.x.APPLICATION) {
                    if (t) {
                        let t = new Set([...N, ...(i ? v : [])]);
                        return Object.values(j)
                            .map((e) => e[0])
                            .filter(g.Vq)
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
                    return null == E
                        ? []
                        : E.filter((t) => !e.has(t.applicationId)).map(
                              (e) => new f.R({ applicationId: e.applicationId }),
                          );
                }
                if ((0, x.hL)(a)) return n.has(a) ? [] : new x.Yy({ type: a, games: [] });
                (0, g.xb)(a);
            });
        }, [t, i, j, N, v, E, h])
    );
}
