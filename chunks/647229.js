var i,
    r,
    a,
    s,
    o,
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
function u(e, t, n) {
    if (4 !== t.length) throw new l.exception.invalid('invalid aes block size');
    var i = e.b[n],
        r = t[0] ^ i[0],
        a = t[n ? 3 : 1] ^ i[1],
        s = t[2] ^ i[2];
    t = t[n ? 1 : 3] ^ i[3];
    var o,
        u,
        c,
        d,
        f = i.length / 4 - 2,
        _ = 4,
        p = [0, 0, 0, 0];
    e = (o = e.s[n])[0];
    var h = o[1],
        m = o[2],
        g = o[3],
        E = o[4];
    for (d = 0; d < f; d++) (o = e[r >>> 24] ^ h[(a >> 16) & 255] ^ m[(s >> 8) & 255] ^ g[255 & t] ^ i[_]), (u = e[a >>> 24] ^ h[(s >> 16) & 255] ^ m[(t >> 8) & 255] ^ g[255 & r] ^ i[_ + 1]), (c = e[s >>> 24] ^ h[(t >> 16) & 255] ^ m[(r >> 8) & 255] ^ g[255 & a] ^ i[_ + 2]), (t = e[t >>> 24] ^ h[(r >> 16) & 255] ^ m[(a >> 8) & 255] ^ g[255 & s] ^ i[_ + 3]), (_ += 4), (r = o), (a = u), (s = c);
    for (d = 0; 4 > d; d++) (p[n ? 3 & -d : d] = (E[r >>> 24] << 24) ^ (E[(a >> 16) & 255] << 16) ^ (E[(s >> 8) & 255] << 8) ^ E[255 & t] ^ i[_++]), (o = r), (r = a), (a = s), (s = t), (t = o);
    return p;
}
function c(e, t) {
    var n,
        i,
        r,
        a = e.F,
        s = e.b,
        o = a[0],
        l = a[1],
        u = a[2],
        c = a[3],
        d = a[4],
        f = a[5],
        _ = a[6],
        p = a[7];
    for (n = 0; 64 > n; n++) 16 > n ? (i = t[n]) : ((i = t[(n + 1) & 15]), (r = t[(n + 14) & 15]), (i = t[15 & n] = (((i >>> 7) ^ (i >>> 18) ^ (i >>> 3) ^ (i << 25) ^ (i << 14)) + ((r >>> 17) ^ (r >>> 19) ^ (r >>> 10) ^ (r << 15) ^ (r << 13)) + t[15 & n] + t[(n + 9) & 15]) | 0)), (i = i + p + ((d >>> 6) ^ (d >>> 11) ^ (d >>> 25) ^ (d << 26) ^ (d << 21) ^ (d << 7)) + (_ ^ (d & (f ^ _))) + s[n]), (p = _), (_ = f), (f = d), (d = (c + i) | 0), (c = u), (u = l), (o = (i + (((l = o) & u) ^ (c & (l ^ u))) + ((l >>> 2) ^ (l >>> 13) ^ (l >>> 22) ^ (l << 30) ^ (l << 19) ^ (l << 10))) | 0);
    (a[0] = (a[0] + o) | 0), (a[1] = (a[1] + l) | 0), (a[2] = (a[2] + u) | 0), (a[3] = (a[3] + c) | 0), (a[4] = (a[4] + d) | 0), (a[5] = (a[5] + f) | 0), (a[6] = (a[6] + _) | 0), (a[7] = (a[7] + p) | 0);
}
function d(e, t) {
    var n,
        i = l.random.K[e],
        r = [];
    for (n in i) i.hasOwnProperty(n) && r.push(i[n]);
    for (n = 0; n < r.length; n++) r[n](t);
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
        i,
        r,
        a = this.s[0][4],
        s = this.s[1];
    t = e.length;
    var o = 1;
    if (4 !== t && 6 !== t && 8 !== t) throw new l.exception.invalid('invalid aes key size');
    for (this.b = [(i = e.slice(0)), (r = [])], e = t; e < 4 * t + 28; e++) (n = i[e - 1]), (0 == e % t || (8 === t && 4 == e % t)) && ((n = (a[n >>> 24] << 24) ^ (a[(n >> 16) & 255] << 16) ^ (a[(n >> 8) & 255] << 8) ^ a[255 & n]), 0 == e % t && ((n = (n << 8) ^ (n >>> 24) ^ (o << 24)), (o = (o << 1) ^ (283 * (o >> 7))))), (i[e] = i[e - t] ^ n);
    for (t = 0; e; t++, e--) (n = i[3 & t ? e : e - 4]), (r[t] = 4 >= e || 4 > t ? n : s[0][a[n >>> 24]] ^ s[1][a[(n >> 16) & 255]] ^ s[2][a[(n >> 8) & 255]] ^ s[3][a[255 & n]]);
}),
    (l.cipher.aes.prototype = {
        encrypt: function (e) {
            return u(this, e, 0);
        },
        decrypt: function (e) {
            return u(this, e, 1);
        },
        s: [
            [[], [], [], [], []],
            [[], [], [], [], []]
        ],
        O: function () {
            var e,
                t,
                n,
                i,
                r,
                a,
                s,
                o = this.s[0],
                l = this.s[1],
                u = o[4],
                c = l[4],
                d = [],
                f = [];
            for (e = 0; 256 > e; e++) f[(d[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
            for (t = n = 0; !u[t]; t ^= i || 1, n = f[n] || 1) for (a = ((a = n ^ (n << 1) ^ (n << 2) ^ (n << 3) ^ (n << 4)) >> 8) ^ (255 & a) ^ 99, u[t] = a, c[a] = t, s = (16843009 * (r = d[(e = d[(i = d[t])])])) ^ (65537 * e) ^ (257 * i) ^ (16843008 * t), r = (257 * d[a]) ^ (16843008 * a), e = 0; 4 > e; e++) (o[e][t] = r = (r << 24) ^ (r >>> 8)), (l[e][a] = s = (s << 24) ^ (s >>> 8));
            for (e = 0; 5 > e; e++) (o[e] = o[e].slice(0)), (l[e] = l[e].slice(0));
        }
    }),
    (l.bitArray = {
        bitSlice: function (e, t, n) {
            return (e = l.bitArray.$(e.slice(t / 32), 32 - (31 & t)).slice(1)), void 0 === n ? e : l.bitArray.clamp(e, n - t);
        },
        extract: function (e, t, n) {
            var i = Math.floor((-t - n) & 31);
            return (((t + n - 1) ^ t) & -32 ? (e[(t / 32) | 0] << (32 - i)) ^ (e[(t / 32 + 1) | 0] >>> i) : e[(t / 32) | 0] >>> i) & ((1 << n) - 1);
        },
        concat: function (e, t) {
            if (0 === e.length || 0 === t.length) return e.concat(t);
            var n = e[e.length - 1],
                i = l.bitArray.getPartial(n);
            return 32 === i ? e.concat(t) : l.bitArray.$(t, i, 0 | n, e.slice(0, e.length - 1));
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
                i = 0;
            for (n = 0; n < e.length; n++) i |= e[n] ^ t[n];
            return 0 === i;
        },
        $: function (e, t, n, i) {
            var r;
            for (r = 0, void 0 === i && (i = []); 32 <= t; t -= 32) i.push(n), (n = 0);
            if (0 === t) return i.concat(e);
            for (r = 0; r < e.length; r++) i.push(n | (e[r] >>> t)), (n = e[r] << (32 - t));
            return (r = e.length ? e[e.length - 1] : 0), (e = l.bitArray.getPartial(r)), i.push(l.bitArray.partial((t + e) & 31, 32 < t + e ? n : i.pop(), 1)), i;
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
                i = '',
                r = l.bitArray.bitLength(e);
            for (t = 0; t < r / 8; t++) 0 == (3 & t) && (n = e[t / 4]), (i += String.fromCharCode(((n >>> 8) >>> 8) >>> 8)), (n <<= 8);
            return decodeURIComponent(escape(i));
        },
        toBits: function (e) {
            e = unescape(encodeURIComponent(e));
            var t,
                n = [],
                i = 0;
            for (t = 0; t < e.length; t++) (i = (i << 8) | e.charCodeAt(t)), 3 == (3 & t) && (n.push(i), (i = 0));
            return 3 & t && n.push(l.bitArray.partial(8 * (3 & t), i)), n;
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
                i = [];
            for (n = (e = e.replace(/\s|0x/g, '')).length, e += '00000000', t = 0; t < e.length; t += 8) i.push(0 ^ parseInt(e.substr(t, 8), 16));
            return l.bitArray.clamp(i, 4 * n);
        }
    }),
    (l.codec.base32 = {
        B: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
        X: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
        BITS: 32,
        BASE: 5,
        REMAINING: 27,
        fromBits: function (e, t, n) {
            var i = l.codec.base32.BASE,
                r = l.codec.base32.REMAINING,
                a = '',
                s = 0,
                o = l.codec.base32.B,
                u = 0,
                c = l.bitArray.bitLength(e);
            for (n && (o = l.codec.base32.X), n = 0; a.length * i < c; ) (a += o.charAt((u ^ (e[n] >>> s)) >>> r)), s < i ? ((u = e[n] << (i - s)), (s += r), n++) : ((u <<= i), (s -= i));
            for (; 7 & a.length && !t; ) a += '=';
            return a;
        },
        toBits: function (e, t) {
            e = e.replace(/\s|=/g, '').toUpperCase();
            var n,
                i,
                r = l.codec.base32.BITS,
                a = l.codec.base32.BASE,
                s = l.codec.base32.REMAINING,
                o = [],
                u = 0,
                c = l.codec.base32.B,
                d = 0,
                f = 'base32';
            for (t && ((c = l.codec.base32.X), (f = 'base32hex')), n = 0; n < e.length; n++) {
                if (0 > (i = c.indexOf(e.charAt(n)))) {
                    if (!t)
                        try {
                            return l.codec.base32hex.toBits(e);
                        } catch (e) {}
                    throw new l.exception.invalid("this isn't " + f + '!');
                }
                u > s ? ((u -= s), o.push(d ^ (i >>> u)), (d = i << (r - u))) : ((u += a), (d ^= i << (r - u)));
            }
            return 56 & u && o.push(l.bitArray.partial(56 & u, d, 1)), o;
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
            var i = '',
                r = 0,
                a = l.codec.base64.B,
                s = 0,
                o = l.bitArray.bitLength(e);
            for (n && (a = a.substr(0, 62) + '-_'), n = 0; 6 * i.length < o; ) (i += a.charAt((s ^ (e[n] >>> r)) >>> 26)), 6 > r ? ((s = e[n] << (6 - r)), (r += 26), n++) : ((s <<= 6), (r -= 6));
            for (; 3 & i.length && !t; ) i += '=';
            return i;
        },
        toBits: function (e, t) {
            e = e.replace(/\s|=/g, '');
            var n,
                i,
                r = [],
                a = 0,
                s = l.codec.base64.B,
                o = 0;
            for (t && (s = s.substr(0, 62) + '-_'), n = 0; n < e.length; n++) {
                if (0 > (i = s.indexOf(e.charAt(n)))) throw new l.exception.invalid("this isn't base64!");
                26 < a ? ((a -= 26), r.push(o ^ (i >>> a)), (o = i << (32 - a))) : ((a += 6), (o ^= i << (32 - a)));
            }
            return 56 & a && r.push(l.bitArray.partial(56 & a, o, 1)), r;
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
                var i = new Uint32Array(n),
                    r = 0;
                for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512) c(this, i.subarray(16 * r, 16 * (r + 1))), (r += 1);
                n.splice(0, 16 * r);
            } else for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512) c(this, n.splice(0, 16));
            return this;
        },
        finalize: function () {
            var e,
                t = this.A,
                n = this.F,
                t = l.bitArray.concat(t, [l.bitArray.partial(1, 1)]);
            for (e = t.length + 2; 15 & e; e++) t.push(0);
            for (t.push(Math.floor(this.l / 4294967296)), t.push(0 | this.l); t.length; ) c(this, t.splice(0, 16));
            return this.reset(), n;
        },
        Y: [],
        b: [],
        O: function () {
            function e(e) {
                return (4294967296 * (e - Math.floor(e))) | 0;
            }
            for (var t, n, i = 0, r = 2; 64 > i; r++) {
                for (t = 2, n = !0; t * t <= r; t++)
                    if (0 == r % t) {
                        n = !1;
                        break;
                    }
                n && (8 > i && (this.Y[i] = e(Math.pow(r, 0.5))), (this.b[i] = e(Math.pow(r, 1 / 3))), i++);
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
        encrypt: function (e, t, n, i, r) {
            var a,
                s = t.slice(0),
                o = l.bitArray,
                u = o.bitLength(n) / 8,
                c = o.bitLength(s) / 8;
            if (((r = r || 64), (i = i || []), 7 > u)) throw new l.exception.invalid('ccm: iv must be at least 7 bytes');
            for (a = 2; 4 > a && c >>> (8 * a); a++);
            return a < 15 - u && (a = 15 - u), (n = o.clamp(n, 8 * (15 - a))), (t = l.mode.ccm.V(e, t, n, i, r, a)), (s = l.mode.ccm.C(e, s, n, t, r, a)), o.concat(s.data, s.tag);
        },
        decrypt: function (e, t, n, i, r) {
            (r = r || 64), (i = i || []);
            var a = l.bitArray,
                s = a.bitLength(n) / 8,
                o = a.bitLength(t),
                u = a.clamp(t, o - r),
                c = a.bitSlice(t, o - r),
                o = (o - r) / 8;
            if (7 > s) throw new l.exception.invalid('ccm: iv must be at least 7 bytes');
            for (t = 2; 4 > t && o >>> (8 * t); t++);
            if ((t < 15 - s && (t = 15 - s), (n = a.clamp(n, 8 * (15 - t))), (u = l.mode.ccm.C(e, u, n, c, r, t)), (e = l.mode.ccm.V(e, u.data, n, i, r, t)), !a.equal(u.tag, e))) throw new l.exception.corrupt("ccm: tag doesn't match");
            return u.data;
        },
        na: function (e, t, n, i, r, a) {
            var s = [],
                o = l.bitArray,
                u = o.i;
            if (((i = [o.partial(8, (t.length ? 64 : 0) | ((i - 2) << 2) | (a - 1))]), (i = o.concat(i, n)), (i[3] |= r), (i = e.encrypt(i)), t.length)) for (65279 >= (n = o.bitLength(t) / 8) ? (s = [o.partial(16, n)]) : 4294967295 >= n && (s = o.concat([o.partial(16, 65534)], [n])), s = o.concat(s, t), t = 0; t < s.length; t += 4) i = e.encrypt(u(i, s.slice(t, t + 4).concat([0, 0, 0])));
            return i;
        },
        V: function (e, t, n, i, r, a) {
            var s = l.bitArray,
                o = s.i;
            if ((r /= 8) % 2 || 4 > r || 16 < r) throw new l.exception.invalid('ccm: invalid tag length');
            if (4294967295 < i.length || 4294967295 < t.length) throw new l.exception.bug("ccm: can't deal with 4GiB or more data");
            for (n = l.mode.ccm.na(e, i, n, r, s.bitLength(t) / 8, a), i = 0; i < t.length; i += 4) n = e.encrypt(o(n, t.slice(i, i + 4).concat([0, 0, 0])));
            return s.clamp(n, 8 * r);
        },
        C: function (e, t, n, i, r, a) {
            var s,
                o = l.bitArray;
            s = o.i;
            var u = t.length,
                c = o.bitLength(t),
                d = u / 50,
                f = d;
            if (
                ((n = o
                    .concat([o.partial(8, a - 1)], n)
                    .concat([0, 0, 0])
                    .slice(0, 4)),
                (i = o.bitSlice(s(i, e.encrypt(n)), 0, r)),
                !u)
            )
                return {
                    tag: i,
                    data: []
                };
            for (s = 0; s < u; s += 4) s > d && (l.mode.ccm.fa(s / u), (d += f)), n[3]++, (r = e.encrypt(n)), (t[s] ^= r[0]), (t[s + 1] ^= r[1]), (t[s + 2] ^= r[2]), (t[s + 3] ^= r[3]);
            return {
                tag: i,
                data: o.clamp(t, c)
            };
        }
    }),
    (l.mode.ocb2 = {
        name: 'ocb2',
        encrypt: function (e, t, n, i, r, a) {
            if (128 !== l.bitArray.bitLength(n)) throw new l.exception.invalid('ocb iv must be 128 bits');
            var s,
                o = l.mode.ocb2.S,
                u = l.bitArray,
                c = u.i,
                d = [0, 0, 0, 0];
            n = o(e.encrypt(n));
            var f,
                _ = [];
            for (s = 0, i = i || [], r = r || 64; s + 4 < t.length; s += 4) (d = c(d, (f = t.slice(s, s + 4)))), (_ = _.concat(c(n, e.encrypt(c(n, f))))), (n = o(n));
            return (f = t.slice(s)), (t = u.bitLength(f)), (s = e.encrypt(c(n, [0, 0, 0, t]))), (f = u.clamp(c(f.concat([0, 0, 0]), s), t)), (d = c(d, c(f.concat([0, 0, 0]), s))), (d = e.encrypt(c(d, c(n, o(n))))), i.length && (d = c(d, a ? i : l.mode.ocb2.pmac(e, i))), _.concat(u.concat(f, u.clamp(d, r)));
        },
        decrypt: function (e, t, n, i, r, a) {
            if (128 !== l.bitArray.bitLength(n)) throw new l.exception.invalid('ocb iv must be 128 bits');
            r = r || 64;
            var s,
                o,
                u = l.mode.ocb2.S,
                c = l.bitArray,
                d = c.i,
                f = [0, 0, 0, 0],
                _ = u(e.encrypt(n)),
                p = l.bitArray.bitLength(t) - r,
                h = [];
            for (n = 0, i = i || []; n + 4 < p / 32; n += 4) (s = d(_, e.decrypt(d(_, t.slice(n, n + 4))))), (f = d(f, s)), (h = h.concat(s)), (_ = u(_));
            if (((o = p - 32 * n), (s = e.encrypt(d(_, [0, 0, 0, o]))), (s = d(s, c.clamp(t.slice(n), o).concat([0, 0, 0]))), (f = d(f, s)), (f = e.encrypt(d(f, d(_, u(_))))), i.length && (f = d(f, a ? i : l.mode.ocb2.pmac(e, i))), !c.equal(c.clamp(f, r), c.bitSlice(t, p)))) throw new l.exception.corrupt("ocb: tag doesn't match");
            return h.concat(c.clamp(s, o));
        },
        pmac: function (e, t) {
            var n,
                i = l.mode.ocb2.S,
                r = l.bitArray,
                a = r.i,
                s = [0, 0, 0, 0],
                o = e.encrypt([0, 0, 0, 0]),
                o = a(o, i(i(o)));
            for (n = 0; n + 4 < t.length; n += 4) (o = i(o)), (s = a(s, e.encrypt(a(o, t.slice(n, n + 4)))));
            return (n = t.slice(n)), 128 > r.bitLength(n) && ((o = a(o, i(o))), (n = r.concat(n, [-2147483648, 0, 0, 0]))), (s = a(s, n)), e.encrypt(a(i(a(o, i(o))), s));
        },
        S: function (e) {
            return [(e[0] << 1) ^ (e[1] >>> 31), (e[1] << 1) ^ (e[2] >>> 31), (e[2] << 1) ^ (e[3] >>> 31), (e[3] << 1) ^ (135 * (e[0] >>> 31))];
        }
    }),
    (l.mode.gcm = {
        name: 'gcm',
        encrypt: function (e, t, n, i, r) {
            var a = t.slice(0);
            return (t = l.bitArray), (i = i || []), (e = l.mode.gcm.C(!0, e, a, i, n, r || 128)), t.concat(e.data, e.tag);
        },
        decrypt: function (e, t, n, i, r) {
            var a = t.slice(0),
                s = l.bitArray,
                o = s.bitLength(a);
            if (((i = i || []), (r = r || 128) <= o ? ((t = s.bitSlice(a, o - r)), (a = s.bitSlice(a, 0, o - r))) : ((t = a), (a = [])), (e = l.mode.gcm.C(!1, e, a, i, n, r)), !s.equal(e.tag, t))) throw new l.exception.corrupt("gcm: tag doesn't match");
            return e.data;
        },
        ka: function (e, t) {
            var n,
                i,
                r,
                a,
                s,
                o = l.bitArray.i;
            for (n = 0, r = [0, 0, 0, 0], a = t.slice(0); 128 > n; n++) {
                for ((i = 0 != (e[Math.floor(n / 32)] & (1 << (31 - (n % 32))))) && (r = o(r, a)), s = 0 != (1 & a[3]), i = 3; 0 < i; i--) a[i] = (a[i] >>> 1) | ((1 & a[i - 1]) << 31);
                (a[0] >>>= 1), s && (a[0] ^= -520093696);
            }
            return r;
        },
        j: function (e, t, n) {
            var i,
                r = n.length;
            for (i = 0, t = t.slice(0); i < r; i += 4) (t[0] ^= 4294967295 & n[i]), (t[1] ^= 4294967295 & n[i + 1]), (t[2] ^= 4294967295 & n[i + 2]), (t[3] ^= 4294967295 & n[i + 3]), (t = l.mode.gcm.ka(t, e));
            return t;
        },
        C: function (e, t, n, i, r, a) {
            var s,
                o,
                u,
                c,
                d,
                f,
                _,
                p,
                h = l.bitArray;
            for (f = n.length, _ = h.bitLength(n), p = h.bitLength(i), o = h.bitLength(r), s = t.encrypt([0, 0, 0, 0]), 96 === o ? ((r = r.slice(0)), (r = h.concat(r, [1]))) : ((r = l.mode.gcm.j(s, [0, 0, 0, 0], r)), (r = l.mode.gcm.j(s, r, [0, 0, Math.floor(o / 4294967296), 4294967295 & o]))), o = l.mode.gcm.j(s, [0, 0, 0, 0], i), d = r.slice(0), i = o.slice(0), e || (i = l.mode.gcm.j(s, o, n)), c = 0; c < f; c += 4) d[3]++, (u = t.encrypt(d)), (n[c] ^= u[0]), (n[c + 1] ^= u[1]), (n[c + 2] ^= u[2]), (n[c + 3] ^= u[3]);
            return (
                (n = h.clamp(n, _)),
                e && (i = l.mode.gcm.j(s, o, n)),
                (e = [Math.floor(p / 4294967296), 4294967295 & p, Math.floor(_ / 4294967296), 4294967295 & _]),
                (i = l.mode.gcm.j(s, i, e)),
                (u = t.encrypt(r)),
                (i[0] ^= u[0]),
                (i[1] ^= u[1]),
                (i[2] ^= u[2]),
                (i[3] ^= u[3]),
                {
                    tag: h.bitSlice(i, 0, a),
                    data: n
                }
            );
        }
    }),
    (l.misc.hmac = function (e, t) {
        this.W = t = t || l.hash.sha256;
        var n,
            i = [[], []],
            r = t.prototype.blockSize / 32;
        for (this.w = [new t(), new t()], e.length > r && (e = t.hash(e)), n = 0; n < r; n++) (i[0][n] = 909522486 ^ e[n]), (i[1][n] = 1549556828 ^ e[n]);
        this.w[0].update(i[0]), this.w[1].update(i[1]), (this.R = new t(this.w[0]));
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
    (l.misc.pbkdf2 = function (e, t, n, i, r) {
        if (((n = n || 10000), 0 > i || 0 > n)) throw new l.exception.invalid('invalid params to pbkdf2');
        'string' == typeof e && (e = l.codec.utf8String.toBits(e)), 'string' == typeof t && (t = l.codec.utf8String.toBits(t)), (e = new (r = r || l.misc.hmac)(e));
        var a,
            s,
            o,
            u,
            c = [],
            d = l.bitArray;
        for (u = 1; 32 * c.length < (i || 1); u++) {
            for (s = 1, r = a = e.encrypt(d.concat(t, [u])); s < n; s++) for (a = e.encrypt(a), o = 0; o < a.length; o++) r[o] ^= a[o];
            c = c.concat(r);
        }
        return i && (c = d.clamp(c, i)), c;
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
                i = [];
            if ((n = this.isReady(t)) === this.u) throw new l.exception.notReady("generator isn't seeded");
            if (n & this.J) {
                (n = !(n & this.I)), (r = []);
                var r,
                    a,
                    s = 0;
                for (a = 0, this.Z = r[0] = new Date().valueOf() + this.da; 16 > a; a++) r.push((4294967296 * Math.random()) | 0);
                for (a = 0; a < this.c.length && ((r = r.concat(this.c[a].finalize())), (s += this.m[a]), (this.m[a] = 0), n || !(this.P & (1 << a))); a++);
                for (this.P >= 1 << this.c.length && (this.c.push(new l.hash.sha256()), this.m.push(0)), this.f -= s, s > this.o && (this.o = s), this.P++, this.b = l.hash.sha256.hash(this.b.concat(r)), this.L = new l.cipher.aes(this.b), n = 0; 4 > n && ((this.h[n] = (this.h[n] + 1) | 0), !this.h[n]); n++);
            }
            for (n = 0; n < e; n += 4) 0 == (n + 1) % this.ca && _(this), i.push((r = p(this))[0], r[1], r[2], r[3]);
            return _(this), i.slice(0, e);
        },
        setDefaultParanoia: function (e, t) {
            if (0 === e && 'Setting paranoia=0 will ruin your security; use it only for testing' !== t) throw new l.exception.invalid('Setting paranoia=0 will ruin your security; use it only for testing');
            this.M = e;
        },
        addEntropy: function (e, t, n) {
            n = n || 'user';
            var i,
                r,
                a = new Date().valueOf(),
                s = this.H[n],
                o = this.isReady(),
                u = 0;
            switch ((void 0 === (i = this.U[n]) && (i = this.U[n] = this.ha++), void 0 === s && (s = this.H[n] = 0), (this.H[n] = (this.H[n] + 1) % this.c.length), typeof e)) {
                case 'number':
                    void 0 === t && (t = 1), this.c[s].update([i, this.N++, 1, t, a, 1, 0 | e]);
                    break;
                case 'object':
                    if ('[object Uint32Array]' === (n = Object.prototype.toString.call(e))) {
                        for (n = 0, r = []; n < e.length; n++) r.push(e[n]);
                        e = r;
                    } else for ('[object Array]' !== n && (u = 1), n = 0; n < e.length && !u; n++) 'number' != typeof e[n] && (u = 1);
                    if (!u) {
                        if (void 0 === t) for (n = t = 0; n < e.length; n++) for (r = e[n]; 0 < r; ) t++, (r >>>= 1);
                        this.c[s].update([i, this.N++, 2, t, a, e.length].concat(e));
                    }
                    break;
                case 'string':
                    void 0 === t && (t = e.length), this.c[s].update([i, this.N++, 3, t, a, e.length]), this.c[s].update(e);
                    break;
                default:
                    u = 1;
            }
            if (u) throw new l.exception.bug('random: addEntropy only supports number, array of numbers or string');
            (this.m[s] += t), (this.f += t), o === this.u && (this.isReady() !== this.u && d('seeded', Math.max(this.o, this.f)), d('progress', this.getProgress()));
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
                i,
                r = this.K[e],
                a = [];
            for (i in r) r.hasOwnProperty(i) && r[i] === t && a.push(i);
            for (n = 0; n < a.length; n++) (i = a[n]), delete r[i];
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
a: try {
    if ((s = e.exports)) {
        try {
            o = n(444982);
        } catch (e) {
            o = null;
        }
        s = r = o;
    }
    if (s && r.randomBytes) (i = r.randomBytes(128)), (i = new Uint32Array(new Uint8Array(i).buffer)), l.random.addEntropy(i, 1024, "crypto['randomBytes']");
    else if ('undefined' != typeof window && 'undefined' != typeof Uint32Array) {
        if (((a = new Uint32Array(32)), window.crypto && window.crypto.getRandomValues)) window.crypto.getRandomValues(a);
        else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(a);
        else break a;
        l.random.addEntropy(a, 1024, "crypto['getRandomValues']");
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
    ja: function (e, t, n, i) {
        (n = n || {}), (i = i || {});
        var r,
            a = l.json,
            s = a.g({ iv: l.random.randomWords(4, 0) }, a.defaults);
        if ((a.g(s, n), (n = s.adata), 'string' == typeof s.salt && (s.salt = l.codec.base64.toBits(s.salt)), 'string' == typeof s.iv && (s.iv = l.codec.base64.toBits(s.iv)), !l.mode[s.mode] || !l.cipher[s.cipher] || ('string' == typeof e && 100 >= s.iter) || (64 !== s.ts && 96 !== s.ts && 128 !== s.ts) || (128 !== s.ks && 192 !== s.ks && 256 !== s.ks) || 2 > s.iv.length || 4 < s.iv.length)) throw new l.exception.invalid('json encrypt: invalid parameters');
        return 'string' == typeof e ? ((e = (r = l.misc.cachedPbkdf2(e, s)).key.slice(0, s.ks / 32)), (s.salt = r.salt)) : l.ecc && e instanceof l.ecc.elGamal.publicKey && ((r = e.kem()), (s.kemtag = r.tag), (e = r.key.slice(0, s.ks / 32))), 'string' == typeof t && (t = l.codec.utf8String.toBits(t)), 'string' == typeof n && (s.adata = n = l.codec.utf8String.toBits(n)), (r = new l.cipher[s.cipher](e)), a.g(i, s), (i.key = e), (s.ct = 'ccm' === s.mode && l.arrayBuffer && l.arrayBuffer.ccm && t instanceof ArrayBuffer ? l.arrayBuffer.ccm.encrypt(r, t, s.iv, n, s.ts) : l.mode[s.mode].encrypt(r, t, s.iv, n, s.ts)), s;
    },
    encrypt: function (e, t, n, i) {
        var r = l.json,
            a = r.ja.apply(r, arguments);
        return r.encode(a);
    },
    ia: function (e, t, n, i) {
        (n = n || {}), (i = i || {});
        var r,
            a,
            s = l.json;
        if (((r = (t = s.g(s.g(s.g({}, s.defaults), t), n, !0)).adata), 'string' == typeof t.salt && (t.salt = l.codec.base64.toBits(t.salt)), 'string' == typeof t.iv && (t.iv = l.codec.base64.toBits(t.iv)), !l.mode[t.mode] || !l.cipher[t.cipher] || ('string' == typeof e && 100 >= t.iter) || (64 !== t.ts && 96 !== t.ts && 128 !== t.ts) || (128 !== t.ks && 192 !== t.ks && 256 !== t.ks) || !t.iv || 2 > t.iv.length || 4 < t.iv.length)) throw new l.exception.invalid('json decrypt: invalid parameters');
        return 'string' == typeof e ? ((e = (a = l.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32)), (t.salt = a.salt)) : l.ecc && e instanceof l.ecc.elGamal.secretKey && (e = e.unkem(l.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)), 'string' == typeof r && (r = l.codec.utf8String.toBits(r)), (a = new l.cipher[t.cipher](e)), (r = 'ccm' === t.mode && l.arrayBuffer && l.arrayBuffer.ccm && t.ct instanceof ArrayBuffer ? l.arrayBuffer.ccm.decrypt(a, t.ct, t.iv, t.tag, r, t.ts) : l.mode[t.mode].decrypt(a, t.ct, t.iv, r, t.ts)), s.g(i, t), (i.key = e), 1 === n.raw ? r : l.codec.utf8String.fromBits(r);
    },
    decrypt: function (e, t, n, i) {
        var r = l.json;
        return r.ia(e, r.decode(t), n, i);
    },
    encode: function (e) {
        var t,
            n = '{',
            i = '';
        for (t in e)
            if (e.hasOwnProperty(t)) {
                if (!t.match(/^[a-z0-9]+$/i)) throw new l.exception.invalid('json encode: invalid property name');
                switch (((n += i + '"' + t + '":'), (i = ','), typeof e[t])) {
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
            i = {};
        for (t = 0; t < e.length; t++) {
            if (!(n = e[t].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new l.exception.invalid("json decode: this isn't json!");
            null != n[3] ? (i[n[2]] = parseInt(n[3], 10)) : null != n[4] ? (i[n[2]] = n[2].match(/^(ct|adata|salt|iv)$/) ? l.codec.base64.toBits(n[4]) : unescape(n[4])) : null != n[5] && (i[n[2]] = 'true' === n[5]);
        }
        return i;
    },
    g: function (e, t, n) {
        if ((void 0 === e && (e = {}), void 0 === t)) return e;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                if (n && void 0 !== e[i] && e[i] !== t[i]) throw new l.exception.invalid('required parameter overridden');
                e[i] = t[i];
            }
        return e;
    },
    sa: function (e, t) {
        var n,
            i = {};
        for (n in e) e.hasOwnProperty(n) && e[n] !== t[n] && (i[n] = e[n]);
        return i;
    },
    ra: function (e, t) {
        var n,
            i = {};
        for (n = 0; n < t.length; n++) void 0 !== e[t[n]] && (i[t[n]] = e[t[n]]);
        return i;
    }
}),
    (l.encrypt = l.json.encrypt),
    (l.decrypt = l.json.decrypt),
    (l.misc.pa = {}),
    (l.misc.cachedPbkdf2 = function (e, t) {
        var n,
            i = l.misc.pa;
        return (
            (n = (t = t || {}).iter || 1000),
            (n = (i = i[e] = i[e] || {})[n] = i[n] || { firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : l.random.randomWords(2, 0) }),
            (i = void 0 === t.salt ? n.firstSalt : t.salt),
            (n[i] = n[i] || l.misc.pbkdf2(e, i, t.iter)),
            {
                key: n[i].slice(0),
                salt: i.slice(0)
            }
        );
    }),
    e.exports && (e.exports = l),
    'function' == typeof define &&
        define([], function () {
            return l;
        });
