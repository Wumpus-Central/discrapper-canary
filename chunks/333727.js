n.d(t, { Z: () => p });
var i = n(278323),
    r = n(13245),
    o = n(45114),
    l = n(237997),
    a = n(145597),
    s = n(620954),
    c = n(987650),
    u = n(981631),
    d = n(388032);
function p(e, t, n, p) {
    let f = t.username,
        h = d.NW.format(d.t.VDODnp, {
            username: '',
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: _, trackClick: m } = (0, s.R)(c.n0.ActivityInvite, {
            notif_type: c.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: u.mFx.JOIN_REQUEST,
            activity_name: p.name
        });
    return {
        icon: g,
        title: f,
        body: h,
        confirmText: d.NW.string(d.t['fgP/wc']),
        cancelText: d.NW.string(d.t.tpXzJy),
        onNotificationShow: () => {
            _();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: u.mFx.JOIN,
                activity: p,
                location: l.Z.isLocked((0, a.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY
            }),
                m('join'),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, o.In)(e.id, !0, !0), r.Z.updateNotificationStatus(n), m('decline');
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
