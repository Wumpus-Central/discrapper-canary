n.d(t, { Z: () => p });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(594928),
    l = n(922626),
    o = n(74538),
    c = n(993413),
    d = n(388032),
    u = n(698282),
    m = n(401609);
function p(e) {
    let { user: t, className: n } = e,
        p = a.J.useExperiment({ location: 'DisplayNameStylesSection' }).enabled,
        g = o.ZP.canUsePremiumProfileCustomization(t),
        h = null != t.displayNameStyles,
        { handleApplyDisplayNameStyles: f, isApplying: b } = (0, l.Z)({}),
        x = (0, r.useCallback)(() => {}, []),
        _ = (0, r.useCallback)(() => {
            f(null);
        }, [f]);
    return p || h
        ? (0, i.jsx)(c.Z, {
              title: d.intl.string(u.default['86GtGB']),
              className: n,
              showPremiumIcon: g,
              children: (0, i.jsxs)('div', {
                  className: m.buttonsContainer,
                  children: [
                      p &&
                          (0, i.jsx)(s.zxk, {
                              variant: 'primary',
                              size: 'sm',
                              text: d.intl.string(u.default.vJqrIi),
                              onClick: x
                          }),
                      h &&
                          (0, i.jsx)(s.zxk, {
                              variant: 'secondary',
                              size: 'sm',
                              text: d.intl.string(u.default.ymq8WV),
                              onClick: _,
                              loading: b
                          })
                  ]
              })
          })
        : null;
}
