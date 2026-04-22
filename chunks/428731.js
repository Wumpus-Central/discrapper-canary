i.d(e, { A: () => u });
var n = i(486020),
    l = i(592598),
    a = i(581730),
    r = i(672396),
    s = i(652215),
    o = i(985018);
function u(t, e) {
    if (l.A.isNotificationDisabled(r.KS.ActivityUserJoin)) return null;
    let i = t.username,
        u = o.intl.format(o.t["Yk+uYG"], { username: "" }),
        c = (0, n.ku)(t),
        d = o.intl.string(o.t.WRj1Wn),
        { trackView: A, trackClick: f } = (0, a.Y9)(r.KS.ActivityUserJoin, {
            notif_type: r.KS.ActivityUserJoin,
            notif_user_id: t.id,
            activity_type: s.xL.JOIN,
            activity_name: e.name,
        });
    return {
        icon: c,
        title: i,
        body: u,
        hint: d,
        onNotificationShow: () => {
            A();
        },
        onDismissClick: () => {
            f("dismiss");
        },
    };
}
