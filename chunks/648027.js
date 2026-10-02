(i.d(t, { A: () => _ }), i(321073));
var l = i(582128),
    n = i(17928),
    a = i(10716),
    r = i(991690),
    s = i(429913),
    o = i(457408),
    d = i(287809),
    p = i(147964),
    c = i(403362),
    u = i(723702),
    f = i(933958),
    A = i(847381),
    m = i(155718),
    b = i(594061),
    g = i(818023);
function _(e) {
    var t;
    let i,
        _,
        h,
        y,
        v,
        E,
        C,
        w,
        I,
        { guildId: N, enableFilter: k = !1 } = e,
        { filter: M } = (0, n.cf)([a.A], () => ({ filter: a.A.getFilter() })),
        x =
            ((i = (0, n.bG)([d.default], d.default.getCurrentUser)),
            (_ = (0, n.yK)([f.Ay], () => f.Ay.getShelfActivities(N))),
            (h = (0, n.bG)([p.A], () => p.A.testModeEmbeddedApplicationId)),
            (y = _.map((e) => e.application_id)),
            (v = null != h ? [h, ...y] : y),
            (E = (0, s.A)(v)),
            (C = l.useMemo(() => E.filter(c.Vq), [E])),
            (w = l.useMemo(
                () =>
                    null != h &&
                    C.length > 0 &&
                    C[0].id === h &&
                    C[0].supportsEmbeddedSurface(r.U.MAIN) &&
                    null != C[0].embeddedActivityConfig
                        ? [{ activity: C[0].embeddedActivityConfig, application: C[0] }]
                        : [],
                [C, h],
            )),
            (I = l.useMemo(
                () =>
                    _.map((e) => {
                        let t = C.find((t) => t.id === e.application_id);
                        return null == t ? null : { activity: e, application: t };
                    }).filter(c.Vq),
                [_, C],
            )),
            (t = l.useMemo(
                () =>
                    [...w, ...I]
                        .filter((e) => {
                            let { activity: t } = e;
                            return (t.supported_platforms ?? []).includes((0, A.A)((0, u.getOS)()));
                        })
                        .filter((e) => {
                            let { activity: t } = e;
                            return !t.requires_age_gate || i?.nsfwAllowed === !0 || i?.nsfwAllowed == null;
                        })
                        .filter((e) => {
                            let { application: t } = e;
                            return !(i?.nsfwAllowed === !1 && (0, o.A)(t.id));
                        }),
                [i?.nsfwAllowed, I, w],
            )),
            b.bW.loadIfNecessary(),
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
                            (l.splice(t, 1), (l = [...l.slice(0, n), e, ...l.slice(n)]), ++n);
                        }
                    }),
                    l
                        .map((e, t) => [e, t])
                        .filter((e) => {
                            let [t] = e,
                                i =
                                    t.application.embeddedActivityConfig?.client_platform_config[
                                        (0, A.A)((0, u.getOS)())
                                    ]?.label_type;
                            return null != i && (i === m.Hr.NEW || i === m.Hr.UPDATED);
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
                                (l.splice(i, 1), (l = [...l.slice(0, n), e, ...l.slice(n)]));
                            }
                        }),
                    l
                );
            }, [t])),
        H = (function () {
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
                                  activity: { ...g.Gl, ...e.embeddedActivityConfig, application_id: e.id },
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
            return !!(!k || "" === M || e.application.name.toLowerCase().includes(M.toLowerCase()));
        }
        let t = [...H].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let l of x) !i.has(l.application.id) && e(l) && t.push(l);
        return t;
    }, [H, k, M, x]);
}
