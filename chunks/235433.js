n.d(t, { Z: () => b });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(809206),
    l = n(906732),
    o = n(594928),
    c = n(829716),
    d = n(626135),
    u = n(74538),
    m = n(993413),
    p = n(981631),
    g = n(388032),
    h = n(693450),
    f = n(147164);
function b(e) {
    let { user: t, className: n } = e,
        b = o.J.useExperiment({ location: "DisplayNameStylesSection" }).enabled,
        x = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: _ } = (0, l.ZP)(),
        j = null != t.displayNameStyles,
        E = (0, r.useCallback)(() => {
            d.default.track(p.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, c.I)({ analyticsLocations: _ });
        }, [_]),
        C = (0, r.useCallback)(() => {
            (0, a.NI)(null), d.default.track(p.rMx.DISPLAY_NAME_STYLES_REMOVED);
        }, []);
    return b || j
        ? (0, i.jsx)(m.Z, {
              title: g.intl.string(h.default["86GtGB"]),
              className: n,
              showPremiumIcon: x,
              children: (0, i.jsxs)("div", {
                  className: f.buttonsContainer,
                  children: [
                      b &&
                          (0, i.jsx)(s.zxk, {
                              variant: "primary",
                              size: "sm",
                              text: g.intl.string(h.default.vJqrIi),
                              onClick: E,
                          }),
                      j &&
                          (0, i.jsx)(s.zxk, {
                              variant: "secondary",
                              size: "sm",
                              text: g.intl.string(h.default.ymq8WV),
                              onClick: C,
                          }),
                  ],
              }),
          })
        : null;
}
