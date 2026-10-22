(t.d(i, { A: () => g }), t(321073));
var l = t(582128),
    n = t(17928),
    a = t(10716),
    r = t(991690),
    s = t(429913),
    o = t(785728),
    p = t(287809),
    d = t(147964),
    c = t(403362),
    u = t(723702),
    f = t(933958),
    m = t(847381),
    A = t(155718),
    b = t(594061),
    _ = t(818023);
function g(e) {
    var i;
    let t,
        g,
        v,
        y,
        h,
        E,
        w,
        C,
        I,
        { guildId: N, enableFilter: x = !1 } = e,
        { filter: M } = (0, n.cf)([a.A], () => ({ filter: a.A.getFilter() })),
        k =
            ((t = (0, n.bG)([p.default], p.default.getCurrentUser)),
            (g = (0, n.yK)([f.Ay], () => f.Ay.getShelfActivities(N))),
            (v = (0, n.bG)([d.A], () => d.A.testModeEmbeddedApplicationId)),
            (y = g.map((e) => e.application_id)),
            (h = null != v ? [v, ...y] : y),
            (E = (0, s.A)(h)),
            (w = l.useMemo(() => E.filter(c.Vq), [E])),
            (C = l.useMemo(
                () =>
                    null != v &&
                    w.length > 0 &&
                    w[0].id === v &&
                    w[0].supportsEmbeddedSurface(r.U.MAIN) &&
                    null != w[0].embeddedActivityConfig
                        ? [{ activity: w[0].embeddedActivityConfig, application: w[0] }]
                        : [],
                [w, v],
            )),
            (I = l.useMemo(
                () =>
                    g
                        .map((e) => {
                            let i = w.find((i) => i.id === e.application_id);
                            return null == i ? null : { activity: e, application: i };
                        })
                        .filter(c.Vq),
                [g, w],
            )),
            (i = l.useMemo(
                () =>
                    [...C, ...I]
                        .filter((e) => {
                            let { activity: i } = e;
                            return (i.supported_platforms ?? []).includes((0, m.A)((0, u.getOS)()));
                        })
                        .filter((e) => {
                            let { activity: i } = e;
                            return !i.requires_age_gate || t?.nsfwAllowed === !0 || t?.nsfwAllowed == null;
                        })
                        .filter((e) => {
                            let { application: i } = e;
                            return !(t?.nsfwAllowed === !1 && (0, o.A)(i.id));
                        }),
                [t?.nsfwAllowed, I, C],
            )),
            b.bW.loadIfNecessary(),
            l.useMemo(() => {
                var e, t;
                let l,
                    n,
                    a = [];
                i.forEach((e) => a.push(e.application.id));
                let r = [...a];
                return (
                    r.sort((e, i) => (a.findIndex((i) => i === e) < a.findIndex((e) => e === i) ? -1 : 1)),
                    (e = i),
                    (t = r),
                    (l = [...e]),
                    (n = 0),
                    t.forEach((e) => {
                        let i = l.findIndex((i) => i.application.id === e);
                        if (-1 !== i) {
                            let e = l[i];
                            (l.splice(i, 1), (l = [...l.slice(0, n), e, ...l.slice(n)]), ++n);
                        }
                    }),
                    l
                        .map((e, i) => [e, i])
                        .filter((e) => {
                            let [i] = e,
                                t =
                                    i.application.embeddedActivityConfig?.client_platform_config[
                                        (0, m.A)((0, u.getOS)())
                                    ]?.label_type;
                            return null != t && (t === A.Hr.NEW || t === A.Hr.UPDATED);
                        })
                        .forEach((e) => {
                            let [i, t] = e,
                                n =
                                    null != i.application.embeddedActivityConfig &&
                                    null != i.application.embeddedActivityConfig.shelf_rank
                                        ? i.application.embeddedActivityConfig.shelf_rank - 1
                                        : t;
                            if (n < t) {
                                let e = l[t];
                                (l.splice(t, 1), (l = [...l.slice(0, n), e, ...l.slice(n)]));
                            }
                        }),
                    l
                );
            }, [i])),
        j = (function () {
            let { isEnabled: e, lastUsedObject: i } = (0, n.cf)(
                    [a.A],
                    () => ({ isEnabled: a.A.getIsEnabled(), lastUsedObject: a.A.getLastUsedObject() }),
                    [],
                ),
                t = (0, n.yK)([a.A], () => a.A.getDeveloperShelfItems(), []);
            return l.useMemo(
                () =>
                    e
                        ? t
                              .map((e) => ({
                                  application: e,
                                  activity: { ..._.Gl, ...e.embeddedActivityConfig, application_id: e.id },
                              }))
                              .sort((e, t) => {
                                  let l = i[e.application.id],
                                      n = i[t.application.id];
                                  return null == l ? 1 : null == n ? -1 : n - l;
                              })
                        : [],
                [t, e, i],
            );
        })();
    return l.useMemo(() => {
        function e(e) {
            return !!(!x || "" === M || e.application.name.toLowerCase().includes(M.toLowerCase()));
        }
        let i = [...j].filter(e),
            t = new Set(i.map((e) => e.application.id));
        for (let l of k) !t.has(l.application.id) && e(l) && i.push(l);
        return i;
    }, [j, x, M, k]);
}
