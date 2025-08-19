n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(87051),
    l = n(367907),
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
        b = d.Z.getDMFromUserId(t.id),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        x = a.useMemo(() => _.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        v = (0, i.e7)([u.ZP], () => (null == b ? null : u.ZP.isChannelMuted(null, b))),
        [j, y] = a.useState(null != v && v),
        C = a.useCallback(() => {
            null != b &&
                (y(!0),
                l.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: f,
                }),
                o.Z.updateChannelOverrideSettings(null, b, { muted: !0 }, m.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [b, n, t, f]);
    return (0, r.jsx)(c.JZ, {
        title: g.intl.formatToPlainString(g.t.TRp5wc, { username: x }),
        description: g.intl.string(g.t["yM/+AA"]),
        buttonText: j ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: C,
    });
};
