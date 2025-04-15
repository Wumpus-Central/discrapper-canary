n.d(t, { Z: () => c });
var i = n(593481),
    r = n(768581),
    s = n(312839),
    o = n(981631),
    a = n(987650),
    l = n(388032);
function c(e, t) {
    let n = e.username,
        c = l.NW.format(l.t['Yk+uYG'], { username: '' }),
        d = (0, r.ov)(e),
        { trackView: u, trackClick: h } = (0, s.R)(a.n0.ActivityUserJoin, {
            notif_type: a.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: o.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: d,
        title: n,
        body: c,
        hint: (e) => (0, i.Yj)(e, l.NW.string(l.t.WRj1Wl)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
