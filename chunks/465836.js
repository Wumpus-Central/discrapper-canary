e.d(n, { default: () => f });
var a = e(200651);
e(192379);
var i = e(703558),
    o = e(585483),
    s = e(403182),
    c = e(127654),
    l = e(98278),
    d = e(790527),
    r = e(474936),
    u = e(981631),
    L = e(388032),
    p = e(330226);
function f(t) {
    let { channel: n, onClose: e, content: f, ...g } = t;
    function E() {
        e(), (0, l.z)(!0);
    }
    return (0, a.jsx)(d.Z, {
        artURL: p.Z,
        type: r.cd.MESSAGE_LENGTH_UPSELL,
        title: L.intl.string(L.t.TZT3sL),
        body: L.intl.format(L.t.QhcEAA, {
            maxLength: u.J6R,
            onLearnMore: E
        }),
        context: L.intl.formatToPlainString(L.t.Fc1uVV, { maxLength: u.J6R }),
        glowUp: L.intl.format(L.t.Mi8kt7, { onLearnMore: E }),
        analyticsSource: { page: (null == n ? void 0 : n.getGuildId()) != null ? u.ZY5.GUILD_CHANNEL : (null == n ? void 0 : n.isGroupDM()) || (null == n ? void 0 : n.isPrivate()) ? u.ZY5.DM_CHANNEL : null },
        analyticsLocation: {
            section: u.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: u.qAy.BUTTON_CTA
        },
        onClose: e,
        secondaryCTA: L.intl.string(L.t.Fnsb1t),
        onSecondaryClick: function () {
            e();
            let t = new Blob([f], { type: 'text/plain' });
            (0, c.d)([(0, s.dp)(t, 'message.txt')], n, i.d.ChannelMessage, {
                requireConfirm: !0,
                showLargeMessageDialog: !0
            }),
                o.S.dispatchToLastSubscribed(u.CkL.CLEAR_TEXT);
        },
        ...g
    });
}
