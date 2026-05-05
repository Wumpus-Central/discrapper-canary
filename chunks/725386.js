n.d(t, { A: () => A });
var i = n(64700),
    l = n(598748),
    s = n(540185),
    a = n(702841),
    r = n(382483),
    c = n(385113),
    o = n(369374),
    u = n(457965),
    d = n(885386),
    g = n(287809),
    m = n(403362),
    f = n(633075),
    x = n(289173),
    I = n(667049),
    p = n(229231);
function A(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        n = d.Q_.useSetting(),
        A = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        h = (0, I.A)(A?.id),
        E = (0, u.w$)(e),
        j = (0, a.bG)([c.A], () => c.A.getAllConfigsByApplication());
    return (
        i.useEffect(() => {
            t && ((0, r.Wq)(), n && (0, r.i$)());
        }, [t, n]),
        i.useMemo(() => {
            let e = new Set(h.filter((e) => e instanceof f.R).map((e) => e.applicationId)),
                n = new Set(h.map((e) => e.type));
            return p.Zc.flatMap((i) =>
                i === s.x.APPLICATION
                    ? t
                        ? Object.values(j)
                              .map((e) => e[0])
                              .filter(m.Vq)
                              .filter((t) => !e.has(t.application_id))
                              .filter(
                                  (e) =>
                                      null != e.surfaces[l.m.WIDGET_TOP] &&
                                      null != e.surfaces[l.m.WIDGET_BOTTOM] &&
                                      null != e.surfaces[l.m.ADD_WIDGET_PREVIEW],
                              )
                              .map((e) => new f.R({ applicationId: e.application_id }))
                        : null == E
                          ? []
                          : E.filter((t) => !e.has(t.applicationId)).map(
                                (e) => new f.R({ applicationId: e.applicationId }),
                            )
                    : (0, x.hL)(i)
                      ? n.has(i)
                          ? []
                          : new x.Yy({ type: i, games: [] })
                      : void (0, m.xb)(i),
            );
        }, [t, j, E, h])
    );
}
