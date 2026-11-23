a.d(e, { A: () => N });
var i,
    n = a(582128),
    l = a(158390),
    r = (((i = {}).DRAFT = "draft"), (i.PUBLISHED = "published"), i),
    s = a(855986),
    c = a(620632),
    o = a(382483),
    d = a(385113),
    u = a(945810),
    p = a(633075),
    E = a(116281),
    A = a(667049),
    f = a(71393),
    I = a(287809),
    _ = a(499466),
    g = a(73153),
    R = a(46653),
    m = a(951178),
    L = a(316601),
    h = a(652215);
async function T() {
    if ("loading" === L.A.getFetchState()) return;
    let t = R.default.getId();
    g.h.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_START" });
    try {
        let { body: e } = await c.Bo.get({
            url: h.Rsh.CONJURE_PROJECTS,
            query: { supported_surfaces: m.q7.PROFILE_WIDGET, installed: !0 },
            rejectWithError: !0,
        });
        if (R.default.getId() !== t) return;
        g.h.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_SUCCESS", projects: e });
    } catch {
        if (R.default.getId() !== t) return;
        g.h.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_FAIL" });
    }
}
let S = new l.A(3e4, 3e5);
function N() {
    let t, e;
    ((t = (0, s.bG)([f.A, u.Bt], () => (0, _.d_)(f.A.getGuildsArray(), "useConjureServerWidgetOffers"))),
        (e = (0, s.bG)([L.A], () => L.A.getFetchState())),
        n.useEffect(() => {
            ("success" === e && S.succeed(),
                t && ("unattempted" === e ? T() : "error" !== e || S.pending || S.fail(() => T())));
        }, [t, e]));
    let a = (0, s.bG)([L.A], () => L.A.getProjects());
    n.useEffect(() => {
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
    let i = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
        l = (0, A.A)(i?.id),
        g = (0, s.bG)([d.A], () => d.A.getAllConfigsByApplication()),
        R = (0, s.bG)([f.A], () => f.A.getGuilds());
    return n.useMemo(() => {
        let t = new Set(l.filter((t) => t instanceof p.R).map((t) => t.applicationId)),
            e = new Map();
        for (let { application_id: i, guild_id: n } of a) {
            let a = g[i]?.find((t) => {
                let { status: e } = t;
                return e === r.PUBLISHED;
            });
            !(null == n || null == R[n] || t.has(i)) &&
                null != a &&
                (0, E.q)(a) &&
                e.set(n, [...(e.get(n) ?? []), new p.R({ applicationId: i })]);
        }
        return Array.from(e, (t) => {
            let [e, a] = t;
            return { guildId: e, guildName: R[e]?.name ?? "", widgets: a };
        });
    }, [a, g, R, l]);
}
