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
        var o = a[i];
        r["[object " + o + "]"] = o.toLowerCase();
    }
    var s = function (e) {
            return r[Object.prototype.toString.call(e)] || "object";
        },
        l = s,
        c = s,
        u = Math.PI,
        d = {
            clip_rgb: n,
            limit: e,
            type: s,
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
        m = d.type,
        h = f,
        g = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = this;
            if ("object" === m(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var r = p(e),
                i = !1;
            if (!r) {
                (i = !0),
                    h.sorted ||
                        ((h.autodetect = h.autodetect.sort(function (e, t) {
                            return t.p - e.p;
                        })),
                        (h.sorted = !0));
                for (var a = 0, o = h.autodetect; a < o.length; a += 1) {
                    var s = o[a];
                    if ((r = s.test.apply(s, e))) break;
                }
            }
            if (h.format[r]) n._rgb = _(h.format[r].apply(null, i ? e : e.slice(0, -1)));
            else throw Error("unknown format: " + e);
            3 === n._rgb.length && n._rgb.push(1);
        };
    g.prototype.toString = function () {
        return "function" == m(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var E = g,
        b = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(b.Color, [null].concat(e)))();
        };
    (b.Color = E), (b.version = "2.4.2");
    var y = b,
        O = d.unpack,
        v = Math.max,
        S = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = O(e, "rgb"),
                r = n[0],
                i = n[1],
                a = n[2],
                o = 1 - v((r /= 255), v((i /= 255), (a /= 255))),
                s = o < 1 ? 1 / (1 - o) : 0;
            return [(1 - r - o) * s, (1 - i - o) * s, (1 - a - o) * s, o];
        },
        I = d.unpack,
        T = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = I(e, "cmyk"))[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e.length > 4 ? e[4] : 1;
            return 1 === a
                ? [0, 0, 0, o]
                : [
                      n >= 1 ? 0 : 255 * (1 - n) * (1 - a),
                      r >= 1 ? 0 : 255 * (1 - r) * (1 - a),
                      i >= 1 ? 0 : 255 * (1 - i) * (1 - a),
                      o,
                  ];
        },
        C = y,
        A = E,
        N = f,
        P = d.unpack,
        R = d.type,
        D = S;
    (A.prototype.cmyk = function () {
        return D(this._rgb);
    }),
        (C.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(A, [null].concat(e, ["cmyk"])))();
        }),
        (N.format.cmyk = T),
        N.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === R((e = P(e, "cmyk"))) && 4 === e.length) return "cmyk";
            },
        });
    var w = d.unpack,
        x = d.last,
        L = function (e) {
            return Math.round(100 * e) / 100;
        },
        j = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = w(e, "hsla"),
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
                o = n[2],
                s = Math.min((i /= 255), (a /= 255), (o /= 255)),
                l = Math.max(i, a, o),
                c = (l + s) / 2;
            return (l === s ? ((e = 0), (t = NaN)) : (e = c < 0.5 ? (l - s) / (l + s) : (l - s) / (2 - l - s)),
            i == l
                ? (t = (a - o) / (l - s))
                : a == l
                  ? (t = 2 + (o - i) / (l - s))
                  : o == l && (t = 4 + (i - a) / (l - s)),
            (t *= 60) < 0 && (t += 360),
            n.length > 3 && void 0 !== n[3])
                ? [t, e, c, n[3]]
                : [t, e, c];
        },
        U = d.unpack,
        G = d.last,
        Z = j,
        B = k,
        F = Math.round,
        V = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = U(e, "rgba"),
                r = G(e) || "rgb";
            return "hsl" == r.substr(0, 3)
                ? Z(B(n), r)
                : ((n[0] = F(n[0])),
                  (n[1] = F(n[1])),
                  (n[2] = F(n[2])),
                  ("rgba" === r || (n.length > 3 && n[3] < 1)) && ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
                  r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
        },
        H = d.unpack,
        Y = Math.round,
        W = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var o = (i = H(i, "hsl"))[0],
                s = i[1],
                l = i[2];
            if (0 === s) t = n = r = 255 * l;
            else {
                var c = [0, 0, 0],
                    u = [0, 0, 0],
                    d = l < 0.5 ? l * (1 + s) : l + s - l * s,
                    f = 2 * l - d,
                    p = o / 360;
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
                (t = (e = [Y(255 * u[0]), Y(255 * u[1]), Y(255 * u[2])])[0]), (n = e[1]), (r = e[2]);
            }
            return i.length > 3 ? [t, n, r, i[3]] : [t, n, r, 1];
        },
        K = W,
        z = f,
        q = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        Q = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        X = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        J = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        $ = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
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
            if ((t = e.match(Q))) {
                for (var i = t.slice(1, 5), a = 0; a < 4; a++) i[a] = +i[a];
                return i;
            }
            if ((t = e.match(X))) {
                for (var o = t.slice(1, 4), s = 0; s < 3; s++) o[s] = et(2.55 * o[s]);
                return (o[3] = 1), o;
            }
            if ((t = e.match(J))) {
                for (var l = t.slice(1, 5), c = 0; c < 3; c++) l[c] = et(2.55 * l[c]);
                return (l[3] = +l[3]), l;
            }
            if ((t = e.match($))) {
                var u = t.slice(1, 4);
                (u[1] *= 0.01), (u[2] *= 0.01);
                var d = K(u);
                return (d[3] = 1), d;
            }
            if ((t = e.match(ee))) {
                var f = t.slice(1, 4);
                (f[1] *= 0.01), (f[2] *= 0.01);
                var p = K(f);
                return (p[3] = +t[4]), p;
            }
        };
    en.test = function (e) {
        return q.test(e) || Q.test(e) || X.test(e) || J.test(e) || $.test(e) || ee.test(e);
    };
    var er = en,
        ei = y,
        ea = E,
        eo = f,
        es = d.type,
        el = V,
        ec = er;
    (ea.prototype.css = function (e) {
        return el(this._rgb, e);
    }),
        (ei.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ea, [null].concat(e, ["css"])))();
        }),
        (eo.format.css = ec),
        eo.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === es(e) && ec.test(e)) return "css";
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
        em = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = e_(t, "rgb"),
                i = r[0],
                a = r[1],
                o = r[2],
                s = Math.min(i, a, o),
                l = Math.max(i, a, o),
                c = l - s,
                u = (100 * c) / 255,
                d = (s / (255 - c)) * 100;
            return (
                0 === c
                    ? (e = NaN)
                    : (i === l && (e = (a - o) / c),
                      a === l && (e = 2 + (o - i) / c),
                      o === l && (e = 4 + (i - a) / c),
                      (e *= 60) < 0 && (e += 360)),
                [e, u, d]
            );
        },
        eh = d.unpack,
        eg = Math.floor,
        eE = function () {
            for (var e, t, n, r, i, a, o, s, l, c = [], u = arguments.length; u--; ) c[u] = arguments[u];
            var d = (c = eh(c, "hcg"))[0],
                f = c[1],
                p = c[2];
            p *= 255;
            var _ = 255 * f;
            if (0 === f) o = s = l = p;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var m = eg((d /= 60)),
                    h = d - m,
                    g = p * (1 - f),
                    E = g + _ * (1 - h),
                    b = g + _ * h,
                    y = g + _;
                switch (m) {
                    case 0:
                        (o = (e = [y, b, g])[0]), (s = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (o = (t = [E, y, g])[0]), (s = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (o = (n = [g, y, b])[0]), (s = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (o = (r = [g, E, y])[0]), (s = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (o = (i = [b, g, y])[0]), (s = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (o = (a = [y, g, E])[0]), (s = a[1]), (l = a[2]);
                }
            }
            return [o, s, l, c.length > 3 ? c[3] : 1];
        },
        eb = d.unpack,
        ey = d.type,
        eO = y,
        ev = E,
        eS = f,
        eI = em;
    (ev.prototype.hcg = function () {
        return eI(this._rgb);
    }),
        (eO.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ev, [null].concat(e, ["hcg"])))();
        }),
        (eS.format.hcg = eE),
        eS.autodetect.push({
            p: 1,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === ey((e = eb(e, "hcg"))) && 3 === e.length) return "hcg";
            },
        });
    var eT = d.unpack,
        eC = d.last,
        eA = Math.round,
        eN = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eT(e, "rgba"),
                r = n[0],
                i = n[1],
                a = n[2],
                o = n[3],
                s = eC(e) || "auto";
            void 0 === o && (o = 1), "auto" === s && (s = o < 1 ? "rgba" : "rgb"), (r = eA(r));
            var l = "000000" + ((r << 16) | ((i = eA(i)) << 8) | (a = eA(a))).toString(16);
            l = l.substr(l.length - 6);
            var c = "0" + eA(255 * o).toString(16);
            switch (((c = c.substr(c.length - 2)), s.toLowerCase())) {
                case "rgba":
                    return "#" + l + c;
                case "argb":
                    return "#" + c + l;
                default:
                    return "#" + l;
            }
        },
        eP = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        eR = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        eD = function (e) {
            if (e.match(eP)) {
                (4 === e.length || 7 === e.length) && (e = e.substr(1)),
                    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e, 16);
                return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(eR)) {
                (5 === e.length || 9 === e.length) && (e = e.substr(1)),
                    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var n = parseInt(e, 16);
                return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, Math.round(((255 & n) / 255) * 100) / 100];
            }
            throw Error("unknown hex color: " + e);
        },
        ew = y,
        ex = E,
        eL = d.type,
        ej = f,
        eM = eN;
    (ex.prototype.hex = function (e) {
        return eM(this._rgb, e);
    }),
        (ew.hex = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ex, [null].concat(e, ["hex"])))();
        }),
        (ej.format.hex = eD),
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
        eZ = Math.sqrt,
        eB = Math.acos,
        eF = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = ek(t, "rgb"),
                i = r[0],
                a = r[1],
                o = r[2],
                s = eG((i /= 255), (a /= 255), (o /= 255)),
                l = (i + a + o) / 3,
                c = l > 0 ? 1 - s / l : 0;
            return (
                0 === c
                    ? (e = NaN)
                    : ((e = eB((e = (i - a + (i - o)) / 2 / eZ((i - a) * (i - a) + (i - o) * (a - o))))),
                      o > a && (e = eU - e),
                      (e /= eU)),
                [360 * e, c, l]
            );
        },
        eV = d.unpack,
        eH = d.limit,
        eY = d.TWOPI,
        eW = d.PITHIRD,
        eK = Math.cos,
        ez = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = eV(r, "hsi"))[0],
                o = r[1],
                s = r[2];
            return (
                isNaN(a) && (a = 0),
                isNaN(o) && (o = 0),
                a > 360 && (a -= 360),
                a < 0 && (a += 360),
                (a /= 360) < 1 / 3
                    ? (t = 1 - ((n = (1 - o) / 3) + (e = (1 + (o * eK(eY * a)) / eK(eW - eY * a)) / 3)))
                    : a < 2 / 3
                      ? ((a -= 1 / 3),
                        (n = 1 - ((e = (1 - o) / 3) + (t = (1 + (o * eK(eY * a)) / eK(eW - eY * a)) / 3))))
                      : ((a -= 2 / 3),
                        (e = 1 - ((t = (1 - o) / 3) + (n = (1 + (o * eK(eY * a)) / eK(eW - eY * a)) / 3)))),
                (e = eH(s * e * 3)),
                [255 * e, 255 * (t = eH(s * t * 3)), 255 * (n = eH(s * n * 3)), r.length > 3 ? r[3] : 1]
            );
        },
        eq = d.unpack,
        eQ = d.type,
        eX = y,
        eJ = E,
        e$ = f,
        e0 = eF;
    (eJ.prototype.hsi = function () {
        return e0(this._rgb);
    }),
        (eX.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eJ, [null].concat(e, ["hsi"])))();
        }),
        (e$.format.hsi = ez),
        e$.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eQ((e = eq(e, "hsi"))) && 3 === e.length) return "hsi";
            },
        });
    var e1 = d.unpack,
        e3 = d.type,
        e2 = y,
        e4 = E,
        e5 = f,
        e8 = k;
    (e4.prototype.hsl = function () {
        return e8(this._rgb);
    }),
        (e2.hsl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(e4, [null].concat(e, ["hsl"])))();
        }),
        (e5.format.hsl = W),
        e5.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === e3((e = e1(e, "hsl"))) && 3 === e.length) return "hsl";
            },
        });
    var e6 = d.unpack,
        e7 = Math.min,
        e9 = Math.max,
        te = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = e6(r, "rgb"))[0],
                o = r[1],
                s = r[2],
                l = e7(a, o, s),
                c = e9(a, o, s),
                u = c - l;
            return (
                (n = c / 255),
                0 === c
                    ? ((e = NaN), (t = 0))
                    : ((t = u / c),
                      a === c && (e = (o - s) / u),
                      o === c && (e = 2 + (s - a) / u),
                      s === c && (e = 4 + (a - o) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, t, n]
            );
        },
        tt = d.unpack,
        tn = Math.floor,
        tr = function () {
            for (var e, t, n, r, i, a, o, s, l, c = [], u = arguments.length; u--; ) c[u] = arguments[u];
            var d = (c = tt(c, "hsv"))[0],
                f = c[1],
                p = c[2];
            if (((p *= 255), 0 === f)) o = s = l = p;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var _ = tn((d /= 60)),
                    m = d - _,
                    h = p * (1 - f),
                    g = p * (1 - f * m),
                    E = p * (1 - f * (1 - m));
                switch (_) {
                    case 0:
                        (o = (e = [p, E, h])[0]), (s = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (o = (t = [g, p, h])[0]), (s = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (o = (n = [h, p, E])[0]), (s = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (o = (r = [h, g, p])[0]), (s = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (o = (i = [E, h, p])[0]), (s = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (o = (a = [p, h, g])[0]), (s = a[1]), (l = a[2]);
                }
            }
            return [o, s, l, c.length > 3 ? c[3] : 1];
        },
        ti = d.unpack,
        ta = d.type,
        to = y,
        ts = E,
        tl = f,
        tc = te;
    (ts.prototype.hsv = function () {
        return tc(this._rgb);
    }),
        (to.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ts, [null].concat(e, ["hsv"])))();
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
        tm = function (e) {
            return e > td.t3 ? tp(e, 1 / 3) : e / td.t2 + td.t0;
        },
        th = function (e, t, n) {
            return (
                (e = t_(e)),
                [
                    tm((0.4124564 * e + 0.3575761 * (t = t_(t)) + 0.1804375 * (n = t_(n))) / td.Xn),
                    tm((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / td.Yn),
                    tm((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / td.Zn),
                ]
            );
        },
        tg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tf(e, "rgb"),
                r = th(n[0], n[1], n[2]),
                i = r[0],
                a = r[1],
                o = r[2],
                s = 116 * a - 16;
            return [s < 0 ? 0 : s, 500 * (i - a), 200 * (a - o)];
        },
        tE = tu,
        tb = d.unpack,
        ty = Math.pow,
        tO = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * ty(e, 1 / 2.4) - 0.055);
        },
        tv = function (e) {
            return e > tE.t1 ? e * e * e : tE.t2 * (e - tE.t0);
        },
        tS = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var o = (i = tb(i, "lab"))[0],
                s = i[1],
                l = i[2];
            return (
                (t = (o + 16) / 116),
                (e = isNaN(s) ? t : t + s / 500),
                (n = isNaN(l) ? t : t - l / 200),
                (t = tE.Yn * tv(t)),
                (r = tO(3.2404542 * (e = tE.Xn * tv(e)) - 1.5371385 * t - 0.4985314 * (n = tE.Zn * tv(n)))),
                [
                    r,
                    tO(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
                    tO(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
                    i.length > 3 ? i[3] : 1,
                ]
            );
        },
        tI = d.unpack,
        tT = d.type,
        tC = y,
        tA = E,
        tN = f,
        tP = tg;
    (tA.prototype.lab = function () {
        return tP(this._rgb);
    }),
        (tC.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(tA, [null].concat(e, ["lab"])))();
        }),
        (tN.format.lab = tS),
        tN.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === tT((e = tI(e, "lab"))) && 3 === e.length) return "lab";
            },
        });
    var tR = d.unpack,
        tD = d.RAD2DEG,
        tw = Math.sqrt,
        tx = Math.atan2,
        tL = Math.round,
        tj = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tR(e, "lab"),
                r = n[0],
                i = n[1],
                a = n[2],
                o = tw(i * i + a * a),
                s = (tx(a, i) * tD + 360) % 360;
            return 0 === tL(10000 * o) && (s = NaN), [r, o, s];
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
        tZ = d.unpack,
        tB = d.DEG2RAD,
        tF = Math.sin,
        tV = Math.cos,
        tH = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tZ(e, "lch"),
                r = n[0],
                i = n[1],
                a = n[2];
            return isNaN(a) && (a = 0), [r, tV((a *= tB)) * i, tF(a) * i];
        },
        tY = d.unpack,
        tW = tH,
        tK = tS,
        tz = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tW((e = tY(e, "lch"))[0], e[1], e[2]),
                r = tK(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        tq = d.unpack,
        tQ = tz,
        tX = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tq(e, "hcl").reverse();
            return tQ.apply(void 0, n);
        },
        tJ = d.unpack,
        t$ = d.type,
        t0 = y,
        t1 = E,
        t3 = f,
        t2 = tG;
    (t1.prototype.lch = function () {
        return t2(this._rgb);
    }),
        (t1.prototype.hcl = function () {
            return t2(this._rgb).reverse();
        }),
        (t0.lch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t1, [null].concat(e, ["lch"])))();
        }),
        (t0.hcl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t1, [null].concat(e, ["hcl"])))();
        }),
        (t3.format.lch = tz),
        (t3.format.hcl = tX),
        ["lch", "hcl"].forEach(function (e) {
            return t3.autodetect.push({
                p: 2,
                test: function () {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    if ("array" === t$((t = tJ(t, e))) && 3 === t.length) return e;
                },
            });
        });
    var t4 = {
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
        t5 = E,
        t8 = f,
        t6 = d.type,
        t7 = t4,
        t9 = eD,
        ne = eN;
    (t5.prototype.name = function () {
        for (var e = ne(this._rgb, "rgb"), t = 0, n = Object.keys(t7); t < n.length; t += 1) {
            var r = n[t];
            if (t7[r] === e) return r.toLowerCase();
        }
        return e;
    }),
        (t8.format.named = function (e) {
            if (t7[(e = e.toLowerCase())]) return t9(t7[e]);
            throw Error("unknown color name: " + e);
        }),
        t8.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === t6(e) && t7[e.toLowerCase()]) return "named";
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
        no = E,
        ns = f,
        nl = d.type,
        nc = nn;
    (no.prototype.num = function () {
        return nc(this._rgb);
    }),
        (na.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(no, [null].concat(e, ["num"])))();
        }),
        (ns.format.num = ni),
        ns.autodetect.push({
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
        nm = Math.round;
    (nd.prototype.rgb = function (e) {
        return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(nm);
    }),
        (nd.prototype.rgba = function (e) {
            return (
                void 0 === e && (e = !0),
                this._rgb.slice(0, 4).map(function (t, n) {
                    return n < 3 ? (!1 === e ? t : nm(t)) : t;
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
    var nh = Math.log,
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
                              : -155.25485562709179 - 0.44596950469579133 * (n = i - 2) + 104.49216199393888 * nh(n)),
                      (r =
                          i < 20
                              ? 0
                              : -254.76935184120902 + 0.8274096064007395 * (r = i - 10) + 115.67994401066147 * nh(r)))
                    : ((t = 351.97690566805693 + 0.114206453784165 * (t = i - 55) - 40.25366309332127 * nh(t)),
                      (n = 325.4494125711974 + 0.07943456536662342 * (n = i - 50) - 28.0852963507957 * nh(n)),
                      (r = 255)),
                [t, n, r, 1]
            );
        },
        nE = ng,
        nb = d.unpack,
        ny = Math.round,
        nO = y,
        nv = E,
        nS = f,
        nI = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            for (var r = nb(t, "rgb"), i = r[0], a = r[2], o = 1000, s = 40000, l = 0.4; s - o > l; ) {
                var c = nE((e = (s + o) * 0.5));
                c[2] / c[0] >= a / i ? (s = e) : (o = e);
            }
            return ny(e);
        };
    (nv.prototype.temp =
        nv.prototype.kelvin =
        nv.prototype.temperature =
            function () {
                return nI(this._rgb);
            }),
        (nO.temp =
            nO.kelvin =
            nO.temperature =
                function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(nv, [null].concat(e, ["temp"])))();
                }),
        (nS.format.temp = nS.format.kelvin = nS.format.temperature = ng);
    var nT = d.unpack,
        nC = Math.cbrt,
        nA = Math.pow,
        nN = Math.sign,
        nP = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nT(e, "rgb"),
                r = n[0],
                i = n[1],
                a = n[2],
                o = [nR(r / 255), nR(i / 255), nR(a / 255)],
                s = o[0],
                l = o[1],
                c = o[2],
                u = nC(0.4122214708 * s + 0.5363325363 * l + 0.0514459929 * c),
                d = nC(0.2119034982 * s + 0.6806995451 * l + 0.1073969566 * c),
                f = nC(0.0883024619 * s + 0.2817188376 * l + 0.6299787005 * c);
            return [
                0.2104542553 * u + 0.793617785 * d - 0.0040720468 * f,
                1.9779984951 * u - 2.428592205 * d + 0.4505937099 * f,
                0.0259040371 * u + 0.7827717662 * d - 0.808675766 * f,
            ];
        };
    function nR(e) {
        var t = Math.abs(e);
        return t < 0.04045 ? e / 12.92 : (nN(e) || 1) * nA((t + 0.055) / 1.055, 2.4);
    }
    var nD = d.unpack,
        nw = Math.pow,
        nx = Math.sign,
        nL = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = nD(e, "lab"))[0],
                r = e[1],
                i = e[2],
                a = nw(n + 0.3963377774 * r + 0.2158037573 * i, 3),
                o = nw(n - 0.1055613458 * r - 0.0638541728 * i, 3),
                s = nw(n - 0.0894841775 * r - 1.291485548 * i, 3);
            return [
                255 * nj(4.0767416621 * a - 3.3077115913 * o + 0.2309699292 * s),
                255 * nj(-1.2684380046 * a + 2.6097574011 * o - 0.3413193965 * s),
                255 * nj(-0.0041960863 * a - 0.7034186147 * o + 1.707614701 * s),
                e.length > 3 ? e[3] : 1,
            ];
        };
    function nj(e) {
        var t = Math.abs(e);
        return t > 0.0031308 ? (nx(e) || 1) * (1.055 * nw(t, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var nM = d.unpack,
        nk = d.type,
        nU = y,
        nG = E,
        nZ = f,
        nB = nP;
    (nG.prototype.oklab = function () {
        return nB(this._rgb);
    }),
        (nU.oklab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nG, [null].concat(e, ["oklab"])))();
        }),
        (nZ.format.oklab = nL),
        nZ.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nk((e = nM(e, "oklab"))) && 3 === e.length) return "oklab";
            },
        });
    var nF = d.unpack,
        nV = nP,
        nH = tj,
        nY = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nF(e, "rgb"),
                r = nV(n[0], n[1], n[2]);
            return nH(r[0], r[1], r[2]);
        },
        nW = d.unpack,
        nK = tH,
        nz = nL,
        nq = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nK((e = nW(e, "lch"))[0], e[1], e[2]),
                r = nz(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        nQ = d.unpack,
        nX = d.type,
        nJ = y,
        n$ = E,
        n0 = f,
        n1 = nY;
    (n$.prototype.oklch = function () {
        return n1(this._rgb);
    }),
        (nJ.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(n$, [null].concat(e, ["oklch"])))();
        }),
        (n0.format.oklch = nq),
        n0.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nX((e = nQ(e, "oklch"))) && 3 === e.length) return "oklch";
            },
        });
    var n3 = E,
        n2 = d.type;
    (n3.prototype.alpha = function (e, t) {
        return (void 0 === t && (t = !1), void 0 !== e && "number" === n2(e))
            ? t
                ? ((this._rgb[3] = e), this)
                : new n3([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3];
    }),
        (E.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        });
    var n4 = E,
        n5 = tu;
    (n4.prototype.darken = function (e) {
        void 0 === e && (e = 1);
        var t = this,
            n = t.lab();
        return (n[0] -= n5.Kn * e), new n4(n, "lab").alpha(t.alpha(), !0);
    }),
        (n4.prototype.brighten = function (e) {
            return void 0 === e && (e = 1), this.darken(-e);
        }),
        (n4.prototype.darker = n4.prototype.darken),
        (n4.prototype.brighter = n4.prototype.brighten),
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
    var n8 = E,
        n6 = d.type,
        n7 = Math.pow,
        n9 = 1e-7,
        re = 20;
    n8.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === n6(e)) {
            if (0 === e) return new n8([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === e) return new n8([255, 255, 255, this._rgb[3]], "rgb");
            var t = this.luminance(),
                n = "rgb",
                r = re,
                i = function (t, a) {
                    var o = t.interpolate(a, 0.5, n),
                        s = o.luminance();
                    return !(Math.abs(e - s) < n9) && r-- ? (s > e ? i(t, o) : i(o, a)) : o;
                },
                a = (t > e ? i(new n8([0, 0, 0]), this) : i(this, new n8([255, 255, 255]))).rgb();
            return new n8(a.concat([this._rgb[3]]));
        }
        return rt.apply(void 0, this._rgb.slice(0, 3));
    };
    var rt = function (e, t, n) {
            return (e = rn(e)), 0.2126 * e + 0.7152 * (t = rn(t)) + 0.0722 * (n = rn(n));
        },
        rn = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : n7((e + 0.055) / 1.055, 2.4);
        },
        rr = {},
        ri = E,
        ra = d.type,
        ro = rr,
        rs = function (e, t, n) {
            void 0 === n && (n = 0.5);
            for (var r = [], i = arguments.length - 3; i-- > 0; ) r[i] = arguments[i + 3];
            var a = r[0] || "lrgb";
            if ((ro[a] || r.length || (a = Object.keys(ro)[0]), !ro[a]))
                throw Error("interpolation mode " + a + " is not defined");
            return (
                "object" !== ra(e) && (e = new ri(e)),
                "object" !== ra(t) && (t = new ri(t)),
                ro[a](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
            );
        },
        rl = E,
        rc = rs;
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
            o = this[i]();
        if (!a) return o;
        var s = i.indexOf(a) - 2 * ("ok" === i.substr(0, 2));
        if (s > -1) {
            if ("string" == r_(t))
                switch (t.charAt(0)) {
                    case "+":
                    case "-":
                        o[s] += +t;
                        break;
                    case "*":
                        o[s] *= t.substr(1);
                        break;
                    case "/":
                        o[s] /= t.substr(1);
                        break;
                    default:
                        o[s] = +t;
                }
            else if ("number" === r_(t)) o[s] = t;
            else throw Error("unsupported value for Color.set");
            var l = new rp(o, i);
            if (n) return (this._rgb = l._rgb), this;
            return l;
        }
        throw Error("unknown channel " + a + " in mode " + i);
    };
    var rm = E;
    rr.rgb = function (e, t, n) {
        var r = e._rgb,
            i = t._rgb;
        return new rm(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb");
    };
    var rh = E,
        rg = Math.sqrt,
        rE = Math.pow;
    rr.lrgb = function (e, t, n) {
        var r = e._rgb,
            i = r[0],
            a = r[1],
            o = r[2],
            s = t._rgb,
            l = s[0],
            c = s[1],
            u = s[2];
        return new rh(
            rg(rE(i, 2) * (1 - n) + rE(l, 2) * n),
            rg(rE(a, 2) * (1 - n) + rE(c, 2) * n),
            rg(rE(o, 2) * (1 - n) + rE(u, 2) * n),
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
            var i, a, o, s, l, c, u, d, f, p, _, m, h, g;
            return (
                "hsl" === r
                    ? ((o = e.hsl()), (s = t.hsl()))
                    : "hsv" === r
                      ? ((o = e.hsv()), (s = t.hsv()))
                      : "hcg" === r
                        ? ((o = e.hcg()), (s = t.hcg()))
                        : "hsi" === r
                          ? ((o = e.hsi()), (s = t.hsi()))
                          : "lch" === r || "hcl" === r
                            ? ((r = "hcl"), (o = e.hcl()), (s = t.hcl()))
                            : "oklch" === r && ((o = e.oklch().reverse()), (s = t.oklch().reverse())),
                ("h" === r.substr(0, 1) || "oklch" === r) &&
                    ((l = (i = o)[0]), (u = i[1]), (f = i[2]), (c = (a = s)[0]), (d = a[1]), (p = a[2])),
                isNaN(l) || isNaN(c)
                    ? isNaN(l)
                        ? isNaN(c)
                            ? (m = NaN)
                            : ((m = c), (1 == f || 0 == f) && "hsv" != r && (_ = d))
                        : ((m = l), (1 == p || 0 == p) && "hsv" != r && (_ = u))
                    : ((g = c > l && c - l > 180 ? c - (l + 360) : c < l && l - c > 180 ? c + 360 - l : c - l),
                      (m = l + n * g)),
                void 0 === _ && (_ = u + n * (d - u)),
                (h = f + n * (p - f)),
                "oklch" === r ? new ry([h, _, m], r) : new ry([m, _, h], r)
            );
        },
        rv = rO,
        rS = function (e, t, n) {
            return rv(e, t, n, "lch");
        };
    (rr.lch = rS), (rr.hcl = rS);
    var rI = E;
    rr.num = function (e, t, n) {
        var r = e.num();
        return new rI(r + n * (t.num() - r), "num");
    };
    var rT = rO;
    rr.hcg = function (e, t, n) {
        return rT(e, t, n, "hcg");
    };
    var rC = rO;
    rr.hsi = function (e, t, n) {
        return rC(e, t, n, "hsi");
    };
    var rA = rO;
    rr.hsl = function (e, t, n) {
        return rA(e, t, n, "hsl");
    };
    var rN = rO;
    rr.hsv = function (e, t, n) {
        return rN(e, t, n, "hsv");
    };
    var rP = E;
    rr.oklab = function (e, t, n) {
        var r = e.oklab(),
            i = t.oklab();
        return new rP(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab");
    };
    var rR = rO;
    rr.oklch = function (e, t, n) {
        return rR(e, t, n, "oklch");
    };
    var rD = E,
        rw = d.clip_rgb,
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
                    return new rD(e);
                })),
                "lrgb" === t)
            )
                return rZ(e, n);
            for (var a = e.shift(), o = a.get(t), s = [], l = 0, c = 0, u = 0; u < o.length; u++)
                if (
                    ((o[u] = (o[u] || 0) * n[0]), s.push(isNaN(o[u]) ? 0 : n[0]), "h" === t.charAt(u) && !isNaN(o[u]))
                ) {
                    var d = (o[u] / 180) * rj;
                    (l += rM(d) * n[0]), (c += rk(d) * n[0]);
                }
            var f = a.alpha() * n[0];
            e.forEach(function (e, r) {
                var i = e.get(t);
                f += e.alpha() * n[r + 1];
                for (var a = 0; a < o.length; a++)
                    if (!isNaN(i[a]))
                        if (((s[a] += n[r + 1]), "h" === t.charAt(a))) {
                            var u = (i[a] / 180) * rj;
                            (l += rM(u) * n[r + 1]), (c += rk(u) * n[r + 1]);
                        } else o[a] += i[a] * n[r + 1];
            });
            for (var p = 0; p < o.length; p++)
                if ("h" === t.charAt(p)) {
                    for (var _ = (rU(c / s[p], l / s[p]) / rj) * 180; _ < 0; ) _ += 360;
                    for (; _ >= 360; ) _ -= 360;
                    o[p] = _;
                } else o[p] = o[p] / s[p];
            return (f /= r), new rD(o, t).alpha(f > 0.99999 ? 1 : f, !0);
        },
        rZ = function (e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], i = 0; i < e.length; i++) {
                var a = e[i],
                    o = t[i] / n,
                    s = a._rgb;
                (r[0] += rx(s[0], 2) * o), (r[1] += rx(s[1], 2) * o), (r[2] += rx(s[2], 2) * o), (r[3] += s[3] * o);
            }
            return (
                (r[0] = rL(r[0])), (r[1] = rL(r[1])), (r[2] = rL(r[2])), r[3] > 0.9999999 && (r[3] = 1), new rD(rw(r))
            );
        },
        rB = y,
        rF = d.type,
        rV = Math.pow,
        rH = function (e) {
            var t = "rgb",
                n = rB("#ccc"),
                r = 0,
                i = [0, 1],
                a = [],
                o = [0, 0],
                s = !1,
                l = [],
                c = !1,
                u = 0,
                d = 1,
                f = !1,
                p = {},
                _ = !0,
                m = 1,
                h = function (e) {
                    if (
                        ("string" === rF((e = e || ["#fff", "#000"])) &&
                            rB.brewer &&
                            rB.brewer[e.toLowerCase()] &&
                            (e = rB.brewer[e.toLowerCase()]),
                        "array" === rF(e))
                    ) {
                        1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                        for (var t = 0; t < e.length; t++) e[t] = rB(e[t]);
                        a.length = 0;
                        for (var n = 0; n < e.length; n++) a.push(n / (e.length - 1));
                    }
                    return O(), (l = e);
                },
                g = function (e) {
                    if (null != s) {
                        for (var t = s.length - 1, n = 0; n < t && e >= s[n]; ) n++;
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
                    else if (s && s.length > 2) {
                        var i, c;
                        c = g(e) / (s.length - 2);
                    } else c = d !== u ? (e - u) / (d - u) : 1;
                    (c = b(c)), r || (c = E(c)), 1 !== m && (c = rV(c, m));
                    var f = Math.floor(10000 * (c = Math.min(1, Math.max(0, (c = o[0] + c * (1 - o[0] - o[1]))))));
                    if (_ && p[f]) i = p[f];
                    else {
                        if ("array" === rF(l))
                            for (var h = 0; h < a.length; h++) {
                                var y = a[h];
                                if (c <= y || (c >= y && h === a.length - 1)) {
                                    i = l[h];
                                    break;
                                }
                                if (c > y && c < a[h + 1]) {
                                    (c = (c - y) / (a[h + 1] - y)), (i = rB.interpolate(l[h], l[h + 1], c, t));
                                    break;
                                }
                            }
                        else "function" === rF(l) && (i = l(c));
                        _ && (p[f] = i);
                    }
                    return i;
                },
                O = function () {
                    return (p = {});
                };
            h(e);
            var v = function (e) {
                var t = rB(y(e));
                return c && t[c] ? t[c]() : t;
            };
            return (
                (v.classes = function (e) {
                    if (null != e) {
                        if ("array" === rF(e)) (s = e), (i = [e[0], e[e.length - 1]]);
                        else {
                            var t = rB.analyze(i);
                            s = 0 === e ? [t.min, t.max] : rB.limits(t, "e", e);
                        }
                        return v;
                    }
                    return s;
                }),
                (v.domain = function (e) {
                    if (!arguments.length) return i;
                    (u = e[0]), (d = e[e.length - 1]), (a = []);
                    var t = l.length;
                    if (e.length === t && u !== d)
                        for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                            var o = r[n];
                            a.push((o - u) / (d - u));
                        }
                    else {
                        for (var s = 0; s < t; s++) a.push(s / (t - 1));
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
                    return (i = [u, d]), v;
                }),
                (v.mode = function (e) {
                    return arguments.length ? ((t = e), O(), v) : t;
                }),
                (v.range = function (e, t) {
                    return h(e), v;
                }),
                (v.out = function (e) {
                    return (c = e), v;
                }),
                (v.spread = function (e) {
                    return arguments.length ? ((r = e), v) : r;
                }),
                (v.correctLightness = function (e) {
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
                                          o = i - a,
                                          s = 0,
                                          l = 1,
                                          c = 20;
                                      Math.abs(o) > 0.01 && c-- > 0;
                                  )
                                      !(function () {
                                          r && (o *= -1),
                                              o < 0 ? ((s = e), (e += (l - e) * 0.5)) : ((l = e), (e += (s - e) * 0.5)),
                                              (o = (i = y(e, !0).lab()[0]) - a);
                                      })();
                                  return e;
                              }
                            : function (e) {
                                  return e;
                              }),
                        v
                    );
                }),
                (v.padding = function (e) {
                    return null != e ? ("number" === rF(e) && (e = [e, e]), (o = e), v) : o;
                }),
                (v.colors = function (t, n) {
                    arguments.length < 2 && (n = "hex");
                    var r = [];
                    if (0 == arguments.length) r = l.slice(0);
                    else if (1 === t) r = [v(0.5)];
                    else if (t > 1) {
                        var a = i[0],
                            o = i[1] - a;
                        r = rY(0, t, !1).map(function (e) {
                            return v(a + (e / (t - 1)) * o);
                        });
                    } else {
                        e = [];
                        var c = [];
                        if (s && s.length > 2)
                            for (var u = 1, d = s.length, f = 1 <= d; f ? u < d : u > d; f ? u++ : u--)
                                c.push((s[u - 1] + s[u]) * 0.5);
                        else c = i;
                        r = c.map(function (e) {
                            return v(e);
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
                (v.cache = function (e) {
                    return null != e ? ((_ = e), v) : _;
                }),
                (v.gamma = function (e) {
                    return null != e ? ((m = e), v) : m;
                }),
                (v.nodata = function (e) {
                    return null != e ? ((n = rB(e)), v) : n;
                }),
                v
            );
        };
    function rY(e, t, n) {
        for (var r = [], i = e < t, a = n ? (i ? t + 1 : t - 1) : t, o = e; i ? o < a : o > a; i ? o++ : o--) r.push(o);
        return r;
    }
    var rW = E,
        rK = rH,
        rz = function (e) {
            for (var t = [1, 1], n = 1; n < e; n++) {
                for (var r = [1], i = 1; i <= t.length; i++) r[i] = (t[i] || 0) + t[i - 1];
                t = r;
            }
            return t;
        },
        rq = function (e) {
            var t, n, r, i, a, o, s, l, c, u, d;
            if (
                2 ===
                (e = e.map(function (e) {
                    return new rW(e);
                })).length
            )
                (a = (t = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = t[1]),
                    (i = function (e) {
                        return new rW(
                            [0, 1, 2].map(function (t) {
                                return a[t] + e * (o[t] - a[t]);
                            }),
                            "lab",
                        );
                    });
            else if (3 === e.length)
                (a = (n = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = n[1]),
                    (s = n[2]),
                    (i = function (e) {
                        return new rW(
                            [0, 1, 2].map(function (t) {
                                return (1 - e) * (1 - e) * a[t] + 2 * (1 - e) * e * o[t] + e * e * s[t];
                            }),
                            "lab",
                        );
                    });
            else if (4 === e.length)
                (a = (r = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = r[1]),
                    (s = r[2]),
                    (l = r[3]),
                    (i = function (e) {
                        return new rW(
                            [0, 1, 2].map(function (t) {
                                return (
                                    (1 - e) * (1 - e) * (1 - e) * a[t] +
                                    3 * (1 - e) * (1 - e) * e * o[t] +
                                    3 * (1 - e) * e * e * s[t] +
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
                    (u = rz((d = e.length - 1))),
                    (i = function (e) {
                        var t = 1 - e;
                        return new rW(
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
        rQ = function (e) {
            var t = rq(e);
            return (
                (t.scale = function () {
                    return rK(t);
                }),
                t
            );
        },
        rX = y,
        rJ = function (e, t, n) {
            if (!rJ[n]) throw Error("unknown blend mode " + n);
            return rJ[n](e, t);
        },
        r$ = function (e) {
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
        r3 = function (e, t) {
            return e > t ? t : e;
        },
        r2 = function (e, t) {
            return e > t ? e : t;
        },
        r4 = function (e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255));
        },
        r5 = function (e, t) {
            return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
        },
        r8 = function (e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255));
        },
        r6 = function (e, t) {
            return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
        };
    (rJ.normal = r$(
        r0(function (e) {
            return e;
        }),
    )),
        (rJ.multiply = r$(r0(r1))),
        (rJ.screen = r$(r0(r4))),
        (rJ.overlay = r$(r0(r5))),
        (rJ.darken = r$(r0(r3))),
        (rJ.lighten = r$(r0(r2))),
        (rJ.dodge = r$(r0(r6))),
        (rJ.burn = r$(r0(r8)));
    for (
        var r7 = rJ,
            r9 = d.type,
            ie = d.clip_rgb,
            it = d.TWOPI,
            ir = Math.pow,
            ii = Math.sin,
            ia = Math.cos,
            io = y,
            is = function (e, t, n, r, i) {
                void 0 === e && (e = 300),
                    void 0 === t && (t = -1.5),
                    void 0 === n && (n = 1),
                    void 0 === r && (r = 1),
                    void 0 === i && (i = [0, 1]);
                var a,
                    o = 0;
                "array" === r9(i) ? (a = i[1] - i[0]) : ((a = 0), (i = [i, i]));
                var s = function (s) {
                    var l = it * ((e + 120) / 360 + t * s),
                        c = ir(i[0] + a * s, r),
                        u = ((0 !== o ? n[0] + s * o : n) * c * (1 - c)) / 2,
                        d = ia(l),
                        f = ii(l);
                    return io(
                        ie([
                            255 * (c + u * (-0.14861 * d + 1.78277 * f)),
                            255 * (c + u * (-0.29227 * d - 0.90649 * f)),
                            255 * (c + 1.97294 * d * u),
                            1,
                        ]),
                    );
                };
                return (
                    (s.start = function (t) {
                        return null == t ? e : ((e = t), s);
                    }),
                    (s.rotations = function (e) {
                        return null == e ? t : ((t = e), s);
                    }),
                    (s.gamma = function (e) {
                        return null == e ? r : ((r = e), s);
                    }),
                    (s.hue = function (e) {
                        return null == e
                            ? n
                            : ("array" === r9((n = e)) ? 0 == (o = n[1] - n[0]) && (n = n[1]) : (o = 0), s);
                    }),
                    (s.lightness = function (e) {
                        return null == e
                            ? i
                            : ("array" === r9(e) ? ((i = e), (a = e[1] - e[0])) : ((i = [e, e]), (a = 0)), s);
                    }),
                    (s.scale = function () {
                        return io.scale(s);
                    }),
                    s.hue(n),
                    s
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
            i_ = s,
            im = Math.log,
            ih = Math.pow,
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
                var o = [];
                if (("c" === t.substr(0, 1) && (o.push(r), o.push(i)), "e" === t.substr(0, 1))) {
                    o.push(r);
                    for (var s = 1; s < n; s++) o.push(r + (s / n) * (i - r));
                    o.push(i);
                } else if ("l" === t.substr(0, 1)) {
                    if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var l = Math.LOG10E * im(r),
                        c = Math.LOG10E * im(i);
                    o.push(r);
                    for (var u = 1; u < n; u++) o.push(ih(10, l + (u / n) * (c - l)));
                    o.push(i);
                } else if ("q" === t.substr(0, 1)) {
                    o.push(r);
                    for (var d = 1; d < n; d++) {
                        var f = ((a.length - 1) * d) / n,
                            p = ig(f);
                        if (p === f) o.push(a[p]);
                        else {
                            var _ = f - p;
                            o.push(a[p] * (1 - _) + a[p + 1] * _);
                        }
                    }
                    o.push(i);
                } else if ("k" === t.substr(0, 1)) {
                    var m,
                        h = a.length,
                        g = Array(h),
                        E = Array(n),
                        b = !0,
                        y = 0,
                        O = null;
                    (O = []).push(r);
                    for (var v = 1; v < n; v++) O.push(r + (v / n) * (i - r));
                    for (O.push(i); b; ) {
                        for (var S = 0; S < n; S++) E[S] = 0;
                        for (var I = 0; I < h; I++)
                            for (var T = a[I], C = Number.MAX_VALUE, A = void 0, N = 0; N < n; N++) {
                                var P = iE(O[N] - T);
                                P < C && ((C = P), (A = N)), E[A]++, (g[I] = A);
                            }
                        for (var R = Array(n), D = 0; D < n; D++) R[D] = null;
                        for (var w = 0; w < h; w++) null === R[(m = g[w])] ? (R[m] = a[w]) : (R[m] += a[w]);
                        for (var x = 0; x < n; x++) R[x] *= 1 / E[x];
                        b = !1;
                        for (var L = 0; L < n; L++)
                            if (R[L] !== O[L]) {
                                b = !0;
                                break;
                            }
                        (O = R), ++y > 200 && (b = !1);
                    }
                    for (var j = {}, M = 0; M < n; M++) j[M] = [];
                    for (var k = 0; k < h; k++) j[(m = g[k])].push(a[k]);
                    for (var U = [], G = 0; G < n; G++) U.push(j[G][0]), U.push(j[G][j[G].length - 1]);
                    (U = U.sort(function (e, t) {
                        return e - t;
                    })),
                        o.push(U[0]);
                    for (var Z = 1; Z < U.length; Z += 2) {
                        var B = U[Z];
                        isNaN(B) || -1 !== o.indexOf(B) || o.push(B);
                    }
                }
                return o;
            },
            iO = ib,
            iv = iy,
            iS = E,
            iI = function (e, t) {
                (e = new iS(e)), (t = new iS(t));
                var n = e.luminance(),
                    r = t.luminance();
                return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
            },
            iT = E,
            iC = Math.sqrt,
            iA = Math.pow,
            iN = Math.min,
            iP = Math.max,
            iR = Math.atan2,
            iD = Math.abs,
            iw = Math.cos,
            ix = Math.sin,
            iL = Math.exp,
            ij = Math.PI,
            iM = function (e, t, n, r, i) {
                void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
                var a = function (e) {
                        return (360 * e) / (2 * ij);
                    },
                    o = function (e) {
                        return (2 * ij * e) / 360;
                    };
                (e = new iT(e)), (t = new iT(t));
                var s = Array.from(e.lab()),
                    l = s[0],
                    c = s[1],
                    u = s[2],
                    d = Array.from(t.lab()),
                    f = d[0],
                    p = d[1],
                    _ = d[2],
                    m = (l + f) / 2,
                    h = (iC(iA(c, 2) + iA(u, 2)) + iC(iA(p, 2) + iA(_, 2))) / 2,
                    g = 0.5 * (1 - iC(iA(h, 7) / (iA(h, 7) + iA(25, 7)))),
                    E = c * (1 + g),
                    b = p * (1 + g),
                    y = iC(iA(E, 2) + iA(u, 2)),
                    O = iC(iA(b, 2) + iA(_, 2)),
                    v = (y + O) / 2,
                    S = a(iR(u, E)),
                    I = a(iR(_, b)),
                    T = S >= 0 ? S : S + 360,
                    C = I >= 0 ? I : I + 360,
                    A = iD(T - C) > 180 ? (T + C + 360) / 2 : (T + C) / 2,
                    N =
                        1 -
                        0.17 * iw(o(A - 30)) +
                        0.24 * iw(o(2 * A)) +
                        0.32 * iw(o(3 * A + 6)) -
                        0.2 * iw(o(4 * A - 63)),
                    P = C - T;
                (P = 180 >= iD(P) ? P : C <= T ? P + 360 : P - 360), (P = 2 * iC(y * O) * ix(o(P) / 2));
                var R = f - l,
                    D = O - y,
                    w = 1 + (0.015 * iA(m - 50, 2)) / iC(20 + iA(m - 50, 2)),
                    x = 1 + 0.045 * v,
                    L = 1 + 0.015 * v * N,
                    j = 30 * iL(-iA((A - 275) / 25, 2)),
                    M = -(2 * iC(iA(v, 7) / (iA(v, 7) + iA(25, 7)))) * ix(2 * o(j));
                return iP(
                    0,
                    iN(
                        100,
                        iC(
                            iA(R / (n * w), 2) +
                                iA(D / (r * x), 2) +
                                iA(P / (i * L), 2) +
                                (D / (r * x)) * M * (P / (i * L)),
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
                for (var o in r) {
                    var s = (r[o] || 0) - (i[o] || 0);
                    a += s * s;
                }
                return Math.sqrt(a);
            },
            iG = E,
            iZ = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                try {
                    return new (Function.prototype.bind.apply(iG, [null].concat(e)))(), !0;
                } catch (e) {
                    return !1;
                }
            },
            iB = y,
            iF = rH,
            iV = {
                cool: function () {
                    return iF([iB.hsl(180, 1, 0.9), iB.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return iF(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
                },
            },
            iH = {
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
            iY = 0,
            iW = Object.keys(iH);
        iY < iW.length;
        iY += 1
    ) {
        var iK = iW[iY];
        iH[iK.toLowerCase()] = iH[iK];
    }
    var iz = iH,
        iq = y;
    return (
        (iq.average = rG),
        (iq.bezier = rQ),
        (iq.blend = r7),
        (iq.cubehelix = is),
        (iq.mix = iq.interpolate = rs),
        (iq.random = ip),
        (iq.scale = rH),
        (iq.analyze = iO),
        (iq.contrast = iI),
        (iq.deltaE = iM),
        (iq.distance = iU),
        (iq.limits = iv),
        (iq.valid = iZ),
        (iq.scales = iV),
        (iq.colors = t4),
        (iq.brewer = iz),
        iq
    );
});
