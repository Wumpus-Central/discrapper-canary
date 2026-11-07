a.d(e, { A: () => y });
var i,
    l = a(582128),
    n = a(158390),
    s = (((i = {}).DRAFT = "draft"), (i.PUBLISHED = "published"), i),
    r = a(855986),
    c = a(620632),
    o = a(382483),
    d = a(385113),
    u = a(945810),
    p = a(633075),
    A = a(116281),
    f = a(667049),
    E = a(71393),
    m = a(287809),
    g = a(233470),
    I = a(260498),
    L = a(951178),
    h = a(246338);
let x = new n.A(3e4, 3e5);
function N(t) {
    return "guild" === t.install_scope && t.supported_surfaces?.includes(L.q7.PROFILE_WIDGET) === !0;
}
function y() {
    let t, e, a;
    ((t = (0, r.bG)([E.A, u.Bt], () => (0, h.XF)(E.A.getGuildsArray(), "useConjureServerWidgetOffers"))),
        (e = (0, r.bG)([I.Ay], () => I.Ay.getSharedWithMeProjectsFetchState())),
        (a = (0, r.bG)([I.Ay], () => I.Ay.getProjectsFetchState()?.type === "loading")),
        l.useEffect(() => {
            ("success" === e && x.succeed(),
                t &&
                    !a &&
                    ("unattempted" === e
                        ? (0, g.listProjects)()
                        : "error" !== e || x.pending || x.fail(() => (0, g.listProjects)())));
        }, [t, e, a]));
    let i = (0, r.yK)([I.Ay], () => [...I.Ay.getOwnedProjects(), ...I.Ay.getSharedWithMeProjects()].filter(N));
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
    let n = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        L = (0, f.A)(n?.id),
        y = (0, r.bG)([d.A], () => d.A.getAllConfigsByApplication()),
        j = (0, r.bG)([E.A], () => E.A.getGuilds());
    return l.useMemo(() => {
        let t = new Set(L.filter((t) => t instanceof p.R).map((t) => t.applicationId)),
            e = new Map();
        for (let { application_id: a, guild_id: l } of i) {
            let i = y[a]?.find((t) => {
                let { status: e } = t;
                return e === s.PUBLISHED;
            });
            !(null == l || null == j[l] || t.has(a)) &&
                null != i &&
                (0, A.q)(i) &&
                e.set(l, [...(e.get(l) ?? []), new p.R({ applicationId: a })]);
        }
        return Array.from(e, (t) => {
            let [e, a] = t;
            return { guildId: e, widgets: a };
        });
    }, [i, y, j, L]);
}
