e.d(n, { default: () => u });
var i = e(200651);
e(192379);
var o = e(98278),
    a = e(790527),
    c = e(474936),
    d = e(981631),
    l = e(388032),
    s = e(330226);
function u(t) {
    let { channel: n, onClose: e, ...u } = t,
        r = l.intl.format(l.t.AVVUsb, {
            onLearnMore: function () {
                e(), (0, o.z)(!0);
            }
        });
    return (0, i.jsx)(a.Z, {
        artURL: s.Z,
        type: c.cd.MESSAGE_LENGTH_UPSELL,
        title: l.intl.string(l.t.SeL3eX),
        body: r,
        glowUp: r,
        analyticsSource: { page: (null == n ? void 0 : n.getGuildId()) != null ? d.ZY5.GUILD_CHANNEL : (null == n ? void 0 : n.isGroupDM()) || (null == n ? void 0 : n.isPrivate()) ? d.ZY5.DM_CHANNEL : null },
        analyticsLocation: {
            section: d.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: d.qAy.BUTTON_CTA
        },
        onClose: e,
        ...u
    });
}
