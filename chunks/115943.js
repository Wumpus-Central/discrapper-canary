var t = (function () {
    var e = {
        nextZero: function (e, t) {
            for (; 0 != e[t]; ) t++;
            return t;
        },
        readUshort: function (e, t) {
            return (e[t] << 8) | e[t + 1];
        },
        writeUshort: function (e, t, r) {
            (e[t] = (r >> 8) & 255), (e[t + 1] = 255 & r);
        },
        readUint: function (e, t) {
            return 0x1000000 * e[t] + ((e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]);
        },
        writeUint: function (e, t, r) {
            (e[t] = (r >> 24) & 255), (e[t + 1] = (r >> 16) & 255), (e[t + 2] = (r >> 8) & 255), (e[t + 3] = 255 & r);
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
            d = e.readUshort;
        if ((Date.now(), 6 == c)) {
            var p = a << 2;
            if (8 == f)
                for (var h = 0; h < p; h += 4)
                    (l[h] = t[h]), (l[h + 1] = t[h + 1]), (l[h + 2] = t[h + 2]), (l[h + 3] = t[h + 3]);
            if (16 == f) for (var h = 0; h < p; h++) l[h] = t[h << 1];
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
                        (u[h] = -0x1000000 | (t[v + 2] << 16) | (t[v + 1] << 8) | t[v]),
                            t[v] == y && t[v + 1] == g && t[v + 2] == b && (l[w + 3] = 0);
                    }
                if (16 == f)
                    for (var h = 0; h < a; h++) {
                        var w = h << 2,
                            v = 6 * h;
                        (u[h] = -0x1000000 | (t[v + 4] << 16) | (t[v + 2] << 8) | t[v]),
                            d(t, v) == y && d(t, v + 2) == g && d(t, v + 4) == b && (l[w + 3] = 0);
                    }
            }
        } else if (3 == c) {
            var _ = i.tabs.PLTE,
                S = i.tabs.tRNS,
                x = S ? S.length : 0;
            if (1 == f)
                for (var E = 0; E < n; E++)
                    for (var k = E * s, C = E * r, h = 0; h < r; h++) {
                        var w = (C + h) << 2,
                            T = (t[k + (h >> 3)] >> (7 - (7 & h))) & 1,
                            M = 3 * T;
                        (l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < x ? S[T] : 255);
                    }
            if (2 == f)
                for (var E = 0; E < n; E++)
                    for (var k = E * s, C = E * r, h = 0; h < r; h++) {
                        var w = (C + h) << 2,
                            T = (t[k + (h >> 2)] >> (6 - ((3 & h) << 1))) & 3,
                            M = 3 * T;
                        (l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < x ? S[T] : 255);
                    }
            if (4 == f)
                for (var E = 0; E < n; E++)
                    for (var k = E * s, C = E * r, h = 0; h < r; h++) {
                        var w = (C + h) << 2,
                            T = (t[k + (h >> 1)] >> (4 - ((1 & h) << 2))) & 15,
                            M = 3 * T;
                        (l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < x ? S[T] : 255);
                    }
            if (8 == f)
                for (var h = 0; h < a; h++) {
                    var w = h << 2,
                        T = t[h],
                        M = 3 * T;
                    (l[w] = _[M]), (l[w + 1] = _[M + 1]), (l[w + 2] = _[M + 2]), (l[w + 3] = T < x ? S[T] : 255);
                }
        } else if (4 == c) {
            if (8 == f)
                for (var h = 0; h < a; h++) {
                    var w = h << 2,
                        P = h << 1,
                        A = t[P];
                    (l[w] = A), (l[w + 1] = A), (l[w + 2] = A), (l[w + 3] = t[P + 1]);
                }
            if (16 == f)
                for (var h = 0; h < a; h++) {
                    var w = h << 2,
                        P = h << 2,
                        A = t[P];
                    (l[w] = A), (l[w + 1] = A), (l[w + 2] = A), (l[w + 3] = t[P + 2]);
                }
        } else if (0 == c)
            for (var y = i.tabs.tRNS ? i.tabs.tRNS : -1, E = 0; E < n; E++) {
                var I = E * s,
                    O = E * r;
                if (1 == f)
                    for (var D = 0; D < r; D++) {
                        var A = 255 * ((t[I + (D >>> 3)] >>> (7 - (7 & D))) & 1),
                            R = 255 * (A != 255 * y);
                        u[O + D] = (R << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (2 == f)
                    for (var D = 0; D < r; D++) {
                        var A = 85 * ((t[I + (D >>> 2)] >>> (6 - ((3 & D) << 1))) & 3),
                            R = 255 * (A != 85 * y);
                        u[O + D] = (R << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (4 == f)
                    for (var D = 0; D < r; D++) {
                        var A = 17 * ((t[I + (D >>> 1)] >>> (4 - ((1 & D) << 2))) & 15),
                            R = 255 * (A != 17 * y);
                        u[O + D] = (R << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (8 == f)
                    for (var D = 0; D < r; D++) {
                        var A = t[I + D],
                            R = 255 * (A != y);
                        u[O + D] = (R << 24) | (A << 16) | (A << 8) | A;
                    }
                else if (16 == f)
                    for (var D = 0; D < r; D++) {
                        var A = t[I + (D << 1)],
                            R = 255 * (d(t, I + (D << 1)) != y);
                        u[O + D] = (R << 24) | (A << 16) | (A << 8) | A;
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
                              d = [0, 4, 0, 2, 0, 1, 0],
                              p = [8, 8, 8, 4, 4, 2, 2],
                              h = [8, 8, 4, 4, 2, 2, 1],
                              m = 0;
                          m < 7;
                      ) {
                          for (var v = p[m], y = h[m], g = 0, b = 0, w = f[m]; w < n; ) (w += v), b++;
                          for (var _ = d[m]; _ < r; ) (_ += y), g++;
                          var S = Math.ceil((g * i) / 8);
                          a(e, t, c, g, b);
                          for (var x = 0, E = f[m]; E < n; ) {
                              for (var k = d[m], C = (c + x * S) << 3; k < r; ) {
                                  if (1 == i) {
                                      var T = e[C >> 3];
                                      (T = (T >> (7 - (7 & C))) & 1), (u[E * l + (k >> 3)] |= T << (7 - (7 & k)));
                                  }
                                  if (2 == i) {
                                      var T = e[C >> 3];
                                      (T = (T >> (6 - (7 & C))) & 3),
                                          (u[E * l + (k >> 2)] |= T << (6 - ((3 & k) << 1)));
                                  }
                                  if (4 == i) {
                                      var T = e[C >> 3];
                                      (T = (T >> (4 - (7 & C))) & 15),
                                          (u[E * l + (k >> 1)] |= T << (4 - ((1 & k) << 2)));
                                  }
                                  if (i >= 8) for (var M = E * l + k * s, P = 0; P < s; P++) u[M + P] = e[(C >> 3) + P];
                                  (C += i), (k += y);
                              }
                              x++, (E += v);
                          }
                          g * b != 0 && (c += b * (1 + S)), (m += 1);
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
            for (i = 1, n = 0, u[0] = 0; i <= t; i++) (n = (n + u[i - 1]) << 1), (c[i] = n);
            for (o = 0; o < l; o += 2) 0 != (s = e[o + 1]) && ((e[o] = c[s]), c[s]++);
        }
        function i(e, t, n) {
            for (var i = e.length, o = r.i, a = 0; a < i; a += 2)
                if (0 != e[a + 1])
                    for (
                        var s = a >> 1, l = e[a + 1], u = (s << 4) | l, c = t - l, f = e[a] << c, d = f + (1 << c);
                        f != d;
                    )
                        (n[o[f] >>> (15 - t)] = u), f++;
        }
        function o(e, t) {
            for (var n = r.i, i = 15 - t, o = 0; o < e.length; o += 2) {
                var a = e[o] << (t - e[o + 1]);
                e[o] = n[a] >>> i;
            }
        }
        for (var a = 0; a < 32768; a++) {
            var s = a;
            (s =
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
                (r.i[a] = ((s >>> 16) | (s << 16)) >>> 17);
        }
        function l(e, t, r) {
            for (; 0 != t--; ) e.push(0, r);
        }
        for (var a = 0; a < 32; a++) (r.B[a] = (r.o[a] << 3) | r.z[a]), (r.h[a] = (r.p[a] << 4) | r.w[a]);
        function u(e, t, r) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (7 & t)) & ((1 << r) - 1);
        }
        function c(e, t, r) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t)) & ((1 << r) - 1);
        }
        function f(e, t) {
            return (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t);
        }
        function d(e, t) {
            var r = e.length;
            if (t <= r) return e;
            var n = new Uint8Array(Math.max(r << 1, t));
            return n.set(e, 0), n;
        }
        function p(e, t, r, n) {
            for (var i = 0, o = 0, a = n.length >>> 1; o < r; ) {
                var s = e[o + t];
                (n[o << 1] = 0), (n[(o << 1) + 1] = s), s > i && (i = s), o++;
            }
            for (; o < a; ) (n[o << 1] = 0), (n[(o << 1) + 1] = 0), o++;
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
                for (S && (t = new s((e.length >>> 2) << 3)); 0 == l; ) {
                    if (((l = c(e, _, 1)), (h = c(e, _ + 1, 2)), (_ += 3), 0 == h)) {
                        (7 & _) != 0 && (_ += 8 - (7 & _));
                        var x = (_ >>> 3) + 4,
                            E = e[x - 4] | (e[x - 3] << 8);
                        S && (t = d(t, w + E)),
                            t.set(new s(e.buffer, e.byteOffset + x, E), w),
                            (_ = (x + E) << 3),
                            (w += E);
                        continue;
                    }
                    if ((S && (t = d(t, w + 131072)), 1 == h && ((o = r.g), (a = r.A), (g = 511), (b = 31)), 2 == h)) {
                        (m = u(e, _, 5) + 257), (v = u(e, _ + 5, 5) + 1), (y = u(e, _ + 10, 4) + 4), (_ += 14);
                        for (var k = 1, C = 0; C < 38; C += 2) (r.b[C] = 0), (r.b[C + 1] = 0);
                        for (var C = 0; C < y; C++) {
                            var T = u(e, _ + 3 * C, 3);
                            (r.b[(r.d[C] << 1) + 1] = T), T > k && (k = T);
                        }
                        (_ += 3 * y),
                            n(r.b, k),
                            i(r.b, k, r.C),
                            (o = r.k),
                            (a = r.n),
                            (_ = (function (e, t, r, n, i, o) {
                                for (var a = 0; a < r; ) {
                                    var s = e[f(n, i) & t];
                                    i += 15 & s;
                                    var l = s >>> 4;
                                    if (l <= 15) (o[a] = l), a++;
                                    else {
                                        var c = 0,
                                            d = 0;
                                        16 == l
                                            ? ((d = 3 + u(n, i, 2)), (i += 2), (c = o[a - 1]))
                                            : 17 == l
                                              ? ((d = 3 + u(n, i, 3)), (i += 3))
                                              : 18 == l && ((d = 11 + u(n, i, 7)), (i += 7));
                                        for (var p = a + d; a < p; ) (o[a] = c), a++;
                                    }
                                }
                                return i;
                            })(r.C, (1 << k) - 1, m + v, e, _, r.a));
                        var M = p(r.a, 0, m, r.c);
                        g = (1 << M) - 1;
                        var P = p(r.a, m, v, r.e);
                        (b = (1 << P) - 1), n(r.c, M), i(r.c, M, o), n(r.e, P), i(r.e, P, a);
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
                                var D = r.B[I - 257];
                                (O = w + (D >>> 3) + u(e, _, 7 & D)), (_ += 7 & D);
                            }
                            var R = a[f(e, _) & b];
                            _ += 15 & R;
                            var L = R >>> 4,
                                F = r.h[L],
                                N = (F >>> 4) + c(e, _, 15 & F);
                            for (_ += 15 & F, S && (t = d(t, w + 131072)); w < O; )
                                (t[w] = t[w++ - N]), (t[w] = t[w++ - N]), (t[w] = t[w++ - N]), (t[w] = t[w++ - N]);
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
            d = 0;
        if ((f > 1 && (e[r] = [0, 0, 1][f - 2]), 3 == f))
            for (d = a; d < l; d++) e[d + 1] = (e[d + 1] + (e[d + 1 - a] >>> 1)) & 255;
        for (var p = 0; p < i; p++)
            if (((f = e[(c = (u = r + p * l) + p + 1) - 1]), (d = 0), 0 == f)) for (; d < l; d++) e[u + d] = e[c + d];
            else if (1 == f) {
                for (; d < a; d++) e[u + d] = e[c + d];
                for (; d < l; d++) e[u + d] = e[c + d] + e[u + d - a];
            } else if (2 == f) for (; d < l; d++) e[u + d] = e[c + d] + e[u + d - l];
            else if (3 == f) {
                for (; d < a; d++) e[u + d] = e[c + d] + (e[u + d - l] >>> 1);
                for (; d < l; d++) e[u + d] = e[c + d] + ((e[u + d - l] + e[u + d - a]) >>> 1);
            } else {
                for (; d < a; d++) e[u + d] = e[c + d] + s(0, e[u + d - l], 0);
                for (; d < l; d++) e[u + d] = e[c + d] + s(e[u + d - a], e[u + d - l], e[u + d - a - l]);
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
        for (var u = Math.min(t, i), c = Math.min(r, o), f = 0, d = 0, p = 0; p < c; p++)
            for (var h = 0; h < u; h++)
                if (
                    (a >= 0 && s >= 0
                        ? ((f = (p * t + h) << 2), (d = ((s + p) * i + a + h) << 2))
                        : ((f = ((-s + p) * t - a + h) << 2), (d = (p * i + h) << 2)),
                    0 == l)
                )
                    (n[d] = e[f]), (n[d + 1] = e[f + 1]), (n[d + 2] = e[f + 2]), (n[d + 3] = e[f + 3]);
                else if (1 == l) {
                    var m = e[f + 3] * (1 / 255),
                        v = e[f] * m,
                        y = e[f + 1] * m,
                        g = e[f + 2] * m,
                        b = n[d + 3] * (1 / 255),
                        w = n[d] * b,
                        _ = n[d + 1] * b,
                        S = n[d + 2] * b,
                        x = 1 - m,
                        E = m + b * x,
                        k = 0 == E ? 0 : 1 / E;
                    (n[d + 3] = 255 * E),
                        (n[d + 0] = (v + w * x) * k),
                        (n[d + 1] = (y + _ * x) * k),
                        (n[d + 2] = (g + S * x) * k);
                } else if (2 == l) {
                    var m = e[f + 3],
                        v = e[f],
                        y = e[f + 1],
                        g = e[f + 2],
                        b = n[d + 3],
                        w = n[d],
                        _ = n[d + 1],
                        S = n[d + 2];
                    m == b && v == w && y == _ && g == S
                        ? ((n[d] = 0), (n[d + 1] = 0), (n[d + 2] = 0), (n[d + 3] = 0))
                        : ((n[d] = v), (n[d + 1] = y), (n[d + 2] = g), (n[d + 3] = m));
                } else if (3 == l) {
                    var m = e[f + 3],
                        v = e[f],
                        y = e[f + 1],
                        g = e[f + 2],
                        b = n[d + 3],
                        w = n[d],
                        _ = n[d + 1],
                        S = n[d + 2];
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
                    d = 0,
                    p = 0,
                    h = [137, 80, 78, 71, 13, 10, 26, 10],
                    m = 0;
                m < 8;
                m++
            )
                if (a[m] != h[m]) throw "The input is not a PNG file!";
            for (; s < a.length; ) {
                var v = e.readUint(a, s);
                s += 4;
                var y = e.readASCII(a, s, 4);
                if (((s += 4), "IHDR" == y)) {
                    (k = a),
                        (C = s),
                        ((T = c).width = e.readUint(k, C)),
                        (C += 4),
                        (T.height = e.readUint(k, C)),
                        (T.depth = k[(C += 4)]),
                        (T.ctype = k[++C]),
                        (T.compress = k[++C]),
                        (T.filter = k[++C]),
                        (T.interlace = k[++C]),
                        C++;
                } else if ("iCCP" == y) {
                    for (var g = s; 0 != a[g]; ) g++;
                    e.readASCII(a, s, g - s), a[g + 1];
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
                    for (var m = 0; m < v; m++) f[d + m] = a[s + m];
                    d += v;
                } else if ("acTL" == y)
                    (c.tabs[y] = { num_frames: u(a, s), num_plays: u(a, s + 4) }), (o = new Uint8Array(a.length));
                else if ("fcTL" == y) {
                    if (0 != p) {
                        var _ = c.frames[c.frames.length - 1];
                        (_.data = r(c, o.slice(0, p), _.rect.width, _.rect.height)), (p = 0);
                    }
                    var S = { x: u(a, s + 12), y: u(a, s + 16), width: u(a, s + 4), height: u(a, s + 8) },
                        x = l(a, s + 22),
                        E = {
                            rect: S,
                            delay: 1e3 * (x = l(a, s + 20) / (0 == x ? 100 : x)),
                            dispose: a[s + 24],
                            blend: a[s + 25],
                        };
                    c.frames.push(E);
                } else if ("fdAT" == y) {
                    for (var m = 0; m < v - 4; m++) o[p + m] = a[s + m + 4];
                    p += v - 4;
                } else if ("pHYs" == y) c.tabs[y] = [e.readUint(a, s), e.readUint(a, s + 4), a[s + 8]];
                else if ("cHRM" == y) {
                    c.tabs[y] = [];
                    for (var m = 0; m < 8; m++) c.tabs[y].push(e.readUint(a, s + 4 * m));
                } else if ("tEXt" == y || "zTXt" == y) {
                    null == c.tabs[y] && (c.tabs[y] = {});
                    var k,
                        C,
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
                        D = a[(g = P + 1)];
                    a[g + 1],
                        (g += 2),
                        (P = e.nextZero(a, g)),
                        e.readASCII(a, g, P - g),
                        (g = P + 1),
                        (P = e.nextZero(a, g)),
                        e.readUTF8(a, g, P - g);
                    var M,
                        I = v - ((g = P + 1) - s);
                    if (0 == D) M = e.readUTF8(a, g, I);
                    else {
                        var O = n(a.slice(g, g + I));
                        M = e.readUTF8(O, 0, O.length);
                    }
                    c.tabs[y][A] = M;
                } else if ("PLTE" == y) c.tabs[y] = e.readBytes(a, s, v);
                else if ("hIST" == y) {
                    var R = c.tabs.PLTE.length / 3;
                    c.tabs[y] = [];
                    for (var m = 0; m < R; m++) c.tabs[y].push(l(a, s + 2 * m));
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
                (s += v), e.readUint(a, s), (s += 4);
            }
            if (0 != p) {
                var _ = c.frames[c.frames.length - 1];
                _.data = r(c, o.slice(0, p), _.rect.width, _.rect.height);
            }
            return (c.data = r(c, f, c.width, c.height)), delete c.compress, delete c.interlace, delete c.filter, c;
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
                    d = f.rect.x,
                    p = f.rect.y,
                    h = f.rect.width,
                    m = f.rect.height,
                    v = t(f.data, h, m, e);
                if (0 != c) for (var y = 0; y < o; y++) u[y] = a[y];
                if (
                    (0 == f.blend ? l(v, h, m, a, r, n, d, p, 0) : 1 == f.blend && l(v, h, m, a, r, n, d, p, 1),
                    i.push(a.buffer.slice(0)),
                    0 == f.dispose)
                );
                else if (1 == f.dispose) l(s, h, m, a, r, n, d, p, 0);
                else if (2 == f.dispose) for (var y = 0; y < o; y++) a[y] = u[y];
            }
            return i;
        },
        _paeth: s,
        _copyTile: l,
        _bin: e,
    };
})();
!(function () {
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
        (t[r] += (e[0] * n) >> 4),
            (t[r + 1] += (e[1] * n) >> 4),
            (t[r + 2] += (e[2] * n) >> 4),
            (t[r + 3] += (e[3] * n) >> 4);
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
        for (var c = n.length, f = [], d = [], p = 0; p < c; p++) {
            var h = n[p];
            f.push([(h >>> 0) & 255, (h >>> 8) & 255, (h >>> 16) & 255, (h >>> 24) & 255]);
        }
        for (var p = 0; p < c; p++) {
            for (var m = 0xffffffff, v = 0, y = 0; y < c; y++) {
                var g = s(f[p], f[y]);
                y != p && g < m && ((m = g), (v = y));
            }
            var b = Math.sqrt(m) / 2;
            d[p] = ~~(b * b);
        }
        for (
            var w = new Uint32Array(i.buffer),
                _ = new Int16Array(t * r * 4),
                S = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
                p = 0;
            p < S.length;
            p++
        )
            S[p] = 255 * (-0.5 + (S[p] + 0.5) / 16);
        for (var x = 0; x < r; x++)
            for (var E = 0; E < t; E++) {
                var k,
                    p = (x * t + E) * 4;
                if (2 != u)
                    k = [a(e[p] + _[p]), a(e[p + 1] + _[p + 1]), a(e[p + 2] + _[p + 2]), a(e[p + 3] + _[p + 3])];
                else {
                    var g = S[(3 & x) * 4 + (3 & E)];
                    k = [a(e[p] + g), a(e[p + 1] + g), a(e[p + 2] + g), a(e[p + 3] + g)];
                }
                for (var v = 0, C = 0xffffff, y = 0; y < c; y++) {
                    var T = s(k, f[y]);
                    T < C && ((C = T), (v = y));
                }
                var M = f[v],
                    P = [k[0] - M[0], k[1] - M[1], k[2] - M[2], k[3] - M[3]];
                1 == u &&
                    (E != t - 1 && o(P, _, p + 4, 7),
                    x != r - 1 &&
                        (0 != E && o(P, _, p + 4 * t - 4, 3),
                        o(P, _, p + 4 * t, 5),
                        E != t - 1 && o(P, _, p + 4 * t + 4, 1))),
                    (l[p >> 2] = v),
                    (w[p >> 2] = n[v]);
            }
    }
    function u(e, t, n, o, a) {
        null == a && (a = {});
        var s,
            l = i.crc,
            u = r.writeUint,
            c = r.writeUshort,
            f = r.writeASCII,
            d = 8,
            p = e.frames.length > 1,
            h = !1,
            m = 33 + 20 * !!p;
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
            p && (m += 38), (m += b.cimg.length + 12), 0 != g && (m += 4);
        }
        for (var w = new Uint8Array((m += 12)), _ = [137, 80, 78, 71, 13, 10, 26, 10], y = 0; y < 8; y++) w[y] = _[y];
        if (
            (u(w, d, 13),
            f(w, (d += 4), "IHDR"),
            u(w, (d += 4), t),
            u(w, (d += 4), n),
            (w[(d += 4)] = e.depth),
            (w[++d] = e.ctype),
            (w[++d] = 0),
            (w[++d] = 0),
            (w[++d] = 0),
            u(w, ++d, l(w, d - 17, 17)),
            (d += 4),
            null != a.sRGB &&
                (u(w, d, 1), f(w, (d += 4), "sRGB"), (w[(d += 4)] = a.sRGB), u(w, ++d, l(w, d - 5, 5)), (d += 4)),
            null != a.iCCP)
        ) {
            var S = 13 + s.length;
            u(w, d, S),
                f(w, (d += 4), "iCCP"),
                f(w, (d += 4), "ICC profile"),
                (d += 11),
                (d += 2),
                w.set(s, d),
                u(w, (d += s.length), l(w, d - (S + 4), S + 4)),
                (d += 4);
        }
        if (
            (null != a.pHYs &&
                (u(w, d, 9),
                f(w, (d += 4), "pHYs"),
                u(w, (d += 4), a.pHYs[0]),
                u(w, (d += 4), a.pHYs[1]),
                (w[(d += 4)] = a.pHYs[2]),
                u(w, ++d, l(w, d - 13, 13)),
                (d += 4)),
            p &&
                (u(w, d, 8),
                f(w, (d += 4), "acTL"),
                u(w, (d += 4), e.frames.length),
                u(w, (d += 4), null != a.loop ? a.loop : 0),
                u(w, (d += 4), l(w, d - 12, 12)),
                (d += 4)),
            3 == e.ctype)
        ) {
            var v = e.plte.length;
            u(w, d, 3 * v), f(w, (d += 4), "PLTE"), (d += 4);
            for (var y = 0; y < v; y++) {
                var x = 3 * y,
                    E = e.plte[y],
                    k = 255 & E,
                    C = (E >>> 8) & 255,
                    T = (E >>> 16) & 255;
                (w[d + x + 0] = k), (w[d + x + 1] = C), (w[d + x + 2] = T);
            }
            if ((u(w, (d += 3 * v), l(w, d - 3 * v - 4, 3 * v + 4)), (d += 4), h)) {
                u(w, d, v), f(w, (d += 4), "tRNS"), (d += 4);
                for (var y = 0; y < v; y++) w[d + y] = (e.plte[y] >>> 24) & 255;
                u(w, (d += v), l(w, d - v - 4, v + 4)), (d += 4);
            }
        }
        for (var M = 0, g = 0; g < e.frames.length; g++) {
            var b = e.frames[g];
            p &&
                (u(w, d, 26),
                f(w, (d += 4), "fcTL"),
                u(w, (d += 4), M++),
                u(w, (d += 4), b.rect.width),
                u(w, (d += 4), b.rect.height),
                u(w, (d += 4), b.rect.x),
                u(w, (d += 4), b.rect.y),
                c(w, (d += 4), o[g]),
                c(w, (d += 2), 1e3),
                (w[(d += 2)] = b.dispose),
                (w[++d] = b.blend),
                u(w, ++d, l(w, d - 30, 30)),
                (d += 4));
            var P = b.cimg,
                v = P.length;
            u(w, d, v + 4 * (0 != g));
            var A = (d += 4);
            f(w, d, 0 == g ? "IDAT" : "fdAT"),
                (d += 4),
                0 != g && (u(w, d, M++), (d += 4)),
                w.set(P, d),
                u(w, (d += v), l(w, A, d - A)),
                (d += 4);
        }
        return u(w, d, 0), f(w, (d += 4), "IEND"), u(w, (d += 4), l(w, d - 4, 4)), (d += 4), w.buffer;
    }
    function c(e, t, r) {
        for (var i = 0; i < e.frames.length; i++) {
            var o = e.frames[i],
                a = (o.rect.width, o.rect.height),
                s = new Uint8Array(a * o.bpl + a);
            o.cimg = (function (e, t, r, i, o, a, s) {
                var l = [],
                    u = [0, 1, 2, 3, 4];
                -1 != a ? (u = [a]) : (t * i > 5e5 || 1 == r) && (u = [0]), s && (p = { level: 0 });
                var c = o.length > 1e7 && null != window.UZIP ? window.UZIP : pako;
                Date.now();
                for (var f = 0; f < u.length; f++) {
                    for (var d = 0; d < t; d++)
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
                        })(o, e, d, i, r, u[f]);
                    l.push(c.deflate(o, p));
                }
                for (var p, h, m = 1e9, f = 0; f < l.length; f++) l[f].length < m && ((h = f), (m = l[f].length));
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
        var x = 255 != g,
            E = (function (t, r, n, i, o, a) {
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
                                var x = new Uint8Array(t[l - 1 - S]),
                                    E = new Uint32Array(t[l - 1 - S]),
                                    k = r,
                                    C = n,
                                    T = -1,
                                    M = -1,
                                    P = 0;
                                P < n;
                                P++
                            )
                                for (var A = 0; A < r; A++) {
                                    var I = P * r + A;
                                    f[I] != E[I] &&
                                        (A < k && (k = A), A > T && (T = A), P < C && (C = P), P > M && (M = P));
                                }
                            -1 == T && (k = C = T = M = 0), o && ((1 & k) == 1 && k--, (1 & C) == 1 && C--);
                            var O = (T - k + 1) * (M - C + 1);
                            O < _ && ((_ = O), (w = S), (h = k), (m = C), (v = T - k + 1), (y = M - C + 1));
                        }
                        var x = new Uint8Array(t[l - 1 - w]);
                        1 == w && (s[l - 1].dispose = 2),
                            e(x, r, n, (u = new Uint8Array(v * y * 4)), v, y, -h, -m, 0),
                            1 == (g = +!!e(c, r, n, u, v, y, -h, -m, 3))
                                ? p(c, r, n, u, { x: h, y: m, width: v, height: y })
                                : e(c, r, n, u, v, y, -h, -m, 0);
                    } else u = c.slice(0);
                    s.push({ rect: { x: h, y: m, width: v, height: y }, img: u, blend: g, dispose: 0 });
                }
                if (i)
                    for (var l = 0; l < s.length; l++) {
                        var D = s[l];
                        if (1 != D.blend) {
                            var R = D.rect,
                                L = s[l - 1].rect,
                                F = Math.min(R.x, L.x),
                                N = Math.min(R.y, L.y),
                                j = {
                                    x: F,
                                    y: N,
                                    width: Math.max(R.x + R.width, L.x + L.width) - F,
                                    height: Math.max(R.y + R.height, L.y + L.height) - N,
                                };
                            (s[l - 1].dispose = 1), l - 1 != 0 && d(t, r, n, s, l - 1, j, o), d(t, r, n, s, l, j, o);
                        }
                    }
                if (1 != t.length)
                    for (var I = 0; I < s.length; I++) {
                        var D = s[I];
                        D.rect.width, D.rect.height;
                    }
                return s;
            })(t, r, n, a, s, u),
            k = {},
            C = [],
            T = [];
        if (0 != i) {
            for (var M = [], S = 0; S < E.length; S++) M.push(E[S].img.buffer);
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
                                    0 == f && (l = u = c = 0),
                                        (n[i + s] = l),
                                        (n[i + s + 1] = u),
                                        (n[i + s + 2] = c),
                                        (n[i + s + 3] = f);
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
                C.push(P.plte[S].est.rgba);
            for (var A = 0, S = 0; S < E.length; S++) {
                var I = E[S],
                    O = I.img.length,
                    D = new Uint8Array(P.inds.buffer, A >> 2, O >> 2);
                T.push(D);
                var R = new Uint8Array(P.abuf, A, O);
                m && l(I.img, I.rect.width, I.rect.height, C, R, D), I.img.set(R), (A += O);
            }
        } else
            for (var b = 0; b < E.length; b++) {
                var I = E[b],
                    L = new Uint32Array(I.img.buffer),
                    F = I.rect.width,
                    _ = L.length,
                    D = new Uint8Array(_);
                T.push(D);
                for (var S = 0; S < _; S++) {
                    var N = L[S];
                    if (0 != S && N == L[S - 1]) D[S] = D[S - 1];
                    else if (S > F && N == L[S - F]) D[S] = D[S - F];
                    else {
                        var j = k[N];
                        if (null == j && ((k[N] = j = C.length), C.push(N), C.length >= 300)) break;
                        D[S] = j;
                    }
                }
            }
        var B = C.length;
        B <= 256 && !1 == f && (y = Math.max((y = B <= 2 ? 1 : B <= 4 ? 2 : B <= 16 ? 4 : 8), c));
        for (var b = 0; b < E.length; b++) {
            var I = E[b],
                F = (I.rect.x, I.rect.y, I.rect.width),
                K = I.rect.height,
                $ = I.img;
            new Uint32Array($.buffer);
            var V = 4 * F,
                U = 4;
            if (B <= 256 && !1 == f) {
                for (var z = new Uint8Array((V = Math.ceil((y * F) / 8)) * K), W = T[b], H = 0; H < K; H++) {
                    var S = H * V,
                        G = H * F;
                    if (8 == y) for (var q = 0; q < F; q++) z[S + q] = W[G + q];
                    else if (4 == y) for (var q = 0; q < F; q++) z[S + (q >> 1)] |= W[G + q] << (4 - (1 & q) * 4);
                    else if (2 == y) for (var q = 0; q < F; q++) z[S + (q >> 2)] |= W[G + q] << (6 - (3 & q) * 2);
                    else if (1 == y) for (var q = 0; q < F; q++) z[S + (q >> 3)] |= W[G + q] << (7 - (7 & q) * 1);
                }
                ($ = z), (v = 3), (U = 1);
            } else if (!1 == x && 1 == E.length) {
                for (var z = new Uint8Array(F * K * 3), Y = F * K, S = 0; S < Y; S++) {
                    var X = 3 * S,
                        J = 4 * S;
                    (z[X] = $[J]), (z[X + 1] = $[J + 1]), (z[X + 2] = $[J + 2]);
                }
                ($ = z), (v = 2), (U = 3), (V = 3 * F);
            }
            (I.img = $), (I.bpl = V), (I.bpp = U);
        }
        return { ctype: v, depth: y, plte: C, frames: E };
    }
    function d(t, r, n, i, o, a, s) {
        for (
            var l = Uint8Array,
                u = Uint32Array,
                c = new l(t[o - 1]),
                f = new u(t[o - 1]),
                d = o + 1 < t.length ? new l(t[o + 1]) : null,
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
                    x = a.y + w,
                    E = x * r + S,
                    k = m[E];
                0 == k ||
                    (0 == i[o - 1].dispose && f[E] == k && (null == d || 0 != d[4 * E + 3])) ||
                    (S < v && (v = S), S > g && (g = S), x < y && (y = x), x > b && (b = x));
            }
        -1 == g && (v = y = g = b = 0),
            s && ((1 & v) == 1 && v--, (1 & y) == 1 && y--),
            (a = { x: v, y: y, width: g - v + 1, height: b - y + 1 });
        var C = i[o];
        (C.rect = a),
            (C.blend = 1),
            (C.img = new Uint8Array(a.width * a.height * 4)),
            0 == i[o - 1].dispose
                ? (e(c, r, n, C.img, a.width, a.height, -a.x, -a.y, 0), p(h, r, n, C.img, a))
                : e(h, r, n, C.img, a.width, a.height, -a.x, -a.y, 0);
    }
    function p(t, r, n, i, o) {
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
                d = 0;
            d < u;
            d++
        )
            c[d] = l[d].est.rgba;
        var p,
            h = n.length,
            w = new Uint8Array(h >> 2);
        if (u <= 60) v(n, w, f), m(w, o, c);
        else if (n.length < 32e6)
            for (var d = 0; d < h; d += 4) {
                var _ = n[d] * (1 / 255),
                    S = n[d + 1] * (1 / 255),
                    x = n[d + 2] * (1 / 255),
                    E = n[d + 3] * (1 / 255);
                (p = g(s, _, S, x, E)), (w[d >> 2] = p.ind), (o[d >> 2] = p.est.rgba);
            }
        else
            for (var d = 0; d < h; d += 4) {
                var _ = n[d] * (1 / 255),
                    S = n[d + 1] * (1 / 255),
                    x = n[d + 2] * (1 / 255),
                    E = n[d + 3] * (1 / 255);
                for (p = s; p.left; ) p = 0 >= b(p.est, _, S, x, E) ? p.left : p.right;
                (w[d >> 2] = p.ind), (o[d >> 2] = p.est.rgba);
            }
        if (r || n.length * u < 10 * 4e6) {
            for (var k = 1e9, d = 0; d < 10; d++) {
                var C,
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
                                o[s]++,
                                    (i[l] += e[a]),
                                    (i[l + 1] += e[a + 1]),
                                    (i[l + 2] += e[a + 2]),
                                    (i[l + 3] += e[a + 3]);
                            }
                            for (var a = 0; a < r.length; a++) r[a] = Math.round(i[a] / o[a >>> 2]);
                        })((C = n), (T = w), (M = f)),
                        v(C, T, M));
                if (P / k > 0.997) break;
                k = P;
            }
            for (var d = 0; d < u; d++) l[d].est.rgba = c[d];
            m(w, o, c);
        }
        return { abuf: i.buffer, inds: w, plte: l };
    }
    function m(e, t, r) {
        for (var n = 0; n < e.length; n++) t[n] = r[e[n]];
    }
    function v(e, t, r) {
        for (var n = 0, i = r.length >>> 2, o = [], a = 0; a < i; a++) {
            for (var s = 4 * a, l = r[s], u = r[s + 1], c = r[s + 2], f = r[s + 3], d = 0, p = 1e9, h = 0; h < i; h++)
                if (a != h) {
                    var m = 4 * h,
                        v = l - r[m],
                        y = u - r[m + 1],
                        g = c - r[m + 2],
                        b = f - r[m + 3],
                        w = v * v + y * y + g * g + b * b;
                    w < p && ((p = w), (d = h));
                }
            (o[a] = 0.5 * Math.sqrt(p)), (o[a] = o[a] * o[a]);
        }
        for (var a = 0; a < e.length; a += 4) {
            var l = e[a],
                u = e[a + 1],
                c = e[a + 2],
                f = e[a + 3],
                d = t[a >>> 2],
                s = 4 * d,
                v = l - r[s],
                y = u - r[s + 1],
                g = c - r[s + 2],
                b = f - r[s + 3],
                p = v * v + y * y + g * g + b * b;
            if (p > o[d])
                for (var h = 0; h < i; h++) {
                    (v = l - r[(s = 4 * h)]), (y = u - r[s + 1]);
                    var w = v * v + y * y + (g = c - r[s + 2]) * g + (b = f - r[s + 3]) * b;
                    if (w < p && ((p = w), (d = h), p < o[h])) break;
                }
            (t[a >>> 2] = d), (n += p);
        }
        return n / (e.length >>> 2);
    }
    function y(e, t, r) {
        null == r && (r = 1e-4);
        var n = new Uint32Array(e.buffer),
            i = { i0: 0, i1: e.length, bst: null, est: null, tdst: 0, left: null, right: null };
        (i.bst = _(e, i.i0, i.i1)), (i.est = S(i.bst));
        for (var o = [i]; o.length < t; ) {
            for (var a = 0, s = 0, l = 0; l < o.length; l++) o[l].est.L > a && ((a = o[l].est.L), (s = l));
            if (a < r) break;
            var u = o[s],
                c = (function (e, t, r, n, i, o) {
                    for (n -= 4; r < n; ) {
                        for (; w(e, r, i) <= o; ) r += 4;
                        for (; w(e, n, i) > o; ) n -= 4;
                        if (r >= n) break;
                        var a = t[r >> 2];
                        (t[r >> 2] = t[n >> 2]), (t[n >> 2] = a), (r += 4), (n -= 4);
                    }
                    for (; w(e, r, i) > o; ) r -= 4;
                    return r + 4;
                })(e, n, u.i0, u.i1, u.est.e, u.est.eMq255);
            if (u.i0 >= c || u.i1 <= c) {
                u.est.L = 0;
                continue;
            }
            var f = { i0: u.i0, i1: c, bst: null, est: null, tdst: 0, left: null, right: null };
            (f.bst = _(e, f.i0, f.i1)), (f.est = S(f.bst));
            var d = { i0: c, i1: u.i1, bst: null, est: null, tdst: 0, left: null, right: null };
            d.bst = { R: [], m: [], N: u.bst.N - f.bst.N };
            for (var l = 0; l < 16; l++) d.bst.R[l] = u.bst.R[l] - f.bst.R[l];
            for (var l = 0; l < 4; l++) d.bst.m[l] = u.bst.m[l] - f.bst.m[l];
            (d.est = S(d.bst)), (u.left = f), (u.right = d), (o[s] = f), o.push(d);
        }
        o.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < o.length; l++) o[l].ind = l;
        return [i, o];
    }
    function g(e, t, r, n, i) {
        if (null == e.left) {
            var o, a, s, l, u, c, f, d, p;
            return (
                (o = e.est.q),
                (a = t),
                (s = r),
                (l = n),
                (u = i),
                (c = a - o[0]),
                (f = s - o[1]),
                (e.tdst = c * c + f * f + (d = l - o[2]) * d + (p = u - o[3]) * p),
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
            (i[0] += a),
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
                (n[15] += u * u);
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
            d = 0;
        if (0 != n)
            for (
                var p = 0;
                p < 16 &&
                ((c = x.multVec(u, c)),
                (d = Math.sqrt(x.dot(c, c))),
                (c = x.sml(1 / d, c)),
                !(0 != p && 1e-9 > Math.abs(d - f)));
                p++
            )
                f = d;
        var h = [i * l, o * l, a * l, s * l],
            m = x.dot(x.sml(255, h), c);
        return {
            Cov: u,
            q: h,
            e: c,
            L: f,
            eMq255: m,
            eMq: x.dot(c, h),
            rgba:
                ((Math.round(255 * h[3]) << 24) |
                    (Math.round(255 * h[2]) << 16) |
                    (Math.round(255 * h[1]) << 8) |
                    (0 | Math.round(255 * h[0]))) >>>
                0,
        };
    }
    var x = {
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
    (t.encode = function (e, t, r, n, i, o, a) {
        null == n && (n = 0), null == a && (a = !1);
        var s = f(e, t, r, n, [!1, !1, !1, 0, a, !1]);
        return c(s, -1), u(s, t, r, i, o);
    }),
        (t.encodeLL = function (e, t, r, n, i, o, a, s) {
            var l = { ctype: 0 + 2 * (1 != n) + 4 * (0 != i), depth: o, frames: [] };
            Date.now();
            for (var f = (n + i) * o, d = f * t, p = 0; p < e.length; p++)
                l.frames.push({
                    rect: { x: 0, y: 0, width: t, height: r },
                    img: new Uint8Array(e[p]),
                    blend: 0,
                    dispose: 1,
                    bpp: Math.ceil(f / 8),
                    bpl: Math.ceil(d / 8),
                });
            return c(l, 0, !0), u(l, t, r, a, s);
        }),
        (t.encode.compress = f),
        (t.encode.dither = l),
        (t.quantize = h),
        (t.quantize.findNearest = v),
        (t.quantize.getKDtree = y),
        (t.quantize.getNearest = g);
})(),
    (e.exports = t);
