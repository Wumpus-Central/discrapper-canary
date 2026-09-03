n.d(t, {
    u: () => o,
    Zj: () => l,
    XB: () => T,
    ge: () => u,
    tT: () => d,
    r1: () => I,
    AE: () => f,
    XA: () => p,
    L8: () => E,
});
var i = n(723702);
function r(e, t) {
    if (null == e) return !1;
    let [n, i] = e.split(/\?/, 1);
    return t.test(n);
}
function a(e, t) {
    if (null == e) return !1;
    let [n, i] = e.split("/");
    return n === t;
}
let s = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
function l(e) {
    return r(e, s);
}
function o(e) {
    return null != e && s.test(e);
}
function d(e) {
    return a(e, "image");
}
let c = /\.(webp|gif|avif)$/i;
function u(e) {
    return r(e, c);
}
let _ = (0, i.isIOS)()
    ? /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i
    : (0, i.isAndroid)()
      ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i
      : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
function E(e) {
    return null != e && _.test(e);
}
let A = /\.(riv)$/i,
    h = (0, i.isIOS)() ? /\.(mp4|mov|qt)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov|qt)$/i);
function I(e) {
    return r(e, h) || !1;
}
function f(e) {
    return null != e && (h.test(e) || (null != e && !1));
}
function p(e) {
    return null != e && A.test(e);
}
function T(e) {
    return a(e, "video");
}
