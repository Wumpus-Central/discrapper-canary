t.d(n, { A: () => u });
var l = t(64700),
    i = t(573648),
    r = t(941314),
    a = t(429913),
    s = t(321078),
    o = t(403362),
    d = t(484509);
function u(e) {
    let { filteredAppIdentities: n } = (0, s.A)(e),
        t = (0, d.A)(e),
        u = r.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
        c = l.useMemo(() => new Set(u.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, u.enabled]),
        g = (0, a.A)([...c]).filter(o.Vq);
    return {
        appIdentities: l.useMemo(
            () =>
                n
                    .map((e) => ({ identity: e, application: g.find((n) => n.id === e.application_id) }))
                    .filter((e) => {
                        let { application: n } = e;
                        return null != n;
                    }),
            [n, g],
        ),
        connections: l.useMemo(
            () =>
                u.enabled
                    ? t.filter((e) => {
                          let n = i.A.get(e.type);
                          return n?.replacedBy == null || !c.has(n.replacedBy);
                      })
                    : t,
            [t, c, u.enabled],
        ),
    };
}
