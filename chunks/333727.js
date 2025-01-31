i.d(e, { Z: () => h });
var n = i(278323),
    l = i(13245),
    s = i(45114),
    o = i(237997),
    r = i(145597),
    a = i(620954),
    d = i(987650),
    u = i(981631),
    c = i(388032);
function h(t, e, i, h) {
    let E = e.username,
        p = c.intl.format(c.t.VDODnp, {
            username: '',
            game: i.name
        }),
        S = e.getAvatarURL(t.guild_id, 80),
        { trackView: f, trackClick: g } = (0, a.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: e.id,
            activity_type: u.mFx.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: S,
        title: E,
        body: p,
        confirmText: c.intl.string(c.t['fgP/wc']),
        cancelText: c.intl.string(c.t.tpXzJy),
        onNotificationShow: () => {
            f();
        },
        onConfirmClick: (e, i) => {
            n.Z.sendActivityInvite({
                channelId: t.id,
                type: u.mFx.JOIN,
                activity: h,
                location: o.Z.isLocked((0, r.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY
            }),
                g('join'),
                l.Z.updateNotificationStatus(i);
        },
        onCancelClick: (e, i) => {
            (0, s.In)(t.id, !0, !0), l.Z.updateNotificationStatus(i), g('decline');
        },
        onDismissClick: () => {
            g('dismiss');
        }
    };
}
