t.d(a, { A: () => C });
var n = t(582128),
    i = t(598748),
    l = t(540185),
    r = t(702841),
    s = t(793574),
    u = t(382483),
    d = t(385113),
    p = t(885386),
    c = t(287809),
    f = t(403362),
    o = t(633075),
    A = t(646976),
    b = t(289173),
    g = t(210598),
    h = t(945810);
let _ = (0, h.mj)({
        name: "2026-07-clips-on-profile-setter",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    m = (0, h.mj)({
        name: "2026-07-personal-widget",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
    });
var I = t(667049),
    w = t(229231);
function C() {
    let e = p.Q_.useSetting(),
        a = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        t = (0, I.A)(a?.id),
        h = m.useConfig({ location: "useAddableWidgets" }).enabled,
        C = (0, r.bG)([d.A], () => d.A.getAllConfigsByApplication()),
        E = (0, r.bG)([d.A], () => d.A.getFeaturedApplicationIds()),
        G = (0, r.bG)([d.A], () => d.A.getDeveloperApplicationIds()),
        L = _.useConfig({ location: s.A.USER_PROFILE_MODAL_V2 }).enabled;
    return (
        n.useEffect(() => {
            (0, u.Wq)().catch(() => {}), e && (0, u.i$)().catch(() => {});
        }, [e]),
        n.useMemo(() => {
            let a = new Set(t.filter((e) => e instanceof o.R).map((e) => e.applicationId)),
                n = new Set(t.map((e) => e.type));
            return w.Zc.flatMap((t) => {
                switch (t) {
                    case l.x.APPLICATION: {
                        let t = new Set([...E, ...(e ? G : [])]);
                        return Object.values(C)
                            .map((e) => e[0])
                            .filter(f.Vq)
                            .filter((e) => t.has(e.application_id))
                            .filter((e) => !a.has(e.application_id))
                            .filter(
                                (e) =>
                                    null != e.surfaces[i.m.WIDGET_TOP] &&
                                    null != e.surfaces[i.m.WIDGET_BOTTOM] &&
                                    null != e.surfaces[i.m.ADD_WIDGET_PREVIEW],
                            )
                            .map((e) => new o.R({ applicationId: e.application_id }));
                    }
                    case l.x.PERSONAL:
                        if (!h || n.has(t)) return [];
                        return (0, g.g0)();
                    case l.x.CLIPS_GALLERY:
                        if (!L || n.has(t)) return [];
                        return new A.k({ clips: [] });
                    default:
                        if ((0, b.hL)(t)) {
                            if (n.has(t)) return [];
                            return new b.Yy({ type: t, games: [] });
                        }
                        return (0, f.xb)(t);
                }
            });
        }, [e, C, E, G, t, L, h])
    );
}
