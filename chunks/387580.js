a.d(e, { A: () => N });
var i,
    l = a(582128),
    n = a(158390),
    r = (((i = {}).DRAFT = "draft"), (i.PUBLISHED = "published"), i),
    s = a(855986),
    c = a(620632),
    o = a(382483),
    d = a(385113),
    u = a(945810),
    p = a(633075),
    A = a(116281),
    f = a(667049),
    E = a(71393),
    g = a(287809),
    I = a(233470),
    m = a(260498),
    h = a(951178),
    L = a(246338);
let y = new n.A(3e4, 3e5);
function _(t) {
    return "guild" === t.install_scope && t.supported_surfaces?.includes(h.q7.PROFILE_WIDGET) === !0;
}
function N() {
    let t, e, a;
    ((t = (0, s.bG)([E.A, u.Bt], () => (0, L.XF)(E.A.getGuildsArray(), "useConjureServerWidgetOffers"))),
        (e = (0, s.bG)([m.Ay], () => m.Ay.getSharedWithMeProjectsFetchState())),
        (a = (0, s.bG)([m.Ay], () => m.Ay.getProjectsFetchState()?.type === "loading")),
        l.useEffect(() => {
            ("success" === e && y.succeed(),
                t &&
                    !a &&
                    ("unattempted" === e
                        ? (0, I.listProjects)()
                        : "error" !== e || y.pending || y.fail(() => (0, I.listProjects)())));
        }, [t, e, a]));
    let i = (0, s.yK)([m.Ay], () => [...m.Ay.getOwnedProjects(), ...m.Ay.getSharedWithMeProjects()].filter(_));
    l.useEffect(() => {
        let t = !1;
        return (
            !(async function (t, e) {
                for (let a of t) {
                    if (e()) return;
                    try {
                        await (0, o.un)(a);
                    } catch (i) {
                        if (!(i instanceof c.oh) || 429 !== i.status) continue;
                        let t = i.retryAfter ?? 5;
                        if ((await new Promise((e) => setTimeout(e, 1e3 * t)), e())) return;
                        try {
                            await (0, o.un)(a);
                        } catch {}
                    }
                }
            })(
                i.map((t) => t.application_id),
                () => t,
            ),
            () => {
                t = !0;
            }
        );
    }, [i]);
    let n = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        h = (0, f.A)(n?.id),
        N = (0, s.bG)([d.A], () => d.A.getAllConfigsByApplication()),
        P = (0, s.bG)([E.A], () => E.A.getGuilds());
    return l.useMemo(() => {
        let t = new Set(h.filter((t) => t instanceof p.R).map((t) => t.applicationId)),
            e = new Map();
        for (let { application_id: a, guild_id: l } of i) {
            let i = N[a]?.find((t) => {
                let { status: e } = t;
                return e === r.PUBLISHED;
            });
            !(null == l || null == P[l] || t.has(a)) &&
                null != i &&
                (0, A.q)(i) &&
                e.set(l, [...(e.get(l) ?? []), new p.R({ applicationId: a })]);
        }
        return Array.from(e, (t) => {
            let [e, a] = t;
            return { guildId: e, guildName: P[e]?.name ?? "", widgets: a };
        });
    }, [i, N, P, h]);
}
