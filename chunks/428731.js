"use strict";
n.d(t, { A: () => u });
var r = n(486020),
    i = n(592598),
    s = n(581730),
    a = n(672396),
    o = n(652215),
    l = n(985018);
function u(e, t) {
    if (i.A.isNotificationDisabled(a.KS.ActivityUserJoin)) return null;
    let n = e.username,
        u = l.intl.format(l.t["Yk+uYG"], { username: "" }),
        c = (0, r.ku)(e),
        d = l.intl.string(l.t.WRj1Wn),
        { trackView: _, trackClick: f } = (0, s.Y9)(a.KS.ActivityUserJoin, {
            notif_type: a.KS.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: o.xL.JOIN,
            activity_name: t.name,
        });
    return {
        icon: c,
        title: n,
        body: u,
        hint: d,
        onNotificationShow: () => {
            _();
        },
        onDismissClick: () => {
            f("dismiss");
        },
    };
}
