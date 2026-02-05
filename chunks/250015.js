"use strict";
n.d(t, { PP: () => o, Px: () => h, m5: () => p });
var r = n(181981),
    i = n(913132),
    a = n(685518),
    s = n(687567),
    o = new Map(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(s.S.navigator && s.S.navigator.userAgent),
    d = function (e) {
        return parseFloat(e || "0");
    },
    _ = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            Object.freeze({ inlineSize: (n ? t : e) || 0, blockSize: (n ? e : t) || 0 })
        );
    },
    f = Object.freeze({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new i.p(0, 0, 0, 0),
    }),
    p = function (e) {
        if (o.has(e)) return o.get(e);
        if ((0, a.dK)(e)) return o.set(e, f), f;
        var t = getComputedStyle(e),
            n = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            r = !c && "border-box" === t.boxSizing,
            s = u.test(t.writingMode || ""),
            p = !n && l.test(t.overflowY || ""),
            h = !n && l.test(t.overflowX || ""),
            m = n ? 0 : d(t.paddingTop),
            g = n ? 0 : d(t.paddingRight),
            E = n ? 0 : d(t.paddingBottom),
            A = n ? 0 : d(t.paddingLeft),
            I = n ? 0 : d(t.borderTopWidth),
            T = n ? 0 : d(t.borderRightWidth),
            y = n ? 0 : d(t.borderBottomWidth),
            S = n ? 0 : d(t.borderLeftWidth),
            v = A + g,
            C = m + E,
            b = S + T,
            N = I + y,
            R = h ? e.offsetHeight - N - e.clientHeight : 0,
            O = p ? e.offsetWidth - b - e.clientWidth : 0,
            D = r ? v + b : 0,
            L = r ? C + N : 0,
            w = n ? n.width : d(t.width) - D - O,
            x = n ? n.height : d(t.height) - L - R,
            P = w + v + O + b,
            M = x + C + R + N,
            k = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(w * devicePixelRatio), Math.round(x * devicePixelRatio), s),
                borderBoxSize: _(P, M, s),
                contentBoxSize: _(w, x, s),
                contentRect: new i.p(A, m, w, x),
            });
        return o.set(e, k), k;
    },
    h = function (e, t) {
        var n = p(e),
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
