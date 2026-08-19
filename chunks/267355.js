"use strict";
n.r(t), n.d(t, { isOverlayChannelVisible: () => c, isOverlayCurrentlyVisibleAndUnlocked: () => d });
var i = n(567249),
    r = n(9302),
    a = n(140069),
    s = n(489277),
    l = n(222506),
    o = n(392164);
function d() {
    let e = s.A.getTargetPID();
    return (
        !(null == e || e === r.UNSET_PID || !s.A.isFocused(e) || l.A.isInputLocked(e)) && !!i.A.getWindowVisible(o.f)
    );
}
function c(e) {
    if (__OVERLAY__) return !1;
    let t = a.A.getSelectedChannelId();
    return null != t && t === e && d();
}
