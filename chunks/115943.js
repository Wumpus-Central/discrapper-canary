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
            for (var i, a = "", s = 0; s < r; s++) a += "%" + e.pad(t[n + s].toString(16));
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
            var a = t * r * 4, s = new Uint8Array(a), o = new Uint8Array(a), l = new Uint8Array(a), u = 0;
            u < e.frames.length;
            u++
        ) {
            var c = e.frames[u],
                d = c.rect.x,
                f = c.rect.y,
                p = c.rect.width,
                h = c.rect.height,
                m = n(c.data, p, h, e);
            if (0 != u) for (var g = 0; g < a; g++) l[g] = s[g];
            if (
                (0 == c.blend ? _(m, p, h, s, t, r, d, f, 0) : 1 == c.blend && _(m, p, h, s, t, r, d, f, 1),
                i.push(s.buffer.slice(0)),
                0 == c.dispose)
            );
            else if (1 == c.dispose) _(o, p, h, s, t, r, d, f, 0);
            else if (2 == c.dispose) for (var g = 0; g < a; g++) s[g] = l[g];
        }
        return i;
    }
    function n(t, n, r, i) {
        var a = n * r,
            s = Math.ceil((n * l(i)) / 8),
            o = new Uint8Array(4 * a),
            u = new Uint32Array(o.buffer),
            c = i.ctype,
            d = i.depth,
            _ = e.readUshort;
        if ((Date.now(), 6 == c)) {
            var f = a << 2;
            if (8 == d)
                for (var p = 0; p < f; p += 4)
                    (o[p] = t[p]), (o[p + 1] = t[p + 1]), (o[p + 2] = t[p + 2]), (o[p + 3] = t[p + 3]);
            if (16 == d) for (var p = 0; p < f; p++) o[p] = t[p << 1];
        } else if (2 == c) {
            var h = i.tabs.tRNS;
            if (null == h) {
                if (8 == d)
                    for (var p = 0; p < a; p++) {
                        var m = 3 * p;
                        u[p] = -0x1000000 | (t[m + 2] << 16) | (t[m + 1] << 8) | t[m];
                    }
                if (16 == d)
                    for (var p = 0; p < a; p++) {
                        var m = 6 * p;
                        u[p] = -0x1000000 | (t[m + 4] << 16) | (t[m + 2] << 8) | t[m];
                    }
            } else {
                var g = h[0],
                    E = h[1],
                    A = h[2];
                if (8 == d)
                    for (var p = 0; p < a; p++) {
                        var I = p << 2,
                            m = 3 * p;
                        (u[p] = -0x1000000 | (t[m + 2] << 16) | (t[m + 1] << 8) | t[m]),
                            t[m] == g && t[m + 1] == E && t[m + 2] == A && (o[I + 3] = 0);
                    }
                if (16 == d)
                    for (var p = 0; p < a; p++) {
                        var I = p << 2,
                            m = 6 * p;
                        (u[p] = -0x1000000 | (t[m + 4] << 16) | (t[m + 2] << 8) | t[m]),
                            _(t, m) == g && _(t, m + 2) == E && _(t, m + 4) == A && (o[I + 3] = 0);
                    }
            }
        } else if (3 == c) {
            var T = i.tabs.PLTE,
                y = i.tabs.tRNS,
                S = y ? y.length : 0;
            if (1 == d)
                for (var v = 0; v < r; v++)
                    for (var C = v * s, b = v * n, p = 0; p < n; p++) {
                        var I = (b + p) << 2,
                            N = (t[C + (p >> 3)] >> (7 - (7 & p))) & 1,
                            R = 3 * N;
                        (o[I] = T[R]), (o[I + 1] = T[R + 1]), (o[I + 2] = T[R + 2]), (o[I + 3] = N < S ? y[N] : 255);
                    }
            if (2 == d)
                for (var v = 0; v < r; v++)
                    for (var C = v * s, b = v * n, p = 0; p < n; p++) {
                        var I = (b + p) << 2,
                            N = (t[C + (p >> 2)] >> (6 - ((3 & p) << 1))) & 3,
                            R = 3 * N;
                        (o[I] = T[R]), (o[I + 1] = T[R + 1]), (o[I + 2] = T[R + 2]), (o[I + 3] = N < S ? y[N] : 255);
                    }
            if (4 == d)
                for (var v = 0; v < r; v++)
                    for (var C = v * s, b = v * n, p = 0; p < n; p++) {
                        var I = (b + p) << 2,
                            N = (t[C + (p >> 1)] >> (4 - ((1 & p) << 2))) & 15,
                            R = 3 * N;
                        (o[I] = T[R]), (o[I + 1] = T[R + 1]), (o[I + 2] = T[R + 2]), (o[I + 3] = N < S ? y[N] : 255);
                    }
            if (8 == d)
                for (var p = 0; p < a; p++) {
                    var I = p << 2,
                        N = t[p],
                        R = 3 * N;
                    (o[I] = T[R]), (o[I + 1] = T[R + 1]), (o[I + 2] = T[R + 2]), (o[I + 3] = N < S ? y[N] : 255);
                }
        } else if (4 == c) {
            if (8 == d)
                for (var p = 0; p < a; p++) {
                    var I = p << 2,
                        O = p << 1,
                        D = t[O];
                    (o[I] = D), (o[I + 1] = D), (o[I + 2] = D), (o[I + 3] = t[O + 1]);
                }
            if (16 == d)
                for (var p = 0; p < a; p++) {
                    var I = p << 2,
                        O = p << 2,
                        D = t[O];
                    (o[I] = D), (o[I + 1] = D), (o[I + 2] = D), (o[I + 3] = t[O + 2]);
                }
        } else if (0 == c)
            for (var g = i.tabs.tRNS ? i.tabs.tRNS : -1, v = 0; v < r; v++) {
                var L = v * s,
                    w = v * n;
                if (1 == d)
                    for (var x = 0; x < n; x++) {
                        var D = 255 * ((t[L + (x >>> 3)] >>> (7 - (7 & x))) & 1),
                            P = 255 * (D != 255 * g);
                        u[w + x] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (2 == d)
                    for (var x = 0; x < n; x++) {
                        var D = 85 * ((t[L + (x >>> 2)] >>> (6 - ((3 & x) << 1))) & 3),
                            P = 255 * (D != 85 * g);
                        u[w + x] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (4 == d)
                    for (var x = 0; x < n; x++) {
                        var D = 17 * ((t[L + (x >>> 1)] >>> (4 - ((1 & x) << 2))) & 15),
                            P = 255 * (D != 17 * g);
                        u[w + x] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (8 == d)
                    for (var x = 0; x < n; x++) {
                        var D = t[L + x],
                            P = 255 * (D != g);
                        u[w + x] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
                else if (16 == d)
                    for (var x = 0; x < n; x++) {
                        var D = t[L + (x << 1)],
                            P = 255 * (_(t, L + (x << 1)) != g);
                        u[w + x] = (P << 24) | (D << 16) | (D << 8) | D;
                    }
            }
        return o;
    }
    function r(t) {
        for (
            var n,
                r = new Uint8Array(t),
                o = 8,
                l = e,
                u = l.readUshort,
                c = l.readUint,
                _ = { tabs: {}, frames: [] },
                f = new Uint8Array(r.length),
                p = 0,
                h = 0,
                m = [137, 80, 78, 71, 13, 10, 26, 10],
                g = 0;
            g < 8;
            g++
        )
            if (r[g] != m[g]) throw "The input is not a PNG file!";
        for (; o < r.length; ) {
            var E = l.readUint(r, o);
            o += 4;
            var A = l.readASCII(r, o, 4);
            if (((o += 4), "IHDR" == A)) d(r, o, _);
            else if ("iCCP" == A) {
                for (var I = o; 0 != r[I]; ) I++;
                l.readASCII(r, o, I - o), r[I + 1];
                var T = r.slice(I + 2, o + E),
                    y = null;
                try {
                    y = a(T);
                } catch (e) {
                    y = s(T);
                }
                _.tabs[A] = y;
            } else if ("CgBI" == A) _.tabs[A] = r.slice(o, o + 4);
            else if ("IDAT" == A) {
                for (var g = 0; g < E; g++) f[p + g] = r[o + g];
                p += E;
            } else if ("acTL" == A)
                (_.tabs[A] = { num_frames: c(r, o), num_plays: c(r, o + 4) }), (n = new Uint8Array(r.length));
            else if ("fcTL" == A) {
                if (0 != h) {
                    var S = _.frames[_.frames.length - 1];
                    (S.data = i(_, n.slice(0, h), S.rect.width, S.rect.height)), (h = 0);
                }
                var v = { x: c(r, o + 12), y: c(r, o + 16), width: c(r, o + 4), height: c(r, o + 8) },
                    C = u(r, o + 22),
                    b = {
                        rect: v,
                        delay: 1e3 * (C = u(r, o + 20) / (0 == C ? 100 : C)),
                        dispose: r[o + 24],
                        blend: r[o + 25],
                    };
                _.frames.push(b);
            } else if ("fdAT" == A) {
                for (var g = 0; g < E - 4; g++) n[h + g] = r[o + g + 4];
                h += E - 4;
            } else if ("pHYs" == A) _.tabs[A] = [l.readUint(r, o), l.readUint(r, o + 4), r[o + 8]];
            else if ("cHRM" == A) {
                _.tabs[A] = [];
                for (var g = 0; g < 8; g++) _.tabs[A].push(l.readUint(r, o + 4 * g));
            } else if ("tEXt" == A || "zTXt" == A) {
                null == _.tabs[A] && (_.tabs[A] = {});
                var N,
                    R = l.nextZero(r, o),
                    O = l.readASCII(r, o, R - o),
                    D = o + E - R - 1;
                if ("tEXt" == A) N = l.readASCII(r, R + 1, D);
                else {
                    var L = a(r.slice(R + 2, R + 2 + D));
                    N = l.readUTF8(L, 0, L.length);
                }
                _.tabs[A][O] = N;
            } else if ("iTXt" == A) {
                null == _.tabs[A] && (_.tabs[A] = {});
                var R = 0,
                    I = o;
                R = l.nextZero(r, I);
                var O = l.readASCII(r, I, R - I),
                    w = r[(I = R + 1)];
                r[I + 1],
                    (I += 2),
                    (R = l.nextZero(r, I)),
                    l.readASCII(r, I, R - I),
                    (I = R + 1),
                    (R = l.nextZero(r, I)),
                    l.readUTF8(r, I, R - I);
                var N,
                    D = E - ((I = R + 1) - o);
                if (0 == w) N = l.readUTF8(r, I, D);
                else {
                    var L = a(r.slice(I, I + D));
                    N = l.readUTF8(L, 0, L.length);
                }
                _.tabs[A][O] = N;
            } else if ("PLTE" == A) _.tabs[A] = l.readBytes(r, o, E);
            else if ("hIST" == A) {
                var x = _.tabs.PLTE.length / 3;
                _.tabs[A] = [];
                for (var g = 0; g < x; g++) _.tabs[A].push(u(r, o + 2 * g));
            } else if ("tRNS" == A)
                3 == _.ctype
                    ? (_.tabs[A] = l.readBytes(r, o, E))
                    : 0 == _.ctype
                      ? (_.tabs[A] = u(r, o))
                      : 2 == _.ctype && (_.tabs[A] = [u(r, o), u(r, o + 2), u(r, o + 4)]);
            else if ("gAMA" == A) _.tabs[A] = l.readUint(r, o) / 1e5;
            else if ("sRGB" == A) _.tabs[A] = r[o];
            else if ("bKGD" == A)
                0 == _.ctype || 4 == _.ctype
                    ? (_.tabs[A] = [u(r, o)])
                    : 2 == _.ctype || 6 == _.ctype
                      ? (_.tabs[A] = [u(r, o), u(r, o + 2), u(r, o + 4)])
                      : 3 == _.ctype && (_.tabs[A] = r[o]);
            else if ("IEND" == A) break;
            (o += E), l.readUint(r, o), (o += 4);
        }
        if (0 != h) {
            var S = _.frames[_.frames.length - 1];
            S.data = i(_, n.slice(0, h), S.rect.width, S.rect.height);
        }
        return (_.data = i(_, f, _.width, _.height)), delete _.compress, delete _.interlace, delete _.filter, _;
    }
    function i(e, t, n, r) {
        var i = Date.now(),
            c = new Uint8Array((Math.ceil((n * l(e)) / 8) + 1 + e.interlace) * r);
        t = e.tabs.CgBI ? s(t, c) : a(t, c);
        var i = Date.now();
        return 0 == e.interlace ? (t = u(t, e, 0, n, r)) : 1 == e.interlace && (t = o(t, e)), t;
    }
    function a(e, t) {
        return s(new Uint8Array(e.buffer, 2, e.length - 6), t);
    }
    var s = (function () {
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
                u: new t(15e3),
                q: new e(65536),
                j: new e(32768),
            };
        })();
        function t(t, n) {
            for (var r, i, a, s, o, l = t.length, u = e.v, s = 0; s <= n; s++) u[s] = 0;
            for (s = 1; s < l; s += 2) u[t[s]]++;
            var c = e.m;
            for (i = 1, r = 0, u[0] = 0; i <= n; i++) (r = (r + u[i - 1]) << 1), (c[i] = r);
            for (a = 0; a < l; a += 2) 0 != (o = t[a + 1]) && ((t[a] = c[o]), c[o]++);
        }
        function n(t, n, r) {
            for (var i = t.length, a = e.i, s = 0; s < i; s += 2)
                if (0 != t[s + 1])
                    for (
                        var o = s >> 1, l = t[s + 1], u = (o << 4) | l, c = n - l, d = t[s] << c, _ = d + (1 << c);
                        d != _;
                    )
                        (r[a[d] >>> (15 - n)] = u), d++;
        }
        function r(t, n) {
            for (var r = e.i, i = 15 - n, a = 0; a < t.length; a += 2) {
                var s = t[a] << (n - t[a + 1]);
                t[a] = r[s] >>> i;
            }
        }
        function i(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function a(e, t, n) {
            return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t)) & ((1 << n) - 1);
        }
        function s(e, t) {
            return (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>> (7 & t);
        }
        function o(e, t) {
            var n = e.length;
            if (t <= n) return e;
            var r = new Uint8Array(Math.max(n << 1, t));
            return r.set(e, 0), r;
        }
        function l(e, t, n, r, a, o) {
            for (var l = 0; l < n; ) {
                var u = e[s(r, a) & t];
                a += 15 & u;
                var c = u >>> 4;
                if (c <= 15) (o[l] = c), l++;
                else {
                    var d = 0,
                        _ = 0;
                    16 == c
                        ? ((_ = 3 + i(r, a, 2)), (a += 2), (d = o[l - 1]))
                        : 17 == c
                          ? ((_ = 3 + i(r, a, 3)), (a += 3))
                          : 18 == c && ((_ = 11 + i(r, a, 7)), (a += 7));
                    for (var f = l + _; l < f; ) (o[l] = d), l++;
                }
            }
            return a;
        }
        function u(e, t, n, r) {
            for (var i = 0, a = 0, s = r.length >>> 1; a < n; ) {
                var o = e[a + t];
                (r[a << 1] = 0), (r[(a << 1) + 1] = o), o > i && (i = o), a++;
            }
            for (; a < s; ) (r[a << 1] = 0), (r[(a << 1) + 1] = 0), a++;
            return i;
        }
        return (
            !(function () {
                for (var i = 32768, a = 0; a < i; a++) {
                    var s = a;
                    (s =
                        ((0xff00ff00 &
                            (s =
                                ((0xf0f0f0f0 &
                                    (s =
                                        ((0xcccccccc & (s = ((0xaaaaaaaa & s) >>> 1) | ((0x55555555 & s) << 1))) >>>
                                            2) |
                                        ((0x33333333 & s) << 2))) >>>
                                    4) |
                                ((0xf0f0f0f & s) << 4))) >>>
                            8) |
                        ((0xff00ff & s) << 8)),
                        (e.i[a] = ((s >>> 16) | (s << 16)) >>> 17);
                }
                function o(e, t, n) {
                    for (; 0 != t--; ) e.push(0, n);
                }
                for (var a = 0; a < 32; a++) (e.B[a] = (e.o[a] << 3) | e.z[a]), (e.h[a] = (e.p[a] << 4) | e.w[a]);
                o(e.s, 144, 8),
                    o(e.s, 112, 9),
                    o(e.s, 24, 7),
                    o(e.s, 8, 8),
                    t(e.s, 9),
                    n(e.s, 9, e.g),
                    r(e.s, 9),
                    o(e.t, 32, 5),
                    t(e.t, 5),
                    n(e.t, 5, e.A),
                    r(e.t, 5),
                    o(e.b, 19, 0),
                    o(e.c, 286, 0),
                    o(e.e, 30, 0),
                    o(e.a, 320, 0);
            })(),
            function (r, c) {
                var d,
                    _,
                    f = Uint8Array,
                    p = 0,
                    h = 0,
                    m = 0,
                    g = 0,
                    E = 0,
                    A = 0,
                    I = 0,
                    T = 0,
                    y = 0;
                if (3 == r[0] && 0 == r[1]) return c || new f(0);
                var S = null == c;
                for (S && (c = new f((r.length >>> 2) << 3)); 0 == p; ) {
                    if (((p = a(r, y, 1)), (h = a(r, y + 1, 2)), (y += 3), 0 == h)) {
                        (7 & y) != 0 && (y += 8 - (7 & y));
                        var v = (y >>> 3) + 4,
                            C = r[v - 4] | (r[v - 3] << 8);
                        S && (c = o(c, T + C)),
                            c.set(new f(r.buffer, r.byteOffset + v, C), T),
                            (y = (v + C) << 3),
                            (T += C);
                        continue;
                    }
                    if ((S && (c = o(c, T + 131072)), 1 == h && ((d = e.g), (_ = e.A), (A = 511), (I = 31)), 2 == h)) {
                        (m = i(r, y, 5) + 257), (g = i(r, y + 5, 5) + 1), (E = i(r, y + 10, 4) + 4), (y += 14);
                        for (var b = 1, N = 0; N < 38; N += 2) (e.b[N] = 0), (e.b[N + 1] = 0);
                        for (var N = 0; N < E; N++) {
                            var R = i(r, y + 3 * N, 3);
                            (e.b[(e.d[N] << 1) + 1] = R), R > b && (b = R);
                        }
                        (y += 3 * E),
                            t(e.b, b),
                            n(e.b, b, e.C),
                            (d = e.k),
                            (_ = e.n),
                            (y = l(e.C, (1 << b) - 1, m + g, r, y, e.a));
                        var O = u(e.a, 0, m, e.c);
                        A = (1 << O) - 1;
                        var D = u(e.a, m, g, e.e);
                        (I = (1 << D) - 1), t(e.c, O), n(e.c, O, d), t(e.e, D), n(e.e, D, _);
                    }
                    for (;;) {
                        var L = d[s(r, y) & A];
                        y += 15 & L;
                        var w = L >>> 4;
                        if (w >>> 8 == 0) c[T++] = w;
                        else if (256 == w) break;
                        else {
                            var x = T + w - 254;
                            if (w > 264) {
                                var P = e.B[w - 257];
                                (x = T + (P >>> 3) + i(r, y, 7 & P)), (y += 7 & P);
                            }
                            var M = _[s(r, y) & I];
                            y += 15 & M;
                            var k = M >>> 4,
                                U = e.h[k],
                                G = (U >>> 4) + a(r, y, 15 & U);
                            for (y += 15 & U, S && (c = o(c, T + 131072)); T < x; )
                                (c[T] = c[T++ - G]), (c[T] = c[T++ - G]), (c[T] = c[T++ - G]), (c[T] = c[T++ - G]);
                            T = x;
                        }
                    }
                }
                return c.length == T ? c : c.slice(0, T);
            }
        );
    })();
    function o(e, t) {
        for (
            var n = t.width,
                r = t.height,
                i = l(t),
                a = i >> 3,
                s = Math.ceil((n * i) / 8),
                o = new Uint8Array(r * s),
                c = 0,
                d = [0, 0, 4, 0, 2, 0, 1],
                _ = [0, 4, 0, 2, 0, 1, 0],
                f = [8, 8, 8, 4, 4, 2, 2],
                p = [8, 8, 4, 4, 2, 2, 1],
                h = 0;
            h < 7;
        ) {
            for (var m = f[h], g = p[h], E = 0, A = 0, I = d[h]; I < r; ) (I += m), A++;
            for (var T = _[h]; T < n; ) (T += g), E++;
            var y = Math.ceil((E * i) / 8);
            u(e, t, c, E, A);
            for (var S = 0, v = d[h]; v < r; ) {
                for (var C = _[h], b = (c + S * y) << 3; C < n; ) {
                    if (1 == i) {
                        var N = e[b >> 3];
                        (N = (N >> (7 - (7 & b))) & 1), (o[v * s + (C >> 3)] |= N << (7 - (7 & C)));
                    }
                    if (2 == i) {
                        var N = e[b >> 3];
                        (N = (N >> (6 - (7 & b))) & 3), (o[v * s + (C >> 2)] |= N << (6 - ((3 & C) << 1)));
                    }
                    if (4 == i) {
                        var N = e[b >> 3];
                        (N = (N >> (4 - (7 & b))) & 15), (o[v * s + (C >> 1)] |= N << (4 - ((1 & C) << 2)));
                    }
                    if (i >= 8) for (var R = v * s + C * a, O = 0; O < a; O++) o[R + O] = e[(b >> 3) + O];
                    (b += i), (C += g);
                }
                S++, (v += m);
            }
            E * A != 0 && (c += A * (1 + y)), (h += 1);
        }
        return o;
    }
    function l(e) {
        return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
    }
    function u(e, t, n, r, i) {
        var a = l(t),
            s = Math.ceil((r * a) / 8);
        a = Math.ceil(a / 8);
        var o,
            u,
            d = e[n],
            _ = 0;
        if ((d > 1 && (e[n] = [0, 0, 1][d - 2]), 3 == d))
            for (_ = a; _ < s; _++) e[_ + 1] = (e[_ + 1] + (e[_ + 1 - a] >>> 1)) & 255;
        for (var f = 0; f < i; f++)
            if (((d = e[(u = (o = n + f * s) + f + 1) - 1]), (_ = 0), 0 == d)) for (; _ < s; _++) e[o + _] = e[u + _];
            else if (1 == d) {
                for (; _ < a; _++) e[o + _] = e[u + _];
                for (; _ < s; _++) e[o + _] = e[u + _] + e[o + _ - a];
            } else if (2 == d) for (; _ < s; _++) e[o + _] = e[u + _] + e[o + _ - s];
            else if (3 == d) {
                for (; _ < a; _++) e[o + _] = e[u + _] + (e[o + _ - s] >>> 1);
                for (; _ < s; _++) e[o + _] = e[u + _] + ((e[o + _ - s] + e[o + _ - a]) >>> 1);
            } else {
                for (; _ < a; _++) e[o + _] = e[u + _] + c(0, e[o + _ - s], 0);
                for (; _ < s; _++) e[o + _] = e[u + _] + c(e[o + _ - a], e[o + _ - s], e[o + _ - a - s]);
            }
        return e;
    }
    function c(e, t, n) {
        var r = e + t - n,
            i = r - e,
            a = r - t,
            s = r - n;
        return i * i <= a * a && i * i <= s * s ? e : a * a <= s * s ? t : n;
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
    function _(e, t, n, r, i, a, s, o, l) {
        for (var u = Math.min(t, i), c = Math.min(n, a), d = 0, _ = 0, f = 0; f < c; f++)
            for (var p = 0; p < u; p++)
                if (
                    (s >= 0 && o >= 0
                        ? ((d = (f * t + p) << 2), (_ = ((o + f) * i + s + p) << 2))
                        : ((d = ((-o + f) * t - s + p) << 2), (_ = (f * i + p) << 2)),
                    0 == l)
                )
                    (r[_] = e[d]), (r[_ + 1] = e[d + 1]), (r[_ + 2] = e[d + 2]), (r[_ + 3] = e[d + 3]);
                else if (1 == l) {
                    var h = e[d + 3] * (1 / 255),
                        m = e[d] * h,
                        g = e[d + 1] * h,
                        E = e[d + 2] * h,
                        A = r[_ + 3] * (1 / 255),
                        I = r[_] * A,
                        T = r[_ + 1] * A,
                        y = r[_ + 2] * A,
                        S = 1 - h,
                        v = h + A * S,
                        C = 0 == v ? 0 : 1 / v;
                    (r[_ + 3] = 255 * v),
                        (r[_ + 0] = (m + I * S) * C),
                        (r[_ + 1] = (g + T * S) * C),
                        (r[_ + 2] = (E + y * S) * C);
                } else if (2 == l) {
                    var h = e[d + 3],
                        m = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        A = r[_ + 3],
                        I = r[_],
                        T = r[_ + 1],
                        y = r[_ + 2];
                    h == A && m == I && g == T && E == y
                        ? ((r[_] = 0), (r[_ + 1] = 0), (r[_ + 2] = 0), (r[_ + 3] = 0))
                        : ((r[_] = m), (r[_ + 1] = g), (r[_ + 2] = E), (r[_ + 3] = h));
                } else if (3 == l) {
                    var h = e[d + 3],
                        m = e[d],
                        g = e[d + 1],
                        E = e[d + 2],
                        A = r[_ + 3],
                        I = r[_],
                        T = r[_ + 1],
                        y = r[_ + 2];
                    if (h == A && m == I && g == T && E == y) continue;
                    if (h < 220 && A > 20) return !1;
                }
        return !0;
    }
    return { decode: r, toRGBA8: t, _paeth: c, _copyTile: _, _bin: e };
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
                for (var a = 0; a < r; a++) e = i.table[(e ^ t[n + a]) & 255] ^ (e >>> 8);
                return e;
            },
            crc: function (e, t, n) {
                return 0xffffffff ^ i.update(0xffffffff, e, t, n);
            },
        };
    function a(e, t, n, r) {
        (t[n] += (e[0] * r) >> 4),
            (t[n + 1] += (e[1] * r) >> 4),
            (t[n + 2] += (e[2] * r) >> 4),
            (t[n + 3] += (e[3] * r) >> 4);
    }
    function s(e) {
        return Math.max(0, Math.min(255, e));
    }
    function o(e, t) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2],
            a = e[3] - t[3];
        return n * n + r * r + i * i + a * a;
    }
    function l(e, t, n, r, i, l, u) {
        null == u && (u = 1);
        for (var c = r.length, d = [], _ = [], f = 0; f < c; f++) {
            var p = r[f];
            d.push([(p >>> 0) & 255, (p >>> 8) & 255, (p >>> 16) & 255, (p >>> 24) & 255]);
        }
        for (var f = 0; f < c; f++) {
            for (var h = 0xffffffff, m = 0, g = 0; g < c; g++) {
                var E = o(d[f], d[g]);
                g != f && E < h && ((h = E), (m = g));
            }
            var A = Math.sqrt(h) / 2;
            _[f] = ~~(A * A);
        }
        for (
            var I = new Uint32Array(i.buffer),
                T = new Int16Array(t * n * 4),
                y = 4,
                S = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
                f = 0;
            f < S.length;
            f++
        )
            S[f] = 255 * (-0.5 + (S[f] + 0.5) / (y * y));
        for (var v = 0; v < n; v++)
            for (var C = 0; C < t; C++) {
                var b,
                    f = (v * t + C) * 4;
                if (2 != u)
                    b = [s(e[f] + T[f]), s(e[f + 1] + T[f + 1]), s(e[f + 2] + T[f + 2]), s(e[f + 3] + T[f + 3])];
                else {
                    var E = S[(v & (y - 1)) * y + (C & (y - 1))];
                    b = [s(e[f] + E), s(e[f + 1] + E), s(e[f + 2] + E), s(e[f + 3] + E)];
                }
                for (var m = 0, N = 0xffffff, g = 0; g < c; g++) {
                    var R = o(b, d[g]);
                    R < N && ((N = R), (m = g));
                }
                var O = d[m],
                    D = [b[0] - O[0], b[1] - O[1], b[2] - O[2], b[3] - O[3]];
                1 == u &&
                    (C != t - 1 && a(D, T, f + 4, 7),
                    v != n - 1 &&
                        (0 != C && a(D, T, f + 4 * t - 4, 3),
                        a(D, T, f + 4 * t, 5),
                        C != t - 1 && a(D, T, f + 4 * t + 4, 1))),
                    (l[f >> 2] = m),
                    (I[f >> 2] = r[m]);
            }
    }
    function u(e, t, n, r, i, a, s, o) {
        var l = { ctype: 0 + 2 * (1 != r) + 4 * (0 != i), depth: a, frames: [] };
        Date.now();
        for (var u = (r + i) * a, _ = u * t, f = 0; f < e.length; f++)
            l.frames.push({
                rect: { x: 0, y: 0, width: t, height: n },
                img: new Uint8Array(e[f]),
                blend: 0,
                dispose: 1,
                bpp: Math.ceil(u / 8),
                bpl: Math.ceil(_ / 8),
            });
        return d(l, 0, !0), c(l, t, n, s, o);
    }
    function c(e, t, r, a, s) {
        null == s && (s = {});
        var o,
            l = i.crc,
            u = n.writeUint,
            c = n.writeUshort,
            d = n.writeASCII,
            _ = 8,
            f = e.frames.length > 1,
            p = !1,
            h = 33 + 20 * !!f;
        if (
            (null != s.sRGB && (h += 13),
            null != s.pHYs && (h += 21),
            null != s.iCCP && (h += 21 + (o = pako.deflate(s.iCCP)).length + 4),
            3 == e.ctype)
        ) {
            for (var m = e.plte.length, g = 0; g < m; g++) e.plte[g] >>> 24 != 255 && (p = !0);
            h += 8 + 3 * m + 4 + (p ? 8 + +m + 4 : 0);
        }
        for (var E = 0; E < e.frames.length; E++) {
            var A = e.frames[E];
            f && (h += 38), (h += A.cimg.length + 12), 0 != E && (h += 4);
        }
        for (var I = new Uint8Array((h += 12)), T = [137, 80, 78, 71, 13, 10, 26, 10], g = 0; g < 8; g++) I[g] = T[g];
        if (
            (u(I, _, 13),
            d(I, (_ += 4), "IHDR"),
            u(I, (_ += 4), t),
            u(I, (_ += 4), r),
            (I[(_ += 4)] = e.depth),
            (I[++_] = e.ctype),
            (I[++_] = 0),
            (I[++_] = 0),
            (I[++_] = 0),
            u(I, ++_, l(I, _ - 17, 17)),
            (_ += 4),
            null != s.sRGB &&
                (u(I, _, 1), d(I, (_ += 4), "sRGB"), (I[(_ += 4)] = s.sRGB), u(I, ++_, l(I, _ - 5, 5)), (_ += 4)),
            null != s.iCCP)
        ) {
            var y = 13 + o.length;
            u(I, _, y),
                d(I, (_ += 4), "iCCP"),
                d(I, (_ += 4), "ICC profile"),
                (_ += 11),
                (_ += 2),
                I.set(o, _),
                u(I, (_ += o.length), l(I, _ - (y + 4), y + 4)),
                (_ += 4);
        }
        if (
            (null != s.pHYs &&
                (u(I, _, 9),
                d(I, (_ += 4), "pHYs"),
                u(I, (_ += 4), s.pHYs[0]),
                u(I, (_ += 4), s.pHYs[1]),
                (I[(_ += 4)] = s.pHYs[2]),
                u(I, ++_, l(I, _ - 13, 13)),
                (_ += 4)),
            f &&
                (u(I, _, 8),
                d(I, (_ += 4), "acTL"),
                u(I, (_ += 4), e.frames.length),
                u(I, (_ += 4), null != s.loop ? s.loop : 0),
                u(I, (_ += 4), l(I, _ - 12, 12)),
                (_ += 4)),
            3 == e.ctype)
        ) {
            var m = e.plte.length;
            u(I, _, 3 * m), d(I, (_ += 4), "PLTE"), (_ += 4);
            for (var g = 0; g < m; g++) {
                var S = 3 * g,
                    v = e.plte[g],
                    C = 255 & v,
                    b = (v >>> 8) & 255,
                    N = (v >>> 16) & 255;
                (I[_ + S + 0] = C), (I[_ + S + 1] = b), (I[_ + S + 2] = N);
            }
            if ((u(I, (_ += 3 * m), l(I, _ - 3 * m - 4, 3 * m + 4)), (_ += 4), p)) {
                u(I, _, m), d(I, (_ += 4), "tRNS"), (_ += 4);
                for (var g = 0; g < m; g++) I[_ + g] = (e.plte[g] >>> 24) & 255;
                u(I, (_ += m), l(I, _ - m - 4, m + 4)), (_ += 4);
            }
        }
        for (var R = 0, E = 0; E < e.frames.length; E++) {
            var A = e.frames[E];
            f &&
                (u(I, _, 26),
                d(I, (_ += 4), "fcTL"),
                u(I, (_ += 4), R++),
                u(I, (_ += 4), A.rect.width),
                u(I, (_ += 4), A.rect.height),
                u(I, (_ += 4), A.rect.x),
                u(I, (_ += 4), A.rect.y),
                c(I, (_ += 4), a[E]),
                c(I, (_ += 2), 1e3),
                (I[(_ += 2)] = A.dispose),
                (I[++_] = A.blend),
                u(I, ++_, l(I, _ - 30, 30)),
                (_ += 4));
            var O = A.cimg,
                m = O.length;
            u(I, _, m + 4 * (0 != E));
            var D = (_ += 4);
            d(I, _, 0 == E ? "IDAT" : "fdAT"),
                (_ += 4),
                0 != E && (u(I, _, R++), (_ += 4)),
                I.set(O, _),
                u(I, (_ += m), l(I, D, _ - D)),
                (_ += 4);
        }
        return u(I, _, 0), d(I, (_ += 4), "IEND"), u(I, (_ += 4), l(I, _ - 4, 4)), (_ += 4), I.buffer;
    }
    function d(e, t, n) {
        for (var r = 0; r < e.frames.length; r++) {
            var i = e.frames[r],
                a = (i.rect.width, i.rect.height),
                s = new Uint8Array(a * i.bpl + a);
            i.cimg = m(i.img, a, i.bpp, i.bpl, s, t, n);
        }
    }
    function _(e, t, n, r, i) {
        for (
            var a = i[0], s = i[1], o = i[2], u = i[3], c = i[4], d = i[5], _ = 6, p = 8, h = 255, m = 0;
            m < e.length;
            m++
        )
            for (var g = new Uint8Array(e[m]), A = g.length, I = 0; I < A; I += 4) h &= g[I + 3];
        var T = 255 != h,
            y = f(e, t, n, a, s, o),
            S = {},
            v = [],
            C = [];
        if (0 != r) {
            for (var b = [], I = 0; I < y.length; I++) b.push(y[I].img.buffer);
            for (var N = E(w(b), r), I = 0; I < N.plte.length; I++) v.push(N.plte[I].est.rgba);
            for (var R = 0, I = 0; I < y.length; I++) {
                var O = y[I],
                    D = O.img.length,
                    L = new Uint8Array(N.inds.buffer, R >> 2, D >> 2);
                C.push(L);
                var x = new Uint8Array(N.abuf, R, D);
                d && l(O.img, O.rect.width, O.rect.height, v, x, L), O.img.set(x), (R += D);
            }
        } else
            for (var m = 0; m < y.length; m++) {
                var O = y[m],
                    P = new Uint32Array(O.img.buffer),
                    M = O.rect.width,
                    A = P.length,
                    L = new Uint8Array(A);
                C.push(L);
                for (var I = 0; I < A; I++) {
                    var k = P[I];
                    if (0 != I && k == P[I - 1]) L[I] = L[I - 1];
                    else if (I > M && k == P[I - M]) L[I] = L[I - M];
                    else {
                        var U = S[k];
                        if (null == U && ((S[k] = U = v.length), v.push(k), v.length >= 300)) break;
                        L[I] = U;
                    }
                }
            }
        var G = v.length;
        G <= 256 && !1 == c && (p = Math.max((p = G <= 2 ? 1 : G <= 4 ? 2 : G <= 16 ? 4 : 8), u));
        for (var m = 0; m < y.length; m++) {
            var O = y[m],
                M = (O.rect.x, O.rect.y, O.rect.width),
                V = O.rect.height,
                F = O.img;
            new Uint32Array(F.buffer);
            var B = 4 * M,
                j = 4;
            if (G <= 256 && !1 == c) {
                for (var H = new Uint8Array((B = Math.ceil((p * M) / 8)) * V), Y = C[m], W = 0; W < V; W++) {
                    var I = W * B,
                        K = W * M;
                    if (8 == p) for (var z = 0; z < M; z++) H[I + z] = Y[K + z];
                    else if (4 == p) for (var z = 0; z < M; z++) H[I + (z >> 1)] |= Y[K + z] << (4 - (1 & z) * 4);
                    else if (2 == p) for (var z = 0; z < M; z++) H[I + (z >> 2)] |= Y[K + z] << (6 - (3 & z) * 2);
                    else if (1 == p) for (var z = 0; z < M; z++) H[I + (z >> 3)] |= Y[K + z] << (7 - (7 & z) * 1);
                }
                (F = H), (_ = 3), (j = 1);
            } else if (!1 == T && 1 == y.length) {
                for (var H = new Uint8Array(M * V * 3), $ = M * V, I = 0; I < $; I++) {
                    var q = 3 * I,
                        Z = 4 * I;
                    (H[q] = F[Z]), (H[q + 1] = F[Z + 1]), (H[q + 2] = F[Z + 2]);
                }
                (F = H), (_ = 2), (j = 3), (B = 3 * M);
            }
            (O.img = F), (O.bpl = B), (O.bpp = j);
        }
        return { ctype: _, depth: p, plte: v, frames: y };
    }
    function f(t, n, r, i, a, s) {
        for (var o = [], l = 0; l < t.length; l++) {
            var u,
                c = new Uint8Array(t[l]),
                d = new Uint32Array(c.buffer),
                _ = 0,
                f = 0,
                m = n,
                g = r,
                E = +!!i;
            if (0 != l) {
                for (var A = s || i || 1 == l || 0 != o[l - 2].dispose ? 1 : 2, I = 0, T = 1e9, y = 0; y < A; y++) {
                    for (
                        var S = new Uint8Array(t[l - 1 - y]),
                            v = new Uint32Array(t[l - 1 - y]),
                            C = n,
                            b = r,
                            N = -1,
                            R = -1,
                            O = 0;
                        O < r;
                        O++
                    )
                        for (var D = 0; D < n; D++) {
                            var L = O * n + D;
                            d[L] != v[L] && (D < C && (C = D), D > N && (N = D), O < b && (b = O), O > R && (R = O));
                        }
                    -1 == N && (C = b = N = R = 0), a && ((1 & C) == 1 && C--, (1 & b) == 1 && b--);
                    var w = (N - C + 1) * (R - b + 1);
                    w < T && ((T = w), (I = y), (_ = C), (f = b), (m = N - C + 1), (g = R - b + 1));
                }
                var S = new Uint8Array(t[l - 1 - I]);
                1 == I && (o[l - 1].dispose = 2),
                    e(S, n, r, (u = new Uint8Array(m * g * 4)), m, g, -_, -f, 0),
                    1 == (E = +!!e(c, n, r, u, m, g, -_, -f, 3))
                        ? h(c, n, r, u, { x: _, y: f, width: m, height: g })
                        : e(c, n, r, u, m, g, -_, -f, 0);
            } else u = c.slice(0);
            o.push({ rect: { x: _, y: f, width: m, height: g }, img: u, blend: E, dispose: 0 });
        }
        if (i)
            for (var l = 0; l < o.length; l++) {
                var x = o[l];
                if (1 != x.blend) {
                    var P = x.rect,
                        M = o[l - 1].rect,
                        k = Math.min(P.x, M.x),
                        U = Math.min(P.y, M.y),
                        G = Math.max(P.x + P.width, M.x + M.width),
                        V = Math.max(P.y + P.height, M.y + M.height),
                        F = { x: k, y: U, width: G - k, height: V - U };
                    (o[l - 1].dispose = 1), l - 1 != 0 && p(t, n, r, o, l - 1, F, a), p(t, n, r, o, l, F, a);
                }
            }
        var B = 0;
        if (1 != t.length)
            for (var L = 0; L < o.length; L++) {
                var x = o[L];
                B += x.rect.width * x.rect.height;
            }
        return o;
    }
    function p(t, n, r, i, a, s, o) {
        for (
            var l = Uint8Array,
                u = Uint32Array,
                c = new l(t[a - 1]),
                d = new u(t[a - 1]),
                _ = a + 1 < t.length ? new l(t[a + 1]) : null,
                f = new l(t[a]),
                p = new u(f.buffer),
                m = n,
                g = r,
                E = -1,
                A = -1,
                I = 0;
            I < s.height;
            I++
        )
            for (var T = 0; T < s.width; T++) {
                var y = s.x + T,
                    S = s.y + I,
                    v = S * n + y,
                    C = p[v];
                0 == C ||
                    (0 == i[a - 1].dispose && d[v] == C && (null == _ || 0 != _[4 * v + 3])) ||
                    (y < m && (m = y), y > E && (E = y), S < g && (g = S), S > A && (A = S));
            }
        -1 == E && (m = g = E = A = 0),
            o && ((1 & m) == 1 && m--, (1 & g) == 1 && g--),
            (s = { x: m, y: g, width: E - m + 1, height: A - g + 1 });
        var b = i[a];
        (b.rect = s),
            (b.blend = 1),
            (b.img = new Uint8Array(s.width * s.height * 4)),
            0 == i[a - 1].dispose
                ? (e(c, n, r, b.img, s.width, s.height, -s.x, -s.y, 0), h(f, n, r, b.img, s))
                : e(f, n, r, b.img, s.width, s.height, -s.x, -s.y, 0);
    }
    function h(t, n, r, i, a) {
        e(t, n, r, i, a.width, a.height, -a.x, -a.y, 2);
    }
    function m(e, t, n, r, i, a, s) {
        var o = [],
            l = [0, 1, 2, 3, 4];
        -1 != a ? (l = [a]) : (t * r > 5e5 || 1 == n) && (l = [0]), s && (_ = { level: 0 });
        var u = i.length > 1e7 && null != window.UZIP ? window.UZIP : pako;
        Date.now();
        for (var c = 0; c < l.length; c++) {
            for (var d = 0; d < t; d++) g(i, e, d, r, n, l[c]);
            o.push(u.deflate(i, _));
        }
        for (var _, f, p = 1e9, c = 0; c < o.length; c++) o[c].length < p && ((f = c), (p = o[c].length));
        return o[f];
    }
    function g(e, t, n, i, a, s) {
        var o = n * i,
            l = o + n;
        if (((e[l] = s), l++, 0 == s))
            if (i < 500) for (var u = 0; u < i; u++) e[l + u] = t[o + u];
            else e.set(new Uint8Array(t.buffer, o, i), l);
        else if (1 == s) {
            for (var u = 0; u < a; u++) e[l + u] = t[o + u];
            for (var u = a; u < i; u++) e[l + u] = (t[o + u] - t[o + u - a] + 256) & 255;
        } else if (0 == n) {
            for (var u = 0; u < a; u++) e[l + u] = t[o + u];
            if (2 == s) for (var u = a; u < i; u++) e[l + u] = t[o + u];
            if (3 == s) for (var u = a; u < i; u++) e[l + u] = (t[o + u] - (t[o + u - a] >> 1) + 256) & 255;
            if (4 == s) for (var u = a; u < i; u++) e[l + u] = (t[o + u] - r(t[o + u - a], 0, 0) + 256) & 255;
        } else {
            if (2 == s) for (var u = 0; u < i; u++) e[l + u] = (t[o + u] + 256 - t[o + u - i]) & 255;
            if (3 == s) {
                for (var u = 0; u < a; u++) e[l + u] = (t[o + u] + 256 - (t[o + u - i] >> 1)) & 255;
                for (var u = a; u < i; u++) e[l + u] = (t[o + u] + 256 - ((t[o + u - i] + t[o + u - a]) >> 1)) & 255;
            }
            if (4 == s) {
                for (var u = 0; u < a; u++) e[l + u] = (t[o + u] + 256 - r(0, t[o + u - i], 0)) & 255;
                for (var u = a; u < i; u++)
                    e[l + u] = (t[o + u] + 256 - r(t[o + u - a], t[o + u - i], t[o + u - a - i])) & 255;
            }
        }
    }
    function E(e, t, n) {
        Date.now();
        for (
            var r = new Uint8Array(e),
                i = r.slice(0),
                a = new Uint32Array(i.buffer),
                s = S(i, t),
                o = s[0],
                l = s[1],
                u = l.length,
                c = new Uint32Array(u),
                d = new Uint8Array(c.buffer),
                _ = 0;
            _ < u;
            _++
        )
            c[_] = l[_].est.rgba;
        var f,
            p = r.length,
            h = new Uint8Array(p >> 2);
        if (u <= 60) y(r, h, d), A(h, a, c);
        else if (r.length < 32e6)
            for (var _ = 0; _ < p; _ += 4) {
                var m = r[_] * (1 / 255),
                    g = r[_ + 1] * (1 / 255),
                    E = r[_ + 2] * (1 / 255),
                    T = r[_ + 3] * (1 / 255);
                (f = v(o, m, g, E, T)), (h[_ >> 2] = f.ind), (a[_ >> 2] = f.est.rgba);
            }
        else
            for (var _ = 0; _ < p; _ += 4) {
                var m = r[_] * (1 / 255),
                    g = r[_ + 1] * (1 / 255),
                    E = r[_ + 2] * (1 / 255),
                    T = r[_ + 3] * (1 / 255);
                for (f = o; f.left; ) f = 0 >= C(f.est, m, g, E, T) ? f.left : f.right;
                (h[_ >> 2] = f.ind), (a[_ >> 2] = f.est.rgba);
            }
        if (n || r.length * u < 10 * 4e6) {
            for (var b = 1e9, _ = 0; _ < 10; _++) {
                var N = I(r, h, d);
                if (N / b > 0.997) break;
                b = N;
            }
            for (var _ = 0; _ < u; _++) l[_].est.rgba = c[_];
            A(h, a, c);
        }
        return { abuf: i.buffer, inds: h, plte: l };
    }
    function A(e, t, n) {
        for (var r = 0; r < e.length; r++) t[r] = n[e[r]];
    }
    function I(e, t, n) {
        return T(e, t, n), y(e, t, n);
    }
    function T(e, t, n) {
        for (var r = n.length >>> 2, i = new Uint32Array(4 * r), a = new Uint32Array(r), s = 0; s < e.length; s += 4) {
            var o = t[s >>> 2],
                l = 4 * o;
            a[o]++, (i[l] += e[s]), (i[l + 1] += e[s + 1]), (i[l + 2] += e[s + 2]), (i[l + 3] += e[s + 3]);
        }
        for (var s = 0; s < n.length; s++) n[s] = Math.round(i[s] / a[s >>> 2]);
    }
    function y(e, t, n) {
        for (var r = 0, i = n.length >>> 2, a = [], s = 0; s < i; s++) {
            for (var o = 4 * s, l = n[o], u = n[o + 1], c = n[o + 2], d = n[o + 3], _ = 0, f = 1e9, p = 0; p < i; p++)
                if (s != p) {
                    var h = 4 * p,
                        m = l - n[h],
                        g = u - n[h + 1],
                        E = c - n[h + 2],
                        A = d - n[h + 3],
                        I = m * m + g * g + E * E + A * A;
                    I < f && ((f = I), (_ = p));
                }
            (a[s] = 0.5 * Math.sqrt(f)), (a[s] = a[s] * a[s]);
        }
        for (var s = 0; s < e.length; s += 4) {
            var l = e[s],
                u = e[s + 1],
                c = e[s + 2],
                d = e[s + 3],
                _ = t[s >>> 2],
                o = 4 * _,
                m = l - n[o],
                g = u - n[o + 1],
                E = c - n[o + 2],
                A = d - n[o + 3],
                f = m * m + g * g + E * E + A * A;
            if (f > a[_])
                for (var p = 0; p < i; p++) {
                    (m = l - n[(o = 4 * p)]), (g = u - n[o + 1]);
                    var I = m * m + g * g + (E = c - n[o + 2]) * E + (A = d - n[o + 3]) * A;
                    if (I < f && ((f = I), (_ = p), f < a[p])) break;
                }
            (t[s >>> 2] = _), (r += f);
        }
        return r / (e.length >>> 2);
    }
    function S(e, t, n) {
        null == n && (n = 1e-4);
        var r = new Uint32Array(e.buffer),
            i = { i0: 0, i1: e.length, bst: null, est: null, tdst: 0, left: null, right: null };
        (i.bst = O(e, i.i0, i.i1)), (i.est = D(i.bst));
        for (var a = [i]; a.length < t; ) {
            for (var s = 0, o = 0, l = 0; l < a.length; l++) a[l].est.L > s && ((s = a[l].est.L), (o = l));
            if (s < n) break;
            var u = a[o],
                c = N(e, r, u.i0, u.i1, u.est.e, u.est.eMq255);
            if (u.i0 >= c || u.i1 <= c) {
                u.est.L = 0;
                continue;
            }
            var d = { i0: u.i0, i1: c, bst: null, est: null, tdst: 0, left: null, right: null };
            (d.bst = O(e, d.i0, d.i1)), (d.est = D(d.bst));
            var _ = { i0: c, i1: u.i1, bst: null, est: null, tdst: 0, left: null, right: null };
            _.bst = { R: [], m: [], N: u.bst.N - d.bst.N };
            for (var l = 0; l < 16; l++) _.bst.R[l] = u.bst.R[l] - d.bst.R[l];
            for (var l = 0; l < 4; l++) _.bst.m[l] = u.bst.m[l] - d.bst.m[l];
            (_.est = D(_.bst)), (u.left = d), (u.right = _), (a[o] = d), a.push(_);
        }
        a.sort(function (e, t) {
            return t.bst.N - e.bst.N;
        });
        for (var l = 0; l < a.length; l++) a[l].ind = l;
        return [i, a];
    }
    function v(e, t, n, r, i) {
        if (null == e.left) return (e.tdst = b(e.est.q, t, n, r, i)), e;
        var a = C(e.est, t, n, r, i),
            s = e.left,
            o = e.right;
        a > 0 && ((s = e.right), (o = e.left));
        var l = v(s, t, n, r, i);
        if (l.tdst <= a * a) return l;
        var u = v(o, t, n, r, i);
        return u.tdst < l.tdst ? u : l;
    }
    function C(e, t, n, r, i) {
        var a = e.e;
        return a[0] * t + a[1] * n + a[2] * r + a[3] * i - e.eMq;
    }
    function b(e, t, n, r, i) {
        var a = t - e[0],
            s = n - e[1],
            o = r - e[2],
            l = i - e[3];
        return a * a + s * s + o * o + l * l;
    }
    function N(e, t, n, r, i, a) {
        for (r -= 4; n < r; ) {
            for (; R(e, n, i) <= a; ) n += 4;
            for (; R(e, r, i) > a; ) r -= 4;
            if (n >= r) break;
            var s = t[n >> 2];
            (t[n >> 2] = t[r >> 2]), (t[r >> 2] = s), (n += 4), (r -= 4);
        }
        for (; R(e, n, i) > a; ) n -= 4;
        return n + 4;
    }
    function R(e, t, n) {
        return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
    }
    function O(e, t, n) {
        for (
            var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], a = (n - t) >> 2, s = t;
            s < n;
            s += 4
        ) {
            var o = e[s] * (1 / 255),
                l = e[s + 1] * (1 / 255),
                u = e[s + 2] * (1 / 255),
                c = e[s + 3] * (1 / 255);
            (i[0] += o),
                (i[1] += l),
                (i[2] += u),
                (i[3] += c),
                (r[0] += o * o),
                (r[1] += o * l),
                (r[2] += o * u),
                (r[3] += o * c),
                (r[5] += l * l),
                (r[6] += l * u),
                (r[7] += l * c),
                (r[10] += u * u),
                (r[11] += u * c),
                (r[15] += c * c);
        }
        return (
            (r[4] = r[1]),
            (r[8] = r[2]),
            (r[9] = r[6]),
            (r[12] = r[3]),
            (r[13] = r[7]),
            (r[14] = r[11]),
            { R: r, m: i, N: a }
        );
    }
    function D(e) {
        var t = e.R,
            n = e.m,
            r = e.N,
            i = n[0],
            a = n[1],
            s = n[2],
            o = n[3],
            l = 0 == r ? 0 : 1 / r,
            u = [
                t[0] - i * i * l,
                t[1] - i * a * l,
                t[2] - i * s * l,
                t[3] - i * o * l,
                t[4] - a * i * l,
                t[5] - a * a * l,
                t[6] - a * s * l,
                t[7] - a * o * l,
                t[8] - s * i * l,
                t[9] - s * a * l,
                t[10] - s * s * l,
                t[11] - s * o * l,
                t[12] - o * i * l,
                t[13] - o * a * l,
                t[14] - o * s * l,
                t[15] - o * o * l,
            ],
            c = u,
            d = L,
            _ = [Math.random(), Math.random(), Math.random(), Math.random()],
            f = 0,
            p = 0;
        if (0 != r)
            for (
                var h = 0;
                h < 16 &&
                ((_ = d.multVec(c, _)),
                (p = Math.sqrt(d.dot(_, _))),
                (_ = d.sml(1 / p, _)),
                !(0 != h && 1e-9 > Math.abs(p - f)));
                h++
            )
                f = p;
        var m = [i * l, a * l, s * l, o * l],
            g = d.dot(d.sml(255, m), _);
        return {
            Cov: u,
            q: m,
            e: _,
            L: f,
            eMq255: g,
            eMq: d.dot(_, m),
            rgba:
                ((Math.round(255 * m[3]) << 24) |
                    (Math.round(255 * m[2]) << 16) |
                    (Math.round(255 * m[1]) << 8) |
                    (0 | Math.round(255 * m[0]))) >>>
                0,
        };
    }
    var L = {
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
    function w(e) {
        for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
        for (var r = new Uint8Array(t), i = 0, n = 0; n < e.length; n++) {
            for (var a = new Uint8Array(e[n]), s = a.length, o = 0; o < s; o += 4) {
                var l = a[o],
                    u = a[o + 1],
                    c = a[o + 2],
                    d = a[o + 3];
                0 == d && (l = u = c = 0), (r[i + o] = l), (r[i + o + 1] = u), (r[i + o + 2] = c), (r[i + o + 3] = d);
            }
            i += s;
        }
        return r.buffer;
    }
    (t.encode = function (e, t, n, r, i, a, s) {
        null == r && (r = 0), null == s && (s = !1);
        var o = _(e, t, n, r, [!1, !1, !1, 0, s, !1]);
        return d(o, -1), c(o, t, n, i, a);
    }),
        (t.encodeLL = u),
        (t.encode.compress = _),
        (t.encode.dither = l),
        (t.quantize = E),
        (t.quantize.findNearest = y),
        (t.quantize.getKDtree = S),
        (t.quantize.getNearest = v);
})(),
    (e.exports = t);
