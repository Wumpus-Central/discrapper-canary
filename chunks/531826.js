n.d(t, {
    ZP: () => _,
    jA: () => h,
    sU: () => m
}),
    n(789020);
var i = n(442837),
    r = n(812206),
    a = n(522474),
    s = n(630388),
    o = n(636449),
    l = n(317381),
    u = n(16609),
    c = n(917107),
    d = n(918559),
    f = n(981631);
function _(e) {
    var t;
    let { application: n, channelId: i } = e;
    if (null != n && (0, s.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, f.udG.EMBEDDED)) {
        if (a.Z.getWindowOpen(f.KJ3.ACTIVITY_POPOUT) && l.ZP.getActivityPanelMode() === d.Ez.ACTIVITY_POPOUT_WINDOW) return f.KJ3.ACTIVITY_POPOUT;
        if (a.Z.getWindowOpen(f.KJ3.CHANNEL_CALL_POPOUT) && (0, c.Z)(i) && !(0, o.R)()) return f.KJ3.CHANNEL_CALL_POPOUT;
    }
}
function p(e) {
    let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: i } = e,
        r = n.getSelfEmbeddedActivityForChannel(t),
        a = i.getApplication(null == r ? void 0 : r.applicationId);
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
    let i = r.Z.getApplication(t);
    if (null != i)
        return _({
            application: i,
            channelId: (0, u.p)(n.location)
        });
}
function m(e) {
    let { channelId: t } = e;
    return (0, i.e7)([a.Z, l.ZP, r.Z], () => {
        let e = p({
            channelId: null != t ? t : l.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.ZP,
            ApplicationStore: r.Z
        });
        return null != e ? a.Z.getWindow(e) : void 0;
    });
}
