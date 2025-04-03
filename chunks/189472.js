n.d(t, { Z: () => b }), n(47120);
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
    f = n(388032);
let b = (e) => {
    let { user: t, channelId: n, reportId: b } = e,
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
                    report_id: b
                }),
                a.Z.updateChannelOverrideSettings(null, h, { muted: !0 }, x.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [h, n, t, b]);
    return (0, r.jsx)(c.ZP, {
        title: f.NW.formatToPlainString(f.t.TRp5wc, { username: g }),
        description: f.NW.string(f.t['yM/+AA']),
        buttonText: j ? f.NW.string(f.t.E8x4Nj) : f.NW.string(f.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: y
    });
};
