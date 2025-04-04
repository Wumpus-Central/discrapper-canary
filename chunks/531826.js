n.d(t, {
    ZP: () => p,
    jA: () => m,
    sU: () => g
}),
    n(789020);
var r = n(442837),
    i = n(812206),
    o = n(522474),
    a = n(630388),
    s = n(636449),
    l = n(774226),
    c = n(317381),
    u = n(16609),
    d = n(917107),
    f = n(918559),
    _ = n(981631);
function p(e) {
    var t;
    let { application: n, channelId: r } = e;
    if (null != n && (0, a.yE)(null != (t = n.flags) ? t : 0, _.udG.EMBEDDED)) {
        if (o.Z.getWindowOpen(_.KJ3.ACTIVITY_POPOUT) && c.ZP.getActivityPanelMode() === f.Ez.ACTIVITY_POPOUT_WINDOW) return _.KJ3.ACTIVITY_POPOUT;
        if (o.Z.getWindowOpen(_.KJ3.CHANNEL_CALL_POPOUT) && (0, d.Z)(r) && !(0, s.R)({ isContextless: (0, l.Kb)(n) })) return _.KJ3.CHANNEL_CALL_POPOUT;
    }
}
function h(e) {
    let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: r } = e,
        i = n.getSelfEmbeddedActivityForChannel(t),
        o = r.getApplication(null == i ? void 0 : i.applicationId);
    if (null != o)
        return p({
            application: o,
            channelId: t
        });
}
function m(e) {
    let { applicationId: t } = e,
        n = c.ZP.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let r = i.Z.getApplication(t);
    if (null != r)
        return p({
            application: r,
            channelId: (0, u.pY)(n.location)
        });
}
function g(e) {
    let { channelId: t } = e;
    return (0, r.e7)([o.Z, c.ZP, i.Z], () => {
        let e = h({
            channelId: null != t ? t : c.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: c.ZP,
            ApplicationStore: i.Z
        });
        return null != e ? o.Z.getWindow(e) : void 0;
    });
}
