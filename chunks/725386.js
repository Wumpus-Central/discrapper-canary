a.d(t, { A: () => I });
var i = a(64700),
    n = a(598748),
    r = a(540185),
    l = a(702841),
    p = a(382483),
    s = a(385113),
    c = a(885386),
    u = a(287809),
    f = a(403362),
    d = a(633075),
    A = a(289173),
    o = a(667049),
    h = a(229231);
function I() {
    let e = c.Q_.useSetting(),
        t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        a = (0, o.A)(t?.id),
        I = (0, l.bG)([s.A], () => s.A.getAllConfigsByApplication()),
        _ = (0, l.bG)([s.A], () => s.A.getFeaturedApplicationIds()),
        m = (0, l.bG)([s.A], () => s.A.getDeveloperApplicationIds());
    return (
        i.useEffect(() => {
            (0, p.Wq)().catch(() => {}), e && (0, p.i$)().catch(() => {});
        }, [e]),
        i.useMemo(() => {
            let t = new Set(a.filter((e) => e instanceof d.R).map((e) => e.applicationId)),
                i = new Set(a.map((e) => e.type));
            return h.Zc.flatMap((a) => {
                switch (a) {
                    case r.x.APPLICATION: {
                        let a = new Set([..._, ...(e ? m : [])]);
                        return Object.values(I)
                            .map((e) => e[0])
                            .filter(f.Vq)
                            .filter((e) => a.has(e.application_id))
                            .filter((e) => !t.has(e.application_id))
                            .filter(
                                (e) =>
                                    null != e.surfaces[n.m.WIDGET_TOP] &&
                                    null != e.surfaces[n.m.WIDGET_BOTTOM] &&
                                    null != e.surfaces[n.m.ADD_WIDGET_PREVIEW],
                            )
                            .map((e) => new d.R({ applicationId: e.application_id }));
                    }
                    case r.x.PERSONAL:
                        return [];
                    default:
                        if ((0, A.hL)(a)) {
                            if (i.has(a)) return [];
                            return new A.Yy({ type: a, games: [] });
                        }
                        return (0, f.xb)(a);
                }
            });
        }, [e, I, _, m, a])
    );
}
