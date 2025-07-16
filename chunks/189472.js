(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(442837),
    o = n(87051),
    l = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    m = n(5192),
    p = n(621600),
    _ = n(981631),
    b = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g } = e,
        x = d.Z.getDMFromUserId(t.id),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = a.useMemo(() => m.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        v = (0, i.e7)([u.ZP], () => (null == x ? null : u.ZP.isChannelMuted(null, x))),
        [j, C] = a.useState(null != v && v),
        y = a.useCallback(() => {
            null != x &&
                (C(!0),
                l.ZP.trackWithMetadata(_.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: g
                }),
                o.Z.updateChannelOverrideSettings(null, x, { muted: !0 }, p.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [x, n, t, g]);
    return (0, r.jsx)(c.ZP, {
        title: b.intl.formatToPlainString(b.t.TRp5wc, { username: f }),
        description: b.intl.string(b.t['yM/+AA']),
        buttonText: j ? b.intl.string(b.t.E8x4Nj) : b.intl.string(b.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: y
    });
};
