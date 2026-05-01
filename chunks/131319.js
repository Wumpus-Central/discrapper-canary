n.d(t, { A: () => l });
var i = n(17928),
    a = n(228366);
let r = n(731854).PR;
class s extends i.Ay.Store {
    static displayName = "BitRateStore";
    get bitrate() {
        return r;
    }
}
let l = new s(a.h, {
    SET_CHANNEL_BITRATE: function (e) {
        r = e.bitrate;
    },
});
