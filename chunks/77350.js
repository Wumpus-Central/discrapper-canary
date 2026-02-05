"use strict";
n.d(t, {
    AE: () => R,
    L8: () => E,
    XA: () => O,
    XB: () => D,
    Zj: () => u,
    ge: () => f,
    r1: () => b,
    tT: () => d,
    u: () => c,
});
var r = n(723702),
    i = n(389512),
    a = n(334278);
let s = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split(/\?/, 1);
        return t.test(n);
    },
    o = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split("/");
        return n === t;
    },
    l = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i,
    u = (e) => s(e, l),
    c = (e) => null != e && l.test(e),
    d = (e) => o(e, "image"),
    _ = /\.(webp|gif|avif)$/i,
    f = (e) => s(e, _),
    p = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    m = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    g = (0, r.isIOS)() ? p : (0, r.isAndroid)() ? h : m,
    E = (e) => null != e && g.test(e),
    A = /\.(webm)$/i,
    I = /\.(mp4|mov|qt)$/i,
    T = /\.(mp4|webm|mov|qt)$/i,
    y = /\.(mp4|webm|mov|qt)$/i,
    S = /\.(riv)$/i,
    v = (0, r.isIOS)() ? I : (0, r.isAndroid)() ? T : y,
    C = (e) => (0, a.D)() && i.A.getConfig({ location: "isWebPlayerVideoUrl" }).enabled && s(e, A),
    b = (e) => s(e, v) || C(e),
    N = (e) => null != e && (0, a.D)() && i.A.getConfig({ location: "isWebPlayerVideoFile" }).enabled && A.test(e),
    R = (e) => null != e && (v.test(e) || N(e)),
    O = (e) => null != e && S.test(e),
    D = (e) => o(e, "video");
