r.d(n, {
    Fs: function () {
        return l;
    },
    Y9: function () {
        return m;
    },
    uP: function () {
        return _;
    }
});
var i = r(644387),
    a = r(582661),
    o = r(383466),
    s = r(559972),
    l = new Map(),
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
    _ = function (e) {
        if (l.has(e)) return l.get(e);
        if ((0, o.xj)(e)) return l.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !d && 'border-box' === n.boxSizing,
            s = c.test(n.writingMode || ''),
            _ = !r && u.test(n.overflowY || ''),
            m = !r && u.test(n.overflowX || ''),
            g = r ? 0 : f(n.paddingTop),
            E = r ? 0 : f(n.paddingRight),
            v = r ? 0 : f(n.paddingBottom),
            y = r ? 0 : f(n.paddingLeft),
            b = r ? 0 : f(n.borderTopWidth),
            I = r ? 0 : f(n.borderRightWidth),
            T = r ? 0 : f(n.borderBottomWidth),
            S = r ? 0 : f(n.borderLeftWidth),
            A = y + E,
            C = g + v,
            N = S + I,
            R = b + T,
            O = m ? e.offsetHeight - R - e.clientHeight : 0,
            D = _ ? e.offsetWidth - N - e.clientWidth : 0,
            x = i ? A + N : 0,
            L = i ? C + R : 0,
            w = r ? r.width : f(n.width) - x - D,
            P = r ? r.height : f(n.height) - L - O,
            M = w + A + D + N,
            k = P + C + O + R,
            U = Object.freeze({
                devicePixelContentBoxSize: p(Math.round(w * devicePixelRatio), Math.round(P * devicePixelRatio), s),
                borderBoxSize: p(M, k, s),
                contentBoxSize: p(w, P, s),
                contentRect: new a.N(y, g, w, P)
            });
        return l.set(e, U), U;
    },
    m = function (e, n) {
        var r = _(e),
            a = r.borderBoxSize,
            o = r.contentBoxSize,
            s = r.devicePixelContentBoxSize;
        switch (n) {
            case i.z.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case i.z.BORDER_BOX:
                return a;
            default:
                return o;
        }
    };
