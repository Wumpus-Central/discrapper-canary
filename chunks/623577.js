"use strict";
n.d(t, { P: () => v, m: () => g });
var r = n(838259),
    i = n(162563),
    a = n(47361),
    o = (function () {
        function e(e, t, n, r) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = n),
                (this.height = r),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                (0, a.C)(this)
            );
        }
        return (
            (e.prototype.toJSON = function () {
                return {
                    x: this.x,
                    y: this.y,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    width: this.width,
                    height: this.height,
                };
            }),
            (e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height);
            }),
            e
        );
    })(),
    s = n(916784),
    l = n(717205),
    u = new WeakMap(),
    c = /auto|scroll/,
    d = /^tb|vertical/,
    f = /msie|trident/i.test(l.S.navigator && l.S.navigator.userAgent),
    p = function (e) {
        return parseFloat(e || "0");
    },
    h = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new i.a((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    m = (0, a.C)({
        devicePixelContentBoxSize: h(),
        borderBoxSize: h(),
        contentBoxSize: h(),
        contentRect: new o(0, 0, 0, 0),
    }),
    g = function (e, t) {
        if ((void 0 === t && (t = !1), u.has(e) && !t)) return u.get(e);
        if ((0, s.dK)(e)) return u.set(e, m), m;
        var n = getComputedStyle(e),
            r = (0, s.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            l = d.test(n.writingMode || ""),
            g = !r && c.test(n.overflowY || ""),
            v = !r && c.test(n.overflowX || ""),
            y = r ? 0 : p(n.paddingTop),
            b = r ? 0 : p(n.paddingRight),
            _ = r ? 0 : p(n.paddingBottom),
            w = r ? 0 : p(n.paddingLeft),
            x = r ? 0 : p(n.borderTopWidth),
            E = r ? 0 : p(n.borderRightWidth),
            S = r ? 0 : p(n.borderBottomWidth),
            k = r ? 0 : p(n.borderLeftWidth),
            T = w + b,
            C = y + _,
            P = k + E,
            A = x + S,
            M = v ? e.offsetHeight - A - e.clientHeight : 0,
            R = g ? e.offsetWidth - P - e.clientWidth : 0,
            I = r ? r.width : p(n.width) - (i ? T + P : 0) - R,
            L = r ? r.height : p(n.height) - (i ? C + A : 0) - M,
            O = I + T + R + P,
            D = L + C + M + A,
            F = (0, a.C)({
                devicePixelContentBoxSize: h(Math.round(I * devicePixelRatio), Math.round(L * devicePixelRatio), l),
                borderBoxSize: h(O, D, l),
                contentBoxSize: h(I, L, l),
                contentRect: new o(w, y, I, L),
            });
        return u.set(e, F), F;
    },
    v = function (e, t, n) {
        var i = g(e, n),
            a = i.borderBoxSize,
            o = i.contentBoxSize,
            s = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.U.BORDER_BOX:
                return a;
            default:
                return o;
        }
    };
