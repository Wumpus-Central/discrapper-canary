n.d(t, { n: () => O });
var a = n(54381),
    r = n(473749),
    i = n(159691),
    l = n(594421),
    s = n(100527),
    o = n(906732),
    c = n(336197),
    d = n(740594),
    u = n(612659),
    m = n(313789),
    p = n(518596),
    h = n(626135),
    x = n(323183),
    f = n(5900),
    g = n(299886),
    b = n(37279),
    v = n(773275),
    j = n(981631),
    _ = n(474936),
    y = n(665525),
    C = n(388032),
    S = n(742098),
    E = n(932889);
let O = (e) => {
    let { onClose: t } = e,
        n = (0, u.m)(),
        {
            installationStatus: O,
            perkAvailableToUser: T,
            isSupportedPrivateBrowsingPerkPlatform: N,
            isWeb: P,
            connectionStatus: w,
        } = (0, v.xf)(),
        { enabled: I } = g.H.useConfig({ location: "private_browsing_perk_settings_page" }),
        k = (0, r.useCallback)(() => {
            (0, c.Z)(j.Z5c.NITRO_HOME), t();
        }, [t]),
        R = (0, r.useCallback)(() => {
            (0, p.openUserSettings)(m.n.PRIVATE_BROWSING_PANEL, { section: j.oAB.PRIVATE_BROWSING });
        }, []),
        A = [f.Ij.CONNECTED].includes(w),
        D = N && I && ![f._n.ZERO_TRUST, f._n.ERROR].includes(O) && !P && (!n || T),
        Z = (0, r.useMemo)(() => {
            switch (w) {
                case f.Ij.CONNECTED:
                    return C.intl.string(y.default.FBu3XJ);
                case f.Ij.INITIALIZING:
                    return C.intl.string(y.default["00vkCU"]);
                default:
                    return C.intl.string(y.default["A70/wR"]);
            }
        }, [w]),
        L = (0, r.useMemo)(() => {
            if (!T) return C.intl.string(y.default.KN6HOb);
            switch (O) {
                case f._n.INSTALLED:
                case f._n.EXISTING_INSTALLATION:
                    return Z;
                default:
                    return C.intl.string(y.default.KN6HOb);
            }
        }, [O, T, Z]),
        M = (0, r.useMemo)(() => {
            if (!T)
                return (0, a.jsx)(i.xvT, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: C.intl.format(y.default["0UfKTY"], { helpdeskArticle: x.w }),
                });
            switch (O) {
                case f._n.INSTALLED:
                case f._n.EXISTING_INSTALLATION:
                    return (0, a.jsx)(i.xvT, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: A
                            ? C.intl.format(y.default.zwW10o, {
                                  onClick: () => {
                                      (0, l.j)(j.rMx.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), k();
                                  },
                              })
                            : C.intl.format(y.default.D4hu0v, {
                                  onClick: () => {
                                      (0, l.j)(j.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R();
                                  },
                              }),
                    });
                default:
                    return (0, a.jsx)(i.xvT, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: C.intl.format(y.default.D4hu0v, {
                            onClick: () => {
                                (0, l.j)(j.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R();
                            },
                        }),
                    });
            }
        }, [O, T, A, R, k]),
        { analyticsLocations: U } = (0, o.ZP)(s.Z.MASKED_LINK);
    return ((0, r.useEffect)(() => {
        D &&
            h.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
                type: _.cd.PRIVACY_PERK_EXIT_MODAL,
                location_stack: U,
            });
    }, [U, D]),
    D)
        ? (0, a.jsxs)("div", {
              className: S.container,
              children: [
                  (0, a.jsx)(b.v, { className: S.betaBadge }),
                  (0, a.jsxs)("div", {
                      className: S.contentContainer,
                      children: [
                          T &&
                              (0, a.jsx)(i.$1m, {
                                  className: S.imageWrapper,
                                  offsetBottom: -5,
                                  color: "nitro-pink",
                                  children: (0, a.jsx)("div", {
                                      className: S.imageContainer,
                                      children: (0, a.jsx)("img", {
                                          src: E,
                                          className: S.graphicContainer,
                                          alt: "Private Browsing Perk",
                                      }),
                                  }),
                              }),
                          (0, a.jsxs)("div", {
                              className: S.details,
                              children: [
                                  (0, a.jsx)(i.X6q, {
                                      variant: "heading-md/semibold",
                                      children: L,
                                  }),
                                  M,
                              ],
                          }),
                          !T &&
                              (0, a.jsx)("div", {
                                  className: S.ctaContainer,
                                  children: (0, a.jsx)(d.Z, {
                                      buttonTextOverride: C.intl.string(C.t["8x0jKT"]),
                                      subscriptionTier: _.Si.TIER_2,
                                      size: "sm",
                                      premiumModalAnalyticsLocation: { page: s.Z.MASKED_LINK },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
};
