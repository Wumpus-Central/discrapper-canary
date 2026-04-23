"use strict";
n.d(t, { P: () => m, m: () => E });
var r = n(838259),
    i = n(162563),
    s = n(119090),
    a = n(916784),
    o = n(47361),
    l = n(717205),
    u = new WeakMap(),
    c = /auto|scroll/,
    d = /^tb|vertical/,
    _ = /msie|trident/i.test(l.S.navigator && l.S.navigator.userAgent),
    f = function (e) {
        return parseFloat(e || "0");
    },
    p = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new i.a((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    h = (0, o.C)({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new s.p(0, 0, 0, 0),
    }),
    E = function (e, t) {
        if ((void 0 === t && (t = !1), u.has(e) && !t)) return u.get(e);
        if ((0, a.dK)(e)) return u.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !_ && "border-box" === n.boxSizing,
            l = d.test(n.writingMode || ""),
            E = !r && c.test(n.overflowY || ""),
            m = !r && c.test(n.overflowX || ""),
            g = r ? 0 : f(n.paddingTop),
            A = r ? 0 : f(n.paddingRight),
            I = r ? 0 : f(n.paddingBottom),
            T = r ? 0 : f(n.paddingLeft),
            S = r ? 0 : f(n.borderTopWidth),
            y = r ? 0 : f(n.borderRightWidth),
            N = r ? 0 : f(n.borderBottomWidth),
            v = r ? 0 : f(n.borderLeftWidth),
            C = T + A,
            O = g + I,
            R = v + y,
            b = S + N,
            D = m ? e.offsetHeight - b - e.clientHeight : 0,
            L = E ? e.offsetWidth - R - e.clientWidth : 0,
            w = r ? r.width : f(n.width) - (i ? C + R : 0) - L,
            M = r ? r.height : f(n.height) - (i ? O + b : 0) - D,
            P = w + C + L + R,
            x = M + O + D + b,
            k = (0, o.C)({
                devicePixelContentBoxSize: p(Math.round(w * devicePixelRatio), Math.round(M * devicePixelRatio), l),
                borderBoxSize: p(P, x, l),
                contentBoxSize: p(w, M, l),
                contentRect: new s.p(T, g, w, M),
            });
        return u.set(e, k), k;
    },
    m = function (e, t, n) {
        var i = E(e, n),
            s = i.borderBoxSize,
            a = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.U.BORDER_BOX:
                return s;
            default:
                return a;
        }
    };
