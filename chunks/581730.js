i.d(t, { Jn: () => _, Y9: () => u, hM: () => m });
var n = i(684013),
    a = i(532624),
    l = i(256415),
    r = i(350535),
    s = i(395011),
    o = i(672396),
    d = i(652215);
function c() {
    return l.default.isLocked(s.A.getTargetPID()) ? d.ThZ.LOCKED_OVERLAY : d.ThZ.UNLOCKED_OVERLAY;
}
function u(e, t) {
    return {
        trackView() {
            let i = c();
            n.A.track(d.HAw.NOTIFICATION_VIEWED, { ...t, location: i }), n.A.notificationEvent(e, o.uj.Viewed);
        },
        trackClick(i) {
            let a = c();
            n.A.track(d.HAw.NOTIFICATION_CLICKED, { ...t, location: a, action_type: i }),
                n.A.notificationEvent(e, o.uj.Clicked);
        },
    };
}
function m() {
    let e = a.Ay.getOverlayKeybind();
    return null != e ? (0, r.dI)(e.shortcut, !0) : "???";
}
function _() {
    return m().split(" + ");
}
