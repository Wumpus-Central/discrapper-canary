t.d(n, { default: () => o });
var a = t(627968);
t(64700);
var s = t(87719),
    i = t(84960),
    l = t(788868),
    r = t(652215),
    c = t(985018);
function o(e) {
    let { onClose: n, source: t, ...o } = e,
        _ = c.intl.format(c.t.WMO9po, {
            onAndMore: function () {
                n(), (0, s.e)();
            },
        });
    return (0, a.jsx)(i.A, {
        artURL: "https://cdn.discordapp.com/assets/content/cebaa07ffa781bd4cb680a3dcfeb8fe4a6efc48bfb7fc4c80068e875049e2961.png",
        type: l.e.PREMIUM_GUILD_IDENTITY_MODAL,
        title: c.intl.string(c.t.kOEBKP),
        body: _,
        glowUp: _,
        analyticsSource: t,
        analyticsLocation: { section: r.JJy.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL, object: r.ZSU.BUTTON_CTA },
        onClose: n,
        ...o,
    });
}
