n.d(t, { Z: () => d });
var i = n(593481),
    s = n(768581),
    l = n(312839),
    r = n(981631),
    o = n(987650),
    a = n(388032);
function d(e, t) {
    let n = e.username,
        d = a.intl.format(a.t['Yk+uYG'], { username: '' }),
        c = (0, s.ov)(e),
        { trackView: u, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: r.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: c,
        title: n,
        body: d,
        hint: (e) => (0, i.Yj)(e, a.intl.string(a.t.WRj1Wl)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
