n.d(t, {
    Y: () => g,
    u: () => m
});
var r = n(175730),
    i = n(878369),
    o = n(670732),
    a = n(839826),
    s = n(721056),
    l = n(388388),
    c = new WeakMap(),
    u = /auto|scroll/,
    d = /^tb|vertical/,
    f = /msie|trident/i.test(l.C.navigator && l.C.navigator.userAgent),
    p = function (e) {
        return parseFloat(e || '0');
    },
    _ = function (e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new i.D((n ? t : e) || 0, (n ? e : t) || 0);
    },
    h = (0, s.v)({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new o.N(0, 0, 0, 0)
    }),
    m = function (e, t) {
        if ((void 0 === t && (t = !1), c.has(e) && !t)) return c.get(e);
        if ((0, a.xj)(e)) return c.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && 'border-box' === n.boxSizing,
            l = d.test(n.writingMode || ''),
            m = !r && u.test(n.overflowY || ''),
            g = !r && u.test(n.overflowX || ''),
            E = r ? 0 : p(n.paddingTop),
            v = r ? 0 : p(n.paddingRight),
            b = r ? 0 : p(n.paddingBottom),
            y = r ? 0 : p(n.paddingLeft),
            O = r ? 0 : p(n.borderTopWidth),
            S = r ? 0 : p(n.borderRightWidth),
            I = r ? 0 : p(n.borderBottomWidth),
            T = r ? 0 : p(n.borderLeftWidth),
            N = y + v,
            A = E + b,
            C = T + S,
            R = O + I,
            P = g ? e.offsetHeight - R - e.clientHeight : 0,
            w = m ? e.offsetWidth - C - e.clientWidth : 0,
            D = i ? N + C : 0,
            x = i ? A + R : 0,
            L = r ? r.width : p(n.width) - D - w,
            M = r ? r.height : p(n.height) - x - P,
            k = L + N + w + C,
            j = M + A + P + R,
            U = (0, s.v)({
                devicePixelContentBoxSize: _(Math.round(L * devicePixelRatio), Math.round(M * devicePixelRatio), l),
                borderBoxSize: _(k, j, l),
                contentBoxSize: _(L, M, l),
                contentRect: new o.N(y, E, L, M)
            });
        return c.set(e, U), U;
    },
    g = function (e, t, n) {
        var i = m(e, n),
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
