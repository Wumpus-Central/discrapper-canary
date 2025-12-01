n.d(t, { Z: () => u });
var i = n(768581),
    r = n(624864),
    l = n(620954),
    a = n(987650),
    o = n(981631),
    s = n(388032);
function u(e, t) {
    if (r.Z.isNotificationDisabled(a.n0.ActivityUserJoin)) return null;
    let n = e.username,
        u = s.intl.format(s.t["Yk+uYG"], { username: "" }),
        c = (0, i.ov)(e),
        d = s.intl.string(s.t.WRj1Wn),
        { trackView: h, trackClick: p } = (0, l.Rg)(a.n0.ActivityUserJoin, {
            notif_type: a.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: o.mFx.JOIN,
            activity_name: t.name,
        });
    return {
        icon: c,
        title: n,
        body: u,
        hint: d,
        onNotificationShow: () => {
            h();
        },
        onDismissClick: () => {
            p("dismiss");
        },
    };
}
