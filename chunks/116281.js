a.d(t, { A: () => g, q: () => P });
var i = a(582128),
    n = a(598748),
    r = a(540185),
    l = a(164636),
    s = a(793574),
    u = a(382483),
    c = a(385113),
    p = a(734066),
    A = a(253932),
    f = a(287809),
    d = a(403362);
let o = new Set([
    r.x.PERSONAL,
    r.x.CLIPS_GALLERY,
    r.x.APPLICATION,
    r.x.FAVORITE_GAMES,
    r.x.PLAYED_GAMES,
    r.x.CURRENT_GAMES,
    r.x.WANT_TO_PLAY_GAMES,
]);
var _ = a(633075),
    E = a(646976),
    I = a(289173),
    h = a(210598);
let L = (0, a(945810).mj)({
    name: "2026-07-clips-on-profile-setter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var b = a(465318),
    S = a(667049),
    G = a(229231);
function P(e) {
    return (
        null != e.surfaces[n.m.WIDGET_TOP] &&
        null != e.surfaces[n.m.WIDGET_BOTTOM] &&
        null != e.surfaces[n.m.ADD_WIDGET_PREVIEW]
    );
}
function g() {
    let e = A.Q_.useSetting(),
        t = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        a = (0, S.A)(t?.id),
        n = b.A.useConfig({ location: "useAddableWidgets" }).enabled,
        g = (0, l.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        C = (0, l.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        O = (0, l.bG)([c.A], () => c.A.getDeveloperApplicationIds()),
        R = (0, p.sw)(),
        T = L.useConfig({ location: s.A.USER_PROFILE_MODAL_V2 }).enabled && R;
    return (
        i.useEffect(() => {
            ((0, u.Wq)().catch(() => {}), e && (0, u.i$)().catch(() => {}));
        }, [e]),
        i.useMemo(() => {
            let t = new Set(a.filter((e) => e instanceof _.R).map((e) => e.applicationId)),
                i = new Set(a.map((e) => e.type));
            return G.Zc.filter((e) => o.has(e)).flatMap((a) => {
                switch (a) {
                    case r.x.APPLICATION: {
                        let a = new Set([...C, ...(e ? O : [])]);
                        return Object.values(g)
                            .map((e) => e[0])
                            .filter(d.Vq)
                            .filter((e) => a.has(e.application_id))
                            .filter((e) => !t.has(e.application_id))
                            .filter(P)
                            .map((e) => new _.R({ applicationId: e.application_id }));
                    }
                    case r.x.PERSONAL:
                        if (!n || i.has(a)) return [];
                        return (0, h.g0)();
                    case r.x.CLIPS_GALLERY:
                        if (!T || i.has(a)) return [];
                        return new E.kM({ clips: [] });
                    default:
                        if ((0, I.hL)(a)) {
                            if (i.has(a)) return [];
                            return new I.Yy({ type: a, games: [] });
                        }
                        return (0, d.xb)(a);
                }
            });
        }, [e, g, C, O, a, T, n])
    );
}
