n.d(t, { A: () => d });
var i = n(486020),
    l = n(592598),
    a = n(581730),
    s = n(672396),
    r = n(652215),
    o = n(985018);
function d(e, t) {
    if (l.A.isNotificationDisabled(s.KS.ActivityUserJoin)) return null;
    let n = e.username,
        d = o.intl.format(o.t["Yk+uYG"], { username: "" }),
        u = (0, i.ku)(e),
        c = o.intl.string(o.t.WRj1Wn),
        { trackView: h, trackClick: A } = (0, a.Y9)(s.KS.ActivityUserJoin, {
            notif_type: s.KS.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: r.xL.JOIN,
            activity_name: t.name,
        });
    return {
        icon: u,
        title: n,
        body: d,
        hint: c,
        onNotificationShow: () => {
            h();
        },
        onDismissClick: () => {
            A("dismiss");
        },
    };
}
