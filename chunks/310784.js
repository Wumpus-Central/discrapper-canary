!(function (t, n) {
    e.exports = n();
})(0, function () {
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
            a = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
        i < a.length;
        i += 1
    ) {
        var s = a[i];
        r["[object " + s + "]"] = s.toLowerCase();
    }
    var o = function (e) {
            return r[Object.prototype.toString.call(e)] || "object";
        },
        l = o,
        c = o,
        u = Math.PI,
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
                return "string" == c(e[t]) ? e[t].toLowerCase() : null;
            },
            TWOPI: 2 * u,
            PITHIRD: u / 3,
            DEG2RAD: u / 180,
            RAD2DEG: 180 / u,
        },
        f = {
            format: {},
            autodetect: [],
        },
        p = d.last,
        _ = d.clip_rgb,
        h = d.type,
        m = f,
        g = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = this;
            if ("object" === h(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var r = p(e),
                i = !1;
            if (!r) {
                (i = !0),
                    m.sorted ||
                        ((m.autodetect = m.autodetect.sort(function (e, t) {
                            return t.p - e.p;
                        })),
                        (m.sorted = !0));
                for (var a = 0, s = m.autodetect; a < s.length; a += 1) {
                    var o = s[a];
                    if ((r = o.test.apply(o, e))) break;
                }
            }
            if (m.format[r]) n._rgb = _(m.format[r].apply(null, i ? e : e.slice(0, -1)));
            else throw Error("unknown format: " + e);
            3 === n._rgb.length && n._rgb.push(1);
        };
    g.prototype.toString = function () {
        return "function" == h(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var E = g,
        b = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(b.Color, [null].concat(e)))();
        };
    (b.Color = E), (b.version = "2.4.2");
    var y = b,
        O = d.unpack,
        A = Math.max,
        v = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = O(e, "rgb"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = 1 - A((r /= 255), A((i /= 255), (a /= 255))),
                o = s < 1 ? 1 / (1 - s) : 0;
            return [(1 - r - s) * o, (1 - i - s) * o, (1 - a - s) * o, s];
        },
        S = d.unpack,
        I = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = S(e, "cmyk"))[0],
                r = e[1],
                i = e[2],
                a = e[3],
                s = e.length > 4 ? e[4] : 1;
            return 1 === a
                ? [0, 0, 0, s]
                : [
                      n >= 1 ? 0 : 255 * (1 - n) * (1 - a),
                      r >= 1 ? 0 : 255 * (1 - r) * (1 - a),
                      i >= 1 ? 0 : 255 * (1 - i) * (1 - a),
                      s,
                  ];
        },
        T = y,
        C = E,
        N = f,
        R = d.unpack,
        w = d.type,
        P = v;
    (C.prototype.cmyk = function () {
        return P(this._rgb);
    }),
        (T.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(C, [null].concat(e, ["cmyk"])))();
        }),
        (N.format.cmyk = I),
        N.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === w((e = R(e, "cmyk"))) && 4 === e.length) return "cmyk";
            },
        });
    var D = d.unpack,
        x = d.last,
        L = function (e) {
            return Math.round(100 * e) / 100;
        },
        j = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = D(e, "hsla"),
                r = x(e) || "lsa";
            return (
                (n[0] = L(n[0] || 0)),
                (n[1] = L(100 * n[1]) + "%"),
                (n[2] = L(100 * n[2]) + "%"),
                "hsla" === r || (n.length > 3 && n[3] < 1)
                    ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
                    : (n.length = 3),
                r + "(" + n.join(",") + ")"
            );
        },
        M = d.unpack,
        k = function () {
            for (var e, t, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = (n = M(n, "rgba"))[0],
                a = n[1],
                s = n[2],
                o = Math.min((i /= 255), (a /= 255), (s /= 255)),
                l = Math.max(i, a, s),
                c = (l + o) / 2;
            return (l === o ? ((e = 0), (t = NaN)) : (e = c < 0.5 ? (l - o) / (l + o) : (l - o) / (2 - l - o)),
            i == l
                ? (t = (a - s) / (l - o))
                : a == l
                  ? (t = 2 + (s - i) / (l - o))
                  : s == l && (t = 4 + (i - a) / (l - o)),
            (t *= 60) < 0 && (t += 360),
            n.length > 3 && void 0 !== n[3])
                ? [t, e, c, n[3]]
                : [t, e, c];
        },
        U = d.unpack,
        G = d.last,
        V = j,
        F = k,
        B = Math.round,
        H = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = U(e, "rgba"),
                r = G(e) || "rgb";
            return "hsl" == r.substr(0, 3)
                ? V(F(n), r)
                : ((n[0] = B(n[0])),
                  (n[1] = B(n[1])),
                  (n[2] = B(n[2])),
                  ("rgba" === r || (n.length > 3 && n[3] < 1)) && ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
                  r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
        },
        Y = d.unpack,
        W = Math.round,
        K = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var s = (i = Y(i, "hsl"))[0],
                o = i[1],
                l = i[2];
            if (0 === o) t = n = r = 255 * l;
            else {
                var c = [0, 0, 0],
                    u = [0, 0, 0],
                    d = l < 0.5 ? l * (1 + o) : l + o - l * o,
                    f = 2 * l - d,
                    p = s / 360;
                (c[0] = p + 1 / 3), (c[1] = p), (c[2] = p - 1 / 3);
                for (var _ = 0; _ < 3; _++)
                    c[_] < 0 && (c[_] += 1),
                        c[_] > 1 && (c[_] -= 1),
                        6 * c[_] < 1
                            ? (u[_] = f + (d - f) * 6 * c[_])
                            : 2 * c[_] < 1
                              ? (u[_] = d)
                              : 3 * c[_] < 2
                                ? (u[_] = f + (d - f) * (2 / 3 - c[_]) * 6)
                                : (u[_] = f);
                (t = (e = [W(255 * u[0]), W(255 * u[1]), W(255 * u[2])])[0]), (n = e[1]), (r = e[2]);
            }
            return i.length > 3 ? [t, n, r, i[3]] : [t, n, r, 1];
        },
        z = K,
        q = f,
        X = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        Z = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        Q = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        $ = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        J = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        ee = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        et = Math.round,
        en = function (e) {
            if (((e = e.toLowerCase().trim()), q.format.named))
                try {
                    return q.format.named(e);
                } catch (e) {}
            if ((t = e.match(X))) {
                for (var t, n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
                return (n[3] = 1), n;
            }
            if ((t = e.match(Z))) {
                for (var i = t.slice(1, 5), a = 0; a < 4; a++) i[a] = +i[a];
                return i;
            }
            if ((t = e.match(Q))) {
                for (var s = t.slice(1, 4), o = 0; o < 3; o++) s[o] = et(2.55 * s[o]);
                return (s[3] = 1), s;
            }
            if ((t = e.match($))) {
                for (var l = t.slice(1, 5), c = 0; c < 3; c++) l[c] = et(2.55 * l[c]);
                return (l[3] = +l[3]), l;
            }
            if ((t = e.match(J))) {
                var u = t.slice(1, 4);
                (u[1] *= 0.01), (u[2] *= 0.01);
                var d = z(u);
                return (d[3] = 1), d;
            }
            if ((t = e.match(ee))) {
                var f = t.slice(1, 4);
                (f[1] *= 0.01), (f[2] *= 0.01);
                var p = z(f);
                return (p[3] = +t[4]), p;
            }
        };
    en.test = function (e) {
        return X.test(e) || Z.test(e) || Q.test(e) || $.test(e) || J.test(e) || ee.test(e);
    };
    var er = en,
        ei = y,
        ea = E,
        es = f,
        eo = d.type,
        el = H,
        ec = er;
    (ea.prototype.css = function (e) {
        return el(this._rgb, e);
    }),
        (ei.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ea, [null].concat(e, ["css"])))();
        }),
        (es.format.css = ec),
        es.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === eo(e) && ec.test(e)) return "css";
            },
        });
    var eu = E,
        ed = y,
        ef = f,
        ep = d.unpack;
    (ef.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = ep(e, "rgba");
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n;
    }),
        (ed.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eu, [null].concat(e, ["gl"])))();
        }),
        (eu.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
    var e_ = d.unpack,
        eh = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = e_(t, "rgb"),
                i = r[0],
                a = r[1],
                s = r[2],
                o = Math.min(i, a, s),
                l = Math.max(i, a, s),
                c = l - o,
                u = (100 * c) / 255,
                d = (o / (255 - c)) * 100;
            return (
                0 === c
                    ? (e = NaN)
                    : (i === l && (e = (a - s) / c),
                      a === l && (e = 2 + (s - i) / c),
                      s === l && (e = 4 + (i - a) / c),
                      (e *= 60) < 0 && (e += 360)),
                [e, u, d]
            );
        },
        em = d.unpack,
        eg = Math.floor,
        eE = function () {
            for (var e, t, n, r, i, a, s, o, l, c = [], u = arguments.length; u--; ) c[u] = arguments[u];
            var d = (c = em(c, "hcg"))[0],
                f = c[1],
                p = c[2];
            p *= 255;
            var _ = 255 * f;
            if (0 === f) s = o = l = p;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var h = eg((d /= 60)),
                    m = d - h,
                    g = p * (1 - f),
                    E = g + _ * (1 - m),
                    b = g + _ * m,
                    y = g + _;
                switch (h) {
                    case 0:
                        (s = (e = [y, b, g])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (s = (t = [E, y, g])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (s = (n = [g, y, b])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (s = (r = [g, E, y])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (s = (i = [b, g, y])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (s = (a = [y, g, E])[0]), (o = a[1]), (l = a[2]);
                }
            }
            return [s, o, l, c.length > 3 ? c[3] : 1];
        },
        eb = d.unpack,
        ey = d.type,
        eO = y,
        eA = E,
        ev = f,
        eS = eh;
    (eA.prototype.hcg = function () {
        return eS(this._rgb);
    }),
        (eO.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eA, [null].concat(e, ["hcg"])))();
        }),
        (ev.format.hcg = eE),
        ev.autodetect.push({
            p: 1,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === ey((e = eb(e, "hcg"))) && 3 === e.length) return "hcg";
            },
        });
    var eI = d.unpack,
        eT = d.last,
        eC = Math.round,
        eN = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eI(e, "rgba"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = n[3],
                o = eT(e) || "auto";
            void 0 === s && (s = 1), "auto" === o && (o = s < 1 ? "rgba" : "rgb"), (r = eC(r));
            var l = "000000" + ((r << 16) | ((i = eC(i)) << 8) | (a = eC(a))).toString(16);
            l = l.substr(l.length - 6);
            var c = "0" + eC(255 * s).toString(16);
            switch (((c = c.substr(c.length - 2)), o.toLowerCase())) {
                case "rgba":
                    return "#" + l + c;
                case "argb":
                    return "#" + c + l;
                default:
                    return "#" + l;
            }
        },
        eR = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        ew = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        eP = function (e) {
            if (e.match(eR)) {
                (4 === e.length || 7 === e.length) && (e = e.substr(1)),
                    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e, 16);
                return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(ew)) {
                (5 === e.length || 9 === e.length) && (e = e.substr(1)),
                    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var n = parseInt(e, 16);
                return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, Math.round(((255 & n) / 255) * 100) / 100];
            }
            throw Error("unknown hex color: " + e);
        },
        eD = y,
        ex = E,
        eL = d.type,
        ej = f,
        eM = eN;
    (ex.prototype.hex = function (e) {
        return eM(this._rgb, e);
    }),
        (eD.hex = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ex, [null].concat(e, ["hex"])))();
        }),
        (ej.format.hex = eP),
        ej.autodetect.push({
            p: 4,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === eL(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex";
            },
        });
    var ek = d.unpack,
        eU = d.TWOPI,
        eG = Math.min,
        eV = Math.sqrt,
        eF = Math.acos,
        eB = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = ek(t, "rgb"),
                i = r[0],
                a = r[1],
                s = r[2],
                o = eG((i /= 255), (a /= 255), (s /= 255)),
                l = (i + a + s) / 3,
                c = l > 0 ? 1 - o / l : 0;
            return (
                0 === c
                    ? (e = NaN)
                    : ((e = eF((e = (i - a + (i - s)) / 2 / eV((i - a) * (i - a) + (i - s) * (a - s))))),
                      s > a && (e = eU - e),
                      (e /= eU)),
                [360 * e, c, l]
            );
        },
        eH = d.unpack,
        eY = d.limit,
        eW = d.TWOPI,
        eK = d.PITHIRD,
        ez = Math.cos,
        eq = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = eH(r, "hsi"))[0],
                s = r[1],
                o = r[2];
            return (
                isNaN(a) && (a = 0),
                isNaN(s) && (s = 0),
                a > 360 && (a -= 360),
                a < 0 && (a += 360),
                (a /= 360) < 1 / 3
                    ? (t = 1 - ((n = (1 - s) / 3) + (e = (1 + (s * ez(eW * a)) / ez(eK - eW * a)) / 3)))
                    : a < 2 / 3
                      ? ((a -= 1 / 3),
                        (n = 1 - ((e = (1 - s) / 3) + (t = (1 + (s * ez(eW * a)) / ez(eK - eW * a)) / 3))))
                      : ((a -= 2 / 3),
                        (e = 1 - ((t = (1 - s) / 3) + (n = (1 + (s * ez(eW * a)) / ez(eK - eW * a)) / 3)))),
                (e = eY(o * e * 3)),
                [255 * e, 255 * (t = eY(o * t * 3)), 255 * (n = eY(o * n * 3)), r.length > 3 ? r[3] : 1]
            );
        },
        eX = d.unpack,
        eZ = d.type,
        eQ = y,
        e$ = E,
        eJ = f,
        e0 = eB;
    (e$.prototype.hsi = function () {
        return e0(this._rgb);
    }),
        (eQ.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(e$, [null].concat(e, ["hsi"])))();
        }),
        (eJ.format.hsi = eq),
        eJ.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eZ((e = eX(e, "hsi"))) && 3 === e.length) return "hsi";
            },
        });
    var e1 = d.unpack,
        e2 = d.type,
        e3 = y,
        e6 = E,
        e4 = f,
        e5 = k;
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
            var a = (r = e7(r, "rgb"))[0],
                s = r[1],
                o = r[2],
                l = e8(a, s, o),
                c = e9(a, s, o),
                u = c - l;
            return (
                (n = c / 255),
                0 === c
                    ? ((e = NaN), (t = 0))
                    : ((t = u / c),
                      a === c && (e = (s - o) / u),
                      s === c && (e = 2 + (o - a) / u),
                      o === c && (e = 4 + (a - s) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, t, n]
            );
        },
        tt = d.unpack,
        tn = Math.floor,
        tr = function () {
            for (var e, t, n, r, i, a, s, o, l, c = [], u = arguments.length; u--; ) c[u] = arguments[u];
            var d = (c = tt(c, "hsv"))[0],
                f = c[1],
                p = c[2];
            if (((p *= 255), 0 === f)) s = o = l = p;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var _ = tn((d /= 60)),
                    h = d - _,
                    m = p * (1 - f),
                    g = p * (1 - f * h),
                    E = p * (1 - f * (1 - h));
                switch (_) {
                    case 0:
                        (s = (e = [p, E, m])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (s = (t = [g, p, m])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (s = (n = [m, p, E])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (s = (r = [m, g, p])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (s = (i = [E, m, p])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (s = (a = [p, m, g])[0]), (o = a[1]), (l = a[2]);
                }
            }
            return [s, o, l, c.length > 3 ? c[3] : 1];
        },
        ti = d.unpack,
        ta = d.type,
        ts = y,
        to = E,
        tl = f,
        tc = te;
    (to.prototype.hsv = function () {
        return tc(this._rgb);
    }),
        (ts.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(to, [null].concat(e, ["hsv"])))();
        }),
        (tl.format.hsv = tr),
        tl.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === ta((e = ti(e, "hsv"))) && 3 === e.length) return "hsv";
            },
        });
    var tu = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452,
        },
        td = tu,
        tf = d.unpack,
        tp = Math.pow,
        t_ = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : tp((e + 0.055) / 1.055, 2.4);
        },
        th = function (e) {
            return e > td.t3 ? tp(e, 1 / 3) : e / td.t2 + td.t0;
        },
        tm = function (e, t, n) {
            return (
                (e = t_(e)),
                [
                    th((0.4124564 * e + 0.3575761 * (t = t_(t)) + 0.1804375 * (n = t_(n))) / td.Xn),
                    th((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / td.Yn),
                    th((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / td.Zn),
                ]
            );
        },
        tg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tf(e, "rgb"),
                r = tm(n[0], n[1], n[2]),
                i = r[0],
                a = r[1],
                s = r[2],
                o = 116 * a - 16;
            return [o < 0 ? 0 : o, 500 * (i - a), 200 * (a - s)];
        },
        tE = tu,
        tb = d.unpack,
        ty = Math.pow,
        tO = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * ty(e, 1 / 2.4) - 0.055);
        },
        tA = function (e) {
            return e > tE.t1 ? e * e * e : tE.t2 * (e - tE.t0);
        },
        tv = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var s = (i = tb(i, "lab"))[0],
                o = i[1],
                l = i[2];
            return (
                (t = (s + 16) / 116),
                (e = isNaN(o) ? t : t + o / 500),
                (n = isNaN(l) ? t : t - l / 200),
                (t = tE.Yn * tA(t)),
                (r = tO(3.2404542 * (e = tE.Xn * tA(e)) - 1.5371385 * t - 0.4985314 * (n = tE.Zn * tA(n)))),
                [
                    r,
                    tO(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
                    tO(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
                    i.length > 3 ? i[3] : 1,
                ]
            );
        },
        tS = d.unpack,
        tI = d.type,
        tT = y,
        tC = E,
        tN = f,
        tR = tg;
    (tC.prototype.lab = function () {
        return tR(this._rgb);
    }),
        (tT.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(tC, [null].concat(e, ["lab"])))();
        }),
        (tN.format.lab = tv),
        tN.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === tI((e = tS(e, "lab"))) && 3 === e.length) return "lab";
            },
        });
    var tw = d.unpack,
        tP = d.RAD2DEG,
        tD = Math.sqrt,
        tx = Math.atan2,
        tL = Math.round,
        tj = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tw(e, "lab"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = tD(i * i + a * a),
                o = (tx(a, i) * tP + 360) % 360;
            return 0 === tL(10000 * s) && (o = NaN), [r, s, o];
        },
        tM = d.unpack,
        tk = tg,
        tU = tj,
        tG = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tM(e, "rgb"),
                r = tk(n[0], n[1], n[2]);
            return tU(r[0], r[1], r[2]);
        },
        tV = d.unpack,
        tF = d.DEG2RAD,
        tB = Math.sin,
        tH = Math.cos,
        tY = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tV(e, "lch"),
                r = n[0],
                i = n[1],
                a = n[2];
            return isNaN(a) && (a = 0), [r, tH((a *= tF)) * i, tB(a) * i];
        },
        tW = d.unpack,
        tK = tY,
        tz = tv,
        tq = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tK((e = tW(e, "lch"))[0], e[1], e[2]),
                r = tz(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        tX = d.unpack,
        tZ = tq,
        tQ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tX(e, "hcl").reverse();
            return tZ.apply(void 0, n);
        },
        t$ = d.unpack,
        tJ = d.type,
        t0 = y,
        t1 = E,
        t2 = f,
        t3 = tG;
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
        (t2.format.lch = tq),
        (t2.format.hcl = tQ),
        ["lch", "hcl"].forEach(function (e) {
            return t2.autodetect.push({
                p: 2,
                test: function () {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    if ("array" === tJ((t = t$(t, e))) && 3 === t.length) return e;
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
        t4 = E,
        t5 = f,
        t7 = d.type,
        t8 = t6,
        t9 = eP,
        ne = eN;
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
            if ("number" == nr(e) && e >= 0 && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw Error("unknown num color: " + e);
        },
        na = y,
        ns = E,
        no = f,
        nl = d.type,
        nc = nn;
    (ns.prototype.num = function () {
        return nc(this._rgb);
    }),
        (na.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ns, [null].concat(e, ["num"])))();
        }),
        (no.format.num = ni),
        no.autodetect.push({
            p: 5,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (1 === e.length && "number" === nl(e[0]) && e[0] >= 0 && e[0] <= 16777215) return "num";
            },
        });
    var nu = y,
        nd = E,
        nf = f,
        np = d.unpack,
        n_ = d.type,
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
        (nu.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nd, [null].concat(e, ["rgb"])))();
        }),
        (nf.format.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = np(e, "rgba");
            return void 0 === n[3] && (n[3] = 1), n;
        }),
        nf.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (
                    "array" === n_((e = np(e, "rgba"))) &&
                    (3 === e.length || (4 === e.length && "number" == n_(e[3]) && e[3] >= 0 && e[3] <= 1))
                )
                    return "rgb";
            },
        });
    var nm = Math.log,
        ng = function (e) {
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
        nE = ng,
        nb = d.unpack,
        ny = Math.round,
        nO = y,
        nA = E,
        nv = f,
        nS = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            for (var r = nb(t, "rgb"), i = r[0], a = r[2], s = 1000, o = 40000, l = 0.4; o - s > l; ) {
                var c = nE((e = (o + s) * 0.5));
                c[2] / c[0] >= a / i ? (o = e) : (s = e);
            }
            return ny(e);
        };
    (nA.prototype.temp =
        nA.prototype.kelvin =
        nA.prototype.temperature =
            function () {
                return nS(this._rgb);
            }),
        (nO.temp =
            nO.kelvin =
            nO.temperature =
                function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(nA, [null].concat(e, ["temp"])))();
                }),
        (nv.format.temp = nv.format.kelvin = nv.format.temperature = ng);
    var nI = d.unpack,
        nT = Math.cbrt,
        nC = Math.pow,
        nN = Math.sign,
        nR = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nI(e, "rgb"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = [nw(r / 255), nw(i / 255), nw(a / 255)],
                o = s[0],
                l = s[1],
                c = s[2],
                u = nT(0.4122214708 * o + 0.5363325363 * l + 0.0514459929 * c),
                d = nT(0.2119034982 * o + 0.6806995451 * l + 0.1073969566 * c),
                f = nT(0.0883024619 * o + 0.2817188376 * l + 0.6299787005 * c);
            return [
                0.2104542553 * u + 0.793617785 * d - 0.0040720468 * f,
                1.9779984951 * u - 2.428592205 * d + 0.4505937099 * f,
                0.0259040371 * u + 0.7827717662 * d - 0.808675766 * f,
            ];
        };
    function nw(e) {
        var t = Math.abs(e);
        return t < 0.04045 ? e / 12.92 : (nN(e) || 1) * nC((t + 0.055) / 1.055, 2.4);
    }
    var nP = d.unpack,
        nD = Math.pow,
        nx = Math.sign,
        nL = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = nP(e, "lab"))[0],
                r = e[1],
                i = e[2],
                a = nD(n + 0.3963377774 * r + 0.2158037573 * i, 3),
                s = nD(n - 0.1055613458 * r - 0.0638541728 * i, 3),
                o = nD(n - 0.0894841775 * r - 1.291485548 * i, 3);
            return [
                255 * nj(4.0767416621 * a - 3.3077115913 * s + 0.2309699292 * o),
                255 * nj(-1.2684380046 * a + 2.6097574011 * s - 0.3413193965 * o),
                255 * nj(-0.0041960863 * a - 0.7034186147 * s + 1.707614701 * o),
                e.length > 3 ? e[3] : 1,
            ];
        };
    function nj(e) {
        var t = Math.abs(e);
        return t > 0.0031308 ? (nx(e) || 1) * (1.055 * nD(t, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var nM = d.unpack,
        nk = d.type,
        nU = y,
        nG = E,
        nV = f,
        nF = nR;
    (nG.prototype.oklab = function () {
        return nF(this._rgb);
    }),
        (nU.oklab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nG, [null].concat(e, ["oklab"])))();
        }),
        (nV.format.oklab = nL),
        nV.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nk((e = nM(e, "oklab"))) && 3 === e.length) return "oklab";
            },
        });
    var nB = d.unpack,
        nH = nR,
        nY = tj,
        nW = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nB(e, "rgb"),
                r = nH(n[0], n[1], n[2]);
            return nY(r[0], r[1], r[2]);
        },
        nK = d.unpack,
        nz = tY,
        nq = nL,
        nX = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nz((e = nK(e, "lch"))[0], e[1], e[2]),
                r = nq(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        nZ = d.unpack,
        nQ = d.type,
        n$ = y,
        nJ = E,
        n0 = f,
        n1 = nW;
    (nJ.prototype.oklch = function () {
        return n1(this._rgb);
    }),
        (n$.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nJ, [null].concat(e, ["oklch"])))();
        }),
        (n0.format.oklch = nX),
        n0.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nQ((e = nZ(e, "oklch"))) && 3 === e.length) return "oklch";
            },
        });
    var n2 = E,
        n3 = d.type;
    (n2.prototype.alpha = function (e, t) {
        return (void 0 === t && (t = !1), void 0 !== e && "number" === n3(e))
            ? t
                ? ((this._rgb[3] = e), this)
                : new n2([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3];
    }),
        (E.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        });
    var n6 = E,
        n4 = tu;
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
        (E.prototype.get = function (e) {
            var t = e.split("."),
                n = t[0],
                r = t[1],
                i = this[n]();
            if (!r) return i;
            var a = n.indexOf(r) - 2 * ("ok" === n.substr(0, 2));
            if (a > -1) return i[a];
            throw Error("unknown channel " + r + " in mode " + n);
        });
    var n5 = E,
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
                i = function (t, a) {
                    var s = t.interpolate(a, 0.5, n),
                        o = s.luminance();
                    return !(Math.abs(e - o) < n9) && r-- ? (o > e ? i(t, s) : i(s, a)) : s;
                },
                a = (t > e ? i(new n5([0, 0, 0]), this) : i(this, new n5([255, 255, 255]))).rgb();
            return new n5(a.concat([this._rgb[3]]));
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
        ri = E,
        ra = d.type,
        rs = rr,
        ro = function (e, t, n) {
            void 0 === n && (n = 0.5);
            for (var r = [], i = arguments.length - 3; i-- > 0; ) r[i] = arguments[i + 3];
            var a = r[0] || "lrgb";
            if ((rs[a] || r.length || (a = Object.keys(rs)[0]), !rs[a]))
                throw Error("interpolation mode " + a + " is not defined");
            return (
                "object" !== ra(e) && (e = new ri(e)),
                "object" !== ra(t) && (t = new ri(t)),
                rs[a](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
            );
        },
        rl = E,
        rc = ro;
    rl.prototype.mix = rl.prototype.interpolate = function (e, t) {
        void 0 === t && (t = 0.5);
        for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
        return rc.apply(void 0, [this, e, t].concat(n));
    };
    var ru = E;
    ru.prototype.premultiply = function (e) {
        void 0 === e && (e = !1);
        var t = this._rgb,
            n = t[3];
        return e
            ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
            : new ru([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
    };
    var rd = E,
        rf = tu;
    (rd.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var t = this,
            n = t.lch();
        return (n[1] += rf.Kn * e), n[1] < 0 && (n[1] = 0), new rd(n, "lch").alpha(t.alpha(), !0);
    }),
        (rd.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
        });
    var rp = E,
        r_ = d.type;
    rp.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.split("."),
            i = r[0],
            a = r[1],
            s = this[i]();
        if (!a) return s;
        var o = i.indexOf(a) - 2 * ("ok" === i.substr(0, 2));
        if (o > -1) {
            if ("string" == r_(t))
                switch (t.charAt(0)) {
                    case "+":
                    case "-":
                        s[o] += +t;
                        break;
                    case "*":
                        s[o] *= t.substr(1);
                        break;
                    case "/":
                        s[o] /= t.substr(1);
                        break;
                    default:
                        s[o] = +t;
                }
            else if ("number" === r_(t)) s[o] = t;
            else throw Error("unsupported value for Color.set");
            var l = new rp(s, i);
            return n ? ((this._rgb = l._rgb), this) : l;
        }
        throw Error("unknown channel " + a + " in mode " + i);
    };
    var rh = E;
    rr.rgb = function (e, t, n) {
        var r = e._rgb,
            i = t._rgb;
        return new rh(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb");
    };
    var rm = E,
        rg = Math.sqrt,
        rE = Math.pow;
    rr.lrgb = function (e, t, n) {
        var r = e._rgb,
            i = r[0],
            a = r[1],
            s = r[2],
            o = t._rgb,
            l = o[0],
            c = o[1],
            u = o[2];
        return new rm(
            rg(rE(i, 2) * (1 - n) + rE(l, 2) * n),
            rg(rE(a, 2) * (1 - n) + rE(c, 2) * n),
            rg(rE(s, 2) * (1 - n) + rE(u, 2) * n),
            "rgb",
        );
    };
    var rb = E;
    rr.lab = function (e, t, n) {
        var r = e.lab(),
            i = t.lab();
        return new rb(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab");
    };
    var ry = E,
        rO = function (e, t, n, r) {
            var i, a, s, o, l, c, u, d, f, p, _, h, m, g;
            return (
                "hsl" === r
                    ? ((s = e.hsl()), (o = t.hsl()))
                    : "hsv" === r
                      ? ((s = e.hsv()), (o = t.hsv()))
                      : "hcg" === r
                        ? ((s = e.hcg()), (o = t.hcg()))
                        : "hsi" === r
                          ? ((s = e.hsi()), (o = t.hsi()))
                          : "lch" === r || "hcl" === r
                            ? ((r = "hcl"), (s = e.hcl()), (o = t.hcl()))
                            : "oklch" === r && ((s = e.oklch().reverse()), (o = t.oklch().reverse())),
                ("h" === r.substr(0, 1) || "oklch" === r) &&
                    ((l = (i = s)[0]), (u = i[1]), (f = i[2]), (c = (a = o)[0]), (d = a[1]), (p = a[2])),
                isNaN(l) || isNaN(c)
                    ? isNaN(l)
                        ? isNaN(c)
                            ? (h = NaN)
                            : ((h = c), (1 == f || 0 == f) && "hsv" != r && (_ = d))
                        : ((h = l), (1 == p || 0 == p) && "hsv" != r && (_ = u))
                    : ((g = c > l && c - l > 180 ? c - (l + 360) : c < l && l - c > 180 ? c + 360 - l : c - l),
                      (h = l + n * g)),
                void 0 === _ && (_ = u + n * (d - u)),
                (m = f + n * (p - f)),
                "oklch" === r ? new ry([m, _, h], r) : new ry([h, _, m], r)
            );
        },
        rA = rO,
        rv = function (e, t, n) {
            return rA(e, t, n, "lch");
        };
    (rr.lch = rv), (rr.hcl = rv);
    var rS = E;
    rr.num = function (e, t, n) {
        var r = e.num();
        return new rS(r + n * (t.num() - r), "num");
    };
    var rI = rO;
    rr.hcg = function (e, t, n) {
        return rI(e, t, n, "hcg");
    };
    var rT = rO;
    rr.hsi = function (e, t, n) {
        return rT(e, t, n, "hsi");
    };
    var rC = rO;
    rr.hsl = function (e, t, n) {
        return rC(e, t, n, "hsl");
    };
    var rN = rO;
    rr.hsv = function (e, t, n) {
        return rN(e, t, n, "hsv");
    };
    var rR = E;
    rr.oklab = function (e, t, n) {
        var r = e.oklab(),
            i = t.oklab();
        return new rR(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab");
    };
    var rw = rO;
    rr.oklch = function (e, t, n) {
        return rw(e, t, n, "oklch");
    };
    var rP = E,
        rD = d.clip_rgb,
        rx = Math.pow,
        rL = Math.sqrt,
        rj = Math.PI,
        rM = Math.cos,
        rk = Math.sin,
        rU = Math.atan2,
        rG = function (e, t, n) {
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
                    return new rP(e);
                })),
                "lrgb" === t)
            )
                return rV(e, n);
            for (var a = e.shift(), s = a.get(t), o = [], l = 0, c = 0, u = 0; u < s.length; u++)
                if (
                    ((s[u] = (s[u] || 0) * n[0]), o.push(isNaN(s[u]) ? 0 : n[0]), "h" === t.charAt(u) && !isNaN(s[u]))
                ) {
                    var d = (s[u] / 180) * rj;
                    (l += rM(d) * n[0]), (c += rk(d) * n[0]);
                }
            var f = a.alpha() * n[0];
            e.forEach(function (e, r) {
                var i = e.get(t);
                f += e.alpha() * n[r + 1];
                for (var a = 0; a < s.length; a++)
                    if (!isNaN(i[a]))
                        if (((o[a] += n[r + 1]), "h" === t.charAt(a))) {
                            var u = (i[a] / 180) * rj;
                            (l += rM(u) * n[r + 1]), (c += rk(u) * n[r + 1]);
                        } else s[a] += i[a] * n[r + 1];
            });
            for (var p = 0; p < s.length; p++)
                if ("h" === t.charAt(p)) {
                    for (var _ = (rU(c / o[p], l / o[p]) / rj) * 180; _ < 0; ) _ += 360;
                    for (; _ >= 360; ) _ -= 360;
                    s[p] = _;
                } else s[p] = s[p] / o[p];
            return (f /= r), new rP(s, t).alpha(f > 0.99999 ? 1 : f, !0);
        },
        rV = function (e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], i = 0; i < e.length; i++) {
                var a = e[i],
                    s = t[i] / n,
                    o = a._rgb;
                (r[0] += rx(o[0], 2) * s), (r[1] += rx(o[1], 2) * s), (r[2] += rx(o[2], 2) * s), (r[3] += o[3] * s);
            }
            return (
                (r[0] = rL(r[0])), (r[1] = rL(r[1])), (r[2] = rL(r[2])), r[3] > 0.9999999 && (r[3] = 1), new rP(rD(r))
            );
        },
        rF = y,
        rB = d.type,
        rH = Math.pow,
        rY = function (e) {
            var t = "rgb",
                n = rF("#ccc"),
                r = 0,
                i = [0, 1],
                a = [],
                s = [0, 0],
                o = !1,
                l = [],
                c = !1,
                u = 0,
                d = 1,
                f = !1,
                p = {},
                _ = !0,
                h = 1,
                m = function (e) {
                    if (
                        ("string" === rB((e = e || ["#fff", "#000"])) &&
                            rF.brewer &&
                            rF.brewer[e.toLowerCase()] &&
                            (e = rF.brewer[e.toLowerCase()]),
                        "array" === rB(e))
                    ) {
                        1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                        for (var t = 0; t < e.length; t++) e[t] = rF(e[t]);
                        a.length = 0;
                        for (var n = 0; n < e.length; n++) a.push(n / (e.length - 1));
                    }
                    return O(), (l = e);
                },
                g = function (e) {
                    if (null != o) {
                        for (var t = o.length - 1, n = 0; n < t && e >= o[n]; ) n++;
                        return n - 1;
                    }
                    return 0;
                },
                E = function (e) {
                    return e;
                },
                b = function (e) {
                    return e;
                },
                y = function (e, r) {
                    if ((null == r && (r = !1), isNaN(e) || null === e)) return n;
                    if (r) c = e;
                    else if (o && o.length > 2) {
                        var i, c;
                        c = g(e) / (o.length - 2);
                    } else c = d !== u ? (e - u) / (d - u) : 1;
                    (c = b(c)), r || (c = E(c)), 1 !== h && (c = rH(c, h));
                    var f = Math.floor(10000 * (c = Math.min(1, Math.max(0, (c = s[0] + c * (1 - s[0] - s[1]))))));
                    if (_ && p[f]) i = p[f];
                    else {
                        if ("array" === rB(l))
                            for (var m = 0; m < a.length; m++) {
                                var y = a[m];
                                if (c <= y || (c >= y && m === a.length - 1)) {
                                    i = l[m];
                                    break;
                                }
                                if (c > y && c < a[m + 1]) {
                                    (c = (c - y) / (a[m + 1] - y)), (i = rF.interpolate(l[m], l[m + 1], c, t));
                                    break;
                                }
                            }
                        else "function" === rB(l) && (i = l(c));
                        _ && (p[f] = i);
                    }
                    return i;
                },
                O = function () {
                    return (p = {});
                };
            m(e);
            var A = function (e) {
                var t = rF(y(e));
                return c && t[c] ? t[c]() : t;
            };
            return (
                (A.classes = function (e) {
                    if (null != e) {
                        if ("array" === rB(e)) (o = e), (i = [e[0], e[e.length - 1]]);
                        else {
                            var t = rF.analyze(i);
                            o = 0 === e ? [t.min, t.max] : rF.limits(t, "e", e);
                        }
                        return A;
                    }
                    return o;
                }),
                (A.domain = function (e) {
                    if (!arguments.length) return i;
                    (u = e[0]), (d = e[e.length - 1]), (a = []);
                    var t = l.length;
                    if (e.length === t && u !== d)
                        for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                            var s = r[n];
                            a.push((s - u) / (d - u));
                        }
                    else {
                        for (var o = 0; o < t; o++) a.push(o / (t - 1));
                        if (e.length > 2) {
                            var c = e.map(function (t, n) {
                                    return n / (e.length - 1);
                                }),
                                f = e.map(function (e) {
                                    return (e - u) / (d - u);
                                });
                            f.every(function (e, t) {
                                return c[t] === e;
                            }) ||
                                (b = function (e) {
                                    if (e <= 0 || e >= 1) return e;
                                    for (var t = 0; e >= f[t + 1]; ) t++;
                                    var n = (e - f[t]) / (f[t + 1] - f[t]);
                                    return c[t] + n * (c[t + 1] - c[t]);
                                });
                        }
                    }
                    return (i = [u, d]), A;
                }),
                (A.mode = function (e) {
                    return arguments.length ? ((t = e), O(), A) : t;
                }),
                (A.range = function (e, t) {
                    return m(e), A;
                }),
                (A.out = function (e) {
                    return (c = e), A;
                }),
                (A.spread = function (e) {
                    return arguments.length ? ((r = e), A) : r;
                }),
                (A.correctLightness = function (e) {
                    return (
                        null == e && (e = !0),
                        (f = e),
                        O(),
                        (E = f
                            ? function (e) {
                                  for (
                                      var t = y(0, !0).lab()[0],
                                          n = y(1, !0).lab()[0],
                                          r = t > n,
                                          i = y(e, !0).lab()[0],
                                          a = t + (n - t) * e,
                                          s = i - a,
                                          o = 0,
                                          l = 1,
                                          c = 20;
                                      Math.abs(s) > 0.01 && c-- > 0;
                                  )
                                      !(function () {
                                          r && (s *= -1),
                                              s < 0 ? ((o = e), (e += (l - e) * 0.5)) : ((l = e), (e += (o - e) * 0.5)),
                                              (s = (i = y(e, !0).lab()[0]) - a);
                                      })();
                                  return e;
                              }
                            : function (e) {
                                  return e;
                              }),
                        A
                    );
                }),
                (A.padding = function (e) {
                    return null != e ? ("number" === rB(e) && (e = [e, e]), (s = e), A) : s;
                }),
                (A.colors = function (t, n) {
                    arguments.length < 2 && (n = "hex");
                    var r = [];
                    if (0 == arguments.length) r = l.slice(0);
                    else if (1 === t) r = [A(0.5)];
                    else if (t > 1) {
                        var a = i[0],
                            s = i[1] - a;
                        r = rW(0, t, !1).map(function (e) {
                            return A(a + (e / (t - 1)) * s);
                        });
                    } else {
                        e = [];
                        var c = [];
                        if (o && o.length > 2)
                            for (var u = 1, d = o.length, f = 1 <= d; f ? u < d : u > d; f ? u++ : u--)
                                c.push((o[u - 1] + o[u]) * 0.5);
                        else c = i;
                        r = c.map(function (e) {
                            return A(e);
                        });
                    }
                    return (
                        rF[n] &&
                            (r = r.map(function (e) {
                                return e[n]();
                            })),
                        r
                    );
                }),
                (A.cache = function (e) {
                    return null != e ? ((_ = e), A) : _;
                }),
                (A.gamma = function (e) {
                    return null != e ? ((h = e), A) : h;
                }),
                (A.nodata = function (e) {
                    return null != e ? ((n = rF(e)), A) : n;
                }),
                A
            );
        };
    function rW(e, t, n) {
        for (var r = [], i = e < t, a = n ? (i ? t + 1 : t - 1) : t, s = e; i ? s < a : s > a; i ? s++ : s--) r.push(s);
        return r;
    }
    var rK = E,
        rz = rY,
        rq = function (e) {
            for (var t = [1, 1], n = 1; n < e; n++) {
                for (var r = [1], i = 1; i <= t.length; i++) r[i] = (t[i] || 0) + t[i - 1];
                t = r;
            }
            return t;
        },
        rX = function (e) {
            var t, n, r, i, a, s, o, l, c, u, d;
            if (
                2 ===
                (e = e.map(function (e) {
                    return new rK(e);
                })).length
            )
                (a = (t = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (s = t[1]),
                    (i = function (e) {
                        return new rK(
                            [0, 1, 2].map(function (t) {
                                return a[t] + e * (s[t] - a[t]);
                            }),
                            "lab",
                        );
                    });
            else if (3 === e.length)
                (a = (n = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (s = n[1]),
                    (o = n[2]),
                    (i = function (e) {
                        return new rK(
                            [0, 1, 2].map(function (t) {
                                return (1 - e) * (1 - e) * a[t] + 2 * (1 - e) * e * s[t] + e * e * o[t];
                            }),
                            "lab",
                        );
                    });
            else if (4 === e.length)
                (a = (r = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (s = r[1]),
                    (o = r[2]),
                    (l = r[3]),
                    (i = function (e) {
                        return new rK(
                            [0, 1, 2].map(function (t) {
                                return (
                                    (1 - e) * (1 - e) * (1 - e) * a[t] +
                                    3 * (1 - e) * (1 - e) * e * s[t] +
                                    3 * (1 - e) * e * e * o[t] +
                                    e * e * e * l[t]
                                );
                            }),
                            "lab",
                        );
                    });
            else if (e.length >= 5)
                (c = e.map(function (e) {
                    return e.lab();
                })),
                    (u = rq((d = e.length - 1))),
                    (i = function (e) {
                        var t = 1 - e;
                        return new rK(
                            [0, 1, 2].map(function (n) {
                                return c.reduce(function (r, i, a) {
                                    return r + u[a] * Math.pow(t, d - a) * Math.pow(e, a) * i[n];
                                }, 0);
                            }),
                            "lab",
                        );
                    });
            else throw RangeError("No point in running bezier with only one color.");
            return i;
        },
        rZ = function (e) {
            var t = rX(e);
            return (
                (t.scale = function () {
                    return rz(t);
                }),
                t
            );
        },
        rQ = y,
        r$ = function (e, t, n) {
            if (!r$[n]) throw Error("unknown blend mode " + n);
            return r$[n](e, t);
        },
        rJ = function (e) {
            return function (t, n) {
                var r = rQ(n).rgb(),
                    i = rQ(t).rgb();
                return rQ.rgb(e(r, i));
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
    (r$.normal = rJ(
        r0(function (e) {
            return e;
        }),
    )),
        (r$.multiply = rJ(r0(r1))),
        (r$.screen = rJ(r0(r6))),
        (r$.overlay = rJ(r0(r4))),
        (r$.darken = rJ(r0(r2))),
        (r$.lighten = rJ(r0(r3))),
        (r$.dodge = rJ(r0(r7))),
        (r$.burn = rJ(r0(r5)));
    for (
        var r8 = r$,
            r9 = d.type,
            ie = d.clip_rgb,
            it = d.TWOPI,
            ir = Math.pow,
            ii = Math.sin,
            ia = Math.cos,
            is = y,
            io = function (e, t, n, r, i) {
                void 0 === e && (e = 300),
                    void 0 === t && (t = -1.5),
                    void 0 === n && (n = 1),
                    void 0 === r && (r = 1),
                    void 0 === i && (i = [0, 1]);
                var a,
                    s = 0;
                "array" === r9(i) ? (a = i[1] - i[0]) : ((a = 0), (i = [i, i]));
                var o = function (o) {
                    var l = it * ((e + 120) / 360 + t * o),
                        c = ir(i[0] + a * o, r),
                        u = ((0 !== s ? n[0] + o * s : n) * c * (1 - c)) / 2,
                        d = ia(l),
                        f = ii(l);
                    return is(
                        ie([
                            255 * (c + u * (-0.14861 * d + 1.78277 * f)),
                            255 * (c + u * (-0.29227 * d - 0.90649 * f)),
                            255 * (c + 1.97294 * d * u),
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
                            : ("array" === r9((n = e)) ? 0 == (s = n[1] - n[0]) && (n = n[1]) : (s = 0), o);
                    }),
                    (o.lightness = function (e) {
                        return null == e
                            ? i
                            : ("array" === r9(e) ? ((i = e), (a = e[1] - e[0])) : ((i = [e, e]), (a = 0)), o);
                    }),
                    (o.scale = function () {
                        return is.scale(o);
                    }),
                    o.hue(n),
                    o
                );
            },
            il = E,
            ic = "0123456789abcdef",
            iu = Math.floor,
            id = Math.random,
            ip = function () {
                for (var e = "#", t = 0; t < 6; t++) e += ic.charAt(iu(16 * id()));
                return new il(e, "hex");
            },
            i_ = o,
            ih = Math.log,
            im = Math.pow,
            ig = Math.floor,
            iE = Math.abs,
            ib = function (e, t) {
                void 0 === t && (t = null);
                var n = {
                    min: Number.MAX_VALUE,
                    max: -1 * Number.MAX_VALUE,
                    sum: 0,
                    values: [],
                    count: 0,
                };
                return (
                    "object" === i_(e) && (e = Object.values(e)),
                    e.forEach(function (e) {
                        t && "object" === i_(e) && (e = e[t]),
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
                        return iy(n, e, t);
                    }),
                    n
                );
            },
            iy = function (e, t, n) {
                void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == i_(e) && (e = ib(e));
                var r = e.min,
                    i = e.max,
                    a = e.values.sort(function (e, t) {
                        return e - t;
                    });
                if (1 === n) return [r, i];
                var s = [];
                if (("c" === t.substr(0, 1) && (s.push(r), s.push(i)), "e" === t.substr(0, 1))) {
                    s.push(r);
                    for (var o = 1; o < n; o++) s.push(r + (o / n) * (i - r));
                    s.push(i);
                } else if ("l" === t.substr(0, 1)) {
                    if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var l = Math.LOG10E * ih(r),
                        c = Math.LOG10E * ih(i);
                    s.push(r);
                    for (var u = 1; u < n; u++) s.push(im(10, l + (u / n) * (c - l)));
                    s.push(i);
                } else if ("q" === t.substr(0, 1)) {
                    s.push(r);
                    for (var d = 1; d < n; d++) {
                        var f = ((a.length - 1) * d) / n,
                            p = ig(f);
                        if (p === f) s.push(a[p]);
                        else {
                            var _ = f - p;
                            s.push(a[p] * (1 - _) + a[p + 1] * _);
                        }
                    }
                    s.push(i);
                } else if ("k" === t.substr(0, 1)) {
                    var h,
                        m = a.length,
                        g = Array(m),
                        E = Array(n),
                        b = !0,
                        y = 0,
                        O = null;
                    (O = []).push(r);
                    for (var A = 1; A < n; A++) O.push(r + (A / n) * (i - r));
                    for (O.push(i); b; ) {
                        for (var v = 0; v < n; v++) E[v] = 0;
                        for (var S = 0; S < m; S++)
                            for (var I = a[S], T = Number.MAX_VALUE, C = void 0, N = 0; N < n; N++) {
                                var R = iE(O[N] - I);
                                R < T && ((T = R), (C = N)), E[C]++, (g[S] = C);
                            }
                        for (var w = Array(n), P = 0; P < n; P++) w[P] = null;
                        for (var D = 0; D < m; D++) null === w[(h = g[D])] ? (w[h] = a[D]) : (w[h] += a[D]);
                        for (var x = 0; x < n; x++) w[x] *= 1 / E[x];
                        b = !1;
                        for (var L = 0; L < n; L++)
                            if (w[L] !== O[L]) {
                                b = !0;
                                break;
                            }
                        (O = w), ++y > 200 && (b = !1);
                    }
                    for (var j = {}, M = 0; M < n; M++) j[M] = [];
                    for (var k = 0; k < m; k++) j[(h = g[k])].push(a[k]);
                    for (var U = [], G = 0; G < n; G++) U.push(j[G][0]), U.push(j[G][j[G].length - 1]);
                    (U = U.sort(function (e, t) {
                        return e - t;
                    })),
                        s.push(U[0]);
                    for (var V = 1; V < U.length; V += 2) {
                        var F = U[V];
                        isNaN(F) || -1 !== s.indexOf(F) || s.push(F);
                    }
                }
                return s;
            },
            iO = ib,
            iA = iy,
            iv = E,
            iS = function (e, t) {
                (e = new iv(e)), (t = new iv(t));
                var n = e.luminance(),
                    r = t.luminance();
                return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
            },
            iI = E,
            iT = Math.sqrt,
            iC = Math.pow,
            iN = Math.min,
            iR = Math.max,
            iw = Math.atan2,
            iP = Math.abs,
            iD = Math.cos,
            ix = Math.sin,
            iL = Math.exp,
            ij = Math.PI,
            iM = function (e, t, n, r, i) {
                void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
                var a = function (e) {
                        return (360 * e) / (2 * ij);
                    },
                    s = function (e) {
                        return (2 * ij * e) / 360;
                    };
                (e = new iI(e)), (t = new iI(t));
                var o = Array.from(e.lab()),
                    l = o[0],
                    c = o[1],
                    u = o[2],
                    d = Array.from(t.lab()),
                    f = d[0],
                    p = d[1],
                    _ = d[2],
                    h = (l + f) / 2,
                    m = (iT(iC(c, 2) + iC(u, 2)) + iT(iC(p, 2) + iC(_, 2))) / 2,
                    g = 0.5 * (1 - iT(iC(m, 7) / (iC(m, 7) + iC(25, 7)))),
                    E = c * (1 + g),
                    b = p * (1 + g),
                    y = iT(iC(E, 2) + iC(u, 2)),
                    O = iT(iC(b, 2) + iC(_, 2)),
                    A = (y + O) / 2,
                    v = a(iw(u, E)),
                    S = a(iw(_, b)),
                    I = v >= 0 ? v : v + 360,
                    T = S >= 0 ? S : S + 360,
                    C = iP(I - T) > 180 ? (I + T + 360) / 2 : (I + T) / 2,
                    N =
                        1 -
                        0.17 * iD(s(C - 30)) +
                        0.24 * iD(s(2 * C)) +
                        0.32 * iD(s(3 * C + 6)) -
                        0.2 * iD(s(4 * C - 63)),
                    R = T - I;
                (R = 180 >= iP(R) ? R : T <= I ? R + 360 : R - 360), (R = 2 * iT(y * O) * ix(s(R) / 2));
                var w = f - l,
                    P = O - y,
                    D = 1 + (0.015 * iC(h - 50, 2)) / iT(20 + iC(h - 50, 2)),
                    x = 1 + 0.045 * A,
                    L = 1 + 0.015 * A * N,
                    j = 30 * iL(-iC((C - 275) / 25, 2)),
                    M = -(2 * iT(iC(A, 7) / (iC(A, 7) + iC(25, 7)))) * ix(2 * s(j));
                return iR(
                    0,
                    iN(
                        100,
                        iT(
                            iC(w / (n * D), 2) +
                                iC(P / (r * x), 2) +
                                iC(R / (i * L), 2) +
                                (P / (r * x)) * M * (R / (i * L)),
                        ),
                    ),
                );
            },
            ik = E,
            iU = function (e, t, n) {
                void 0 === n && (n = "lab"), (e = new ik(e)), (t = new ik(t));
                var r = e.get(n),
                    i = t.get(n),
                    a = 0;
                for (var s in r) {
                    var o = (r[s] || 0) - (i[s] || 0);
                    a += o * o;
                }
                return Math.sqrt(a);
            },
            iG = E,
            iV = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                try {
                    return new (Function.prototype.bind.apply(iG, [null].concat(e)))(), !0;
                } catch (e) {
                    return !1;
                }
            },
            iF = y,
            iB = rY,
            iH = {
                cool: function () {
                    return iB([iF.hsl(180, 1, 0.9), iF.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return iB(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
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
        var iz = iK[iW];
        iY[iz.toLowerCase()] = iY[iz];
    }
    var iq = iY,
        iX = y;
    return (
        (iX.average = rG),
        (iX.bezier = rZ),
        (iX.blend = r8),
        (iX.cubehelix = io),
        (iX.mix = iX.interpolate = ro),
        (iX.random = ip),
        (iX.scale = rY),
        (iX.analyze = iO),
        (iX.contrast = iS),
        (iX.deltaE = iM),
        (iX.distance = iU),
        (iX.limits = iA),
        (iX.valid = iV),
        (iX.scales = iH),
        (iX.colors = t6),
        (iX.brewer = iq),
        iX
    );
});
