n.d(t, {
    CO: () => c,
    NU: () => S,
    X2: () => T,
    cb: () => v,
    d$: () => f,
    tw: () => u,
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
    _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    p = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    m = ((0, r.isIOS)() || (0, r.isAndroid)(), /\.(webm)$/i),
    g = /\.(mp4|mov)$/i,
    E = /\.(mp4|webm|mov)$/i,
    b = /\.(mp4|webm|mov)$/i,
    y = (0, r.isIOS)() ? g : (0, r.isAndroid)() ? E : b,
    O = (e) => (0, a.W)() && i.Z.getConfig({ location: "isWebPlayerVideoUrl" }).enabled && o(e, m),
    v = (e) => o(e, y) || O(e),
    I = (e) => null != e && (0, a.W)() && i.Z.getConfig({ location: "isWebPlayerVideoFile" }).enabled && m.test(e),
    S = (e) => null != e && (y.test(e) || I(e)),
    T = (e) => s(e, "video");
