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
    L8: () => f,
});
var i = n(723702);
let r = (e, t) => {
        if (null == e) return !1;
        let [n, i] = e.split(/\?/, 1);
        return t.test(n);
    },
    s = (e, t) => {
        if (null == e) return !1;
        let [n, i] = e.split("/");
        return n === t;
    },
    a = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i,
    o = (e) => r(e, a),
    l = (e) => null != e && a.test(e),
    u = (e) => s(e, "image"),
    c = /\.(webp|gif|avif)$/i,
    d = (e) => r(e, c),
    _ = (0, i.isIOS)()
        ? /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i
        : (0, i.isAndroid)()
          ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i
          : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    f = (e) => null != e && _.test(e),
    h = /\.(riv)$/i,
    p = (0, i.isIOS)() ? /\.(mp4|mov|qt)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov|qt)$/i),
    E = (e) => r(e, p) || !1,
    m = (e) => null != e && (p.test(e) || (null != e && !1)),
    g = (e) => null != e && h.test(e),
    A = (e) => s(e, "video");
