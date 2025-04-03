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
    let h = t.username,
        f = d.NW.format(d.t.VDODnp, {
            username: '',
            game: n.name
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: g, trackClick: y } = (0, s.R)(c.n0.ActivityInvite, {
            notif_type: c.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: u.mFx.JOIN_REQUEST,
            activity_name: p.name
        });
    return {
        icon: m,
        title: h,
        body: f,
        confirmText: d.NW.string(d.t['fgP/wc']),
        cancelText: d.NW.string(d.t.tpXzJy),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: u.mFx.JOIN,
                activity: p,
                location: l.default.isLocked((0, a.getPID)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY
            }),
                y('join'),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, o.In)(e.id, !0, !0), r.Z.updateNotificationStatus(n), y('decline');
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
