n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(149765),
    l = n(481060),
    s = n(995648),
    o = n(422559),
    c = n(388032),
    d = n(859708);
let u = function (e) {
    var t;
    let { application: n } = e,
        u = i.useMemo(() => {
            var e;
            let t = null == n || null == (e = n.install_params) ? void 0 : e.permissions;
            if (null != t) return o.VY.filter((e) => a.e$(a.vB(t), e));
        }, [null == n || null == (t = n.install_params) ? void 0 : t.permissions]);
    return null != u && u.length > 0
        ? (0, r.jsxs)('div', {
              className: d.sectionContainer,
              children: [
                  (0, r.jsx)(l.X6q, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: c.intl.string(c.t.runNFx)
                  }),
                  (0, r.jsx)(s.Z, {
                      className: d.contentContainer,
                      grantedPermissions: u,
                      grantedPermissionsHeader: c.intl.string(c.t.SLgiND)
                  })
              ]
          })
        : null;
};
