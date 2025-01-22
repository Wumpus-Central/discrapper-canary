var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(87051),
    u = r(367907),
    c = r(681678),
    d = r(138201),
    f = r(592125),
    p = r(9156),
    h = r(5192),
    _ = r(621600),
    m = r(981631),
    g = r(388032);
let E = (e) => {
    let { user: n, channelId: r, reportId: i } = e,
        E = f.Z.getDMFromUserId(n.id),
        v = (0, s.e7)([f.Z], () => f.Z.getChannel(r), [r]),
        y = o.useMemo(() => h.ZP.getName(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, n), [v, n]),
        b = (0, s.e7)([p.ZP], () => (null == E ? null : p.ZP.isChannelMuted(null, E))),
        [I, T] = o.useState(null != b && b),
        S = o.useCallback(() => {
            null != E &&
                (T(!0),
                u.ZP.trackWithMetadata(m.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: n.id,
                    report_id: i
                }),
                l.Z.updateChannelOverrideSettings(null, E, { muted: !0 }, _.ZB.Muted),
                c.Z.showMuteSuccessToast(n.id, r));
        }, [E, r, n, i]);
    return (0, a.jsx)(d.ZP, {
        title: g.intl.formatToPlainString(g.t.TRp5wc, { username: y }),
        description: g.intl.string(g.t['yM/+AA']),
        buttonText: I ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcX),
        buttonDisabled: I,
        onButtonPress: S
    });
};
n.Z = E;
