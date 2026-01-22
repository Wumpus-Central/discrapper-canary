n.d(t, {
    A: () => u,
});
var i = n(544420),
    r = n(684013),
    l = n(742984),
    a = n(592598),
    o = n(581730),
    s = n(672396),
    c = n(985018);

function u(e, t, n, u, d) {
    if (a.A.isNotificationDisabled(s.KS.ActivityInvite) || null == t.activity || null == u.id) return null;
    let p = t.activity.type,
        h = d.session_id;
    if (null == h) return null;
    let { icon: f, title: m, body: g } = (0, l.TB)(e, t, n),
        { trackView: y, trackClick: A } = (0, o.Y9)(s.KS.ActivityInvite, {
            notif_type: s.KS.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: p,
            activity_name: d.name,
        });
    return {
        icon: f,
        title: m,
        body: g,
        onNotificationShow: () => {
            y();
        },
        confirmText: c.intl.string(c.t.VJlc0S),
        onConfirmClick: (l, a) => {
            var o;
            i.A.join({
                userId: n.id,
                sessionId: h,
                applicationId: null != (o = u.altId) ? o : u.id,
                channelId: e.id,
                messageId: t.id,
            }),
                r.A.updateNotificationStatus(a),
                A("join");
        },
        onDismissClick: () => {
            A("dismiss");
        },
    };
}
