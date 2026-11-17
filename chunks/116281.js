a.d(t, { A: () => S, q: () => b });
var i = a(582128),
    n = a(598748),
    l = a(540185),
    r = a(164636),
    s = a(793574),
    p = a(382483),
    u = a(385113),
    c = a(734066),
    A = a(253932),
    f = a(287809),
    d = a(403362);
let o = new Set([
    l.x.CLIPS_GALLERY,
    l.x.APPLICATION,
    l.x.FAVORITE_GAMES,
    l.x.PLAYED_GAMES,
    l.x.CURRENT_GAMES,
    l.x.WANT_TO_PLAY_GAMES,
]);
var _ = a(633075),
    E = a(646976),
    I = a(289173);
let h = (0, a(945810).mj)({
    name: "2026-07-clips-on-profile-setter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var G = a(667049),
    L = a(229231);
function b(e) {
    return (
        null != e.surfaces[n.m.WIDGET_TOP] &&
        null != e.surfaces[n.m.WIDGET_BOTTOM] &&
        null != e.surfaces[n.m.ADD_WIDGET_PREVIEW]
    );
}
function S() {
    let e = A.Q_.useSetting(),
        t = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        a = (0, G.A)(t?.id),
        n = (0, r.bG)([u.A], () => u.A.getAllConfigsByApplication()),
        S = (0, r.bG)([u.A], () => u.A.getFeaturedApplicationIds()),
        T = (0, r.bG)([u.A], () => u.A.getDeveloperApplicationIds()),
        m = (0, c.sw)(),
        w = h.useConfig({ location: s.A.USER_PROFILE_MODAL_V2 }).enabled && m;
    return (
        i.useEffect(() => {
            ((0, p.Wq)().catch(() => {}), e && (0, p.i$)().catch(() => {}));
        }, [e]),
        i.useMemo(() => {
            let t = new Set(a.filter((e) => e instanceof _.R).map((e) => e.applicationId)),
                i = new Set(a.map((e) => e.type));
            return L.Zc.filter((e) => o.has(e)).flatMap((a) => {
                switch (a) {
                    case l.x.APPLICATION: {
                        let a = new Set([...S, ...(e ? T : [])]);
                        return Object.values(n)
                            .map((e) => e[0])
                            .filter(d.Vq)
                            .filter((e) => a.has(e.application_id))
                            .filter((e) => !t.has(e.application_id))
                            .filter(b)
                            .map((e) => new _.R({ applicationId: e.application_id }));
                    }
                    case l.x.CLIPS_GALLERY:
                        if (!w || i.has(a)) return [];
                        return new E.kM({ clips: [] });
                    default:
                        if ((0, I.hL)(a)) {
                            if (i.has(a)) return [];
                            return new I.Yy({ type: a, games: [] });
                        }
                        return (0, d.xb)(a);
                }
            });
        }, [e, n, S, T, a, w])
    );
}
