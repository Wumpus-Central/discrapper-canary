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
    E = a(116281),
    A = a(667049),
    I = a(71393),
    _ = a(287809),
    f = a(499466),
    g = a(73153),
    R = a(46653),
    L = a(951178),
    h = a(316601),
    m = a(652215);
async function T() {
    if ("loading" === h.A.getFetchState()) return;
    let t = R.default.getId();
    g.h.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_START" });
    try {
        let { body: e } = await c.Bo.get({
            url: m.Rsh.CONJURE_PROJECTS,
            query: { supported_surfaces: L.q7.PROFILE_WIDGET, installed: !0 },
            rejectWithError: !0,
        });
        if (R.default.getId() !== t) return;
        g.h.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_SUCCESS", projects: e });
    } catch {
        if (R.default.getId() !== t) return;
        g.h.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_FAIL" });
    }
}
let S = new n.A(3e4, 3e5);
function N() {
    let t, e;
    ((t = (0, s.bG)([I.A, u.Bt], () => (0, f.d_)(I.A.getGuildsArray(), "useConjureServerWidgetOffers"))),
        (e = (0, s.bG)([h.A], () => h.A.getFetchState())),
        l.useEffect(() => {
            ("success" === e && S.succeed(),
                t && ("unattempted" === e ? T() : "error" !== e || S.pending || S.fail(() => T())));
        }, [t, e]));
    let a = (0, s.bG)([h.A], () => h.A.getProjects());
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
                a.map((t) => t.application_id),
                () => t,
            ),
            () => {
                t = !0;
            }
        );
    }, [a]);
    let i = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
        n = (0, A.A)(i?.id),
        g = (0, s.bG)([d.A], () => d.A.getAllConfigsByApplication()),
        R = (0, s.bG)([I.A], () => I.A.getGuilds());
    return l.useMemo(() => {
        let t = new Set(n.filter((t) => t instanceof p.R).map((t) => t.applicationId)),
            e = new Map();
        for (let { application_id: i, guild_id: l } of a) {
            let a = g[i]?.find((t) => {
                let { status: e } = t;
                return e === r.PUBLISHED;
            });
            !(null == l || null == R[l] || t.has(i)) &&
                null != a &&
                (0, E.q)(a) &&
                e.set(l, [...(e.get(l) ?? []), new p.R({ applicationId: i })]);
        }
        return Array.from(e, (t) => {
            let [e, a] = t;
            return { guildId: e, guildName: R[e]?.name ?? "", widgets: a };
        });
    }, [a, g, R, n]);
}
