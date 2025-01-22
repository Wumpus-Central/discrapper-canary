r.d(n, {
    CO: function () {
        return u;
    },
    NU: function () {
        return I;
    },
    X2: function () {
        return T;
    },
    cb: function () {
        return b;
    },
    d$: function () {
        return f;
    },
    tw: function () {
        return c;
    }
});
var i = r(47120);
var a = r(358085);
let o = (e, n) => {
        if (null == e) return !1;
        let [r, i] = e.split(/\?/, 1);
        return n.test(r);
    },
    s = (e, n) => {
        if (null == e) return !1;
        let [r, i] = e.split('/');
        return r === n;
    },
    l = /\.(png|jpe?g|webp|gif|heic|heif|dng|avif)$/i,
    u = (e) => null != e && l.test(e),
    c = (e) => s(e, 'image'),
    d = /\.(webp|gif|avif)$/i,
    f = (e) => o(e, d),
    p = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    m = (0, a.isIOS)() ? p : (0, a.isAndroid)() ? h : _,
    g = /\.(mp4|mov)$/i,
    E = /\.(mp4|webm|mov)$/i,
    v = /\.(mp4|webm|mov)$/i,
    y = (0, a.isIOS)() ? g : (0, a.isAndroid)() ? E : v,
    b = (e) => o(e, y),
    I = (e) => null != e && y.test(e),
    T = (e) => s(e, 'video');
