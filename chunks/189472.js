n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(87051),
    o = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(9156),
    m = n(5192),
    x = n(621600),
    p = n(981631),
    b = n(388032);
let f = (e) => {
    let { user: t, channelId: n, reportId: f } = e,
        h = d.Z.getDMFromUserId(t.id),
        _ = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        g = l.useMemo(() => m.ZP.getName(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, t), [_, t]),
        v = (0, i.e7)([u.ZP], () => (null == h ? null : u.ZP.isChannelMuted(null, h))),
        [j, N] = l.useState(null != v && v),
        y = l.useCallback(() => {
            null != h &&
                (N(!0),
                o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: f
                }),
                a.Z.updateChannelOverrideSettings(null, h, { muted: !0 }, x.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [h, n, t, f]);
    return (0, r.jsx)(c.ZP, {
        title: b.NW.formatToPlainString(b.t.TRp5wc, { username: g }),
        description: b.NW.string(b.t['yM/+AA']),
        buttonText: j ? b.NW.string(b.t.E8x4Nj) : b.NW.string(b.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: y
    });
};
