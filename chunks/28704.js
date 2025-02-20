!(function (e, t) {
    function r(e, t) {
        if (!e) throw Error(t || 'Assertion failed');
    }
    function i(e, t) {
        e.super_ = t;
        var n = function () {};
        (n.prototype = t.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
    }
    function o(e, t, n) {
        if (o.isBN(e)) return e;
        (this.negative = 0), (this.words = null), (this.length = 0), (this.red = null), null !== e && (('le' === t || 'be' === t) && ((n = t), (t = 10)), this._init(e || 0, t || 10, n || 'be'));
    }
    'object' == typeof e ? (e.exports = o) : (t.BN = o), (o.BN = o), (o.wordSize = 26);
    try {
        d = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : n(223686).Buffer;
    } catch (e) {}
    function a(e, t) {
        var n = e.charCodeAt(t);
        return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, 'Invalid character in ' + e);
    }
    function s(e, t, n) {
        var r = a(e, n);
        return n - 1 >= t && (r |= a(e, n - 1) << 4), r;
    }
    function l(e, t, n, i) {
        for (var o = 0, a = 0, s = Math.min(e.length, n), l = t; l < s; l++) {
            var c = e.charCodeAt(l) - 48;
            (o *= i), (a = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c), r(c >= 0 && a < i, 'Invalid character'), (o += a);
        }
        return o;
    }
    function c(e, t) {
        (e.words = t.words), (e.length = t.length), (e.negative = t.negative), (e.red = t.red);
    }
    if (
        ((o.isBN = function (e) {
            return e instanceof o || (null !== e && 'object' == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words));
        }),
        (o.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
        }),
        (o.min = function (e, t) {
            return 0 > e.cmp(t) ? e : t;
        }),
        (o.prototype._init = function (e, t, n) {
            if ('number' == typeof e) return this._initNumber(e, t, n);
            if ('object' == typeof e) return this._initArray(e, t, n);
            'hex' === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
            var i = 0;
            '-' === (e = e.toString().replace(/\s+/g, ''))[0] && (i++, (this.negative = 1)), i < e.length && (16 === t ? this._parseHex(e, i, n) : (this._parseBase(e, t, i), 'le' === n && this._initArray(this.toArray(), t, n)));
        }),
        (o.prototype._initNumber = function (e, t, n) {
            e < 0 && ((this.negative = 1), (e = -e)), e < 67108864 ? ((this.words = [67108863 & e]), (this.length = 1)) : e < 4503599627370496 ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]), (this.length = 2)) : (r(e < 9007199254740992), (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]), (this.length = 3)), 'le' === n && this._initArray(this.toArray(), t, n);
        }),
        (o.prototype._initArray = function (e, t, n) {
            if ((r('number' == typeof e.length), e.length <= 0)) return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)), (this.words = Array(this.length));
            for (var i, o, a = 0; a < this.length; a++) this.words[a] = 0;
            var s = 0;
            if ('be' === n) for (a = e.length - 1, i = 0; a >= 0; a -= 3) (o = e[a] | (e[a - 1] << 8) | (e[a - 2] << 16)), (this.words[i] |= (o << s) & 67108863), (this.words[i + 1] = (o >>> (26 - s)) & 67108863), (s += 24) >= 26 && ((s -= 26), i++);
            else if ('le' === n) for (a = 0, i = 0; a < e.length; a += 3) (o = e[a] | (e[a + 1] << 8) | (e[a + 2] << 16)), (this.words[i] |= (o << s) & 67108863), (this.words[i + 1] = (o >>> (26 - s)) & 67108863), (s += 24) >= 26 && ((s -= 26), i++);
            return this._strip();
        }),
        (o.prototype._parseHex = function (e, t, n) {
            (this.length = Math.ceil((e.length - t) / 6)), (this.words = Array(this.length));
            for (var r, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
                a = 0;
            if ('be' === n) for (i = e.length - 1; i >= t; i -= 2) (r = s(e, t, i) << o), (this.words[a] |= 67108863 & r), o >= 18 ? ((o -= 18), (a += 1), (this.words[a] |= r >>> 26)) : (o += 8);
            else for (i = (e.length - t) % 2 == 0 ? t + 1 : t; i < e.length; i += 2) (r = s(e, t, i) << o), (this.words[a] |= 67108863 & r), o >= 18 ? ((o -= 18), (a += 1), (this.words[a] |= r >>> 26)) : (o += 8);
            this._strip();
        }),
        (o.prototype._parseBase = function (e, t, n) {
            (this.words = [0]), (this.length = 1);
            for (var r = 0, i = 1; i <= 67108863; i *= t) r++;
            r--, (i = (i / t) | 0);
            for (var o = e.length - n, a = o % r, s = Math.min(o, o - a) + n, c = 0, u = n; u < s; u += r) (c = l(e, u, u + r, t)), this.imuln(i), this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
            if (0 !== a) {
                var d = 1;
                for (c = l(e, u, e.length, t), u = 0; u < a; u++) d *= t;
                this.imuln(d), this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
            }
            this._strip();
        }),
        (o.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            (e.length = this.length), (e.negative = this.negative), (e.red = this.red);
        }),
        (o.prototype._move = function (e) {
            c(e, this);
        }),
        (o.prototype.clone = function () {
            var e = new o(null);
            return this.copy(e), e;
        }),
        (o.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
        }),
        (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
            return this._normSign();
        }),
        (o.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }),
        'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
    )
        try {
            o.prototype[Symbol.for('nodejs.util.inspect.custom')] = u;
        } catch (e) {
            o.prototype.inspect = u;
        }
    else o.prototype.inspect = u;
    function u() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    var d,
        f = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'],
        p = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        _ = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    (o.prototype.toString = function (e, t) {
        if (((t = 0 | t || 1), 16 === (e = e || 10) || 'hex' === e)) {
            n = '';
            for (var n, i = 0, o = 0, a = 0; a < this.length; a++) {
                var s = this.words[a],
                    l = (((s << i) | o) & 16777215).toString(16);
                (o = (s >>> (24 - i)) & 16777215), (i += 2) >= 26 && ((i -= 26), a--), (n = 0 !== o || a !== this.length - 1 ? f[6 - l.length] + l + n : l + n);
            }
            for (0 !== o && (n = o.toString(16) + n); n.length % t != 0; ) n = '0' + n;
            return 0 !== this.negative && (n = '-' + n), n;
        }
        if (e === (0 | e) && e >= 2 && e <= 36) {
            var c = p[e],
                u = _[e];
            n = '';
            var d = this.clone();
            for (d.negative = 0; !d.isZero(); ) {
                var h = d.modrn(u).toString(e);
                n = (d = d.idivn(u)).isZero() ? h + n : f[c - h.length] + h + n;
            }
            for (this.isZero() && (n = '0' + n); n.length % t != 0; ) n = '0' + n;
            return 0 !== this.negative && (n = '-' + n), n;
        }
        r(!1, 'Base should be between 2 and 36');
    }),
        (o.prototype.toNumber = function () {
            var e = this.words[0];
            return 2 === this.length ? (e += 67108864 * this.words[1]) : 3 === this.length && 1 === this.words[2] ? (e += 4503599627370496 + 67108864 * this.words[1]) : this.length > 2 && r(!1, 'Number can only safely store up to 53 bits'), 0 !== this.negative ? -e : e;
        }),
        (o.prototype.toJSON = function () {
            return this.toString(16, 2);
        }),
        d &&
            (o.prototype.toBuffer = function (e, t) {
                return this.toArrayLike(d, e, t);
            }),
        (o.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t);
        });
    var h = function (e, t) {
        return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
    };
    function m(e) {
        for (var t = Array(e.bitLength()), n = 0; n < t.length; n++) {
            var r = (n / 26) | 0,
                i = n % 26;
            t[n] = (e.words[r] >>> i) & 1;
        }
        return t;
    }
    function g(e, t, n) {
        n.negative = t.negative ^ e.negative;
        var r = (e.length + t.length) | 0;
        (n.length = r), (r = (r - 1) | 0);
        var i = 0 | e.words[0],
            o = 0 | t.words[0],
            a = i * o,
            s = 67108863 & a,
            l = (a / 67108864) | 0;
        n.words[0] = s;
        for (var c = 1; c < r; c++) {
            for (var u = l >>> 26, d = 67108863 & l, f = Math.min(c, t.length - 1), p = Math.max(0, c - e.length + 1); p <= f; p++) {
                var _ = (c - p) | 0;
                (u += ((a = (i = 0 | e.words[_]) * (o = 0 | t.words[p]) + d) / 67108864) | 0), (d = 67108863 & a);
            }
            (n.words[c] = 0 | d), (l = 0 | u);
        }
        return 0 !== l ? (n.words[c] = 0 | l) : n.length--, n._strip();
    }
    (o.prototype.toArrayLike = function (e, t, n) {
        this._strip();
        var i = this.byteLength(),
            o = n || Math.max(1, i);
        r(i <= o, 'byte array longer than desired length'), r(o > 0, 'Requested array length <= 0');
        var a = h(e, o);
        return this['_toArrayLike' + ('le' === t ? 'LE' : 'BE')](a, i), a;
    }),
        (o.prototype._toArrayLikeLE = function (e, t) {
            for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                var a = (this.words[i] << o) | r;
                (e[n++] = 255 & a), n < e.length && (e[n++] = (a >> 8) & 255), n < e.length && (e[n++] = (a >> 16) & 255), 6 === o ? (n < e.length && (e[n++] = (a >> 24) & 255), (r = 0), (o = 0)) : ((r = a >>> 24), (o += 2));
            }
            if (n < e.length) for (e[n++] = r; n < e.length; ) e[n++] = 0;
        }),
        (o.prototype._toArrayLikeBE = function (e, t) {
            for (var n = e.length - 1, r = 0, i = 0, o = 0; i < this.length; i++) {
                var a = (this.words[i] << o) | r;
                (e[n--] = 255 & a), n >= 0 && (e[n--] = (a >> 8) & 255), n >= 0 && (e[n--] = (a >> 16) & 255), 6 === o ? (n >= 0 && (e[n--] = (a >> 24) & 255), (r = 0), (o = 0)) : ((r = a >>> 24), (o += 2));
            }
            if (n >= 0) for (e[n--] = r; n >= 0; ) e[n--] = 0;
        }),
        Math.clz32
            ? (o.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
              })
            : (o.prototype._countBits = function (e) {
                  var t = e,
                      n = 0;
                  return t >= 4096 && ((n += 13), (t >>>= 13)), t >= 64 && ((n += 7), (t >>>= 7)), t >= 8 && ((n += 4), (t >>>= 4)), t >= 2 && ((n += 2), (t >>>= 2)), n + t;
              }),
        (o.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var t = e,
                n = 0;
            return (8191 & t) == 0 && ((n += 13), (t >>>= 13)), (127 & t) == 0 && ((n += 7), (t >>>= 7)), (15 & t) == 0 && ((n += 4), (t >>>= 4)), (3 & t) == 0 && ((n += 2), (t >>>= 2)), (1 & t) == 0 && n++, n;
        }),
        (o.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
                t = this._countBits(e);
            return (this.length - 1) * 26 + t;
        }),
        (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
                var n = this._zeroBits(this.words[t]);
                if (((e += n), 26 !== n)) break;
            }
            return e;
        }),
        (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
        }),
        (o.prototype.toTwos = function (e) {
            return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
        }),
        (o.prototype.fromTwos = function (e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
        }),
        (o.prototype.isNeg = function () {
            return 0 !== this.negative;
        }),
        (o.prototype.neg = function () {
            return this.clone().ineg();
        }),
        (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
        }),
        (o.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
            return this._strip();
        }),
        (o.prototype.ior = function (e) {
            return r((this.negative | e.negative) == 0), this.iuor(e);
        }),
        (o.prototype.or = function (e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
        }),
        (o.prototype.uor = function (e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
        }),
        (o.prototype.iuand = function (e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var n = 0; n < t.length; n++) this.words[n] = this.words[n] & e.words[n];
            return (this.length = t.length), this._strip();
        }),
        (o.prototype.iand = function (e) {
            return r((this.negative | e.negative) == 0), this.iuand(e);
        }),
        (o.prototype.and = function (e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
        }),
        (o.prototype.uand = function (e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
        }),
        (o.prototype.iuxor = function (e) {
            this.length > e.length ? ((t = this), (n = e)) : ((t = e), (n = this));
            for (var t, n, r = 0; r < n.length; r++) this.words[r] = t.words[r] ^ n.words[r];
            if (this !== t) for (; r < t.length; r++) this.words[r] = t.words[r];
            return (this.length = t.length), this._strip();
        }),
        (o.prototype.ixor = function (e) {
            return r((this.negative | e.negative) == 0), this.iuxor(e);
        }),
        (o.prototype.xor = function (e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
        }),
        (o.prototype.uxor = function (e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
        }),
        (o.prototype.inotn = function (e) {
            r('number' == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
                n = e % 26;
            this._expand(t), n > 0 && t--;
            for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
            return n > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - n))), this._strip();
        }),
        (o.prototype.notn = function (e) {
            return this.clone().inotn(e);
        }),
        (o.prototype.setn = function (e, t) {
            r('number' == typeof e && e >= 0);
            var n = (e / 26) | 0,
                i = e % 26;
            return this._expand(n + 1), t ? (this.words[n] = this.words[n] | (1 << i)) : (this.words[n] = this.words[n] & ~(1 << i)), this._strip();
        }),
        (o.prototype.iadd = function (e) {
            if (0 !== this.negative && 0 === e.negative) return (this.negative = 0), (t = this.isub(e)), (this.negative ^= 1), this._normSign();
            if (0 === this.negative && 0 !== e.negative) return (e.negative = 0), (t = this.isub(e)), (e.negative = 1), t._normSign();
            this.length > e.length ? ((n = this), (r = e)) : ((n = e), (r = this));
            for (var t, n, r, i = 0, o = 0; o < r.length; o++) (t = (0 | n.words[o]) + (0 | r.words[o]) + i), (this.words[o] = 67108863 & t), (i = t >>> 26);
            for (; 0 !== i && o < n.length; o++) (t = (0 | n.words[o]) + i), (this.words[o] = 67108863 & t), (i = t >>> 26);
            if (((this.length = n.length), 0 !== i)) (this.words[this.length] = i), this.length++;
            else if (n !== this) for (; o < n.length; o++) this.words[o] = n.words[o];
            return this;
        }),
        (o.prototype.add = function (e) {
            var t;
            return 0 !== e.negative && 0 === this.negative ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t) : 0 === e.negative && 0 !== this.negative ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
        }),
        (o.prototype.isub = function (e) {
            if (0 !== e.negative) {
                e.negative = 0;
                var t,
                    n,
                    r = this.iadd(e);
                return (e.negative = 1), r._normSign();
            }
            if (0 !== this.negative) return (this.negative = 0), this.iadd(e), (this.negative = 1), this._normSign();
            var i = this.cmp(e);
            if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
            i > 0 ? ((t = this), (n = e)) : ((t = e), (n = this));
            for (var o = 0, a = 0; a < n.length; a++) (o = (r = (0 | t.words[a]) - (0 | n.words[a]) + o) >> 26), (this.words[a] = 67108863 & r);
            for (; 0 !== o && a < t.length; a++) (o = (r = (0 | t.words[a]) + o) >> 26), (this.words[a] = 67108863 & r);
            if (0 === o && a < t.length && t !== this) for (; a < t.length; a++) this.words[a] = t.words[a];
            return (this.length = Math.max(this.length, a)), t !== this && (this.negative = 1), this._strip();
        }),
        (o.prototype.sub = function (e) {
            return this.clone().isub(e);
        });
    var E = function (e, t, n) {
        var r,
            i,
            o,
            a = e.words,
            s = t.words,
            l = n.words,
            c = 0,
            u = 0 | a[0],
            d = 8191 & u,
            f = u >>> 13,
            p = 0 | a[1],
            _ = 8191 & p,
            h = p >>> 13,
            m = 0 | a[2],
            g = 8191 & m,
            E = m >>> 13,
            v = 0 | a[3],
            b = 8191 & v,
            y = v >>> 13,
            O = 0 | a[4],
            S = 8191 & O,
            I = O >>> 13,
            T = 0 | a[5],
            N = 8191 & T,
            A = T >>> 13,
            C = 0 | a[6],
            R = 8191 & C,
            P = C >>> 13,
            w = 0 | a[7],
            D = 8191 & w,
            x = w >>> 13,
            L = 0 | a[8],
            M = 8191 & L,
            k = L >>> 13,
            j = 0 | a[9],
            U = 8191 & j,
            G = j >>> 13,
            B = 0 | s[0],
            Z = 8191 & B,
            F = B >>> 13,
            V = 0 | s[1],
            H = 8191 & V,
            W = V >>> 13,
            Y = 0 | s[2],
            K = 8191 & Y,
            z = Y >>> 13,
            q = 0 | s[3],
            Q = 8191 & q,
            X = q >>> 13,
            J = 0 | s[4],
            $ = 8191 & J,
            ee = J >>> 13,
            et = 0 | s[5],
            en = 8191 & et,
            er = et >>> 13,
            ei = 0 | s[6],
            eo = 8191 & ei,
            ea = ei >>> 13,
            es = 0 | s[7],
            el = 8191 & es,
            ec = es >>> 13,
            eu = 0 | s[8],
            ed = 8191 & eu,
            ef = eu >>> 13,
            ep = 0 | s[9],
            e_ = 8191 & ep,
            eh = ep >>> 13;
        (n.negative = e.negative ^ t.negative), (n.length = 19), (r = Math.imul(d, Z));
        var em = (((c + r) | 0) + ((8191 & (i = ((i = Math.imul(d, F)) + Math.imul(f, Z)) | 0)) << 13)) | 0;
        (c = ((((o = Math.imul(f, F)) + (i >>> 13)) | 0) + (em >>> 26)) | 0), (em &= 67108863), (r = Math.imul(_, Z)), (i = ((i = Math.imul(_, F)) + Math.imul(h, Z)) | 0), (o = Math.imul(h, F)), (r = (r + Math.imul(d, H)) | 0);
        var eg = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, W)) | 0) + Math.imul(f, H)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, W)) | 0) + (i >>> 13)) | 0) + (eg >>> 26)) | 0), (eg &= 67108863), (r = Math.imul(g, Z)), (i = ((i = Math.imul(g, F)) + Math.imul(E, Z)) | 0), (o = Math.imul(E, F)), (r = (r + Math.imul(_, H)) | 0), (i = ((i = (i + Math.imul(_, W)) | 0) + Math.imul(h, H)) | 0), (o = (o + Math.imul(h, W)) | 0), (r = (r + Math.imul(d, K)) | 0);
        var eE = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, z)) | 0) + Math.imul(f, K)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, z)) | 0) + (i >>> 13)) | 0) + (eE >>> 26)) | 0), (eE &= 67108863), (r = Math.imul(b, Z)), (i = ((i = Math.imul(b, F)) + Math.imul(y, Z)) | 0), (o = Math.imul(y, F)), (r = (r + Math.imul(g, H)) | 0), (i = ((i = (i + Math.imul(g, W)) | 0) + Math.imul(E, H)) | 0), (o = (o + Math.imul(E, W)) | 0), (r = (r + Math.imul(_, K)) | 0), (i = ((i = (i + Math.imul(_, z)) | 0) + Math.imul(h, K)) | 0), (o = (o + Math.imul(h, z)) | 0), (r = (r + Math.imul(d, Q)) | 0);
        var ev = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, X)) | 0) + Math.imul(f, Q)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, X)) | 0) + (i >>> 13)) | 0) + (ev >>> 26)) | 0), (ev &= 67108863), (r = Math.imul(S, Z)), (i = ((i = Math.imul(S, F)) + Math.imul(I, Z)) | 0), (o = Math.imul(I, F)), (r = (r + Math.imul(b, H)) | 0), (i = ((i = (i + Math.imul(b, W)) | 0) + Math.imul(y, H)) | 0), (o = (o + Math.imul(y, W)) | 0), (r = (r + Math.imul(g, K)) | 0), (i = ((i = (i + Math.imul(g, z)) | 0) + Math.imul(E, K)) | 0), (o = (o + Math.imul(E, z)) | 0), (r = (r + Math.imul(_, Q)) | 0), (i = ((i = (i + Math.imul(_, X)) | 0) + Math.imul(h, Q)) | 0), (o = (o + Math.imul(h, X)) | 0), (r = (r + Math.imul(d, $)) | 0);
        var eb = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, ee)) | 0) + Math.imul(f, $)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, ee)) | 0) + (i >>> 13)) | 0) + (eb >>> 26)) | 0), (eb &= 67108863), (r = Math.imul(N, Z)), (i = ((i = Math.imul(N, F)) + Math.imul(A, Z)) | 0), (o = Math.imul(A, F)), (r = (r + Math.imul(S, H)) | 0), (i = ((i = (i + Math.imul(S, W)) | 0) + Math.imul(I, H)) | 0), (o = (o + Math.imul(I, W)) | 0), (r = (r + Math.imul(b, K)) | 0), (i = ((i = (i + Math.imul(b, z)) | 0) + Math.imul(y, K)) | 0), (o = (o + Math.imul(y, z)) | 0), (r = (r + Math.imul(g, Q)) | 0), (i = ((i = (i + Math.imul(g, X)) | 0) + Math.imul(E, Q)) | 0), (o = (o + Math.imul(E, X)) | 0), (r = (r + Math.imul(_, $)) | 0), (i = ((i = (i + Math.imul(_, ee)) | 0) + Math.imul(h, $)) | 0), (o = (o + Math.imul(h, ee)) | 0), (r = (r + Math.imul(d, en)) | 0);
        var ey = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, er)) | 0) + Math.imul(f, en)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, er)) | 0) + (i >>> 13)) | 0) + (ey >>> 26)) | 0), (ey &= 67108863), (r = Math.imul(R, Z)), (i = ((i = Math.imul(R, F)) + Math.imul(P, Z)) | 0), (o = Math.imul(P, F)), (r = (r + Math.imul(N, H)) | 0), (i = ((i = (i + Math.imul(N, W)) | 0) + Math.imul(A, H)) | 0), (o = (o + Math.imul(A, W)) | 0), (r = (r + Math.imul(S, K)) | 0), (i = ((i = (i + Math.imul(S, z)) | 0) + Math.imul(I, K)) | 0), (o = (o + Math.imul(I, z)) | 0), (r = (r + Math.imul(b, Q)) | 0), (i = ((i = (i + Math.imul(b, X)) | 0) + Math.imul(y, Q)) | 0), (o = (o + Math.imul(y, X)) | 0), (r = (r + Math.imul(g, $)) | 0), (i = ((i = (i + Math.imul(g, ee)) | 0) + Math.imul(E, $)) | 0), (o = (o + Math.imul(E, ee)) | 0), (r = (r + Math.imul(_, en)) | 0), (i = ((i = (i + Math.imul(_, er)) | 0) + Math.imul(h, en)) | 0), (o = (o + Math.imul(h, er)) | 0), (r = (r + Math.imul(d, eo)) | 0);
        var eO = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, ea)) | 0) + Math.imul(f, eo)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, ea)) | 0) + (i >>> 13)) | 0) + (eO >>> 26)) | 0), (eO &= 67108863), (r = Math.imul(D, Z)), (i = ((i = Math.imul(D, F)) + Math.imul(x, Z)) | 0), (o = Math.imul(x, F)), (r = (r + Math.imul(R, H)) | 0), (i = ((i = (i + Math.imul(R, W)) | 0) + Math.imul(P, H)) | 0), (o = (o + Math.imul(P, W)) | 0), (r = (r + Math.imul(N, K)) | 0), (i = ((i = (i + Math.imul(N, z)) | 0) + Math.imul(A, K)) | 0), (o = (o + Math.imul(A, z)) | 0), (r = (r + Math.imul(S, Q)) | 0), (i = ((i = (i + Math.imul(S, X)) | 0) + Math.imul(I, Q)) | 0), (o = (o + Math.imul(I, X)) | 0), (r = (r + Math.imul(b, $)) | 0), (i = ((i = (i + Math.imul(b, ee)) | 0) + Math.imul(y, $)) | 0), (o = (o + Math.imul(y, ee)) | 0), (r = (r + Math.imul(g, en)) | 0), (i = ((i = (i + Math.imul(g, er)) | 0) + Math.imul(E, en)) | 0), (o = (o + Math.imul(E, er)) | 0), (r = (r + Math.imul(_, eo)) | 0), (i = ((i = (i + Math.imul(_, ea)) | 0) + Math.imul(h, eo)) | 0), (o = (o + Math.imul(h, ea)) | 0), (r = (r + Math.imul(d, el)) | 0);
        var eS = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, ec)) | 0) + Math.imul(f, el)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, ec)) | 0) + (i >>> 13)) | 0) + (eS >>> 26)) | 0), (eS &= 67108863), (r = Math.imul(M, Z)), (i = ((i = Math.imul(M, F)) + Math.imul(k, Z)) | 0), (o = Math.imul(k, F)), (r = (r + Math.imul(D, H)) | 0), (i = ((i = (i + Math.imul(D, W)) | 0) + Math.imul(x, H)) | 0), (o = (o + Math.imul(x, W)) | 0), (r = (r + Math.imul(R, K)) | 0), (i = ((i = (i + Math.imul(R, z)) | 0) + Math.imul(P, K)) | 0), (o = (o + Math.imul(P, z)) | 0), (r = (r + Math.imul(N, Q)) | 0), (i = ((i = (i + Math.imul(N, X)) | 0) + Math.imul(A, Q)) | 0), (o = (o + Math.imul(A, X)) | 0), (r = (r + Math.imul(S, $)) | 0), (i = ((i = (i + Math.imul(S, ee)) | 0) + Math.imul(I, $)) | 0), (o = (o + Math.imul(I, ee)) | 0), (r = (r + Math.imul(b, en)) | 0), (i = ((i = (i + Math.imul(b, er)) | 0) + Math.imul(y, en)) | 0), (o = (o + Math.imul(y, er)) | 0), (r = (r + Math.imul(g, eo)) | 0), (i = ((i = (i + Math.imul(g, ea)) | 0) + Math.imul(E, eo)) | 0), (o = (o + Math.imul(E, ea)) | 0), (r = (r + Math.imul(_, el)) | 0), (i = ((i = (i + Math.imul(_, ec)) | 0) + Math.imul(h, el)) | 0), (o = (o + Math.imul(h, ec)) | 0), (r = (r + Math.imul(d, ed)) | 0);
        var eI = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, ef)) | 0) + Math.imul(f, ed)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, ef)) | 0) + (i >>> 13)) | 0) + (eI >>> 26)) | 0), (eI &= 67108863), (r = Math.imul(U, Z)), (i = ((i = Math.imul(U, F)) + Math.imul(G, Z)) | 0), (o = Math.imul(G, F)), (r = (r + Math.imul(M, H)) | 0), (i = ((i = (i + Math.imul(M, W)) | 0) + Math.imul(k, H)) | 0), (o = (o + Math.imul(k, W)) | 0), (r = (r + Math.imul(D, K)) | 0), (i = ((i = (i + Math.imul(D, z)) | 0) + Math.imul(x, K)) | 0), (o = (o + Math.imul(x, z)) | 0), (r = (r + Math.imul(R, Q)) | 0), (i = ((i = (i + Math.imul(R, X)) | 0) + Math.imul(P, Q)) | 0), (o = (o + Math.imul(P, X)) | 0), (r = (r + Math.imul(N, $)) | 0), (i = ((i = (i + Math.imul(N, ee)) | 0) + Math.imul(A, $)) | 0), (o = (o + Math.imul(A, ee)) | 0), (r = (r + Math.imul(S, en)) | 0), (i = ((i = (i + Math.imul(S, er)) | 0) + Math.imul(I, en)) | 0), (o = (o + Math.imul(I, er)) | 0), (r = (r + Math.imul(b, eo)) | 0), (i = ((i = (i + Math.imul(b, ea)) | 0) + Math.imul(y, eo)) | 0), (o = (o + Math.imul(y, ea)) | 0), (r = (r + Math.imul(g, el)) | 0), (i = ((i = (i + Math.imul(g, ec)) | 0) + Math.imul(E, el)) | 0), (o = (o + Math.imul(E, ec)) | 0), (r = (r + Math.imul(_, ed)) | 0), (i = ((i = (i + Math.imul(_, ef)) | 0) + Math.imul(h, ed)) | 0), (o = (o + Math.imul(h, ef)) | 0), (r = (r + Math.imul(d, e_)) | 0);
        var eT = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(d, eh)) | 0) + Math.imul(f, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(f, eh)) | 0) + (i >>> 13)) | 0) + (eT >>> 26)) | 0), (eT &= 67108863), (r = Math.imul(U, H)), (i = ((i = Math.imul(U, W)) + Math.imul(G, H)) | 0), (o = Math.imul(G, W)), (r = (r + Math.imul(M, K)) | 0), (i = ((i = (i + Math.imul(M, z)) | 0) + Math.imul(k, K)) | 0), (o = (o + Math.imul(k, z)) | 0), (r = (r + Math.imul(D, Q)) | 0), (i = ((i = (i + Math.imul(D, X)) | 0) + Math.imul(x, Q)) | 0), (o = (o + Math.imul(x, X)) | 0), (r = (r + Math.imul(R, $)) | 0), (i = ((i = (i + Math.imul(R, ee)) | 0) + Math.imul(P, $)) | 0), (o = (o + Math.imul(P, ee)) | 0), (r = (r + Math.imul(N, en)) | 0), (i = ((i = (i + Math.imul(N, er)) | 0) + Math.imul(A, en)) | 0), (o = (o + Math.imul(A, er)) | 0), (r = (r + Math.imul(S, eo)) | 0), (i = ((i = (i + Math.imul(S, ea)) | 0) + Math.imul(I, eo)) | 0), (o = (o + Math.imul(I, ea)) | 0), (r = (r + Math.imul(b, el)) | 0), (i = ((i = (i + Math.imul(b, ec)) | 0) + Math.imul(y, el)) | 0), (o = (o + Math.imul(y, ec)) | 0), (r = (r + Math.imul(g, ed)) | 0), (i = ((i = (i + Math.imul(g, ef)) | 0) + Math.imul(E, ed)) | 0), (o = (o + Math.imul(E, ef)) | 0), (r = (r + Math.imul(_, e_)) | 0);
        var eN = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(_, eh)) | 0) + Math.imul(h, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(h, eh)) | 0) + (i >>> 13)) | 0) + (eN >>> 26)) | 0), (eN &= 67108863), (r = Math.imul(U, K)), (i = ((i = Math.imul(U, z)) + Math.imul(G, K)) | 0), (o = Math.imul(G, z)), (r = (r + Math.imul(M, Q)) | 0), (i = ((i = (i + Math.imul(M, X)) | 0) + Math.imul(k, Q)) | 0), (o = (o + Math.imul(k, X)) | 0), (r = (r + Math.imul(D, $)) | 0), (i = ((i = (i + Math.imul(D, ee)) | 0) + Math.imul(x, $)) | 0), (o = (o + Math.imul(x, ee)) | 0), (r = (r + Math.imul(R, en)) | 0), (i = ((i = (i + Math.imul(R, er)) | 0) + Math.imul(P, en)) | 0), (o = (o + Math.imul(P, er)) | 0), (r = (r + Math.imul(N, eo)) | 0), (i = ((i = (i + Math.imul(N, ea)) | 0) + Math.imul(A, eo)) | 0), (o = (o + Math.imul(A, ea)) | 0), (r = (r + Math.imul(S, el)) | 0), (i = ((i = (i + Math.imul(S, ec)) | 0) + Math.imul(I, el)) | 0), (o = (o + Math.imul(I, ec)) | 0), (r = (r + Math.imul(b, ed)) | 0), (i = ((i = (i + Math.imul(b, ef)) | 0) + Math.imul(y, ed)) | 0), (o = (o + Math.imul(y, ef)) | 0), (r = (r + Math.imul(g, e_)) | 0);
        var eA = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(g, eh)) | 0) + Math.imul(E, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(E, eh)) | 0) + (i >>> 13)) | 0) + (eA >>> 26)) | 0), (eA &= 67108863), (r = Math.imul(U, Q)), (i = ((i = Math.imul(U, X)) + Math.imul(G, Q)) | 0), (o = Math.imul(G, X)), (r = (r + Math.imul(M, $)) | 0), (i = ((i = (i + Math.imul(M, ee)) | 0) + Math.imul(k, $)) | 0), (o = (o + Math.imul(k, ee)) | 0), (r = (r + Math.imul(D, en)) | 0), (i = ((i = (i + Math.imul(D, er)) | 0) + Math.imul(x, en)) | 0), (o = (o + Math.imul(x, er)) | 0), (r = (r + Math.imul(R, eo)) | 0), (i = ((i = (i + Math.imul(R, ea)) | 0) + Math.imul(P, eo)) | 0), (o = (o + Math.imul(P, ea)) | 0), (r = (r + Math.imul(N, el)) | 0), (i = ((i = (i + Math.imul(N, ec)) | 0) + Math.imul(A, el)) | 0), (o = (o + Math.imul(A, ec)) | 0), (r = (r + Math.imul(S, ed)) | 0), (i = ((i = (i + Math.imul(S, ef)) | 0) + Math.imul(I, ed)) | 0), (o = (o + Math.imul(I, ef)) | 0), (r = (r + Math.imul(b, e_)) | 0);
        var eC = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(b, eh)) | 0) + Math.imul(y, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(y, eh)) | 0) + (i >>> 13)) | 0) + (eC >>> 26)) | 0), (eC &= 67108863), (r = Math.imul(U, $)), (i = ((i = Math.imul(U, ee)) + Math.imul(G, $)) | 0), (o = Math.imul(G, ee)), (r = (r + Math.imul(M, en)) | 0), (i = ((i = (i + Math.imul(M, er)) | 0) + Math.imul(k, en)) | 0), (o = (o + Math.imul(k, er)) | 0), (r = (r + Math.imul(D, eo)) | 0), (i = ((i = (i + Math.imul(D, ea)) | 0) + Math.imul(x, eo)) | 0), (o = (o + Math.imul(x, ea)) | 0), (r = (r + Math.imul(R, el)) | 0), (i = ((i = (i + Math.imul(R, ec)) | 0) + Math.imul(P, el)) | 0), (o = (o + Math.imul(P, ec)) | 0), (r = (r + Math.imul(N, ed)) | 0), (i = ((i = (i + Math.imul(N, ef)) | 0) + Math.imul(A, ed)) | 0), (o = (o + Math.imul(A, ef)) | 0), (r = (r + Math.imul(S, e_)) | 0);
        var eR = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(S, eh)) | 0) + Math.imul(I, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(I, eh)) | 0) + (i >>> 13)) | 0) + (eR >>> 26)) | 0), (eR &= 67108863), (r = Math.imul(U, en)), (i = ((i = Math.imul(U, er)) + Math.imul(G, en)) | 0), (o = Math.imul(G, er)), (r = (r + Math.imul(M, eo)) | 0), (i = ((i = (i + Math.imul(M, ea)) | 0) + Math.imul(k, eo)) | 0), (o = (o + Math.imul(k, ea)) | 0), (r = (r + Math.imul(D, el)) | 0), (i = ((i = (i + Math.imul(D, ec)) | 0) + Math.imul(x, el)) | 0), (o = (o + Math.imul(x, ec)) | 0), (r = (r + Math.imul(R, ed)) | 0), (i = ((i = (i + Math.imul(R, ef)) | 0) + Math.imul(P, ed)) | 0), (o = (o + Math.imul(P, ef)) | 0), (r = (r + Math.imul(N, e_)) | 0);
        var eP = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(N, eh)) | 0) + Math.imul(A, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(A, eh)) | 0) + (i >>> 13)) | 0) + (eP >>> 26)) | 0), (eP &= 67108863), (r = Math.imul(U, eo)), (i = ((i = Math.imul(U, ea)) + Math.imul(G, eo)) | 0), (o = Math.imul(G, ea)), (r = (r + Math.imul(M, el)) | 0), (i = ((i = (i + Math.imul(M, ec)) | 0) + Math.imul(k, el)) | 0), (o = (o + Math.imul(k, ec)) | 0), (r = (r + Math.imul(D, ed)) | 0), (i = ((i = (i + Math.imul(D, ef)) | 0) + Math.imul(x, ed)) | 0), (o = (o + Math.imul(x, ef)) | 0), (r = (r + Math.imul(R, e_)) | 0);
        var ew = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(R, eh)) | 0) + Math.imul(P, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(P, eh)) | 0) + (i >>> 13)) | 0) + (ew >>> 26)) | 0), (ew &= 67108863), (r = Math.imul(U, el)), (i = ((i = Math.imul(U, ec)) + Math.imul(G, el)) | 0), (o = Math.imul(G, ec)), (r = (r + Math.imul(M, ed)) | 0), (i = ((i = (i + Math.imul(M, ef)) | 0) + Math.imul(k, ed)) | 0), (o = (o + Math.imul(k, ef)) | 0), (r = (r + Math.imul(D, e_)) | 0);
        var eD = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(D, eh)) | 0) + Math.imul(x, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(x, eh)) | 0) + (i >>> 13)) | 0) + (eD >>> 26)) | 0), (eD &= 67108863), (r = Math.imul(U, ed)), (i = ((i = Math.imul(U, ef)) + Math.imul(G, ed)) | 0), (o = Math.imul(G, ef)), (r = (r + Math.imul(M, e_)) | 0);
        var ex = (((c + r) | 0) + ((8191 & (i = ((i = (i + Math.imul(M, eh)) | 0) + Math.imul(k, e_)) | 0)) << 13)) | 0;
        (c = ((((o = (o + Math.imul(k, eh)) | 0) + (i >>> 13)) | 0) + (ex >>> 26)) | 0), (ex &= 67108863), (r = Math.imul(U, e_));
        var eL = (((c + r) | 0) + ((8191 & (i = ((i = Math.imul(U, eh)) + Math.imul(G, e_)) | 0)) << 13)) | 0;
        return (c = ((((o = Math.imul(G, eh)) + (i >>> 13)) | 0) + (eL >>> 26)) | 0), (eL &= 67108863), (l[0] = em), (l[1] = eg), (l[2] = eE), (l[3] = ev), (l[4] = eb), (l[5] = ey), (l[6] = eO), (l[7] = eS), (l[8] = eI), (l[9] = eT), (l[10] = eN), (l[11] = eA), (l[12] = eC), (l[13] = eR), (l[14] = eP), (l[15] = ew), (l[16] = eD), (l[17] = ex), (l[18] = eL), 0 !== c && ((l[19] = c), n.length++), n;
    };
    function v(e, t, n) {
        (n.negative = t.negative ^ e.negative), (n.length = e.length + t.length);
        for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
            var a = i;
            i = 0;
            for (var s = 67108863 & r, l = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= l; c++) {
                var u = o - c,
                    d = (0 | e.words[u]) * (0 | t.words[c]),
                    f = 67108863 & d;
                (a = (a + ((d / 67108864) | 0)) | 0), (s = 67108863 & (f = (f + s) | 0)), (i += (a = (a + (f >>> 26)) | 0) >>> 26), (a &= 67108863);
            }
            (n.words[o] = s), (r = a), (a = i);
        }
        return 0 !== r ? (n.words[o] = r) : n.length--, n._strip();
    }
    function b(e, t, n) {
        return v(e, t, n);
    }
    function y(e, t) {
        (this.x = e), (this.y = t);
    }
    Math.imul || (E = g),
        (o.prototype.mulTo = function (e, t) {
            var n,
                r = this.length + e.length;
            return 10 === this.length && 10 === e.length ? E(this, e, t) : r < 63 ? g(this, e, t) : r < 1024 ? v(this, e, t) : b(this, e, t);
        }),
        (y.prototype.makeRBT = function (e) {
            for (var t = Array(e), n = o.prototype._countBits(e) - 1, r = 0; r < e; r++) t[r] = this.revBin(r, n, e);
            return t;
        }),
        (y.prototype.revBin = function (e, t, n) {
            if (0 === e || e === n - 1) return e;
            for (var r = 0, i = 0; i < t; i++) (r |= (1 & e) << (t - i - 1)), (e >>= 1);
            return r;
        }),
        (y.prototype.permute = function (e, t, n, r, i, o) {
            for (var a = 0; a < o; a++) (r[a] = t[e[a]]), (i[a] = n[e[a]]);
        }),
        (y.prototype.transform = function (e, t, n, r, i, o) {
            this.permute(o, e, t, n, r, i);
            for (var a = 1; a < i; a <<= 1)
                for (var s = a << 1, l = Math.cos((2 * Math.PI) / s), c = Math.sin((2 * Math.PI) / s), u = 0; u < i; u += s)
                    for (var d = l, f = c, p = 0; p < a; p++) {
                        var _ = n[u + p],
                            h = r[u + p],
                            m = n[u + p + a],
                            g = r[u + p + a],
                            E = d * m - f * g;
                        (g = d * g + f * m), (m = E), (n[u + p] = _ + m), (r[u + p] = h + g), (n[u + p + a] = _ - m), (r[u + p + a] = h - g), p !== s && ((E = l * d - c * f), (f = l * f + c * d), (d = E));
                    }
        }),
        (y.prototype.guessLen13b = function (e, t) {
            var n = 1 | Math.max(t, e),
                r = 1 & n,
                i = 0;
            for (n = (n / 2) | 0; n; n >>>= 1) i++;
            return 1 << (i + 1 + r);
        }),
        (y.prototype.conjugate = function (e, t, n) {
            if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                    var i = e[r];
                    (e[r] = e[n - r - 1]), (e[n - r - 1] = i), (i = t[r]), (t[r] = -t[n - r - 1]), (t[n - r - 1] = -i);
                }
        }),
        (y.prototype.normalize13b = function (e, t) {
            for (var n = 0, r = 0; r < t / 2; r++) {
                var i = 8192 * Math.round(e[2 * r + 1] / t) + Math.round(e[2 * r] / t) + n;
                (e[r] = 67108863 & i), (n = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return e;
        }),
        (y.prototype.convert13b = function (e, t, n, i) {
            for (var o = 0, a = 0; a < t; a++) (o += 0 | e[a]), (n[2 * a] = 8191 & o), (o >>>= 13), (n[2 * a + 1] = 8191 & o), (o >>>= 13);
            for (a = 2 * t; a < i; ++a) n[a] = 0;
            r(0 === o), r((-8192 & o) == 0);
        }),
        (y.prototype.stub = function (e) {
            for (var t = Array(e), n = 0; n < e; n++) t[n] = 0;
            return t;
        }),
        (y.prototype.mulp = function (e, t, n) {
            var r = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(r),
                o = this.stub(r),
                a = Array(r),
                s = Array(r),
                l = Array(r),
                c = Array(r),
                u = Array(r),
                d = Array(r),
                f = n.words;
            (f.length = r), this.convert13b(e.words, e.length, a, r), this.convert13b(t.words, t.length, c, r), this.transform(a, o, s, l, r, i), this.transform(c, o, u, d, r, i);
            for (var p = 0; p < r; p++) {
                var _ = s[p] * u[p] - l[p] * d[p];
                (l[p] = s[p] * d[p] + l[p] * u[p]), (s[p] = _);
            }
            return this.conjugate(s, l, r), this.transform(s, l, f, o, r, i), this.conjugate(f, o, r), this.normalize13b(f, r), (n.negative = e.negative ^ t.negative), (n.length = e.length + t.length), n._strip();
        }),
        (o.prototype.mul = function (e) {
            var t = new o(null);
            return (t.words = Array(this.length + e.length)), this.mulTo(e, t);
        }),
        (o.prototype.mulf = function (e) {
            var t = new o(null);
            return (t.words = Array(this.length + e.length)), b(this, e, t);
        }),
        (o.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
        }),
        (o.prototype.imuln = function (e) {
            var t = e < 0;
            t && (e = -e), r('number' == typeof e), r(e < 67108864);
            for (var n = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * e,
                    a = (67108863 & o) + (67108863 & n);
                (n >>= 26), (n += ((o / 67108864) | 0) + (a >>> 26)), (this.words[i] = 67108863 & a);
            }
            return 0 !== n && ((this.words[i] = n), this.length++), t ? this.ineg() : this;
        }),
        (o.prototype.muln = function (e) {
            return this.clone().imuln(e);
        }),
        (o.prototype.sqr = function () {
            return this.mul(this);
        }),
        (o.prototype.isqr = function () {
            return this.imul(this.clone());
        }),
        (o.prototype.pow = function (e) {
            var t = m(e);
            if (0 === t.length) return new o(1);
            for (var n = this, r = 0; r < t.length && 0 === t[r]; r++, n = n.sqr());
            if (++r < t.length) for (var i = n.sqr(); r < t.length; r++, i = i.sqr()) 0 !== t[r] && (n = n.mul(i));
            return n;
        }),
        (o.prototype.iushln = function (e) {
            r('number' == typeof e && e >= 0);
            var t,
                n = e % 26,
                i = (e - n) / 26,
                o = (67108863 >>> (26 - n)) << (26 - n);
            if (0 !== n) {
                var a = 0;
                for (t = 0; t < this.length; t++) {
                    var s = this.words[t] & o,
                        l = ((0 | this.words[t]) - s) << n;
                    (this.words[t] = l | a), (a = s >>> (26 - n));
                }
                a && ((this.words[t] = a), this.length++);
            }
            if (0 !== i) {
                for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                for (t = 0; t < i; t++) this.words[t] = 0;
                this.length += i;
            }
            return this._strip();
        }),
        (o.prototype.ishln = function (e) {
            return r(0 === this.negative), this.iushln(e);
        }),
        (o.prototype.iushrn = function (e, t, n) {
            r('number' == typeof e && e >= 0), (i = t ? (t - (t % 26)) / 26 : 0);
            var i,
                o = e % 26,
                a = Math.min((e - o) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> o) << o),
                l = n;
            if (((i -= a), (i = Math.max(0, i)), l)) {
                for (var c = 0; c < a; c++) l.words[c] = this.words[c];
                l.length = a;
            }
            if (0 === a);
            else if (this.length > a) for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (c = this.length - 1; c >= 0 && (0 !== u || c >= i); c--) {
                var d = 0 | this.words[c];
                (this.words[c] = (u << (26 - o)) | (d >>> o)), (u = d & s);
            }
            return l && 0 !== u && (l.words[l.length++] = u), 0 === this.length && ((this.words[0] = 0), (this.length = 1)), this._strip();
        }),
        (o.prototype.ishrn = function (e, t, n) {
            return r(0 === this.negative), this.iushrn(e, t, n);
        }),
        (o.prototype.shln = function (e) {
            return this.clone().ishln(e);
        }),
        (o.prototype.ushln = function (e) {
            return this.clone().iushln(e);
        }),
        (o.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
        }),
        (o.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
        }),
        (o.prototype.testn = function (e) {
            r('number' == typeof e && e >= 0);
            var t = e % 26,
                n = (e - t) / 26,
                i = 1 << t;
            return !(this.length <= n) && !!(this.words[n] & i);
        }),
        (o.prototype.imaskn = function (e) {
            r('number' == typeof e && e >= 0);
            var t = e % 26,
                n = (e - t) / 26;
            if ((r(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= n)) return this;
            if ((0 !== t && n++, (this.length = Math.min(n, this.length)), 0 !== t)) {
                var i = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= i;
            }
            return this._strip();
        }),
        (o.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
        }),
        (o.prototype.iaddn = function (e) {
            return (r('number' == typeof e), r(e < 67108864), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= e ? ((this.words[0] = e - (0 | this.words[0])), (this.negative = 0)) : ((this.negative = 0), this.isubn(e), (this.negative = 1)), this) : this._iaddn(e);
        }),
        (o.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) (this.words[t] -= 67108864), t === this.length - 1 ? (this.words[t + 1] = 1) : this.words[t + 1]++;
            return (this.length = Math.max(this.length, t + 1)), this;
        }),
        (o.prototype.isubn = function (e) {
            if ((r('number' == typeof e), r(e < 67108864), e < 0)) return this.iaddn(-e);
            if (0 !== this.negative) return (this.negative = 0), this.iaddn(e), (this.negative = 1), this;
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0)) (this.words[0] = -this.words[0]), (this.negative = 1);
            else for (var t = 0; t < this.length && this.words[t] < 0; t++) (this.words[t] += 67108864), (this.words[t + 1] -= 1);
            return this._strip();
        }),
        (o.prototype.addn = function (e) {
            return this.clone().iaddn(e);
        }),
        (o.prototype.subn = function (e) {
            return this.clone().isubn(e);
        }),
        (o.prototype.iabs = function () {
            return (this.negative = 0), this;
        }),
        (o.prototype.abs = function () {
            return this.clone().iabs();
        }),
        (o.prototype._ishlnsubmul = function (e, t, n) {
            var i,
                o,
                a = e.length + n;
            this._expand(a);
            var s = 0;
            for (i = 0; i < e.length; i++) {
                o = (0 | this.words[i + n]) + s;
                var l = (0 | e.words[i]) * t;
                (o -= 67108863 & l), (s = (o >> 26) - ((l / 67108864) | 0)), (this.words[i + n] = 67108863 & o);
            }
            for (; i < this.length - n; i++) (s = (o = (0 | this.words[i + n]) + s) >> 26), (this.words[i + n] = 67108863 & o);
            if (0 === s) return this._strip();
            for (r(-1 === s), s = 0, i = 0; i < this.length; i++) (s = (o = -(0 | this.words[i]) + s) >> 26), (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
        }),
        (o.prototype._wordDiv = function (e, t) {
            var n,
                r = this.length - e.length,
                i = this.clone(),
                a = e,
                s = 0 | a.words[a.length - 1];
            0 != (r = 26 - this._countBits(s)) && ((a = a.ushln(r)), i.iushln(r), (s = 0 | a.words[a.length - 1]));
            var l = i.length - a.length;
            if ('mod' !== t) {
                ((n = new o(null)).length = l + 1), (n.words = Array(n.length));
                for (var c = 0; c < n.length; c++) n.words[c] = 0;
            }
            var u = i.clone()._ishlnsubmul(a, 1, l);
            0 === u.negative && ((i = u), n && (n.words[l] = 1));
            for (var d = l - 1; d >= 0; d--) {
                var f = (0 | i.words[a.length + d]) * 67108864 + (0 | i.words[a.length + d - 1]);
                for (f = Math.min((f / s) | 0, 67108863), i._ishlnsubmul(a, f, d); 0 !== i.negative; ) f--, (i.negative = 0), i._ishlnsubmul(a, 1, d), i.isZero() || (i.negative ^= 1);
                n && (n.words[d] = f);
            }
            return (
                n && n._strip(),
                i._strip(),
                'div' !== t && 0 !== r && i.iushrn(r),
                {
                    div: n || null,
                    mod: i
                }
            );
        }),
        (o.prototype.divmod = function (e, t, n) {
            var i, a, s;
            return (r(!e.isZero()), this.isZero())
                ? {
                      div: new o(0),
                      mod: new o(0)
                  }
                : 0 !== this.negative && 0 === e.negative
                  ? ((s = this.neg().divmod(e, t)),
                    'mod' !== t && (i = s.div.neg()),
                    'div' !== t && ((a = s.mod.neg()), n && 0 !== a.negative && a.iadd(e)),
                    {
                        div: i,
                        mod: a
                    })
                  : 0 === this.negative && 0 !== e.negative
                    ? ((s = this.divmod(e.neg(), t)),
                      'mod' !== t && (i = s.div.neg()),
                      {
                          div: i,
                          mod: s.mod
                      })
                    : (this.negative & e.negative) != 0
                      ? ((s = this.neg().divmod(e.neg(), t)),
                        'div' !== t && ((a = s.mod.neg()), n && 0 !== a.negative && a.isub(e)),
                        {
                            div: s.div,
                            mod: a
                        })
                      : e.length > this.length || 0 > this.cmp(e)
                        ? {
                              div: new o(0),
                              mod: this
                          }
                        : 1 === e.length
                          ? 'div' === t
                              ? {
                                    div: this.divn(e.words[0]),
                                    mod: null
                                }
                              : 'mod' === t
                                ? {
                                      div: null,
                                      mod: new o(this.modrn(e.words[0]))
                                  }
                                : {
                                      div: this.divn(e.words[0]),
                                      mod: new o(this.modrn(e.words[0]))
                                  }
                          : this._wordDiv(e, t);
        }),
        (o.prototype.div = function (e) {
            return this.divmod(e, 'div', !1).div;
        }),
        (o.prototype.mod = function (e) {
            return this.divmod(e, 'mod', !1).mod;
        }),
        (o.prototype.umod = function (e) {
            return this.divmod(e, 'mod', !0).mod;
        }),
        (o.prototype.divRound = function (e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                r = e.ushrn(1),
                i = e.andln(1),
                o = n.cmp(r);
            return o < 0 || (1 === i && 0 === o) ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
        }),
        (o.prototype.modrn = function (e) {
            var t = e < 0;
            t && (e = -e), r(e <= 67108863);
            for (var n = 67108864 % e, i = 0, o = this.length - 1; o >= 0; o--) i = (n * i + (0 | this.words[o])) % e;
            return t ? -i : i;
        }),
        (o.prototype.modn = function (e) {
            return this.modrn(e);
        }),
        (o.prototype.idivn = function (e) {
            var t = e < 0;
            t && (e = -e), r(e <= 67108863);
            for (var n = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * n;
                (this.words[i] = (o / e) | 0), (n = o % e);
            }
            return this._strip(), t ? this.ineg() : this;
        }),
        (o.prototype.divn = function (e) {
            return this.clone().idivn(e);
        }),
        (o.prototype.egcd = function (e) {
            r(0 === e.negative), r(!e.isZero());
            var t = this,
                n = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (var i = new o(1), a = new o(0), s = new o(0), l = new o(1), c = 0; t.isEven() && n.isEven(); ) t.iushrn(1), n.iushrn(1), ++c;
            for (var u = n.clone(), d = t.clone(); !t.isZero(); ) {
                for (var f = 0, p = 1; (t.words[0] & p) == 0 && f < 26; ++f, p <<= 1);
                if (f > 0) for (t.iushrn(f); f-- > 0; ) (i.isOdd() || a.isOdd()) && (i.iadd(u), a.isub(d)), i.iushrn(1), a.iushrn(1);
                for (var _ = 0, h = 1; (n.words[0] & h) == 0 && _ < 26; ++_, h <<= 1);
                if (_ > 0) for (n.iushrn(_); _-- > 0; ) (s.isOdd() || l.isOdd()) && (s.iadd(u), l.isub(d)), s.iushrn(1), l.iushrn(1);
                t.cmp(n) >= 0 ? (t.isub(n), i.isub(s), a.isub(l)) : (n.isub(t), s.isub(i), l.isub(a));
            }
            return {
                a: s,
                b: l,
                gcd: n.iushln(c)
            };
        }),
        (o.prototype._invmp = function (e) {
            r(0 === e.negative), r(!e.isZero());
            var t,
                n = this,
                i = e.clone();
            n = 0 !== n.negative ? n.umod(e) : n.clone();
            for (var a = new o(1), s = new o(0), l = i.clone(); n.cmpn(1) > 0 && i.cmpn(1) > 0; ) {
                for (var c = 0, u = 1; (n.words[0] & u) == 0 && c < 26; ++c, u <<= 1);
                if (c > 0) for (n.iushrn(c); c-- > 0; ) a.isOdd() && a.iadd(l), a.iushrn(1);
                for (var d = 0, f = 1; (i.words[0] & f) == 0 && d < 26; ++d, f <<= 1);
                if (d > 0) for (i.iushrn(d); d-- > 0; ) s.isOdd() && s.iadd(l), s.iushrn(1);
                n.cmp(i) >= 0 ? (n.isub(i), a.isub(s)) : (i.isub(n), s.isub(a));
            }
            return 0 > (t = 0 === n.cmpn(1) ? a : s).cmpn(0) && t.iadd(e), t;
        }),
        (o.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
                n = e.clone();
            (t.negative = 0), (n.negative = 0);
            for (var r = 0; t.isEven() && n.isEven(); r++) t.iushrn(1), n.iushrn(1);
            for (;;) {
                for (; t.isEven(); ) t.iushrn(1);
                for (; n.isEven(); ) n.iushrn(1);
                var i = t.cmp(n);
                if (i < 0) {
                    var o = t;
                    (t = n), (n = o);
                } else if (0 === i || 0 === n.cmpn(1)) break;
                t.isub(n);
            }
            return n.iushln(r);
        }),
        (o.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
        }),
        (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
        }),
        (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
        }),
        (o.prototype.andln = function (e) {
            return this.words[0] & e;
        }),
        (o.prototype.bincn = function (e) {
            r('number' == typeof e);
            var t = e % 26,
                n = (e - t) / 26,
                i = 1 << t;
            if (this.length <= n) return this._expand(n + 1), (this.words[n] |= i), this;
            for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                var s = 0 | this.words[a];
                (s += o), (o = s >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
        }),
        (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
        }),
        (o.prototype.cmpn = function (e) {
            var t,
                n = e < 0;
            if (0 !== this.negative && !n) return -1;
            if (0 === this.negative && n) return 1;
            if ((this._strip(), this.length > 1)) t = 1;
            else {
                n && (e = -e), r(e <= 67108863, 'Number is too big');
                var i = 0 | this.words[0];
                t = i === e ? 0 : i < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
        }),
        (o.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
        }),
        (o.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                    i = 0 | e.words[n];
                if (r !== i) {
                    r < i ? (t = -1) : r > i && (t = 1);
                    break;
                }
            }
            return t;
        }),
        (o.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
        }),
        (o.prototype.gt = function (e) {
            return 1 === this.cmp(e);
        }),
        (o.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
        }),
        (o.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
        }),
        (o.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
        }),
        (o.prototype.lt = function (e) {
            return -1 === this.cmp(e);
        }),
        (o.prototype.lten = function (e) {
            return 0 >= this.cmpn(e);
        }),
        (o.prototype.lte = function (e) {
            return 0 >= this.cmp(e);
        }),
        (o.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
        }),
        (o.prototype.eq = function (e) {
            return 0 === this.cmp(e);
        }),
        (o.red = function (e) {
            return new C(e);
        }),
        (o.prototype.toRed = function (e) {
            return r(!this.red, 'Already a number in reduction context'), r(0 === this.negative, 'red works only with positives'), e.convertTo(this)._forceRed(e);
        }),
        (o.prototype.fromRed = function () {
            return r(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
        }),
        (o.prototype._forceRed = function (e) {
            return (this.red = e), this;
        }),
        (o.prototype.forceRed = function (e) {
            return r(!this.red, 'Already a number in reduction context'), this._forceRed(e);
        }),
        (o.prototype.redAdd = function (e) {
            return r(this.red, 'redAdd works only with red numbers'), this.red.add(this, e);
        }),
        (o.prototype.redIAdd = function (e) {
            return r(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, e);
        }),
        (o.prototype.redSub = function (e) {
            return r(this.red, 'redSub works only with red numbers'), this.red.sub(this, e);
        }),
        (o.prototype.redISub = function (e) {
            return r(this.red, 'redISub works only with red numbers'), this.red.isub(this, e);
        }),
        (o.prototype.redShl = function (e) {
            return r(this.red, 'redShl works only with red numbers'), this.red.shl(this, e);
        }),
        (o.prototype.redMul = function (e) {
            return r(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.mul(this, e);
        }),
        (o.prototype.redIMul = function (e) {
            return r(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.imul(this, e);
        }),
        (o.prototype.redSqr = function () {
            return r(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
        }),
        (o.prototype.redISqr = function () {
            return r(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
        }),
        (o.prototype.redSqrt = function () {
            return r(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
        }),
        (o.prototype.redInvm = function () {
            return r(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
        }),
        (o.prototype.redNeg = function () {
            return r(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
        }),
        (o.prototype.redPow = function (e) {
            return r(this.red && !e.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, e);
        });
    var O = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    function S(e, t) {
        (this.name = e), (this.p = new o(t, 16)), (this.n = this.p.bitLength()), (this.k = new o(1).iushln(this.n).isub(this.p)), (this.tmp = this._tmp());
    }
    function I() {
        S.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    function T() {
        S.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    function N() {
        S.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    function A() {
        S.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    function C(e) {
        if ('string' == typeof e) {
            var t = o._prime(e);
            (this.m = t.p), (this.prime = t);
        } else r(e.gtn(1), 'modulus must be greater than 1'), (this.m = e), (this.prime = null);
    }
    function R(e) {
        C.call(this, e), (this.shift = this.m.bitLength()), this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)), (this.r = new o(1).iushln(this.shift)), (this.r2 = this.imod(this.r.sqr())), (this.rinv = this.r._invmp(this.m)), (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)), (this.minv = this.minv.umod(this.r)), (this.minv = this.r.sub(this.minv));
    }
    (S.prototype._tmp = function () {
        var e = new o(null);
        return (e.words = Array(Math.ceil(this.n / 13))), e;
    }),
        (S.prototype.ireduce = function (e) {
            var t,
                n = e;
            do this.split(n, this.tmp), (t = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength());
            while (t > this.n);
            var r = t < this.n ? -1 : n.ucmp(this.p);
            return 0 === r ? ((n.words[0] = 0), (n.length = 1)) : r > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n;
        }),
        (S.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t);
        }),
        (S.prototype.imulK = function (e) {
            return e.imul(this.k);
        }),
        i(I, S),
        (I.prototype.split = function (e, t) {
            for (var n = 4194303, r = Math.min(e.length, 9), i = 0; i < r; i++) t.words[i] = e.words[i];
            if (((t.length = r), e.length <= 9)) {
                (e.words[0] = 0), (e.length = 1);
                return;
            }
            var o = e.words[9];
            for (i = 10, t.words[t.length++] = o & n; i < e.length; i++) {
                var a = 0 | e.words[i];
                (e.words[i - 10] = ((a & n) << 4) | (o >>> 22)), (o = a);
            }
            (o >>>= 22), (e.words[i - 10] = o), 0 === o && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
        }),
        (I.prototype.imulK = function (e) {
            (e.words[e.length] = 0), (e.words[e.length + 1] = 0), (e.length += 2);
            for (var t = 0, n = 0; n < e.length; n++) {
                var r = 0 | e.words[n];
                (t += 977 * r), (e.words[n] = 67108863 & t), (t = 64 * r + ((t / 67108864) | 0));
            }
            return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
        }),
        i(T, S),
        i(N, S),
        i(A, S),
        (A.prototype.imulK = function (e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                var r = (0 | e.words[n]) * 19 + t,
                    i = 67108863 & r;
                (r >>>= 26), (e.words[n] = i), (t = r);
            }
            return 0 !== t && (e.words[e.length++] = t), e;
        }),
        (o._prime = function (e) {
            var t;
            if (O[e]) return O[e];
            if ('k256' === e) t = new I();
            else if ('p224' === e) t = new T();
            else if ('p192' === e) t = new N();
            else if ('p25519' === e) t = new A();
            else throw Error('Unknown prime ' + e);
            return (O[e] = t), t;
        }),
        (C.prototype._verify1 = function (e) {
            r(0 === e.negative, 'red works only with positives'), r(e.red, 'red works only with red numbers');
        }),
        (C.prototype._verify2 = function (e, t) {
            r((e.negative | t.negative) == 0, 'red works only with positives'), r(e.red && e.red === t.red, 'red works only with red numbers');
        }),
        (C.prototype.imod = function (e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : (c(e, e.umod(this.m)._forceRed(this)), e);
        }),
        (C.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
        }),
        (C.prototype.add = function (e, t) {
            this._verify2(e, t);
            var n = e.add(t);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
        }),
        (C.prototype.iadd = function (e, t) {
            this._verify2(e, t);
            var n = e.iadd(t);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n;
        }),
        (C.prototype.sub = function (e, t) {
            this._verify2(e, t);
            var n = e.sub(t);
            return 0 > n.cmpn(0) && n.iadd(this.m), n._forceRed(this);
        }),
        (C.prototype.isub = function (e, t) {
            this._verify2(e, t);
            var n = e.isub(t);
            return 0 > n.cmpn(0) && n.iadd(this.m), n;
        }),
        (C.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
        }),
        (C.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
        }),
        (C.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
        }),
        (C.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
        }),
        (C.prototype.sqr = function (e) {
            return this.mul(e, e);
        }),
        (C.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if ((r(t % 2 == 1), 3 === t)) {
                var n = this.m.add(new o(1)).iushrn(2);
                return this.pow(e, n);
            }
            for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1); ) a++, i.iushrn(1);
            r(!i.isZero());
            var s = new o(1).toRed(this),
                l = s.redNeg(),
                c = this.m.subn(1).iushrn(1),
                u = this.m.bitLength();
            for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, c).cmp(l); ) u.redIAdd(l);
            for (var d = this.pow(u, i), f = this.pow(e, i.addn(1).iushrn(1)), p = this.pow(e, i), _ = a; 0 !== p.cmp(s); ) {
                for (var h = p, m = 0; 0 !== h.cmp(s); m++) h = h.redSqr();
                r(m < _);
                var g = this.pow(d, new o(1).iushln(_ - m - 1));
                (f = f.redMul(g)), (d = g.redSqr()), (p = p.redMul(d)), (_ = m);
            }
            return f;
        }),
        (C.prototype.invm = function (e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative ? ((t.negative = 0), this.imod(t).redNeg()) : this.imod(t);
        }),
        (C.prototype.pow = function (e, t) {
            if (t.isZero()) return new o(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var n = 4,
                r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = e);
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
            var a = r[0],
                s = 0,
                l = 0,
                c = t.bitLength() % 26;
            for (0 === c && (c = 26), i = t.length - 1; i >= 0; i--) {
                for (var u = t.words[i], d = c - 1; d >= 0; d--) {
                    var f = (u >> d) & 1;
                    if ((a !== r[0] && (a = this.sqr(a)), 0 === f && 0 === s)) {
                        l = 0;
                        continue;
                    }
                    (s <<= 1), (s |= f), (++l === n || (0 === i && 0 === d)) && ((a = this.mul(a, r[s])), (l = 0), (s = 0));
                }
                c = 26;
            }
            return a;
        }),
        (C.prototype.convertTo = function (e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
        }),
        (C.prototype.convertFrom = function (e) {
            var t = e.clone();
            return (t.red = null), t;
        }),
        (o.mont = function (e) {
            return new R(e);
        }),
        i(R, C),
        (R.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
        }),
        (R.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv));
            return (t.red = null), t;
        }),
        (R.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero()) return (e.words[0] = 0), (e.length = 1), e;
            var n = e.imul(t),
                r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                o = i;
            return i.cmp(this.m) >= 0 ? (o = i.isub(this.m)) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this);
        }),
        (R.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
            var n = e.mul(t),
                r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                a = i;
            return i.cmp(this.m) >= 0 ? (a = i.isub(this.m)) : 0 > i.cmpn(0) && (a = i.iadd(this.m)), a._forceRed(this);
        }),
        (R.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
        });
})((e = n.nmd(e)), this);
