"use strict";
n.d(t, {
    u: () => l,
    Zj: () => o,
    XB: () => A,
    ge: () => d,
    tT: () => u,
    r1: () => E,
    AE: () => m,
    XA: () => g,
    L8: () => h,
});
var i = n(723702);
function r(e, t) {
    if (null == e) return !1;
    let [n, i] = e.split(/\?/, 1);
    return t.test(n);
}
function s(e, t) {
    if (null == e) return !1;
    let [n, i] = e.split("/");
    return n === t;
}
let a = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
function o(e) {
    return r(e, a);
}
function l(e) {
    return null != e && a.test(e);
}
function u(e) {
    return s(e, "image");
}
let c = /\.(webp|gif|avif)$/i;
function d(e) {
    return r(e, c);
}
let _ = (0, i.isIOS)()
    ? /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i
    : (0, i.isAndroid)()
      ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i
      : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
function h(e) {
    return null != e && _.test(e);
}
let f = /\.(riv)$/i,
    p = (0, i.isIOS)() ? /\.(mp4|mov|qt)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov|qt)$/i);
function E(e) {
    return r(e, p) || !1;
}
function m(e) {
    return null != e && (p.test(e) || (null != e && !1));
}
function g(e) {
    return null != e && f.test(e);
}
function A(e) {
    return s(e, "video");
}
