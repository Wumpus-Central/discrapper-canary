n.d(t, {
    Y: () => h,
    u: () => p,
});
var r = n(430901),
    i = n(96428),
    a = n(222285),
    o = n(288930),
    s = new WeakMap(),
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
    p = function (e, t) {
        if ((void 0 === t && (t = !1), s.has(e) && !t)) return s.get(e);
        if ((0, a.xj)(e)) return s.set(e, _), _;
        var n = getComputedStyle(e),
            r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            o = !u && "border-box" === n.boxSizing,
            p = c.test(n.writingMode || ""),
            h = !r && l.test(n.overflowY || ""),
            m = !r && l.test(n.overflowX || ""),
            g = r ? 0 : d(n.paddingTop),
            E = r ? 0 : d(n.paddingRight),
            b = r ? 0 : d(n.paddingBottom),
            y = r ? 0 : d(n.paddingLeft),
            O = r ? 0 : d(n.borderTopWidth),
            v = r ? 0 : d(n.borderRightWidth),
            I = r ? 0 : d(n.borderBottomWidth),
            T = r ? 0 : d(n.borderLeftWidth),
            S = y + E,
            A = g + b,
            C = T + v,
            N = O + I,
            R = m ? e.offsetHeight - N - e.clientHeight : 0,
            P = h ? e.offsetWidth - C - e.clientWidth : 0,
            D = o ? S + C : 0,
            w = o ? A + N : 0,
            L = r ? r.width : d(n.width) - D - P,
            x = r ? r.height : d(n.height) - w - R,
            M = L + S + P + C,
            j = x + A + R + N,
            k = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(L * devicePixelRatio), Math.round(x * devicePixelRatio), p),
                borderBoxSize: f(M, j, p),
                contentBoxSize: f(L, x, p),
                contentRect: new i.N(y, g, L, x),
            });
        return s.set(e, k), k;
    },
    h = function (e, t, n) {
        var i = p(e, n),
            a = i.borderBoxSize,
            o = i.contentBoxSize,
            s = i.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.z.BORDER_BOX:
                return a;
            default:
                return o;
        }
    };
