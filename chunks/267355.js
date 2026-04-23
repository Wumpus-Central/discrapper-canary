"use strict";
n.r(t), n.d(t, { isOverlayChannelVisible: () => c, isOverlayCurrentlyVisibleAndUnlocked: () => u });
var r = n(87001),
    i = n(9302),
    s = n(1193),
    a = n(395011),
    o = n(222506),
    l = n(392164);
function u() {
    let e = a.A.getTargetPID();
    return (
        !(null == e || e === i.UNSET_PID || !a.A.isFocused(e) || o.A.isInputLocked(e)) && !!r.A.getWindowVisible(l.f)
    );
}
function c(e) {
    if (__OVERLAY__) return !1;
    let t = s.A.getSelectedChannelId();
    return null != t && t === e && u();
}
