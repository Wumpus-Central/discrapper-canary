"use strict";
n.d(t, { P: () => g, m: () => m });
var r = n(838259),
    i = n(162563),
    a = n(119090),
    s = n(916784),
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
        contentRect: new a.p(0, 0, 0, 0),
    }),
    m = function (e, t) {
        if ((void 0 === t && (t = !1), u.has(e) && !t)) return u.get(e);
        if ((0, s.dK)(e)) return u.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !_ && "border-box" === n.boxSizing,
            l = d.test(n.writingMode || ""),
            m = !r && c.test(n.overflowY || ""),
            g = !r && c.test(n.overflowX || ""),
            E = r ? 0 : f(n.paddingTop),
            A = r ? 0 : f(n.paddingRight),
            I = r ? 0 : f(n.paddingBottom),
            T = r ? 0 : f(n.paddingLeft),
            y = r ? 0 : f(n.borderTopWidth),
            S = r ? 0 : f(n.borderRightWidth),
            v = r ? 0 : f(n.borderBottomWidth),
            C = r ? 0 : f(n.borderLeftWidth),
            b = T + A,
            N = E + I,
            R = C + S,
            O = y + v,
            D = g ? e.offsetHeight - O - e.clientHeight : 0,
            L = m ? e.offsetWidth - R - e.clientWidth : 0,
            w = i ? b + R : 0,
            x = i ? N + O : 0,
            P = r ? r.width : f(n.width) - w - L,
            M = r ? r.height : f(n.height) - x - D,
            k = P + b + L + R,
            U = M + N + D + O,
            G = (0, o.C)({
                devicePixelContentBoxSize: p(Math.round(P * devicePixelRatio), Math.round(M * devicePixelRatio), l),
                borderBoxSize: p(k, U, l),
                contentBoxSize: p(P, M, l),
                contentRect: new a.p(T, E, P, M),
            });
        return u.set(e, G), G;
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
