r.d(n, {
    Y: function () {
        return m;
    },
    u: function () {
        return _;
    }
});
var i = r(430901),
    a = r(96428),
    o = r(222285),
    s = r(288930),
    l = new WeakMap(),
    u = /auto|scroll/,
    c = /^tb|vertical/,
    d = /msie|trident/i.test(s.C.navigator && s.C.navigator.userAgent),
    f = function (e) {
        return parseFloat(e || '0');
    },
    p = function (e, n, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = !1),
            Object.freeze({
                inlineSize: (r ? n : e) || 0,
                blockSize: (r ? e : n) || 0
            })
        );
    },
    h = Object.freeze({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new a.N(0, 0, 0, 0)
    }),
    _ = function (e, n) {
        if ((void 0 === n && (n = !1), l.has(e) && !n)) return l.get(e);
        if ((0, o.xj)(e)) return l.set(e, h), h;
        var r = getComputedStyle(e),
            i = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
            s = !d && 'border-box' === r.boxSizing,
            _ = c.test(r.writingMode || ''),
            m = !i && u.test(r.overflowY || ''),
            g = !i && u.test(r.overflowX || ''),
            E = i ? 0 : f(r.paddingTop),
            v = i ? 0 : f(r.paddingRight),
            y = i ? 0 : f(r.paddingBottom),
            b = i ? 0 : f(r.paddingLeft),
            I = i ? 0 : f(r.borderTopWidth),
            T = i ? 0 : f(r.borderRightWidth),
            S = i ? 0 : f(r.borderBottomWidth),
            A = i ? 0 : f(r.borderLeftWidth),
            C = b + v,
            N = E + y,
            R = A + T,
            O = I + S,
            D = g ? e.offsetHeight - O - e.clientHeight : 0,
            L = m ? e.offsetWidth - R - e.clientWidth : 0,
            x = s ? C + R : 0,
            w = s ? N + O : 0,
            P = i ? i.width : f(r.width) - x - L,
            M = i ? i.height : f(r.height) - w - D,
            k = P + C + L + R,
            U = M + N + D + O,
            B = Object.freeze({
                devicePixelContentBoxSize: p(Math.round(P * devicePixelRatio), Math.round(M * devicePixelRatio), _),
                borderBoxSize: p(k, U, _),
                contentBoxSize: p(P, M, _),
                contentRect: new a.N(b, E, P, M)
            });
        return l.set(e, B), B;
    },
    m = function (e, n, r) {
        var a = _(e, r),
            o = a.borderBoxSize,
            s = a.contentBoxSize,
            l = a.devicePixelContentBoxSize;
        switch (n) {
            case i.z.DEVICE_PIXEL_CONTENT_BOX:
                return l;
            case i.z.BORDER_BOX:
                return o;
            default:
                return s;
        }
    };
