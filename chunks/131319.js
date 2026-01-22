n.d(t, {
    A: () => u,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = n(731854).PR;

function l(e) {
    o = e.bitrate;
}
class c extends (r = i.Ay.Store) {
    get bitrate() {
        return o;
    }
}
s(c, "displayName", "BitRateStore");
let u = new c(a.h, {
    SET_CHANNEL_BITRATE: l,
});
