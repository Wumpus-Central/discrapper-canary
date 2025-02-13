n.d(t, {
    default: () => m,
    i: () => p
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(174609),
    r = n(703656),
    s = n(626135),
    o = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    h = n(480392);
function p() {
    (0, l.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 166335));
        return (t) =>
            (0, i.jsx)(e, {
                analyticsSource: d.Sbl.VOICE_FILTERS,
                analyticsLocation: {
                    section: d.jXE.VOICE_FILTERS_UPSELL_MODAL,
                    object: d.qAy.BUTTON_CTA
                },
                ...t
            });
    });
}
function m(e) {
    let { onClose: t, ...l } = e,
        p = (0, i.jsx)('img', {
            src: n(414190),
            className: h.art,
            alt: ''
        }),
        m = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)('div', { className: h.blur0 }), (0, i.jsx)('div', { className: h.blur1 }), (0, i.jsx)('div', { className: h.blur2 })]
        });
    return (0, i.jsx)(o.Z, {
        title: u.intl.string(u.t.YqknLi),
        glowUp: u.intl.string(u.t['3hj4kZ']),
        body: u.intl.string(u.t['3hj4kZ']),
        artElement: p,
        artContainerClassName: h.artContainer,
        type: c.cd.VOICE_FILTERS_UPSELL,
        onClose: t,
        onSubscribeClick: a.Z,
        secondaryCTA: u.intl.string(u.t.ZnqyZ2),
        onSecondaryClick: function () {
            (0, a.Z)(),
                t(),
                s.default.track(d.rMx.PREMIUM_PROMOTION_OPENED, {
                    location_section: d.jXE.VOICE_FILTERS_UPSELL_MODAL,
                    location_object: d.qAy.NAVIGATION_LINK
                }),
                (0, r.uL)(d.Z5c.APPLICATION_STORE);
        },
        showEnhancedUpsell: !0,
        enableArtBoxShadow: !1,
        headerClassName: h.header,
        modalClassName: h.modal,
        backgroundElements: m,
        smallText: !0,
        footerClassName: h.footer,
        subscribeButtonClassname: h.subscribeButton,
        ...l
    });
}
