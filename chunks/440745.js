!(function (t) {
    var r,
        n,
        i,
        o = /^\s+/,
        a = /\s+$/,
        s = 0,
        l = t.round,
        u = t.min,
        c = t.max,
        f = t.random;
    function d(e, r) {
        if (((r = r || {}), (e = e || "") instanceof d)) return e;
        if (!(this instanceof d)) return new d(e, r);
        var n,
            i,
            f,
            p,
            h,
            m,
            v,
            y,
            g,
            b,
            w,
            _,
            S,
            x,
            E,
            k,
            C,
            T,
            M,
            P,
            I =
                ((i = { r: 0, g: 0, b: 0 }),
                (f = 1),
                (p = null),
                (h = null),
                (m = null),
                (v = !1),
                (y = !1),
                "string" == typeof (n = e) &&
                    (n = (function (e) {
                        e = e.replace(o, "").replace(a, "").toLowerCase();
                        var t,
                            r = !1;
                        if (A[e]) (e = A[e]), (r = !0);
                        else if ("transparent" == e) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                        return (t = B.rgb.exec(e))
                            ? { r: t[1], g: t[2], b: t[3] }
                            : (t = B.rgba.exec(e))
                              ? { r: t[1], g: t[2], b: t[3], a: t[4] }
                              : (t = B.hsl.exec(e))
                                ? { h: t[1], s: t[2], l: t[3] }
                                : (t = B.hsla.exec(e))
                                  ? { h: t[1], s: t[2], l: t[3], a: t[4] }
                                  : (t = B.hsv.exec(e))
                                    ? { h: t[1], s: t[2], v: t[3] }
                                    : (t = B.hsva.exec(e))
                                      ? { h: t[1], s: t[2], v: t[3], a: t[4] }
                                      : (t = B.hex8.exec(e))
                                        ? {
                                              r: L(t[1]),
                                              g: L(t[2]),
                                              b: L(t[3]),
                                              a: L(t[4]) / 255,
                                              format: r ? "name" : "hex8",
                                          }
                                        : (t = B.hex6.exec(e))
                                          ? { r: L(t[1]), g: L(t[2]), b: L(t[3]), format: r ? "name" : "hex" }
                                          : (t = B.hex4.exec(e))
                                            ? {
                                                  r: L(t[1] + "" + t[1]),
                                                  g: L(t[2] + "" + t[2]),
                                                  b: L(t[3] + "" + t[3]),
                                                  a: L(t[4] + "" + t[4]) / 255,
                                                  format: r ? "name" : "hex8",
                                              }
                                            : !!(t = B.hex3.exec(e)) && {
                                                  r: L(t[1] + "" + t[1]),
                                                  g: L(t[2] + "" + t[2]),
                                                  b: L(t[3] + "" + t[3]),
                                                  format: r ? "name" : "hex",
                                              };
                    })(n)),
                "object" == typeof n &&
                    (K(n.r) && K(n.g) && K(n.b)
                        ? ((g = n.r),
                          (b = n.g),
                          (w = n.b),
                          (i = { r: 255 * D(g, 255), g: 255 * D(b, 255), b: 255 * D(w, 255) }),
                          (v = !0),
                          (y = "%" === String(n.r).substr(-1) ? "prgb" : "rgb"))
                        : K(n.h) && K(n.s) && K(n.v)
                          ? ((p = N(n.s)),
                            (h = N(n.v)),
                            (_ = n.h),
                            (S = p),
                            (x = h),
                            (_ = 6 * D(_, 360)),
                            (S = D(S, 100)),
                            (x = D(x, 100)),
                            (E = t.floor(_)),
                            (k = _ - E),
                            (C = x * (1 - S)),
                            (T = x * (1 - k * S)),
                            (M = x * (1 - (1 - k) * S)),
                            (i = {
                                r: 255 * [x, T, C, C, M, x][(P = E % 6)],
                                g: 255 * [M, x, x, T, C, C][P],
                                b: 255 * [C, C, M, x, x, T][P],
                            }),
                            (v = !0),
                            (y = "hsv"))
                          : K(n.h) &&
                            K(n.s) &&
                            K(n.l) &&
                            ((p = N(n.s)),
                            (m = N(n.l)),
                            (i = (function (e, t, r) {
                                var n, i, o;
                                function a(e, t, r) {
                                    return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
                                        ? e + (t - e) * 6 * r
                                        : r < 0.5
                                          ? t
                                          : r < 2 / 3
                                            ? e + (t - e) * (2 / 3 - r) * 6
                                            : e;
                                }
                                if (((e = D(e, 360)), (t = D(t, 100)), (r = D(r, 100)), 0 === t)) n = i = o = r;
                                else {
                                    var s = r < 0.5 ? r * (1 + t) : r + t - r * t,
                                        l = 2 * r - s;
                                    (n = a(l, s, e + 1 / 3)), (i = a(l, s, e)), (o = a(l, s, e - 1 / 3));
                                }
                                return { r: 255 * n, g: 255 * i, b: 255 * o };
                            })(n.h, p, m)),
                            (v = !0),
                            (y = "hsl")),
                    n.hasOwnProperty("a") && (f = n.a)),
                (f = O(f)),
                {
                    ok: v,
                    format: n.format || y,
                    r: u(255, c(i.r, 0)),
                    g: u(255, c(i.g, 0)),
                    b: u(255, c(i.b, 0)),
                    a: f,
                });
        (this._originalInput = e),
            (this._r = I.r),
            (this._g = I.g),
            (this._b = I.b),
            (this._a = I.a),
            (this._roundA = l(100 * this._a) / 100),
            (this._format = r.format || I.format),
            (this._gradientType = r.gradientType),
            this._r < 1 && (this._r = l(this._r)),
            this._g < 1 && (this._g = l(this._g)),
            this._b < 1 && (this._b = l(this._b)),
            (this._ok = I.ok),
            (this._tc_id = s++);
    }
    function p(e, t, r) {
        e = D(e, 255);
        var n,
            i,
            o = c(e, (t = D(t, 255)), (r = D(r, 255))),
            a = u(e, t, r),
            s = (o + a) / 2;
        if (o == a) n = i = 0;
        else {
            var l = o - a;
            switch (((i = s > 0.5 ? l / (2 - o - a) : l / (o + a)), o)) {
                case e:
                    n = (t - r) / l + 6 * (t < r);
                    break;
                case t:
                    n = (r - e) / l + 2;
                    break;
                case r:
                    n = (e - t) / l + 4;
            }
            n /= 6;
        }
        return { h: n, s: i, l: s };
    }
    function h(e, t, r) {
        e = D(e, 255);
        var n,
            i = c(e, (t = D(t, 255)), (r = D(r, 255))),
            o = u(e, t, r),
            a = i - o;
        if (i == o) n = 0;
        else {
            switch (i) {
                case e:
                    n = (t - r) / a + 6 * (t < r);
                    break;
                case t:
                    n = (r - e) / a + 2;
                    break;
                case r:
                    n = (e - t) / a + 4;
            }
            n /= 6;
        }
        return { h: n, s: 0 === i ? 0 : a / i, v: i };
    }
    function m(e, t, r, n) {
        var i = [F(l(e).toString(16)), F(l(t).toString(16)), F(l(r).toString(16))];
        return n &&
            i[0].charAt(0) == i[0].charAt(1) &&
            i[1].charAt(0) == i[1].charAt(1) &&
            i[2].charAt(0) == i[2].charAt(1)
            ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
            : i.join("");
    }
    function v(e, t, r, n) {
        return [F(j(n)), F(l(e).toString(16)), F(l(t).toString(16)), F(l(r).toString(16))].join("");
    }
    function y(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = d(e).toHsl();
        return (r.s -= t / 100), (r.s = R(r.s)), d(r);
    }
    function g(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = d(e).toHsl();
        return (r.s += t / 100), (r.s = R(r.s)), d(r);
    }
    function b(e) {
        return d(e).desaturate(100);
    }
    function w(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = d(e).toHsl();
        return (r.l += t / 100), (r.l = R(r.l)), d(r);
    }
    function _(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = d(e).toRgb();
        return (
            (r.r = c(0, u(255, r.r - l(-((t / 100) * 255))))),
            (r.g = c(0, u(255, r.g - l(-((t / 100) * 255))))),
            (r.b = c(0, u(255, r.b - l(-((t / 100) * 255))))),
            d(r)
        );
    }
    function S(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = d(e).toHsl();
        return (r.l -= t / 100), (r.l = R(r.l)), d(r);
    }
    function x(e, t) {
        var r = d(e).toHsl(),
            n = (r.h + t) % 360;
        return (r.h = n < 0 ? 360 + n : n), d(r);
    }
    function E(e) {
        var t = d(e).toHsl();
        return (t.h = (t.h + 180) % 360), d(t);
    }
    function k(e) {
        var t = d(e).toHsl(),
            r = t.h;
        return [d(e), d({ h: (r + 120) % 360, s: t.s, l: t.l }), d({ h: (r + 240) % 360, s: t.s, l: t.l })];
    }
    function C(e) {
        var t = d(e).toHsl(),
            r = t.h;
        return [
            d(e),
            d({ h: (r + 90) % 360, s: t.s, l: t.l }),
            d({ h: (r + 180) % 360, s: t.s, l: t.l }),
            d({ h: (r + 270) % 360, s: t.s, l: t.l }),
        ];
    }
    function T(e) {
        var t = d(e).toHsl(),
            r = t.h;
        return [d(e), d({ h: (r + 72) % 360, s: t.s, l: t.l }), d({ h: (r + 216) % 360, s: t.s, l: t.l })];
    }
    function M(e, t, r) {
        (t = t || 6), (r = r || 30);
        var n = d(e).toHsl(),
            i = 360 / r,
            o = [d(e)];
        for (n.h = (n.h - ((i * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + i) % 360), o.push(d(n));
        return o;
    }
    function P(e, t) {
        t = t || 6;
        for (var r = d(e).toHsv(), n = r.h, i = r.s, o = r.v, a = [], s = 1 / t; t--; )
            a.push(d({ h: n, s: i, v: o })), (o = (o + s) % 1);
        return a;
    }
    (d.prototype = {
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
                r,
                n,
                i,
                o = this.toRgb();
            return (
                (e = o.r / 255),
                (r = o.g / 255),
                (n = o.b / 255),
                (i = e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)),
                0.2126 * i +
                    0.7152 * (r <= 0.03928 ? r / 12.92 : t.pow((r + 0.055) / 1.055, 2.4)) +
                    0.0722 * (n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4))
            );
        },
        setAlpha: function (e) {
            return (this._a = O(e)), (this._roundA = l(100 * this._a) / 100), this;
        },
        toHsv: function () {
            var e = h(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
        },
        toHsvString: function () {
            var e = h(this._r, this._g, this._b),
                t = l(360 * e.h),
                r = l(100 * e.s),
                n = l(100 * e.v);
            return 1 == this._a
                ? "hsv(" + t + ", " + r + "%, " + n + "%)"
                : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function () {
            var e = p(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
            var e = p(this._r, this._g, this._b),
                t = l(360 * e.h),
                r = l(100 * e.s),
                n = l(100 * e.l);
            return 1 == this._a
                ? "hsl(" + t + ", " + r + "%, " + n + "%)"
                : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
            return m(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
            return "#" + this.toHex(e);
        },
        toHex8: function (e) {
            var t, r, n, i, o, a;
            return (
                (t = this._r),
                (r = this._g),
                (n = this._b),
                (i = this._a),
                (o = e),
                (a = [F(l(t).toString(16)), F(l(r).toString(16)), F(l(n).toString(16)), F(j(i))]),
                o &&
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
                r: l(100 * D(this._r, 255)) + "%",
                g: l(100 * D(this._g, 255)) + "%",
                b: l(100 * D(this._b, 255)) + "%",
                a: this._a,
            };
        },
        toPercentageRgbString: function () {
            return 1 == this._a
                ? "rgb(" +
                      l(100 * D(this._r, 255)) +
                      "%, " +
                      l(100 * D(this._g, 255)) +
                      "%, " +
                      l(100 * D(this._b, 255)) +
                      "%)"
                : "rgba(" +
                      l(100 * D(this._r, 255)) +
                      "%, " +
                      l(100 * D(this._g, 255)) +
                      "%, " +
                      l(100 * D(this._b, 255)) +
                      "%, " +
                      this._roundA +
                      ")";
        },
        toName: function () {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (I[m(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
            var t = "#" + v(this._r, this._g, this._b, this._a),
                r = t,
                n = this._gradientType ? "GradientType = 1, " : "";
            if (e) {
                var i = d(e);
                r = "#" + v(i._r, i._g, i._b, i._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + r + ")";
        },
        toString: function (e) {
            var t = !!e;
            e = e || this._format;
            var r = !1,
                n = this._a < 1 && this._a >= 0;
            return !t &&
                n &&
                ("hex" === e || "hex6" === e || "hex3" === e || "hex4" === e || "hex8" === e || "name" === e)
                ? "name" === e && 0 === this._a
                    ? this.toName()
                    : this.toRgbString()
                : ("rgb" === e && (r = this.toRgbString()),
                  "prgb" === e && (r = this.toPercentageRgbString()),
                  ("hex" === e || "hex6" === e) && (r = this.toHexString()),
                  "hex3" === e && (r = this.toHexString(!0)),
                  "hex4" === e && (r = this.toHex8String(!0)),
                  "hex8" === e && (r = this.toHex8String()),
                  "name" === e && (r = this.toName()),
                  "hsl" === e && (r = this.toHslString()),
                  "hsv" === e && (r = this.toHsvString()),
                  r || this.toHexString());
        },
        clone: function () {
            return d(this.toString());
        },
        _applyModification: function (e, t) {
            var r = e.apply(null, [this].concat([].slice.call(t)));
            return (this._r = r._r), (this._g = r._g), (this._b = r._b), this.setAlpha(r._a), this;
        },
        lighten: function () {
            return this._applyModification(w, arguments);
        },
        brighten: function () {
            return this._applyModification(_, arguments);
        },
        darken: function () {
            return this._applyModification(S, arguments);
        },
        desaturate: function () {
            return this._applyModification(y, arguments);
        },
        saturate: function () {
            return this._applyModification(g, arguments);
        },
        greyscale: function () {
            return this._applyModification(b, arguments);
        },
        spin: function () {
            return this._applyModification(x, arguments);
        },
        _applyCombination: function (e, t) {
            return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
            return this._applyCombination(M, arguments);
        },
        complement: function () {
            return this._applyCombination(E, arguments);
        },
        monochromatic: function () {
            return this._applyCombination(P, arguments);
        },
        splitcomplement: function () {
            return this._applyCombination(T, arguments);
        },
        triad: function () {
            return this._applyCombination(k, arguments);
        },
        tetrad: function () {
            return this._applyCombination(C, arguments);
        },
    }),
        (d.fromRatio = function (e, t) {
            if ("object" == typeof e) {
                var r = {};
                for (var n in e) e.hasOwnProperty(n) && ("a" === n ? (r[n] = e[n]) : (r[n] = N(e[n])));
                e = r;
            }
            return d(e, t);
        }),
        (d.equals = function (e, t) {
            return !!e && !!t && d(e).toRgbString() == d(t).toRgbString();
        }),
        (d.random = function () {
            return d.fromRatio({ r: f(), g: f(), b: f() });
        }),
        (d.mix = function (e, t, r) {
            r = 0 === r ? 0 : r || 50;
            var n = d(e).toRgb(),
                i = d(t).toRgb(),
                o = r / 100;
            return d({
                r: (i.r - n.r) * o + n.r,
                g: (i.g - n.g) * o + n.g,
                b: (i.b - n.b) * o + n.b,
                a: (i.a - n.a) * o + n.a,
            });
        }),
        (d.readability = function (e, r) {
            var n = d(e),
                i = d(r);
            return (
                (t.max(n.getLuminance(), i.getLuminance()) + 0.05) / (t.min(n.getLuminance(), i.getLuminance()) + 0.05)
            );
        }),
        (d.isReadable = function (e, t, r) {
            var n,
                i,
                o,
                a,
                s,
                l = d.readability(e, t);
            switch (
                ((s = !1),
                ((i = ((n = (n = r) || { level: "AA", size: "small" }).level || "AA").toUpperCase()),
                (o = (n.size || "small").toLowerCase()),
                "AA" !== i && "AAA" !== i && (i = "AA"),
                "small" !== o && "large" !== o && (o = "small"),
                (a = { level: i, size: o })).level + a.size)
            ) {
                case "AAsmall":
                case "AAAlarge":
                    s = l >= 4.5;
                    break;
                case "AAlarge":
                    s = l >= 3;
                    break;
                case "AAAsmall":
                    s = l >= 7;
            }
            return s;
        }),
        (d.mostReadable = function (e, t, r) {
            var n,
                i,
                o,
                a,
                s = null,
                l = 0;
            (i = (r = r || {}).includeFallbackColors), (o = r.level), (a = r.size);
            for (var u = 0; u < t.length; u++) (n = d.readability(e, t[u])) > l && ((l = n), (s = d(t[u])));
            return d.isReadable(e, s, { level: o, size: a }) || !i
                ? s
                : ((r.includeFallbackColors = !1), d.mostReadable(e, ["#fff", "#000"], r));
        });
    var A = (d.names = {
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
        I = (d.hexNames = (function (e) {
            var t = {};
            for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
            return t;
        })(A));
    function O(e) {
        return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
    }
    function D(e, r) {
        "string" == typeof (n = e) && -1 != n.indexOf(".") && 1 === parseFloat(n) && (e = "100%");
        var n,
            i,
            o = "string" == typeof (i = e) && -1 != i.indexOf("%");
        return ((e = u(r, c(0, parseFloat(e)))), o && (e = parseInt(e * r, 10) / 100), 1e-6 > t.abs(e - r))
            ? 1
            : (e % r) / parseFloat(r);
    }
    function R(e) {
        return u(1, c(0, e));
    }
    function L(e) {
        return parseInt(e, 16);
    }
    function F(e) {
        return 1 == e.length ? "0" + e : "" + e;
    }
    function N(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
    }
    function j(e) {
        return t.round(255 * parseFloat(e)).toString(16);
    }
    var B =
        ((n =
            "[\\s|\\(]+(" +
            (r = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            r +
            ")[,|\\s]+(" +
            r +
            ")\\s*\\)?"),
        (i = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?"),
        {
            CSS_UNIT: new RegExp(r),
            rgb: RegExp("rgb" + n),
            rgba: RegExp("rgba" + i),
            hsl: RegExp("hsl" + n),
            hsla: RegExp("hsla" + i),
            hsv: RegExp("hsv" + n),
            hsva: RegExp("hsva" + i),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        });
    function K(e) {
        return !!B.CSS_UNIT.exec(e);
    }
    e.exports
        ? (e.exports = d)
        : "function" == typeof define && define.amd
          ? define(function () {
                return d;
            })
          : (window.tinycolor = d);
})(Math);
