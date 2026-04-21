"use strict";
s.d(t, { A: () => a });
var n = s(627968);
s(64700);
var r = s(873297),
    l = s(985018);
let a = (e) => {
    let { onDismiss: t, applicationId: s, headerText: a, gradientColors: i, gradientAngle: o, skuIds: c, tab: d } = e;
    return (0, n.jsx)(r.A, {
        onDismiss: t,
        skuIds: c,
        tab: d,
        applicationId: s,
        headerText: a,
        shopButtonText: l.intl.string(l.t.apFNLU),
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${o}deg, ${i.join(", ")})`,
    });
};
