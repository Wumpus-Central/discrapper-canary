var t = (function () {
    var e = {
        nextZero: function (e, t) {
            for (; 0 != e[t];) t++;
            return t;
        },
        readUshort: function (e, t) {
            return (e[t] << 8) | e[t + 1];
        },
        writeUshort: function (e, t, r) {
            ((e[t] = (r >> 8) & 255), (e[t + 1] = 255 & r));
        },
        readUint: function (e, t) {
            return 0x1000000 * e[t] + ((e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]);
        },
        writeUint: function (e, t, r) {
            ((e[t] = (r >> 24) & 255), (e[t + 1] = (r >> 16) & 255), (e[t + 2] = (r >> 8) & 255), (e[t + 3] = 255 & r));
        },
        readASCII: function (e, t, r) {
            for (var n = "", i = 0; i < r; i++) n += String.fromCharCode(e[t + i]);
            return n;
        },
        writeASCII: function (e, t, r) {
            for (var n = 0; n < r.length; n++) e[t + n] = r.charCodeAt(n);
        },
        readBytes: function (e, t, r) {
            for (var n = [], i = 0; i < r; i++) n.push(e[t + i]);
            return n;
        },
        pad: function (e) {
            return e.length < 2 ? "0" + e : e;
        },
        readUTF8: function (t, r, n) {
            for (var i, o = "", a = 0; a < n; a++) o += "%" + e.pad(t[r + a].toString(16));
            try {
                i = decodeURIComponent(o);
            } catch (i) {
                return e.readASCII(t, r, n);
            }
            return i;
        },
    };
    function t(t, r, n, i) {
        var a = r * n,
            s = Math.ceil((r * o(i)) / 8),
            l = new Uint8Array(4 * a),
            u = new Uint32Array(l.buffer),
            c = i.ctype,
            f = i.depth,
            p = e.readUshort;
        if ((Date.now(), 6 == c)) {
            var d = a << 2;
            if (8 == f)
                for (var h = 0; h < d; h += 4)
                    ((l[h] = t[h]), (l[h + 1] = t[h + 1]), (l[h + 2] = t[h + 2]), (l[h + 3] = t[h + 3]));
            if (16 == f) for (var h = 0; h < d; h++) l[h] = t[h << 1];
        } else if (2 == c) {
            var m = i.tabs.tRNS;
            if (null == m) {
                if (8 == f)
                    for (var h = 0; h < a; h++) {
                        var v = 3 * h;
                        u[h] = -0x1000000 | (t[v + 2] << 16) | (t[v + 1] << 8) | t[v];
                    }
                if (16 == f)
                    for (var h = 0; h < a; h++) {
                        var v = 6 * h;
                        u[h] = -0x1000000 | (t[v + 4] << 16) | (t[v + 2] << 8) | t[v];
                    }
            } else {
                var y = m[0],
                    g = m[1],
                    b = m[2];
                if (8 == f)
                    for (var h = 0; h < a; h++) {
                        var w = h << 2,
                            v = 3 * h;
                        ((u[h] = -0x1000000 | (t[v + 2] << 16) | (t[v + 1] << 8) | t[v]),
                            t[v] == y && t[v + 1] == g && t[v + 2] == b && (l[w + 3] = 0));
                    }
                if (16 == f)
                    for (var h = 0; h < a; h++) {
                        var w = h << 2,
                            v = 6 * h;
                        ((u[h] = -0x1000000 | (t[v + 4] << 16) | (t[v + 2] << 8) | t[v]),
                            p(t, v) == y && p(t, v + 2) == g && p(t, v + 4) == b && (l[w + 3] = 0));
                    }
            }
        } else if (3 == c) {
            var _ = i.tabs.PLTE,
                S = i.tabs.tRNS,
                E = S ? S.length : 0;
            if (1 == f)
                for (var x = 0; x < n; x++)
                    for (var C = x * s, k = x * r, h = 0; h < r; h++) {
                        var w = (k + h) << 2,
                            T = (t[C + (h >> 3)] >> (7 - (7 & h))) & 1,
                            M = 3 * T;
                        ((l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < E ? S[T] : 255));
                    }
            if (2 == f)
                for (var x = 0; x < n; x++)
                    for (var C = x * s, k = x * r, h = 0; h < r; h++) {
                        var w = (k + h) << 2,
                            T = (t[C + (h >> 2)] >> (6 - ((3 & h) << 1))) & 3,
                            M = 3 * T;
                        ((l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < E ? S[T] : 255));
                    }
            if (4 == f)
                for (var x = 0; x < n; x++)
                    for (var C = x * s, k = x * r, h = 0; h < r; h++) {
                        var w = (k + h) << 2,
                            T = (t[C + (h >> 1)] >> (4 - ((1 & h) << 2))) & 15,
                            M = 3 * T;
                        ((l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < E ? S[T] : 255));
                    }
            if (8 == f)
                for (var h = 0; h < a; h++) {
                    var w = h << 2,
                        T = t[h],
                        M = 3 * T;
                    ((l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < E ? S[T] : 255));
                }
        } else if (4 == c) {
            if (8 == f)
                for (var h = 0; h < a; h++) {
                    var w = h << 2,
                        P = h << 1,
                        A = t[P];
                    ((l[w] = A), (l[w + 1] = A), (l[w + 2] = A), (l[w + 3] = t[P + 1]));
                }
            if (16 == f)
                for (var h = 0; h < a; h++) {
                    var w = h << 2,
                        P = h << 2,
                        A = t[P];
                    ((l[w] = A), (l[w + 1] = A), (l[w + 2] = A), (l[w + 3] = t[P + 2]));
                }
        } else if (0 == c)
            for (var y = i.tabs.tRNS ? i.tabs.tRNS : -1, x = 0; x < n; x++) {
                var I = x * s,
                    O = x * r;
                if (1 == f)
                    for (var R = 0; R < r; R++) {
                        var A = 255 * ((t[I + (R >>> 3)] >>> (7 - (7 & R))) & 1),
                            D = 255 * (A != 255 * y);
                        u[O + R] = (D << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (2 == f)
                    for (var R = 0; R < r; R++) {
                        var A = 85 * ((t[I + (R >>> 2)] >>> (6 - ((3 & R) << 1))) & 3),
                            D = 255 * (A != 85 * y);
                        u[O + R] = (D << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (4 == f)
                    for (var R = 0; R < r; R++) {
                        var A = 17 * ((t[I + (R >>> 1)] >>> (4 - ((1 & R) << 2))) & 15),
                            D = 255 * (A != 17 * y);
                        u[O + R] = (D << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (8 == f)
                    for (var R = 0; R < r; R++) {
                        var A = t[I + R],
                            D = 255 * (A != y);
                        u[O + R] = (D << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (16 == f)
                    for (var R = 0; R < r; R++) {
                        var A = t[I + (R << 1)],
                            D = 255 * (p(t, I + (R << 1)) != y);
                        u[O + R] = (D << 24) | (A << 16) | (A << 8) | A;
                    }
            }
        return l;
    }
    function r(e, t, r, s) {
        Date.now();
        var l = new Uint8Array((Math.ceil((r * o(e)) / 8) + 1 + e.interlace) * s);
        return (
            (t = e.tabs.CgBI ? i(t, l) : n(t, l)),
            Date.now(),
            0 == e.interlace
                ? (t = a(t, e, 0, r, s))
                : 1 == e.interlace &&
                  (t = (function (e, t) {
                      for (
                          var r = t.width,
                              n = t.height,
                              i = o(t),
                              s = i >> 3,
                              l = Math.ceil((r * i) / 8),
                              u = new Uint8Array(n * l),
                              c = 0,
                              f = [0, 0, 4, 0, 2, 0, 1],
                              p = [0, 4, 0, 2, 0, 1, 0],
                              d = [8, 8, 8, 4, 4, 2, 2],
                              h = [8, 8, 4, 4, 2, 2, 1],
                              m = 0;
                          m < 7;
                      ) {
                          for (var v = d[m], y = h[m], g = 0, b = 0, w = f[m]; w < n;) ((w += v), b++);
                          for (var _ = p[m]; _ < r;) ((_ += y), g++);
                          var S = Math.ceil((g * i) / 8);
                          a(e, t, c, g, b);
                          for (var E = 0, x = f[m]; x < n;) {
                              for (var C = p[m], k = (c + E * S) << 3; C < r;) {
                                  if (1 == i) {
                                      var T = e[k >> 3];
                                      ((T = (T >> (7 - (7 & k))) & 1), (u[x * l + (C >> 3)] |= T << (7 - (7 & C))));
                                  }
                                  if (2 == i) {
                                      var T = e[k >> 3];
                                      ((T = (T >> (6 - (7 & k))) & 3),
                                          (u[x * l + (C >> 2)] |= T << (6 - ((3 & C) << 1))));
                                  }
                                  if (4 == i) {
                                      var T = e[k >> 3];
                                      ((T = (T >> (4 - (7 & k))) & 15),
                                          (u[x * l + (C >> 1)] |= T << (4 - ((1 & C) << 2))));
                                  }
                                  if (i >= 8) for (var M = x * l + C * s, P = 0; P < s; P++) u[M + P] = e[(k >> 3) + P];
                                  ((k += i), (C += y));
                              }
                              (E++, (x += v));
                          }
                          (g * b != 0 && (c += b * (1 + S)), (m += 1));
                      }
                      return u;
                  })(t, e)),
            t
        );
    }
    function n(e, t) {
        return i(new Uint8Array(e.buffer, 2, e.length - 6), t);
    }
    var i = (function () {
        var e,
            t,
            r =
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
        function n(e, t) {
            for (var n, i, o, a, s, l = e.length, u = r.v, a = 0; a <= t; a++) u[a] = 0;
            for (a = 1; a < l; a += 2) u[e[a]]++;
            var c = r.m;
            for (i = 1, n = 0, u[0] = 0; i <= t; i++) ((n = (n + u[i - 1]) << 1), (c[i] = n));
            for (o = 0; o < l; o += 2) 0 != (s = e[o + 1]) && ((e[o] = c[s]), c[s]++);
        }
        function i(e, t, n) {
            for (var i = e.length, o = r.i, a = 0; a < i; a += 2)
                if (0 != e[a + 1])
                    for (
                        var s = a >> 1, l = e[a + 1], u = (s << 4) | l, c = t - l, f = e[a] << c, p = f + (1 << c);
                        f != p;
                    )
                        ((n[o[f] >>> (15 - t)] = u), f++);
        }
        function o(e, t) {
            for (var n = r.i, i = 15 - t, o = 0; o < e.length; o += 2) {
                var a = e[o] << (t - e[o + 1]);
                e[o] = n[a] >>> i;
            }
        }
        for (var a = 0; a < 32768; a++) {
            var s = a;
            ((s =
                ((0xff00ff00 &
                    (s =
                        ((0xf0f0f0f0 &
                            (s =
                                ((0xcccccccc & (s = ((0xaaaaaaaa & s) >>> 1) | ((0x55555555 & s) << 1))) >>> 2) |
                                ((0x33333333 & s) << 2))) >>>
                            4) |
                        ((0xf0f0f0f & s) << 4))) >>>
                    8) |
                ((0xff00ff & s) << 8)),
                (r.i[a] = ((s >>> 16) | (s << 16)) >>> 17));
        }
        function l(e, t, r) {
            for (; 0 != t--;) e.push(0, r);
        }
        for (var a = 0; a < 32; a++) ((r.B[a] = (r.o[a] << 3) | r.z[a]), (r.h[a] = (r.p[a] << 4) | r.w[a]));
        function u(e, t, r) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (7 & t)) & ((1 << r) - 1);
        }
        function c(e, t, r) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t)) & ((1 << r) - 1);
        }
        function f(e, t) {
            return (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t);
        }
        function p(e, t) {
            var r = e.length;
            if (t <= r) return e;
            var n = new Uint8Array(Math.max(r << 1, t));
            return (n.set(e, 0), n);
        }
        function d(e, t, r, n) {
            for (var i = 0, o = 0, a = n.length >>> 1; o < r;) {
                var s = e[o + t];
                ((n[o << 1] = 0), (n[(o << 1) + 1] = s), s > i && (i = s), o++);
            }
            for (; o < a;) ((n[o << 1] = 0), (n[(o << 1) + 1] = 0), o++);
            return i;
        }
        return (
            l(r.s, 144, 8),
            l(r.s, 112, 9),
            l(r.s, 24, 7),
            l(r.s, 8, 8),
            n(r.s, 9),
            i(r.s, 9, r.g),
            o(r.s, 9),
            l(r.t, 32, 5),
            n(r.t, 5),
            i(r.t, 5, r.A),
            o(r.t, 5),
            l(r.b, 19, 0),
            l(r.c, 286, 0),
            l(r.e, 30, 0),
            l(r.a, 320, 0),
            function (e, t) {
                var o,
                    a,
                    s = Uint8Array,
                    l = 0,
                    h = 0,
                    m = 0,
                    v = 0,
                    y = 0,
                    g = 0,
                    b = 0,
                    w = 0,
                    _ = 0;
                if (3 == e[0] && 0 == e[1]) return t || new s(0);
                var S = null == t;
                for (S && (t = new s((e.length >>> 2) << 3)); 0 == l;) {
                    if (((l = c(e, _, 1)), (h = c(e, _ + 1, 2)), (_ += 3), 0 == h)) {
                        (7 & _) != 0 && (_ += 8 - (7 & _));
                        var E = (_ >>> 3) + 4,
                            x = e[E - 4] | (e[E - 3] << 8);
                        (S && (t = p(t, w + x)),
                            t.set(new s(e.buffer, e.byteOffset + E, x), w),
                            (_ = (E + x) << 3),
                            (w += x));
                        continue;
                    }
                    if ((S && (t = p(t, w + 131072)), 1 == h && ((o = r.g), (a = r.A), (g = 511), (b = 31)), 2 == h)) {
                        ((m = u(e, _, 5) + 257), (v = u(e, _ + 5, 5) + 1), (y = u(e, _ + 10, 4) + 4), (_ += 14));
                        for (var C = 1, k = 0; k < 38; k += 2) ((r.b[k] = 0), (r.b[k + 1] = 0));
                        for (var k = 0; k < y; k++) {
                            var T = u(e, _ + 3 * k, 3);
                            ((r.b[(r.d[k] << 1) + 1] = T), T > C && (C = T));
                        }
                        ((_ += 3 * y),
                            n(r.b, C),
                            i(r.b, C, r.C),
                            (o = r.k),
                            (a = r.n),
                            (_ = (function (e, t, r, n, i, o) {
                                for (var a = 0; a < r;) {
                                    var s = e[f(n, i) & t];
                                    i += 15 & s;
                                    var l = s >>> 4;
                                    if (l <= 15) ((o[a] = l), a++);
                                    else {
                                        var c = 0,
                                            p = 0;
                                        16 == l
                                            ? ((p = 3 + u(n, i, 2)), (i += 2), (c = o[a - 1]))
                                            : 17 == l
                                              ? ((p = 3 + u(n, i, 3)), (i += 3))
                                              : 18 == l && ((p = 11 + u(n, i, 7)), (i += 7));
                                        for (var d = a + p; a < d;) ((o[a] = c), a++);
                                    }
                                }
                                return i;
                            })(r.C, (1 << C) - 1, m + v, e, _, r.a)));
                        var M = d(r.a, 0, m, r.c);
                        g = (1 << M) - 1;
                        var P = d(r.a, m, v, r.e);
                        ((b = (1 << P) - 1), n(r.c, M), i(r.c, M, o), n(r.e, P), i(r.e, P, a));
                    }
                    for (;;) {
                        var A = o[f(e, _) & g];
                        _ += 15 & A;
                        var I = A >>> 4;
                        if (I >>> 8 == 0) t[w++] = I;
                        else if (256 == I) break;
                        else {
                            var O = w + I - 254;
                            if (I > 264) {
                                var R = r.B[I - 257];
                                ((O = w + (R >>> 3) + u(e, _, 7 & R)), (_ += 7 & R));
                            }
                            var D = a[f(e, _) & b];
                            _ += 15 & D;
                            var L = D >>> 4,
                                F = r.h[L],
                                N = (F >>> 4) + c(e, _, 15 & F);
                            for (_ += 15 & F, S && (t = p(t, w + 131072)); w < O;)
                                ((t[w] = t[w++ - N]), (t[w] = t[w++ - N]), (t[w] = t[w++ - N]), (t[w] = t[w++ - N]));
                            w = O;
                        }
                    }
                }
                return t.length == w ? t : t.slice(0, w);
            }
        );
    })();
    function o(e) {
        return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
    }
    function a(e, t, r, n, i) {
        var a = o(t),
            l = Math.ceil((n * a) / 8);
        a = Math.ceil(a / 8);
        var u,
            c,
            f = e[r],
            p = 0;
        if ((f > 1 && (e[r] = [0, 0, 1][f - 2]), 3 == f))
            for (p = a; p < l; p++) e[p + 1] = (e[p + 1] + (e[p + 1 - a] >>> 1)) & 255;
        for (var d = 0; d < i; d++)
            if (((f = e[(c = (u = r + d * l) + d + 1) - 1]), (p = 0), 0 == f)) for (; p < l; p++) e[u + p] = e[c + p];
            else if (1 == f) {
                for (; p < a; p++) e[u + p] = e[c + p];
                for (; p < l; p++) e[u + p] = e[c + p] + e[u + p - a];
            } else if (2 == f) for (; p < l; p++) e[u + p] = e[c + p] + e[u + p - l];
            else if (3 == f) {
                for (; p < a; p++) e[u + p] = e[c + p] + (e[u + p - l] >>> 1);
                for (; p < l; p++) e[u + p] = e[c + p] + ((e[u + p - l] + e[u + p - a]) >>> 1);
            } else {
                for (; p < a; p++) e[u + p] = e[c + p] + s(0, e[u + p - l], 0);
                for (; p < l; p++) e[u + p] = e[c + p] + s(e[u + p - a], e[u + p - l], e[u + p - a - l]);
            }
        return e;
    }
    function s(e, t, r) {
        var n = e + t - r,
            i = n - e,
            o = n - t,
            a = n - r;
        return i * i <= o * o && i * i <= a * a ? e : o * o <= a * a ? t : r;
    }
    function l(e, t, r, n, i, o, a, s, l) {
        for (var u = Math.min(t, i), c = Math.min(r, o), f = 0, p = 0, d = 0; d < c; d++)
            for (var h = 0; h < u; h++)
                if (
                    (a >= 0 && s >= 0
                        ? ((f = (d * t + h) << 2), (p = ((s + d) * i + a + h) << 2))
                        : ((f = ((-s + d) * t - a + h) << 2), (p = (d * i + h) << 2)),
                    0 == l)
                )
                    ((n[p] = e[f]), (n[p + 1] = e[f + 1]), (n[p + 2] = e[f + 2]), (n[p + 3] = e[f + 3]));
                else if (1 == l) {
                    var m = e[f + 3] * (1 / 255),
                        v = e[f] * m,
                        y = e[f + 1] * m,
                        g = e[f + 2] * m,
                        b = n[p + 3] * (1 / 255),
                        w = n[p] * b,
                        _ = n[p + 1] * b,
                        S = n[p + 2] * b,
                        E = 1 - m,
                        x = m + b * E,
                        C = 0 == x ? 0 : 1 / x;
                    ((n[p + 3] = 255 * x),
                        (n[p + 0] = (v + w * E) * C),
                        (n[p + 1] = (y + _ * E) * C),
                        (n[p + 2] = (g + S * E) * C));
                } else if (2 == l) {
                    var m = e[f + 3],
                        v = e[f],
                        y = e[f + 1],
                        g = e[f + 2],
                        b = n[p + 3],
                        w = n[p],
                        _ = n[p + 1],
                        S = n[p + 2];
                    m == b && v == w && y == _ && g == S
                        ? ((n[p] = 0), (n[p + 1] = 0), (n[p + 2] = 0), (n[p + 3] = 0))
                        : ((n[p] = v), (n[p + 1] = y), (n[p + 2] = g), (n[p + 3] = m));
                } else if (3 == l) {
                    var m = e[f + 3],
                        v = e[f],
                        y = e[f + 1],
                        g = e[f + 2],
                        b = n[p + 3],
                        w = n[p],
                        _ = n[p + 1],
                        S = n[p + 2];
                    if (m == b && v == w && y == _ && g == S) continue;
                    if (m < 220 && b > 20) return !1;
                }
        return !0;
    }
    return {
        decode: function (t) {
            for (
                var o,
                    a = new Uint8Array(t),
                    s = 8,
                    l = e.readUshort,
                    u = e.readUint,
                    c = { tabs: {}, frames: [] },
                    f = new Uint8Array(a.length),
                    p = 0,
                    d = 0,
                    h = [137, 80, 78, 71, 13, 10, 26, 10],
                    m = 0;
                m < 8;
                m++
            )
                if (a[m] != h[m]) throw "The input is not a PNG file!";
            for (; s < a.length;) {
                var v = e.readUint(a, s);
                s += 4;
                var y = e.readASCII(a, s, 4);
                if (((s += 4), "IHDR" == y)) {
                    ((C = a),
                        (k = s),
                        ((T = c).width = e.readUint(C, k)),
                        (k += 4),
                        (T.height = e.readUint(C, k)),
                        (T.depth = C[(k += 4)]),
                        (T.ctype = C[++k]),
                        (T.compress = C[++k]),
                        (T.filter = C[++k]),
                        (T.interlace = C[++k]),
                        k++);
                } else if ("iCCP" == y) {
                    for (var g = s; 0 != a[g];) g++;
                    (e.readASCII(a, s, g - s), a[g + 1]);
                    var b = a.slice(g + 2, s + v),
                        w = null;
                    try {
                        w = n(b);
                    } catch (e) {
                        w = i(b);
                    }
                    c.tabs[y] = w;
                } else if ("CgBI" == y) c.tabs[y] = a.slice(s, s + 4);
                else if ("IDAT" == y) {
                    for (var m = 0; m < v; m++) f[p + m] = a[s + m];
                    p += v;
                } else if ("acTL" == y)
                    ((c.tabs[y] = { num_frames: u(a, s), num_plays: u(a, s + 4) }), (o = new Uint8Array(a.length)));
                else if ("fcTL" == y) {
                    if (0 != d) {
                        var _ = c.frames[c.frames.length - 1];
                        ((_.data = r(c, o.slice(0, d), _.rect.width, _.rect.height)), (d = 0));
                    }
                    var S = { x: u(a, s + 12), y: u(a, s + 16), width: u(a, s + 4), height: u(a, s + 8) },
                        E = l(a, s + 22),
                        x = {
                            rect: S,
                            delay: 1e3 * (E = l(a, s + 20) / (0 == E ? 100 : E)),
                            dispose: a[s + 24],
                            blend: a[s + 25],
                        };
                    c.frames.push(x);
                } else if ("fdAT" == y) {
                    for (var m = 0; m < v - 4; m++) o[d + m] = a[s + m + 4];
                    d += v - 4;
                } else if ("pHYs" == y) c.tabs[y] = [e.readUint(a, s), e.readUint(a, s + 4), a[s + 8]];
                else if ("cHRM" == y) {
                    c.tabs[y] = [];
                    for (var m = 0; m < 8; m++) c.tabs[y].push(e.readUint(a, s + 4 * m));
                } else if ("tEXt" == y || "zTXt" == y) {
                    null == c.tabs[y] && (c.tabs[y] = {});
                    var C,
                        k,
                        T,
                        M,
                        P = e.nextZero(a, s),
                        A = e.readASCII(a, s, P - s),
                        I = s + v - P - 1;
                    if ("tEXt" == y) M = e.readASCII(a, P + 1, I);
                    else {
                        var O = n(a.slice(P + 2, P + 2 + I));
                        M = e.readUTF8(O, 0, O.length);
                    }
                    c.tabs[y][A] = M;
                } else if ("iTXt" == y) {
                    null == c.tabs[y] && (c.tabs[y] = {});
                    var P = 0,
                        g = s;
                    P = e.nextZero(a, g);
                    var A = e.readASCII(a, g, P - g),
                        R = a[(g = P + 1)];
                    (a[g + 1],
                        (g += 2),
                        (P = e.nextZero(a, g)),
                        e.readASCII(a, g, P - g),
                        (g = P + 1),
                        (P = e.nextZero(a, g)),
                        e.readUTF8(a, g, P - g));
                    var M,
                        I = v - ((g = P + 1) - s);
                    if (0 == R) M = e.readUTF8(a, g, I);
                    else {
                        var O = n(a.slice(g, g + I));
                        M = e.readUTF8(O, 0, O.length);
                    }
                    c.tabs[y][A] = M;
                } else if ("PLTE" == y) c.tabs[y] = e.readBytes(a, s, v);
                else if ("hIST" == y) {
                    var D = c.tabs.PLTE.length / 3;
                    c.tabs[y] = [];
                    for (var m = 0; m < D; m++) c.tabs[y].push(l(a, s + 2 * m));
                } else if ("tRNS" == y)
                    3 == c.ctype
                        ? (c.tabs[y] = e.readBytes(a, s, v))
                        : 0 == c.ctype
                          ? (c.tabs[y] = l(a, s))
                          : 2 == c.ctype && (c.tabs[y] = [l(a, s), l(a, s + 2), l(a, s + 4)]);
                else if ("gAMA" == y) c.tabs[y] = e.readUint(a, s) / 1e5;
                else if ("sRGB" == y) c.tabs[y] = a[s];
                else if ("bKGD" == y)
                    0 == c.ctype || 4 == c.ctype
                        ? (c.tabs[y] = [l(a, s)])
                        : 2 == c.ctype || 6 == c.ctype
                          ? (c.tabs[y] = [l(a, s), l(a, s + 2), l(a, s + 4)])
                          : 3 == c.ctype && (c.tabs[y] = a[s]);
                else if ("IEND" == y) break;
                ((s += v), e.readUint(a, s), (s += 4));
            }
            if (0 != d) {
                var _ = c.frames[c.frames.length - 1];
                _.data = r(c, o.slice(0, d), _.rect.width, _.rect.height);
            }
            return ((c.data = r(c, f, c.width, c.height)), delete c.compress, delete c.interlace, delete c.filter, c);
        },
        toRGBA8: function (e) {
            var r = e.width,
                n = e.height;
            if (null == e.tabs.acTL) return [t(e.data, r, n, e).buffer];
            var i = [];
            null == e.frames[0].data && (e.frames[0].data = e.data);
            for (
                var o = r * n * 4, a = new Uint8Array(o), s = new Uint8Array(o), u = new Uint8Array(o), c = 0;
                c < e.frames.length;
                c++
            ) {
                var f = e.frames[c],
                    p = f.rect.x,
                    d = f.rect.y,
                    h = f.rect.width,
                    m = f.rect.height,
                    v = t(f.data, h, m, e);
                if (0 != c) for (var y = 0; y < o; y++) u[y] = a[y];
                if (
                    (0 == f.blend ? l(v, h, m, a, r, n, p, d, 0) : 1 == f.blend && l(v, h, m, a, r, n, p, d, 1),
                    i.push(a.buffer.slice(0)),
                    0 == f.dispose)
                );
                else if (1 == f.dispose) l(s, h, m, a, r, n, p, d, 0);
                else if (2 == f.dispose) for (var y = 0; y < o; y++) a[y] = u[y];
            }
            return i;
        },
        _paeth: s,
        _copyTile: l,
        _bin: e,
    };
})();
(!(function () {
    var e = t._copyTile,
        r = t._bin,
        n = t._paeth,
        i = {
            table: (function () {
                for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
                    for (var r = t, n = 0; n < 8; n++) 1 & r ? (r = 0xedb88320 ^ (r >>> 1)) : (r >>>= 1);
                    e[t] = r;
                }
                return e;
            })(),
            update: function (e, t, r, n) {
                for (var o = 0; o < n; o++) e = i.table[(e ^ t[r + o]) & 255] ^ (e >>> 8);
                return e;
            },
            crc: function (e, t, r) {
                return 0xffffffff ^ i.update(0xffffffff, e, t, r);
            },
        };
    function o(e, t, r, n) {
        ((t[r] += (e[0] * n) >> 4),
            (t[r + 1] += (e[1] * n) >> 4),
            (t[r + 2] += (e[2] * n) >> 4),
            (t[r + 3] += (e[3] * n) >> 4));
    }
    function a(e) {
        return Math.max(0, Math.min(255, e));
    }
    function s(e, t) {
        var r = e[0] - t[0],
            n = e[1] - t[1],
            i = e[2] - t[2],
            o = e[3] - t[3];
        return r * r + n * n + i * i + o * o;
    }
    function l(e, t, r, n, i, l, u) {
        null == u && (u = 1);
        for (var c = n.length, f = [], p = [], d = 0; d < c; d++) {
            var h = n[d];
            f.push([(h >>> 0) & 255, (h >>> 8) & 255, (h >>> 16) & 255, (h >>> 24) & 255]);
        }
        for (var d = 0; d < c; d++) {
            for (var m = 0xffffffff, v = 0, y = 0; y < c; y++) {
                var g = s(f[d], f[y]);
                y != d && g < m && ((m = g), (v = y));
            }
            var b = Math.sqrt(m) / 2;
            p[d] = ~~(b * b);
        }
        for (
            var w = new Uint32Array(i.buffer),
                _ = new Int16Array(t * r * 4),
                S = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
                d = 0;
            d < S.length;
            d++
        )
            S[d] = 255 * (-0.5 + (S[d] + 0.5) / 16);
        for (var E = 0; E < r; E++)
            for (var x = 0; x < t; x++) {
                var C,
                    d = (E * t + x) * 4;
                if (2 != u)
                    C = [a(e[d] + _[d]), a(e[d + 1] + _[d + 1]), a(e[d + 2] + _[d + 2]), a(e[d + 3] + _[d + 3])];
                else {
                    var g = S[(3 & E) * 4 + (3 & x)];
                    C = [a(e[d] + g), a(e[d + 1] + g), a(e[d + 2] + g), a(e[d + 3] + g)];
                }
                for (var v = 0, k = 0xffffff, y = 0; y < c; y++) {
                    var T = s(C, f[y]);
                    T < k && ((k = T), (v = y));
                }
                var M = f[v],
                    P = [C[0] - M[0], C[1] - M[1], C[2] - M[2], C[3] - M[3]];
                (1 == u &&
                    (x != t - 1 && o(P, _, d + 4, 7),
                    E != r - 1 &&
                        (0 != x && o(P, _, d + 4 * t - 4, 3),
                        o(P, _, d + 4 * t, 5),
                        x != t - 1 && o(P, _, d + 4 * t + 4, 1))),
                    (l[d >> 2] = v),
                    (w[d >> 2] = n[v]));
            }
    }
    function u(e, t, n, o, a) {
        null == a && (a = {});
        var s,
            l = i.crc,
            u = r.writeUint,
            c = r.writeUshort,
            f = r.writeASCII,
            p = 8,
            d = e.frames.length > 1,
            h = !1,
            m = 33 + 20 * !!d;
        if (
            (null != a.sRGB && (m += 13),
            null != a.pHYs && (m += 21),
            null != a.iCCP && (m += 21 + (s = pako.deflate(a.iCCP)).length + 4),
            3 == e.ctype)
        ) {
            for (var v = e.plte.length, y = 0; y < v; y++) e.plte[y] >>> 24 != 255 && (h = !0);
            m += 8 + 3 * v + 4 + (h ? 8 + +v + 4 : 0);
        }
        for (var g = 0; g < e.frames.length; g++) {
            var b = e.frames[g];
            (d && (m += 38), (m += b.cimg.length + 12), 0 != g && (m += 4));
        }
        for (var w = new Uint8Array((m += 12)), _ = [137, 80, 78, 71, 13, 10, 26, 10], y = 0; y < 8; y++) w[y] = _[y];
        if (
            (u(w, p, 13),
            f(w, (p += 4), "IHDR"),
            u(w, (p += 4), t),
            u(w, (p += 4), n),
            (w[(p += 4)] = e.depth),
            (w[++p] = e.ctype),
            (w[++p] = 0),
            (w[++p] = 0),
            (w[++p] = 0),
            u(w, ++p, l(w, p - 17, 17)),
            (p += 4),
            null != a.sRGB &&
                (u(w, p, 1), f(w, (p += 4), "sRGB"), (w[(p += 4)] = a.sRGB), u(w, ++p, l(w, p - 5, 5)), (p += 4)),
            null != a.iCCP)
        ) {
            var S = 13 + s.length;
            (u(w, p, S),
                f(w, (p += 4), "iCCP"),
                f(w, (p += 4), "ICC profile"),
                (p += 11),
                (p += 2),
                w.set(s, p),
                u(w, (p += s.length), l(w, p - (S + 4), S + 4)),
                (p += 4));
        }
        if (
            (null != a.pHYs &&
                (u(w, p, 9),
                f(w, (p += 4), "pHYs"),
                u(w, (p += 4), a.pHYs[0]),
                u(w, (p += 4), a.pHYs[1]),
                (w[(p += 4)] = a.pHYs[2]),
                u(w, ++p, l(w, p - 13, 13)),
                (p += 4)),
            d &&
                (u(w, p, 8),
                f(w, (p += 4), "acTL"),
                u(w, (p += 4), e.frames.length),
                u(w, (p += 4), null != a.loop ? a.loop : 0),
                u(w, (p += 4), l(w, p - 12, 12)),
                (p += 4)),
            3 == e.ctype)
        ) {
            var v = e.plte.length;
            (u(w, p, 3 * v), f(w, (p += 4), "PLTE"), (p += 4));
            for (var y = 0; y < v; y++) {
                var E = 3 * y,
                    x = e.plte[y],
                    C = 255 & x,
                    k = (x >>> 8) & 255,
                    T = (x >>> 16) & 255;
                ((w[p + E + 0] = C), (w[p + E + 1] = k), (w[p + E + 2] = T));
            }
            if ((u(w, (p += 3 * v), l(w, p - 3 * v - 4, 3 * v + 4)), (p += 4), h)) {
                (u(w, p, v), f(w, (p += 4), "tRNS"), (p += 4));
                for (var y = 0; y < v; y++) w[p + y] = (e.plte[y] >>> 24) & 255;
                (u(w, (p += v), l(w, p - v - 4, v + 4)), (p += 4));
            }
        }
        for (var M = 0, g = 0; g < e.frames.length; g++) {
            var b = e.frames[g];
            d &&
                (u(w, p, 26),
                f(w, (p += 4), "fcTL"),
                u(w, (p += 4), M++),
                u(w, (p += 4), b.rect.width),
                u(w, (p += 4), b.rect.height),
                u(w, (p += 4), b.rect.x),
                u(w, (p += 4), b.rect.y),
                c(w, (p += 4), o[g]),
                c(w, (p += 2), 1e3),
                (w[(p += 2)] = b.dispose),
                (w[++p] = b.blend),
                u(w, ++p, l(w, p - 30, 30)),
                (p += 4));
            var P = b.cimg,
                v = P.length;
            u(w, p, v + 4 * (0 != g));
            var A = (p += 4);
            (f(w, p, 0 == g ? "IDAT" : "fdAT"),
                (p += 4),
                0 != g && (u(w, p, M++), (p += 4)),
                w.set(P, p),
                u(w, (p += v), l(w, A, p - A)),
                (p += 4));
        }
        return (u(w, p, 0), f(w, (p += 4), "IEND"), u(w, (p += 4), l(w, p - 4, 4)), (p += 4), w.buffer);
    }
    function c(e, t, r) {
        for (var i = 0; i < e.frames.length; i++) {
            var o = e.frames[i],
                a = (o.rect.width, o.rect.height),
                s = new Uint8Array(a * o.bpl + a);
            o.cimg = (function (e, t, r, i, o, a, s) {
                var l = [],
                    u = [0, 1, 2, 3, 4];
                (-1 != a ? (u = [a]) : (t * i > 5e5 || 1 == r) && (u = [0]), s && (d = { level: 0 }));
                var c = o.length > 1e7 && null != window.UZIP ? window.UZIP : pako;
                Date.now();
                for (var f = 0; f < u.length; f++) {
                    for (var p = 0; p < t; p++)
                        !(function (e, t, r, i, o, a) {
                            var s = r * i,
                                l = s + r;
                            if (((e[l] = a), l++, 0 == a))
                                if (i < 500) for (var u = 0; u < i; u++) e[l + u] = t[s + u];
                                else e.set(new Uint8Array(t.buffer, s, i), l);
                            else if (1 == a) {
                                for (var u = 0; u < o; u++) e[l + u] = t[s + u];
                                for (var u = o; u < i; u++) e[l + u] = (t[s + u] - t[s + u - o] + 256) & 255;
                            } else if (0 == r) {
                                for (var u = 0; u < o; u++) e[l + u] = t[s + u];
                                if (2 == a) for (var u = o; u < i; u++) e[l + u] = t[s + u];
                                if (3 == a)
                                    for (var u = o; u < i; u++) e[l + u] = (t[s + u] - (t[s + u - o] >> 1) + 256) & 255;
                                if (4 == a)
                                    for (var u = o; u < i; u++)
                                        e[l + u] = (t[s + u] - n(t[s + u - o], 0, 0) + 256) & 255;
                            } else {
                                if (2 == a)
                                    for (var u = 0; u < i; u++) e[l + u] = (t[s + u] + 256 - t[s + u - i]) & 255;
                                if (3 == a) {
                                    for (var u = 0; u < o; u++) e[l + u] = (t[s + u] + 256 - (t[s + u - i] >> 1)) & 255;
                                    for (var u = o; u < i; u++)
                                        e[l + u] = (t[s + u] + 256 - ((t[s + u - i] + t[s + u - o]) >> 1)) & 255;
                                }
                                if (4 == a) {
                                    for (var u = 0; u < o; u++)
                                        e[l + u] = (t[s + u] + 256 - n(0, t[s + u - i], 0)) & 255;
                                    for (var u = o; u < i; u++)
                                        e[l + u] =
                                            (t[s + u] + 256 - n(t[s + u - o], t[s + u - i], t[s + u - o - i])) & 255;
                                }
                            }
                        })(o, e, p, i, r, u[f]);
                    l.push(c.deflate(o, d));
                }
                for (var d, h, m = 1e9, f = 0; f < l.length; f++) l[f].length < m && ((h = f), (m = l[f].length));
                return l[h];
            })(o.img, a, o.bpp, o.bpl, s, t, r);
        }
    }
    function f(t, r, n, i, o) {
        for (
            var a = o[0], s = o[1], u = o[2], c = o[3], f = o[4], m = o[5], v = 6, y = 8, g = 255, b = 0;
            b < t.length;
            b++
        )
            for (var w = new Uint8Array(t[b]), _ = w.length, S = 0; S < _; S += 4) g &= w[S + 3];
        var E = 255 != g,
            x = (function (t, r, n, i, o, a) {
                for (var s = [], l = 0; l < t.length; l++) {
                    var u,
                        c = new Uint8Array(t[l]),
                        f = new Uint32Array(c.buffer),
                        h = 0,
                        m = 0,
                        v = r,
                        y = n,
                        g = +!!i;
                    if (0 != l) {
                        for (
                            var b = a || i || 1 == l || 0 != s[l - 2].dispose ? 1 : 2, w = 0, _ = 1e9, S = 0;
                            S < b;
                            S++
                        ) {
                            for (
                                var E = new Uint8Array(t[l - 1 - S]),
                                    x = new Uint32Array(t[l - 1 - S]),
                                    C = r,
                                    k = n,
                                    T = -1,
                                    M = -1,
                                    P = 0;
                                P < n;
                                P++
                            )
                                for (var A = 0; A < r; A++) {
                                    var I = P * r + A;
                                    f[I] != x[I] &&
                                        (A < C && (C = A), A > T && (T = A), P < k && (k = P), P > M && (M = P));
                                }
                            (-1 == T && (C = k = T = M = 0), o && ((1 & C) == 1 && C--, (1 & k) == 1 && k--));
                            var O = (T - C + 1) * (M - k + 1);
                            O < _ && ((_ = O), (w = S), (h = C), (m = k), (v = T - C + 1), (y = M - k + 1));
                        }
                        var E = new Uint8Array(t[l - 1 - w]);
                        (1 == w && (s[l - 1].dispose = 2),
                            e(E, r, n, (u = new Uint8Array(v * y * 4)), v, y, -h, -m, 0),
                            1 == (g = +!!e(c, r, n, u, v, y, -h, -m, 3))
                                ? d(c, r, n, u, { x: h, y: m, width: v, height: y })
                                : e(c, r, n, u, v, y, -h, -m, 0));
                    } else u = c.slice(0);
                    s.push({ rect: { x: h, y: m, width: v, height: y }, img: u, blend: g, dispose: 0 });
                }
                if (i)
                    for (var l = 0; l < s.length; l++) {
                        var R = s[l];
                        if (1 != R.blend) {
                            var D = R.rect,
                                L = s[l - 1].rect,
                                F = Math.min(D.x, L.x),
                                N = Math.min(D.y, L.y),
                                j = {
                                    x: F,
                                    y: N,
                                    width: Math.max(D.x + D.width, L.x + L.width) - F,
                                    height: Math.max(D.y + D.height, L.y + L.height) - N,
                                };
                            ((s[l - 1].dispose = 1), l - 1 != 0 && p(t, r, n, s, l - 1, j, o), p(t, r, n, s, l, j, o));
                        }
                    }
                if (1 != t.length)
                    for (var I = 0; I < s.length; I++) {
                        var R = s[I];
                        (R.rect.width, R.rect.height);
                    }
                return s;
            })(t, r, n, a, s, u),
            C = {},
            k = [],
            T = [];
        if (0 != i) {
            for (var M = [], S = 0; S < x.length; S++) M.push(x[S].img.buffer);
            for (
                var P = h(
                        (function (e) {
                            for (var t = 0, r = 0; r < e.length; r++) t += e[r].byteLength;
                            for (var n = new Uint8Array(t), i = 0, r = 0; r < e.length; r++) {
                                for (var o = new Uint8Array(e[r]), a = o.length, s = 0; s < a; s += 4) {
                                    var l = o[s],
                                        u = o[s + 1],
                                        c = o[s + 2],
                                        f = o[s + 3];
                                    (0 == f && (l = u = c = 0),
                                        (n[i + s] = l),
                                        (n[i + s + 1] = u),
                                        (n[i + s + 2] = c),
                                        (n[i + s + 3] = f));
                                }
                                i += a;
                            }
                            return n.buffer;
                        })(M),
                        i,
                    ),
                    S = 0;
                S < P.plte.length;
                S++
            )
                k.push(P.plte[S].est.rgba);
            for (var A = 0, S = 0; S < x.length; S++) {
                var I = x[S],
                    O = I.img.length,
                    R = new Uint8Array(P.inds.buffer, A >> 2, O >> 2);
                T.push(R);
                var D = new Uint8Array(P.abuf, A, O);
                (m && l(I.img, I.rect.width, I.rect.height, k, D, R), I.img.set(D), (A += O));
            }
        } else
            for (var b = 0; b < x.length; b++) {
                var I = x[b],
                    L = new Uint32Array(I.img.buffer),
                    F = I.rect.width,
                    _ = L.length,
                    R = new Uint8Array(_);
                T.push(R);
                for (var S = 0; S < _; S++) {
                    var N = L[S];
                    if (0 != S && N == L[S - 1]) R[S] = R[S - 1];
                    else if (S > F && N == L[S - F]) R[S] = R[S - F];
                    else {
                        var j = C[N];
                        if (null == j && ((C[N] = j = k.length), k.push(N), k.length >= 300)) break;
                        R[S] = j;
                    }
                }
            }
        var B = k.length;
        B <= 256 && !1 == f && (y = Math.max((y = B <= 2 ? 1 : B <= 4 ? 2 : B <= 16 ? 4 : 8), c));
        for (var b = 0; b < x.length; b++) {
            var I = x[b],
                F = (I.rect.x, I.rect.y, I.rect.width),
                K = I.rect.height,
                V = I.img;
            new Uint32Array(V.buffer);
            var U = 4 * F,
                $ = 4;
            if (B <= 256 && !1 == f) {
                for (var H = new Uint8Array((U = Math.ceil((y * F) / 8)) * K), z = T[b], G = 0; G < K; G++) {
                    var S = G * U,
                        W = G * F;
                    if (8 == y) for (var q = 0; q < F; q++) H[S + q] = z[W + q];
                    else if (4 == y) for (var q = 0; q < F; q++) H[S + (q >> 1)] |= z[W + q] << (4 - (1 & q) * 4);
                    else if (2 == y) for (var q = 0; q < F; q++) H[S + (q >> 2)] |= z[W + q] << (6 - (3 & q) * 2);
                    else if (1 == y) for (var q = 0; q < F; q++) H[S + (q >> 3)] |= z[W + q] << (7 - (7 & q) * 1);
                }
                ((V = H), (v = 3), ($ = 1));
            } else if (!1 == E && 1 == x.length) {
                for (var H = new Uint8Array(F * K * 3), Y = F * K, S = 0; S < Y; S++) {
                    var X = 3 * S,
                        J = 4 * S;
                    ((H[X] = V[J]), (H[X + 1] = V[J + 1]), (H[X + 2] = V[J + 2]));
                }
                ((V = H), (v = 2), ($ = 3), (U = 3 * F));
            }
            ((I.img = V), (I.bpl = U), (I.bpp = $));
        }
        return { ctype: v, depth: y, plte: k, frames: x };
    }
    function p(t, r, n, i, o, a, s) {
        for (
            var l = Uint8Array,
                u = Uint32Array,
                c = new l(t[o - 1]),
                f = new u(t[o - 1]),
                p = o + 1 < t.length ? new l(t[o + 1]) : null,
                h = new l(t[o]),
                m = new u(h.buffer),
                v = r,
                y = n,
                g = -1,
                b = -1,
                w = 0;
            w < a.height;
            w++
        )
            for (var _ = 0; _ < a.width; _++) {
                var S = a.x + _,
                    E = a.y + w,
                    x = E * r + S,
                    C = m[x];
                0 == C ||
                    (0 == i[o - 1].dispose && f[x] == C && (null == p || 0 != p[4 * x + 3])) ||
                    (S < v && (v = S), S > g && (g = S), E < y && (y = E), E > b && (b = E));
            }
        (-1 == g && (v = y = g = b = 0),
            s && ((1 & v) == 1 && v--, (1 & y) == 1 && y--),
            (a = { x: v, y: y, width: g - v + 1, height: b - y + 1 }));
        var k = i[o];
        ((k.rect = a),
            (k.blend = 1),
            (k.img = new Uint8Array(a.width * a.height * 4)),
            0 == i[o - 1].dispose
                ? (e(c, r, n, k.img, a.width, a.height, -a.x, -a.y, 0), d(h, r, n, k.img, a))
                : e(h, r, n, k.img, a.width, a.height, -a.x, -a.y, 0));
    }
    function d(t, r, n, i, o) {
        e(t, r, n, i, o.width, o.height, -o.x, -o.y, 2);
    }
    function h(e, t, r) {
        Date.now();
        for (
            var n = new Uint8Array(e),
                i = n.slice(0),
                o = new Uint32Array(i.buffer),
                a = y(i, t),
                s = a[0],
                l = a[1],
                u = l.length,
                c = new Uint32Array(u),
                f = new Uint8Array(c.buffer),
                p = 0;
            p < u;
            p++
        )
            c[p] = l[p].est.rgba;
        var d,
            h = n.length,
            w = new Uint8Array(h >> 2);
        if (u <= 60) (v(n, w, f), m(w, o, c));
        else if (n.length < 32e6)
            for (var p = 0; p < h; p += 4) {
                var _ = n[p] * (1 / 255),
                    S = n[p + 1] * (1 / 255),
                    E = n[p + 2] * (1 / 255),
                    x = n[p + 3] * (1 / 255);
                ((d = g(s, _, S, E, x)), (w[p >> 2] = d.ind), (o[p >> 2] = d.est.rgba));
            }
        else
            for (var p = 0; p < h; p += 4) {
                var _ = n[p] * (1 / 255),
                    S = n[p + 1] * (1 / 255),
                    E = n[p + 2] * (1 / 255),
                    x = n[p + 3] * (1 / 255);
                for (d = s; d.left;) d = 0 >= b(d.est, _, S, E, x) ? d.left : d.right;
                ((w[p >> 2] = d.ind), (o[p >> 2] = d.est.rgba));
            }
        if (r || n.length * u < 10 * 4e6) {
            for (var C = 1e9, p = 0; p < 10; p++) {
                var k,
                    T,
                    M,
                    P =
                        ((function (e, t, r) {
                            for (
                                var n = r.length >>> 2, i = new Uint32Array(4 * n), o = new Uint32Array(n), a = 0;
                                a < e.length;
                                a += 4
                            ) {
                                var s = t[a >>> 2],
                                    l = 4 * s;
                                (o[s]++,
                                    (i[l] += e[a]),
                                    (i[l + 1] += e[a + 1]),
                                    (i[l + 2] += e[a + 2]),
                                    (i[l + 3] += e[a + 3]));
                            }
                            for (var a = 0; a < r.length; a++) r[a] = Math.round(i[a] / o[a >>> 2]);
                        })((k = n), (T = w), (M = f)),
                        v(k, T, M));
                if (P / C > 0.997) break;
                C = P;
            }
            for (var p = 0; p < u; p++) l[p].est.rgba = c[p];
            m(w, o, c);
        }
        return { abuf: i.buffer, inds: w, plte: l };
    }
    function m(e, t, r) {
        for (var n = 0; n < e.length; n++) t[n] = r[e[n]];
    }
    function v(e, t, r) {
        for (var n = 0, i = r.length >>> 2, o = [], a = 0; a < i; a++) {
            for (var s = 4 * a, l = r[s], u = r[s + 1], c = r[s + 2], f = r[s + 3], p = 0, d = 1e9, h = 0; h < i; h++)
                if (a != h) {
                    var m = 4 * h,
                        v = l - r[m],
                        y = u - r[m + 1],
                        g = c - r[m + 2],
                        b = f - r[m + 3],
                        w = v * v + y * y + g * g + b * b;
                    w < d && ((d = w), (p = h));
                }
            ((o[a] = 0.5 * Math.sqrt(d)), (o[a] = o[a] * o[a]));
        }
        for (var a = 0; a < e.length; a += 4) {
            var l = e[a],
                u = e[a + 1],
                c = e[a + 2],
                f = e[a + 3],
                p = t[a >>> 2],
                s = 4 * p,
                v = l - r[s],
                y = u - r[s + 1],
                g = c - r[s + 2],
                b = f - r[s + 3],
                d = v * v + y * y + g * g + b * b;
            if (d > o[p])
                for (var h = 0; h < i; h++) {
                    ((v = l - r[(s = 4 * h)]), (y = u - r[s + 1]));
                    var w = v * v + y * y + (g = c - r[s + 2]) * g + (b = f - r[s + 3]) * b;
                    if (w < d && ((d = w), (p = h), d < o[h])) break;
                }
            ((t[a >>> 2] = p), (n += d));
        }
        return n / (e.length >>> 2);
    }
    function y(e, t, r) {
        null == r && (r = 1e-4);
        var n = new Uint32Array(e.buffer),
            i = { i0: 0, i1: e.length, bst: null, est: null, tdst: 0, left: null, right: null };
        ((i.bst = _(e, i.i0, i.i1)), (i.est = S(i.bst)));
        for (var o = [i]; o.length < t;) {
            for (var a = 0, s = 0, l = 0; l < o.length; l++) o[l].est.L > a && ((a = o[l].est.L), (s = l));
            if (a < r) break;
            var u = o[s],
                c = (function (e, t, r, n, i, o) {
                    for (n -= 4; r < n;) {
                        for (; w(e, r, i) <= o;) r += 4;
                        for (; w(e, n, i) > o;) n -= 4;
                        if (r >= n) break;
                        var a = t[r >> 2];
                        ((t[r >> 2] = t[n >> 2]), (t[n >> 2] = a), (r += 4), (n -= 4));
                    }
                    for (; w(e, r, i) > o;) r -= 4;
                    return r + 4;
                })(e, n, u.i0, u.i1, u.est.e, u.est.eMq255);
            if (u.i0 >= c || u.i1 <= c) {
                u.est.L = 0;
                continue;
            }
            var f = { i0: u.i0, i1: c, bst: null, est: null, tdst: 0, left: null, right: null };
            ((f.bst = _(e, f.i0, f.i1)), (f.est = S(f.bst)));
            var p = { i0: c, i1: u.i1, bst: null, est: null, tdst: 0, left: null, right: null };
            p.bst = { R: [], m: [], N: u.bst.N - f.bst.N };
            for (var l = 0; l < 16; l++) p.bst.R[l] = u.bst.R[l] - f.bst.R[l];
            for (var l = 0; l < 4; l++) p.bst.m[l] = u.bst.m[l] - f.bst.m[l];
            ((p.est = S(p.bst)), (u.left = f), (u.right = p), (o[s] = f), o.push(p));
        }
        o.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < o.length; l++) o[l].ind = l;
        return [i, o];
    }
    function g(e, t, r, n, i) {
        if (null == e.left) {
            var o, a, s, l, u, c, f, p, d;
            return (
                (o = e.est.q),
                (a = t),
                (s = r),
                (l = n),
                (u = i),
                (c = a - o[0]),
                (f = s - o[1]),
                (e.tdst = c * c + f * f + (p = l - o[2]) * p + (d = u - o[3]) * d),
                e
            );
        }
        var h = b(e.est, t, r, n, i),
            m = e.left,
            v = e.right;
        h > 0 && ((m = e.right), (v = e.left));
        var y = g(m, t, r, n, i);
        if (y.tdst <= h * h) return y;
        var w = g(v, t, r, n, i);
        return w.tdst < y.tdst ? w : y;
    }
    function b(e, t, r, n, i) {
        var o = e.e;
        return o[0] * t + o[1] * r + o[2] * n + o[3] * i - e.eMq;
    }
    function w(e, t, r) {
        return e[t] * r[0] + e[t + 1] * r[1] + e[t + 2] * r[2] + e[t + 3] * r[3];
    }
    function _(e, t, r) {
        for (var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], o = t; o < r; o += 4) {
            var a = e[o] * (1 / 255),
                s = e[o + 1] * (1 / 255),
                l = e[o + 2] * (1 / 255),
                u = e[o + 3] * (1 / 255);
            ((i[0] += a),
                (i[1] += s),
                (i[2] += l),
                (i[3] += u),
                (n[0] += a * a),
                (n[1] += a * s),
                (n[2] += a * l),
                (n[3] += a * u),
                (n[5] += s * s),
                (n[6] += s * l),
                (n[7] += s * u),
                (n[10] += l * l),
                (n[11] += l * u),
                (n[15] += u * u));
        }
        return (
            (n[4] = n[1]),
            (n[8] = n[2]),
            (n[9] = n[6]),
            (n[12] = n[3]),
            (n[13] = n[7]),
            (n[14] = n[11]),
            { R: n, m: i, N: (r - t) >> 2 }
        );
    }
    function S(e) {
        var t = e.R,
            r = e.m,
            n = e.N,
            i = r[0],
            o = r[1],
            a = r[2],
            s = r[3],
            l = 0 == n ? 0 : 1 / n,
            u = [
                t[0] - i * i * l,
                t[1] - i * o * l,
                t[2] - i * a * l,
                t[3] - i * s * l,
                t[4] - o * i * l,
                t[5] - o * o * l,
                t[6] - o * a * l,
                t[7] - o * s * l,
                t[8] - a * i * l,
                t[9] - a * o * l,
                t[10] - a * a * l,
                t[11] - a * s * l,
                t[12] - s * i * l,
                t[13] - s * o * l,
                t[14] - s * a * l,
                t[15] - s * s * l,
            ],
            c = [Math.random(), Math.random(), Math.random(), Math.random()],
            f = 0,
            p = 0;
        if (0 != n)
            for (
                var d = 0;
                d < 16 &&
                ((c = E.multVec(u, c)),
                (p = Math.sqrt(E.dot(c, c))),
                (c = E.sml(1 / p, c)),
                !(0 != d && 1e-9 > Math.abs(p - f)));
                d++
            )
                f = p;
        var h = [i * l, o * l, a * l, s * l],
            m = E.dot(E.sml(255, h), c);
        return {
            Cov: u,
            q: h,
            e: c,
            L: f,
            eMq255: m,
            eMq: E.dot(c, h),
            rgba:
                ((Math.round(255 * h[3]) << 24) |
                    (Math.round(255 * h[2]) << 16) |
                    (Math.round(255 * h[1]) << 8) |
                    (0 | Math.round(255 * h[0]))) >>>
                0,
        };
    }
    var E = {
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
    ((t.encode = function (e, t, r, n, i, o, a) {
        (null == n && (n = 0), null == a && (a = !1));
        var s = f(e, t, r, n, [!1, !1, !1, 0, a, !1]);
        return (c(s, -1), u(s, t, r, i, o));
    }),
        (t.encodeLL = function (e, t, r, n, i, o, a, s) {
            var l = { ctype: 0 + 2 * (1 != n) + 4 * (0 != i), depth: o, frames: [] };
            Date.now();
            for (var f = (n + i) * o, p = f * t, d = 0; d < e.length; d++)
                l.frames.push({
                    rect: { x: 0, y: 0, width: t, height: r },
                    img: new Uint8Array(e[d]),
                    blend: 0,
                    dispose: 1,
                    bpp: Math.ceil(f / 8),
                    bpl: Math.ceil(p / 8),
                });
            return (c(l, 0, !0), u(l, t, r, a, s));
        }),
        (t.encode.compress = f),
        (t.encode.dither = l),
        (t.quantize = h),
        (t.quantize.findNearest = v),
        (t.quantize.getKDtree = y),
        (t.quantize.getNearest = g));
})(),
    (e.exports = t));
