n.d(t, { xG: () => c });
var r = n(442837),
    i = n(615287),
    a = n(710845),
    o = n(808506),
    s = n(237997),
    l = n(371651);
function c() {
    return (0, r.e7)([l.default, o.default, s.default], () => {
        if (__OVERLAY__) return s.default.isInstanceLocked();
        let e = l.default.getOverlayRenderingTrackedGames();
        return 0 !== e.length && e.some((e) => e.overlayMethod !== i.gl.Disabled && o.default.isInputLocked(e.pid));
    });
}
new a.Z('OverlayUtils');
