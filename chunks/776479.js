n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(998874),
    o = n(542580),
    d = n(803378),
    c = n(825453),
    u = n(602418),
    m = n(2655),
    g = n(985018),
    x = n(199271);
function h(e) {
    let { application: t, canNavigate: n, guildId: c } = e,
        m = (0, s.bG)([d.A], () => d.A.isUnavailable());
    return (l.useEffect(() => (o.hu(t.id), o.AL), [t.id]),
    l.useEffect(() => {
        o.gV(t.id, c, t.id), o.Jw(c, t.id);
    }, [t.id, c]),
    m)
        ? null
        : (0, i.jsxs)(l.Fragment, {
              children: [
                  (0, i.jsx)(r.A, {
                      icon: (0, i.jsx)(a.kC9, { size: "md", color: "currentColor" }),
                      title: g.intl.string(g.t.RGoJNN),
                  }),
                  (0, i.jsx)(a.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: g.intl.string(g.t.sCkD3Z),
                  }),
                  (0, i.jsx)(p, { guildId: c, applicationId: t.id }),
                  (0, i.jsx)(u.A, { applicationIcon: t.icon, applicationName: t.name, canNavigate: n, guildId: c }),
              ],
          });
}
function p(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: l, editedTargetPermissions: s, selectedPermissionCount: a } = (0, c.A)(n, t);
    return (0, i.jsx)("div", {
        className: x.zi,
        children: (0, i.jsx)(m.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: l,
            selectedPermissionCount: a,
        }),
    });
}
