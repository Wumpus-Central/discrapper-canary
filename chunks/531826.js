n.d(t, {
    ZP: () => _,
    jA: () => h,
    sU: () => m
}),
    n(997841);
var r = n(442837),
    i = n(812206),
    a = n(522474),
    o = n(630388),
    s = n(636449),
    l = n(317381),
    c = n(16609),
    u = n(917107),
    d = n(918559),
    f = n(981631);
function _(e) {
    var t;
    let { application: n, channelId: r } = e;
    if (null != n && (0, o.yE)(null != (t = n.flags) ? t : 0, f.udG.EMBEDDED)) {
        if (a.Z.getWindowOpen(f.KJ3.ACTIVITY_POPOUT) && l.ZP.getActivityPanelMode() === d.Ez.ACTIVITY_POPOUT_WINDOW) return f.KJ3.ACTIVITY_POPOUT;
        if (a.Z.getWindowOpen(f.KJ3.CHANNEL_CALL_POPOUT) && (0, u.Z)(r) && !(0, s.R)()) return f.KJ3.CHANNEL_CALL_POPOUT;
    }
}
function p(e) {
    let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: r } = e,
        i = n.getSelfEmbeddedActivityForChannel(t),
        a = r.getApplication(null == i ? void 0 : i.applicationId);
    if (null != a)
        return _({
            application: a,
            channelId: t
        });
}
function h(e) {
    let { applicationId: t } = e,
        n = l.ZP.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let r = i.Z.getApplication(t);
    if (null != r)
        return _({
            application: r,
            channelId: (0, c.pY)(n.location)
        });
}
function m(e) {
    let { channelId: t } = e;
    return (0, r.e7)([a.Z, l.ZP, i.Z], () => {
        let e = p({
            channelId: null != t ? t : l.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.ZP,
            ApplicationStore: i.Z
        });
        return null != e ? a.Z.getWindow(e) : void 0;
    });
}
