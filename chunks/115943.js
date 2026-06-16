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
            for (var i = "", r = 0; r < n; r++) i += String.fromCharCode(e[t + r]);
            return i;
        },
        writeASCII: function (e, t, n) {
            for (var i = 0; i < n.length; i++) e[t + i] = n.charCodeAt(i);
        },
        readBytes: function (e, t, n) {
            for (var i = [], r = 0; r < n; r++) i.push(e[t + r]);
            return i;
        },
        pad: function (e) {
            return e.length < 2 ? "0" + e : e;
        },
        readUTF8: function (t, n, i) {
            for (var r, s = "", a = 0; a < i; a++) s += "%" + e.pad(t[n + a].toString(16));
            try {
                r = decodeURIComponent(s);
            } catch (r) {
                return e.readASCII(t, n, i);
            }
            return r;
        },
    };
    function t(t, n, i, r) {
        var a = n * i,
            o = Math.ceil((n * s(r)) / 8),
            l = new Uint8Array(4 * a),
            u = new Uint32Array(l.buffer),
            c = r.ctype,
            d = r.depth,
            _ = e.readUshort;
        if ((Date.now(), 6 == c)) {
            var h = a << 2;
            if (8 == d)
                for (var f = 0; f < h; f += 4)
                    (l[f] = t[f]), (l[f + 1] = t[f + 1]), (l[f + 2] = t[f + 2]), (l[f + 3] = t[f + 3]);
            if (16 == d) for (var f = 0; f < h; f++) l[f] = t[f << 1];
        } else if (2 == c) {
            var p = r.tabs.tRNS;
            if (null == p) {
                if (8 == d)
                    for (var f = 0; f < a; f++) {
                        var E = 3 * f;
                        u[f] = -0x1000000 | (t[E + 2] << 16) | (t[E + 1] << 8) | t[E];
                    }
                if (16 == d)
                    for (var f = 0; f < a; f++) {
                        var E = 6 * f;
                        u[f] = -0x1000000 | (t[E + 4] << 16) | (t[E + 2] << 8) | t[E];
                    }
            } else {
                var m = p[0],
                    g = p[1],
                    A = p[2];
                if (8 == d)
                    for (var f = 0; f < a; f++) {
                        var I = f << 2,
                            E = 3 * f;
                        (u[f] = -0x1000000 | (t[E + 2] << 16) | (t[E + 1] << 8) | t[E]),
                            t[E] == m && t[E + 1] == g && t[E + 2] == A && (l[I + 3] = 0);
                    }
                if (16 == d)
                    for (var f = 0; f < a; f++) {
                        var I = f << 2,
                            E = 6 * f;
                        (u[f] = -0x1000000 | (t[E + 4] << 16) | (t[E + 2] << 8) | t[E]),
                            _(t, E) == m && _(t, E + 2) == g && _(t, E + 4) == A && (l[I + 3] = 0);
                    }
            }
        } else if (3 == c) {
            var T = r.tabs.PLTE,
                S = r.tabs.tRNS,
                y = S ? S.length : 0;
            if (1 == d)
                for (var C = 0; C < i; C++)
                    for (var N = C * o, v = C * n, f = 0; f < n; f++) {
                        var I = (v + f) << 2,
                            R = (t[N + (f >> 3)] >> (7 - (7 & f))) & 1,
                            O = 3 * R;
                        (l[I] = T[O]), (l[I + 1] = T[O + 1]), (l[I + 2] = T[O + 2]), (l[I + 3] = R < y ? S[R] : 255);
                    }
            if (2 == d)
                for (var C = 0; C < i; C++)
                    for (var N = C * o, v = C * n, f = 0; f < n; f++) {
                        var I = (v + f) << 2,
                            R = (t[N + (f >> 2)] >> (6 - ((3 & f) << 1))) & 3,
                            O = 3 * R;
                        (l[I] = T[O]), (l[I + 1] = T[O + 1]), (l[I + 2] = T[O + 2]), (l[I + 3] = R < y ? S[R] : 255);
                    }
            if (4 == d)
                for (var C = 0; C < i; C++)
                    for (var N = C * o, v = C * n, f = 0; f < n; f++) {
                        var I = (v + f) << 2,
                            R = (t[N + (f >> 1)] >> (4 - ((1 & f) << 2))) & 15,
                            O = 3 * R;
                        (l[I] = T[O]), (l[I + 1] = T[O + 1]), (l[I + 2] = T[O + 2]), (l[I + 3] = R < y ? S[R] : 255);
                    }
            if (8 == d)
                for (var f = 0; f < a; f++) {
                    var I = f << 2,
                        R = t[f],
                        O = 3 * R;
                    (l[I] = T[O]), (l[I + 1] = T[O + 1]), (l[I + 2] = T[O + 2]), (l[I + 3] = R < y ? S[R] : 255);
                }
        } else if (4 == c) {
            if (8 == d)
                for (var f = 0; f < a; f++) {
                    var I = f << 2,
                        b = f << 1,
                        D = t[b];
                    (l[I] = D), (l[I + 1] = D), (l[I + 2] = D), (l[I + 3] = t[b + 1]);
                }
            if (16 == d)
                for (var f = 0; f < a; f++) {
                    var I = f << 2,
                        b = f << 2,
                        D = t[b];
                    (l[I] = D), (l[I + 1] = D), (l[I + 2] = D), (l[I + 3] = t[b + 2]);
                }
        } else if (0 == c)
            for (var m = r.tabs.tRNS ? r.tabs.tRNS : -1, C = 0; C < i; C++) {
                var L = C * o,
                    w = C * n;
                if (1 == d)
                    for (var M = 0; M < n; M++) {
                        var D = 255 * ((t[L + (M >>> 3)] >>> (7 - (7 & M))) & 1),
                            P = 255 * (D != 255 * m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (2 == d)
                    for (var M = 0; M < n; M++) {
                        var D = 85 * ((t[L + (M >>> 2)] >>> (6 - ((3 & M) << 1))) & 3),
                            P = 255 * (D != 85 * m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (4 == d)
                    for (var M = 0; M < n; M++) {
                        var D = 17 * ((t[L + (M >>> 1)] >>> (4 - ((1 & M) << 2))) & 15),
                            P = 255 * (D != 17 * m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (8 == d)
                    for (var M = 0; M < n; M++) {
                        var D = t[L + M],
                            P = 255 * (D != m);
                        u[w + M] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (16 == d)
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
            (t = e.tabs.CgBI ? r(t, l) : i(t, l)),
            Date.now(),
            0 == e.interlace
                ? (t = a(t, e, 0, n, o))
                : 1 == e.interlace &&
                  (t = (function (e, t) {
                      for (
                          var n = t.width,
                              i = t.height,
                              r = s(t),
                              o = r >> 3,
                              l = Math.ceil((n * r) / 8),
                              u = new Uint8Array(i * l),
                              c = 0,
                              d = [0, 0, 4, 0, 2, 0, 1],
                              _ = [0, 4, 0, 2, 0, 1, 0],
                              h = [8, 8, 8, 4, 4, 2, 2],
                              f = [8, 8, 4, 4, 2, 2, 1],
                              p = 0;
                          p < 7;
                      ) {
                          for (var E = h[p], m = f[p], g = 0, A = 0, I = d[p]; I < i; ) (I += E), A++;
                          for (var T = _[p]; T < n; ) (T += m), g++;
                          var S = Math.ceil((g * r) / 8);
                          a(e, t, c, g, A);
                          for (var y = 0, C = d[p]; C < i; ) {
                              for (var N = _[p], v = (c + y * S) << 3; N < n; ) {
                                  if (1 == r) {
                                      var R = e[v >> 3];
                                      (R = (R >> (7 - (7 & v))) & 1), (u[C * l + (N >> 3)] |= R << (7 - (7 & N)));
                                  }
                                  if (2 == r) {
                                      var R = e[v >> 3];
                                      (R = (R >> (6 - (7 & v))) & 3),
                                          (u[C * l + (N >> 2)] |= R << (6 - ((3 & N) << 1)));
                                  }
                                  if (4 == r) {
                                      var R = e[v >> 3];
                                      (R = (R >> (4 - (7 & v))) & 15),
                                          (u[C * l + (N >> 1)] |= R << (4 - ((1 & N) << 2)));
                                  }
                                  if (r >= 8) for (var O = C * l + N * o, b = 0; b < o; b++) u[O + b] = e[(v >> 3) + b];
                                  (v += r), (N += m);
                              }
                              y++, (C += E);
                          }
                          g * A != 0 && (c += A * (1 + S)), (p += 1);
                      }
                      return u;
                  })(t, e)),
            t
        );
    }
    function i(e, t) {
        return r(new Uint8Array(e.buffer, 2, e.length - 6), t);
    }
    var r = (function () {
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
        function i(e, t) {
            for (var i, r, s, a, o, l = e.length, u = n.v, a = 0; a <= t; a++) u[a] = 0;
            for (a = 1; a < l; a += 2) u[e[a]]++;
            var c = n.m;
            for (r = 1, i = 0, u[0] = 0; r <= t; r++) (i = (i + u[r - 1]) << 1), (c[r] = i);
            for (s = 0; s < l; s += 2) 0 != (o = e[s + 1]) && ((e[s] = c[o]), c[o]++);
        }
        function r(e, t, i) {
            for (var r = e.length, s = n.i, a = 0; a < r; a += 2)
                if (0 != e[a + 1])
                    for (
                        var o = a >> 1, l = e[a + 1], u = (o << 4) | l, c = t - l, d = e[a] << c, _ = d + (1 << c);
                        d != _;
                    )
                        (i[s[d] >>> (15 - t)] = u), d++;
        }
        function s(e, t) {
            for (var i = n.i, r = 15 - t, s = 0; s < e.length; s += 2) {
                var a = e[s] << (t - e[s + 1]);
                e[s] = i[a] >>> r;
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
        function c(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function d(e, t) {
            return (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t);
        }
        function _(e, t) {
            var n = e.length;
            if (t <= n) return e;
            var i = new Uint8Array(Math.max(n << 1, t));
            return i.set(e, 0), i;
        }
        function h(e, t, n, i) {
            for (var r = 0, s = 0, a = i.length >>> 1; s < n; ) {
                var o = e[s + t];
                (i[s << 1] = 0), (i[(s << 1) + 1] = o), o > r && (r = o), s++;
            }
            for (; s < a; ) (i[s << 1] = 0), (i[(s << 1) + 1] = 0), s++;
            return r;
        }
        return (
            l(n.s, 144, 8),
            l(n.s, 112, 9),
            l(n.s, 24, 7),
            l(n.s, 8, 8),
            i(n.s, 9),
            r(n.s, 9, n.g),
            s(n.s, 9),
            l(n.t, 32, 5),
            i(n.t, 5),
            r(n.t, 5, n.A),
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
                    f = 0,
                    p = 0,
                    E = 0,
                    m = 0,
                    g = 0,
                    A = 0,
                    I = 0,
                    T = 0;
                if (3 == e[0] && 0 == e[1]) return t || new o(0);
                var S = null == t;
                for (S && (t = new o((e.length >>> 2) << 3)); 0 == l; ) {
                    if (((l = c(e, T, 1)), (f = c(e, T + 1, 2)), (T += 3), 0 == f)) {
                        (7 & T) != 0 && (T += 8 - (7 & T));
                        var y = (T >>> 3) + 4,
                            C = e[y - 4] | (e[y - 3] << 8);
                        S && (t = _(t, I + C)),
                            t.set(new o(e.buffer, e.byteOffset + y, C), I),
                            (T = (y + C) << 3),
                            (I += C);
                        continue;
                    }
                    if ((S && (t = _(t, I + 131072)), 1 == f && ((s = n.g), (a = n.A), (g = 511), (A = 31)), 2 == f)) {
                        (p = u(e, T, 5) + 257), (E = u(e, T + 5, 5) + 1), (m = u(e, T + 10, 4) + 4), (T += 14);
                        for (var N = 1, v = 0; v < 38; v += 2) (n.b[v] = 0), (n.b[v + 1] = 0);
                        for (var v = 0; v < m; v++) {
                            var R = u(e, T + 3 * v, 3);
                            (n.b[(n.d[v] << 1) + 1] = R), R > N && (N = R);
                        }
                        (T += 3 * m),
                            i(n.b, N),
                            r(n.b, N, n.C),
                            (s = n.k),
                            (a = n.n),
                            (T = (function (e, t, n, i, r, s) {
                                for (var a = 0; a < n; ) {
                                    var o = e[d(i, r) & t];
                                    r += 15 & o;
                                    var l = o >>> 4;
                                    if (l <= 15) (s[a] = l), a++;
                                    else {
                                        var c = 0,
                                            _ = 0;
                                        16 == l
                                            ? ((_ = 3 + u(i, r, 2)), (r += 2), (c = s[a - 1]))
                                            : 17 == l
                                              ? ((_ = 3 + u(i, r, 3)), (r += 3))
                                              : 18 == l && ((_ = 11 + u(i, r, 7)), (r += 7));
                                        for (var h = a + _; a < h; ) (s[a] = c), a++;
                                    }
                                }
                                return r;
                            })(n.C, (1 << N) - 1, p + E, e, T, n.a));
                        var O = h(n.a, 0, p, n.c);
                        g = (1 << O) - 1;
                        var b = h(n.a, p, E, n.e);
                        (A = (1 << b) - 1), i(n.c, O), r(n.c, O, s), i(n.e, b), r(n.e, b, a);
                    }
                    for (;;) {
                        var D = s[d(e, T) & g];
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
                            var P = a[d(e, T) & A];
                            T += 15 & P;
                            var x = P >>> 4,
                                k = n.h[x],
                                U = (k >>> 4) + c(e, T, 15 & k);
                            for (T += 15 & k, S && (t = _(t, I + 131072)); I < w; )
                                (t[I] = t[I++ - U]), (t[I] = t[I++ - U]), (t[I] = t[I++ - U]), (t[I] = t[I++ - U]);
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
    function a(e, t, n, i, r) {
        var a = s(t),
            l = Math.ceil((i * a) / 8);
        a = Math.ceil(a / 8);
        var u,
            c,
            d = e[n],
            _ = 0;
        if ((d > 1 && (e[n] = [0, 0, 1][d - 2]), 3 == d))
            for (_ = a; _ < l; _++) e[_ + 1] = (e[_ + 1] + (e[_ + 1 - a] >>> 1)) & 255;
        for (var h = 0; h < r; h++)
            if (((d = e[(c = (u = n + h * l) + h + 1) - 1]), (_ = 0), 0 == d)) for (; _ < l; _++) e[u + _] = e[c + _];
            else if (1 == d) {
                for (; _ < a; _++) e[u + _] = e[c + _];
                for (; _ < l; _++) e[u + _] = e[c + _] + e[u + _ - a];
            } else if (2 == d) for (; _ < l; _++) e[u + _] = e[c + _] + e[u + _ - l];
            else if (3 == d) {
                for (; _ < a; _++) e[u + _] = e[c + _] + (e[u + _ - l] >>> 1);
                for (; _ < l; _++) e[u + _] = e[c + _] + ((e[u + _ - l] + e[u + _ - a]) >>> 1);
            } else {
                for (; _ < a; _++) e[u + _] = e[c + _] + o(0, e[u + _ - l], 0);
                for (; _ < l; _++) e[u + _] = e[c + _] + o(e[u + _ - a], e[u + _ - l], e[u + _ - a - l]);
            }
        return e;
    }
    function o(e, t, n) {
        var i = e + t - n,
            r = i - e,
            s = i - t,
            a = i - n;
        return r * r <= s * s && r * r <= a * a ? e : s * s <= a * a ? t : n;
    }
    function l(e, t, n, i, r, s, a, o, l) {
        for (var u = Math.min(t, r), c = Math.min(n, s), d = 0, _ = 0, h = 0; h < c; h++)
            for (var f = 0; f < u; f++)
                if (
                    (a >= 0 && o >= 0
                        ? ((d = (h * t + f) << 2), (_ = ((o + h) * r + a + f) << 2))
                        : ((d = ((-o + h) * t - a + f) << 2), (_ = (h * r + f) << 2)),
                    0 == l)
                )
                    (i[_] = e[d]), (i[_ + 1] = e[d + 1]), (i[_ + 2] = e[d + 2]), (i[_ + 3] = e[d + 3]);
                else if (1 == l) {
                    var p = e[d + 3] * (1 / 255),
                        E = e[d] * p,
                        m = e[d + 1] * p,
                        g = e[d + 2] * p,
                        A = i[_ + 3] * (1 / 255),
                        I = i[_] * A,
                        T = i[_ + 1] * A,
                        S = i[_ + 2] * A,
                        y = 1 - p,
                        C = p + A * y,
                        N = 0 == C ? 0 : 1 / C;
                    (i[_ + 3] = 255 * C),
                        (i[_ + 0] = (E + I * y) * N),
                        (i[_ + 1] = (m + T * y) * N),
                        (i[_ + 2] = (g + S * y) * N);
                } else if (2 == l) {
                    var p = e[d + 3],
                        E = e[d],
                        m = e[d + 1],
                        g = e[d + 2],
                        A = i[_ + 3],
                        I = i[_],
                        T = i[_ + 1],
                        S = i[_ + 2];
                    p == A && E == I && m == T && g == S
                        ? ((i[_] = 0), (i[_ + 1] = 0), (i[_ + 2] = 0), (i[_ + 3] = 0))
                        : ((i[_] = E), (i[_ + 1] = m), (i[_ + 2] = g), (i[_ + 3] = p));
                } else if (3 == l) {
                    var p = e[d + 3],
                        E = e[d],
                        m = e[d + 1],
                        g = e[d + 2],
                        A = i[_ + 3],
                        I = i[_],
                        T = i[_ + 1],
                        S = i[_ + 2];
                    if (p == A && E == I && m == T && g == S) continue;
                    if (p < 220 && A > 20) return !1;
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
                    c = { tabs: {}, frames: [] },
                    d = new Uint8Array(a.length),
                    _ = 0,
                    h = 0,
                    f = [137, 80, 78, 71, 13, 10, 26, 10],
                    p = 0;
                p < 8;
                p++
            )
                if (a[p] != f[p]) throw "The input is not a PNG file!";
            for (; o < a.length; ) {
                var E = e.readUint(a, o);
                o += 4;
                var m = e.readASCII(a, o, 4);
                if (((o += 4), "IHDR" == m)) {
                    (N = a),
                        (v = o),
                        ((R = c).width = e.readUint(N, v)),
                        (v += 4),
                        (R.height = e.readUint(N, v)),
                        (R.depth = N[(v += 4)]),
                        (R.ctype = N[++v]),
                        (R.compress = N[++v]),
                        (R.filter = N[++v]),
                        (R.interlace = N[++v]),
                        v++;
                } else if ("iCCP" == m) {
                    for (var g = o; 0 != a[g]; ) g++;
                    e.readASCII(a, o, g - o), a[g + 1];
                    var A = a.slice(g + 2, o + E),
                        I = null;
                    try {
                        I = i(A);
                    } catch (e) {
                        I = r(A);
                    }
                    c.tabs[m] = I;
                } else if ("CgBI" == m) c.tabs[m] = a.slice(o, o + 4);
                else if ("IDAT" == m) {
                    for (var p = 0; p < E; p++) d[_ + p] = a[o + p];
                    _ += E;
                } else if ("acTL" == m)
                    (c.tabs[m] = { num_frames: u(a, o), num_plays: u(a, o + 4) }), (s = new Uint8Array(a.length));
                else if ("fcTL" == m) {
                    if (0 != h) {
                        var T = c.frames[c.frames.length - 1];
                        (T.data = n(c, s.slice(0, h), T.rect.width, T.rect.height)), (h = 0);
                    }
                    var S = { x: u(a, o + 12), y: u(a, o + 16), width: u(a, o + 4), height: u(a, o + 8) },
                        y = l(a, o + 22),
                        C = {
                            rect: S,
                            delay: 1e3 * (y = l(a, o + 20) / (0 == y ? 100 : y)),
                            dispose: a[o + 24],
                            blend: a[o + 25],
                        };
                    c.frames.push(C);
                } else if ("fdAT" == m) {
                    for (var p = 0; p < E - 4; p++) s[h + p] = a[o + p + 4];
                    h += E - 4;
                } else if ("pHYs" == m) c.tabs[m] = [e.readUint(a, o), e.readUint(a, o + 4), a[o + 8]];
                else if ("cHRM" == m) {
                    c.tabs[m] = [];
                    for (var p = 0; p < 8; p++) c.tabs[m].push(e.readUint(a, o + 4 * p));
                } else if ("tEXt" == m || "zTXt" == m) {
                    null == c.tabs[m] && (c.tabs[m] = {});
                    var N,
                        v,
                        R,
                        O,
                        b = e.nextZero(a, o),
                        D = e.readASCII(a, o, b - o),
                        L = o + E - b - 1;
                    if ("tEXt" == m) O = e.readASCII(a, b + 1, L);
                    else {
                        var w = i(a.slice(b + 2, b + 2 + L));
                        O = e.readUTF8(w, 0, w.length);
                    }
                    c.tabs[m][D] = O;
                } else if ("iTXt" == m) {
                    null == c.tabs[m] && (c.tabs[m] = {});
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
                    var O,
                        L = E - ((g = b + 1) - o);
                    if (0 == M) O = e.readUTF8(a, g, L);
                    else {
                        var w = i(a.slice(g, g + L));
                        O = e.readUTF8(w, 0, w.length);
                    }
                    c.tabs[m][D] = O;
                } else if ("PLTE" == m) c.tabs[m] = e.readBytes(a, o, E);
                else if ("hIST" == m) {
                    var P = c.tabs.PLTE.length / 3;
                    c.tabs[m] = [];
                    for (var p = 0; p < P; p++) c.tabs[m].push(l(a, o + 2 * p));
                } else if ("tRNS" == m)
                    3 == c.ctype
                        ? (c.tabs[m] = e.readBytes(a, o, E))
                        : 0 == c.ctype
                          ? (c.tabs[m] = l(a, o))
                          : 2 == c.ctype && (c.tabs[m] = [l(a, o), l(a, o + 2), l(a, o + 4)]);
                else if ("gAMA" == m) c.tabs[m] = e.readUint(a, o) / 1e5;
                else if ("sRGB" == m) c.tabs[m] = a[o];
                else if ("bKGD" == m)
                    0 == c.ctype || 4 == c.ctype
                        ? (c.tabs[m] = [l(a, o)])
                        : 2 == c.ctype || 6 == c.ctype
                          ? (c.tabs[m] = [l(a, o), l(a, o + 2), l(a, o + 4)])
                          : 3 == c.ctype && (c.tabs[m] = a[o]);
                else if ("IEND" == m) break;
                (o += E), e.readUint(a, o), (o += 4);
            }
            if (0 != h) {
                var T = c.frames[c.frames.length - 1];
                T.data = n(c, s.slice(0, h), T.rect.width, T.rect.height);
            }
            return (c.data = n(c, d, c.width, c.height)), delete c.compress, delete c.interlace, delete c.filter, c;
        },
        toRGBA8: function (e) {
            var n = e.width,
                i = e.height;
            if (null == e.tabs.acTL) return [t(e.data, n, i, e).buffer];
            var r = [];
            null == e.frames[0].data && (e.frames[0].data = e.data);
            for (
                var s = n * i * 4, a = new Uint8Array(s), o = new Uint8Array(s), u = new Uint8Array(s), c = 0;
                c < e.frames.length;
                c++
            ) {
                var d = e.frames[c],
                    _ = d.rect.x,
                    h = d.rect.y,
                    f = d.rect.width,
                    p = d.rect.height,
                    E = t(d.data, f, p, e);
                if (0 != c) for (var m = 0; m < s; m++) u[m] = a[m];
                if (
                    (0 == d.blend ? l(E, f, p, a, n, i, _, h, 0) : 1 == d.blend && l(E, f, p, a, n, i, _, h, 1),
                    r.push(a.buffer.slice(0)),
                    0 == d.dispose)
                );
                else if (1 == d.dispose) l(o, f, p, a, n, i, _, h, 0);
                else if (2 == d.dispose) for (var m = 0; m < s; m++) a[m] = u[m];
            }
            return r;
        },
        _paeth: o,
        _copyTile: l,
        _bin: e,
    };
})();
!(function () {
    var e = t._copyTile,
        n = t._bin,
        i = t._paeth,
        r = {
            table: (function () {
                for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
                    for (var n = t, i = 0; i < 8; i++) 1 & n ? (n = 0xedb88320 ^ (n >>> 1)) : (n >>>= 1);
                    e[t] = n;
                }
                return e;
            })(),
            update: function (e, t, n, i) {
                for (var s = 0; s < i; s++) e = r.table[(e ^ t[n + s]) & 255] ^ (e >>> 8);
                return e;
            },
            crc: function (e, t, n) {
                return 0xffffffff ^ r.update(0xffffffff, e, t, n);
            },
        };
    function s(e, t, n, i) {
        (t[n] += (e[0] * i) >> 4),
            (t[n + 1] += (e[1] * i) >> 4),
            (t[n + 2] += (e[2] * i) >> 4),
            (t[n + 3] += (e[3] * i) >> 4);
    }
    function a(e) {
        return Math.max(0, Math.min(255, e));
    }
    function o(e, t) {
        var n = e[0] - t[0],
            i = e[1] - t[1],
            r = e[2] - t[2],
            s = e[3] - t[3];
        return n * n + i * i + r * r + s * s;
    }
    function l(e, t, n, i, r, l, u) {
        null == u && (u = 1);
        for (var c = i.length, d = [], _ = [], h = 0; h < c; h++) {
            var f = i[h];
            d.push([(f >>> 0) & 255, (f >>> 8) & 255, (f >>> 16) & 255, (f >>> 24) & 255]);
        }
        for (var h = 0; h < c; h++) {
            for (var p = 0xffffffff, E = 0, m = 0; m < c; m++) {
                var g = o(d[h], d[m]);
                m != h && g < p && ((p = g), (E = m));
            }
            var A = Math.sqrt(p) / 2;
            _[h] = ~~(A * A);
        }
        for (
            var I = new Uint32Array(r.buffer),
                T = new Int16Array(t * n * 4),
                S = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
                h = 0;
            h < S.length;
            h++
        )
            S[h] = 255 * (-0.5 + (S[h] + 0.5) / 16);
        for (var y = 0; y < n; y++)
            for (var C = 0; C < t; C++) {
                var N,
                    h = (y * t + C) * 4;
                if (2 != u)
                    N = [a(e[h] + T[h]), a(e[h + 1] + T[h + 1]), a(e[h + 2] + T[h + 2]), a(e[h + 3] + T[h + 3])];
                else {
                    var g = S[(3 & y) * 4 + (3 & C)];
                    N = [a(e[h] + g), a(e[h + 1] + g), a(e[h + 2] + g), a(e[h + 3] + g)];
                }
                for (var E = 0, v = 0xffffff, m = 0; m < c; m++) {
                    var R = o(N, d[m]);
                    R < v && ((v = R), (E = m));
                }
                var O = d[E],
                    b = [N[0] - O[0], N[1] - O[1], N[2] - O[2], N[3] - O[3]];
                1 == u &&
                    (C != t - 1 && s(b, T, h + 4, 7),
                    y != n - 1 &&
                        (0 != C && s(b, T, h + 4 * t - 4, 3),
                        s(b, T, h + 4 * t, 5),
                        C != t - 1 && s(b, T, h + 4 * t + 4, 1))),
                    (l[h >> 2] = E),
                    (I[h >> 2] = i[E]);
            }
    }
    function u(e, t, i, s, a) {
        null == a && (a = {});
        var o,
            l = r.crc,
            u = n.writeUint,
            c = n.writeUshort,
            d = n.writeASCII,
            _ = 8,
            h = e.frames.length > 1,
            f = !1,
            p = 33 + 20 * !!h;
        if (
            (null != a.sRGB && (p += 13),
            null != a.pHYs && (p += 21),
            null != a.iCCP && (p += 21 + (o = pako.deflate(a.iCCP)).length + 4),
            3 == e.ctype)
        ) {
            for (var E = e.plte.length, m = 0; m < E; m++) e.plte[m] >>> 24 != 255 && (f = !0);
            p += 8 + 3 * E + 4 + (f ? 8 + +E + 4 : 0);
        }
        for (var g = 0; g < e.frames.length; g++) {
            var A = e.frames[g];
            h && (p += 38), (p += A.cimg.length + 12), 0 != g && (p += 4);
        }
        for (var I = new Uint8Array((p += 12)), T = [137, 80, 78, 71, 13, 10, 26, 10], m = 0; m < 8; m++) I[m] = T[m];
        if (
            (u(I, _, 13),
            d(I, (_ += 4), "IHDR"),
            u(I, (_ += 4), t),
            u(I, (_ += 4), i),
            (I[(_ += 4)] = e.depth),
            (I[++_] = e.ctype),
            (I[++_] = 0),
            (I[++_] = 0),
            (I[++_] = 0),
            u(I, ++_, l(I, _ - 17, 17)),
            (_ += 4),
            null != a.sRGB &&
                (u(I, _, 1), d(I, (_ += 4), "sRGB"), (I[(_ += 4)] = a.sRGB), u(I, ++_, l(I, _ - 5, 5)), (_ += 4)),
            null != a.iCCP)
        ) {
            var S = 13 + o.length;
            u(I, _, S),
                d(I, (_ += 4), "iCCP"),
                d(I, (_ += 4), "ICC profile"),
                (_ += 11),
                (_ += 2),
                I.set(o, _),
                u(I, (_ += o.length), l(I, _ - (S + 4), S + 4)),
                (_ += 4);
        }
        if (
            (null != a.pHYs &&
                (u(I, _, 9),
                d(I, (_ += 4), "pHYs"),
                u(I, (_ += 4), a.pHYs[0]),
                u(I, (_ += 4), a.pHYs[1]),
                (I[(_ += 4)] = a.pHYs[2]),
                u(I, ++_, l(I, _ - 13, 13)),
                (_ += 4)),
            h &&
                (u(I, _, 8),
                d(I, (_ += 4), "acTL"),
                u(I, (_ += 4), e.frames.length),
                u(I, (_ += 4), null != a.loop ? a.loop : 0),
                u(I, (_ += 4), l(I, _ - 12, 12)),
                (_ += 4)),
            3 == e.ctype)
        ) {
            var E = e.plte.length;
            u(I, _, 3 * E), d(I, (_ += 4), "PLTE"), (_ += 4);
            for (var m = 0; m < E; m++) {
                var y = 3 * m,
                    C = e.plte[m],
                    N = 255 & C,
                    v = (C >>> 8) & 255,
                    R = (C >>> 16) & 255;
                (I[_ + y + 0] = N), (I[_ + y + 1] = v), (I[_ + y + 2] = R);
            }
            if ((u(I, (_ += 3 * E), l(I, _ - 3 * E - 4, 3 * E + 4)), (_ += 4), f)) {
                u(I, _, E), d(I, (_ += 4), "tRNS"), (_ += 4);
                for (var m = 0; m < E; m++) I[_ + m] = (e.plte[m] >>> 24) & 255;
                u(I, (_ += E), l(I, _ - E - 4, E + 4)), (_ += 4);
            }
        }
        for (var O = 0, g = 0; g < e.frames.length; g++) {
            var A = e.frames[g];
            h &&
                (u(I, _, 26),
                d(I, (_ += 4), "fcTL"),
                u(I, (_ += 4), O++),
                u(I, (_ += 4), A.rect.width),
                u(I, (_ += 4), A.rect.height),
                u(I, (_ += 4), A.rect.x),
                u(I, (_ += 4), A.rect.y),
                c(I, (_ += 4), s[g]),
                c(I, (_ += 2), 1e3),
                (I[(_ += 2)] = A.dispose),
                (I[++_] = A.blend),
                u(I, ++_, l(I, _ - 30, 30)),
                (_ += 4));
            var b = A.cimg,
                E = b.length;
            u(I, _, E + 4 * (0 != g));
            var D = (_ += 4);
            d(I, _, 0 == g ? "IDAT" : "fdAT"),
                (_ += 4),
                0 != g && (u(I, _, O++), (_ += 4)),
                I.set(b, _),
                u(I, (_ += E), l(I, D, _ - D)),
                (_ += 4);
        }
        return u(I, _, 0), d(I, (_ += 4), "IEND"), u(I, (_ += 4), l(I, _ - 4, 4)), (_ += 4), I.buffer;
    }
    function c(e, t, n) {
        for (var r = 0; r < e.frames.length; r++) {
            var s = e.frames[r],
                a = (s.rect.width, s.rect.height),
                o = new Uint8Array(a * s.bpl + a);
            s.cimg = (function (e, t, n, r, s, a, o) {
                var l = [],
                    u = [0, 1, 2, 3, 4];
                -1 != a ? (u = [a]) : (t * r > 5e5 || 1 == n) && (u = [0]), o && (h = { level: 0 });
                var c = s.length > 1e7 && null != window.UZIP ? window.UZIP : pako;
                Date.now();
                for (var d = 0; d < u.length; d++) {
                    for (var _ = 0; _ < t; _++)
                        !(function (e, t, n, r, s, a) {
                            var o = n * r,
                                l = o + n;
                            if (((e[l] = a), l++, 0 == a))
                                if (r < 500) for (var u = 0; u < r; u++) e[l + u] = t[o + u];
                                else e.set(new Uint8Array(t.buffer, o, r), l);
                            else if (1 == a) {
                                for (var u = 0; u < s; u++) e[l + u] = t[o + u];
                                for (var u = s; u < r; u++) e[l + u] = (t[o + u] - t[o + u - s] + 256) & 255;
                            } else if (0 == n) {
                                for (var u = 0; u < s; u++) e[l + u] = t[o + u];
                                if (2 == a) for (var u = s; u < r; u++) e[l + u] = t[o + u];
                                if (3 == a)
                                    for (var u = s; u < r; u++) e[l + u] = (t[o + u] - (t[o + u - s] >> 1) + 256) & 255;
                                if (4 == a)
                                    for (var u = s; u < r; u++)
                                        e[l + u] = (t[o + u] - i(t[o + u - s], 0, 0) + 256) & 255;
                            } else {
                                if (2 == a)
                                    for (var u = 0; u < r; u++) e[l + u] = (t[o + u] + 256 - t[o + u - r]) & 255;
                                if (3 == a) {
                                    for (var u = 0; u < s; u++) e[l + u] = (t[o + u] + 256 - (t[o + u - r] >> 1)) & 255;
                                    for (var u = s; u < r; u++)
                                        e[l + u] = (t[o + u] + 256 - ((t[o + u - r] + t[o + u - s]) >> 1)) & 255;
                                }
                                if (4 == a) {
                                    for (var u = 0; u < s; u++)
                                        e[l + u] = (t[o + u] + 256 - i(0, t[o + u - r], 0)) & 255;
                                    for (var u = s; u < r; u++)
                                        e[l + u] =
                                            (t[o + u] + 256 - i(t[o + u - s], t[o + u - r], t[o + u - s - r])) & 255;
                                }
                            }
                        })(s, e, _, r, n, u[d]);
                    l.push(c.deflate(s, h));
                }
                for (var h, f, p = 1e9, d = 0; d < l.length; d++) l[d].length < p && ((f = d), (p = l[d].length));
                return l[f];
            })(s.img, a, s.bpp, s.bpl, o, t, n);
        }
    }
    function d(t, n, i, r, s) {
        for (
            var a = s[0], o = s[1], u = s[2], c = s[3], d = s[4], p = s[5], E = 6, m = 8, g = 255, A = 0;
            A < t.length;
            A++
        )
            for (var I = new Uint8Array(t[A]), T = I.length, S = 0; S < T; S += 4) g &= I[S + 3];
        var y = 255 != g,
            C = (function (t, n, i, r, s, a) {
                for (var o = [], l = 0; l < t.length; l++) {
                    var u,
                        c = new Uint8Array(t[l]),
                        d = new Uint32Array(c.buffer),
                        f = 0,
                        p = 0,
                        E = n,
                        m = i,
                        g = +!!r;
                    if (0 != l) {
                        for (
                            var A = a || r || 1 == l || 0 != o[l - 2].dispose ? 1 : 2, I = 0, T = 1e9, S = 0;
                            S < A;
                            S++
                        ) {
                            for (
                                var y = new Uint8Array(t[l - 1 - S]),
                                    C = new Uint32Array(t[l - 1 - S]),
                                    N = n,
                                    v = i,
                                    R = -1,
                                    O = -1,
                                    b = 0;
                                b < i;
                                b++
                            )
                                for (var D = 0; D < n; D++) {
                                    var L = b * n + D;
                                    d[L] != C[L] &&
                                        (D < N && (N = D), D > R && (R = D), b < v && (v = b), b > O && (O = b));
                                }
                            -1 == R && (N = v = R = O = 0), s && ((1 & N) == 1 && N--, (1 & v) == 1 && v--);
                            var w = (R - N + 1) * (O - v + 1);
                            w < T && ((T = w), (I = S), (f = N), (p = v), (E = R - N + 1), (m = O - v + 1));
                        }
                        var y = new Uint8Array(t[l - 1 - I]);
                        1 == I && (o[l - 1].dispose = 2),
                            e(y, n, i, (u = new Uint8Array(E * m * 4)), E, m, -f, -p, 0),
                            1 == (g = +!!e(c, n, i, u, E, m, -f, -p, 3))
                                ? h(c, n, i, u, { x: f, y: p, width: E, height: m })
                                : e(c, n, i, u, E, m, -f, -p, 0);
                    } else u = c.slice(0);
                    o.push({ rect: { x: f, y: p, width: E, height: m }, img: u, blend: g, dispose: 0 });
                }
                if (r)
                    for (var l = 0; l < o.length; l++) {
                        var M = o[l];
                        if (1 != M.blend) {
                            var P = M.rect,
                                x = o[l - 1].rect,
                                k = Math.min(P.x, x.x),
                                U = Math.min(P.y, x.y),
                                G = {
                                    x: k,
                                    y: U,
                                    width: Math.max(P.x + P.width, x.x + x.width) - k,
                                    height: Math.max(P.y + P.height, x.y + x.height) - U,
                                };
                            (o[l - 1].dispose = 1), l - 1 != 0 && _(t, n, i, o, l - 1, G, s), _(t, n, i, o, l, G, s);
                        }
                    }
                if (1 != t.length)
                    for (var L = 0; L < o.length; L++) {
                        var M = o[L];
                        M.rect.width, M.rect.height;
                    }
                return o;
            })(t, n, i, a, o, u),
            N = {},
            v = [],
            R = [];
        if (0 != r) {
            for (var O = [], S = 0; S < C.length; S++) O.push(C[S].img.buffer);
            for (
                var b = f(
                        (function (e) {
                            for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
                            for (var i = new Uint8Array(t), r = 0, n = 0; n < e.length; n++) {
                                for (var s = new Uint8Array(e[n]), a = s.length, o = 0; o < a; o += 4) {
                                    var l = s[o],
                                        u = s[o + 1],
                                        c = s[o + 2],
                                        d = s[o + 3];
                                    0 == d && (l = u = c = 0),
                                        (i[r + o] = l),
                                        (i[r + o + 1] = u),
                                        (i[r + o + 2] = c),
                                        (i[r + o + 3] = d);
                                }
                                r += a;
                            }
                            return i.buffer;
                        })(O),
                        r,
                    ),
                    S = 0;
                S < b.plte.length;
                S++
            )
                v.push(b.plte[S].est.rgba);
            for (var D = 0, S = 0; S < C.length; S++) {
                var L = C[S],
                    w = L.img.length,
                    M = new Uint8Array(b.inds.buffer, D >> 2, w >> 2);
                R.push(M);
                var P = new Uint8Array(b.abuf, D, w);
                p && l(L.img, L.rect.width, L.rect.height, v, P, M), L.img.set(P), (D += w);
            }
        } else
            for (var A = 0; A < C.length; A++) {
                var L = C[A],
                    x = new Uint32Array(L.img.buffer),
                    k = L.rect.width,
                    T = x.length,
                    M = new Uint8Array(T);
                R.push(M);
                for (var S = 0; S < T; S++) {
                    var U = x[S];
                    if (0 != S && U == x[S - 1]) M[S] = M[S - 1];
                    else if (S > k && U == x[S - k]) M[S] = M[S - k];
                    else {
                        var G = N[U];
                        if (null == G && ((N[U] = G = v.length), v.push(U), v.length >= 300)) break;
                        M[S] = G;
                    }
                }
            }
        var F = v.length;
        F <= 256 && !1 == d && (m = Math.max((m = F <= 2 ? 1 : F <= 4 ? 2 : F <= 16 ? 4 : 8), c));
        for (var A = 0; A < C.length; A++) {
            var L = C[A],
                k = (L.rect.x, L.rect.y, L.rect.width),
                V = L.rect.height,
                B = L.img;
            new Uint32Array(B.buffer);
            var j = 4 * k,
                H = 4;
            if (F <= 256 && !1 == d) {
                for (var Y = new Uint8Array((j = Math.ceil((m * k) / 8)) * V), W = R[A], K = 0; K < V; K++) {
                    var S = K * j,
                        $ = K * k;
                    if (8 == m) for (var z = 0; z < k; z++) Y[S + z] = W[$ + z];
                    else if (4 == m) for (var z = 0; z < k; z++) Y[S + (z >> 1)] |= W[$ + z] << (4 - (1 & z) * 4);
                    else if (2 == m) for (var z = 0; z < k; z++) Y[S + (z >> 2)] |= W[$ + z] << (6 - (3 & z) * 2);
                    else if (1 == m) for (var z = 0; z < k; z++) Y[S + (z >> 3)] |= W[$ + z] << (7 - (7 & z) * 1);
                }
                (B = Y), (E = 3), (H = 1);
            } else if (!1 == y && 1 == C.length) {
                for (var Y = new Uint8Array(k * V * 3), q = k * V, S = 0; S < q; S++) {
                    var Z = 3 * S,
                        X = 4 * S;
                    (Y[Z] = B[X]), (Y[Z + 1] = B[X + 1]), (Y[Z + 2] = B[X + 2]);
                }
                (B = Y), (E = 2), (H = 3), (j = 3 * k);
            }
            (L.img = B), (L.bpl = j), (L.bpp = H);
        }
        return { ctype: E, depth: m, plte: v, frames: C };
    }
    function _(t, n, i, r, s, a, o) {
        for (
            var l = Uint8Array,
                u = Uint32Array,
                c = new l(t[s - 1]),
                d = new u(t[s - 1]),
                _ = s + 1 < t.length ? new l(t[s + 1]) : null,
                f = new l(t[s]),
                p = new u(f.buffer),
                E = n,
                m = i,
                g = -1,
                A = -1,
                I = 0;
            I < a.height;
            I++
        )
            for (var T = 0; T < a.width; T++) {
                var S = a.x + T,
                    y = a.y + I,
                    C = y * n + S,
                    N = p[C];
                0 == N ||
                    (0 == r[s - 1].dispose && d[C] == N && (null == _ || 0 != _[4 * C + 3])) ||
                    (S < E && (E = S), S > g && (g = S), y < m && (m = y), y > A && (A = y));
            }
        -1 == g && (E = m = g = A = 0),
            o && ((1 & E) == 1 && E--, (1 & m) == 1 && m--),
            (a = { x: E, y: m, width: g - E + 1, height: A - m + 1 });
        var v = r[s];
        (v.rect = a),
            (v.blend = 1),
            (v.img = new Uint8Array(a.width * a.height * 4)),
            0 == r[s - 1].dispose
                ? (e(c, n, i, v.img, a.width, a.height, -a.x, -a.y, 0), h(f, n, i, v.img, a))
                : e(f, n, i, v.img, a.width, a.height, -a.x, -a.y, 0);
    }
    function h(t, n, i, r, s) {
        e(t, n, i, r, s.width, s.height, -s.x, -s.y, 2);
    }
    function f(e, t, n) {
        Date.now();
        for (
            var i = new Uint8Array(e),
                r = i.slice(0),
                s = new Uint32Array(r.buffer),
                a = m(r, t),
                o = a[0],
                l = a[1],
                u = l.length,
                c = new Uint32Array(u),
                d = new Uint8Array(c.buffer),
                _ = 0;
            _ < u;
            _++
        )
            c[_] = l[_].est.rgba;
        var h,
            f = i.length,
            I = new Uint8Array(f >> 2);
        if (u <= 60) E(i, I, d), p(I, s, c);
        else if (i.length < 32e6)
            for (var _ = 0; _ < f; _ += 4) {
                var T = i[_] * (1 / 255),
                    S = i[_ + 1] * (1 / 255),
                    y = i[_ + 2] * (1 / 255),
                    C = i[_ + 3] * (1 / 255);
                (h = g(o, T, S, y, C)), (I[_ >> 2] = h.ind), (s[_ >> 2] = h.est.rgba);
            }
        else
            for (var _ = 0; _ < f; _ += 4) {
                var T = i[_] * (1 / 255),
                    S = i[_ + 1] * (1 / 255),
                    y = i[_ + 2] * (1 / 255),
                    C = i[_ + 3] * (1 / 255);
                for (h = o; h.left; ) h = 0 >= A(h.est, T, S, y, C) ? h.left : h.right;
                (I[_ >> 2] = h.ind), (s[_ >> 2] = h.est.rgba);
            }
        if (n || i.length * u < 10 * 4e6) {
            for (var N = 1e9, _ = 0; _ < 10; _++) {
                var v,
                    R,
                    O,
                    b =
                        ((function (e, t, n) {
                            for (
                                var i = n.length >>> 2, r = new Uint32Array(4 * i), s = new Uint32Array(i), a = 0;
                                a < e.length;
                                a += 4
                            ) {
                                var o = t[a >>> 2],
                                    l = 4 * o;
                                s[o]++,
                                    (r[l] += e[a]),
                                    (r[l + 1] += e[a + 1]),
                                    (r[l + 2] += e[a + 2]),
                                    (r[l + 3] += e[a + 3]);
                            }
                            for (var a = 0; a < n.length; a++) n[a] = Math.round(r[a] / s[a >>> 2]);
                        })((v = i), (R = I), (O = d)),
                        E(v, R, O));
                if (b / N > 0.997) break;
                N = b;
            }
            for (var _ = 0; _ < u; _++) l[_].est.rgba = c[_];
            p(I, s, c);
        }
        return { abuf: r.buffer, inds: I, plte: l };
    }
    function p(e, t, n) {
        for (var i = 0; i < e.length; i++) t[i] = n[e[i]];
    }
    function E(e, t, n) {
        for (var i = 0, r = n.length >>> 2, s = [], a = 0; a < r; a++) {
            for (var o = 4 * a, l = n[o], u = n[o + 1], c = n[o + 2], d = n[o + 3], _ = 0, h = 1e9, f = 0; f < r; f++)
                if (a != f) {
                    var p = 4 * f,
                        E = l - n[p],
                        m = u - n[p + 1],
                        g = c - n[p + 2],
                        A = d - n[p + 3],
                        I = E * E + m * m + g * g + A * A;
                    I < h && ((h = I), (_ = f));
                }
            (s[a] = 0.5 * Math.sqrt(h)), (s[a] = s[a] * s[a]);
        }
        for (var a = 0; a < e.length; a += 4) {
            var l = e[a],
                u = e[a + 1],
                c = e[a + 2],
                d = e[a + 3],
                _ = t[a >>> 2],
                o = 4 * _,
                E = l - n[o],
                m = u - n[o + 1],
                g = c - n[o + 2],
                A = d - n[o + 3],
                h = E * E + m * m + g * g + A * A;
            if (h > s[_])
                for (var f = 0; f < r; f++) {
                    (E = l - n[(o = 4 * f)]), (m = u - n[o + 1]);
                    var I = E * E + m * m + (g = c - n[o + 2]) * g + (A = d - n[o + 3]) * A;
                    if (I < h && ((h = I), (_ = f), h < s[f])) break;
                }
            (t[a >>> 2] = _), (i += h);
        }
        return i / (e.length >>> 2);
    }
    function m(e, t, n) {
        null == n && (n = 1e-4);
        var i = new Uint32Array(e.buffer),
            r = { i0: 0, i1: e.length, bst: null, est: null, tdst: 0, left: null, right: null };
        (r.bst = T(e, r.i0, r.i1)), (r.est = S(r.bst));
        for (var s = [r]; s.length < t; ) {
            for (var a = 0, o = 0, l = 0; l < s.length; l++) s[l].est.L > a && ((a = s[l].est.L), (o = l));
            if (a < n) break;
            var u = s[o],
                c = (function (e, t, n, i, r, s) {
                    for (i -= 4; n < i; ) {
                        for (; I(e, n, r) <= s; ) n += 4;
                        for (; I(e, i, r) > s; ) i -= 4;
                        if (n >= i) break;
                        var a = t[n >> 2];
                        (t[n >> 2] = t[i >> 2]), (t[i >> 2] = a), (n += 4), (i -= 4);
                    }
                    for (; I(e, n, r) > s; ) n -= 4;
                    return n + 4;
                })(e, i, u.i0, u.i1, u.est.e, u.est.eMq255);
            if (u.i0 >= c || u.i1 <= c) {
                u.est.L = 0;
                continue;
            }
            var d = { i0: u.i0, i1: c, bst: null, est: null, tdst: 0, left: null, right: null };
            (d.bst = T(e, d.i0, d.i1)), (d.est = S(d.bst));
            var _ = { i0: c, i1: u.i1, bst: null, est: null, tdst: 0, left: null, right: null };
            _.bst = { R: [], m: [], N: u.bst.N - d.bst.N };
            for (var l = 0; l < 16; l++) _.bst.R[l] = u.bst.R[l] - d.bst.R[l];
            for (var l = 0; l < 4; l++) _.bst.m[l] = u.bst.m[l] - d.bst.m[l];
            (_.est = S(_.bst)), (u.left = d), (u.right = _), (s[o] = d), s.push(_);
        }
        s.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < s.length; l++) s[l].ind = l;
        return [r, s];
    }
    function g(e, t, n, i, r) {
        if (null == e.left) {
            var s, a, o, l, u, c, d, _, h;
            return (
                (s = e.est.q),
                (a = t),
                (o = n),
                (l = i),
                (u = r),
                (c = a - s[0]),
                (d = o - s[1]),
                (e.tdst = c * c + d * d + (_ = l - s[2]) * _ + (h = u - s[3]) * h),
                e
            );
        }
        var f = A(e.est, t, n, i, r),
            p = e.left,
            E = e.right;
        f > 0 && ((p = e.right), (E = e.left));
        var m = g(p, t, n, i, r);
        if (m.tdst <= f * f) return m;
        var I = g(E, t, n, i, r);
        return I.tdst < m.tdst ? I : m;
    }
    function A(e, t, n, i, r) {
        var s = e.e;
        return s[0] * t + s[1] * n + s[2] * i + s[3] * r - e.eMq;
    }
    function I(e, t, n) {
        return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
    }
    function T(e, t, n) {
        for (var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = [0, 0, 0, 0], s = t; s < n; s += 4) {
            var a = e[s] * (1 / 255),
                o = e[s + 1] * (1 / 255),
                l = e[s + 2] * (1 / 255),
                u = e[s + 3] * (1 / 255);
            (r[0] += a),
                (r[1] += o),
                (r[2] += l),
                (r[3] += u),
                (i[0] += a * a),
                (i[1] += a * o),
                (i[2] += a * l),
                (i[3] += a * u),
                (i[5] += o * o),
                (i[6] += o * l),
                (i[7] += o * u),
                (i[10] += l * l),
                (i[11] += l * u),
                (i[15] += u * u);
        }
        return (
            (i[4] = i[1]),
            (i[8] = i[2]),
            (i[9] = i[6]),
            (i[12] = i[3]),
            (i[13] = i[7]),
            (i[14] = i[11]),
            { R: i, m: r, N: (n - t) >> 2 }
        );
    }
    function S(e) {
        var t = e.R,
            n = e.m,
            i = e.N,
            r = n[0],
            s = n[1],
            a = n[2],
            o = n[3],
            l = 0 == i ? 0 : 1 / i,
            u = [
                t[0] - r * r * l,
                t[1] - r * s * l,
                t[2] - r * a * l,
                t[3] - r * o * l,
                t[4] - s * r * l,
                t[5] - s * s * l,
                t[6] - s * a * l,
                t[7] - s * o * l,
                t[8] - a * r * l,
                t[9] - a * s * l,
                t[10] - a * a * l,
                t[11] - a * o * l,
                t[12] - o * r * l,
                t[13] - o * s * l,
                t[14] - o * a * l,
                t[15] - o * o * l,
            ],
            c = [Math.random(), Math.random(), Math.random(), Math.random()],
            d = 0,
            _ = 0;
        if (0 != i)
            for (
                var h = 0;
                h < 16 &&
                ((c = y.multVec(u, c)),
                (_ = Math.sqrt(y.dot(c, c))),
                (c = y.sml(1 / _, c)),
                !(0 != h && 1e-9 > Math.abs(_ - d)));
                h++
            )
                d = _;
        var f = [r * l, s * l, a * l, o * l],
            p = y.dot(y.sml(255, f), c);
        return {
            Cov: u,
            q: f,
            e: c,
            L: d,
            eMq255: p,
            eMq: y.dot(c, f),
            rgba:
                ((Math.round(255 * f[3]) << 24) |
                    (Math.round(255 * f[2]) << 16) |
                    (Math.round(255 * f[1]) << 8) |
                    (0 | Math.round(255 * f[0]))) >>>
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
    (t.encode = function (e, t, n, i, r, s, a) {
        null == i && (i = 0), null == a && (a = !1);
        var o = d(e, t, n, i, [!1, !1, !1, 0, a, !1]);
        return c(o, -1), u(o, t, n, r, s);
    }),
        (t.encodeLL = function (e, t, n, i, r, s, a, o) {
            var l = { ctype: 0 + 2 * (1 != i) + 4 * (0 != r), depth: s, frames: [] };
            Date.now();
            for (var d = (i + r) * s, _ = d * t, h = 0; h < e.length; h++)
                l.frames.push({
                    rect: { x: 0, y: 0, width: t, height: n },
                    img: new Uint8Array(e[h]),
                    blend: 0,
                    dispose: 1,
                    bpp: Math.ceil(d / 8),
                    bpl: Math.ceil(_ / 8),
                });
            return c(l, 0, !0), u(l, t, n, a, o);
        }),
        (t.encode.compress = d),
        (t.encode.dither = l),
        (t.quantize = f),
        (t.quantize.findNearest = E),
        (t.quantize.getKDtree = m),
        (t.quantize.getNearest = g);
})(),
    (e.exports = t);
