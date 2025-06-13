n.d(t, { Z: () => h });
var i = n(278323),
    r = n(13245),
    o = n(45114),
    l = n(593481),
    s = n(237997),
    a = n(312839),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function h(e, t, n, h) {
    let p = t.username,
        f = u.intl.format(u.t.VDODnp, {
            username: '',
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: y } = (0, a.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        icon: g,
        title: p,
        body: f,
        hint: (e) => (0, l.QR)(e, (0, a.P)(), u.t['Odi54+']),
        confirmText: u.intl.string(u.t['fgP/wc']),
        cancelText: u.intl.string(u.t.tpXzJy),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: s.default.isInstanceLocked() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
            }),
                y('join'),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, o.In)(
                e.id,
                {
                    section: c.jXE.OVERLAY,
                    object: c.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: c.Qqv.ACK_SEMI_AUTOMATIC
                },
                !0,
                !0
            ),
                r.Z.updateNotificationStatus(n),
                y('decline');
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
