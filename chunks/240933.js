"use strict";
n.d(t, { A: () => c });
var r = n(544420),
    i = n(684013),
    s = n(742984),
    a = n(592598),
    o = n(581730),
    l = n(672396),
    u = n(985018);
function c(e, t, n, c, d) {
    if (a.A.isNotificationDisabled(l.KS.ActivityInvite) || null == t.activity) return null;
    let _ = t.activity.type,
        f = c.session_id;
    if (null == f) return null;
    let { icon: p, title: h, body: m } = (0, s.TB)(e, t, n),
        { trackView: E, trackClick: g } = (0, o.Y9)(l.KS.ActivityInvite, {
            notif_type: l.KS.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: _,
            activity_name: c.name,
        });
    return {
        icon: p,
        title: h,
        body: m,
        onNotificationShow: () => {
            E();
        },
        confirmText: u.intl.string(u.t.VJlc0S),
        onConfirmClick: (s, a) => {
            r.Ay.join({ userId: n.id, sessionId: f, applicationId: d, channelId: e.id, messageId: t.id }),
                i.A.updateNotificationStatus(a),
                g("join");
        },
        onDismissClick: () => {
            g("dismiss");
        },
    };
}
