t.d(n, { default: () => _ });
var a = t(627968);
t(64700);
var s = t(87719),
    i = t(244975),
    l = t(788868),
    r = t(652215),
    c = t(985018),
    o = t(399703);
function _(e) {
    let { onClose: n, source: t, ..._ } = e,
        d = c.intl.format(c.t.WMO9po, {
            onAndMore: function () {
                n(), (0, s.e)();
            },
        });
    return (0, a.jsx)(i.A, {
        artURL: o.A,
        type: l.e.PREMIUM_GUILD_IDENTITY_MODAL,
        title: c.intl.string(c.t.kOEBKP),
        body: d,
        glowUp: d,
        analyticsSource: t,
        analyticsLocation: { section: r.JJy.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL, object: r.ZSU.BUTTON_CTA },
        onClose: n,
        ..._,
    });
}
