e.d(a, { default: () => l });
var c = e(627968);
e(64700);
var n = e(87719),
    o = e(244975),
    s = e(788868),
    i = e(652215),
    r = e(985018),
    d = e(451067),
    p = e(196436);
function l(t) {
    let { onClose: a, analyticsSource: e, onLearnMore: l, ..._ } = t,
        u = s.pe.TIER_2,
        b = r.intl.format(r.t.hDMlqD, {
            onLearnMore: function () {
                l?.(), a(), (0, n.e)();
            },
        });
    return (0, c.jsx)(o.A, {
        artURL: p.A,
        artContainerClassName: d.z,
        type: s.e.VIDEO_BACKGROUNDS_MODAL,
        title: r.intl.string(r.t.fHqiDW),
        body: b,
        glowUp: b,
        analyticsSource: e,
        analyticsLocation: { page: i.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: i.ZSU.BUTTON_CTA },
        onClose: a,
        subscriptionTier: u,
        ..._,
    });
}
