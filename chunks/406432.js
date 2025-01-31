n.d(t, {
    CO: () => o,
    NU: () => v,
    X2: () => y,
    cb: () => E,
    d$: () => c,
    tw: () => l
}),
    n(47120);
var i = n(358085);
let r = (e, t) => {
        if (null == e) return !1;
        let [n, i] = e.split(/\?/, 1);
        return t.test(n);
    },
    a = (e, t) => {
        if (null == e) return !1;
        let [n, i] = e.split('/');
        return n === t;
    },
    s = /\.(png|jpe?g|webp|gif|heic|heif|dng|avif)$/i,
    o = (e) => null != e && s.test(e),
    l = (e) => a(e, 'image'),
    u = /\.(webp|gif|avif)$/i,
    c = (e) => r(e, u),
    d = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    f = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    p = ((0, i.isIOS)() || (0, i.isAndroid)(), /\.(mp4|mov)$/i),
    h = /\.(mp4|webm|mov)$/i,
    m = /\.(mp4|webm|mov)$/i,
    g = (0, i.isIOS)() ? p : (0, i.isAndroid)() ? h : m,
    E = (e) => r(e, g),
    v = (e) => null != e && g.test(e),
    y = (e) => a(e, 'video');
