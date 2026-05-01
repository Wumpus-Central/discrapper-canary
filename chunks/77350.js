"use strict";
n.d(t, {
    AE: () => I,
    L8: () => h,
    XA: () => p,
    XB: () => T,
    Zj: () => l,
    ge: () => c,
    r1: () => A,
    tT: () => d,
    u: () => _,
});
var i = n(723702),
    r = n(334278);
let s = (e, t) => {
        if (null == e) return !1;
        let [n, i] = e.split(/\?/, 1);
        return t.test(n);
    },
    a = (e, t) => {
        if (null == e) return !1;
        let [n, i] = e.split("/");
        return n === t;
    },
    o = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i,
    l = (e) => s(e, o),
    _ = (e) => null != e && o.test(e),
    d = (e) => a(e, "image"),
    u = /\.(webp|gif|avif)$/i,
    c = (e) => s(e, u),
    E = (0, i.isIOS)()
        ? /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i
        : (0, i.isAndroid)()
          ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i
          : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = (e) => null != e && E.test(e),
    m = /\.(webm)$/i,
    f = /\.(riv)$/i,
    g = (0, i.isIOS)() ? /\.(mp4|mov|qt)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov|qt)$/i),
    A = (e) => s(e, g) || ((0, r.D)() && s(e, m)),
    I = (e) => null != e && (g.test(e) || (null != e && (0, r.D)() && m.test(e))),
    p = (e) => null != e && f.test(e),
    T = (e) => a(e, "video");
