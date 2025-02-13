a.d(n, { default: () => p });
var c = a(200651);
a(192379);
var o = a(98278),
    e = a(790527),
    i = a(474936),
    r = a(981631),
    s = a(388032),
    d = a(755451),
    u = a(954696);
function p(t) {
    let { onClose: n, analyticsSource: a, onLearnMore: p, ...l } = t,
        _ = i.Si.TIER_2,
        f = s.intl.format(s.t.hDMlqK, {
            onLearnMore: function () {
                null == p || p(), n(), (0, o.z)();
            }
        });
    return (0, c.jsx)(e.Z, {
        artURL: u.Z,
        artContainerClassName: d.videoBackgroundArt,
        type: i.cd.VIDEO_BACKGROUNDS_MODAL,
        title: s.intl.string(s.t.fHqiDQ),
        body: f,
        glowUp: f,
        analyticsSource: a,
        analyticsLocation: {
            page: r.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: r.qAy.BUTTON_CTA
        },
        onClose: n,
        subscriptionTier: _,
        ...l
    });
}
