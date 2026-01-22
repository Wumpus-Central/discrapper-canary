n.d(t, {
    P: () => g,
    m: () => m,
});
var r = n(838259),
    i = n(162563),
    a = n(119090),
    s = n(916784),
    o = n(47361),
    l = n(717205),
    c = new WeakMap(),
    u = /auto|scroll/,
    d = /^tb|vertical/,
    f = /msie|trident/i.test(l.S.navigator && l.S.navigator.userAgent),
    p = function (e) {
        return parseFloat(e || "0");
    },
    _ = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new i.a((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    h = (0, o.C)({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new a.p(0, 0, 0, 0),
    }),
    m = function (e, t) {
        if ((void 0 === t && (t = !1), c.has(e) && !t)) return c.get(e);
        if ((0, s.dK)(e)) return c.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            l = d.test(n.writingMode || ""),
            m = !r && u.test(n.overflowY || ""),
            g = !r && u.test(n.overflowX || ""),
            E = r ? 0 : p(n.paddingTop),
            b = r ? 0 : p(n.paddingRight),
            y = r ? 0 : p(n.paddingBottom),
            O = r ? 0 : p(n.paddingLeft),
            A = r ? 0 : p(n.borderTopWidth),
            v = r ? 0 : p(n.borderRightWidth),
            S = r ? 0 : p(n.borderBottomWidth),
            I = r ? 0 : p(n.borderLeftWidth),
            T = O + b,
            C = E + y,
            N = I + v,
            R = A + S,
            w = g ? e.offsetHeight - R - e.clientHeight : 0,
            P = m ? e.offsetWidth - N - e.clientWidth : 0,
            D = i ? T + N : 0,
            x = i ? C + R : 0,
            L = r ? r.width : p(n.width) - D - P,
            j = r ? r.height : p(n.height) - x - w,
            M = L + T + P + N,
            k = j + C + w + R,
            U = (0, o.C)({
                devicePixelContentBoxSize: _(Math.round(L * devicePixelRatio), Math.round(j * devicePixelRatio), l),
                borderBoxSize: _(M, k, l),
                contentBoxSize: _(L, j, l),
                contentRect: new a.p(O, E, L, j),
            });
        return c.set(e, U), U;
    },
    g = function (e, t, n) {
        var i = m(e, n),
            a = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.U.BORDER_BOX:
                return a;
            default:
                return s;
        }
    };
