!(function (t) {
    var r,
        n,
        o,
        i = /^\s+/,
        a = /\s+$/,
        s = 0,
        l = t.round,
        u = t.min,
        c = t.max,
        f = t.random;
    function p(e, r) {
        if (((r = r || {}), (e = e || "") instanceof p)) return e;
        if (!(this instanceof p)) return new p(e, r);
        var n,
            o,
            f,
            d,
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
            O =
                ((o = { r: 0, g: 0, b: 0 }),
                (f = 1),
                (d = null),
                (h = null),
                (m = null),
                (v = !1),
                (y = !1),
                "string" == typeof (n = e) &&
                    (n = (function (e) {
                        e = e.replace(i, "").replace(a, "").toLowerCase();
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
                                              r: R(t[1]),
                                              g: R(t[2]),
                                              b: R(t[3]),
                                              a: R(t[4]) / 255,
                                              format: r ? "name" : "hex8",
                                          }
                                        : (t = B.hex6.exec(e))
                                          ? { r: R(t[1]), g: R(t[2]), b: R(t[3]), format: r ? "name" : "hex" }
                                          : (t = B.hex4.exec(e))
                                            ? {
                                                  r: R(t[1] + "" + t[1]),
                                                  g: R(t[2] + "" + t[2]),
                                                  b: R(t[3] + "" + t[3]),
                                                  a: R(t[4] + "" + t[4]) / 255,
                                                  format: r ? "name" : "hex8",
                                              }
                                            : !!(t = B.hex3.exec(e)) && {
                                                  r: R(t[1] + "" + t[1]),
                                                  g: R(t[2] + "" + t[2]),
                                                  b: R(t[3] + "" + t[3]),
                                                  format: r ? "name" : "hex",
                                              };
                    })(n)),
                "object" == typeof n &&
                    ($(n.r) && $(n.g) && $(n.b)
                        ? ((g = n.r),
                          (b = n.g),
                          (w = n.b),
                          (o = { r: 255 * D(g, 255), g: 255 * D(b, 255), b: 255 * D(w, 255) }),
                          (v = !0),
                          (y = "%" === String(n.r).substr(-1) ? "prgb" : "rgb"))
                        : $(n.h) && $(n.s) && $(n.v)
                          ? ((d = N(n.s)),
                            (h = N(n.v)),
                            (_ = n.h),
                            (S = d),
                            (x = h),
                            (_ = 6 * D(_, 360)),
                            (S = D(S, 100)),
                            (x = D(x, 100)),
                            (E = t.floor(_)),
                            (k = _ - E),
                            (C = x * (1 - S)),
                            (T = x * (1 - k * S)),
                            (M = x * (1 - (1 - k) * S)),
                            (o = {
                                r: 255 * [x, T, C, C, M, x][(P = E % 6)],
                                g: 255 * [M, x, x, T, C, C][P],
                                b: 255 * [C, C, M, x, x, T][P],
                            }),
                            (v = !0),
                            (y = "hsv"))
                          : $(n.h) &&
                            $(n.s) &&
                            $(n.l) &&
                            ((d = N(n.s)),
                            (m = N(n.l)),
                            (o = (function (e, t, r) {
                                var n, o, i;
                                function a(e, t, r) {
                                    return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
                                        ? e + (t - e) * 6 * r
                                        : r < 0.5
                                          ? t
                                          : r < 2 / 3
                                            ? e + (t - e) * (2 / 3 - r) * 6
                                            : e;
                                }
                                if (((e = D(e, 360)), (t = D(t, 100)), (r = D(r, 100)), 0 === t)) n = o = i = r;
                                else {
                                    var s = r < 0.5 ? r * (1 + t) : r + t - r * t,
                                        l = 2 * r - s;
                                    (n = a(l, s, e + 1 / 3)), (o = a(l, s, e)), (i = a(l, s, e - 1 / 3));
                                }
                                return { r: 255 * n, g: 255 * o, b: 255 * i };
                            })(n.h, d, m)),
                            (v = !0),
                            (y = "hsl")),
                    n.hasOwnProperty("a") && (f = n.a)),
                (f = I(f)),
                {
                    ok: v,
                    format: n.format || y,
                    r: u(255, c(o.r, 0)),
                    g: u(255, c(o.g, 0)),
                    b: u(255, c(o.b, 0)),
                    a: f,
                });
        (this._originalInput = e),
            (this._r = O.r),
            (this._g = O.g),
            (this._b = O.b),
            (this._a = O.a),
            (this._roundA = l(100 * this._a) / 100),
            (this._format = r.format || O.format),
            (this._gradientType = r.gradientType),
            this._r < 1 && (this._r = l(this._r)),
            this._g < 1 && (this._g = l(this._g)),
            this._b < 1 && (this._b = l(this._b)),
            (this._ok = O.ok),
            (this._tc_id = s++);
    }
    function d(e, t, r) {
        e = D(e, 255);
        var n,
            o,
            i = c(e, (t = D(t, 255)), (r = D(r, 255))),
            a = u(e, t, r),
            s = (i + a) / 2;
        if (i == a) n = o = 0;
        else {
            var l = i - a;
            switch (((o = s > 0.5 ? l / (2 - i - a) : l / (i + a)), i)) {
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
        return { h: n, s: o, l: s };
    }
    function h(e, t, r) {
        e = D(e, 255);
        var n,
            o = c(e, (t = D(t, 255)), (r = D(r, 255))),
            i = u(e, t, r),
            a = o - i;
        if (o == i) n = 0;
        else {
            switch (o) {
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
        return { h: n, s: 0 === o ? 0 : a / o, v: o };
    }
    function m(e, t, r, n) {
        var o = [F(l(e).toString(16)), F(l(t).toString(16)), F(l(r).toString(16))];
        return n &&
            o[0].charAt(0) == o[0].charAt(1) &&
            o[1].charAt(0) == o[1].charAt(1) &&
            o[2].charAt(0) == o[2].charAt(1)
            ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
            : o.join("");
    }
    function v(e, t, r, n) {
        return [F(j(n)), F(l(e).toString(16)), F(l(t).toString(16)), F(l(r).toString(16))].join("");
    }
    function y(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = p(e).toHsl();
        return (r.s -= t / 100), (r.s = L(r.s)), p(r);
    }
    function g(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = p(e).toHsl();
        return (r.s += t / 100), (r.s = L(r.s)), p(r);
    }
    function b(e) {
        return p(e).desaturate(100);
    }
    function w(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = p(e).toHsl();
        return (r.l += t / 100), (r.l = L(r.l)), p(r);
    }
    function _(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = p(e).toRgb();
        return (
            (r.r = c(0, u(255, r.r - l(-((t / 100) * 255))))),
            (r.g = c(0, u(255, r.g - l(-((t / 100) * 255))))),
            (r.b = c(0, u(255, r.b - l(-((t / 100) * 255))))),
            p(r)
        );
    }
    function S(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = p(e).toHsl();
        return (r.l -= t / 100), (r.l = L(r.l)), p(r);
    }
    function x(e, t) {
        var r = p(e).toHsl(),
            n = (r.h + t) % 360;
        return (r.h = n < 0 ? 360 + n : n), p(r);
    }
    function E(e) {
        var t = p(e).toHsl();
        return (t.h = (t.h + 180) % 360), p(t);
    }
    function k(e) {
        var t = p(e).toHsl(),
            r = t.h;
        return [p(e), p({ h: (r + 120) % 360, s: t.s, l: t.l }), p({ h: (r + 240) % 360, s: t.s, l: t.l })];
    }
    function C(e) {
        var t = p(e).toHsl(),
            r = t.h;
        return [
            p(e),
            p({ h: (r + 90) % 360, s: t.s, l: t.l }),
            p({ h: (r + 180) % 360, s: t.s, l: t.l }),
            p({ h: (r + 270) % 360, s: t.s, l: t.l }),
        ];
    }
    function T(e) {
        var t = p(e).toHsl(),
            r = t.h;
        return [p(e), p({ h: (r + 72) % 360, s: t.s, l: t.l }), p({ h: (r + 216) % 360, s: t.s, l: t.l })];
    }
    function M(e, t, r) {
        (t = t || 6), (r = r || 30);
        var n = p(e).toHsl(),
            o = 360 / r,
            i = [p(e)];
        for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + o) % 360), i.push(p(n));
        return i;
    }
    function P(e, t) {
        t = t || 6;
        for (var r = p(e).toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--; )
            a.push(p({ h: n, s: o, v: i })), (i = (i + s) % 1);
        return a;
    }
    (p.prototype = {
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
                o,
                i = this.toRgb();
            return (
                (e = i.r / 255),
                (r = i.g / 255),
                (n = i.b / 255),
                (o = e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)),
                0.2126 * o +
                    0.7152 * (r <= 0.03928 ? r / 12.92 : t.pow((r + 0.055) / 1.055, 2.4)) +
                    0.0722 * (n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4))
            );
        },
        setAlpha: function (e) {
            return (this._a = I(e)), (this._roundA = l(100 * this._a) / 100), this;
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
            var e = d(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
            var e = d(this._r, this._g, this._b),
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
            var t, r, n, o, i, a;
            return (
                (t = this._r),
                (r = this._g),
                (n = this._b),
                (o = this._a),
                (i = e),
                (a = [F(l(t).toString(16)), F(l(r).toString(16)), F(l(n).toString(16)), F(j(o))]),
                i &&
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
            return 0 === this._a ? "transparent" : !(this._a < 1) && (O[m(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
            var t = "#" + v(this._r, this._g, this._b, this._a),
                r = t,
                n = this._gradientType ? "GradientType = 1, " : "";
            if (e) {
                var o = p(e);
                r = "#" + v(o._r, o._g, o._b, o._a);
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
            return p(this.toString());
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
        (p.fromRatio = function (e, t) {
            if ("object" == typeof e) {
                var r = {};
                for (var n in e) e.hasOwnProperty(n) && ("a" === n ? (r[n] = e[n]) : (r[n] = N(e[n])));
                e = r;
            }
            return p(e, t);
        }),
        (p.equals = function (e, t) {
            return !!e && !!t && p(e).toRgbString() == p(t).toRgbString();
        }),
        (p.random = function () {
            return p.fromRatio({ r: f(), g: f(), b: f() });
        }),
        (p.mix = function (e, t, r) {
            r = 0 === r ? 0 : r || 50;
            var n = p(e).toRgb(),
                o = p(t).toRgb(),
                i = r / 100;
            return p({
                r: (o.r - n.r) * i + n.r,
                g: (o.g - n.g) * i + n.g,
                b: (o.b - n.b) * i + n.b,
                a: (o.a - n.a) * i + n.a,
            });
        }),
        (p.readability = function (e, r) {
            var n = p(e),
                o = p(r);
            return (
                (t.max(n.getLuminance(), o.getLuminance()) + 0.05) / (t.min(n.getLuminance(), o.getLuminance()) + 0.05)
            );
        }),
        (p.isReadable = function (e, t, r) {
            var n,
                o,
                i,
                a,
                s,
                l = p.readability(e, t);
            switch (
                ((s = !1),
                ((o = ((n = (n = r) || { level: "AA", size: "small" }).level || "AA").toUpperCase()),
                (i = (n.size || "small").toLowerCase()),
                "AA" !== o && "AAA" !== o && (o = "AA"),
                "small" !== i && "large" !== i && (i = "small"),
                (a = { level: o, size: i })).level + a.size)
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
        (p.mostReadable = function (e, t, r) {
            var n,
                o,
                i,
                a,
                s = null,
                l = 0;
            (o = (r = r || {}).includeFallbackColors), (i = r.level), (a = r.size);
            for (var u = 0; u < t.length; u++) (n = p.readability(e, t[u])) > l && ((l = n), (s = p(t[u])));
            return p.isReadable(e, s, { level: i, size: a }) || !o
                ? s
                : ((r.includeFallbackColors = !1), p.mostReadable(e, ["#fff", "#000"], r));
        });
    var A = (p.names = {
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
        O = (p.hexNames = (function (e) {
            var t = {};
            for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
            return t;
        })(A));
    function I(e) {
        return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
    }
    function D(e, r) {
        "string" == typeof (n = e) && -1 != n.indexOf(".") && 1 === parseFloat(n) && (e = "100%");
        var n,
            o,
            i = "string" == typeof (o = e) && -1 != o.indexOf("%");
        return ((e = u(r, c(0, parseFloat(e)))), i && (e = parseInt(e * r, 10) / 100), 1e-6 > t.abs(e - r))
            ? 1
            : (e % r) / parseFloat(r);
    }
    function L(e) {
        return u(1, c(0, e));
    }
    function R(e) {
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
        (o = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?"),
        {
            CSS_UNIT: new RegExp(r),
            rgb: RegExp("rgb" + n),
            rgba: RegExp("rgba" + o),
            hsl: RegExp("hsl" + n),
            hsla: RegExp("hsla" + o),
            hsv: RegExp("hsv" + n),
            hsva: RegExp("hsva" + o),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        });
    function $(e) {
        return !!B.CSS_UNIT.exec(e);
    }
    e.exports
        ? (e.exports = p)
        : "function" == typeof define && define.amd
          ? define(function () {
                return p;
            })
          : (window.tinycolor = p);
})(Math);
