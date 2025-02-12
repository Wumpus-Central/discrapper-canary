n.d(t, {
    default: () => m,
    h: () => f
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(70097),
    r = n(174609),
    s = n(98278),
    o = n(790527),
    c = n(626135),
    d = n(981631),
    u = n(388032),
    h = n(288322),
    p = n(626065);
function m(e) {
    let { onClose: t, analytics: n, ...l } = e,
        m = u.intl.format(u.t['7aNIkZ'], {
            onPressMore: function () {
                (0, r.Z)(),
                    t(),
                    c.default.track(d.rMx.PREMIUM_PROMOTION_OPENED, {
                        location_section: d.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
                        location_object: d.qAy.NAVIGATION_LINK
                    }),
                    (0, s.z)();
            }
        });
    return (0, i.jsx)(o.Z, {
        title: u.intl.string(u.t.K49fZG),
        glowUp: m,
        body: m,
        artContainerClassName: h.artContainer,
        enableArtBoxShadow: !1,
        type: n.type,
        analyticsLocation: {
            section: d.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
            object: n.object
        },
        analyticsSource: {
            page: d.ZY5.CHANNEL_CALL,
            section: n.section
        },
        onClose: t,
        onSubscribeClick: r.Z,
        artElement: (0, i.jsx)(a.Z, {
            className: h.video,
            src: p,
            loop: !0,
            autoPlay: !0
        }),
        ...l
    });
}
function f(e) {
    let { analytics: t } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 310892));
        return (n) =>
            (0, i.jsx)(e, {
                analytics: t,
                ...n
            });
    });
}
