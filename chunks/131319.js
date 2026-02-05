"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let a = n(731854).PR;
function s(e) {
    a = e.bitrate;
}
class o extends r.Ay.Store {
    static displayName = "BitRateStore";
    get bitrate() {
        return a;
    }
}
let l = new o(i.h, { SET_CHANNEL_BITRATE: s });
