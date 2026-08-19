"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = n(731854).PR;
class s extends i.Ay.Store {
    static displayName = "BitRateStore";
    get bitrate() {
        return a;
    }
}
let l = new s(r.h, {
    SET_CHANNEL_BITRATE: function (e) {
        a = e.bitrate;
    },
});
