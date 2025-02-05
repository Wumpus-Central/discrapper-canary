n.d(t, { Z: () => s });
var i = n(768581),
    r = n(620954),
    o = n(987650),
    l = n(981631),
    a = n(388032);
function s(e, t) {
    let n = e.username,
        s = a.intl.format(a.t['Yk+uYG'], { username: '' }),
        d = (0, i.ov)(e),
        c = a.intl.string(a.t.WRj1Wl),
        { trackView: u, trackClick: h } = (0, r.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
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
