n.d(t, {
    Fs: () => s,
    Y9: () => h,
    uP: () => _
});
var r = n(644387),
    i = n(582661),
    o = n(383466),
    a = n(559972),
    s = new Map(),
    l = /auto|scroll/,
    c = /^tb|vertical/,
    u = /msie|trident/i.test(a.C.navigator && a.C.navigator.userAgent),
    d = function (e) {
        return parseFloat(e || '0');
    },
    f = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            Object.freeze({
                inlineSize: (n ? t : e) || 0,
                blockSize: (n ? e : t) || 0
            })
        );
    },
    p = Object.freeze({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new i.N(0, 0, 0, 0)
    }),
    _ = function (e) {
        if (s.has(e)) return s.get(e);
        if ((0, o.xj)(e)) return s.set(e, p), p;
        var t = getComputedStyle(e),
            n = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
            r = !u && 'border-box' === t.boxSizing,
            a = c.test(t.writingMode || ''),
            _ = !n && l.test(t.overflowY || ''),
            h = !n && l.test(t.overflowX || ''),
            m = n ? 0 : d(t.paddingTop),
            g = n ? 0 : d(t.paddingRight),
            E = n ? 0 : d(t.paddingBottom),
            v = n ? 0 : d(t.paddingLeft),
            b = n ? 0 : d(t.borderTopWidth),
            y = n ? 0 : d(t.borderRightWidth),
            O = n ? 0 : d(t.borderBottomWidth),
            S = n ? 0 : d(t.borderLeftWidth),
            I = v + g,
            T = m + E,
            N = S + y,
            A = b + O,
            C = h ? e.offsetHeight - A - e.clientHeight : 0,
            R = _ ? e.offsetWidth - N - e.clientWidth : 0,
            P = r ? I + N : 0,
            w = r ? T + A : 0,
            D = n ? n.width : d(t.width) - P - R,
            x = n ? n.height : d(t.height) - w - C,
            L = D + I + R + N,
            M = x + T + C + A,
            k = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(D * devicePixelRatio), Math.round(x * devicePixelRatio), a),
                borderBoxSize: f(L, M, a),
                contentBoxSize: f(D, x, a),
                contentRect: new i.N(v, m, D, x)
            });
        return s.set(e, k), k;
    },
    h = function (e, t) {
        var n = _(e),
            i = n.borderBoxSize,
            o = n.contentBoxSize,
            a = n.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return a;
            case r.z.BORDER_BOX:
                return i;
            default:
                return o;
        }
    };
