"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(73153);
let l = !1,
    a = !1;
class s extends r.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return a;
    }
    get enabled() {
        return l;
    }
}
let o = new s(i.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
        (l = e.enabled), e.enabled && (a = e.keepOpen ?? !1);
    },
});
