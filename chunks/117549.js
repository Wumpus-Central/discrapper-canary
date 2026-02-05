"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let a = n(652215).K3c.AUTO;
function s(e) {
    a = e.mode;
}
class o extends r.Ay.Store {
    static displayName = "VideoQualityModeStore";
    get mode() {
        return a;
    }
}
let l = new o(i.h, { SET_CHANNEL_VIDEO_QUALITY_MODE: s });
