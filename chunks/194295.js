n.d(t, { Z: () => h });
var i = n(278323),
    r = n(13245),
    s = n(45114),
    o = n(593481),
    l = n(237997),
    a = n(312839),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function h(e, t, n, h) {
    let p = t.username,
        f = u.intl.format(u.t.VDODnv, {
            username: "",
            game: n.name,
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: y } = (0, a.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name,
        });
    return {
        icon: g,
        title: p,
        body: f,
        hint: (e) => (0, o.QR)(e, (0, a.P)(), u.t.Odi54y),
        confirmText: u.intl.string(u.t["fgP/wX"]),
        cancelText: u.intl.string(u.t["tpXzJ+"]),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: l.default.isInstanceLocked() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY,
            }),
                y("join"),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, s.ack)(
                e.id,
                {
                    section: c.jXE.OVERLAY,
                    object: c.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                r.Z.updateNotificationStatus(n),
                y("decline");
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
