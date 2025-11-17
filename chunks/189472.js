n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(87051),
    s = n(367907),
    o = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    m = n(5192),
    p = n(621600),
    g = n(981631),
    _ = n(388032);
let h = (e) => {
    let { user: t, channelId: n, reportId: h } = e,
        b = d.Z.getDMFromUserId(t.id),
        x = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = i.useMemo(() => m.ZP.getName(null == x ? void 0 : x.guild_id, null == x ? void 0 : x.id, t), [x, t]),
        v = (0, l.e7)([u.ZP], () => (null == b ? null : u.ZP.isChannelMuted(null, b))),
        [j, y] = i.useState(null != v && v),
        O = i.useCallback(() => {
            null != b &&
                (y(!0),
                s.ZP.trackWithMetadata(g.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: h,
                }),
                a.Z.updateChannelOverrideSettings(null, b, { muted: !0 }, p.ZB.Muted),
                o.Z.showMuteSuccessToast(t.id, n));
        }, [b, n, t, h]);
    return (0, r.jsx)(c.JZ, {
        title: _.intl.formatToPlainString(_.t.TRp5wR, { username: f }),
        description: _.intl.string(_.t["yM/+AJ"]),
        buttonText: j ? _.intl.string(_.t.E8x4Nj) : _.intl.string(_.t.HITUcR),
        buttonDisabled: j,
        onButtonPress: O,
    });
};
