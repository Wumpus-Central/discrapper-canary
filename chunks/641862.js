r.d(n, {
    Y: function () {
        return E;
    },
    u: function () {
        return g;
    }
});
var i = r(175730),
    a = r(878369),
    o = r(670732),
    s = r(839826),
    l = r(721056),
    u = r(388388),
    c = new WeakMap(),
    d = /auto|scroll/,
    f = /^tb|vertical/,
    p = /msie|trident/i.test(u.C.navigator && u.C.navigator.userAgent),
    h = function (e) {
        return parseFloat(e || '0');
    },
    _ = function (e, n, r) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = !1), new a.D((r ? n : e) || 0, (r ? e : n) || 0);
    },
    m = (0, l.v)({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new o.N(0, 0, 0, 0)
    }),
    g = function (e, n) {
        if ((void 0 === n && (n = !1), c.has(e) && !n)) return c.get(e);
        if ((0, s.xj)(e)) return c.set(e, m), m;
        var r = getComputedStyle(e),
            i = (0, s.zd)(e) && e.ownerSVGElement && e.getBBox(),
            a = !p && 'border-box' === r.boxSizing,
            u = f.test(r.writingMode || ''),
            g = !i && d.test(r.overflowY || ''),
            E = !i && d.test(r.overflowX || ''),
            v = i ? 0 : h(r.paddingTop),
            y = i ? 0 : h(r.paddingRight),
            b = i ? 0 : h(r.paddingBottom),
            I = i ? 0 : h(r.paddingLeft),
            T = i ? 0 : h(r.borderTopWidth),
            S = i ? 0 : h(r.borderRightWidth),
            A = i ? 0 : h(r.borderBottomWidth),
            C = i ? 0 : h(r.borderLeftWidth),
            N = I + y,
            R = v + b,
            O = C + S,
            D = T + A,
            x = E ? e.offsetHeight - D - e.clientHeight : 0,
            L = g ? e.offsetWidth - O - e.clientWidth : 0,
            w = a ? N + O : 0,
            P = a ? R + D : 0,
            M = i ? i.width : h(r.width) - w - L,
            k = i ? i.height : h(r.height) - P - x,
            U = M + N + L + O,
            B = k + R + x + D,
            G = (0, l.v)({
                devicePixelContentBoxSize: _(Math.round(M * devicePixelRatio), Math.round(k * devicePixelRatio), u),
                borderBoxSize: _(U, B, u),
                contentBoxSize: _(M, k, u),
                contentRect: new o.N(I, v, M, k)
            });
        return c.set(e, G), G;
    },
    E = function (e, n, r) {
        var a = g(e, r),
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
