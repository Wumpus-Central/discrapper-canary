n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(594928),
    a = n(74538),
    l = n(993413),
    o = n(388032),
    c = n(698282),
    d = n(401609);
function u(e) {
    let { user: t, className: n } = e,
        u = s.J.useExperiment({ location: 'DisplayNameStylesSection' }).enabled,
        m = a.ZP.canUsePremiumProfileCustomization(t),
        p = null != t.displayNameStyles;
    return u
        ? (0, i.jsx)(l.Z, {
              title: o.intl.string(c.default['86GtGB']),
              className: n,
              showPremiumIcon: m,
              children: (0, i.jsxs)('div', {
                  className: d.buttonsContainer,
                  children: [
                      (0, i.jsx)(r.zxk, {
                          variant: 'primary',
                          size: 'sm',
                          text: o.intl.string(c.default.vJqrIi),
                          onClick: () => {}
                      }),
                      p &&
                          (0, i.jsx)(r.zxk, {
                              variant: 'secondary',
                              size: 'sm',
                              text: o.intl.string(c.default.ymq8WV),
                              onClick: () => {}
                          })
                  ]
              })
          })
        : null;
}
