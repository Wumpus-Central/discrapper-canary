var i,
    a,
    o,
    s,
    l,
    u = {
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
function c(e, n, r) {
    if (4 !== n.length) throw new u.exception.invalid('invalid aes block size');
    var i = e.b[r],
        a = n[0] ^ i[0],
        o = n[r ? 3 : 1] ^ i[1],
        s = n[2] ^ i[2];
    n = n[r ? 1 : 3] ^ i[3];
    var l,
        c,
        d,
        f,
        p = i.length / 4 - 2,
        h = 4,
        _ = [0, 0, 0, 0];
    e = (l = e.s[r])[0];
    var m = l[1],
        g = l[2],
        E = l[3],
        v = l[4];
    for (f = 0; f < p; f++) (l = e[a >>> 24] ^ m[(o >> 16) & 255] ^ g[(s >> 8) & 255] ^ E[255 & n] ^ i[h]), (c = e[o >>> 24] ^ m[(s >> 16) & 255] ^ g[(n >> 8) & 255] ^ E[255 & a] ^ i[h + 1]), (d = e[s >>> 24] ^ m[(n >> 16) & 255] ^ g[(a >> 8) & 255] ^ E[255 & o] ^ i[h + 2]), (n = e[n >>> 24] ^ m[(a >> 16) & 255] ^ g[(o >> 8) & 255] ^ E[255 & s] ^ i[h + 3]), (h += 4), (a = l), (o = c), (s = d);
    for (f = 0; 4 > f; f++) (_[r ? 3 & -f : f] = (v[a >>> 24] << 24) ^ (v[(o >> 16) & 255] << 16) ^ (v[(s >> 8) & 255] << 8) ^ v[255 & n] ^ i[h++]), (l = a), (a = o), (o = s), (s = n), (n = l);
    return _;
}
function d(e, n) {
    var r,
        i,
        a,
        o = e.F,
        s = e.b,
        l = o[0],
        u = o[1],
        c = o[2],
        d = o[3],
        f = o[4],
        p = o[5],
        h = o[6],
        _ = o[7];
    for (r = 0; 64 > r; r++) 16 > r ? (i = n[r]) : ((i = n[(r + 1) & 15]), (a = n[(r + 14) & 15]), (i = n[15 & r] = (((i >>> 7) ^ (i >>> 18) ^ (i >>> 3) ^ (i << 25) ^ (i << 14)) + ((a >>> 17) ^ (a >>> 19) ^ (a >>> 10) ^ (a << 15) ^ (a << 13)) + n[15 & r] + n[(r + 9) & 15]) | 0)), (i = i + _ + ((f >>> 6) ^ (f >>> 11) ^ (f >>> 25) ^ (f << 26) ^ (f << 21) ^ (f << 7)) + (h ^ (f & (p ^ h))) + s[r]), (_ = h), (h = p), (p = f), (f = (d + i) | 0), (d = c), (c = u), (l = (i + (((u = l) & c) ^ (d & (u ^ c))) + ((u >>> 2) ^ (u >>> 13) ^ (u >>> 22) ^ (u << 30) ^ (u << 19) ^ (u << 10))) | 0);
    (o[0] = (o[0] + l) | 0), (o[1] = (o[1] + u) | 0), (o[2] = (o[2] + c) | 0), (o[3] = (o[3] + d) | 0), (o[4] = (o[4] + f) | 0), (o[5] = (o[5] + p) | 0), (o[6] = (o[6] + h) | 0), (o[7] = (o[7] + _) | 0);
}
function f(e, n) {
    var r,
        i = u.random.K[e],
        a = [];
    for (r in i) i.hasOwnProperty(r) && a.push(i[r]);
    for (r = 0; r < a.length; r++) a[r](n);
}
function p(e, n) {
    'undefined' != typeof window && window.performance && 'function' == typeof window.performance.now ? e.addEntropy(window.performance.now(), n, 'loadtime') : e.addEntropy(new Date().valueOf(), n, 'loadtime');
}
function h(e) {
    (e.b = _(e).concat(_(e))), (e.L = new u.cipher.aes(e.b));
}
function _(e) {
    for (var n = 0; 4 > n && ((e.h[n] = (e.h[n] + 1) | 0), !e.h[n]); n++);
    return e.L.encrypt(e.h);
}
function m(e, n) {
    return function () {
        n.apply(e, arguments);
    };
}
(u.cipher.aes = function (e) {
    this.s[0][0][0] || this.O();
    var n,
        r,
        i,
        a,
        o = this.s[0][4],
        s = this.s[1];
    n = e.length;
    var l = 1;
    if (4 !== n && 6 !== n && 8 !== n) throw new u.exception.invalid('invalid aes key size');
    for (this.b = [(i = e.slice(0)), (a = [])], e = n; e < 4 * n + 28; e++) (r = i[e - 1]), (0 == e % n || (8 === n && 4 == e % n)) && ((r = (o[r >>> 24] << 24) ^ (o[(r >> 16) & 255] << 16) ^ (o[(r >> 8) & 255] << 8) ^ o[255 & r]), 0 == e % n && ((r = (r << 8) ^ (r >>> 24) ^ (l << 24)), (l = (l << 1) ^ (283 * (l >> 7))))), (i[e] = i[e - n] ^ r);
    for (n = 0; e; n++, e--) (r = i[3 & n ? e : e - 4]), (a[n] = 4 >= e || 4 > n ? r : s[0][o[r >>> 24]] ^ s[1][o[(r >> 16) & 255]] ^ s[2][o[(r >> 8) & 255]] ^ s[3][o[255 & r]]);
}),
    (u.cipher.aes.prototype = {
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
                n,
                r,
                i,
                a,
                o,
                s,
                l = this.s[0],
                u = this.s[1],
                c = l[4],
                d = u[4],
                f = [],
                p = [];
            for (e = 0; 256 > e; e++) p[(f[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
            for (n = r = 0; !c[n]; n ^= i || 1, r = p[r] || 1) for (o = ((o = r ^ (r << 1) ^ (r << 2) ^ (r << 3) ^ (r << 4)) >> 8) ^ (255 & o) ^ 99, c[n] = o, d[o] = n, s = (16843009 * (a = f[(e = f[(i = f[n])])])) ^ (65537 * e) ^ (257 * i) ^ (16843008 * n), a = (257 * f[o]) ^ (16843008 * o), e = 0; 4 > e; e++) (l[e][n] = a = (a << 24) ^ (a >>> 8)), (u[e][o] = s = (s << 24) ^ (s >>> 8));
            for (e = 0; 5 > e; e++) (l[e] = l[e].slice(0)), (u[e] = u[e].slice(0));
        }
    }),
    (u.bitArray = {
        bitSlice: function (e, n, r) {
            return (e = u.bitArray.$(e.slice(n / 32), 32 - (31 & n)).slice(1)), void 0 === r ? e : u.bitArray.clamp(e, r - n);
        },
        extract: function (e, n, r) {
            var i = Math.floor((-n - r) & 31);
            return (((n + r - 1) ^ n) & -32 ? (e[(n / 32) | 0] << (32 - i)) ^ (e[(n / 32 + 1) | 0] >>> i) : e[(n / 32) | 0] >>> i) & ((1 << r) - 1);
        },
        concat: function (e, n) {
            if (0 === e.length || 0 === n.length) return e.concat(n);
            var r = e[e.length - 1],
                i = u.bitArray.getPartial(r);
            return 32 === i ? e.concat(n) : u.bitArray.$(n, i, 0 | r, e.slice(0, e.length - 1));
        },
        bitLength: function (e) {
            var n = e.length;
            return 0 === n ? 0 : 32 * (n - 1) + u.bitArray.getPartial(e[n - 1]);
        },
        clamp: function (e, n) {
            if (32 * e.length < n) return e;
            var r = (e = e.slice(0, Math.ceil(n / 32))).length;
            return (n &= 31), 0 < r && n && (e[r - 1] = u.bitArray.partial(n, e[r - 1] & (2147483648 >> (n - 1)), 1)), e;
        },
        partial: function (e, n, r) {
            return 32 === e ? n : (r ? 0 | n : n << (32 - e)) + 1099511627776 * e;
        },
        getPartial: function (e) {
            return Math.round(e / 1099511627776) || 32;
        },
        equal: function (e, n) {
            if (u.bitArray.bitLength(e) !== u.bitArray.bitLength(n)) return !1;
            var r,
                i = 0;
            for (r = 0; r < e.length; r++) i |= e[r] ^ n[r];
            return 0 === i;
        },
        $: function (e, n, r, i) {
            var a;
            for (a = 0, void 0 === i && (i = []); 32 <= n; n -= 32) i.push(r), (r = 0);
            if (0 === n) return i.concat(e);
            for (a = 0; a < e.length; a++) i.push(r | (e[a] >>> n)), (r = e[a] << (32 - n));
            return (a = e.length ? e[e.length - 1] : 0), (e = u.bitArray.getPartial(a)), i.push(u.bitArray.partial((n + e) & 31, 32 < n + e ? r : i.pop(), 1)), i;
        },
        i: function (e, n) {
            return [e[0] ^ n[0], e[1] ^ n[1], e[2] ^ n[2], e[3] ^ n[3]];
        },
        byteswapM: function (e) {
            var n, r;
            for (n = 0; n < e.length; ++n) (r = e[n]), (e[n] = (r >>> 24) | ((r >>> 8) & 65280) | ((65280 & r) << 8) | (r << 24));
            return e;
        }
    }),
    (u.codec.utf8String = {
        fromBits: function (e) {
            var n,
                r,
                i = '',
                a = u.bitArray.bitLength(e);
            for (n = 0; n < a / 8; n++) 0 == (3 & n) && (r = e[n / 4]), (i += String.fromCharCode(((r >>> 8) >>> 8) >>> 8)), (r <<= 8);
            return decodeURIComponent(escape(i));
        },
        toBits: function (e) {
            e = unescape(encodeURIComponent(e));
            var n,
                r = [],
                i = 0;
            for (n = 0; n < e.length; n++) (i = (i << 8) | e.charCodeAt(n)), 3 == (3 & n) && (r.push(i), (i = 0));
            return 3 & n && r.push(u.bitArray.partial(8 * (3 & n), i)), r;
        }
    }),
    (u.codec.hex = {
        fromBits: function (e) {
            var n,
                r = '';
            for (n = 0; n < e.length; n++) r += ((0 | e[n]) + 263882790666240).toString(16).substr(4);
            return r.substr(0, u.bitArray.bitLength(e) / 4);
        },
        toBits: function (e) {
            var n,
                r,
                i = [];
            for (r = (e = e.replace(/\s|0x/g, '')).length, e += '00000000', n = 0; n < e.length; n += 8) i.push(0 ^ parseInt(e.substr(n, 8), 16));
            return u.bitArray.clamp(i, 4 * r);
        }
    }),
    (u.codec.base32 = {
        B: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
        X: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
        BITS: 32,
        BASE: 5,
        REMAINING: 27,
        fromBits: function (e, n, r) {
            var i = u.codec.base32.BASE,
                a = u.codec.base32.REMAINING,
                o = '',
                s = 0,
                l = u.codec.base32.B,
                c = 0,
                d = u.bitArray.bitLength(e);
            for (r && (l = u.codec.base32.X), r = 0; o.length * i < d; ) (o += l.charAt((c ^ (e[r] >>> s)) >>> a)), s < i ? ((c = e[r] << (i - s)), (s += a), r++) : ((c <<= i), (s -= i));
            for (; 7 & o.length && !n; ) o += '=';
            return o;
        },
        toBits: function (e, n) {
            e = e.replace(/\s|=/g, '').toUpperCase();
            var r,
                i,
                a = u.codec.base32.BITS,
                o = u.codec.base32.BASE,
                s = u.codec.base32.REMAINING,
                l = [],
                c = 0,
                d = u.codec.base32.B,
                f = 0,
                p = 'base32';
            for (n && ((d = u.codec.base32.X), (p = 'base32hex')), r = 0; r < e.length; r++) {
                if (0 > (i = d.indexOf(e.charAt(r)))) {
                    if (!n)
                        try {
                            return u.codec.base32hex.toBits(e);
                        } catch (e) {}
                    throw new u.exception.invalid("this isn't " + p + '!');
                }
                c > s ? ((c -= s), l.push(f ^ (i >>> c)), (f = i << (a - c))) : ((c += o), (f ^= i << (a - c)));
            }
            return 56 & c && l.push(u.bitArray.partial(56 & c, f, 1)), l;
        }
    }),
    (u.codec.base32hex = {
        fromBits: function (e, n) {
            return u.codec.base32.fromBits(e, n, 1);
        },
        toBits: function (e) {
            return u.codec.base32.toBits(e, 1);
        }
    }),
    (u.codec.base64 = {
        B: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        fromBits: function (e, n, r) {
            var i = '',
                a = 0,
                o = u.codec.base64.B,
                s = 0,
                l = u.bitArray.bitLength(e);
            for (r && (o = o.substr(0, 62) + '-_'), r = 0; 6 * i.length < l; ) (i += o.charAt((s ^ (e[r] >>> a)) >>> 26)), 6 > a ? ((s = e[r] << (6 - a)), (a += 26), r++) : ((s <<= 6), (a -= 6));
            for (; 3 & i.length && !n; ) i += '=';
            return i;
        },
        toBits: function (e, n) {
            e = e.replace(/\s|=/g, '');
            var r,
                i,
                a = [],
                o = 0,
                s = u.codec.base64.B,
                l = 0;
            for (n && (s = s.substr(0, 62) + '-_'), r = 0; r < e.length; r++) {
                if (0 > (i = s.indexOf(e.charAt(r)))) throw new u.exception.invalid("this isn't base64!");
                26 < o ? ((o -= 26), a.push(l ^ (i >>> o)), (l = i << (32 - o))) : ((o += 6), (l ^= i << (32 - o)));
            }
            return 56 & o && a.push(u.bitArray.partial(56 & o, l, 1)), a;
        }
    }),
    (u.codec.base64url = {
        fromBits: function (e) {
            return u.codec.base64.fromBits(e, 1, 1);
        },
        toBits: function (e) {
            return u.codec.base64.toBits(e, 1);
        }
    }),
    (u.hash.sha256 = function (e) {
        this.b[0] || this.O(), e ? ((this.F = e.F.slice(0)), (this.A = e.A.slice(0)), (this.l = e.l)) : this.reset();
    }),
    (u.hash.sha256.hash = function (e) {
        return new u.hash.sha256().update(e).finalize();
    }),
    (u.hash.sha256.prototype = {
        blockSize: 512,
        reset: function () {
            return (this.F = this.Y.slice(0)), (this.A = []), (this.l = 0), this;
        },
        update: function (e) {
            'string' == typeof e && (e = u.codec.utf8String.toBits(e));
            var n,
                r = (this.A = u.bitArray.concat(this.A, e));
            if (((n = this.l), 9007199254740991 < (e = this.l = n + u.bitArray.bitLength(e)))) throw new u.exception.invalid('Cannot hash more than 2^53 - 1 bits');
            if ('undefined' != typeof Uint32Array) {
                var i = new Uint32Array(r),
                    a = 0;
                for (n = 512 + n - ((512 + n) & 511); n <= e; n += 512) d(this, i.subarray(16 * a, 16 * (a + 1))), (a += 1);
                r.splice(0, 16 * a);
            } else for (n = 512 + n - ((512 + n) & 511); n <= e; n += 512) d(this, r.splice(0, 16));
            return this;
        },
        finalize: function () {
            var e,
                n = this.A,
                r = this.F,
                n = u.bitArray.concat(n, [u.bitArray.partial(1, 1)]);
            for (e = n.length + 2; 15 & e; e++) n.push(0);
            for (n.push(Math.floor(this.l / 4294967296)), n.push(0 | this.l); n.length; ) d(this, n.splice(0, 16));
            return this.reset(), r;
        },
        Y: [],
        b: [],
        O: function () {
            function e(e) {
                return (4294967296 * (e - Math.floor(e))) | 0;
            }
            for (var n, r, i = 0, a = 2; 64 > i; a++) {
                for (n = 2, r = !0; n * n <= a; n++)
                    if (0 == a % n) {
                        r = !1;
                        break;
                    }
                r && (8 > i && (this.Y[i] = e(Math.pow(a, 0.5))), (this.b[i] = e(Math.pow(a, 1 / 3))), i++);
            }
        }
    }),
    (u.mode.ccm = {
        name: 'ccm',
        G: [],
        listenProgress: function (e) {
            u.mode.ccm.G.push(e);
        },
        unListenProgress: function (e) {
            -1 < (e = u.mode.ccm.G.indexOf(e)) && u.mode.ccm.G.splice(e, 1);
        },
        fa: function (e) {
            var n,
                r = u.mode.ccm.G.slice();
            for (n = 0; n < r.length; n += 1) r[n](e);
        },
        encrypt: function (e, n, r, i, a) {
            var o,
                s = n.slice(0),
                l = u.bitArray,
                c = l.bitLength(r) / 8,
                d = l.bitLength(s) / 8;
            if (((a = a || 64), (i = i || []), 7 > c)) throw new u.exception.invalid('ccm: iv must be at least 7 bytes');
            for (o = 2; 4 > o && d >>> (8 * o); o++);
            return o < 15 - c && (o = 15 - c), (r = l.clamp(r, 8 * (15 - o))), (n = u.mode.ccm.V(e, n, r, i, a, o)), (s = u.mode.ccm.C(e, s, r, n, a, o)), l.concat(s.data, s.tag);
        },
        decrypt: function (e, n, r, i, a) {
            (a = a || 64), (i = i || []);
            var o = u.bitArray,
                s = o.bitLength(r) / 8,
                l = o.bitLength(n),
                c = o.clamp(n, l - a),
                d = o.bitSlice(n, l - a),
                l = (l - a) / 8;
            if (7 > s) throw new u.exception.invalid('ccm: iv must be at least 7 bytes');
            for (n = 2; 4 > n && l >>> (8 * n); n++);
            if ((n < 15 - s && (n = 15 - s), (r = o.clamp(r, 8 * (15 - n))), (c = u.mode.ccm.C(e, c, r, d, a, n)), (e = u.mode.ccm.V(e, c.data, r, i, a, n)), !o.equal(c.tag, e))) throw new u.exception.corrupt("ccm: tag doesn't match");
            return c.data;
        },
        na: function (e, n, r, i, a, o) {
            var s = [],
                l = u.bitArray,
                c = l.i;
            if (((i = [l.partial(8, (n.length ? 64 : 0) | ((i - 2) << 2) | (o - 1))]), (i = l.concat(i, r)), (i[3] |= a), (i = e.encrypt(i)), n.length)) for (65279 >= (r = l.bitLength(n) / 8) ? (s = [l.partial(16, r)]) : 4294967295 >= r && (s = l.concat([l.partial(16, 65534)], [r])), s = l.concat(s, n), n = 0; n < s.length; n += 4) i = e.encrypt(c(i, s.slice(n, n + 4).concat([0, 0, 0])));
            return i;
        },
        V: function (e, n, r, i, a, o) {
            var s = u.bitArray,
                l = s.i;
            if ((a /= 8) % 2 || 4 > a || 16 < a) throw new u.exception.invalid('ccm: invalid tag length');
            if (4294967295 < i.length || 4294967295 < n.length) throw new u.exception.bug("ccm: can't deal with 4GiB or more data");
            for (r = u.mode.ccm.na(e, i, r, a, s.bitLength(n) / 8, o), i = 0; i < n.length; i += 4) r = e.encrypt(l(r, n.slice(i, i + 4).concat([0, 0, 0])));
            return s.clamp(r, 8 * a);
        },
        C: function (e, n, r, i, a, o) {
            var s,
                l = u.bitArray;
            s = l.i;
            var c = n.length,
                d = l.bitLength(n),
                f = c / 50,
                p = f;
            if (
                ((r = l
                    .concat([l.partial(8, o - 1)], r)
                    .concat([0, 0, 0])
                    .slice(0, 4)),
                (i = l.bitSlice(s(i, e.encrypt(r)), 0, a)),
                !c)
            )
                return {
                    tag: i,
                    data: []
                };
            for (s = 0; s < c; s += 4) s > f && (u.mode.ccm.fa(s / c), (f += p)), r[3]++, (a = e.encrypt(r)), (n[s] ^= a[0]), (n[s + 1] ^= a[1]), (n[s + 2] ^= a[2]), (n[s + 3] ^= a[3]);
            return {
                tag: i,
                data: l.clamp(n, d)
            };
        }
    }),
    (u.mode.ocb2 = {
        name: 'ocb2',
        encrypt: function (e, n, r, i, a, o) {
            if (128 !== u.bitArray.bitLength(r)) throw new u.exception.invalid('ocb iv must be 128 bits');
            var s,
                l = u.mode.ocb2.S,
                c = u.bitArray,
                d = c.i,
                f = [0, 0, 0, 0];
            r = l(e.encrypt(r));
            var p,
                h = [];
            for (s = 0, i = i || [], a = a || 64; s + 4 < n.length; s += 4) (f = d(f, (p = n.slice(s, s + 4)))), (h = h.concat(d(r, e.encrypt(d(r, p))))), (r = l(r));
            return (p = n.slice(s)), (n = c.bitLength(p)), (s = e.encrypt(d(r, [0, 0, 0, n]))), (p = c.clamp(d(p.concat([0, 0, 0]), s), n)), (f = d(f, d(p.concat([0, 0, 0]), s))), (f = e.encrypt(d(f, d(r, l(r))))), i.length && (f = d(f, o ? i : u.mode.ocb2.pmac(e, i))), h.concat(c.concat(p, c.clamp(f, a)));
        },
        decrypt: function (e, n, r, i, a, o) {
            if (128 !== u.bitArray.bitLength(r)) throw new u.exception.invalid('ocb iv must be 128 bits');
            a = a || 64;
            var s,
                l,
                c = u.mode.ocb2.S,
                d = u.bitArray,
                f = d.i,
                p = [0, 0, 0, 0],
                h = c(e.encrypt(r)),
                _ = u.bitArray.bitLength(n) - a,
                m = [];
            for (r = 0, i = i || []; r + 4 < _ / 32; r += 4) (s = f(h, e.decrypt(f(h, n.slice(r, r + 4))))), (p = f(p, s)), (m = m.concat(s)), (h = c(h));
            if (((l = _ - 32 * r), (s = e.encrypt(f(h, [0, 0, 0, l]))), (s = f(s, d.clamp(n.slice(r), l).concat([0, 0, 0]))), (p = f(p, s)), (p = e.encrypt(f(p, f(h, c(h))))), i.length && (p = f(p, o ? i : u.mode.ocb2.pmac(e, i))), !d.equal(d.clamp(p, a), d.bitSlice(n, _)))) throw new u.exception.corrupt("ocb: tag doesn't match");
            return m.concat(d.clamp(s, l));
        },
        pmac: function (e, n) {
            var r,
                i = u.mode.ocb2.S,
                a = u.bitArray,
                o = a.i,
                s = [0, 0, 0, 0],
                l = e.encrypt([0, 0, 0, 0]),
                l = o(l, i(i(l)));
            for (r = 0; r + 4 < n.length; r += 4) (l = i(l)), (s = o(s, e.encrypt(o(l, n.slice(r, r + 4)))));
            return (r = n.slice(r)), 128 > a.bitLength(r) && ((l = o(l, i(l))), (r = a.concat(r, [-2147483648, 0, 0, 0]))), (s = o(s, r)), e.encrypt(o(i(o(l, i(l))), s));
        },
        S: function (e) {
            return [(e[0] << 1) ^ (e[1] >>> 31), (e[1] << 1) ^ (e[2] >>> 31), (e[2] << 1) ^ (e[3] >>> 31), (e[3] << 1) ^ (135 * (e[0] >>> 31))];
        }
    }),
    (u.mode.gcm = {
        name: 'gcm',
        encrypt: function (e, n, r, i, a) {
            var o = n.slice(0);
            return (n = u.bitArray), (i = i || []), (e = u.mode.gcm.C(!0, e, o, i, r, a || 128)), n.concat(e.data, e.tag);
        },
        decrypt: function (e, n, r, i, a) {
            var o = n.slice(0),
                s = u.bitArray,
                l = s.bitLength(o);
            if (((i = i || []), (a = a || 128) <= l ? ((n = s.bitSlice(o, l - a)), (o = s.bitSlice(o, 0, l - a))) : ((n = o), (o = [])), (e = u.mode.gcm.C(!1, e, o, i, r, a)), !s.equal(e.tag, n))) throw new u.exception.corrupt("gcm: tag doesn't match");
            return e.data;
        },
        ka: function (e, n) {
            var r,
                i,
                a,
                o,
                s,
                l = u.bitArray.i;
            for (r = 0, a = [0, 0, 0, 0], o = n.slice(0); 128 > r; r++) {
                for ((i = 0 != (e[Math.floor(r / 32)] & (1 << (31 - (r % 32))))) && (a = l(a, o)), s = 0 != (1 & o[3]), i = 3; 0 < i; i--) o[i] = (o[i] >>> 1) | ((1 & o[i - 1]) << 31);
                (o[0] >>>= 1), s && (o[0] ^= -520093696);
            }
            return a;
        },
        j: function (e, n, r) {
            var i,
                a = r.length;
            for (i = 0, n = n.slice(0); i < a; i += 4) (n[0] ^= 4294967295 & r[i]), (n[1] ^= 4294967295 & r[i + 1]), (n[2] ^= 4294967295 & r[i + 2]), (n[3] ^= 4294967295 & r[i + 3]), (n = u.mode.gcm.ka(n, e));
            return n;
        },
        C: function (e, n, r, i, a, o) {
            var s,
                l,
                c,
                d,
                f,
                p,
                h,
                _,
                m = u.bitArray;
            for (p = r.length, h = m.bitLength(r), _ = m.bitLength(i), l = m.bitLength(a), s = n.encrypt([0, 0, 0, 0]), 96 === l ? ((a = a.slice(0)), (a = m.concat(a, [1]))) : ((a = u.mode.gcm.j(s, [0, 0, 0, 0], a)), (a = u.mode.gcm.j(s, a, [0, 0, Math.floor(l / 4294967296), 4294967295 & l]))), l = u.mode.gcm.j(s, [0, 0, 0, 0], i), f = a.slice(0), i = l.slice(0), e || (i = u.mode.gcm.j(s, l, r)), d = 0; d < p; d += 4) f[3]++, (c = n.encrypt(f)), (r[d] ^= c[0]), (r[d + 1] ^= c[1]), (r[d + 2] ^= c[2]), (r[d + 3] ^= c[3]);
            return (
                (r = m.clamp(r, h)),
                e && (i = u.mode.gcm.j(s, l, r)),
                (e = [Math.floor(_ / 4294967296), 4294967295 & _, Math.floor(h / 4294967296), 4294967295 & h]),
                (i = u.mode.gcm.j(s, i, e)),
                (c = n.encrypt(a)),
                (i[0] ^= c[0]),
                (i[1] ^= c[1]),
                (i[2] ^= c[2]),
                (i[3] ^= c[3]),
                {
                    tag: m.bitSlice(i, 0, o),
                    data: r
                }
            );
        }
    }),
    (u.misc.hmac = function (e, n) {
        this.W = n = n || u.hash.sha256;
        var r,
            i = [[], []],
            a = n.prototype.blockSize / 32;
        for (this.w = [new n(), new n()], e.length > a && (e = n.hash(e)), r = 0; r < a; r++) (i[0][r] = 909522486 ^ e[r]), (i[1][r] = 1549556828 ^ e[r]);
        this.w[0].update(i[0]), this.w[1].update(i[1]), (this.R = new n(this.w[0]));
    }),
    (u.misc.hmac.prototype.encrypt = u.misc.hmac.prototype.mac =
        function (e) {
            if (this.aa) throw new u.exception.invalid('encrypt on already updated hmac called!');
            return this.update(e), this.digest(e);
        }),
    (u.misc.hmac.prototype.reset = function () {
        (this.R = new this.W(this.w[0])), (this.aa = !1);
    }),
    (u.misc.hmac.prototype.update = function (e) {
        (this.aa = !0), this.R.update(e);
    }),
    (u.misc.hmac.prototype.digest = function () {
        var e = this.R.finalize(),
            e = new this.W(this.w[1]).update(e).finalize();
        return this.reset(), e;
    }),
    (u.misc.pbkdf2 = function (e, n, r, i, a) {
        if (((r = r || 10000), 0 > i || 0 > r)) throw new u.exception.invalid('invalid params to pbkdf2');
        'string' == typeof e && (e = u.codec.utf8String.toBits(e)), 'string' == typeof n && (n = u.codec.utf8String.toBits(n)), (e = new (a = a || u.misc.hmac)(e));
        var o,
            s,
            l,
            c,
            d = [],
            f = u.bitArray;
        for (c = 1; 32 * d.length < (i || 1); c++) {
            for (s = 1, a = o = e.encrypt(f.concat(n, [c])); s < r; s++) for (o = e.encrypt(o), l = 0; l < o.length; l++) a[l] ^= o[l];
            d = d.concat(a);
        }
        return i && (d = f.clamp(d, i)), d;
    }),
    (u.prng = function (e) {
        (this.c = [new u.hash.sha256()]),
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
    (u.prng.prototype = {
        randomWords: function (e, n) {
            var r,
                i = [];
            if ((r = this.isReady(n)) === this.u) throw new u.exception.notReady("generator isn't seeded");
            if (r & this.J) {
                (r = !(r & this.I)), (a = []);
                var a,
                    o,
                    s = 0;
                for (o = 0, this.Z = a[0] = new Date().valueOf() + this.da; 16 > o; o++) a.push((4294967296 * Math.random()) | 0);
                for (o = 0; o < this.c.length && ((a = a.concat(this.c[o].finalize())), (s += this.m[o]), (this.m[o] = 0), r || !(this.P & (1 << o))); o++);
                for (this.P >= 1 << this.c.length && (this.c.push(new u.hash.sha256()), this.m.push(0)), this.f -= s, s > this.o && (this.o = s), this.P++, this.b = u.hash.sha256.hash(this.b.concat(a)), this.L = new u.cipher.aes(this.b), r = 0; 4 > r && ((this.h[r] = (this.h[r] + 1) | 0), !this.h[r]); r++);
            }
            for (r = 0; r < e; r += 4) 0 == (r + 1) % this.ca && h(this), i.push((a = _(this))[0], a[1], a[2], a[3]);
            return h(this), i.slice(0, e);
        },
        setDefaultParanoia: function (e, n) {
            if (0 === e && 'Setting paranoia=0 will ruin your security; use it only for testing' !== n) throw new u.exception.invalid('Setting paranoia=0 will ruin your security; use it only for testing');
            this.M = e;
        },
        addEntropy: function (e, n, r) {
            r = r || 'user';
            var i,
                a,
                o = new Date().valueOf(),
                s = this.H[r],
                l = this.isReady(),
                c = 0;
            switch ((void 0 === (i = this.U[r]) && (i = this.U[r] = this.ha++), void 0 === s && (s = this.H[r] = 0), (this.H[r] = (this.H[r] + 1) % this.c.length), typeof e)) {
                case 'number':
                    void 0 === n && (n = 1), this.c[s].update([i, this.N++, 1, n, o, 1, 0 | e]);
                    break;
                case 'object':
                    if ('[object Uint32Array]' === (r = Object.prototype.toString.call(e))) {
                        for (r = 0, a = []; r < e.length; r++) a.push(e[r]);
                        e = a;
                    } else for ('[object Array]' !== r && (c = 1), r = 0; r < e.length && !c; r++) 'number' != typeof e[r] && (c = 1);
                    if (!c) {
                        if (void 0 === n) for (r = n = 0; r < e.length; r++) for (a = e[r]; 0 < a; ) n++, (a >>>= 1);
                        this.c[s].update([i, this.N++, 2, n, o, e.length].concat(e));
                    }
                    break;
                case 'string':
                    void 0 === n && (n = e.length), this.c[s].update([i, this.N++, 3, n, o, e.length]), this.c[s].update(e);
                    break;
                default:
                    c = 1;
            }
            if (c) throw new u.exception.bug('random: addEntropy only supports number, array of numbers or string');
            (this.m[s] += n), (this.f += n), l === this.u && (this.isReady() !== this.u && f('seeded', Math.max(this.o, this.f)), f('progress', this.getProgress()));
        },
        isReady: function (e) {
            return (e = this.T[void 0 !== e ? e : this.M]), this.o && this.o >= e ? (this.m[0] > this.ba && new Date().valueOf() > this.Z ? this.J | this.I : this.I) : this.f >= e ? this.J | this.u : this.u;
        },
        getProgress: function (e) {
            return (e = this.T[e || this.M]), this.o >= e ? 1 : this.f > e ? 1 : this.f / e;
        },
        startCollectors: function () {
            if (!this.D) {
                if (
                    ((this.a = {
                        loadTimeCollector: m(this, this.ma),
                        mouseCollector: m(this, this.oa),
                        keyboardCollector: m(this, this.la),
                        accelerometerCollector: m(this, this.ea),
                        touchCollector: m(this, this.qa)
                    }),
                    window.addEventListener)
                )
                    window.addEventListener('load', this.a.loadTimeCollector, !1), window.addEventListener('mousemove', this.a.mouseCollector, !1), window.addEventListener('keypress', this.a.keyboardCollector, !1), window.addEventListener('devicemotion', this.a.accelerometerCollector, !1), window.addEventListener('touchmove', this.a.touchCollector, !1);
                else if (document.attachEvent) document.attachEvent('onload', this.a.loadTimeCollector), document.attachEvent('onmousemove', this.a.mouseCollector), document.attachEvent('keypress', this.a.keyboardCollector);
                else throw new u.exception.bug("can't attach event");
                this.D = !0;
            }
        },
        stopCollectors: function () {
            this.D && (window.removeEventListener ? (window.removeEventListener('load', this.a.loadTimeCollector, !1), window.removeEventListener('mousemove', this.a.mouseCollector, !1), window.removeEventListener('keypress', this.a.keyboardCollector, !1), window.removeEventListener('devicemotion', this.a.accelerometerCollector, !1), window.removeEventListener('touchmove', this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent('onload', this.a.loadTimeCollector), document.detachEvent('onmousemove', this.a.mouseCollector), document.detachEvent('keypress', this.a.keyboardCollector)), (this.D = !1));
        },
        addEventListener: function (e, n) {
            this.K[e][this.ga++] = n;
        },
        removeEventListener: function (e, n) {
            var r,
                i,
                a = this.K[e],
                o = [];
            for (i in a) a.hasOwnProperty(i) && a[i] === n && o.push(i);
            for (r = 0; r < o.length; r++) (i = o[r]), delete a[i];
        },
        la: function () {
            p(this, 1);
        },
        oa: function (e) {
            var n, r;
            try {
                (n = e.x || e.clientX || e.offsetX || 0), (r = e.y || e.clientY || e.offsetY || 0);
            } catch (e) {
                r = n = 0;
            }
            0 != n && 0 != r && this.addEntropy([n, r], 2, 'mouse'), p(this, 0);
        },
        qa: function (e) {
            (e = e.touches[0] || e.changedTouches[0]), this.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, 'touch'), p(this, 0);
        },
        ma: function () {
            p(this, 2);
        },
        ea: function (e) {
            if (((e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z), window.orientation)) {
                var n = window.orientation;
                'number' == typeof n && this.addEntropy(n, 1, 'accelerometer');
            }
            e && this.addEntropy(e, 2, 'accelerometer'), p(this, 0);
        }
    }),
    (u.random = new u.prng(6));
a: try {
    if ((s = e.exports)) {
        try {
            l = r(444982);
        } catch (e) {
            l = null;
        }
        s = a = l;
    }
    if (s && a.randomBytes) (i = a.randomBytes(128)), (i = new Uint32Array(new Uint8Array(i).buffer)), u.random.addEntropy(i, 1024, "crypto['randomBytes']");
    else if ('undefined' != typeof window && 'undefined' != typeof Uint32Array) {
        if (((o = new Uint32Array(32)), window.crypto && window.crypto.getRandomValues)) window.crypto.getRandomValues(o);
        else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(o);
        else break a;
        u.random.addEntropy(o, 1024, "crypto['getRandomValues']");
    }
} catch (e) {
    'undefined' != typeof window && window.console && (console.log('There was an error collecting entropy from the browser:'), console.log(e));
}
(u.json = {
    defaults: {
        v: 1,
        iter: 10000,
        ks: 128,
        ts: 64,
        mode: 'ccm',
        adata: '',
        cipher: 'aes'
    },
    ja: function (e, n, r, i) {
        (r = r || {}), (i = i || {});
        var a,
            o = u.json,
            s = o.g({ iv: u.random.randomWords(4, 0) }, o.defaults);
        if ((o.g(s, r), (r = s.adata), 'string' == typeof s.salt && (s.salt = u.codec.base64.toBits(s.salt)), 'string' == typeof s.iv && (s.iv = u.codec.base64.toBits(s.iv)), !u.mode[s.mode] || !u.cipher[s.cipher] || ('string' == typeof e && 100 >= s.iter) || (64 !== s.ts && 96 !== s.ts && 128 !== s.ts) || (128 !== s.ks && 192 !== s.ks && 256 !== s.ks) || 2 > s.iv.length || 4 < s.iv.length)) throw new u.exception.invalid('json encrypt: invalid parameters');
        return 'string' == typeof e ? ((e = (a = u.misc.cachedPbkdf2(e, s)).key.slice(0, s.ks / 32)), (s.salt = a.salt)) : u.ecc && e instanceof u.ecc.elGamal.publicKey && ((a = e.kem()), (s.kemtag = a.tag), (e = a.key.slice(0, s.ks / 32))), 'string' == typeof n && (n = u.codec.utf8String.toBits(n)), 'string' == typeof r && (s.adata = r = u.codec.utf8String.toBits(r)), (a = new u.cipher[s.cipher](e)), o.g(i, s), (i.key = e), (s.ct = 'ccm' === s.mode && u.arrayBuffer && u.arrayBuffer.ccm && n instanceof ArrayBuffer ? u.arrayBuffer.ccm.encrypt(a, n, s.iv, r, s.ts) : u.mode[s.mode].encrypt(a, n, s.iv, r, s.ts)), s;
    },
    encrypt: function (e, n, r, i) {
        var a = u.json,
            o = a.ja.apply(a, arguments);
        return a.encode(o);
    },
    ia: function (e, n, r, i) {
        (r = r || {}), (i = i || {});
        var a,
            o,
            s = u.json;
        if (((a = (n = s.g(s.g(s.g({}, s.defaults), n), r, !0)).adata), 'string' == typeof n.salt && (n.salt = u.codec.base64.toBits(n.salt)), 'string' == typeof n.iv && (n.iv = u.codec.base64.toBits(n.iv)), !u.mode[n.mode] || !u.cipher[n.cipher] || ('string' == typeof e && 100 >= n.iter) || (64 !== n.ts && 96 !== n.ts && 128 !== n.ts) || (128 !== n.ks && 192 !== n.ks && 256 !== n.ks) || !n.iv || 2 > n.iv.length || 4 < n.iv.length)) throw new u.exception.invalid('json decrypt: invalid parameters');
        return 'string' == typeof e ? ((e = (o = u.misc.cachedPbkdf2(e, n)).key.slice(0, n.ks / 32)), (n.salt = o.salt)) : u.ecc && e instanceof u.ecc.elGamal.secretKey && (e = e.unkem(u.codec.base64.toBits(n.kemtag)).slice(0, n.ks / 32)), 'string' == typeof a && (a = u.codec.utf8String.toBits(a)), (o = new u.cipher[n.cipher](e)), (a = 'ccm' === n.mode && u.arrayBuffer && u.arrayBuffer.ccm && n.ct instanceof ArrayBuffer ? u.arrayBuffer.ccm.decrypt(o, n.ct, n.iv, n.tag, a, n.ts) : u.mode[n.mode].decrypt(o, n.ct, n.iv, a, n.ts)), s.g(i, n), (i.key = e), 1 === r.raw ? a : u.codec.utf8String.fromBits(a);
    },
    decrypt: function (e, n, r, i) {
        var a = u.json;
        return a.ia(e, a.decode(n), r, i);
    },
    encode: function (e) {
        var n,
            r = '{',
            i = '';
        for (n in e)
            if (e.hasOwnProperty(n)) {
                if (!n.match(/^[a-z0-9]+$/i)) throw new u.exception.invalid('json encode: invalid property name');
                switch (((r += i + '"' + n + '":'), (i = ','), typeof e[n])) {
                    case 'number':
                    case 'boolean':
                        r += e[n];
                        break;
                    case 'string':
                        r += '"' + escape(e[n]) + '"';
                        break;
                    case 'object':
                        r += '"' + u.codec.base64.fromBits(e[n], 0) + '"';
                        break;
                    default:
                        throw new u.exception.bug('json encode: unsupported type');
                }
            }
        return r + '}';
    },
    decode: function (e) {
        if (!(e = e.replace(/\s/g, '')).match(/^\{.*\}$/)) throw new u.exception.invalid("json decode: this isn't json!");
        e = e.replace(/^\{|\}$/g, '').split(/,/);
        var n,
            r,
            i = {};
        for (n = 0; n < e.length; n++) {
            if (!(r = e[n].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new u.exception.invalid("json decode: this isn't json!");
            null != r[3] ? (i[r[2]] = parseInt(r[3], 10)) : null != r[4] ? (i[r[2]] = r[2].match(/^(ct|adata|salt|iv)$/) ? u.codec.base64.toBits(r[4]) : unescape(r[4])) : null != r[5] && (i[r[2]] = 'true' === r[5]);
        }
        return i;
    },
    g: function (e, n, r) {
        if ((void 0 === e && (e = {}), void 0 === n)) return e;
        for (var i in n)
            if (n.hasOwnProperty(i)) {
                if (r && void 0 !== e[i] && e[i] !== n[i]) throw new u.exception.invalid('required parameter overridden');
                e[i] = n[i];
            }
        return e;
    },
    sa: function (e, n) {
        var r,
            i = {};
        for (r in e) e.hasOwnProperty(r) && e[r] !== n[r] && (i[r] = e[r]);
        return i;
    },
    ra: function (e, n) {
        var r,
            i = {};
        for (r = 0; r < n.length; r++) void 0 !== e[n[r]] && (i[n[r]] = e[n[r]]);
        return i;
    }
}),
    (u.encrypt = u.json.encrypt),
    (u.decrypt = u.json.decrypt),
    (u.misc.pa = {}),
    (u.misc.cachedPbkdf2 = function (e, n) {
        var r,
            i = u.misc.pa;
        return (
            (r = (n = n || {}).iter || 1000),
            (r = (i = i[e] = i[e] || {})[r] = i[r] || { firstSalt: n.salt && n.salt.length ? n.salt.slice(0) : u.random.randomWords(2, 0) }),
            (i = void 0 === n.salt ? r.firstSalt : n.salt),
            (r[i] = r[i] || u.misc.pbkdf2(e, i, n.iter)),
            {
                key: r[i].slice(0),
                salt: i.slice(0)
            }
        );
    }),
    e.exports && (e.exports = u),
    'function' == typeof define &&
        define([], function () {
            return u;
        });
