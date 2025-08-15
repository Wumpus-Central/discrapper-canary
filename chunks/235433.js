n.d(t, { Z: () => j }), n(539854), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(704215),
    a = n(481060),
    l = n(809206),
    o = n(906732),
    c = n(243778),
    d = n(594928),
    u = n(829716),
    m = n(626135),
    p = n(74538),
    g = n(993413),
    h = n(981631),
    f = n(921944),
    b = n(388032),
    x = n(693450),
    _ = n(147164);
function j(e) {
    let { user: t, className: n } = e,
        j = d.J.useExperiment({ location: "DisplayNameStylesSection" }).enabled,
        E = p.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: C } = (0, o.ZP)(),
        O = null != t.displayNameStyles,
        v = [];
    j && v.push(s.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
    let [S, T] = (0, c.US)(v),
        N = S === s.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        I = (0, r.useCallback)(() => {
            T(f.L.TAKE_ACTION),
                m.default.track(h.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, u.I)({ analyticsLocations: C });
        }, [C, T]),
        y = (0, r.useCallback)(() => {
            (0, l.NI)(null), m.default.track(h.rMx.DISPLAY_NAME_STYLES_REMOVED);
        }, []);
    return j || O
        ? (0, i.jsx)(g.Z, {
              title: b.intl.string(x.default["86GtGB"]),
              titleIcon: N
                  ? (0, i.jsx)(a.IGR, {
                        text: b.intl.string(b.t.y2b7CA),
                        className: _.newBadge,
                    })
                  : void 0,
              className: n,
              showPremiumIcon: E,
              children: (0, i.jsxs)("div", {
                  className: _.buttonsContainer,
                  children: [
                      j &&
                          (0, i.jsx)(a.zxk, {
                              variant: "primary",
                              size: "sm",
                              text: b.intl.string(x.default.vJqrIi),
                              onClick: I,
                          }),
                      O &&
                          (0, i.jsx)(a.zxk, {
                              variant: "secondary",
                              size: "sm",
                              text: b.intl.string(x.default.ymq8WV),
                              onClick: y,
                          }),
                  ],
              }),
          })
        : null;
}
