n.d(t, { n: () => E });
var a = n(54381),
    l = n(473749),
    i = n(159691),
    r = n(594421),
    s = n(100527),
    o = n(906732),
    c = n(336197),
    d = n(612659),
    u = n(313789),
    m = n(518596),
    p = n(626135),
    h = n(323183),
    x = n(5900),
    f = n(299886),
    g = n(37279),
    b = n(773275),
    v = n(981631),
    j = n(474936),
    _ = n(163646),
    y = n(388032),
    C = n(742098),
    S = n(932889);
let E = (e) => {
    let { onClose: t } = e,
        n = (0, d.m)(),
        {
            installationStatus: E,
            perkAvailableToUser: T,
            isSupportedPrivateBrowsingPerkPlatform: N,
            isWeb: O,
            connectionStatus: P,
        } = (0, b.xf)(),
        { enabled: I } = f.H.useConfig({ location: "private_browsing_perk_settings_page" }),
        w = (0, l.useCallback)(() => {
            (0, c.Z)(v.Z5c.NITRO_HOME), t();
        }, [t]),
        k = (0, l.useCallback)(() => {
            (0, m.openUserSettings)(u.n.PRIVATE_BROWSING_PANEL, { section: v.oAB.CF_WARP });
        }, []),
        R = [x.Ij.CONNECTED].includes(P),
        A = N && I && ![x._n.ZERO_TRUST, x._n.ERROR].includes(E) && !O && (!n || T),
        Z = (0, l.useMemo)(() => {
            switch (P) {
                case x.Ij.CONNECTED:
                    return y.intl.string(_.default.FBu3XJ);
                case x.Ij.INITIALIZING:
                    return y.intl.string(_.default["00vkCU"]);
                default:
                    return y.intl.string(_.default["A70/wR"]);
            }
        }, [P]),
        D = (0, l.useMemo)(() => {
            if (!T) return y.intl.string(_.default.KN6HOb);
            switch (E) {
                case x._n.INSTALLED:
                case x._n.EXISTING_INSTALLATION:
                    return Z;
                default:
                    return y.intl.string(_.default.KN6HOb);
            }
        }, [E, T, Z]),
        L = (0, l.useMemo)(() => {
            if (!T)
                return (0, a.jsx)(i.xvT, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children: y.intl.format(_.default["0UfKTY"], { helpdeskArticle: h.w }),
                });
            switch (E) {
                case x._n.INSTALLED:
                case x._n.EXISTING_INSTALLATION:
                    return (0, a.jsx)(i.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: R
                            ? y.intl.format(_.default.zwW10o, {
                                  onClick: () => {
                                      (0, r.j)(v.rMx.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), w();
                                  },
                              })
                            : y.intl.format(_.default.D4hu0v, {
                                  onClick: () => {
                                      (0, r.j)(v.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), k();
                                  },
                              }),
                    });
                default:
                    return (0, a.jsx)(i.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: y.intl.format(_.default.D4hu0v, {
                            onClick: () => {
                                (0, r.j)(v.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), k();
                            },
                        }),
                    });
            }
        }, [E, T, R, k, w]),
        { analyticsLocations: M } = (0, o.ZP)(s.Z.MASKED_LINK);
    return ((0, l.useEffect)(() => {
        A &&
            p.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: j.cd.PRIVACY_PERK_EXIT_MODAL,
                location_stack: M,
            });
    }, [M, A]),
    A)
        ? (0, a.jsxs)("div", {
              className: C.container,
              children: [
                  (0, a.jsx)(g.v, { className: C.betaBadge }),
                  (0, a.jsx)(i.$1m, {
                      color: "nitro-pink",
                      offsetBottom: -0.5,
                      className: C.gradientBackground,
                      children: (0, a.jsxs)("div", {
                          className: C.contentContainer,
                          children: [
                              (0, a.jsx)("img", {
                                  src: S,
                                  className: C.graphicContainer,
                                  alt: "Private Browsing Perk",
                              }),
                              (0, a.jsxs)("div", {
                                  className: C.details,
                                  children: [
                                      (0, a.jsx)(i.X6q, {
                                          variant: "heading-md/semibold",
                                          children: D,
                                      }),
                                      L,
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
};
