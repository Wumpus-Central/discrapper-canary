n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(87051),
    o = n(367907),
    l = n(681678),
    u = n(138201),
    c = n(592125),
    d = n(9156),
    f = n(5192),
    _ = n(621600),
    p = n(981631),
    h = n(388032);
let m = (e) => {
    let { user: t, channelId: n, reportId: m } = e,
        g = c.Z.getDMFromUserId(t.id),
        E = (0, a.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        v = r.useMemo(() => f.ZP.getName(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, t), [E, t]),
        y = (0, a.e7)([d.ZP], () => (null == g ? null : d.ZP.isChannelMuted(null, g))),
        [I, T] = r.useState(null != y && y),
        b = r.useCallback(() => {
            null != g &&
                (T(!0),
                o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: m
                }),
                s.Z.updateChannelOverrideSettings(null, g, { muted: !0 }, _.ZB.Muted),
                l.Z.showMuteSuccessToast(t.id, n));
        }, [g, n, t, m]);
    return (0, i.jsx)(u.ZP, {
        title: h.intl.formatToPlainString(h.t.TRp5wc, { username: v }),
        description: h.intl.string(h.t['yM/+AA']),
        buttonText: I ? h.intl.string(h.t.E8x4Nj) : h.intl.string(h.t.HITUcX),
        buttonDisabled: I,
        onButtonPress: b
    });
};
