var l = n(477900),
    r = n(582128),
    s = n(855986),
    a = n(587895),
    i = n(465794),
    o = n(69236),
    u = n(44724),
    c = n(421108),
    d = n(873297),
    m = n(682901),
    g = n(792996),
    h = n(25082);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    applicationId: t,
                    headerText: n,
                    subheaderText: E,
                    gradientColors: f,
                    gradientAngle: p,
                    skuIds: x,
                    resolvedSkuIds: C,
                    isLoading: A,
                    tab: v,
                    endTime: b,
                    ctaType: L = "storefront",
                    logoUrl: y,
                    termsUrl: _,
                    backgroundImageUrl: I,
                } = e,
                S = (0, c.ur)(b) ?? void 0,
                k = (0, o.W8)(),
                j = (0, s.bG)([a.A], () => a.A.getApplication(t)?.name, [t]),
                N = r.useMemo(() => {
                    if ("none" !== L)
                        return "nitro" !== L || k
                            ? {
                                  kind: "button",
                                  text:
                                      null != j
                                          ? g.intl.formatToPlainString(h.default["8OFeFD"], { applicationName: j })
                                          : g.intl.string(g.t.apFNLU),
                                  onClick: () => (0, u.default)({ applicationId: t }),
                                  onMouseDown: () => (0, u.G)({ applicationId: t }),
                              }
                            : {
                                  kind: "custom",
                                  node: (0, l.jsx)(i.A, {
                                      size: "sm",
                                      applicationId: t,
                                      subscriptionTier: m.pe.TIER_2,
                                      buttonTextOverride: g.intl.string(g.t.pj0XBN),
                                  }),
                              };
                }, [L, t, j, k]);
            return (0, l.jsx)(d.A, {
                skuIds: x,
                resolvedSkuIds: C,
                isLoading: A,
                tab: v,
                applicationId: t,
                headerText: n,
                subheaderText: E,
                logoUrl: y,
                cta: N,
                timeLeftText: S,
                termsUrl: _,
                backgroundImageUrl: I,
                analyticsSection: "slayer-storefront-promotional-banner",
                analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
                analyticsImpressionType: "social_layer_storefront_promotional_banner",
                backgroundGradient: f.length > 0 ? `linear-gradient(${p}deg, ${f.join(", ")})` : void 0,
            });
        },
    },
);
