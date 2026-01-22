n.d(t, {
    A: () => c,
});
var i = n(486020),
    r = n(592598),
    l = n(581730),
    a = n(672396),
    o = n(652215),
    s = n(985018);

function c(e, t) {
    if (r.A.isNotificationDisabled(a.KS.ActivityUserJoin)) return null;
    let n = e.username,
        c = s.intl.format(s.t["Yk+uYG"], {
            username: "",
        }),
        u = (0, i.ku)(e),
        d = s.intl.string(s.t.WRj1Wn),
        { trackView: p, trackClick: h } = (0, l.Y9)(a.KS.ActivityUserJoin, {
            notif_type: a.KS.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: o.xL.JOIN,
            activity_name: t.name,
        });
    return {
        icon: u,
        title: n,
        body: c,
        hint: d,
        onNotificationShow: () => {
            p();
        },
        onDismissClick: () => {
            h("dismiss");
        },
    };
}
