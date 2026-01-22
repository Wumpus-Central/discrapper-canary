n.d(t, {
    A: () => c,
});
var i = n(471024),
    r = n(486020),
    s = n(684748),
    l = n(652215),
    o = n(672396),
    a = n(985018);

function c(e, t) {
    let n = e.username,
        c = a.intl.format(a.t["Yk+uYG"], {
            username: "",
        }),
        d = (0, r.ku)(e),
        { trackView: u, trackClick: h } = (0, s.Y)(o.KS.ActivityUserJoin, {
            notif_type: o.KS.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: l.xL.JOIN,
            activity_name: t.name,
        });
    return {
        icon: d,
        title: n,
        body: c,
        hint: (e) => (0, i.de)(e, a.intl.string(a.t.WRj1Wn)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h("dismiss");
        },
    };
}
