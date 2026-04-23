"use strict";
n.d(t, { yq: () => u });
var r = n(311907),
    i = n(626584),
    s = n(242286),
    a = n(256415),
    o = n(41984),
    l = n(833551);
function u() {
    return (0, r.bG)([l.default, s.default, a.default], () => {
        if (__OVERLAY__) return a.default.isInstanceLocked();
        let e = l.default.getOverlayRenderingTrackedGames();
        return 0 !== e.length && e.some((e) => e.overlayMethod !== o.Ue.Disabled && s.default.isInputLocked(e.pid));
    });
}
new i.A("OverlayUtils");
