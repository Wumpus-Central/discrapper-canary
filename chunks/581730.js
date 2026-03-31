"use strict";
n.d(t, { Jn: () => f, Y9: () => d });
var r = n(684013),
    i = n(532624),
    s = n(256415),
    a = n(350535),
    o = n(395011),
    l = n(672396),
    u = n(652215);
function c() {
    return s.default.isLocked(o.A.getTargetPID()) ? u.ThZ.LOCKED_OVERLAY : u.ThZ.UNLOCKED_OVERLAY;
}
function d(e, t) {
    return {
        trackView() {
            let n = c();
            r.A.track(u.HAw.NOTIFICATION_VIEWED, { ...t, location: n }), r.A.notificationEvent(e, l.uj.Viewed);
        },
        trackClick(n) {
            let i = c();
            r.A.track(u.HAw.NOTIFICATION_CLICKED, { ...t, location: i, action_type: n }),
                r.A.notificationEvent(e, l.uj.Clicked);
        },
    };
}
function _() {
    let e = i.Ay.getOverlayKeybind();
    return null != e ? (0, a.dI)(e.shortcut, !0) : "???";
}
function f() {
    return _().split(" + ");
}
