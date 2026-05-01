"use strict";
n.r(t), n.d(t, { isOverlayChannelVisible: () => c, isOverlayCurrentlyVisibleAndUnlocked: () => u });
var i = n(567249),
    r = n(9302),
    s = n(140069),
    a = n(489277),
    o = n(222506),
    l = n(392164);
function u() {
    let e = a.A.getTargetPID();
    return (
        !(null == e || e === r.UNSET_PID || !a.A.isFocused(e) || o.A.isInputLocked(e)) && !!i.A.getWindowVisible(l.f)
    );
}
function c(e) {
    if (__OVERLAY__) return !1;
    let t = s.A.getSelectedChannelId();
    return null != t && t === e && u();
}
