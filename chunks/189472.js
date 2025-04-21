n.d(t, { Z: () => h }), n(388685);
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
let h = (e) => {
    let { user: t, channelId: n, reportId: h } = e,
        _ = d.Z.getDMFromUserId(t.id),
        f = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        g = l.useMemo(() => m.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, t), [f, t]),
        v = (0, i.e7)([u.ZP], () => (null == _ ? null : u.ZP.isChannelMuted(null, _))),
        [j, y] = l.useState(null != v && v),
        O = l.useCallback(() => {
            null != _ &&
                (y(!0),
                o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: h
                }),
                a.Z.updateChannelOverrideSettings(null, _, { muted: !0 }, x.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [_, n, t, h]);
    return (0, r.jsx)(c.ZP, {
        title: b.intl.formatToPlainString(b.t.TRp5wc, { username: g }),
        description: b.intl.string(b.t['yM/+AA']),
        buttonText: j ? b.intl.string(b.t.E8x4Nj) : b.intl.string(b.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: O
    });
};
