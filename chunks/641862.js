n.d(t, {
    Y: () => g,
    u: () => h,
});
var r = n(175730),
    i = n(878369),
    a = n(670732),
    o = n(839826),
    s = n(721056),
    l = n(388388),
    c = new WeakMap(),
    u = /auto|scroll/,
    d = /^tb|vertical/,
    f = /msie|trident/i.test(l.C.navigator && l.C.navigator.userAgent),
    p = function (e) {
        return parseFloat(e || "0");
    },
    _ = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new i.D((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    m = (0, s.v)({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new a.N(0, 0, 0, 0),
    }),
    h = function (e, t) {
        if ((void 0 === t && (t = !1), c.has(e) && !t)) return c.get(e);
        if ((0, o.xj)(e)) return c.set(e, m), m;
        var n = getComputedStyle(e),
            r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            l = d.test(n.writingMode || ""),
            h = !r && u.test(n.overflowY || ""),
            g = !r && u.test(n.overflowX || ""),
            E = r ? 0 : p(n.paddingTop),
            b = r ? 0 : p(n.paddingRight),
            y = r ? 0 : p(n.paddingBottom),
            O = r ? 0 : p(n.paddingLeft),
            v = r ? 0 : p(n.borderTopWidth),
            S = r ? 0 : p(n.borderRightWidth),
            I = r ? 0 : p(n.borderBottomWidth),
            T = r ? 0 : p(n.borderLeftWidth),
            C = O + b,
            A = E + y,
            N = T + S,
            P = v + I,
            R = g ? e.offsetHeight - P - e.clientHeight : 0,
            D = h ? e.offsetWidth - N - e.clientWidth : 0,
            w = i ? C + N : 0,
            x = i ? A + P : 0,
            L = r ? r.width : p(n.width) - w - D,
            j = r ? r.height : p(n.height) - x - R,
            M = L + C + D + N,
            k = j + A + R + P,
            U = (0, s.v)({
                devicePixelContentBoxSize: _(Math.round(L * devicePixelRatio), Math.round(j * devicePixelRatio), l),
                borderBoxSize: _(M, k, l),
                contentBoxSize: _(L, j, l),
                contentRect: new a.N(O, E, L, j),
            });
        return c.set(e, U), U;
    },
    g = function (e, t, n) {
        var i = h(e, n),
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
