n.d(t, {
    Fs: () => s,
    Y9: () => h,
    uP: () => p,
});
var r = n(644387),
    i = n(582661),
    a = n(383466),
    o = n(559972),
    s = new Map(),
    l = /auto|scroll/,
    c = /^tb|vertical/,
    u = /msie|trident/i.test(o.C.navigator && o.C.navigator.userAgent),
    d = function (e) {
        return parseFloat(e || "0");
    },
    f = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            Object.freeze({
                inlineSize: (n ? t : e) || 0,
                blockSize: (n ? e : t) || 0,
            })
        );
    },
    _ = Object.freeze({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new i.N(0, 0, 0, 0),
    }),
    p = function (e) {
        if (s.has(e)) return s.get(e);
        if ((0, a.xj)(e)) return s.set(e, _), _;
        var t = getComputedStyle(e),
            n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            r = !u && "border-box" === t.boxSizing,
            o = c.test(t.writingMode || ""),
            p = !n && l.test(t.overflowY || ""),
            h = !n && l.test(t.overflowX || ""),
            m = n ? 0 : d(t.paddingTop),
            g = n ? 0 : d(t.paddingRight),
            E = n ? 0 : d(t.paddingBottom),
            b = n ? 0 : d(t.paddingLeft),
            y = n ? 0 : d(t.borderTopWidth),
            O = n ? 0 : d(t.borderRightWidth),
            v = n ? 0 : d(t.borderBottomWidth),
            I = n ? 0 : d(t.borderLeftWidth),
            T = b + g,
            S = m + E,
            A = I + O,
            C = y + v,
            N = h ? e.offsetHeight - C - e.clientHeight : 0,
            R = p ? e.offsetWidth - A - e.clientWidth : 0,
            P = r ? T + A : 0,
            w = r ? S + C : 0,
            D = n ? n.width : d(t.width) - P - R,
            x = n ? n.height : d(t.height) - w - N,
            L = D + T + R + A,
            M = x + S + N + C,
            j = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(D * devicePixelRatio), Math.round(x * devicePixelRatio), o),
                borderBoxSize: f(L, M, o),
                contentBoxSize: f(D, x, o),
                contentRect: new i.N(b, m, D, x),
            });
        return s.set(e, j), j;
    },
    h = function (e, t) {
        var n = p(e),
            i = n.borderBoxSize,
            a = n.contentBoxSize,
            o = n.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.z.BORDER_BOX:
                return i;
            default:
                return a;
        }
    };
