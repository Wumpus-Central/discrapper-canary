n.d(t, { xG: () => c });
var r = n(442837),
    i = n(710845),
    a = n(808506),
    o = n(237997),
    s = n(837268),
    l = n(371651);
function c() {
    return (0, r.e7)([l.default, a.default, o.default], () => {
        if (__OVERLAY__) return o.default.isInstanceLocked();
        let e = l.default.getOverlayRenderingTrackedGames();
        return 0 !== e.length && e.some((e) => e.overlayMethod !== s.gl.Disabled && a.default.isInputLocked(e.pid));
    });
}
new i.Z('OverlayUtils');
