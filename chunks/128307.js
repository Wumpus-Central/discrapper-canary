n.d(t, {
    A: () => p,
});
var i = n(308368),
    r = n(684013),
    l = n(334738),
    a = n(592598),
    o = n(481484),
    s = n(581730),
    c = n(672396),
    u = n(652215),
    d = n(985018);

function p(e, t, n, p) {
    if (a.A.isNotificationDisabled(c.KS.ActivityInvite)) return null;
    let h = t.username,
        f = d.intl.format(d.t.VDODnv, {
            username: "",
            game: n.name,
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: g, trackClick: y } = (0, s.Y9)(c.KS.ActivityInvite, {
            notif_type: c.KS.ActivityInvite,
            notif_user_id: t.id,
            activity_type: u.xL.JOIN_REQUEST,
            activity_name: p.name,
        });
    return {
        icon: m,
        title: h,
        body: f,
        confirmText: d.intl.string(d.t["fgP/wX"]),
        cancelText: d.intl.string(d.t["tpXzJ+"]),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: (t, n) => {
            i.A.sendActivityInvite({
                channelId: e.id,
                type: u.xL.JOIN,
                activity: p,
                location: (0, o.y)() ? u.ThZ.LOCKED_OVERLAY : u.ThZ.UNLOCKED_OVERLAY,
            }),
                y("join"),
                r.A.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, l.ack)(
                e.id,
                {
                    section: u.JJy.OVERLAY,
                    object: u.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: u.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                r.A.updateNotificationStatus(n),
                y("decline");
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
