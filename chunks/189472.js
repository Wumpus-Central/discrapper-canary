n.d(t, { Z: () => _ }), n(388685);
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
    p = n(621600),
    x = n(981631),
    b = n(388032);
let _ = (e) => {
    let { user: t, channelId: n, reportId: _ } = e,
        f = d.Z.getDMFromUserId(t.id),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        g = l.useMemo(() => m.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        v = (0, i.e7)([u.ZP], () => (null == f ? null : u.ZP.isChannelMuted(null, f))),
        [j, y] = l.useState(null != v && v),
        O = l.useCallback(() => {
            null != f &&
                (y(!0),
                o.ZP.trackWithMetadata(x.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: _
                }),
                a.Z.updateChannelOverrideSettings(null, f, { muted: !0 }, p.ZB.Muted),
                s.Z.showMuteSuccessToast(t.id, n));
        }, [f, n, t, _]);
    return (0, r.jsx)(c.ZP, {
        title: b.intl.formatToPlainString(b.t.TRp5wc, { username: g }),
        description: b.intl.string(b.t['yM/+AA']),
        buttonText: j ? b.intl.string(b.t.E8x4Nj) : b.intl.string(b.t.HITUcX),
        buttonDisabled: j,
        onButtonPress: O
    });
};
