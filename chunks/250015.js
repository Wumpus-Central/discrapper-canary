"use strict";
n.d(t, { PP: () => o, Px: () => h, m5: () => p });
var r = n(181981),
    i = n(913132),
    s = n(685518),
    a = n(687567),
    o = new Map(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(a.S.navigator && a.S.navigator.userAgent),
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
        if ((0, s.dK)(e)) return o.set(e, f), f;
        var t = getComputedStyle(e),
            n = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            r = !c && "border-box" === t.boxSizing,
            a = u.test(t.writingMode || ""),
            p = !n && l.test(t.overflowY || ""),
            h = !n && l.test(t.overflowX || ""),
            E = n ? 0 : d(t.paddingTop),
            m = n ? 0 : d(t.paddingRight),
            g = n ? 0 : d(t.paddingBottom),
            A = n ? 0 : d(t.paddingLeft),
            I = n ? 0 : d(t.borderTopWidth),
            T = n ? 0 : d(t.borderRightWidth),
            S = n ? 0 : d(t.borderBottomWidth),
            y = n ? 0 : d(t.borderLeftWidth),
            N = A + m,
            v = E + g,
            C = y + T,
            O = I + S,
            R = h ? e.offsetHeight - O - e.clientHeight : 0,
            b = p ? e.offsetWidth - C - e.clientWidth : 0,
            D = n ? n.width : d(t.width) - (r ? N + C : 0) - b,
            L = n ? n.height : d(t.height) - (r ? v + O : 0) - R,
            w = D + N + b + C,
            M = L + v + R + O,
            P = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(D * devicePixelRatio), Math.round(L * devicePixelRatio), a),
                borderBoxSize: _(w, M, a),
                contentBoxSize: _(D, L, a),
                contentRect: new i.p(A, E, D, L),
            });
        return o.set(e, P), P;
    },
    h = function (e, t) {
        var n = p(e),
            i = n.borderBoxSize,
            s = n.contentBoxSize,
            a = n.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return a;
            case r.U.BORDER_BOX:
                return i;
            default:
                return s;
        }
    };
