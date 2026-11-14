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
                    subheaderText: p,
                    gradientColors: f,
                    gradientAngle: E,
                    skuIds: x,
                    resolvedSkuIds: v,
                    isLoading: C,
                    tab: A,
                    endTime: y,
                    ctaType: _ = "storefront",
                    logoUrl: b,
                    termsUrl: S,
                    backgroundImageUrl: L,
                } = e,
                I = (0, c.ur)(y) ?? void 0,
                k = (0, o.W8)(),
                j = (0, s.bG)([a.A], () => a.A.getApplication(t)?.name, [t]),
                N = r.useMemo(() => {
                    if ("none" !== _)
                        return "nitro" !== _ || k
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
                }, [_, t, j, k]);
            return (0, l.jsx)(d.A, {
                skuIds: x,
                resolvedSkuIds: v,
                isLoading: C,
                tab: A,
                applicationId: t,
                headerText: n,
                subheaderText: p,
                logoUrl: b,
                cta: N,
                timeLeftText: I,
                termsUrl: S,
                backgroundImageUrl: L,
                analyticsSection: "slayer-storefront-promotional-banner",
                analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
                analyticsImpressionType: "social_layer_storefront_promotional_banner",
                backgroundGradient: f.length > 0 ? `linear-gradient(${E}deg, ${f.join(", ")})` : void 0,
            });
        },
    },
);
