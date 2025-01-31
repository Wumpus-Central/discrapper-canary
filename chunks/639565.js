s.d(n, { default: () => A });
var a = s(200651);
s(192379);
var i = s(703656),
    c = s(626135),
    e = s(790527),
    r = s(474936),
    o = s(981631),
    _ = s(388032),
    l = s(184217),
    E = s(235810);
function u() {
    return (0, a.jsx)('div', {
        className: l.artContainer,
        children: (0, a.jsx)('img', {
            src: E,
            className: l.artAsset,
            alt: ''
        })
    });
}
function A(t) {
    let { onClose: n, source: s, ...l } = t;
    return (0, a.jsx)(e.Z, {
        artElement: (0, a.jsx)(u, {}),
        type: r.cd.FOR_LATER_MODAL_UPSELL,
        title: _.intl.string(_.t.w4DRbW),
        body: _.intl.string(_.t.F6u3Ex),
        glowUp: _.intl.string(_.t.F6u3Ex),
        secondaryCTA: _.intl.string(_.t.PcTCBw),
        onSecondaryClick: function () {
            c.default.track(o.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: o.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
                location_object: o.qAy.NAVIGATION_LINK
            }),
                n(),
                (0, i.uL)(o.Z5c.APPLICATION_STORE);
        },
        showEnhancedUpsell: !0,
        analyticsSource: s,
        analyticsLocation: {
            section: o.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
            object: o.qAy.BUTTON_CTA
        },
        onClose: n,
        ...l
    });
}
