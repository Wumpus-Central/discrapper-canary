i.d(t, { A: () => b }), i(321073);
var l = i(64700),
    n = i(17928),
    a = i(10716),
    s = i(429913),
    r = i(287809),
    o = i(147964),
    d = i(403362),
    p = i(723702),
    c = i(933958),
    u = i(847381),
    f = i(155718),
    m = i(594061),
    A = i(360469);
function b(e) {
    var t;
    let i,
        b,
        g,
        _,
        h,
        y,
        v,
        E,
        C,
        { guildId: I, enableFilter: N = !1 } = e,
        { filter: k } = (0, n.cf)([a.A], () => ({ filter: a.A.getFilter() })),
        w =
            ((i = (0, n.bG)([r.default], r.default.getCurrentUser)),
            (b = (0, n.yK)([c.Ay], () => c.Ay.getShelfActivities(I))),
            (g = (0, n.bG)([o.A], () => o.A.testModeEmbeddedApplicationId)),
            (_ = b.map((e) => e.application_id)),
            (h = null != g ? [g, ..._] : _),
            (y = (0, s.A)(h)),
            (v = l.useMemo(() => y.filter(d.Vq), [y])),
            (E = l.useMemo(
                () =>
                    null != g && v.length > 0 && v[0].id === g && null != v[0].embeddedActivityConfig
                        ? [{ activity: v[0].embeddedActivityConfig, application: v[0] }]
                        : [],
                [v, g],
            )),
            (C = l.useMemo(
                () =>
                    b
                        .map((e) => {
                            let t = v.find((t) => t.id === e.application_id);
                            return null == t ? null : { activity: e, application: t };
                        })
                        .filter(d.Vq),
                [b, v],
            )),
            (t = l.useMemo(
                () =>
                    [...E, ...C]
                        .filter((e) => {
                            let { activity: t } = e;
                            return (t.supported_platforms ?? []).includes((0, u.A)((0, p.getOS)()));
                        })
                        .filter((e) => {
                            let { activity: t } = e;
                            return !t.requires_age_gate || i?.nsfwAllowed === !0 || i?.nsfwAllowed == null;
                        }),
                [i?.nsfwAllowed, C, E],
            )),
            m.bW.loadIfNecessary(),
            l.useMemo(() => {
                var e, i;
                let l,
                    n,
                    a = [];
                t.forEach((e) => a.push(e.application.id));
                let s = [...a];
                return (
                    s.sort((e, t) => (a.findIndex((t) => t === e) < a.findIndex((e) => e === t) ? -1 : 1)),
                    (e = t),
                    (i = s),
                    (l = [...e]),
                    (n = 0),
                    i.forEach((e) => {
                        let t = l.findIndex((t) => t.application.id === e);
                        if (-1 !== t) {
                            let e = l[t];
                            l.splice(t, 1), (l = [...l.slice(0, n), e, ...l.slice(n)]), ++n;
                        }
                    }),
                    l
                        .map((e, t) => [e, t])
                        .filter((e) => {
                            let [t] = e,
                                i =
                                    t.application.embeddedActivityConfig?.client_platform_config[
                                        (0, u.A)((0, p.getOS)())
                                    ]?.label_type;
                            return null != i && (i === f.Hr.NEW || i === f.Hr.UPDATED);
                        })
                        .forEach((e) => {
                            let [t, i] = e,
                                n =
                                    null != t.application.embeddedActivityConfig &&
                                    null != t.application.embeddedActivityConfig.shelf_rank
                                        ? t.application.embeddedActivityConfig.shelf_rank - 1
                                        : i;
                            if (n < i) {
                                let e = l[i];
                                l.splice(i, 1), (l = [...l.slice(0, n), e, ...l.slice(n)]);
                            }
                        }),
                    l
                );
            }, [t])),
        x = (() => {
            let { isEnabled: e, lastUsedObject: t } = (0, n.cf)(
                    [a.A],
                    () => ({ isEnabled: a.A.getIsEnabled(), lastUsedObject: a.A.getLastUsedObject() }),
                    [],
                ),
                i = (0, n.yK)([a.A], () => a.A.getDeveloperShelfItems(), []);
            return l.useMemo(
                () =>
                    e
                        ? i
                              .map((e) => ({
                                  application: e,
                                  activity: { ...A.Gl, ...e.embeddedActivityConfig, application_id: e.id },
                              }))
                              .sort((e, i) => {
                                  let l = t[e.application.id],
                                      n = t[i.application.id];
                                  return null == l ? 1 : null == n ? -1 : n - l;
                              })
                        : [],
                [i, e, t],
            );
        })();
    return l.useMemo(() => {
        function e(e) {
            return !!(!N || "" === k || e.application.name.toLowerCase().includes(k.toLowerCase()));
        }
        let t = [...x].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let l of w) !i.has(l.application.id) && e(l) && t.push(l);
        return t;
    }, [x, N, k, w]);
}
