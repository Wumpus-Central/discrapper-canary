n.d(t, { Z: () => c });
var i = n(768581),
    r = n(624864),
    l = n(620954),
    o = n(987650),
    a = n(981631),
    s = n(388032);
function c(e, t) {
    if (r.Z.isNotificationDisabled(o.n0.ActivityUserJoin)) return null;
    let n = e.username,
        c = s.intl.format(s.t["Yk+uYG"], { username: "" }),
        u = (0, i.ov)(e),
        d = s.intl.string(s.t.WRj1Wn),
        { trackView: h, trackClick: p } = (0, l.Rg)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name,
        });
    return {
        icon: u,
        title: n,
        body: c,
        hint: d,
        onNotificationShow: () => {
            h();
        },
        onDismissClick: () => {
            p("dismiss");
        },
    };
}
