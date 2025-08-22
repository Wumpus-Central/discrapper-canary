n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
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
let h = (e) => {
    let { user: t, channelId: n, reportId: h } = e,
        b = d.Z.getDMFromUserId(t.id),
        _ = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = i.useMemo(() => m.ZP.getName(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, t), [_, t]),
        v = (0, l.e7)([u.ZP], () => (null == b ? null : u.ZP.isChannelMuted(null, b))),
        [j, y] = i.useState(null != v && v),
        O = i.useCallback(() => {
            null != b &&
                (y(!0),
                s.ZP.trackWithMetadata(g.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: h,
                }),
                a.Z.updateChannelOverrideSettings(null, b, { muted: !0 }, p.ZB.Muted),
                o.Z.showMuteSuccessToast(t.id, n));
        }, [b, n, t, h]);
    return (0, r.jsx)(c.JZ, {
        title: x.intl.formatToPlainString(x.t.TRp5wc, { username: f }),
        description: x.intl.string(x.t["yM/+AA"]),
        buttonText: j ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: O,
    });
};
