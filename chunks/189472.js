n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(87051),
    o = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    m = n(5192),
    _ = n(621600),
    p = n(981631),
    f = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g } = e,
        x = d.Z.getDMFromUserId(t.id),
        b = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        h = i.useMemo(() => m.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        v = (0, l.e7)([u.ZP], () => (null == x ? null : u.ZP.isChannelMuted(null, x))),
        [j, y] = i.useState(null != v && v),
        O = i.useCallback(() => {
            null != x &&
                (y(!0),
                o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: g,
                }),
                a.Z.updateChannelOverrideSettings(null, x, { muted: !0 }, _.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [x, n, t, g]);
    return (0, r.jsx)(c.JZ, {
        title: f.intl.formatToPlainString(f.t.TRp5wc, { username: h }),
        description: f.intl.string(f.t["yM/+AA"]),
        buttonText: j ? f.intl.string(f.t.E8x4Nj) : f.intl.string(f.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: O,
    });
};
