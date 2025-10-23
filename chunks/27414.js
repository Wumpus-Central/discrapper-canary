n.d(t, { Z: () => l }), n(388685);
var r = n(928518),
    i = n(451478),
    a = n(981631),
    o = n(501787);
function s() {
    for (let e of r.Z.getWindowKeys()) if (e.startsWith(a.KJ3.CALL_TILE_POPOUT) && r.Z.getWindowVisible(e)) return !0;
    return !1;
}
function l() {
    return (
        i.Z.isVisible() ||
        r.Z.getWindowVisible(a.KJ3.CHANNEL_CALL_POPOUT) ||
        r.Z.getWindowVisible(a.KJ3.ACTIVITY_POPOUT) ||
        r.Z.getWindowVisible(o.$J) ||
        s()
    );
}
