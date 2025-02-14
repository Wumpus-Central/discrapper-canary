n.d(t, { Z: () => d });
var i = n(593481),
    s = n(768581),
    l = n(312839),
    a = n(981631),
    o = n(987650),
    r = n(388032);
function d(e, t) {
    let n = e.username,
        d = r.intl.format(r.t['Yk+uYG'], { username: '' }),
        c = (0, s.ov)(e),
        { trackView: u, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: c,
        title: n,
        body: d,
        hint: (e) => (0, i.Yj)(e, r.intl.string(r.t.WRj1Wl)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
