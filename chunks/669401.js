n.d(t, { Z: () => u });
var i = n(200651),
    a = n(192379),
    r = n(149765),
    l = n(481060),
    s = n(995648),
    o = n(422559),
    c = n(388032),
    d = n(59184);
let u = function (e) {
    var t;
    let { application: n } = e,
        u = a.useMemo(() => {
            var e;
            let t = null == n ? void 0 : null === (e = n.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return o.VY.filter((e) => r.e$(r.vB(t), e));
        }, [null == n ? void 0 : null === (t = n.install_params) || void 0 === t ? void 0 : t.permissions]);
    return null != u && u.length > 0
        ? (0, i.jsxs)('div', {
              className: d.sectionContainer,
              children: [
                  (0, i.jsx)(l.X6q, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: c.intl.string(c.t.runNFx)
                  }),
                  (0, i.jsx)(s.Z, {
                      className: d.contentContainer,
                      grantedPermissions: u,
                      grantedPermissionsHeader: c.intl.string(c.t.SLgiND)
                  })
              ]
          })
        : null;
};
