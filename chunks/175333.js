"use strict";
n.d(t, { A: () => d });
var i = n(471024),
    s = n(486020),
    l = n(684748),
    a = n(652215),
    r = n(672396),
    o = n(985018);
function d(e, t) {
    let n = e.username,
        d = o.intl.format(o.t["Yk+uYG"], { username: "" }),
        c = (0, s.ku)(e),
        { trackView: u, trackClick: h } = (0, l.Y)(r.KS.ActivityUserJoin, {
            notif_type: r.KS.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.xL.JOIN,
            activity_name: t.name,
        });
    return {
        icon: c,
        title: n,
        body: d,
        hint: (e) => (0, i.de)(e, o.intl.string(o.t.WRj1Wn)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h("dismiss");
        },
    };
}
