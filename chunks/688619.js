!(function (t, n) {
    e.exports = n();
})(0, function () {
    for (
        var e = function (e, t, n) {
                return (void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e);
            },
            t = e,
            n = function (e) {
                ((e._clipped = !1), (e._unclipped = e.slice(0)));
                for (var n = 0; n <= 3; n++) n < 3 ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), (e[n] = t(e[n], 0, 255))) : 3 === n && (e[n] = t(e[n], 0, 1));
                return e;
            },
            r = {},
            i = 0,
            a = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null'];
        i < a.length;
        i += 1
    ) {
        var o = a[i];
        r['[object ' + o + ']'] = o.toLowerCase();
    }
    var s = function (e) {
            return r[Object.prototype.toString.call(e)] || 'object';
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
                    : 'object' == l(e[0]) && t
                      ? t
                            .split('')
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
                return 'string' == c(e[t]) ? e[t].toLowerCase() : null;
            },
            TWOPI: 2 * u,
            PITHIRD: u / 3,
            DEG2RAD: u / 180,
            RAD2DEG: 180 / u
        },
        _ = {
            format: {},
            autodetect: []
        },
        f = d.last,
        p = d.clip_rgb,
        h = d.type,
        m = _,
        g = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = this;
            if ('object' === h(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var r = f(e),
                i = !1;
            if (!r) {
                ((i = !0),
                    m.sorted ||
                        ((m.autodetect = m.autodetect.sort(function (e, t) {
                            return t.p - e.p;
                        })),
                        (m.sorted = !0)));
                for (var a = 0, o = m.autodetect; a < o.length; a += 1) {
                    var s = o[a];
                    if ((r = s.test.apply(s, e))) break;
                }
            }
            if (m.format[r]) n._rgb = p(m.format[r].apply(null, i ? e : e.slice(0, -1)));
            else throw Error('unknown format: ' + e);
            3 === n._rgb.length && n._rgb.push(1);
        };
    g.prototype.toString = function () {
        return 'function' == h(this.hex) ? this.hex() : '[' + this._rgb.join(',') + ']';
    };
    var E = g,
        b = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(b.Color, [null].concat(e)))();
        };
    ((b.Color = E), (b.version = '2.4.2'));
    var y = b,
        O = d.unpack,
        v = Math.max,
        I = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = O(e, 'rgb'),
                r = n[0],
                i = n[1],
                a = n[2],
                o = 1 - v((r /= 255), v((i /= 255), (a /= 255))),
                s = o < 1 ? 1 / (1 - o) : 0;
            return [(1 - r - o) * s, (1 - i - o) * s, (1 - a - o) * s, o];
        },
        T = d.unpack,
        S = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = T(e, 'cmyk'))[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e.length > 4 ? e[4] : 1;
            return 1 === a ? [0, 0, 0, o] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - a), r >= 1 ? 0 : 255 * (1 - r) * (1 - a), i >= 1 ? 0 : 255 * (1 - i) * (1 - a), o];
        },
        A = y,
        N = E,
        C = _,
        R = d.unpack,
        P = d.type,
        w = I;
    ((N.prototype.cmyk = function () {
        return w(this._rgb);
    }),
        (A.cmyk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(N, [null].concat(e, ['cmyk'])))();
        }),
        (C.format.cmyk = S),
        C.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === P((e = R(e, 'cmyk'))) && 4 === e.length) return 'cmyk';
            }
        }));
    var D = d.unpack,
        L = d.last,
        x = function (e) {
            return Math.round(100 * e) / 100;
        },
        k = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = D(e, 'hsla'),
                r = L(e) || 'lsa';
            return ((n[0] = x(n[0] || 0)), (n[1] = x(100 * n[1]) + '%'), (n[2] = x(100 * n[2]) + '%'), 'hsla' === r || (n.length > 3 && n[3] < 1) ? ((n[3] = n.length > 3 ? n[3] : 1), (r = 'hsla')) : (n.length = 3), r + '(' + n.join(',') + ')');
        },
        M = d.unpack,
        j = function () {
            for (var e, t, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = (n = M(n, 'rgba'))[0],
                a = n[1],
                o = n[2],
                s = Math.min((i /= 255), (a /= 255), (o /= 255)),
                l = Math.max(i, a, o),
                c = (l + s) / 2;
            return (l === s ? ((e = 0), (t = Number.NaN)) : (e = c < 0.5 ? (l - s) / (l + s) : (l - s) / (2 - l - s)), i == l ? (t = (a - o) / (l - s)) : a == l ? (t = 2 + (o - i) / (l - s)) : o == l && (t = 4 + (i - a) / (l - s)), (t *= 60) < 0 && (t += 360), n.length > 3 && void 0 !== n[3]) ? [t, e, c, n[3]] : [t, e, c];
        },
        U = d.unpack,
        G = d.last,
        B = k,
        V = j,
        F = Math.round,
        Z = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = U(e, 'rgba'),
                r = G(e) || 'rgb';
            return 'hsl' == r.substr(0, 3) ? B(V(n), r) : ((n[0] = F(n[0])), (n[1] = F(n[1])), (n[2] = F(n[2])), ('rgba' === r || (n.length > 3 && n[3] < 1)) && ((n[3] = n.length > 3 ? n[3] : 1), (r = 'rgba')), r + '(' + n.slice(0, 'rgb' === r ? 3 : 4).join(',') + ')');
        },
        H = d.unpack,
        Y = Math.round,
        W = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var o = (i = H(i, 'hsl'))[0],
                s = i[1],
                l = i[2];
            if (0 === s) t = n = r = 255 * l;
            else {
                var c = [0, 0, 0],
                    u = [0, 0, 0],
                    d = l < 0.5 ? l * (1 + s) : l + s - l * s,
                    _ = 2 * l - d,
                    f = o / 360;
                ((c[0] = f + 1 / 3), (c[1] = f), (c[2] = f - 1 / 3));
                for (var p = 0; p < 3; p++) (c[p] < 0 && (c[p] += 1), c[p] > 1 && (c[p] -= 1), 6 * c[p] < 1 ? (u[p] = _ + (d - _) * 6 * c[p]) : 2 * c[p] < 1 ? (u[p] = d) : 3 * c[p] < 2 ? (u[p] = _ + (d - _) * (2 / 3 - c[p]) * 6) : (u[p] = _));
                ((t = (e = [Y(255 * u[0]), Y(255 * u[1]), Y(255 * u[2])])[0]), (n = e[1]), (r = e[2]));
            }
            return i.length > 3 ? [t, n, r, i[3]] : [t, n, r, 1];
        },
        K = W,
        z = _,
        q = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        X = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        Q = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
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
                return ((n[3] = 1), n);
            }
            if ((t = e.match(X))) {
                for (var i = t.slice(1, 5), a = 0; a < 4; a++) i[a] = +i[a];
                return i;
            }
            if ((t = e.match(Q))) {
                for (var o = t.slice(1, 4), s = 0; s < 3; s++) o[s] = et(2.55 * o[s]);
                return ((o[3] = 1), o);
            }
            if ((t = e.match(J))) {
                for (var l = t.slice(1, 5), c = 0; c < 3; c++) l[c] = et(2.55 * l[c]);
                return ((l[3] = +l[3]), l);
            }
            if ((t = e.match($))) {
                var u = t.slice(1, 4);
                ((u[1] *= 0.01), (u[2] *= 0.01));
                var d = K(u);
                return ((d[3] = 1), d);
            }
            if ((t = e.match(ee))) {
                var _ = t.slice(1, 4);
                ((_[1] *= 0.01), (_[2] *= 0.01));
                var f = K(_);
                return ((f[3] = +t[4]), f);
            }
        };
    en.test = function (e) {
        return q.test(e) || X.test(e) || Q.test(e) || J.test(e) || $.test(e) || ee.test(e);
    };
    var er = en,
        ei = y,
        ea = E,
        eo = _,
        es = d.type,
        el = Z,
        ec = er;
    ((ea.prototype.css = function (e) {
        return el(this._rgb, e);
    }),
        (ei.css = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ea, [null].concat(e, ['css'])))();
        }),
        (eo.format.css = ec),
        eo.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && 'string' === es(e) && ec.test(e)) return 'css';
            }
        }));
    var eu = E,
        ed = y,
        e_ = _,
        ef = d.unpack;
    ((e_.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = ef(e, 'rgba');
        return ((n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n);
    }),
        (ed.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eu, [null].concat(e, ['gl'])))();
        }),
        (eu.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        }));
    var ep = d.unpack,
        eh = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = ep(t, 'rgb'),
                i = r[0],
                a = r[1],
                o = r[2],
                s = Math.min(i, a, o),
                l = Math.max(i, a, o),
                c = l - s,
                u = (100 * c) / 255,
                d = (s / (255 - c)) * 100;
            return (0 === c ? (e = Number.NaN) : (i === l && (e = (a - o) / c), a === l && (e = 2 + (o - i) / c), o === l && (e = 4 + (i - a) / c), (e *= 60) < 0 && (e += 360)), [e, u, d]);
        },
        em = d.unpack,
        eg = Math.floor,
        eE = function () {
            for (var e, t, n, r, i, a, o, s, l, c = [], u = arguments.length; u--; ) c[u] = arguments[u];
            var d = (c = em(c, 'hcg'))[0],
                _ = c[1],
                f = c[2];
            f *= 255;
            var p = 255 * _;
            if (0 === _) o = s = l = f;
            else {
                (360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360));
                var h = eg((d /= 60)),
                    m = d - h,
                    g = f * (1 - _),
                    E = g + p * (1 - m),
                    b = g + p * m,
                    y = g + p;
                switch (h) {
                    case 0:
                        ((o = (e = [y, b, g])[0]), (s = e[1]), (l = e[2]));
                        break;
                    case 1:
                        ((o = (t = [E, y, g])[0]), (s = t[1]), (l = t[2]));
                        break;
                    case 2:
                        ((o = (n = [g, y, b])[0]), (s = n[1]), (l = n[2]));
                        break;
                    case 3:
                        ((o = (r = [g, E, y])[0]), (s = r[1]), (l = r[2]));
                        break;
                    case 4:
                        ((o = (i = [b, g, y])[0]), (s = i[1]), (l = i[2]));
                        break;
                    case 5:
                        ((o = (a = [y, g, E])[0]), (s = a[1]), (l = a[2]));
                }
            }
            return [o, s, l, c.length > 3 ? c[3] : 1];
        },
        eb = d.unpack,
        ey = d.type,
        eO = y,
        ev = E,
        eI = _,
        eT = eh;
    ((ev.prototype.hcg = function () {
        return eT(this._rgb);
    }),
        (eO.hcg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ev, [null].concat(e, ['hcg'])))();
        }),
        (eI.format.hcg = eE),
        eI.autodetect.push({
            p: 1,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === ey((e = eb(e, 'hcg'))) && 3 === e.length) return 'hcg';
            }
        }));
    var eS = d.unpack,
        eA = d.last,
        eN = Math.round,
        eC = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = eS(e, 'rgba'),
                r = n[0],
                i = n[1],
                a = n[2],
                o = n[3],
                s = eA(e) || 'auto';
            (void 0 === o && (o = 1), 'auto' === s && (s = o < 1 ? 'rgba' : 'rgb'), (r = eN(r)));
            var l = '000000' + ((r << 16) | ((i = eN(i)) << 8) | (a = eN(a))).toString(16);
            l = l.substr(l.length - 6);
            var c = '0' + eN(255 * o).toString(16);
            switch (((c = c.substr(c.length - 2)), s.toLowerCase())) {
                case 'rgba':
                    return '#' + l + c;
                case 'argb':
                    return '#' + c + l;
                default:
                    return '#' + l;
            }
        },
        eR = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        eP = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        ew = function (e) {
            if (e.match(eR)) {
                ((4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2]));
                var t = parseInt(e, 16);
                return [t >> 16, (t >> 8) & 255, 255 & t, 1];
            }
            if (e.match(eP)) {
                ((5 === e.length || 9 === e.length) && (e = e.substr(1)), 4 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]));
                var n = parseInt(e, 16);
                return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, Math.round(((255 & n) / 255) * 100) / 100];
            }
            throw Error('unknown hex color: ' + e);
        },
        eD = y,
        eL = E,
        ex = d.type,
        ek = _,
        eM = eC;
    ((eL.prototype.hex = function (e) {
        return eM(this._rgb, e);
    }),
        (eD.hex = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eL, [null].concat(e, ['hex'])))();
        }),
        (ek.format.hex = ew),
        ek.autodetect.push({
            p: 4,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && 'string' === ex(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return 'hex';
            }
        }));
    var ej = d.unpack,
        eU = d.TWOPI,
        eG = Math.min,
        eB = Math.sqrt,
        eV = Math.acos,
        eF = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            var r = ej(t, 'rgb'),
                i = r[0],
                a = r[1],
                o = r[2],
                s = eG((i /= 255), (a /= 255), (o /= 255)),
                l = (i + a + o) / 3,
                c = l > 0 ? 1 - s / l : 0;
            return (0 === c ? (e = NaN) : ((e = eV((e = (i - a + (i - o)) / 2 / eB((i - a) * (i - a) + (i - o) * (a - o))))), o > a && (e = eU - e), (e /= eU)), [360 * e, c, l]);
        },
        eZ = d.unpack,
        eH = d.limit,
        eY = d.TWOPI,
        eW = d.PITHIRD,
        eK = Math.cos,
        ez = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = eZ(r, 'hsi'))[0],
                o = r[1],
                s = r[2];
            return (isNaN(a) && (a = 0), isNaN(o) && (o = 0), a > 360 && (a -= 360), a < 0 && (a += 360), (a /= 360) < 1 / 3 ? (t = 1 - ((n = (1 - o) / 3) + (e = (1 + (o * eK(eY * a)) / eK(eW - eY * a)) / 3))) : a < 2 / 3 ? ((a -= 1 / 3), (n = 1 - ((e = (1 - o) / 3) + (t = (1 + (o * eK(eY * a)) / eK(eW - eY * a)) / 3)))) : ((a -= 2 / 3), (e = 1 - ((t = (1 - o) / 3) + (n = (1 + (o * eK(eY * a)) / eK(eW - eY * a)) / 3)))), (e = eH(s * e * 3)), [255 * e, 255 * (t = eH(s * t * 3)), 255 * (n = eH(s * n * 3)), r.length > 3 ? r[3] : 1]);
        },
        eq = d.unpack,
        eX = d.type,
        eQ = y,
        eJ = E,
        e$ = _,
        e0 = eF;
    ((eJ.prototype.hsi = function () {
        return e0(this._rgb);
    }),
        (eQ.hsi = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(eJ, [null].concat(e, ['hsi'])))();
        }),
        (e$.format.hsi = ez),
        e$.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === eX((e = eq(e, 'hsi'))) && 3 === e.length) return 'hsi';
            }
        }));
    var e1 = d.unpack,
        e2 = d.type,
        e3 = y,
        e4 = E,
        e5 = _,
        e6 = j;
    ((e4.prototype.hsl = function () {
        return e6(this._rgb);
    }),
        (e3.hsl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(e4, [null].concat(e, ['hsl'])))();
        }),
        (e5.format.hsl = W),
        e5.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === e2((e = e1(e, 'hsl'))) && 3 === e.length) return 'hsl';
            }
        }));
    var e8 = d.unpack,
        e7 = Math.min,
        e9 = Math.max,
        te = function () {
            for (var e, t, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = e8(r, 'rgb'))[0],
                o = r[1],
                s = r[2],
                l = e7(a, o, s),
                c = e9(a, o, s),
                u = c - l;
            return ((n = c / 255), 0 === c ? ((e = Number.NaN), (t = 0)) : ((t = u / c), a === c && (e = (o - s) / u), o === c && (e = 2 + (s - a) / u), s === c && (e = 4 + (a - o) / u), (e *= 60) < 0 && (e += 360)), [e, t, n]);
        },
        tt = d.unpack,
        tn = Math.floor,
        tr = function () {
            for (var e, t, n, r, i, a, o, s, l, c = [], u = arguments.length; u--; ) c[u] = arguments[u];
            var d = (c = tt(c, 'hsv'))[0],
                _ = c[1],
                f = c[2];
            if (((f *= 255), 0 === _)) o = s = l = f;
            else {
                (360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360));
                var p = tn((d /= 60)),
                    h = d - p,
                    m = f * (1 - _),
                    g = f * (1 - _ * h),
                    E = f * (1 - _ * (1 - h));
                switch (p) {
                    case 0:
                        ((o = (e = [f, E, m])[0]), (s = e[1]), (l = e[2]));
                        break;
                    case 1:
                        ((o = (t = [g, f, m])[0]), (s = t[1]), (l = t[2]));
                        break;
                    case 2:
                        ((o = (n = [m, f, E])[0]), (s = n[1]), (l = n[2]));
                        break;
                    case 3:
                        ((o = (r = [m, g, f])[0]), (s = r[1]), (l = r[2]));
                        break;
                    case 4:
                        ((o = (i = [E, m, f])[0]), (s = i[1]), (l = i[2]));
                        break;
                    case 5:
                        ((o = (a = [f, m, g])[0]), (s = a[1]), (l = a[2]));
                }
            }
            return [o, s, l, c.length > 3 ? c[3] : 1];
        },
        ti = d.unpack,
        ta = d.type,
        to = y,
        ts = E,
        tl = _,
        tc = te;
    ((ts.prototype.hsv = function () {
        return tc(this._rgb);
    }),
        (to.hsv = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(ts, [null].concat(e, ['hsv'])))();
        }),
        (tl.format.hsv = tr),
        tl.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === ta((e = ti(e, 'hsv'))) && 3 === e.length) return 'hsv';
            }
        }));
    var tu = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452
        },
        td = tu,
        t_ = d.unpack,
        tf = Math.pow,
        tp = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : tf((e + 0.055) / 1.055, 2.4);
        },
        th = function (e) {
            return e > td.t3 ? tf(e, 1 / 3) : e / td.t2 + td.t0;
        },
        tm = function (e, t, n) {
            return ((e = tp(e)), [th((0.4124564 * e + 0.3575761 * (t = tp(t)) + 0.1804375 * (n = tp(n))) / td.Xn), th((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / td.Yn), th((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / td.Zn)]);
        },
        tg = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = t_(e, 'rgb'),
                r = tm(n[0], n[1], n[2]),
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
        tI = function () {
            for (var e, t, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var o = (i = tb(i, 'lab'))[0],
                s = i[1],
                l = i[2];
            return ((t = (o + 16) / 116), (e = isNaN(s) ? t : t + s / 500), (n = isNaN(l) ? t : t - l / 200), (t = tE.Yn * tv(t)), (r = tO(3.2404542 * (e = tE.Xn * tv(e)) - 1.5371385 * t - 0.4985314 * (n = tE.Zn * tv(n)))), [r, tO(-0.969266 * e + 1.8760108 * t + 0.041556 * n), tO(0.0556434 * e - 0.2040259 * t + 1.0572252 * n), i.length > 3 ? i[3] : 1]);
        },
        tT = d.unpack,
        tS = d.type,
        tA = y,
        tN = E,
        tC = _,
        tR = tg;
    ((tN.prototype.lab = function () {
        return tR(this._rgb);
    }),
        (tA.lab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(tN, [null].concat(e, ['lab'])))();
        }),
        (tC.format.lab = tI),
        tC.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === tS((e = tT(e, 'lab'))) && 3 === e.length) return 'lab';
            }
        }));
    var tP = d.unpack,
        tw = d.RAD2DEG,
        tD = Math.sqrt,
        tL = Math.atan2,
        tx = Math.round,
        tk = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tP(e, 'lab'),
                r = n[0],
                i = n[1],
                a = n[2],
                o = tD(i * i + a * a),
                s = (tL(a, i) * tw + 360) % 360;
            return (0 === tx(10000 * o) && (s = Number.NaN), [r, o, s]);
        },
        tM = d.unpack,
        tj = tg,
        tU = tk,
        tG = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tM(e, 'rgb'),
                r = tj(n[0], n[1], n[2]);
            return tU(r[0], r[1], r[2]);
        },
        tB = d.unpack,
        tV = d.DEG2RAD,
        tF = Math.sin,
        tZ = Math.cos,
        tH = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tB(e, 'lch'),
                r = n[0],
                i = n[1],
                a = n[2];
            return (isNaN(a) && (a = 0), [r, tZ((a *= tV)) * i, tF(a) * i]);
        },
        tY = d.unpack,
        tW = tH,
        tK = tI,
        tz = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tW((e = tY(e, 'lch'))[0], e[1], e[2]),
                r = tK(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        tq = d.unpack,
        tX = tz,
        tQ = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = tq(e, 'hcl').reverse();
            return tX.apply(void 0, n);
        },
        tJ = d.unpack,
        t$ = d.type,
        t0 = y,
        t1 = E,
        t2 = _,
        t3 = tG;
    ((t1.prototype.lch = function () {
        return t3(this._rgb);
    }),
        (t1.prototype.hcl = function () {
            return t3(this._rgb).reverse();
        }),
        (t0.lch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t1, [null].concat(e, ['lch'])))();
        }),
        (t0.hcl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(t1, [null].concat(e, ['hcl'])))();
        }),
        (t2.format.lch = tz),
        (t2.format.hcl = tQ),
        ['lch', 'hcl'].forEach(function (e) {
            return t2.autodetect.push({
                p: 2,
                test: function () {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    if ('array' === t$((t = tJ(t, e))) && 3 === t.length) return e;
                }
            });
        }));
    var t4 = {
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
        t5 = E,
        t6 = _,
        t8 = d.type,
        t7 = t4,
        t9 = ew,
        ne = eC;
    ((t5.prototype.name = function () {
        for (var e = ne(this._rgb, 'rgb'), t = 0, n = Object.keys(t7); t < n.length; t += 1) {
            var r = n[t];
            if (t7[r] === e) return r.toLowerCase();
        }
        return e;
    }),
        (t6.format.named = function (e) {
            if (t7[(e = e.toLowerCase())]) return t9(t7[e]);
            throw Error('unknown color name: ' + e);
        }),
        t6.autodetect.push({
            p: 5,
            test: function (e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
                if (!t.length && 'string' === t8(e) && t7[e.toLowerCase()]) return 'named';
            }
        }));
    var nt = d.unpack,
        nn = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nt(e, 'rgb');
            return (n[0] << 16) + (n[1] << 8) + n[2];
        },
        nr = d.type,
        ni = function (e) {
            if ('number' == nr(e) && e >= 0 && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw Error('unknown num color: ' + e);
        },
        na = y,
        no = E,
        ns = _,
        nl = d.type,
        nc = nn;
    ((no.prototype.num = function () {
        return nc(this._rgb);
    }),
        (na.num = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(no, [null].concat(e, ['num'])))();
        }),
        (ns.format.num = ni),
        ns.autodetect.push({
            p: 5,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if (1 === e.length && 'number' === nl(e[0]) && e[0] >= 0 && e[0] <= 16777215) return 'num';
            }
        }));
    var nu = y,
        nd = E,
        n_ = _,
        nf = d.unpack,
        np = d.type,
        nh = Math.round;
    ((nd.prototype.rgb = function (e) {
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
            return new (Function.prototype.bind.apply(nd, [null].concat(e, ['rgb'])))();
        }),
        (n_.format.rgb = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nf(e, 'rgba');
            return (void 0 === n[3] && (n[3] = 1), n);
        }),
        n_.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === np((e = nf(e, 'rgba'))) && (3 === e.length || (4 === e.length && 'number' == np(e[3]) && e[3] >= 0 && e[3] <= 1))) return 'rgb';
            }
        }));
    var nm = Math.log,
        ng = function (e) {
            var t,
                n,
                r,
                i = e / 100;
            return (i < 66 ? ((t = 255), (n = i < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (n = i - 2) + 104.49216199393888 * nm(n)), (r = i < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (r = i - 10) + 115.67994401066147 * nm(r))) : ((t = 351.97690566805693 + 0.114206453784165 * (t = i - 55) - 40.25366309332127 * nm(t)), (n = 325.4494125711974 + 0.07943456536662342 * (n = i - 50) - 28.0852963507957 * nm(n)), (r = 255)), [t, n, r, 1]);
        },
        nE = ng,
        nb = d.unpack,
        ny = Math.round,
        nO = y,
        nv = E,
        nI = _,
        nT = function () {
            for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            for (var r = nb(t, 'rgb'), i = r[0], a = r[2], o = 1000, s = 40000, l = 0.4; s - o > l; ) {
                var c = nE((e = (s + o) * 0.5));
                c[2] / c[0] >= a / i ? (s = e) : (o = e);
            }
            return ny(e);
        };
    ((nv.prototype.temp =
        nv.prototype.kelvin =
        nv.prototype.temperature =
            function () {
                return nT(this._rgb);
            }),
        (nO.temp =
            nO.kelvin =
            nO.temperature =
                function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(nv, [null].concat(e, ['temp'])))();
                }),
        (nI.format.temp = nI.format.kelvin = nI.format.temperature = ng));
    var nS = d.unpack,
        nA = Math.cbrt,
        nN = Math.pow,
        nC = Math.sign,
        nR = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nS(e, 'rgb'),
                r = n[0],
                i = n[1],
                a = n[2],
                o = [nP(r / 255), nP(i / 255), nP(a / 255)],
                s = o[0],
                l = o[1],
                c = o[2],
                u = nA(0.4122214708 * s + 0.5363325363 * l + 0.0514459929 * c),
                d = nA(0.2119034982 * s + 0.6806995451 * l + 0.1073969566 * c),
                _ = nA(0.0883024619 * s + 0.2817188376 * l + 0.6299787005 * c);
            return [0.2104542553 * u + 0.793617785 * d - 0.0040720468 * _, 1.9779984951 * u - 2.428592205 * d + 0.4505937099 * _, 0.0259040371 * u + 0.7827717662 * d - 0.808675766 * _];
        };
    function nP(e) {
        var t = Math.abs(e);
        return t < 0.04045 ? e / 12.92 : (nC(e) || 1) * nN((t + 0.055) / 1.055, 2.4);
    }
    var nw = d.unpack,
        nD = Math.pow,
        nL = Math.sign,
        nx = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = (e = nw(e, 'lab'))[0],
                r = e[1],
                i = e[2],
                a = nD(n + 0.3963377774 * r + 0.2158037573 * i, 3),
                o = nD(n - 0.1055613458 * r - 0.0638541728 * i, 3),
                s = nD(n - 0.0894841775 * r - 1.291485548 * i, 3);
            return [255 * nk(4.0767416621 * a - 3.3077115913 * o + 0.2309699292 * s), 255 * nk(-1.2684380046 * a + 2.6097574011 * o - 0.3413193965 * s), 255 * nk(-0.0041960863 * a - 0.7034186147 * o + 1.707614701 * s), e.length > 3 ? e[3] : 1];
        };
    function nk(e) {
        var t = Math.abs(e);
        return t > 0.0031308 ? (nL(e) || 1) * (1.055 * nD(t, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var nM = d.unpack,
        nj = d.type,
        nU = y,
        nG = E,
        nB = _,
        nV = nR;
    ((nG.prototype.oklab = function () {
        return nV(this._rgb);
    }),
        (nU.oklab = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(nG, [null].concat(e, ['oklab'])))();
        }),
        (nB.format.oklab = nx),
        nB.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === nj((e = nM(e, 'oklab'))) && 3 === e.length) return 'oklab';
            }
        }));
    var nF = d.unpack,
        nZ = nR,
        nH = tk,
        nY = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nF(e, 'rgb'),
                r = nZ(n[0], n[1], n[2]);
            return nH(r[0], r[1], r[2]);
        },
        nW = d.unpack,
        nK = tH,
        nz = nx,
        nq = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = nK((e = nW(e, 'lch'))[0], e[1], e[2]),
                r = nz(n[0], n[1], n[2]);
            return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
        },
        nX = d.unpack,
        nQ = d.type,
        nJ = y,
        n$ = E,
        n0 = _,
        n1 = nY;
    ((n$.prototype.oklch = function () {
        return n1(this._rgb);
    }),
        (nJ.oklch = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(n$, [null].concat(e, ['oklch'])))();
        }),
        (n0.format.oklch = nq),
        n0.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('array' === nQ((e = nX(e, 'oklch'))) && 3 === e.length) return 'oklch';
            }
        }));
    var n2 = E,
        n3 = d.type;
    ((n2.prototype.alpha = function (e, t) {
        return (void 0 === t && (t = !1), void 0 !== e && 'number' === n3(e)) ? (t ? ((this._rgb[3] = e), this) : new n2([this._rgb[0], this._rgb[1], this._rgb[2], e], 'rgb')) : this._rgb[3];
    }),
        (E.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        }));
    var n4 = E,
        n5 = tu;
    ((n4.prototype.darken = function (e) {
        void 0 === e && (e = 1);
        var t = this,
            n = t.lab();
        return ((n[0] -= n5.Kn * e), new n4(n, 'lab').alpha(t.alpha(), !0));
    }),
        (n4.prototype.brighten = function (e) {
            return (void 0 === e && (e = 1), this.darken(-e));
        }),
        (n4.prototype.darker = n4.prototype.darken),
        (n4.prototype.brighter = n4.prototype.brighten),
        (E.prototype.get = function (e) {
            var t = e.split('.'),
                n = t[0],
                r = t[1],
                i = this[n]();
            if (!r) return i;
            var a = n.indexOf(r) - 2 * ('ok' === n.substr(0, 2));
            if (a > -1) return i[a];
            throw Error('unknown channel ' + r + ' in mode ' + n);
        }));
    var n6 = E,
        n8 = d.type,
        n7 = Math.pow,
        n9 = 1e-7,
        re = 20;
    n6.prototype.luminance = function (e) {
        if (void 0 !== e && 'number' === n8(e)) {
            if (0 === e) return new n6([0, 0, 0, this._rgb[3]], 'rgb');
            if (1 === e) return new n6([255, 255, 255, this._rgb[3]], 'rgb');
            var t = this.luminance(),
                n = 'rgb',
                r = re,
                i = function (t, a) {
                    var o = t.interpolate(a, 0.5, n),
                        s = o.luminance();
                    return !(Math.abs(e - s) < n9) && r-- ? (s > e ? i(t, o) : i(o, a)) : o;
                },
                a = (t > e ? i(new n6([0, 0, 0]), this) : i(this, new n6([255, 255, 255]))).rgb();
            return new n6(a.concat([this._rgb[3]]));
        }
        return rt.apply(void 0, this._rgb.slice(0, 3));
    };
    var rt = function (e, t, n) {
            return ((e = rn(e)), 0.2126 * e + 0.7152 * (t = rn(t)) + 0.0722 * (n = rn(n)));
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
            var a = r[0] || 'lrgb';
            if ((ro[a] || r.length || (a = Object.keys(ro)[0]), !ro[a])) throw Error('interpolation mode ' + a + ' is not defined');
            return ('object' !== ra(e) && (e = new ri(e)), 'object' !== ra(t) && (t = new ri(t)), ro[a](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha())));
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
        return e ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this) : new ru([t[0] * n, t[1] * n, t[2] * n, n], 'rgb');
    };
    var rd = E,
        r_ = tu;
    ((rd.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var t = this,
            n = t.lch();
        return ((n[1] += r_.Kn * e), n[1] < 0 && (n[1] = 0), new rd(n, 'lch').alpha(t.alpha(), !0));
    }),
        (rd.prototype.desaturate = function (e) {
            return (void 0 === e && (e = 1), this.saturate(-e));
        }));
    var rf = E,
        rp = d.type;
    rf.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.split('.'),
            i = r[0],
            a = r[1],
            o = this[i]();
        if (!a) return o;
        var s = i.indexOf(a) - 2 * ('ok' === i.substr(0, 2));
        if (s > -1) {
            if ('string' == rp(t))
                switch (t.charAt(0)) {
                    case '+':
                    case '-':
                        o[s] += +t;
                        break;
                    case '*':
                        o[s] *= +t.substr(1);
                        break;
                    case '/':
                        o[s] /= +t.substr(1);
                        break;
                    default:
                        o[s] = +t;
                }
            else if ('number' === rp(t)) o[s] = t;
            else throw Error('unsupported value for Color.set');
            var l = new rf(o, i);
            return n ? ((this._rgb = l._rgb), this) : l;
        }
        throw Error('unknown channel ' + a + ' in mode ' + i);
    };
    var rh = E;
    rr.rgb = function (e, t, n) {
        var r = e._rgb,
            i = t._rgb;
        return new rh(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), 'rgb');
    };
    var rm = E,
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
        return new rm(rg(rE(i, 2) * (1 - n) + rE(l, 2) * n), rg(rE(a, 2) * (1 - n) + rE(c, 2) * n), rg(rE(o, 2) * (1 - n) + rE(u, 2) * n), 'rgb');
    };
    var rb = E;
    rr.lab = function (e, t, n) {
        var r = e.lab(),
            i = t.lab();
        return new rb(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), 'lab');
    };
    var ry = E,
        rO = function (e, t, n, r) {
            var i, a, o, s, l, c, u, d, _, f, p, h, m, g;
            return ('hsl' === r ? ((o = e.hsl()), (s = t.hsl())) : 'hsv' === r ? ((o = e.hsv()), (s = t.hsv())) : 'hcg' === r ? ((o = e.hcg()), (s = t.hcg())) : 'hsi' === r ? ((o = e.hsi()), (s = t.hsi())) : 'lch' === r || 'hcl' === r ? ((r = 'hcl'), (o = e.hcl()), (s = t.hcl())) : 'oklch' === r && ((o = e.oklch().reverse()), (s = t.oklch().reverse())), ('h' === r.substr(0, 1) || 'oklch' === r) && ((l = (i = o)[0]), (u = i[1]), (_ = i[2]), (c = (a = s)[0]), (d = a[1]), (f = a[2])), isNaN(l) || isNaN(c) ? (isNaN(l) ? (isNaN(c) ? (h = Number.NaN) : ((h = c), (1 == _ || 0 == _) && 'hsv' != r && (p = d))) : ((h = l), (1 == f || 0 == f) && 'hsv' != r && (p = u))) : ((g = c > l && c - l > 180 ? c - (l + 360) : c < l && l - c > 180 ? c + 360 - l : c - l), (h = l + n * g)), void 0 === p && (p = u + n * (d - u)), (m = _ + n * (f - _)), 'oklch' === r ? new ry([m, p, h], r) : new ry([h, p, m], r));
        },
        rv = rO,
        rI = function (e, t, n) {
            return rv(e, t, n, 'lch');
        };
    ((rr.lch = rI), (rr.hcl = rI));
    var rT = E;
    rr.num = function (e, t, n) {
        var r = e.num();
        return new rT(r + n * (t.num() - r), 'num');
    };
    var rS = rO;
    rr.hcg = function (e, t, n) {
        return rS(e, t, n, 'hcg');
    };
    var rA = rO;
    rr.hsi = function (e, t, n) {
        return rA(e, t, n, 'hsi');
    };
    var rN = rO;
    rr.hsl = function (e, t, n) {
        return rN(e, t, n, 'hsl');
    };
    var rC = rO;
    rr.hsv = function (e, t, n) {
        return rC(e, t, n, 'hsv');
    };
    var rR = E;
    rr.oklab = function (e, t, n) {
        var r = e.oklab(),
            i = t.oklab();
        return new rR(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), 'oklab');
    };
    var rP = rO;
    rr.oklch = function (e, t, n) {
        return rP(e, t, n, 'oklch');
    };
    var rw = E,
        rD = d.clip_rgb,
        rL = Math.pow,
        rx = Math.sqrt,
        rk = Math.PI,
        rM = Math.cos,
        rj = Math.sin,
        rU = Math.atan2,
        rG = function (e, t, n) {
            (void 0 === t && (t = 'lrgb'), void 0 === n && (n = null));
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
                'lrgb' === t)
            )
                return rB(e, n);
            for (var a = e.shift(), o = a.get(t), s = [], l = 0, c = 0, u = 0; u < o.length; u++)
                if (((o[u] = (o[u] || 0) * n[0]), s.push(isNaN(o[u]) ? 0 : n[0]), 'h' === t.charAt(u) && !isNaN(o[u]))) {
                    var d = (o[u] / 180) * rk;
                    ((l += rM(d) * n[0]), (c += rj(d) * n[0]));
                }
            var _ = a.alpha() * n[0];
            e.forEach(function (e, r) {
                var i = e.get(t);
                _ += e.alpha() * n[r + 1];
                for (var a = 0; a < o.length; a++)
                    if (!isNaN(i[a]))
                        if (((s[a] += n[r + 1]), 'h' === t.charAt(a))) {
                            var u = (i[a] / 180) * rk;
                            ((l += rM(u) * n[r + 1]), (c += rj(u) * n[r + 1]));
                        } else o[a] += i[a] * n[r + 1];
            });
            for (var f = 0; f < o.length; f++)
                if ('h' === t.charAt(f)) {
                    for (var p = (rU(c / s[f], l / s[f]) / rk) * 180; p < 0; ) p += 360;
                    for (; p >= 360; ) p -= 360;
                    o[f] = p;
                } else o[f] = o[f] / s[f];
            return ((_ /= r), new rw(o, t).alpha(_ > 0.99999 ? 1 : _, !0));
        },
        rB = function (e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], i = 0; i < e.length; i++) {
                var a = e[i],
                    o = t[i] / n,
                    s = a._rgb;
                ((r[0] += rL(s[0], 2) * o), (r[1] += rL(s[1], 2) * o), (r[2] += rL(s[2], 2) * o), (r[3] += s[3] * o));
            }
            return ((r[0] = rx(r[0])), (r[1] = rx(r[1])), (r[2] = rx(r[2])), r[3] > 0.9999999 && (r[3] = 1), new rw(rD(r)));
        },
        rV = y,
        rF = d.type,
        rZ = Math.pow,
        rH = function (e) {
            var t = 'rgb',
                n = rV('#ccc'),
                r = 0,
                i = [0, 1],
                a = [],
                o = [0, 0],
                s = !1,
                l = [],
                c = !1,
                u = 0,
                d = 1,
                _ = !1,
                f = {},
                p = !0,
                h = 1,
                m = function (e) {
                    if (('string' === rF((e = e || ['#fff', '#000'])) && rV.brewer && rV.brewer[e.toLowerCase()] && (e = rV.brewer[e.toLowerCase()]), 'array' === rF(e))) {
                        (1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0)));
                        for (var t = 0; t < e.length; t++) e[t] = rV(e[t]);
                        a.length = 0;
                        for (var n = 0; n < e.length; n++) a.push(n / (e.length - 1));
                    }
                    return (O(), (l = e));
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
                    ((c = b(c)), r || (c = E(c)), 1 !== h && (c = rZ(c, h)));
                    var _ = Math.floor(10000 * (c = Math.min(1, Math.max(0, (c = o[0] + c * (1 - o[0] - o[1]))))));
                    if (p && f[_]) i = f[_];
                    else {
                        if ('array' === rF(l))
                            for (var m = 0; m < a.length; m++) {
                                var y = a[m];
                                if (c <= y || (c >= y && m === a.length - 1)) {
                                    i = l[m];
                                    break;
                                }
                                if (c > y && c < a[m + 1]) {
                                    ((c = (c - y) / (a[m + 1] - y)), (i = rV.interpolate(l[m], l[m + 1], c, t)));
                                    break;
                                }
                            }
                        else 'function' === rF(l) && (i = l(c));
                        p && (f[_] = i);
                    }
                    return i;
                },
                O = function () {
                    return (f = {});
                };
            m(e);
            var v = function (e) {
                var t = rV(y(e));
                return c && t[c] ? t[c]() : t;
            };
            return (
                (v.classes = function (e) {
                    if (null != e) {
                        if ('array' === rF(e)) ((s = e), (i = [e[0], e[e.length - 1]]));
                        else {
                            var t = rV.analyze(i);
                            s = 0 === e ? [t.min, t.max] : rV.limits(t, 'e', e);
                        }
                        return v;
                    }
                    return s;
                }),
                (v.domain = function (e) {
                    if (!arguments.length) return i;
                    ((u = e[0]), (d = e[e.length - 1]), (a = []));
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
                                _ = e.map(function (e) {
                                    return (e - u) / (d - u);
                                });
                            _.every(function (e, t) {
                                return c[t] === e;
                            }) ||
                                (b = function (e) {
                                    if (e <= 0 || e >= 1) return e;
                                    for (var t = 0; e >= _[t + 1]; ) t++;
                                    var n = (e - _[t]) / (_[t + 1] - _[t]);
                                    return c[t] + n * (c[t + 1] - c[t]);
                                });
                        }
                    }
                    return ((i = [u, d]), v);
                }),
                (v.mode = function (e) {
                    return arguments.length ? ((t = e), O(), v) : t;
                }),
                (v.range = function (e, t) {
                    return (m(e), v);
                }),
                (v.out = function (e) {
                    return ((c = e), v);
                }),
                (v.spread = function (e) {
                    return arguments.length ? ((r = e), v) : r;
                }),
                (v.correctLightness = function (e) {
                    return (
                        null == e && (e = !0),
                        (_ = e),
                        O(),
                        (E = _
                            ? function (e) {
                                  for (var t = y(0, !0).lab()[0], n = y(1, !0).lab()[0], r = t > n, i = y(e, !0).lab()[0], a = t + (n - t) * e, o = i - a, s = 0, l = 1, c = 20; Math.abs(o) > 0.01 && c-- > 0; )
                                      !(function () {
                                          (r && (o *= -1), o < 0 ? ((s = e), (e += (l - e) * 0.5)) : ((l = e), (e += (s - e) * 0.5)), (o = (i = y(e, !0).lab()[0]) - a));
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
                    return null != e ? ('number' === rF(e) && (e = [e, e]), (o = e), v) : o;
                }),
                (v.colors = function (t, n) {
                    arguments.length < 2 && (n = 'hex');
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
                        if (s && s.length > 2) for (var u = 1, d = s.length, _ = 1 <= d; _ ? u < d : u > d; _ ? u++ : u--) c.push((s[u - 1] + s[u]) * 0.5);
                        else c = i;
                        r = c.map(function (e) {
                            return v(e);
                        });
                    }
                    return (
                        rV[n] &&
                            (r = r.map(function (e) {
                                return e[n]();
                            })),
                        r
                    );
                }),
                (v.cache = function (e) {
                    return null != e ? ((p = e), v) : p;
                }),
                (v.gamma = function (e) {
                    return null != e ? ((h = e), v) : h;
                }),
                (v.nodata = function (e) {
                    return null != e ? ((n = rV(e)), v) : n;
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
                ((a = (t = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = t[1]),
                    (i = function (e) {
                        return new rW(
                            [0, 1, 2].map(function (t) {
                                return a[t] + e * (o[t] - a[t]);
                            }),
                            'lab'
                        );
                    }));
            else if (3 === e.length)
                ((a = (n = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = n[1]),
                    (s = n[2]),
                    (i = function (e) {
                        return new rW(
                            [0, 1, 2].map(function (t) {
                                return (1 - e) * (1 - e) * a[t] + 2 * (1 - e) * e * o[t] + e * e * s[t];
                            }),
                            'lab'
                        );
                    }));
            else if (4 === e.length)
                ((a = (r = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = r[1]),
                    (s = r[2]),
                    (l = r[3]),
                    (i = function (e) {
                        return new rW(
                            [0, 1, 2].map(function (t) {
                                return (1 - e) * (1 - e) * (1 - e) * a[t] + 3 * (1 - e) * (1 - e) * e * o[t] + 3 * (1 - e) * e * e * s[t] + e * e * e * l[t];
                            }),
                            'lab'
                        );
                    }));
            else if (e.length >= 5)
                ((c = e.map(function (e) {
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
                            'lab'
                        );
                    }));
            else throw RangeError('No point in running bezier with only one color.');
            return i;
        },
        rX = function (e) {
            var t = rq(e);
            return (
                (t.scale = function () {
                    return rK(t);
                }),
                t
            );
        },
        rQ = y,
        rJ = function (e, t, n) {
            if (!rJ[n]) throw Error('unknown blend mode ' + n);
            return rJ[n](e, t);
        },
        r$ = function (e) {
            return function (t, n) {
                var r = rQ(n).rgb(),
                    i = rQ(t).rgb();
                return rQ.rgb(e(r, i));
            };
        },
        r0 = function (e) {
            return function (t, n) {
                var r = [];
                return ((r[0] = e(t[0], n[0])), (r[1] = e(t[1], n[1])), (r[2] = e(t[2], n[2])), r);
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
        r4 = function (e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255));
        },
        r5 = function (e, t) {
            return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
        },
        r6 = function (e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255));
        },
        r8 = function (e, t) {
            return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
        };
    ((rJ.normal = r$(
        r0(function (e) {
            return e;
        })
    )),
        (rJ.multiply = r$(r0(r1))),
        (rJ.screen = r$(r0(r4))),
        (rJ.overlay = r$(r0(r5))),
        (rJ.darken = r$(r0(r2))),
        (rJ.lighten = r$(r0(r3))),
        (rJ.dodge = r$(r0(r8))),
        (rJ.burn = r$(r0(r6))));
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
                (void 0 === e && (e = 300), void 0 === t && (t = -1.5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = [0, 1]));
                var a,
                    o = 0;
                'array' === r9(i) ? (a = i[1] - i[0]) : ((a = 0), (i = [i, i]));
                var s = function (s) {
                    var l = it * ((e + 120) / 360 + t * s),
                        c = ir(i[0] + a * s, r),
                        u = ((0 !== o ? n[0] + s * o : n) * c * (1 - c)) / 2,
                        d = ia(l),
                        _ = ii(l);
                    return io(ie([255 * (c + u * (-0.14861 * d + 1.78277 * _)), 255 * (c + u * (-0.29227 * d - 0.90649 * _)), 255 * (c + 1.97294 * d * u), 1]));
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
                        return null == e ? n : ('array' === r9((n = e)) ? 0 == (o = n[1] - n[0]) && (n = n[1]) : (o = 0), s);
                    }),
                    (s.lightness = function (e) {
                        return null == e ? i : ('array' === r9(e) ? ((i = e), (a = e[1] - e[0])) : ((i = [e, e]), (a = 0)), s);
                    }),
                    (s.scale = function () {
                        return io.scale(s);
                    }),
                    s.hue(n),
                    s
                );
            },
            il = E,
            ic = '0123456789abcdef',
            iu = Math.floor,
            id = Math.random,
            i_ = function () {
                for (var e = '#', t = 0; t < 6; t++) e += ic.charAt(iu(16 * id()));
                return new il(e, 'hex');
            },
            ip = s,
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
                    count: 0
                };
                return (
                    'object' === ip(e) && (e = Object.values(e)),
                    e.forEach(function (e) {
                        (t && 'object' === ip(e) && (e = e[t]), null == e || isNaN(e) || (n.values.push(e), (n.sum += e), e < n.min && (n.min = e), e > n.max && (n.max = e), (n.count += 1)));
                    }),
                    (n.domain = [n.min, n.max]),
                    (n.limits = function (e, t) {
                        return iy(n, e, t);
                    }),
                    n
                );
            },
            iy = function (e, t, n) {
                (void 0 === t && (t = 'equal'), void 0 === n && (n = 7), 'array' == ip(e) && (e = ib(e)));
                var r = e.min,
                    i = e.max,
                    a = e.values.sort(function (e, t) {
                        return e - t;
                    });
                if (1 === n) return [r, i];
                var o = [];
                if (('c' === t.substr(0, 1) && (o.push(r), o.push(i)), 'e' === t.substr(0, 1))) {
                    o.push(r);
                    for (var s = 1; s < n; s++) o.push(r + (s / n) * (i - r));
                    o.push(i);
                } else if ('l' === t.substr(0, 1)) {
                    if (r <= 0) throw Error('Logarithmic scales are only possible for values > 0');
                    var l = Math.LOG10E * ih(r),
                        c = Math.LOG10E * ih(i);
                    o.push(r);
                    for (var u = 1; u < n; u++) o.push(im(10, l + (u / n) * (c - l)));
                    o.push(i);
                } else if ('q' === t.substr(0, 1)) {
                    o.push(r);
                    for (var d = 1; d < n; d++) {
                        var _ = ((a.length - 1) * d) / n,
                            f = ig(_);
                        if (f === _) o.push(a[f]);
                        else {
                            var p = _ - f;
                            o.push(a[f] * (1 - p) + a[f + 1] * p);
                        }
                    }
                    o.push(i);
                } else if ('k' === t.substr(0, 1)) {
                    var h,
                        m = a.length,
                        g = Array(m),
                        E = Array(n),
                        b = !0,
                        y = 0,
                        O = null;
                    (O = []).push(r);
                    for (var v = 1; v < n; v++) O.push(r + (v / n) * (i - r));
                    for (O.push(i); b; ) {
                        for (var I = 0; I < n; I++) E[I] = 0;
                        for (var T = 0; T < m; T++)
                            for (var S = a[T], A = Number.MAX_VALUE, N = void 0, C = 0; C < n; C++) {
                                var R = iE(O[C] - S);
                                (R < A && ((A = R), (N = C)), E[N]++, (g[T] = N));
                            }
                        for (var P = Array(n), w = 0; w < n; w++) P[w] = null;
                        for (var D = 0; D < m; D++) null === P[(h = g[D])] ? (P[h] = a[D]) : (P[h] += a[D]);
                        for (var L = 0; L < n; L++) P[L] *= 1 / E[L];
                        b = !1;
                        for (var x = 0; x < n; x++)
                            if (P[x] !== O[x]) {
                                b = !0;
                                break;
                            }
                        ((O = P), ++y > 200 && (b = !1));
                    }
                    for (var k = {}, M = 0; M < n; M++) k[M] = [];
                    for (var j = 0; j < m; j++) k[(h = g[j])].push(a[j]);
                    for (var U = [], G = 0; G < n; G++) (U.push(k[G][0]), U.push(k[G][k[G].length - 1]));
                    ((U = U.sort(function (e, t) {
                        return e - t;
                    })),
                        o.push(U[0]));
                    for (var B = 1; B < U.length; B += 2) {
                        var V = U[B];
                        isNaN(V) || -1 !== o.indexOf(V) || o.push(V);
                    }
                }
                return o;
            },
            iO = ib,
            iv = iy,
            iI = E,
            iT = function (e, t) {
                ((e = new iI(e)), (t = new iI(t)));
                var n = e.luminance(),
                    r = t.luminance();
                return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
            },
            iS = E,
            iA = Math.sqrt,
            iN = Math.pow,
            iC = Math.min,
            iR = Math.max,
            iP = Math.atan2,
            iw = Math.abs,
            iD = Math.cos,
            iL = Math.sin,
            ix = Math.exp,
            ik = Math.PI,
            iM = function (e, t, n, r, i) {
                (void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1));
                var a = function (e) {
                        return (360 * e) / (2 * ik);
                    },
                    o = function (e) {
                        return (2 * ik * e) / 360;
                    };
                ((e = new iS(e)), (t = new iS(t)));
                var s = Array.from(e.lab()),
                    l = s[0],
                    c = s[1],
                    u = s[2],
                    d = Array.from(t.lab()),
                    _ = d[0],
                    f = d[1],
                    p = d[2],
                    h = (l + _) / 2,
                    m = (iA(iN(c, 2) + iN(u, 2)) + iA(iN(f, 2) + iN(p, 2))) / 2,
                    g = 0.5 * (1 - iA(iN(m, 7) / (iN(m, 7) + iN(25, 7)))),
                    E = c * (1 + g),
                    b = f * (1 + g),
                    y = iA(iN(E, 2) + iN(u, 2)),
                    O = iA(iN(b, 2) + iN(p, 2)),
                    v = (y + O) / 2,
                    I = a(iP(u, E)),
                    T = a(iP(p, b)),
                    S = I >= 0 ? I : I + 360,
                    A = T >= 0 ? T : T + 360,
                    N = iw(S - A) > 180 ? (S + A + 360) / 2 : (S + A) / 2,
                    C = 1 - 0.17 * iD(o(N - 30)) + 0.24 * iD(o(2 * N)) + 0.32 * iD(o(3 * N + 6)) - 0.2 * iD(o(4 * N - 63)),
                    R = A - S;
                ((R = 180 >= iw(R) ? R : A <= S ? R + 360 : R - 360), (R = 2 * iA(y * O) * iL(o(R) / 2)));
                var P = _ - l,
                    w = O - y,
                    D = 1 + (0.015 * iN(h - 50, 2)) / iA(20 + iN(h - 50, 2)),
                    L = 1 + 0.045 * v,
                    x = 1 + 0.015 * v * C,
                    k = 30 * ix(-iN((N - 275) / 25, 2)),
                    M = -(2 * iA(iN(v, 7) / (iN(v, 7) + iN(25, 7)))) * iL(2 * o(k));
                return iR(0, iC(100, iA(iN(P / (n * D), 2) + iN(w / (r * L), 2) + iN(R / (i * x), 2) + (w / (r * L)) * M * (R / (i * x)))));
            },
            ij = E,
            iU = function (e, t, n) {
                (void 0 === n && (n = 'lab'), (e = new ij(e)), (t = new ij(t)));
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
            iB = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                try {
                    return (new (Function.prototype.bind.apply(iG, [null].concat(e)))(), !0);
                } catch (e) {
                    return !1;
                }
            },
            iV = y,
            iF = rH,
            iZ = {
                cool: function () {
                    return iF([iV.hsl(180, 1, 0.9), iV.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return iF(['#000', '#f00', '#ff0', '#fff']).mode('rgb');
                }
            },
            iH = {
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
    return ((iq.average = rG), (iq.bezier = rX), (iq.blend = r7), (iq.cubehelix = is), (iq.mix = iq.interpolate = rs), (iq.random = i_), (iq.scale = rH), (iq.analyze = iO), (iq.contrast = iT), (iq.deltaE = iM), (iq.distance = iU), (iq.limits = iv), (iq.valid = iB), (iq.scales = iZ), (iq.colors = t4), (iq.brewer = iz), iq);
});
