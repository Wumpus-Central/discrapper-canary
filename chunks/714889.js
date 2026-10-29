a.d(t, { A: () => P });
var i = a(582128),
    n = a(598748),
    l = a(540185),
    r = a(702841),
    s = a(793574),
    u = a(382483),
    c = a(385113),
    p = a(734066),
    A = a(253932),
    d = a(287809),
    f = a(403362);
let o = new Set([
    l.x.PERSONAL,
    l.x.CLIPS_GALLERY,
    l.x.APPLICATION,
    l.x.FAVORITE_GAMES,
    l.x.PLAYED_GAMES,
    l.x.CURRENT_GAMES,
    l.x.WANT_TO_PLAY_GAMES,
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
function P() {
    let e = A.Q_.useSetting(),
        t = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        a = (0, S.A)(t?.id),
        P = b.A.useConfig({ location: "useAddableWidgets" }).enabled,
        g = (0, r.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        C = (0, r.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        O = (0, r.bG)([c.A], () => c.A.getDeveloperApplicationIds()),
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
                    case l.x.APPLICATION: {
                        let a = new Set([...C, ...(e ? O : [])]);
                        return Object.values(g)
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
                            .map((e) => new _.R({ applicationId: e.application_id }));
                    }
                    case l.x.PERSONAL:
                        if (!P || i.has(a)) return [];
                        return (0, h.g0)();
                    case l.x.CLIPS_GALLERY:
                        if (!T || i.has(a)) return [];
                        return new E.kM({ clips: [] });
                    default:
                        if ((0, I.hL)(a)) {
                            if (i.has(a)) return [];
                            return new I.Yy({ type: a, games: [] });
                        }
                        return (0, f.xb)(a);
                }
            });
        }, [e, g, C, O, a, T, P])
    );
}
