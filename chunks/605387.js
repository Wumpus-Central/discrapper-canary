var e = (function () {
    var r = {
        nextZero: function (r, e) {
            for (; 0 != r[e]; ) e++;
            return e;
        },
        readUshort: function (r, e) {
            return (r[e] << 8) | r[e + 1];
        },
        writeUshort: function (r, e, t) {
            (r[e] = (t >> 8) & 255), (r[e + 1] = 255 & t);
        },
        readUint: function (r, e) {
            return 16777216 * r[e] + ((r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]);
        },
        writeUint: function (r, e, t) {
            (r[e] = (t >> 24) & 255), (r[e + 1] = (t >> 16) & 255), (r[e + 2] = (t >> 8) & 255), (r[e + 3] = 255 & t);
        },
        readASCII: function (r, e, t) {
            for (var n = '', a = 0; a < t; a++) n += String.fromCharCode(r[e + a]);
            return n;
        },
        writeASCII: function (r, e, t) {
            for (var n = 0; n < t.length; n++) r[e + n] = t.charCodeAt(n);
        },
        readBytes: function (r, e, t) {
            for (var n = [], a = 0; a < t; a++) n.push(r[e + a]);
            return n;
        },
        pad: function (r) {
            return r.length < 2 ? '0' + r : r;
        },
        readUTF8: function (e, t, n) {
            for (var a, i = '', f = 0; f < n; f++) i += '%' + r.pad(e[t + f].toString(16));
            try {
                a = decodeURIComponent(i);
            } catch (a) {
                return r.readASCII(e, t, n);
            }
            return a;
        }
    };
    function e(e, t, n, a) {
        var f = t * n,
            o = Math.ceil((t * i(a)) / 8),
            l = new Uint8Array(4 * f),
            s = new Uint32Array(l.buffer),
            u = a.ctype,
            c = a.depth,
            v = r.readUshort;
        if ((Date.now(), 6 == u)) {
            var h = f << 2;
            if (8 == c) for (var d = 0; d < h; d += 4) (l[d] = e[d]), (l[d + 1] = e[d + 1]), (l[d + 2] = e[d + 2]), (l[d + 3] = e[d + 3]);
            if (16 == c) for (var d = 0; d < h; d++) l[d] = e[d << 1];
        } else if (2 == u) {
            var g = a.tabs.tRNS;
            if (null == g) {
                if (8 == c)
                    for (var d = 0; d < f; d++) {
                        var p = 3 * d;
                        s[d] = -16777216 | (e[p + 2] << 16) | (e[p + 1] << 8) | e[p];
                    }
                if (16 == c)
                    for (var d = 0; d < f; d++) {
                        var p = 6 * d;
                        s[d] = -16777216 | (e[p + 4] << 16) | (e[p + 2] << 8) | e[p];
                    }
            } else {
                var w = g[0],
                    b = g[1],
                    y = g[2];
                if (8 == c)
                    for (var d = 0; d < f; d++) {
                        var m = d << 2,
                            p = 3 * d;
                        (s[d] = -16777216 | (e[p + 2] << 16) | (e[p + 1] << 8) | e[p]), e[p] == w && e[p + 1] == b && e[p + 2] == y && (l[m + 3] = 0);
                    }
                if (16 == c)
                    for (var d = 0; d < f; d++) {
                        var m = d << 2,
                            p = 6 * d;
                        (s[d] = -16777216 | (e[p + 4] << 16) | (e[p + 2] << 8) | e[p]), v(e, p) == w && v(e, p + 2) == b && v(e, p + 4) == y && (l[m + 3] = 0);
                    }
            }
        } else if (3 == u) {
            var A = a.tabs.PLTE,
                U = a.tabs.tRNS,
                x = U ? U.length : 0;
            if (1 == c)
                for (var I = 0; I < n; I++)
                    for (var S = I * o, M = I * t, d = 0; d < t; d++) {
                        var m = (M + d) << 2,
                            R = (e[S + (d >> 3)] >> (7 - ((7 & d) << 0))) & 1,
                            C = 3 * R;
                        (l[m] = A[C]), (l[m + 1] = A[C + 1]), (l[m + 2] = A[C + 2]), (l[m + 3] = R < x ? U[R] : 255);
                    }
            if (2 == c)
                for (var I = 0; I < n; I++)
                    for (var S = I * o, M = I * t, d = 0; d < t; d++) {
                        var m = (M + d) << 2,
                            R = (e[S + (d >> 2)] >> (6 - ((3 & d) << 1))) & 3,
                            C = 3 * R;
                        (l[m] = A[C]), (l[m + 1] = A[C + 1]), (l[m + 2] = A[C + 2]), (l[m + 3] = R < x ? U[R] : 255);
                    }
            if (4 == c)
                for (var I = 0; I < n; I++)
                    for (var S = I * o, M = I * t, d = 0; d < t; d++) {
                        var m = (M + d) << 2,
                            R = (e[S + (d >> 1)] >> (4 - ((1 & d) << 2))) & 15,
                            C = 3 * R;
                        (l[m] = A[C]), (l[m + 1] = A[C + 1]), (l[m + 2] = A[C + 2]), (l[m + 3] = R < x ? U[R] : 255);
                    }
            if (8 == c)
                for (var d = 0; d < f; d++) {
                    var m = d << 2,
                        R = e[d],
                        C = 3 * R;
                    (l[m] = A[C]), (l[m + 1] = A[C + 1]), (l[m + 2] = A[C + 2]), (l[m + 3] = R < x ? U[R] : 255);
                }
        } else if (4 == u) {
            if (8 == c)
                for (var d = 0; d < f; d++) {
                    var m = d << 2,
                        N = d << 1,
                        T = e[N];
                    (l[m] = T), (l[m + 1] = T), (l[m + 2] = T), (l[m + 3] = e[N + 1]);
                }
            if (16 == c)
                for (var d = 0; d < f; d++) {
                    var m = d << 2,
                        N = d << 2,
                        T = e[N];
                    (l[m] = T), (l[m + 1] = T), (l[m + 2] = T), (l[m + 3] = e[N + 2]);
                }
        } else if (0 == u)
            for (var w = a.tabs.tRNS ? a.tabs.tRNS : -1, I = 0; I < n; I++) {
                var E = I * o,
                    D = I * t;
                if (1 == c)
                    for (var O = 0; O < t; O++) {
                        var T = 255 * ((e[E + (O >>> 3)] >>> (7 - (7 & O))) & 1),
                            L = T == 255 * w ? 0 : 255;
                        s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                    }
                else if (2 == c)
                    for (var O = 0; O < t; O++) {
                        var T = 85 * ((e[E + (O >>> 2)] >>> (6 - ((3 & O) << 1))) & 3),
                            L = T == 85 * w ? 0 : 255;
                        s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                    }
                else if (4 == c)
                    for (var O = 0; O < t; O++) {
                        var T = 17 * ((e[E + (O >>> 1)] >>> (4 - ((1 & O) << 2))) & 15),
                            L = T == 17 * w ? 0 : 255;
                        s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                    }
                else if (8 == c)
                    for (var O = 0; O < t; O++) {
                        var T = e[E + O],
                            L = T == w ? 0 : 255;
                        s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                    }
                else if (16 == c)
                    for (var O = 0; O < t; O++) {
                        var T = e[E + (O << 1)],
                            L = v(e, E + (O << 1)) == w ? 0 : 255;
                        s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                    }
            }
        return l;
    }
    function t(r, e, t, o) {
        Date.now();
        var l = new Uint8Array((Math.ceil((t * i(r)) / 8) + 1 + r.interlace) * o);
        return (
            (e = r.tabs.CgBI ? a(e, l) : n(e, l)),
            Date.now(),
            0 == r.interlace
                ? (e = f(e, r, 0, t, o))
                : 1 == r.interlace &&
                  (e = (function (r, e) {
                      for (var t = e.width, n = e.height, a = i(e), o = a >> 3, l = Math.ceil((t * a) / 8), s = new Uint8Array(n * l), u = 0, c = [0, 0, 4, 0, 2, 0, 1], v = [0, 4, 0, 2, 0, 1, 0], h = [8, 8, 8, 4, 4, 2, 2], d = [8, 8, 4, 4, 2, 2, 1], g = 0; g < 7; ) {
                          for (var p = h[g], w = d[g], b = 0, y = 0, m = c[g]; m < n; ) (m += p), y++;
                          for (var A = v[g]; A < t; ) (A += w), b++;
                          var U = Math.ceil((b * a) / 8);
                          f(r, e, u, b, y);
                          for (var x = 0, I = c[g]; I < n; ) {
                              for (var S = v[g], M = (u + x * U) << 3; S < t; ) {
                                  if (1 == a) {
                                      var R = r[M >> 3];
                                      (R = (R >> (7 - (7 & M))) & 1), (s[I * l + (S >> 3)] |= R << (7 - ((7 & S) << 0)));
                                  }
                                  if (2 == a) {
                                      var R = r[M >> 3];
                                      (R = (R >> (6 - (7 & M))) & 3), (s[I * l + (S >> 2)] |= R << (6 - ((3 & S) << 1)));
                                  }
                                  if (4 == a) {
                                      var R = r[M >> 3];
                                      (R = (R >> (4 - (7 & M))) & 15), (s[I * l + (S >> 1)] |= R << (4 - ((1 & S) << 2)));
                                  }
                                  if (a >= 8) for (var C = I * l + S * o, N = 0; N < o; N++) s[C + N] = r[(M >> 3) + N];
                                  (M += a), (S += w);
                              }
                              x++, (I += p);
                          }
                          b * y != 0 && (u += y * (1 + U)), (g += 1);
                      }
                      return s;
                  })(e, r)),
            e
        );
    }
    function n(r, e) {
        return a(new Uint8Array(r.buffer, 2, r.length - 6), e);
    }
    var a = (function () {
        var r,
            e,
            t =
                ((r = Uint16Array),
                (e = Uint32Array),
                {
                    m: new r(16),
                    v: new r(16),
                    d: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    o: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                    z: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                    B: new r(32),
                    p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                    w: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                    h: new e(32),
                    g: new r(512),
                    s: [],
                    A: new r(32),
                    t: [],
                    k: new r(32768),
                    c: [],
                    a: [],
                    n: new r(32768),
                    e: [],
                    C: new r(512),
                    b: [],
                    i: new r(32768),
                    r: new e(286),
                    f: new e(30),
                    l: new e(19),
                    u: new e(15000),
                    q: new r(65536),
                    j: new r(32768)
                });
        function n(r, e) {
            for (var n, a, i, f, o, l = r.length, s = t.v, f = 0; f <= e; f++) s[f] = 0;
            for (f = 1; f < l; f += 2) s[r[f]]++;
            var u = t.m;
            for (a = 1, n = 0, s[0] = 0; a <= e; a++) (n = (n + s[a - 1]) << 1), (u[a] = n);
            for (i = 0; i < l; i += 2) 0 != (o = r[i + 1]) && ((r[i] = u[o]), u[o]++);
        }
        function a(r, e, n) {
            for (var a = r.length, i = t.i, f = 0; f < a; f += 2) if (0 != r[f + 1]) for (var o = f >> 1, l = r[f + 1], s = (o << 4) | l, u = e - l, c = r[f] << u, v = c + (1 << u); c != v; ) (n[i[c] >>> (15 - e)] = s), c++;
        }
        function i(r, e) {
            for (var n = t.i, a = 15 - e, i = 0; i < r.length; i += 2) {
                var f = r[i] << (e - r[i + 1]);
                r[i] = n[f] >>> a;
            }
        }
        function f(r, e, t) {
            return ((r[e >>> 3] | (r[(e >>> 3) + 1] << 8)) >>> (7 & e)) & ((1 << t) - 1);
        }
        function o(r, e, t) {
            return ((r[e >>> 3] | (r[(e >>> 3) + 1] << 8) | (r[(e >>> 3) + 2] << 16)) >>> (7 & e)) & ((1 << t) - 1);
        }
        function l(r, e) {
            return (r[e >>> 3] | (r[(e >>> 3) + 1] << 8) | (r[(e >>> 3) + 2] << 16)) >>> (7 & e);
        }
        function s(r, e) {
            var t = r.length;
            if (e <= t) return r;
            var n = new Uint8Array(Math.max(t << 1, e));
            return n.set(r, 0), n;
        }
        function u(r, e, t, n) {
            for (var a = 0, i = 0, f = n.length >>> 1; i < t; ) {
                var o = r[i + e];
                (n[i << 1] = 0), (n[(i << 1) + 1] = o), o > a && (a = o), i++;
            }
            for (; i < f; ) (n[i << 1] = 0), (n[(i << 1) + 1] = 0), i++;
            return a;
        }
        return (
            !(function () {
                for (var r = 0; r < 32768; r++) {
                    var e = r;
                    (e = ((4278255360 & (e = ((4042322160 & (e = ((3435973836 & (e = ((2863311530 & e) >>> 1) | ((1431655765 & e) << 1))) >>> 2) | ((858993459 & e) << 2))) >>> 4) | ((252645135 & e) << 4))) >>> 8) | ((16711935 & e) << 8)), (t.i[r] = ((e >>> 16) | (e << 16)) >>> 17);
                }
                function f(r, e, t) {
                    for (; 0 != e--; ) r.push(0, t);
                }
                for (var r = 0; r < 32; r++) (t.B[r] = (t.o[r] << 3) | t.z[r]), (t.h[r] = (t.p[r] << 4) | t.w[r]);
                f(t.s, 144, 8), f(t.s, 112, 9), f(t.s, 24, 7), f(t.s, 8, 8), n(t.s, 9), a(t.s, 9, t.g), i(t.s, 9), f(t.t, 32, 5), n(t.t, 5), a(t.t, 5, t.A), i(t.t, 5), f(t.b, 19, 0), f(t.c, 286, 0), f(t.e, 30, 0), f(t.a, 320, 0);
            })(),
            function (r, e) {
                var i,
                    c,
                    v = Uint8Array,
                    h = 0,
                    d = 0,
                    g = 0,
                    p = 0,
                    w = 0,
                    b = 0,
                    y = 0,
                    m = 0,
                    A = 0;
                if (3 == r[0] && 0 == r[1]) return e || new v(0);
                var U = null == e;
                for (U && (e = new v((r.length >>> 2) << 3)); 0 == h; ) {
                    if (((h = o(r, A, 1)), (d = o(r, A + 1, 2)), (A += 3), 0 == d)) {
                        (7 & A) != 0 && (A += 8 - (7 & A));
                        var x = (A >>> 3) + 4,
                            I = r[x - 4] | (r[x - 3] << 8);
                        U && (e = s(e, m + I)), e.set(new v(r.buffer, r.byteOffset + x, I), m), (A = (x + I) << 3), (m += I);
                        continue;
                    }
                    if ((U && (e = s(e, m + 131072)), 1 == d && ((i = t.g), (c = t.A), (b = 511), (y = 31)), 2 == d)) {
                        (g = f(r, A, 5) + 257), (p = f(r, A + 5, 5) + 1), (w = f(r, A + 10, 4) + 4), (A += 14);
                        for (var S = 1, M = 0; M < 38; M += 2) (t.b[M] = 0), (t.b[M + 1] = 0);
                        for (var M = 0; M < w; M++) {
                            var R = f(r, A + 3 * M, 3);
                            (t.b[(t.d[M] << 1) + 1] = R), R > S && (S = R);
                        }
                        (A += 3 * w),
                            n(t.b, S),
                            a(t.b, S, t.C),
                            (i = t.k),
                            (c = t.n),
                            (A = (function (r, e, t, n, a, i) {
                                for (var o = 0; o < t; ) {
                                    var s = r[l(n, a) & e];
                                    a += 15 & s;
                                    var u = s >>> 4;
                                    if (u <= 15) (i[o] = u), o++;
                                    else {
                                        var c = 0,
                                            v = 0;
                                        16 == u ? ((v = 3 + f(n, a, 2)), (a += 2), (c = i[o - 1])) : 17 == u ? ((v = 3 + f(n, a, 3)), (a += 3)) : 18 == u && ((v = 11 + f(n, a, 7)), (a += 7));
                                        for (var h = o + v; o < h; ) (i[o] = c), o++;
                                    }
                                }
                                return a;
                            })(t.C, (1 << S) - 1, g + p, r, A, t.a));
                        var C = u(t.a, 0, g, t.c);
                        b = (1 << C) - 1;
                        var N = u(t.a, g, p, t.e);
                        (y = (1 << N) - 1), n(t.c, C), a(t.c, C, i), n(t.e, N), a(t.e, N, c);
                    }
                    for (;;) {
                        var T = i[l(r, A) & b];
                        A += 15 & T;
                        var E = T >>> 4;
                        if (E >>> 8 == 0) e[m++] = E;
                        else if (256 == E) break;
                        else {
                            var D = m + E - 254;
                            if (E > 264) {
                                var O = t.B[E - 257];
                                (D = m + (O >>> 3) + f(r, A, 7 & O)), (A += 7 & O);
                            }
                            var L = c[l(r, A) & y];
                            A += 15 & L;
                            var B = L >>> 4,
                                k = t.h[B],
                                q = (k >>> 4) + o(r, A, 15 & k);
                            for (A += 15 & k, U && (e = s(e, m + 131072)); m < D; ) (e[m] = e[m++ - q]), (e[m] = e[m++ - q]), (e[m] = e[m++ - q]), (e[m] = e[m++ - q]);
                            m = D;
                        }
                    }
                }
                return e.length == m ? e : e.slice(0, m);
            }
        );
    })();
    function i(r) {
        return [1, null, 3, 1, 2, null, 4][r.ctype] * r.depth;
    }
    function f(r, e, t, n, a) {
        var f = i(e),
            l = Math.ceil((n * f) / 8);
        f = Math.ceil(f / 8);
        var s,
            u,
            c = r[t],
            v = 0;
        if ((c > 1 && (r[t] = [0, 0, 1][c - 2]), 3 == c)) for (v = f; v < l; v++) r[v + 1] = (r[v + 1] + (r[v + 1 - f] >>> 1)) & 255;
        for (var h = 0; h < a; h++)
            if (((c = r[(u = (s = t + h * l) + h + 1) - 1]), (v = 0), 0 == c)) for (; v < l; v++) r[s + v] = r[u + v];
            else if (1 == c) {
                for (; v < f; v++) r[s + v] = r[u + v];
                for (; v < l; v++) r[s + v] = r[u + v] + r[s + v - f];
            } else if (2 == c) for (; v < l; v++) r[s + v] = r[u + v] + r[s + v - l];
            else if (3 == c) {
                for (; v < f; v++) r[s + v] = r[u + v] + (r[s + v - l] >>> 1);
                for (; v < l; v++) r[s + v] = r[u + v] + ((r[s + v - l] + r[s + v - f]) >>> 1);
            } else {
                for (; v < f; v++) r[s + v] = r[u + v] + o(0, r[s + v - l], 0);
                for (; v < l; v++) r[s + v] = r[u + v] + o(r[s + v - f], r[s + v - l], r[s + v - f - l]);
            }
        return r;
    }
    function o(r, e, t) {
        var n = r + e - t,
            a = n - r,
            i = n - e,
            f = n - t;
        return a * a <= i * i && a * a <= f * f ? r : i * i <= f * f ? e : t;
    }
    function l(r, e, t, n, a, i, f, o, l) {
        for (var s = Math.min(e, a), u = Math.min(t, i), c = 0, v = 0, h = 0; h < u; h++)
            for (var d = 0; d < s; d++)
                if ((f >= 0 && o >= 0 ? ((c = (h * e + d) << 2), (v = ((o + h) * a + f + d) << 2)) : ((c = ((-o + h) * e - f + d) << 2), (v = (h * a + d) << 2)), 0 == l)) (n[v] = r[c]), (n[v + 1] = r[c + 1]), (n[v + 2] = r[c + 2]), (n[v + 3] = r[c + 3]);
                else if (1 == l) {
                    var g = r[c + 3] * (1 / 255),
                        p = r[c] * g,
                        w = r[c + 1] * g,
                        b = r[c + 2] * g,
                        y = n[v + 3] * (1 / 255),
                        m = n[v] * y,
                        A = n[v + 1] * y,
                        U = n[v + 2] * y,
                        x = 1 - g,
                        I = g + y * x,
                        S = 0 == I ? 0 : 1 / I;
                    (n[v + 3] = 255 * I), (n[v + 0] = (p + m * x) * S), (n[v + 1] = (w + A * x) * S), (n[v + 2] = (b + U * x) * S);
                } else if (2 == l) {
                    var g = r[c + 3],
                        p = r[c],
                        w = r[c + 1],
                        b = r[c + 2],
                        y = n[v + 3],
                        m = n[v],
                        A = n[v + 1],
                        U = n[v + 2];
                    g == y && p == m && w == A && b == U ? ((n[v] = 0), (n[v + 1] = 0), (n[v + 2] = 0), (n[v + 3] = 0)) : ((n[v] = p), (n[v + 1] = w), (n[v + 2] = b), (n[v + 3] = g));
                } else if (3 == l) {
                    var g = r[c + 3],
                        p = r[c],
                        w = r[c + 1],
                        b = r[c + 2],
                        y = n[v + 3],
                        m = n[v],
                        A = n[v + 1],
                        U = n[v + 2];
                    if (g == y && p == m && w == A && b == U) continue;
                    if (g < 220 && y > 20) return !1;
                }
        return !0;
    }
    return {
        decode: function (e) {
            for (
                var i,
                    f = new Uint8Array(e),
                    o = 8,
                    l = r.readUshort,
                    s = r.readUint,
                    u = {
                        tabs: {},
                        frames: []
                    },
                    c = new Uint8Array(f.length),
                    v = 0,
                    h = 0,
                    d = [137, 80, 78, 71, 13, 10, 26, 10],
                    g = 0;
                g < 8;
                g++
            )
                if (f[g] != d[g]) throw 'The input is not a PNG file!';
            for (; o < f.length; ) {
                var p = r.readUint(f, o);
                o += 4;
                var w = r.readASCII(f, o, 4);
                if (((o += 4), 'IHDR' == w)) {
                    (S = f), (M = o), ((R = u).width = r.readUint(S, M)), (M += 4), (R.height = r.readUint(S, M)), (M += 4), (R.depth = S[M]), M++, (R.ctype = S[M]), M++, (R.compress = S[M]), M++, (R.filter = S[M]), M++, (R.interlace = S[M]), M++;
                } else if ('iCCP' == w) {
                    for (var b = o; 0 != f[b]; ) b++;
                    r.readASCII(f, o, b - o), f[b + 1];
                    var y = f.slice(b + 2, o + p),
                        m = null;
                    try {
                        m = n(y);
                    } catch (r) {
                        m = a(y);
                    }
                    u.tabs[w] = m;
                } else if ('CgBI' == w) u.tabs[w] = f.slice(o, o + 4);
                else if ('IDAT' == w) {
                    for (var g = 0; g < p; g++) c[v + g] = f[o + g];
                    v += p;
                } else if ('acTL' == w)
                    (u.tabs[w] = {
                        num_frames: s(f, o),
                        num_plays: s(f, o + 4)
                    }),
                        (i = new Uint8Array(f.length));
                else if ('fcTL' == w) {
                    if (0 != h) {
                        var A = u.frames[u.frames.length - 1];
                        (A.data = t(u, i.slice(0, h), A.rect.width, A.rect.height)), (h = 0);
                    }
                    var U = {
                            x: s(f, o + 12),
                            y: s(f, o + 16),
                            width: s(f, o + 4),
                            height: s(f, o + 8)
                        },
                        x = l(f, o + 22),
                        I = {
                            rect: U,
                            delay: 1000 * (x = l(f, o + 20) / (0 == x ? 100 : x)),
                            dispose: f[o + 24],
                            blend: f[o + 25]
                        };
                    u.frames.push(I);
                } else if ('fdAT' == w) {
                    for (var g = 0; g < p - 4; g++) i[h + g] = f[o + g + 4];
                    h += p - 4;
                } else if ('pHYs' == w) u.tabs[w] = [r.readUint(f, o), r.readUint(f, o + 4), f[o + 8]];
                else if ('cHRM' == w) {
                    u.tabs[w] = [];
                    for (var g = 0; g < 8; g++) u.tabs[w].push(r.readUint(f, o + 4 * g));
                } else if ('tEXt' == w || 'zTXt' == w) {
                    null == u.tabs[w] && (u.tabs[w] = {});
                    var S,
                        M,
                        R,
                        C,
                        N = r.nextZero(f, o),
                        T = r.readASCII(f, o, N - o),
                        E = o + p - N - 1;
                    if ('tEXt' == w) C = r.readASCII(f, N + 1, E);
                    else {
                        var D = n(f.slice(N + 2, N + 2 + E));
                        C = r.readUTF8(D, 0, D.length);
                    }
                    u.tabs[w][T] = C;
                } else if ('iTXt' == w) {
                    null == u.tabs[w] && (u.tabs[w] = {});
                    var N = 0,
                        b = o;
                    N = r.nextZero(f, b);
                    var T = r.readASCII(f, b, N - b),
                        O = f[(b = N + 1)];
                    f[b + 1], (b += 2), (N = r.nextZero(f, b)), r.readASCII(f, b, N - b), (b = N + 1), (N = r.nextZero(f, b)), r.readUTF8(f, b, N - b);
                    var C,
                        E = p - ((b = N + 1) - o);
                    if (0 == O) C = r.readUTF8(f, b, E);
                    else {
                        var D = n(f.slice(b, b + E));
                        C = r.readUTF8(D, 0, D.length);
                    }
                    u.tabs[w][T] = C;
                } else if ('PLTE' == w) u.tabs[w] = r.readBytes(f, o, p);
                else if ('hIST' == w) {
                    var L = u.tabs.PLTE.length / 3;
                    u.tabs[w] = [];
                    for (var g = 0; g < L; g++) u.tabs[w].push(l(f, o + 2 * g));
                } else if ('tRNS' == w) 3 == u.ctype ? (u.tabs[w] = r.readBytes(f, o, p)) : 0 == u.ctype ? (u.tabs[w] = l(f, o)) : 2 == u.ctype && (u.tabs[w] = [l(f, o), l(f, o + 2), l(f, o + 4)]);
                else if ('gAMA' == w) u.tabs[w] = r.readUint(f, o) / 100000;
                else if ('sRGB' == w) u.tabs[w] = f[o];
                else if ('bKGD' == w) 0 == u.ctype || 4 == u.ctype ? (u.tabs[w] = [l(f, o)]) : 2 == u.ctype || 6 == u.ctype ? (u.tabs[w] = [l(f, o), l(f, o + 2), l(f, o + 4)]) : 3 == u.ctype && (u.tabs[w] = f[o]);
                else if ('IEND' == w) break;
                (o += p), r.readUint(f, o), (o += 4);
            }
            if (0 != h) {
                var A = u.frames[u.frames.length - 1];
                A.data = t(u, i.slice(0, h), A.rect.width, A.rect.height);
            }
            return (u.data = t(u, c, u.width, u.height)), delete u.compress, delete u.interlace, delete u.filter, u;
        },
        toRGBA8: function (r) {
            var t = r.width,
                n = r.height;
            if (null == r.tabs.acTL) return [e(r.data, t, n, r).buffer];
            var a = [];
            null == r.frames[0].data && (r.frames[0].data = r.data);
            for (var i = t * n * 4, f = new Uint8Array(i), o = new Uint8Array(i), s = new Uint8Array(i), u = 0; u < r.frames.length; u++) {
                var c = r.frames[u],
                    v = c.rect.x,
                    h = c.rect.y,
                    d = c.rect.width,
                    g = c.rect.height,
                    p = e(c.data, d, g, r);
                if (0 != u) for (var w = 0; w < i; w++) s[w] = f[w];
                if ((0 == c.blend ? l(p, d, g, f, t, n, v, h, 0) : 1 == c.blend && l(p, d, g, f, t, n, v, h, 1), a.push(f.buffer.slice(0)), 0 == c.dispose));
                else if (1 == c.dispose) l(o, d, g, f, t, n, v, h, 0);
                else if (2 == c.dispose) for (var w = 0; w < i; w++) f[w] = s[w];
            }
            return a;
        },
        _paeth: o,
        _copyTile: l,
        _bin: r
    };
})();
!(function () {
    var r = e._copyTile,
        t = e._bin,
        n = e._paeth,
        a = {
            table: (function () {
                for (var r = new Uint32Array(256), e = 0; e < 256; e++) {
                    for (var t = e, n = 0; n < 8; n++) 1 & t ? (t = 3988292384 ^ (t >>> 1)) : (t >>>= 1);
                    r[e] = t;
                }
                return r;
            })(),
            update: function (r, e, t, n) {
                for (var i = 0; i < n; i++) r = a.table[(r ^ e[t + i]) & 255] ^ (r >>> 8);
                return r;
            },
            crc: function (r, e, t) {
                return 4294967295 ^ a.update(4294967295, r, e, t);
            }
        };
    function i(r, e, t, n) {
        (e[t] += (r[0] * n) >> 4), (e[t + 1] += (r[1] * n) >> 4), (e[t + 2] += (r[2] * n) >> 4), (e[t + 3] += (r[3] * n) >> 4);
    }
    function f(r) {
        return Math.max(0, Math.min(255, r));
    }
    function o(r, e) {
        var t = r[0] - e[0],
            n = r[1] - e[1],
            a = r[2] - e[2],
            i = r[3] - e[3];
        return t * t + n * n + a * a + i * i;
    }
    function l(r, e, t, n, a, l, s) {
        null == s && (s = 1);
        for (var u = n.length, c = [], v = [], h = 0; h < u; h++) {
            var d = n[h];
            c.push([(d >>> 0) & 255, (d >>> 8) & 255, (d >>> 16) & 255, (d >>> 24) & 255]);
        }
        for (var h = 0; h < u; h++) {
            for (var g = 4294967295, p = 0, w = 0; w < u; w++) {
                var b = o(c[h], c[w]);
                w != h && b < g && ((g = b), (p = w));
            }
            var y = Math.sqrt(g) / 2;
            v[h] = ~~(y * y);
        }
        for (var m = new Uint32Array(a.buffer), A = new Int16Array(e * t * 4), U = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5], h = 0; h < U.length; h++) U[h] = 255 * (-0.5 + (U[h] + 0.5) / 16);
        for (var x = 0; x < t; x++)
            for (var I = 0; I < e; I++) {
                var S,
                    h = (x * e + I) * 4;
                if (2 != s) S = [f(r[h] + A[h]), f(r[h + 1] + A[h + 1]), f(r[h + 2] + A[h + 2]), f(r[h + 3] + A[h + 3])];
                else {
                    var b = U[(3 & x) * 4 + (3 & I)];
                    S = [f(r[h] + b), f(r[h + 1] + b), f(r[h + 2] + b), f(r[h + 3] + b)];
                }
                for (var p = 0, M = 16777215, w = 0; w < u; w++) {
                    var R = o(S, c[w]);
                    R < M && ((M = R), (p = w));
                }
                var C = c[p],
                    N = [S[0] - C[0], S[1] - C[1], S[2] - C[2], S[3] - C[3]];
                1 == s && (I != e - 1 && i(N, A, h + 4, 7), x != t - 1 && (0 != I && i(N, A, h + 4 * e - 4, 3), i(N, A, h + 4 * e, 5), I != e - 1 && i(N, A, h + 4 * e + 4, 1))), (l[h >> 2] = p), (m[h >> 2] = n[p]);
            }
    }
    function s(r, e, n, i, f) {
        null == f && (f = {});
        var o,
            l = a.crc,
            s = t.writeUint,
            u = t.writeUshort,
            c = t.writeASCII,
            v = 8,
            h = r.frames.length > 1,
            d = !1,
            g = 33 + (h ? 20 : 0);
        if ((null != f.sRGB && (g += 13), null != f.pHYs && (g += 21), null != f.iCCP && (g += 21 + (o = pako.deflate(f.iCCP)).length + 4), 3 == r.ctype)) {
            for (var p = r.plte.length, w = 0; w < p; w++) r.plte[w] >>> 24 != 255 && (d = !0);
            g += 8 + 3 * p + 4 + (d ? 8 + 1 * p + 4 : 0);
        }
        for (var b = 0; b < r.frames.length; b++) {
            var y = r.frames[b];
            h && (g += 38), (g += y.cimg.length + 12), 0 != b && (g += 4);
        }
        for (var m = new Uint8Array((g += 12)), A = [137, 80, 78, 71, 13, 10, 26, 10], w = 0; w < 8; w++) m[w] = A[w];
        if ((s(m, v, 13), c(m, (v += 4), 'IHDR'), s(m, (v += 4), e), s(m, (v += 4), n), (m[(v += 4)] = r.depth), (m[++v] = r.ctype), (m[++v] = 0), (m[++v] = 0), (m[++v] = 0), s(m, ++v, l(m, v - 17, 17)), (v += 4), null != f.sRGB && (s(m, v, 1), c(m, (v += 4), 'sRGB'), (m[(v += 4)] = f.sRGB), s(m, ++v, l(m, v - 5, 5)), (v += 4)), null != f.iCCP)) {
            var U = 13 + o.length;
            s(m, v, U), c(m, (v += 4), 'iCCP'), c(m, (v += 4), 'ICC profile'), (v += 11), (v += 2), m.set(o, v), s(m, (v += o.length), l(m, v - (U + 4), U + 4)), (v += 4);
        }
        if ((null != f.pHYs && (s(m, v, 9), c(m, (v += 4), 'pHYs'), s(m, (v += 4), f.pHYs[0]), s(m, (v += 4), f.pHYs[1]), (m[(v += 4)] = f.pHYs[2]), s(m, ++v, l(m, v - 13, 13)), (v += 4)), h && (s(m, v, 8), c(m, (v += 4), 'acTL'), s(m, (v += 4), r.frames.length), s(m, (v += 4), null != f.loop ? f.loop : 0), s(m, (v += 4), l(m, v - 12, 12)), (v += 4)), 3 == r.ctype)) {
            var p = r.plte.length;
            s(m, v, 3 * p), c(m, (v += 4), 'PLTE'), (v += 4);
            for (var w = 0; w < p; w++) {
                var x = 3 * w,
                    I = r.plte[w],
                    S = 255 & I,
                    M = (I >>> 8) & 255,
                    R = (I >>> 16) & 255;
                (m[v + x + 0] = S), (m[v + x + 1] = M), (m[v + x + 2] = R);
            }
            if ((s(m, (v += 3 * p), l(m, v - 3 * p - 4, 3 * p + 4)), (v += 4), d)) {
                s(m, v, p), c(m, (v += 4), 'tRNS'), (v += 4);
                for (var w = 0; w < p; w++) m[v + w] = (r.plte[w] >>> 24) & 255;
                s(m, (v += p), l(m, v - p - 4, p + 4)), (v += 4);
            }
        }
        for (var C = 0, b = 0; b < r.frames.length; b++) {
            var y = r.frames[b];
            h && (s(m, v, 26), c(m, (v += 4), 'fcTL'), s(m, (v += 4), C++), s(m, (v += 4), y.rect.width), s(m, (v += 4), y.rect.height), s(m, (v += 4), y.rect.x), s(m, (v += 4), y.rect.y), u(m, (v += 4), i[b]), u(m, (v += 2), 1000), (m[(v += 2)] = y.dispose), (m[++v] = y.blend), s(m, ++v, l(m, v - 30, 30)), (v += 4));
            var N = y.cimg,
                p = N.length;
            s(m, v, p + (0 == b ? 0 : 4));
            var T = (v += 4);
            c(m, v, 0 == b ? 'IDAT' : 'fdAT'), (v += 4), 0 != b && (s(m, v, C++), (v += 4)), m.set(N, v), s(m, (v += p), l(m, T, v - T)), (v += 4);
        }
        return s(m, v, 0), c(m, (v += 4), 'IEND'), s(m, (v += 4), l(m, v - 4, 4)), (v += 4), m.buffer;
    }
    function u(r, e, t) {
        for (var a = 0; a < r.frames.length; a++) {
            var i = r.frames[a],
                f = (i.rect.width, i.rect.height),
                o = new Uint8Array(f * i.bpl + f);
            i.cimg = (function (r, e, t, a, i, f, o) {
                var l = [],
                    s = [0, 1, 2, 3, 4];
                -1 != f ? (s = [f]) : (e * a > 500000 || 1 == t) && (s = [0]), o && (h = { level: 0 });
                var u = i.length > 10000000 && null != window.UZIP ? window.UZIP : pako;
                Date.now();
                for (var c = 0; c < s.length; c++) {
                    for (var v = 0; v < e; v++)
                        (function (r, e, t, a, i, f) {
                            var o = t * a,
                                l = o + t;
                            if (((r[l] = f), l++, 0 == f)) {
                                if (a < 500) for (var s = 0; s < a; s++) r[l + s] = e[o + s];
                                else r.set(new Uint8Array(e.buffer, o, a), l);
                            } else if (1 == f) {
                                for (var s = 0; s < i; s++) r[l + s] = e[o + s];
                                for (var s = i; s < a; s++) r[l + s] = (e[o + s] - e[o + s - i] + 256) & 255;
                            } else if (0 == t) {
                                for (var s = 0; s < i; s++) r[l + s] = e[o + s];
                                if (2 == f) for (var s = i; s < a; s++) r[l + s] = e[o + s];
                                if (3 == f) for (var s = i; s < a; s++) r[l + s] = (e[o + s] - (e[o + s - i] >> 1) + 256) & 255;
                                if (4 == f) for (var s = i; s < a; s++) r[l + s] = (e[o + s] - n(e[o + s - i], 0, 0) + 256) & 255;
                            } else {
                                if (2 == f) for (var s = 0; s < a; s++) r[l + s] = (e[o + s] + 256 - e[o + s - a]) & 255;
                                if (3 == f) {
                                    for (var s = 0; s < i; s++) r[l + s] = (e[o + s] + 256 - (e[o + s - a] >> 1)) & 255;
                                    for (var s = i; s < a; s++) r[l + s] = (e[o + s] + 256 - ((e[o + s - a] + e[o + s - i]) >> 1)) & 255;
                                }
                                if (4 == f) {
                                    for (var s = 0; s < i; s++) r[l + s] = (e[o + s] + 256 - n(0, e[o + s - a], 0)) & 255;
                                    for (var s = i; s < a; s++) r[l + s] = (e[o + s] + 256 - n(e[o + s - i], e[o + s - a], e[o + s - i - a])) & 255;
                                }
                            }
                        })(i, r, v, a, t, s[c]);
                    l.push(u.deflate(i, h));
                }
                for (var h, d, g = 1000000000, c = 0; c < l.length; c++) l[c].length < g && ((d = c), (g = l[c].length));
                return l[d];
            })(i.img, f, i.bpp, i.bpl, o, e, t);
        }
    }
    function c(e, t, n, a, i) {
        for (var f = i[0], o = i[1], s = i[2], u = i[3], c = i[4], g = i[5], p = 6, w = 8, b = 255, y = 0; y < e.length; y++) for (var m = new Uint8Array(e[y]), A = m.length, U = 0; U < A; U += 4) b &= m[U + 3];
        var x = 255 != b,
            I = (function (e, t, n, a, i, f) {
                for (var o = [], l = 0; l < e.length; l++) {
                    var s,
                        u = new Uint8Array(e[l]),
                        c = new Uint32Array(u.buffer),
                        d = 0,
                        g = 0,
                        p = t,
                        w = n,
                        b = a ? 1 : 0;
                    if (0 != l) {
                        for (var y = f || a || 1 == l || 0 != o[l - 2].dispose ? 1 : 2, m = 0, A = 1000000000, U = 0; U < y; U++) {
                            for (var x = new Uint8Array(e[l - 1 - U]), I = new Uint32Array(e[l - 1 - U]), S = t, M = n, R = -1, C = -1, N = 0; N < n; N++)
                                for (var T = 0; T < t; T++) {
                                    var E = N * t + T;
                                    c[E] != I[E] && (T < S && (S = T), T > R && (R = T), N < M && (M = N), N > C && (C = N));
                                }
                            -1 == R && (S = M = R = C = 0), i && ((1 & S) == 1 && S--, (1 & M) == 1 && M--);
                            var D = (R - S + 1) * (C - M + 1);
                            D < A && ((A = D), (m = U), (d = S), (g = M), (p = R - S + 1), (w = C - M + 1));
                        }
                        var x = new Uint8Array(e[l - 1 - m]);
                        1 == m && (o[l - 1].dispose = 2),
                            r(x, t, n, (s = new Uint8Array(p * w * 4)), p, w, -d, -g, 0),
                            1 == (b = r(u, t, n, s, p, w, -d, -g, 3) ? 1 : 0)
                                ? h(u, t, n, s, {
                                      x: d,
                                      y: g,
                                      width: p,
                                      height: w
                                  })
                                : r(u, t, n, s, p, w, -d, -g, 0);
                    } else s = u.slice(0);
                    o.push({
                        rect: {
                            x: d,
                            y: g,
                            width: p,
                            height: w
                        },
                        img: s,
                        blend: b,
                        dispose: 0
                    });
                }
                if (a)
                    for (var l = 0; l < o.length; l++) {
                        var O = o[l];
                        if (1 != O.blend) {
                            var L = O.rect,
                                B = o[l - 1].rect,
                                k = Math.min(L.x, B.x),
                                q = Math.min(L.y, B.y),
                                P = {
                                    x: k,
                                    y: q,
                                    width: Math.max(L.x + L.width, B.x + B.width) - k,
                                    height: Math.max(L.y + L.height, B.y + B.height) - q
                                };
                            (o[l - 1].dispose = 1), l - 1 != 0 && v(e, t, n, o, l - 1, P, i), v(e, t, n, o, l, P, i);
                        }
                    }
                if (1 != e.length)
                    for (var E = 0; E < o.length; E++) {
                        var O = o[E];
                        O.rect.width, O.rect.height;
                    }
                return o;
            })(e, t, n, f, o, s),
            S = {},
            M = [],
            R = [];
        if (0 != a) {
            for (var C = [], U = 0; U < I.length; U++) C.push(I[U].img.buffer);
            for (
                var N = d(
                        (function (r) {
                            for (var e = 0, t = 0; t < r.length; t++) e += r[t].byteLength;
                            for (var n = new Uint8Array(e), a = 0, t = 0; t < r.length; t++) {
                                for (var i = new Uint8Array(r[t]), f = i.length, o = 0; o < f; o += 4) {
                                    var l = i[o],
                                        s = i[o + 1],
                                        u = i[o + 2],
                                        c = i[o + 3];
                                    0 == c && (l = s = u = 0), (n[a + o] = l), (n[a + o + 1] = s), (n[a + o + 2] = u), (n[a + o + 3] = c);
                                }
                                a += f;
                            }
                            return n.buffer;
                        })(C),
                        a
                    ),
                    U = 0;
                U < N.plte.length;
                U++
            )
                M.push(N.plte[U].est.rgba);
            for (var T = 0, U = 0; U < I.length; U++) {
                var E = I[U],
                    D = E.img.length,
                    O = new Uint8Array(N.inds.buffer, T >> 2, D >> 2);
                R.push(O);
                var L = new Uint8Array(N.abuf, T, D);
                g && l(E.img, E.rect.width, E.rect.height, M, L, O), E.img.set(L), (T += D);
            }
        } else
            for (var y = 0; y < I.length; y++) {
                var E = I[y],
                    B = new Uint32Array(E.img.buffer),
                    k = E.rect.width,
                    A = B.length,
                    O = new Uint8Array(A);
                R.push(O);
                for (var U = 0; U < A; U++) {
                    var q = B[U];
                    if (0 != U && q == B[U - 1]) O[U] = O[U - 1];
                    else if (U > k && q == B[U - k]) O[U] = O[U - k];
                    else {
                        var P = S[q];
                        if (null == P && ((S[q] = P = M.length), M.push(q), M.length >= 300)) break;
                        O[U] = P;
                    }
                }
            }
        var _ = M.length;
        _ <= 256 && !1 == c && (w = Math.max((w = _ <= 2 ? 1 : _ <= 4 ? 2 : _ <= 16 ? 4 : 8), u));
        for (var y = 0; y < I.length; y++) {
            var E = I[y],
                k = (E.rect.x, E.rect.y, E.rect.width),
                F = E.rect.height,
                H = E.img;
            new Uint32Array(H.buffer);
            var G = 4 * k,
                z = 4;
            if (_ <= 256 && !1 == c) {
                for (var Y = new Uint8Array((G = Math.ceil((w * k) / 8)) * F), Z = R[y], j = 0; j < F; j++) {
                    var U = j * G,
                        K = j * k;
                    if (8 == w) for (var V = 0; V < k; V++) Y[U + V] = Z[K + V];
                    else if (4 == w) for (var V = 0; V < k; V++) Y[U + (V >> 1)] |= Z[K + V] << (4 - (1 & V) * 4);
                    else if (2 == w) for (var V = 0; V < k; V++) Y[U + (V >> 2)] |= Z[K + V] << (6 - (3 & V) * 2);
                    else if (1 == w) for (var V = 0; V < k; V++) Y[U + (V >> 3)] |= Z[K + V] << (7 - (7 & V) * 1);
                }
                (H = Y), (p = 3), (z = 1);
            } else if (!1 == x && 1 == I.length) {
                for (var Y = new Uint8Array(k * F * 3), X = k * F, U = 0; U < X; U++) {
                    var W = 3 * U,
                        J = 4 * U;
                    (Y[W] = H[J]), (Y[W + 1] = H[J + 1]), (Y[W + 2] = H[J + 2]);
                }
                (H = Y), (p = 2), (z = 3), (G = 3 * k);
            }
            (E.img = H), (E.bpl = G), (E.bpp = z);
        }
        return {
            ctype: p,
            depth: w,
            plte: M,
            frames: I
        };
    }
    function v(e, t, n, a, i, f, o) {
        for (var l = Uint8Array, s = Uint32Array, u = new l(e[i - 1]), c = new s(e[i - 1]), v = i + 1 < e.length ? new l(e[i + 1]) : null, d = new l(e[i]), g = new s(d.buffer), p = t, w = n, b = -1, y = -1, m = 0; m < f.height; m++)
            for (var A = 0; A < f.width; A++) {
                var U = f.x + A,
                    x = f.y + m,
                    I = x * t + U,
                    S = g[I];
                0 == S || (0 == a[i - 1].dispose && c[I] == S && (null == v || 0 != v[4 * I + 3])) || (U < p && (p = U), U > b && (b = U), x < w && (w = x), x > y && (y = x));
            }
        -1 == b && (p = w = b = y = 0),
            o && ((1 & p) == 1 && p--, (1 & w) == 1 && w--),
            (f = {
                x: p,
                y: w,
                width: b - p + 1,
                height: y - w + 1
            });
        var M = a[i];
        (M.rect = f), (M.blend = 1), (M.img = new Uint8Array(f.width * f.height * 4)), 0 == a[i - 1].dispose ? (r(u, t, n, M.img, f.width, f.height, -f.x, -f.y, 0), h(d, t, n, M.img, f)) : r(d, t, n, M.img, f.width, f.height, -f.x, -f.y, 0);
    }
    function h(e, t, n, a, i) {
        r(e, t, n, a, i.width, i.height, -i.x, -i.y, 2);
    }
    function d(r, e, t) {
        Date.now();
        for (var n = new Uint8Array(r), a = n.slice(0), i = new Uint32Array(a.buffer), f = w(a, e), o = f[0], l = f[1], s = l.length, u = new Uint32Array(s), c = new Uint8Array(u.buffer), v = 0; v < s; v++) u[v] = l[v].est.rgba;
        var h,
            d = n.length,
            m = new Uint8Array(d >> 2);
        if (s <= 60) p(n, m, c), g(m, i, u);
        else if (n.length < 32000000)
            for (var v = 0; v < d; v += 4) {
                var A = n[v] * (1 / 255),
                    U = n[v + 1] * (1 / 255),
                    x = n[v + 2] * (1 / 255),
                    I = n[v + 3] * (1 / 255);
                (h = b(o, A, U, x, I)), (m[v >> 2] = h.ind), (i[v >> 2] = h.est.rgba);
            }
        else
            for (var v = 0; v < d; v += 4) {
                var A = n[v] * (1 / 255),
                    U = n[v + 1] * (1 / 255),
                    x = n[v + 2] * (1 / 255),
                    I = n[v + 3] * (1 / 255);
                for (h = o; h.left; ) h = 0 >= y(h.est, A, U, x, I) ? h.left : h.right;
                (m[v >> 2] = h.ind), (i[v >> 2] = h.est.rgba);
            }
        if (t || n.length * s < 10 * 4000000) {
            for (var S = 1000000000, v = 0; v < 10; v++) {
                var M,
                    R,
                    C,
                    N =
                        ((function (r, e, t) {
                            for (var n = t.length >>> 2, a = new Uint32Array(4 * n), i = new Uint32Array(n), f = 0; f < r.length; f += 4) {
                                var o = e[f >>> 2],
                                    l = 4 * o;
                                i[o]++, (a[l] += r[f]), (a[l + 1] += r[f + 1]), (a[l + 2] += r[f + 2]), (a[l + 3] += r[f + 3]);
                            }
                            for (var f = 0; f < t.length; f++) t[f] = Math.round(a[f] / i[f >>> 2]);
                        })((M = n), (R = m), (C = c)),
                        p(M, R, C));
                if (N / S > 0.997) break;
                S = N;
            }
            for (var v = 0; v < s; v++) l[v].est.rgba = u[v];
            g(m, i, u);
        }
        return {
            abuf: a.buffer,
            inds: m,
            plte: l
        };
    }
    function g(r, e, t) {
        for (var n = 0; n < r.length; n++) e[n] = t[r[n]];
    }
    function p(r, e, t) {
        for (var n = 0, a = t.length >>> 2, i = [], f = 0; f < a; f++) {
            for (var o = 4 * f, l = t[o], s = t[o + 1], u = t[o + 2], c = t[o + 3], v = 0, h = 1000000000, d = 0; d < a; d++)
                if (f != d) {
                    var g = 4 * d,
                        p = l - t[g],
                        w = s - t[g + 1],
                        b = u - t[g + 2],
                        y = c - t[g + 3],
                        m = p * p + w * w + b * b + y * y;
                    m < h && ((h = m), (v = d));
                }
            (i[f] = 0.5 * Math.sqrt(h)), (i[f] = i[f] * i[f]);
        }
        for (var f = 0; f < r.length; f += 4) {
            var l = r[f],
                s = r[f + 1],
                u = r[f + 2],
                c = r[f + 3],
                v = e[f >>> 2],
                o = 4 * v,
                p = l - t[o],
                w = s - t[o + 1],
                b = u - t[o + 2],
                y = c - t[o + 3],
                h = p * p + w * w + b * b + y * y;
            if (h > i[v])
                for (var d = 0; d < a; d++) {
                    (p = l - t[(o = 4 * d)]), (w = s - t[o + 1]);
                    var m = p * p + w * w + (b = u - t[o + 2]) * b + (y = c - t[o + 3]) * y;
                    if (m < h && ((h = m), (v = d), h < i[d])) break;
                }
            (e[f >>> 2] = v), (n += h);
        }
        return n / (r.length >>> 2);
    }
    function w(r, e, t) {
        null == t && (t = 0.0001);
        var n = new Uint32Array(r.buffer),
            a = {
                i0: 0,
                i1: r.length,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
        (a.bst = A(r, a.i0, a.i1)), (a.est = U(a.bst));
        for (var i = [a]; i.length < e; ) {
            for (var f = 0, o = 0, l = 0; l < i.length; l++) i[l].est.L > f && ((f = i[l].est.L), (o = l));
            if (f < t) break;
            var s = i[o],
                u = (function (r, e, t, n, a, i) {
                    for (n -= 4; t < n; ) {
                        for (; m(r, t, a) <= i; ) t += 4;
                        for (; m(r, n, a) > i; ) n -= 4;
                        if (t >= n) break;
                        var f = e[t >> 2];
                        (e[t >> 2] = e[n >> 2]), (e[n >> 2] = f), (t += 4), (n -= 4);
                    }
                    for (; m(r, t, a) > i; ) t -= 4;
                    return t + 4;
                })(r, n, s.i0, s.i1, s.est.e, s.est.eMq255);
            if (s.i0 >= u || s.i1 <= u) {
                s.est.L = 0;
                continue;
            }
            var c = {
                i0: s.i0,
                i1: u,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            (c.bst = A(r, c.i0, c.i1)), (c.est = U(c.bst));
            var v = {
                i0: u,
                i1: s.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            v.bst = {
                R: [],
                m: [],
                N: s.bst.N - c.bst.N
            };
            for (var l = 0; l < 16; l++) v.bst.R[l] = s.bst.R[l] - c.bst.R[l];
            for (var l = 0; l < 4; l++) v.bst.m[l] = s.bst.m[l] - c.bst.m[l];
            (v.est = U(v.bst)), (s.left = c), (s.right = v), (i[o] = c), i.push(v);
        }
        i.sort(function (r, e) {
            return e.bst.N - r.bst.N;
        });
        for (var l = 0; l < i.length; l++) i[l].ind = l;
        return [a, i];
    }
    function b(r, e, t, n, a) {
        if (null == r.left) {
            var i, f, o, l, s, u, c, v, h;
            return (r.tdst = ((i = r.est.q), (f = e), (o = t), (l = n), (s = a), (u = f - i[0]), (c = o - i[1]), (v = l - i[2]), u * u + c * c + v * v + (h = s - i[3]) * h)), r;
        }
        var d = y(r.est, e, t, n, a),
            g = r.left,
            p = r.right;
        d > 0 && ((g = r.right), (p = r.left));
        var w = b(g, e, t, n, a);
        if (w.tdst <= d * d) return w;
        var m = b(p, e, t, n, a);
        return m.tdst < w.tdst ? m : w;
    }
    function y(r, e, t, n, a) {
        var i = r.e;
        return i[0] * e + i[1] * t + i[2] * n + i[3] * a - r.eMq;
    }
    function m(r, e, t) {
        return r[e] * t[0] + r[e + 1] * t[1] + r[e + 2] * t[2] + r[e + 3] * t[3];
    }
    function A(r, e, t) {
        for (var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], a = [0, 0, 0, 0], i = e; i < t; i += 4) {
            var f = r[i] * (1 / 255),
                o = r[i + 1] * (1 / 255),
                l = r[i + 2] * (1 / 255),
                s = r[i + 3] * (1 / 255);
            (a[0] += f), (a[1] += o), (a[2] += l), (a[3] += s), (n[0] += f * f), (n[1] += f * o), (n[2] += f * l), (n[3] += f * s), (n[5] += o * o), (n[6] += o * l), (n[7] += o * s), (n[10] += l * l), (n[11] += l * s), (n[15] += s * s);
        }
        return (
            (n[4] = n[1]),
            (n[8] = n[2]),
            (n[9] = n[6]),
            (n[12] = n[3]),
            (n[13] = n[7]),
            (n[14] = n[11]),
            {
                R: n,
                m: a,
                N: (t - e) >> 2
            }
        );
    }
    function U(r) {
        var e = r.R,
            t = r.m,
            n = r.N,
            a = t[0],
            i = t[1],
            f = t[2],
            o = t[3],
            l = 0 == n ? 0 : 1 / n,
            s = [e[0] - a * a * l, e[1] - a * i * l, e[2] - a * f * l, e[3] - a * o * l, e[4] - i * a * l, e[5] - i * i * l, e[6] - i * f * l, e[7] - i * o * l, e[8] - f * a * l, e[9] - f * i * l, e[10] - f * f * l, e[11] - f * o * l, e[12] - o * a * l, e[13] - o * i * l, e[14] - o * f * l, e[15] - o * o * l],
            u = [Math.random(), Math.random(), Math.random(), Math.random()],
            c = 0,
            v = 0;
        if (0 != n) for (var h = 0; h < 16 && ((u = x.multVec(s, u)), (v = Math.sqrt(x.dot(u, u))), (u = x.sml(1 / v, u)), !(0 != h && 1e-9 > Math.abs(v - c))); h++) c = v;
        var d = [a * l, i * l, f * l, o * l],
            g = x.dot(x.sml(255, d), u);
        return {
            Cov: s,
            q: d,
            e: u,
            L: c,
            eMq255: g,
            eMq: x.dot(u, d),
            rgba: ((Math.round(255 * d[3]) << 24) | (Math.round(255 * d[2]) << 16) | (Math.round(255 * d[1]) << 8) | (Math.round(255 * d[0]) << 0)) >>> 0
        };
    }
    var x = {
        multVec: function (r, e) {
            return [r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3], r[4] * e[0] + r[5] * e[1] + r[6] * e[2] + r[7] * e[3], r[8] * e[0] + r[9] * e[1] + r[10] * e[2] + r[11] * e[3], r[12] * e[0] + r[13] * e[1] + r[14] * e[2] + r[15] * e[3]];
        },
        dot: function (r, e) {
            return r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3];
        },
        sml: function (r, e) {
            return [r * e[0], r * e[1], r * e[2], r * e[3]];
        }
    };
    (e.encode = function (r, e, t, n, a, i, f) {
        null == n && (n = 0), null == f && (f = !1);
        var o = c(r, e, t, n, [!1, !1, !1, 0, f, !1]);
        return u(o, -1), s(o, e, t, a, i);
    }),
        (e.encodeLL = function (r, e, t, n, a, i, f, o) {
            var l = {
                ctype: 0 + (1 == n ? 0 : 2) + (0 == a ? 0 : 4),
                depth: i,
                frames: []
            };
            Date.now();
            for (var c = (n + a) * i, v = c * e, h = 0; h < r.length; h++)
                l.frames.push({
                    rect: {
                        x: 0,
                        y: 0,
                        width: e,
                        height: t
                    },
                    img: new Uint8Array(r[h]),
                    blend: 0,
                    dispose: 1,
                    bpp: Math.ceil(c / 8),
                    bpl: Math.ceil(v / 8)
                });
            return u(l, 0, !0), s(l, e, t, f, o);
        }),
        (e.encode.compress = c),
        (e.encode.dither = l),
        (e.quantize = d),
        (e.quantize.findNearest = p),
        (e.quantize.getKDtree = w),
        (e.quantize.getNearest = b);
})(),
    (r.exports = e);
