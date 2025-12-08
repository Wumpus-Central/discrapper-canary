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
            return 16777216 * e[t] + ((e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]);
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
            for (var i, a = "", o = 0; o < r; o++) a += "%" + e.pad(t[n + o].toString(16));
            try {
                i = decodeURIComponent(a);
            } catch (i) {
                return e.readASCII(t, n, r);
            }
            return i;
        },
    };
    function t(e) {
        var t = e.width,
            r = e.height;
        if (null == e.tabs.acTL) return [n(e.data, t, r, e).buffer];
        var i = [];
        null == e.frames[0].data && (e.frames[0].data = e.data);
        for (
            var a = t * r * 4, o = new Uint8Array(a), s = new Uint8Array(a), l = new Uint8Array(a), c = 0;
            c < e.frames.length;
            c++
        ) {
            var u = e.frames[c],
                d = u.rect.x,
                p = u.rect.y,
                _ = u.rect.width,
                m = u.rect.height,
                h = n(u.data, _, m, e);
            if (0 != c) for (var g = 0; g < a; g++) l[g] = o[g];
            if (
                (0 == u.blend ? f(h, _, m, o, t, r, d, p, 0) : 1 == u.blend && f(h, _, m, o, t, r, d, p, 1),
                i.push(o.buffer.slice(0)),
                0 == u.dispose)
            );
            else if (1 == u.dispose) f(s, _, m, o, t, r, d, p, 0);
            else if (2 == u.dispose) for (var g = 0; g < a; g++) o[g] = l[g];
        }
        return i;
    }
    function n(t, n, r, i) {
        var a = n * r,
            o = Math.ceil((n * l(i)) / 8),
            s = new Uint8Array(4 * a),
            c = new Uint32Array(s.buffer),
            u = i.ctype,
            d = i.depth,
            f = e.readUshort;
        if ((Date.now(), 6 == u)) {
            var p = a << 2;
            if (8 == d)
                for (var _ = 0; _ < p; _ += 4)
                    (s[_] = t[_]), (s[_ + 1] = t[_ + 1]), (s[_ + 2] = t[_ + 2]), (s[_ + 3] = t[_ + 3]);
            if (16 == d) for (var _ = 0; _ < p; _++) s[_] = t[_ << 1];
        } else if (2 == u) {
            var m = i.tabs.tRNS;
            if (null == m) {
                if (8 == d)
                    for (var _ = 0; _ < a; _++) {
                        var h = 3 * _;
                        c[_] = -16777216 | (t[h + 2] << 16) | (t[h + 1] << 8) | t[h];
                    }
                if (16 == d)
                    for (var _ = 0; _ < a; _++) {
                        var h = 6 * _;
                        c[_] = -16777216 | (t[h + 4] << 16) | (t[h + 2] << 8) | t[h];
                    }
            } else {
                var g = m[0],
                    E = m[1],
                    b = m[2];
                if (8 == d)
                    for (var _ = 0; _ < a; _++) {
                        var y = _ << 2,
                            h = 3 * _;
                        (c[_] = -16777216 | (t[h + 2] << 16) | (t[h + 1] << 8) | t[h]),
                            t[h] == g && t[h + 1] == E && t[h + 2] == b && (s[y + 3] = 0);
                    }
                if (16 == d)
                    for (var _ = 0; _ < a; _++) {
                        var y = _ << 2,
                            h = 6 * _;
                        (c[_] = -16777216 | (t[h + 4] << 16) | (t[h + 2] << 8) | t[h]),
                            f(t, h) == g && f(t, h + 2) == E && f(t, h + 4) == b && (s[y + 3] = 0);
                    }
            }
        } else if (3 == u) {
            var O = i.tabs.PLTE,
                v = i.tabs.tRNS,
                S = v ? v.length : 0;
            if (1 == d)
                for (var I = 0; I < r; I++)
                    for (var T = I * o, A = I * n, _ = 0; _ < n; _++) {
                        var y = (A + _) << 2,
                            C = (t[T + (_ >> 3)] >> (7 - (7 & _))) & 1,
                            N = 3 * C;
                        (s[y] = O[N]), (s[y + 1] = O[N + 1]), (s[y + 2] = O[N + 2]), (s[y + 3] = C < S ? v[C] : 255);
                    }
            if (2 == d)
                for (var I = 0; I < r; I++)
                    for (var T = I * o, A = I * n, _ = 0; _ < n; _++) {
                        var y = (A + _) << 2,
                            C = (t[T + (_ >> 2)] >> (6 - ((3 & _) << 1))) & 3,
                            N = 3 * C;
                        (s[y] = O[N]), (s[y + 1] = O[N + 1]), (s[y + 2] = O[N + 2]), (s[y + 3] = C < S ? v[C] : 255);
                    }
            if (4 == d)
                for (var I = 0; I < r; I++)
                    for (var T = I * o, A = I * n, _ = 0; _ < n; _++) {
                        var y = (A + _) << 2,
                            C = (t[T + (_ >> 1)] >> (4 - ((1 & _) << 2))) & 15,
                            N = 3 * C;
                        (s[y] = O[N]), (s[y + 1] = O[N + 1]), (s[y + 2] = O[N + 2]), (s[y + 3] = C < S ? v[C] : 255);
                    }
            if (8 == d)
                for (var _ = 0; _ < a; _++) {
                    var y = _ << 2,
                        C = t[_],
                        N = 3 * C;
                    (s[y] = O[N]), (s[y + 1] = O[N + 1]), (s[y + 2] = O[N + 2]), (s[y + 3] = C < S ? v[C] : 255);
                }
        } else if (4 == u) {
            if (8 == d)
                for (var _ = 0; _ < a; _++) {
                    var y = _ << 2,
                        P = _ << 1,
                        R = t[P];
                    (s[y] = R), (s[y + 1] = R), (s[y + 2] = R), (s[y + 3] = t[P + 1]);
                }
            if (16 == d)
                for (var _ = 0; _ < a; _++) {
                    var y = _ << 2,
                        P = _ << 2,
                        R = t[P];
                    (s[y] = R), (s[y + 1] = R), (s[y + 2] = R), (s[y + 3] = t[P + 2]);
                }
        } else if (0 == u)
            for (var g = i.tabs.tRNS ? i.tabs.tRNS : -1, I = 0; I < r; I++) {
                var w = I * o,
                    D = I * n;
                if (1 == d)
                    for (var x = 0; x < n; x++) {
                        var R = 255 * ((t[w + (x >>> 3)] >>> (7 - (7 & x))) & 1),
                            L = 255 * (R != 255 * g);
                        c[D + x] = (L << 24) | (R << 16) | (R << 8) | R;
                    }
                else if (2 == d)
                    for (var x = 0; x < n; x++) {
                        var R = 85 * ((t[w + (x >>> 2)] >>> (6 - ((3 & x) << 1))) & 3),
                            L = 255 * (R != 85 * g);
                        c[D + x] = (L << 24) | (R << 16) | (R << 8) | R;
                    }
                else if (4 == d)
                    for (var x = 0; x < n; x++) {
                        var R = 17 * ((t[w + (x >>> 1)] >>> (4 - ((1 & x) << 2))) & 15),
                            L = 255 * (R != 17 * g);
                        c[D + x] = (L << 24) | (R << 16) | (R << 8) | R;
                    }
                else if (8 == d)
                    for (var x = 0; x < n; x++) {
                        var R = t[w + x],
                            L = 255 * (R != g);
                        c[D + x] = (L << 24) | (R << 16) | (R << 8) | R;
                    }
                else if (16 == d)
                    for (var x = 0; x < n; x++) {
                        var R = t[w + (x << 1)],
                            L = 255 * (f(t, w + (x << 1)) != g);
                        c[D + x] = (L << 24) | (R << 16) | (R << 8) | R;
                    }
            }
        return s;
    }
    function r(t) {
        for (
            var n,
                r = new Uint8Array(t),
                s = 8,
                l = e,
                c = l.readUshort,
                u = l.readUint,
                f = {
                    tabs: {},
                    frames: [],
                },
                p = new Uint8Array(r.length),
                _ = 0,
                m = 0,
                h = [137, 80, 78, 71, 13, 10, 26, 10],
                g = 0;
            g < 8;
            g++
        )
            if (r[g] != h[g]) throw "The input is not a PNG file!";
        for (; s < r.length; ) {
            var E = l.readUint(r, s);
            s += 4;
            var b = l.readASCII(r, s, 4);
            if (((s += 4), "IHDR" == b)) d(r, s, f);
            else if ("iCCP" == b) {
                for (var y = s; 0 != r[y]; ) y++;
                l.readASCII(r, s, y - s), r[y + 1];
                var O = r.slice(y + 2, s + E),
                    v = null;
                try {
                    v = a(O);
                } catch (e) {
                    v = o(O);
                }
                f.tabs[b] = v;
            } else if ("CgBI" == b) f.tabs[b] = r.slice(s, s + 4);
            else if ("IDAT" == b) {
                for (var g = 0; g < E; g++) p[_ + g] = r[s + g];
                _ += E;
            } else if ("acTL" == b)
                (f.tabs[b] = {
                    num_frames: u(r, s),
                    num_plays: u(r, s + 4),
                }),
                    (n = new Uint8Array(r.length));
            else if ("fcTL" == b) {
                if (0 != m) {
                    var S = f.frames[f.frames.length - 1];
                    (S.data = i(f, n.slice(0, m), S.rect.width, S.rect.height)), (m = 0);
                }
                var I = {
                        x: u(r, s + 12),
                        y: u(r, s + 16),
                        width: u(r, s + 4),
                        height: u(r, s + 8),
                    },
                    T = c(r, s + 22),
                    A = {
                        rect: I,
                        delay: 1000 * (T = c(r, s + 20) / (0 == T ? 100 : T)),
                        dispose: r[s + 24],
                        blend: r[s + 25],
                    };
                f.frames.push(A);
            } else if ("fdAT" == b) {
                for (var g = 0; g < E - 4; g++) n[m + g] = r[s + g + 4];
                m += E - 4;
            } else if ("pHYs" == b) f.tabs[b] = [l.readUint(r, s), l.readUint(r, s + 4), r[s + 8]];
            else if ("cHRM" == b) {
                f.tabs[b] = [];
                for (var g = 0; g < 8; g++) f.tabs[b].push(l.readUint(r, s + 4 * g));
            } else if ("tEXt" == b || "zTXt" == b) {
                null == f.tabs[b] && (f.tabs[b] = {});
                var C,
                    N = l.nextZero(r, s),
                    P = l.readASCII(r, s, N - s),
                    R = s + E - N - 1;
                if ("tEXt" == b) C = l.readASCII(r, N + 1, R);
                else {
                    var w = a(r.slice(N + 2, N + 2 + R));
                    C = l.readUTF8(w, 0, w.length);
                }
                f.tabs[b][P] = C;
            } else if ("iTXt" == b) {
                null == f.tabs[b] && (f.tabs[b] = {});
                var N = 0,
                    y = s;
                N = l.nextZero(r, y);
                var P = l.readASCII(r, y, N - y),
                    D = r[(y = N + 1)];
                r[y + 1],
                    (y += 2),
                    (N = l.nextZero(r, y)),
                    l.readASCII(r, y, N - y),
                    (y = N + 1),
                    (N = l.nextZero(r, y)),
                    l.readUTF8(r, y, N - y);
                var C,
                    R = E - ((y = N + 1) - s);
                if (0 == D) C = l.readUTF8(r, y, R);
                else {
                    var w = a(r.slice(y, y + R));
                    C = l.readUTF8(w, 0, w.length);
                }
                f.tabs[b][P] = C;
            } else if ("PLTE" == b) f.tabs[b] = l.readBytes(r, s, E);
            else if ("hIST" == b) {
                var x = f.tabs.PLTE.length / 3;
                f.tabs[b] = [];
                for (var g = 0; g < x; g++) f.tabs[b].push(c(r, s + 2 * g));
            } else if ("tRNS" == b)
                3 == f.ctype
                    ? (f.tabs[b] = l.readBytes(r, s, E))
                    : 0 == f.ctype
                      ? (f.tabs[b] = c(r, s))
                      : 2 == f.ctype && (f.tabs[b] = [c(r, s), c(r, s + 2), c(r, s + 4)]);
            else if ("gAMA" == b) f.tabs[b] = l.readUint(r, s) / 100000;
            else if ("sRGB" == b) f.tabs[b] = r[s];
            else if ("bKGD" == b)
                0 == f.ctype || 4 == f.ctype
                    ? (f.tabs[b] = [c(r, s)])
                    : 2 == f.ctype || 6 == f.ctype
                      ? (f.tabs[b] = [c(r, s), c(r, s + 2), c(r, s + 4)])
                      : 3 == f.ctype && (f.tabs[b] = r[s]);
            else if ("IEND" == b) break;
            (s += E), l.readUint(r, s), (s += 4);
        }
        if (0 != m) {
            var S = f.frames[f.frames.length - 1];
            S.data = i(f, n.slice(0, m), S.rect.width, S.rect.height);
        }
        return (f.data = i(f, p, f.width, f.height)), delete f.compress, delete f.interlace, delete f.filter, f;
    }
    function i(e, t, n, r) {
        var i = Date.now(),
            u = new Uint8Array((Math.ceil((n * l(e)) / 8) + 1 + e.interlace) * r);
        t = e.tabs.CgBI ? o(t, u) : a(t, u);
        var i = Date.now();
        return 0 == e.interlace ? (t = c(t, e, 0, n, r)) : 1 == e.interlace && (t = s(t, e)), t;
    }
    function a(e, t) {
        return o(new Uint8Array(e.buffer, 2, e.length - 6), t);
    }
    var o = (function () {
        var e = (function () {
            var e = Uint16Array,
                t = Uint32Array;
            return {
                m: new e(16),
                v: new e(16),
                d: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                o: [
                    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163,
                    195, 227, 258, 999, 999, 999,
                ],
                z: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                B: new e(32),
                p: [
                    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049,
                    3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535,
                ],
                w: [
                    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0,
                    0,
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
                u: new t(15000),
                q: new e(65536),
                j: new e(32768),
            };
        })();
        function t(t, n) {
            for (var r, i, a, o, s, l = t.length, c = e.v, o = 0; o <= n; o++) c[o] = 0;
            for (o = 1; o < l; o += 2) c[t[o]]++;
            var u = e.m;
            for (i = 1, r = 0, c[0] = 0; i <= n; i++) (r = (r + c[i - 1]) << 1), (u[i] = r);
            for (a = 0; a < l; a += 2) 0 != (s = t[a + 1]) && ((t[a] = u[s]), u[s]++);
        }
        function n(t, n, r) {
            for (var i = t.length, a = e.i, o = 0; o < i; o += 2)
                if (0 != t[o + 1])
                    for (
                        var s = o >> 1, l = t[o + 1], c = (s << 4) | l, u = n - l, d = t[o] << u, f = d + (1 << u);
                        d != f;
                    )
                        (r[a[d] >>> (15 - n)] = c), d++;
        }
        function r(t, n) {
            for (var r = e.i, i = 15 - n, a = 0; a < t.length; a += 2) {
                var o = t[a] << (n - t[a + 1]);
                t[a] = r[o] >>> i;
            }
        }
        function i(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function a(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function o(e, t) {
            return (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t);
        }
        function s(e, t) {
            var n = e.length;
            if (t <= n) return e;
            var r = new Uint8Array(Math.max(n << 1, t));
            return r.set(e, 0), r;
        }
        function l(e, t, n, r, a, s) {
            for (var l = 0; l < n; ) {
                var c = e[o(r, a) & t];
                a += 15 & c;
                var u = c >>> 4;
                if (u <= 15) (s[l] = u), l++;
                else {
                    var d = 0,
                        f = 0;
                    16 == u
                        ? ((f = 3 + i(r, a, 2)), (a += 2), (d = s[l - 1]))
                        : 17 == u
                          ? ((f = 3 + i(r, a, 3)), (a += 3))
                          : 18 == u && ((f = 11 + i(r, a, 7)), (a += 7));
                    for (var p = l + f; l < p; ) (s[l] = d), l++;
                }
            }
            return a;
        }
        function c(e, t, n, r) {
            for (var i = 0, a = 0, o = r.length >>> 1; a < n; ) {
                var s = e[a + t];
                (r[a << 1] = 0), (r[(a << 1) + 1] = s), s > i && (i = s), a++;
            }
            for (; a < o; ) (r[a << 1] = 0), (r[(a << 1) + 1] = 0), a++;
            return i;
        }
        return (
            !(function () {
                for (var i = 32768, a = 0; a < i; a++) {
                    var o = a;
                    (o =
                        ((4278255360 &
                            (o =
                                ((4042322160 &
                                    (o =
                                        ((3435973836 & (o = ((2863311530 & o) >>> 1) | ((1431655765 & o) << 1))) >>>
                                            2) |
                                        ((858993459 & o) << 2))) >>>
                                    4) |
                                ((252645135 & o) << 4))) >>>
                            8) |
                        ((16711935 & o) << 8)),
                        (e.i[a] = ((o >>> 16) | (o << 16)) >>> 17);
                }
                function s(e, t, n) {
                    for (; 0 != t--; ) e.push(0, n);
                }
                for (var a = 0; a < 32; a++) (e.B[a] = (e.o[a] << 3) | e.z[a]), (e.h[a] = (e.p[a] << 4) | e.w[a]);
                s(e.s, 144, 8),
                    s(e.s, 112, 9),
                    s(e.s, 24, 7),
                    s(e.s, 8, 8),
                    t(e.s, 9),
                    n(e.s, 9, e.g),
                    r(e.s, 9),
                    s(e.t, 32, 5),
                    t(e.t, 5),
                    n(e.t, 5, e.A),
                    r(e.t, 5),
                    s(e.b, 19, 0),
                    s(e.c, 286, 0),
                    s(e.e, 30, 0),
                    s(e.a, 320, 0);
            })(),
            function (r, u) {
                var d,
                    f,
                    p = Uint8Array,
                    _ = 0,
                    m = 0,
                    h = 0,
                    g = 0,
                    E = 0,
                    b = 0,
                    y = 0,
                    O = 0,
                    v = 0;
                if (3 == r[0] && 0 == r[1]) return u || new p(0);
                var S = null == u;
                for (S && (u = new p((r.length >>> 2) << 3)); 0 == _; ) {
                    if (((_ = a(r, v, 1)), (m = a(r, v + 1, 2)), (v += 3), 0 == m)) {
                        (7 & v) != 0 && (v += 8 - (7 & v));
                        var I = (v >>> 3) + 4,
                            T = r[I - 4] | (r[I - 3] << 8);
                        S && (u = s(u, O + T)),
                            u.set(new p(r.buffer, r.byteOffset + I, T), O),
                            (v = (I + T) << 3),
                            (O += T);
                        continue;
                    }
                    if ((S && (u = s(u, O + 131072)), 1 == m && ((d = e.g), (f = e.A), (b = 511), (y = 31)), 2 == m)) {
                        (h = i(r, v, 5) + 257), (g = i(r, v + 5, 5) + 1), (E = i(r, v + 10, 4) + 4), (v += 14);
                        for (var A = 1, C = 0; C < 38; C += 2) (e.b[C] = 0), (e.b[C + 1] = 0);
                        for (var C = 0; C < E; C++) {
                            var N = i(r, v + 3 * C, 3);
                            (e.b[(e.d[C] << 1) + 1] = N), N > A && (A = N);
                        }
                        (v += 3 * E),
                            t(e.b, A),
                            n(e.b, A, e.C),
                            (d = e.k),
                            (f = e.n),
                            (v = l(e.C, (1 << A) - 1, h + g, r, v, e.a));
                        var P = c(e.a, 0, h, e.c);
                        b = (1 << P) - 1;
                        var R = c(e.a, h, g, e.e);
                        (y = (1 << R) - 1), t(e.c, P), n(e.c, P, d), t(e.e, R), n(e.e, R, f);
                    }
                    for (;;) {
                        var w = d[o(r, v) & b];
                        v += 15 & w;
                        var D = w >>> 4;
                        if (D >>> 8 == 0) u[O++] = D;
                        else if (256 == D) break;
                        else {
                            var x = O + D - 254;
                            if (D > 264) {
                                var L = e.B[D - 257];
                                (x = O + (L >>> 3) + i(r, v, 7 & L)), (v += 7 & L);
                            }
                            var j = f[o(r, v) & y];
                            v += 15 & j;
                            var M = j >>> 4,
                                k = e.h[M],
                                U = (k >>> 4) + a(r, v, 15 & k);
                            for (v += 15 & k, S && (u = s(u, O + 131072)); O < x; )
                                (u[O] = u[O++ - U]), (u[O] = u[O++ - U]), (u[O] = u[O++ - U]), (u[O] = u[O++ - U]);
                            O = x;
                        }
                    }
                }
                return u.length == O ? u : u.slice(0, O);
            }
        );
    })();
    function s(e, t) {
        for (
            var n = t.width,
                r = t.height,
                i = l(t),
                a = i >> 3,
                o = Math.ceil((n * i) / 8),
                s = new Uint8Array(r * o),
                u = 0,
                d = [0, 0, 4, 0, 2, 0, 1],
                f = [0, 4, 0, 2, 0, 1, 0],
                p = [8, 8, 8, 4, 4, 2, 2],
                _ = [8, 8, 4, 4, 2, 2, 1],
                m = 0;
            m < 7;
        ) {
            for (var h = p[m], g = _[m], E = 0, b = 0, y = d[m]; y < r; ) (y += h), b++;
            for (var O = f[m]; O < n; ) (O += g), E++;
            var v = Math.ceil((E * i) / 8);
            c(e, t, u, E, b);
            for (var S = 0, I = d[m]; I < r; ) {
                for (var T = f[m], A = (u + S * v) << 3; T < n; ) {
                    if (1 == i) {
                        var C = e[A >> 3];
                        (C = (C >> (7 - (7 & A))) & 1), (s[I * o + (T >> 3)] |= C << (7 - (7 & T)));
                    }
                    if (2 == i) {
                        var C = e[A >> 3];
                        (C = (C >> (6 - (7 & A))) & 3), (s[I * o + (T >> 2)] |= C << (6 - ((3 & T) << 1)));
                    }
                    if (4 == i) {
                        var C = e[A >> 3];
                        (C = (C >> (4 - (7 & A))) & 15), (s[I * o + (T >> 1)] |= C << (4 - ((1 & T) << 2)));
                    }
                    if (i >= 8) for (var N = I * o + T * a, P = 0; P < a; P++) s[N + P] = e[(A >> 3) + P];
                    (A += i), (T += g);
                }
                S++, (I += h);
            }
            E * b != 0 && (u += b * (1 + v)), (m += 1);
        }
        return s;
    }
    function l(e) {
        return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
    }
    function c(e, t, n, r, i) {
        var a = l(t),
            o = Math.ceil((r * a) / 8);
        a = Math.ceil(a / 8);
        var s,
            c,
            d = e[n],
            f = 0;
        if ((d > 1 && (e[n] = [0, 0, 1][d - 2]), 3 == d))
            for (f = a; f < o; f++) e[f + 1] = (e[f + 1] + (e[f + 1 - a] >>> 1)) & 255;
        for (var p = 0; p < i; p++)
            if (((d = e[(c = (s = n + p * o) + p + 1) - 1]), (f = 0), 0 == d)) for (; f < o; f++) e[s + f] = e[c + f];
            else if (1 == d) {
                for (; f < a; f++) e[s + f] = e[c + f];
                for (; f < o; f++) e[s + f] = e[c + f] + e[s + f - a];
            } else if (2 == d) for (; f < o; f++) e[s + f] = e[c + f] + e[s + f - o];
            else if (3 == d) {
                for (; f < a; f++) e[s + f] = e[c + f] + (e[s + f - o] >>> 1);
                for (; f < o; f++) e[s + f] = e[c + f] + ((e[s + f - o] + e[s + f - a]) >>> 1);
            } else {
                for (; f < a; f++) e[s + f] = e[c + f] + u(0, e[s + f - o], 0);
                for (; f < o; f++) e[s + f] = e[c + f] + u(e[s + f - a], e[s + f - o], e[s + f - a - o]);
            }
        return e;
    }
    function u(e, t, n) {
        var r = e + t - n,
            i = r - e,
            a = r - t,
            o = r - n;
        return i * i <= a * a && i * i <= o * o ? e : a * a <= o * o ? t : n;
    }
    function d(t, n, r) {
        (r.width = e.readUint(t, n)),
            (n += 4),
            (r.height = e.readUint(t, n)),
            (r.depth = t[(n += 4)]),
            (r.ctype = t[++n]),
            (r.compress = t[++n]),
            (r.filter = t[++n]),
            (r.interlace = t[++n]),
            n++;
    }
    function f(e, t, n, r, i, a, o, s, l) {
        for (var c = Math.min(t, i), u = Math.min(n, a), d = 0, f = 0, p = 0; p < u; p++)
            for (var _ = 0; _ < c; _++)
                if (
                    (o >= 0 && s >= 0
                        ? ((d = (p * t + _) << 2), (f = ((s + p) * i + o + _) << 2))
                        : ((d = ((-s + p) * t - o + _) << 2), (f = (p * i + _) << 2)),
                    0 == l)
                )
                    (r[f] = e[d]), (r[f + 1] = e[d + 1]), (r[f + 2] = e[d + 2]), (r[f + 3] = e[d + 3]);
                else if (1 == l) {
                    var m = e[d + 3] * (1 / 255),
                        h = e[d] * m,
                        g = e[d + 1] * m,
                        E = e[d + 2] * m,
                        b = r[f + 3] * (1 / 255),
                        y = r[f] * b,
                        O = r[f + 1] * b,
                        v = r[f + 2] * b,
                        S = 1 - m,
                        I = m + b * S,
                        T = 0 == I ? 0 : 1 / I;
                    (r[f + 3] = 255 * I),
                        (r[f + 0] = (h + y * S) * T),
                        (r[f + 1] = (g + O * S) * T),
                        (r[f + 2] = (E + v * S) * T);
                } else if (2 == l) {
                    var m = e[d + 3],
                        h = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        b = r[f + 3],
                        y = r[f],
                        O = r[f + 1],
                        v = r[f + 2];
                    m == b && h == y && g == O && E == v
                        ? ((r[f] = 0), (r[f + 1] = 0), (r[f + 2] = 0), (r[f + 3] = 0))
                        : ((r[f] = h), (r[f + 1] = g), (r[f + 2] = E), (r[f + 3] = m));
                } else if (3 == l) {
                    var m = e[d + 3],
                        h = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        b = r[f + 3],
                        y = r[f],
                        O = r[f + 1],
                        v = r[f + 2];
                    if (m == b && h == y && g == O && E == v) continue;
                    if (m < 220 && b > 20) return !1;
                }
        return !0;
    }
    return {
        decode: r,
        toRGBA8: t,
        _paeth: u,
        _copyTile: f,
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
                    for (var n = t, r = 0; r < 8; r++) 1 & n ? (n = 3988292384 ^ (n >>> 1)) : (n >>>= 1);
                    e[t] = n;
                }
                return e;
            })(),
            update: function (e, t, n, r) {
                for (var a = 0; a < r; a++) e = i.table[(e ^ t[n + a]) & 255] ^ (e >>> 8);
                return e;
            },
            crc: function (e, t, n) {
                return 4294967295 ^ i.update(4294967295, e, t, n);
            },
        };
    function a(e, t, n, r) {
        (t[n] += (e[0] * r) >> 4),
            (t[n + 1] += (e[1] * r) >> 4),
            (t[n + 2] += (e[2] * r) >> 4),
            (t[n + 3] += (e[3] * r) >> 4);
    }
    function o(e) {
        return Math.max(0, Math.min(255, e));
    }
    function s(e, t) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2],
            a = e[3] - t[3];
        return n * n + r * r + i * i + a * a;
    }
    function l(e, t, n, r, i, l, c) {
        null == c && (c = 1);
        for (var u = r.length, d = [], f = [], p = 0; p < u; p++) {
            var _ = r[p];
            d.push([(_ >>> 0) & 255, (_ >>> 8) & 255, (_ >>> 16) & 255, (_ >>> 24) & 255]);
        }
        for (var p = 0; p < u; p++) {
            for (var m = 4294967295, h = 0, g = 0; g < u; g++) {
                var E = s(d[p], d[g]);
                g != p && E < m && ((m = E), (h = g));
            }
            var b = Math.sqrt(m) / 2;
            f[p] = ~~(b * b);
        }
        for (
            var y = new Uint32Array(i.buffer),
                O = new Int16Array(t * n * 4),
                v = 4,
                S = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
                p = 0;
            p < S.length;
            p++
        )
            S[p] = 255 * (-0.5 + (S[p] + 0.5) / (v * v));
        for (var I = 0; I < n; I++)
            for (var T = 0; T < t; T++) {
                var A,
                    p = (I * t + T) * 4;
                if (2 != c)
                    A = [o(e[p] + O[p]), o(e[p + 1] + O[p + 1]), o(e[p + 2] + O[p + 2]), o(e[p + 3] + O[p + 3])];
                else {
                    var E = S[(I & (v - 1)) * v + (T & (v - 1))];
                    A = [o(e[p] + E), o(e[p + 1] + E), o(e[p + 2] + E), o(e[p + 3] + E)];
                }
                for (var h = 0, C = 16777215, g = 0; g < u; g++) {
                    var N = s(A, d[g]);
                    N < C && ((C = N), (h = g));
                }
                var P = d[h],
                    R = [A[0] - P[0], A[1] - P[1], A[2] - P[2], A[3] - P[3]];
                1 == c &&
                    (T != t - 1 && a(R, O, p + 4, 7),
                    I != n - 1 &&
                        (0 != T && a(R, O, p + 4 * t - 4, 3),
                        a(R, O, p + 4 * t, 5),
                        T != t - 1 && a(R, O, p + 4 * t + 4, 1))),
                    (l[p >> 2] = h),
                    (y[p >> 2] = r[h]);
            }
    }
    function c(e, t, n, r, i, a, o, s) {
        var l = {
            ctype: 0 + 2 * (1 != r) + 4 * (0 != i),
            depth: a,
            frames: [],
        };
        Date.now();
        for (var c = (r + i) * a, f = c * t, p = 0; p < e.length; p++)
            l.frames.push({
                rect: {
                    x: 0,
                    y: 0,
                    width: t,
                    height: n,
                },
                img: new Uint8Array(e[p]),
                blend: 0,
                dispose: 1,
                bpp: Math.ceil(c / 8),
                bpl: Math.ceil(f / 8),
            });
        return d(l, 0, !0), u(l, t, n, o, s);
    }
    function u(e, t, r, a, o) {
        null == o && (o = {});
        var s,
            l = i.crc,
            c = n.writeUint,
            u = n.writeUshort,
            d = n.writeASCII,
            f = 8,
            p = e.frames.length > 1,
            _ = !1,
            m = 33 + 20 * !!p;
        if (
            (null != o.sRGB && (m += 13),
            null != o.pHYs && (m += 21),
            null != o.iCCP && (m += 21 + (s = pako.deflate(o.iCCP)).length + 4),
            3 == e.ctype)
        ) {
            for (var h = e.plte.length, g = 0; g < h; g++) e.plte[g] >>> 24 != 255 && (_ = !0);
            m += 8 + 3 * h + 4 + (_ ? 8 + +h + 4 : 0);
        }
        for (var E = 0; E < e.frames.length; E++) {
            var b = e.frames[E];
            p && (m += 38), (m += b.cimg.length + 12), 0 != E && (m += 4);
        }
        for (var y = new Uint8Array((m += 12)), O = [137, 80, 78, 71, 13, 10, 26, 10], g = 0; g < 8; g++) y[g] = O[g];
        if (
            (c(y, f, 13),
            d(y, (f += 4), "IHDR"),
            c(y, (f += 4), t),
            c(y, (f += 4), r),
            (y[(f += 4)] = e.depth),
            (y[++f] = e.ctype),
            (y[++f] = 0),
            (y[++f] = 0),
            (y[++f] = 0),
            c(y, ++f, l(y, f - 17, 17)),
            (f += 4),
            null != o.sRGB &&
                (c(y, f, 1), d(y, (f += 4), "sRGB"), (y[(f += 4)] = o.sRGB), c(y, ++f, l(y, f - 5, 5)), (f += 4)),
            null != o.iCCP)
        ) {
            var v = 13 + s.length;
            c(y, f, v),
                d(y, (f += 4), "iCCP"),
                d(y, (f += 4), "ICC profile"),
                (f += 11),
                (f += 2),
                y.set(s, f),
                c(y, (f += s.length), l(y, f - (v + 4), v + 4)),
                (f += 4);
        }
        if (
            (null != o.pHYs &&
                (c(y, f, 9),
                d(y, (f += 4), "pHYs"),
                c(y, (f += 4), o.pHYs[0]),
                c(y, (f += 4), o.pHYs[1]),
                (y[(f += 4)] = o.pHYs[2]),
                c(y, ++f, l(y, f - 13, 13)),
                (f += 4)),
            p &&
                (c(y, f, 8),
                d(y, (f += 4), "acTL"),
                c(y, (f += 4), e.frames.length),
                c(y, (f += 4), null != o.loop ? o.loop : 0),
                c(y, (f += 4), l(y, f - 12, 12)),
                (f += 4)),
            3 == e.ctype)
        ) {
            var h = e.plte.length;
            c(y, f, 3 * h), d(y, (f += 4), "PLTE"), (f += 4);
            for (var g = 0; g < h; g++) {
                var S = 3 * g,
                    I = e.plte[g],
                    T = 255 & I,
                    A = (I >>> 8) & 255,
                    C = (I >>> 16) & 255;
                (y[f + S + 0] = T), (y[f + S + 1] = A), (y[f + S + 2] = C);
            }
            if ((c(y, (f += 3 * h), l(y, f - 3 * h - 4, 3 * h + 4)), (f += 4), _)) {
                c(y, f, h), d(y, (f += 4), "tRNS"), (f += 4);
                for (var g = 0; g < h; g++) y[f + g] = (e.plte[g] >>> 24) & 255;
                c(y, (f += h), l(y, f - h - 4, h + 4)), (f += 4);
            }
        }
        for (var N = 0, E = 0; E < e.frames.length; E++) {
            var b = e.frames[E];
            p &&
                (c(y, f, 26),
                d(y, (f += 4), "fcTL"),
                c(y, (f += 4), N++),
                c(y, (f += 4), b.rect.width),
                c(y, (f += 4), b.rect.height),
                c(y, (f += 4), b.rect.x),
                c(y, (f += 4), b.rect.y),
                u(y, (f += 4), a[E]),
                u(y, (f += 2), 1000),
                (y[(f += 2)] = b.dispose),
                (y[++f] = b.blend),
                c(y, ++f, l(y, f - 30, 30)),
                (f += 4));
            var P = b.cimg,
                h = P.length;
            c(y, f, h + 4 * (0 != E));
            var R = (f += 4);
            d(y, f, 0 == E ? "IDAT" : "fdAT"),
                (f += 4),
                0 != E && (c(y, f, N++), (f += 4)),
                y.set(P, f),
                c(y, (f += h), l(y, R, f - R)),
                (f += 4);
        }
        return c(y, f, 0), d(y, (f += 4), "IEND"), c(y, (f += 4), l(y, f - 4, 4)), (f += 4), y.buffer;
    }
    function d(e, t, n) {
        for (var r = 0; r < e.frames.length; r++) {
            var i = e.frames[r],
                a = (i.rect.width, i.rect.height),
                o = new Uint8Array(a * i.bpl + a);
            i.cimg = h(i.img, a, i.bpp, i.bpl, o, t, n);
        }
    }
    function f(e, t, n, r, i) {
        for (
            var a = i[0], o = i[1], s = i[2], c = i[3], u = i[4], d = i[5], f = 6, _ = 8, m = 255, h = 0;
            h < e.length;
            h++
        )
            for (var g = new Uint8Array(e[h]), b = g.length, y = 0; y < b; y += 4) m &= g[y + 3];
        var O = 255 != m,
            v = p(e, t, n, a, o, s),
            S = {},
            I = [],
            T = [];
        if (0 != r) {
            for (var A = [], y = 0; y < v.length; y++) A.push(v[y].img.buffer);
            for (var C = E(D(A), r), y = 0; y < C.plte.length; y++) I.push(C.plte[y].est.rgba);
            for (var N = 0, y = 0; y < v.length; y++) {
                var P = v[y],
                    R = P.img.length,
                    w = new Uint8Array(C.inds.buffer, N >> 2, R >> 2);
                T.push(w);
                var x = new Uint8Array(C.abuf, N, R);
                d && l(P.img, P.rect.width, P.rect.height, I, x, w), P.img.set(x), (N += R);
            }
        } else
            for (var h = 0; h < v.length; h++) {
                var P = v[h],
                    L = new Uint32Array(P.img.buffer),
                    j = P.rect.width,
                    b = L.length,
                    w = new Uint8Array(b);
                T.push(w);
                for (var y = 0; y < b; y++) {
                    var M = L[y];
                    if (0 != y && M == L[y - 1]) w[y] = w[y - 1];
                    else if (y > j && M == L[y - j]) w[y] = w[y - j];
                    else {
                        var k = S[M];
                        if (null == k && ((S[M] = k = I.length), I.push(M), I.length >= 300)) break;
                        w[y] = k;
                    }
                }
            }
        var U = I.length;
        U <= 256 && !1 == u && (_ = Math.max((_ = U <= 2 ? 1 : U <= 4 ? 2 : U <= 16 ? 4 : 8), c));
        for (var h = 0; h < v.length; h++) {
            var P = v[h],
                j = (P.rect.x, P.rect.y, P.rect.width),
                G = P.rect.height,
                Z = P.img;
            new Uint32Array(Z.buffer);
            var B = 4 * j,
                F = 4;
            if (U <= 256 && !1 == u) {
                for (var V = new Uint8Array((B = Math.ceil((_ * j) / 8)) * G), H = T[h], Y = 0; Y < G; Y++) {
                    var y = Y * B,
                        W = Y * j;
                    if (8 == _) for (var K = 0; K < j; K++) V[y + K] = H[W + K];
                    else if (4 == _) for (var K = 0; K < j; K++) V[y + (K >> 1)] |= H[W + K] << (4 - (1 & K) * 4);
                    else if (2 == _) for (var K = 0; K < j; K++) V[y + (K >> 2)] |= H[W + K] << (6 - (3 & K) * 2);
                    else if (1 == _) for (var K = 0; K < j; K++) V[y + (K >> 3)] |= H[W + K] << (7 - (7 & K) * 1);
                }
                (Z = V), (f = 3), (F = 1);
            } else if (!1 == O && 1 == v.length) {
                for (var V = new Uint8Array(j * G * 3), z = j * G, y = 0; y < z; y++) {
                    var q = 3 * y,
                        Q = 4 * y;
                    (V[q] = Z[Q]), (V[q + 1] = Z[Q + 1]), (V[q + 2] = Z[Q + 2]);
                }
                (Z = V), (f = 2), (F = 3), (B = 3 * j);
            }
            (P.img = Z), (P.bpl = B), (P.bpp = F);
        }
        return {
            ctype: f,
            depth: _,
            plte: I,
            frames: v,
        };
    }
    function p(t, n, r, i, a, o) {
        for (var s = [], l = 0; l < t.length; l++) {
            var c,
                u = new Uint8Array(t[l]),
                d = new Uint32Array(u.buffer),
                f = 0,
                p = 0,
                h = n,
                g = r,
                E = +!!i;
            if (0 != l) {
                for (
                    var b = o || i || 1 == l || 0 != s[l - 2].dispose ? 1 : 2, y = 0, O = 1000000000, v = 0;
                    v < b;
                    v++
                ) {
                    for (
                        var S = new Uint8Array(t[l - 1 - v]),
                            I = new Uint32Array(t[l - 1 - v]),
                            T = n,
                            A = r,
                            C = -1,
                            N = -1,
                            P = 0;
                        P < r;
                        P++
                    )
                        for (var R = 0; R < n; R++) {
                            var w = P * n + R;
                            d[w] != I[w] && (R < T && (T = R), R > C && (C = R), P < A && (A = P), P > N && (N = P));
                        }
                    -1 == C && (T = A = C = N = 0), a && ((1 & T) == 1 && T--, (1 & A) == 1 && A--);
                    var D = (C - T + 1) * (N - A + 1);
                    D < O && ((O = D), (y = v), (f = T), (p = A), (h = C - T + 1), (g = N - A + 1));
                }
                var S = new Uint8Array(t[l - 1 - y]);
                1 == y && (s[l - 1].dispose = 2),
                    e(S, n, r, (c = new Uint8Array(h * g * 4)), h, g, -f, -p, 0),
                    1 == (E = +!!e(u, n, r, c, h, g, -f, -p, 3))
                        ? m(u, n, r, c, {
                              x: f,
                              y: p,
                              width: h,
                              height: g,
                          })
                        : e(u, n, r, c, h, g, -f, -p, 0);
            } else c = u.slice(0);
            s.push({
                rect: {
                    x: f,
                    y: p,
                    width: h,
                    height: g,
                },
                img: c,
                blend: E,
                dispose: 0,
            });
        }
        if (i)
            for (var l = 0; l < s.length; l++) {
                var x = s[l];
                if (1 != x.blend) {
                    var L = x.rect,
                        j = s[l - 1].rect,
                        M = Math.min(L.x, j.x),
                        k = Math.min(L.y, j.y),
                        U = Math.max(L.x + L.width, j.x + j.width),
                        G = Math.max(L.y + L.height, j.y + j.height),
                        Z = {
                            x: M,
                            y: k,
                            width: U - M,
                            height: G - k,
                        };
                    (s[l - 1].dispose = 1), l - 1 != 0 && _(t, n, r, s, l - 1, Z, a), _(t, n, r, s, l, Z, a);
                }
            }
        var B = 0;
        if (1 != t.length)
            for (var w = 0; w < s.length; w++) {
                var x = s[w];
                B += x.rect.width * x.rect.height;
            }
        return s;
    }
    function _(t, n, r, i, a, o, s) {
        for (
            var l = Uint8Array,
                c = Uint32Array,
                u = new l(t[a - 1]),
                d = new c(t[a - 1]),
                f = a + 1 < t.length ? new l(t[a + 1]) : null,
                p = new l(t[a]),
                _ = new c(p.buffer),
                h = n,
                g = r,
                E = -1,
                b = -1,
                y = 0;
            y < o.height;
            y++
        )
            for (var O = 0; O < o.width; O++) {
                var v = o.x + O,
                    S = o.y + y,
                    I = S * n + v,
                    T = _[I];
                0 == T ||
                    (0 == i[a - 1].dispose && d[I] == T && (null == f || 0 != f[4 * I + 3])) ||
                    (v < h && (h = v), v > E && (E = v), S < g && (g = S), S > b && (b = S));
            }
        -1 == E && (h = g = E = b = 0),
            s && ((1 & h) == 1 && h--, (1 & g) == 1 && g--),
            (o = {
                x: h,
                y: g,
                width: E - h + 1,
                height: b - g + 1,
            });
        var A = i[a];
        (A.rect = o),
            (A.blend = 1),
            (A.img = new Uint8Array(o.width * o.height * 4)),
            0 == i[a - 1].dispose
                ? (e(u, n, r, A.img, o.width, o.height, -o.x, -o.y, 0), m(p, n, r, A.img, o))
                : e(p, n, r, A.img, o.width, o.height, -o.x, -o.y, 0);
    }
    function m(t, n, r, i, a) {
        e(t, n, r, i, a.width, a.height, -a.x, -a.y, 2);
    }
    function h(e, t, n, r, i, a, o) {
        var s = [],
            l = [0, 1, 2, 3, 4];
        -1 != a ? (l = [a]) : (t * r > 500000 || 1 == n) && (l = [0]), o && (f = { level: 0 });
        var c = i.length > 10000000 && null != window.UZIP ? window.UZIP : pako;
        Date.now();
        for (var u = 0; u < l.length; u++) {
            for (var d = 0; d < t; d++) g(i, e, d, r, n, l[u]);
            s.push(c.deflate(i, f));
        }
        for (var f, p, _ = 1000000000, u = 0; u < s.length; u++) s[u].length < _ && ((p = u), (_ = s[u].length));
        return s[p];
    }
    function g(e, t, n, i, a, o) {
        var s = n * i,
            l = s + n;
        if (((e[l] = o), l++, 0 == o))
            if (i < 500) for (var c = 0; c < i; c++) e[l + c] = t[s + c];
            else e.set(new Uint8Array(t.buffer, s, i), l);
        else if (1 == o) {
            for (var c = 0; c < a; c++) e[l + c] = t[s + c];
            for (var c = a; c < i; c++) e[l + c] = (t[s + c] - t[s + c - a] + 256) & 255;
        } else if (0 == n) {
            for (var c = 0; c < a; c++) e[l + c] = t[s + c];
            if (2 == o) for (var c = a; c < i; c++) e[l + c] = t[s + c];
            if (3 == o) for (var c = a; c < i; c++) e[l + c] = (t[s + c] - (t[s + c - a] >> 1) + 256) & 255;
            if (4 == o) for (var c = a; c < i; c++) e[l + c] = (t[s + c] - r(t[s + c - a], 0, 0) + 256) & 255;
        } else {
            if (2 == o) for (var c = 0; c < i; c++) e[l + c] = (t[s + c] + 256 - t[s + c - i]) & 255;
            if (3 == o) {
                for (var c = 0; c < a; c++) e[l + c] = (t[s + c] + 256 - (t[s + c - i] >> 1)) & 255;
                for (var c = a; c < i; c++) e[l + c] = (t[s + c] + 256 - ((t[s + c - i] + t[s + c - a]) >> 1)) & 255;
            }
            if (4 == o) {
                for (var c = 0; c < a; c++) e[l + c] = (t[s + c] + 256 - r(0, t[s + c - i], 0)) & 255;
                for (var c = a; c < i; c++)
                    e[l + c] = (t[s + c] + 256 - r(t[s + c - a], t[s + c - i], t[s + c - a - i])) & 255;
            }
        }
    }
    function E(e, t, n) {
        Date.now();
        for (
            var r = new Uint8Array(e),
                i = r.slice(0),
                a = new Uint32Array(i.buffer),
                o = S(i, t),
                s = o[0],
                l = o[1],
                c = l.length,
                u = new Uint32Array(c),
                d = new Uint8Array(u.buffer),
                f = 0;
            f < c;
            f++
        )
            u[f] = l[f].est.rgba;
        var p,
            _ = r.length,
            m = new Uint8Array(_ >> 2);
        if (c <= 60) v(r, m, d), b(m, a, u);
        else if (r.length < 32000000)
            for (var f = 0; f < _; f += 4) {
                var h = r[f] * (1 / 255),
                    g = r[f + 1] * (1 / 255),
                    E = r[f + 2] * (1 / 255),
                    O = r[f + 3] * (1 / 255);
                (p = I(s, h, g, E, O)), (m[f >> 2] = p.ind), (a[f >> 2] = p.est.rgba);
            }
        else
            for (var f = 0; f < _; f += 4) {
                var h = r[f] * (1 / 255),
                    g = r[f + 1] * (1 / 255),
                    E = r[f + 2] * (1 / 255),
                    O = r[f + 3] * (1 / 255);
                for (p = s; p.left; ) p = 0 >= T(p.est, h, g, E, O) ? p.left : p.right;
                (m[f >> 2] = p.ind), (a[f >> 2] = p.est.rgba);
            }
        if (n || r.length * c < 10 * 4000000) {
            for (var A = 1000000000, f = 0; f < 10; f++) {
                var C = y(r, m, d);
                if (C / A > 0.997) break;
                A = C;
            }
            for (var f = 0; f < c; f++) l[f].est.rgba = u[f];
            b(m, a, u);
        }
        return {
            abuf: i.buffer,
            inds: m,
            plte: l,
        };
    }
    function b(e, t, n) {
        for (var r = 0; r < e.length; r++) t[r] = n[e[r]];
    }
    function y(e, t, n) {
        return O(e, t, n), v(e, t, n);
    }
    function O(e, t, n) {
        for (var r = n.length >>> 2, i = new Uint32Array(4 * r), a = new Uint32Array(r), o = 0; o < e.length; o += 4) {
            var s = t[o >>> 2],
                l = 4 * s;
            a[s]++, (i[l] += e[o]), (i[l + 1] += e[o + 1]), (i[l + 2] += e[o + 2]), (i[l + 3] += e[o + 3]);
        }
        for (var o = 0; o < n.length; o++) n[o] = Math.round(i[o] / a[o >>> 2]);
    }
    function v(e, t, n) {
        for (var r = 0, i = n.length >>> 2, a = [], o = 0; o < i; o++) {
            for (
                var s = 4 * o, l = n[s], c = n[s + 1], u = n[s + 2], d = n[s + 3], f = 0, p = 1000000000, _ = 0;
                _ < i;
                _++
            )
                if (o != _) {
                    var m = 4 * _,
                        h = l - n[m],
                        g = c - n[m + 1],
                        E = u - n[m + 2],
                        b = d - n[m + 3],
                        y = h * h + g * g + E * E + b * b;
                    y < p && ((p = y), (f = _));
                }
            (a[o] = 0.5 * Math.sqrt(p)), (a[o] = a[o] * a[o]);
        }
        for (var o = 0; o < e.length; o += 4) {
            var l = e[o],
                c = e[o + 1],
                u = e[o + 2],
                d = e[o + 3],
                f = t[o >>> 2],
                s = 4 * f,
                h = l - n[s],
                g = c - n[s + 1],
                E = u - n[s + 2],
                b = d - n[s + 3],
                p = h * h + g * g + E * E + b * b;
            if (p > a[f])
                for (var _ = 0; _ < i; _++) {
                    (h = l - n[(s = 4 * _)]), (g = c - n[s + 1]);
                    var y = h * h + g * g + (E = u - n[s + 2]) * E + (b = d - n[s + 3]) * b;
                    if (y < p && ((p = y), (f = _), p < a[_])) break;
                }
            (t[o >>> 2] = f), (r += p);
        }
        return r / (e.length >>> 2);
    }
    function S(e, t, n) {
        null == n && (n = 0.0001);
        var r = new Uint32Array(e.buffer),
            i = {
                i0: 0,
                i1: e.length,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
            };
        (i.bst = P(e, i.i0, i.i1)), (i.est = R(i.bst));
        for (var a = [i]; a.length < t; ) {
            for (var o = 0, s = 0, l = 0; l < a.length; l++) a[l].est.L > o && ((o = a[l].est.L), (s = l));
            if (o < n) break;
            var c = a[s],
                u = C(e, r, c.i0, c.i1, c.est.e, c.est.eMq255);
            if (c.i0 >= u || c.i1 <= u) {
                c.est.L = 0;
                continue;
            }
            var d = {
                i0: c.i0,
                i1: u,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
            };
            (d.bst = P(e, d.i0, d.i1)), (d.est = R(d.bst));
            var f = {
                i0: u,
                i1: c.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
            };
            f.bst = {
                R: [],
                m: [],
                N: c.bst.N - d.bst.N,
            };
            for (var l = 0; l < 16; l++) f.bst.R[l] = c.bst.R[l] - d.bst.R[l];
            for (var l = 0; l < 4; l++) f.bst.m[l] = c.bst.m[l] - d.bst.m[l];
            (f.est = R(f.bst)), (c.left = d), (c.right = f), (a[s] = d), a.push(f);
        }
        a.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < a.length; l++) a[l].ind = l;
        return [i, a];
    }
    function I(e, t, n, r, i) {
        if (null == e.left) return (e.tdst = A(e.est.q, t, n, r, i)), e;
        var a = T(e.est, t, n, r, i),
            o = e.left,
            s = e.right;
        a > 0 && ((o = e.right), (s = e.left));
        var l = I(o, t, n, r, i);
        if (l.tdst <= a * a) return l;
        var c = I(s, t, n, r, i);
        return c.tdst < l.tdst ? c : l;
    }
    function T(e, t, n, r, i) {
        var a = e.e;
        return a[0] * t + a[1] * n + a[2] * r + a[3] * i - e.eMq;
    }
    function A(e, t, n, r, i) {
        var a = t - e[0],
            o = n - e[1],
            s = r - e[2],
            l = i - e[3];
        return a * a + o * o + s * s + l * l;
    }
    function C(e, t, n, r, i, a) {
        for (r -= 4; n < r; ) {
            for (; N(e, n, i) <= a; ) n += 4;
            for (; N(e, r, i) > a; ) r -= 4;
            if (n >= r) break;
            var o = t[n >> 2];
            (t[n >> 2] = t[r >> 2]), (t[r >> 2] = o), (n += 4), (r -= 4);
        }
        for (; N(e, n, i) > a; ) n -= 4;
        return n + 4;
    }
    function N(e, t, n) {
        return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
    }
    function P(e, t, n) {
        for (
            var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], a = (n - t) >> 2, o = t;
            o < n;
            o += 4
        ) {
            var s = e[o] * (1 / 255),
                l = e[o + 1] * (1 / 255),
                c = e[o + 2] * (1 / 255),
                u = e[o + 3] * (1 / 255);
            (i[0] += s),
                (i[1] += l),
                (i[2] += c),
                (i[3] += u),
                (r[0] += s * s),
                (r[1] += s * l),
                (r[2] += s * c),
                (r[3] += s * u),
                (r[5] += l * l),
                (r[6] += l * c),
                (r[7] += l * u),
                (r[10] += c * c),
                (r[11] += c * u),
                (r[15] += u * u);
        }
        return (
            (r[4] = r[1]),
            (r[8] = r[2]),
            (r[9] = r[6]),
            (r[12] = r[3]),
            (r[13] = r[7]),
            (r[14] = r[11]),
            {
                R: r,
                m: i,
                N: a,
            }
        );
    }
    function R(e) {
        var t = e.R,
            n = e.m,
            r = e.N,
            i = n[0],
            a = n[1],
            o = n[2],
            s = n[3],
            l = 0 == r ? 0 : 1 / r,
            c = [
                t[0] - i * i * l,
                t[1] - i * a * l,
                t[2] - i * o * l,
                t[3] - i * s * l,
                t[4] - a * i * l,
                t[5] - a * a * l,
                t[6] - a * o * l,
                t[7] - a * s * l,
                t[8] - o * i * l,
                t[9] - o * a * l,
                t[10] - o * o * l,
                t[11] - o * s * l,
                t[12] - s * i * l,
                t[13] - s * a * l,
                t[14] - s * o * l,
                t[15] - s * s * l,
            ],
            u = c,
            d = w,
            f = [Math.random(), Math.random(), Math.random(), Math.random()],
            p = 0,
            _ = 0;
        if (0 != r)
            for (
                var m = 0;
                m < 16 &&
                ((f = d.multVec(u, f)),
                (_ = Math.sqrt(d.dot(f, f))),
                (f = d.sml(1 / _, f)),
                !(0 != m && 1e-9 > Math.abs(_ - p)));
                m++
            )
                p = _;
        var h = [i * l, a * l, o * l, s * l],
            g = d.dot(d.sml(255, h), f);
        return {
            Cov: c,
            q: h,
            e: f,
            L: p,
            eMq255: g,
            eMq: d.dot(f, h),
            rgba:
                ((Math.round(255 * h[3]) << 24) |
                    (Math.round(255 * h[2]) << 16) |
                    (Math.round(255 * h[1]) << 8) |
                    (0 | Math.round(255 * h[0]))) >>>
                0,
        };
    }
    var w = {
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
    function D(e) {
        for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
        for (var r = new Uint8Array(t), i = 0, n = 0; n < e.length; n++) {
            for (var a = new Uint8Array(e[n]), o = a.length, s = 0; s < o; s += 4) {
                var l = a[s],
                    c = a[s + 1],
                    u = a[s + 2],
                    d = a[s + 3];
                0 == d && (l = c = u = 0), (r[i + s] = l), (r[i + s + 1] = c), (r[i + s + 2] = u), (r[i + s + 3] = d);
            }
            i += o;
        }
        return r.buffer;
    }
    (t.encode = function (e, t, n, r, i, a, o) {
        null == r && (r = 0), null == o && (o = !1);
        var s = f(e, t, n, r, [!1, !1, !1, 0, o, !1]);
        return d(s, -1), u(s, t, n, i, a);
    }),
        (t.encodeLL = c),
        (t.encode.compress = f),
        (t.encode.dither = l),
        (t.quantize = E),
        (t.quantize.findNearest = v),
        (t.quantize.getKDtree = S),
        (t.quantize.getNearest = I);
})(),
    (e.exports = t);
