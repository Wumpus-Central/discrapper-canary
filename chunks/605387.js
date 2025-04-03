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
                _ = u.rect.y,
                p = u.rect.width,
                h = u.rect.height,
                m = n(u.data, p, h, e);
            if (0 != c) for (var g = 0; g < o; g++) l[g] = a[g];
            if ((0 == u.blend ? f(m, p, h, a, t, r, d, _, 0) : 1 == u.blend && f(m, p, h, a, t, r, d, _, 1), i.push(a.buffer.slice(0)), 0 == u.dispose));
            else if (1 == u.dispose) f(s, p, h, a, t, r, d, _, 0);
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
            var _ = o << 2;
            if (8 == d) for (var p = 0; p < _; p += 4) (s[p] = t[p]), (s[p + 1] = t[p + 1]), (s[p + 2] = t[p + 2]), (s[p + 3] = t[p + 3]);
            if (16 == d) for (var p = 0; p < _; p++) s[p] = t[p << 1];
        } else if (2 == u) {
            var h = i.tabs.tRNS;
            if (null == h) {
                if (8 == d)
                    for (var p = 0; p < o; p++) {
                        var m = 3 * p;
                        c[p] = -16777216 | (t[m + 2] << 16) | (t[m + 1] << 8) | t[m];
                    }
                if (16 == d)
                    for (var p = 0; p < o; p++) {
                        var m = 6 * p;
                        c[p] = -16777216 | (t[m + 4] << 16) | (t[m + 2] << 8) | t[m];
                    }
            } else {
                var g = h[0],
                    E = h[1],
                    b = h[2];
                if (8 == d)
                    for (var p = 0; p < o; p++) {
                        var y = p << 2,
                            m = 3 * p;
                        (c[p] = -16777216 | (t[m + 2] << 16) | (t[m + 1] << 8) | t[m]), t[m] == g && t[m + 1] == E && t[m + 2] == b && (s[y + 3] = 0);
                    }
                if (16 == d)
                    for (var p = 0; p < o; p++) {
                        var y = p << 2,
                            m = 6 * p;
                        (c[p] = -16777216 | (t[m + 4] << 16) | (t[m + 2] << 8) | t[m]), f(t, m) == g && f(t, m + 2) == E && f(t, m + 4) == b && (s[y + 3] = 0);
                    }
            }
        } else if (3 == u) {
            var v = i.tabs.PLTE,
                O = i.tabs.tRNS,
                I = O ? O.length : 0;
            if (1 == d)
                for (var S = 0; S < r; S++)
                    for (var T = S * a, N = S * n, p = 0; p < n; p++) {
                        var y = (N + p) << 2,
                            A = (t[T + (p >> 3)] >> (7 - ((7 & p) << 0))) & 1,
                            C = 3 * A;
                        (s[y] = v[C]), (s[y + 1] = v[C + 1]), (s[y + 2] = v[C + 2]), (s[y + 3] = A < I ? O[A] : 255);
                    }
            if (2 == d)
                for (var S = 0; S < r; S++)
                    for (var T = S * a, N = S * n, p = 0; p < n; p++) {
                        var y = (N + p) << 2,
                            A = (t[T + (p >> 2)] >> (6 - ((3 & p) << 1))) & 3,
                            C = 3 * A;
                        (s[y] = v[C]), (s[y + 1] = v[C + 1]), (s[y + 2] = v[C + 2]), (s[y + 3] = A < I ? O[A] : 255);
                    }
            if (4 == d)
                for (var S = 0; S < r; S++)
                    for (var T = S * a, N = S * n, p = 0; p < n; p++) {
                        var y = (N + p) << 2,
                            A = (t[T + (p >> 1)] >> (4 - ((1 & p) << 2))) & 15,
                            C = 3 * A;
                        (s[y] = v[C]), (s[y + 1] = v[C + 1]), (s[y + 2] = v[C + 2]), (s[y + 3] = A < I ? O[A] : 255);
                    }
            if (8 == d)
                for (var p = 0; p < o; p++) {
                    var y = p << 2,
                        A = t[p],
                        C = 3 * A;
                    (s[y] = v[C]), (s[y + 1] = v[C + 1]), (s[y + 2] = v[C + 2]), (s[y + 3] = A < I ? O[A] : 255);
                }
        } else if (4 == u) {
            if (8 == d)
                for (var p = 0; p < o; p++) {
                    var y = p << 2,
                        R = p << 1,
                        P = t[R];
                    (s[y] = P), (s[y + 1] = P), (s[y + 2] = P), (s[y + 3] = t[R + 1]);
                }
            if (16 == d)
                for (var p = 0; p < o; p++) {
                    var y = p << 2,
                        R = p << 2,
                        P = t[R];
                    (s[y] = P), (s[y + 1] = P), (s[y + 2] = P), (s[y + 3] = t[R + 2]);
                }
        } else if (0 == u)
            for (var g = i.tabs.tRNS ? i.tabs.tRNS : -1, S = 0; S < r; S++) {
                var w = S * a,
                    D = S * n;
                if (1 == d)
                    for (var L = 0; L < n; L++) {
                        var P = 255 * ((t[w + (L >>> 3)] >>> (7 - (7 & L))) & 1),
                            x = 255 * (P != 255 * g);
                        c[D + L] = (x << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (2 == d)
                    for (var L = 0; L < n; L++) {
                        var P = 85 * ((t[w + (L >>> 2)] >>> (6 - ((3 & L) << 1))) & 3),
                            x = 255 * (P != 85 * g);
                        c[D + L] = (x << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (4 == d)
                    for (var L = 0; L < n; L++) {
                        var P = 17 * ((t[w + (L >>> 1)] >>> (4 - ((1 & L) << 2))) & 15),
                            x = 255 * (P != 17 * g);
                        c[D + L] = (x << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (8 == d)
                    for (var L = 0; L < n; L++) {
                        var P = t[w + L],
                            x = 255 * (P != g);
                        c[D + L] = (x << 24) | (P << 16) | (P << 8) | P;
                    }
                else if (16 == d)
                    for (var L = 0; L < n; L++) {
                        var P = t[w + (L << 1)],
                            x = 255 * (f(t, w + (L << 1)) != g);
                        c[D + L] = (x << 24) | (P << 16) | (P << 8) | P;
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
                _ = new Uint8Array(r.length),
                p = 0,
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
            var b = l.readASCII(r, s, 4);
            if (((s += 4), 'IHDR' == b)) d(r, s, f);
            else if ('iCCP' == b) {
                for (var y = s; 0 != r[y]; ) y++;
                l.readASCII(r, s, y - s), r[y + 1];
                var v = r.slice(y + 2, s + E),
                    O = null;
                try {
                    O = o(v);
                } catch (e) {
                    O = a(v);
                }
                f.tabs[b] = O;
            } else if ('CgBI' == b) f.tabs[b] = r.slice(s, s + 4);
            else if ('IDAT' == b) {
                for (var g = 0; g < E; g++) _[p + g] = r[s + g];
                p += E;
            } else if ('acTL' == b)
                (f.tabs[b] = {
                    num_frames: u(r, s),
                    num_plays: u(r, s + 4)
                }),
                    (n = new Uint8Array(r.length));
            else if ('fcTL' == b) {
                if (0 != h) {
                    var I = f.frames[f.frames.length - 1];
                    (I.data = i(f, n.slice(0, h), I.rect.width, I.rect.height)), (h = 0);
                }
                var S = {
                        x: u(r, s + 12),
                        y: u(r, s + 16),
                        width: u(r, s + 4),
                        height: u(r, s + 8)
                    },
                    T = c(r, s + 22),
                    N = {
                        rect: S,
                        delay: 1000 * (T = c(r, s + 20) / (0 == T ? 100 : T)),
                        dispose: r[s + 24],
                        blend: r[s + 25]
                    };
                f.frames.push(N);
            } else if ('fdAT' == b) {
                for (var g = 0; g < E - 4; g++) n[h + g] = r[s + g + 4];
                h += E - 4;
            } else if ('pHYs' == b) f.tabs[b] = [l.readUint(r, s), l.readUint(r, s + 4), r[s + 8]];
            else if ('cHRM' == b) {
                f.tabs[b] = [];
                for (var g = 0; g < 8; g++) f.tabs[b].push(l.readUint(r, s + 4 * g));
            } else if ('tEXt' == b || 'zTXt' == b) {
                null == f.tabs[b] && (f.tabs[b] = {});
                var A,
                    C = l.nextZero(r, s),
                    R = l.readASCII(r, s, C - s),
                    P = s + E - C - 1;
                if ('tEXt' == b) A = l.readASCII(r, C + 1, P);
                else {
                    var w = o(r.slice(C + 2, C + 2 + P));
                    A = l.readUTF8(w, 0, w.length);
                }
                f.tabs[b][R] = A;
            } else if ('iTXt' == b) {
                null == f.tabs[b] && (f.tabs[b] = {});
                var C = 0,
                    y = s;
                C = l.nextZero(r, y);
                var R = l.readASCII(r, y, C - y),
                    D = r[(y = C + 1)];
                r[y + 1], (y += 2), (C = l.nextZero(r, y)), l.readASCII(r, y, C - y), (y = C + 1), (C = l.nextZero(r, y)), l.readUTF8(r, y, C - y);
                var A,
                    P = E - ((y = C + 1) - s);
                if (0 == D) A = l.readUTF8(r, y, P);
                else {
                    var w = o(r.slice(y, y + P));
                    A = l.readUTF8(w, 0, w.length);
                }
                f.tabs[b][R] = A;
            } else if ('PLTE' == b) f.tabs[b] = l.readBytes(r, s, E);
            else if ('hIST' == b) {
                var L = f.tabs.PLTE.length / 3;
                f.tabs[b] = [];
                for (var g = 0; g < L; g++) f.tabs[b].push(c(r, s + 2 * g));
            } else if ('tRNS' == b) 3 == f.ctype ? (f.tabs[b] = l.readBytes(r, s, E)) : 0 == f.ctype ? (f.tabs[b] = c(r, s)) : 2 == f.ctype && (f.tabs[b] = [c(r, s), c(r, s + 2), c(r, s + 4)]);
            else if ('gAMA' == b) f.tabs[b] = l.readUint(r, s) / 100000;
            else if ('sRGB' == b) f.tabs[b] = r[s];
            else if ('bKGD' == b) 0 == f.ctype || 4 == f.ctype ? (f.tabs[b] = [c(r, s)]) : 2 == f.ctype || 6 == f.ctype ? (f.tabs[b] = [c(r, s), c(r, s + 2), c(r, s + 4)]) : 3 == f.ctype && (f.tabs[b] = r[s]);
            else if ('IEND' == b) break;
            (s += E), l.readUint(r, s), (s += 4);
        }
        if (0 != h) {
            var I = f.frames[f.frames.length - 1];
            I.data = i(f, n.slice(0, h), I.rect.width, I.rect.height);
        }
        return (f.data = i(f, _, f.width, f.height)), delete f.compress, delete f.interlace, delete f.filter, f;
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
                    for (var _ = l + f; l < _; ) (s[l] = d), l++;
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
                    _ = Uint8Array,
                    p = 0,
                    h = 0,
                    m = 0,
                    g = 0,
                    E = 0,
                    b = 0,
                    y = 0,
                    v = 0,
                    O = 0;
                if (3 == r[0] && 0 == r[1]) return u || new _(0);
                var I = null == u;
                for (I && (u = new _((r.length >>> 2) << 3)); 0 == p; ) {
                    if (((p = o(r, O, 1)), (h = o(r, O + 1, 2)), (O += 3), 0 == h)) {
                        (7 & O) != 0 && (O += 8 - (7 & O));
                        var S = (O >>> 3) + 4,
                            T = r[S - 4] | (r[S - 3] << 8);
                        I && (u = s(u, v + T)), u.set(new _(r.buffer, r.byteOffset + S, T), v), (O = (S + T) << 3), (v += T);
                        continue;
                    }
                    if ((I && (u = s(u, v + 131072)), 1 == h && ((d = e.g), (f = e.A), (b = 511), (y = 31)), 2 == h)) {
                        (m = i(r, O, 5) + 257), (g = i(r, O + 5, 5) + 1), (E = i(r, O + 10, 4) + 4), (O += 14);
                        for (var N = 1, A = 0; A < 38; A += 2) (e.b[A] = 0), (e.b[A + 1] = 0);
                        for (var A = 0; A < E; A++) {
                            var C = i(r, O + 3 * A, 3);
                            (e.b[(e.d[A] << 1) + 1] = C), C > N && (N = C);
                        }
                        (O += 3 * E), t(e.b, N), n(e.b, N, e.C), (d = e.k), (f = e.n), (O = l(e.C, (1 << N) - 1, m + g, r, O, e.a));
                        var R = c(e.a, 0, m, e.c);
                        b = (1 << R) - 1;
                        var P = c(e.a, m, g, e.e);
                        (y = (1 << P) - 1), t(e.c, R), n(e.c, R, d), t(e.e, P), n(e.e, P, f);
                    }
                    for (;;) {
                        var w = d[a(r, O) & b];
                        O += 15 & w;
                        var D = w >>> 4;
                        if (D >>> 8 == 0) u[v++] = D;
                        else if (256 == D) break;
                        else {
                            var L = v + D - 254;
                            if (D > 264) {
                                var x = e.B[D - 257];
                                (L = v + (x >>> 3) + i(r, O, 7 & x)), (O += 7 & x);
                            }
                            var M = f[a(r, O) & y];
                            O += 15 & M;
                            var k = M >>> 4,
                                j = e.h[k],
                                U = (j >>> 4) + o(r, O, 15 & j);
                            for (O += 15 & j, I && (u = s(u, v + 131072)); v < L; ) (u[v] = u[v++ - U]), (u[v] = u[v++ - U]), (u[v] = u[v++ - U]), (u[v] = u[v++ - U]);
                            v = L;
                        }
                    }
                }
                return u.length == v ? u : u.slice(0, v);
            }
        );
    })();
    function s(e, t) {
        for (var n = t.width, r = t.height, i = l(t), o = i >> 3, a = Math.ceil((n * i) / 8), s = new Uint8Array(r * a), u = 0, d = [0, 0, 4, 0, 2, 0, 1], f = [0, 4, 0, 2, 0, 1, 0], _ = [8, 8, 8, 4, 4, 2, 2], p = [8, 8, 4, 4, 2, 2, 1], h = 0; h < 7; ) {
            for (var m = _[h], g = p[h], E = 0, b = 0, y = d[h]; y < r; ) (y += m), b++;
            for (var v = f[h]; v < n; ) (v += g), E++;
            var O = Math.ceil((E * i) / 8);
            c(e, t, u, E, b);
            for (var I = 0, S = d[h]; S < r; ) {
                for (var T = f[h], N = (u + I * O) << 3; T < n; ) {
                    if (1 == i) {
                        var A = e[N >> 3];
                        (A = (A >> (7 - (7 & N))) & 1), (s[S * a + (T >> 3)] |= A << (7 - ((7 & T) << 0)));
                    }
                    if (2 == i) {
                        var A = e[N >> 3];
                        (A = (A >> (6 - (7 & N))) & 3), (s[S * a + (T >> 2)] |= A << (6 - ((3 & T) << 1)));
                    }
                    if (4 == i) {
                        var A = e[N >> 3];
                        (A = (A >> (4 - (7 & N))) & 15), (s[S * a + (T >> 1)] |= A << (4 - ((1 & T) << 2)));
                    }
                    if (i >= 8) for (var C = S * a + T * o, R = 0; R < o; R++) s[C + R] = e[(N >> 3) + R];
                    (N += i), (T += g);
                }
                I++, (S += m);
            }
            E * b != 0 && (u += b * (1 + O)), (h += 1);
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
        for (var _ = 0; _ < i; _++)
            if (((d = e[(c = (s = n + _ * a) + _ + 1) - 1]), (f = 0), 0 == d)) for (; f < a; f++) e[s + f] = e[c + f];
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
        (r.width = e.readUint(t, n)), (n += 4), (r.height = e.readUint(t, n)), (r.depth = t[(n += 4)]), (r.ctype = t[++n]), (r.compress = t[++n]), (r.filter = t[++n]), (r.interlace = t[++n]), n++;
    }
    function f(e, t, n, r, i, o, a, s, l) {
        for (var c = Math.min(t, i), u = Math.min(n, o), d = 0, f = 0, _ = 0; _ < u; _++)
            for (var p = 0; p < c; p++)
                if ((a >= 0 && s >= 0 ? ((d = (_ * t + p) << 2), (f = ((s + _) * i + a + p) << 2)) : ((d = ((-s + _) * t - a + p) << 2), (f = (_ * i + p) << 2)), 0 == l)) (r[f] = e[d]), (r[f + 1] = e[d + 1]), (r[f + 2] = e[d + 2]), (r[f + 3] = e[d + 3]);
                else if (1 == l) {
                    var h = e[d + 3] * (1 / 255),
                        m = e[d] * h,
                        g = e[d + 1] * h,
                        E = e[d + 2] * h,
                        b = r[f + 3] * (1 / 255),
                        y = r[f] * b,
                        v = r[f + 1] * b,
                        O = r[f + 2] * b,
                        I = 1 - h,
                        S = h + b * I,
                        T = 0 == S ? 0 : 1 / S;
                    (r[f + 3] = 255 * S), (r[f + 0] = (m + y * I) * T), (r[f + 1] = (g + v * I) * T), (r[f + 2] = (E + O * I) * T);
                } else if (2 == l) {
                    var h = e[d + 3],
                        m = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        b = r[f + 3],
                        y = r[f],
                        v = r[f + 1],
                        O = r[f + 2];
                    h == b && m == y && g == v && E == O ? ((r[f] = 0), (r[f + 1] = 0), (r[f + 2] = 0), (r[f + 3] = 0)) : ((r[f] = m), (r[f + 1] = g), (r[f + 2] = E), (r[f + 3] = h));
                } else if (3 == l) {
                    var h = e[d + 3],
                        m = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        b = r[f + 3],
                        y = r[f],
                        v = r[f + 1],
                        O = r[f + 2];
                    if (h == b && m == y && g == v && E == O) continue;
                    if (h < 220 && b > 20) return !1;
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
        for (var u = r.length, d = [], f = [], _ = 0; _ < u; _++) {
            var p = r[_];
            d.push([(p >>> 0) & 255, (p >>> 8) & 255, (p >>> 16) & 255, (p >>> 24) & 255]);
        }
        for (var _ = 0; _ < u; _++) {
            for (var h = 4294967295, m = 0, g = 0; g < u; g++) {
                var E = s(d[_], d[g]);
                g != _ && E < h && ((h = E), (m = g));
            }
            var b = Math.sqrt(h) / 2;
            f[_] = ~~(b * b);
        }
        for (var y = new Uint32Array(i.buffer), v = new Int16Array(t * n * 4), O = 4, I = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5], _ = 0; _ < I.length; _++) I[_] = 255 * (-0.5 + (I[_] + 0.5) / (O * O));
        for (var S = 0; S < n; S++)
            for (var T = 0; T < t; T++) {
                var N,
                    _ = (S * t + T) * 4;
                if (2 != c) N = [a(e[_] + v[_]), a(e[_ + 1] + v[_ + 1]), a(e[_ + 2] + v[_ + 2]), a(e[_ + 3] + v[_ + 3])];
                else {
                    var E = I[(S & (O - 1)) * O + (T & (O - 1))];
                    N = [a(e[_] + E), a(e[_ + 1] + E), a(e[_ + 2] + E), a(e[_ + 3] + E)];
                }
                for (var m = 0, A = 16777215, g = 0; g < u; g++) {
                    var C = s(N, d[g]);
                    C < A && ((A = C), (m = g));
                }
                var R = d[m],
                    P = [N[0] - R[0], N[1] - R[1], N[2] - R[2], N[3] - R[3]];
                1 == c && (T != t - 1 && o(P, v, _ + 4, 7), S != n - 1 && (0 != T && o(P, v, _ + 4 * t - 4, 3), o(P, v, _ + 4 * t, 5), T != t - 1 && o(P, v, _ + 4 * t + 4, 1))), (l[_ >> 2] = m), (y[_ >> 2] = r[m]);
            }
    }
    function c(e, t, n, r, i, o, a, s) {
        var l = {
            ctype: 0 + 2 * (1 != r) + 4 * (0 != i),
            depth: o,
            frames: []
        };
        Date.now();
        for (var c = (r + i) * o, f = c * t, _ = 0; _ < e.length; _++)
            l.frames.push({
                rect: {
                    x: 0,
                    y: 0,
                    width: t,
                    height: n
                },
                img: new Uint8Array(e[_]),
                blend: 0,
                dispose: 1,
                bpp: Math.ceil(c / 8),
                bpl: Math.ceil(f / 8)
            });
        return d(l, 0, !0), u(l, t, n, a, s);
    }
    function u(e, t, r, o, a) {
        null == a && (a = {});
        var s,
            l = i.crc,
            c = n.writeUint,
            u = n.writeUshort,
            d = n.writeASCII,
            f = 8,
            _ = e.frames.length > 1,
            p = !1,
            h = 33 + 20 * !!_;
        if ((null != a.sRGB && (h += 13), null != a.pHYs && (h += 21), null != a.iCCP && (h += 21 + (s = pako.deflate(a.iCCP)).length + 4), 3 == e.ctype)) {
            for (var m = e.plte.length, g = 0; g < m; g++) e.plte[g] >>> 24 != 255 && (p = !0);
            h += 8 + 3 * m + 4 + (p ? 8 + +m + 4 : 0);
        }
        for (var E = 0; E < e.frames.length; E++) {
            var b = e.frames[E];
            _ && (h += 38), (h += b.cimg.length + 12), 0 != E && (h += 4);
        }
        for (var y = new Uint8Array((h += 12)), v = [137, 80, 78, 71, 13, 10, 26, 10], g = 0; g < 8; g++) y[g] = v[g];
        if ((c(y, f, 13), d(y, (f += 4), 'IHDR'), c(y, (f += 4), t), c(y, (f += 4), r), (y[(f += 4)] = e.depth), (y[++f] = e.ctype), (y[++f] = 0), (y[++f] = 0), (y[++f] = 0), c(y, ++f, l(y, f - 17, 17)), (f += 4), null != a.sRGB && (c(y, f, 1), d(y, (f += 4), 'sRGB'), (y[(f += 4)] = a.sRGB), c(y, ++f, l(y, f - 5, 5)), (f += 4)), null != a.iCCP)) {
            var O = 13 + s.length;
            c(y, f, O), d(y, (f += 4), 'iCCP'), d(y, (f += 4), 'ICC profile'), (f += 11), (f += 2), y.set(s, f), c(y, (f += s.length), l(y, f - (O + 4), O + 4)), (f += 4);
        }
        if ((null != a.pHYs && (c(y, f, 9), d(y, (f += 4), 'pHYs'), c(y, (f += 4), a.pHYs[0]), c(y, (f += 4), a.pHYs[1]), (y[(f += 4)] = a.pHYs[2]), c(y, ++f, l(y, f - 13, 13)), (f += 4)), _ && (c(y, f, 8), d(y, (f += 4), 'acTL'), c(y, (f += 4), e.frames.length), c(y, (f += 4), null != a.loop ? a.loop : 0), c(y, (f += 4), l(y, f - 12, 12)), (f += 4)), 3 == e.ctype)) {
            var m = e.plte.length;
            c(y, f, 3 * m), d(y, (f += 4), 'PLTE'), (f += 4);
            for (var g = 0; g < m; g++) {
                var I = 3 * g,
                    S = e.plte[g],
                    T = 255 & S,
                    N = (S >>> 8) & 255,
                    A = (S >>> 16) & 255;
                (y[f + I + 0] = T), (y[f + I + 1] = N), (y[f + I + 2] = A);
            }
            if ((c(y, (f += 3 * m), l(y, f - 3 * m - 4, 3 * m + 4)), (f += 4), p)) {
                c(y, f, m), d(y, (f += 4), 'tRNS'), (f += 4);
                for (var g = 0; g < m; g++) y[f + g] = (e.plte[g] >>> 24) & 255;
                c(y, (f += m), l(y, f - m - 4, m + 4)), (f += 4);
            }
        }
        for (var C = 0, E = 0; E < e.frames.length; E++) {
            var b = e.frames[E];
            _ && (c(y, f, 26), d(y, (f += 4), 'fcTL'), c(y, (f += 4), C++), c(y, (f += 4), b.rect.width), c(y, (f += 4), b.rect.height), c(y, (f += 4), b.rect.x), c(y, (f += 4), b.rect.y), u(y, (f += 4), o[E]), u(y, (f += 2), 1000), (y[(f += 2)] = b.dispose), (y[++f] = b.blend), c(y, ++f, l(y, f - 30, 30)), (f += 4));
            var R = b.cimg,
                m = R.length;
            c(y, f, m + 4 * (0 != E));
            var P = (f += 4);
            d(y, f, 0 == E ? 'IDAT' : 'fdAT'), (f += 4), 0 != E && (c(y, f, C++), (f += 4)), y.set(R, f), c(y, (f += m), l(y, P, f - P)), (f += 4);
        }
        return c(y, f, 0), d(y, (f += 4), 'IEND'), c(y, (f += 4), l(y, f - 4, 4)), (f += 4), y.buffer;
    }
    function d(e, t, n) {
        for (var r = 0; r < e.frames.length; r++) {
            var i = e.frames[r],
                o = (i.rect.width, i.rect.height),
                a = new Uint8Array(o * i.bpl + o);
            i.cimg = m(i.img, o, i.bpp, i.bpl, a, t, n);
        }
    }
    function f(e, t, n, r, i) {
        for (var o = i[0], a = i[1], s = i[2], c = i[3], u = i[4], d = i[5], f = 6, p = 8, h = 255, m = 0; m < e.length; m++) for (var g = new Uint8Array(e[m]), b = g.length, y = 0; y < b; y += 4) h &= g[y + 3];
        var v = 255 != h,
            O = _(e, t, n, o, a, s),
            I = {},
            S = [],
            T = [];
        if (0 != r) {
            for (var N = [], y = 0; y < O.length; y++) N.push(O[y].img.buffer);
            for (var A = E(D(N), r), y = 0; y < A.plte.length; y++) S.push(A.plte[y].est.rgba);
            for (var C = 0, y = 0; y < O.length; y++) {
                var R = O[y],
                    P = R.img.length,
                    w = new Uint8Array(A.inds.buffer, C >> 2, P >> 2);
                T.push(w);
                var L = new Uint8Array(A.abuf, C, P);
                d && l(R.img, R.rect.width, R.rect.height, S, L, w), R.img.set(L), (C += P);
            }
        } else
            for (var m = 0; m < O.length; m++) {
                var R = O[m],
                    x = new Uint32Array(R.img.buffer),
                    M = R.rect.width,
                    b = x.length,
                    w = new Uint8Array(b);
                T.push(w);
                for (var y = 0; y < b; y++) {
                    var k = x[y];
                    if (0 != y && k == x[y - 1]) w[y] = w[y - 1];
                    else if (y > M && k == x[y - M]) w[y] = w[y - M];
                    else {
                        var j = I[k];
                        if (null == j && ((I[k] = j = S.length), S.push(k), S.length >= 300)) break;
                        w[y] = j;
                    }
                }
            }
        var U = S.length;
        U <= 256 && !1 == u && (p = Math.max((p = U <= 2 ? 1 : U <= 4 ? 2 : U <= 16 ? 4 : 8), c));
        for (var m = 0; m < O.length; m++) {
            var R = O[m],
                M = (R.rect.x, R.rect.y, R.rect.width),
                G = R.rect.height,
                B = R.img;
            new Uint32Array(B.buffer);
            var F = 4 * M,
                V = 4;
            if (U <= 256 && !1 == u) {
                for (var Z = new Uint8Array((F = Math.ceil((p * M) / 8)) * G), H = T[m], W = 0; W < G; W++) {
                    var y = W * F,
                        Y = W * M;
                    if (8 == p) for (var K = 0; K < M; K++) Z[y + K] = H[Y + K];
                    else if (4 == p) for (var K = 0; K < M; K++) Z[y + (K >> 1)] |= H[Y + K] << (4 - (1 & K) * 4);
                    else if (2 == p) for (var K = 0; K < M; K++) Z[y + (K >> 2)] |= H[Y + K] << (6 - (3 & K) * 2);
                    else if (1 == p) for (var K = 0; K < M; K++) Z[y + (K >> 3)] |= H[Y + K] << (7 - (7 & K) * 1);
                }
                (B = Z), (f = 3), (V = 1);
            } else if (!1 == v && 1 == O.length) {
                for (var Z = new Uint8Array(M * G * 3), z = M * G, y = 0; y < z; y++) {
                    var q = 3 * y,
                        Q = 4 * y;
                    (Z[q] = B[Q]), (Z[q + 1] = B[Q + 1]), (Z[q + 2] = B[Q + 2]);
                }
                (B = Z), (f = 2), (V = 3), (F = 3 * M);
            }
            (R.img = B), (R.bpl = F), (R.bpp = V);
        }
        return {
            ctype: f,
            depth: p,
            plte: S,
            frames: O
        };
    }
    function _(t, n, r, i, o, a) {
        for (var s = [], l = 0; l < t.length; l++) {
            var c,
                u = new Uint8Array(t[l]),
                d = new Uint32Array(u.buffer),
                f = 0,
                _ = 0,
                m = n,
                g = r,
                E = +!!i;
            if (0 != l) {
                for (var b = a || i || 1 == l || 0 != s[l - 2].dispose ? 1 : 2, y = 0, v = 1000000000, O = 0; O < b; O++) {
                    for (var I = new Uint8Array(t[l - 1 - O]), S = new Uint32Array(t[l - 1 - O]), T = n, N = r, A = -1, C = -1, R = 0; R < r; R++)
                        for (var P = 0; P < n; P++) {
                            var w = R * n + P;
                            d[w] != S[w] && (P < T && (T = P), P > A && (A = P), R < N && (N = R), R > C && (C = R));
                        }
                    -1 == A && (T = N = A = C = 0), o && ((1 & T) == 1 && T--, (1 & N) == 1 && N--);
                    var D = (A - T + 1) * (C - N + 1);
                    D < v && ((v = D), (y = O), (f = T), (_ = N), (m = A - T + 1), (g = C - N + 1));
                }
                var I = new Uint8Array(t[l - 1 - y]);
                1 == y && (s[l - 1].dispose = 2),
                    e(I, n, r, (c = new Uint8Array(m * g * 4)), m, g, -f, -_, 0),
                    1 == (E = +!!e(u, n, r, c, m, g, -f, -_, 3))
                        ? h(u, n, r, c, {
                              x: f,
                              y: _,
                              width: m,
                              height: g
                          })
                        : e(u, n, r, c, m, g, -f, -_, 0);
            } else c = u.slice(0);
            s.push({
                rect: {
                    x: f,
                    y: _,
                    width: m,
                    height: g
                },
                img: c,
                blend: E,
                dispose: 0
            });
        }
        if (i)
            for (var l = 0; l < s.length; l++) {
                var L = s[l];
                if (1 != L.blend) {
                    var x = L.rect,
                        M = s[l - 1].rect,
                        k = Math.min(x.x, M.x),
                        j = Math.min(x.y, M.y),
                        U = Math.max(x.x + x.width, M.x + M.width),
                        G = Math.max(x.y + x.height, M.y + M.height),
                        B = {
                            x: k,
                            y: j,
                            width: U - k,
                            height: G - j
                        };
                    (s[l - 1].dispose = 1), l - 1 != 0 && p(t, n, r, s, l - 1, B, o), p(t, n, r, s, l, B, o);
                }
            }
        var F = 0;
        if (1 != t.length)
            for (var w = 0; w < s.length; w++) {
                var L = s[w];
                F += L.rect.width * L.rect.height;
            }
        return s;
    }
    function p(t, n, r, i, o, a, s) {
        for (var l = Uint8Array, c = Uint32Array, u = new l(t[o - 1]), d = new c(t[o - 1]), f = o + 1 < t.length ? new l(t[o + 1]) : null, _ = new l(t[o]), p = new c(_.buffer), m = n, g = r, E = -1, b = -1, y = 0; y < a.height; y++)
            for (var v = 0; v < a.width; v++) {
                var O = a.x + v,
                    I = a.y + y,
                    S = I * n + O,
                    T = p[S];
                0 == T || (0 == i[o - 1].dispose && d[S] == T && (null == f || 0 != f[4 * S + 3])) || (O < m && (m = O), O > E && (E = O), I < g && (g = I), I > b && (b = I));
            }
        -1 == E && (m = g = E = b = 0),
            s && ((1 & m) == 1 && m--, (1 & g) == 1 && g--),
            (a = {
                x: m,
                y: g,
                width: E - m + 1,
                height: b - g + 1
            });
        var N = i[o];
        (N.rect = a), (N.blend = 1), (N.img = new Uint8Array(a.width * a.height * 4)), 0 == i[o - 1].dispose ? (e(u, n, r, N.img, a.width, a.height, -a.x, -a.y, 0), h(_, n, r, N.img, a)) : e(_, n, r, N.img, a.width, a.height, -a.x, -a.y, 0);
    }
    function h(t, n, r, i, o) {
        e(t, n, r, i, o.width, o.height, -o.x, -o.y, 2);
    }
    function m(e, t, n, r, i, o, a) {
        var s = [],
            l = [0, 1, 2, 3, 4];
        -1 != o ? (l = [o]) : (t * r > 500000 || 1 == n) && (l = [0]), a && (f = { level: 0 });
        var c = i.length > 10000000 && null != window.UZIP ? window.UZIP : pako;
        Date.now();
        for (var u = 0; u < l.length; u++) {
            for (var d = 0; d < t; d++) g(i, e, d, r, n, l[u]);
            s.push(c.deflate(i, f));
        }
        for (var f, _, p = 1000000000, u = 0; u < s.length; u++) s[u].length < p && ((_ = u), (p = s[u].length));
        return s[_];
    }
    function g(e, t, n, i, o, a) {
        var s = n * i,
            l = s + n;
        if (((e[l] = a), l++, 0 == a))
            if (i < 500) for (var c = 0; c < i; c++) e[l + c] = t[s + c];
            else e.set(new Uint8Array(t.buffer, s, i), l);
        else if (1 == a) {
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
    function E(e, t, n) {
        Date.now();
        for (var r = new Uint8Array(e), i = r.slice(0), o = new Uint32Array(i.buffer), a = I(i, t), s = a[0], l = a[1], c = l.length, u = new Uint32Array(c), d = new Uint8Array(u.buffer), f = 0; f < c; f++) u[f] = l[f].est.rgba;
        var _,
            p = r.length,
            h = new Uint8Array(p >> 2);
        if (c <= 60) O(r, h, d), b(h, o, u);
        else if (r.length < 32000000)
            for (var f = 0; f < p; f += 4) {
                var m = r[f] * (1 / 255),
                    g = r[f + 1] * (1 / 255),
                    E = r[f + 2] * (1 / 255),
                    v = r[f + 3] * (1 / 255);
                (_ = S(s, m, g, E, v)), (h[f >> 2] = _.ind), (o[f >> 2] = _.est.rgba);
            }
        else
            for (var f = 0; f < p; f += 4) {
                var m = r[f] * (1 / 255),
                    g = r[f + 1] * (1 / 255),
                    E = r[f + 2] * (1 / 255),
                    v = r[f + 3] * (1 / 255);
                for (_ = s; _.left; ) _ = 0 >= T(_.est, m, g, E, v) ? _.left : _.right;
                (h[f >> 2] = _.ind), (o[f >> 2] = _.est.rgba);
            }
        if (n || r.length * c < 10 * 4000000) {
            for (var N = 1000000000, f = 0; f < 10; f++) {
                var A = y(r, h, d);
                if (A / N > 0.997) break;
                N = A;
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
        return v(e, t, n), O(e, t, n);
    }
    function v(e, t, n) {
        for (var r = n.length >>> 2, i = new Uint32Array(4 * r), o = new Uint32Array(r), a = 0; a < e.length; a += 4) {
            var s = t[a >>> 2],
                l = 4 * s;
            o[s]++, (i[l] += e[a]), (i[l + 1] += e[a + 1]), (i[l + 2] += e[a + 2]), (i[l + 3] += e[a + 3]);
        }
        for (var a = 0; a < n.length; a++) n[a] = Math.round(i[a] / o[a >>> 2]);
    }
    function O(e, t, n) {
        for (var r = 0, i = n.length >>> 2, o = [], a = 0; a < i; a++) {
            for (var s = 4 * a, l = n[s], c = n[s + 1], u = n[s + 2], d = n[s + 3], f = 0, _ = 1000000000, p = 0; p < i; p++)
                if (a != p) {
                    var h = 4 * p,
                        m = l - n[h],
                        g = c - n[h + 1],
                        E = u - n[h + 2],
                        b = d - n[h + 3],
                        y = m * m + g * g + E * E + b * b;
                    y < _ && ((_ = y), (f = p));
                }
            (o[a] = 0.5 * Math.sqrt(_)), (o[a] = o[a] * o[a]);
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
                b = d - n[s + 3],
                _ = m * m + g * g + E * E + b * b;
            if (_ > o[f])
                for (var p = 0; p < i; p++) {
                    (m = l - n[(s = 4 * p)]), (g = c - n[s + 1]);
                    var y = m * m + g * g + (E = u - n[s + 2]) * E + (b = d - n[s + 3]) * b;
                    if (y < _ && ((_ = y), (f = p), _ < o[p])) break;
                }
            (t[a >>> 2] = f), (r += _);
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
        (i.bst = R(e, i.i0, i.i1)), (i.est = P(i.bst));
        for (var o = [i]; o.length < t; ) {
            for (var a = 0, s = 0, l = 0; l < o.length; l++) o[l].est.L > a && ((a = o[l].est.L), (s = l));
            if (a < n) break;
            var c = o[s],
                u = A(e, r, c.i0, c.i1, c.est.e, c.est.eMq255);
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
            (d.bst = R(e, d.i0, d.i1)), (d.est = P(d.bst));
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
            (f.est = P(f.bst)), (c.left = d), (c.right = f), (o[s] = d), o.push(f);
        }
        o.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < o.length; l++) o[l].ind = l;
        return [i, o];
    }
    function S(e, t, n, r, i) {
        if (null == e.left) return (e.tdst = N(e.est.q, t, n, r, i)), e;
        var o = T(e.est, t, n, r, i),
            a = e.left,
            s = e.right;
        o > 0 && ((a = e.right), (s = e.left));
        var l = S(a, t, n, r, i);
        if (l.tdst <= o * o) return l;
        var c = S(s, t, n, r, i);
        return c.tdst < l.tdst ? c : l;
    }
    function T(e, t, n, r, i) {
        var o = e.e;
        return o[0] * t + o[1] * n + o[2] * r + o[3] * i - e.eMq;
    }
    function N(e, t, n, r, i) {
        var o = t - e[0],
            a = n - e[1],
            s = r - e[2],
            l = i - e[3];
        return o * o + a * a + s * s + l * l;
    }
    function A(e, t, n, r, i, o) {
        for (r -= 4; n < r; ) {
            for (; C(e, n, i) <= o; ) n += 4;
            for (; C(e, r, i) > o; ) r -= 4;
            if (n >= r) break;
            var a = t[n >> 2];
            (t[n >> 2] = t[r >> 2]), (t[r >> 2] = a), (n += 4), (r -= 4);
        }
        for (; C(e, n, i) > o; ) n -= 4;
        return n + 4;
    }
    function C(e, t, n) {
        return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
    }
    function R(e, t, n) {
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
    function P(e) {
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
            d = w,
            f = [Math.random(), Math.random(), Math.random(), Math.random()],
            _ = 0,
            p = 0;
        if (0 != r) for (var h = 0; h < 16 && ((f = d.multVec(u, f)), (p = Math.sqrt(d.dot(f, f))), (f = d.sml(1 / p, f)), !(0 != h && 1e-9 > Math.abs(p - _))); h++) _ = p;
        var m = [i * l, o * l, a * l, s * l],
            g = d.dot(d.sml(255, m), f);
        return {
            Cov: c,
            q: m,
            e: f,
            L: _,
            eMq255: g,
            eMq: d.dot(f, m),
            rgba: ((Math.round(255 * m[3]) << 24) | (Math.round(255 * m[2]) << 16) | (Math.round(255 * m[1]) << 8) | (Math.round(255 * m[0]) << 0)) >>> 0
        };
    }
    var w = {
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
    function D(e) {
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
    (t.encode = function (e, t, n, r, i, o, a) {
        null == r && (r = 0), null == a && (a = !1);
        var s = f(e, t, n, r, [!1, !1, !1, 0, a, !1]);
        return d(s, -1), u(s, t, n, i, o);
    }),
        (t.encodeLL = c),
        (t.encode.compress = f),
        (t.encode.dither = l),
        (t.quantize = E),
        (t.quantize.findNearest = O),
        (t.quantize.getKDtree = I),
        (t.quantize.getNearest = S);
})(),
    (e.exports = t);
