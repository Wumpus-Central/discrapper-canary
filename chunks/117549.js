"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(73153);
let s = n(652215).K3c.AUTO;
class a extends r.Ay.Store {
    static displayName = "VideoQualityModeStore";
    get mode() {
        return s;
    }
}
let o = new a(i.h, {
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        s = e.mode;
    },
});
