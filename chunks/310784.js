e.exports = (function () {
    "use strict";
    for (
        var e = function (e, t, n) {
                return void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e;
            },
            t = {},
            n = 0,
            r = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
        n < r.length;
        n += 1
    ) {
        var i = r[n];
        t["[object " + i + "]"] = i.toLowerCase();
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
        d = o.clip_rgb,
        c = o.type,
        _ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if ("object" === c(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var n = u(e),
                r = !1;
            if (!n) {
                (r = !0),
                    l.sorted ||
                        ((l.autodetect = l.autodetect.sort(function (e, t) {
                            return t.p - e.p;
                        })),
                        (l.sorted = !0));
                for (var i = 0, s = l.autodetect; i < s.length; i += 1) {
                    var a = s[i];
                    if ((n = a.test.apply(a, e))) break;
                }
            }
            if (l.format[n]) {
                var o = l.format[n].apply(null, r ? e : e.slice(0, -1));
                this._rgb = d(o);
            } else throw Error("unknown format: " + e);
            3 === this._rgb.length && this._rgb.push(1);
        };
    _.prototype.toString = function () {
        return "function" == c(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var f = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(f.Color, [null].concat(e)))();
    };
    (f.Color = _), (f.version = "2.4.2");
    var E = o.unpack,
        h = Math.max,
        p = o.unpack,
        m = o.unpack,
        g = o.type,
        A = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = E(e, "rgb"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = 1 - h((r /= 255), h((i /= 255), (s /= 255))),
                o = a < 1 ? 1 / (1 - a) : 0;
            return [(1 - r - a) * o, (1 - i - a) * o, (1 - s - a) * o, a];
        };
    (_.prototype.cmyk = function () {
        return A(this._rgb);
    }),
        (f.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["cmyk"])))();
        }),
        (l.format.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = p(e, "cmyk"))[0],
                r = e[1],
                i = e[2],
                s = e[3],
                a = e.length > 4 ? e[4] : 1;
            return 1 === s
                ? [0, 0, 0, a]
                : [
                      n >= 1 ? 0 : 255 * (1 - n) * (1 - s),
                      r >= 1 ? 0 : 255 * (1 - r) * (1 - s),
                      i >= 1 ? 0 : 255 * (1 - i) * (1 - s),
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
            for (var e, t, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = (n = y(n, "rgba"))[0],
                s = n[1],
                a = n[2],
                o = Math.min((i /= 255), (s /= 255), (a /= 255)),
                l = Math.max(i, s, a),
                u = (l + o) / 2;
            return (l === o ? ((e = 0), (t = NaN)) : (e = u < 0.5 ? (l - o) / (l + o) : (l - o) / (2 - l - o)),
            i == l
                ? (t = (s - a) / (l - o))
                : s == l
                  ? (t = 2 + (a - i) / (l - o))
                  : a == l && (t = 4 + (i - s) / (l - o)),
            (t *= 60) < 0 && (t += 360),
            n.length > 3 && void 0 !== n[3])
                ? [t, e, u, n[3]]
                : [t, e, u];
        },
        O = o.unpack,
        R = o.last,
        v = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = I(e, "hsla"),
                r = T(e) || "lsa";
            return (
                (n[0] = S(n[0] || 0)),
                (n[1] = S(100 * n[1]) + "%"),
                (n[2] = S(100 * n[2]) + "%"),
                "hsla" === r || (n.length > 3 && n[3] < 1)
                    ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
                    : (n.length = 3),
                r + "(" + n.join(",") + ")"
            );
        },
        C = Math.round,
        b = o.unpack,
        D = Math.round,
        L = function () {
            for (var e, t, n, r, i = [], s = arguments.length; s--; ) i[s] = arguments[s];
            var a = (i = b(i, "hsl"))[0],
                o = i[1],
                l = i[2];
            if (0 === o) t = n = r = 255 * l;
            else {
                var u = [0, 0, 0],
                    d = [0, 0, 0],
                    c = l < 0.5 ? l * (1 + o) : l + o - l * o,
                    _ = 2 * l - c,
                    f = a / 360;
                (u[0] = f + 1 / 3), (u[1] = f), (u[2] = f - 1 / 3);
                for (var E = 0; E < 3; E++)
                    u[E] < 0 && (u[E] += 1),
                        u[E] > 1 && (u[E] -= 1),
                        6 * u[E] < 1
                            ? (d[E] = _ + (c - _) * 6 * u[E])
                            : 2 * u[E] < 1
                              ? (d[E] = c)
                              : 3 * u[E] < 2
                                ? (d[E] = _ + (c - _) * (2 / 3 - u[E]) * 6)
                                : (d[E] = _);
                (t = (e = [D(255 * d[0]), D(255 * d[1]), D(255 * d[2])])[0]), (n = e[1]), (r = e[2]);
            }
            return i.length > 3 ? [t, n, r, i[3]] : [t, n, r, 1];
        },
        w = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        M = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        P = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        U = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        k = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        x = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        G = Math.round,
        V = function (e) {
            if (((e = e.toLowerCase().trim()), l.format.named))
                try {
                    return l.format.named(e);
                } catch (e) {}
            if ((t = e.match(w))) {
                for (var t, n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
                return (n[3] = 1), n;
            }
            if ((t = e.match(M))) {
                for (var i = t.slice(1, 5), s = 0; s < 4; s++) i[s] = +i[s];
                return i;
            }
            if ((t = e.match(P))) {
                for (var a = t.slice(1, 4), o = 0; o < 3; o++) a[o] = G(2.55 * a[o]);
                return (a[3] = 1), a;
            }
            if ((t = e.match(U))) {
                for (var u = t.slice(1, 5), d = 0; d < 3; d++) u[d] = G(2.55 * u[d]);
                return (u[3] = +u[3]), u;
            }
            if ((t = e.match(k))) {
                var c = t.slice(1, 4);
                (c[1] *= 0.01), (c[2] *= 0.01);
                var _ = L(c);
                return (_[3] = 1), _;
            }
            if ((t = e.match(x))) {
                var f = t.slice(1, 4);
                (f[1] *= 0.01), (f[2] *= 0.01);
                var E = L(f);
                return (E[3] = +t[4]), E;
            }
        };
    V.test = function (e) {
        return w.test(e) || M.test(e) || P.test(e) || U.test(e) || k.test(e) || x.test(e);
    };
    var F = o.type,
        B = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = O(e, "rgba"),
                r = R(e) || "rgb";
            return "hsl" == r.substr(0, 3)
                ? v(N(n), r)
                : ((n[0] = C(n[0])),
                  (n[1] = C(n[1])),
                  (n[2] = C(n[2])),
                  ("rgba" === r || (n.length > 3 && n[3] < 1)) && ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
                  r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
        };
    (_.prototype.css = function (e) {
        return B(this._rgb, e);
    }),
        (f.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["css"])))();
        }),
        (l.format.css = V),
        l.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === F(e) && V.test(e)) return "css";
            },
        });
    var H = o.unpack;
    (l.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = H(e, "rgba");
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n;
    }),
        (f.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["gl"])))();
        }),
        (_.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
    var Y = o.unpack,
        W = o.unpack,
        j = Math.floor,
        K = o.unpack,
        $ = o.type,
        z = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = Y(t, "rgb"),
                i = r[0],
                s = r[1],
                a = r[2],
                o = Math.min(i, s, a),
                l = Math.max(i, s, a),
                u = l - o;
            return (
                0 === u
                    ? (e = NaN)
                    : (i === l && (e = (s - a) / u),
                      s === l && (e = 2 + (a - i) / u),
                      a === l && (e = 4 + (i - s) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, (100 * u) / 255, (o / (255 - u)) * 100]
            );
        };
    (_.prototype.hcg = function () {
        return z(this._rgb);
    }),
        (f.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hcg"])))();
        }),
        (l.format.hcg = function () {
            for (var e, t, n, r, i, s, a, o, l, u = [], d = arguments.length; d--; ) u[d] = arguments[d];
            var c = (u = W(u, "hcg"))[0],
                _ = u[1],
                f = u[2];
            f *= 255;
            var E = 255 * _;
            if (0 === _) a = o = l = f;
            else {
                360 === c && (c = 0), c > 360 && (c -= 360), c < 0 && (c += 360);
                var h = j((c /= 60)),
                    p = c - h,
                    m = f * (1 - _),
                    g = m + E * (1 - p),
                    A = m + E * p,
                    I = m + E;
                switch (h) {
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
                        (a = (r = [m, g, I])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (a = (i = [A, m, I])[0]), (o = i[1]), (l = i[2]);
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
        Q = Math.round,
        J = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = q(e, "rgba"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = n[3],
                o = X(e) || "auto";
            void 0 === a && (a = 1), "auto" === o && (o = a < 1 ? "rgba" : "rgb"), (r = Q(r));
            var l = "000000" + ((r << 16) | ((i = Q(i)) << 8) | (s = Q(s))).toString(16);
            l = l.substr(l.length - 6);
            var u = "0" + Q(255 * a).toString(16);
            switch (((u = u.substr(u.length - 2)), o.toLowerCase())) {
                case "rgba":
                    return "#" + l + u;
                case "argb":
                    return "#" + u + l;
                default:
                    return "#" + l;
            }
        },
        Z = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        ee = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        et = function (e) {
            if (e.match(Z)) {
                (4 === e.length || 7 === e.length) && (e = e.substr(1)),
                    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e, 16);
                return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(ee)) {
                (5 === e.length || 9 === e.length) && (e = e.substr(1)),
                    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var n = parseInt(e, 16),
                    r = Math.round(((255 & n) / 255) * 100) / 100;
                return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, r];
            }
            throw Error("unknown hex color: " + e);
        },
        en = o.type;
    (_.prototype.hex = function (e) {
        return J(this._rgb, e);
    }),
        (f.hex = function () {
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
    var er = o.unpack,
        ei = o.TWOPI,
        es = Math.min,
        ea = Math.sqrt,
        eo = Math.acos,
        el = o.unpack,
        eu = o.limit,
        ed = o.TWOPI,
        ec = o.PITHIRD,
        e_ = Math.cos,
        ef = o.unpack,
        eE = o.type,
        eh = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = er(t, "rgb"),
                i = r[0],
                s = r[1],
                a = r[2],
                o = es((i /= 255), (s /= 255), (a /= 255)),
                l = (i + s + a) / 3,
                u = l > 0 ? 1 - o / l : 0;
            return (
                0 === u
                    ? (e = NaN)
                    : ((e = eo((e = (i - s + (i - a)) / 2 / ea((i - s) * (i - s) + (i - a) * (s - a))))),
                      a > s && (e = ei - e),
                      (e /= ei)),
                [360 * e, u, l]
            );
        };
    (_.prototype.hsi = function () {
        return eh(this._rgb);
    }),
        (f.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hsi"])))();
        }),
        (l.format.hsi = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var s = (r = el(r, "hsi"))[0],
                a = r[1],
                o = r[2];
            return (
                isNaN(s) && (s = 0),
                isNaN(a) && (a = 0),
                s > 360 && (s -= 360),
                s < 0 && (s += 360),
                (s /= 360) < 1 / 3
                    ? (t = 1 - ((n = (1 - a) / 3) + (e = (1 + (a * e_(ed * s)) / e_(ec - ed * s)) / 3)))
                    : s < 2 / 3
                      ? ((s -= 1 / 3),
                        (n = 1 - ((e = (1 - a) / 3) + (t = (1 + (a * e_(ed * s)) / e_(ec - ed * s)) / 3))))
                      : ((s -= 2 / 3),
                        (e = 1 - ((t = (1 - a) / 3) + (n = (1 + (a * e_(ed * s)) / e_(ec - ed * s)) / 3)))),
                (e = eu(o * e * 3)),
                [255 * e, 255 * (t = eu(o * t * 3)), 255 * (n = eu(o * n * 3)), r.length > 3 ? r[3] : 1]
            );
        }),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eE((e = ef(e, "hsi"))) && 3 === e.length) return "hsi";
            },
        });
    var ep = o.unpack,
        em = o.type;
    (_.prototype.hsl = function () {
        return N(this._rgb);
    }),
        (f.hsl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hsl"])))();
        }),
        (l.format.hsl = L),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === em((e = ep(e, "hsl"))) && 3 === e.length) return "hsl";
            },
        });
    var eg = o.unpack,
        eA = Math.min,
        eI = Math.max,
        eT = o.unpack,
        eS = Math.floor,
        ey = o.unpack,
        eN = o.type,
        eO = function () {
            for (var e, t, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = (n = eg(n, "rgb"))[0],
                s = n[1],
                a = n[2],
                o = eA(i, s, a),
                l = eI(i, s, a),
                u = l - o;
            return (
                0 === l
                    ? ((e = NaN), (t = 0))
                    : ((t = u / l),
                      i === l && (e = (s - a) / u),
                      s === l && (e = 2 + (a - i) / u),
                      a === l && (e = 4 + (i - s) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, t, l / 255]
            );
        };
    (_.prototype.hsv = function () {
        return eO(this._rgb);
    }),
        (f.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["hsv"])))();
        }),
        (l.format.hsv = function () {
            for (var e, t, n, r, i, s, a, o, l, u = [], d = arguments.length; d--; ) u[d] = arguments[d];
            var c = (u = eT(u, "hsv"))[0],
                _ = u[1],
                f = u[2];
            if (((f *= 255), 0 === _)) a = o = l = f;
            else {
                360 === c && (c = 0), c > 360 && (c -= 360), c < 0 && (c += 360);
                var E = eS((c /= 60)),
                    h = c - E,
                    p = f * (1 - _),
                    m = f * (1 - _ * h),
                    g = f * (1 - _ * (1 - h));
                switch (E) {
                    case 0:
                        (a = (e = [f, g, p])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (a = (t = [m, f, p])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (a = (n = [p, f, g])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (a = (r = [p, m, f])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (a = (i = [g, p, f])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (a = (s = [f, p, m])[0]), (o = s[1]), (l = s[2]);
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
    var eR = 18,
        ev = 0.95047,
        eC = 1,
        eb = 1.08883,
        eD = 0.137931034,
        eL = 0.206896552,
        ew = 0.12841855,
        eM = 0.008856452,
        eP = o.unpack,
        eU = Math.pow,
        ek = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : eU((e + 0.055) / 1.055, 2.4);
        },
        ex = function (e) {
            return e > eM ? eU(e, 1 / 3) : e / ew + eD;
        },
        eG = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var s = eP(r, "rgb"),
                a =
                    ((e = s[0]),
                    (t = s[1]),
                    (n = s[2]),
                    [
                        ex((0.4124564 * (e = ek(e)) + 0.3575761 * (t = ek(t)) + 0.1804375 * (n = ek(n))) / ev),
                        ex((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / eC),
                        ex((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / eb),
                    ]),
                o = a[0],
                l = a[1],
                u = a[2],
                d = 116 * l - 16;
            return [d < 0 ? 0 : d, 500 * (o - l), 200 * (l - u)];
        },
        eV = o.unpack,
        eF = Math.pow,
        eB = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * eF(e, 1 / 2.4) - 0.055);
        },
        eH = function (e) {
            return e > eL ? e * e * e : ew * (e - eD);
        },
        eY = function () {
            for (var e, t, n, r, i = [], s = arguments.length; s--; ) i[s] = arguments[s];
            var a = (i = eV(i, "lab"))[0],
                o = i[1],
                l = i[2];
            return (
                (t = (a + 16) / 116),
                (e = isNaN(o) ? t : t + o / 500),
                (n = isNaN(l) ? t : t - l / 200),
                (t = eC * eH(t)),
                (r = eB(3.2404542 * (e = ev * eH(e)) - 1.5371385 * t - 0.4985314 * (n = eb * eH(n)))),
                [
                    r,
                    eB(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
                    eB(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
                    i.length > 3 ? i[3] : 1,
                ]
            );
        },
        eW = o.unpack,
        ej = o.type;
    (_.prototype.lab = function () {
        return eG(this._rgb);
    }),
        (f.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["lab"])))();
        }),
        (l.format.lab = eY),
        l.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === ej((e = eW(e, "lab"))) && 3 === e.length) return "lab";
            },
        });
    var eK = o.unpack,
        e$ = o.RAD2DEG,
        ez = Math.sqrt,
        eq = Math.atan2,
        eX = Math.round,
        eQ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eK(e, "lab"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = ez(i * i + s * s),
                o = (eq(s, i) * e$ + 360) % 360;
            return 0 === eX(1e4 * a) && (o = NaN), [r, a, o];
        },
        eJ = o.unpack,
        eZ = o.unpack,
        e0 = o.DEG2RAD,
        e1 = Math.sin,
        e2 = Math.cos,
        e3 = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eZ(e, "lch"),
                r = n[0],
                i = n[1],
                s = n[2];
            return isNaN(s) && (s = 0), [r, e2((s *= e0)) * i, e1(s) * i];
        },
        e6 = o.unpack,
        e4 = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = e3((e = e6(e, "lch"))[0], e[1], e[2]),
                r = eY(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        e5 = o.unpack,
        e7 = o.unpack,
        e8 = o.type,
        e9 = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eJ(e, "rgb"),
                r = eG(n[0], n[1], n[2]);
            return eQ(r[0], r[1], r[2]);
        };
    (_.prototype.lch = function () {
        return e9(this._rgb);
    }),
        (_.prototype.hcl = function () {
            return e9(this._rgb).reverse();
        }),
        (f.lch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["lch"])))();
        }),
        (f.hcl = function () {
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
        for (var e = J(this._rgb, "rgb"), t = 0, n = Object.keys(te); t < n.length; t += 1) {
            var r = n[t];
            if (te[r] === e) return r.toLowerCase();
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
        tr = o.type,
        ti = o.type,
        ts = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tn(e, "rgb");
            return (n[0] << 16) + (n[1] << 8) + n[2];
        };
    (_.prototype.num = function () {
        return ts(this._rgb);
    }),
        (f.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["num"])))();
        }),
        (l.format.num = function (e) {
            if ("number" == tr(e) && e >= 0 && e <= 0xffffff) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw Error("unknown num color: " + e);
        }),
        l.autodetect.push({
            p: 5,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (1 === e.length && "number" === ti(e[0]) && e[0] >= 0 && e[0] <= 0xffffff) return "num";
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
        (f.rgb = function () {
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
        td = function (e) {
            var t,
                n,
                r,
                i = e / 100;
            return (
                i < 66
                    ? ((t = 255),
                      (n =
                          i < 6
                              ? 0
                              : -155.25485562709179 - 0.44596950469579133 * (n = i - 2) + 104.49216199393888 * tu(n)),
                      (r =
                          i < 20
                              ? 0
                              : -254.76935184120902 + 0.8274096064007395 * (r = i - 10) + 115.67994401066147 * tu(r)))
                    : ((t = 351.97690566805693 + 0.114206453784165 * (t = i - 55) - 40.25366309332127 * tu(t)),
                      (n = 325.4494125711974 + 0.07943456536662342 * (n = i - 50) - 28.0852963507957 * tu(n)),
                      (r = 255)),
                [t, n, r, 1]
            );
        },
        tc = o.unpack,
        t_ = Math.round,
        tf = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            for (var r = tc(t, "rgb"), i = r[0], s = r[2], a = 1e3, o = 4e4; o - a > 0.4; ) {
                var l = td((e = (o + a) * 0.5));
                l[2] / l[0] >= s / i ? (o = e) : (a = e);
            }
            return t_(e);
        };
    (_.prototype.temp =
        _.prototype.kelvin =
        _.prototype.temperature =
            function () {
                return tf(this._rgb);
            }),
        (f.temp =
            f.kelvin =
            f.temperature =
                function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(_, [null].concat(e, ["temp"])))();
                }),
        (l.format.temp = l.format.kelvin = l.format.temperature = td);
    var tE = o.unpack,
        th = Math.cbrt,
        tp = Math.pow,
        tm = Math.sign,
        tg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tE(e, "rgb"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = [tA(r / 255), tA(i / 255), tA(s / 255)],
                o = a[0],
                l = a[1],
                u = a[2],
                d = th(0.4122214708 * o + 0.5363325363 * l + 0.0514459929 * u),
                c = th(0.2119034982 * o + 0.6806995451 * l + 0.1073969566 * u),
                _ = th(0.0883024619 * o + 0.2817188376 * l + 0.6299787005 * u);
            return [
                0.2104542553 * d + 0.793617785 * c - 0.0040720468 * _,
                1.9779984951 * d - 2.428592205 * c + 0.4505937099 * _,
                0.0259040371 * d + 0.7827717662 * c - 0.808675766 * _,
            ];
        };
    function tA(e) {
        var t = Math.abs(e);
        return t < 0.04045 ? e / 12.92 : (tm(e) || 1) * tp((t + 0.055) / 1.055, 2.4);
    }
    var tI = o.unpack,
        tT = Math.pow,
        tS = Math.sign,
        ty = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = tI(e, "lab"))[0],
                r = e[1],
                i = e[2],
                s = tT(n + 0.3963377774 * r + 0.2158037573 * i, 3),
                a = tT(n - 0.1055613458 * r - 0.0638541728 * i, 3),
                o = tT(n - 0.0894841775 * r - 1.291485548 * i, 3);
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
    var tO = o.unpack,
        tR = o.type;
    (_.prototype.oklab = function () {
        return tg(this._rgb);
    }),
        (f.oklab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["oklab"])))();
        }),
        (l.format.oklab = ty),
        l.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === tR((e = tO(e, "oklab"))) && 3 === e.length) return "oklab";
            },
        });
    var tv = o.unpack,
        tC = o.unpack,
        tb = o.unpack,
        tD = o.type,
        tL = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tv(e, "rgb"),
                r = tg(n[0], n[1], n[2]);
            return eQ(r[0], r[1], r[2]);
        };
    (_.prototype.oklch = function () {
        return tL(this._rgb);
    }),
        (f.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(_, [null].concat(e, ["oklch"])))();
        }),
        (l.format.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = e3((e = tC(e, "lch"))[0], e[1], e[2]),
                r = ty(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
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
            return (t[0] -= eR * e), new _(t, "lab").alpha(this.alpha(), !0);
        }),
        (_.prototype.brighten = function (e) {
            return void 0 === e && (e = 1), this.darken(-e);
        }),
        (_.prototype.darker = _.prototype.darken),
        (_.prototype.brighter = _.prototype.brighten),
        (_.prototype.get = function (e) {
            var t = e.split("."),
                n = t[0],
                r = t[1],
                i = this[n]();
            if (!r) return i;
            var s = n.indexOf(r) - 2 * ("ok" === n.substr(0, 2));
            if (s > -1) return i[s];
            throw Error("unknown channel " + r + " in mode " + n);
        });
    var tM = o.type,
        tP = Math.pow;
    _.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === tM(e)) {
            if (0 === e) return new _([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === e) return new _([255, 255, 255, this._rgb[3]], "rgb");
            var t = this.luminance(),
                n = 20,
                r = function (t, i) {
                    var s = t.interpolate(i, 0.5, "rgb"),
                        a = s.luminance();
                    return !(1e-7 > Math.abs(e - a)) && n-- ? (a > e ? r(t, s) : r(s, i)) : s;
                },
                i = (t > e ? r(new _([0, 0, 0]), this) : r(this, new _([255, 255, 255]))).rgb();
            return new _(i.concat([this._rgb[3]]));
        }
        return tU.apply(void 0, this._rgb.slice(0, 3));
    };
    var tU = function (e, t, n) {
            return (e = tk(e)), 0.2126 * e + 0.7152 * (t = tk(t)) + 0.0722 * (n = tk(n));
        },
        tk = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : tP((e + 0.055) / 1.055, 2.4);
        },
        tx = {},
        tG = o.type,
        tV = function (e, t, n) {
            void 0 === n && (n = 0.5);
            for (var r = [], i = arguments.length - 3; i-- > 0; ) r[i] = arguments[i + 3];
            var s = r[0] || "lrgb";
            if ((tx[s] || r.length || (s = Object.keys(tx)[0]), !tx[s]))
                throw Error("interpolation mode " + s + " is not defined");
            return (
                "object" !== tG(e) && (e = new _(e)),
                "object" !== tG(t) && (t = new _(t)),
                tx[s](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
            );
        };
    (_.prototype.mix = _.prototype.interpolate =
        function (e, t) {
            void 0 === t && (t = 0.5);
            for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
            return tV.apply(void 0, [this, e, t].concat(n));
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
            return (t[1] += eR * e), t[1] < 0 && (t[1] = 0), new _(t, "lch").alpha(this.alpha(), !0);
        }),
        (_.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
        });
    var tF = o.type;
    (_.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.split("."),
            i = r[0],
            s = r[1],
            a = this[i]();
        if (!s) return a;
        var o = i.indexOf(s) - 2 * ("ok" === i.substr(0, 2));
        if (o > -1) {
            if ("string" == tF(t))
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
            else if ("number" === tF(t)) a[o] = t;
            else throw Error("unsupported value for Color.set");
            var l = new _(a, i);
            return n ? ((this._rgb = l._rgb), this) : l;
        }
        throw Error("unknown channel " + s + " in mode " + i);
    }),
        (tx.rgb = function (e, t, n) {
            var r = e._rgb,
                i = t._rgb;
            return new _(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb");
        });
    var tB = Math.sqrt,
        tH = Math.pow;
    (tx.lrgb = function (e, t, n) {
        var r = e._rgb,
            i = r[0],
            s = r[1],
            a = r[2],
            o = t._rgb,
            l = o[0],
            u = o[1],
            d = o[2];
        return new _(
            tB(tH(i, 2) * (1 - n) + tH(l, 2) * n),
            tB(tH(s, 2) * (1 - n) + tH(u, 2) * n),
            tB(tH(a, 2) * (1 - n) + tH(d, 2) * n),
            "rgb",
        );
    }),
        (tx.lab = function (e, t, n) {
            var r = e.lab(),
                i = t.lab();
            return new _(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab");
        });
    var tY = function (e, t, n, r) {
            var i, s, a, o, l, u, d, c, f, E, h, p, m, g;
            return (
                "hsl" === r
                    ? ((a = e.hsl()), (o = t.hsl()))
                    : "hsv" === r
                      ? ((a = e.hsv()), (o = t.hsv()))
                      : "hcg" === r
                        ? ((a = e.hcg()), (o = t.hcg()))
                        : "hsi" === r
                          ? ((a = e.hsi()), (o = t.hsi()))
                          : "lch" === r || "hcl" === r
                            ? ((r = "hcl"), (a = e.hcl()), (o = t.hcl()))
                            : "oklch" === r && ((a = e.oklch().reverse()), (o = t.oklch().reverse())),
                ("h" === r.substr(0, 1) || "oklch" === r) &&
                    ((l = (i = a)[0]), (d = i[1]), (f = i[2]), (u = (s = o)[0]), (c = s[1]), (E = s[2])),
                isNaN(l) || isNaN(u)
                    ? isNaN(l)
                        ? isNaN(u)
                            ? (p = NaN)
                            : ((p = u), (1 == f || 0 == f) && "hsv" != r && (h = c))
                        : ((p = l), (1 == E || 0 == E) && "hsv" != r && (h = d))
                    : ((g = u > l && u - l > 180 ? u - (l + 360) : u < l && l - u > 180 ? u + 360 - l : u - l),
                      (p = l + n * g)),
                void 0 === h && (h = d + n * (c - d)),
                (m = f + n * (E - f)),
                "oklch" === r ? new _([m, h, p], r) : new _([p, h, m], r)
            );
        },
        tW = function (e, t, n) {
            return tY(e, t, n, "lch");
        };
    (tx.lch = tW),
        (tx.hcl = tW),
        (tx.num = function (e, t, n) {
            var r = e.num();
            return new _(r + n * (t.num() - r), "num");
        }),
        (tx.hcg = function (e, t, n) {
            return tY(e, t, n, "hcg");
        }),
        (tx.hsi = function (e, t, n) {
            return tY(e, t, n, "hsi");
        }),
        (tx.hsl = function (e, t, n) {
            return tY(e, t, n, "hsl");
        }),
        (tx.hsv = function (e, t, n) {
            return tY(e, t, n, "hsv");
        }),
        (tx.oklab = function (e, t, n) {
            var r = e.oklab(),
                i = t.oklab();
            return new _(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab");
        }),
        (tx.oklch = function (e, t, n) {
            return tY(e, t, n, "oklch");
        });
    var tj = o.clip_rgb,
        tK = Math.pow,
        t$ = Math.sqrt,
        tz = Math.PI,
        tq = Math.cos,
        tX = Math.sin,
        tQ = Math.atan2,
        tJ = function (e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], i = 0; i < e.length; i++) {
                var s = e[i],
                    a = t[i] / n,
                    o = s._rgb;
                (r[0] += tK(o[0], 2) * a), (r[1] += tK(o[1], 2) * a), (r[2] += tK(o[2], 2) * a), (r[3] += o[3] * a);
            }
            return (
                (r[0] = t$(r[0])), (r[1] = t$(r[1])), (r[2] = t$(r[2])), r[3] > 0.9999999 && (r[3] = 1), new _(tj(r))
            );
        },
        tZ = o.type,
        t0 = Math.pow,
        t1 = function (e) {
            var t = "rgb",
                n = f("#ccc"),
                r = 0,
                i = [0, 1],
                s = [],
                a = [0, 0],
                o = !1,
                l = [],
                u = !1,
                d = 0,
                c = 1,
                _ = !1,
                E = {},
                h = !0,
                p = 1,
                m = function (e) {
                    if (
                        ("string" === tZ((e = e || ["#fff", "#000"])) &&
                            f.brewer &&
                            f.brewer[e.toLowerCase()] &&
                            (e = f.brewer[e.toLowerCase()]),
                        "array" === tZ(e))
                    ) {
                        1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                        for (var t = 0; t < e.length; t++) e[t] = f(e[t]);
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
                T = function (e, r) {
                    if ((null == r && (r = !1), isNaN(e) || null === e)) return n;
                    if (r) u = e;
                    else if (o && o.length > 2) {
                        var i, u;
                        u = g(e) / (o.length - 2);
                    } else u = c !== d ? (e - d) / (c - d) : 1;
                    (u = I(u)), r || (u = A(u)), 1 !== p && (u = t0(u, p));
                    var _ = Math.floor(1e4 * (u = Math.min(1, Math.max(0, (u = a[0] + u * (1 - a[0] - a[1]))))));
                    if (h && E[_]) i = E[_];
                    else {
                        if ("array" === tZ(l))
                            for (var m = 0; m < s.length; m++) {
                                var T = s[m];
                                if (u <= T || (u >= T && m === s.length - 1)) {
                                    i = l[m];
                                    break;
                                }
                                if (u > T && u < s[m + 1]) {
                                    (u = (u - T) / (s[m + 1] - T)), (i = f.interpolate(l[m], l[m + 1], u, t));
                                    break;
                                }
                            }
                        else "function" === tZ(l) && (i = l(u));
                        h && (E[_] = i);
                    }
                    return i;
                },
                S = function () {
                    return (E = {});
                };
            m(e);
            var y = function (e) {
                var t = f(T(e));
                return u && t[u] ? t[u]() : t;
            };
            return (
                (y.classes = function (e) {
                    if (null != e) {
                        if ("array" === tZ(e)) (o = e), (i = [e[0], e[e.length - 1]]);
                        else {
                            var t = f.analyze(i);
                            o = 0 === e ? [t.min, t.max] : f.limits(t, "e", e);
                        }
                        return y;
                    }
                    return o;
                }),
                (y.domain = function (e) {
                    if (!arguments.length) return i;
                    (d = e[0]), (c = e[e.length - 1]), (s = []);
                    var t = l.length;
                    if (e.length === t && d !== c)
                        for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                            var a = r[n];
                            s.push((a - d) / (c - d));
                        }
                    else {
                        for (var o = 0; o < t; o++) s.push(o / (t - 1));
                        if (e.length > 2) {
                            var u = e.map(function (t, n) {
                                    return n / (e.length - 1);
                                }),
                                _ = e.map(function (e) {
                                    return (e - d) / (c - d);
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
                    return (i = [d, c]), y;
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
                    return arguments.length ? ((r = e), y) : r;
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
                                          r = t > n,
                                          i = T(e, !0).lab()[0],
                                          s = t + (n - t) * e,
                                          a = i - s,
                                          o = 0,
                                          l = 1,
                                          u = 20;
                                      Math.abs(a) > 0.01 && u-- > 0;
                                  )
                                      r && (a *= -1),
                                          a < 0 ? ((o = e), (e += (l - e) * 0.5)) : ((l = e), (e += (o - e) * 0.5)),
                                          (a = (i = T(e, !0).lab()[0]) - s);
                                  return e;
                              }
                            : function (e) {
                                  return e;
                              }),
                        y
                    );
                }),
                (y.padding = function (e) {
                    return null != e ? ("number" === tZ(e) && (e = [e, e]), (a = e), y) : a;
                }),
                (y.colors = function (t, n) {
                    arguments.length < 2 && (n = "hex");
                    var r = [];
                    if (0 == arguments.length) r = l.slice(0);
                    else if (1 === t) r = [y(0.5)];
                    else if (t > 1) {
                        var s = i[0],
                            a = i[1] - s;
                        r = (function (e, t) {
                            for (
                                var n = [], r = 0 < e, i = t ? (r ? e + 1 : e - 1) : e, s = 0;
                                r ? s < i : s > i;
                                r ? s++ : s--
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
                            for (var d = 1, c = o.length, _ = 1 <= c; _ ? d < c : d > c; _ ? d++ : d--)
                                u.push((o[d - 1] + o[d]) * 0.5);
                        else u = i;
                        r = u.map(function (e) {
                            return y(e);
                        });
                    }
                    return (
                        f[n] &&
                            (r = r.map(function (e) {
                                return e[n]();
                            })),
                        r
                    );
                }),
                (y.cache = function (e) {
                    return null != e ? ((h = e), y) : h;
                }),
                (y.gamma = function (e) {
                    return null != e ? ((p = e), y) : p;
                }),
                (y.nodata = function (e) {
                    return null != e ? ((n = f(e)), y) : n;
                }),
                y
            );
        },
        t2 = function (e) {
            for (var t = [1, 1], n = 1; n < e; n++) {
                for (var r = [1], i = 1; i <= t.length; i++) r[i] = (t[i] || 0) + t[i - 1];
                t = r;
            }
            return t;
        },
        t3 = function (e) {
            var t, n, r, i, s, a, o, l, u, d, c;
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
                    (i = function (e) {
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
                    (i = function (e) {
                        return new _(
                            [0, 1, 2].map(function (t) {
                                return (1 - e) * (1 - e) * s[t] + 2 * (1 - e) * e * a[t] + e * e * o[t];
                            }),
                            "lab",
                        );
                    });
            else if (4 === e.length)
                (s = (r = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (a = r[1]),
                    (o = r[2]),
                    (l = r[3]),
                    (i = function (e) {
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
                    (d = t2((c = e.length - 1))),
                    (i = function (e) {
                        var t = 1 - e;
                        return new _(
                            [0, 1, 2].map(function (n) {
                                return u.reduce(function (r, i, s) {
                                    return r + d[s] * Math.pow(t, c - s) * Math.pow(e, s) * i[n];
                                }, 0);
                            }),
                            "lab",
                        );
                    });
            else throw RangeError("No point in running bezier with only one color.");
            return i;
        },
        t6 = function (e, t, n) {
            if (!t6[n]) throw Error("unknown blend mode " + n);
            return t6[n](e, t);
        },
        t4 = function (e) {
            return function (t, n) {
                var r = f(n).rgb(),
                    i = f(t).rgb();
                return f.rgb(e(r, i));
            };
        },
        t5 = function (e) {
            return function (t, n) {
                var r = [];
                return (r[0] = e(t[0], n[0])), (r[1] = e(t[1], n[1])), (r[2] = e(t[2], n[2])), r;
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
            nr = Math.floor,
            ni = Math.random,
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
                        return nd(n, e, t);
                    }),
                    n
                );
            },
            nd = function (e, t, n) {
                void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == s(e) && (e = nu(e));
                var r = e.min,
                    i = e.max,
                    a = e.values.sort(function (e, t) {
                        return e - t;
                    });
                if (1 === n) return [r, i];
                var o = [];
                if (("c" === t.substr(0, 1) && (o.push(r), o.push(i)), "e" === t.substr(0, 1))) {
                    o.push(r);
                    for (var l = 1; l < n; l++) o.push(r + (l / n) * (i - r));
                    o.push(i);
                } else if ("l" === t.substr(0, 1)) {
                    if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var u = Math.LOG10E * ns(r),
                        d = Math.LOG10E * ns(i);
                    o.push(r);
                    for (var c = 1; c < n; c++) o.push(na(10, u + (c / n) * (d - u)));
                    o.push(i);
                } else if ("q" === t.substr(0, 1)) {
                    o.push(r);
                    for (var _ = 1; _ < n; _++) {
                        var f = ((a.length - 1) * _) / n,
                            E = no(f);
                        if (E === f) o.push(a[E]);
                        else {
                            var h = f - E;
                            o.push(a[E] * (1 - h) + a[E + 1] * h);
                        }
                    }
                    o.push(i);
                } else if ("k" === t.substr(0, 1)) {
                    var p,
                        m = a.length,
                        g = Array(m),
                        A = Array(n),
                        I = !0,
                        T = 0,
                        S = null;
                    (S = []).push(r);
                    for (var y = 1; y < n; y++) S.push(r + (y / n) * (i - r));
                    for (S.push(i); I; ) {
                        for (var N = 0; N < n; N++) A[N] = 0;
                        for (var O = 0; O < m; O++)
                            for (var R = a[O], v = Number.MAX_VALUE, C = void 0, b = 0; b < n; b++) {
                                var D = nl(S[b] - R);
                                D < v && ((v = D), (C = b)), A[C]++, (g[O] = C);
                            }
                        for (var L = Array(n), w = 0; w < n; w++) L[w] = null;
                        for (var M = 0; M < m; M++) null === L[(p = g[M])] ? (L[p] = a[M]) : (L[p] += a[M]);
                        for (var P = 0; P < n; P++) L[P] *= 1 / A[P];
                        I = !1;
                        for (var U = 0; U < n; U++)
                            if (L[U] !== S[U]) {
                                I = !0;
                                break;
                            }
                        (S = L), ++T > 200 && (I = !1);
                    }
                    for (var k = {}, x = 0; x < n; x++) k[x] = [];
                    for (var G = 0; G < m; G++) k[(p = g[G])].push(a[G]);
                    for (var V = [], F = 0; F < n; F++) V.push(k[F][0]), V.push(k[F][k[F].length - 1]);
                    (V = V.sort(function (e, t) {
                        return e - t;
                    })),
                        o.push(V[0]);
                    for (var B = 1; B < V.length; B += 2) {
                        var H = V[B];
                        isNaN(H) || -1 !== o.indexOf(H) || o.push(H);
                    }
                }
                return o;
            },
            nc = Math.sqrt,
            n_ = Math.pow,
            nf = Math.min,
            nE = Math.max,
            nh = Math.atan2,
            np = Math.abs,
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
        (f.average = function (e, t, n) {
            void 0 === t && (t = "lrgb"), void 0 === n && (n = null);
            var r = e.length;
            n ||
                (n = Array.from(Array(r)).map(function () {
                    return 1;
                }));
            var i =
                r /
                n.reduce(function (e, t) {
                    return e + t;
                });
            if (
                (n.forEach(function (e, t) {
                    n[t] *= i;
                }),
                (e = e.map(function (e) {
                    return new _(e);
                })),
                "lrgb" === t)
            )
                return tJ(e, n);
            for (var s = e.shift(), a = s.get(t), o = [], l = 0, u = 0, d = 0; d < a.length; d++)
                if (
                    ((a[d] = (a[d] || 0) * n[0]), o.push(isNaN(a[d]) ? 0 : n[0]), "h" === t.charAt(d) && !isNaN(a[d]))
                ) {
                    var c = (a[d] / 180) * tz;
                    (l += tq(c) * n[0]), (u += tX(c) * n[0]);
                }
            var f = s.alpha() * n[0];
            e.forEach(function (e, r) {
                var i = e.get(t);
                f += e.alpha() * n[r + 1];
                for (var s = 0; s < a.length; s++)
                    if (!isNaN(i[s]))
                        if (((o[s] += n[r + 1]), "h" === t.charAt(s))) {
                            var d = (i[s] / 180) * tz;
                            (l += tq(d) * n[r + 1]), (u += tX(d) * n[r + 1]);
                        } else a[s] += i[s] * n[r + 1];
            });
            for (var E = 0; E < a.length; E++)
                if ("h" === t.charAt(E)) {
                    for (var h = (tQ(u / o[E], l / o[E]) / tz) * 180; h < 0; ) h += 360;
                    for (; h >= 360; ) h -= 360;
                    a[E] = h;
                } else a[E] = a[E] / o[E];
            return (f /= r), new _(a, t).alpha(f > 0.99999 ? 1 : f, !0);
        }),
        (f.bezier = function (e) {
            var t = t3(e);
            return (
                (t.scale = function () {
                    return t1(t);
                }),
                t
            );
        }),
        (f.blend = t6),
        (f.cubehelix = function (e, t, n, r, i) {
            void 0 === e && (e = 300),
                void 0 === t && (t = -1.5),
                void 0 === n && (n = 1),
                void 0 === r && (r = 1),
                void 0 === i && (i = [0, 1]);
            var s,
                a = 0;
            "array" === t7(i) ? (s = i[1] - i[0]) : ((s = 0), (i = [i, i]));
            var o = function (o) {
                var l = t9 * ((e + 120) / 360 + t * o),
                    u = ne(i[0] + s * o, r),
                    d = ((0 !== a ? n[0] + o * a : n) * u * (1 - u)) / 2,
                    c = nn(l),
                    _ = nt(l);
                return f(
                    t8([
                        255 * (u + d * (-0.14861 * c + 1.78277 * _)),
                        255 * (u + d * (-0.29227 * c - 0.90649 * _)),
                        255 * (u + 1.97294 * c * d),
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
                    return null == e ? r : ((r = e), o);
                }),
                (o.hue = function (e) {
                    return null == e
                        ? n
                        : ("array" === t7((n = e)) ? 0 == (a = n[1] - n[0]) && (n = n[1]) : (a = 0), o);
                }),
                (o.lightness = function (e) {
                    return null == e
                        ? i
                        : ("array" === t7(e) ? ((i = e), (s = e[1] - e[0])) : ((i = [e, e]), (s = 0)), o);
                }),
                (o.scale = function () {
                    return f.scale(o);
                }),
                o.hue(n),
                o
            );
        }),
        (f.mix = f.interpolate = tV),
        (f.random = function () {
            for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(nr(16 * ni()));
            return new _(e, "hex");
        }),
        (f.scale = t1),
        (f.analyze = nu),
        (f.contrast = function (e, t) {
            (e = new _(e)), (t = new _(t));
            var n = e.luminance(),
                r = t.luminance();
            return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
        }),
        (f.deltaE = function (e, t, n, r, i) {
            void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
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
                d = o[2],
                c = Array.from(t.lab()),
                f = c[0],
                E = c[1],
                h = c[2],
                p = (l + f) / 2,
                m = (nc(n_(u, 2) + n_(d, 2)) + nc(n_(E, 2) + n_(h, 2))) / 2,
                g = 0.5 * (1 - nc(n_(m, 7) / (n_(m, 7) + n_(25, 7)))),
                A = u * (1 + g),
                I = E * (1 + g),
                T = nc(n_(A, 2) + n_(d, 2)),
                S = nc(n_(I, 2) + n_(h, 2)),
                y = (T + S) / 2,
                N = s(nh(d, A)),
                O = s(nh(h, I)),
                R = N >= 0 ? N : N + 360,
                v = O >= 0 ? O : O + 360,
                C = np(R - v) > 180 ? (R + v + 360) / 2 : (R + v) / 2,
                b = 1 - 0.17 * nm(a(C - 30)) + 0.24 * nm(a(2 * C)) + 0.32 * nm(a(3 * C + 6)) - 0.2 * nm(a(4 * C - 63)),
                D = v - R;
            (D = 180 >= np(D) ? D : v <= R ? D + 360 : D - 360), (D = 2 * nc(T * S) * ng(a(D) / 2));
            var L = S - T,
                w = 1 + (0.015 * n_(p - 50, 2)) / nc(20 + n_(p - 50, 2)),
                M = 1 + 0.045 * y,
                P = 1 + 0.015 * y * b,
                U = 30 * nA(-n_((C - 275) / 25, 2)),
                k = -(2 * nc(n_(y, 7) / (n_(y, 7) + n_(25, 7)))) * ng(2 * a(U));
            return nE(
                0,
                nf(
                    100,
                    nc(
                        n_((f - l) / (n * w), 2) +
                            n_(L / (r * M), 2) +
                            n_(D / (i * P), 2) +
                            (L / (r * M)) * k * (D / (i * P)),
                    ),
                ),
            );
        }),
        (f.distance = function (e, t, n) {
            void 0 === n && (n = "lab"), (e = new _(e)), (t = new _(t));
            var r = e.get(n),
                i = t.get(n),
                s = 0;
            for (var a in r) {
                var o = (r[a] || 0) - (i[a] || 0);
                s += o * o;
            }
            return Math.sqrt(s);
        }),
        (f.limits = nd),
        (f.valid = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            try {
                return new (Function.prototype.bind.apply(_, [null].concat(e)))(), !0;
            } catch (e) {
                return !1;
            }
        }),
        (f.scales = {
            cool: function () {
                return t1([f.hsl(180, 1, 0.9), f.hsl(250, 0.7, 0.4)]);
            },
            hot: function () {
                return t1(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
            },
        }),
        (f.colors = te),
        (f.brewer = nT),
        f
    );
})();
