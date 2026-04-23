n.d(t, { A: () => A }), n(321073);
var i = n(64700),
    l = n(17928),
    a = n(10716),
    s = n(429913),
    r = n(287809),
    o = n(147964),
    c = n(403362),
    d = n(723702),
    u = n(933958),
    m = n(847381),
    p = n(155718),
    _ = n(594061),
    h = n(360469);
function A(e) {
    var t;
    let n,
        A,
        f,
        x,
        C,
        g,
        N,
        E,
        b,
        { guildId: I, enableFilter: v = !1 } = e,
        { filter: y } = (0, l.cf)([a.A], () => ({ filter: a.A.getFilter() })),
        j =
            ((n = (0, l.bG)([r.default], r.default.getCurrentUser)),
            (A = (0, l.yK)([u.Ay], () => u.Ay.getShelfActivities(I))),
            (f = (0, l.bG)([o.A], () => o.A.testModeEmbeddedApplicationId)),
            (x = A.map((e) => e.application_id)),
            (C = null != f ? [f, ...x] : x),
            (g = (0, s.A)(C)),
            (N = i.useMemo(() => g.filter(c.Vq), [g])),
            (E = i.useMemo(
                () =>
                    null != f && N.length > 0 && N[0].id === f && null != N[0].embeddedActivityConfig
                        ? [{ activity: N[0].embeddedActivityConfig, application: N[0] }]
                        : [],
                [N, f],
            )),
            (b = i.useMemo(
                () =>
                    A.map((e) => {
                        let t = N.find((t) => t.id === e.application_id);
                        return null == t ? null : { activity: e, application: t };
                    }).filter(c.Vq),
                [A, N],
            )),
            (t = i.useMemo(
                () =>
                    [...E, ...b]
                        .filter((e) => {
                            let { activity: t } = e;
                            return (t.supported_platforms ?? []).includes((0, m.A)((0, d.getOS)()));
                        })
                        .filter((e) => {
                            let { activity: t } = e;
                            return !t.requires_age_gate || n?.nsfwAllowed === !0 || n?.nsfwAllowed == null;
                        }),
                [n?.nsfwAllowed, b, E],
            )),
            _.bW.loadIfNecessary(),
            i.useMemo(() => {
                var e, n;
                let i,
                    l,
                    a = [];
                t.forEach((e) => a.push(e.application.id));
                let s = [...a];
                return (
                    s.sort((e, t) => (a.findIndex((t) => t === e) < a.findIndex((e) => e === t) ? -1 : 1)),
                    (e = t),
                    (n = s),
                    (i = [...e]),
                    (l = 0),
                    n.forEach((e) => {
                        let t = i.findIndex((t) => t.application.id === e);
                        if (-1 !== t) {
                            let e = i[t];
                            i.splice(t, 1), (i = [...i.slice(0, l), e, ...i.slice(l)]), ++l;
                        }
                    }),
                    i
                        .map((e, t) => [e, t])
                        .filter((e) => {
                            let [t] = e,
                                n =
                                    t.application.embeddedActivityConfig?.client_platform_config[
                                        (0, m.A)((0, d.getOS)())
                                    ]?.label_type;
                            return null != n && (n === p.Hr.NEW || n === p.Hr.UPDATED);
                        })
                        .forEach((e) => {
                            let [t, n] = e,
                                l =
                                    null != t.application.embeddedActivityConfig &&
                                    null != t.application.embeddedActivityConfig.shelf_rank
                                        ? t.application.embeddedActivityConfig.shelf_rank - 1
                                        : n;
                            if (l < n) {
                                let e = i[n];
                                i.splice(n, 1), (i = [...i.slice(0, l), e, ...i.slice(l)]);
                            }
                        }),
                    i
                );
            }, [t])),
        P = (() => {
            let { isEnabled: e, lastUsedObject: t } = (0, l.cf)(
                    [a.A],
                    () => ({ isEnabled: a.A.getIsEnabled(), lastUsedObject: a.A.getLastUsedObject() }),
                    [],
                ),
                n = (0, l.yK)([a.A], () => a.A.getDeveloperShelfItems(), []);
            return i.useMemo(
                () =>
                    e
                        ? n
                              .map((e) => ({
                                  application: e,
                                  activity: { ...h.Gl, ...e.embeddedActivityConfig, application_id: e.id },
                              }))
                              .sort((e, n) => {
                                  let i = t[e.application.id],
                                      l = t[n.application.id];
                                  return null == i ? 1 : null == l ? -1 : l - i;
                              })
                        : [],
                [n, e, t],
            );
        })();
    return i.useMemo(() => {
        function e(e) {
            return !!(!v || "" === y || e.application.name.toLowerCase().includes(y.toLowerCase()));
        }
        let t = [...P].filter(e),
            n = new Set(t.map((e) => e.application.id));
        for (let i of j) !n.has(i.application.id) && e(i) && t.push(i);
        return t;
    }, [P, v, y, j]);
}
