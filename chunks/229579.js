n.d(t, {
    Y: () => h,
    u: () => p
});
var i = n(430901),
    r = n(96428),
    a = n(222285),
    s = n(288930),
    o = new WeakMap(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(s.C.navigator && s.C.navigator.userAgent),
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
        contentRect: new r.N(0, 0, 0, 0)
    }),
    p = function (e, t) {
        if ((void 0 === t && (t = !1), o.has(e) && !t)) return o.get(e);
        if ((0, a.xj)(e)) return o.set(e, _), _;
        var n = getComputedStyle(e),
            i = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            s = !c && 'border-box' === n.boxSizing,
            p = u.test(n.writingMode || ''),
            h = !i && l.test(n.overflowY || ''),
            m = !i && l.test(n.overflowX || ''),
            g = i ? 0 : d(n.paddingTop),
            E = i ? 0 : d(n.paddingRight),
            v = i ? 0 : d(n.paddingBottom),
            y = i ? 0 : d(n.paddingLeft),
            I = i ? 0 : d(n.borderTopWidth),
            T = i ? 0 : d(n.borderRightWidth),
            b = i ? 0 : d(n.borderBottomWidth),
            S = i ? 0 : d(n.borderLeftWidth),
            A = y + E,
            N = g + v,
            C = S + T,
            R = I + b,
            O = m ? e.offsetHeight - R - e.clientHeight : 0,
            D = h ? e.offsetWidth - C - e.clientWidth : 0,
            L = s ? A + C : 0,
            x = s ? N + R : 0,
            w = i ? i.width : d(n.width) - L - D,
            P = i ? i.height : d(n.height) - x - O,
            M = w + A + D + C,
            k = P + N + O + R,
            U = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(w * devicePixelRatio), Math.round(P * devicePixelRatio), p),
                borderBoxSize: f(M, k, p),
                contentBoxSize: f(w, P, p),
                contentRect: new r.N(y, g, w, P)
            });
        return o.set(e, U), U;
    },
    h = function (e, t, n) {
        var r = p(e, n),
            a = r.borderBoxSize,
            s = r.contentBoxSize,
            o = r.devicePixelContentBoxSize;
        switch (t) {
            case i.z.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case i.z.BORDER_BOX:
                return a;
            default:
                return s;
        }
    };
