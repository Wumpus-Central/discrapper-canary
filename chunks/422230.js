n.d(t, {
    l: () => O,
});
var a = n(627968),
    l = n(64700),
    i = n(732955),
    r = n(890138),
    s = n(793574),
    o = n(688810),
    c = n(22007),
    d = n(857586),
    u = n(757036),
    m = n(780964),
    p = n(840065),
    h = n(954571),
    f = n(156186),
    x = n(602450),
    b = n(967370),
    g = n(144605),
    v = n(557571),
    j = n(652215),
    y = n(788868),
    _ = n(895431),
    A = n(985018),
    C = n(405040),
    S = n(446115);
let O = (e) => {
    let { onClose: t } = e,
        n = (0, u.L)(),
        {
            installationStatus: O,
            perkAvailableToUser: E,
            isSupportedPrivateBrowsingPerkPlatform: N,
            isWeb: T,
            connectionStatus: I,
        } = (0, v.lV)(),
        k = (0, b.lM)("private_browsing_perk_settings_page"),
        w = (0, l.useCallback)(() => {
            (0, c.A)(j.BVt.NITRO_HOME), t();
        }, [t]),
        P = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(m.X.PRIVATE_BROWSING_PANEL, {
                section: j.nc_.PRIVATE_BROWSING,
            });
        }, []),
        R = [x.l7.CONNECTED].includes(I),
        D = N && k && ![x.Lk.ZERO_TRUST, x.Lk.ERROR].includes(O) && !T && (!n || E),
        M = (0, l.useMemo)(() => {
            switch (I) {
                case x.l7.CONNECTED:
                    return A.intl.string(_.default.FBu3XJ);
                case x.l7.INITIALIZING:
                    return A.intl.string(_.default["00vkCU"]);
                default:
                    return A.intl.string(_.default["A70/wR"]);
            }
        }, [I]),
        L = (0, l.useMemo)(() => {
            if (!E) return A.intl.string(_.default.KN6HOb);
            switch (O) {
                case x.Lk.INSTALLED:
                case x.Lk.EXISTING_INSTALLATION:
                    return M;
                default:
                    return A.intl.string(_.default.KN6HOb);
            }
        }, [O, E, M]),
        U = (0, l.useMemo)(() => {
            if (!E)
                return (0, a.jsx)(i.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: A.intl.format(_.default.UDPKcX, {
                        helpdeskArticle: f.V,
                    }),
                });
            switch (O) {
                case x.Lk.INSTALLED:
                case x.Lk.EXISTING_INSTALLATION:
                    return (0, a.jsx)(i.EYj, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: R
                            ? A.intl.format(_.default.zwW10o, {
                                  onClick: () => {
                                      (0, r.u)(j.HAw.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), w();
                                  },
                              })
                            : A.intl.format(_.default.D4hu0v, {
                                  onClick: () => {
                                      (0, r.u)(j.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), P();
                                  },
                              }),
                    });
                default:
                    return (0, a.jsx)(i.EYj, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: A.intl.format(_.default.D4hu0v, {
                            onClick: () => {
                                (0, r.u)(j.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), P();
                            },
                        }),
                    });
            }
        }, [O, E, R, P, w]),
        { analyticsLocations: B } = (0, o.Ay)(s.A.MASKED_LINK);
    return ((0, l.useEffect)(() => {
        D &&
            h.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
                type: y.e.PRIVACY_PERK_EXIT_MODAL,
                location_stack: B,
            });
    }, [B, D]),
    D)
        ? (0, a.jsxs)("div", {
              className: C.kL,
              children: [
                  (0, a.jsx)(g.q, {
                      className: C.aZ,
                  }),
                  (0, a.jsxs)("div", {
                      className: C.hQ,
                      children: [
                          E &&
                              (0, a.jsx)(i.hLv, {
                                  className: C.h4,
                                  offsetBottom: -5,
                                  color: "nitro-pink",
                                  children: (0, a.jsx)("div", {
                                      className: C.ZS,
                                      children: (0, a.jsx)("img", {
                                          src: S,
                                          className: C.KD,
                                          alt: "Private Browsing Perk",
                                      }),
                                  }),
                              }),
                          (0, a.jsxs)("div", {
                              className: C.zH,
                              children: [
                                  (0, a.jsx)(i.DZT, {
                                      variant: "heading-md/semibold",
                                      children: L,
                                  }),
                                  U,
                              ],
                          }),
                          !E &&
                              (0, a.jsx)("div", {
                                  className: C.OQ,
                                  children: (0, a.jsx)(d.A, {
                                      buttonTextOverride: A.intl.string(A.t["8x0jKT"]),
                                      subscriptionTier: y.pe.TIER_2,
                                      size: "sm",
                                      premiumModalAnalyticsLocation: {
                                          page: s.A.MASKED_LINK,
                                      },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
};
