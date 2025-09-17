n.d(t, { Z: () => y }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(704215),
    o = n(481060),
    s = n(809206),
    l = n(906732),
    c = n(243778),
    u = n(594928),
    d = n(829716),
    f = n(626135),
    _ = n(74538),
    p = n(993413),
    h = n(981631),
    m = n(921944),
    g = n(388032),
    E = n(62222),
    b = n(714892);
function y(e) {
    let { user: t, className: n } = e,
        y = u.J.useExperiment({ location: "DisplayNameStylesSection" }).enabled,
        O = _.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: v } = (0, l.ZP)(),
        I = null != t.displayNameStyles,
        T = [];
    y && T.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
    let [S, A] = (0, c.US)(T),
        C = S === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        N = (0, i.useCallback)(() => {
            A(m.L.TAKE_ACTION),
                f.default.track(h.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, d.I)({ analyticsLocations: v });
        }, [v, A]),
        R = (0, i.useCallback)(() => {
            (0, s.NI)(null), f.default.track(h.rMx.DISPLAY_NAME_STYLES_REMOVED);
        }, []);
    return y || I
        ? (0, r.jsx)(p.Z, {
              title: g.intl.string(E.default["86GtGB"]),
              titleIcon: C
                  ? (0, r.jsx)(o.IGR, {
                        text: g.intl.string(g.t.y2b7CA),
                        className: b.newBadge,
                    })
                  : void 0,
              className: n,
              showPremiumIcon: O,
              children: (0, r.jsxs)("div", {
                  className: b.buttonsContainer,
                  children: [
                      y &&
                          (0, r.jsx)(o.zxk, {
                              variant: "primary",
                              size: "sm",
                              text: g.intl.string(E.default.vJqrIi),
                              onClick: N,
                          }),
                      I &&
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              size: "sm",
                              text: g.intl.string(E.default.ymq8WV),
                              onClick: R,
                          }),
                  ],
              }),
          })
        : null;
}
