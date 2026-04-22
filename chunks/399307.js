"use strict";
n.d(t, { A: () => o });
var r = n(869146),
    i = n(531685),
    s = n(652215),
    a = n(392164);
function o() {
    return (
        i.A.isVisible() ||
        r.A.getWindowVisible(s.MLl.CHANNEL_CALL_POPOUT) ||
        r.A.getWindowVisible(s.MLl.ACTIVITY_POPOUT) ||
        r.A.getWindowVisible(a.f) ||
        (function () {
            for (let e of r.A.getWindowKeys())
                if (e.startsWith(s.MLl.CALL_TILE_POPOUT) && r.A.getWindowVisible(e)) return !0;
            return !1;
        })()
    );
}
