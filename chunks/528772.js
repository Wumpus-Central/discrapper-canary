"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = !1,
    a = !1;
class o extends i.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return a;
    }
    get enabled() {
        return s;
    }
}
let l = new o(r.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        (s = e.enabled), e.enabled && (a = e.keepOpen ?? !1);
    },
});
