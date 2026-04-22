var t = (function () {
    var e = {
        nextZero: function (e, t) {
            for (; 0 != e[t]; ) t++;
            return t;
        },
        readUshort: function (e, t) {
            return (e[t] << 8) | e[t + 1];
        },
        writeUshort: function (e, t, n) {
            (e[t] = (n >> 8) & 255), (e[t + 1] = 255 & n);
        },
        readUint: function (e, t) {
            return 0x1000000 * e[t] + ((e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]);
        },
        writeUint: function (e, t, n) {
            (e[t] = (n >> 24) & 255), (e[t + 1] = (n >> 16) & 255), (e[t + 2] = (n >> 8) & 255), (e[t + 3] = 255 & n);
        },
        readASCII: function (e, t, n) {
            for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(e[t + i]);
            return r;
        },
        writeASCII: function (e, t, n) {
            for (var r = 0; r < n.length; r++) e[t + r] = n.charCodeAt(r);
        },
        readBytes: function (e, t, n) {
            for (var r = [], i = 0; i < n; i++) r.push(e[t + i]);
            return r;
        },
        pad: function (e) {
            return e.length < 2 ? "0" + e : e;
        },
        readUTF8: function (t, n, r) {
            for (var i, s = "", a = 0; a < r; a++) s += "%" + e.pad(t[n + a].toString(16));
            try {
                i = decodeURIComponent(s);
            } catch (i) {
                return e.readASCII(t, n, r);
            }
            return i;
        },
    };
    function t(t, n, r, i) {
        var a = n * r,
            o = Math.ceil((n * s(i)) / 8),
            l = new Uint8Array(4 * a),
            u = new Uint32Array(l.buffer),
            d = i.ctype,
            c = i.depth,
            _ = e.readUshort;
        if ((Date.now(), 6 == d)) {
            var f = a << 2;
            if (8 == c)
                for (var E = 0; E < f; E += 4)
                    (l[E] = t[E]), (l[E + 1] = t[E + 1]), (l[E + 2] = t[E + 2]), (l[E + 3] = t[E + 3]);
            if (16 == c) for (var E = 0; E < f; E++) l[E] = t[E << 1];
        } else if (2 == d) {
            var h = i.tabs.tRNS;
            if (null == h) {
                if (8 == c)
                    for (var E = 0; E < a; E++) {
                        var p = 3 * E;
                        u[E] = -0x1000000 | (t[p + 2] << 16) | (t[p + 1] << 8) | t[p];
                    }
                if (16 == c)
                    for (var E = 0; E < a; E++) {
                        var p = 6 * E;
                        u[E] = -0x1000000 | (t[p + 4] << 16) | (t[p + 2] << 8) | t[p];
                    }
            } else {
                var m = h[0],
                    g = h[1],
                    A = h[2];
                if (8 == c)
                    for (var E = 0; E < a; E++) {
                        var I = E << 2,
                            p = 3 * E;
                        (u[E] = -0x1000000 | (t[p + 2] << 16) | (t[p + 1] << 8) | t[p]),
                            t[p] == m && t[p + 1] == g && t[p + 2] == A && (l[I + 3] = 0);
                    }
                if (16 == c)
                    for (var E = 0; E < a; E++) {
                        var I = E << 2,
                            p = 6 * E;
                        (u[E] = -0x1000000 | (t[p + 4] << 16) | (t[p + 2] << 8) | t[p]),
                            _(t, p) == m && _(t, p + 2) == g && _(t, p + 4) == A && (l[I + 3] = 0);
                    }
            }
        } else if (3 == d) {
            var T = i.tabs.PLTE,
                S = i.tabs.tRNS,
                y = S ? S.length : 0;
            if (1 == c)
                for (var N = 0; N < r; N++)
                    for (var O = N * o, R = N * n, E = 0; E < n; E++) {
                        var I = (R + E) << 2,
                            v = (t[O + (E >> 3)] >> (7 - (7 & E))) & 1,
                            C = 3 * v;
                        (l[I] = T[C]), (l[I + 1] = T[C + 1]), (l[I + 2] = T[C + 2]), (l[I + 3] = v < y ? S[v] : 255);
                    }
            if (2 == c)
                for (var N = 0; N < r; N++)
                    for (var O = N * o, R = N * n, E = 0; E < n; E++) {
                        var I = (R + E) << 2,
                            v = (t[O + (E >> 2)] >> (6 - ((3 & E) << 1))) & 3,
                            C = 3 * v;
                        (l[I] = T[C]), (l[I + 1] = T[C + 1]), (l[I + 2] = T[C + 2]), (l[I + 3] = v < y ? S[v] : 255);
                    }
            if (4 == c)
                for (var N = 0; N < r; N++)
                    for (var O = N * o, R = N * n, E = 0; E < n; E++) {
                        var I = (R + E) << 2,
                            v = (t[O + (E >> 1)] >> (4 - ((1 & E) << 2))) & 15,
                            C = 3 * v;
                        (l[I] = T[C]), (l[I + 1] = T[C + 1]), (l[I + 2] = T[C + 2]), (l[I + 3] = v < y ? S[v] : 255);
                    }
            if (8 == c)
                for (var E = 0; E < a; E++) {
                    var I = E << 2,
                        v = t[E],
                        C = 3 * v;
                    (l[I] = T[C]), (l[I + 1] = T[C + 1]), (l[I + 2] = T[C + 2]), (l[I + 3] = v < y ? S[v] : 255);
                }
        } else if (4 == d) {
            if (8 == c)
                for (var E = 0; E < a; E++) {
                    var I = E << 2,
                        b = E << 1,
                        D = t[b];
                    (l[I] = D), (l[I + 1] = D), (l[I + 2] = D), (l[I + 3] = t[b + 1]);
                }
            if (16 == c)
                for (var E = 0; E < a; E++) {
                    var I = E << 2,
                        b = E << 2,
                        D = t[b];
                    (l[I] = D), (l[I + 1] = D), (l[I + 2] = D), (l[I + 3] = t[b + 2]);
                }
        } else if (0 == d)
            for (var m = i.tabs.tRNS ? i.tabs.tRNS : -1, N = 0; N < r; N++) {
                var L = N * o,
                    w = N * n;
                if (1 == c)
                    for (var M = 0; M < n; M++) {
                        var D = 255 * ((t[L + (M >>> 3)] >>> (7 - (7 & M))) & 1),
                            P = 255 * (D != 255 * m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (2 == c)
                    for (var M = 0; M < n; M++) {
                        var D = 85 * ((t[L + (M >>> 2)] >>> (6 - ((3 & M) << 1))) & 3),
                            P = 255 * (D != 85 * m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (4 == c)
                    for (var M = 0; M < n; M++) {
                        var D = 17 * ((t[L + (M >>> 1)] >>> (4 - ((1 & M) << 2))) & 15),
                            P = 255 * (D != 17 * m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (8 == c)
                    for (var M = 0; M < n; M++) {
                        var D = t[L + M],
                            P = 255 * (D != m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (16 == c)
                    for (var M = 0; M < n; M++) {
                        var D = t[L + (M << 1)],
                            P = 255 * (_(t, L + (M << 1)) != m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
            }
        return l;
    }
    function n(e, t, n, o) {
        Date.now();
        var l = new Uint8Array((Math.ceil((n * s(e)) / 8) + 1 + e.interlace) * o);
        return (
            (t = e.tabs.CgBI ? i(t, l) : r(t, l)),
            Date.now(),
            0 == e.interlace
                ? (t = a(t, e, 0, n, o))
                : 1 == e.interlace &&
                  (t = (function (e, t) {
                      for (
                          var n = t.width,
                              r = t.height,
                              i = s(t),
                              o = i >> 3,
                              l = Math.ceil((n * i) / 8),
                              u = new Uint8Array(r * l),
                              d = 0,
                              c = [0, 0, 4, 0, 2, 0, 1],
                              _ = [0, 4, 0, 2, 0, 1, 0],
                              f = [8, 8, 8, 4, 4, 2, 2],
                              E = [8, 8, 4, 4, 2, 2, 1],
                              h = 0;
                          h < 7;
                      ) {
                          for (var p = f[h], m = E[h], g = 0, A = 0, I = c[h]; I < r; ) (I += p), A++;
                          for (var T = _[h]; T < n; ) (T += m), g++;
                          var S = Math.ceil((g * i) / 8);
                          a(e, t, d, g, A);
                          for (var y = 0, N = c[h]; N < r; ) {
                              for (var O = _[h], R = (d + y * S) << 3; O < n; ) {
                                  if (1 == i) {
                                      var v = e[R >> 3];
                                      (v = (v >> (7 - (7 & R))) & 1), (u[N * l + (O >> 3)] |= v << (7 - (7 & O)));
                                  }
                                  if (2 == i) {
                                      var v = e[R >> 3];
                                      (v = (v >> (6 - (7 & R))) & 3),
                                          (u[N * l + (O >> 2)] |= v << (6 - ((3 & O) << 1)));
                                  }
                                  if (4 == i) {
                                      var v = e[R >> 3];
                                      (v = (v >> (4 - (7 & R))) & 15),
                                          (u[N * l + (O >> 1)] |= v << (4 - ((1 & O) << 2)));
                                  }
                                  if (i >= 8) for (var C = N * l + O * o, b = 0; b < o; b++) u[C + b] = e[(R >> 3) + b];
                                  (R += i), (O += m);
                              }
                              y++, (N += p);
                          }
                          g * A != 0 && (d += A * (1 + S)), (h += 1);
                      }
                      return u;
                  })(t, e)),
            t
        );
    }
    function r(e, t) {
        return i(new Uint8Array(e.buffer, 2, e.length - 6), t);
    }
    var i = (function () {
        var e,
            t,
            n =
                ((e = Uint16Array),
                (t = Uint32Array),
                {
                    m: new e(16),
                    v: new e(16),
                    d: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    o: [
                        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131,
                        163, 195, 227, 258, 999, 999, 999,
                    ],
                    z: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                    B: new e(32),
                    p: [
                        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049,
                        3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535,
                    ],
                    w: [
                        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
                        13, 0, 0,
                    ],
                    h: new t(32),
                    g: new e(512),
                    s: [],
                    A: new e(32),
                    t: [],
                    k: new e(32768),
                    c: [],
                    a: [],
                    n: new e(32768),
                    e: [],
                    C: new e(512),
                    b: [],
                    i: new e(32768),
                    r: new t(286),
                    f: new t(30),
                    l: new t(19),
                    u: new t(15e3),
                    q: new e(65536),
                    j: new e(32768),
                });
        function r(e, t) {
            for (var r, i, s, a, o, l = e.length, u = n.v, a = 0; a <= t; a++) u[a] = 0;
            for (a = 1; a < l; a += 2) u[e[a]]++;
            var d = n.m;
            for (i = 1, r = 0, u[0] = 0; i <= t; i++) (r = (r + u[i - 1]) << 1), (d[i] = r);
            for (s = 0; s < l; s += 2) 0 != (o = e[s + 1]) && ((e[s] = d[o]), d[o]++);
        }
        function i(e, t, r) {
            for (var i = e.length, s = n.i, a = 0; a < i; a += 2)
                if (0 != e[a + 1])
                    for (
                        var o = a >> 1, l = e[a + 1], u = (o << 4) | l, d = t - l, c = e[a] << d, _ = c + (1 << d);
                        c != _;
                    )
                        (r[s[c] >>> (15 - t)] = u), c++;
        }
        function s(e, t) {
            for (var r = n.i, i = 15 - t, s = 0; s < e.length; s += 2) {
                var a = e[s] << (t - e[s + 1]);
                e[s] = r[a] >>> i;
            }
        }
        for (var a = 0; a < 32768; a++) {
            var o = a;
            (o =
                ((0xff00ff00 &
                    (o =
                        ((0xf0f0f0f0 &
                            (o =
                                ((0xcccccccc & (o = ((0xaaaaaaaa & o) >>> 1) | ((0x55555555 & o) << 1))) >>> 2) |
                                ((0x33333333 & o) << 2))) >>>
                            4) |
                        ((0xf0f0f0f & o) << 4))) >>>
                    8) |
                ((0xff00ff & o) << 8)),
                (n.i[a] = ((o >>> 16) | (o << 16)) >>> 17);
        }
        function l(e, t, n) {
            for (; 0 != t--; ) e.push(0, n);
        }
        for (var a = 0; a < 32; a++) (n.B[a] = (n.o[a] << 3) | n.z[a]), (n.h[a] = (n.p[a] << 4) | n.w[a]);
        function u(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function d(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function c(e, t) {
            return (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t);
        }
        function _(e, t) {
            var n = e.length;
            if (t <= n) return e;
            var r = new Uint8Array(Math.max(n << 1, t));
            return r.set(e, 0), r;
        }
        function f(e, t, n, r) {
            for (var i = 0, s = 0, a = r.length >>> 1; s < n; ) {
                var o = e[s + t];
                (r[s << 1] = 0), (r[(s << 1) + 1] = o), o > i && (i = o), s++;
            }
            for (; s < a; ) (r[s << 1] = 0), (r[(s << 1) + 1] = 0), s++;
            return i;
        }
        return (
            l(n.s, 144, 8),
            l(n.s, 112, 9),
            l(n.s, 24, 7),
            l(n.s, 8, 8),
            r(n.s, 9),
            i(n.s, 9, n.g),
            s(n.s, 9),
            l(n.t, 32, 5),
            r(n.t, 5),
            i(n.t, 5, n.A),
            s(n.t, 5),
            l(n.b, 19, 0),
            l(n.c, 286, 0),
            l(n.e, 30, 0),
            l(n.a, 320, 0),
            function (e, t) {
                var s,
                    a,
                    o = Uint8Array,
                    l = 0,
                    E = 0,
                    h = 0,
                    p = 0,
                    m = 0,
                    g = 0,
                    A = 0,
                    I = 0,
                    T = 0;
                if (3 == e[0] && 0 == e[1]) return t || new o(0);
                var S = null == t;
                for (S && (t = new o((e.length >>> 2) << 3)); 0 == l; ) {
                    if (((l = d(e, T, 1)), (E = d(e, T + 1, 2)), (T += 3), 0 == E)) {
                        (7 & T) != 0 && (T += 8 - (7 & T));
                        var y = (T >>> 3) + 4,
                            N = e[y - 4] | (e[y - 3] << 8);
                        S && (t = _(t, I + N)),
                            t.set(new o(e.buffer, e.byteOffset + y, N), I),
                            (T = (y + N) << 3),
                            (I += N);
                        continue;
                    }
                    if ((S && (t = _(t, I + 131072)), 1 == E && ((s = n.g), (a = n.A), (g = 511), (A = 31)), 2 == E)) {
                        (h = u(e, T, 5) + 257), (p = u(e, T + 5, 5) + 1), (m = u(e, T + 10, 4) + 4), (T += 14);
                        for (var O = 1, R = 0; R < 38; R += 2) (n.b[R] = 0), (n.b[R + 1] = 0);
                        for (var R = 0; R < m; R++) {
                            var v = u(e, T + 3 * R, 3);
                            (n.b[(n.d[R] << 1) + 1] = v), v > O && (O = v);
                        }
                        (T += 3 * m),
                            r(n.b, O),
                            i(n.b, O, n.C),
                            (s = n.k),
                            (a = n.n),
                            (T = (function (e, t, n, r, i, s) {
                                for (var a = 0; a < n; ) {
                                    var o = e[c(r, i) & t];
                                    i += 15 & o;
                                    var l = o >>> 4;
                                    if (l <= 15) (s[a] = l), a++;
                                    else {
                                        var d = 0,
                                            _ = 0;
                                        16 == l
                                            ? ((_ = 3 + u(r, i, 2)), (i += 2), (d = s[a - 1]))
                                            : 17 == l
                                              ? ((_ = 3 + u(r, i, 3)), (i += 3))
                                              : 18 == l && ((_ = 11 + u(r, i, 7)), (i += 7));
                                        for (var f = a + _; a < f; ) (s[a] = d), a++;
                                    }
                                }
                                return i;
                            })(n.C, (1 << O) - 1, h + p, e, T, n.a));
                        var C = f(n.a, 0, h, n.c);
                        g = (1 << C) - 1;
                        var b = f(n.a, h, p, n.e);
                        (A = (1 << b) - 1), r(n.c, C), i(n.c, C, s), r(n.e, b), i(n.e, b, a);
                    }
                    for (;;) {
                        var D = s[c(e, T) & g];
                        T += 15 & D;
                        var L = D >>> 4;
                        if (L >>> 8 == 0) t[I++] = L;
                        else if (256 == L) break;
                        else {
                            var w = I + L - 254;
                            if (L > 264) {
                                var M = n.B[L - 257];
                                (w = I + (M >>> 3) + u(e, T, 7 & M)), (T += 7 & M);
                            }
                            var P = a[c(e, T) & A];
                            T += 15 & P;
                            var U = P >>> 4,
                                k = n.h[U],
                                x = (k >>> 4) + d(e, T, 15 & k);
                            for (T += 15 & k, S && (t = _(t, I + 131072)); I < w; )
                                (t[I] = t[I++ - x]), (t[I] = t[I++ - x]), (t[I] = t[I++ - x]), (t[I] = t[I++ - x]);
                            I = w;
                        }
                    }
                }
                return t.length == I ? t : t.slice(0, I);
            }
        );
    })();
    function s(e) {
        return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
    }
    function a(e, t, n, r, i) {
        var a = s(t),
            l = Math.ceil((r * a) / 8);
        a = Math.ceil(a / 8);
        var u,
            d,
            c = e[n],
            _ = 0;
        if ((c > 1 && (e[n] = [0, 0, 1][c - 2]), 3 == c))
            for (_ = a; _ < l; _++) e[_ + 1] = (e[_ + 1] + (e[_ + 1 - a] >>> 1)) & 255;
        for (var f = 0; f < i; f++)
            if (((c = e[(d = (u = n + f * l) + f + 1) - 1]), (_ = 0), 0 == c)) for (; _ < l; _++) e[u + _] = e[d + _];
            else if (1 == c) {
                for (; _ < a; _++) e[u + _] = e[d + _];
                for (; _ < l; _++) e[u + _] = e[d + _] + e[u + _ - a];
            } else if (2 == c) for (; _ < l; _++) e[u + _] = e[d + _] + e[u + _ - l];
            else if (3 == c) {
                for (; _ < a; _++) e[u + _] = e[d + _] + (e[u + _ - l] >>> 1);
                for (; _ < l; _++) e[u + _] = e[d + _] + ((e[u + _ - l] + e[u + _ - a]) >>> 1);
            } else {
                for (; _ < a; _++) e[u + _] = e[d + _] + o(0, e[u + _ - l], 0);
                for (; _ < l; _++) e[u + _] = e[d + _] + o(e[u + _ - a], e[u + _ - l], e[u + _ - a - l]);
            }
        return e;
    }
    function o(e, t, n) {
        var r = e + t - n,
            i = r - e,
            s = r - t,
            a = r - n;
        return i * i <= s * s && i * i <= a * a ? e : s * s <= a * a ? t : n;
    }
    function l(e, t, n, r, i, s, a, o, l) {
        for (var u = Math.min(t, i), d = Math.min(n, s), c = 0, _ = 0, f = 0; f < d; f++)
            for (var E = 0; E < u; E++)
                if (
                    (a >= 0 && o >= 0
                        ? ((c = (f * t + E) << 2), (_ = ((o + f) * i + a + E) << 2))
                        : ((c = ((-o + f) * t - a + E) << 2), (_ = (f * i + E) << 2)),
                    0 == l)
                )
                    (r[_] = e[c]), (r[_ + 1] = e[c + 1]), (r[_ + 2] = e[c + 2]), (r[_ + 3] = e[c + 3]);
                else if (1 == l) {
                    var h = e[c + 3] * (1 / 255),
                        p = e[c] * h,
                        m = e[c + 1] * h,
                        g = e[c + 2] * h,
                        A = r[_ + 3] * (1 / 255),
                        I = r[_] * A,
                        T = r[_ + 1] * A,
                        S = r[_ + 2] * A,
                        y = 1 - h,
                        N = h + A * y,
                        O = 0 == N ? 0 : 1 / N;
                    (r[_ + 3] = 255 * N),
                        (r[_ + 0] = (p + I * y) * O),
                        (r[_ + 1] = (m + T * y) * O),
                        (r[_ + 2] = (g + S * y) * O);
                } else if (2 == l) {
                    var h = e[c + 3],
                        p = e[c],
                        m = e[c + 1],
                        g = e[c + 2],
                        A = r[_ + 3],
                        I = r[_],
                        T = r[_ + 1],
                        S = r[_ + 2];
                    h == A && p == I && m == T && g == S
                        ? ((r[_] = 0), (r[_ + 1] = 0), (r[_ + 2] = 0), (r[_ + 3] = 0))
                        : ((r[_] = p), (r[_ + 1] = m), (r[_ + 2] = g), (r[_ + 3] = h));
                } else if (3 == l) {
                    var h = e[c + 3],
                        p = e[c],
                        m = e[c + 1],
                        g = e[c + 2],
                        A = r[_ + 3],
                        I = r[_],
                        T = r[_ + 1],
                        S = r[_ + 2];
                    if (h == A && p == I && m == T && g == S) continue;
                    if (h < 220 && A > 20) return !1;
                }
        return !0;
    }
    return {
        decode: function (t) {
            for (
                var s,
                    a = new Uint8Array(t),
                    o = 8,
                    l = e.readUshort,
                    u = e.readUint,
                    d = { tabs: {}, frames: [] },
                    c = new Uint8Array(a.length),
                    _ = 0,
                    f = 0,
                    E = [137, 80, 78, 71, 13, 10, 26, 10],
                    h = 0;
                h < 8;
                h++
            )
                if (a[h] != E[h]) throw "The input is not a PNG file!";
            for (; o < a.length; ) {
                var p = e.readUint(a, o);
                o += 4;
                var m = e.readASCII(a, o, 4);
                if (((o += 4), "IHDR" == m)) {
                    (O = a),
                        (R = o),
                        ((v = d).width = e.readUint(O, R)),
                        (R += 4),
                        (v.height = e.readUint(O, R)),
                        (v.depth = O[(R += 4)]),
                        (v.ctype = O[++R]),
                        (v.compress = O[++R]),
                        (v.filter = O[++R]),
                        (v.interlace = O[++R]),
                        R++;
                } else if ("iCCP" == m) {
                    for (var g = o; 0 != a[g]; ) g++;
                    e.readASCII(a, o, g - o), a[g + 1];
                    var A = a.slice(g + 2, o + p),
                        I = null;
                    try {
                        I = r(A);
                    } catch (e) {
                        I = i(A);
                    }
                    d.tabs[m] = I;
                } else if ("CgBI" == m) d.tabs[m] = a.slice(o, o + 4);
                else if ("IDAT" == m) {
                    for (var h = 0; h < p; h++) c[_ + h] = a[o + h];
                    _ += p;
                } else if ("acTL" == m)
                    (d.tabs[m] = { num_frames: u(a, o), num_plays: u(a, o + 4) }), (s = new Uint8Array(a.length));
                else if ("fcTL" == m) {
                    if (0 != f) {
                        var T = d.frames[d.frames.length - 1];
                        (T.data = n(d, s.slice(0, f), T.rect.width, T.rect.height)), (f = 0);
                    }
                    var S = { x: u(a, o + 12), y: u(a, o + 16), width: u(a, o + 4), height: u(a, o + 8) },
                        y = l(a, o + 22),
                        N = {
                            rect: S,
                            delay: 1e3 * (y = l(a, o + 20) / (0 == y ? 100 : y)),
                            dispose: a[o + 24],
                            blend: a[o + 25],
                        };
                    d.frames.push(N);
                } else if ("fdAT" == m) {
                    for (var h = 0; h < p - 4; h++) s[f + h] = a[o + h + 4];
                    f += p - 4;
                } else if ("pHYs" == m) d.tabs[m] = [e.readUint(a, o), e.readUint(a, o + 4), a[o + 8]];
                else if ("cHRM" == m) {
                    d.tabs[m] = [];
                    for (var h = 0; h < 8; h++) d.tabs[m].push(e.readUint(a, o + 4 * h));
                } else if ("tEXt" == m || "zTXt" == m) {
                    null == d.tabs[m] && (d.tabs[m] = {});
                    var O,
                        R,
                        v,
                        C,
                        b = e.nextZero(a, o),
                        D = e.readASCII(a, o, b - o),
                        L = o + p - b - 1;
                    if ("tEXt" == m) C = e.readASCII(a, b + 1, L);
                    else {
                        var w = r(a.slice(b + 2, b + 2 + L));
                        C = e.readUTF8(w, 0, w.length);
                    }
                    d.tabs[m][D] = C;
                } else if ("iTXt" == m) {
                    null == d.tabs[m] && (d.tabs[m] = {});
                    var b = 0,
                        g = o;
                    b = e.nextZero(a, g);
                    var D = e.readASCII(a, g, b - g),
                        M = a[(g = b + 1)];
                    a[g + 1],
                        (g += 2),
                        (b = e.nextZero(a, g)),
                        e.readASCII(a, g, b - g),
                        (g = b + 1),
                        (b = e.nextZero(a, g)),
                        e.readUTF8(a, g, b - g);
                    var C,
                        L = p - ((g = b + 1) - o);
                    if (0 == M) C = e.readUTF8(a, g, L);
                    else {
                        var w = r(a.slice(g, g + L));
                        C = e.readUTF8(w, 0, w.length);
                    }
                    d.tabs[m][D] = C;
                } else if ("PLTE" == m) d.tabs[m] = e.readBytes(a, o, p);
                else if ("hIST" == m) {
                    var P = d.tabs.PLTE.length / 3;
                    d.tabs[m] = [];
                    for (var h = 0; h < P; h++) d.tabs[m].push(l(a, o + 2 * h));
                } else if ("tRNS" == m)
                    3 == d.ctype
                        ? (d.tabs[m] = e.readBytes(a, o, p))
                        : 0 == d.ctype
                          ? (d.tabs[m] = l(a, o))
                          : 2 == d.ctype && (d.tabs[m] = [l(a, o), l(a, o + 2), l(a, o + 4)]);
                else if ("gAMA" == m) d.tabs[m] = e.readUint(a, o) / 1e5;
                else if ("sRGB" == m) d.tabs[m] = a[o];
                else if ("bKGD" == m)
                    0 == d.ctype || 4 == d.ctype
                        ? (d.tabs[m] = [l(a, o)])
                        : 2 == d.ctype || 6 == d.ctype
                          ? (d.tabs[m] = [l(a, o), l(a, o + 2), l(a, o + 4)])
                          : 3 == d.ctype && (d.tabs[m] = a[o]);
                else if ("IEND" == m) break;
                (o += p), e.readUint(a, o), (o += 4);
            }
            if (0 != f) {
                var T = d.frames[d.frames.length - 1];
                T.data = n(d, s.slice(0, f), T.rect.width, T.rect.height);
            }
            return (d.data = n(d, c, d.width, d.height)), delete d.compress, delete d.interlace, delete d.filter, d;
        },
        toRGBA8: function (e) {
            var n = e.width,
                r = e.height;
            if (null == e.tabs.acTL) return [t(e.data, n, r, e).buffer];
            var i = [];
            null == e.frames[0].data && (e.frames[0].data = e.data);
            for (
                var s = n * r * 4, a = new Uint8Array(s), o = new Uint8Array(s), u = new Uint8Array(s), d = 0;
                d < e.frames.length;
                d++
            ) {
                var c = e.frames[d],
                    _ = c.rect.x,
                    f = c.rect.y,
                    E = c.rect.width,
                    h = c.rect.height,
                    p = t(c.data, E, h, e);
                if (0 != d) for (var m = 0; m < s; m++) u[m] = a[m];
                if (
                    (0 == c.blend ? l(p, E, h, a, n, r, _, f, 0) : 1 == c.blend && l(p, E, h, a, n, r, _, f, 1),
                    i.push(a.buffer.slice(0)),
                    0 == c.dispose)
                );
                else if (1 == c.dispose) l(o, E, h, a, n, r, _, f, 0);
                else if (2 == c.dispose) for (var m = 0; m < s; m++) a[m] = u[m];
            }
            return i;
        },
        _paeth: o,
        _copyTile: l,
        _bin: e,
    };
})();
!(function () {
    var e = t._copyTile,
        n = t._bin,
        r = t._paeth,
        i = {
            table: (function () {
                for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
                    for (var n = t, r = 0; r < 8; r++) 1 & n ? (n = 0xedb88320 ^ (n >>> 1)) : (n >>>= 1);
                    e[t] = n;
                }
                return e;
            })(),
            update: function (e, t, n, r) {
                for (var s = 0; s < r; s++) e = i.table[(e ^ t[n + s]) & 255] ^ (e >>> 8);
                return e;
            },
            crc: function (e, t, n) {
                return 0xffffffff ^ i.update(0xffffffff, e, t, n);
            },
        };
    function s(e, t, n, r) {
        (t[n] += (e[0] * r) >> 4),
            (t[n + 1] += (e[1] * r) >> 4),
            (t[n + 2] += (e[2] * r) >> 4),
            (t[n + 3] += (e[3] * r) >> 4);
    }
    function a(e) {
        return Math.max(0, Math.min(255, e));
    }
    function o(e, t) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2],
            s = e[3] - t[3];
        return n * n + r * r + i * i + s * s;
    }
    function l(e, t, n, r, i, l, u) {
        null == u && (u = 1);
        for (var d = r.length, c = [], _ = [], f = 0; f < d; f++) {
            var E = r[f];
            c.push([(E >>> 0) & 255, (E >>> 8) & 255, (E >>> 16) & 255, (E >>> 24) & 255]);
        }
        for (var f = 0; f < d; f++) {
            for (var h = 0xffffffff, p = 0, m = 0; m < d; m++) {
                var g = o(c[f], c[m]);
                m != f && g < h && ((h = g), (p = m));
            }
            var A = Math.sqrt(h) / 2;
            _[f] = ~~(A * A);
        }
        for (
            var I = new Uint32Array(i.buffer),
                T = new Int16Array(t * n * 4),
                S = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
                f = 0;
            f < S.length;
            f++
        )
            S[f] = 255 * (-0.5 + (S[f] + 0.5) / 16);
        for (var y = 0; y < n; y++)
            for (var N = 0; N < t; N++) {
                var O,
                    f = (y * t + N) * 4;
                if (2 != u)
                    O = [a(e[f] + T[f]), a(e[f + 1] + T[f + 1]), a(e[f + 2] + T[f + 2]), a(e[f + 3] + T[f + 3])];
                else {
                    var g = S[(3 & y) * 4 + (3 & N)];
                    O = [a(e[f] + g), a(e[f + 1] + g), a(e[f + 2] + g), a(e[f + 3] + g)];
                }
                for (var p = 0, R = 0xffffff, m = 0; m < d; m++) {
                    var v = o(O, c[m]);
                    v < R && ((R = v), (p = m));
                }
                var C = c[p],
                    b = [O[0] - C[0], O[1] - C[1], O[2] - C[2], O[3] - C[3]];
                1 == u &&
                    (N != t - 1 && s(b, T, f + 4, 7),
                    y != n - 1 &&
                        (0 != N && s(b, T, f + 4 * t - 4, 3),
                        s(b, T, f + 4 * t, 5),
                        N != t - 1 && s(b, T, f + 4 * t + 4, 1))),
                    (l[f >> 2] = p),
                    (I[f >> 2] = r[p]);
            }
    }
    function u(e, t, r, s, a) {
        null == a && (a = {});
        var o,
            l = i.crc,
            u = n.writeUint,
            d = n.writeUshort,
            c = n.writeASCII,
            _ = 8,
            f = e.frames.length > 1,
            E = !1,
            h = 33 + 20 * !!f;
        if (
            (null != a.sRGB && (h += 13),
            null != a.pHYs && (h += 21),
            null != a.iCCP && (h += 21 + (o = pako.deflate(a.iCCP)).length + 4),
            3 == e.ctype)
        ) {
            for (var p = e.plte.length, m = 0; m < p; m++) e.plte[m] >>> 24 != 255 && (E = !0);
            h += 8 + 3 * p + 4 + (E ? 8 + +p + 4 : 0);
        }
        for (var g = 0; g < e.frames.length; g++) {
            var A = e.frames[g];
            f && (h += 38), (h += A.cimg.length + 12), 0 != g && (h += 4);
        }
        for (var I = new Uint8Array((h += 12)), T = [137, 80, 78, 71, 13, 10, 26, 10], m = 0; m < 8; m++) I[m] = T[m];
        if (
            (u(I, _, 13),
            c(I, (_ += 4), "IHDR"),
            u(I, (_ += 4), t),
            u(I, (_ += 4), r),
            (I[(_ += 4)] = e.depth),
            (I[++_] = e.ctype),
            (I[++_] = 0),
            (I[++_] = 0),
            (I[++_] = 0),
            u(I, ++_, l(I, _ - 17, 17)),
            (_ += 4),
            null != a.sRGB &&
                (u(I, _, 1), c(I, (_ += 4), "sRGB"), (I[(_ += 4)] = a.sRGB), u(I, ++_, l(I, _ - 5, 5)), (_ += 4)),
            null != a.iCCP)
        ) {
            var S = 13 + o.length;
            u(I, _, S),
                c(I, (_ += 4), "iCCP"),
                c(I, (_ += 4), "ICC profile"),
                (_ += 11),
                (_ += 2),
                I.set(o, _),
                u(I, (_ += o.length), l(I, _ - (S + 4), S + 4)),
                (_ += 4);
        }
        if (
            (null != a.pHYs &&
                (u(I, _, 9),
                c(I, (_ += 4), "pHYs"),
                u(I, (_ += 4), a.pHYs[0]),
                u(I, (_ += 4), a.pHYs[1]),
                (I[(_ += 4)] = a.pHYs[2]),
                u(I, ++_, l(I, _ - 13, 13)),
                (_ += 4)),
            f &&
                (u(I, _, 8),
                c(I, (_ += 4), "acTL"),
                u(I, (_ += 4), e.frames.length),
                u(I, (_ += 4), null != a.loop ? a.loop : 0),
                u(I, (_ += 4), l(I, _ - 12, 12)),
                (_ += 4)),
            3 == e.ctype)
        ) {
            var p = e.plte.length;
            u(I, _, 3 * p), c(I, (_ += 4), "PLTE"), (_ += 4);
            for (var m = 0; m < p; m++) {
                var y = 3 * m,
                    N = e.plte[m],
                    O = 255 & N,
                    R = (N >>> 8) & 255,
                    v = (N >>> 16) & 255;
                (I[_ + y + 0] = O), (I[_ + y + 1] = R), (I[_ + y + 2] = v);
            }
            if ((u(I, (_ += 3 * p), l(I, _ - 3 * p - 4, 3 * p + 4)), (_ += 4), E)) {
                u(I, _, p), c(I, (_ += 4), "tRNS"), (_ += 4);
                for (var m = 0; m < p; m++) I[_ + m] = (e.plte[m] >>> 24) & 255;
                u(I, (_ += p), l(I, _ - p - 4, p + 4)), (_ += 4);
            }
        }
        for (var C = 0, g = 0; g < e.frames.length; g++) {
            var A = e.frames[g];
            f &&
                (u(I, _, 26),
                c(I, (_ += 4), "fcTL"),
                u(I, (_ += 4), C++),
                u(I, (_ += 4), A.rect.width),
                u(I, (_ += 4), A.rect.height),
                u(I, (_ += 4), A.rect.x),
                u(I, (_ += 4), A.rect.y),
                d(I, (_ += 4), s[g]),
                d(I, (_ += 2), 1e3),
                (I[(_ += 2)] = A.dispose),
                (I[++_] = A.blend),
                u(I, ++_, l(I, _ - 30, 30)),
                (_ += 4));
            var b = A.cimg,
                p = b.length;
            u(I, _, p + 4 * (0 != g));
            var D = (_ += 4);
            c(I, _, 0 == g ? "IDAT" : "fdAT"),
                (_ += 4),
                0 != g && (u(I, _, C++), (_ += 4)),
                I.set(b, _),
                u(I, (_ += p), l(I, D, _ - D)),
                (_ += 4);
        }
        return u(I, _, 0), c(I, (_ += 4), "IEND"), u(I, (_ += 4), l(I, _ - 4, 4)), (_ += 4), I.buffer;
    }
    function d(e, t, n) {
        for (var i = 0; i < e.frames.length; i++) {
            var s = e.frames[i],
                a = (s.rect.width, s.rect.height),
                o = new Uint8Array(a * s.bpl + a);
            s.cimg = (function (e, t, n, i, s, a, o) {
                var l = [],
                    u = [0, 1, 2, 3, 4];
                -1 != a ? (u = [a]) : (t * i > 5e5 || 1 == n) && (u = [0]), o && (f = { level: 0 });
                var d = s.length > 1e7 && null != window.UZIP ? window.UZIP : pako;
                Date.now();
                for (var c = 0; c < u.length; c++) {
                    for (var _ = 0; _ < t; _++)
                        !(function (e, t, n, i, s, a) {
                            var o = n * i,
                                l = o + n;
                            if (((e[l] = a), l++, 0 == a))
                                if (i < 500) for (var u = 0; u < i; u++) e[l + u] = t[o + u];
                                else e.set(new Uint8Array(t.buffer, o, i), l);
                            else if (1 == a) {
                                for (var u = 0; u < s; u++) e[l + u] = t[o + u];
                                for (var u = s; u < i; u++) e[l + u] = (t[o + u] - t[o + u - s] + 256) & 255;
                            } else if (0 == n) {
                                for (var u = 0; u < s; u++) e[l + u] = t[o + u];
                                if (2 == a) for (var u = s; u < i; u++) e[l + u] = t[o + u];
                                if (3 == a)
                                    for (var u = s; u < i; u++) e[l + u] = (t[o + u] - (t[o + u - s] >> 1) + 256) & 255;
                                if (4 == a)
                                    for (var u = s; u < i; u++)
                                        e[l + u] = (t[o + u] - r(t[o + u - s], 0, 0) + 256) & 255;
                            } else {
                                if (2 == a)
                                    for (var u = 0; u < i; u++) e[l + u] = (t[o + u] + 256 - t[o + u - i]) & 255;
                                if (3 == a) {
                                    for (var u = 0; u < s; u++) e[l + u] = (t[o + u] + 256 - (t[o + u - i] >> 1)) & 255;
                                    for (var u = s; u < i; u++)
                                        e[l + u] = (t[o + u] + 256 - ((t[o + u - i] + t[o + u - s]) >> 1)) & 255;
                                }
                                if (4 == a) {
                                    for (var u = 0; u < s; u++)
                                        e[l + u] = (t[o + u] + 256 - r(0, t[o + u - i], 0)) & 255;
                                    for (var u = s; u < i; u++)
                                        e[l + u] =
                                            (t[o + u] + 256 - r(t[o + u - s], t[o + u - i], t[o + u - s - i])) & 255;
                                }
                            }
                        })(s, e, _, i, n, u[c]);
                    l.push(d.deflate(s, f));
                }
                for (var f, E, h = 1e9, c = 0; c < l.length; c++) l[c].length < h && ((E = c), (h = l[c].length));
                return l[E];
            })(s.img, a, s.bpp, s.bpl, o, t, n);
        }
    }
    function c(t, n, r, i, s) {
        for (
            var a = s[0], o = s[1], u = s[2], d = s[3], c = s[4], h = s[5], p = 6, m = 8, g = 255, A = 0;
            A < t.length;
            A++
        )
            for (var I = new Uint8Array(t[A]), T = I.length, S = 0; S < T; S += 4) g &= I[S + 3];
        var y = 255 != g,
            N = (function (t, n, r, i, s, a) {
                for (var o = [], l = 0; l < t.length; l++) {
                    var u,
                        d = new Uint8Array(t[l]),
                        c = new Uint32Array(d.buffer),
                        E = 0,
                        h = 0,
                        p = n,
                        m = r,
                        g = +!!i;
                    if (0 != l) {
                        for (
                            var A = a || i || 1 == l || 0 != o[l - 2].dispose ? 1 : 2, I = 0, T = 1e9, S = 0;
                            S < A;
                            S++
                        ) {
                            for (
                                var y = new Uint8Array(t[l - 1 - S]),
                                    N = new Uint32Array(t[l - 1 - S]),
                                    O = n,
                                    R = r,
                                    v = -1,
                                    C = -1,
                                    b = 0;
                                b < r;
                                b++
                            )
                                for (var D = 0; D < n; D++) {
                                    var L = b * n + D;
                                    c[L] != N[L] &&
                                        (D < O && (O = D), D > v && (v = D), b < R && (R = b), b > C && (C = b));
                                }
                            -1 == v && (O = R = v = C = 0), s && ((1 & O) == 1 && O--, (1 & R) == 1 && R--);
                            var w = (v - O + 1) * (C - R + 1);
                            w < T && ((T = w), (I = S), (E = O), (h = R), (p = v - O + 1), (m = C - R + 1));
                        }
                        var y = new Uint8Array(t[l - 1 - I]);
                        1 == I && (o[l - 1].dispose = 2),
                            e(y, n, r, (u = new Uint8Array(p * m * 4)), p, m, -E, -h, 0),
                            1 == (g = +!!e(d, n, r, u, p, m, -E, -h, 3))
                                ? f(d, n, r, u, { x: E, y: h, width: p, height: m })
                                : e(d, n, r, u, p, m, -E, -h, 0);
                    } else u = d.slice(0);
                    o.push({ rect: { x: E, y: h, width: p, height: m }, img: u, blend: g, dispose: 0 });
                }
                if (i)
                    for (var l = 0; l < o.length; l++) {
                        var M = o[l];
                        if (1 != M.blend) {
                            var P = M.rect,
                                U = o[l - 1].rect,
                                k = Math.min(P.x, U.x),
                                x = Math.min(P.y, U.y),
                                G = {
                                    x: k,
                                    y: x,
                                    width: Math.max(P.x + P.width, U.x + U.width) - k,
                                    height: Math.max(P.y + P.height, U.y + U.height) - x,
                                };
                            (o[l - 1].dispose = 1), l - 1 != 0 && _(t, n, r, o, l - 1, G, s), _(t, n, r, o, l, G, s);
                        }
                    }
                if (1 != t.length)
                    for (var L = 0; L < o.length; L++) {
                        var M = o[L];
                        M.rect.width, M.rect.height;
                    }
                return o;
            })(t, n, r, a, o, u),
            O = {},
            R = [],
            v = [];
        if (0 != i) {
            for (var C = [], S = 0; S < N.length; S++) C.push(N[S].img.buffer);
            for (
                var b = E(
                        (function (e) {
                            for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
                            for (var r = new Uint8Array(t), i = 0, n = 0; n < e.length; n++) {
                                for (var s = new Uint8Array(e[n]), a = s.length, o = 0; o < a; o += 4) {
                                    var l = s[o],
                                        u = s[o + 1],
                                        d = s[o + 2],
                                        c = s[o + 3];
                                    0 == c && (l = u = d = 0),
                                        (r[i + o] = l),
                                        (r[i + o + 1] = u),
                                        (r[i + o + 2] = d),
                                        (r[i + o + 3] = c);
                                }
                                i += a;
                            }
                            return r.buffer;
                        })(C),
                        i,
                    ),
                    S = 0;
                S < b.plte.length;
                S++
            )
                R.push(b.plte[S].est.rgba);
            for (var D = 0, S = 0; S < N.length; S++) {
                var L = N[S],
                    w = L.img.length,
                    M = new Uint8Array(b.inds.buffer, D >> 2, w >> 2);
                v.push(M);
                var P = new Uint8Array(b.abuf, D, w);
                h && l(L.img, L.rect.width, L.rect.height, R, P, M), L.img.set(P), (D += w);
            }
        } else
            for (var A = 0; A < N.length; A++) {
                var L = N[A],
                    U = new Uint32Array(L.img.buffer),
                    k = L.rect.width,
                    T = U.length,
                    M = new Uint8Array(T);
                v.push(M);
                for (var S = 0; S < T; S++) {
                    var x = U[S];
                    if (0 != S && x == U[S - 1]) M[S] = M[S - 1];
                    else if (S > k && x == U[S - k]) M[S] = M[S - k];
                    else {
                        var G = O[x];
                        if (null == G && ((O[x] = G = R.length), R.push(x), R.length >= 300)) break;
                        M[S] = G;
                    }
                }
            }
        var V = R.length;
        V <= 256 && !1 == c && (m = Math.max((m = V <= 2 ? 1 : V <= 4 ? 2 : V <= 16 ? 4 : 8), d));
        for (var A = 0; A < N.length; A++) {
            var L = N[A],
                k = (L.rect.x, L.rect.y, L.rect.width),
                F = L.rect.height,
                B = L.img;
            new Uint32Array(B.buffer);
            var H = 4 * k,
                Y = 4;
            if (V <= 256 && !1 == c) {
                for (var W = new Uint8Array((H = Math.ceil((m * k) / 8)) * F), j = v[A], K = 0; K < F; K++) {
                    var S = K * H,
                        $ = K * k;
                    if (8 == m) for (var z = 0; z < k; z++) W[S + z] = j[$ + z];
                    else if (4 == m) for (var z = 0; z < k; z++) W[S + (z >> 1)] |= j[$ + z] << (4 - (1 & z) * 4);
                    else if (2 == m) for (var z = 0; z < k; z++) W[S + (z >> 2)] |= j[$ + z] << (6 - (3 & z) * 2);
                    else if (1 == m) for (var z = 0; z < k; z++) W[S + (z >> 3)] |= j[$ + z] << (7 - (7 & z) * 1);
                }
                (B = W), (p = 3), (Y = 1);
            } else if (!1 == y && 1 == N.length) {
                for (var W = new Uint8Array(k * F * 3), q = k * F, S = 0; S < q; S++) {
                    var X = 3 * S,
                        Q = 4 * S;
                    (W[X] = B[Q]), (W[X + 1] = B[Q + 1]), (W[X + 2] = B[Q + 2]);
                }
                (B = W), (p = 2), (Y = 3), (H = 3 * k);
            }
            (L.img = B), (L.bpl = H), (L.bpp = Y);
        }
        return { ctype: p, depth: m, plte: R, frames: N };
    }
    function _(t, n, r, i, s, a, o) {
        for (
            var l = Uint8Array,
                u = Uint32Array,
                d = new l(t[s - 1]),
                c = new u(t[s - 1]),
                _ = s + 1 < t.length ? new l(t[s + 1]) : null,
                E = new l(t[s]),
                h = new u(E.buffer),
                p = n,
                m = r,
                g = -1,
                A = -1,
                I = 0;
            I < a.height;
            I++
        )
            for (var T = 0; T < a.width; T++) {
                var S = a.x + T,
                    y = a.y + I,
                    N = y * n + S,
                    O = h[N];
                0 == O ||
                    (0 == i[s - 1].dispose && c[N] == O && (null == _ || 0 != _[4 * N + 3])) ||
                    (S < p && (p = S), S > g && (g = S), y < m && (m = y), y > A && (A = y));
            }
        -1 == g && (p = m = g = A = 0),
            o && ((1 & p) == 1 && p--, (1 & m) == 1 && m--),
            (a = { x: p, y: m, width: g - p + 1, height: A - m + 1 });
        var R = i[s];
        (R.rect = a),
            (R.blend = 1),
            (R.img = new Uint8Array(a.width * a.height * 4)),
            0 == i[s - 1].dispose
                ? (e(d, n, r, R.img, a.width, a.height, -a.x, -a.y, 0), f(E, n, r, R.img, a))
                : e(E, n, r, R.img, a.width, a.height, -a.x, -a.y, 0);
    }
    function f(t, n, r, i, s) {
        e(t, n, r, i, s.width, s.height, -s.x, -s.y, 2);
    }
    function E(e, t, n) {
        Date.now();
        for (
            var r = new Uint8Array(e),
                i = r.slice(0),
                s = new Uint32Array(i.buffer),
                a = m(i, t),
                o = a[0],
                l = a[1],
                u = l.length,
                d = new Uint32Array(u),
                c = new Uint8Array(d.buffer),
                _ = 0;
            _ < u;
            _++
        )
            d[_] = l[_].est.rgba;
        var f,
            E = r.length,
            I = new Uint8Array(E >> 2);
        if (u <= 60) p(r, I, c), h(I, s, d);
        else if (r.length < 32e6)
            for (var _ = 0; _ < E; _ += 4) {
                var T = r[_] * (1 / 255),
                    S = r[_ + 1] * (1 / 255),
                    y = r[_ + 2] * (1 / 255),
                    N = r[_ + 3] * (1 / 255);
                (f = g(o, T, S, y, N)), (I[_ >> 2] = f.ind), (s[_ >> 2] = f.est.rgba);
            }
        else
            for (var _ = 0; _ < E; _ += 4) {
                var T = r[_] * (1 / 255),
                    S = r[_ + 1] * (1 / 255),
                    y = r[_ + 2] * (1 / 255),
                    N = r[_ + 3] * (1 / 255);
                for (f = o; f.left; ) f = 0 >= A(f.est, T, S, y, N) ? f.left : f.right;
                (I[_ >> 2] = f.ind), (s[_ >> 2] = f.est.rgba);
            }
        if (n || r.length * u < 10 * 4e6) {
            for (var O = 1e9, _ = 0; _ < 10; _++) {
                var R,
                    v,
                    C,
                    b =
                        ((function (e, t, n) {
                            for (
                                var r = n.length >>> 2, i = new Uint32Array(4 * r), s = new Uint32Array(r), a = 0;
                                a < e.length;
                                a += 4
                            ) {
                                var o = t[a >>> 2],
                                    l = 4 * o;
                                s[o]++,
                                    (i[l] += e[a]),
                                    (i[l + 1] += e[a + 1]),
                                    (i[l + 2] += e[a + 2]),
                                    (i[l + 3] += e[a + 3]);
                            }
                            for (var a = 0; a < n.length; a++) n[a] = Math.round(i[a] / s[a >>> 2]);
                        })((R = r), (v = I), (C = c)),
                        p(R, v, C));
                if (b / O > 0.997) break;
                O = b;
            }
            for (var _ = 0; _ < u; _++) l[_].est.rgba = d[_];
            h(I, s, d);
        }
        return { abuf: i.buffer, inds: I, plte: l };
    }
    function h(e, t, n) {
        for (var r = 0; r < e.length; r++) t[r] = n[e[r]];
    }
    function p(e, t, n) {
        for (var r = 0, i = n.length >>> 2, s = [], a = 0; a < i; a++) {
            for (var o = 4 * a, l = n[o], u = n[o + 1], d = n[o + 2], c = n[o + 3], _ = 0, f = 1e9, E = 0; E < i; E++)
                if (a != E) {
                    var h = 4 * E,
                        p = l - n[h],
                        m = u - n[h + 1],
                        g = d - n[h + 2],
                        A = c - n[h + 3],
                        I = p * p + m * m + g * g + A * A;
                    I < f && ((f = I), (_ = E));
                }
            (s[a] = 0.5 * Math.sqrt(f)), (s[a] = s[a] * s[a]);
        }
        for (var a = 0; a < e.length; a += 4) {
            var l = e[a],
                u = e[a + 1],
                d = e[a + 2],
                c = e[a + 3],
                _ = t[a >>> 2],
                o = 4 * _,
                p = l - n[o],
                m = u - n[o + 1],
                g = d - n[o + 2],
                A = c - n[o + 3],
                f = p * p + m * m + g * g + A * A;
            if (f > s[_])
                for (var E = 0; E < i; E++) {
                    (p = l - n[(o = 4 * E)]), (m = u - n[o + 1]);
                    var I = p * p + m * m + (g = d - n[o + 2]) * g + (A = c - n[o + 3]) * A;
                    if (I < f && ((f = I), (_ = E), f < s[E])) break;
                }
            (t[a >>> 2] = _), (r += f);
        }
        return r / (e.length >>> 2);
    }
    function m(e, t, n) {
        null == n && (n = 1e-4);
        var r = new Uint32Array(e.buffer),
            i = { i0: 0, i1: e.length, bst: null, est: null, tdst: 0, left: null, right: null };
        (i.bst = T(e, i.i0, i.i1)), (i.est = S(i.bst));
        for (var s = [i]; s.length < t; ) {
            for (var a = 0, o = 0, l = 0; l < s.length; l++) s[l].est.L > a && ((a = s[l].est.L), (o = l));
            if (a < n) break;
            var u = s[o],
                d = (function (e, t, n, r, i, s) {
                    for (r -= 4; n < r; ) {
                        for (; I(e, n, i) <= s; ) n += 4;
                        for (; I(e, r, i) > s; ) r -= 4;
                        if (n >= r) break;
                        var a = t[n >> 2];
                        (t[n >> 2] = t[r >> 2]), (t[r >> 2] = a), (n += 4), (r -= 4);
                    }
                    for (; I(e, n, i) > s; ) n -= 4;
                    return n + 4;
                })(e, r, u.i0, u.i1, u.est.e, u.est.eMq255);
            if (u.i0 >= d || u.i1 <= d) {
                u.est.L = 0;
                continue;
            }
            var c = { i0: u.i0, i1: d, bst: null, est: null, tdst: 0, left: null, right: null };
            (c.bst = T(e, c.i0, c.i1)), (c.est = S(c.bst));
            var _ = { i0: d, i1: u.i1, bst: null, est: null, tdst: 0, left: null, right: null };
            _.bst = { R: [], m: [], N: u.bst.N - c.bst.N };
            for (var l = 0; l < 16; l++) _.bst.R[l] = u.bst.R[l] - c.bst.R[l];
            for (var l = 0; l < 4; l++) _.bst.m[l] = u.bst.m[l] - c.bst.m[l];
            (_.est = S(_.bst)), (u.left = c), (u.right = _), (s[o] = c), s.push(_);
        }
        s.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < s.length; l++) s[l].ind = l;
        return [i, s];
    }
    function g(e, t, n, r, i) {
        if (null == e.left) {
            var s, a, o, l, u, d, c, _, f;
            return (
                (s = e.est.q),
                (a = t),
                (o = n),
                (l = r),
                (u = i),
                (d = a - s[0]),
                (c = o - s[1]),
                (e.tdst = d * d + c * c + (_ = l - s[2]) * _ + (f = u - s[3]) * f),
                e
            );
        }
        var E = A(e.est, t, n, r, i),
            h = e.left,
            p = e.right;
        E > 0 && ((h = e.right), (p = e.left));
        var m = g(h, t, n, r, i);
        if (m.tdst <= E * E) return m;
        var I = g(p, t, n, r, i);
        return I.tdst < m.tdst ? I : m;
    }
    function A(e, t, n, r, i) {
        var s = e.e;
        return s[0] * t + s[1] * n + s[2] * r + s[3] * i - e.eMq;
    }
    function I(e, t, n) {
        return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
    }
    function T(e, t, n) {
        for (var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], s = t; s < n; s += 4) {
            var a = e[s] * (1 / 255),
                o = e[s + 1] * (1 / 255),
                l = e[s + 2] * (1 / 255),
                u = e[s + 3] * (1 / 255);
            (i[0] += a),
                (i[1] += o),
                (i[2] += l),
                (i[3] += u),
                (r[0] += a * a),
                (r[1] += a * o),
                (r[2] += a * l),
                (r[3] += a * u),
                (r[5] += o * o),
                (r[6] += o * l),
                (r[7] += o * u),
                (r[10] += l * l),
                (r[11] += l * u),
                (r[15] += u * u);
        }
        return (
            (r[4] = r[1]),
            (r[8] = r[2]),
            (r[9] = r[6]),
            (r[12] = r[3]),
            (r[13] = r[7]),
            (r[14] = r[11]),
            { R: r, m: i, N: (n - t) >> 2 }
        );
    }
    function S(e) {
        var t = e.R,
            n = e.m,
            r = e.N,
            i = n[0],
            s = n[1],
            a = n[2],
            o = n[3],
            l = 0 == r ? 0 : 1 / r,
            u = [
                t[0] - i * i * l,
                t[1] - i * s * l,
                t[2] - i * a * l,
                t[3] - i * o * l,
                t[4] - s * i * l,
                t[5] - s * s * l,
                t[6] - s * a * l,
                t[7] - s * o * l,
                t[8] - a * i * l,
                t[9] - a * s * l,
                t[10] - a * a * l,
                t[11] - a * o * l,
                t[12] - o * i * l,
                t[13] - o * s * l,
                t[14] - o * a * l,
                t[15] - o * o * l,
            ],
            d = [Math.random(), Math.random(), Math.random(), Math.random()],
            c = 0,
            _ = 0;
        if (0 != r)
            for (
                var f = 0;
                f < 16 &&
                ((d = y.multVec(u, d)),
                (_ = Math.sqrt(y.dot(d, d))),
                (d = y.sml(1 / _, d)),
                !(0 != f && 1e-9 > Math.abs(_ - c)));
                f++
            )
                c = _;
        var E = [i * l, s * l, a * l, o * l],
            h = y.dot(y.sml(255, E), d);
        return {
            Cov: u,
            q: E,
            e: d,
            L: c,
            eMq255: h,
            eMq: y.dot(d, E),
            rgba:
                ((Math.round(255 * E[3]) << 24) |
                    (Math.round(255 * E[2]) << 16) |
                    (Math.round(255 * E[1]) << 8) |
                    (0 | Math.round(255 * E[0]))) >>>
                0,
        };
    }
    var y = {
        multVec: function (e, t) {
            return [
                e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3],
                e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3],
                e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3],
                e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3],
            ];
        },
        dot: function (e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
        },
        sml: function (e, t) {
            return [e * t[0], e * t[1], e * t[2], e * t[3]];
        },
    };
    (t.encode = function (e, t, n, r, i, s, a) {
        null == r && (r = 0), null == a && (a = !1);
        var o = c(e, t, n, r, [!1, !1, !1, 0, a, !1]);
        return d(o, -1), u(o, t, n, i, s);
    }),
        (t.encodeLL = function (e, t, n, r, i, s, a, o) {
            var l = { ctype: 0 + 2 * (1 != r) + 4 * (0 != i), depth: s, frames: [] };
            Date.now();
            for (var c = (r + i) * s, _ = c * t, f = 0; f < e.length; f++)
                l.frames.push({
                    rect: { x: 0, y: 0, width: t, height: n },
                    img: new Uint8Array(e[f]),
                    blend: 0,
                    dispose: 1,
                    bpp: Math.ceil(c / 8),
                    bpl: Math.ceil(_ / 8),
                });
            return d(l, 0, !0), u(l, t, n, a, o);
        }),
        (t.encode.compress = c),
        (t.encode.dither = l),
        (t.quantize = E),
        (t.quantize.findNearest = p),
        (t.quantize.getKDtree = m),
        (t.quantize.getNearest = g);
})(),
    (e.exports = t);
