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
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    f: () => o,
});
var o = (function () {
    function e(t, n) {
        r(this, e),
            s(this, "xs", void 0),
            s(this, "ys", void 0),
            s(this, "c1s", void 0),
            s(this, "c2s", void 0),
            s(this, "c3s", void 0);
        for (var i, a, o, l = t.length, c = [], u = 0; u < l; u++) c.push(u);
        c.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
        });
        for (var d = [], f = [], p = [], _ = 0; _ < l - 1; _++)
            (i = t[_ + 1] - t[_]), (a = n[_ + 1] - n[_]), f.push(i), d.push(a), p.push(a / i);
        for (var h = [p[0]], m = 0; m < f.length - 1; m++) {
            var g = p[m],
                E = p[m + 1];
            if (g * E <= 0) h.push(0);
            else {
                i = f[m];
                var b = f[m + 1],
                    y = i + b;
                h.push((3 * y) / ((y + b) / g + (y + i) / E));
            }
        }
        h.push(p[p.length - 1]);
        for (var O = [], A = [], v = 0; v < h.length - 1; v++) {
            o = p[v];
            var S = h[v],
                I = 1 / f[v],
                T = S + h[v + 1] - o - o;
            O.push((o - S - T) * I), A.push(T * I * I);
        }
        (this.xs = t), (this.ys = n), (this.c1s = h), (this.c2s = O), (this.c3s = A);
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
                    for (var l = 0, c = s.length - 1; l <= c; ) {
                        var u = n[(t = Math.floor(0.5 * (l + c)))];
                        if (u < e) l = t + 1;
                        else {
                            if (!(u > e)) return r[t];
                            c = t - 1;
                        }
                    }
                    var d = e - n[(o = Math.max(0, c))],
                        f = d * d;
                    return r[o] + i[o] * d + a[o] * f + s[o] * d * f;
                },
            },
        ]),
        e
    );
})();
