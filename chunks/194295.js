n.d(t, { Z: () => h });
var i = n(278323),
    s = n(13245),
    l = n(45114),
    a = n(593481),
    r = n(237997),
    o = n(312839),
    d = n(981631),
    c = n(987650),
    u = n(388032);
function h(e, t, n, h) {
    let p = t.username,
        g = u.intl.format(u.t.VDODnp, {
            username: '',
            game: n.name
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: f, trackClick: _ } = (0, o.R)(c.n0.ActivityInvite, {
            notif_type: c.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        icon: m,
        title: p,
        body: g,
        hint: (e) => (0, a.QR)(e, (0, o.P)(), u.t['Odi54+']),
        confirmText: u.intl.string(u.t['fgP/wc']),
        cancelText: u.intl.string(u.t.tpXzJy),
        onNotificationShow: () => {
            f();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: d.mFx.JOIN,
                activity: h,
                location: r.Z.isInstanceLocked() ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY
            }),
                _('join'),
                s.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, l.In)(e.id, !0, !0), s.Z.updateNotificationStatus(n), _('decline');
        },
        onDismissClick: () => {
            _('dismiss');
        }
    };
}
