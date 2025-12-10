n.d(t, {
    CO: () => c,
    NU: () => T,
    X2: () => A,
    cb: () => S,
    d$: () => f,
    tw: () => u,
    yn: () => C,
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
    c = (e) => null != e && l.test(e),
    u = (e) => s(e, "image"),
    d = /\.(webp|gif|avif)$/i,
    f = (e) => o(e, d),
    p = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    _ = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    m = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = ((0, r.isIOS)() || (0, r.isAndroid)(), /\.(webm)$/i),
    g = /\.(mp4|mov)$/i,
    E = /\.(mp4|webm|mov)$/i,
    b = /\.(mp4|webm|mov)$/i,
    y = /\.(riv)$/i,
    O = (0, r.isIOS)() ? g : (0, r.isAndroid)() ? E : b,
    v = (e) => (0, a.W)() && i.Z.getConfig({ location: "isWebPlayerVideoUrl" }).enabled && o(e, h),
    S = (e) => o(e, O) || v(e),
    I = (e) => null != e && (0, a.W)() && i.Z.getConfig({ location: "isWebPlayerVideoFile" }).enabled && h.test(e),
    T = (e) => null != e && (O.test(e) || I(e)),
    C = (e) => null != e && y.test(e),
    A = (e) => s(e, "video");
