!(function (t, n) {
    e.exports = n();
})(0, function () {
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
        h = d.clip_rgb,
        p = d.type,
        g = _,
        E = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = this;
            if ("object" === p(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var r = f(e),
                i = !1;
            if (!r) {
                (i = !0),
                    g.sorted ||
                        ((g.autodetect = g.autodetect.sort(function (e, t) {
                            return t.p - e.p;
                        })),
                        (g.sorted = !0));
                for (var a = 0, s = g.autodetect; a < s.length; a += 1) {
                    var o = s[a];
                    if ((r = o.test.apply(o, e))) break;
                }
            }
            if (g.format[r]) n._rgb = h(g.format[r].apply(null, i ? e : e.slice(0, -1)));
            else throw Error("unknown format: " + e);
            3 === n._rgb.length && n._rgb.push(1);
        };
    E.prototype.toString = function () {
        return "function" == p(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var A = E,
        I = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(I.Color, [null].concat(e)))();
        };
    (I.Color = A), (I.version = "2.4.2");
    var T = I,
        y = d.unpack,
        S = Math.max,
        v = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = y(e, "rgb"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = 1 - S((r /= 255), S((i /= 255), (a /= 255))),
                o = s < 1 ? 1 / (1 - s) : 0;
            return [(1 - r - s) * o, (1 - i - s) * o, (1 - a - s) * o, s];
        },
        C = d.unpack,
        b = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = C(e, "cmyk"))[0],
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
        N = T,
        R = A,
        O = _,
        D = d.unpack,
        L = d.type,
        w = v;
    (R.prototype.cmyk = function () {
        return w(this._rgb);
    }),
        (N.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(R, [null].concat(e, ["cmyk"])))();
        }),
        (O.format.cmyk = b),
        O.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === L((e = D(e, "cmyk"))) && 4 === e.length) return "cmyk";
            },
        });
    var x = d.unpack,
        P = d.last,
        M = function (e) {
            return Math.round(100 * e) / 100;
        },
        k = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = x(e, "hsla"),
                r = P(e) || "lsa";
            return (
                (n[0] = M(n[0] || 0)),
                (n[1] = M(100 * n[1]) + "%"),
                (n[2] = M(100 * n[2]) + "%"),
                "hsla" === r || (n.length > 3 && n[3] < 1)
                    ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
                    : (n.length = 3),
                r + "(" + n.join(",") + ")"
            );
        },
        U = d.unpack,
        G = function () {
            for (var e, t, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = (n = U(n, "rgba"))[0],
                a = n[1],
                s = n[2],
                o = Math.min((i /= 255), (a /= 255), (s /= 255)),
                l = Math.max(i, a, s),
                u = (l + o) / 2;
            return (l === o ? ((e = 0), (t = NaN)) : (e = u < 0.5 ? (l - o) / (l + o) : (l - o) / (2 - l - o)),
            i == l
                ? (t = (a - s) / (l - o))
                : a == l
                  ? (t = 2 + (s - i) / (l - o))
                  : s == l && (t = 4 + (i - a) / (l - o)),
            (t *= 60) < 0 && (t += 360),
            n.length > 3 && void 0 !== n[3])
                ? [t, e, u, n[3]]
                : [t, e, u];
        },
        F = d.unpack,
        V = d.last,
        B = k,
        j = G,
        H = Math.round,
        Y = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = F(e, "rgba"),
                r = V(e) || "rgb";
            return "hsl" == r.substr(0, 3)
                ? B(j(n), r)
                : ((n[0] = H(n[0])),
                  (n[1] = H(n[1])),
                  (n[2] = H(n[2])),
                  ("rgba" === r || (n.length > 3 && n[3] < 1)) && ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
                  r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
        },
        W = d.unpack,
        K = Math.round,
        $ = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var s = (i = W(i, "hsl"))[0],
                o = i[1],
                l = i[2];
            if (0 === o) t = n = r = 255 * l;
            else {
                var u = [0, 0, 0],
                    c = [0, 0, 0],
                    d = l < 0.5 ? l * (1 + o) : l + o - l * o,
                    _ = 2 * l - d,
                    f = s / 360;
                (u[0] = f + 1 / 3), (u[1] = f), (u[2] = f - 1 / 3);
                for (var h = 0; h < 3; h++)
                    u[h] < 0 && (u[h] += 1),
                        u[h] > 1 && (u[h] -= 1),
                        6 * u[h] < 1
                            ? (c[h] = _ + (d - _) * 6 * u[h])
                            : 2 * u[h] < 1
                              ? (c[h] = d)
                              : 3 * u[h] < 2
                                ? (c[h] = _ + (d - _) * (2 / 3 - u[h]) * 6)
                                : (c[h] = _);
                (t = (e = [K(255 * c[0]), K(255 * c[1]), K(255 * c[2])])[0]), (n = e[1]), (r = e[2]);
            }
            return i.length > 3 ? [t, n, r, i[3]] : [t, n, r, 1];
        },
        z = $,
        q = _,
        X = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        Z = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        Q = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        J = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        ee = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        et = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        en = Math.round,
        er = function (e) {
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
                for (var s = t.slice(1, 4), o = 0; o < 3; o++) s[o] = en(2.55 * s[o]);
                return (s[3] = 1), s;
            }
            if ((t = e.match(J))) {
                for (var l = t.slice(1, 5), u = 0; u < 3; u++) l[u] = en(2.55 * l[u]);
                return (l[3] = +l[3]), l;
            }
            if ((t = e.match(ee))) {
                var c = t.slice(1, 4);
                (c[1] *= 0.01), (c[2] *= 0.01);
                var d = z(c);
                return (d[3] = 1), d;
            }
            if ((t = e.match(et))) {
                var _ = t.slice(1, 4);
                (_[1] *= 0.01), (_[2] *= 0.01);
                var f = z(_);
                return (f[3] = +t[4]), f;
            }
        };
    er.test = function (e) {
        return X.test(e) || Z.test(e) || Q.test(e) || J.test(e) || ee.test(e) || et.test(e);
    };
    var ei = er,
        ea = T,
        es = A,
        eo = _,
        el = d.type,
        eu = Y,
        ec = ei;
    (es.prototype.css = function (e) {
        return eu(this._rgb, e);
    }),
        (ea.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(es, [null].concat(e, ["css"])))();
        }),
        (eo.format.css = ec),
        eo.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === el(e) && ec.test(e)) return "css";
            },
        });
    var ed = A,
        e_ = T,
        ef = _,
        eh = d.unpack;
    (ef.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = eh(e, "rgba");
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n;
    }),
        (e_.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ed, [null].concat(e, ["gl"])))();
        }),
        (ed.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
    var ep = d.unpack,
        em = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = ep(t, "rgb"),
                i = r[0],
                a = r[1],
                s = r[2],
                o = Math.min(i, a, s),
                l = Math.max(i, a, s),
                u = l - o,
                c = (100 * u) / 255,
                d = (o / (255 - u)) * 100;
            return (
                0 === u
                    ? (e = NaN)
                    : (i === l && (e = (a - s) / u),
                      a === l && (e = 2 + (s - i) / u),
                      s === l && (e = 4 + (i - a) / u),
                      (e *= 60) < 0 && (e += 360)),
                [e, c, d]
            );
        },
        eg = d.unpack,
        eE = Math.floor,
        eA = function () {
            for (var e, t, n, r, i, a, s, o, l, u = [], c = arguments.length; c--; ) u[c] = arguments[c];
            var d = (u = eg(u, "hcg"))[0],
                _ = u[1],
                f = u[2];
            f *= 255;
            var h = 255 * _;
            if (0 === _) s = o = l = f;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var p = eE((d /= 60)),
                    g = d - p,
                    E = f * (1 - _),
                    A = E + h * (1 - g),
                    I = E + h * g,
                    T = E + h;
                switch (p) {
                    case 0:
                        (s = (e = [T, I, E])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (s = (t = [A, T, E])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (s = (n = [E, T, I])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (s = (r = [E, A, T])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (s = (i = [I, E, T])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (s = (a = [T, E, A])[0]), (o = a[1]), (l = a[2]);
                }
            }
            return [s, o, l, u.length > 3 ? u[3] : 1];
        },
        eI = d.unpack,
        eT = d.type,
        ey = T,
        eS = A,
        ev = _,
        eC = em;
    (eS.prototype.hcg = function () {
        return eC(this._rgb);
    }),
        (ey.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eS, [null].concat(e, ["hcg"])))();
        }),
        (ev.format.hcg = eA),
        ev.autodetect.push({
            p: 1,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eT((e = eI(e, "hcg"))) && 3 === e.length) return "hcg";
            },
        });
    var eb = d.unpack,
        eN = d.last,
        eR = Math.round,
        eO = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eb(e, "rgba"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = n[3],
                o = eN(e) || "auto";
            void 0 === s && (s = 1), "auto" === o && (o = s < 1 ? "rgba" : "rgb"), (r = eR(r));
            var l = "000000" + ((r << 16) | ((i = eR(i)) << 8) | (a = eR(a))).toString(16);
            l = l.substr(l.length - 6);
            var u = "0" + eR(255 * s).toString(16);
            switch (((u = u.substr(u.length - 2)), o.toLowerCase())) {
                case "rgba":
                    return "#" + l + u;
                case "argb":
                    return "#" + u + l;
                default:
                    return "#" + l;
            }
        },
        eD = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        eL = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        ew = function (e) {
            if (e.match(eD)) {
                (4 === e.length || 7 === e.length) && (e = e.substr(1)),
                    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e, 16);
                return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(eL)) {
                (5 === e.length || 9 === e.length) && (e = e.substr(1)),
                    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var n = parseInt(e, 16);
                return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, Math.round(((255 & n) / 255) * 100) / 100];
            }
            throw Error("unknown hex color: " + e);
        },
        ex = T,
        eP = A,
        eM = d.type,
        ek = _,
        eU = eO;
    (eP.prototype.hex = function (e) {
        return eU(this._rgb, e);
    }),
        (ex.hex = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eP, [null].concat(e, ["hex"])))();
        }),
        (ek.format.hex = ew),
        ek.autodetect.push({
            p: 4,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === eM(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex";
            },
        });
    var eG = d.unpack,
        eF = d.TWOPI,
        eV = Math.min,
        eB = Math.sqrt,
        ej = Math.acos,
        eH = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = eG(t, "rgb"),
                i = r[0],
                a = r[1],
                s = r[2],
                o = eV((i /= 255), (a /= 255), (s /= 255)),
                l = (i + a + s) / 3,
                u = l > 0 ? 1 - o / l : 0;
            return (
                0 === u
                    ? (e = NaN)
                    : ((e = ej((e = (i - a + (i - s)) / 2 / eB((i - a) * (i - a) + (i - s) * (a - s))))),
                      s > a && (e = eF - e),
                      (e /= eF)),
                [360 * e, u, l]
            );
        },
        eY = d.unpack,
        eW = d.limit,
        eK = d.TWOPI,
        e$ = d.PITHIRD,
        ez = Math.cos,
        eq = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = eY(r, "hsi"))[0],
                s = r[1],
                o = r[2];
            return (
                isNaN(a) && (a = 0),
                isNaN(s) && (s = 0),
                a > 360 && (a -= 360),
                a < 0 && (a += 360),
                (a /= 360) < 1 / 3
                    ? (t = 1 - ((n = (1 - s) / 3) + (e = (1 + (s * ez(eK * a)) / ez(e$ - eK * a)) / 3)))
                    : a < 2 / 3
                      ? ((a -= 1 / 3),
                        (n = 1 - ((e = (1 - s) / 3) + (t = (1 + (s * ez(eK * a)) / ez(e$ - eK * a)) / 3))))
                      : ((a -= 2 / 3),
                        (e = 1 - ((t = (1 - s) / 3) + (n = (1 + (s * ez(eK * a)) / ez(e$ - eK * a)) / 3)))),
                (e = eW(o * e * 3)),
                [255 * e, 255 * (t = eW(o * t * 3)), 255 * (n = eW(o * n * 3)), r.length > 3 ? r[3] : 1]
            );
        },
        eX = d.unpack,
        eZ = d.type,
        eQ = T,
        eJ = A,
        e0 = _,
        e1 = eH;
    (eJ.prototype.hsi = function () {
        return e1(this._rgb);
    }),
        (eQ.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eJ, [null].concat(e, ["hsi"])))();
        }),
        (e0.format.hsi = eq),
        e0.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === eZ((e = eX(e, "hsi"))) && 3 === e.length) return "hsi";
            },
        });
    var e2 = d.unpack,
        e3 = d.type,
        e6 = T,
        e4 = A,
        e5 = _,
        e7 = G;
    (e4.prototype.hsl = function () {
        return e7(this._rgb);
    }),
        (e6.hsl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(e4, [null].concat(e, ["hsl"])))();
        }),
        (e5.format.hsl = $),
        e5.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === e3((e = e2(e, "hsl"))) && 3 === e.length) return "hsl";
            },
        });
    var e8 = d.unpack,
        e9 = Math.min,
        te = Math.max,
        tt = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = e8(r, "rgb"))[0],
                s = r[1],
                o = r[2],
                l = e9(a, s, o),
                u = te(a, s, o),
                c = u - l;
            return (
                (n = u / 255),
                0 === u
                    ? ((e = NaN), (t = 0))
                    : ((t = c / u),
                      a === u && (e = (s - o) / c),
                      s === u && (e = 2 + (o - a) / c),
                      o === u && (e = 4 + (a - s) / c),
                      (e *= 60) < 0 && (e += 360)),
                [e, t, n]
            );
        },
        tn = d.unpack,
        tr = Math.floor,
        ti = function () {
            for (var e, t, n, r, i, a, s, o, l, u = [], c = arguments.length; c--; ) u[c] = arguments[c];
            var d = (u = tn(u, "hsv"))[0],
                _ = u[1],
                f = u[2];
            if (((f *= 255), 0 === _)) s = o = l = f;
            else {
                360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                var h = tr((d /= 60)),
                    p = d - h,
                    g = f * (1 - _),
                    E = f * (1 - _ * p),
                    A = f * (1 - _ * (1 - p));
                switch (h) {
                    case 0:
                        (s = (e = [f, A, g])[0]), (o = e[1]), (l = e[2]);
                        break;
                    case 1:
                        (s = (t = [E, f, g])[0]), (o = t[1]), (l = t[2]);
                        break;
                    case 2:
                        (s = (n = [g, f, A])[0]), (o = n[1]), (l = n[2]);
                        break;
                    case 3:
                        (s = (r = [g, E, f])[0]), (o = r[1]), (l = r[2]);
                        break;
                    case 4:
                        (s = (i = [A, g, f])[0]), (o = i[1]), (l = i[2]);
                        break;
                    case 5:
                        (s = (a = [f, g, E])[0]), (o = a[1]), (l = a[2]);
                }
            }
            return [s, o, l, u.length > 3 ? u[3] : 1];
        },
        ta = d.unpack,
        ts = d.type,
        to = T,
        tl = A,
        tu = _,
        tc = tt;
    (tl.prototype.hsv = function () {
        return tc(this._rgb);
    }),
        (to.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(tl, [null].concat(e, ["hsv"])))();
        }),
        (tu.format.hsv = ti),
        tu.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === ts((e = ta(e, "hsv"))) && 3 === e.length) return "hsv";
            },
        });
    var td = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452,
        },
        t_ = td,
        tf = d.unpack,
        th = Math.pow,
        tp = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : th((e + 0.055) / 1.055, 2.4);
        },
        tm = function (e) {
            return e > t_.t3 ? th(e, 1 / 3) : e / t_.t2 + t_.t0;
        },
        tg = function (e, t, n) {
            return (
                (e = tp(e)),
                [
                    tm((0.4124564 * e + 0.3575761 * (t = tp(t)) + 0.1804375 * (n = tp(n))) / t_.Xn),
                    tm((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / t_.Yn),
                    tm((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / t_.Zn),
                ]
            );
        },
        tE = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tf(e, "rgb"),
                r = tg(n[0], n[1], n[2]),
                i = r[0],
                a = r[1],
                s = r[2],
                o = 116 * a - 16;
            return [o < 0 ? 0 : o, 500 * (i - a), 200 * (a - s)];
        },
        tA = td,
        tI = d.unpack,
        tT = Math.pow,
        ty = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * tT(e, 1 / 2.4) - 0.055);
        },
        tS = function (e) {
            return e > tA.t1 ? e * e * e : tA.t2 * (e - tA.t0);
        },
        tv = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var s = (i = tI(i, "lab"))[0],
                o = i[1],
                l = i[2];
            return (
                (t = (s + 16) / 116),
                (e = isNaN(o) ? t : t + o / 500),
                (n = isNaN(l) ? t : t - l / 200),
                (t = tA.Yn * tS(t)),
                (r = ty(3.2404542 * (e = tA.Xn * tS(e)) - 1.5371385 * t - 0.4985314 * (n = tA.Zn * tS(n)))),
                [
                    r,
                    ty(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
                    ty(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
                    i.length > 3 ? i[3] : 1,
                ]
            );
        },
        tC = d.unpack,
        tb = d.type,
        tN = T,
        tR = A,
        tO = _,
        tD = tE;
    (tR.prototype.lab = function () {
        return tD(this._rgb);
    }),
        (tN.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(tR, [null].concat(e, ["lab"])))();
        }),
        (tO.format.lab = tv),
        tO.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === tb((e = tC(e, "lab"))) && 3 === e.length) return "lab";
            },
        });
    var tL = d.unpack,
        tw = d.RAD2DEG,
        tx = Math.sqrt,
        tP = Math.atan2,
        tM = Math.round,
        tk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tL(e, "lab"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = tx(i * i + a * a),
                o = (tP(a, i) * tw + 360) % 360;
            return 0 === tM(1e4 * s) && (o = NaN), [r, s, o];
        },
        tU = d.unpack,
        tG = tE,
        tF = tk,
        tV = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tU(e, "rgb"),
                r = tG(n[0], n[1], n[2]);
            return tF(r[0], r[1], r[2]);
        },
        tB = d.unpack,
        tj = d.DEG2RAD,
        tH = Math.sin,
        tY = Math.cos,
        tW = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tB(e, "lch"),
                r = n[0],
                i = n[1],
                a = n[2];
            return isNaN(a) && (a = 0), [r, tY((a *= tj)) * i, tH(a) * i];
        },
        tK = d.unpack,
        t$ = tW,
        tz = tv,
        tq = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = t$((e = tK(e, "lch"))[0], e[1], e[2]),
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
        tJ = d.unpack,
        t0 = d.type,
        t1 = T,
        t2 = A,
        t3 = _,
        t6 = tV;
    (t2.prototype.lch = function () {
        return t6(this._rgb);
    }),
        (t2.prototype.hcl = function () {
            return t6(this._rgb).reverse();
        }),
        (t1.lch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t2, [null].concat(e, ["lch"])))();
        }),
        (t1.hcl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t2, [null].concat(e, ["hcl"])))();
        }),
        (t3.format.lch = tq),
        (t3.format.hcl = tQ),
        ["lch", "hcl"].forEach(function (e) {
            return t3.autodetect.push({
                p: 2,
                test: function () {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    if ("array" === t0((t = tJ(t, e))) && 3 === t.length) return e;
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
        t5 = A,
        t7 = _,
        t8 = d.type,
        t9 = t4,
        ne = ew,
        nt = eO;
    (t5.prototype.name = function () {
        for (var e = nt(this._rgb, "rgb"), t = 0, n = Object.keys(t9); t < n.length; t += 1) {
            var r = n[t];
            if (t9[r] === e) return r.toLowerCase();
        }
        return e;
    }),
        (t7.format.named = function (e) {
            if (t9[(e = e.toLowerCase())]) return ne(t9[e]);
            throw Error("unknown color name: " + e);
        }),
        t7.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && "string" === t8(e) && t9[e.toLowerCase()]) return "named";
            },
        });
    var nn = d.unpack,
        nr = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nn(e, "rgb");
            return (n[0] << 16) + (n[1] << 8) + n[2];
        },
        ni = d.type,
        na = function (e) {
            if ("number" == ni(e) && e >= 0 && e <= 0xffffff) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw Error("unknown num color: " + e);
        },
        ns = T,
        no = A,
        nl = _,
        nu = d.type,
        nc = nr;
    (no.prototype.num = function () {
        return nc(this._rgb);
    }),
        (ns.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(no, [null].concat(e, ["num"])))();
        }),
        (nl.format.num = na),
        nl.autodetect.push({
            p: 5,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (1 === e.length && "number" === nu(e[0]) && e[0] >= 0 && e[0] <= 0xffffff) return "num";
            },
        });
    var nd = T,
        n_ = A,
        nf = _,
        nh = d.unpack,
        np = d.type,
        nm = Math.round;
    (n_.prototype.rgb = function (e) {
        return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(nm);
    }),
        (n_.prototype.rgba = function (e) {
            return (
                void 0 === e && (e = !0),
                this._rgb.slice(0, 4).map(function (t, n) {
                    return n < 3 ? (!1 === e ? t : nm(t)) : t;
                })
            );
        }),
        (nd.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(n_, [null].concat(e, ["rgb"])))();
        }),
        (nf.format.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nh(e, "rgba");
            return void 0 === n[3] && (n[3] = 1), n;
        }),
        nf.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (
                    "array" === np((e = nh(e, "rgba"))) &&
                    (3 === e.length || (4 === e.length && "number" == np(e[3]) && e[3] >= 0 && e[3] <= 1))
                )
                    return "rgb";
            },
        });
    var ng = Math.log,
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
                              : -155.25485562709179 - 0.44596950469579133 * (n = i - 2) + 104.49216199393888 * ng(n)),
                      (r =
                          i < 20
                              ? 0
                              : -254.76935184120902 + 0.8274096064007395 * (r = i - 10) + 115.67994401066147 * ng(r)))
                    : ((t = 351.97690566805693 + 0.114206453784165 * (t = i - 55) - 40.25366309332127 * ng(t)),
                      (n = 325.4494125711974 + 0.07943456536662342 * (n = i - 50) - 28.0852963507957 * ng(n)),
                      (r = 255)),
                [t, n, r, 1]
            );
        },
        nA = nE,
        nI = d.unpack,
        nT = Math.round,
        ny = T,
        nS = A,
        nv = _,
        nC = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            for (var r = nI(t, "rgb"), i = r[0], a = r[2], s = 1e3, o = 4e4, l = 0.4; o - s > l; ) {
                var u = nA((e = (o + s) * 0.5));
                u[2] / u[0] >= a / i ? (o = e) : (s = e);
            }
            return nT(e);
        };
    (nS.prototype.temp =
        nS.prototype.kelvin =
        nS.prototype.temperature =
            function () {
                return nC(this._rgb);
            }),
        (ny.temp =
            ny.kelvin =
            ny.temperature =
                function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(nS, [null].concat(e, ["temp"])))();
                }),
        (nv.format.temp = nv.format.kelvin = nv.format.temperature = nE);
    var nb = d.unpack,
        nN = Math.cbrt,
        nR = Math.pow,
        nO = Math.sign,
        nD = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nb(e, "rgb"),
                r = n[0],
                i = n[1],
                a = n[2],
                s = [nL(r / 255), nL(i / 255), nL(a / 255)],
                o = s[0],
                l = s[1],
                u = s[2],
                c = nN(0.4122214708 * o + 0.5363325363 * l + 0.0514459929 * u),
                d = nN(0.2119034982 * o + 0.6806995451 * l + 0.1073969566 * u),
                _ = nN(0.0883024619 * o + 0.2817188376 * l + 0.6299787005 * u);
            return [
                0.2104542553 * c + 0.793617785 * d - 0.0040720468 * _,
                1.9779984951 * c - 2.428592205 * d + 0.4505937099 * _,
                0.0259040371 * c + 0.7827717662 * d - 0.808675766 * _,
            ];
        };
    function nL(e) {
        var t = Math.abs(e);
        return t < 0.04045 ? e / 12.92 : (nO(e) || 1) * nR((t + 0.055) / 1.055, 2.4);
    }
    var nw = d.unpack,
        nx = Math.pow,
        nP = Math.sign,
        nM = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = nw(e, "lab"))[0],
                r = e[1],
                i = e[2],
                a = nx(n + 0.3963377774 * r + 0.2158037573 * i, 3),
                s = nx(n - 0.1055613458 * r - 0.0638541728 * i, 3),
                o = nx(n - 0.0894841775 * r - 1.291485548 * i, 3);
            return [
                255 * nk(4.0767416621 * a - 3.3077115913 * s + 0.2309699292 * o),
                255 * nk(-1.2684380046 * a + 2.6097574011 * s - 0.3413193965 * o),
                255 * nk(-0.0041960863 * a - 0.7034186147 * s + 1.707614701 * o),
                e.length > 3 ? e[3] : 1,
            ];
        };
    function nk(e) {
        var t = Math.abs(e);
        return t > 0.0031308 ? (nP(e) || 1) * (1.055 * nx(t, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var nU = d.unpack,
        nG = d.type,
        nF = T,
        nV = A,
        nB = _,
        nj = nD;
    (nV.prototype.oklab = function () {
        return nj(this._rgb);
    }),
        (nF.oklab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nV, [null].concat(e, ["oklab"])))();
        }),
        (nB.format.oklab = nM),
        nB.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nG((e = nU(e, "oklab"))) && 3 === e.length) return "oklab";
            },
        });
    var nH = d.unpack,
        nY = nD,
        nW = tk,
        nK = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nH(e, "rgb"),
                r = nY(n[0], n[1], n[2]);
            return nW(r[0], r[1], r[2]);
        },
        n$ = d.unpack,
        nz = tW,
        nq = nM,
        nX = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nz((e = n$(e, "lch"))[0], e[1], e[2]),
                r = nq(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        nZ = d.unpack,
        nQ = d.type,
        nJ = T,
        n0 = A,
        n1 = _,
        n2 = nK;
    (n0.prototype.oklch = function () {
        return n2(this._rgb);
    }),
        (nJ.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(n0, [null].concat(e, ["oklch"])))();
        }),
        (n1.format.oklch = nX),
        n1.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ("array" === nQ((e = nZ(e, "oklch"))) && 3 === e.length) return "oklch";
            },
        });
    var n3 = A,
        n6 = d.type;
    (n3.prototype.alpha = function (e, t) {
        return (void 0 === t && (t = !1), void 0 !== e && "number" === n6(e))
            ? t
                ? ((this._rgb[3] = e), this)
                : new n3([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3];
    }),
        (A.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        });
    var n4 = A,
        n5 = td;
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
        (A.prototype.get = function (e) {
            var t = e.split("."),
                n = t[0],
                r = t[1],
                i = this[n]();
            if (!r) return i;
            var a = n.indexOf(r) - 2 * ("ok" === n.substr(0, 2));
            if (a > -1) return i[a];
            throw Error("unknown channel " + r + " in mode " + n);
        });
    var n7 = A,
        n8 = d.type,
        n9 = Math.pow,
        re = 1e-7,
        rt = 20;
    n7.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === n8(e)) {
            if (0 === e) return new n7([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === e) return new n7([255, 255, 255, this._rgb[3]], "rgb");
            var t = this.luminance(),
                n = "rgb",
                r = rt,
                i = function (t, a) {
                    var s = t.interpolate(a, 0.5, n),
                        o = s.luminance();
                    return !(Math.abs(e - o) < re) && r-- ? (o > e ? i(t, s) : i(s, a)) : s;
                },
                a = (t > e ? i(new n7([0, 0, 0]), this) : i(this, new n7([255, 255, 255]))).rgb();
            return new n7(a.concat([this._rgb[3]]));
        }
        return rn.apply(void 0, this._rgb.slice(0, 3));
    };
    var rn = function (e, t, n) {
            return (e = rr(e)), 0.2126 * e + 0.7152 * (t = rr(t)) + 0.0722 * (n = rr(n));
        },
        rr = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : n9((e + 0.055) / 1.055, 2.4);
        },
        ri = {},
        ra = A,
        rs = d.type,
        ro = ri,
        rl = function (e, t, n) {
            void 0 === n && (n = 0.5);
            for (var r = [], i = arguments.length - 3; i-- > 0; ) r[i] = arguments[i + 3];
            var a = r[0] || "lrgb";
            if ((ro[a] || r.length || (a = Object.keys(ro)[0]), !ro[a]))
                throw Error("interpolation mode " + a + " is not defined");
            return (
                "object" !== rs(e) && (e = new ra(e)),
                "object" !== rs(t) && (t = new ra(t)),
                ro[a](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
            );
        },
        ru = A,
        rc = rl;
    ru.prototype.mix = ru.prototype.interpolate = function (e, t) {
        void 0 === t && (t = 0.5);
        for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
        return rc.apply(void 0, [this, e, t].concat(n));
    };
    var rd = A;
    rd.prototype.premultiply = function (e) {
        void 0 === e && (e = !1);
        var t = this._rgb,
            n = t[3];
        return e
            ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
            : new rd([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
    };
    var r_ = A,
        rf = td;
    (r_.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var t = this,
            n = t.lch();
        return (n[1] += rf.Kn * e), n[1] < 0 && (n[1] = 0), new r_(n, "lch").alpha(t.alpha(), !0);
    }),
        (r_.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
        });
    var rh = A,
        rp = d.type;
    rh.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.split("."),
            i = r[0],
            a = r[1],
            s = this[i]();
        if (!a) return s;
        var o = i.indexOf(a) - 2 * ("ok" === i.substr(0, 2));
        if (o > -1) {
            if ("string" == rp(t))
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
            else if ("number" === rp(t)) s[o] = t;
            else throw Error("unsupported value for Color.set");
            var l = new rh(s, i);
            return n ? ((this._rgb = l._rgb), this) : l;
        }
        throw Error("unknown channel " + a + " in mode " + i);
    };
    var rm = A;
    ri.rgb = function (e, t, n) {
        var r = e._rgb,
            i = t._rgb;
        return new rm(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb");
    };
    var rg = A,
        rE = Math.sqrt,
        rA = Math.pow;
    ri.lrgb = function (e, t, n) {
        var r = e._rgb,
            i = r[0],
            a = r[1],
            s = r[2],
            o = t._rgb,
            l = o[0],
            u = o[1],
            c = o[2];
        return new rg(
            rE(rA(i, 2) * (1 - n) + rA(l, 2) * n),
            rE(rA(a, 2) * (1 - n) + rA(u, 2) * n),
            rE(rA(s, 2) * (1 - n) + rA(c, 2) * n),
            "rgb",
        );
    };
    var rI = A;
    ri.lab = function (e, t, n) {
        var r = e.lab(),
            i = t.lab();
        return new rI(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab");
    };
    var rT = A,
        ry = function (e, t, n, r) {
            var i, a, s, o, l, u, c, d, _, f, h, p, g, E;
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
                    ((l = (i = s)[0]), (c = i[1]), (_ = i[2]), (u = (a = o)[0]), (d = a[1]), (f = a[2])),
                isNaN(l) || isNaN(u)
                    ? isNaN(l)
                        ? isNaN(u)
                            ? (p = NaN)
                            : ((p = u), (1 == _ || 0 == _) && "hsv" != r && (h = d))
                        : ((p = l), (1 == f || 0 == f) && "hsv" != r && (h = c))
                    : ((E = u > l && u - l > 180 ? u - (l + 360) : u < l && l - u > 180 ? u + 360 - l : u - l),
                      (p = l + n * E)),
                void 0 === h && (h = c + n * (d - c)),
                (g = _ + n * (f - _)),
                "oklch" === r ? new rT([g, h, p], r) : new rT([p, h, g], r)
            );
        },
        rS = ry,
        rv = function (e, t, n) {
            return rS(e, t, n, "lch");
        };
    (ri.lch = rv), (ri.hcl = rv);
    var rC = A;
    ri.num = function (e, t, n) {
        var r = e.num();
        return new rC(r + n * (t.num() - r), "num");
    };
    var rb = ry;
    ri.hcg = function (e, t, n) {
        return rb(e, t, n, "hcg");
    };
    var rN = ry;
    ri.hsi = function (e, t, n) {
        return rN(e, t, n, "hsi");
    };
    var rR = ry;
    ri.hsl = function (e, t, n) {
        return rR(e, t, n, "hsl");
    };
    var rO = ry;
    ri.hsv = function (e, t, n) {
        return rO(e, t, n, "hsv");
    };
    var rD = A;
    ri.oklab = function (e, t, n) {
        var r = e.oklab(),
            i = t.oklab();
        return new rD(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab");
    };
    var rL = ry;
    ri.oklch = function (e, t, n) {
        return rL(e, t, n, "oklch");
    };
    var rw = A,
        rx = d.clip_rgb,
        rP = Math.pow,
        rM = Math.sqrt,
        rk = Math.PI,
        rU = Math.cos,
        rG = Math.sin,
        rF = Math.atan2,
        rV = function (e, t, n) {
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
                    return new rw(e);
                })),
                "lrgb" === t)
            )
                return rB(e, n);
            for (var a = e.shift(), s = a.get(t), o = [], l = 0, u = 0, c = 0; c < s.length; c++)
                if (
                    ((s[c] = (s[c] || 0) * n[0]), o.push(isNaN(s[c]) ? 0 : n[0]), "h" === t.charAt(c) && !isNaN(s[c]))
                ) {
                    var d = (s[c] / 180) * rk;
                    (l += rU(d) * n[0]), (u += rG(d) * n[0]);
                }
            var _ = a.alpha() * n[0];
            e.forEach(function (e, r) {
                var i = e.get(t);
                _ += e.alpha() * n[r + 1];
                for (var a = 0; a < s.length; a++)
                    if (!isNaN(i[a]))
                        if (((o[a] += n[r + 1]), "h" === t.charAt(a))) {
                            var c = (i[a] / 180) * rk;
                            (l += rU(c) * n[r + 1]), (u += rG(c) * n[r + 1]);
                        } else s[a] += i[a] * n[r + 1];
            });
            for (var f = 0; f < s.length; f++)
                if ("h" === t.charAt(f)) {
                    for (var h = (rF(u / o[f], l / o[f]) / rk) * 180; h < 0; ) h += 360;
                    for (; h >= 360; ) h -= 360;
                    s[f] = h;
                } else s[f] = s[f] / o[f];
            return (_ /= r), new rw(s, t).alpha(_ > 0.99999 ? 1 : _, !0);
        },
        rB = function (e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], i = 0; i < e.length; i++) {
                var a = e[i],
                    s = t[i] / n,
                    o = a._rgb;
                (r[0] += rP(o[0], 2) * s), (r[1] += rP(o[1], 2) * s), (r[2] += rP(o[2], 2) * s), (r[3] += o[3] * s);
            }
            return (
                (r[0] = rM(r[0])), (r[1] = rM(r[1])), (r[2] = rM(r[2])), r[3] > 0.9999999 && (r[3] = 1), new rw(rx(r))
            );
        },
        rj = T,
        rH = d.type,
        rY = Math.pow,
        rW = function (e) {
            var t = "rgb",
                n = rj("#ccc"),
                r = 0,
                i = [0, 1],
                a = [],
                s = [0, 0],
                o = !1,
                l = [],
                u = !1,
                c = 0,
                d = 1,
                _ = !1,
                f = {},
                h = !0,
                p = 1,
                g = function (e) {
                    if (
                        ("string" === rH((e = e || ["#fff", "#000"])) &&
                            rj.brewer &&
                            rj.brewer[e.toLowerCase()] &&
                            (e = rj.brewer[e.toLowerCase()]),
                        "array" === rH(e))
                    ) {
                        1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                        for (var t = 0; t < e.length; t++) e[t] = rj(e[t]);
                        a.length = 0;
                        for (var n = 0; n < e.length; n++) a.push(n / (e.length - 1));
                    }
                    return y(), (l = e);
                },
                E = function (e) {
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
                        u = E(e) / (o.length - 2);
                    } else u = d !== c ? (e - c) / (d - c) : 1;
                    (u = I(u)), r || (u = A(u)), 1 !== p && (u = rY(u, p));
                    var _ = Math.floor(1e4 * (u = Math.min(1, Math.max(0, (u = s[0] + u * (1 - s[0] - s[1]))))));
                    if (h && f[_]) i = f[_];
                    else {
                        if ("array" === rH(l))
                            for (var g = 0; g < a.length; g++) {
                                var T = a[g];
                                if (u <= T || (u >= T && g === a.length - 1)) {
                                    i = l[g];
                                    break;
                                }
                                if (u > T && u < a[g + 1]) {
                                    (u = (u - T) / (a[g + 1] - T)), (i = rj.interpolate(l[g], l[g + 1], u, t));
                                    break;
                                }
                            }
                        else "function" === rH(l) && (i = l(u));
                        h && (f[_] = i);
                    }
                    return i;
                },
                y = function () {
                    return (f = {});
                };
            g(e);
            var S = function (e) {
                var t = rj(T(e));
                return u && t[u] ? t[u]() : t;
            };
            return (
                (S.classes = function (e) {
                    if (null != e) {
                        if ("array" === rH(e)) (o = e), (i = [e[0], e[e.length - 1]]);
                        else {
                            var t = rj.analyze(i);
                            o = 0 === e ? [t.min, t.max] : rj.limits(t, "e", e);
                        }
                        return S;
                    }
                    return o;
                }),
                (S.domain = function (e) {
                    if (!arguments.length) return i;
                    (c = e[0]), (d = e[e.length - 1]), (a = []);
                    var t = l.length;
                    if (e.length === t && c !== d)
                        for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                            var s = r[n];
                            a.push((s - c) / (d - c));
                        }
                    else {
                        for (var o = 0; o < t; o++) a.push(o / (t - 1));
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
                    return (i = [c, d]), S;
                }),
                (S.mode = function (e) {
                    return arguments.length ? ((t = e), y(), S) : t;
                }),
                (S.range = function (e, t) {
                    return g(e), S;
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
                        y(),
                        (A = _
                            ? function (e) {
                                  for (
                                      var t = T(0, !0).lab()[0],
                                          n = T(1, !0).lab()[0],
                                          r = t > n,
                                          i = T(e, !0).lab()[0],
                                          a = t + (n - t) * e,
                                          s = i - a,
                                          o = 0,
                                          l = 1,
                                          u = 20;
                                      Math.abs(s) > 0.01 && u-- > 0;
                                  )
                                      !(function () {
                                          r && (s *= -1),
                                              s < 0 ? ((o = e), (e += (l - e) * 0.5)) : ((l = e), (e += (o - e) * 0.5)),
                                              (s = (i = T(e, !0).lab()[0]) - a);
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
                    return null != e ? ("number" === rH(e) && (e = [e, e]), (s = e), S) : s;
                }),
                (S.colors = function (t, n) {
                    arguments.length < 2 && (n = "hex");
                    var r = [];
                    if (0 == arguments.length) r = l.slice(0);
                    else if (1 === t) r = [S(0.5)];
                    else if (t > 1) {
                        var a = i[0],
                            s = i[1] - a;
                        r = rK(0, t, !1).map(function (e) {
                            return S(a + (e / (t - 1)) * s);
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
                        rj[n] &&
                            (r = r.map(function (e) {
                                return e[n]();
                            })),
                        r
                    );
                }),
                (S.cache = function (e) {
                    return null != e ? ((h = e), S) : h;
                }),
                (S.gamma = function (e) {
                    return null != e ? ((p = e), S) : p;
                }),
                (S.nodata = function (e) {
                    return null != e ? ((n = rj(e)), S) : n;
                }),
                S
            );
        };
    function rK(e, t, n) {
        for (var r = [], i = e < t, a = n ? (i ? t + 1 : t - 1) : t, s = e; i ? s < a : s > a; i ? s++ : s--) r.push(s);
        return r;
    }
    var r$ = A,
        rz = rW,
        rq = function (e) {
            for (var t = [1, 1], n = 1; n < e; n++) {
                for (var r = [1], i = 1; i <= t.length; i++) r[i] = (t[i] || 0) + t[i - 1];
                t = r;
            }
            return t;
        },
        rX = function (e) {
            var t, n, r, i, a, s, o, l, u, c, d;
            if (
                2 ===
                (e = e.map(function (e) {
                    return new r$(e);
                })).length
            )
                (a = (t = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (s = t[1]),
                    (i = function (e) {
                        return new r$(
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
                        return new r$(
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
                        return new r$(
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
                (u = e.map(function (e) {
                    return e.lab();
                })),
                    (c = rq((d = e.length - 1))),
                    (i = function (e) {
                        var t = 1 - e;
                        return new r$(
                            [0, 1, 2].map(function (n) {
                                return u.reduce(function (r, i, a) {
                                    return r + c[a] * Math.pow(t, d - a) * Math.pow(e, a) * i[n];
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
        rQ = T,
        rJ = function (e, t, n) {
            if (!rJ[n]) throw Error("unknown blend mode " + n);
            return rJ[n](e, t);
        },
        r0 = function (e) {
            return function (t, n) {
                var r = rQ(n).rgb(),
                    i = rQ(t).rgb();
                return rQ.rgb(e(r, i));
            };
        },
        r1 = function (e) {
            return function (t, n) {
                var r = [];
                return (r[0] = e(t[0], n[0])), (r[1] = e(t[1], n[1])), (r[2] = e(t[2], n[2])), r;
            };
        },
        r2 = function (e, t) {
            return (e * t) / 255;
        },
        r3 = function (e, t) {
            return e > t ? t : e;
        },
        r6 = function (e, t) {
            return e > t ? e : t;
        },
        r4 = function (e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255));
        },
        r5 = function (e, t) {
            return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
        },
        r7 = function (e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255));
        },
        r8 = function (e, t) {
            return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
        };
    (rJ.normal = r0(
        r1(function (e) {
            return e;
        }),
    )),
        (rJ.multiply = r0(r1(r2))),
        (rJ.screen = r0(r1(r4))),
        (rJ.overlay = r0(r1(r5))),
        (rJ.darken = r0(r1(r3))),
        (rJ.lighten = r0(r1(r6))),
        (rJ.dodge = r0(r1(r8))),
        (rJ.burn = r0(r1(r7)));
    for (
        var r9 = rJ,
            ie = d.type,
            it = d.clip_rgb,
            ir = d.TWOPI,
            ii = Math.pow,
            ia = Math.sin,
            is = Math.cos,
            io = T,
            il = function (e, t, n, r, i) {
                void 0 === e && (e = 300),
                    void 0 === t && (t = -1.5),
                    void 0 === n && (n = 1),
                    void 0 === r && (r = 1),
                    void 0 === i && (i = [0, 1]);
                var a,
                    s = 0;
                "array" === ie(i) ? (a = i[1] - i[0]) : ((a = 0), (i = [i, i]));
                var o = function (o) {
                    var l = ir * ((e + 120) / 360 + t * o),
                        u = ii(i[0] + a * o, r),
                        c = ((0 !== s ? n[0] + o * s : n) * u * (1 - u)) / 2,
                        d = is(l),
                        _ = ia(l);
                    return io(
                        it([
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
                            : ("array" === ie((n = e)) ? 0 == (s = n[1] - n[0]) && (n = n[1]) : (s = 0), o);
                    }),
                    (o.lightness = function (e) {
                        return null == e
                            ? i
                            : ("array" === ie(e) ? ((i = e), (a = e[1] - e[0])) : ((i = [e, e]), (a = 0)), o);
                    }),
                    (o.scale = function () {
                        return io.scale(o);
                    }),
                    o.hue(n),
                    o
                );
            },
            iu = A,
            ic = "0123456789abcdef",
            id = Math.floor,
            i_ = Math.random,
            ih = function () {
                for (var e = "#", t = 0; t < 6; t++) e += ic.charAt(id(16 * i_()));
                return new iu(e, "hex");
            },
            ip = o,
            im = Math.log,
            ig = Math.pow,
            iE = Math.floor,
            iA = Math.abs,
            iI = function (e, t) {
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
                        return iT(n, e, t);
                    }),
                    n
                );
            },
            iT = function (e, t, n) {
                void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == ip(e) && (e = iI(e));
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
                    var l = Math.LOG10E * im(r),
                        u = Math.LOG10E * im(i);
                    s.push(r);
                    for (var c = 1; c < n; c++) s.push(ig(10, l + (c / n) * (u - l)));
                    s.push(i);
                } else if ("q" === t.substr(0, 1)) {
                    s.push(r);
                    for (var d = 1; d < n; d++) {
                        var _ = ((a.length - 1) * d) / n,
                            f = iE(_);
                        if (f === _) s.push(a[f]);
                        else {
                            var h = _ - f;
                            s.push(a[f] * (1 - h) + a[f + 1] * h);
                        }
                    }
                    s.push(i);
                } else if ("k" === t.substr(0, 1)) {
                    var p,
                        g = a.length,
                        E = Array(g),
                        A = Array(n),
                        I = !0,
                        T = 0,
                        y = null;
                    (y = []).push(r);
                    for (var S = 1; S < n; S++) y.push(r + (S / n) * (i - r));
                    for (y.push(i); I; ) {
                        for (var v = 0; v < n; v++) A[v] = 0;
                        for (var C = 0; C < g; C++)
                            for (var b = a[C], N = Number.MAX_VALUE, R = void 0, O = 0; O < n; O++) {
                                var D = iA(y[O] - b);
                                D < N && ((N = D), (R = O)), A[R]++, (E[C] = R);
                            }
                        for (var L = Array(n), w = 0; w < n; w++) L[w] = null;
                        for (var x = 0; x < g; x++) null === L[(p = E[x])] ? (L[p] = a[x]) : (L[p] += a[x]);
                        for (var P = 0; P < n; P++) L[P] *= 1 / A[P];
                        I = !1;
                        for (var M = 0; M < n; M++)
                            if (L[M] !== y[M]) {
                                I = !0;
                                break;
                            }
                        (y = L), ++T > 200 && (I = !1);
                    }
                    for (var k = {}, U = 0; U < n; U++) k[U] = [];
                    for (var G = 0; G < g; G++) k[(p = E[G])].push(a[G]);
                    for (var F = [], V = 0; V < n; V++) F.push(k[V][0]), F.push(k[V][k[V].length - 1]);
                    (F = F.sort(function (e, t) {
                        return e - t;
                    })),
                        s.push(F[0]);
                    for (var B = 1; B < F.length; B += 2) {
                        var j = F[B];
                        isNaN(j) || -1 !== s.indexOf(j) || s.push(j);
                    }
                }
                return s;
            },
            iy = iI,
            iS = iT,
            iv = A,
            iC = function (e, t) {
                (e = new iv(e)), (t = new iv(t));
                var n = e.luminance(),
                    r = t.luminance();
                return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
            },
            ib = A,
            iN = Math.sqrt,
            iR = Math.pow,
            iO = Math.min,
            iD = Math.max,
            iL = Math.atan2,
            iw = Math.abs,
            ix = Math.cos,
            iP = Math.sin,
            iM = Math.exp,
            ik = Math.PI,
            iU = function (e, t, n, r, i) {
                void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
                var a = function (e) {
                        return (360 * e) / (2 * ik);
                    },
                    s = function (e) {
                        return (2 * ik * e) / 360;
                    };
                (e = new ib(e)), (t = new ib(t));
                var o = Array.from(e.lab()),
                    l = o[0],
                    u = o[1],
                    c = o[2],
                    d = Array.from(t.lab()),
                    _ = d[0],
                    f = d[1],
                    h = d[2],
                    p = (l + _) / 2,
                    g = (iN(iR(u, 2) + iR(c, 2)) + iN(iR(f, 2) + iR(h, 2))) / 2,
                    E = 0.5 * (1 - iN(iR(g, 7) / (iR(g, 7) + iR(25, 7)))),
                    A = u * (1 + E),
                    I = f * (1 + E),
                    T = iN(iR(A, 2) + iR(c, 2)),
                    y = iN(iR(I, 2) + iR(h, 2)),
                    S = (T + y) / 2,
                    v = a(iL(c, A)),
                    C = a(iL(h, I)),
                    b = v >= 0 ? v : v + 360,
                    N = C >= 0 ? C : C + 360,
                    R = iw(b - N) > 180 ? (b + N + 360) / 2 : (b + N) / 2,
                    O =
                        1 -
                        0.17 * ix(s(R - 30)) +
                        0.24 * ix(s(2 * R)) +
                        0.32 * ix(s(3 * R + 6)) -
                        0.2 * ix(s(4 * R - 63)),
                    D = N - b;
                (D = 180 >= iw(D) ? D : N <= b ? D + 360 : D - 360), (D = 2 * iN(T * y) * iP(s(D) / 2));
                var L = _ - l,
                    w = y - T,
                    x = 1 + (0.015 * iR(p - 50, 2)) / iN(20 + iR(p - 50, 2)),
                    P = 1 + 0.045 * S,
                    M = 1 + 0.015 * S * O,
                    k = 30 * iM(-iR((R - 275) / 25, 2)),
                    U = -(2 * iN(iR(S, 7) / (iR(S, 7) + iR(25, 7)))) * iP(2 * s(k));
                return iD(
                    0,
                    iO(
                        100,
                        iN(
                            iR(L / (n * x), 2) +
                                iR(w / (r * P), 2) +
                                iR(D / (i * M), 2) +
                                (w / (r * P)) * U * (D / (i * M)),
                        ),
                    ),
                );
            },
            iG = A,
            iF = function (e, t, n) {
                void 0 === n && (n = "lab"), (e = new iG(e)), (t = new iG(t));
                var r = e.get(n),
                    i = t.get(n),
                    a = 0;
                for (var s in r) {
                    var o = (r[s] || 0) - (i[s] || 0);
                    a += o * o;
                }
                return Math.sqrt(a);
            },
            iV = A,
            iB = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                try {
                    return new (Function.prototype.bind.apply(iV, [null].concat(e)))(), !0;
                } catch (e) {
                    return !1;
                }
            },
            ij = T,
            iH = rW,
            iY = {
                cool: function () {
                    return iH([ij.hsl(180, 1, 0.9), ij.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return iH(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
                },
            },
            iW = {
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
            iK = 0,
            i$ = Object.keys(iW);
        iK < i$.length;
        iK += 1
    ) {
        var iz = i$[iK];
        iW[iz.toLowerCase()] = iW[iz];
    }
    var iq = iW,
        iX = T;
    return (
        (iX.average = rV),
        (iX.bezier = rZ),
        (iX.blend = r9),
        (iX.cubehelix = il),
        (iX.mix = iX.interpolate = rl),
        (iX.random = ih),
        (iX.scale = rW),
        (iX.analyze = iy),
        (iX.contrast = iC),
        (iX.deltaE = iU),
        (iX.distance = iF),
        (iX.limits = iS),
        (iX.valid = iB),
        (iX.scales = iY),
        (iX.colors = t4),
        (iX.brewer = iq),
        iX
    );
});
