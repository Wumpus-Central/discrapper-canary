n.d(t, { Z: () => h });
var i = n(278323),
    r = n(13245),
    s = n(45114),
    o = n(593481),
    l = n(237997),
    a = n(312839),
    c = n(981631),
    u = n(987650),
    d = n(388032);
function h(e, t, n, h) {
    let p = t.username,
        f = d.NW.format(d.t.VDODnp, {
            username: '',
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: y } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        icon: g,
        title: p,
        body: f,
        hint: (e) => (0, o.QR)(e, (0, a.P)(), d.t['Odi54+']),
        confirmText: d.NW.string(d.t['fgP/wc']),
        cancelText: d.NW.string(d.t.tpXzJy),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: l.default.isInstanceLocked() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
            }),
                y('join'),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, s.In)(e.id, !0, !0), r.Z.updateNotificationStatus(n), y('decline');
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
