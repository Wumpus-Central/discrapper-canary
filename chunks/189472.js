n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(87051),
    s = n(367907),
    o = n(681678),
    d = n(138201),
    c = n(592125),
    u = n(9156),
    m = n(5192),
    p = n(621600),
    g = n(981631),
    _ = n(388032);
let x = (e) => {
    let { user: t, channelId: n, reportId: x } = e,
        h = c.Z.getDMFromUserId(t.id),
        b = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        f = l.useMemo(() => m.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        v = (0, i.e7)([u.ZP], () => (null == h ? null : u.ZP.isChannelMuted(null, h))),
        [j, y] = l.useState(null != v && v),
        Z = l.useCallback(() => {
            null != h &&
                (y(!0),
                s.ZP.trackWithMetadata(g.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: x,
                }),
                a.Z.updateChannelOverrideSettings(null, h, { muted: !0 }, p.ZB.Muted),
                o.Z.showMuteSuccessToast(t.id, n));
        }, [h, n, t, x]);
    return (0, r.jsx)(d.JZ, {
        title: _.intl.formatToPlainString(_.t.TRp5wR, { username: f }),
        description: _.intl.string(_.t["yM/+AJ"]),
        buttonText: j ? _.intl.string(_.t.E8x4Nj) : _.intl.string(_.t.HITUcR),
        buttonDisabled: j,
        onButtonPress: Z,
    });
};
