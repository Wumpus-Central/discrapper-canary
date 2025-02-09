n.d(t, { Z: () => s });
var i = n(768581),
    o = n(620954),
    r = n(987650),
    l = n(981631),
    a = n(388032);
function s(e, t) {
    let n = e.username,
        s = a.intl.format(a.t['Yk+uYG'], { username: '' }),
        d = (0, i.ov)(e),
        c = a.intl.string(a.t.WRj1Wl),
        { trackView: u, trackClick: h } = (0, o.R)(r.n0.ActivityUserJoin, {
            notif_type: r.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: l.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: d,
        title: n,
        body: s,
        hint: c,
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
