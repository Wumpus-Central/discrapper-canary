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
    x = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g } = e,
        f = d.Z.getDMFromUserId(t.id),
        b = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        h = i.useMemo(() => m.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        v = (0, l.e7)([u.ZP], () => (null == f ? null : u.ZP.isChannelMuted(null, f))),
        [j, y] = i.useState(null != v && v),
        O = i.useCallback(() => {
            null != f &&
                (y(!0),
                o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: g,
                }),
                a.Z.updateChannelOverrideSettings(null, f, { muted: !0 }, _.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [f, n, t, g]);
    return (0, r.jsx)(c.JZ, {
        title: x.intl.formatToPlainString(x.t.TRp5wc, { username: h }),
        description: x.intl.string(x.t["yM/+AA"]),
        buttonText: j ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: O,
    });
};
