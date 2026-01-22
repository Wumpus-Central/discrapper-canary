n.d(t, { A: () => l }), n(896048);
var r = n(869146),
    i = n(531685),
    a = n(652215),
    s = n(392164);
function o() {
    for (let e of r.A.getWindowKeys()) if (e.startsWith(a.MLl.CALL_TILE_POPOUT) && r.A.getWindowVisible(e)) return !0;
    return !1;
}
function l() {
    return (
        i.A.isVisible() ||
        r.A.getWindowVisible(a.MLl.CHANNEL_CALL_POPOUT) ||
        r.A.getWindowVisible(a.MLl.ACTIVITY_POPOUT) ||
        r.A.getWindowVisible(s.f) ||
        o()
    );
}
