t.exports = (function () {
    for (
        var t = function (t, e, a) {
                return void 0 === e && (e = 0), void 0 === a && (a = 1), t < e ? e : t > a ? a : t;
            },
            e = {},
            a = 0,
            r = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null'];
        a < r.length;
        a += 1
    ) {
        var n = r[a];
        e['[object ' + n + ']'] = n.toLowerCase();
    }
    var _ = function (t) {
            return e[Object.prototype.toString.call(t)] || 'object';
        },
        o = Math.PI,
        i = {
            clip_rgb: function (e) {
                (e._clipped = !1), (e._unclipped = e.slice(0));
                for (var a = 0; a <= 3; a++) a < 3 ? ((e[a] < 0 || e[a] > 255) && (e._clipped = !0), (e[a] = t(e[a], 0, 255))) : 3 === a && (e[a] = t(e[a], 0, 1));
                return e;
            },
            limit: t,
            type: _,
            unpack: function (t, e) {
                return (void 0 === e && (e = null), t.length >= 3)
                    ? Array.prototype.slice.call(t)
                    : 'object' == _(t[0]) && e
                      ? e
                            .split('')
                            .filter(function (e) {
                                return void 0 !== t[0][e];
                            })
                            .map(function (e) {
                                return t[0][e];
                            })
                      : t[0];
            },
            last: function (t) {
                if (t.length < 2) return null;
                var e = t.length - 1;
                return 'string' == _(t[e]) ? t[e].toLowerCase() : null;
            },
            TWOPI: 2 * o,
            PITHIRD: o / 3,
            DEG2RAD: o / 180,
            RAD2DEG: 180 / o
        },
        c = {
            format: {},
            autodetect: []
        },
        s = i.last,
        E = i.clip_rgb,
        l = i.type,
        u = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if ('object' === l(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
            var a = s(t),
                r = !1;
            if (!a) {
                (r = !0),
                    c.sorted ||
                        ((c.autodetect = c.autodetect.sort(function (t, e) {
                            return e.p - t.p;
                        })),
                        (c.sorted = !0));
                for (var n = 0, _ = c.autodetect; n < _.length; n += 1) {
                    var o = _[n];
                    if ((a = o.test.apply(o, t))) break;
                }
            }
            if (c.format[a]) {
                var i = c.format[a].apply(null, r ? t : t.slice(0, -1));
                this._rgb = E(i);
            } else throw Error('unknown format: ' + t);
            3 === this._rgb.length && this._rgb.push(1);
        };
    u.prototype.toString = function () {
        return 'function' == l(this.hex) ? this.hex() : '[' + this._rgb.join(',') + ']';
    };
    var I = function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        return new (Function.prototype.bind.apply(I.Color, [null].concat(t)))();
    };
    (I.Color = u), (I.version = '2.4.2');
    var R = i.unpack,
        d = Math.max,
        A = i.unpack,
        f = i.unpack,
        p = i.type,
        N = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = R(t, 'rgb'),
                r = a[0],
                n = a[1],
                _ = a[2],
                o = 1 - d((r /= 255), d((n /= 255), (_ /= 255))),
                i = o < 1 ? 1 / (1 - o) : 0;
            return [(1 - r - o) * i, (1 - n - o) * i, (1 - _ - o) * i, o];
        };
    (u.prototype.cmyk = function () {
        return N(this._rgb);
    }),
        (I.cmyk = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['cmyk'])))();
        }),
        (c.format.cmyk = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = (t = A(t, 'cmyk'))[0],
                r = t[1],
                n = t[2],
                _ = t[3],
                o = t.length > 4 ? t[4] : 1;
            return 1 === _ ? [0, 0, 0, o] : [a >= 1 ? 0 : 255 * (1 - a) * (1 - _), r >= 1 ? 0 : 255 * (1 - r) * (1 - _), n >= 1 ? 0 : 255 * (1 - n) * (1 - _), o];
        }),
        c.autodetect.push({
            p: 2,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === p((t = f(t, 'cmyk'))) && 4 === t.length) return 'cmyk';
            }
        });
    var T = i.unpack,
        L = i.last,
        h = function (t) {
            return Math.round(100 * t) / 100;
        },
        O = i.unpack,
        D = function () {
            for (var t, e, a = [], r = arguments.length; r--; ) a[r] = arguments[r];
            var n = (a = O(a, 'rgba'))[0],
                _ = a[1],
                o = a[2],
                i = Math.min((n /= 255), (_ /= 255), (o /= 255)),
                c = Math.max(n, _, o),
                s = (c + i) / 2;
            return (c === i ? ((t = 0), (e = Number.NaN)) : (t = s < 0.5 ? (c - i) / (c + i) : (c - i) / (2 - c - i)), n == c ? (e = (_ - o) / (c - i)) : _ == c ? (e = 2 + (o - n) / (c - i)) : o == c && (e = 4 + (n - _) / (c - i)), (e *= 60) < 0 && (e += 360), a.length > 3 && void 0 !== a[3]) ? [e, t, s, a[3]] : [e, t, s];
        },
        g = i.unpack,
        P = i.last,
        m = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = T(t, 'hsla'),
                r = L(t) || 'lsa';
            return (a[0] = h(a[0] || 0)), (a[1] = h(100 * a[1]) + '%'), (a[2] = h(100 * a[2]) + '%'), 'hsla' === r || (a.length > 3 && a[3] < 1) ? ((a[3] = a.length > 3 ? a[3] : 1), (r = 'hsla')) : (a.length = 3), r + '(' + a.join(',') + ')';
        },
        y = Math.round,
        v = i.unpack,
        C = Math.round,
        S = function () {
            for (var t, e, a, r, n = [], _ = arguments.length; _--; ) n[_] = arguments[_];
            var o = (n = v(n, 'hsl'))[0],
                i = n[1],
                c = n[2];
            if (0 === i) e = a = r = 255 * c;
            else {
                var s = [0, 0, 0],
                    E = [0, 0, 0],
                    l = c < 0.5 ? c * (1 + i) : c + i - c * i,
                    u = 2 * c - l,
                    I = o / 360;
                (s[0] = I + 1 / 3), (s[1] = I), (s[2] = I - 1 / 3);
                for (var R = 0; R < 3; R++) s[R] < 0 && (s[R] += 1), s[R] > 1 && (s[R] -= 1), 6 * s[R] < 1 ? (E[R] = u + (l - u) * 6 * s[R]) : 2 * s[R] < 1 ? (E[R] = l) : 3 * s[R] < 2 ? (E[R] = u + (l - u) * (2 / 3 - s[R]) * 6) : (E[R] = u);
                (e = (t = [C(255 * E[0]), C(255 * E[1]), C(255 * E[2])])[0]), (a = t[1]), (r = t[2]);
            }
            return n.length > 3 ? [e, a, r, n[3]] : [e, a, r, 1];
        },
        G = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        b = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        M = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        U = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        w = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        B = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        W = Math.round,
        Y = function (t) {
            if (((t = t.toLowerCase().trim()), c.format.named))
                try {
                    return c.format.named(t);
                } catch (t) {}
            if ((e = t.match(G))) {
                for (var e, a = e.slice(1, 4), r = 0; r < 3; r++) a[r] = +a[r];
                return (a[3] = 1), a;
            }
            if ((e = t.match(b))) {
                for (var n = e.slice(1, 5), _ = 0; _ < 4; _++) n[_] = +n[_];
                return n;
            }
            if ((e = t.match(M))) {
                for (var o = e.slice(1, 4), i = 0; i < 3; i++) o[i] = W(2.55 * o[i]);
                return (o[3] = 1), o;
            }
            if ((e = t.match(U))) {
                for (var s = e.slice(1, 5), E = 0; E < 3; E++) s[E] = W(2.55 * s[E]);
                return (s[3] = +s[3]), s;
            }
            if ((e = t.match(w))) {
                var l = e.slice(1, 4);
                (l[1] *= 0.01), (l[2] *= 0.01);
                var u = S(l);
                return (u[3] = 1), u;
            }
            if ((e = t.match(B))) {
                var I = e.slice(1, 4);
                (I[1] *= 0.01), (I[2] *= 0.01);
                var R = S(I);
                return (R[3] = +e[4]), R;
            }
        };
    Y.test = function (t) {
        return G.test(t) || b.test(t) || M.test(t) || U.test(t) || w.test(t) || B.test(t);
    };
    var H = i.type,
        K = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = g(t, 'rgba'),
                r = P(t) || 'rgb';
            return 'hsl' == r.substr(0, 3) ? m(D(a), r) : ((a[0] = y(a[0])), (a[1] = y(a[1])), (a[2] = y(a[2])), ('rgba' === r || (a.length > 3 && a[3] < 1)) && ((a[3] = a.length > 3 ? a[3] : 1), (r = 'rgba')), r + '(' + a.slice(0, 'rgb' === r ? 3 : 4).join(',') + ')');
        };
    (u.prototype.css = function (t) {
        return K(this._rgb, t);
    }),
        (I.css = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['css'])))();
        }),
        (c.format.css = Y),
        c.autodetect.push({
            p: 5,
            test: function (t) {
                for (var e = [], a = arguments.length - 1; a-- > 0; ) e[a] = arguments[a + 1];
                if (!e.length && 'string' === H(t) && Y.test(t)) return 'css';
            }
        });
    var k = i.unpack;
    (c.format.gl = function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var a = k(t, 'rgba');
        return (a[0] *= 255), (a[1] *= 255), (a[2] *= 255), a;
    }),
        (I.gl = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['gl'])))();
        }),
        (u.prototype.gl = function () {
            var t = this._rgb;
            return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]];
        });
    var x = i.unpack,
        V = i.unpack,
        F = Math.floor,
        j = i.unpack,
        X = i.type,
        $ = function () {
            for (var t, e = [], a = arguments.length; a--; ) e[a] = arguments[a];
            var r = x(e, 'rgb'),
                n = r[0],
                _ = r[1],
                o = r[2],
                i = Math.min(n, _, o),
                c = Math.max(n, _, o),
                s = c - i;
            return 0 === s ? (t = Number.NaN) : (n === c && (t = (_ - o) / s), _ === c && (t = 2 + (o - n) / s), o === c && (t = 4 + (n - _) / s), (t *= 60) < 0 && (t += 360)), [t, (100 * s) / 255, (i / (255 - s)) * 100];
        };
    (u.prototype.hcg = function () {
        return $(this._rgb);
    }),
        (I.hcg = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['hcg'])))();
        }),
        (c.format.hcg = function () {
            for (var t, e, a, r, n, _, o, i, c, s = [], E = arguments.length; E--; ) s[E] = arguments[E];
            var l = (s = V(s, 'hcg'))[0],
                u = s[1],
                I = s[2];
            I *= 255;
            var R = 255 * u;
            if (0 === u) o = i = c = I;
            else {
                360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                var d = F((l /= 60)),
                    A = l - d,
                    f = I * (1 - u),
                    p = f + R * (1 - A),
                    N = f + R * A,
                    T = f + R;
                switch (d) {
                    case 0:
                        (o = (t = [T, N, f])[0]), (i = t[1]), (c = t[2]);
                        break;
                    case 1:
                        (o = (e = [p, T, f])[0]), (i = e[1]), (c = e[2]);
                        break;
                    case 2:
                        (o = (a = [f, T, N])[0]), (i = a[1]), (c = a[2]);
                        break;
                    case 3:
                        (o = (r = [f, p, T])[0]), (i = r[1]), (c = r[2]);
                        break;
                    case 4:
                        (o = (n = [N, f, T])[0]), (i = n[1]), (c = n[2]);
                        break;
                    case 5:
                        (o = (_ = [T, f, p])[0]), (i = _[1]), (c = _[2]);
                }
            }
            return [o, i, c, s.length > 3 ? s[3] : 1];
        }),
        c.autodetect.push({
            p: 1,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === X((t = j(t, 'hcg'))) && 3 === t.length) return 'hcg';
            }
        });
    var q = i.unpack,
        z = i.last,
        J = Math.round,
        Z = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = q(t, 'rgba'),
                r = a[0],
                n = a[1],
                _ = a[2],
                o = a[3],
                i = z(t) || 'auto';
            void 0 === o && (o = 1), 'auto' === i && (i = o < 1 ? 'rgba' : 'rgb'), (r = J(r));
            var c = '000000' + ((r << 16) | ((n = J(n)) << 8) | (_ = J(_))).toString(16);
            c = c.substr(c.length - 6);
            var s = '0' + J(255 * o).toString(16);
            switch (((s = s.substr(s.length - 2)), i.toLowerCase())) {
                case 'rgba':
                    return '#' + c + s;
                case 'argb':
                    return '#' + s + c;
                default:
                    return '#' + c;
            }
        },
        Q = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        te = function (t) {
            if (t.match(Q)) {
                (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(''))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var e = parseInt(t, 16);
                return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            }
            if (t.match(tt)) {
                (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(''))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
                var a = parseInt(t, 16),
                    r = Math.round(((255 & a) / 255) * 100) / 100;
                return [(a >> 24) & 255, (a >> 16) & 255, (a >> 8) & 255, r];
            }
            throw Error('unknown hex color: ' + t);
        },
        ta = i.type;
    (u.prototype.hex = function (t) {
        return Z(this._rgb, t);
    }),
        (I.hex = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['hex'])))();
        }),
        (c.format.hex = te),
        c.autodetect.push({
            p: 4,
            test: function (t) {
                for (var e = [], a = arguments.length - 1; a-- > 0; ) e[a] = arguments[a + 1];
                if (!e.length && 'string' === ta(t) && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return 'hex';
            }
        });
    var tr = i.unpack,
        tn = i.TWOPI,
        t_ = Math.min,
        to = Math.sqrt,
        ti = Math.acos,
        tc = i.unpack,
        ts = i.limit,
        tE = i.TWOPI,
        tl = i.PITHIRD,
        tu = Math.cos,
        tI = i.unpack,
        tR = i.type,
        td = function () {
            for (var t, e = [], a = arguments.length; a--; ) e[a] = arguments[a];
            var r = tr(e, 'rgb'),
                n = r[0],
                _ = r[1],
                o = r[2],
                i = t_((n /= 255), (_ /= 255), (o /= 255)),
                c = (n + _ + o) / 3,
                s = c > 0 ? 1 - i / c : 0;
            return 0 === s ? (t = NaN) : ((t = ti((t = (n - _ + (n - o)) / 2 / to((n - _) * (n - _) + (n - o) * (_ - o))))), o > _ && (t = tn - t), (t /= tn)), [360 * t, s, c];
        };
    (u.prototype.hsi = function () {
        return td(this._rgb);
    }),
        (I.hsi = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['hsi'])))();
        }),
        (c.format.hsi = function () {
            for (var t, e, a, r = [], n = arguments.length; n--; ) r[n] = arguments[n];
            var _ = (r = tc(r, 'hsi'))[0],
                o = r[1],
                i = r[2];
            return isNaN(_) && (_ = 0), isNaN(o) && (o = 0), _ > 360 && (_ -= 360), _ < 0 && (_ += 360), (_ /= 360) < 1 / 3 ? (e = 1 - ((a = (1 - o) / 3) + (t = (1 + (o * tu(tE * _)) / tu(tl - tE * _)) / 3))) : _ < 2 / 3 ? ((_ -= 1 / 3), (a = 1 - ((t = (1 - o) / 3) + (e = (1 + (o * tu(tE * _)) / tu(tl - tE * _)) / 3)))) : ((_ -= 2 / 3), (t = 1 - ((e = (1 - o) / 3) + (a = (1 + (o * tu(tE * _)) / tu(tl - tE * _)) / 3)))), (t = ts(i * t * 3)), [255 * t, 255 * (e = ts(i * e * 3)), 255 * (a = ts(i * a * 3)), r.length > 3 ? r[3] : 1];
        }),
        c.autodetect.push({
            p: 2,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === tR((t = tI(t, 'hsi'))) && 3 === t.length) return 'hsi';
            }
        });
    var tA = i.unpack,
        tf = i.type;
    (u.prototype.hsl = function () {
        return D(this._rgb);
    }),
        (I.hsl = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['hsl'])))();
        }),
        (c.format.hsl = S),
        c.autodetect.push({
            p: 2,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === tf((t = tA(t, 'hsl'))) && 3 === t.length) return 'hsl';
            }
        });
    var tp = i.unpack,
        tN = Math.min,
        tT = Math.max,
        tL = i.unpack,
        th = Math.floor,
        tO = i.unpack,
        tD = i.type,
        tg = function () {
            for (var t, e, a = [], r = arguments.length; r--; ) a[r] = arguments[r];
            var n = (a = tp(a, 'rgb'))[0],
                _ = a[1],
                o = a[2],
                i = tN(n, _, o),
                c = tT(n, _, o),
                s = c - i;
            return 0 === c ? ((t = Number.NaN), (e = 0)) : ((e = s / c), n === c && (t = (_ - o) / s), _ === c && (t = 2 + (o - n) / s), o === c && (t = 4 + (n - _) / s), (t *= 60) < 0 && (t += 360)), [t, e, c / 255];
        };
    (u.prototype.hsv = function () {
        return tg(this._rgb);
    }),
        (I.hsv = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['hsv'])))();
        }),
        (c.format.hsv = function () {
            for (var t, e, a, r, n, _, o, i, c, s = [], E = arguments.length; E--; ) s[E] = arguments[E];
            var l = (s = tL(s, 'hsv'))[0],
                u = s[1],
                I = s[2];
            if (((I *= 255), 0 === u)) o = i = c = I;
            else {
                360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                var R = th((l /= 60)),
                    d = l - R,
                    A = I * (1 - u),
                    f = I * (1 - u * d),
                    p = I * (1 - u * (1 - d));
                switch (R) {
                    case 0:
                        (o = (t = [I, p, A])[0]), (i = t[1]), (c = t[2]);
                        break;
                    case 1:
                        (o = (e = [f, I, A])[0]), (i = e[1]), (c = e[2]);
                        break;
                    case 2:
                        (o = (a = [A, I, p])[0]), (i = a[1]), (c = a[2]);
                        break;
                    case 3:
                        (o = (r = [A, f, I])[0]), (i = r[1]), (c = r[2]);
                        break;
                    case 4:
                        (o = (n = [p, A, I])[0]), (i = n[1]), (c = n[2]);
                        break;
                    case 5:
                        (o = (_ = [I, A, f])[0]), (i = _[1]), (c = _[2]);
                }
            }
            return [o, i, c, s.length > 3 ? s[3] : 1];
        }),
        c.autodetect.push({
            p: 2,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === tD((t = tO(t, 'hsv'))) && 3 === t.length) return 'hsv';
            }
        });
    var tP = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452
        },
        tm = i.unpack,
        ty = Math.pow,
        tv = function (t) {
            return (t /= 255) <= 0.04045 ? t / 12.92 : ty((t + 0.055) / 1.055, 2.4);
        },
        tC = function (t) {
            return t > tP.t3 ? ty(t, 1 / 3) : t / tP.t2 + tP.t0;
        },
        tS = function () {
            for (var t, e, a, r = [], n = arguments.length; n--; ) r[n] = arguments[n];
            var _ = tm(r, 'rgb'),
                o = ((t = _[0]), (e = _[1]), (a = _[2]), [tC((0.4124564 * (t = tv(t)) + 0.3575761 * (e = tv(e)) + 0.1804375 * (a = tv(a))) / tP.Xn), tC((0.2126729 * t + 0.7151522 * e + 0.072175 * a) / tP.Yn), tC((0.0193339 * t + 0.119192 * e + 0.9503041 * a) / tP.Zn)]),
                i = o[0],
                c = o[1],
                s = o[2],
                E = 116 * c - 16;
            return [E < 0 ? 0 : E, 500 * (i - c), 200 * (c - s)];
        },
        tG = i.unpack,
        tb = Math.pow,
        tM = function (t) {
            return 255 * (t <= 0.00304 ? 12.92 * t : 1.055 * tb(t, 1 / 2.4) - 0.055);
        },
        tU = function (t) {
            return t > tP.t1 ? t * t * t : tP.t2 * (t - tP.t0);
        },
        tw = function () {
            for (var t, e, a, r, n = [], _ = arguments.length; _--; ) n[_] = arguments[_];
            var o = (n = tG(n, 'lab'))[0],
                i = n[1],
                c = n[2];
            return (e = (o + 16) / 116), (t = isNaN(i) ? e : e + i / 500), (a = isNaN(c) ? e : e - c / 200), (e = tP.Yn * tU(e)), (r = tM(3.2404542 * (t = tP.Xn * tU(t)) - 1.5371385 * e - 0.4985314 * (a = tP.Zn * tU(a)))), [r, tM(-0.969266 * t + 1.8760108 * e + 0.041556 * a), tM(0.0556434 * t - 0.2040259 * e + 1.0572252 * a), n.length > 3 ? n[3] : 1];
        },
        tB = i.unpack,
        tW = i.type;
    (u.prototype.lab = function () {
        return tS(this._rgb);
    }),
        (I.lab = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['lab'])))();
        }),
        (c.format.lab = tw),
        c.autodetect.push({
            p: 2,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === tW((t = tB(t, 'lab'))) && 3 === t.length) return 'lab';
            }
        });
    var tY = i.unpack,
        tH = i.RAD2DEG,
        tK = Math.sqrt,
        tk = Math.atan2,
        tx = Math.round,
        tV = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = tY(t, 'lab'),
                r = a[0],
                n = a[1],
                _ = a[2],
                o = tK(n * n + _ * _),
                i = (tk(_, n) * tH + 360) % 360;
            return 0 === tx(10000 * o) && (i = Number.NaN), [r, o, i];
        },
        tF = i.unpack,
        tj = i.unpack,
        tX = i.DEG2RAD,
        t$ = Math.sin,
        tq = Math.cos,
        tz = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = tj(t, 'lch'),
                r = a[0],
                n = a[1],
                _ = a[2];
            return isNaN(_) && (_ = 0), [r, tq((_ *= tX)) * n, t$(_) * n];
        },
        tJ = i.unpack,
        tZ = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = tz((t = tJ(t, 'lch'))[0], t[1], t[2]),
                r = tw(a[0], a[1], a[2]);
            return [r[0], r[1], r[2], t.length > 3 ? t[3] : 1];
        },
        tQ = i.unpack,
        t0 = i.unpack,
        t1 = i.type,
        t2 = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = tF(t, 'rgb'),
                r = tS(a[0], a[1], a[2]);
            return tV(r[0], r[1], r[2]);
        };
    (u.prototype.lch = function () {
        return t2(this._rgb);
    }),
        (u.prototype.hcl = function () {
            return t2(this._rgb).reverse();
        }),
        (I.lch = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['lch'])))();
        }),
        (I.hcl = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['hcl'])))();
        }),
        (c.format.lch = tZ),
        (c.format.hcl = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = tQ(t, 'hcl').reverse();
            return tZ.apply(void 0, a);
        }),
        ['lch', 'hcl'].forEach(function (t) {
            return c.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], a = arguments.length; a--; ) e[a] = arguments[a];
                    if ('array' === t1((e = t0(e, t))) && 3 === e.length) return t;
                }
            });
        });
    var t3 = {
            aliceblue: '#f0f8ff',
            antiquewhite: '#faebd7',
            aqua: '#00ffff',
            aquamarine: '#7fffd4',
            azure: '#f0ffff',
            beige: '#f5f5dc',
            bisque: '#ffe4c4',
            black: '#000000',
            blanchedalmond: '#ffebcd',
            blue: '#0000ff',
            blueviolet: '#8a2be2',
            brown: '#a52a2a',
            burlywood: '#deb887',
            cadetblue: '#5f9ea0',
            chartreuse: '#7fff00',
            chocolate: '#d2691e',
            coral: '#ff7f50',
            cornflower: '#6495ed',
            cornflowerblue: '#6495ed',
            cornsilk: '#fff8dc',
            crimson: '#dc143c',
            cyan: '#00ffff',
            darkblue: '#00008b',
            darkcyan: '#008b8b',
            darkgoldenrod: '#b8860b',
            darkgray: '#a9a9a9',
            darkgreen: '#006400',
            darkgrey: '#a9a9a9',
            darkkhaki: '#bdb76b',
            darkmagenta: '#8b008b',
            darkolivegreen: '#556b2f',
            darkorange: '#ff8c00',
            darkorchid: '#9932cc',
            darkred: '#8b0000',
            darksalmon: '#e9967a',
            darkseagreen: '#8fbc8f',
            darkslateblue: '#483d8b',
            darkslategray: '#2f4f4f',
            darkslategrey: '#2f4f4f',
            darkturquoise: '#00ced1',
            darkviolet: '#9400d3',
            deeppink: '#ff1493',
            deepskyblue: '#00bfff',
            dimgray: '#696969',
            dimgrey: '#696969',
            dodgerblue: '#1e90ff',
            firebrick: '#b22222',
            floralwhite: '#fffaf0',
            forestgreen: '#228b22',
            fuchsia: '#ff00ff',
            gainsboro: '#dcdcdc',
            ghostwhite: '#f8f8ff',
            gold: '#ffd700',
            goldenrod: '#daa520',
            gray: '#808080',
            green: '#008000',
            greenyellow: '#adff2f',
            grey: '#808080',
            honeydew: '#f0fff0',
            hotpink: '#ff69b4',
            indianred: '#cd5c5c',
            indigo: '#4b0082',
            ivory: '#fffff0',
            khaki: '#f0e68c',
            laserlemon: '#ffff54',
            lavender: '#e6e6fa',
            lavenderblush: '#fff0f5',
            lawngreen: '#7cfc00',
            lemonchiffon: '#fffacd',
            lightblue: '#add8e6',
            lightcoral: '#f08080',
            lightcyan: '#e0ffff',
            lightgoldenrod: '#fafad2',
            lightgoldenrodyellow: '#fafad2',
            lightgray: '#d3d3d3',
            lightgreen: '#90ee90',
            lightgrey: '#d3d3d3',
            lightpink: '#ffb6c1',
            lightsalmon: '#ffa07a',
            lightseagreen: '#20b2aa',
            lightskyblue: '#87cefa',
            lightslategray: '#778899',
            lightslategrey: '#778899',
            lightsteelblue: '#b0c4de',
            lightyellow: '#ffffe0',
            lime: '#00ff00',
            limegreen: '#32cd32',
            linen: '#faf0e6',
            magenta: '#ff00ff',
            maroon: '#800000',
            maroon2: '#7f0000',
            maroon3: '#b03060',
            mediumaquamarine: '#66cdaa',
            mediumblue: '#0000cd',
            mediumorchid: '#ba55d3',
            mediumpurple: '#9370db',
            mediumseagreen: '#3cb371',
            mediumslateblue: '#7b68ee',
            mediumspringgreen: '#00fa9a',
            mediumturquoise: '#48d1cc',
            mediumvioletred: '#c71585',
            midnightblue: '#191970',
            mintcream: '#f5fffa',
            mistyrose: '#ffe4e1',
            moccasin: '#ffe4b5',
            navajowhite: '#ffdead',
            navy: '#000080',
            oldlace: '#fdf5e6',
            olive: '#808000',
            olivedrab: '#6b8e23',
            orange: '#ffa500',
            orangered: '#ff4500',
            orchid: '#da70d6',
            palegoldenrod: '#eee8aa',
            palegreen: '#98fb98',
            paleturquoise: '#afeeee',
            palevioletred: '#db7093',
            papayawhip: '#ffefd5',
            peachpuff: '#ffdab9',
            peru: '#cd853f',
            pink: '#ffc0cb',
            plum: '#dda0dd',
            powderblue: '#b0e0e6',
            purple: '#800080',
            purple2: '#7f007f',
            purple3: '#a020f0',
            rebeccapurple: '#663399',
            red: '#ff0000',
            rosybrown: '#bc8f8f',
            royalblue: '#4169e1',
            saddlebrown: '#8b4513',
            salmon: '#fa8072',
            sandybrown: '#f4a460',
            seagreen: '#2e8b57',
            seashell: '#fff5ee',
            sienna: '#a0522d',
            silver: '#c0c0c0',
            skyblue: '#87ceeb',
            slateblue: '#6a5acd',
            slategray: '#708090',
            slategrey: '#708090',
            snow: '#fffafa',
            springgreen: '#00ff7f',
            steelblue: '#4682b4',
            tan: '#d2b48c',
            teal: '#008080',
            thistle: '#d8bfd8',
            tomato: '#ff6347',
            turquoise: '#40e0d0',
            violet: '#ee82ee',
            wheat: '#f5deb3',
            white: '#ffffff',
            whitesmoke: '#f5f5f5',
            yellow: '#ffff00',
            yellowgreen: '#9acd32'
        },
        t6 = i.type;
    (u.prototype.name = function () {
        for (var t = Z(this._rgb, 'rgb'), e = 0, a = Object.keys(t3); e < a.length; e += 1) {
            var r = a[e];
            if (t3[r] === t) return r.toLowerCase();
        }
        return t;
    }),
        (c.format.named = function (t) {
            if (t3[(t = t.toLowerCase())]) return te(t3[t]);
            throw Error('unknown color name: ' + t);
        }),
        c.autodetect.push({
            p: 5,
            test: function (t) {
                for (var e = [], a = arguments.length - 1; a-- > 0; ) e[a] = arguments[a + 1];
                if (!e.length && 'string' === t6(t) && t3[t.toLowerCase()]) return 'named';
            }
        });
    var t4 = i.unpack,
        t5 = i.type,
        t8 = i.type,
        t7 = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = t4(t, 'rgb');
            return (a[0] << 16) + (a[1] << 8) + a[2];
        };
    (u.prototype.num = function () {
        return t7(this._rgb);
    }),
        (I.num = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['num'])))();
        }),
        (c.format.num = function (t) {
            if ('number' == t5(t) && t >= 0 && t <= 16777215) return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            throw Error('unknown num color: ' + t);
        }),
        c.autodetect.push({
            p: 5,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if (1 === t.length && 'number' === t8(t[0]) && t[0] >= 0 && t[0] <= 16777215) return 'num';
            }
        });
    var t9 = i.unpack,
        et = i.type,
        ee = Math.round;
    (u.prototype.rgb = function (t) {
        return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(ee);
    }),
        (u.prototype.rgba = function (t) {
            return (
                void 0 === t && (t = !0),
                this._rgb.slice(0, 4).map(function (e, a) {
                    return a < 3 ? (!1 === t ? e : ee(e)) : e;
                })
            );
        }),
        (I.rgb = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['rgb'])))();
        }),
        (c.format.rgb = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = t9(t, 'rgba');
            return void 0 === a[3] && (a[3] = 1), a;
        }),
        c.autodetect.push({
            p: 3,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === et((t = t9(t, 'rgba'))) && (3 === t.length || (4 === t.length && 'number' == et(t[3]) && t[3] >= 0 && t[3] <= 1))) return 'rgb';
            }
        });
    var ea = Math.log,
        er = function (t) {
            var e,
                a,
                r,
                n = t / 100;
            return n < 66 ? ((e = 255), (a = n < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (a = n - 2) + 104.49216199393888 * ea(a)), (r = n < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (r = n - 10) + 115.67994401066147 * ea(r))) : ((e = 351.97690566805693 + 0.114206453784165 * (e = n - 55) - 40.25366309332127 * ea(e)), (a = 325.4494125711974 + 0.07943456536662342 * (a = n - 50) - 28.0852963507957 * ea(a)), (r = 255)), [e, a, r, 1];
        },
        en = i.unpack,
        e_ = Math.round,
        eo = function () {
            for (var t, e = [], a = arguments.length; a--; ) e[a] = arguments[a];
            for (var r = en(e, 'rgb'), n = r[0], _ = r[2], o = 1000, i = 40000; i - o > 0.4; ) {
                var c = er((t = (i + o) * 0.5));
                c[2] / c[0] >= _ / n ? (i = t) : (o = t);
            }
            return e_(t);
        };
    (u.prototype.temp =
        u.prototype.kelvin =
        u.prototype.temperature =
            function () {
                return eo(this._rgb);
            }),
        (I.temp =
            I.kelvin =
            I.temperature =
                function () {
                    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                    return new (Function.prototype.bind.apply(u, [null].concat(t, ['temp'])))();
                }),
        (c.format.temp = c.format.kelvin = c.format.temperature = er);
    var ei = i.unpack,
        ec = Math.cbrt,
        es = Math.pow,
        eE = Math.sign,
        el = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = ei(t, 'rgb'),
                r = a[0],
                n = a[1],
                _ = a[2],
                o = [eu(r / 255), eu(n / 255), eu(_ / 255)],
                i = o[0],
                c = o[1],
                s = o[2],
                E = ec(0.4122214708 * i + 0.5363325363 * c + 0.0514459929 * s),
                l = ec(0.2119034982 * i + 0.6806995451 * c + 0.1073969566 * s),
                u = ec(0.0883024619 * i + 0.2817188376 * c + 0.6299787005 * s);
            return [0.2104542553 * E + 0.793617785 * l - 0.0040720468 * u, 1.9779984951 * E - 2.428592205 * l + 0.4505937099 * u, 0.0259040371 * E + 0.7827717662 * l - 0.808675766 * u];
        };
    function eu(t) {
        var e = Math.abs(t);
        return e < 0.04045 ? t / 12.92 : (eE(t) || 1) * es((e + 0.055) / 1.055, 2.4);
    }
    var eI = i.unpack,
        eR = Math.pow,
        ed = Math.sign,
        eA = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = (t = eI(t, 'lab'))[0],
                r = t[1],
                n = t[2],
                _ = eR(a + 0.3963377774 * r + 0.2158037573 * n, 3),
                o = eR(a - 0.1055613458 * r - 0.0638541728 * n, 3),
                i = eR(a - 0.0894841775 * r - 1.291485548 * n, 3);
            return [255 * ef(4.0767416621 * _ - 3.3077115913 * o + 0.2309699292 * i), 255 * ef(-1.2684380046 * _ + 2.6097574011 * o - 0.3413193965 * i), 255 * ef(-0.0041960863 * _ - 0.7034186147 * o + 1.707614701 * i), t.length > 3 ? t[3] : 1];
        };
    function ef(t) {
        var e = Math.abs(t);
        return e > 0.0031308 ? (ed(t) || 1) * (1.055 * eR(e, 1 / 2.4) - 0.055) : 12.92 * t;
    }
    var ep = i.unpack,
        eN = i.type;
    (u.prototype.oklab = function () {
        return el(this._rgb);
    }),
        (I.oklab = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['oklab'])))();
        }),
        (c.format.oklab = eA),
        c.autodetect.push({
            p: 3,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === eN((t = ep(t, 'oklab'))) && 3 === t.length) return 'oklab';
            }
        });
    var eT = i.unpack,
        eL = i.unpack,
        eh = i.unpack,
        eO = i.type,
        eD = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = eT(t, 'rgb'),
                r = el(a[0], a[1], a[2]);
            return tV(r[0], r[1], r[2]);
        };
    (u.prototype.oklch = function () {
        return eD(this._rgb);
    }),
        (I.oklch = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return new (Function.prototype.bind.apply(u, [null].concat(t, ['oklch'])))();
        }),
        (c.format.oklch = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            var a = tz((t = eL(t, 'lch'))[0], t[1], t[2]),
                r = eA(a[0], a[1], a[2]);
            return [r[0], r[1], r[2], t.length > 3 ? t[3] : 1];
        }),
        c.autodetect.push({
            p: 3,
            test: function () {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                if ('array' === eO((t = eh(t, 'oklch'))) && 3 === t.length) return 'oklch';
            }
        });
    var eg = i.type;
    (u.prototype.alpha = function (t, e) {
        return (void 0 === e && (e = !1), void 0 !== t && 'number' === eg(t)) ? (e ? ((this._rgb[3] = t), this) : new u([this._rgb[0], this._rgb[1], this._rgb[2], t], 'rgb')) : this._rgb[3];
    }),
        (u.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        }),
        (u.prototype.darken = function (t) {
            void 0 === t && (t = 1);
            var e = this.lab();
            return (e[0] -= tP.Kn * t), new u(e, 'lab').alpha(this.alpha(), !0);
        }),
        (u.prototype.brighten = function (t) {
            return void 0 === t && (t = 1), this.darken(-t);
        }),
        (u.prototype.darker = u.prototype.darken),
        (u.prototype.brighter = u.prototype.brighten),
        (u.prototype.get = function (t) {
            var e = t.split('.'),
                a = e[0],
                r = e[1],
                n = this[a]();
            if (!r) return n;
            var _ = a.indexOf(r) - 2 * ('ok' === a.substr(0, 2));
            if (_ > -1) return n[_];
            throw Error('unknown channel ' + r + ' in mode ' + a);
        });
    var eP = i.type,
        em = Math.pow;
    u.prototype.luminance = function (t) {
        if (void 0 !== t && 'number' === eP(t)) {
            if (0 === t) return new u([0, 0, 0, this._rgb[3]], 'rgb');
            if (1 === t) return new u([255, 255, 255, this._rgb[3]], 'rgb');
            var e = this.luminance(),
                a = 20,
                r = function (e, n) {
                    var _ = e.interpolate(n, 0.5, 'rgb'),
                        o = _.luminance();
                    return !(1e-7 > Math.abs(t - o)) && a-- ? (o > t ? r(e, _) : r(_, n)) : _;
                },
                n = (e > t ? r(new u([0, 0, 0]), this) : r(this, new u([255, 255, 255]))).rgb();
            return new u(n.concat([this._rgb[3]]));
        }
        return ey.apply(void 0, this._rgb.slice(0, 3));
    };
    var ey = function (t, e, a) {
            return (t = ev(t)), 0.2126 * t + 0.7152 * (e = ev(e)) + 0.0722 * (a = ev(a));
        },
        ev = function (t) {
            return (t /= 255) <= 0.03928 ? t / 12.92 : em((t + 0.055) / 1.055, 2.4);
        },
        eC = {},
        eS = i.type,
        eG = function (t, e, a) {
            void 0 === a && (a = 0.5);
            for (var r = [], n = arguments.length - 3; n-- > 0; ) r[n] = arguments[n + 3];
            var _ = r[0] || 'lrgb';
            if ((eC[_] || r.length || (_ = Object.keys(eC)[0]), !eC[_])) throw Error('interpolation mode ' + _ + ' is not defined');
            return 'object' !== eS(t) && (t = new u(t)), 'object' !== eS(e) && (e = new u(e)), eC[_](t, e, a).alpha(t.alpha() + a * (e.alpha() - t.alpha()));
        };
    (u.prototype.mix = u.prototype.interpolate =
        function (t, e) {
            void 0 === e && (e = 0.5);
            for (var a = [], r = arguments.length - 2; r-- > 0; ) a[r] = arguments[r + 2];
            return eG.apply(void 0, [this, t, e].concat(a));
        }),
        (u.prototype.premultiply = function (t) {
            void 0 === t && (t = !1);
            var e = this._rgb,
                a = e[3];
            return t ? ((this._rgb = [e[0] * a, e[1] * a, e[2] * a, a]), this) : new u([e[0] * a, e[1] * a, e[2] * a, a], 'rgb');
        }),
        (u.prototype.saturate = function (t) {
            void 0 === t && (t = 1);
            var e = this.lch();
            return (e[1] += tP.Kn * t), e[1] < 0 && (e[1] = 0), new u(e, 'lch').alpha(this.alpha(), !0);
        }),
        (u.prototype.desaturate = function (t) {
            return void 0 === t && (t = 1), this.saturate(-t);
        });
    var eb = i.type;
    (u.prototype.set = function (t, e, a) {
        void 0 === a && (a = !1);
        var r = t.split('.'),
            n = r[0],
            _ = r[1],
            o = this[n]();
        if (!_) return o;
        var i = n.indexOf(_) - 2 * ('ok' === n.substr(0, 2));
        if (i > -1) {
            if ('string' == eb(e))
                switch (e.charAt(0)) {
                    case '+':
                    case '-':
                        o[i] += +e;
                        break;
                    case '*':
                        o[i] *= +e.substr(1);
                        break;
                    case '/':
                        o[i] /= +e.substr(1);
                        break;
                    default:
                        o[i] = +e;
                }
            else if ('number' === eb(e)) o[i] = e;
            else throw Error('unsupported value for Color.set');
            var c = new u(o, n);
            return a ? ((this._rgb = c._rgb), this) : c;
        }
        throw Error('unknown channel ' + _ + ' in mode ' + n);
    }),
        (eC.rgb = function (t, e, a) {
            var r = t._rgb,
                n = e._rgb;
            return new u(r[0] + a * (n[0] - r[0]), r[1] + a * (n[1] - r[1]), r[2] + a * (n[2] - r[2]), 'rgb');
        });
    var eM = Math.sqrt,
        eU = Math.pow;
    (eC.lrgb = function (t, e, a) {
        var r = t._rgb,
            n = r[0],
            _ = r[1],
            o = r[2],
            i = e._rgb,
            c = i[0],
            s = i[1],
            E = i[2];
        return new u(eM(eU(n, 2) * (1 - a) + eU(c, 2) * a), eM(eU(_, 2) * (1 - a) + eU(s, 2) * a), eM(eU(o, 2) * (1 - a) + eU(E, 2) * a), 'rgb');
    }),
        (eC.lab = function (t, e, a) {
            var r = t.lab(),
                n = e.lab();
            return new u(r[0] + a * (n[0] - r[0]), r[1] + a * (n[1] - r[1]), r[2] + a * (n[2] - r[2]), 'lab');
        });
    var ew = function (t, e, a, r) {
            var n, _, o, i, c, s, E, l, I, R, d, A, f, p;
            return 'hsl' === r ? ((o = t.hsl()), (i = e.hsl())) : 'hsv' === r ? ((o = t.hsv()), (i = e.hsv())) : 'hcg' === r ? ((o = t.hcg()), (i = e.hcg())) : 'hsi' === r ? ((o = t.hsi()), (i = e.hsi())) : 'lch' === r || 'hcl' === r ? ((r = 'hcl'), (o = t.hcl()), (i = e.hcl())) : 'oklch' === r && ((o = t.oklch().reverse()), (i = e.oklch().reverse())), ('h' === r.substr(0, 1) || 'oklch' === r) && ((c = (n = o)[0]), (E = n[1]), (I = n[2]), (s = (_ = i)[0]), (l = _[1]), (R = _[2])), isNaN(c) || isNaN(s) ? (isNaN(c) ? (isNaN(s) ? (A = Number.NaN) : ((A = s), (1 == I || 0 == I) && 'hsv' != r && (d = l))) : ((A = c), (1 == R || 0 == R) && 'hsv' != r && (d = E))) : ((p = s > c && s - c > 180 ? s - (c + 360) : s < c && c - s > 180 ? s + 360 - c : s - c), (A = c + a * p)), void 0 === d && (d = E + a * (l - E)), (f = I + a * (R - I)), 'oklch' === r ? new u([f, d, A], r) : new u([A, d, f], r);
        },
        eB = function (t, e, a) {
            return ew(t, e, a, 'lch');
        };
    (eC.lch = eB),
        (eC.hcl = eB),
        (eC.num = function (t, e, a) {
            var r = t.num();
            return new u(r + a * (e.num() - r), 'num');
        }),
        (eC.hcg = function (t, e, a) {
            return ew(t, e, a, 'hcg');
        }),
        (eC.hsi = function (t, e, a) {
            return ew(t, e, a, 'hsi');
        }),
        (eC.hsl = function (t, e, a) {
            return ew(t, e, a, 'hsl');
        }),
        (eC.hsv = function (t, e, a) {
            return ew(t, e, a, 'hsv');
        }),
        (eC.oklab = function (t, e, a) {
            var r = t.oklab(),
                n = e.oklab();
            return new u(r[0] + a * (n[0] - r[0]), r[1] + a * (n[1] - r[1]), r[2] + a * (n[2] - r[2]), 'oklab');
        }),
        (eC.oklch = function (t, e, a) {
            return ew(t, e, a, 'oklch');
        });
    var eW = i.clip_rgb,
        eY = Math.pow,
        eH = Math.sqrt,
        eK = Math.PI,
        ek = Math.cos,
        ex = Math.sin,
        eV = Math.atan2,
        eF = function (t, e) {
            for (var a = t.length, r = [0, 0, 0, 0], n = 0; n < t.length; n++) {
                var _ = t[n],
                    o = e[n] / a,
                    i = _._rgb;
                (r[0] += eY(i[0], 2) * o), (r[1] += eY(i[1], 2) * o), (r[2] += eY(i[2], 2) * o), (r[3] += i[3] * o);
            }
            return (r[0] = eH(r[0])), (r[1] = eH(r[1])), (r[2] = eH(r[2])), r[3] > 0.9999999 && (r[3] = 1), new u(eW(r));
        },
        ej = i.type,
        eX = Math.pow,
        e$ = function (t) {
            var e = 'rgb',
                a = I('#ccc'),
                r = 0,
                n = [0, 1],
                _ = [],
                o = [0, 0],
                i = !1,
                c = [],
                s = !1,
                E = 0,
                l = 1,
                u = !1,
                R = {},
                d = !0,
                A = 1,
                f = function (t) {
                    if (('string' === ej((t = t || ['#fff', '#000'])) && I.brewer && I.brewer[t.toLowerCase()] && (t = I.brewer[t.toLowerCase()]), 'array' === ej(t))) {
                        1 === t.length && (t = [t[0], t[0]]), (t = t.slice(0));
                        for (var e = 0; e < t.length; e++) t[e] = I(t[e]);
                        _.length = 0;
                        for (var a = 0; a < t.length; a++) _.push(a / (t.length - 1));
                    }
                    return h(), (c = t);
                },
                p = function (t) {
                    if (null != i) {
                        for (var e = i.length - 1, a = 0; a < e && t >= i[a]; ) a++;
                        return a - 1;
                    }
                    return 0;
                },
                N = function (t) {
                    return t;
                },
                T = function (t) {
                    return t;
                },
                L = function (t, r) {
                    if ((null == r && (r = !1), isNaN(t) || null === t)) return a;
                    if (r) s = t;
                    else if (i && i.length > 2) {
                        var n, s;
                        s = p(t) / (i.length - 2);
                    } else s = l !== E ? (t - E) / (l - E) : 1;
                    (s = T(s)), r || (s = N(s)), 1 !== A && (s = eX(s, A));
                    var u = Math.floor(10000 * (s = Math.min(1, Math.max(0, (s = o[0] + s * (1 - o[0] - o[1]))))));
                    if (d && R[u]) n = R[u];
                    else {
                        if ('array' === ej(c))
                            for (var f = 0; f < _.length; f++) {
                                var L = _[f];
                                if (s <= L || (s >= L && f === _.length - 1)) {
                                    n = c[f];
                                    break;
                                }
                                if (s > L && s < _[f + 1]) {
                                    (s = (s - L) / (_[f + 1] - L)), (n = I.interpolate(c[f], c[f + 1], s, e));
                                    break;
                                }
                            }
                        else 'function' === ej(c) && (n = c(s));
                        d && (R[u] = n);
                    }
                    return n;
                },
                h = function () {
                    return (R = {});
                };
            f(t);
            var O = function (t) {
                var e = I(L(t));
                return s && e[s] ? e[s]() : e;
            };
            return (
                (O.classes = function (t) {
                    if (null != t) {
                        if ('array' === ej(t)) (i = t), (n = [t[0], t[t.length - 1]]);
                        else {
                            var e = I.analyze(n);
                            i = 0 === t ? [e.min, e.max] : I.limits(e, 'e', t);
                        }
                        return O;
                    }
                    return i;
                }),
                (O.domain = function (t) {
                    if (!arguments.length) return n;
                    (E = t[0]), (l = t[t.length - 1]), (_ = []);
                    var e = c.length;
                    if (t.length === e && E !== l)
                        for (var a = 0, r = Array.from(t); a < r.length; a += 1) {
                            var o = r[a];
                            _.push((o - E) / (l - E));
                        }
                    else {
                        for (var i = 0; i < e; i++) _.push(i / (e - 1));
                        if (t.length > 2) {
                            var s = t.map(function (e, a) {
                                    return a / (t.length - 1);
                                }),
                                u = t.map(function (t) {
                                    return (t - E) / (l - E);
                                });
                            u.every(function (t, e) {
                                return s[e] === t;
                            }) ||
                                (T = function (t) {
                                    if (t <= 0 || t >= 1) return t;
                                    for (var e = 0; t >= u[e + 1]; ) e++;
                                    var a = (t - u[e]) / (u[e + 1] - u[e]);
                                    return s[e] + a * (s[e + 1] - s[e]);
                                });
                        }
                    }
                    return (n = [E, l]), O;
                }),
                (O.mode = function (t) {
                    return arguments.length ? ((e = t), h(), O) : e;
                }),
                (O.range = function (t, e) {
                    return f(t), O;
                }),
                (O.out = function (t) {
                    return (s = t), O;
                }),
                (O.spread = function (t) {
                    return arguments.length ? ((r = t), O) : r;
                }),
                (O.correctLightness = function (t) {
                    return (
                        null == t && (t = !0),
                        (u = t),
                        h(),
                        (N = u
                            ? function (t) {
                                  for (var e = L(0, !0).lab()[0], a = L(1, !0).lab()[0], r = e > a, n = L(t, !0).lab()[0], _ = e + (a - e) * t, o = n - _, i = 0, c = 1, s = 20; Math.abs(o) > 0.01 && s-- > 0; ) r && (o *= -1), o < 0 ? ((i = t), (t += (c - t) * 0.5)) : ((c = t), (t += (i - t) * 0.5)), (o = (n = L(t, !0).lab()[0]) - _);
                                  return t;
                              }
                            : function (t) {
                                  return t;
                              }),
                        O
                    );
                }),
                (O.padding = function (t) {
                    return null != t ? ('number' === ej(t) && (t = [t, t]), (o = t), O) : o;
                }),
                (O.colors = function (e, a) {
                    arguments.length < 2 && (a = 'hex');
                    var r = [];
                    if (0 == arguments.length) r = c.slice(0);
                    else if (1 === e) r = [O(0.5)];
                    else if (e > 1) {
                        var _ = n[0],
                            o = n[1] - _;
                        r = (function (t, e, a) {
                            for (var r = [], n = 0 < e, _ = a ? (n ? e + 1 : e - 1) : e, o = t; n ? o < _ : o > _; n ? o++ : o--) r.push(o);
                            return r;
                        })(0, e, !1).map(function (t) {
                            return O(_ + (t / (e - 1)) * o);
                        });
                    } else {
                        t = [];
                        var s = [];
                        if (i && i.length > 2) for (var E = 1, l = i.length, u = 1 <= l; u ? E < l : E > l; u ? E++ : E--) s.push((i[E - 1] + i[E]) * 0.5);
                        else s = n;
                        r = s.map(function (t) {
                            return O(t);
                        });
                    }
                    return (
                        I[a] &&
                            (r = r.map(function (t) {
                                return t[a]();
                            })),
                        r
                    );
                }),
                (O.cache = function (t) {
                    return null != t ? ((d = t), O) : d;
                }),
                (O.gamma = function (t) {
                    return null != t ? ((A = t), O) : A;
                }),
                (O.nodata = function (t) {
                    return null != t ? ((a = I(t)), O) : a;
                }),
                O
            );
        },
        eq = function (t) {
            for (var e = [1, 1], a = 1; a < t; a++) {
                for (var r = [1], n = 1; n <= e.length; n++) r[n] = (e[n] || 0) + e[n - 1];
                e = r;
            }
            return e;
        },
        ez = function (t) {
            var e, a, r, n, _, o, i, c, s, E, l;
            if (
                2 ===
                (t = t.map(function (t) {
                    return new u(t);
                })).length
            )
                (_ = (e = t.map(function (t) {
                    return t.lab();
                }))[0]),
                    (o = e[1]),
                    (n = function (t) {
                        return new u(
                            [0, 1, 2].map(function (e) {
                                return _[e] + t * (o[e] - _[e]);
                            }),
                            'lab'
                        );
                    });
            else if (3 === t.length)
                (_ = (a = t.map(function (t) {
                    return t.lab();
                }))[0]),
                    (o = a[1]),
                    (i = a[2]),
                    (n = function (t) {
                        return new u(
                            [0, 1, 2].map(function (e) {
                                return (1 - t) * (1 - t) * _[e] + 2 * (1 - t) * t * o[e] + t * t * i[e];
                            }),
                            'lab'
                        );
                    });
            else if (4 === t.length)
                (_ = (r = t.map(function (t) {
                    return t.lab();
                }))[0]),
                    (o = r[1]),
                    (i = r[2]),
                    (c = r[3]),
                    (n = function (t) {
                        return new u(
                            [0, 1, 2].map(function (e) {
                                return (1 - t) * (1 - t) * (1 - t) * _[e] + 3 * (1 - t) * (1 - t) * t * o[e] + 3 * (1 - t) * t * t * i[e] + t * t * t * c[e];
                            }),
                            'lab'
                        );
                    });
            else if (t.length >= 5)
                (s = t.map(function (t) {
                    return t.lab();
                })),
                    (E = eq((l = t.length - 1))),
                    (n = function (t) {
                        var e = 1 - t;
                        return new u(
                            [0, 1, 2].map(function (a) {
                                return s.reduce(function (r, n, _) {
                                    return r + E[_] * Math.pow(e, l - _) * Math.pow(t, _) * n[a];
                                }, 0);
                            }),
                            'lab'
                        );
                    });
            else throw RangeError('No point in running bezier with only one color.');
            return n;
        },
        eJ = function (t, e, a) {
            if (!eJ[a]) throw Error('unknown blend mode ' + a);
            return eJ[a](t, e);
        },
        eZ = function (t) {
            return function (e, a) {
                var r = I(a).rgb(),
                    n = I(e).rgb();
                return I.rgb(t(r, n));
            };
        },
        eQ = function (t) {
            return function (e, a) {
                var r = [];
                return (r[0] = t(e[0], a[0])), (r[1] = t(e[1], a[1])), (r[2] = t(e[2], a[2])), r;
            };
        };
    (eJ.normal = eZ(
        eQ(function (t) {
            return t;
        })
    )),
        (eJ.multiply = eZ(
            eQ(function (t, e) {
                return (t * e) / 255;
            })
        )),
        (eJ.screen = eZ(
            eQ(function (t, e) {
                return 255 * (1 - (1 - t / 255) * (1 - e / 255));
            })
        )),
        (eJ.overlay = eZ(
            eQ(function (t, e) {
                return e < 128 ? (2 * t * e) / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255));
            })
        )),
        (eJ.darken = eZ(
            eQ(function (t, e) {
                return t > e ? e : t;
            })
        )),
        (eJ.lighten = eZ(
            eQ(function (t, e) {
                return t > e ? t : e;
            })
        )),
        (eJ.dodge = eZ(
            eQ(function (t, e) {
                return 255 === t || (t = ((e / 255) * 255) / (1 - t / 255)) > 255 ? 255 : t;
            })
        )),
        (eJ.burn = eZ(
            eQ(function (t, e) {
                return 255 * (1 - (1 - e / 255) / (t / 255));
            })
        ));
    for (
        var e0 = i.type,
            e1 = i.clip_rgb,
            e2 = i.TWOPI,
            e3 = Math.pow,
            e6 = Math.sin,
            e4 = Math.cos,
            e5 = Math.floor,
            e8 = Math.random,
            e7 = Math.log,
            e9 = Math.pow,
            at = Math.floor,
            ae = Math.abs,
            aa = function (t, e) {
                void 0 === e && (e = null);
                var a = {
                    min: Number.MAX_VALUE,
                    max: -1 * Number.MAX_VALUE,
                    sum: 0,
                    values: [],
                    count: 0
                };
                return (
                    'object' === _(t) && (t = Object.values(t)),
                    t.forEach(function (t) {
                        e && 'object' === _(t) && (t = t[e]), null == t || isNaN(t) || (a.values.push(t), (a.sum += t), t < a.min && (a.min = t), t > a.max && (a.max = t), (a.count += 1));
                    }),
                    (a.domain = [a.min, a.max]),
                    (a.limits = function (t, e) {
                        return ar(a, t, e);
                    }),
                    a
                );
            },
            ar = function (t, e, a) {
                void 0 === e && (e = 'equal'), void 0 === a && (a = 7), 'array' == _(t) && (t = aa(t));
                var r = t.min,
                    n = t.max,
                    o = t.values.sort(function (t, e) {
                        return t - e;
                    });
                if (1 === a) return [r, n];
                var i = [];
                if (('c' === e.substr(0, 1) && (i.push(r), i.push(n)), 'e' === e.substr(0, 1))) {
                    i.push(r);
                    for (var c = 1; c < a; c++) i.push(r + (c / a) * (n - r));
                    i.push(n);
                } else if ('l' === e.substr(0, 1)) {
                    if (r <= 0) throw Error('Logarithmic scales are only possible for values > 0');
                    var s = Math.LOG10E * e7(r),
                        E = Math.LOG10E * e7(n);
                    i.push(r);
                    for (var l = 1; l < a; l++) i.push(e9(10, s + (l / a) * (E - s)));
                    i.push(n);
                } else if ('q' === e.substr(0, 1)) {
                    i.push(r);
                    for (var u = 1; u < a; u++) {
                        var I = ((o.length - 1) * u) / a,
                            R = at(I);
                        if (R === I) i.push(o[R]);
                        else {
                            var d = I - R;
                            i.push(o[R] * (1 - d) + o[R + 1] * d);
                        }
                    }
                    i.push(n);
                } else if ('k' === e.substr(0, 1)) {
                    var A,
                        f = o.length,
                        p = Array(f),
                        N = Array(a),
                        T = !0,
                        L = 0,
                        h = null;
                    (h = []).push(r);
                    for (var O = 1; O < a; O++) h.push(r + (O / a) * (n - r));
                    for (h.push(n); T; ) {
                        for (var D = 0; D < a; D++) N[D] = 0;
                        for (var g = 0; g < f; g++)
                            for (var P = o[g], m = Number.MAX_VALUE, y = void 0, v = 0; v < a; v++) {
                                var C = ae(h[v] - P);
                                C < m && ((m = C), (y = v)), N[y]++, (p[g] = y);
                            }
                        for (var S = Array(a), G = 0; G < a; G++) S[G] = null;
                        for (var b = 0; b < f; b++) null === S[(A = p[b])] ? (S[A] = o[b]) : (S[A] += o[b]);
                        for (var M = 0; M < a; M++) S[M] *= 1 / N[M];
                        T = !1;
                        for (var U = 0; U < a; U++)
                            if (S[U] !== h[U]) {
                                T = !0;
                                break;
                            }
                        (h = S), ++L > 200 && (T = !1);
                    }
                    for (var w = {}, B = 0; B < a; B++) w[B] = [];
                    for (var W = 0; W < f; W++) w[(A = p[W])].push(o[W]);
                    for (var Y = [], H = 0; H < a; H++) Y.push(w[H][0]), Y.push(w[H][w[H].length - 1]);
                    (Y = Y.sort(function (t, e) {
                        return t - e;
                    })),
                        i.push(Y[0]);
                    for (var K = 1; K < Y.length; K += 2) {
                        var k = Y[K];
                        isNaN(k) || -1 !== i.indexOf(k) || i.push(k);
                    }
                }
                return i;
            },
            an = Math.sqrt,
            a_ = Math.pow,
            ao = Math.min,
            ai = Math.max,
            ac = Math.atan2,
            as = Math.abs,
            aE = Math.cos,
            al = Math.sin,
            au = Math.exp,
            aI = Math.PI,
            aR = {
                OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
                PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
                BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
                Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
                BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
                YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
                YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
                Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
                Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
                Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
                GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
                Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
                YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
                PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
                Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
                Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
                Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
                RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
                RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
                PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
                PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
                RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
                BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
                RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
                PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
                Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
                Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
                Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
                Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
                Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
                Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
                Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
                Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
            },
            ad = 0,
            aA = Object.keys(aR);
        ad < aA.length;
        ad += 1
    ) {
        var af = aA[ad];
        aR[af.toLowerCase()] = aR[af];
    }
    return (
        (I.average = function (t, e, a) {
            void 0 === e && (e = 'lrgb'), void 0 === a && (a = null);
            var r = t.length;
            a ||
                (a = Array.from(Array(r)).map(function () {
                    return 1;
                }));
            var n =
                r /
                a.reduce(function (t, e) {
                    return t + e;
                });
            if (
                (a.forEach(function (t, e) {
                    a[e] *= n;
                }),
                (t = t.map(function (t) {
                    return new u(t);
                })),
                'lrgb' === e)
            )
                return eF(t, a);
            for (var _ = t.shift(), o = _.get(e), i = [], c = 0, s = 0, E = 0; E < o.length; E++)
                if (((o[E] = (o[E] || 0) * a[0]), i.push(isNaN(o[E]) ? 0 : a[0]), 'h' === e.charAt(E) && !isNaN(o[E]))) {
                    var l = (o[E] / 180) * eK;
                    (c += ek(l) * a[0]), (s += ex(l) * a[0]);
                }
            var I = _.alpha() * a[0];
            t.forEach(function (t, r) {
                var n = t.get(e);
                I += t.alpha() * a[r + 1];
                for (var _ = 0; _ < o.length; _++)
                    if (!isNaN(n[_]))
                        if (((i[_] += a[r + 1]), 'h' === e.charAt(_))) {
                            var E = (n[_] / 180) * eK;
                            (c += ek(E) * a[r + 1]), (s += ex(E) * a[r + 1]);
                        } else o[_] += n[_] * a[r + 1];
            });
            for (var R = 0; R < o.length; R++)
                if ('h' === e.charAt(R)) {
                    for (var d = (eV(s / i[R], c / i[R]) / eK) * 180; d < 0; ) d += 360;
                    for (; d >= 360; ) d -= 360;
                    o[R] = d;
                } else o[R] = o[R] / i[R];
            return (I /= r), new u(o, e).alpha(I > 0.99999 ? 1 : I, !0);
        }),
        (I.bezier = function (t) {
            var e = ez(t);
            return (
                (e.scale = function () {
                    return e$(e);
                }),
                e
            );
        }),
        (I.blend = eJ),
        (I.cubehelix = function (t, e, a, r, n) {
            void 0 === t && (t = 300), void 0 === e && (e = -1.5), void 0 === a && (a = 1), void 0 === r && (r = 1), void 0 === n && (n = [0, 1]);
            var _,
                o = 0;
            'array' === e0(n) ? (_ = n[1] - n[0]) : ((_ = 0), (n = [n, n]));
            var i = function (i) {
                var c = e2 * ((t + 120) / 360 + e * i),
                    s = e3(n[0] + _ * i, r),
                    E = ((0 !== o ? a[0] + i * o : a) * s * (1 - s)) / 2,
                    l = e4(c),
                    u = e6(c);
                return I(e1([255 * (s + E * (-0.14861 * l + 1.78277 * u)), 255 * (s + E * (-0.29227 * l - 0.90649 * u)), 255 * (s + 1.97294 * l * E), 1]));
            };
            return (
                (i.start = function (e) {
                    return null == e ? t : ((t = e), i);
                }),
                (i.rotations = function (t) {
                    return null == t ? e : ((e = t), i);
                }),
                (i.gamma = function (t) {
                    return null == t ? r : ((r = t), i);
                }),
                (i.hue = function (t) {
                    return null == t ? a : ('array' === e0((a = t)) ? 0 == (o = a[1] - a[0]) && (a = a[1]) : (o = 0), i);
                }),
                (i.lightness = function (t) {
                    return null == t ? n : ('array' === e0(t) ? ((n = t), (_ = t[1] - t[0])) : ((n = [t, t]), (_ = 0)), i);
                }),
                (i.scale = function () {
                    return I.scale(i);
                }),
                i.hue(a),
                i
            );
        }),
        (I.mix = I.interpolate = eG),
        (I.random = function () {
            for (var t = '#', e = 0; e < 6; e++) t += '0123456789abcdef'.charAt(e5(16 * e8()));
            return new u(t, 'hex');
        }),
        (I.scale = e$),
        (I.analyze = aa),
        (I.contrast = function (t, e) {
            (t = new u(t)), (e = new u(e));
            var a = t.luminance(),
                r = e.luminance();
            return a > r ? (a + 0.05) / (r + 0.05) : (r + 0.05) / (a + 0.05);
        }),
        (I.deltaE = function (t, e, a, r, n) {
            void 0 === a && (a = 1), void 0 === r && (r = 1), void 0 === n && (n = 1);
            var _ = function (t) {
                    return (360 * t) / (2 * aI);
                },
                o = function (t) {
                    return (2 * aI * t) / 360;
                };
            (t = new u(t)), (e = new u(e));
            var i = Array.from(t.lab()),
                c = i[0],
                s = i[1],
                E = i[2],
                l = Array.from(e.lab()),
                I = l[0],
                R = l[1],
                d = l[2],
                A = (c + I) / 2,
                f = (an(a_(s, 2) + a_(E, 2)) + an(a_(R, 2) + a_(d, 2))) / 2,
                p = 0.5 * (1 - an(a_(f, 7) / (a_(f, 7) + a_(25, 7)))),
                N = s * (1 + p),
                T = R * (1 + p),
                L = an(a_(N, 2) + a_(E, 2)),
                h = an(a_(T, 2) + a_(d, 2)),
                O = (L + h) / 2,
                D = _(ac(E, N)),
                g = _(ac(d, T)),
                P = D >= 0 ? D : D + 360,
                m = g >= 0 ? g : g + 360,
                y = as(P - m) > 180 ? (P + m + 360) / 2 : (P + m) / 2,
                v = 1 - 0.17 * aE(o(y - 30)) + 0.24 * aE(o(2 * y)) + 0.32 * aE(o(3 * y + 6)) - 0.2 * aE(o(4 * y - 63)),
                C = m - P;
            (C = 180 >= as(C) ? C : m <= P ? C + 360 : C - 360), (C = 2 * an(L * h) * al(o(C) / 2));
            var S = h - L,
                G = 1 + (0.015 * a_(A - 50, 2)) / an(20 + a_(A - 50, 2)),
                b = 1 + 0.045 * O,
                M = 1 + 0.015 * O * v,
                U = 30 * au(-a_((y - 275) / 25, 2)),
                w = -(2 * an(a_(O, 7) / (a_(O, 7) + a_(25, 7)))) * al(2 * o(U));
            return ai(0, ao(100, an(a_((I - c) / (a * G), 2) + a_(S / (r * b), 2) + a_(C / (n * M), 2) + (S / (r * b)) * w * (C / (n * M)))));
        }),
        (I.distance = function (t, e, a) {
            void 0 === a && (a = 'lab'), (t = new u(t)), (e = new u(e));
            var r = t.get(a),
                n = e.get(a),
                _ = 0;
            for (var o in r) {
                var i = (r[o] || 0) - (n[o] || 0);
                _ += i * i;
            }
            return Math.sqrt(_);
        }),
        (I.limits = ar),
        (I.valid = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            try {
                return new (Function.prototype.bind.apply(u, [null].concat(t)))(), !0;
            } catch (t) {
                return !1;
            }
        }),
        (I.scales = {
            cool: function () {
                return e$([I.hsl(180, 1, 0.9), I.hsl(250, 0.7, 0.4)]);
            },
            hot: function () {
                return e$(['#000', '#f00', '#ff0', '#fff']).mode('rgb');
            }
        }),
        (I.colors = t3),
        (I.brewer = aR),
        I
    );
})();
