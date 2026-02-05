n.d(t, { l: () => y });
var a = n(627968),
    s = n(64700),
    i = n(732955),
    l = n(890138),
    r = n(793574),
    o = n(688810),
    d = n(22007),
    c = n(857586),
    u = n(757036),
    m = n(780964),
    h = n(840065),
    x = n(954571),
    p = n(156186),
    g = n(602450),
    _ = n(967370),
    f = n(144605),
    v = n(557571),
    b = n(652215),
    j = n(788868),
    A = n(895431),
    C = n(985018),
    S = n(405040),
    T = n(446115);
let y = (e) => {
    let { onClose: t } = e,
        n = (0, u.L)(),
        {
            installationStatus: y,
            perkAvailableToUser: N,
            isSupportedPrivateBrowsingPerkPlatform: E,
            isWeb: I,
            connectionStatus: k,
        } = (0, v.lV)(),
        R = (0, _.lM)("private_browsing_perk_settings_page"),
        O = (0, s.useCallback)(() => {
            (0, d.A)(b.BVt.NITRO_HOME), t();
        }, [t]),
        w = (0, s.useCallback)(() => {
            (0, h.openUserSettings)(m.X.PRIVATE_BROWSING_PANEL, { section: b.nc_.PRIVATE_BROWSING });
        }, []),
        D = [g.l7.CONNECTED].includes(k),
        M = E && R && ![g.Lk.ZERO_TRUST, g.Lk.ERROR].includes(y) && !I && (!n || N),
        P = (0, s.useMemo)(() => {
            switch (k) {
                case g.l7.CONNECTED:
                    return C.intl.string(A.default.FBu3XJ);
                case g.l7.INITIALIZING:
                    return C.intl.string(A.default["00vkCU"]);
                default:
                    return C.intl.string(A.default["A70/wR"]);
            }
        }, [k]),
        L = (0, s.useMemo)(() => {
            if (!N) return C.intl.string(A.default.KN6HOb);
            switch (y) {
                case g.Lk.INSTALLED:
                case g.Lk.EXISTING_INSTALLATION:
                    return P;
                default:
                    return C.intl.string(A.default.KN6HOb);
            }
        }, [y, N, P]),
        U = (0, s.useMemo)(() => {
            if (!N)
                return (0, a.jsx)(i.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: C.intl.format(A.default.UDPKcX, { helpdeskArticle: p.V }),
                });
            switch (y) {
                case g.Lk.INSTALLED:
                case g.Lk.EXISTING_INSTALLATION:
                    return (0, a.jsx)(i.EYj, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: D
                            ? C.intl.format(A.default.zwW10o, {
                                  onClick: () => {
                                      (0, l.u)(b.HAw.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), O();
                                  },
                              })
                            : C.intl.format(A.default.D4hu0v, {
                                  onClick: () => {
                                      (0, l.u)(b.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), w();
                                  },
                              }),
                    });
                default:
                    return (0, a.jsx)(i.EYj, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: C.intl.format(A.default.D4hu0v, {
                            onClick: () => {
                                (0, l.u)(b.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), w();
                            },
                        }),
                    });
            }
        }, [y, N, D, w, O]),
        { analyticsLocations: B } = (0, o.Ay)(r.A.MASKED_LINK);
    return ((0, s.useEffect)(() => {
        M && x.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, { type: j.e.PRIVACY_PERK_EXIT_MODAL, location_stack: B });
    }, [B, M]),
    M)
        ? (0, a.jsxs)("div", {
              className: S.kL,
              children: [
                  (0, a.jsx)(f.q, { className: S.aZ }),
                  (0, a.jsxs)("div", {
                      className: S.hQ,
                      children: [
                          N &&
                              (0, a.jsx)(i.hLv, {
                                  className: S.h4,
                                  offsetBottom: -5,
                                  color: "nitro-pink",
                                  children: (0, a.jsx)("div", {
                                      className: S.ZS,
                                      children: (0, a.jsx)("img", {
                                          src: T,
                                          className: S.KD,
                                          alt: "Private Browsing Perk",
                                      }),
                                  }),
                              }),
                          (0, a.jsxs)("div", {
                              className: S.zH,
                              children: [(0, a.jsx)(i.DZT, { variant: "heading-md/semibold", children: L }), U],
                          }),
                          !N &&
                              (0, a.jsx)("div", {
                                  className: S.OQ,
                                  children: (0, a.jsx)(c.A, {
                                      buttonTextOverride: C.intl.string(C.t["8x0jKT"]),
                                      subscriptionTier: j.pe.TIER_2,
                                      size: "sm",
                                      premiumModalAnalyticsLocation: { page: r.A.MASKED_LINK },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
};
