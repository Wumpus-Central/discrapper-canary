n.d(t, { Z: () => f });
var i = n(278323),
    r = n(13245),
    a = n(45114),
    l = n(624864),
    o = n(985149),
    s = n(620954),
    c = n(987650),
    u = n(981631),
    d = n(388032);
function f(e, t, n, f) {
    if (l.Z.isNotificationDisabled(c.n0.ActivityInvite)) return null;
    let h = t.username,
        p = d.intl.format(d.t.VDODnv, {
            username: "",
            game: n.name,
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: g, trackClick: b } = (0, s.Rg)(c.n0.ActivityInvite, {
            notif_type: c.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: u.mFx.JOIN_REQUEST,
            activity_name: f.name,
        });
    return {
        icon: m,
        title: h,
        body: p,
        confirmText: d.intl.string(d.t["fgP/wX"]),
        cancelText: d.intl.string(d.t["tpXzJ+"]),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: u.mFx.JOIN,
                activity: f,
                location: (0, o._)() ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY,
            }),
                b("join"),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, a.ack)(
                e.id,
                {
                    section: u.jXE.OVERLAY,
                    object: u.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: u.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                r.Z.updateNotificationStatus(n),
                b("decline");
        },
        onDismissClick: () => {
            b("dismiss");
        },
    };
}
