n.d(t, {
    ZP: () => p,
    jA: () => m,
    sU: () => h,
}),
    n(997841);
var r = n(95015),
    i = n(442837),
    a = n(812206),
    o = n(522474),
    s = n(636449),
    l = n(317381),
    c = n(16609),
    u = n(917107),
    d = n(918559),
    f = n(981631);
function p(e) {
    var t;
    let { application: n, channelId: i } = e;
    if (null != n && (0, r.yE)(null != (t = n.flags) ? t : 0, f.udG.EMBEDDED)) {
        if (o.Z.getWindowOpen(f.KJ3.ACTIVITY_POPOUT) && l.ZP.getActivityPanelMode() === d.Ez.ACTIVITY_POPOUT_WINDOW)
            return f.KJ3.ACTIVITY_POPOUT;
        if (o.Z.getWindowOpen(f.KJ3.CHANNEL_CALL_POPOUT) && (0, u.Z)(i) && !(0, s.R)())
            return f.KJ3.CHANNEL_CALL_POPOUT;
    }
}
function _(e) {
    let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: r } = e,
        i = n.getSelfEmbeddedActivityForChannel(t),
        a = r.getApplication(null == i ? void 0 : i.applicationId);
    if (null != a)
        return p({
            application: a,
            channelId: t,
        });
}
function m(e) {
    let { applicationId: t } = e,
        n = l.ZP.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let r = a.Z.getApplication(t);
    if (null != r)
        return p({
            application: r,
            channelId: (0, c.p)(n.location),
        });
}
function h(e) {
    let { channelId: t } = e;
    return (0, i.e7)([o.Z, l.ZP, a.Z], () => {
        let e = _({
            channelId: null != t ? t : l.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.ZP,
            ApplicationStore: a.Z,
        });
        return null != e ? o.Z.getWindow(e) : void 0;
    });
}
