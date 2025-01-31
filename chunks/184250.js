c.d(n, { default: () => r });
var i = c(200651);
c(192379);
var o = c(98278),
    e = c(790527),
    s = c(474936),
    a = c(388032),
    d = c(116909);
function r(t) {
    let { onClose: n, analyticsSource: c, analyticsLocation: r, ...l } = t;
    return (0, i.jsx)(e.Z, {
        artURL: d.Z,
        type: s.cd.APP_ICON_UPSELL,
        title: a.intl.string(a.t.TYFwc3),
        body: a.intl.string(a.t.HDt8io),
        glowUp: a.intl.string(a.t.HDt8io),
        onSecondaryClick: () => {
            (0, o.$)(n);
        },
        secondaryCTA: a.intl.string(a.t.PcTCBw),
        analyticsSource: c,
        analyticsLocation: r,
        onClose: n,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        ...l
    });
}
