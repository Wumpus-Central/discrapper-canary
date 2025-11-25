n.d(t, { n: () => j });
var a = n(54381),
    l = n(473749),
    r = n(159691),
    i = n(336197),
    s = n(612659),
    o = n(313789),
    c = n(518596),
    d = n(323183),
    u = n(5900),
    m = n(299886),
    p = n(37279),
    h = n(773275),
    x = n(981631),
    g = n(163646),
    f = n(388032),
    b = n(742098),
    v = n(932889);
let j = (e) => {
    let { onClose: t } = e,
        n = (0, s.m)(),
        {
            installationStatus: j,
            perkAvailableToUser: _,
            isSupportedPrivateBrowsingPerkPlatform: y,
            isWeb: C,
            connectionStatus: S,
        } = (0, h.xf)(),
        { enabled: E } = m.H.useConfig({ location: "private_browsing_perk_settings_page" }),
        N = (0, l.useCallback)(() => {
            (0, i.Z)(x.Z5c.NITRO_HOME), t();
        }, [t]),
        T = (0, l.useCallback)(() => {
            (0, c.openUserSettings)(o.n.PRIVATE_BROWSING_PANEL, { section: x.oAB.CF_WARP });
        }, []),
        O = [u.Ij.CONNECTED].includes(S),
        P = y && E && ![u._n.ZERO_TRUST, u._n.ERROR].includes(j) && !C && (!n || _),
        I = (0, l.useMemo)(() => {
            switch (S) {
                case u.Ij.CONNECTED:
                    return f.intl.string(g.default.FBu3XJ);
                case u.Ij.INITIALIZING:
                    return f.intl.string(g.default["00vkCU"]);
                default:
                    return f.intl.string(g.default["A70/wR"]);
            }
        }, [S]),
        w = (0, l.useMemo)(() => {
            if (!_) return f.intl.string(g.default.KN6HOb);
            switch (j) {
                case u._n.INSTALLED:
                case u._n.EXISTING_INSTALLATION:
                    return I;
                default:
                    return f.intl.string(g.default.KN6HOb);
            }
        }, [j, _, I]),
        k = (0, l.useMemo)(() => {
            if (!_)
                return (0, a.jsx)(r.xvT, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children: f.intl.format(g.default["0UfKTY"], { helpdeskArticle: d.w }),
                });
            switch (j) {
                case u._n.INSTALLED:
                case u._n.EXISTING_INSTALLATION:
                    return (0, a.jsx)(r.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: O
                            ? f.intl.format(g.default.zwW10o, {
                                  onClick: () => {
                                      N();
                                  },
                              })
                            : f.intl.format(g.default.D4hu0v, {
                                  onClick: () => {
                                      T();
                                  },
                              }),
                    });
                default:
                    return (0, a.jsx)(r.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: f.intl.format(g.default.D4hu0v, {
                            onClick: () => {
                                T();
                            },
                        }),
                    });
            }
        }, [j, _, O, T, N]);
    return P
        ? (0, a.jsxs)("div", {
              className: b.container,
              children: [
                  (0, a.jsx)(p.v, { className: b.betaBadge }),
                  (0, a.jsx)(r.$1m, {
                      color: "nitro-pink",
                      offsetBottom: -0.5,
                      className: b.gradientBackground,
                      children: (0, a.jsxs)("div", {
                          className: b.contentContainer,
                          children: [
                              (0, a.jsx)("img", {
                                  src: v,
                                  className: b.graphicContainer,
                                  alt: "Private Browsing Perk",
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.details,
                                  children: [
                                      (0, a.jsx)(r.X6q, {
                                          variant: "heading-md/semibold",
                                          children: w,
                                      }),
                                      k,
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
};
