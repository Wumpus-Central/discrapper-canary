t.d(n, { default: () => d });
var a = t(627968);
t(64700);
var s = t(87719),
    i = t(244975),
    r = t(788868),
    l = t(652215),
    c = t(985018),
    o = t(548360),
    _ = t(974055);
function d(e) {
    let { onClose: n, analyticsSource: t, onLearnMore: d, ...u } = e,
        m = r.pe.TIER_2,
        p = c.intl.format(c.t.hDMlqD, {
            onLearnMore: function () {
                d?.(), n(), (0, s.e)();
            },
        });
    return (0, a.jsx)(i.A, {
        artURL: _.A,
        artContainerClassName: o.z,
        type: r.e.VIDEO_BACKGROUNDS_MODAL,
        title: c.intl.string(c.t.fHqiDW),
        body: p,
        glowUp: p,
        analyticsSource: t,
        analyticsLocation: { page: l.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: l.ZSU.BUTTON_CTA },
        onClose: n,
        subscriptionTier: m,
        ...u,
    });
}
