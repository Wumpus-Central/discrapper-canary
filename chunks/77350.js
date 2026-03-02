"use strict";
n.d(t, {
    AE: () => R,
    L8: () => E,
    XA: () => O,
    XB: () => b,
    Zj: () => l,
    ge: () => _,
    r1: () => N,
    tT: () => c,
    u: () => u,
});
var r = n(723702),
    i = n(334278);
let s = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split(/\?/, 1);
        return t.test(n);
    },
    a = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split("/");
        return n === t;
    },
    o = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i,
    l = (e) => s(e, o),
    u = (e) => null != e && o.test(e),
    c = (e) => a(e, "image"),
    d = /\.(webp|gif|avif)$/i,
    _ = (e) => s(e, d),
    f = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    p = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    m = (0, r.isIOS)() ? f : (0, r.isAndroid)() ? p : h,
    E = (e) => null != e && m.test(e),
    g = /\.(webm)$/i,
    A = /\.(mp4|mov|qt)$/i,
    I = /\.(mp4|webm|mov|qt)$/i,
    T = /\.(mp4|webm|mov|qt)$/i,
    S = /\.(riv)$/i,
    y = (0, r.isIOS)() ? A : (0, r.isAndroid)() ? I : T,
    v = (e) => (0, i.D)() && s(e, g),
    N = (e) => s(e, y) || v(e),
    C = (e) => null != e && (0, i.D)() && g.test(e),
    R = (e) => null != e && (y.test(e) || C(e)),
    O = (e) => null != e && S.test(e),
    b = (e) => a(e, "video");
