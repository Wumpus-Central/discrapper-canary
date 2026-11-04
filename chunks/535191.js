r.d(t, { P: () => p, m: () => v });
var u = r(838259),
    n = r(162563),
    a = r(47361),
    o = (function () {
        function e(e, t, r, u) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = r),
                (this.height = u),
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
    i = r(916784),
    s = r(717205),
    l = new WeakMap(),
    c = /auto|scroll/,
    f = /^tb|vertical/,
    d = /msie|trident/i.test(s.S.navigator && s.S.navigator.userAgent),
    D = function (e) {
        return parseFloat(e || "0");
    },
    h = function (e, t, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            new n.a((r ? t : e) || 0, (r ? e : t) || 0)
        );
    },
    C = (0, a.C)({
        devicePixelContentBoxSize: h(),
        borderBoxSize: h(),
        contentBoxSize: h(),
        contentRect: new o(0, 0, 0, 0),
    }),
    v = function (e, t) {
        if ((void 0 === t && (t = !1), l.has(e) && !t)) return l.get(e);
        if ((0, i.dK)(e)) return (l.set(e, C), C);
        var r = getComputedStyle(e),
            u = (0, i.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            n = !d && "border-box" === r.boxSizing,
            s = f.test(r.writingMode || ""),
            v = !u && c.test(r.overflowY || ""),
            p = !u && c.test(r.overflowX || ""),
            g = u ? 0 : D(r.paddingTop),
            B = u ? 0 : D(r.paddingRight),
            E = u ? 0 : D(r.paddingBottom),
            A = u ? 0 : D(r.paddingLeft),
            F = u ? 0 : D(r.borderTopWidth),
            m = u ? 0 : D(r.borderRightWidth),
            b = u ? 0 : D(r.borderBottomWidth),
            w = u ? 0 : D(r.borderLeftWidth),
            y = A + B,
            x = g + E,
            O = w + m,
            k = F + b,
            P = p ? e.offsetHeight - k - e.clientHeight : 0,
            S = v ? e.offsetWidth - O - e.clientWidth : 0,
            T = u ? u.width : D(r.width) - (n ? y + O : 0) - S,
            j = u ? u.height : D(r.height) - (n ? x + k : 0) - P,
            R = T + y + S + O,
            N = j + x + P + k,
            M = (0, a.C)({
                devicePixelContentBoxSize: h(Math.round(T * devicePixelRatio), Math.round(j * devicePixelRatio), s),
                borderBoxSize: h(R, N, s),
                contentBoxSize: h(T, j, s),
                contentRect: new o(A, g, T, j),
            });
        return (l.set(e, M), M);
    },
    p = function (e, t, r) {
        var n = v(e, r),
            a = n.borderBoxSize,
            o = n.contentBoxSize,
            i = n.devicePixelContentBoxSize;
        switch (t) {
            case u.U.DEVICE_PIXEL_CONTENT_BOX:
                return i;
            case u.U.BORDER_BOX:
                return a;
            default:
                return o;
        }
    };
