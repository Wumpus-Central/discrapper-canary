i.d(e, { Jn: () => A, Y9: () => d });
var n = i(684013),
    l = i(532624),
    a = i(256415),
    r = i(350535),
    s = i(395011),
    o = i(672396),
    u = i(652215);
function c() {
    return a.default.isLocked(s.A.getTargetPID()) ? u.ThZ.LOCKED_OVERLAY : u.ThZ.UNLOCKED_OVERLAY;
}
function d(t, e) {
    return {
        trackView() {
            let i = c();
            n.A.track(u.HAw.NOTIFICATION_VIEWED, { ...e, location: i }), n.A.notificationEvent(t, o.uj.Viewed);
        },
        trackClick(i) {
            let l = c();
            n.A.track(u.HAw.NOTIFICATION_CLICKED, { ...e, location: l, action_type: i }),
                n.A.notificationEvent(t, o.uj.Clicked);
        },
    };
}
function A() {
    let t;
    return (null != (t = l.Ay.getOverlayKeybind()) ? (0, r.dI)(t.shortcut, !0) : "???").split(" + ");
}
