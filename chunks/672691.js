l.d(n, { A: () => c });
var t = l(64700),
    i = l(573648),
    s = l(941314),
    a = l(429913),
    r = l(321078),
    o = l(403362),
    d = l(484509);
function c(e) {
    let { filteredAppIdentities: n } = (0, r.A)(e),
        l = (0, d.A)(e),
        c = s.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
        u = t.useMemo(() => new Set(c.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, c.enabled]),
        m = (0, a.A)([...u]).filter(o.Vq);
    return {
        appIdentities: t.useMemo(
            () =>
                n
                    .map((e) => ({ identity: e, application: m.find((n) => n.id === e.application_id) }))
                    .filter((e) => {
                        let { application: n } = e;
                        return null != n;
                    }),
            [n, m],
        ),
        connections: t.useMemo(
            () =>
                c.enabled
                    ? l.filter((e) => {
                          let n = i.A.get(e.type);
                          return n?.replacedBy == null || !u.has(n.replacedBy);
                      })
                    : l,
            [l, u, c.enabled],
        ),
    };
}
