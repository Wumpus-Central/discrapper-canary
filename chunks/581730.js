i.d(e, { Jn: () => f, Y9: () => A });
var n = i(684013),
    l = i(532624),
    a = i(532294),
    r = i(350535),
    s = i(870373),
    o = i(233741),
    u = i(672396),
    c = i(652215);
function d() {
    return a.default.isLocked(o.A.getTargetPID()) ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY;
}
function A(t, e) {
    return {
        trackView() {
            let i = d();
            ((0, s.g)(c.HAw.NOTIFICATION_VIEWED, { ...e, location: i }), n.A.notificationEvent(t, u.uj.Viewed));
        },
        trackClick(i) {
            let l = d();
            ((0, s.g)(c.HAw.NOTIFICATION_CLICKED, { ...e, location: l, action_type: i }),
                n.A.notificationEvent(t, u.uj.Clicked));
        },
    };
}
function f() {
    let t;
    return (null != (t = l.Ay.getOverlayKeybind()) ? (0, r.dI)(t.shortcut, !0) : "???").split(" + ");
}
