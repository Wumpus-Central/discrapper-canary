i.d(e, {
    Z: function () {
        return a;
    }
});
var n = i(768581),
    l = i(620954),
    o = i(987650),
    r = i(981631),
    s = i(388032);
function a(t, e) {
    let i = t.username,
        a = s.intl.format(s.t['Yk+uYG'], { username: '' }),
        u = (0, n.ov)(t),
        d = s.intl.string(s.t.WRj1Wl),
        { trackView: c, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: t.id,
            activity_type: r.mFx.JOIN,
            activity_name: e.name
        });
    return {
        icon: u,
        title: i,
        body: a,
        hint: d,
        onNotificationShow: () => {
            c();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
