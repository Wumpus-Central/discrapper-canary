!(function (t) {
    var n,
        i,
        r,
        s = /^\s+/,
        a = /\s+$/,
        o = 0,
        l = t.round,
        u = t.min,
        c = t.max,
        d = t.random;
    function _(e, n) {
        if (((n = n || {}), (e = e || "") instanceof _)) return e;
        if (!(this instanceof _)) return new _(e, n);
        var i,
            r,
            d,
            h,
            f,
            p,
            E,
            m,
            g,
            A,
            I,
            T,
            S,
            y,
            N,
            v,
            C,
            R,
            O,
            b,
            L =
                ((r = { r: 0, g: 0, b: 0 }),
                (d = 1),
                (h = null),
                (f = null),
                (p = null),
                (E = !1),
                (m = !1),
                "string" == typeof (i = e) &&
                    (i = (function (e) {
                        e = e.replace(s, "").replace(a, "").toLowerCase();
                        var t,
                            n = !1;
                        if (D[e]) (e = D[e]), (n = !0);
                        else if ("transparent" == e) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                        return (t = F.rgb.exec(e))
                            ? { r: t[1], g: t[2], b: t[3] }
                            : (t = F.rgba.exec(e))
                              ? { r: t[1], g: t[2], b: t[3], a: t[4] }
                              : (t = F.hsl.exec(e))
                                ? { h: t[1], s: t[2], l: t[3] }
                                : (t = F.hsla.exec(e))
                                  ? { h: t[1], s: t[2], l: t[3], a: t[4] }
                                  : (t = F.hsv.exec(e))
                                    ? { h: t[1], s: t[2], v: t[3] }
                                    : (t = F.hsva.exec(e))
                                      ? { h: t[1], s: t[2], v: t[3], a: t[4] }
                                      : (t = F.hex8.exec(e))
                                        ? {
                                              r: x(t[1]),
                                              g: x(t[2]),
                                              b: x(t[3]),
                                              a: x(t[4]) / 255,
                                              format: n ? "name" : "hex8",
                                          }
                                        : (t = F.hex6.exec(e))
                                          ? { r: x(t[1]), g: x(t[2]), b: x(t[3]), format: n ? "name" : "hex" }
                                          : (t = F.hex4.exec(e))
                                            ? {
                                                  r: x(t[1] + "" + t[1]),
                                                  g: x(t[2] + "" + t[2]),
                                                  b: x(t[3] + "" + t[3]),
                                                  a: x(t[4] + "" + t[4]) / 255,
                                                  format: n ? "name" : "hex8",
                                              }
                                            : !!(t = F.hex3.exec(e)) && {
                                                  r: x(t[1] + "" + t[1]),
                                                  g: x(t[2] + "" + t[2]),
                                                  b: x(t[3] + "" + t[3]),
                                                  format: n ? "name" : "hex",
                                              };
                    })(i)),
                "object" == typeof i &&
                    (V(i.r) && V(i.g) && V(i.b)
                        ? ((g = i.r),
                          (A = i.g),
                          (I = i.b),
                          (r = { r: 255 * M(g, 255), g: 255 * M(A, 255), b: 255 * M(I, 255) }),
                          (E = !0),
                          (m = "%" === String(i.r).substr(-1) ? "prgb" : "rgb"))
                        : V(i.h) && V(i.s) && V(i.v)
                          ? ((h = U(i.s)),
                            (f = U(i.v)),
                            (T = i.h),
                            (S = h),
                            (y = f),
                            (T = 6 * M(T, 360)),
                            (S = M(S, 100)),
                            (y = M(y, 100)),
                            (N = t.floor(T)),
                            (v = T - N),
                            (C = y * (1 - S)),
                            (R = y * (1 - v * S)),
                            (O = y * (1 - (1 - v) * S)),
                            (r = {
                                r: 255 * [y, R, C, C, O, y][(b = N % 6)],
                                g: 255 * [O, y, y, R, C, C][b],
                                b: 255 * [C, C, O, y, y, R][b],
                            }),
                            (E = !0),
                            (m = "hsv"))
                          : V(i.h) &&
                            V(i.s) &&
                            V(i.l) &&
                            ((h = U(i.s)),
                            (p = U(i.l)),
                            (r = (function (e, t, n) {
                                var i, r, s;
                                function a(e, t, n) {
                                    return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
                                        ? e + (t - e) * 6 * n
                                        : n < 0.5
                                          ? t
                                          : n < 2 / 3
                                            ? e + (t - e) * (2 / 3 - n) * 6
                                            : e;
                                }
                                if (((e = M(e, 360)), (t = M(t, 100)), (n = M(n, 100)), 0 === t)) i = r = s = n;
                                else {
                                    var o = n < 0.5 ? n * (1 + t) : n + t - n * t,
                                        l = 2 * n - o;
                                    (i = a(l, o, e + 1 / 3)), (r = a(l, o, e)), (s = a(l, o, e - 1 / 3));
                                }
                                return { r: 255 * i, g: 255 * r, b: 255 * s };
                            })(i.h, h, p)),
                            (E = !0),
                            (m = "hsl")),
                    i.hasOwnProperty("a") && (d = i.a)),
                (d = w(d)),
                {
                    ok: E,
                    format: i.format || m,
                    r: u(255, c(r.r, 0)),
                    g: u(255, c(r.g, 0)),
                    b: u(255, c(r.b, 0)),
                    a: d,
                });
        (this._originalInput = e),
            (this._r = L.r),
            (this._g = L.g),
            (this._b = L.b),
            (this._a = L.a),
            (this._roundA = l(100 * this._a) / 100),
            (this._format = n.format || L.format),
            (this._gradientType = n.gradientType),
            this._r < 1 && (this._r = l(this._r)),
            this._g < 1 && (this._g = l(this._g)),
            this._b < 1 && (this._b = l(this._b)),
            (this._ok = L.ok),
            (this._tc_id = o++);
    }
    function h(e, t, n) {
        e = M(e, 255);
        var i,
            r,
            s = c(e, (t = M(t, 255)), (n = M(n, 255))),
            a = u(e, t, n),
            o = (s + a) / 2;
        if (s == a) i = r = 0;
        else {
            var l = s - a;
            switch (((r = o > 0.5 ? l / (2 - s - a) : l / (s + a)), s)) {
                case e:
                    i = (t - n) / l + 6 * (t < n);
                    break;
                case t:
                    i = (n - e) / l + 2;
                    break;
                case n:
                    i = (e - t) / l + 4;
            }
            i /= 6;
        }
        return { h: i, s: r, l: o };
    }
    function f(e, t, n) {
        e = M(e, 255);
        var i,
            r = c(e, (t = M(t, 255)), (n = M(n, 255))),
            s = u(e, t, n),
            a = r - s;
        if (r == s) i = 0;
        else {
            switch (r) {
                case e:
                    i = (t - n) / a + 6 * (t < n);
                    break;
                case t:
                    i = (n - e) / a + 2;
                    break;
                case n:
                    i = (e - t) / a + 4;
            }
            i /= 6;
        }
        return { h: i, s: 0 === r ? 0 : a / r, v: r };
    }
    function p(e, t, n, i) {
        var r = [k(l(e).toString(16)), k(l(t).toString(16)), k(l(n).toString(16))];
        return i &&
            r[0].charAt(0) == r[0].charAt(1) &&
            r[1].charAt(0) == r[1].charAt(1) &&
            r[2].charAt(0) == r[2].charAt(1)
            ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
            : r.join("");
    }
    function E(e, t, n, i) {
        return [k(G(i)), k(l(e).toString(16)), k(l(t).toString(16)), k(l(n).toString(16))].join("");
    }
    function m(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = _(e).toHsl();
        return (n.s -= t / 100), (n.s = P(n.s)), _(n);
    }
    function g(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = _(e).toHsl();
        return (n.s += t / 100), (n.s = P(n.s)), _(n);
    }
    function A(e) {
        return _(e).desaturate(100);
    }
    function I(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = _(e).toHsl();
        return (n.l += t / 100), (n.l = P(n.l)), _(n);
    }
    function T(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = _(e).toRgb();
        return (
            (n.r = c(0, u(255, n.r - l(-((t / 100) * 255))))),
            (n.g = c(0, u(255, n.g - l(-((t / 100) * 255))))),
            (n.b = c(0, u(255, n.b - l(-((t / 100) * 255))))),
            _(n)
        );
    }
    function S(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = _(e).toHsl();
        return (n.l -= t / 100), (n.l = P(n.l)), _(n);
    }
    function y(e, t) {
        var n = _(e).toHsl(),
            i = (n.h + t) % 360;
        return (n.h = i < 0 ? 360 + i : i), _(n);
    }
    function N(e) {
        var t = _(e).toHsl();
        return (t.h = (t.h + 180) % 360), _(t);
    }
    function v(e) {
        var t = _(e).toHsl(),
            n = t.h;
        return [_(e), _({ h: (n + 120) % 360, s: t.s, l: t.l }), _({ h: (n + 240) % 360, s: t.s, l: t.l })];
    }
    function C(e) {
        var t = _(e).toHsl(),
            n = t.h;
        return [
            _(e),
            _({ h: (n + 90) % 360, s: t.s, l: t.l }),
            _({ h: (n + 180) % 360, s: t.s, l: t.l }),
            _({ h: (n + 270) % 360, s: t.s, l: t.l }),
        ];
    }
    function R(e) {
        var t = _(e).toHsl(),
            n = t.h;
        return [_(e), _({ h: (n + 72) % 360, s: t.s, l: t.l }), _({ h: (n + 216) % 360, s: t.s, l: t.l })];
    }
    function O(e, t, n) {
        (t = t || 6), (n = n || 30);
        var i = _(e).toHsl(),
            r = 360 / n,
            s = [_(e)];
        for (i.h = (i.h - ((r * t) >> 1) + 720) % 360; --t; ) (i.h = (i.h + r) % 360), s.push(_(i));
        return s;
    }
    function b(e, t) {
        t = t || 6;
        for (var n = _(e).toHsv(), i = n.h, r = n.s, s = n.v, a = [], o = 1 / t; t--; )
            a.push(_({ h: i, s: r, v: s })), (s = (s + o) % 1);
        return a;
    }
    (_.prototype = {
        isDark: function () {
            return 128 > this.getBrightness();
        },
        isLight: function () {
            return !this.isDark();
        },
        isValid: function () {
            return this._ok;
        },
        getOriginalInput: function () {
            return this._originalInput;
        },
        getFormat: function () {
            return this._format;
        },
        getAlpha: function () {
            return this._a;
        },
        getBrightness: function () {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
        },
        getLuminance: function () {
            var e,
                n,
                i,
                r,
                s = this.toRgb();
            return (
                (e = s.r / 255),
                (n = s.g / 255),
                (i = s.b / 255),
                (r = e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)),
                0.2126 * r +
                    0.7152 * (n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4)) +
                    0.0722 * (i <= 0.03928 ? i / 12.92 : t.pow((i + 0.055) / 1.055, 2.4))
            );
        },
        setAlpha: function (e) {
            return (this._a = w(e)), (this._roundA = l(100 * this._a) / 100), this;
        },
        toHsv: function () {
            var e = f(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
        },
        toHsvString: function () {
            var e = f(this._r, this._g, this._b),
                t = l(360 * e.h),
                n = l(100 * e.s),
                i = l(100 * e.v);
            return 1 == this._a
                ? "hsv(" + t + ", " + n + "%, " + i + "%)"
                : "hsva(" + t + ", " + n + "%, " + i + "%, " + this._roundA + ")";
        },
        toHsl: function () {
            var e = h(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
            var e = h(this._r, this._g, this._b),
                t = l(360 * e.h),
                n = l(100 * e.s),
                i = l(100 * e.l);
            return 1 == this._a
                ? "hsl(" + t + ", " + n + "%, " + i + "%)"
                : "hsla(" + t + ", " + n + "%, " + i + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
            return p(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
            return "#" + this.toHex(e);
        },
        toHex8: function (e) {
            var t, n, i, r, s, a;
            return (
                (t = this._r),
                (n = this._g),
                (i = this._b),
                (r = this._a),
                (s = e),
                (a = [k(l(t).toString(16)), k(l(n).toString(16)), k(l(i).toString(16)), k(G(r))]),
                s &&
                a[0].charAt(0) == a[0].charAt(1) &&
                a[1].charAt(0) == a[1].charAt(1) &&
                a[2].charAt(0) == a[2].charAt(1) &&
                a[3].charAt(0) == a[3].charAt(1)
                    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
                    : a.join("")
            );
        },
        toHex8String: function (e) {
            return "#" + this.toHex8(e);
        },
        toRgb: function () {
            return { r: l(this._r), g: l(this._g), b: l(this._b), a: this._a };
        },
        toRgbString: function () {
            return 1 == this._a
                ? "rgb(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ")"
                : "rgba(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function () {
            return {
                r: l(100 * M(this._r, 255)) + "%",
                g: l(100 * M(this._g, 255)) + "%",
                b: l(100 * M(this._b, 255)) + "%",
                a: this._a,
            };
        },
        toPercentageRgbString: function () {
            return 1 == this._a
                ? "rgb(" +
                      l(100 * M(this._r, 255)) +
                      "%, " +
                      l(100 * M(this._g, 255)) +
                      "%, " +
                      l(100 * M(this._b, 255)) +
                      "%)"
                : "rgba(" +
                      l(100 * M(this._r, 255)) +
                      "%, " +
                      l(100 * M(this._g, 255)) +
                      "%, " +
                      l(100 * M(this._b, 255)) +
                      "%, " +
                      this._roundA +
                      ")";
        },
        toName: function () {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (L[p(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
            var t = "#" + E(this._r, this._g, this._b, this._a),
                n = t,
                i = this._gradientType ? "GradientType = 1, " : "";
            if (e) {
                var r = _(e);
                n = "#" + E(r._r, r._g, r._b, r._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + t + ",endColorstr=" + n + ")";
        },
        toString: function (e) {
            var t = !!e;
            e = e || this._format;
            var n = !1,
                i = this._a < 1 && this._a >= 0;
            return !t &&
                i &&
                ("hex" === e || "hex6" === e || "hex3" === e || "hex4" === e || "hex8" === e || "name" === e)
                ? "name" === e && 0 === this._a
                    ? this.toName()
                    : this.toRgbString()
                : ("rgb" === e && (n = this.toRgbString()),
                  "prgb" === e && (n = this.toPercentageRgbString()),
                  ("hex" === e || "hex6" === e) && (n = this.toHexString()),
                  "hex3" === e && (n = this.toHexString(!0)),
                  "hex4" === e && (n = this.toHex8String(!0)),
                  "hex8" === e && (n = this.toHex8String()),
                  "name" === e && (n = this.toName()),
                  "hsl" === e && (n = this.toHslString()),
                  "hsv" === e && (n = this.toHsvString()),
                  n || this.toHexString());
        },
        clone: function () {
            return _(this.toString());
        },
        _applyModification: function (e, t) {
            var n = e.apply(null, [this].concat([].slice.call(t)));
            return (this._r = n._r), (this._g = n._g), (this._b = n._b), this.setAlpha(n._a), this;
        },
        lighten: function () {
            return this._applyModification(I, arguments);
        },
        brighten: function () {
            return this._applyModification(T, arguments);
        },
        darken: function () {
            return this._applyModification(S, arguments);
        },
        desaturate: function () {
            return this._applyModification(m, arguments);
        },
        saturate: function () {
            return this._applyModification(g, arguments);
        },
        greyscale: function () {
            return this._applyModification(A, arguments);
        },
        spin: function () {
            return this._applyModification(y, arguments);
        },
        _applyCombination: function (e, t) {
            return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
            return this._applyCombination(O, arguments);
        },
        complement: function () {
            return this._applyCombination(N, arguments);
        },
        monochromatic: function () {
            return this._applyCombination(b, arguments);
        },
        splitcomplement: function () {
            return this._applyCombination(R, arguments);
        },
        triad: function () {
            return this._applyCombination(v, arguments);
        },
        tetrad: function () {
            return this._applyCombination(C, arguments);
        },
    }),
        (_.fromRatio = function (e, t) {
            if ("object" == typeof e) {
                var n = {};
                for (var i in e) e.hasOwnProperty(i) && ("a" === i ? (n[i] = e[i]) : (n[i] = U(e[i])));
                e = n;
            }
            return _(e, t);
        }),
        (_.equals = function (e, t) {
            return !!e && !!t && _(e).toRgbString() == _(t).toRgbString();
        }),
        (_.random = function () {
            return _.fromRatio({ r: d(), g: d(), b: d() });
        }),
        (_.mix = function (e, t, n) {
            n = 0 === n ? 0 : n || 50;
            var i = _(e).toRgb(),
                r = _(t).toRgb(),
                s = n / 100;
            return _({
                r: (r.r - i.r) * s + i.r,
                g: (r.g - i.g) * s + i.g,
                b: (r.b - i.b) * s + i.b,
                a: (r.a - i.a) * s + i.a,
            });
        }),
        (_.readability = function (e, n) {
            var i = _(e),
                r = _(n);
            return (
                (t.max(i.getLuminance(), r.getLuminance()) + 0.05) / (t.min(i.getLuminance(), r.getLuminance()) + 0.05)
            );
        }),
        (_.isReadable = function (e, t, n) {
            var i,
                r,
                s,
                a,
                o,
                l = _.readability(e, t);
            switch (
                ((o = !1),
                ((r = ((i = (i = n) || { level: "AA", size: "small" }).level || "AA").toUpperCase()),
                (s = (i.size || "small").toLowerCase()),
                "AA" !== r && "AAA" !== r && (r = "AA"),
                "small" !== s && "large" !== s && (s = "small"),
                (a = { level: r, size: s })).level + a.size)
            ) {
                case "AAsmall":
                case "AAAlarge":
                    o = l >= 4.5;
                    break;
                case "AAlarge":
                    o = l >= 3;
                    break;
                case "AAAsmall":
                    o = l >= 7;
            }
            return o;
        }),
        (_.mostReadable = function (e, t, n) {
            var i,
                r,
                s,
                a,
                o = null,
                l = 0;
            (r = (n = n || {}).includeFallbackColors), (s = n.level), (a = n.size);
            for (var u = 0; u < t.length; u++) (i = _.readability(e, t[u])) > l && ((l = i), (o = _(t[u])));
            return _.isReadable(e, o, { level: s, size: a }) || !r
                ? o
                : ((n.includeFallbackColors = !1), _.mostReadable(e, ["#fff", "#000"], n));
        });
    var D = (_.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32",
        }),
        L = (_.hexNames = (function (e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
            return t;
        })(D));
    function w(e) {
        return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
    }
    function M(e, n) {
        "string" == typeof (i = e) && -1 != i.indexOf(".") && 1 === parseFloat(i) && (e = "100%");
        var i,
            r,
            s = "string" == typeof (r = e) && -1 != r.indexOf("%");
        return ((e = u(n, c(0, parseFloat(e)))), s && (e = parseInt(e * n, 10) / 100), 1e-6 > t.abs(e - n))
            ? 1
            : (e % n) / parseFloat(n);
    }
    function P(e) {
        return u(1, c(0, e));
    }
    function x(e) {
        return parseInt(e, 16);
    }
    function k(e) {
        return 1 == e.length ? "0" + e : "" + e;
    }
    function U(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
    }
    function G(e) {
        return t.round(255 * parseFloat(e)).toString(16);
    }
    var F =
        ((i =
            "[\\s|\\(]+(" +
            (n = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            n +
            ")[,|\\s]+(" +
            n +
            ")\\s*\\)?"),
        (r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?"),
        {
            CSS_UNIT: new RegExp(n),
            rgb: RegExp("rgb" + i),
            rgba: RegExp("rgba" + r),
            hsl: RegExp("hsl" + i),
            hsla: RegExp("hsla" + r),
            hsv: RegExp("hsv" + i),
            hsva: RegExp("hsva" + r),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        });
    function V(e) {
        return !!F.CSS_UNIT.exec(e);
    }
    e.exports
        ? (e.exports = _)
        : "function" == typeof define && define.amd
          ? define(function () {
                return _;
            })
          : (window.tinycolor = _);
})(Math);
