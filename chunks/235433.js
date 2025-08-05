n.d(t, { Z: () => h });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(906732),
    l = n(594928),
    o = n(922626),
    c = n(829716),
    d = n(74538),
    u = n(993413),
    m = n(388032),
    p = n(698282),
    g = n(401609);
function h(e) {
    let { user: t, className: n } = e,
        h = l.J.useExperiment({ location: 'DisplayNameStylesSection' }).enabled,
        f = d.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: b } = (0, a.ZP)(),
        x = null != t.displayNameStyles,
        { handleApplyDisplayNameStyles: _, isApplying: j } = (0, o.Z)({}),
        C = (0, r.useCallback)(() => {
            (0, c.I)({ analyticsLocations: b });
        }, [b]),
        E = (0, r.useCallback)(() => {
            _(null);
        }, [_]);
    return h || x
        ? (0, i.jsx)(u.Z, {
              title: m.intl.string(p.default['86GtGB']),
              className: n,
              showPremiumIcon: f,
              children: (0, i.jsxs)('div', {
                  className: g.buttonsContainer,
                  children: [
                      h &&
                          (0, i.jsx)(s.zxk, {
                              variant: 'primary',
                              size: 'sm',
                              text: m.intl.string(p.default.vJqrIi),
                              onClick: C
                          }),
                      x &&
                          (0, i.jsx)(s.zxk, {
                              variant: 'secondary',
                              size: 'sm',
                              text: m.intl.string(p.default.ymq8WV),
                              onClick: E,
                              loading: j
                          })
                  ]
              })
          })
        : null;
}
