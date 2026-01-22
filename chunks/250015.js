n.d(t, {
    PP: () => o,
    Px: () => h,
    m5: () => _,
});
var r = n(181981),
    i = n(913132),
    a = n(685518),
    s = n(687567),
    o = new Map(),
    l = /auto|scroll/,
    c = /^tb|vertical/,
    u = /msie|trident/i.test(s.S.navigator && s.S.navigator.userAgent),
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
        contentRect: new i.p(0, 0, 0, 0),
    }),
    _ = function (e) {
        if (o.has(e)) return o.get(e);
        if ((0, a.dK)(e)) return o.set(e, p), p;
        var t = getComputedStyle(e),
            n = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            r = !u && "border-box" === t.boxSizing,
            s = c.test(t.writingMode || ""),
            _ = !n && l.test(t.overflowY || ""),
            h = !n && l.test(t.overflowX || ""),
            m = n ? 0 : d(t.paddingTop),
            g = n ? 0 : d(t.paddingRight),
            E = n ? 0 : d(t.paddingBottom),
            b = n ? 0 : d(t.paddingLeft),
            y = n ? 0 : d(t.borderTopWidth),
            O = n ? 0 : d(t.borderRightWidth),
            A = n ? 0 : d(t.borderBottomWidth),
            v = n ? 0 : d(t.borderLeftWidth),
            S = b + g,
            I = m + E,
            T = v + O,
            C = y + A,
            N = h ? e.offsetHeight - C - e.clientHeight : 0,
            R = _ ? e.offsetWidth - T - e.clientWidth : 0,
            w = r ? S + T : 0,
            P = r ? I + C : 0,
            D = n ? n.width : d(t.width) - w - R,
            x = n ? n.height : d(t.height) - P - N,
            L = D + S + R + T,
            j = x + I + N + C,
            M = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(D * devicePixelRatio), Math.round(x * devicePixelRatio), s),
                borderBoxSize: f(L, j, s),
                contentBoxSize: f(D, x, s),
                contentRect: new i.p(b, m, D, x),
            });
        return o.set(e, M), M;
    },
    h = function (e, t) {
        var n = _(e),
            i = n.borderBoxSize,
            a = n.contentBoxSize,
            s = n.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.U.BORDER_BOX:
                return i;
            default:
                return a;
        }
    };
