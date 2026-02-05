a.d(e, { default: () => r });
var n = a(627968);
a(64700);
var c = a(87719),
    i = a(244975),
    s = a(788868),
    o = a(652215),
    d = a(985018),
    l = a(736975);
function r(t) {
    let { channel: e, onClose: a, ...r } = t,
        p = d.intl.format(d.t.AVVUse, {
            onLearnMore: function () {
                a(), (0, c.e)();
            },
        });
    return (0, n.jsx)(i.A, {
        artURL: l.A,
        type: s.e.MESSAGE_LENGTH_UPSELL,
        title: d.intl.string(d.t.SeL3ec),
        body: p,
        glowUp: p,
        analyticsSource: {
            page:
                e?.getGuildId() != null
                    ? o.liQ.GUILD_CHANNEL
                    : e?.isGroupDM() || e?.isPrivate()
                      ? o.liQ.DM_CHANNEL
                      : null,
        },
        analyticsLocation: { section: o.JJy.MESSAGE_LENGTH_UPSELL_MODAL, object: o.ZSU.BUTTON_CTA },
        onClose: a,
        ...r,
    });
}
