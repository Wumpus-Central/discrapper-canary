(n.r(t), n.d(t, { isOverlayChannelVisible: () => d, isOverlayCurrentlyVisibleAndUnlocked: () => o }));
var i = n(567249),
    r = n(140069),
    a = n(489277),
    s = n(222506);
n(672396);
var l = n(392164);
function o() {
    let e = a.A.getTargetPID();
    return !(null == e || -1 === e || !a.A.isFocused(e) || s.A.isInputLocked(e)) && !!i.A.getWindowVisible(l.f);
}
function d(e) {
    if (__OVERLAY__) return !1;
    let t = r.A.getSelectedChannelId();
    return null != t && t === e && o();
}
