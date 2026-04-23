"use strict";
n.d(t, { yq: () => d });
var i = n(17928),
    r = n(626584),
    s = n(773371),
    a = n(256415),
    o = n(41984),
    l = n(833551);
function d() {
    return (0, i.bG)([l.default, s.default, a.default], () => {
        if (__OVERLAY__) return a.default.isInstanceLocked();
        let e = l.default.getOverlayRenderingTrackedGames();
        return 0 !== e.length && e.some((e) => e.overlayMethod !== o.Ue.Disabled && s.default.isInputLocked(e.pid));
    });
}
new r.A("OverlayUtils");
