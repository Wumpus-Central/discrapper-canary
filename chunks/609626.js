n.d(t, { Z: () => s });
var i = n(768581),
    l = n(620954),
    r = n(987650),
    o = n(981631),
    a = n(388032);
function s(e, t) {
    let n = e.username,
        s = a.intl.format(a.t['Yk+uYG'], { username: '' }),
        d = (0, i.ov)(e),
        u = a.intl.string(a.t.WRj1Wl),
        { trackView: c, trackClick: h } = (0, l.R)(r.n0.ActivityUserJoin, {
            notif_type: r.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: o.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: d,
        title: n,
        body: s,
        hint: u,
        onNotificationShow: () => {
            c();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
