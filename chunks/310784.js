!(function (t) {
    e.exports = t();
})(function () {
    "use strict";
    for (
        var e = function (e, t, n) {
                return void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e;
            },
            t = e,
            n = function (e) {
                (e._clipped = !1), (e._unclipped = e.slice(0));
                for (var n = 0; n <= 3; n++)
                    n < 3
                        ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), (e[n] = t(e[n], 0, 255)))
                        : 3 === n && (e[n] = t(e[n], 0, 1));
                return e;
            },
            r = {},
            i = 0,
            s = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
        i < s.length;
        i += 1
    ) {
        var a = s[i];
        r["[object " + a + "]"] = a.toLowerCase();
    }
    var o = function (e) {
            return r[Object.prototype.toString.call(e)] || "object";
        },
        l = o,
        u = o,
        c = Math.PI,
        d = {
            clip_rgb: n,
            limit: e,
            type: o,
            unpack: function (e, t) {
                return (void 0 === t && (t = null), e.length >= 3)
                    ? Array.prototype.slice.call(e)
                    : "object" == l(e[0]) && t
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
                return "string" == u(e[t]) ? e[t].toLowerCase() : null;
            },
            TWOPI: 2 * c,
            PITHIRD: c / 3,
            DEG2RAD: c / 180,
            RAD2DEG: 180 / c,
        },
        _ = { format: {}, autodetect: [] },
        f = d.last,
        p = d.clip_rgb,
        h = d.type,
        m = _,
        E = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = this;
            if ("object" === h(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var r = f(e),
                i = !1;
            if (!r) {
                (i = !0),
                    m.sorted ||
                        ((m.autodetect = m.autodetect.sort(function (e, t) {
                            return t.p - e.p;
                        })),
                        (m.sorted = !0));
                for (var s = 0, a = m.autodetect; s < a.length; s += 1) {
                    var o = a[s];
                    if ((r = o.test.apply(o, e))) break;
                }
            }
            if (m.format[r]) n._rgb = p(m.format[r].apply(null, i ? e : e.slice(0, -1)));
            else throw Error("unknown format: " + e);
            3 === n._rgb.length && n._rgb.push(1);
        };
    E.prototype.toString = function () {
        return "function" == h(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var g = E,
        A = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(A.Color, [null].concat(e)))();
        };
    (A.Color = g), (A.version = "2.4.2");
    var I = A,
        T = d.unpack,
        S = Math.max,
        y = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = T(e, "rgb"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = 1 - S((r /= 255), S((i /= 255), (s /= 255))),
                o = a < 1 ? 1 / (1 - a) : 0;
            return [(1 - r - a) * o, (1 - i - a) * o, (1 - s - a) * o, a];
        },
        v = d.unpack,
        N = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = v(e, "cmyk"))[0],
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
        },
        C = I,
        R = g,
        O = _,
        b = d.unpack,
        D = d.type,
        L = y;
    (R.prototype.cmyk = function () {
        return L(this._rgb);
    }),
        (C.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(R, [null].concat(e, ["cmyk"])))();
        }),
        (O.format.cmyk = N),
        O.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === D((e = b(e, "cmyk"))) && 4 === e.length) return "cmyk";
            },
        });
    var w = d.unpack,
        M = d.last,
        P = function (e) {
            return Math.round(100 * e) / 100;
        },
        x = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = w(e, "hsla"),
                r = M(e) || "lsa";
            return (
                (n[0] = P(n[0] || 0)),
                (n[1] = P(100 * n[1]) + "%"),
                (n[2] = P(100 * n[2]) + "%"),
                "hsla" === r || (n.length > 3 && n[3] < 1)
                    ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
                    : (n.length = 3),
                r + "(" + n.join(",") + ")"
            );
        },
        k = d.unpack,
        U = function () {
            for (var e, t, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = (n = k(n, "rgba"))[0],
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
        G = d.unpack,
        F = d.last,
        V = x,
        B = U,
        H = Math.round,
        j = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = G(e, "rgba"),
                r = F(e) || "rgb";
            return "hsl" == r.substr(0, 3)
                ? V(B(n), r)
                : ((n[0] = H(n[0])),
                  (n[1] = H(n[1])),
                  (n[2] = H(n[2])),
                  ("rgba" === r || (n.length > 3 && n[3] < 1)) && ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
                  r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
        },
        Y = d.unpack,
        W = Math.round,
        K = function () {
            for (var e, t, n, r, i = [], s = arguments.length; s--; ) i[s] = arguments[s];
            var a = (i = Y(i, "hsl"))[0],
                o = i[1],
                l = i[2];
            if (0 === o) t = n = r = 255 * l;
            else {
                var u = [0, 0, 0],
                    c = [0, 0, 0],
                    d = l < 0.5 ? l * (1 + o) : l + o - l * o,
                    _ = 2 * l - d,
                    f = a / 360;
                (u[0] = f + 1 / 3), (u[1] = f), (u[2] = f - 1 / 3);
                for (var p = 0; p < 3; p++)
                    u[p] < 0 && (u[p] += 1),
                        u[p] > 1 && (u[p] -= 1),
                        6 * u[p] < 1
                            ? (c[p] = _ + (d - _) * 6 * u[p])
                            : 2 * u[p] < 1
                              ? (c[p] = d)
                              : 3 * u[p] < 2
                                ? (c[p] = _ + (d - _) * (2 / 3 - u[p]) * 6)
                                : (c[p] = _);
                (t = (e = [W(255 * c[0]), W(255 * c[1]), W(255 * c[2])])[0]), (n = e[1]), (r = e[2]);
            }
            return i.length > 3 ? [t, n, r, i[3]] : [t, n, r, 1];
        },
        $ = K,
        z = _,
        q = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        Z = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        X = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        Q = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        J = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        ee = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        et = Math.round,
        en = function (e) {
            if (((e = e.toLowerCase().trim()), z.format.named))
                try {
                    return z.format.named(e);
                } catch (e) {}
            if ((t = e.match(q))) {
                for (var t, n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
                return (n[3] = 1), n;
            }
            if ((t = e.match(Z))) {
                for (var i = t.slice(1, 5), s = 0; s < 4; s++) i[s] = +i[s];
                return i;
            }
            if ((t = e.match(X))) {
                for (var a = t.slice(1, 4), o = 0; o < 3; o++) a[o] = et(2.55 * a[o]);
                return (a[3] = 1), a;
            }
            if ((t = e.match(Q))) {
                for (var l = t.slice(1, 5), u = 0; u < 3; u++) l[u] = et(2.55 * l[u]);
                return (l[3] = +l[3]), l;
            }
            if ((t = e.match(J))) {
                var c = t.slice(1, 4);
                (c[1] *= 0.01), (c[2] *= 0.01);
                var d = $(c);
                return (d[3] = 1), d;
            }
            if ((t = e.match(ee))) {
                var _ = t.slice(1, 4);
                (_[1] *= 0.01), (_[2] *= 0.01);
                var f = $(_);
                return (f[3] = +t[4]), f;
            }
        };
    en.test = function (e) {
        return q.test(e) || Z.test(e) || X.test(e) || Q.test(e) || J.test(e) || ee.test(e);
    };
    var er = en,
        ei = I,
        es = g,
        ea = _,
        eo = d.type,
        el = j,
        eu = er;
    (es.prototype.css = function (e) {
        return el(this._rgb, e);
    }),
        (ei.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(es, [null].concat(e, ["css"])))();
        }),
        (ea.format.css = eu),
        ea.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === eo(e) && eu.test(e)) return "css";
            },
        });
    var ec = g,
        ed = I,
        e_ = _,
        ef = d.unpack;
    (e_.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = ef(e, "rgba");
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n;
    }),
        (ed.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ec, [null].concat(e, ["gl"])))();
        }),
        (ec.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
    var ep = d.unpack,
        eh = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = ep(t, "rgb"),
                i = r[0],
                s = r[1],
                a = r[2],
                o = Math.min(i, s, a),
                l = Math.max(i, s, a),
                u = l - o,
                c = (100 * u) / 255,
                d = (o / (255 - u)) * 100;
            return (
                0 === u
                    ? (e = NaN)
                    : (i === l && (e = (s - a) / u),
                      s === l && (e = 2 + (a - i) / u),
                      a === l && (e = 4 + (i - s) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, c, d]
            );
        },
        em = d.unpack,
        eE = Math.floor,
        eg = function () {
            for (var e, t, n, r, i, s, a, o, l, u = [], c = arguments.length; c--; ) u[c] = arguments[c];
            var d = (u = em(u, "hcg"))[0],
                _ = u[1],
                f = u[2];
            f *= 255;
            var p = 255 * _;
            if (0 === _) a = o = l = f;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var h = eE((d /= 60)),
                    m = d - h,
                    E = f * (1 - _),
                    g = E + p * (1 - m),
                    A = E + p * m,
                    I = E + p;
                switch (h) {
                    case 0:
                        (a = (e = [I, A, E])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (a = (t = [g, I, E])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (a = (n = [E, I, A])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (a = (r = [E, g, I])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (a = (i = [A, E, I])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (a = (s = [I, E, g])[0]), (o = s[1]), (l = s[2]);
                }
            }
            return [a, o, l, u.length > 3 ? u[3] : 1];
        },
        eA = d.unpack,
        eI = d.type,
        eT = I,
        eS = g,
        ey = _,
        ev = eh;
    (eS.prototype.hcg = function () {
        return ev(this._rgb);
    }),
        (eT.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eS, [null].concat(e, ["hcg"])))();
        }),
        (ey.format.hcg = eg),
        ey.autodetect.push({
            p: 1,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eI((e = eA(e, "hcg"))) && 3 === e.length) return "hcg";
            },
        });
    var eN = d.unpack,
        eC = d.last,
        eR = Math.round,
        eO = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eN(e, "rgba"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = n[3],
                o = eC(e) || "auto";
            void 0 === a && (a = 1), "auto" === o && (o = a < 1 ? "rgba" : "rgb"), (r = eR(r));
            var l = "000000" + ((r << 16) | ((i = eR(i)) << 8) | (s = eR(s))).toString(16);
            l = l.substr(l.length - 6);
            var u = "0" + eR(255 * a).toString(16);
            switch (((u = u.substr(u.length - 2)), o.toLowerCase())) {
                case "rgba":
                    return "#" + l + u;
                case "argb":
                    return "#" + u + l;
                default:
                    return "#" + l;
            }
        },
        eb = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        eD = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        eL = function (e) {
            if (e.match(eb)) {
                (4 === e.length || 7 === e.length) && (e = e.substr(1)),
                    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e, 16);
                return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(eD)) {
                (5 === e.length || 9 === e.length) && (e = e.substr(1)),
                    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var n = parseInt(e, 16);
                return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, Math.round(((255 & n) / 255) * 100) / 100];
            }
            throw Error("unknown hex color: " + e);
        },
        ew = I,
        eM = g,
        eP = d.type,
        ex = _,
        ek = eO;
    (eM.prototype.hex = function (e) {
        return ek(this._rgb, e);
    }),
        (ew.hex = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eM, [null].concat(e, ["hex"])))();
        }),
        (ex.format.hex = eL),
        ex.autodetect.push({
            p: 4,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === eP(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex";
            },
        });
    var eU = d.unpack,
        eG = d.TWOPI,
        eF = Math.min,
        eV = Math.sqrt,
        eB = Math.acos,
        eH = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = eU(t, "rgb"),
                i = r[0],
                s = r[1],
                a = r[2],
                o = eF((i /= 255), (s /= 255), (a /= 255)),
                l = (i + s + a) / 3,
                u = l > 0 ? 1 - o / l : 0;
            return (
                0 === u
                    ? (e = NaN)
                    : ((e = eB((e = (i - s + (i - a)) / 2 / eV((i - s) * (i - s) + (i - a) * (s - a))))),
                      a > s && (e = eG - e),
                      (e /= eG)),
                [360 * e, u, l]
            );
        },
        ej = d.unpack,
        eY = d.limit,
        eW = d.TWOPI,
        eK = d.PITHIRD,
        e$ = Math.cos,
        ez = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var s = (r = ej(r, "hsi"))[0],
                a = r[1],
                o = r[2];
            return (
                isNaN(s) && (s = 0),
                isNaN(a) && (a = 0),
                s > 360 && (s -= 360),
                s < 0 && (s += 360),
                (s /= 360) < 1 / 3
                    ? (t = 1 - ((n = (1 - a) / 3) + (e = (1 + (a * e$(eW * s)) / e$(eK - eW * s)) / 3)))
                    : s < 2 / 3
                      ? ((s -= 1 / 3),
                        (n = 1 - ((e = (1 - a) / 3) + (t = (1 + (a * e$(eW * s)) / e$(eK - eW * s)) / 3))))
                      : ((s -= 2 / 3),
                        (e = 1 - ((t = (1 - a) / 3) + (n = (1 + (a * e$(eW * s)) / e$(eK - eW * s)) / 3)))),
                (e = eY(o * e * 3)),
                [255 * e, 255 * (t = eY(o * t * 3)), 255 * (n = eY(o * n * 3)), r.length > 3 ? r[3] : 1]
            );
        },
        eq = d.unpack,
        eZ = d.type,
        eX = I,
        eQ = g,
        eJ = _,
        e0 = eH;
    (eQ.prototype.hsi = function () {
        return e0(this._rgb);
    }),
        (eX.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eQ, [null].concat(e, ["hsi"])))();
        }),
        (eJ.format.hsi = ez),
        eJ.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eZ((e = eq(e, "hsi"))) && 3 === e.length) return "hsi";
            },
        });
    var e1 = d.unpack,
        e2 = d.type,
        e3 = I,
        e6 = g,
        e4 = _,
        e5 = U;
    (e6.prototype.hsl = function () {
        return e5(this._rgb);
    }),
        (e3.hsl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(e6, [null].concat(e, ["hsl"])))();
        }),
        (e4.format.hsl = K),
        e4.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === e2((e = e1(e, "hsl"))) && 3 === e.length) return "hsl";
            },
        });
    var e7 = d.unpack,
        e8 = Math.min,
        e9 = Math.max,
        te = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var s = (r = e7(r, "rgb"))[0],
                a = r[1],
                o = r[2],
                l = e8(s, a, o),
                u = e9(s, a, o),
                c = u - l;
            return (
                (n = u / 255),
                0 === u
                    ? ((e = NaN), (t = 0))
                    : ((t = c / u),
                      s === u && (e = (a - o) / c),
                      a === u && (e = 2 + (o - s) / c),
                      o === u && (e = 4 + (s - a) / c),
                      (e *= 60) < 0 && (e += 360)),
                [e, t, n]
            );
        },
        tt = d.unpack,
        tn = Math.floor,
        tr = function () {
            for (var e, t, n, r, i, s, a, o, l, u = [], c = arguments.length; c--; ) u[c] = arguments[c];
            var d = (u = tt(u, "hsv"))[0],
                _ = u[1],
                f = u[2];
            if (((f *= 255), 0 === _)) a = o = l = f;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var p = tn((d /= 60)),
                    h = d - p,
                    m = f * (1 - _),
                    E = f * (1 - _ * h),
                    g = f * (1 - _ * (1 - h));
                switch (p) {
                    case 0:
                        (a = (e = [f, g, m])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (a = (t = [E, f, m])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (a = (n = [m, f, g])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (a = (r = [m, E, f])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (a = (i = [g, m, f])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (a = (s = [f, m, E])[0]), (o = s[1]), (l = s[2]);
                }
            }
            return [a, o, l, u.length > 3 ? u[3] : 1];
        },
        ti = d.unpack,
        ts = d.type,
        ta = I,
        to = g,
        tl = _,
        tu = te;
    (to.prototype.hsv = function () {
        return tu(this._rgb);
    }),
        (ta.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(to, [null].concat(e, ["hsv"])))();
        }),
        (tl.format.hsv = tr),
        tl.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === ts((e = ti(e, "hsv"))) && 3 === e.length) return "hsv";
            },
        });
    var tc = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452,
        },
        td = tc,
        t_ = d.unpack,
        tf = Math.pow,
        tp = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : tf((e + 0.055) / 1.055, 2.4);
        },
        th = function (e) {
            return e > td.t3 ? tf(e, 1 / 3) : e / td.t2 + td.t0;
        },
        tm = function (e, t, n) {
            return (
                (e = tp(e)),
                [
                    th((0.4124564 * e + 0.3575761 * (t = tp(t)) + 0.1804375 * (n = tp(n))) / td.Xn),
                    th((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / td.Yn),
                    th((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / td.Zn),
                ]
            );
        },
        tE = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = t_(e, "rgb"),
                r = tm(n[0], n[1], n[2]),
                i = r[0],
                s = r[1],
                a = r[2],
                o = 116 * s - 16;
            return [o < 0 ? 0 : o, 500 * (i - s), 200 * (s - a)];
        },
        tg = tc,
        tA = d.unpack,
        tI = Math.pow,
        tT = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * tI(e, 1 / 2.4) - 0.055);
        },
        tS = function (e) {
            return e > tg.t1 ? e * e * e : tg.t2 * (e - tg.t0);
        },
        ty = function () {
            for (var e, t, n, r, i = [], s = arguments.length; s--; ) i[s] = arguments[s];
            var a = (i = tA(i, "lab"))[0],
                o = i[1],
                l = i[2];
            return (
                (t = (a + 16) / 116),
                (e = isNaN(o) ? t : t + o / 500),
                (n = isNaN(l) ? t : t - l / 200),
                (t = tg.Yn * tS(t)),
                (r = tT(3.2404542 * (e = tg.Xn * tS(e)) - 1.5371385 * t - 0.4985314 * (n = tg.Zn * tS(n)))),
                [
                    r,
                    tT(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
                    tT(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
                    i.length > 3 ? i[3] : 1,
                ]
            );
        },
        tv = d.unpack,
        tN = d.type,
        tC = I,
        tR = g,
        tO = _,
        tb = tE;
    (tR.prototype.lab = function () {
        return tb(this._rgb);
    }),
        (tC.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(tR, [null].concat(e, ["lab"])))();
        }),
        (tO.format.lab = ty),
        tO.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === tN((e = tv(e, "lab"))) && 3 === e.length) return "lab";
            },
        });
    var tD = d.unpack,
        tL = d.RAD2DEG,
        tw = Math.sqrt,
        tM = Math.atan2,
        tP = Math.round,
        tx = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tD(e, "lab"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = tw(i * i + s * s),
                o = (tM(s, i) * tL + 360) % 360;
            return 0 === tP(1e4 * a) && (o = NaN), [r, a, o];
        },
        tk = d.unpack,
        tU = tE,
        tG = tx,
        tF = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tk(e, "rgb"),
                r = tU(n[0], n[1], n[2]);
            return tG(r[0], r[1], r[2]);
        },
        tV = d.unpack,
        tB = d.DEG2RAD,
        tH = Math.sin,
        tj = Math.cos,
        tY = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tV(e, "lch"),
                r = n[0],
                i = n[1],
                s = n[2];
            return isNaN(s) && (s = 0), [r, tj((s *= tB)) * i, tH(s) * i];
        },
        tW = d.unpack,
        tK = tY,
        t$ = ty,
        tz = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tK((e = tW(e, "lch"))[0], e[1], e[2]),
                r = t$(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        tq = d.unpack,
        tZ = tz,
        tX = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tq(e, "hcl").reverse();
            return tZ.apply(void 0, n);
        },
        tQ = d.unpack,
        tJ = d.type,
        t0 = I,
        t1 = g,
        t2 = _,
        t3 = tF;
    (t1.prototype.lch = function () {
        return t3(this._rgb);
    }),
        (t1.prototype.hcl = function () {
            return t3(this._rgb).reverse();
        }),
        (t0.lch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t1, [null].concat(e, ["lch"])))();
        }),
        (t0.hcl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t1, [null].concat(e, ["hcl"])))();
        }),
        (t2.format.lch = tz),
        (t2.format.hcl = tX),
        ["lch", "hcl"].forEach(function (e) {
            return t2.autodetect.push({
                p: 2,
                test: function () {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    if ("array" === tJ((t = tQ(t, e))) && 3 === t.length) return e;
                },
            });
        });
    var t6 = {
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
        t4 = g,
        t5 = _,
        t7 = d.type,
        t8 = t6,
        t9 = eL,
        ne = eO;
    (t4.prototype.name = function () {
        for (var e = ne(this._rgb, "rgb"), t = 0, n = Object.keys(t8); t < n.length; t += 1) {
            var r = n[t];
            if (t8[r] === e) return r.toLowerCase();
        }
        return e;
    }),
        (t5.format.named = function (e) {
            if (t8[(e = e.toLowerCase())]) return t9(t8[e]);
            throw Error("unknown color name: " + e);
        }),
        t5.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === t7(e) && t8[e.toLowerCase()]) return "named";
            },
        });
    var nt = d.unpack,
        nn = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nt(e, "rgb");
            return (n[0] << 16) + (n[1] << 8) + n[2];
        },
        nr = d.type,
        ni = function (e) {
            if ("number" == nr(e) && e >= 0 && e <= 0xffffff) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw Error("unknown num color: " + e);
        },
        ns = I,
        na = g,
        no = _,
        nl = d.type,
        nu = nn;
    (na.prototype.num = function () {
        return nu(this._rgb);
    }),
        (ns.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(na, [null].concat(e, ["num"])))();
        }),
        (no.format.num = ni),
        no.autodetect.push({
            p: 5,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (1 === e.length && "number" === nl(e[0]) && e[0] >= 0 && e[0] <= 0xffffff) return "num";
            },
        });
    var nc = I,
        nd = g,
        n_ = _,
        nf = d.unpack,
        np = d.type,
        nh = Math.round;
    (nd.prototype.rgb = function (e) {
        return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(nh);
    }),
        (nd.prototype.rgba = function (e) {
            return (
                void 0 === e && (e = !0),
                this._rgb.slice(0, 4).map(function (t, n) {
                    return n < 3 ? (!1 === e ? t : nh(t)) : t;
                })
            );
        }),
        (nc.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nd, [null].concat(e, ["rgb"])))();
        }),
        (n_.format.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nf(e, "rgba");
            return void 0 === n[3] && (n[3] = 1), n;
        }),
        n_.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (
                    "array" === np((e = nf(e, "rgba"))) &&
                    (3 === e.length || (4 === e.length && "number" == np(e[3]) && e[3] >= 0 && e[3] <= 1))
                )
                    return "rgb";
            },
        });
    var nm = Math.log,
        nE = function (e) {
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
                              : -155.25485562709179 - 0.44596950469579133 * (n = i - 2) + 104.49216199393888 * nm(n)),
                      (r =
                          i < 20
                              ? 0
                              : -254.76935184120902 + 0.8274096064007395 * (r = i - 10) + 115.67994401066147 * nm(r)))
                    : ((t = 351.97690566805693 + 0.114206453784165 * (t = i - 55) - 40.25366309332127 * nm(t)),
                      (n = 325.4494125711974 + 0.07943456536662342 * (n = i - 50) - 28.0852963507957 * nm(n)),
                      (r = 255)),
                [t, n, r, 1]
            );
        },
        ng = nE,
        nA = d.unpack,
        nI = Math.round,
        nT = I,
        nS = g,
        ny = _,
        nv = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            for (var r = nA(t, "rgb"), i = r[0], s = r[2], a = 1e3, o = 4e4, l = 0.4; o - a > l; ) {
                var u = ng((e = (o + a) * 0.5));
                u[2] / u[0] >= s / i ? (o = e) : (a = e);
            }
            return nI(e);
        };
    (nS.prototype.temp =
        nS.prototype.kelvin =
        nS.prototype.temperature =
            function () {
                return nv(this._rgb);
            }),
        (nT.temp =
            nT.kelvin =
            nT.temperature =
                function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(nS, [null].concat(e, ["temp"])))();
                }),
        (ny.format.temp = ny.format.kelvin = ny.format.temperature = nE);
    var nN = d.unpack,
        nC = Math.cbrt,
        nR = Math.pow,
        nO = Math.sign,
        nb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nN(e, "rgb"),
                r = n[0],
                i = n[1],
                s = n[2],
                a = [nD(r / 255), nD(i / 255), nD(s / 255)],
                o = a[0],
                l = a[1],
                u = a[2],
                c = nC(0.4122214708 * o + 0.5363325363 * l + 0.0514459929 * u),
                d = nC(0.2119034982 * o + 0.6806995451 * l + 0.1073969566 * u),
                _ = nC(0.0883024619 * o + 0.2817188376 * l + 0.6299787005 * u);
            return [
                0.2104542553 * c + 0.793617785 * d - 0.0040720468 * _,
                1.9779984951 * c - 2.428592205 * d + 0.4505937099 * _,
                0.0259040371 * c + 0.7827717662 * d - 0.808675766 * _,
            ];
        };
    function nD(e) {
        var t = Math.abs(e);
        return t < 0.04045 ? e / 12.92 : (nO(e) || 1) * nR((t + 0.055) / 1.055, 2.4);
    }
    var nL = d.unpack,
        nw = Math.pow,
        nM = Math.sign,
        nP = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = nL(e, "lab"))[0],
                r = e[1],
                i = e[2],
                s = nw(n + 0.3963377774 * r + 0.2158037573 * i, 3),
                a = nw(n - 0.1055613458 * r - 0.0638541728 * i, 3),
                o = nw(n - 0.0894841775 * r - 1.291485548 * i, 3);
            return [
                255 * nx(4.0767416621 * s - 3.3077115913 * a + 0.2309699292 * o),
                255 * nx(-1.2684380046 * s + 2.6097574011 * a - 0.3413193965 * o),
                255 * nx(-0.0041960863 * s - 0.7034186147 * a + 1.707614701 * o),
                e.length > 3 ? e[3] : 1,
            ];
        };
    function nx(e) {
        var t = Math.abs(e);
        return t > 0.0031308 ? (nM(e) || 1) * (1.055 * nw(t, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var nk = d.unpack,
        nU = d.type,
        nG = I,
        nF = g,
        nV = _,
        nB = nb;
    (nF.prototype.oklab = function () {
        return nB(this._rgb);
    }),
        (nG.oklab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nF, [null].concat(e, ["oklab"])))();
        }),
        (nV.format.oklab = nP),
        nV.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nU((e = nk(e, "oklab"))) && 3 === e.length) return "oklab";
            },
        });
    var nH = d.unpack,
        nj = nb,
        nY = tx,
        nW = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nH(e, "rgb"),
                r = nj(n[0], n[1], n[2]);
            return nY(r[0], r[1], r[2]);
        },
        nK = d.unpack,
        n$ = tY,
        nz = nP,
        nq = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = n$((e = nK(e, "lch"))[0], e[1], e[2]),
                r = nz(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        nZ = d.unpack,
        nX = d.type,
        nQ = I,
        nJ = g,
        n0 = _,
        n1 = nW;
    (nJ.prototype.oklch = function () {
        return n1(this._rgb);
    }),
        (nQ.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nJ, [null].concat(e, ["oklch"])))();
        }),
        (n0.format.oklch = nq),
        n0.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nX((e = nZ(e, "oklch"))) && 3 === e.length) return "oklch";
            },
        });
    var n2 = g,
        n3 = d.type;
    (n2.prototype.alpha = function (e, t) {
        return (void 0 === t && (t = !1), void 0 !== e && "number" === n3(e))
            ? t
                ? ((this._rgb[3] = e), this)
                : new n2([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3];
    }),
        (g.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        });
    var n6 = g,
        n4 = tc;
    (n6.prototype.darken = function (e) {
        void 0 === e && (e = 1);
        var t = this,
            n = t.lab();
        return (n[0] -= n4.Kn * e), new n6(n, "lab").alpha(t.alpha(), !0);
    }),
        (n6.prototype.brighten = function (e) {
            return void 0 === e && (e = 1), this.darken(-e);
        }),
        (n6.prototype.darker = n6.prototype.darken),
        (n6.prototype.brighter = n6.prototype.brighten),
        (g.prototype.get = function (e) {
            var t = e.split("."),
                n = t[0],
                r = t[1],
                i = this[n]();
            if (!r) return i;
            var s = n.indexOf(r) - 2 * ("ok" === n.substr(0, 2));
            if (s > -1) return i[s];
            throw Error("unknown channel " + r + " in mode " + n);
        });
    var n5 = g,
        n7 = d.type,
        n8 = Math.pow,
        n9 = 1e-7,
        re = 20;
    n5.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === n7(e)) {
            if (0 === e) return new n5([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === e) return new n5([255, 255, 255, this._rgb[3]], "rgb");
            var t = this.luminance(),
                n = "rgb",
                r = re,
                i = function (t, s) {
                    var a = t.interpolate(s, 0.5, n),
                        o = a.luminance();
                    return !(Math.abs(e - o) < n9) && r-- ? (o > e ? i(t, a) : i(a, s)) : a;
                },
                s = (t > e ? i(new n5([0, 0, 0]), this) : i(this, new n5([255, 255, 255]))).rgb();
            return new n5(s.concat([this._rgb[3]]));
        }
        return rt.apply(void 0, this._rgb.slice(0, 3));
    };
    var rt = function (e, t, n) {
            return (e = rn(e)), 0.2126 * e + 0.7152 * (t = rn(t)) + 0.0722 * (n = rn(n));
        },
        rn = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : n8((e + 0.055) / 1.055, 2.4);
        },
        rr = {},
        ri = g,
        rs = d.type,
        ra = rr,
        ro = function (e, t, n) {
            void 0 === n && (n = 0.5);
            for (var r = [], i = arguments.length - 3; i-- > 0; ) r[i] = arguments[i + 3];
            var s = r[0] || "lrgb";
            if ((ra[s] || r.length || (s = Object.keys(ra)[0]), !ra[s]))
                throw Error("interpolation mode " + s + " is not defined");
            return (
                "object" !== rs(e) && (e = new ri(e)),
                "object" !== rs(t) && (t = new ri(t)),
                ra[s](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
            );
        },
        rl = g,
        ru = ro;
    rl.prototype.mix = rl.prototype.interpolate = function (e, t) {
        void 0 === t && (t = 0.5);
        for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
        return ru.apply(void 0, [this, e, t].concat(n));
    };
    var rc = g;
    rc.prototype.premultiply = function (e) {
        void 0 === e && (e = !1);
        var t = this._rgb,
            n = t[3];
        return e
            ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
            : new rc([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
    };
    var rd = g,
        r_ = tc;
    (rd.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var t = this,
            n = t.lch();
        return (n[1] += r_.Kn * e), n[1] < 0 && (n[1] = 0), new rd(n, "lch").alpha(t.alpha(), !0);
    }),
        (rd.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
        });
    var rf = g,
        rp = d.type;
    rf.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.split("."),
            i = r[0],
            s = r[1],
            a = this[i]();
        if (!s) return a;
        var o = i.indexOf(s) - 2 * ("ok" === i.substr(0, 2));
        if (o > -1) {
            if ("string" == rp(t))
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
            else if ("number" === rp(t)) a[o] = t;
            else throw Error("unsupported value for Color.set");
            var l = new rf(a, i);
            return n ? ((this._rgb = l._rgb), this) : l;
        }
        throw Error("unknown channel " + s + " in mode " + i);
    };
    var rh = g;
    rr.rgb = function (e, t, n) {
        var r = e._rgb,
            i = t._rgb;
        return new rh(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb");
    };
    var rm = g,
        rE = Math.sqrt,
        rg = Math.pow;
    rr.lrgb = function (e, t, n) {
        var r = e._rgb,
            i = r[0],
            s = r[1],
            a = r[2],
            o = t._rgb,
            l = o[0],
            u = o[1],
            c = o[2];
        return new rm(
            rE(rg(i, 2) * (1 - n) + rg(l, 2) * n),
            rE(rg(s, 2) * (1 - n) + rg(u, 2) * n),
            rE(rg(a, 2) * (1 - n) + rg(c, 2) * n),
            "rgb",
        );
    };
    var rA = g;
    rr.lab = function (e, t, n) {
        var r = e.lab(),
            i = t.lab();
        return new rA(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab");
    };
    var rI = g,
        rT = function (e, t, n, r) {
            var i, s, a, o, l, u, c, d, _, f, p, h, m, E;
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
                    ((l = (i = a)[0]), (c = i[1]), (_ = i[2]), (u = (s = o)[0]), (d = s[1]), (f = s[2])),
                isNaN(l) || isNaN(u)
                    ? isNaN(l)
                        ? isNaN(u)
                            ? (h = NaN)
                            : ((h = u), (1 == _ || 0 == _) && "hsv" != r && (p = d))
                        : ((h = l), (1 == f || 0 == f) && "hsv" != r && (p = c))
                    : ((E = u > l && u - l > 180 ? u - (l + 360) : u < l && l - u > 180 ? u + 360 - l : u - l),
                      (h = l + n * E)),
                void 0 === p && (p = c + n * (d - c)),
                (m = _ + n * (f - _)),
                "oklch" === r ? new rI([m, p, h], r) : new rI([h, p, m], r)
            );
        },
        rS = rT,
        ry = function (e, t, n) {
            return rS(e, t, n, "lch");
        };
    (rr.lch = ry), (rr.hcl = ry);
    var rv = g;
    rr.num = function (e, t, n) {
        var r = e.num();
        return new rv(r + n * (t.num() - r), "num");
    };
    var rN = rT;
    rr.hcg = function (e, t, n) {
        return rN(e, t, n, "hcg");
    };
    var rC = rT;
    rr.hsi = function (e, t, n) {
        return rC(e, t, n, "hsi");
    };
    var rR = rT;
    rr.hsl = function (e, t, n) {
        return rR(e, t, n, "hsl");
    };
    var rO = rT;
    rr.hsv = function (e, t, n) {
        return rO(e, t, n, "hsv");
    };
    var rb = g;
    rr.oklab = function (e, t, n) {
        var r = e.oklab(),
            i = t.oklab();
        return new rb(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab");
    };
    var rD = rT;
    rr.oklch = function (e, t, n) {
        return rD(e, t, n, "oklch");
    };
    var rL = g,
        rw = d.clip_rgb,
        rM = Math.pow,
        rP = Math.sqrt,
        rx = Math.PI,
        rk = Math.cos,
        rU = Math.sin,
        rG = Math.atan2,
        rF = function (e, t, n) {
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
                    return new rL(e);
                })),
                "lrgb" === t)
            )
                return rV(e, n);
            for (var s = e.shift(), a = s.get(t), o = [], l = 0, u = 0, c = 0; c < a.length; c++)
                if (
                    ((a[c] = (a[c] || 0) * n[0]), o.push(isNaN(a[c]) ? 0 : n[0]), "h" === t.charAt(c) && !isNaN(a[c]))
                ) {
                    var d = (a[c] / 180) * rx;
                    (l += rk(d) * n[0]), (u += rU(d) * n[0]);
                }
            var _ = s.alpha() * n[0];
            e.forEach(function (e, r) {
                var i = e.get(t);
                _ += e.alpha() * n[r + 1];
                for (var s = 0; s < a.length; s++)
                    if (!isNaN(i[s]))
                        if (((o[s] += n[r + 1]), "h" === t.charAt(s))) {
                            var c = (i[s] / 180) * rx;
                            (l += rk(c) * n[r + 1]), (u += rU(c) * n[r + 1]);
                        } else a[s] += i[s] * n[r + 1];
            });
            for (var f = 0; f < a.length; f++)
                if ("h" === t.charAt(f)) {
                    for (var p = (rG(u / o[f], l / o[f]) / rx) * 180; p < 0; ) p += 360;
                    for (; p >= 360; ) p -= 360;
                    a[f] = p;
                } else a[f] = a[f] / o[f];
            return (_ /= r), new rL(a, t).alpha(_ > 0.99999 ? 1 : _, !0);
        },
        rV = function (e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], i = 0; i < e.length; i++) {
                var s = e[i],
                    a = t[i] / n,
                    o = s._rgb;
                (r[0] += rM(o[0], 2) * a), (r[1] += rM(o[1], 2) * a), (r[2] += rM(o[2], 2) * a), (r[3] += o[3] * a);
            }
            return (
                (r[0] = rP(r[0])), (r[1] = rP(r[1])), (r[2] = rP(r[2])), r[3] > 0.9999999 && (r[3] = 1), new rL(rw(r))
            );
        },
        rB = I,
        rH = d.type,
        rj = Math.pow,
        rY = function (e) {
            var t = "rgb",
                n = rB("#ccc"),
                r = 0,
                i = [0, 1],
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
                h = 1,
                m = function (e) {
                    if (
                        ("string" === rH((e = e || ["#fff", "#000"])) &&
                            rB.brewer &&
                            rB.brewer[e.toLowerCase()] &&
                            (e = rB.brewer[e.toLowerCase()]),
                        "array" === rH(e))
                    ) {
                        1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                        for (var t = 0; t < e.length; t++) e[t] = rB(e[t]);
                        s.length = 0;
                        for (var n = 0; n < e.length; n++) s.push(n / (e.length - 1));
                    }
                    return T(), (l = e);
                },
                E = function (e) {
                    if (null != o) {
                        for (var t = o.length - 1, n = 0; n < t && e >= o[n]; ) n++;
                        return n - 1;
                    }
                    return 0;
                },
                g = function (e) {
                    return e;
                },
                A = function (e) {
                    return e;
                },
                I = function (e, r) {
                    if ((null == r && (r = !1), isNaN(e) || null === e)) return n;
                    if (r) u = e;
                    else if (o && o.length > 2) {
                        var i, u;
                        u = E(e) / (o.length - 2);
                    } else u = d !== c ? (e - c) / (d - c) : 1;
                    (u = A(u)), r || (u = g(u)), 1 !== h && (u = rj(u, h));
                    var _ = Math.floor(1e4 * (u = Math.min(1, Math.max(0, (u = a[0] + u * (1 - a[0] - a[1]))))));
                    if (p && f[_]) i = f[_];
                    else {
                        if ("array" === rH(l))
                            for (var m = 0; m < s.length; m++) {
                                var I = s[m];
                                if (u <= I || (u >= I && m === s.length - 1)) {
                                    i = l[m];
                                    break;
                                }
                                if (u > I && u < s[m + 1]) {
                                    (u = (u - I) / (s[m + 1] - I)), (i = rB.interpolate(l[m], l[m + 1], u, t));
                                    break;
                                }
                            }
                        else "function" === rH(l) && (i = l(u));
                        p && (f[_] = i);
                    }
                    return i;
                },
                T = function () {
                    return (f = {});
                };
            m(e);
            var S = function (e) {
                var t = rB(I(e));
                return u && t[u] ? t[u]() : t;
            };
            return (
                (S.classes = function (e) {
                    if (null != e) {
                        if ("array" === rH(e)) (o = e), (i = [e[0], e[e.length - 1]]);
                        else {
                            var t = rB.analyze(i);
                            o = 0 === e ? [t.min, t.max] : rB.limits(t, "e", e);
                        }
                        return S;
                    }
                    return o;
                }),
                (S.domain = function (e) {
                    if (!arguments.length) return i;
                    (c = e[0]), (d = e[e.length - 1]), (s = []);
                    var t = l.length;
                    if (e.length === t && c !== d)
                        for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                            var a = r[n];
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
                                (A = function (e) {
                                    if (e <= 0 || e >= 1) return e;
                                    for (var t = 0; e >= _[t + 1]; ) t++;
                                    var n = (e - _[t]) / (_[t + 1] - _[t]);
                                    return u[t] + n * (u[t + 1] - u[t]);
                                });
                        }
                    }
                    return (i = [c, d]), S;
                }),
                (S.mode = function (e) {
                    return arguments.length ? ((t = e), T(), S) : t;
                }),
                (S.range = function (e, t) {
                    return m(e), S;
                }),
                (S.out = function (e) {
                    return (u = e), S;
                }),
                (S.spread = function (e) {
                    return arguments.length ? ((r = e), S) : r;
                }),
                (S.correctLightness = function (e) {
                    return (
                        null == e && (e = !0),
                        (_ = e),
                        T(),
                        (g = _
                            ? function (e) {
                                  for (
                                      var t = I(0, !0).lab()[0],
                                          n = I(1, !0).lab()[0],
                                          r = t > n,
                                          i = I(e, !0).lab()[0],
                                          s = t + (n - t) * e,
                                          a = i - s,
                                          o = 0,
                                          l = 1,
                                          u = 20;
                                      Math.abs(a) > 0.01 && u-- > 0;
                                  )
                                      !(function () {
                                          r && (a *= -1),
                                              a < 0 ? ((o = e), (e += (l - e) * 0.5)) : ((l = e), (e += (o - e) * 0.5)),
                                              (a = (i = I(e, !0).lab()[0]) - s);
                                      })();
                                  return e;
                              }
                            : function (e) {
                                  return e;
                              }),
                        S
                    );
                }),
                (S.padding = function (e) {
                    return null != e ? ("number" === rH(e) && (e = [e, e]), (a = e), S) : a;
                }),
                (S.colors = function (t, n) {
                    arguments.length < 2 && (n = "hex");
                    var r = [];
                    if (0 == arguments.length) r = l.slice(0);
                    else if (1 === t) r = [S(0.5)];
                    else if (t > 1) {
                        var s = i[0],
                            a = i[1] - s;
                        r = rW(0, t, !1).map(function (e) {
                            return S(s + (e / (t - 1)) * a);
                        });
                    } else {
                        e = [];
                        var u = [];
                        if (o && o.length > 2)
                            for (var c = 1, d = o.length, _ = 1 <= d; _ ? c < d : c > d; _ ? c++ : c--)
                                u.push((o[c - 1] + o[c]) * 0.5);
                        else u = i;
                        r = u.map(function (e) {
                            return S(e);
                        });
                    }
                    return (
                        rB[n] &&
                            (r = r.map(function (e) {
                                return e[n]();
                            })),
                        r
                    );
                }),
                (S.cache = function (e) {
                    return null != e ? ((p = e), S) : p;
                }),
                (S.gamma = function (e) {
                    return null != e ? ((h = e), S) : h;
                }),
                (S.nodata = function (e) {
                    return null != e ? ((n = rB(e)), S) : n;
                }),
                S
            );
        };
    function rW(e, t, n) {
        for (var r = [], i = e < t, s = n ? (i ? t + 1 : t - 1) : t, a = e; i ? a < s : a > s; i ? a++ : a--) r.push(a);
        return r;
    }
    var rK = g,
        r$ = rY,
        rz = function (e) {
            for (var t = [1, 1], n = 1; n < e; n++) {
                for (var r = [1], i = 1; i <= t.length; i++) r[i] = (t[i] || 0) + t[i - 1];
                t = r;
            }
            return t;
        },
        rq = function (e) {
            var t, n, r, i, s, a, o, l, u, c, d;
            if (
                2 ===
                (e = e.map(function (e) {
                    return new rK(e);
                })).length
            )
                (s = (t = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (a = t[1]),
                    (i = function (e) {
                        return new rK(
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
                        return new rK(
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
                        return new rK(
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
                    (c = rz((d = e.length - 1))),
                    (i = function (e) {
                        var t = 1 - e;
                        return new rK(
                            [0, 1, 2].map(function (n) {
                                return u.reduce(function (r, i, s) {
                                    return r + c[s] * Math.pow(t, d - s) * Math.pow(e, s) * i[n];
                                }, 0);
                            }),
                            "lab",
                        );
                    });
            else throw RangeError("No point in running bezier with only one color.");
            return i;
        },
        rZ = function (e) {
            var t = rq(e);
            return (
                (t.scale = function () {
                    return r$(t);
                }),
                t
            );
        },
        rX = I,
        rQ = function (e, t, n) {
            if (!rQ[n]) throw Error("unknown blend mode " + n);
            return rQ[n](e, t);
        },
        rJ = function (e) {
            return function (t, n) {
                var r = rX(n).rgb(),
                    i = rX(t).rgb();
                return rX.rgb(e(r, i));
            };
        },
        r0 = function (e) {
            return function (t, n) {
                var r = [];
                return (r[0] = e(t[0], n[0])), (r[1] = e(t[1], n[1])), (r[2] = e(t[2], n[2])), r;
            };
        },
        r1 = function (e, t) {
            return (e * t) / 255;
        },
        r2 = function (e, t) {
            return e > t ? t : e;
        },
        r3 = function (e, t) {
            return e > t ? e : t;
        },
        r6 = function (e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255));
        },
        r4 = function (e, t) {
            return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
        },
        r5 = function (e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255));
        },
        r7 = function (e, t) {
            return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
        };
    (rQ.normal = rJ(
        r0(function (e) {
            return e;
        }),
    )),
        (rQ.multiply = rJ(r0(r1))),
        (rQ.screen = rJ(r0(r6))),
        (rQ.overlay = rJ(r0(r4))),
        (rQ.darken = rJ(r0(r2))),
        (rQ.lighten = rJ(r0(r3))),
        (rQ.dodge = rJ(r0(r7))),
        (rQ.burn = rJ(r0(r5)));
    for (
        var r8 = rQ,
            r9 = d.type,
            ie = d.clip_rgb,
            it = d.TWOPI,
            ir = Math.pow,
            ii = Math.sin,
            is = Math.cos,
            ia = I,
            io = function (e, t, n, r, i) {
                void 0 === e && (e = 300),
                    void 0 === t && (t = -1.5),
                    void 0 === n && (n = 1),
                    void 0 === r && (r = 1),
                    void 0 === i && (i = [0, 1]);
                var s,
                    a = 0;
                "array" === r9(i) ? (s = i[1] - i[0]) : ((s = 0), (i = [i, i]));
                var o = function (o) {
                    var l = it * ((e + 120) / 360 + t * o),
                        u = ir(i[0] + s * o, r),
                        c = ((0 !== a ? n[0] + o * a : n) * u * (1 - u)) / 2,
                        d = is(l),
                        _ = ii(l);
                    return ia(
                        ie([
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
                        return null == e ? r : ((r = e), o);
                    }),
                    (o.hue = function (e) {
                        return null == e
                            ? n
                            : ("array" === r9((n = e)) ? 0 == (a = n[1] - n[0]) && (n = n[1]) : (a = 0), o);
                    }),
                    (o.lightness = function (e) {
                        return null == e
                            ? i
                            : ("array" === r9(e) ? ((i = e), (s = e[1] - e[0])) : ((i = [e, e]), (s = 0)), o);
                    }),
                    (o.scale = function () {
                        return ia.scale(o);
                    }),
                    o.hue(n),
                    o
                );
            },
            il = g,
            iu = "0123456789abcdef",
            ic = Math.floor,
            id = Math.random,
            i_ = function () {
                for (var e = "#", t = 0; t < 6; t++) e += iu.charAt(ic(16 * id()));
                return new il(e, "hex");
            },
            ip = o,
            ih = Math.log,
            im = Math.pow,
            iE = Math.floor,
            ig = Math.abs,
            iA = function (e, t) {
                void 0 === t && (t = null);
                var n = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
                return (
                    "object" === ip(e) && (e = Object.values(e)),
                    e.forEach(function (e) {
                        t && "object" === ip(e) && (e = e[t]),
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
                        return iI(n, e, t);
                    }),
                    n
                );
            },
            iI = function (e, t, n) {
                void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == ip(e) && (e = iA(e));
                var r = e.min,
                    i = e.max,
                    s = e.values.sort(function (e, t) {
                        return e - t;
                    });
                if (1 === n) return [r, i];
                var a = [];
                if (("c" === t.substr(0, 1) && (a.push(r), a.push(i)), "e" === t.substr(0, 1))) {
                    a.push(r);
                    for (var o = 1; o < n; o++) a.push(r + (o / n) * (i - r));
                    a.push(i);
                } else if ("l" === t.substr(0, 1)) {
                    if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var l = Math.LOG10E * ih(r),
                        u = Math.LOG10E * ih(i);
                    a.push(r);
                    for (var c = 1; c < n; c++) a.push(im(10, l + (c / n) * (u - l)));
                    a.push(i);
                } else if ("q" === t.substr(0, 1)) {
                    a.push(r);
                    for (var d = 1; d < n; d++) {
                        var _ = ((s.length - 1) * d) / n,
                            f = iE(_);
                        if (f === _) a.push(s[f]);
                        else {
                            var p = _ - f;
                            a.push(s[f] * (1 - p) + s[f + 1] * p);
                        }
                    }
                    a.push(i);
                } else if ("k" === t.substr(0, 1)) {
                    var h,
                        m = s.length,
                        E = Array(m),
                        g = Array(n),
                        A = !0,
                        I = 0,
                        T = null;
                    (T = []).push(r);
                    for (var S = 1; S < n; S++) T.push(r + (S / n) * (i - r));
                    for (T.push(i); A; ) {
                        for (var y = 0; y < n; y++) g[y] = 0;
                        for (var v = 0; v < m; v++)
                            for (var N = s[v], C = Number.MAX_VALUE, R = void 0, O = 0; O < n; O++) {
                                var b = ig(T[O] - N);
                                b < C && ((C = b), (R = O)), g[R]++, (E[v] = R);
                            }
                        for (var D = Array(n), L = 0; L < n; L++) D[L] = null;
                        for (var w = 0; w < m; w++) null === D[(h = E[w])] ? (D[h] = s[w]) : (D[h] += s[w]);
                        for (var M = 0; M < n; M++) D[M] *= 1 / g[M];
                        A = !1;
                        for (var P = 0; P < n; P++)
                            if (D[P] !== T[P]) {
                                A = !0;
                                break;
                            }
                        (T = D), ++I > 200 && (A = !1);
                    }
                    for (var x = {}, k = 0; k < n; k++) x[k] = [];
                    for (var U = 0; U < m; U++) x[(h = E[U])].push(s[U]);
                    for (var G = [], F = 0; F < n; F++) G.push(x[F][0]), G.push(x[F][x[F].length - 1]);
                    (G = G.sort(function (e, t) {
                        return e - t;
                    })),
                        a.push(G[0]);
                    for (var V = 1; V < G.length; V += 2) {
                        var B = G[V];
                        isNaN(B) || -1 !== a.indexOf(B) || a.push(B);
                    }
                }
                return a;
            },
            iT = iA,
            iS = iI,
            iy = g,
            iv = function (e, t) {
                (e = new iy(e)), (t = new iy(t));
                var n = e.luminance(),
                    r = t.luminance();
                return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
            },
            iN = g,
            iC = Math.sqrt,
            iR = Math.pow,
            iO = Math.min,
            ib = Math.max,
            iD = Math.atan2,
            iL = Math.abs,
            iw = Math.cos,
            iM = Math.sin,
            iP = Math.exp,
            ix = Math.PI,
            ik = function (e, t, n, r, i) {
                void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
                var s = function (e) {
                        return (360 * e) / (2 * ix);
                    },
                    a = function (e) {
                        return (2 * ix * e) / 360;
                    };
                (e = new iN(e)), (t = new iN(t));
                var o = Array.from(e.lab()),
                    l = o[0],
                    u = o[1],
                    c = o[2],
                    d = Array.from(t.lab()),
                    _ = d[0],
                    f = d[1],
                    p = d[2],
                    h = (l + _) / 2,
                    m = (iC(iR(u, 2) + iR(c, 2)) + iC(iR(f, 2) + iR(p, 2))) / 2,
                    E = 0.5 * (1 - iC(iR(m, 7) / (iR(m, 7) + iR(25, 7)))),
                    g = u * (1 + E),
                    A = f * (1 + E),
                    I = iC(iR(g, 2) + iR(c, 2)),
                    T = iC(iR(A, 2) + iR(p, 2)),
                    S = (I + T) / 2,
                    y = s(iD(c, g)),
                    v = s(iD(p, A)),
                    N = y >= 0 ? y : y + 360,
                    C = v >= 0 ? v : v + 360,
                    R = iL(N - C) > 180 ? (N + C + 360) / 2 : (N + C) / 2,
                    O =
                        1 -
                        0.17 * iw(a(R - 30)) +
                        0.24 * iw(a(2 * R)) +
                        0.32 * iw(a(3 * R + 6)) -
                        0.2 * iw(a(4 * R - 63)),
                    b = C - N;
                (b = 180 >= iL(b) ? b : C <= N ? b + 360 : b - 360), (b = 2 * iC(I * T) * iM(a(b) / 2));
                var D = _ - l,
                    L = T - I,
                    w = 1 + (0.015 * iR(h - 50, 2)) / iC(20 + iR(h - 50, 2)),
                    M = 1 + 0.045 * S,
                    P = 1 + 0.015 * S * O,
                    x = 30 * iP(-iR((R - 275) / 25, 2)),
                    k = -(2 * iC(iR(S, 7) / (iR(S, 7) + iR(25, 7)))) * iM(2 * a(x));
                return ib(
                    0,
                    iO(
                        100,
                        iC(
                            iR(D / (n * w), 2) +
                                iR(L / (r * M), 2) +
                                iR(b / (i * P), 2) +
                                (L / (r * M)) * k * (b / (i * P)),
                        ),
                    ),
                );
            },
            iU = g,
            iG = function (e, t, n) {
                void 0 === n && (n = "lab"), (e = new iU(e)), (t = new iU(t));
                var r = e.get(n),
                    i = t.get(n),
                    s = 0;
                for (var a in r) {
                    var o = (r[a] || 0) - (i[a] || 0);
                    s += o * o;
                }
                return Math.sqrt(s);
            },
            iF = g,
            iV = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                try {
                    return new (Function.prototype.bind.apply(iF, [null].concat(e)))(), !0;
                } catch (e) {
                    return !1;
                }
            },
            iB = I,
            iH = rY,
            ij = {
                cool: function () {
                    return iH([iB.hsl(180, 1, 0.9), iB.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return iH(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
                },
            },
            iY = {
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
            iW = 0,
            iK = Object.keys(iY);
        iW < iK.length;
        iW += 1
    ) {
        var i$ = iK[iW];
        iY[i$.toLowerCase()] = iY[i$];
    }
    var iz = iY,
        iq = I;
    return (
        (iq.average = rF),
        (iq.bezier = rZ),
        (iq.blend = r8),
        (iq.cubehelix = io),
        (iq.mix = iq.interpolate = ro),
        (iq.random = i_),
        (iq.scale = rY),
        (iq.analyze = iT),
        (iq.contrast = iv),
        (iq.deltaE = ik),
        (iq.distance = iG),
        (iq.limits = iS),
        (iq.valid = iV),
        (iq.scales = ij),
        (iq.colors = t6),
        (iq.brewer = iz),
        iq
    );
});
