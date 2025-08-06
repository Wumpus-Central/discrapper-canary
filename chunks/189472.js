n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(87051),
    s = n(367907),
    o = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    m = n(5192),
    p = n(621600),
    g = n(981631),
    x = n(388032);
let _ = (e) => {
    let { user: t, channelId: n, reportId: _ } = e,
        b = d.Z.getDMFromUserId(t.id),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = l.useMemo(() => m.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        v = (0, i.e7)([u.ZP], () => (null == b ? null : u.ZP.isChannelMuted(null, b))),
        [j, y] = l.useState(null != v && v),
        O = l.useCallback(() => {
            null != b &&
                (y(!0),
                s.ZP.trackWithMetadata(g.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: _,
                }),
                a.Z.updateChannelOverrideSettings(null, b, { muted: !0 }, p.ZB.Muted),
                o.Z.showMuteSuccessToast(t.id, n));
        }, [b, n, t, _]);
    return (0, r.jsx)(c.ZP, {
        title: x.intl.formatToPlainString(x.t.TRp5wc, { username: f }),
        description: x.intl.string(x.t["yM/+AA"]),
        buttonText: j ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: O,
    });
};
