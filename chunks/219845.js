n.d(t, {
    Fs: () => s,
    Y9: () => m,
    uP: () => _,
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
    p = Object.freeze({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new i.N(0, 0, 0, 0),
    }),
    _ = function (e) {
        if (s.has(e)) return s.get(e);
        if ((0, a.xj)(e)) return s.set(e, p), p;
        var t = getComputedStyle(e),
            n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            r = !u && "border-box" === t.boxSizing,
            o = c.test(t.writingMode || ""),
            _ = !n && l.test(t.overflowY || ""),
            m = !n && l.test(t.overflowX || ""),
            h = n ? 0 : d(t.paddingTop),
            g = n ? 0 : d(t.paddingRight),
            E = n ? 0 : d(t.paddingBottom),
            b = n ? 0 : d(t.paddingLeft),
            y = n ? 0 : d(t.borderTopWidth),
            O = n ? 0 : d(t.borderRightWidth),
            v = n ? 0 : d(t.borderBottomWidth),
            S = n ? 0 : d(t.borderLeftWidth),
            I = b + g,
            T = h + E,
            C = S + O,
            A = y + v,
            N = m ? e.offsetHeight - A - e.clientHeight : 0,
            P = _ ? e.offsetWidth - C - e.clientWidth : 0,
            R = r ? I + C : 0,
            D = r ? T + A : 0,
            w = n ? n.width : d(t.width) - R - P,
            x = n ? n.height : d(t.height) - D - N,
            L = w + I + P + C,
            j = x + T + N + A,
            M = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(w * devicePixelRatio), Math.round(x * devicePixelRatio), o),
                borderBoxSize: f(L, j, o),
                contentBoxSize: f(w, x, o),
                contentRect: new i.N(b, h, w, x),
            });
        return s.set(e, M), M;
    },
    m = function (e, t) {
        var n = _(e),
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
