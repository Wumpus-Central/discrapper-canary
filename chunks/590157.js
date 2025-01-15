n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(366598),
    s = n(821864),
    d = n(905753),
    c = n(995390),
    u = n(469880),
    m = n(665578),
    h = n(388032),
    p = n(3227);
function g(e) {
    let { application: t, canNavigate: n, guildId: c } = e,
        m = (0, r.e7)([d.Z], () => d.Z.isUnavailable());
    return (l.useEffect(() => (s.I4(t.id), s.kZ), [t.id]),
    l.useEffect(() => {
        s.gq(t.id, c, t.id), s.Sn(c, t.id);
    }, [t.id, c]),
    m)
        ? null
        : (0, i.jsxs)(l.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      icon: (0, i.jsx)(a.SlashBoxIcon, {
                          size: 'md',
                          color: 'currentColor'
                      }),
                      title: h.intl.string(h.t.RGoJND)
                  }),
                  (0, i.jsx)(a.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: h.intl.string(h.t.sCkD3d)
                  }),
                  (0, i.jsx)(x, {
                      guildId: c,
                      applicationId: t.id
                  }),
                  (0, i.jsx)(u.Z, {
                      applicationIcon: t.icon,
                      applicationName: t.name,
                      canNavigate: n,
                      guildId: c
                  })
              ]
          });
}
function x(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: l, editedTargetPermissions: r, selectedPermissionCount: a } = (0, c.Z)(n, t);
    return (0, i.jsx)('div', {
        className: p.applicationPermissions,
        children: (0, i.jsx)(m.Z, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: r,
            originalApplicationPermissions: l,
            selectedPermissionCount: a
        })
    });
}
