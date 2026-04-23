t.d(n, { default: () => p });
var a = t(627968);
t(64700);
var s = t(17928),
    i = t(252732),
    r = t(287809),
    l = t(927578),
    c = t(87719),
    o = t(84960),
    d = t(788868),
    _ = t(652215),
    u = t(339984),
    m = t(985018);
function p(e) {
    let { onClose: n, source: t, ...p } = e,
        L = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        A = l.Ay.isPremium(L) ? m.t.E0sNsc : m.t.UBcuto,
        E = m.intl.format(A, {
            onLearnMore: function () {
                n(), (0, c.e)();
            },
        });
    return (0, a.jsx)(o.A, {
        artURL: "https://cdn.discordapp.com/assets/content/910920da94849fc94f7ef295805ae6daacc664c3b5e62f5000239ff2053d73a7.png",
        type: d.e.CUSTOM_PROFILE_UPSELL,
        title: m.intl.string(m.t.BbsMm4),
        body: E,
        glowUp: E,
        onSecondaryClick: () => {
            n(), (0, i.XD)({ uploadType: u.HL.BANNER, analyticsSource: t });
        },
        secondaryCTA: m.intl.string(m.t.SpAQib),
        analyticsSource: t,
        analyticsLocation: { section: _.JJy.USER_PROFILE, object: _.ZSU.BUTTON_CTA },
        onClose: n,
        ...p,
    });
}
