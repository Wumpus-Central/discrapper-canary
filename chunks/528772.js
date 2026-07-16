"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = !1,
    s = !1;
class l extends i.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return s;
    }
    get enabled() {
        return a;
    }
}
let o = new l(r.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        (a = e.enabled), e.enabled && (s = e.keepOpen ?? !1);
    },
});
