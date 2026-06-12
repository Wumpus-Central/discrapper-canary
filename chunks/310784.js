e.exports = (function () {
    "use strict";
    for (
        var e = function (e, t, n) {
                return void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e;
            },
            t = {},
            n = 0,
            i = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
        n < i.length;
        n += 1
    ) {
        var r = i[n];
        t["[object " + r + "]"] = r.toLowerCase();
    }
    var s = function (e) {
            return t[Object.prototype.toString.call(e)] || "object";
        },
        a = Math.PI,
        o = {
            clip_rgb: function (t) {
                (t._clipped = !1), (t._unclipped = t.slice(0));
                for (var n = 0; n <= 3; n++)
                    n < 3
                        ? ((t[n] < 0 || t[n] > 255) && (t._clipped = !0), (t[n] = e(t[n], 0, 255)))
                        : 3 === n && (t[n] = e(t[n], 0, 1));
                return t;
            },
            limit: e,
            type: s,
            unpack: function (e, t) {
                return (void 0 === t && (t = null), e.length >= 3)
                    ? Array.prototype.slice.call(e)
                    : "object" == s(e[0]) && t
                      ? t
                            .split("")
                            .filter(function (t) {
                                return void 0 !== e[0][t];
                            })
                            .map(function (t) {
                                return e[0][t];
                            })
                      : e[0];
            },
            last: function (e) {
                if (e.length < 2) return null;
                var t = e.length - 1;
                return "string" == s(e[t]) ? e[t].toLowerCase() : null;
            },
            TWOPI: 2 * a,
            PITHIRD: a / 3,
            DEG2RAD: a / 180,
            RAD2DEG: 180 / a,
        },
        l = { format: {}, autodetect: [] },
        u = o.last,
        c = o.clip_rgb,
        d = o.type,
        _ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if ("object" === d(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var n = u(e),
                i = !1;
            if (!n) {
                (i = !0),
                    l.sorted ||
                        ((l.autodetect = l.autodetect.sort(function (e, t) {
                            return t.p - e.p;
                        })),
                        (l.sorted = !0));
                for (var r = 0, s = l.autodetect; r < s.length; r += 1) {
                    var a = s[r];
                    if ((n = a.test.apply(a, e))) break;
                }
            }
            if (l.format[n]) {
                var o = l.format[n].apply(null, i ? e : e.slice(0, -1));
                this._rgb = c(o);
            } else throw Error("unknown format: " + e);
            3 === this._rgb.length && this._rgb.push(1);
        };
    _.prototype.toString = function () {
        return "function" == d(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var h = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(h.Color, [null].concat(e)))();
    };
    (h.Color = _), (h.version = "2.4.2");
    var f = o.unpack,
        p = Math.max,
        E = o.unpack,
        m = o.unpack,
        g = o.type,
        A = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = f(e, "rgb"),
                i = n[0],
                r = n[1],
                s = n[2],
                a = 1 - p((i /= 255), p((r /= 255), (s /= 255))),
                o = a < 1 ? 1 / (1 - a) : 0;
            return [(1 - i - a) * o, (1 - r - a) * o, (1 - s - a) * o, a];
        };
    (_.prototype.cmyk = function () {
        return A(this._rgb);
    }),
        (h.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["cmyk"])))();
        }),
        (l.format.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = E(e, "cmyk"))[0],
                i = e[1],
                r = e[2],
                s = e[3],
                a = e.length > 4 ? e[4] : 1;
            return 1 === s
                ? [0, 0, 0, a]
                : [
                      n >= 1 ? 0 : 255 * (1 - n) * (1 - s),
                      i >= 1 ? 0 : 255 * (1 - i) * (1 - s),
                      r >= 1 ? 0 : 255 * (1 - r) * (1 - s),
                      a,
                  ];
        }),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === g((e = m(e, "cmyk"))) && 4 === e.length) return "cmyk";
            },
        });
    var I = o.unpack,
        T = o.last,
        S = function (e) {
            return Math.round(100 * e) / 100;
        },
        y = o.unpack,
        N = function () {
            for (var e, t, n = [], i = arguments.length; i--; ) n[i] = arguments[i];
            var r = (n = y(n, "rgba"))[0],
                s = n[1],
                a = n[2],
                o = Math.min((r /= 255), (s /= 255), (a /= 255)),
                l = Math.max(r, s, a),
                u = (l + o) / 2;
            return (l === o ? ((e = 0), (t = NaN)) : (e = u < 0.5 ? (l - o) / (l + o) : (l - o) / (2 - l - o)),
            r == l
                ? (t = (s - a) / (l - o))
                : s == l
                  ? (t = 2 + (a - r) / (l - o))
                  : a == l && (t = 4 + (r - s) / (l - o)),
            (t *= 60) < 0 && (t += 360),
            n.length > 3 && void 0 !== n[3])
                ? [t, e, u, n[3]]
                : [t, e, u];
        },
        v = o.unpack,
        C = o.last,
        R = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = I(e, "hsla"),
                i = T(e) || "lsa";
            return (
                (n[0] = S(n[0] || 0)),
                (n[1] = S(100 * n[1]) + "%"),
                (n[2] = S(100 * n[2]) + "%"),
                "hsla" === i || (n.length > 3 && n[3] < 1)
                    ? ((n[3] = n.length > 3 ? n[3] : 1), (i = "hsla"))
                    : (n.length = 3),
                i + "(" + n.join(",") + ")"
            );
        },
        O = Math.round,
        b = o.unpack,
        D = Math.round,
        L = function () {
            for (var e, t, n, i, r = [], s = arguments.length; s--; ) r[s] = arguments[s];
            var a = (r = b(r, "hsl"))[0],
                o = r[1],
                l = r[2];
            if (0 === o) t = n = i = 255 * l;
            else {
                var u = [0, 0, 0],
                    c = [0, 0, 0],
                    d = l < 0.5 ? l * (1 + o) : l + o - l * o,
                    _ = 2 * l - d,
                    h = a / 360;
                (u[0] = h + 1 / 3), (u[1] = h), (u[2] = h - 1 / 3);
                for (var f = 0; f < 3; f++)
                    u[f] < 0 && (u[f] += 1),
                        u[f] > 1 && (u[f] -= 1),
                        6 * u[f] < 1
                            ? (c[f] = _ + (d - _) * 6 * u[f])
                            : 2 * u[f] < 1
                              ? (c[f] = d)
                              : 3 * u[f] < 2
                                ? (c[f] = _ + (d - _) * (2 / 3 - u[f]) * 6)
                                : (c[f] = _);
                (t = (e = [D(255 * c[0]), D(255 * c[1]), D(255 * c[2])])[0]), (n = e[1]), (i = e[2]);
            }
            return r.length > 3 ? [t, n, i, r[3]] : [t, n, i, 1];
        },
        w = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        M = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        P = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        x = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        k = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        U = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        G = Math.round,
        F = function (e) {
            if (((e = e.toLowerCase().trim()), l.format.named))
                try {
                    return l.format.named(e);
                } catch (e) {}
            if ((t = e.match(w))) {
                for (var t, n = t.slice(1, 4), i = 0; i < 3; i++) n[i] = +n[i];
                return (n[3] = 1), n;
            }
            if ((t = e.match(M))) {
                for (var r = t.slice(1, 5), s = 0; s < 4; s++) r[s] = +r[s];
                return r;
            }
            if ((t = e.match(P))) {
                for (var a = t.slice(1, 4), o = 0; o < 3; o++) a[o] = G(2.55 * a[o]);
                return (a[3] = 1), a;
            }
            if ((t = e.match(x))) {
                for (var u = t.slice(1, 5), c = 0; c < 3; c++) u[c] = G(2.55 * u[c]);
                return (u[3] = +u[3]), u;
            }
            if ((t = e.match(k))) {
                var d = t.slice(1, 4);
                (d[1] *= 0.01), (d[2] *= 0.01);
                var _ = L(d);
                return (_[3] = 1), _;
            }
            if ((t = e.match(U))) {
                var h = t.slice(1, 4);
                (h[1] *= 0.01), (h[2] *= 0.01);
                var f = L(h);
                return (f[3] = +t[4]), f;
            }
        };
    F.test = function (e) {
        return w.test(e) || M.test(e) || P.test(e) || x.test(e) || k.test(e) || U.test(e);
    };
    var V = o.type,
        B = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = v(e, "rgba"),
                i = C(e) || "rgb";
            return "hsl" == i.substr(0, 3)
                ? R(N(n), i)
                : ((n[0] = O(n[0])),
                  (n[1] = O(n[1])),
                  (n[2] = O(n[2])),
                  ("rgba" === i || (n.length > 3 && n[3] < 1)) && ((n[3] = n.length > 3 ? n[3] : 1), (i = "rgba")),
                  i + "(" + n.slice(0, "rgb" === i ? 3 : 4).join(",") + ")");
        };
    (_.prototype.css = function (e) {
        return B(this._rgb, e);
    }),
        (h.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["css"])))();
        }),
        (l.format.css = F),
        l.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === V(e) && F.test(e)) return "css";
            },
        });
    var H = o.unpack;
    (l.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = H(e, "rgba");
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n;
    }),
        (h.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["gl"])))();
        }),
        (_.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
    var j = o.unpack,
        Y = o.unpack,
        W = Math.floor,
        K = o.unpack,
        $ = o.type,
        z = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var i = j(t, "rgb"),
                r = i[0],
                s = i[1],
                a = i[2],
                o = Math.min(r, s, a),
                l = Math.max(r, s, a),
                u = l - o;
            return (
                0 === u
                    ? (e = NaN)
                    : (r === l && (e = (s - a) / u),
                      s === l && (e = 2 + (a - r) / u),
                      a === l && (e = 4 + (r - s) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, (100 * u) / 255, (o / (255 - u)) * 100]
            );
        };
    (_.prototype.hcg = function () {
        return z(this._rgb);
    }),
        (h.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hcg"])))();
        }),
        (l.format.hcg = function () {
            for (var e, t, n, i, r, s, a, o, l, u = [], c = arguments.length; c--; ) u[c] = arguments[c];
            var d = (u = Y(u, "hcg"))[0],
                _ = u[1],
                h = u[2];
            h *= 255;
            var f = 255 * _;
            if (0 === _) a = o = l = h;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var p = W((d /= 60)),
                    E = d - p,
                    m = h * (1 - _),
                    g = m + f * (1 - E),
                    A = m + f * E,
                    I = m + f;
                switch (p) {
                    case 0:
                        (a = (e = [I, A, m])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (a = (t = [g, I, m])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (a = (n = [m, I, A])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (a = (i = [m, g, I])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 4:
                        (a = (r = [A, m, I])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 5:
                        (a = (s = [I, m, g])[0]), (o = s[1]), (l = s[2]);
                }
            }
            return [a, o, l, u.length > 3 ? u[3] : 1];
        }),
        l.autodetect.push({
            p: 1,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === $((e = K(e, "hcg"))) && 3 === e.length) return "hcg";
            },
        });
    var q = o.unpack,
        X = o.last,
        Z = Math.round,
        Q = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = q(e, "rgba"),
                i = n[0],
                r = n[1],
                s = n[2],
                a = n[3],
                o = X(e) || "auto";
            void 0 === a && (a = 1), "auto" === o && (o = a < 1 ? "rgba" : "rgb"), (i = Z(i));
            var l = "000000" + ((i << 16) | ((r = Z(r)) << 8) | (s = Z(s))).toString(16);
            l = l.substr(l.length - 6);
            var u = "0" + Z(255 * a).toString(16);
            switch (((u = u.substr(u.length - 2)), o.toLowerCase())) {
                case "rgba":
                    return "#" + l + u;
                case "argb":
                    return "#" + u + l;
                default:
                    return "#" + l;
            }
        },
        J = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        ee = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        et = function (e) {
            if (e.match(J)) {
                (4 === e.length || 7 === e.length) && (e = e.substr(1)),
                    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e, 16);
                return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(ee)) {
                (5 === e.length || 9 === e.length) && (e = e.substr(1)),
                    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var n = parseInt(e, 16),
                    i = Math.round(((255 & n) / 255) * 100) / 100;
                return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, i];
            }
            throw Error("unknown hex color: " + e);
        },
        en = o.type;
    (_.prototype.hex = function (e) {
        return Q(this._rgb, e);
    }),
        (h.hex = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hex"])))();
        }),
        (l.format.hex = et),
        l.autodetect.push({
            p: 4,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === en(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex";
            },
        });
    var ei = o.unpack,
        er = o.TWOPI,
        es = Math.min,
        ea = Math.sqrt,
        eo = Math.acos,
        el = o.unpack,
        eu = o.limit,
        ec = o.TWOPI,
        ed = o.PITHIRD,
        e_ = Math.cos,
        eh = o.unpack,
        ef = o.type,
        ep = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var i = ei(t, "rgb"),
                r = i[0],
                s = i[1],
                a = i[2],
                o = es((r /= 255), (s /= 255), (a /= 255)),
                l = (r + s + a) / 3,
                u = l > 0 ? 1 - o / l : 0;
            return (
                0 === u
                    ? (e = NaN)
                    : ((e = eo((e = (r - s + (r - a)) / 2 / ea((r - s) * (r - s) + (r - a) * (s - a))))),
                      a > s && (e = er - e),
                      (e /= er)),
                [360 * e, u, l]
            );
        };
    (_.prototype.hsi = function () {
        return ep(this._rgb);
    }),
        (h.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hsi"])))();
        }),
        (l.format.hsi = function () {
            for (var e, t, n, i = [], r = arguments.length; r--; ) i[r] = arguments[r];
            var s = (i = el(i, "hsi"))[0],
                a = i[1],
                o = i[2];
            return (
                isNaN(s) && (s = 0),
                isNaN(a) && (a = 0),
                s > 360 && (s -= 360),
                s < 0 && (s += 360),
                (s /= 360) < 1 / 3
                    ? (t = 1 - ((n = (1 - a) / 3) + (e = (1 + (a * e_(ec * s)) / e_(ed - ec * s)) / 3)))
                    : s < 2 / 3
                      ? ((s -= 1 / 3),
                        (n = 1 - ((e = (1 - a) / 3) + (t = (1 + (a * e_(ec * s)) / e_(ed - ec * s)) / 3))))
                      : ((s -= 2 / 3),
                        (e = 1 - ((t = (1 - a) / 3) + (n = (1 + (a * e_(ec * s)) / e_(ed - ec * s)) / 3)))),
                (e = eu(o * e * 3)),
                [255 * e, 255 * (t = eu(o * t * 3)), 255 * (n = eu(o * n * 3)), i.length > 3 ? i[3] : 1]
            );
        }),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === ef((e = eh(e, "hsi"))) && 3 === e.length) return "hsi";
            },
        });
    var eE = o.unpack,
        em = o.type;
    (_.prototype.hsl = function () {
        return N(this._rgb);
    }),
        (h.hsl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hsl"])))();
        }),
        (l.format.hsl = L),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === em((e = eE(e, "hsl"))) && 3 === e.length) return "hsl";
            },
        });
    var eg = o.unpack,
        eA = Math.min,
        eI = Math.max,
        eT = o.unpack,
        eS = Math.floor,
        ey = o.unpack,
        eN = o.type,
        ev = function () {
            for (var e, t, n = [], i = arguments.length; i--; ) n[i] = arguments[i];
            var r = (n = eg(n, "rgb"))[0],
                s = n[1],
                a = n[2],
                o = eA(r, s, a),
                l = eI(r, s, a),
                u = l - o;
            return (
                0 === l
                    ? ((e = NaN), (t = 0))
                    : ((t = u / l),
                      r === l && (e = (s - a) / u),
                      s === l && (e = 2 + (a - r) / u),
                      a === l && (e = 4 + (r - s) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, t, l / 255]
            );
        };
    (_.prototype.hsv = function () {
        return ev(this._rgb);
    }),
        (h.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hsv"])))();
        }),
        (l.format.hsv = function () {
            for (var e, t, n, i, r, s, a, o, l, u = [], c = arguments.length; c--; ) u[c] = arguments[c];
            var d = (u = eT(u, "hsv"))[0],
                _ = u[1],
                h = u[2];
            if (((h *= 255), 0 === _)) a = o = l = h;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var f = eS((d /= 60)),
                    p = d - f,
                    E = h * (1 - _),
                    m = h * (1 - _ * p),
                    g = h * (1 - _ * (1 - p));
                switch (f) {
                    case 0:
                        (a = (e = [h, g, E])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (a = (t = [m, h, E])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (a = (n = [E, h, g])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (a = (i = [E, m, h])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 4:
                        (a = (r = [g, E, h])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 5:
                        (a = (s = [h, E, m])[0]), (o = s[1]), (l = s[2]);
                }
            }
            return [a, o, l, u.length > 3 ? u[3] : 1];
        }),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eN((e = ey(e, "hsv"))) && 3 === e.length) return "hsv";
            },
        });
    var eC = 18,
        eR = 0.95047,
        eO = 1,
        eb = 1.08883,
        eD = 0.137931034,
        eL = 0.206896552,
        ew = 0.12841855,
        eM = 0.008856452,
        eP = o.unpack,
        ex = Math.pow,
        ek = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : ex((e + 0.055) / 1.055, 2.4);
        },
        eU = function (e) {
            return e > eM ? ex(e, 1 / 3) : e / ew + eD;
        },
        eG = function () {
            for (var e, t, n, i = [], r = arguments.length; r--; ) i[r] = arguments[r];
            var s = eP(i, "rgb"),
                a =
                    ((e = s[0]),
                    (t = s[1]),
                    (n = s[2]),
                    [
                        eU((0.4124564 * (e = ek(e)) + 0.3575761 * (t = ek(t)) + 0.1804375 * (n = ek(n))) / eR),
                        eU((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / eO),
                        eU((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / eb),
                    ]),
                o = a[0],
                l = a[1],
                u = a[2],
                c = 116 * l - 16;
            return [c < 0 ? 0 : c, 500 * (o - l), 200 * (l - u)];
        },
        eF = o.unpack,
        eV = Math.pow,
        eB = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * eV(e, 1 / 2.4) - 0.055);
        },
        eH = function (e) {
            return e > eL ? e * e * e : ew * (e - eD);
        },
        ej = function () {
            for (var e, t, n, i, r = [], s = arguments.length; s--; ) r[s] = arguments[s];
            var a = (r = eF(r, "lab"))[0],
                o = r[1],
                l = r[2];
            return (
                (t = (a + 16) / 116),
                (e = isNaN(o) ? t : t + o / 500),
                (n = isNaN(l) ? t : t - l / 200),
                (t = eO * eH(t)),
                (i = eB(3.2404542 * (e = eR * eH(e)) - 1.5371385 * t - 0.4985314 * (n = eb * eH(n)))),
                [
                    i,
                    eB(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
                    eB(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
                    r.length > 3 ? r[3] : 1,
                ]
            );
        },
        eY = o.unpack,
        eW = o.type;
    (_.prototype.lab = function () {
        return eG(this._rgb);
    }),
        (h.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["lab"])))();
        }),
        (l.format.lab = ej),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eW((e = eY(e, "lab"))) && 3 === e.length) return "lab";
            },
        });
    var eK = o.unpack,
        e$ = o.RAD2DEG,
        ez = Math.sqrt,
        eq = Math.atan2,
        eX = Math.round,
        eZ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eK(e, "lab"),
                i = n[0],
                r = n[1],
                s = n[2],
                a = ez(r * r + s * s),
                o = (eq(s, r) * e$ + 360) % 360;
            return 0 === eX(1e4 * a) && (o = NaN), [i, a, o];
        },
        eQ = o.unpack,
        eJ = o.unpack,
        e0 = o.DEG2RAD,
        e1 = Math.sin,
        e2 = Math.cos,
        e3 = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eJ(e, "lch"),
                i = n[0],
                r = n[1],
                s = n[2];
            return isNaN(s) && (s = 0), [i, e2((s *= e0)) * r, e1(s) * r];
        },
        e6 = o.unpack,
        e4 = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = e3((e = e6(e, "lch"))[0], e[1], e[2]),
                i = ej(n[0], n[1], n[2]);
            return [i[0], i[1], i[2], e.length > 3 ? e[3] : 1];
        },
        e5 = o.unpack,
        e7 = o.unpack,
        e8 = o.type,
        e9 = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eQ(e, "rgb"),
                i = eG(n[0], n[1], n[2]);
            return eZ(i[0], i[1], i[2]);
        };
    (_.prototype.lch = function () {
        return e9(this._rgb);
    }),
        (_.prototype.hcl = function () {
            return e9(this._rgb).reverse();
        }),
        (h.lch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["lch"])))();
        }),
        (h.hcl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hcl"])))();
        }),
        (l.format.lch = e4),
        (l.format.hcl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = e5(e, "hcl").reverse();
            return e4.apply(void 0, n);
        }),
        ["lch", "hcl"].forEach(function (e) {
            return l.autodetect.push({
                p: 2,
                test: function () {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    if ("array" === e8((t = e7(t, e))) && 3 === t.length) return e;
                },
            });
        });
    var te = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflower: "#6495ed",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            laserlemon: "#ffff54",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrod: "#fafad2",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            maroon2: "#7f0000",
            maroon3: "#b03060",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            purple2: "#7f007f",
            purple3: "#a020f0",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
        },
        tt = o.type;
    (_.prototype.name = function () {
        for (var e = Q(this._rgb, "rgb"), t = 0, n = Object.keys(te); t < n.length; t += 1) {
            var i = n[t];
            if (te[i] === e) return i.toLowerCase();
        }
        return e;
    }),
        (l.format.named = function (e) {
            if (te[(e = e.toLowerCase())]) return et(te[e]);
            throw Error("unknown color name: " + e);
        }),
        l.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === tt(e) && te[e.toLowerCase()]) return "named";
            },
        });
    var tn = o.unpack,
        ti = o.type,
        tr = o.type,
        ts = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tn(e, "rgb");
            return (n[0] << 16) + (n[1] << 8) + n[2];
        };
    (_.prototype.num = function () {
        return ts(this._rgb);
    }),
        (h.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["num"])))();
        }),
        (l.format.num = function (e) {
            if ("number" == ti(e) && e >= 0 && e <= 0xffffff) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw Error("unknown num color: " + e);
        }),
        l.autodetect.push({
            p: 5,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (1 === e.length && "number" === tr(e[0]) && e[0] >= 0 && e[0] <= 0xffffff) return "num";
            },
        });
    var ta = o.unpack,
        to = o.type,
        tl = Math.round;
    (_.prototype.rgb = function (e) {
        return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(tl);
    }),
        (_.prototype.rgba = function (e) {
            return (
                void 0 === e && (e = !0),
                this._rgb.slice(0, 4).map(function (t, n) {
                    return n < 3 ? (!1 === e ? t : tl(t)) : t;
                })
            );
        }),
        (h.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["rgb"])))();
        }),
        (l.format.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = ta(e, "rgba");
            return void 0 === n[3] && (n[3] = 1), n;
        }),
        l.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (
                    "array" === to((e = ta(e, "rgba"))) &&
                    (3 === e.length || (4 === e.length && "number" == to(e[3]) && e[3] >= 0 && e[3] <= 1))
                )
                    return "rgb";
            },
        });
    var tu = Math.log,
        tc = function (e) {
            var t,
                n,
                i,
                r = e / 100;
            return (
                r < 66
                    ? ((t = 255),
                      (n =
                          r < 6
                              ? 0
                              : -155.25485562709179 - 0.44596950469579133 * (n = r - 2) + 104.49216199393888 * tu(n)),
                      (i =
                          r < 20
                              ? 0
                              : -254.76935184120902 + 0.8274096064007395 * (i = r - 10) + 115.67994401066147 * tu(i)))
                    : ((t = 351.97690566805693 + 0.114206453784165 * (t = r - 55) - 40.25366309332127 * tu(t)),
                      (n = 325.4494125711974 + 0.07943456536662342 * (n = r - 50) - 28.0852963507957 * tu(n)),
                      (i = 255)),
                [t, n, i, 1]
            );
        },
        td = o.unpack,
        t_ = Math.round,
        th = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            for (var i = td(t, "rgb"), r = i[0], s = i[2], a = 1e3, o = 4e4; o - a > 0.4; ) {
                var l = tc((e = (o + a) * 0.5));
                l[2] / l[0] >= s / r ? (o = e) : (a = e);
            }
            return t_(e);
        };
    (_.prototype.temp =
        _.prototype.kelvin =
        _.prototype.temperature =
            function () {
                return th(this._rgb);
            }),
        (h.temp =
            h.kelvin =
            h.temperature =
                function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(_, [null].concat(e, ["temp"])))();
                }),
        (l.format.temp = l.format.kelvin = l.format.temperature = tc);
    var tf = o.unpack,
        tp = Math.cbrt,
        tE = Math.pow,
        tm = Math.sign,
        tg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tf(e, "rgb"),
                i = n[0],
                r = n[1],
                s = n[2],
                a = [tA(i / 255), tA(r / 255), tA(s / 255)],
                o = a[0],
                l = a[1],
                u = a[2],
                c = tp(0.4122214708 * o + 0.5363325363 * l + 0.0514459929 * u),
                d = tp(0.2119034982 * o + 0.6806995451 * l + 0.1073969566 * u),
                _ = tp(0.0883024619 * o + 0.2817188376 * l + 0.6299787005 * u);
            return [
                0.2104542553 * c + 0.793617785 * d - 0.0040720468 * _,
                1.9779984951 * c - 2.428592205 * d + 0.4505937099 * _,
                0.0259040371 * c + 0.7827717662 * d - 0.808675766 * _,
            ];
        };
    function tA(e) {
        var t = Math.abs(e);
        return t < 0.04045 ? e / 12.92 : (tm(e) || 1) * tE((t + 0.055) / 1.055, 2.4);
    }
    var tI = o.unpack,
        tT = Math.pow,
        tS = Math.sign,
        ty = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = tI(e, "lab"))[0],
                i = e[1],
                r = e[2],
                s = tT(n + 0.3963377774 * i + 0.2158037573 * r, 3),
                a = tT(n - 0.1055613458 * i - 0.0638541728 * r, 3),
                o = tT(n - 0.0894841775 * i - 1.291485548 * r, 3);
            return [
                255 * tN(4.0767416621 * s - 3.3077115913 * a + 0.2309699292 * o),
                255 * tN(-1.2684380046 * s + 2.6097574011 * a - 0.3413193965 * o),
                255 * tN(-0.0041960863 * s - 0.7034186147 * a + 1.707614701 * o),
                e.length > 3 ? e[3] : 1,
            ];
        };
    function tN(e) {
        var t = Math.abs(e);
        return t > 0.0031308 ? (tS(e) || 1) * (1.055 * tT(t, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var tv = o.unpack,
        tC = o.type;
    (_.prototype.oklab = function () {
        return tg(this._rgb);
    }),
        (h.oklab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["oklab"])))();
        }),
        (l.format.oklab = ty),
        l.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === tC((e = tv(e, "oklab"))) && 3 === e.length) return "oklab";
            },
        });
    var tR = o.unpack,
        tO = o.unpack,
        tb = o.unpack,
        tD = o.type,
        tL = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tR(e, "rgb"),
                i = tg(n[0], n[1], n[2]);
            return eZ(i[0], i[1], i[2]);
        };
    (_.prototype.oklch = function () {
        return tL(this._rgb);
    }),
        (h.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["oklch"])))();
        }),
        (l.format.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = e3((e = tO(e, "lch"))[0], e[1], e[2]),
                i = ty(n[0], n[1], n[2]);
            return [i[0], i[1], i[2], e.length > 3 ? e[3] : 1];
        }),
        l.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === tD((e = tb(e, "oklch"))) && 3 === e.length) return "oklch";
            },
        });
    var tw = o.type;
    (_.prototype.alpha = function (e, t) {
        return (void 0 === t && (t = !1), void 0 !== e && "number" === tw(e))
            ? t
                ? ((this._rgb[3] = e), this)
                : new _([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3];
    }),
        (_.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        }),
        (_.prototype.darken = function (e) {
            void 0 === e && (e = 1);
            var t = this.lab();
            return (t[0] -= eC * e), new _(t, "lab").alpha(this.alpha(), !0);
        }),
        (_.prototype.brighten = function (e) {
            return void 0 === e && (e = 1), this.darken(-e);
        }),
        (_.prototype.darker = _.prototype.darken),
        (_.prototype.brighter = _.prototype.brighten),
        (_.prototype.get = function (e) {
            var t = e.split("."),
                n = t[0],
                i = t[1],
                r = this[n]();
            if (!i) return r;
            var s = n.indexOf(i) - 2 * ("ok" === n.substr(0, 2));
            if (s > -1) return r[s];
            throw Error("unknown channel " + i + " in mode " + n);
        });
    var tM = o.type,
        tP = Math.pow;
    _.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === tM(e)) {
            if (0 === e) return new _([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === e) return new _([255, 255, 255, this._rgb[3]], "rgb");
            var t = this.luminance(),
                n = 20,
                i = function (t, r) {
                    var s = t.interpolate(r, 0.5, "rgb"),
                        a = s.luminance();
                    return !(1e-7 > Math.abs(e - a)) && n-- ? (a > e ? i(t, s) : i(s, r)) : s;
                },
                r = (t > e ? i(new _([0, 0, 0]), this) : i(this, new _([255, 255, 255]))).rgb();
            return new _(r.concat([this._rgb[3]]));
        }
        return tx.apply(void 0, this._rgb.slice(0, 3));
    };
    var tx = function (e, t, n) {
            return (e = tk(e)), 0.2126 * e + 0.7152 * (t = tk(t)) + 0.0722 * (n = tk(n));
        },
        tk = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : tP((e + 0.055) / 1.055, 2.4);
        },
        tU = {},
        tG = o.type,
        tF = function (e, t, n) {
            void 0 === n && (n = 0.5);
            for (var i = [], r = arguments.length - 3; r-- > 0; ) i[r] = arguments[r + 3];
            var s = i[0] || "lrgb";
            if ((tU[s] || i.length || (s = Object.keys(tU)[0]), !tU[s]))
                throw Error("interpolation mode " + s + " is not defined");
            return (
                "object" !== tG(e) && (e = new _(e)),
                "object" !== tG(t) && (t = new _(t)),
                tU[s](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
            );
        };
    (_.prototype.mix = _.prototype.interpolate =
        function (e, t) {
            void 0 === t && (t = 0.5);
            for (var n = [], i = arguments.length - 2; i-- > 0; ) n[i] = arguments[i + 2];
            return tF.apply(void 0, [this, e, t].concat(n));
        }),
        (_.prototype.premultiply = function (e) {
            void 0 === e && (e = !1);
            var t = this._rgb,
                n = t[3];
            return e
                ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
                : new _([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
        }),
        (_.prototype.saturate = function (e) {
            void 0 === e && (e = 1);
            var t = this.lch();
            return (t[1] += eC * e), t[1] < 0 && (t[1] = 0), new _(t, "lch").alpha(this.alpha(), !0);
        }),
        (_.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
        });
    var tV = o.type;
    (_.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var i = e.split("."),
            r = i[0],
            s = i[1],
            a = this[r]();
        if (!s) return a;
        var o = r.indexOf(s) - 2 * ("ok" === r.substr(0, 2));
        if (o > -1) {
            if ("string" == tV(t))
                switch (t.charAt(0)) {
                    case "+":
                    case "-":
                        a[o] += +t;
                        break;
                    case "*":
                        a[o] *= t.substr(1);
                        break;
                    case "/":
                        a[o] /= t.substr(1);
                        break;
                    default:
                        a[o] = +t;
                }
            else if ("number" === tV(t)) a[o] = t;
            else throw Error("unsupported value for Color.set");
            var l = new _(a, r);
            return n ? ((this._rgb = l._rgb), this) : l;
        }
        throw Error("unknown channel " + s + " in mode " + r);
    }),
        (tU.rgb = function (e, t, n) {
            var i = e._rgb,
                r = t._rgb;
            return new _(i[0] + n * (r[0] - i[0]), i[1] + n * (r[1] - i[1]), i[2] + n * (r[2] - i[2]), "rgb");
        });
    var tB = Math.sqrt,
        tH = Math.pow;
    (tU.lrgb = function (e, t, n) {
        var i = e._rgb,
            r = i[0],
            s = i[1],
            a = i[2],
            o = t._rgb,
            l = o[0],
            u = o[1],
            c = o[2];
        return new _(
            tB(tH(r, 2) * (1 - n) + tH(l, 2) * n),
            tB(tH(s, 2) * (1 - n) + tH(u, 2) * n),
            tB(tH(a, 2) * (1 - n) + tH(c, 2) * n),
            "rgb",
        );
    }),
        (tU.lab = function (e, t, n) {
            var i = e.lab(),
                r = t.lab();
            return new _(i[0] + n * (r[0] - i[0]), i[1] + n * (r[1] - i[1]), i[2] + n * (r[2] - i[2]), "lab");
        });
    var tj = function (e, t, n, i) {
            var r, s, a, o, l, u, c, d, h, f, p, E, m, g;
            return (
                "hsl" === i
                    ? ((a = e.hsl()), (o = t.hsl()))
                    : "hsv" === i
                      ? ((a = e.hsv()), (o = t.hsv()))
                      : "hcg" === i
                        ? ((a = e.hcg()), (o = t.hcg()))
                        : "hsi" === i
                          ? ((a = e.hsi()), (o = t.hsi()))
                          : "lch" === i || "hcl" === i
                            ? ((i = "hcl"), (a = e.hcl()), (o = t.hcl()))
                            : "oklch" === i && ((a = e.oklch().reverse()), (o = t.oklch().reverse())),
                ("h" === i.substr(0, 1) || "oklch" === i) &&
                    ((l = (r = a)[0]), (c = r[1]), (h = r[2]), (u = (s = o)[0]), (d = s[1]), (f = s[2])),
                isNaN(l) || isNaN(u)
                    ? isNaN(l)
                        ? isNaN(u)
                            ? (E = NaN)
                            : ((E = u), (1 == h || 0 == h) && "hsv" != i && (p = d))
                        : ((E = l), (1 == f || 0 == f) && "hsv" != i && (p = c))
                    : ((g = u > l && u - l > 180 ? u - (l + 360) : u < l && l - u > 180 ? u + 360 - l : u - l),
                      (E = l + n * g)),
                void 0 === p && (p = c + n * (d - c)),
                (m = h + n * (f - h)),
                "oklch" === i ? new _([m, p, E], i) : new _([E, p, m], i)
            );
        },
        tY = function (e, t, n) {
            return tj(e, t, n, "lch");
        };
    (tU.lch = tY),
        (tU.hcl = tY),
        (tU.num = function (e, t, n) {
            var i = e.num();
            return new _(i + n * (t.num() - i), "num");
        }),
        (tU.hcg = function (e, t, n) {
            return tj(e, t, n, "hcg");
        }),
        (tU.hsi = function (e, t, n) {
            return tj(e, t, n, "hsi");
        }),
        (tU.hsl = function (e, t, n) {
            return tj(e, t, n, "hsl");
        }),
        (tU.hsv = function (e, t, n) {
            return tj(e, t, n, "hsv");
        }),
        (tU.oklab = function (e, t, n) {
            var i = e.oklab(),
                r = t.oklab();
            return new _(i[0] + n * (r[0] - i[0]), i[1] + n * (r[1] - i[1]), i[2] + n * (r[2] - i[2]), "oklab");
        }),
        (tU.oklch = function (e, t, n) {
            return tj(e, t, n, "oklch");
        });
    var tW = o.clip_rgb,
        tK = Math.pow,
        t$ = Math.sqrt,
        tz = Math.PI,
        tq = Math.cos,
        tX = Math.sin,
        tZ = Math.atan2,
        tQ = function (e, t) {
            for (var n = e.length, i = [0, 0, 0, 0], r = 0; r < e.length; r++) {
                var s = e[r],
                    a = t[r] / n,
                    o = s._rgb;
                (i[0] += tK(o[0], 2) * a), (i[1] += tK(o[1], 2) * a), (i[2] += tK(o[2], 2) * a), (i[3] += o[3] * a);
            }
            return (
                (i[0] = t$(i[0])), (i[1] = t$(i[1])), (i[2] = t$(i[2])), i[3] > 0.9999999 && (i[3] = 1), new _(tW(i))
            );
        },
        tJ = o.type,
        t0 = Math.pow,
        t1 = function (e) {
            var t = "rgb",
                n = h("#ccc"),
                i = 0,
                r = [0, 1],
                s = [],
                a = [0, 0],
                o = !1,
                l = [],
                u = !1,
                c = 0,
                d = 1,
                _ = !1,
                f = {},
                p = !0,
                E = 1,
                m = function (e) {
                    if (
                        ("string" === tJ((e = e || ["#fff", "#000"])) &&
                            h.brewer &&
                            h.brewer[e.toLowerCase()] &&
                            (e = h.brewer[e.toLowerCase()]),
                        "array" === tJ(e))
                    ) {
                        1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                        for (var t = 0; t < e.length; t++) e[t] = h(e[t]);
                        s.length = 0;
                        for (var n = 0; n < e.length; n++) s.push(n / (e.length - 1));
                    }
                    return S(), (l = e);
                },
                g = function (e) {
                    if (null != o) {
                        for (var t = o.length - 1, n = 0; n < t && e >= o[n]; ) n++;
                        return n - 1;
                    }
                    return 0;
                },
                A = function (e) {
                    return e;
                },
                I = function (e) {
                    return e;
                },
                T = function (e, i) {
                    if ((null == i && (i = !1), isNaN(e) || null === e)) return n;
                    if (i) u = e;
                    else if (o && o.length > 2) {
                        var r, u;
                        u = g(e) / (o.length - 2);
                    } else u = d !== c ? (e - c) / (d - c) : 1;
                    (u = I(u)), i || (u = A(u)), 1 !== E && (u = t0(u, E));
                    var _ = Math.floor(1e4 * (u = Math.min(1, Math.max(0, (u = a[0] + u * (1 - a[0] - a[1]))))));
                    if (p && f[_]) r = f[_];
                    else {
                        if ("array" === tJ(l))
                            for (var m = 0; m < s.length; m++) {
                                var T = s[m];
                                if (u <= T || (u >= T && m === s.length - 1)) {
                                    r = l[m];
                                    break;
                                }
                                if (u > T && u < s[m + 1]) {
                                    (u = (u - T) / (s[m + 1] - T)), (r = h.interpolate(l[m], l[m + 1], u, t));
                                    break;
                                }
                            }
                        else "function" === tJ(l) && (r = l(u));
                        p && (f[_] = r);
                    }
                    return r;
                },
                S = function () {
                    return (f = {});
                };
            m(e);
            var y = function (e) {
                var t = h(T(e));
                return u && t[u] ? t[u]() : t;
            };
            return (
                (y.classes = function (e) {
                    if (null != e) {
                        if ("array" === tJ(e)) (o = e), (r = [e[0], e[e.length - 1]]);
                        else {
                            var t = h.analyze(r);
                            o = 0 === e ? [t.min, t.max] : h.limits(t, "e", e);
                        }
                        return y;
                    }
                    return o;
                }),
                (y.domain = function (e) {
                    if (!arguments.length) return r;
                    (c = e[0]), (d = e[e.length - 1]), (s = []);
                    var t = l.length;
                    if (e.length === t && c !== d)
                        for (var n = 0, i = Array.from(e); n < i.length; n += 1) {
                            var a = i[n];
                            s.push((a - c) / (d - c));
                        }
                    else {
                        for (var o = 0; o < t; o++) s.push(o / (t - 1));
                        if (e.length > 2) {
                            var u = e.map(function (t, n) {
                                    return n / (e.length - 1);
                                }),
                                _ = e.map(function (e) {
                                    return (e - c) / (d - c);
                                });
                            _.every(function (e, t) {
                                return u[t] === e;
                            }) ||
                                (I = function (e) {
                                    if (e <= 0 || e >= 1) return e;
                                    for (var t = 0; e >= _[t + 1]; ) t++;
                                    var n = (e - _[t]) / (_[t + 1] - _[t]);
                                    return u[t] + n * (u[t + 1] - u[t]);
                                });
                        }
                    }
                    return (r = [c, d]), y;
                }),
                (y.mode = function (e) {
                    return arguments.length ? ((t = e), S(), y) : t;
                }),
                (y.range = function (e, t) {
                    return m(e), y;
                }),
                (y.out = function (e) {
                    return (u = e), y;
                }),
                (y.spread = function (e) {
                    return arguments.length ? ((i = e), y) : i;
                }),
                (y.correctLightness = function (e) {
                    return (
                        null == e && (e = !0),
                        (_ = e),
                        S(),
                        (A = _
                            ? function (e) {
                                  for (
                                      var t = T(0, !0).lab()[0],
                                          n = T(1, !0).lab()[0],
                                          i = t > n,
                                          r = T(e, !0).lab()[0],
                                          s = t + (n - t) * e,
                                          a = r - s,
                                          o = 0,
                                          l = 1,
                                          u = 20;
                                      Math.abs(a) > 0.01 && u-- > 0;
                                  )
                                      i && (a *= -1),
                                          a < 0 ? ((o = e), (e += (l - e) * 0.5)) : ((l = e), (e += (o - e) * 0.5)),
                                          (a = (r = T(e, !0).lab()[0]) - s);
                                  return e;
                              }
                            : function (e) {
                                  return e;
                              }),
                        y
                    );
                }),
                (y.padding = function (e) {
                    return null != e ? ("number" === tJ(e) && (e = [e, e]), (a = e), y) : a;
                }),
                (y.colors = function (t, n) {
                    arguments.length < 2 && (n = "hex");
                    var i = [];
                    if (0 == arguments.length) i = l.slice(0);
                    else if (1 === t) i = [y(0.5)];
                    else if (t > 1) {
                        var s = r[0],
                            a = r[1] - s;
                        i = (function (e, t) {
                            for (
                                var n = [], i = 0 < e, r = t ? (i ? e + 1 : e - 1) : e, s = 0;
                                i ? s < r : s > r;
                                i ? s++ : s--
                            )
                                n.push(s);
                            return n;
                        })(t, !1).map(function (e) {
                            return y(s + (e / (t - 1)) * a);
                        });
                    } else {
                        e = [];
                        var u = [];
                        if (o && o.length > 2)
                            for (var c = 1, d = o.length, _ = 1 <= d; _ ? c < d : c > d; _ ? c++ : c--)
                                u.push((o[c - 1] + o[c]) * 0.5);
                        else u = r;
                        i = u.map(function (e) {
                            return y(e);
                        });
                    }
                    return (
                        h[n] &&
                            (i = i.map(function (e) {
                                return e[n]();
                            })),
                        i
                    );
                }),
                (y.cache = function (e) {
                    return null != e ? ((p = e), y) : p;
                }),
                (y.gamma = function (e) {
                    return null != e ? ((E = e), y) : E;
                }),
                (y.nodata = function (e) {
                    return null != e ? ((n = h(e)), y) : n;
                }),
                y
            );
        },
        t2 = function (e) {
            for (var t = [1, 1], n = 1; n < e; n++) {
                for (var i = [1], r = 1; r <= t.length; r++) i[r] = (t[r] || 0) + t[r - 1];
                t = i;
            }
            return t;
        },
        t3 = function (e) {
            var t, n, i, r, s, a, o, l, u, c, d;
            if (
                2 ===
                (e = e.map(function (e) {
                    return new _(e);
                })).length
            )
                (s = (t = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (a = t[1]),
                    (r = function (e) {
                        return new _(
                            [0, 1, 2].map(function (t) {
                                return s[t] + e * (a[t] - s[t]);
                            }),
                            "lab",
                        );
                    });
            else if (3 === e.length)
                (s = (n = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (a = n[1]),
                    (o = n[2]),
                    (r = function (e) {
                        return new _(
                            [0, 1, 2].map(function (t) {
                                return (1 - e) * (1 - e) * s[t] + 2 * (1 - e) * e * a[t] + e * e * o[t];
                            }),
                            "lab",
                        );
                    });
            else if (4 === e.length)
                (s = (i = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (a = i[1]),
                    (o = i[2]),
                    (l = i[3]),
                    (r = function (e) {
                        return new _(
                            [0, 1, 2].map(function (t) {
                                return (
                                    (1 - e) * (1 - e) * (1 - e) * s[t] +
                                    3 * (1 - e) * (1 - e) * e * a[t] +
                                    3 * (1 - e) * e * e * o[t] +
                                    e * e * e * l[t]
                                );
                            }),
                            "lab",
                        );
                    });
            else if (e.length >= 5)
                (u = e.map(function (e) {
                    return e.lab();
                })),
                    (c = t2((d = e.length - 1))),
                    (r = function (e) {
                        var t = 1 - e;
                        return new _(
                            [0, 1, 2].map(function (n) {
                                return u.reduce(function (i, r, s) {
                                    return i + c[s] * Math.pow(t, d - s) * Math.pow(e, s) * r[n];
                                }, 0);
                            }),
                            "lab",
                        );
                    });
            else throw RangeError("No point in running bezier with only one color.");
            return r;
        },
        t6 = function (e, t, n) {
            if (!t6[n]) throw Error("unknown blend mode " + n);
            return t6[n](e, t);
        },
        t4 = function (e) {
            return function (t, n) {
                var i = h(n).rgb(),
                    r = h(t).rgb();
                return h.rgb(e(i, r));
            };
        },
        t5 = function (e) {
            return function (t, n) {
                var i = [];
                return (i[0] = e(t[0], n[0])), (i[1] = e(t[1], n[1])), (i[2] = e(t[2], n[2])), i;
            };
        };
    (t6.normal = t4(
        t5(function (e) {
            return e;
        }),
    )),
        (t6.multiply = t4(
            t5(function (e, t) {
                return (e * t) / 255;
            }),
        )),
        (t6.screen = t4(
            t5(function (e, t) {
                return 255 * (1 - (1 - e / 255) * (1 - t / 255));
            }),
        )),
        (t6.overlay = t4(
            t5(function (e, t) {
                return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
            }),
        )),
        (t6.darken = t4(
            t5(function (e, t) {
                return e > t ? t : e;
            }),
        )),
        (t6.lighten = t4(
            t5(function (e, t) {
                return e > t ? e : t;
            }),
        )),
        (t6.dodge = t4(
            t5(function (e, t) {
                return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
            }),
        )),
        (t6.burn = t4(
            t5(function (e, t) {
                return 255 * (1 - (1 - t / 255) / (e / 255));
            }),
        ));
    for (
        var t7 = o.type,
            t8 = o.clip_rgb,
            t9 = o.TWOPI,
            ne = Math.pow,
            nt = Math.sin,
            nn = Math.cos,
            ni = Math.floor,
            nr = Math.random,
            ns = Math.log,
            na = Math.pow,
            no = Math.floor,
            nl = Math.abs,
            nu = function (e, t) {
                void 0 === t && (t = null);
                var n = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
                return (
                    "object" === s(e) && (e = Object.values(e)),
                    e.forEach(function (e) {
                        t && "object" === s(e) && (e = e[t]),
                            null == e ||
                                isNaN(e) ||
                                (n.values.push(e),
                                (n.sum += e),
                                e < n.min && (n.min = e),
                                e > n.max && (n.max = e),
                                (n.count += 1));
                    }),
                    (n.domain = [n.min, n.max]),
                    (n.limits = function (e, t) {
                        return nc(n, e, t);
                    }),
                    n
                );
            },
            nc = function (e, t, n) {
                void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == s(e) && (e = nu(e));
                var i = e.min,
                    r = e.max,
                    a = e.values.sort(function (e, t) {
                        return e - t;
                    });
                if (1 === n) return [i, r];
                var o = [];
                if (("c" === t.substr(0, 1) && (o.push(i), o.push(r)), "e" === t.substr(0, 1))) {
                    o.push(i);
                    for (var l = 1; l < n; l++) o.push(i + (l / n) * (r - i));
                    o.push(r);
                } else if ("l" === t.substr(0, 1)) {
                    if (i <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var u = Math.LOG10E * ns(i),
                        c = Math.LOG10E * ns(r);
                    o.push(i);
                    for (var d = 1; d < n; d++) o.push(na(10, u + (d / n) * (c - u)));
                    o.push(r);
                } else if ("q" === t.substr(0, 1)) {
                    o.push(i);
                    for (var _ = 1; _ < n; _++) {
                        var h = ((a.length - 1) * _) / n,
                            f = no(h);
                        if (f === h) o.push(a[f]);
                        else {
                            var p = h - f;
                            o.push(a[f] * (1 - p) + a[f + 1] * p);
                        }
                    }
                    o.push(r);
                } else if ("k" === t.substr(0, 1)) {
                    var E,
                        m = a.length,
                        g = Array(m),
                        A = Array(n),
                        I = !0,
                        T = 0,
                        S = null;
                    (S = []).push(i);
                    for (var y = 1; y < n; y++) S.push(i + (y / n) * (r - i));
                    for (S.push(r); I; ) {
                        for (var N = 0; N < n; N++) A[N] = 0;
                        for (var v = 0; v < m; v++)
                            for (var C = a[v], R = Number.MAX_VALUE, O = void 0, b = 0; b < n; b++) {
                                var D = nl(S[b] - C);
                                D < R && ((R = D), (O = b)), A[O]++, (g[v] = O);
                            }
                        for (var L = Array(n), w = 0; w < n; w++) L[w] = null;
                        for (var M = 0; M < m; M++) null === L[(E = g[M])] ? (L[E] = a[M]) : (L[E] += a[M]);
                        for (var P = 0; P < n; P++) L[P] *= 1 / A[P];
                        I = !1;
                        for (var x = 0; x < n; x++)
                            if (L[x] !== S[x]) {
                                I = !0;
                                break;
                            }
                        (S = L), ++T > 200 && (I = !1);
                    }
                    for (var k = {}, U = 0; U < n; U++) k[U] = [];
                    for (var G = 0; G < m; G++) k[(E = g[G])].push(a[G]);
                    for (var F = [], V = 0; V < n; V++) F.push(k[V][0]), F.push(k[V][k[V].length - 1]);
                    (F = F.sort(function (e, t) {
                        return e - t;
                    })),
                        o.push(F[0]);
                    for (var B = 1; B < F.length; B += 2) {
                        var H = F[B];
                        isNaN(H) || -1 !== o.indexOf(H) || o.push(H);
                    }
                }
                return o;
            },
            nd = Math.sqrt,
            n_ = Math.pow,
            nh = Math.min,
            nf = Math.max,
            np = Math.atan2,
            nE = Math.abs,
            nm = Math.cos,
            ng = Math.sin,
            nA = Math.exp,
            nI = Math.PI,
            nT = {
                OrRd: [
                    "#fff7ec",
                    "#fee8c8",
                    "#fdd49e",
                    "#fdbb84",
                    "#fc8d59",
                    "#ef6548",
                    "#d7301f",
                    "#b30000",
                    "#7f0000",
                ],
                PuBu: [
                    "#fff7fb",
                    "#ece7f2",
                    "#d0d1e6",
                    "#a6bddb",
                    "#74a9cf",
                    "#3690c0",
                    "#0570b0",
                    "#045a8d",
                    "#023858",
                ],
                BuPu: [
                    "#f7fcfd",
                    "#e0ecf4",
                    "#bfd3e6",
                    "#9ebcda",
                    "#8c96c6",
                    "#8c6bb1",
                    "#88419d",
                    "#810f7c",
                    "#4d004b",
                ],
                Oranges: [
                    "#fff5eb",
                    "#fee6ce",
                    "#fdd0a2",
                    "#fdae6b",
                    "#fd8d3c",
                    "#f16913",
                    "#d94801",
                    "#a63603",
                    "#7f2704",
                ],
                BuGn: [
                    "#f7fcfd",
                    "#e5f5f9",
                    "#ccece6",
                    "#99d8c9",
                    "#66c2a4",
                    "#41ae76",
                    "#238b45",
                    "#006d2c",
                    "#00441b",
                ],
                YlOrBr: [
                    "#ffffe5",
                    "#fff7bc",
                    "#fee391",
                    "#fec44f",
                    "#fe9929",
                    "#ec7014",
                    "#cc4c02",
                    "#993404",
                    "#662506",
                ],
                YlGn: [
                    "#ffffe5",
                    "#f7fcb9",
                    "#d9f0a3",
                    "#addd8e",
                    "#78c679",
                    "#41ab5d",
                    "#238443",
                    "#006837",
                    "#004529",
                ],
                Reds: [
                    "#fff5f0",
                    "#fee0d2",
                    "#fcbba1",
                    "#fc9272",
                    "#fb6a4a",
                    "#ef3b2c",
                    "#cb181d",
                    "#a50f15",
                    "#67000d",
                ],
                RdPu: [
                    "#fff7f3",
                    "#fde0dd",
                    "#fcc5c0",
                    "#fa9fb5",
                    "#f768a1",
                    "#dd3497",
                    "#ae017e",
                    "#7a0177",
                    "#49006a",
                ],
                Greens: [
                    "#f7fcf5",
                    "#e5f5e0",
                    "#c7e9c0",
                    "#a1d99b",
                    "#74c476",
                    "#41ab5d",
                    "#238b45",
                    "#006d2c",
                    "#00441b",
                ],
                YlGnBu: [
                    "#ffffd9",
                    "#edf8b1",
                    "#c7e9b4",
                    "#7fcdbb",
                    "#41b6c4",
                    "#1d91c0",
                    "#225ea8",
                    "#253494",
                    "#081d58",
                ],
                Purples: [
                    "#fcfbfd",
                    "#efedf5",
                    "#dadaeb",
                    "#bcbddc",
                    "#9e9ac8",
                    "#807dba",
                    "#6a51a3",
                    "#54278f",
                    "#3f007d",
                ],
                GnBu: [
                    "#f7fcf0",
                    "#e0f3db",
                    "#ccebc5",
                    "#a8ddb5",
                    "#7bccc4",
                    "#4eb3d3",
                    "#2b8cbe",
                    "#0868ac",
                    "#084081",
                ],
                Greys: [
                    "#ffffff",
                    "#f0f0f0",
                    "#d9d9d9",
                    "#bdbdbd",
                    "#969696",
                    "#737373",
                    "#525252",
                    "#252525",
                    "#000000",
                ],
                YlOrRd: [
                    "#ffffcc",
                    "#ffeda0",
                    "#fed976",
                    "#feb24c",
                    "#fd8d3c",
                    "#fc4e2a",
                    "#e31a1c",
                    "#bd0026",
                    "#800026",
                ],
                PuRd: [
                    "#f7f4f9",
                    "#e7e1ef",
                    "#d4b9da",
                    "#c994c7",
                    "#df65b0",
                    "#e7298a",
                    "#ce1256",
                    "#980043",
                    "#67001f",
                ],
                Blues: [
                    "#f7fbff",
                    "#deebf7",
                    "#c6dbef",
                    "#9ecae1",
                    "#6baed6",
                    "#4292c6",
                    "#2171b5",
                    "#08519c",
                    "#08306b",
                ],
                PuBuGn: [
                    "#fff7fb",
                    "#ece2f0",
                    "#d0d1e6",
                    "#a6bddb",
                    "#67a9cf",
                    "#3690c0",
                    "#02818a",
                    "#016c59",
                    "#014636",
                ],
                Viridis: [
                    "#440154",
                    "#482777",
                    "#3f4a8a",
                    "#31678e",
                    "#26838f",
                    "#1f9d8a",
                    "#6cce5a",
                    "#b6de2b",
                    "#fee825",
                ],
                Spectral: [
                    "#9e0142",
                    "#d53e4f",
                    "#f46d43",
                    "#fdae61",
                    "#fee08b",
                    "#ffffbf",
                    "#e6f598",
                    "#abdda4",
                    "#66c2a5",
                    "#3288bd",
                    "#5e4fa2",
                ],
                RdYlGn: [
                    "#a50026",
                    "#d73027",
                    "#f46d43",
                    "#fdae61",
                    "#fee08b",
                    "#ffffbf",
                    "#d9ef8b",
                    "#a6d96a",
                    "#66bd63",
                    "#1a9850",
                    "#006837",
                ],
                RdBu: [
                    "#67001f",
                    "#b2182b",
                    "#d6604d",
                    "#f4a582",
                    "#fddbc7",
                    "#f7f7f7",
                    "#d1e5f0",
                    "#92c5de",
                    "#4393c3",
                    "#2166ac",
                    "#053061",
                ],
                PiYG: [
                    "#8e0152",
                    "#c51b7d",
                    "#de77ae",
                    "#f1b6da",
                    "#fde0ef",
                    "#f7f7f7",
                    "#e6f5d0",
                    "#b8e186",
                    "#7fbc41",
                    "#4d9221",
                    "#276419",
                ],
                PRGn: [
                    "#40004b",
                    "#762a83",
                    "#9970ab",
                    "#c2a5cf",
                    "#e7d4e8",
                    "#f7f7f7",
                    "#d9f0d3",
                    "#a6dba0",
                    "#5aae61",
                    "#1b7837",
                    "#00441b",
                ],
                RdYlBu: [
                    "#a50026",
                    "#d73027",
                    "#f46d43",
                    "#fdae61",
                    "#fee090",
                    "#ffffbf",
                    "#e0f3f8",
                    "#abd9e9",
                    "#74add1",
                    "#4575b4",
                    "#313695",
                ],
                BrBG: [
                    "#543005",
                    "#8c510a",
                    "#bf812d",
                    "#dfc27d",
                    "#f6e8c3",
                    "#f5f5f5",
                    "#c7eae5",
                    "#80cdc1",
                    "#35978f",
                    "#01665e",
                    "#003c30",
                ],
                RdGy: [
                    "#67001f",
                    "#b2182b",
                    "#d6604d",
                    "#f4a582",
                    "#fddbc7",
                    "#ffffff",
                    "#e0e0e0",
                    "#bababa",
                    "#878787",
                    "#4d4d4d",
                    "#1a1a1a",
                ],
                PuOr: [
                    "#7f3b08",
                    "#b35806",
                    "#e08214",
                    "#fdb863",
                    "#fee0b6",
                    "#f7f7f7",
                    "#d8daeb",
                    "#b2abd2",
                    "#8073ac",
                    "#542788",
                    "#2d004b",
                ],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: [
                    "#e41a1c",
                    "#377eb8",
                    "#4daf4a",
                    "#984ea3",
                    "#ff7f00",
                    "#ffff33",
                    "#a65628",
                    "#f781bf",
                    "#999999",
                ],
                Set3: [
                    "#8dd3c7",
                    "#ffffb3",
                    "#bebada",
                    "#fb8072",
                    "#80b1d3",
                    "#fdb462",
                    "#b3de69",
                    "#fccde5",
                    "#d9d9d9",
                    "#bc80bd",
                    "#ccebc5",
                    "#ffed6f",
                ],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: [
                    "#a6cee3",
                    "#1f78b4",
                    "#b2df8a",
                    "#33a02c",
                    "#fb9a99",
                    "#e31a1c",
                    "#fdbf6f",
                    "#ff7f00",
                    "#cab2d6",
                    "#6a3d9a",
                    "#ffff99",
                    "#b15928",
                ],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: [
                    "#fbb4ae",
                    "#b3cde3",
                    "#ccebc5",
                    "#decbe4",
                    "#fed9a6",
                    "#ffffcc",
                    "#e5d8bd",
                    "#fddaec",
                    "#f2f2f2",
                ],
            },
            nS = 0,
            ny = Object.keys(nT);
        nS < ny.length;
        nS += 1
    ) {
        var nN = ny[nS];
        nT[nN.toLowerCase()] = nT[nN];
    }
    return (
        (h.average = function (e, t, n) {
            void 0 === t && (t = "lrgb"), void 0 === n && (n = null);
            var i = e.length;
            n ||
                (n = Array.from(Array(i)).map(function () {
                    return 1;
                }));
            var r =
                i /
                n.reduce(function (e, t) {
                    return e + t;
                });
            if (
                (n.forEach(function (e, t) {
                    n[t] *= r;
                }),
                (e = e.map(function (e) {
                    return new _(e);
                })),
                "lrgb" === t)
            )
                return tQ(e, n);
            for (var s = e.shift(), a = s.get(t), o = [], l = 0, u = 0, c = 0; c < a.length; c++)
                if (
                    ((a[c] = (a[c] || 0) * n[0]), o.push(isNaN(a[c]) ? 0 : n[0]), "h" === t.charAt(c) && !isNaN(a[c]))
                ) {
                    var d = (a[c] / 180) * tz;
                    (l += tq(d) * n[0]), (u += tX(d) * n[0]);
                }
            var h = s.alpha() * n[0];
            e.forEach(function (e, i) {
                var r = e.get(t);
                h += e.alpha() * n[i + 1];
                for (var s = 0; s < a.length; s++)
                    if (!isNaN(r[s]))
                        if (((o[s] += n[i + 1]), "h" === t.charAt(s))) {
                            var c = (r[s] / 180) * tz;
                            (l += tq(c) * n[i + 1]), (u += tX(c) * n[i + 1]);
                        } else a[s] += r[s] * n[i + 1];
            });
            for (var f = 0; f < a.length; f++)
                if ("h" === t.charAt(f)) {
                    for (var p = (tZ(u / o[f], l / o[f]) / tz) * 180; p < 0; ) p += 360;
                    for (; p >= 360; ) p -= 360;
                    a[f] = p;
                } else a[f] = a[f] / o[f];
            return (h /= i), new _(a, t).alpha(h > 0.99999 ? 1 : h, !0);
        }),
        (h.bezier = function (e) {
            var t = t3(e);
            return (
                (t.scale = function () {
                    return t1(t);
                }),
                t
            );
        }),
        (h.blend = t6),
        (h.cubehelix = function (e, t, n, i, r) {
            void 0 === e && (e = 300),
                void 0 === t && (t = -1.5),
                void 0 === n && (n = 1),
                void 0 === i && (i = 1),
                void 0 === r && (r = [0, 1]);
            var s,
                a = 0;
            "array" === t7(r) ? (s = r[1] - r[0]) : ((s = 0), (r = [r, r]));
            var o = function (o) {
                var l = t9 * ((e + 120) / 360 + t * o),
                    u = ne(r[0] + s * o, i),
                    c = ((0 !== a ? n[0] + o * a : n) * u * (1 - u)) / 2,
                    d = nn(l),
                    _ = nt(l);
                return h(
                    t8([
                        255 * (u + c * (-0.14861 * d + 1.78277 * _)),
                        255 * (u + c * (-0.29227 * d - 0.90649 * _)),
                        255 * (u + 1.97294 * d * c),
                        1,
                    ]),
                );
            };
            return (
                (o.start = function (t) {
                    return null == t ? e : ((e = t), o);
                }),
                (o.rotations = function (e) {
                    return null == e ? t : ((t = e), o);
                }),
                (o.gamma = function (e) {
                    return null == e ? i : ((i = e), o);
                }),
                (o.hue = function (e) {
                    return null == e
                        ? n
                        : ("array" === t7((n = e)) ? 0 == (a = n[1] - n[0]) && (n = n[1]) : (a = 0), o);
                }),
                (o.lightness = function (e) {
                    return null == e
                        ? r
                        : ("array" === t7(e) ? ((r = e), (s = e[1] - e[0])) : ((r = [e, e]), (s = 0)), o);
                }),
                (o.scale = function () {
                    return h.scale(o);
                }),
                o.hue(n),
                o
            );
        }),
        (h.mix = h.interpolate = tF),
        (h.random = function () {
            for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(ni(16 * nr()));
            return new _(e, "hex");
        }),
        (h.scale = t1),
        (h.analyze = nu),
        (h.contrast = function (e, t) {
            (e = new _(e)), (t = new _(t));
            var n = e.luminance(),
                i = t.luminance();
            return n > i ? (n + 0.05) / (i + 0.05) : (i + 0.05) / (n + 0.05);
        }),
        (h.deltaE = function (e, t, n, i, r) {
            void 0 === n && (n = 1), void 0 === i && (i = 1), void 0 === r && (r = 1);
            var s = function (e) {
                    return (360 * e) / (2 * nI);
                },
                a = function (e) {
                    return (2 * nI * e) / 360;
                };
            (e = new _(e)), (t = new _(t));
            var o = Array.from(e.lab()),
                l = o[0],
                u = o[1],
                c = o[2],
                d = Array.from(t.lab()),
                h = d[0],
                f = d[1],
                p = d[2],
                E = (l + h) / 2,
                m = (nd(n_(u, 2) + n_(c, 2)) + nd(n_(f, 2) + n_(p, 2))) / 2,
                g = 0.5 * (1 - nd(n_(m, 7) / (n_(m, 7) + n_(25, 7)))),
                A = u * (1 + g),
                I = f * (1 + g),
                T = nd(n_(A, 2) + n_(c, 2)),
                S = nd(n_(I, 2) + n_(p, 2)),
                y = (T + S) / 2,
                N = s(np(c, A)),
                v = s(np(p, I)),
                C = N >= 0 ? N : N + 360,
                R = v >= 0 ? v : v + 360,
                O = nE(C - R) > 180 ? (C + R + 360) / 2 : (C + R) / 2,
                b = 1 - 0.17 * nm(a(O - 30)) + 0.24 * nm(a(2 * O)) + 0.32 * nm(a(3 * O + 6)) - 0.2 * nm(a(4 * O - 63)),
                D = R - C;
            (D = 180 >= nE(D) ? D : R <= C ? D + 360 : D - 360), (D = 2 * nd(T * S) * ng(a(D) / 2));
            var L = S - T,
                w = 1 + (0.015 * n_(E - 50, 2)) / nd(20 + n_(E - 50, 2)),
                M = 1 + 0.045 * y,
                P = 1 + 0.015 * y * b,
                x = 30 * nA(-n_((O - 275) / 25, 2)),
                k = -(2 * nd(n_(y, 7) / (n_(y, 7) + n_(25, 7)))) * ng(2 * a(x));
            return nf(
                0,
                nh(
                    100,
                    nd(
                        n_((h - l) / (n * w), 2) +
                            n_(L / (i * M), 2) +
                            n_(D / (r * P), 2) +
                            (L / (i * M)) * k * (D / (r * P)),
                    ),
                ),
            );
        }),
        (h.distance = function (e, t, n) {
            void 0 === n && (n = "lab"), (e = new _(e)), (t = new _(t));
            var i = e.get(n),
                r = t.get(n),
                s = 0;
            for (var a in i) {
                var o = (i[a] || 0) - (r[a] || 0);
                s += o * o;
            }
            return Math.sqrt(s);
        }),
        (h.limits = nc),
        (h.valid = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            try {
                return new (Function.prototype.bind.apply(_, [null].concat(e)))(), !0;
            } catch (e) {
                return !1;
            }
        }),
        (h.scales = {
            cool: function () {
                return t1([h.hsl(180, 1, 0.9), h.hsl(250, 0.7, 0.4)]);
            },
            hot: function () {
                return t1(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
            },
        }),
        (h.colors = te),
        (h.brewer = nT),
        h
    );
})();
