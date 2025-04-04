n.d(t, {
    Y: () => h,
    u: () => p
});
var r = n(430901),
    i = n(96428),
    o = n(222285),
    a = n(288930),
    s = new WeakMap(),
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
    _ = Object.freeze({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new i.N(0, 0, 0, 0)
    }),
    p = function (e, t) {
        if ((void 0 === t && (t = !1), s.has(e) && !t)) return s.get(e);
        if ((0, o.xj)(e)) return s.set(e, _), _;
        var n = getComputedStyle(e),
            r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
            a = !u && 'border-box' === n.boxSizing,
            p = c.test(n.writingMode || ''),
            h = !r && l.test(n.overflowY || ''),
            m = !r && l.test(n.overflowX || ''),
            g = r ? 0 : d(n.paddingTop),
            E = r ? 0 : d(n.paddingRight),
            b = r ? 0 : d(n.paddingBottom),
            y = r ? 0 : d(n.paddingLeft),
            v = r ? 0 : d(n.borderTopWidth),
            O = r ? 0 : d(n.borderRightWidth),
            I = r ? 0 : d(n.borderBottomWidth),
            S = r ? 0 : d(n.borderLeftWidth),
            T = y + E,
            N = g + b,
            A = S + O,
            C = v + I,
            R = m ? e.offsetHeight - C - e.clientHeight : 0,
            P = h ? e.offsetWidth - A - e.clientWidth : 0,
            w = a ? T + A : 0,
            D = a ? N + C : 0,
            L = r ? r.width : d(n.width) - w - P,
            x = r ? r.height : d(n.height) - D - R,
            M = L + T + P + A,
            k = x + N + R + C,
            j = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(L * devicePixelRatio), Math.round(x * devicePixelRatio), p),
                borderBoxSize: f(M, k, p),
                contentBoxSize: f(L, x, p),
                contentRect: new i.N(y, g, L, x)
            });
        return s.set(e, j), j;
    },
    h = function (e, t, n) {
        var i = p(e, n),
            o = i.borderBoxSize,
            a = i.contentBoxSize,
            s = i.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.z.BORDER_BOX:
                return o;
            default:
                return a;
        }
    };
