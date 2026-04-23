"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(73153);
let s = n(731854).PR;
class a extends r.Ay.Store {
    static displayName = "BitRateStore";
    get bitrate() {
        return s;
    }
}
let o = new a(i.h, {
    SET_CHANNEL_BITRATE: function (e) {
        s = e.bitrate;
    },
});
