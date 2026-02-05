n.d(t, { A: () => h });
var i = n(308368),
    l = n(684013),
    a = n(334738),
    s = n(592598),
    r = n(481484),
    o = n(581730),
    d = n(672396),
    u = n(652215),
    c = n(985018);
function h(e, t, n, h) {
    if (s.A.isNotificationDisabled(d.KS.ActivityInvite)) return null;
    let A = t.username,
        m = c.intl.format(c.t.VDODnv, { username: "", game: n.name }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: p, trackClick: f } = (0, o.Y9)(d.KS.ActivityInvite, {
            notif_type: d.KS.ActivityInvite,
            notif_user_id: t.id,
            activity_type: u.xL.JOIN_REQUEST,
            activity_name: h.name,
        });
    return {
        icon: g,
        title: A,
        body: m,
        confirmText: c.intl.string(c.t["fgP/wX"]),
        cancelText: c.intl.string(c.t["tpXzJ+"]),
        onNotificationShow: () => {
            p();
        },
        onConfirmClick: (t, n) => {
            i.A.sendActivityInvite({
                channelId: e.id,
                type: u.xL.JOIN,
                activity: h,
                location: (0, r.y)() ? u.ThZ.LOCKED_OVERLAY : u.ThZ.UNLOCKED_OVERLAY,
            }),
                f("join"),
                l.A.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, a.ack)(
                e.id,
                {
                    section: u.JJy.OVERLAY,
                    object: u.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: u.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                l.A.updateNotificationStatus(n),
                f("decline");
        },
        onDismissClick: () => {
            f("dismiss");
        },
    };
}
