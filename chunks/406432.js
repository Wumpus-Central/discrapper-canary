n.d(t, {
    CO: () => u,
    NU: () => N,
    TN: () => E,
    X2: () => R,
    cb: () => C,
    d$: () => p,
    hU: () => c,
    tw: () => d,
    yn: () => P,
}),
    n(388685),
    n(35282);
var r = n(358085),
    i = n(259493),
    a = n(804059);
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
    m = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    g = (0, r.isIOS)() ? _ : (0, r.isAndroid)() ? m : h,
    E = (e) => null != e && g.test(e),
    b = /\.(webm)$/i,
    y = /\.(mp4|mov)$/i,
    O = /\.(mp4|webm|mov)$/i,
    v = /\.(mp4|webm|mov)$/i,
    S = /\.(riv)$/i,
    I = (0, r.isIOS)() ? y : (0, r.isAndroid)() ? O : v,
    T = (e) => (0, a.W)() && i.Z.getConfig({ location: "isWebPlayerVideoUrl" }).enabled && o(e, b),
    C = (e) => o(e, I) || T(e),
    A = (e) => null != e && (0, a.W)() && i.Z.getConfig({ location: "isWebPlayerVideoFile" }).enabled && b.test(e),
    N = (e) => null != e && (I.test(e) || A(e)),
    P = (e) => null != e && S.test(e),
    R = (e) => s(e, "video");
