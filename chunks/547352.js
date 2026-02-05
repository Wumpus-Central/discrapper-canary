c.d(e, { default: () => r });
var a = c(627968);
c(64700);
var n = c(87719),
    o = c(244975),
    s = c(788868),
    i = c(652215),
    d = c(985018),
    p = c(399703);
function r(t) {
    let { onClose: e, source: c, ...r } = t,
        f = d.intl.format(d.t.WMO9po, {
            onAndMore: function () {
                e(), (0, n.e)();
            },
        });
    return (0, a.jsx)(o.A, {
        artURL: p.A,
        type: s.e.PREMIUM_GUILD_IDENTITY_MODAL,
        title: d.intl.string(d.t.kOEBKP),
        body: f,
        glowUp: f,
        analyticsSource: c,
        analyticsLocation: { section: i.JJy.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL, object: i.ZSU.BUTTON_CTA },
        onClose: e,
        ...r,
    });
}
