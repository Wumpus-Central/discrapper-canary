n.d(t, { A: () => u });
var i = n(544420),
    l = n(684013),
    a = n(742984),
    s = n(592598),
    r = n(581730),
    o = n(672396),
    d = n(985018);
function u(e, t, n, u, c) {
    if (s.A.isNotificationDisabled(o.KS.ActivityInvite) || null == t.activity) return null;
    let h = t.activity.type,
        A = u.session_id;
    if (null == A) return null;
    let { icon: m, title: g, body: p } = (0, a.TB)(e, t, n),
        { trackView: f, trackClick: _ } = (0, r.Y9)(o.KS.ActivityInvite, {
            notif_type: o.KS.ActivityInvite,
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
        icon: m,
        title: g,
        body: p,
        onNotificationShow: () => {
            f();
        },
        confirmText: d.intl.string(d.t.VJlc0S),
        onConfirmClick: (a, s) => {
            i.A.join({ userId: n.id, sessionId: A, applicationId: c, channelId: e.id, messageId: t.id }),
                l.A.updateNotificationStatus(s),
                _("join");
        },
        onDismissClick: () => {
            _("dismiss");
        },
    };
}
