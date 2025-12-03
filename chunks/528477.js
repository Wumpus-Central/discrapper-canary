n.d(t, { n: () => T });
var a = n(54381),
    l = n(473749),
    i = n(159691),
    r = n(594421),
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
    y = n(163646),
    C = n(388032),
    S = n(742098),
    E = n(932889);
let T = (e) => {
    let { onClose: t } = e,
        n = (0, u.m)(),
        {
            installationStatus: T,
            perkAvailableToUser: N,
            isSupportedPrivateBrowsingPerkPlatform: O,
            isWeb: P,
            connectionStatus: w,
        } = (0, v.xf)(),
        { enabled: I } = g.H.useConfig({ location: "private_browsing_perk_settings_page" }),
        k = (0, l.useCallback)(() => {
            (0, c.Z)(j.Z5c.NITRO_HOME), t();
        }, [t]),
        R = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(m.n.PRIVATE_BROWSING_PANEL, { section: j.oAB.CF_WARP });
        }, []),
        A = [f.Ij.CONNECTED].includes(w),
        Z = O && I && ![f._n.ZERO_TRUST, f._n.ERROR].includes(T) && !P && (!n || N),
        D = (0, l.useMemo)(() => {
            switch (w) {
                case f.Ij.CONNECTED:
                    return C.intl.string(y.default.FBu3XJ);
                case f.Ij.INITIALIZING:
                    return C.intl.string(y.default["00vkCU"]);
                default:
                    return C.intl.string(y.default["A70/wR"]);
            }
        }, [w]),
        L = (0, l.useMemo)(() => {
            if (!N) return C.intl.string(y.default.KN6HOb);
            switch (T) {
                case f._n.INSTALLED:
                case f._n.EXISTING_INSTALLATION:
                    return D;
                default:
                    return C.intl.string(y.default.KN6HOb);
            }
        }, [T, N, D]),
        M = (0, l.useMemo)(() => {
            if (!N)
                return (0, a.jsx)(i.xvT, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: C.intl.format(y.default["0UfKTY"], { helpdeskArticle: x.w }),
                });
            switch (T) {
                case f._n.INSTALLED:
                case f._n.EXISTING_INSTALLATION:
                    return (0, a.jsx)(i.xvT, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: A
                            ? C.intl.format(y.default.zwW10o, {
                                  onClick: () => {
                                      (0, r.j)(j.rMx.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), k();
                                  },
                              })
                            : C.intl.format(y.default.D4hu0v, {
                                  onClick: () => {
                                      (0, r.j)(j.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R();
                                  },
                              }),
                    });
                default:
                    return (0, a.jsx)(i.xvT, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: C.intl.format(y.default.D4hu0v, {
                            onClick: () => {
                                (0, r.j)(j.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R();
                            },
                        }),
                    });
            }
        }, [T, N, A, R, k]),
        { analyticsLocations: U } = (0, o.ZP)(s.Z.MASKED_LINK);
    return ((0, l.useEffect)(() => {
        Z &&
            h.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
                type: _.cd.PRIVACY_PERK_EXIT_MODAL,
                location_stack: U,
            });
    }, [U, Z]),
    Z)
        ? (0, a.jsxs)("div", {
              className: S.container,
              children: [
                  (0, a.jsx)(b.v, { className: S.betaBadge }),
                  (0, a.jsxs)("div", {
                      className: S.contentContainer,
                      children: [
                          N &&
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
                          !N &&
                              (0, a.jsx)("div", {
                                  className: S.ctaContainer,
                                  children: (0, a.jsx)(d.Z, {
                                      buttonTextOverride: C.intl.string(C.t["8x0jKT"]),
                                      subscriptionTier: _.Si.TIER_2,
                                      size: "sm",
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
};
