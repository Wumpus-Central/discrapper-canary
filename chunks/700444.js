var l = n(477900),
    r = n(582128),
    s = n(855986),
    a = n(587895),
    i = n(465794),
    o = n(69236),
    c = n(44724),
    u = n(421108),
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
                    gradientAngle: x,
                    skuIds: E,
                    resolvedSkuIds: v,
                    isLoading: C,
                    tab: _,
                    endTime: y,
                    ctaType: b = "storefront",
                    logoUrl: S,
                    termsUrl: I,
                    backgroundImageUrl: A,
                } = e,
                k = (0, u.ur)(y) ?? void 0,
                L = (0, o.W8)(),
                j = (0, s.bG)([a.A], () => a.A.getApplication(t)?.name, [t]),
                N = r.useMemo(() => {
                    if ("none" !== b)
                        return "nitro" !== b || L
                            ? {
                                  kind: "button",
                                  text:
                                      null != j
                                          ? g.intl.formatToPlainString(h.default["8OFeFD"], { applicationName: j })
                                          : g.intl.string(g.t.apFNLU),
                                  onClick: () => (0, c.default)({ applicationId: t }),
                                  onMouseDown: () => (0, c.G)({ applicationId: t }),
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
                }, [b, t, j, L]);
            return (0, l.jsx)(d.A, {
                skuIds: E,
                resolvedSkuIds: v,
                isLoading: C,
                tab: _,
                applicationId: t,
                headerText: n,
                subheaderText: p,
                logoUrl: S,
                cta: N,
                timeLeftText: k,
                termsUrl: I,
                backgroundImageUrl: A,
                analyticsSection: "slayer-storefront-promotional-banner",
                analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
                analyticsImpressionType: "social_layer_storefront_promotional_banner",
                backgroundGradient: f.length > 0 ? `linear-gradient(${x}deg, ${f.join(", ")})` : void 0,
            });
        },
    },
);
