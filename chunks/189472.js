n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    l = n(87051),
    o = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    m = n(5192),
    p = n(621600),
    _ = n(981631),
    g = n(388032);
let b = (e) => {
    let { user: t, channelId: n, reportId: b } = e,
        h = d.Z.getDMFromUserId(t.id),
        x = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = a.useMemo(() => m.ZP.getName(null == x ? void 0 : x.guild_id, null == x ? void 0 : x.id, t), [x, t]),
        v = (0, i.e7)([u.ZP], () => (null == h ? null : u.ZP.isChannelMuted(null, h))),
        [j, y] = a.useState(null != v && v),
        C = a.useCallback(() => {
            null != h &&
                (y(!0),
                o.ZP.trackWithMetadata(_.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: b,
                }),
                l.Z.updateChannelOverrideSettings(null, h, { muted: !0 }, p.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [h, n, t, b]);
    return (0, r.jsx)(c.JZ, {
        title: g.intl.formatToPlainString(g.t.TRp5wc, { username: f }),
        description: g.intl.string(g.t["yM/+AA"]),
        buttonText: j ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: C,
    });
};
