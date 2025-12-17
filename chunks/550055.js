n.d(t, { Z: () => c });
var i = n(768581),
    r = n(624864),
    a = n(620954),
    l = n(987650),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    if (r.Z.isNotificationDisabled(l.n0.ActivityUserJoin)) return null;
    let n = e.username,
        c = s.intl.format(s.t["Yk+uYG"], { username: "" }),
        u = (0, i.ov)(e),
        d = s.intl.string(s.t.WRj1Wn),
        { trackView: f, trackClick: h } = (0, a.Rg)(l.n0.ActivityUserJoin, {
            notif_type: l.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: o.mFx.JOIN,
            activity_name: t.name,
        });
    return {
        icon: u,
        title: n,
        body: c,
        hint: d,
        onNotificationShow: () => {
            f();
        },
        onDismissClick: () => {
            h("dismiss");
        },
    };
}
