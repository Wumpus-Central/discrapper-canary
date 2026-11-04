var i = n(855986),
    r = n(73153);
n(731854);
let a = 64e3;
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
n.d(t, {}, { A: l });
