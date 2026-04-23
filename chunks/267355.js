"use strict";
n.r(t), n.d(t, { isOverlayChannelVisible: () => _, isOverlayCurrentlyVisibleAndUnlocked: () => d });
var i = n(567249),
    r = n(9302),
    s = n(1193),
    a = n(489277),
    o = n(222506),
    l = n(392164);
function d() {
    let e = a.A.getTargetPID();
    return (
        !(null == e || e === r.UNSET_PID || !a.A.isFocused(e) || o.A.isInputLocked(e)) && !!i.A.getWindowVisible(l.f)
    );
}
function _(e) {
    if (__OVERLAY__) return !1;
    let t = s.A.getSelectedChannelId();
    return null != t && t === e && d();
}
