i.d(t, { A: () => g }), i(321073);
var l = i(64700),
    n = i(17928),
    a = i(10716),
    r = i(429913),
    s = i(457408),
    o = i(287809),
    d = i(147964),
    p = i(403362),
    c = i(723702),
    u = i(933958),
    f = i(847381),
    A = i(155718),
    m = i(594061),
    b = i(360469);
function g(e) {
    var t;
    let i,
        g,
        _,
        h,
        y,
        v,
        E,
        C,
        w,
        { guildId: I, enableFilter: N = !1 } = e,
        { filter: k } = (0, n.cf)([a.A], () => ({ filter: a.A.getFilter() })),
        x =
            ((i = (0, n.bG)([o.default], o.default.getCurrentUser)),
            (g = (0, n.yK)([u.Ay], () => u.Ay.getShelfActivities(I))),
            (_ = (0, n.bG)([d.A], () => d.A.testModeEmbeddedApplicationId)),
            (h = g.map((e) => e.application_id)),
            (y = null != _ ? [_, ...h] : h),
            (v = (0, r.A)(y)),
            (E = l.useMemo(() => v.filter(p.Vq), [v])),
            (C = l.useMemo(
                () =>
                    null != _ && E.length > 0 && E[0].id === _ && null != E[0].embeddedActivityConfig
                        ? [{ activity: E[0].embeddedActivityConfig, application: E[0] }]
                        : [],
                [E, _],
            )),
            (w = l.useMemo(
                () =>
                    g
                        .map((e) => {
                            let t = E.find((t) => t.id === e.application_id);
                            return null == t ? null : { activity: e, application: t };
                        })
                        .filter(p.Vq),
                [g, E],
            )),
            (t = l.useMemo(
                () =>
                    [...C, ...w]
                        .filter((e) => {
                            let { activity: t } = e;
                            return (t.supported_platforms ?? []).includes((0, f.A)((0, c.getOS)()));
                        })
                        .filter((e) => {
                            let { activity: t } = e;
                            return !t.requires_age_gate || i?.nsfwAllowed === !0 || i?.nsfwAllowed == null;
                        })
                        .filter((e) => {
                            let { application: t } = e;
                            return !(i?.nsfwAllowed === !1 && (0, s.A)(t.id));
                        }),
                [i?.nsfwAllowed, w, C],
            )),
            m.bW.loadIfNecessary(),
            l.useMemo(() => {
                var e, i;
                let l,
                    n,
                    a = [];
                t.forEach((e) => a.push(e.application.id));
                let r = [...a];
                return (
                    r.sort((e, t) => (a.findIndex((t) => t === e) < a.findIndex((e) => e === t) ? -1 : 1)),
                    (e = t),
                    (i = r),
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
                                        (0, f.A)((0, c.getOS)())
                                    ]?.label_type;
                            return null != i && (i === A.Hr.NEW || i === A.Hr.UPDATED);
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
        M = (() => {
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
                                  activity: { ...b.Gl, ...e.embeddedActivityConfig, application_id: e.id },
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
        let t = [...M].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let l of x) !i.has(l.application.id) && e(l) && t.push(l);
        return t;
    }, [M, N, k, x]);
}
