n.d(t, { yq: () => c });
var r = n(311907),
    i = n(626584),
    a = n(242286),
    s = n(256415),
    o = n(41984),
    l = n(833551);
function c() {
    return (0, r.bG)([l.default, a.default, s.default], () => {
        if (__OVERLAY__) return s.default.isInstanceLocked();
        let e = l.default.getOverlayRenderingTrackedGames();
        return 0 !== e.length && e.some((e) => e.overlayMethod !== o.Ue.Disabled && a.default.isInputLocked(e.pid));
    });
}
new i.A("OverlayUtils");
