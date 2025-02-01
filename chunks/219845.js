n.d(t, {
    Fs: () => o,
    Y9: () => h,
    uP: () => p
});
var i = n(644387),
    r = n(582661),
    a = n(383466),
    s = n(559972),
    o = new Map(),
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
    p = function (e) {
        if (o.has(e)) return o.get(e);
        if ((0, a.xj)(e)) return o.set(e, _), _;
        var t = getComputedStyle(e),
            n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !c && 'border-box' === t.boxSizing,
            s = u.test(t.writingMode || ''),
            p = !n && l.test(t.overflowY || ''),
            h = !n && l.test(t.overflowX || ''),
            m = n ? 0 : d(t.paddingTop),
            g = n ? 0 : d(t.paddingRight),
            E = n ? 0 : d(t.paddingBottom),
            v = n ? 0 : d(t.paddingLeft),
            y = n ? 0 : d(t.borderTopWidth),
            I = n ? 0 : d(t.borderRightWidth),
            T = n ? 0 : d(t.borderBottomWidth),
            b = n ? 0 : d(t.borderLeftWidth),
            S = v + g,
            A = m + E,
            N = b + I,
            C = y + T,
            R = h ? e.offsetHeight - C - e.clientHeight : 0,
            O = p ? e.offsetWidth - N - e.clientWidth : 0,
            D = i ? S + N : 0,
            x = i ? A + C : 0,
            L = n ? n.width : d(t.width) - D - O,
            P = n ? n.height : d(t.height) - x - R,
            w = L + S + O + N,
            M = P + A + R + C,
            k = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(L * devicePixelRatio), Math.round(P * devicePixelRatio), s),
                borderBoxSize: f(w, M, s),
                contentBoxSize: f(L, P, s),
                contentRect: new r.N(v, m, L, P)
            });
        return o.set(e, k), k;
    },
    h = function (e, t) {
        var n = p(e),
            r = n.borderBoxSize,
            a = n.contentBoxSize,
            s = n.devicePixelContentBoxSize;
        switch (t) {
            case i.z.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case i.z.BORDER_BOX:
                return r;
            default:
                return a;
        }
    };
