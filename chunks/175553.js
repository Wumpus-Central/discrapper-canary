n.d(t, { Z: () => c });
var i = n(593481),
    r = n(768581),
    a = n(312839),
    s = n(981631),
    o = n(987650),
    l = n(388032);
function c(e, t) {
    let n = e.username,
        c = l.intl.format(l.t["Yk+uYG"], { username: "" }),
        d = (0, r.ov)(e),
        { trackView: u, trackClick: f } = (0, a.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: s.mFx.JOIN,
            activity_name: t.name,
        });
    return {
        icon: d,
        title: n,
        body: c,
        hint: (e) => (0, i.Yj)(e, l.intl.string(l.t.WRj1Wn)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            f("dismiss");
        },
    };
}
