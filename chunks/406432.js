r.d(n, {
    CO: function () {
        return u;
    },
    NU: function () {
        return b;
    },
    X2: function () {
        return y;
    },
    cb: function () {
        return T;
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
let s = (e, n) => {
        if (null == e) return !1;
        let [r, i] = e.split(/\?/, 1);
        return n.test(r);
    },
    o = (e, n) => {
        if (null == e) return !1;
        let [r, i] = e.split('/');
        return r === n;
    },
    l = /\.(png|jpe?g|webp|gif|heic|heif|dng|avif)$/i,
    u = (e) => null != e && l.test(e),
    c = (e) => o(e, 'image'),
    d = /\.(webp|gif|avif)$/i,
    f = (e) => s(e, d),
    _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    p = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    m = (0, a.isIOS)() ? _ : (0, a.isAndroid)() ? h : p,
    g = /\.(mp4|mov)$/i,
    E = /\.(mp4|webm|mov)$/i,
    v = /\.(mp4|webm|mov)$/i,
    I = (0, a.isIOS)() ? g : (0, a.isAndroid)() ? E : v,
    T = (e) => s(e, I),
    b = (e) => null != e && I.test(e),
    y = (e) => o(e, 'video');
