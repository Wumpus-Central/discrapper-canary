n.d(t, {
    AE: () => N,
    L8: () => E,
    XA: () => R,
    XB: () => w,
    Zj: () => c,
    ge: () => p,
    r1: () => T,
    tT: () => d,
    u: () => u,
}),
    n(896048),
    n(747238);
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
    c = (e) => s(e, l),
    u = (e) => null != e && l.test(e),
    d = (e) => o(e, "image"),
    f = /\.(webp|gif|avif)$/i,
    p = (e) => s(e, f),
    _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    m = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    g = (0, r.isIOS)() ? _ : (0, r.isAndroid)() ? h : m,
    E = (e) => null != e && g.test(e),
    b = /\.(webm)$/i,
    y = /\.(mp4|mov|qt)$/i,
    O = /\.(mp4|webm|mov|qt)$/i,
    A = /\.(mp4|webm|mov|qt)$/i,
    v = /\.(riv)$/i,
    S = (0, r.isIOS)() ? y : (0, r.isAndroid)() ? O : A,
    I = (e) =>
        (0, a.D)() &&
        i.A.getConfig({
            location: "isWebPlayerVideoUrl",
        }).enabled &&
        s(e, b),
    T = (e) => s(e, S) || I(e),
    C = (e) =>
        null != e &&
        (0, a.D)() &&
        i.A.getConfig({
            location: "isWebPlayerVideoFile",
        }).enabled &&
        b.test(e),
    N = (e) => null != e && (S.test(e) || C(e)),
    R = (e) => null != e && v.test(e),
    w = (e) => o(e, "video");
