"use strict";
function r(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function a(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
}
function s(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
n.d(t, { f: () => o });
var o = (function () {
    function e(t, n) {
        r(this, e),
            s(this, "xs", void 0),
            s(this, "ys", void 0),
            s(this, "c1s", void 0),
            s(this, "c2s", void 0),
            s(this, "c3s", void 0);
        for (var i, a, o, l = t.length, u = [], c = 0; c < l; c++) u.push(c);
        u.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
        });
        for (var d = [], _ = [], f = [], p = 0; p < l - 1; p++)
            (i = t[p + 1] - t[p]), (a = n[p + 1] - n[p]), _.push(i), d.push(a), f.push(a / i);
        for (var h = [f[0]], m = 0; m < _.length - 1; m++) {
            var g = f[m],
                E = f[m + 1];
            if (g * E <= 0) h.push(0);
            else {
                i = _[m];
                var A = _[m + 1],
                    I = i + A;
                h.push((3 * I) / ((I + A) / g + (I + i) / E));
            }
        }
        h.push(f[f.length - 1]);
        for (var T = [], y = [], S = 0; S < h.length - 1; S++) {
            o = f[S];
            var v = h[S],
                C = 1 / _[S],
                b = v + h[S + 1] - o - o;
            T.push((o - v - b) * C), y.push(b * C * C);
        }
        (this.xs = t), (this.ys = n), (this.c1s = h), (this.c2s = T), (this.c3s = y);
    }
    return (
        a(e, [
            {
                key: "interpolate",
                value: function (e) {
                    var t,
                        n = this.xs,
                        r = this.ys,
                        i = this.c1s,
                        a = this.c2s,
                        s = this.c3s,
                        o = n.length - 1;
                    if (e === n[o]) return r[o];
                    for (var l = 0, u = s.length - 1; l <= u; ) {
                        var c = n[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return r[t];
                            u = t - 1;
                        }
                    }
                    var d = e - n[(o = Math.max(0, u))],
                        _ = d * d;
                    return r[o] + i[o] * d + a[o] * _ + s[o] * d * _;
                },
            },
        ]),
        e
    );
})();
