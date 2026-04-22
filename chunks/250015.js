"use strict";
n.d(t, { PP: () => o, Px: () => h, m5: () => E });
var r = n(181981),
    i = n(913132),
    s = n(685518),
    a = n(687567),
    o = new Map(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    d = /msie|trident/i.test(a.S.navigator && a.S.navigator.userAgent),
    c = function (e) {
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
    E = function (e) {
        if (o.has(e)) return o.get(e);
        if ((0, s.dK)(e)) return o.set(e, f), f;
        var t = getComputedStyle(e),
            n = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            r = !d && "border-box" === t.boxSizing,
            a = u.test(t.writingMode || ""),
            E = !n && l.test(t.overflowY || ""),
            h = !n && l.test(t.overflowX || ""),
            p = n ? 0 : c(t.paddingTop),
            m = n ? 0 : c(t.paddingRight),
            g = n ? 0 : c(t.paddingBottom),
            A = n ? 0 : c(t.paddingLeft),
            I = n ? 0 : c(t.borderTopWidth),
            T = n ? 0 : c(t.borderRightWidth),
            S = n ? 0 : c(t.borderBottomWidth),
            y = n ? 0 : c(t.borderLeftWidth),
            N = A + m,
            O = p + g,
            R = y + T,
            v = I + S,
            C = h ? e.offsetHeight - v - e.clientHeight : 0,
            b = E ? e.offsetWidth - R - e.clientWidth : 0,
            D = n ? n.width : c(t.width) - (r ? N + R : 0) - b,
            L = n ? n.height : c(t.height) - (r ? O + v : 0) - C,
            w = D + N + b + R,
            M = L + O + C + v,
            P = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(D * devicePixelRatio), Math.round(L * devicePixelRatio), a),
                borderBoxSize: _(w, M, a),
                contentBoxSize: _(D, L, a),
                contentRect: new i.p(A, p, D, L),
            });
        return o.set(e, P), P;
    },
    h = function (e, t) {
        var n = E(e),
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
