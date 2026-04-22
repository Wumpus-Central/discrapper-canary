n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(633018),
    r = n(834730),
    o = n(998874),
    d = n(542580),
    c = n(803378),
    u = n(825453),
    m = n(602418),
    g = n(2655),
    h = n(985018),
    x = n(830662);
function p(e) {
    let { application: t, canNavigate: n, guildId: u } = e,
        g = (0, s.bG)([c.A], () => c.A.isUnavailable());
    return (l.useEffect(() => (d.hu(t.id), d.AL), [t.id]),
    l.useEffect(() => {
        d.gV(t.id, u, t.id), d.Jw(u, t.id);
    }, [t.id, u]),
    g)
        ? null
        : (0, i.jsxs)(l.Fragment, {
              children: [
                  (0, i.jsx)(o.A, {
                      icon: (0, i.jsx)(a.k, { size: "md", color: "currentColor" }),
                      title: h.intl.string(h.t.RGoJNN),
                  }),
                  (0, i.jsx)(r.E, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: h.intl.string(h.t.sCkD3Z),
                  }),
                  (0, i.jsx)(A, { guildId: u, applicationId: t.id }),
                  (0, i.jsx)(m.A, { applicationIcon: t.icon, applicationName: t.name, canNavigate: n, guildId: u }),
              ],
          });
}
function A(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: l, editedTargetPermissions: s, selectedPermissionCount: a } = (0, u.A)(n, t);
    return (0, i.jsx)("div", {
        className: x.zi,
        children: (0, i.jsx)(g.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: l,
            selectedPermissionCount: a,
        }),
    });
}
