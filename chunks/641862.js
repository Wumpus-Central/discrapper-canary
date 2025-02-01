n.d(t, {
    Y: () => g,
    u: () => m
});
var i = n(175730),
    r = n(878369),
    a = n(670732),
    s = n(839826),
    o = n(721056),
    l = n(388388),
    u = new WeakMap(),
    c = /auto|scroll/,
    d = /^tb|vertical/,
    f = /msie|trident/i.test(l.C.navigator && l.C.navigator.userAgent),
    _ = function (e) {
        return parseFloat(e || '0');
    },
    p = function (e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new r.D((n ? t : e) || 0, (n ? e : t) || 0);
    },
    h = (0, o.v)({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new a.N(0, 0, 0, 0)
    }),
    m = function (e, t) {
        if ((void 0 === t && (t = !1), u.has(e) && !t)) return u.get(e);
        if ((0, s.xj)(e)) return u.set(e, h), h;
        var n = getComputedStyle(e),
            i = (0, s.zd)(e) && e.ownerSVGElement && e.getBBox(),
            r = !f && 'border-box' === n.boxSizing,
            l = d.test(n.writingMode || ''),
            m = !i && c.test(n.overflowY || ''),
            g = !i && c.test(n.overflowX || ''),
            E = i ? 0 : _(n.paddingTop),
            v = i ? 0 : _(n.paddingRight),
            y = i ? 0 : _(n.paddingBottom),
            I = i ? 0 : _(n.paddingLeft),
            T = i ? 0 : _(n.borderTopWidth),
            b = i ? 0 : _(n.borderRightWidth),
            S = i ? 0 : _(n.borderBottomWidth),
            A = i ? 0 : _(n.borderLeftWidth),
            N = I + v,
            C = E + y,
            R = A + b,
            O = T + S,
            D = g ? e.offsetHeight - O - e.clientHeight : 0,
            x = m ? e.offsetWidth - R - e.clientWidth : 0,
            L = r ? N + R : 0,
            P = r ? C + O : 0,
            w = i ? i.width : _(n.width) - L - x,
            M = i ? i.height : _(n.height) - P - D,
            k = w + N + x + R,
            U = M + C + D + O,
            G = (0, o.v)({
                devicePixelContentBoxSize: p(Math.round(w * devicePixelRatio), Math.round(M * devicePixelRatio), l),
                borderBoxSize: p(k, U, l),
                contentBoxSize: p(w, M, l),
                contentRect: new a.N(I, E, w, M)
            });
        return u.set(e, G), G;
    },
    g = function (e, t, n) {
        var r = m(e, n),
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
