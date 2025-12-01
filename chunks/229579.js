n.d(t, {
    Y: () => m,
    u: () => _,
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
    p = Object.freeze({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new i.N(0, 0, 0, 0),
    }),
    _ = function (e, t) {
        if ((void 0 === t && (t = !1), s.has(e) && !t)) return s.get(e);
        if ((0, a.xj)(e)) return s.set(e, p), p;
        var n = getComputedStyle(e),
            r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            o = !u && "border-box" === n.boxSizing,
            _ = c.test(n.writingMode || ""),
            m = !r && l.test(n.overflowY || ""),
            h = !r && l.test(n.overflowX || ""),
            g = r ? 0 : d(n.paddingTop),
            E = r ? 0 : d(n.paddingRight),
            b = r ? 0 : d(n.paddingBottom),
            y = r ? 0 : d(n.paddingLeft),
            O = r ? 0 : d(n.borderTopWidth),
            v = r ? 0 : d(n.borderRightWidth),
            S = r ? 0 : d(n.borderBottomWidth),
            I = r ? 0 : d(n.borderLeftWidth),
            T = y + E,
            A = g + b,
            C = I + v,
            N = O + S,
            P = h ? e.offsetHeight - N - e.clientHeight : 0,
            R = m ? e.offsetWidth - C - e.clientWidth : 0,
            w = o ? T + C : 0,
            D = o ? A + N : 0,
            x = r ? r.width : d(n.width) - w - R,
            L = r ? r.height : d(n.height) - D - P,
            j = x + T + R + C,
            M = L + A + P + N,
            k = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(x * devicePixelRatio), Math.round(L * devicePixelRatio), _),
                borderBoxSize: f(j, M, _),
                contentBoxSize: f(x, L, _),
                contentRect: new i.N(y, g, x, L),
            });
        return s.set(e, k), k;
    },
    m = function (e, t, n) {
        var i = _(e, n),
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
