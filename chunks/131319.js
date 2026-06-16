"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = n(731854).PR;
class a extends i.Ay.Store {
    static displayName = "BitRateStore";
    get bitrate() {
        return s;
    }
}
let o = new a(r.h, {
    SET_CHANNEL_BITRATE: function (e) {
        s = e.bitrate;
    },
});
