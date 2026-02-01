n.d(t, {
    AE: () => N,
    L8: () => E,
    XA: () => w,
    XB: () => R,
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
let o = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split(/\?/, 1);
        return t.test(n);
    },
    s = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split("/");
        return n === t;
    },
    l = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i,
    c = (e) => o(e, l),
    u = (e) => null != e && l.test(e),
    d = (e) => s(e, "image"),
    f = /\.(webp|gif|avif)$/i,
    p = (e) => o(e, f),
    _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    m = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    g = (0, r.isIOS)() ? _ : (0, r.isAndroid)() ? h : m,
    E = (e) => null != e && g.test(e),
    y = /\.(webm)$/i,
    b = /\.(mp4|mov|qt)$/i,
    O = /\.(mp4|webm|mov|qt)$/i,
    v = /\.(mp4|webm|mov|qt)$/i,
    A = /\.(riv)$/i,
    I = (0, r.isIOS)() ? b : (0, r.isAndroid)() ? O : v,
    S = (e) =>
        (0, a.D)() &&
        i.A.getConfig({
            location: "isWebPlayerVideoUrl",
        }).enabled &&
        o(e, y),
    T = (e) => o(e, I) || S(e),
    C = (e) =>
        null != e &&
        (0, a.D)() &&
        i.A.getConfig({
            location: "isWebPlayerVideoFile",
        }).enabled &&
        y.test(e),
    N = (e) => null != e && (I.test(e) || C(e)),
    w = (e) => null != e && A.test(e),
    R = (e) => s(e, "video");
