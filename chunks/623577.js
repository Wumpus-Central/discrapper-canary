"use strict";
n.d(t, { P: () => _, m: () => v });
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
    u = n(916784),
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
    m = (0, a.C)({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new o(0, 0, 0, 0),
    }),
    v = function (e, t) {
        if ((void 0 === t && (t = !1), l.has(e) && !t)) return l.get(e);
        if ((0, u.dK)(e)) return l.set(e, m), m;
        var n = getComputedStyle(e),
            r = (0, u.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            s = c.test(n.writingMode || ""),
            v = !r && d.test(n.overflowY || ""),
            _ = !r && d.test(n.overflowX || ""),
            g = r ? 0 : h(n.paddingTop),
            y = r ? 0 : h(n.paddingRight),
            b = r ? 0 : h(n.paddingBottom),
            D = r ? 0 : h(n.paddingLeft),
            w = r ? 0 : h(n.borderTopWidth),
            E = r ? 0 : h(n.borderRightWidth),
            C = r ? 0 : h(n.borderBottomWidth),
            A = r ? 0 : h(n.borderLeftWidth),
            B = D + y,
            k = g + b,
            F = A + E,
            T = w + C,
            V = _ ? e.offsetHeight - T - e.clientHeight : 0,
            x = v ? e.offsetWidth - F - e.clientWidth : 0,
            P = r ? r.width : h(n.width) - (i ? B + F : 0) - x,
            O = r ? r.height : h(n.height) - (i ? k + T : 0) - V,
            S = P + B + x + F,
            z = O + k + V + T,
            R = (0, a.C)({
                devicePixelContentBoxSize: p(Math.round(P * devicePixelRatio), Math.round(O * devicePixelRatio), s),
                borderBoxSize: p(S, z, s),
                contentBoxSize: p(P, O, s),
                contentRect: new o(D, g, P, O),
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
