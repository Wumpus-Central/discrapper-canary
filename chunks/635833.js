"use strict";
n.d(t, { P: () => _, m: () => v });
var r = n(838259),
    i = n(162563),
    a = n(119090),
    o = n(916784),
    u = n(47361),
    s = n(717205),
    l = new WeakMap(),
    d = /auto|scroll/,
    c = /^tb|vertical/,
    f = /msie|trident/i.test(s.S.navigator && s.S.navigator.userAgent),
    h = function (e) {
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
    m = (0, u.C)({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new a.p(0, 0, 0, 0),
    }),
    v = function (e, t) {
        if ((void 0 === t && (t = !1), l.has(e) && !t)) return l.get(e);
        if ((0, o.dK)(e)) return l.set(e, m), m;
        var n = getComputedStyle(e),
            r = (0, o.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            s = c.test(n.writingMode || ""),
            v = !r && d.test(n.overflowY || ""),
            _ = !r && d.test(n.overflowX || ""),
            g = r ? 0 : h(n.paddingTop),
            y = r ? 0 : h(n.paddingRight),
            D = r ? 0 : h(n.paddingBottom),
            b = r ? 0 : h(n.paddingLeft),
            C = r ? 0 : h(n.borderTopWidth),
            E = r ? 0 : h(n.borderRightWidth),
            w = r ? 0 : h(n.borderBottomWidth),
            A = r ? 0 : h(n.borderLeftWidth),
            B = b + y,
            F = g + D,
            V = A + E,
            T = C + w,
            k = _ ? e.offsetHeight - T - e.clientHeight : 0,
            x = v ? e.offsetWidth - V - e.clientWidth : 0,
            P = r ? r.width : h(n.width) - (i ? B + V : 0) - x,
            O = r ? r.height : h(n.height) - (i ? F + T : 0) - k,
            S = P + B + x + V,
            M = O + F + k + T,
            R = (0, u.C)({
                devicePixelContentBoxSize: p(Math.round(P * devicePixelRatio), Math.round(O * devicePixelRatio), s),
                borderBoxSize: p(S, M, s),
                contentBoxSize: p(P, O, s),
                contentRect: new a.p(b, g, P, O),
            });
        return l.set(e, R), R;
    },
    _ = function (e, t, n) {
        var i = v(e, n),
            a = i.borderBoxSize,
            o = i.contentBoxSize,
            u = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return u;
            case r.U.BORDER_BOX:
                return a;
            default:
                return o;
        }
    };
