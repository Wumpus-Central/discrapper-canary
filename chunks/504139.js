n.d(t, { A: () => d });
var i = n(544420),
    r = n(684013),
    s = n(742984),
    l = n(471024),
    o = n(684748),
    a = n(672396),
    c = n(985018);
function d(e, t, n, d, u) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        p = u.session_id;
    if (null == p) return null;
    let { icon: f, title: b, body: g } = (0, s.TB)(e, t, n),
        { trackView: y, trackClick: A } = (0, o.Y)(a.KS.ActivityInvite, {
            notif_type: a.KS.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: h,
            activity_name: u.name,
        });
    return {
        icon: f,
        title: b,
        body: g,
        hint: (e) => (0, l.sI)(e, (0, o.J)(), c.t.aB5xLy),
        onNotificationShow: () => {
            y();
        },
        confirmText: c.intl.string(c.t.VJlc0S),
        onConfirmClick: (s, l) => {
            i.A.join({
                userId: n.id,
                sessionId: p,
                applicationId: d.id,
                channelId: e.id,
                messageId: t.id,
            }),
                r.A.updateNotificationStatus(l),
                A("join");
        },
        onDismissClick: () => {
            A("dismiss");
        },
    };
}
