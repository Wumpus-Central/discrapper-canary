i.d(e, { A: () => c });
var n = i(544420),
    l = i(684013),
    a = i(742984),
    r = i(592598),
    s = i(581730),
    o = i(672396),
    u = i(985018);
function c(t, e, i, c, d) {
    if (r.A.isNotificationDisabled(o.KS.ActivityInvite) || null == e.activity) return null;
    let A = e.activity.type,
        f = c.session_id;
    if (null == f) return null;
    let { icon: y, title: p, body: m } = (0, a.TB)(t, e, i),
        { trackView: I, trackClick: g } = (0, s.Y9)(o.KS.ActivityInvite, {
            notif_type: o.KS.ActivityInvite,
            notif_user_id: i.id,
            message_id: e.id,
            message_type: e.type,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
            activity_type: A,
            activity_name: c.name,
        });
    return {
        icon: y,
        title: p,
        body: m,
        onNotificationShow: () => {
            I();
        },
        confirmText: u.intl.string(u.t.VJlc0S),
        onConfirmClick: (a, r) => {
            n.Ay.join({ userId: i.id, sessionId: f, applicationId: d, channelId: t.id, messageId: e.id }),
                l.A.updateNotificationStatus(r),
                g("join");
        },
        onDismissClick: () => {
            g("dismiss");
        },
    };
}
