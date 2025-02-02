n.d(t, { Z: () => d });
var i = n(593481),
    s = n(768581),
    l = n(312839),
    a = n(981631),
    r = n(987650),
    o = n(388032);
function d(e, t) {
    let n = e.username,
        d = o.intl.format(o.t['Yk+uYG'], { username: '' }),
        c = (0, s.ov)(e),
        { trackView: u, trackClick: h } = (0, l.R)(r.n0.ActivityUserJoin, {
            notif_type: r.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: c,
        title: n,
        body: d,
        hint: (e) => (0, i.Yj)(e, o.intl.string(o.t.WRj1Wl)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
