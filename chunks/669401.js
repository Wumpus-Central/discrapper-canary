var a = t(200651),
    i = t(192379),
    r = t(149765),
    l = t(481060),
    o = t(995648),
    s = t(422559),
    c = t(388032),
    d = t(878744);
n.Z = function (e) {
    var n;
    let { application: t } = e,
        u = i.useMemo(() => {
            var e;
            let n = null == t ? void 0 : null === (e = t.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != n) return s.VY.filter((e) => r.e$(r.vB(n), e));
        }, [null == t ? void 0 : null === (n = t.install_params) || void 0 === n ? void 0 : n.permissions]);
    return null != u && u.length > 0
        ? (0, a.jsxs)('div', {
              className: d.sectionContainer,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: c.intl.string(c.t.runNFx)
                  }),
                  (0, a.jsx)(o.Z, {
                      className: d.contentContainer,
                      grantedPermissions: u,
                      grantedPermissionsHeader: c.intl.string(c.t.SLgiND)
                  })
              ]
          })
        : null;
};
