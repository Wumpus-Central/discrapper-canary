n.d(t, {
    A: () => m,
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(998874),
    o = n(542580),
    c = n(803378),
    d = n(825453),
    u = n(602418),
    b = n(2655),
    f = n(985018),
    p = n(199271);

function m(e) {
    let { application: t, canNavigate: n, guildId: d } = e,
        b = (0, l.bG)([c.A], () => c.A.isUnavailable());
    return (r.useEffect(() => (o.hu(t.id), o.AL), [t.id]),
    r.useEffect(() => {
        o.gV(t.id, d, t.id), o.Jw(d, t.id);
    }, [t.id, d]),
    b)
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  (0, i.jsx)(s.A, {
                      icon: (0, i.jsx)(a.kC9, {
                          size: "md",
                          color: "currentColor",
                      }),
                      title: f.intl.string(f.t.RGoJNN),
                  }),
                  (0, i.jsx)(a.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: f.intl.string(f.t.sCkD3Z),
                  }),
                  (0, i.jsx)(g, {
                      guildId: d,
                      applicationId: t.id,
                  }),
                  (0, i.jsx)(u.A, {
                      applicationIcon: t.icon,
                      applicationName: t.name,
                      canNavigate: n,
                      guildId: d,
                  }),
              ],
          });
}

function g(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: r, editedTargetPermissions: l, selectedPermissionCount: a } = (0, d.A)(n, t);
    return (0, i.jsx)("div", {
        className: p.zi,
        children: (0, i.jsx)(b.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: l,
            originalApplicationPermissions: r,
            selectedPermissionCount: a,
        }),
    });
}
