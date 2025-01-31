n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(366598),
    o = n(821864),
    d = n(905753),
    c = n(995390),
    u = n(469880),
    m = n(665578),
    h = n(388032),
    x = n(859600);
function p(e) {
    let { application: t, canNavigate: n, guildId: c } = e,
        m = (0, a.e7)([d.Z], () => d.Z.isUnavailable());
    return (l.useEffect(() => (o.I4(t.id), o.kZ), [t.id]),
    l.useEffect(() => {
        o.gq(t.id, c, t.id), o.Sn(c, t.id);
    }, [t.id, c]),
    m)
        ? null
        : (0, i.jsxs)(l.Fragment, {
              children: [
                  (0, i.jsx)(s.Z, {
                      icon: (0, i.jsx)(r.SsZ, {
                          size: 'md',
                          color: 'currentColor'
                      }),
                      title: h.intl.string(h.t.RGoJND)
                  }),
                  (0, i.jsx)(r.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: h.intl.string(h.t.sCkD3d)
                  }),
                  (0, i.jsx)(g, {
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
function g(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: l, editedTargetPermissions: a, selectedPermissionCount: r } = (0, c.Z)(n, t);
    return (0, i.jsx)('div', {
        className: x.applicationPermissions,
        children: (0, i.jsx)(m.Z, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: a,
            originalApplicationPermissions: l,
            selectedPermissionCount: r
        })
    });
}
