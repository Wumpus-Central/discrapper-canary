"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = n(652215).K3c.AUTO;
class a extends i.Ay.Store {
    static displayName = "VideoQualityModeStore";
    get mode() {
        return s;
    }
}
let o = new a(r.h, {
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        s = e.mode;
    },
});
