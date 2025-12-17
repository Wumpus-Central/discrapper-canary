n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(87051),
    s = n(367907),
    o = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    m = n(5192),
    b = n(621600),
    p = n(981631),
    g = n(388032);
let f = (e) => {
    let { user: t, channelId: n, reportId: f } = e,
        x = d.Z.getDMFromUserId(t.id),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        v = l.useMemo(() => m.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        j = (0, i.e7)([u.ZP], () => (null == x ? null : u.ZP.isChannelMuted(null, x))),
        [_, y] = l.useState(null != j && j),
        O = l.useCallback(() => {
            null != x &&
                (y(!0),
                s.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: f,
                }),
                a.Z.updateChannelOverrideSettings(null, x, { muted: !0 }, b.ZB.Muted),
                o.Z.showMuteSuccessToast(t.id, n));
        }, [x, n, t, f]);
    return (0, r.jsx)(c.JZ, {
        title: g.intl.formatToPlainString(g.t.TRp5wR, { username: v }),
        description: g.intl.string(g.t["yM/+AJ"]),
        buttonText: _ ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcR),
        buttonDisabled: _,
        onButtonPress: O,
    });
};
