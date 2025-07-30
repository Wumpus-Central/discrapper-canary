n.d(t, { Z: () => g });
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(366598),
    s = n(821864),
    c = n(905753),
    d = n(995390),
    u = n(469880),
    p = n(665578),
    m = n(388032),
    b = n(883685);
function g(e) {
    let { application: t, canNavigate: n, guildId: d } = e,
        p = (0, l.e7)([c.Z], () => c.Z.isUnavailable());
    return (r.useEffect(() => (s.I4(t.id), s.kZ), [t.id]),
    r.useEffect(() => {
        (s.gq(t.id, d, t.id), s.Sn(d, t.id));
    }, [t.id, d]),
    p)
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  (0, i.jsx)(a.Z, {
                      icon: (0, i.jsx)(o.SsZ, {
                          size: 'md',
                          color: 'currentColor'
                      }),
                      title: m.intl.string(m.t.RGoJND)
                  }),
                  (0, i.jsx)(o.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: m.intl.string(m.t.sCkD3d)
                  }),
                  (0, i.jsx)(f, {
                      guildId: d,
                      applicationId: t.id
                  }),
                  (0, i.jsx)(u.Z, {
                      applicationIcon: t.icon,
                      applicationName: t.name,
                      canNavigate: n,
                      guildId: d
                  })
              ]
          });
}
function f(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: r, editedTargetPermissions: l, selectedPermissionCount: o } = (0, d.Z)(n, t);
    return (0, i.jsx)('div', {
        className: b.applicationPermissions,
        children: (0, i.jsx)(p.Z, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: l,
            originalApplicationPermissions: r,
            selectedPermissionCount: o
        })
    });
}
