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
                    gradientColors: p,
                    gradientAngle: f,
                    skuIds: x,
                    resolvedSkuIds: C,
                    isLoading: A,
                    tab: v,
                    endTime: b,
                    ctaType: L = "storefront",
                    logoUrl: _,
                    termsUrl: y,
                    backgroundImageUrl: I,
                } = e,
                S = (0, c.ur)(b) ?? void 0,
                N = (0, o.W8)(),
                k = (0, s.bG)([a.A], () => a.A.getApplication(t)?.name, [t]),
                j = r.useMemo(() => {
                    if ("none" !== L)
                        return "nitro" !== L || N
                            ? {
                                  kind: "button",
                                  text:
                                      null != k
                                          ? g.intl.formatToPlainString(h.default["8OFeFD"], { applicationName: k })
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
                }, [L, t, k, N]);
            return (0, l.jsx)(d.A, {
                skuIds: x,
                resolvedSkuIds: C,
                isLoading: A,
                tab: v,
                applicationId: t,
                headerText: n,
                subheaderText: E,
                logoUrl: _,
                cta: j,
                timeLeftText: S,
                termsUrl: y,
                backgroundImageUrl: I,
                analyticsSection: "slayer-storefront-promotional-banner",
                analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
                analyticsImpressionType: "social_layer_storefront_promotional_banner",
                backgroundGradient: p.length > 0 ? `linear-gradient(${f}deg, ${p.join(", ")})` : void 0,
            });
        },
    },
);
