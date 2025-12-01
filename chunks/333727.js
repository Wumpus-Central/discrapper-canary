n.d(t, { Z: () => h });
var i = n(278323),
    r = n(13245),
    l = n(45114),
    a = n(624864),
    o = n(985149),
    s = n(620954),
    u = n(987650),
    c = n(981631),
    d = n(388032);
function h(e, t, n, h) {
    if (a.Z.isNotificationDisabled(u.n0.ActivityInvite)) return null;
    let p = t.username,
        f = d.intl.format(d.t.VDODnv, {
            username: "",
            game: n.name,
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: g, trackClick: y } = (0, s.Rg)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: h.name,
        });
    return {
        icon: m,
        title: p,
        body: f,
        confirmText: d.intl.string(d.t["fgP/wX"]),
        cancelText: d.intl.string(d.t["tpXzJ+"]),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: (0, o._)() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY,
            }),
                y("join"),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, l.ack)(
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
