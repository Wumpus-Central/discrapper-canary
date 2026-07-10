a.d(t, { A: () => I });
var i = a(64700),
    p = a(598748),
    l = a(540185),
    n = a(702841),
    s = a(382483),
    c = a(385113),
    r = a(885386),
    u = a(287809),
    d = a(403362),
    f = a(633075),
    o = a(289173),
    A = a(667049),
    h = a(229231);
function I() {
    let e = r.Q_.useSetting(),
        t = (0, n.bG)([u.default], () => u.default.getCurrentUser()),
        a = (0, A.A)(t?.id),
        I = (0, n.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        _ = (0, n.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        m = (0, n.bG)([c.A], () => c.A.getDeveloperApplicationIds());
    return (
        i.useEffect(() => {
            (0, s.Wq)().catch(() => {}), e && (0, s.i$)().catch(() => {});
        }, [e]),
        i.useMemo(() => {
            let t = new Set(a.filter((e) => e instanceof f.R).map((e) => e.applicationId)),
                i = new Set(a.map((e) => e.type));
            return h.Zc.flatMap((a) => {
                if (a === l.x.APPLICATION) {
                    let a = new Set([..._, ...(e ? m : [])]);
                    return Object.values(I)
                        .map((e) => e[0])
                        .filter(d.Vq)
                        .filter((e) => a.has(e.application_id))
                        .filter((e) => !t.has(e.application_id))
                        .filter(
                            (e) =>
                                null != e.surfaces[p.m.WIDGET_TOP] &&
                                null != e.surfaces[p.m.WIDGET_BOTTOM] &&
                                null != e.surfaces[p.m.ADD_WIDGET_PREVIEW],
                        )
                        .map((e) => new f.R({ applicationId: e.application_id }));
                }
                return (0, o.hL)(a)
                    ? i.has(a)
                        ? []
                        : new o.Yy({ type: a, games: [] })
                    : a === l.x.PERSONAL
                      ? []
                      : void (0, d.xb)(a);
            });
        }, [e, I, _, m, a])
    );
}
