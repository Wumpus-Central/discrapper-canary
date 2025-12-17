n.d(t, { Z: () => f });
var i = n(278323),
    r = n(13245),
    a = n(45114),
    s = n(593481),
    o = n(237997),
    l = n(312839),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function f(e, t, n, f) {
    let h = t.username,
        p = u.intl.format(u.t.VDODnv, {
            username: "",
            game: n.name,
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: b, trackClick: m } = (0, l.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name,
        });
    return {
        icon: g,
        title: h,
        body: p,
        hint: (e) => (0, s.QR)(e, (0, l.P)(), u.t.Odi54y),
        confirmText: u.intl.string(u.t["fgP/wX"]),
        cancelText: u.intl.string(u.t["tpXzJ+"]),
        onNotificationShow: () => {
            b();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: f,
                location: o.default.isInstanceLocked() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY,
            }),
                m("join"),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, a.ack)(
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
                m("decline");
        },
        onDismissClick: () => {
            m("dismiss");
        },
    };
}
