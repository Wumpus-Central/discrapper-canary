c.d(n, { default: () => r });
var i = c(200651);
c(192379);
var s = c(98278),
    a = c(790527),
    e = c(474936),
    o = c(388032);
function r(t) {
    let { onClose: n, analyticsSource: r, analyticsLocation: l, ...d } = t;
    return (0, i.jsx)(a.Z, {
        artURL: c(677531),
        type: e.cd.CLIENT_THEMES_UPSELL,
        title: o.intl.string(o.t.GI7t09),
        body: o.intl.string(o.t.MRrvSE),
        glowUp: o.intl.string(o.t.MRrvSE),
        onSecondaryClick: () => {
            (0, s.$)(n);
        },
        secondaryCTA: o.intl.string(o.t.PcTCBw),
        analyticsSource: r,
        analyticsLocation: l,
        onClose: n,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        ...d
    });
}
