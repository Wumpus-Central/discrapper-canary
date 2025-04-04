var r,
    i,
    o,
    a,
    s,
    l = {
        cipher: {},
        hash: {},
        keyexchange: {},
        mode: {},
        misc: {},
        codec: {},
        exception: {
            corrupt: function (e) {
                (this.toString = function () {
                    return 'CORRUPT: ' + this.message;
                }),
                    (this.message = e);
            },
            invalid: function (e) {
                (this.toString = function () {
                    return 'INVALID: ' + this.message;
                }),
                    (this.message = e);
            },
            bug: function (e) {
                (this.toString = function () {
                    return 'BUG: ' + this.message;
                }),
                    (this.message = e);
            },
            notReady: function (e) {
                (this.toString = function () {
                    return 'NOT READY: ' + this.message;
                }),
                    (this.message = e);
            }
        }
    };
function c(e, t, n) {
    if (4 !== t.length) throw new l.exception.invalid('invalid aes block size');
    var r = e.b[n],
        i = t[0] ^ r[0],
        o = t[n ? 3 : 1] ^ r[1],
        a = t[2] ^ r[2];
    t = t[n ? 1 : 3] ^ r[3];
    var s,
        c,
        u,
        d,
        f = r.length / 4 - 2,
        _ = 4,
        p = [0, 0, 0, 0];
    e = (s = e.s[n])[0];
    var h = s[1],
        m = s[2],
        g = s[3],
        E = s[4];
    for (d = 0; d < f; d++) (s = e[i >>> 24] ^ h[(o >> 16) & 255] ^ m[(a >> 8) & 255] ^ g[255 & t] ^ r[_]), (c = e[o >>> 24] ^ h[(a >> 16) & 255] ^ m[(t >> 8) & 255] ^ g[255 & i] ^ r[_ + 1]), (u = e[a >>> 24] ^ h[(t >> 16) & 255] ^ m[(i >> 8) & 255] ^ g[255 & o] ^ r[_ + 2]), (t = e[t >>> 24] ^ h[(i >> 16) & 255] ^ m[(o >> 8) & 255] ^ g[255 & a] ^ r[_ + 3]), (_ += 4), (i = s), (o = c), (a = u);
    for (d = 0; 4 > d; d++) (p[n ? 3 & -d : d] = (E[i >>> 24] << 24) ^ (E[(o >> 16) & 255] << 16) ^ (E[(a >> 8) & 255] << 8) ^ E[255 & t] ^ r[_++]), (s = i), (i = o), (o = a), (a = t), (t = s);
    return p;
}
function u(e, t) {
    var n,
        r,
        i,
        o = e.F,
        a = e.b,
        s = o[0],
        l = o[1],
        c = o[2],
        u = o[3],
        d = o[4],
        f = o[5],
        _ = o[6],
        p = o[7];
    for (n = 0; 64 > n; n++) 16 > n ? (r = t[n]) : ((r = t[(n + 1) & 15]), (i = t[(n + 14) & 15]), (r = t[15 & n] = (((r >>> 7) ^ (r >>> 18) ^ (r >>> 3) ^ (r << 25) ^ (r << 14)) + ((i >>> 17) ^ (i >>> 19) ^ (i >>> 10) ^ (i << 15) ^ (i << 13)) + t[15 & n] + t[(n + 9) & 15]) | 0)), (r = r + p + ((d >>> 6) ^ (d >>> 11) ^ (d >>> 25) ^ (d << 26) ^ (d << 21) ^ (d << 7)) + (_ ^ (d & (f ^ _))) + a[n]), (p = _), (_ = f), (f = d), (d = (u + r) | 0), (u = c), (c = l), (s = (r + (((l = s) & c) ^ (u & (l ^ c))) + ((l >>> 2) ^ (l >>> 13) ^ (l >>> 22) ^ (l << 30) ^ (l << 19) ^ (l << 10))) | 0);
    (o[0] = (o[0] + s) | 0), (o[1] = (o[1] + l) | 0), (o[2] = (o[2] + c) | 0), (o[3] = (o[3] + u) | 0), (o[4] = (o[4] + d) | 0), (o[5] = (o[5] + f) | 0), (o[6] = (o[6] + _) | 0), (o[7] = (o[7] + p) | 0);
}
function d(e, t) {
    var n,
        r = l.random.K[e],
        i = [];
    for (n in r) r.hasOwnProperty(n) && i.push(r[n]);
    for (n = 0; n < i.length; n++) i[n](t);
}
function f(e, t) {
    'undefined' != typeof window && window.performance && 'function' == typeof window.performance.now ? e.addEntropy(window.performance.now(), t, 'loadtime') : e.addEntropy(new Date().valueOf(), t, 'loadtime');
}
function _(e) {
    (e.b = p(e).concat(p(e))), (e.L = new l.cipher.aes(e.b));
}
function p(e) {
    for (var t = 0; 4 > t && ((e.h[t] = (e.h[t] + 1) | 0), !e.h[t]); t++);
    return e.L.encrypt(e.h);
}
function h(e, t) {
    return function () {
        t.apply(e, arguments);
    };
}
(l.cipher.aes = function (e) {
    this.s[0][0][0] || this.O();
    var t,
        n,
        r,
        i,
        o = this.s[0][4],
        a = this.s[1];
    t = e.length;
    var s = 1;
    if (4 !== t && 6 !== t && 8 !== t) throw new l.exception.invalid('invalid aes key size');
    for (this.b = [(r = e.slice(0)), (i = [])], e = t; e < 4 * t + 28; e++) (n = r[e - 1]), (0 == e % t || (8 === t && 4 == e % t)) && ((n = (o[n >>> 24] << 24) ^ (o[(n >> 16) & 255] << 16) ^ (o[(n >> 8) & 255] << 8) ^ o[255 & n]), 0 == e % t && ((n = (n << 8) ^ (n >>> 24) ^ (s << 24)), (s = (s << 1) ^ (283 * (s >> 7))))), (r[e] = r[e - t] ^ n);
    for (t = 0; e; t++, e--) (n = r[3 & t ? e : e - 4]), (i[t] = 4 >= e || 4 > t ? n : a[0][o[n >>> 24]] ^ a[1][o[(n >> 16) & 255]] ^ a[2][o[(n >> 8) & 255]] ^ a[3][o[255 & n]]);
}),
    (l.cipher.aes.prototype = {
        encrypt: function (e) {
            return c(this, e, 0);
        },
        decrypt: function (e) {
            return c(this, e, 1);
        },
        s: [
            [[], [], [], [], []],
            [[], [], [], [], []]
        ],
        O: function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a,
                s = this.s[0],
                l = this.s[1],
                c = s[4],
                u = l[4],
                d = [],
                f = [];
            for (e = 0; 256 > e; e++) f[(d[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
            for (t = n = 0; !c[t]; t ^= r || 1, n = f[n] || 1) for (o = ((o = n ^ (n << 1) ^ (n << 2) ^ (n << 3) ^ (n << 4)) >> 8) ^ (255 & o) ^ 99, c[t] = o, u[o] = t, a = (16843009 * (i = d[(e = d[(r = d[t])])])) ^ (65537 * e) ^ (257 * r) ^ (16843008 * t), i = (257 * d[o]) ^ (16843008 * o), e = 0; 4 > e; e++) (s[e][t] = i = (i << 24) ^ (i >>> 8)), (l[e][o] = a = (a << 24) ^ (a >>> 8));
            for (e = 0; 5 > e; e++) (s[e] = s[e].slice(0)), (l[e] = l[e].slice(0));
        }
    }),
    (l.bitArray = {
        bitSlice: function (e, t, n) {
            return (e = l.bitArray.$(e.slice(t / 32), 32 - (31 & t)).slice(1)), void 0 === n ? e : l.bitArray.clamp(e, n - t);
        },
        extract: function (e, t, n) {
            var r = Math.floor((-t - n) & 31);
            return (((t + n - 1) ^ t) & -32 ? (e[(t / 32) | 0] << (32 - r)) ^ (e[(t / 32 + 1) | 0] >>> r) : e[(t / 32) | 0] >>> r) & ((1 << n) - 1);
        },
        concat: function (e, t) {
            if (0 === e.length || 0 === t.length) return e.concat(t);
            var n = e[e.length - 1],
                r = l.bitArray.getPartial(n);
            return 32 === r ? e.concat(t) : l.bitArray.$(t, r, 0 | n, e.slice(0, e.length - 1));
        },
        bitLength: function (e) {
            var t = e.length;
            return 0 === t ? 0 : 32 * (t - 1) + l.bitArray.getPartial(e[t - 1]);
        },
        clamp: function (e, t) {
            if (32 * e.length < t) return e;
            var n = (e = e.slice(0, Math.ceil(t / 32))).length;
            return (t &= 31), 0 < n && t && (e[n - 1] = l.bitArray.partial(t, e[n - 1] & (2147483648 >> (t - 1)), 1)), e;
        },
        partial: function (e, t, n) {
            return 32 === e ? t : (n ? 0 | t : t << (32 - e)) + 1099511627776 * e;
        },
        getPartial: function (e) {
            return Math.round(e / 1099511627776) || 32;
        },
        equal: function (e, t) {
            if (l.bitArray.bitLength(e) !== l.bitArray.bitLength(t)) return !1;
            var n,
                r = 0;
            for (n = 0; n < e.length; n++) r |= e[n] ^ t[n];
            return 0 === r;
        },
        $: function (e, t, n, r) {
            var i;
            for (i = 0, void 0 === r && (r = []); 32 <= t; t -= 32) r.push(n), (n = 0);
            if (0 === t) return r.concat(e);
            for (i = 0; i < e.length; i++) r.push(n | (e[i] >>> t)), (n = e[i] << (32 - t));
            return (i = e.length ? e[e.length - 1] : 0), (e = l.bitArray.getPartial(i)), r.push(l.bitArray.partial((t + e) & 31, 32 < t + e ? n : r.pop(), 1)), r;
        },
        i: function (e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]];
        },
        byteswapM: function (e) {
            var t, n;
            for (t = 0; t < e.length; ++t) (n = e[t]), (e[t] = (n >>> 24) | ((n >>> 8) & 65280) | ((65280 & n) << 8) | (n << 24));
            return e;
        }
    }),
    (l.codec.utf8String = {
        fromBits: function (e) {
            var t,
                n,
                r = '',
                i = l.bitArray.bitLength(e);
            for (t = 0; t < i / 8; t++) 0 == (3 & t) && (n = e[t / 4]), (r += String.fromCharCode(((n >>> 8) >>> 8) >>> 8)), (n <<= 8);
            return decodeURIComponent(escape(r));
        },
        toBits: function (e) {
            e = unescape(encodeURIComponent(e));
            var t,
                n = [],
                r = 0;
            for (t = 0; t < e.length; t++) (r = (r << 8) | e.charCodeAt(t)), 3 == (3 & t) && (n.push(r), (r = 0));
            return 3 & t && n.push(l.bitArray.partial(8 * (3 & t), r)), n;
        }
    }),
    (l.codec.hex = {
        fromBits: function (e) {
            var t,
                n = '';
            for (t = 0; t < e.length; t++) n += ((0 | e[t]) + 263882790666240).toString(16).substr(4);
            return n.substr(0, l.bitArray.bitLength(e) / 4);
        },
        toBits: function (e) {
            var t,
                n,
                r = [];
            for (n = (e = e.replace(/\s|0x/g, '')).length, e += '00000000', t = 0; t < e.length; t += 8) r.push(0 ^ parseInt(e.substr(t, 8), 16));
            return l.bitArray.clamp(r, 4 * n);
        }
    }),
    (l.codec.base32 = {
        B: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
        X: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
        BITS: 32,
        BASE: 5,
        REMAINING: 27,
        fromBits: function (e, t, n) {
            var r = l.codec.base32.BASE,
                i = l.codec.base32.REMAINING,
                o = '',
                a = 0,
                s = l.codec.base32.B,
                c = 0,
                u = l.bitArray.bitLength(e);
            for (n && (s = l.codec.base32.X), n = 0; o.length * r < u; ) (o += s.charAt((c ^ (e[n] >>> a)) >>> i)), a < r ? ((c = e[n] << (r - a)), (a += i), n++) : ((c <<= r), (a -= r));
            for (; 7 & o.length && !t; ) o += '=';
            return o;
        },
        toBits: function (e, t) {
            e = e.replace(/\s|=/g, '').toUpperCase();
            var n,
                r,
                i = l.codec.base32.BITS,
                o = l.codec.base32.BASE,
                a = l.codec.base32.REMAINING,
                s = [],
                c = 0,
                u = l.codec.base32.B,
                d = 0,
                f = 'base32';
            for (t && ((u = l.codec.base32.X), (f = 'base32hex')), n = 0; n < e.length; n++) {
                if (0 > (r = u.indexOf(e.charAt(n)))) {
                    if (!t)
                        try {
                            return l.codec.base32hex.toBits(e);
                        } catch (e) {}
                    throw new l.exception.invalid("this isn't " + f + '!');
                }
                c > a ? ((c -= a), s.push(d ^ (r >>> c)), (d = r << (i - c))) : ((c += o), (d ^= r << (i - c)));
            }
            return 56 & c && s.push(l.bitArray.partial(56 & c, d, 1)), s;
        }
    }),
    (l.codec.base32hex = {
        fromBits: function (e, t) {
            return l.codec.base32.fromBits(e, t, 1);
        },
        toBits: function (e) {
            return l.codec.base32.toBits(e, 1);
        }
    }),
    (l.codec.base64 = {
        B: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        fromBits: function (e, t, n) {
            var r = '',
                i = 0,
                o = l.codec.base64.B,
                a = 0,
                s = l.bitArray.bitLength(e);
            for (n && (o = o.substr(0, 62) + '-_'), n = 0; 6 * r.length < s; ) (r += o.charAt((a ^ (e[n] >>> i)) >>> 26)), 6 > i ? ((a = e[n] << (6 - i)), (i += 26), n++) : ((a <<= 6), (i -= 6));
            for (; 3 & r.length && !t; ) r += '=';
            return r;
        },
        toBits: function (e, t) {
            e = e.replace(/\s|=/g, '');
            var n,
                r,
                i = [],
                o = 0,
                a = l.codec.base64.B,
                s = 0;
            for (t && (a = a.substr(0, 62) + '-_'), n = 0; n < e.length; n++) {
                if (0 > (r = a.indexOf(e.charAt(n)))) throw new l.exception.invalid("this isn't base64!");
                26 < o ? ((o -= 26), i.push(s ^ (r >>> o)), (s = r << (32 - o))) : ((o += 6), (s ^= r << (32 - o)));
            }
            return 56 & o && i.push(l.bitArray.partial(56 & o, s, 1)), i;
        }
    }),
    (l.codec.base64url = {
        fromBits: function (e) {
            return l.codec.base64.fromBits(e, 1, 1);
        },
        toBits: function (e) {
            return l.codec.base64.toBits(e, 1);
        }
    }),
    (l.hash.sha256 = function (e) {
        this.b[0] || this.O(), e ? ((this.F = e.F.slice(0)), (this.A = e.A.slice(0)), (this.l = e.l)) : this.reset();
    }),
    (l.hash.sha256.hash = function (e) {
        return new l.hash.sha256().update(e).finalize();
    }),
    (l.hash.sha256.prototype = {
        blockSize: 512,
        reset: function () {
            return (this.F = this.Y.slice(0)), (this.A = []), (this.l = 0), this;
        },
        update: function (e) {
            'string' == typeof e && (e = l.codec.utf8String.toBits(e));
            var t,
                n = (this.A = l.bitArray.concat(this.A, e));
            if (((t = this.l), 9007199254740991 < (e = this.l = t + l.bitArray.bitLength(e)))) throw new l.exception.invalid('Cannot hash more than 2^53 - 1 bits');
            if ('undefined' != typeof Uint32Array) {
                var r = new Uint32Array(n),
                    i = 0;
                for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512) u(this, r.subarray(16 * i, 16 * (i + 1))), (i += 1);
                n.splice(0, 16 * i);
            } else for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512) u(this, n.splice(0, 16));
            return this;
        },
        finalize: function () {
            var e,
                t = this.A,
                n = this.F,
                t = l.bitArray.concat(t, [l.bitArray.partial(1, 1)]);
            for (e = t.length + 2; 15 & e; e++) t.push(0);
            for (t.push(Math.floor(this.l / 4294967296)), t.push(0 | this.l); t.length; ) u(this, t.splice(0, 16));
            return this.reset(), n;
        },
        Y: [],
        b: [],
        O: function () {
            function e(e) {
                return (4294967296 * (e - Math.floor(e))) | 0;
            }
            for (var t, n, r = 0, i = 2; 64 > r; i++) {
                for (t = 2, n = !0; t * t <= i; t++)
                    if (0 == i % t) {
                        n = !1;
                        break;
                    }
                n && (8 > r && (this.Y[r] = e(Math.pow(i, 0.5))), (this.b[r] = e(Math.pow(i, 1 / 3))), r++);
            }
        }
    }),
    (l.mode.ccm = {
        name: 'ccm',
        G: [],
        listenProgress: function (e) {
            l.mode.ccm.G.push(e);
        },
        unListenProgress: function (e) {
            -1 < (e = l.mode.ccm.G.indexOf(e)) && l.mode.ccm.G.splice(e, 1);
        },
        fa: function (e) {
            var t,
                n = l.mode.ccm.G.slice();
            for (t = 0; t < n.length; t += 1) n[t](e);
        },
        encrypt: function (e, t, n, r, i) {
            var o,
                a = t.slice(0),
                s = l.bitArray,
                c = s.bitLength(n) / 8,
                u = s.bitLength(a) / 8;
            if (((i = i || 64), (r = r || []), 7 > c)) throw new l.exception.invalid('ccm: iv must be at least 7 bytes');
            for (o = 2; 4 > o && u >>> (8 * o); o++);
            return o < 15 - c && (o = 15 - c), (n = s.clamp(n, 8 * (15 - o))), (t = l.mode.ccm.V(e, t, n, r, i, o)), (a = l.mode.ccm.C(e, a, n, t, i, o)), s.concat(a.data, a.tag);
        },
        decrypt: function (e, t, n, r, i) {
            (i = i || 64), (r = r || []);
            var o = l.bitArray,
                a = o.bitLength(n) / 8,
                s = o.bitLength(t),
                c = o.clamp(t, s - i),
                u = o.bitSlice(t, s - i),
                s = (s - i) / 8;
            if (7 > a) throw new l.exception.invalid('ccm: iv must be at least 7 bytes');
            for (t = 2; 4 > t && s >>> (8 * t); t++);
            if ((t < 15 - a && (t = 15 - a), (n = o.clamp(n, 8 * (15 - t))), (c = l.mode.ccm.C(e, c, n, u, i, t)), (e = l.mode.ccm.V(e, c.data, n, r, i, t)), !o.equal(c.tag, e))) throw new l.exception.corrupt("ccm: tag doesn't match");
            return c.data;
        },
        na: function (e, t, n, r, i, o) {
            var a = [],
                s = l.bitArray,
                c = s.i;
            if (((r = [s.partial(8, (64 * !!t.length) | ((r - 2) << 2) | (o - 1))]), (r = s.concat(r, n)), (r[3] |= i), (r = e.encrypt(r)), t.length)) for (65279 >= (n = s.bitLength(t) / 8) ? (a = [s.partial(16, n)]) : 4294967295 >= n && (a = s.concat([s.partial(16, 65534)], [n])), a = s.concat(a, t), t = 0; t < a.length; t += 4) r = e.encrypt(c(r, a.slice(t, t + 4).concat([0, 0, 0])));
            return r;
        },
        V: function (e, t, n, r, i, o) {
            var a = l.bitArray,
                s = a.i;
            if ((i /= 8) % 2 || 4 > i || 16 < i) throw new l.exception.invalid('ccm: invalid tag length');
            if (4294967295 < r.length || 4294967295 < t.length) throw new l.exception.bug("ccm: can't deal with 4GiB or more data");
            for (n = l.mode.ccm.na(e, r, n, i, a.bitLength(t) / 8, o), r = 0; r < t.length; r += 4) n = e.encrypt(s(n, t.slice(r, r + 4).concat([0, 0, 0])));
            return a.clamp(n, 8 * i);
        },
        C: function (e, t, n, r, i, o) {
            var a,
                s = l.bitArray;
            a = s.i;
            var c = t.length,
                u = s.bitLength(t),
                d = c / 50,
                f = d;
            if (
                ((n = s
                    .concat([s.partial(8, o - 1)], n)
                    .concat([0, 0, 0])
                    .slice(0, 4)),
                (r = s.bitSlice(a(r, e.encrypt(n)), 0, i)),
                !c)
            )
                return {
                    tag: r,
                    data: []
                };
            for (a = 0; a < c; a += 4) a > d && (l.mode.ccm.fa(a / c), (d += f)), n[3]++, (i = e.encrypt(n)), (t[a] ^= i[0]), (t[a + 1] ^= i[1]), (t[a + 2] ^= i[2]), (t[a + 3] ^= i[3]);
            return {
                tag: r,
                data: s.clamp(t, u)
            };
        }
    }),
    (l.mode.ocb2 = {
        name: 'ocb2',
        encrypt: function (e, t, n, r, i, o) {
            if (128 !== l.bitArray.bitLength(n)) throw new l.exception.invalid('ocb iv must be 128 bits');
            var a,
                s = l.mode.ocb2.S,
                c = l.bitArray,
                u = c.i,
                d = [0, 0, 0, 0];
            n = s(e.encrypt(n));
            var f,
                _ = [];
            for (a = 0, r = r || [], i = i || 64; a + 4 < t.length; a += 4) (d = u(d, (f = t.slice(a, a + 4)))), (_ = _.concat(u(n, e.encrypt(u(n, f))))), (n = s(n));
            return (f = t.slice(a)), (t = c.bitLength(f)), (a = e.encrypt(u(n, [0, 0, 0, t]))), (f = c.clamp(u(f.concat([0, 0, 0]), a), t)), (d = u(d, u(f.concat([0, 0, 0]), a))), (d = e.encrypt(u(d, u(n, s(n))))), r.length && (d = u(d, o ? r : l.mode.ocb2.pmac(e, r))), _.concat(c.concat(f, c.clamp(d, i)));
        },
        decrypt: function (e, t, n, r, i, o) {
            if (128 !== l.bitArray.bitLength(n)) throw new l.exception.invalid('ocb iv must be 128 bits');
            i = i || 64;
            var a,
                s,
                c = l.mode.ocb2.S,
                u = l.bitArray,
                d = u.i,
                f = [0, 0, 0, 0],
                _ = c(e.encrypt(n)),
                p = l.bitArray.bitLength(t) - i,
                h = [];
            for (n = 0, r = r || []; n + 4 < p / 32; n += 4) (a = d(_, e.decrypt(d(_, t.slice(n, n + 4))))), (f = d(f, a)), (h = h.concat(a)), (_ = c(_));
            if (((s = p - 32 * n), (a = e.encrypt(d(_, [0, 0, 0, s]))), (a = d(a, u.clamp(t.slice(n), s).concat([0, 0, 0]))), (f = d(f, a)), (f = e.encrypt(d(f, d(_, c(_))))), r.length && (f = d(f, o ? r : l.mode.ocb2.pmac(e, r))), !u.equal(u.clamp(f, i), u.bitSlice(t, p)))) throw new l.exception.corrupt("ocb: tag doesn't match");
            return h.concat(u.clamp(a, s));
        },
        pmac: function (e, t) {
            var n,
                r = l.mode.ocb2.S,
                i = l.bitArray,
                o = i.i,
                a = [0, 0, 0, 0],
                s = e.encrypt([0, 0, 0, 0]),
                s = o(s, r(r(s)));
            for (n = 0; n + 4 < t.length; n += 4) (s = r(s)), (a = o(a, e.encrypt(o(s, t.slice(n, n + 4)))));
            return (n = t.slice(n)), 128 > i.bitLength(n) && ((s = o(s, r(s))), (n = i.concat(n, [-2147483648, 0, 0, 0]))), (a = o(a, n)), e.encrypt(o(r(o(s, r(s))), a));
        },
        S: function (e) {
            return [(e[0] << 1) ^ (e[1] >>> 31), (e[1] << 1) ^ (e[2] >>> 31), (e[2] << 1) ^ (e[3] >>> 31), (e[3] << 1) ^ (135 * (e[0] >>> 31))];
        }
    }),
    (l.mode.gcm = {
        name: 'gcm',
        encrypt: function (e, t, n, r, i) {
            var o = t.slice(0);
            return (t = l.bitArray), (r = r || []), (e = l.mode.gcm.C(!0, e, o, r, n, i || 128)), t.concat(e.data, e.tag);
        },
        decrypt: function (e, t, n, r, i) {
            var o = t.slice(0),
                a = l.bitArray,
                s = a.bitLength(o);
            if (((r = r || []), (i = i || 128) <= s ? ((t = a.bitSlice(o, s - i)), (o = a.bitSlice(o, 0, s - i))) : ((t = o), (o = [])), (e = l.mode.gcm.C(!1, e, o, r, n, i)), !a.equal(e.tag, t))) throw new l.exception.corrupt("gcm: tag doesn't match");
            return e.data;
        },
        ka: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = l.bitArray.i;
            for (n = 0, i = [0, 0, 0, 0], o = t.slice(0); 128 > n; n++) {
                for ((r = 0 != (e[Math.floor(n / 32)] & (1 << (31 - (n % 32))))) && (i = s(i, o)), a = 0 != (1 & o[3]), r = 3; 0 < r; r--) o[r] = (o[r] >>> 1) | ((1 & o[r - 1]) << 31);
                (o[0] >>>= 1), a && (o[0] ^= -520093696);
            }
            return i;
        },
        j: function (e, t, n) {
            var r,
                i = n.length;
            for (r = 0, t = t.slice(0); r < i; r += 4) (t[0] ^= 4294967295 & n[r]), (t[1] ^= 4294967295 & n[r + 1]), (t[2] ^= 4294967295 & n[r + 2]), (t[3] ^= 4294967295 & n[r + 3]), (t = l.mode.gcm.ka(t, e));
            return t;
        },
        C: function (e, t, n, r, i, o) {
            var a,
                s,
                c,
                u,
                d,
                f,
                _,
                p,
                h = l.bitArray;
            for (f = n.length, _ = h.bitLength(n), p = h.bitLength(r), s = h.bitLength(i), a = t.encrypt([0, 0, 0, 0]), 96 === s ? ((i = i.slice(0)), (i = h.concat(i, [1]))) : ((i = l.mode.gcm.j(a, [0, 0, 0, 0], i)), (i = l.mode.gcm.j(a, i, [0, 0, Math.floor(s / 4294967296), 4294967295 & s]))), s = l.mode.gcm.j(a, [0, 0, 0, 0], r), d = i.slice(0), r = s.slice(0), e || (r = l.mode.gcm.j(a, s, n)), u = 0; u < f; u += 4) d[3]++, (c = t.encrypt(d)), (n[u] ^= c[0]), (n[u + 1] ^= c[1]), (n[u + 2] ^= c[2]), (n[u + 3] ^= c[3]);
            return (
                (n = h.clamp(n, _)),
                e && (r = l.mode.gcm.j(a, s, n)),
                (e = [Math.floor(p / 4294967296), 4294967295 & p, Math.floor(_ / 4294967296), 4294967295 & _]),
                (r = l.mode.gcm.j(a, r, e)),
                (c = t.encrypt(i)),
                (r[0] ^= c[0]),
                (r[1] ^= c[1]),
                (r[2] ^= c[2]),
                (r[3] ^= c[3]),
                {
                    tag: h.bitSlice(r, 0, o),
                    data: n
                }
            );
        }
    }),
    (l.misc.hmac = function (e, t) {
        this.W = t = t || l.hash.sha256;
        var n,
            r = [[], []],
            i = t.prototype.blockSize / 32;
        for (this.w = [new t(), new t()], e.length > i && (e = t.hash(e)), n = 0; n < i; n++) (r[0][n] = 909522486 ^ e[n]), (r[1][n] = 1549556828 ^ e[n]);
        this.w[0].update(r[0]), this.w[1].update(r[1]), (this.R = new t(this.w[0]));
    }),
    (l.misc.hmac.prototype.encrypt = l.misc.hmac.prototype.mac =
        function (e) {
            if (this.aa) throw new l.exception.invalid('encrypt on already updated hmac called!');
            return this.update(e), this.digest(e);
        }),
    (l.misc.hmac.prototype.reset = function () {
        (this.R = new this.W(this.w[0])), (this.aa = !1);
    }),
    (l.misc.hmac.prototype.update = function (e) {
        (this.aa = !0), this.R.update(e);
    }),
    (l.misc.hmac.prototype.digest = function () {
        var e = this.R.finalize(),
            e = new this.W(this.w[1]).update(e).finalize();
        return this.reset(), e;
    }),
    (l.misc.pbkdf2 = function (e, t, n, r, i) {
        if (((n = n || 10000), 0 > r || 0 > n)) throw new l.exception.invalid('invalid params to pbkdf2');
        'string' == typeof e && (e = l.codec.utf8String.toBits(e)), 'string' == typeof t && (t = l.codec.utf8String.toBits(t)), (e = new (i = i || l.misc.hmac)(e));
        var o,
            a,
            s,
            c,
            u = [],
            d = l.bitArray;
        for (c = 1; 32 * u.length < (r || 1); c++) {
            for (a = 1, i = o = e.encrypt(d.concat(t, [c])); a < n; a++) for (o = e.encrypt(o), s = 0; s < o.length; s++) i[s] ^= o[s];
            u = u.concat(i);
        }
        return r && (u = d.clamp(u, r)), u;
    }),
    (l.prng = function (e) {
        (this.c = [new l.hash.sha256()]),
            (this.m = [0]),
            (this.P = 0),
            (this.H = {}),
            (this.N = 0),
            (this.U = {}),
            (this.Z = this.f = this.o = this.ha = 0),
            (this.b = [0, 0, 0, 0, 0, 0, 0, 0]),
            (this.h = [0, 0, 0, 0]),
            (this.L = void 0),
            (this.M = e),
            (this.D = !1),
            (this.K = {
                progress: {},
                seeded: {}
            }),
            (this.u = this.ga = 0),
            (this.I = 1),
            (this.J = 2),
            (this.ca = 65536),
            (this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024]),
            (this.da = 30000),
            (this.ba = 80);
    }),
    (l.prng.prototype = {
        randomWords: function (e, t) {
            var n,
                r = [];
            if ((n = this.isReady(t)) === this.u) throw new l.exception.notReady("generator isn't seeded");
            if (n & this.J) {
                n = !(n & this.I);
                var i,
                    o = [],
                    a = 0;
                for (i = 0, this.Z = o[0] = new Date().valueOf() + this.da; 16 > i; i++) o.push((4294967296 * Math.random()) | 0);
                for (i = 0; i < this.c.length && ((o = o.concat(this.c[i].finalize())), (a += this.m[i]), (this.m[i] = 0), n || !(this.P & (1 << i))); i++);
                for (this.P >= 1 << this.c.length && (this.c.push(new l.hash.sha256()), this.m.push(0)), this.f -= a, a > this.o && (this.o = a), this.P++, this.b = l.hash.sha256.hash(this.b.concat(o)), this.L = new l.cipher.aes(this.b), n = 0; 4 > n && ((this.h[n] = (this.h[n] + 1) | 0), !this.h[n]); n++);
            }
            for (n = 0; n < e; n += 4) 0 == (n + 1) % this.ca && _(this), r.push((o = p(this))[0], o[1], o[2], o[3]);
            return _(this), r.slice(0, e);
        },
        setDefaultParanoia: function (e, t) {
            if (0 === e && 'Setting paranoia=0 will ruin your security; use it only for testing' !== t) throw new l.exception.invalid('Setting paranoia=0 will ruin your security; use it only for testing');
            this.M = e;
        },
        addEntropy: function (e, t, n) {
            n = n || 'user';
            var r,
                i,
                o = new Date().valueOf(),
                a = this.H[n],
                s = this.isReady(),
                c = 0;
            switch ((void 0 === (r = this.U[n]) && (r = this.U[n] = this.ha++), void 0 === a && (a = this.H[n] = 0), (this.H[n] = (this.H[n] + 1) % this.c.length), typeof e)) {
                case 'number':
                    void 0 === t && (t = 1), this.c[a].update([r, this.N++, 1, t, o, 1, 0 | e]);
                    break;
                case 'object':
                    if ('[object Uint32Array]' === (n = Object.prototype.toString.call(e))) {
                        for (n = 0, i = []; n < e.length; n++) i.push(e[n]);
                        e = i;
                    } else for ('[object Array]' !== n && (c = 1), n = 0; n < e.length && !c; n++) 'number' != typeof e[n] && (c = 1);
                    if (!c) {
                        if (void 0 === t) for (n = t = 0; n < e.length; n++) for (i = e[n]; 0 < i; ) t++, (i >>>= 1);
                        this.c[a].update([r, this.N++, 2, t, o, e.length].concat(e));
                    }
                    break;
                case 'string':
                    void 0 === t && (t = e.length), this.c[a].update([r, this.N++, 3, t, o, e.length]), this.c[a].update(e);
                    break;
                default:
                    c = 1;
            }
            if (c) throw new l.exception.bug('random: addEntropy only supports number, array of numbers or string');
            (this.m[a] += t), (this.f += t), s === this.u && (this.isReady() !== this.u && d('seeded', Math.max(this.o, this.f)), d('progress', this.getProgress()));
        },
        isReady: function (e) {
            return (e = this.T[void 0 !== e ? e : this.M]), this.o && this.o >= e ? (this.m[0] > this.ba && new Date().valueOf() > this.Z ? this.J | this.I : this.I) : this.f >= e ? this.J | this.u : this.u;
        },
        getProgress: function (e) {
            return (e = this.T[e || this.M]), this.o >= e || this.f > e ? 1 : this.f / e;
        },
        startCollectors: function () {
            if (!this.D) {
                if (
                    ((this.a = {
                        loadTimeCollector: h(this, this.ma),
                        mouseCollector: h(this, this.oa),
                        keyboardCollector: h(this, this.la),
                        accelerometerCollector: h(this, this.ea),
                        touchCollector: h(this, this.qa)
                    }),
                    window.addEventListener)
                )
                    window.addEventListener('load', this.a.loadTimeCollector, !1), window.addEventListener('mousemove', this.a.mouseCollector, !1), window.addEventListener('keypress', this.a.keyboardCollector, !1), window.addEventListener('devicemotion', this.a.accelerometerCollector, !1), window.addEventListener('touchmove', this.a.touchCollector, !1);
                else if (document.attachEvent) document.attachEvent('onload', this.a.loadTimeCollector), document.attachEvent('onmousemove', this.a.mouseCollector), document.attachEvent('keypress', this.a.keyboardCollector);
                else throw new l.exception.bug("can't attach event");
                this.D = !0;
            }
        },
        stopCollectors: function () {
            this.D && (window.removeEventListener ? (window.removeEventListener('load', this.a.loadTimeCollector, !1), window.removeEventListener('mousemove', this.a.mouseCollector, !1), window.removeEventListener('keypress', this.a.keyboardCollector, !1), window.removeEventListener('devicemotion', this.a.accelerometerCollector, !1), window.removeEventListener('touchmove', this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent('onload', this.a.loadTimeCollector), document.detachEvent('onmousemove', this.a.mouseCollector), document.detachEvent('keypress', this.a.keyboardCollector)), (this.D = !1));
        },
        addEventListener: function (e, t) {
            this.K[e][this.ga++] = t;
        },
        removeEventListener: function (e, t) {
            var n,
                r,
                i = this.K[e],
                o = [];
            for (r in i) i.hasOwnProperty(r) && i[r] === t && o.push(r);
            for (n = 0; n < o.length; n++) (r = o[n]), delete i[r];
        },
        la: function () {
            f(this, 1);
        },
        oa: function (e) {
            var t, n;
            try {
                (t = e.x || e.clientX || e.offsetX || 0), (n = e.y || e.clientY || e.offsetY || 0);
            } catch (e) {
                n = t = 0;
            }
            0 != t && 0 != n && this.addEntropy([t, n], 2, 'mouse'), f(this, 0);
        },
        qa: function (e) {
            (e = e.touches[0] || e.changedTouches[0]), this.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, 'touch'), f(this, 0);
        },
        ma: function () {
            f(this, 2);
        },
        ea: function (e) {
            if (((e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z), window.orientation)) {
                var t = window.orientation;
                'number' == typeof t && this.addEntropy(t, 1, 'accelerometer');
            }
            e && this.addEntropy(e, 2, 'accelerometer'), f(this, 0);
        }
    }),
    (l.random = new l.prng(6));
