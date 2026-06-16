e.d(a, { default: () => d });
var c = e(627968);
e(64700);
var n = e(87719),
    s = e(84960),
    i = e(788868),
    o = e(652215),
    r = e(375708),
    p = e(548360);
function d(t) {
    let { onClose: a, analyticsSource: e, onLearnMore: d, ...l } = t,
        u = i.pe.TIER_2,
        _ = r.intl.format(r.t.hDMlqD, {
            onLearnMore: function () {
                d?.(), a(), (0, n.e)();
            },
        });
    return (0, c.jsx)(s.A, {
        artURL: "https://cdn.discordapp.com/assets/content/2d563ce5f261ca4793e70ca87ccd10fd2b224ba302a5cd36414a5e4b4a374725.svg",
        artContainerClassName: p.z,
        type: i.e.VIDEO_BACKGROUNDS_MODAL,
        title: r.intl.string(r.t.fHqiDW),
        body: _,
        glowUp: _,
        analyticsSource: e,
        analyticsLocation: { page: o.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: o.ZSU.BUTTON_CTA },
        onClose: a,
        subscriptionTier: u,
        ...l,
    });
}
