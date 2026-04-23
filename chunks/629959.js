t.d(n, { default: () => _ });
var a = t(627968);
t(64700);
var i = t(87719),
    s = t(84960),
    r = t(788868),
    l = t(652215),
    c = t(985018),
    o = t(548360);
function _(e) {
    let { onClose: n, analyticsSource: t, onLearnMore: _, ...d } = e,
        u = r.pe.TIER_2,
        m = c.intl.format(c.t.hDMlqD, {
            onLearnMore: function () {
                _?.(), n(), (0, i.e)();
            },
        });
    return (0, a.jsx)(s.A, {
        artURL: "https://cdn.discordapp.com/assets/content/2d563ce5f261ca4793e70ca87ccd10fd2b224ba302a5cd36414a5e4b4a374725.svg",
        artContainerClassName: o.z,
        type: r.e.VIDEO_BACKGROUNDS_MODAL,
        title: c.intl.string(c.t.fHqiDW),
        body: m,
        glowUp: m,
        analyticsSource: t,
        analyticsLocation: { page: l.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: l.ZSU.BUTTON_CTA },
        onClose: n,
        subscriptionTier: u,
        ...d,
    });
}