e: try {
    if ((a = e.exports)) {
        try {
            s = n(
                Object(
                    (function () {
                        var e = Error("Cannot find module 'crypto'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    })()
                )
            );
        } catch (e) {
            s = null;
        }
        a = i = s;
    }
    if (a && i.randomBytes) (r = i.randomBytes(128)), (r = new Uint32Array(new Uint8Array(r).buffer)), l.random.addEntropy(r, 1024, "crypto['randomBytes']");
    else if ('undefined' != typeof window && 'undefined' != typeof Uint32Array) {
        if (((o = new Uint32Array(32)), window.crypto && window.crypto.getRandomValues)) window.crypto.getRandomValues(o);
        else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(o);
        else break e;
        l.random.addEntropy(o, 1024, "crypto['getRandomValues']");
    }
} catch (e) {
    'undefined' != typeof window && window.console && (console.log('There was an error collecting entropy from the browser:'), console.log(e));
}
(l.json = {
    defaults: {
        v: 1,
        iter: 10000,
        ks: 128,
        ts: 64,
        mode: 'ccm',
        adata: '',
        cipher: 'aes'
    },
    ja: function (e, t, n, r) {
        (n = n || {}), (r = r || {});
        var i,
            o = l.json,
            a = o.g({ iv: l.random.randomWords(4, 0) }, o.defaults);
        if ((o.g(a, n), (n = a.adata), 'string' == typeof a.salt && (a.salt = l.codec.base64.toBits(a.salt)), 'string' == typeof a.iv && (a.iv = l.codec.base64.toBits(a.iv)), !l.mode[a.mode] || !l.cipher[a.cipher] || ('string' == typeof e && 100 >= a.iter) || (64 !== a.ts && 96 !== a.ts && 128 !== a.ts) || (128 !== a.ks && 192 !== a.ks && 256 !== a.ks) || 2 > a.iv.length || 4 < a.iv.length)) throw new l.exception.invalid('json encrypt: invalid parameters');
        return 'string' == typeof e ? ((e = (i = l.misc.cachedPbkdf2(e, a)).key.slice(0, a.ks / 32)), (a.salt = i.salt)) : l.ecc && e instanceof l.ecc.elGamal.publicKey && ((a.kemtag = (i = e.kem()).tag), (e = i.key.slice(0, a.ks / 32))), 'string' == typeof t && (t = l.codec.utf8String.toBits(t)), 'string' == typeof n && (a.adata = n = l.codec.utf8String.toBits(n)), (i = new l.cipher[a.cipher](e)), o.g(r, a), (r.key = e), (a.ct = 'ccm' === a.mode && l.arrayBuffer && l.arrayBuffer.ccm && t instanceof ArrayBuffer ? l.arrayBuffer.ccm.encrypt(i, t, a.iv, n, a.ts) : l.mode[a.mode].encrypt(i, t, a.iv, n, a.ts)), a;
    },
    encrypt: function (e, t, n, r) {
        var i = l.json,
            o = i.ja.apply(i, arguments);
        return i.encode(o);
    },
    ia: function (e, t, n, r) {
        (n = n || {}), (r = r || {});
        var i,
            o,
            a = l.json;
        if (((i = (t = a.g(a.g(a.g({}, a.defaults), t), n, !0)).adata), 'string' == typeof t.salt && (t.salt = l.codec.base64.toBits(t.salt)), 'string' == typeof t.iv && (t.iv = l.codec.base64.toBits(t.iv)), !l.mode[t.mode] || !l.cipher[t.cipher] || ('string' == typeof e && 100 >= t.iter) || (64 !== t.ts && 96 !== t.ts && 128 !== t.ts) || (128 !== t.ks && 192 !== t.ks && 256 !== t.ks) || !t.iv || 2 > t.iv.length || 4 < t.iv.length)) throw new l.exception.invalid('json decrypt: invalid parameters');
        return 'string' == typeof e ? ((e = (o = l.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32)), (t.salt = o.salt)) : l.ecc && e instanceof l.ecc.elGamal.secretKey && (e = e.unkem(l.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)), 'string' == typeof i && (i = l.codec.utf8String.toBits(i)), (o = new l.cipher[t.cipher](e)), (i = 'ccm' === t.mode && l.arrayBuffer && l.arrayBuffer.ccm && t.ct instanceof ArrayBuffer ? l.arrayBuffer.ccm.decrypt(o, t.ct, t.iv, t.tag, i, t.ts) : l.mode[t.mode].decrypt(o, t.ct, t.iv, i, t.ts)), a.g(r, t), (r.key = e), 1 === n.raw ? i : l.codec.utf8String.fromBits(i);
    },
    decrypt: function (e, t, n, r) {
        var i = l.json;
        return i.ia(e, i.decode(t), n, r);
    },
    encode: function (e) {
        var t,
            n = '{',
            r = '';
        for (t in e)
            if (e.hasOwnProperty(t)) {
                if (!t.match(/^[a-z0-9]+$/i)) throw new l.exception.invalid('json encode: invalid property name');
                switch (((n += r + '"' + t + '":'), (r = ','), typeof e[t])) {
                    case 'number':
                    case 'boolean':
                        n += e[t];
                        break;
                    case 'string':
                        n += '"' + escape(e[t]) + '"';
                        break;
                    case 'object':
                        n += '"' + l.codec.base64.fromBits(e[t], 0) + '"';
                        break;
                    default:
                        throw new l.exception.bug('json encode: unsupported type');
                }
            }
        return n + '}';
    },
    decode: function (e) {
        if (!(e = e.replace(/\s/g, '')).match(/^\{.*\}$/)) throw new l.exception.invalid("json decode: this isn't json!");
        e = e.replace(/^\{|\}$/g, '').split(/,/);
        var t,
            n,
            r = {};
        for (t = 0; t < e.length; t++) {
            if (!(n = e[t].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new l.exception.invalid("json decode: this isn't json!");
            null != n[3] ? (r[n[2]] = parseInt(n[3], 10)) : null != n[4] ? (r[n[2]] = n[2].match(/^(ct|adata|salt|iv)$/) ? l.codec.base64.toBits(n[4]) : unescape(n[4])) : null != n[5] && (r[n[2]] = 'true' === n[5]);
        }
        return r;
    },
    g: function (e, t, n) {
        if ((void 0 === e && (e = {}), void 0 === t)) return e;
        for (var r in t)
            if (t.hasOwnProperty(r)) {
                if (n && void 0 !== e[r] && e[r] !== t[r]) throw new l.exception.invalid('required parameter overridden');
                e[r] = t[r];
            }
        return e;
    },
    sa: function (e, t) {
        var n,
            r = {};
        for (n in e) e.hasOwnProperty(n) && e[n] !== t[n] && (r[n] = e[n]);
        return r;
    },
    ra: function (e, t) {
        var n,
            r = {};
        for (n = 0; n < t.length; n++) void 0 !== e[t[n]] && (r[t[n]] = e[t[n]]);
        return r;
    }
}),
    (l.encrypt = l.json.encrypt),
    (l.decrypt = l.json.decrypt),
    (l.misc.pa = {}),
    (l.misc.cachedPbkdf2 = function (e, t) {
        var n,
            r = l.misc.pa;
        return (
            (n = (t = t || {}).iter || 1000),
            (n = (r = r[e] = r[e] || {})[n] = r[n] || { firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : l.random.randomWords(2, 0) }),
            (r = void 0 === t.salt ? n.firstSalt : t.salt),
            (n[r] = n[r] || l.misc.pbkdf2(e, r, t.iter)),
            {
                key: n[r].slice(0),
                salt: r.slice(0)
            }
        );
    }),
    e.exports && (e.exports = l),
    'function' == typeof define &&
        define([], function () {
            return l;
        });
