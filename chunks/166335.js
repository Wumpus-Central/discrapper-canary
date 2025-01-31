n.d(t, {
    default: () => f,
    i: () => m
});
var i = n(200651);
n(192379);
var l = n(609784),
    a = n(481060),
    r = n(174609),
    s = n(703656),
    o = n(626135),
    c = n(790527),
    d = n(474936),
    u = n(981631),
    h = n(388032),
    p = n(530668);
function m() {
    (0, a.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 166335));
        return (t) =>
            (0, i.jsx)(e, {
                analyticsSource: u.Sbl.VOICE_FILTERS,
                analyticsLocation: {
                    section: u.jXE.VOICE_FILTERS_UPSELL_MODAL,
                    object: u.qAy.BUTTON_CTA
                },
                ...t
            });
    });
}
function f(e) {
    let { onClose: t, ...n } = e,
        a = (0, i.jsx)('div', {
            className: p.microphone,
            children: (0, i.jsx)(l.x, {
                size: 'custom',
                height: '40',
                width: '40',
                color: 'currentColor',
                className: p.microphoneColor
            })
        });
    return (0, i.jsx)(c.Z, {
        title: h.intl.string(h.t.YqknLi),
        glowUp: h.intl.string(h.t['3hj4kZ']),
        body: h.intl.string(h.t['3hj4kZ']),
        artElement: a,
        artContainerClassName: p.artContainer,
        type: d.cd.VOICE_FILTERS_UPSELL,
        onClose: t,
        onSubscribeClick: r.Z,
        secondaryCTA: h.intl.string(h.t.ZnqyZ2),
        onSecondaryClick: function () {
            (0, r.Z)(),
                t(),
                o.default.track(u.rMx.PREMIUM_PROMOTION_OPENED, {
                    location_section: u.jXE.VOICE_FILTERS_UPSELL_MODAL,
                    location_object: u.qAy.NAVIGATION_LINK
                }),
                (0, s.uL)(u.Z5c.APPLICATION_STORE);
        },
        showEnhancedUpsell: !0,
        enableArtBoxShadow: !1,
        headerClassName: p.header,
        ...n
    });
}
