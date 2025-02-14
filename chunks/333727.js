n.d(t, { Z: () => h });
var i = n(278323),
    l = n(13245),
    r = n(45114),
    o = n(237997),
    a = n(145597),
    s = n(620954),
    d = n(987650),
    u = n(981631),
    c = n(388032);
function h(e, t, n, h) {
    let _ = t.username,
        p = c.intl.format(c.t.VDODnp, {
            username: '',
            game: n.name
        }),
        f = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: g } = (0, s.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: u.mFx.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: f,
        title: _,
        body: p,
        confirmText: c.intl.string(c.t['fgP/wc']),
        cancelText: c.intl.string(c.t.tpXzJy),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: u.mFx.JOIN,
                activity: h,
                location: o.Z.isLocked((0, a.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY
            }),
                g('join'),
                l.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, r.In)(e.id, !0, !0), l.Z.updateNotificationStatus(n), g('decline');
        },
        onDismissClick: () => {
            g('dismiss');
        }
    };
}
