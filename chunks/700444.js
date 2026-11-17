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
    h = n(792996),
    g = n(25082);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    applicationId: t,
                    headerText: n,
                    subheaderText: p,
                    gradientColors: E,
                    gradientAngle: f,
                    skuIds: x,
                    resolvedSkuIds: C,
                    isLoading: v,
                    tab: y,
                    endTime: A,
                    ctaType: _ = "storefront",
                    logoUrl: L,
                    termsUrl: b,
                    backgroundImageUrl: S,
                } = e,
                I = (0, c.ur)(A) ?? void 0,
                j = (0, o.W8)(),
                k = (0, s.bG)([a.A], () => a.A.getApplication(t)?.name, [t]),
                N = r.useMemo(() => {
                    if ("none" !== _)
                        return "nitro" !== _ || j
                            ? {
                                  kind: "button",
                                  text:
                                      null != k
                                          ? h.intl.formatToPlainString(g.default["8OFeFD"], { applicationName: k })
                                          : h.intl.string(h.t.apFNLU),
                                  onClick: () => (0, u.default)({ applicationId: t }),
                                  onMouseDown: () => (0, u.G)({ applicationId: t }),
                              }
                            : {
                                  kind: "custom",
                                  node: (0, l.jsx)(i.A, {
                                      size: "sm",
                                      applicationId: t,
                                      subscriptionTier: m.pe.TIER_2,
                                      buttonTextOverride: h.intl.string(h.t.pj0XBN),
                                  }),
                              };
                }, [_, t, k, j]);
            return (0, l.jsx)(d.A, {
                skuIds: x,
                resolvedSkuIds: C,
                isLoading: v,
                tab: y,
                applicationId: t,
                headerText: n,
                subheaderText: p,
                logoUrl: L,
                cta: N,
                timeLeftText: I,
                termsUrl: b,
                backgroundImageUrl: S,
                analyticsSection: "slayer-storefront-promotional-banner",
                analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
                analyticsImpressionType: "social_layer_storefront_promotional_banner",
                backgroundGradient: E.length > 0 ? `linear-gradient(${f}deg, ${E.join(", ")})` : void 0,
            });
        },
    },
);
