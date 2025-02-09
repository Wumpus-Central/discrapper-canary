n.d(t, { Z: () => v }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(87051),
    s = n(367907),
    o = n(681678),
    d = n(138201),
    c = n(592125),
    u = n(9156),
    m = n(5192),
    x = n(621600),
    _ = n(981631),
    h = n(388032);
let v = (e) => {
    let { user: t, channelId: n, reportId: v } = e,
        g = c.Z.getDMFromUserId(t.id),
        p = (0, r.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        f = i.useMemo(() => m.ZP.getName(null == p ? void 0 : p.guild_id, null == p ? void 0 : p.id, t), [p, t]),
        b = (0, r.e7)([u.ZP], () => (null == g ? null : u.ZP.isChannelMuted(null, g))),
        [Z, j] = i.useState(null != b && b),
        I = i.useCallback(() => {
            null != g &&
                (j(!0),
                s.ZP.trackWithMetadata(_.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: v
                }),
                a.Z.updateChannelOverrideSettings(null, g, { muted: !0 }, x.ZB.Muted),
                o.Z.showMuteSuccessToast(t.id, n));
        }, [g, n, t, v]);
    return (0, l.jsx)(d.ZP, {
        title: h.intl.formatToPlainString(h.t.TRp5wc, { username: f }),
        description: h.intl.string(h.t['yM/+AA']),
        buttonText: Z ? h.intl.string(h.t.E8x4Nj) : h.intl.string(h.t.HITUcX),
        buttonDisabled: Z,
        onButtonPress: I
    });
};
