var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(87051),
    u = r(367907),
    c = r(681678),
    d = r(138201),
    f = r(592125),
    _ = r(9156),
    h = r(5192),
    p = r(621600),
    m = r(981631),
    g = r(388032);
let E = (e) => {
    let { user: n, channelId: r, reportId: i } = e,
        E = f.Z.getDMFromUserId(n.id),
        v = (0, o.e7)([f.Z], () => f.Z.getChannel(r), [r]),
        I = s.useMemo(() => h.ZP.getName(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, n), [v, n]),
        T = (0, o.e7)([_.ZP], () => (null == E ? null : _.ZP.isChannelMuted(null, E))),
        [b, y] = s.useState(null != T && T),
        S = s.useCallback(() => {
            null != E &&
                (y(!0),
                u.ZP.trackWithMetadata(m.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: n.id,
                    report_id: i
                }),
                l.Z.updateChannelOverrideSettings(null, E, { muted: !0 }, p.ZB.Muted),
                c.Z.showMuteSuccessToast(n.id, r));
        }, [E, r, n, i]);
    return (0, a.jsx)(d.ZP, {
        title: g.intl.formatToPlainString(g.t.TRp5wc, { username: I }),
        description: g.intl.string(g.t['yM/+AA']),
        buttonText: b ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcX),
        buttonDisabled: b,
        onButtonPress: S
    });
};
n.Z = E;
