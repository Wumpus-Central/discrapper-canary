"use strict";
n.d(t, { f: () => i });
function r(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var i = (function () {
    var e;
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        r(this, "xs", void 0),
            r(this, "ys", void 0),
            r(this, "c1s", void 0),
            r(this, "c2s", void 0),
            r(this, "c3s", void 0);
        for (var i, s, a, o = e.length, l = [], u = 0; u < o; u++) l.push(u);
        l.sort(function (t, n) {
            return e[t] < e[n] ? -1 : 1;
        });
        for (var c = [], d = [], _ = [], f = 0; f < o - 1; f++)
            (i = e[f + 1] - e[f]), (s = n[f + 1] - n[f]), d.push(i), c.push(s), _.push(s / i);
        for (var p = [_[0]], h = 0; h < d.length - 1; h++) {
            var E = _[h],
                m = _[h + 1];
            if (E * m <= 0) p.push(0);
            else {
                i = d[h];
                var g = d[h + 1],
                    A = i + g;
                p.push((3 * A) / ((A + g) / E + (A + i) / m));
            }
        }
        p.push(_[_.length - 1]);
        for (var I = [], T = [], S = 0; S < p.length - 1; S++) {
            a = _[S];
            var y = p[S],
                N = 1 / d[S],
                v = y + p[S + 1] - a - a;
            I.push((a - y - v) * N), T.push(v * N * N);
        }
        (this.xs = e), (this.ys = n), (this.c1s = p), (this.c2s = I), (this.c3s = T);
    }
    return (
        (e = [
            {
                key: "interpolate",
                value: function (e) {
                    var t,
                        n = this.xs,
                        r = this.ys,
                        i = this.c1s,
                        s = this.c2s,
                        a = this.c3s,
                        o = n.length - 1;
                    if (e === n[o]) return r[o];
                    for (var l = 0, u = a.length - 1; l <= u; ) {
                        var c = n[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return r[t];
                            u = t - 1;
                        }
                    }
                    var d = e - n[(o = Math.max(0, u))],
                        _ = d * d;
                    return r[o] + i[o] * d + s[o] * _ + a[o] * d * _;
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        })(t.prototype, e),
        t
    );
})();
