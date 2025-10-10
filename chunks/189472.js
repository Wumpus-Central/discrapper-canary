n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(87051),
    o = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    _ = n(5192),
    m = n(621600),
    p = n(981631),
    g = n(388032);
let f = (e) => {
    let { user: t, channelId: n, reportId: f } = e,
        h = d.Z.getDMFromUserId(t.id),
        b = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        x = i.useMemo(() => _.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        v = (0, l.e7)([u.ZP], () => (null == h ? null : u.ZP.isChannelMuted(null, h))),
        [j, y] = i.useState(null != v && v),
        O = i.useCallback(() => {
            null != h &&
                (y(!0),
                o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: f,
                }),
                a.Z.updateChannelOverrideSettings(null, h, { muted: !0 }, m.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [h, n, t, f]);
    return (0, r.jsx)(c.JZ, {
        title: g.intl.formatToPlainString(g.t.TRp5wc, { username: x }),
        description: g.intl.string(g.t["yM/+AA"]),
        buttonText: j ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: O,
    });
};
