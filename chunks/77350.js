"use strict";
n.d(t, {
    AE: () => A,
    L8: () => E,
    XA: () => I,
    XB: () => T,
    Zj: () => l,
    ge: () => _,
    r1: () => g,
    tT: () => d,
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
    d = (e) => a(e, "image"),
    c = /\.(webp|gif|avif)$/i,
    _ = (e) => s(e, c),
    f = (0, r.isIOS)()
        ? /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i
        : (0, r.isAndroid)()
          ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i
          : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    E = (e) => null != e && f.test(e),
    h = /\.(webm)$/i,
    p = /\.(riv)$/i,
    m = (0, r.isIOS)() ? /\.(mp4|mov|qt)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov|qt)$/i),
    g = (e) => s(e, m) || ((0, i.D)() && s(e, h)),
    A = (e) => null != e && (m.test(e) || (null != e && (0, i.D)() && h.test(e))),
    I = (e) => null != e && p.test(e),
    T = (e) => a(e, "video");
