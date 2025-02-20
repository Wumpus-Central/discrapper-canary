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
            for (var r = '', i = 0; i < n; i++) r += String.fromCharCode(e[t + i]);
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
            return e.length < 2 ? '0' + e : e;
        },
        readUTF8: function (t, n, r) {
            for (var i, o = '', a = 0; a < r; a++) o += '%' + e.pad(t[n + a].toString(16));
            try {
                i = decodeURIComponent(o);
            } catch (i) {
                return e.readASCII(t, n, r);
            }
            return i;
        }
    };
    function t(e) {
        var t = e.width,
            r = e.height;
        if (null == e.tabs.acTL) return [n(e.data, t, r, e).buffer];
        var i = [];
        null == e.frames[0].data && (e.frames[0].data = e.data);
        for (var o = t * r * 4, a = new Uint8Array(o), s = new Uint8Array(o), l = new Uint8Array(o), c = 0; c < e.frames.length; c++) {
            var u = e.frames[c],
                d = u.rect.x,
                p = u.rect.y,
                _ = u.rect.width,
                h = u.rect.height,
                m = n(u.data, _, h, e);
            if (0 != c) for (var g = 0; g < o; g++) l[g] = a[g];
            if ((0 == u.blend ? f(m, _, h, a, t, r, d, p, 0) : 1 == u.blend && f(m, _, h, a, t, r, d, p, 1), i.push(a.buffer.slice(0)), 0 == u.dispose));
            else if (1 == u.dispose) f(s, _, h, a, t, r, d, p, 0);
            else if (2 == u.dispose) for (var g = 0; g < o; g++) a[g] = l[g];
        }
        return i;
    }
    function n(t, n, r, i) {
        var o = n * r,
            a = Math.ceil((n * l(i)) / 8),
            s = new Uint8Array(4 * o),
            c = new Uint32Array(s.buffer),
            u = i.ctype,
            d = i.depth,
            f = e.readUshort;
        if ((Date.now(), 6 == u)) {
            var p = o << 2;
            if (8 == d) for (var _ = 0; _ < p; _ += 4) (s[_] = t[_]), (s[_ + 1] = t[_ + 1]), (s[_ + 2] = t[_ + 2]), (s[_ + 3] = t[_ + 3]);
            if (16 == d) for (var _ = 0; _ < p; _++) s[_] = t[_ << 1];
        } else if (2 == u) {
            var h = i.tabs.tRNS;
            if (null == h) {
                if (8 == d)
                    for (var _ = 0; _ < o; _++) {
                        var m = 3 * _;
                        c[_] = -16777216 | (t[m + 2] << 16) | (t[m + 1] << 8) | t[m];
                    }
                if (16 == d)
                    for (var _ = 0; _ < o; _++) {
                        var m = 6 * _;
                        c[_] = -16777216 | (t[m + 4] << 16) | (t[m + 2] << 8) | t[m];
                    }
            } else {
                var g = h[0],
                    E = h[1],
                    v = h[2];
                if (8 == d)
                    for (var _ = 0; _ < o; _++) {
                        var b = _ << 2,
                            m = 3 * _;
                        (c[_] = -16777216 | (t[m + 2] << 16) | (t[m + 1] << 8) | t[m]), t[m] == g && t[m + 1] == E && t[m + 2] == v && (s[b + 3] = 0);
                    }
                if (16 == d)
                    for (var _ = 0; _ < o; _++) {
                        var b = _ << 2,
                            m = 6 * _;
                        (c[_] = -16777216 | (t[m + 4] << 16) | (t[m + 2] << 8) | t[m]), f(t, m) == g && f(t, m + 2) == E && f(t, m + 4) == v && (s[b + 3] = 0);
                    }
            }
        } else if (3 == u) {
            var y = i.tabs.PLTE,
                O = i.tabs.tRNS,
                S = O ? O.length : 0;
            if (1 == d)
                for (var I = 0; I < r; I++)
                    for (var T = I * a, N = I * n, _ = 0; _ < n; _++) {
                        var b = (N + _) << 2,
                            A = (t[T + (_ >> 3)] >> (7 - ((7 & _) << 0))) & 1,
                            C = 3 * A;
                        (s[b] = y[C]), (s[b + 1] = y[C + 1]), (s[b + 2] = y[C + 2]), (s[b + 3] = A < S ? O[A] : 255);
                    }
            if (2 == d)
                for (var I = 0; I < r; I++)
                    for (var T = I * a, N = I * n, _ = 0; _ < n; _++) {
                        var b = (N + _) << 2,
                            A = (t[T + (_ >> 2)] >> (6 - ((3 & _) << 1))) & 3,
                            C = 3 * A;
                        (s[b] = y[C]), (s[b + 1] = y[C + 1]), (s[b + 2] = y[C + 2]), (s[b + 3] = A < S ? O[A] : 255);
                    }
            if (4 == d)
                for (var I = 0; I < r; I++)
                    for (var T = I * a, N = I * n, _ = 0; _ < n; _++) {
                        var b = (N + _) << 2,
                            A = (t[T + (_ >> 1)] >> (4 - ((1 & _) << 2))) & 15,
                            C = 3 * A;
                        (s[b] = y[C]), (s[b + 1] = y[C + 1]), (s[b + 2] = y[C + 2]), (s[b + 3] = A < S ? O[A] : 255);
                    }
            if (8 == d)
                for (var _ = 0; _ < o; _++) {
                    var b = _ << 2,
                        A = t[_],
                        C = 3 * A;
                    (s[b] = y[C]), (s[b + 1] = y[C + 1]), (s[b + 2] = y[C + 2]), (s[b + 3] = A < S ? O[A] : 255);
                }
        } else if (4 == u) {
            if (8 == d)
                for (var _ = 0; _ < o; _++) {
                    var b = _ << 2,
                        R = _ << 1,
                        P = t[R];
                    (s[b] = P), (s[b + 1] = P), (s[b + 2] = P), (s[b + 3] = t[R + 1]);
                }
            if (16 == d)
                for (var _ = 0; _ < o; _++) {
                    var b = _ << 2,
                        R = _ << 2,
                        P = t[R];
                    (s[b] = P), (s[b + 1] = P), (s[b + 2] = P), (s[b + 3] = t[R + 2]);
                }
        } else if (0 == u)
            for (var g = i.tabs.tRNS ? i.tabs.tRNS : -1, I = 0; I < r; I++) {
                var w = I * a,
                    D = I * n;
                if (1 == d)
                    for (var x = 0; x < n; x++) {
                        var P = 255 * ((t[w + (x >>> 3)] >>> (7 - (7 & x))) & 1),
                            L = 255 * (P != 255 * g);
                        c[D + x] = (L << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (2 == d)
                    for (var x = 0; x < n; x++) {
                        var P = 85 * ((t[w + (x >>> 2)] >>> (6 - ((3 & x) << 1))) & 3),
                            L = 255 * (P != 85 * g);
                        c[D + x] = (L << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (4 == d)
                    for (var x = 0; x < n; x++) {
                        var P = 17 * ((t[w + (x >>> 1)] >>> (4 - ((1 & x) << 2))) & 15),
                            L = 255 * (P != 17 * g);
                        c[D + x] = (L << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (8 == d)
                    for (var x = 0; x < n; x++) {
                        var P = t[w + x],
                            L = 255 * (P != g);
                        c[D + x] = (L << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (16 == d)
                    for (var x = 0; x < n; x++) {
                        var P = t[w + (x << 1)],
                            L = 255 * (f(t, w + (x << 1)) != g);
                        c[D + x] = (L << 24) | (P << 16) | (P << 8) | P;
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
                    frames: []
                },
                p = new Uint8Array(r.length),
                _ = 0,
                h = 0,
                m = [137, 80, 78, 71, 13, 10, 26, 10],
                g = 0;
            g < 8;
            g++
        )
            if (r[g] != m[g]) throw 'The input is not a PNG file!';
        for (; s < r.length; ) {
            var E = l.readUint(r, s);
            s += 4;
            var v = l.readASCII(r, s, 4);
            if (((s += 4), 'IHDR' == v)) d(r, s, f);
            else if ('iCCP' == v) {
                for (var b = s; 0 != r[b]; ) b++;
                l.readASCII(r, s, b - s), r[b + 1];
                var y = r.slice(b + 2, s + E),
                    O = null;
                try {
                    O = o(y);
                } catch (e) {
                    O = a(y);
                }
                f.tabs[v] = O;
            } else if ('CgBI' == v) f.tabs[v] = r.slice(s, s + 4);
            else if ('IDAT' == v) {
                for (var g = 0; g < E; g++) p[_ + g] = r[s + g];
                _ += E;
            } else if ('acTL' == v)
                (f.tabs[v] = {
                    num_frames: u(r, s),
                    num_plays: u(r, s + 4)
                }),
                    (n = new Uint8Array(r.length));
            else if ('fcTL' == v) {
                if (0 != h) {
                    var S = f.frames[f.frames.length - 1];
                    (S.data = i(f, n.slice(0, h), S.rect.width, S.rect.height)), (h = 0);
                }
                var I = {
                        x: u(r, s + 12),
                        y: u(r, s + 16),
                        width: u(r, s + 4),
                        height: u(r, s + 8)
                    },
                    T = c(r, s + 22),
                    N = {
                        rect: I,
                        delay: 1000 * (T = c(r, s + 20) / (0 == T ? 100 : T)),
                        dispose: r[s + 24],
                        blend: r[s + 25]
                    };
                f.frames.push(N);
            } else if ('fdAT' == v) {
                for (var g = 0; g < E - 4; g++) n[h + g] = r[s + g + 4];
                h += E - 4;
            } else if ('pHYs' == v) f.tabs[v] = [l.readUint(r, s), l.readUint(r, s + 4), r[s + 8]];
            else if ('cHRM' == v) {
                f.tabs[v] = [];
                for (var g = 0; g < 8; g++) f.tabs[v].push(l.readUint(r, s + 4 * g));
            } else if ('tEXt' == v || 'zTXt' == v) {
                null == f.tabs[v] && (f.tabs[v] = {});
                var A,
                    C = l.nextZero(r, s),
                    R = l.readASCII(r, s, C - s),
                    P = s + E - C - 1;
                if ('tEXt' == v) A = l.readASCII(r, C + 1, P);
                else {
                    var w = o(r.slice(C + 2, C + 2 + P));
                    A = l.readUTF8(w, 0, w.length);
                }
                f.tabs[v][R] = A;
            } else if ('iTXt' == v) {
                null == f.tabs[v] && (f.tabs[v] = {});
                var C = 0,
                    b = s;
                C = l.nextZero(r, b);
                var R = l.readASCII(r, b, C - b),
                    D = r[(b = C + 1)];
                r[b + 1], (b += 2), (C = l.nextZero(r, b)), l.readASCII(r, b, C - b), (b = C + 1), (C = l.nextZero(r, b)), l.readUTF8(r, b, C - b);
                var A,
                    P = E - ((b = C + 1) - s);
                if (0 == D) A = l.readUTF8(r, b, P);
                else {
                    var w = o(r.slice(b, b + P));
                    A = l.readUTF8(w, 0, w.length);
                }
                f.tabs[v][R] = A;
            } else if ('PLTE' == v) f.tabs[v] = l.readBytes(r, s, E);
            else if ('hIST' == v) {
                var x = f.tabs.PLTE.length / 3;
                f.tabs[v] = [];
                for (var g = 0; g < x; g++) f.tabs[v].push(c(r, s + 2 * g));
            } else if ('tRNS' == v) 3 == f.ctype ? (f.tabs[v] = l.readBytes(r, s, E)) : 0 == f.ctype ? (f.tabs[v] = c(r, s)) : 2 == f.ctype && (f.tabs[v] = [c(r, s), c(r, s + 2), c(r, s + 4)]);
            else if ('gAMA' == v) f.tabs[v] = l.readUint(r, s) / 100000;
            else if ('sRGB' == v) f.tabs[v] = r[s];
            else if ('bKGD' == v) 0 == f.ctype || 4 == f.ctype ? (f.tabs[v] = [c(r, s)]) : 2 == f.ctype || 6 == f.ctype ? (f.tabs[v] = [c(r, s), c(r, s + 2), c(r, s + 4)]) : 3 == f.ctype && (f.tabs[v] = r[s]);
            else if ('IEND' == v) break;
            (s += E), l.readUint(r, s), (s += 4);
        }
        if (0 != h) {
            var S = f.frames[f.frames.length - 1];
            S.data = i(f, n.slice(0, h), S.rect.width, S.rect.height);
        }
        return (f.data = i(f, p, f.width, f.height)), delete f.compress, delete f.interlace, delete f.filter, f;
    }
    function i(e, t, n, r) {
        var i = Date.now(),
            u = new Uint8Array((Math.ceil((n * l(e)) / 8) + 1 + e.interlace) * r);
        t = e.tabs.CgBI ? a(t, u) : o(t, u);
        var i = Date.now();
        return 0 == e.interlace ? (t = c(t, e, 0, n, r)) : 1 == e.interlace && (t = s(t, e)), t;
    }
    function o(e, t) {
        return a(new Uint8Array(e.buffer, 2, e.length - 6), t);
    }
    var a = (function () {
        var e = (function () {
            var e = Uint16Array,
                t = Uint32Array;
            return {
                m: new e(16),
                v: new e(16),
                d: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                o: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                z: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                B: new e(32),
                p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                w: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
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
                j: new e(32768)
            };
        })();
        function t(t, n) {
            for (var r, i, o, a, s, l = t.length, c = e.v, a = 0; a <= n; a++) c[a] = 0;
            for (a = 1; a < l; a += 2) c[t[a]]++;
            var u = e.m;
            for (i = 1, r = 0, c[0] = 0; i <= n; i++) (r = (r + c[i - 1]) << 1), (u[i] = r);
            for (o = 0; o < l; o += 2) 0 != (s = t[o + 1]) && ((t[o] = u[s]), u[s]++);
        }
        function n(t, n, r) {
            for (var i = t.length, o = e.i, a = 0; a < i; a += 2) if (0 != t[a + 1]) for (var s = a >> 1, l = t[a + 1], c = (s << 4) | l, u = n - l, d = t[a] << u, f = d + (1 << u); d != f; ) (r[o[d] >>> (15 - n)] = c), d++;
        }
        function r(t, n) {
            for (var r = e.i, i = 15 - n, o = 0; o < t.length; o += 2) {
                var a = t[o] << (n - t[o + 1]);
                t[o] = r[a] >>> i;
            }
        }
        function i(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function o(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function a(e, t) {
            return (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t);
        }
        function s(e, t) {
            var n = e.length;
            if (t <= n) return e;
            var r = new Uint8Array(Math.max(n << 1, t));
            return r.set(e, 0), r;
        }
        function l(e, t, n, r, o, s) {
            for (var l = 0; l < n; ) {
                var c = e[a(r, o) & t];
                o += 15 & c;
                var u = c >>> 4;
                if (u <= 15) (s[l] = u), l++;
                else {
                    var d = 0,
                        f = 0;
                    16 == u ? ((f = 3 + i(r, o, 2)), (o += 2), (d = s[l - 1])) : 17 == u ? ((f = 3 + i(r, o, 3)), (o += 3)) : 18 == u && ((f = 11 + i(r, o, 7)), (o += 7));
                    for (var p = l + f; l < p; ) (s[l] = d), l++;
                }
            }
            return o;
        }
        function c(e, t, n, r) {
            for (var i = 0, o = 0, a = r.length >>> 1; o < n; ) {
                var s = e[o + t];
                (r[o << 1] = 0), (r[(o << 1) + 1] = s), s > i && (i = s), o++;
            }
            for (; o < a; ) (r[o << 1] = 0), (r[(o << 1) + 1] = 0), o++;
            return i;
        }
        return (
            !(function () {
                for (var i = 32768, o = 0; o < i; o++) {
                    var a = o;
                    (a = ((4278255360 & (a = ((4042322160 & (a = ((3435973836 & (a = ((2863311530 & a) >>> 1) | ((1431655765 & a) << 1))) >>> 2) | ((858993459 & a) << 2))) >>> 4) | ((252645135 & a) << 4))) >>> 8) | ((16711935 & a) << 8)), (e.i[o] = ((a >>> 16) | (a << 16)) >>> 17);
                }
                function s(e, t, n) {
                    for (; 0 != t--; ) e.push(0, n);
                }
                for (var o = 0; o < 32; o++) (e.B[o] = (e.o[o] << 3) | e.z[o]), (e.h[o] = (e.p[o] << 4) | e.w[o]);
                s(e.s, 144, 8), s(e.s, 112, 9), s(e.s, 24, 7), s(e.s, 8, 8), t(e.s, 9), n(e.s, 9, e.g), r(e.s, 9), s(e.t, 32, 5), t(e.t, 5), n(e.t, 5, e.A), r(e.t, 5), s(e.b, 19, 0), s(e.c, 286, 0), s(e.e, 30, 0), s(e.a, 320, 0);
            })(),
            function (r, u) {
                var d,
                    f,
                    p = Uint8Array,
                    _ = 0,
                    h = 0,
                    m = 0,
                    g = 0,
                    E = 0,
                    v = 0,
                    b = 0,
                    y = 0,
                    O = 0;
                if (3 == r[0] && 0 == r[1]) return u || new p(0);
                var S = null == u;
                for (S && (u = new p((r.length >>> 2) << 3)); 0 == _; ) {
                    if (((_ = o(r, O, 1)), (h = o(r, O + 1, 2)), (O += 3), 0 == h)) {
                        (7 & O) != 0 && (O += 8 - (7 & O));
                        var I = (O >>> 3) + 4,
                            T = r[I - 4] | (r[I - 3] << 8);
                        S && (u = s(u, y + T)), u.set(new p(r.buffer, r.byteOffset + I, T), y), (O = (I + T) << 3), (y += T);
                        continue;
                    }
                    if ((S && (u = s(u, y + 131072)), 1 == h && ((d = e.g), (f = e.A), (v = 511), (b = 31)), 2 == h)) {
                        (m = i(r, O, 5) + 257), (g = i(r, O + 5, 5) + 1), (E = i(r, O + 10, 4) + 4), (O += 14);
                        for (var N = 1, A = 0; A < 38; A += 2) (e.b[A] = 0), (e.b[A + 1] = 0);
                        for (var A = 0; A < E; A++) {
                            var C = i(r, O + 3 * A, 3);
                            (e.b[(e.d[A] << 1) + 1] = C), C > N && (N = C);
                        }
                        (O += 3 * E), t(e.b, N), n(e.b, N, e.C), (d = e.k), (f = e.n), (O = l(e.C, (1 << N) - 1, m + g, r, O, e.a));
                        var R = c(e.a, 0, m, e.c);
                        v = (1 << R) - 1;
                        var P = c(e.a, m, g, e.e);
                        (b = (1 << P) - 1), t(e.c, R), n(e.c, R, d), t(e.e, P), n(e.e, P, f);
                    }
                    for (;;) {
                        var w = d[a(r, O) & v];
                        O += 15 & w;
                        var D = w >>> 4;
                        if (D >>> 8 == 0) u[y++] = D;
                        else if (256 == D) break;
                        else {
                            var x = y + D - 254;
                            if (D > 264) {
                                var L = e.B[D - 257];
                                (x = y + (L >>> 3) + i(r, O, 7 & L)), (O += 7 & L);
                            }
                            var M = f[a(r, O) & b];
                            O += 15 & M;
                            var k = M >>> 4,
                                j = e.h[k],
                                U = (j >>> 4) + o(r, O, 15 & j);
                            for (O += 15 & j, S && (u = s(u, y + 131072)); y < x; ) (u[y] = u[y++ - U]), (u[y] = u[y++ - U]), (u[y] = u[y++ - U]), (u[y] = u[y++ - U]);
                            y = x;
                        }
                    }
                }
                return u.length == y ? u : u.slice(0, y);
            }
        );
    })();
    function s(e, t) {
        for (var n = t.width, r = t.height, i = l(t), o = i >> 3, a = Math.ceil((n * i) / 8), s = new Uint8Array(r * a), u = 0, d = [0, 0, 4, 0, 2, 0, 1], f = [0, 4, 0, 2, 0, 1, 0], p = [8, 8, 8, 4, 4, 2, 2], _ = [8, 8, 4, 4, 2, 2, 1], h = 0; h < 7; ) {
            for (var m = p[h], g = _[h], E = 0, v = 0, b = d[h]; b < r; ) (b += m), v++;
            for (var y = f[h]; y < n; ) (y += g), E++;
            var O = Math.ceil((E * i) / 8);
            c(e, t, u, E, v);
            for (var S = 0, I = d[h]; I < r; ) {
                for (var T = f[h], N = (u + S * O) << 3; T < n; ) {
                    if (1 == i) {
                        var A = e[N >> 3];
                        (A = (A >> (7 - (7 & N))) & 1), (s[I * a + (T >> 3)] |= A << (7 - ((7 & T) << 0)));
                    }
                    if (2 == i) {
                        var A = e[N >> 3];
                        (A = (A >> (6 - (7 & N))) & 3), (s[I * a + (T >> 2)] |= A << (6 - ((3 & T) << 1)));
                    }
                    if (4 == i) {
                        var A = e[N >> 3];
                        (A = (A >> (4 - (7 & N))) & 15), (s[I * a + (T >> 1)] |= A << (4 - ((1 & T) << 2)));
                    }
                    if (i >= 8) for (var C = I * a + T * o, R = 0; R < o; R++) s[C + R] = e[(N >> 3) + R];
                    (N += i), (T += g);
                }
                S++, (I += m);
            }
            E * v != 0 && (u += v * (1 + O)), (h += 1);
        }
        return s;
    }
    function l(e) {
        return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
    }
    function c(e, t, n, r, i) {
        var o = l(t),
            a = Math.ceil((r * o) / 8);
        o = Math.ceil(o / 8);
        var s,
            c,
            d = e[n],
            f = 0;
        if ((d > 1 && (e[n] = [0, 0, 1][d - 2]), 3 == d)) for (f = o; f < a; f++) e[f + 1] = (e[f + 1] + (e[f + 1 - o] >>> 1)) & 255;
        for (var p = 0; p < i; p++)
            if (((d = e[(c = (s = n + p * a) + p + 1) - 1]), (f = 0), 0 == d)) for (; f < a; f++) e[s + f] = e[c + f];
            else if (1 == d) {
                for (; f < o; f++) e[s + f] = e[c + f];
                for (; f < a; f++) e[s + f] = e[c + f] + e[s + f - o];
            } else if (2 == d) for (; f < a; f++) e[s + f] = e[c + f] + e[s + f - a];
            else if (3 == d) {
                for (; f < o; f++) e[s + f] = e[c + f] + (e[s + f - a] >>> 1);
                for (; f < a; f++) e[s + f] = e[c + f] + ((e[s + f - a] + e[s + f - o]) >>> 1);
            } else {
                for (; f < o; f++) e[s + f] = e[c + f] + u(0, e[s + f - a], 0);
                for (; f < a; f++) e[s + f] = e[c + f] + u(e[s + f - o], e[s + f - a], e[s + f - o - a]);
            }
        return e;
    }
    function u(e, t, n) {
        var r = e + t - n,
            i = r - e,
            o = r - t,
            a = r - n;
        return i * i <= o * o && i * i <= a * a ? e : o * o <= a * a ? t : n;
    }
    function d(t, n, r) {
        (r.width = e.readUint(t, n)), (n += 4), (r.height = e.readUint(t, n)), (n += 4), (r.depth = t[n]), n++, (r.ctype = t[n]), n++, (r.compress = t[n]), n++, (r.filter = t[n]), n++, (r.interlace = t[n]), n++;
    }
    function f(e, t, n, r, i, o, a, s, l) {
        for (var c = Math.min(t, i), u = Math.min(n, o), d = 0, f = 0, p = 0; p < u; p++)
            for (var _ = 0; _ < c; _++)
                if ((a >= 0 && s >= 0 ? ((d = (p * t + _) << 2), (f = ((s + p) * i + a + _) << 2)) : ((d = ((-s + p) * t - a + _) << 2), (f = (p * i + _) << 2)), 0 == l)) (r[f] = e[d]), (r[f + 1] = e[d + 1]), (r[f + 2] = e[d + 2]), (r[f + 3] = e[d + 3]);
                else if (1 == l) {
                    var h = e[d + 3] * (1 / 255),
                        m = e[d] * h,
                        g = e[d + 1] * h,
                        E = e[d + 2] * h,
                        v = r[f + 3] * (1 / 255),
                        b = r[f] * v,
                        y = r[f + 1] * v,
                        O = r[f + 2] * v,
                        S = 1 - h,
                        I = h + v * S,
                        T = 0 == I ? 0 : 1 / I;
                    (r[f + 3] = 255 * I), (r[f + 0] = (m + b * S) * T), (r[f + 1] = (g + y * S) * T), (r[f + 2] = (E + O * S) * T);
                } else if (2 == l) {
                    var h = e[d + 3],
                        m = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        v = r[f + 3],
                        b = r[f],
                        y = r[f + 1],
                        O = r[f + 2];
                    h == v && m == b && g == y && E == O ? ((r[f] = 0), (r[f + 1] = 0), (r[f + 2] = 0), (r[f + 3] = 0)) : ((r[f] = m), (r[f + 1] = g), (r[f + 2] = E), (r[f + 3] = h));
                } else if (3 == l) {
                    var h = e[d + 3],
                        m = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        v = r[f + 3],
                        b = r[f],
                        y = r[f + 1],
                        O = r[f + 2];
                    if (h == v && m == b && g == y && E == O) continue;
                    if (h < 220 && v > 20) return !1;
                }
        return !0;
    }
    return {
        decode: r,
        toRGBA8: t,
        _paeth: u,
        _copyTile: f,
        _bin: e
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
                for (var o = 0; o < r; o++) e = i.table[(e ^ t[n + o]) & 255] ^ (e >>> 8);
                return e;
            },
            crc: function (e, t, n) {
                return 4294967295 ^ i.update(4294967295, e, t, n);
            }
        };
    function o(e, t, n, r) {
        (t[n] += (e[0] * r) >> 4), (t[n + 1] += (e[1] * r) >> 4), (t[n + 2] += (e[2] * r) >> 4), (t[n + 3] += (e[3] * r) >> 4);
    }
    function a(e) {
        return Math.max(0, Math.min(255, e));
    }
    function s(e, t) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2],
            o = e[3] - t[3];
        return n * n + r * r + i * i + o * o;
    }
    function l(e, t, n, r, i, l, c) {
        null == c && (c = 1);
        for (var u = r.length, d = [], f = [], p = 0; p < u; p++) {
            var _ = r[p];
            d.push([(_ >>> 0) & 255, (_ >>> 8) & 255, (_ >>> 16) & 255, (_ >>> 24) & 255]);
        }
        for (var p = 0; p < u; p++) {
            for (var h = 4294967295, m = 0, g = 0; g < u; g++) {
                var E = s(d[p], d[g]);
                g != p && E < h && ((h = E), (m = g));
            }
            var v = Math.sqrt(h) / 2;
            f[p] = ~~(v * v);
        }
        for (var b = new Uint32Array(i.buffer), y = new Int16Array(t * n * 4), O = 4, S = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5], p = 0; p < S.length; p++) S[p] = 255 * (-0.5 + (S[p] + 0.5) / (O * O));
        for (var I = 0; I < n; I++)
            for (var T = 0; T < t; T++) {
                var N,
                    p = (I * t + T) * 4;
                if (2 != c) N = [a(e[p] + y[p]), a(e[p + 1] + y[p + 1]), a(e[p + 2] + y[p + 2]), a(e[p + 3] + y[p + 3])];
                else {
                    var E = S[(I & (O - 1)) * O + (T & (O - 1))];
                    N = [a(e[p] + E), a(e[p + 1] + E), a(e[p + 2] + E), a(e[p + 3] + E)];
                }
                for (var m = 0, A = 16777215, g = 0; g < u; g++) {
                    var C = s(N, d[g]);
                    C < A && ((A = C), (m = g));
                }
                var R = d[m],
                    P = [N[0] - R[0], N[1] - R[1], N[2] - R[2], N[3] - R[3]];
                1 == c && (T != t - 1 && o(P, y, p + 4, 7), I != n - 1 && (0 != T && o(P, y, p + 4 * t - 4, 3), o(P, y, p + 4 * t, 5), T != t - 1 && o(P, y, p + 4 * t + 4, 1))), (l[p >> 2] = m), (b[p >> 2] = r[m]);
            }
    }
    function c(e, t, n, r, i, o, a) {
        null == r && (r = 0), null == a && (a = !1);
        var s = p(e, t, n, r, [!1, !1, !1, 0, a, !1]);
        return f(s, -1), d(s, t, n, i, o);
    }
    function u(e, t, n, r, i, o, a, s) {
        var l = {
            ctype: 0 + 2 * (1 != r) + 4 * (0 != i),
            depth: o,
            frames: []
        };
        Date.now();
        for (var c = (r + i) * o, u = c * t, p = 0; p < e.length; p++)
            l.frames.push({
                rect: {
                    x: 0,
                    y: 0,
                    width: t,
                    height: n
                },
                img: new Uint8Array(e[p]),
                blend: 0,
                dispose: 1,
                bpp: Math.ceil(c / 8),
                bpl: Math.ceil(u / 8)
            });
        return f(l, 0, !0), d(l, t, n, a, s);
    }
    function d(e, t, r, o, a) {
        null == a && (a = {});
        var s,
            l = i.crc,
            c = n.writeUint,
            u = n.writeUshort,
            d = n.writeASCII,
            f = 8,
            p = e.frames.length > 1,
            _ = !1,
            h = 33 + 20 * !!p;
        if ((null != a.sRGB && (h += 13), null != a.pHYs && (h += 21), null != a.iCCP && (h += 21 + (s = pako.deflate(a.iCCP)).length + 4), 3 == e.ctype)) {
            for (var m = e.plte.length, g = 0; g < m; g++) e.plte[g] >>> 24 != 255 && (_ = !0);
            h += 8 + 3 * m + 4 + (_ ? 8 + +m + 4 : 0);
        }
        for (var E = 0; E < e.frames.length; E++) {
            var v = e.frames[E];
            p && (h += 38), (h += v.cimg.length + 12), 0 != E && (h += 4);
        }
        for (var b = new Uint8Array((h += 12)), y = [137, 80, 78, 71, 13, 10, 26, 10], g = 0; g < 8; g++) b[g] = y[g];
        if ((c(b, f, 13), d(b, (f += 4), 'IHDR'), c(b, (f += 4), t), c(b, (f += 4), r), (b[(f += 4)] = e.depth), (b[++f] = e.ctype), (b[++f] = 0), (b[++f] = 0), (b[++f] = 0), c(b, ++f, l(b, f - 17, 17)), (f += 4), null != a.sRGB && (c(b, f, 1), d(b, (f += 4), 'sRGB'), (b[(f += 4)] = a.sRGB), c(b, ++f, l(b, f - 5, 5)), (f += 4)), null != a.iCCP)) {
            var O = 13 + s.length;
            c(b, f, O), d(b, (f += 4), 'iCCP'), d(b, (f += 4), 'ICC profile'), (f += 11), (f += 2), b.set(s, f), c(b, (f += s.length), l(b, f - (O + 4), O + 4)), (f += 4);
        }
        if ((null != a.pHYs && (c(b, f, 9), d(b, (f += 4), 'pHYs'), c(b, (f += 4), a.pHYs[0]), c(b, (f += 4), a.pHYs[1]), (b[(f += 4)] = a.pHYs[2]), c(b, ++f, l(b, f - 13, 13)), (f += 4)), p && (c(b, f, 8), d(b, (f += 4), 'acTL'), c(b, (f += 4), e.frames.length), c(b, (f += 4), null != a.loop ? a.loop : 0), c(b, (f += 4), l(b, f - 12, 12)), (f += 4)), 3 == e.ctype)) {
            var m = e.plte.length;
            c(b, f, 3 * m), d(b, (f += 4), 'PLTE'), (f += 4);
            for (var g = 0; g < m; g++) {
                var S = 3 * g,
                    I = e.plte[g],
                    T = 255 & I,
                    N = (I >>> 8) & 255,
                    A = (I >>> 16) & 255;
                (b[f + S + 0] = T), (b[f + S + 1] = N), (b[f + S + 2] = A);
            }
            if ((c(b, (f += 3 * m), l(b, f - 3 * m - 4, 3 * m + 4)), (f += 4), _)) {
                c(b, f, m), d(b, (f += 4), 'tRNS'), (f += 4);
                for (var g = 0; g < m; g++) b[f + g] = (e.plte[g] >>> 24) & 255;
                c(b, (f += m), l(b, f - m - 4, m + 4)), (f += 4);
            }
        }
        for (var C = 0, E = 0; E < e.frames.length; E++) {
            var v = e.frames[E];
            p && (c(b, f, 26), d(b, (f += 4), 'fcTL'), c(b, (f += 4), C++), c(b, (f += 4), v.rect.width), c(b, (f += 4), v.rect.height), c(b, (f += 4), v.rect.x), c(b, (f += 4), v.rect.y), u(b, (f += 4), o[E]), u(b, (f += 2), 1000), (b[(f += 2)] = v.dispose), (b[++f] = v.blend), c(b, ++f, l(b, f - 30, 30)), (f += 4));
            var R = v.cimg,
                m = R.length;
            c(b, f, m + 4 * (0 != E));
            var P = (f += 4);
            d(b, f, 0 == E ? 'IDAT' : 'fdAT'), (f += 4), 0 != E && (c(b, f, C++), (f += 4)), b.set(R, f), c(b, (f += m), l(b, P, f - P)), (f += 4);
        }
        return c(b, f, 0), d(b, (f += 4), 'IEND'), c(b, (f += 4), l(b, f - 4, 4)), (f += 4), b.buffer;
    }
    function f(e, t, n) {
        for (var r = 0; r < e.frames.length; r++) {
            var i = e.frames[r],
                o = (i.rect.width, i.rect.height),
                a = new Uint8Array(o * i.bpl + o);
            i.cimg = g(i.img, o, i.bpp, i.bpl, a, t, n);
        }
    }
    function p(e, t, n, r, i) {
        for (var o = i[0], a = i[1], s = i[2], c = i[3], u = i[4], d = i[5], f = 6, p = 8, h = 255, m = 0; m < e.length; m++) for (var g = new Uint8Array(e[m]), E = g.length, b = 0; b < E; b += 4) h &= g[b + 3];
        var y = 255 != h,
            O = _(e, t, n, o, a, s),
            S = {},
            I = [],
            T = [];
        if (0 != r) {
            for (var N = [], b = 0; b < O.length; b++) N.push(O[b].img.buffer);
            for (var A = v(x(N), r), b = 0; b < A.plte.length; b++) I.push(A.plte[b].est.rgba);
            for (var C = 0, b = 0; b < O.length; b++) {
                var R = O[b],
                    P = R.img.length,
                    w = new Uint8Array(A.inds.buffer, C >> 2, P >> 2);
                T.push(w);
                var D = new Uint8Array(A.abuf, C, P);
                d && l(R.img, R.rect.width, R.rect.height, I, D, w), R.img.set(D), (C += P);
            }
        } else
            for (var m = 0; m < O.length; m++) {
                var R = O[m],
                    L = new Uint32Array(R.img.buffer),
                    M = R.rect.width,
                    E = L.length,
                    w = new Uint8Array(E);
                T.push(w);
                for (var b = 0; b < E; b++) {
                    var k = L[b];
                    if (0 != b && k == L[b - 1]) w[b] = w[b - 1];
                    else if (b > M && k == L[b - M]) w[b] = w[b - M];
                    else {
                        var j = S[k];
                        if (null == j && ((S[k] = j = I.length), I.push(k), I.length >= 300)) break;
                        w[b] = j;
                    }
                }
            }
        var U = I.length;
        U <= 256 && !1 == u && (p = Math.max((p = U <= 2 ? 1 : U <= 4 ? 2 : U <= 16 ? 4 : 8), c));
        for (var m = 0; m < O.length; m++) {
            var R = O[m],
                M = (R.rect.x, R.rect.y, R.rect.width),
                G = R.rect.height,
                B = R.img;
            new Uint32Array(B.buffer);
            var Z = 4 * M,
                F = 4;
            if (U <= 256 && !1 == u) {
                for (var V = new Uint8Array((Z = Math.ceil((p * M) / 8)) * G), H = T[m], W = 0; W < G; W++) {
                    var b = W * Z,
                        Y = W * M;
                    if (8 == p) for (var K = 0; K < M; K++) V[b + K] = H[Y + K];
                    else if (4 == p) for (var K = 0; K < M; K++) V[b + (K >> 1)] |= H[Y + K] << (4 - (1 & K) * 4);
                    else if (2 == p) for (var K = 0; K < M; K++) V[b + (K >> 2)] |= H[Y + K] << (6 - (3 & K) * 2);
                    else if (1 == p) for (var K = 0; K < M; K++) V[b + (K >> 3)] |= H[Y + K] << (7 - (7 & K) * 1);
                }
                (B = V), (f = 3), (F = 1);
            } else if (!1 == y && 1 == O.length) {
                for (var V = new Uint8Array(M * G * 3), z = M * G, b = 0; b < z; b++) {
                    var q = 3 * b,
                        Q = 4 * b;
                    (V[q] = B[Q]), (V[q + 1] = B[Q + 1]), (V[q + 2] = B[Q + 2]);
                }
                (B = V), (f = 2), (F = 3), (Z = 3 * M);
            }
            (R.img = B), (R.bpl = Z), (R.bpp = F);
        }
        return {
            ctype: f,
            depth: p,
            plte: I,
            frames: O
        };
    }
    function _(t, n, r, i, o, a) {
        for (var s = [], l = 0; l < t.length; l++) {
            var c,
                u = new Uint8Array(t[l]),
                d = new Uint32Array(u.buffer),
                f = 0,
                p = 0,
                _ = n,
                g = r,
                E = +!!i;
            if (0 != l) {
                for (var v = a || i || 1 == l || 0 != s[l - 2].dispose ? 1 : 2, b = 0, y = 1000000000, O = 0; O < v; O++) {
                    for (var S = new Uint8Array(t[l - 1 - O]), I = new Uint32Array(t[l - 1 - O]), T = n, N = r, A = -1, C = -1, R = 0; R < r; R++)
                        for (var P = 0; P < n; P++) {
                            var w = R * n + P;
                            d[w] != I[w] && (P < T && (T = P), P > A && (A = P), R < N && (N = R), R > C && (C = R));
                        }
                    -1 == A && (T = N = A = C = 0), o && ((1 & T) == 1 && T--, (1 & N) == 1 && N--);
                    var D = (A - T + 1) * (C - N + 1);
                    D < y && ((y = D), (b = O), (f = T), (p = N), (_ = A - T + 1), (g = C - N + 1));
                }
                var S = new Uint8Array(t[l - 1 - b]);
                1 == b && (s[l - 1].dispose = 2),
                    e(S, n, r, (c = new Uint8Array(_ * g * 4)), _, g, -f, -p, 0),
                    1 == (E = +!!e(u, n, r, c, _, g, -f, -p, 3))
                        ? m(u, n, r, c, {
                              x: f,
                              y: p,
                              width: _,
                              height: g
                          })
                        : e(u, n, r, c, _, g, -f, -p, 0);
            } else c = u.slice(0);
            s.push({
                rect: {
                    x: f,
                    y: p,
                    width: _,
                    height: g
                },
                img: c,
                blend: E,
                dispose: 0
            });
        }
        if (i)
            for (var l = 0; l < s.length; l++) {
                var x = s[l];
                if (1 != x.blend) {
                    var L = x.rect,
                        M = s[l - 1].rect,
                        k = Math.min(L.x, M.x),
                        j = Math.min(L.y, M.y),
                        U = Math.max(L.x + L.width, M.x + M.width),
                        G = Math.max(L.y + L.height, M.y + M.height),
                        B = {
                            x: k,
                            y: j,
                            width: U - k,
                            height: G - j
                        };
                    (s[l - 1].dispose = 1), l - 1 != 0 && h(t, n, r, s, l - 1, B, o), h(t, n, r, s, l, B, o);
                }
            }
        var Z = 0;
        if (1 != t.length)
            for (var w = 0; w < s.length; w++) {
                var x = s[w];
                Z += x.rect.width * x.rect.height;
            }
        return s;
    }
    function h(t, n, r, i, o, a, s) {
        for (var l = Uint8Array, c = Uint32Array, u = new l(t[o - 1]), d = new c(t[o - 1]), f = o + 1 < t.length ? new l(t[o + 1]) : null, p = new l(t[o]), _ = new c(p.buffer), h = n, g = r, E = -1, v = -1, b = 0; b < a.height; b++)
            for (var y = 0; y < a.width; y++) {
                var O = a.x + y,
                    S = a.y + b,
                    I = S * n + O,
                    T = _[I];
                0 == T || (0 == i[o - 1].dispose && d[I] == T && (null == f || 0 != f[4 * I + 3])) || (O < h && (h = O), O > E && (E = O), S < g && (g = S), S > v && (v = S));
            }
        -1 == E && (h = g = E = v = 0),
            s && ((1 & h) == 1 && h--, (1 & g) == 1 && g--),
            (a = {
                x: h,
                y: g,
                width: E - h + 1,
                height: v - g + 1
            });
        var N = i[o];
        (N.rect = a), (N.blend = 1), (N.img = new Uint8Array(a.width * a.height * 4)), 0 == i[o - 1].dispose ? (e(u, n, r, N.img, a.width, a.height, -a.x, -a.y, 0), m(p, n, r, N.img, a)) : e(p, n, r, N.img, a.width, a.height, -a.x, -a.y, 0);
    }
    function m(t, n, r, i, o) {
        e(t, n, r, i, o.width, o.height, -o.x, -o.y, 2);
    }
    function g(e, t, n, r, i, o, a) {
        var s = [],
            l = [0, 1, 2, 3, 4];
        -1 != o ? (l = [o]) : (t * r > 500000 || 1 == n) && (l = [0]), a && (f = { level: 0 });
        var c = i.length > 10000000 && null != window.UZIP ? window.UZIP : pako;
        Date.now();
        for (var u = 0; u < l.length; u++) {
            for (var d = 0; d < t; d++) E(i, e, d, r, n, l[u]);
            s.push(c.deflate(i, f));
        }
        for (var f, p, _ = 1000000000, u = 0; u < s.length; u++) s[u].length < _ && ((p = u), (_ = s[u].length));
        return s[p];
    }
    function E(e, t, n, i, o, a) {
        var s = n * i,
            l = s + n;
        if (((e[l] = a), l++, 0 == a)) {
            if (i < 500) for (var c = 0; c < i; c++) e[l + c] = t[s + c];
            else e.set(new Uint8Array(t.buffer, s, i), l);
        } else if (1 == a) {
            for (var c = 0; c < o; c++) e[l + c] = t[s + c];
            for (var c = o; c < i; c++) e[l + c] = (t[s + c] - t[s + c - o] + 256) & 255;
        } else if (0 == n) {
            for (var c = 0; c < o; c++) e[l + c] = t[s + c];
            if (2 == a) for (var c = o; c < i; c++) e[l + c] = t[s + c];
            if (3 == a) for (var c = o; c < i; c++) e[l + c] = (t[s + c] - (t[s + c - o] >> 1) + 256) & 255;
            if (4 == a) for (var c = o; c < i; c++) e[l + c] = (t[s + c] - r(t[s + c - o], 0, 0) + 256) & 255;
        } else {
            if (2 == a) for (var c = 0; c < i; c++) e[l + c] = (t[s + c] + 256 - t[s + c - i]) & 255;
            if (3 == a) {
                for (var c = 0; c < o; c++) e[l + c] = (t[s + c] + 256 - (t[s + c - i] >> 1)) & 255;
                for (var c = o; c < i; c++) e[l + c] = (t[s + c] + 256 - ((t[s + c - i] + t[s + c - o]) >> 1)) & 255;
            }
            if (4 == a) {
                for (var c = 0; c < o; c++) e[l + c] = (t[s + c] + 256 - r(0, t[s + c - i], 0)) & 255;
                for (var c = o; c < i; c++) e[l + c] = (t[s + c] + 256 - r(t[s + c - o], t[s + c - i], t[s + c - o - i])) & 255;
            }
        }
    }
    function v(e, t, n) {
        Date.now();
        for (var r = new Uint8Array(e), i = r.slice(0), o = new Uint32Array(i.buffer), a = I(i, t), s = a[0], l = a[1], c = l.length, u = new Uint32Array(c), d = new Uint8Array(u.buffer), f = 0; f < c; f++) u[f] = l[f].est.rgba;
        var p,
            _ = r.length,
            h = new Uint8Array(_ >> 2);
        if (c <= 60) S(r, h, d), b(h, o, u);
        else if (r.length < 32000000)
            for (var f = 0; f < _; f += 4) {
                var m = r[f] * (1 / 255),
                    g = r[f + 1] * (1 / 255),
                    E = r[f + 2] * (1 / 255),
                    v = r[f + 3] * (1 / 255);
                (p = T(s, m, g, E, v)), (h[f >> 2] = p.ind), (o[f >> 2] = p.est.rgba);
            }
        else
            for (var f = 0; f < _; f += 4) {
                var m = r[f] * (1 / 255),
                    g = r[f + 1] * (1 / 255),
                    E = r[f + 2] * (1 / 255),
                    v = r[f + 3] * (1 / 255);
                for (p = s; p.left; ) p = 0 >= N(p.est, m, g, E, v) ? p.left : p.right;
                (h[f >> 2] = p.ind), (o[f >> 2] = p.est.rgba);
            }
        if (n || r.length * c < 10 * 4000000) {
            for (var O = 1000000000, f = 0; f < 10; f++) {
                var A = y(r, h, d);
                if (A / O > 0.997) break;
                O = A;
            }
            for (var f = 0; f < c; f++) l[f].est.rgba = u[f];
            b(h, o, u);
        }
        return {
            abuf: i.buffer,
            inds: h,
            plte: l
        };
    }
    function b(e, t, n) {
        for (var r = 0; r < e.length; r++) t[r] = n[e[r]];
    }
    function y(e, t, n) {
        return O(e, t, n), S(e, t, n);
    }
    function O(e, t, n) {
        for (var r = n.length >>> 2, i = new Uint32Array(4 * r), o = new Uint32Array(r), a = 0; a < e.length; a += 4) {
            var s = t[a >>> 2],
                l = 4 * s;
            o[s]++, (i[l] += e[a]), (i[l + 1] += e[a + 1]), (i[l + 2] += e[a + 2]), (i[l + 3] += e[a + 3]);
        }
        for (var a = 0; a < n.length; a++) n[a] = Math.round(i[a] / o[a >>> 2]);
    }
    function S(e, t, n) {
        for (var r = 0, i = n.length >>> 2, o = [], a = 0; a < i; a++) {
            for (var s = 4 * a, l = n[s], c = n[s + 1], u = n[s + 2], d = n[s + 3], f = 0, p = 1000000000, _ = 0; _ < i; _++)
                if (a != _) {
                    var h = 4 * _,
                        m = l - n[h],
                        g = c - n[h + 1],
                        E = u - n[h + 2],
                        v = d - n[h + 3],
                        b = m * m + g * g + E * E + v * v;
                    b < p && ((p = b), (f = _));
                }
            (o[a] = 0.5 * Math.sqrt(p)), (o[a] = o[a] * o[a]);
        }
        for (var a = 0; a < e.length; a += 4) {
            var l = e[a],
                c = e[a + 1],
                u = e[a + 2],
                d = e[a + 3],
                f = t[a >>> 2],
                s = 4 * f,
                m = l - n[s],
                g = c - n[s + 1],
                E = u - n[s + 2],
                v = d - n[s + 3],
                p = m * m + g * g + E * E + v * v;
            if (p > o[f])
                for (var _ = 0; _ < i; _++) {
                    (m = l - n[(s = 4 * _)]), (g = c - n[s + 1]);
                    var b = m * m + g * g + (E = u - n[s + 2]) * E + (v = d - n[s + 3]) * v;
                    if (b < p && ((p = b), (f = _), p < o[_])) break;
                }
            (t[a >>> 2] = f), (r += p);
        }
        return r / (e.length >>> 2);
    }
    function I(e, t, n) {
        null == n && (n = 0.0001);
        var r = new Uint32Array(e.buffer),
            i = {
                i0: 0,
                i1: e.length,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
        (i.bst = P(e, i.i0, i.i1)), (i.est = w(i.bst));
        for (var o = [i]; o.length < t; ) {
            for (var a = 0, s = 0, l = 0; l < o.length; l++) o[l].est.L > a && ((a = o[l].est.L), (s = l));
            if (a < n) break;
            var c = o[s],
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
                right: null
            };
            (d.bst = P(e, d.i0, d.i1)), (d.est = w(d.bst));
            var f = {
                i0: u,
                i1: c.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            f.bst = {
                R: [],
                m: [],
                N: c.bst.N - d.bst.N
            };
            for (var l = 0; l < 16; l++) f.bst.R[l] = c.bst.R[l] - d.bst.R[l];
            for (var l = 0; l < 4; l++) f.bst.m[l] = c.bst.m[l] - d.bst.m[l];
            (f.est = w(f.bst)), (c.left = d), (c.right = f), (o[s] = d), o.push(f);
        }
        o.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < o.length; l++) o[l].ind = l;
        return [i, o];
    }
    function T(e, t, n, r, i) {
        if (null == e.left) return (e.tdst = A(e.est.q, t, n, r, i)), e;
        var o = N(e.est, t, n, r, i),
            a = e.left,
            s = e.right;
        o > 0 && ((a = e.right), (s = e.left));
        var l = T(a, t, n, r, i);
        if (l.tdst <= o * o) return l;
        var c = T(s, t, n, r, i);
        return c.tdst < l.tdst ? c : l;
    }
    function N(e, t, n, r, i) {
        var o = e.e;
        return o[0] * t + o[1] * n + o[2] * r + o[3] * i - e.eMq;
    }
    function A(e, t, n, r, i) {
        var o = t - e[0],
            a = n - e[1],
            s = r - e[2],
            l = i - e[3];
        return o * o + a * a + s * s + l * l;
    }
    function C(e, t, n, r, i, o) {
        for (r -= 4; n < r; ) {
            for (; R(e, n, i) <= o; ) n += 4;
            for (; R(e, r, i) > o; ) r -= 4;
            if (n >= r) break;
            var a = t[n >> 2];
            (t[n >> 2] = t[r >> 2]), (t[r >> 2] = a), (n += 4), (r -= 4);
        }
        for (; R(e, n, i) > o; ) n -= 4;
        return n + 4;
    }
    function R(e, t, n) {
        return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
    }
    function P(e, t, n) {
        for (var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], o = (n - t) >> 2, a = t; a < n; a += 4) {
            var s = e[a] * (1 / 255),
                l = e[a + 1] * (1 / 255),
                c = e[a + 2] * (1 / 255),
                u = e[a + 3] * (1 / 255);
            (i[0] += s), (i[1] += l), (i[2] += c), (i[3] += u), (r[0] += s * s), (r[1] += s * l), (r[2] += s * c), (r[3] += s * u), (r[5] += l * l), (r[6] += l * c), (r[7] += l * u), (r[10] += c * c), (r[11] += c * u), (r[15] += u * u);
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
                N: o
            }
        );
    }
    function w(e) {
        var t = e.R,
            n = e.m,
            r = e.N,
            i = n[0],
            o = n[1],
            a = n[2],
            s = n[3],
            l = 0 == r ? 0 : 1 / r,
            c = [t[0] - i * i * l, t[1] - i * o * l, t[2] - i * a * l, t[3] - i * s * l, t[4] - o * i * l, t[5] - o * o * l, t[6] - o * a * l, t[7] - o * s * l, t[8] - a * i * l, t[9] - a * o * l, t[10] - a * a * l, t[11] - a * s * l, t[12] - s * i * l, t[13] - s * o * l, t[14] - s * a * l, t[15] - s * s * l],
            u = c,
            d = D,
            f = [Math.random(), Math.random(), Math.random(), Math.random()],
            p = 0,
            _ = 0;
        if (0 != r) for (var h = 0; h < 16 && ((f = d.multVec(u, f)), (_ = Math.sqrt(d.dot(f, f))), (f = d.sml(1 / _, f)), !(0 != h && 1e-9 > Math.abs(_ - p))); h++) p = _;
        var m = [i * l, o * l, a * l, s * l],
            g = d.dot(d.sml(255, m), f);
        return {
            Cov: c,
            q: m,
            e: f,
            L: p,
            eMq255: g,
            eMq: d.dot(f, m),
            rgba: ((Math.round(255 * m[3]) << 24) | (Math.round(255 * m[2]) << 16) | (Math.round(255 * m[1]) << 8) | (Math.round(255 * m[0]) << 0)) >>> 0
        };
    }
    var D = {
        multVec: function (e, t) {
            return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3], e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3], e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3], e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3]];
        },
        dot: function (e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
        },
        sml: function (e, t) {
            return [e * t[0], e * t[1], e * t[2], e * t[3]];
        }
    };
    function x(e) {
        for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
        for (var r = new Uint8Array(t), i = 0, n = 0; n < e.length; n++) {
            for (var o = new Uint8Array(e[n]), a = o.length, s = 0; s < a; s += 4) {
                var l = o[s],
                    c = o[s + 1],
                    u = o[s + 2],
                    d = o[s + 3];
                0 == d && (l = c = u = 0), (r[i + s] = l), (r[i + s + 1] = c), (r[i + s + 2] = u), (r[i + s + 3] = d);
            }
            i += a;
        }
        return r.buffer;
    }
    (t.encode = c), (t.encodeLL = u), (t.encode.compress = p), (t.encode.dither = l), (t.quantize = v), (t.quantize.findNearest = S), (t.quantize.getKDtree = I), (t.quantize.getNearest = T);
})(),
    (e.exports = t);
