n.d(t, { o: () => d });
var i = n(17928),
    r = n(587895),
    a = n(994500),
    s = n(427262),
    l = n(420825),
    o = n(375708);
function d(e) {
    let { user: t, applicationId: n, isGameRelationship: d } = e,
        c = (0, i.bG)([a.A], () => a.A.getNickname(t.id)),
        u = s.Ay.useName(t),
        _ = s.Ay.useUserTag(t),
        E = (0, i.bG)([r.A], () => (null != n ? r.A.getApplication(n) : null)),
        A = (0, l.z)(t.id);
    return t.isProvisional
        ? { displayName: c ?? u, subLabel: null, application: E, applicationName: E?.name ?? null, note: null }
        : {
              displayName: c ?? u,
              subLabel: d ? o.intl.string(o.t["Uv/eTx"]) : _,
              application: E,
              applicationName: E?.name ?? null,
              note: A,
          };
}
