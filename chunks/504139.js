"use strict";
n.d(t, { A: () => c });
var i = n(544420),
    s = n(684013),
    l = n(742984),
    a = n(471024),
    r = n(684748),
    o = n(672396),
    d = n(985018);
function c(e, t, n, c, u) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        p = u.session_id;
    if (null == p) return null;
    let { icon: A, title: f, body: _ } = (0, l.TB)(e, t, n),
        { trackView: g, trackClick: m } = (0, r.Y)(o.KS.ActivityInvite, {
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
        icon: A,
        title: f,
        body: _,
        hint: (e) => (0, a.sI)(e, (0, r.J)(), d.t.aB5xLy),
        onNotificationShow: () => {
            g();
        },
        confirmText: d.intl.string(d.t.VJlc0S),
        onConfirmClick: (l, a) => {
            i.Ay.join({ userId: n.id, sessionId: p, applicationId: c.id, channelId: e.id, messageId: t.id }),
                s.A.updateNotificationStatus(a),
                m("join");
        },
        onDismissClick: () => {
            m("dismiss");
        },
    };
}
