n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(906732),
    a = n(594928),
    l = n(829716),
    o = n(74538),
    c = n(993413),
    d = n(388032),
    u = n(698282),
    m = n(401609);
function p(e) {
    let { user: t, className: n } = e,
        p = a.J.useExperiment({ location: 'DisplayNameStylesSection' }).enabled,
        g = o.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: h } = (0, s.ZP)(),
        f = null != t.displayNameStyles;
    return p
        ? (0, i.jsx)(c.Z, {
              title: d.intl.string(u.default['86GtGB']),
              className: n,
              showPremiumIcon: g,
              children: (0, i.jsxs)('div', {
                  className: m.buttonsContainer,
                  children: [
                      (0, i.jsx)(r.zxk, {
                          variant: 'primary',
                          size: 'sm',
                          text: d.intl.string(u.default.vJqrIi),
                          onClick: () => {
                              (0, l.I)({ analyticsLocations: h });
                          }
                      }),
                      f &&
                          (0, i.jsx)(r.zxk, {
                              variant: 'secondary',
                              size: 'sm',
                              text: d.intl.string(u.default.ymq8WV),
                              onClick: () => {}
                          })
                  ]
              })
          })
        : null;
}
