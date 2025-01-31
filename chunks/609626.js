i.d(e, { Z: () => a });
var n = i(768581),
    l = i(620954),
    s = i(987650),
    o = i(981631),
    r = i(388032);
function a(t, e) {
    let i = t.username,
        a = r.intl.format(r.t['Yk+uYG'], { username: '' }),
        d = (0, n.ov)(t),
        u = r.intl.string(r.t.WRj1Wl),
        { trackView: c, trackClick: h } = (0, l.R)(s.n0.ActivityUserJoin, {
            notif_type: s.n0.ActivityUserJoin,
            notif_user_id: t.id,
            activity_type: o.mFx.JOIN,
            activity_name: e.name
        });
    return {
        icon: d,
        title: i,
        body: a,
        hint: u,
        onNotificationShow: () => {
            c();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
