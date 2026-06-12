a.d(e, { default: () => y });
var c = a(627968);
a(64700);
var n = a(17928),
    s = a(252732),
    o = a(287809),
    i = a(428262),
    r = a(87719),
    d = a(84960),
    p = a(788868),
    u = a(652215),
    l = a(339984),
    f = a(375708);
function y(t) {
    let { onClose: e, source: a, ...y } = t,
        U = (0, n.bG)([o.default], () => o.default.getCurrentUser()),
        b = i.Ay.isPremium(U) ? f.t.E0sNsc : f.t.UBcuto,
        C = f.intl.format(b, {
            onLearnMore: function () {
                e(), (0, r.e)();
            },
        });
    return (0, c.jsx)(d.A, {
        artURL: "https://cdn.discordapp.com/assets/content/910920da94849fc94f7ef295805ae6daacc664c3b5e62f5000239ff2053d73a7.png",
        type: p.e.CUSTOM_PROFILE_UPSELL,
        title: f.intl.string(f.t.BbsMm4),
        body: C,
        glowUp: C,
        onSecondaryClick: () => {
            e(), (0, s.XD)({ uploadType: l.HL.BANNER, analyticsSource: a });
        },
        secondaryCTA: f.intl.string(f.t.SpAQib),
        analyticsSource: a,
        analyticsLocation: { section: u.JJy.USER_PROFILE, object: u.ZSU.BUTTON_CTA },
        onClose: e,
        ...y,
    });
}
