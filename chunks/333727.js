n.d(t, { Z: () => h });
var i = n(278323),
    l = n(13245),
    r = n(45114),
    o = n(237997),
    a = n(145597),
    s = n(620954),
    d = n(987650),
    c = n(981631),
    u = n(388032);
function h(e, t, n, h) {
    let _ = t.username,
        p = u.intl.format(u.t.VDODnp, {
            username: '',
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: f, trackClick: m } = (0, s.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: g,
        title: _,
        body: p,
        confirmText: u.intl.string(u.t['fgP/wc']),
        cancelText: u.intl.string(u.t.tpXzJy),
        onNotificationShow: () => {
            f();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: o.Z.isLocked((0, a.QF)()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
            }),
                m('join'),
                l.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, r.In)(e.id, !0, !0), l.Z.updateNotificationStatus(n), m('decline');
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
