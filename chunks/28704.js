!(function (e, n) {
    function i(e, n) {
        if (!e) throw Error(n || 'Assertion failed');
    }
    function a(e, n) {
        e.super_ = n;
        var r = function () {};
        (r.prototype = n.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
    }
    function s(e, n, r) {
        if (s.isBN(e)) return e;
        (this.negative = 0), (this.words = null), (this.length = 0), (this.red = null), null !== e && (('le' === n || 'be' === n) && ((r = n), (n = 10)), this._init(e || 0, n || 10, r || 'be'));
    }
    'object' == typeof e ? (e.exports = s) : (n.BN = s), (s.BN = s), (s.wordSize = 26);
    try {
        f = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r(223686).Buffer;
    } catch (e) {}
    function o(e, n) {
        var r = e.charCodeAt(n);
        if (r >= 48 && r <= 57) return r - 48;
        if (r >= 65 && r <= 70) return r - 55;
        if (r >= 97 && r <= 102) return r - 87;
        else i(!1, 'Invalid character in ' + e);
    }
    function l(e, n, r) {
        var i = o(e, r);
        return r - 1 >= n && (i |= o(e, r - 1) << 4), i;
    }
    function u(e, n, r, a) {
        for (var s = 0, o = 0, l = Math.min(e.length, r), u = n; u < l; u++) {
            var c = e.charCodeAt(u) - 48;
            (s *= a), (o = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c), i(c >= 0 && o < a, 'Invalid character'), (s += o);
        }
        return s;
    }
    function c(e, n) {
        (e.words = n.words), (e.length = n.length), (e.negative = n.negative), (e.red = n.red);
    }
    if (
        ((s.isBN = function (e) {
            return e instanceof s || (null !== e && 'object' == typeof e && e.constructor.wordSize === s.wordSize && Array.isArray(e.words));
        }),
        (s.max = function (e, n) {
            return e.cmp(n) > 0 ? e : n;
        }),
        (s.min = function (e, n) {
            return 0 > e.cmp(n) ? e : n;
        }),
        (s.prototype._init = function (e, n, r) {
            if ('number' == typeof e) return this._initNumber(e, n, r);
            if ('object' == typeof e) return this._initArray(e, n, r);
            'hex' === n && (n = 16), i(n === (0 | n) && n >= 2 && n <= 36), (e = e.toString().replace(/\s+/g, ''));
            var a = 0;
            '-' === e[0] && (a++, (this.negative = 1)), a < e.length && (16 === n ? this._parseHex(e, a, r) : (this._parseBase(e, n, a), 'le' === r && this._initArray(this.toArray(), n, r)));
        }),
        (s.prototype._initNumber = function (e, n, r) {
            e < 0 && ((this.negative = 1), (e = -e)), e < 67108864 ? ((this.words = [67108863 & e]), (this.length = 1)) : e < 4503599627370496 ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]), (this.length = 2)) : (i(e < 9007199254740992), (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]), (this.length = 3)), 'le' === r && this._initArray(this.toArray(), n, r);
        }),
        (s.prototype._initArray = function (e, n, r) {
            if ((i('number' == typeof e.length), e.length <= 0)) return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)), (this.words = Array(this.length));
            for (var a, s, o = 0; o < this.length; o++) this.words[o] = 0;
            var l = 0;
            if ('be' === r) for (o = e.length - 1, a = 0; o >= 0; o -= 3) (s = e[o] | (e[o - 1] << 8) | (e[o - 2] << 16)), (this.words[a] |= (s << l) & 67108863), (this.words[a + 1] = (s >>> (26 - l)) & 67108863), (l += 24) >= 26 && ((l -= 26), a++);
            else if ('le' === r) for (o = 0, a = 0; o < e.length; o += 3) (s = e[o] | (e[o + 1] << 8) | (e[o + 2] << 16)), (this.words[a] |= (s << l) & 67108863), (this.words[a + 1] = (s >>> (26 - l)) & 67108863), (l += 24) >= 26 && ((l -= 26), a++);
            return this._strip();
        }),
        (s.prototype._parseHex = function (e, n, r) {
            (this.length = Math.ceil((e.length - n) / 6)), (this.words = Array(this.length));
            for (var i, a = 0; a < this.length; a++) this.words[a] = 0;
            var s = 0,
                o = 0;
            if ('be' === r) for (a = e.length - 1; a >= n; a -= 2) (i = l(e, n, a) << s), (this.words[o] |= 67108863 & i), s >= 18 ? ((s -= 18), (o += 1), (this.words[o] |= i >>> 26)) : (s += 8);
            else for (a = (e.length - n) % 2 == 0 ? n + 1 : n; a < e.length; a += 2) (i = l(e, n, a) << s), (this.words[o] |= 67108863 & i), s >= 18 ? ((s -= 18), (o += 1), (this.words[o] |= i >>> 26)) : (s += 8);
            this._strip();
        }),
        (s.prototype._parseBase = function (e, n, r) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, a = 1; a <= 67108863; a *= n) i++;
            i--, (a = (a / n) | 0);
            for (var s = e.length - r, o = s % i, l = Math.min(s, s - o) + r, c = 0, d = r; d < l; d += i) (c = u(e, d, d + i, n)), this.imuln(a), this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
            if (0 !== o) {
                var f = 1;
                for (c = u(e, d, e.length, n), d = 0; d < o; d++) f *= n;
                this.imuln(f), this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
            }
            this._strip();
        }),
        (s.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var n = 0; n < this.length; n++) e.words[n] = this.words[n];
            (e.length = this.length), (e.negative = this.negative), (e.red = this.red);
        }),
        (s.prototype._move = function (e) {
            c(e, this);
        }),
        (s.prototype.clone = function () {
            var e = new s(null);
            return this.copy(e), e;
        }),
        (s.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
        }),
        (s.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
            return this._normSign();
        }),
        (s.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }),
        'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
    )
        try {
            s.prototype[Symbol.for('nodejs.util.inspect.custom')] = d;
        } catch (e) {
            s.prototype.inspect = d;
        }
    else s.prototype.inspect = d;
    function d() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    var f,
        _ = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'],
        h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    (s.prototype.toString = function (e, n) {
        if (((n = 0 | n || 1), 16 === (e = e || 10) || 'hex' === e)) {
            r = '';
            for (var r, a = 0, s = 0, o = 0; o < this.length; o++) {
                var l = this.words[o],
                    u = (((l << a) | s) & 16777215).toString(16);
                (s = (l >>> (24 - a)) & 16777215), (a += 2) >= 26 && ((a -= 26), o--), (r = 0 !== s || o !== this.length - 1 ? _[6 - u.length] + u + r : u + r);
            }
            for (0 !== s && (r = s.toString(16) + r); r.length % n != 0; ) r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
        }
        if (e === (0 | e) && e >= 2 && e <= 36) {
            var c = h[e],
                d = p[e];
            r = '';
            var f = this.clone();
            for (f.negative = 0; !f.isZero(); ) {
                var m = f.modrn(d).toString(e);
                r = (f = f.idivn(d)).isZero() ? m + r : _[c - m.length] + m + r;
            }
            for (this.isZero() && (r = '0' + r); r.length % n != 0; ) r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
        }
        i(!1, 'Base should be between 2 and 36');
    }),
        (s.prototype.toNumber = function () {
            var e = this.words[0];
            return 2 === this.length ? (e += 67108864 * this.words[1]) : 3 === this.length && 1 === this.words[2] ? (e += 4503599627370496 + 67108864 * this.words[1]) : this.length > 2 && i(!1, 'Number can only safely store up to 53 bits'), 0 !== this.negative ? -e : e;
        }),
        (s.prototype.toJSON = function () {
            return this.toString(16, 2);
        }),
        f &&
            (s.prototype.toBuffer = function (e, n) {
                return this.toArrayLike(f, e, n);
            }),
        (s.prototype.toArray = function (e, n) {
            return this.toArrayLike(Array, e, n);
        });
    var m = function (e, n) {
        return e.allocUnsafe ? e.allocUnsafe(n) : new e(n);
    };
    function g(e) {
        for (var n = Array(e.bitLength()), r = 0; r < n.length; r++) {
            var i = (r / 26) | 0,
                a = r % 26;
            n[r] = (e.words[i] >>> a) & 1;
        }
        return n;
    }
    function E(e, n, r) {
        r.negative = n.negative ^ e.negative;
        var i = (e.length + n.length) | 0;
        (r.length = i), (i = (i - 1) | 0);
        var a = 0 | e.words[0],
            s = 0 | n.words[0],
            o = a * s,
            l = 67108863 & o,
            u = (o / 67108864) | 0;
        r.words[0] = l;
        for (var c = 1; c < i; c++) {
            for (var d = u >>> 26, f = 67108863 & u, _ = Math.min(c, n.length - 1), h = Math.max(0, c - e.length + 1); h <= _; h++) {
                var p = (c - h) | 0;
                (a = 0 | e.words[p]), (d += ((o = a * (s = 0 | n.words[h]) + f) / 67108864) | 0), (f = 67108863 & o);
            }
            (r.words[c] = 0 | f), (u = 0 | d);
        }
        return 0 !== u ? (r.words[c] = 0 | u) : r.length--, r._strip();
    }
    (s.prototype.toArrayLike = function (e, n, r) {
        this._strip();
        var a = this.byteLength(),
            s = r || Math.max(1, a);
        i(a <= s, 'byte array longer than desired length'), i(s > 0, 'Requested array length <= 0');
        var o = m(e, s);
        return this['_toArrayLike' + ('le' === n ? 'LE' : 'BE')](o, a), o;
    }),
        (s.prototype._toArrayLikeLE = function (e, n) {
            for (var r = 0, i = 0, a = 0, s = 0; a < this.length; a++) {
                var o = (this.words[a] << s) | i;
                (e[r++] = 255 & o), r < e.length && (e[r++] = (o >> 8) & 255), r < e.length && (e[r++] = (o >> 16) & 255), 6 === s ? (r < e.length && (e[r++] = (o >> 24) & 255), (i = 0), (s = 0)) : ((i = o >>> 24), (s += 2));
            }
            if (r < e.length) for (e[r++] = i; r < e.length; ) e[r++] = 0;
        }),
        (s.prototype._toArrayLikeBE = function (e, n) {
            for (var r = e.length - 1, i = 0, a = 0, s = 0; a < this.length; a++) {
                var o = (this.words[a] << s) | i;
                (e[r--] = 255 & o), r >= 0 && (e[r--] = (o >> 8) & 255), r >= 0 && (e[r--] = (o >> 16) & 255), 6 === s ? (r >= 0 && (e[r--] = (o >> 24) & 255), (i = 0), (s = 0)) : ((i = o >>> 24), (s += 2));
            }
            if (r >= 0) for (e[r--] = i; r >= 0; ) e[r--] = 0;
        }),
        Math.clz32
            ? (s.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
              })
            : (s.prototype._countBits = function (e) {
                  var n = e,
                      r = 0;
                  return n >= 4096 && ((r += 13), (n >>>= 13)), n >= 64 && ((r += 7), (n >>>= 7)), n >= 8 && ((r += 4), (n >>>= 4)), n >= 2 && ((r += 2), (n >>>= 2)), r + n;
              }),
        (s.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var n = e,
                r = 0;
            return (8191 & n) == 0 && ((r += 13), (n >>>= 13)), (127 & n) == 0 && ((r += 7), (n >>>= 7)), (15 & n) == 0 && ((r += 4), (n >>>= 4)), (3 & n) == 0 && ((r += 2), (n >>>= 2)), (1 & n) == 0 && r++, r;
        }),
        (s.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
                n = this._countBits(e);
            return (this.length - 1) * 26 + n;
        }),
        (s.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, n = 0; n < this.length; n++) {
                var r = this._zeroBits(this.words[n]);
                if (((e += r), 26 !== r)) break;
            }
            return e;
        }),
        (s.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
        }),
        (s.prototype.toTwos = function (e) {
            return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
        }),
        (s.prototype.fromTwos = function (e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
        }),
        (s.prototype.isNeg = function () {
            return 0 !== this.negative;
        }),
        (s.prototype.neg = function () {
            return this.clone().ineg();
        }),
        (s.prototype.ineg = function () {
            return !this.isZero() && (this.negative ^= 1), this;
        }),
        (s.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] | e.words[n];
            return this._strip();
        }),
        (s.prototype.ior = function (e) {
            return i((this.negative | e.negative) == 0), this.iuor(e);
        }),
        (s.prototype.or = function (e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
        }),
        (s.prototype.uor = function (e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
        }),
        (s.prototype.iuand = function (e) {
            var n;
            n = this.length > e.length ? e : this;
            for (var r = 0; r < n.length; r++) this.words[r] = this.words[r] & e.words[r];
            return (this.length = n.length), this._strip();
        }),
        (s.prototype.iand = function (e) {
            return i((this.negative | e.negative) == 0), this.iuand(e);
        }),
        (s.prototype.and = function (e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
        }),
        (s.prototype.uand = function (e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
        }),
        (s.prototype.iuxor = function (e) {
            this.length > e.length ? ((n = this), (r = e)) : ((n = e), (r = this));
            for (var n, r, i = 0; i < r.length; i++) this.words[i] = n.words[i] ^ r.words[i];
            if (this !== n) for (; i < n.length; i++) this.words[i] = n.words[i];
            return (this.length = n.length), this._strip();
        }),
        (s.prototype.ixor = function (e) {
            return i((this.negative | e.negative) == 0), this.iuxor(e);
        }),
        (s.prototype.xor = function (e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
        }),
        (s.prototype.uxor = function (e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
        }),
        (s.prototype.inotn = function (e) {
            i('number' == typeof e && e >= 0);
            var n = 0 | Math.ceil(e / 26),
                r = e % 26;
            this._expand(n), r > 0 && n--;
            for (var a = 0; a < n; a++) this.words[a] = 67108863 & ~this.words[a];
            return r > 0 && (this.words[a] = ~this.words[a] & (67108863 >> (26 - r))), this._strip();
        }),
        (s.prototype.notn = function (e) {
            return this.clone().inotn(e);
        }),
        (s.prototype.setn = function (e, n) {
            i('number' == typeof e && e >= 0);
            var r = (e / 26) | 0,
                a = e % 26;
            return this._expand(r + 1), n ? (this.words[r] = this.words[r] | (1 << a)) : (this.words[r] = this.words[r] & ~(1 << a)), this._strip();
        }),
        (s.prototype.iadd = function (e) {
            if (0 !== this.negative && 0 === e.negative) return (this.negative = 0), (n = this.isub(e)), (this.negative ^= 1), this._normSign();
            if (0 === this.negative && 0 !== e.negative) return (e.negative = 0), (n = this.isub(e)), (e.negative = 1), n._normSign();
            this.length > e.length ? ((r = this), (i = e)) : ((r = e), (i = this));
            for (var n, r, i, a = 0, s = 0; s < i.length; s++) (n = (0 | r.words[s]) + (0 | i.words[s]) + a), (this.words[s] = 67108863 & n), (a = n >>> 26);
            for (; 0 !== a && s < r.length; s++) (n = (0 | r.words[s]) + a), (this.words[s] = 67108863 & n), (a = n >>> 26);
            if (((this.length = r.length), 0 !== a)) (this.words[this.length] = a), this.length++;
            else if (r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
            return this;
        }),
        (s.prototype.add = function (e) {
            var n;
            return 0 !== e.negative && 0 === this.negative ? ((e.negative = 0), (n = this.sub(e)), (e.negative ^= 1), n) : 0 === e.negative && 0 !== this.negative ? ((this.negative = 0), (n = e.sub(this)), (this.negative = 1), n) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
        }),
        (s.prototype.isub = function (e) {
            if (0 !== e.negative) {
                e.negative = 0;
                var n,
                    r,
                    i = this.iadd(e);
                return (e.negative = 1), i._normSign();
            }
            if (0 !== this.negative) return (this.negative = 0), this.iadd(e), (this.negative = 1), this._normSign();
            var a = this.cmp(e);
            if (0 === a) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
            a > 0 ? ((n = this), (r = e)) : ((n = e), (r = this));
            for (var s = 0, o = 0; o < r.length; o++) (s = (i = (0 | n.words[o]) - (0 | r.words[o]) + s) >> 26), (this.words[o] = 67108863 & i);
            for (; 0 !== s && o < n.length; o++) (s = (i = (0 | n.words[o]) + s) >> 26), (this.words[o] = 67108863 & i);
            if (0 === s && o < n.length && n !== this) for (; o < n.length; o++) this.words[o] = n.words[o];
            return (this.length = Math.max(this.length, o)), n !== this && (this.negative = 1), this._strip();
        }),
        (s.prototype.sub = function (e) {
            return this.clone().isub(e);
        });
    var v = function (e, n, r) {
        var i,
            a,
            s,
            o = e.words,
            l = n.words,
            u = r.words,
            c = 0,
            d = 0 | o[0],
            f = 8191 & d,
            _ = d >>> 13,
            h = 0 | o[1],
            p = 8191 & h,
            m = h >>> 13,
            g = 0 | o[2],
            E = 8191 & g,
            v = g >>> 13,
            I = 0 | o[3],
            T = 8191 & I,
            b = I >>> 13,
            y = 0 | o[4],
            S = 8191 & y,
            A = y >>> 13,
            N = 0 | o[5],
            C = 8191 & N,
            R = N >>> 13,
            O = 0 | o[6],
            D = 8191 & O,
            L = O >>> 13,
            x = 0 | o[7],
            w = 8191 & x,
            P = x >>> 13,
            M = 0 | o[8],
            k = 8191 & M,
            U = M >>> 13,
            B = 0 | o[9],
            G = 8191 & B,
            Z = B >>> 13,
            F = 0 | l[0],
            V = 8191 & F,
            j = F >>> 13,
            H = 0 | l[1],
            Y = 8191 & H,
            W = H >>> 13,
            K = 0 | l[2],
            z = 8191 & K,
            q = K >>> 13,
            Q = 0 | l[3],
            X = 8191 & Q,
            J = Q >>> 13,
            $ = 0 | l[4],
            ee = 8191 & $,
            et = $ >>> 13,
            en = 0 | l[5],
            er = 8191 & en,
            ei = en >>> 13,
            ea = 0 | l[6],
            es = 8191 & ea,
            eo = ea >>> 13,
            el = 0 | l[7],
            eu = 8191 & el,
            ec = el >>> 13,
            ed = 0 | l[8],
            ef = 8191 & ed,
            e_ = ed >>> 13,
            eh = 0 | l[9],
            ep = 8191 & eh,
            em = eh >>> 13;
        (r.negative = e.negative ^ n.negative), (r.length = 19), (i = Math.imul(f, V)), (a = ((a = Math.imul(f, j)) + Math.imul(_, V)) | 0);
        var eg = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = Math.imul(_, j)) + (a >>> 13)) | 0) + (eg >>> 26)) | 0), (eg &= 67108863), (i = Math.imul(p, V)), (a = ((a = Math.imul(p, j)) + Math.imul(m, V)) | 0), (s = Math.imul(m, j)), (i = (i + Math.imul(f, Y)) | 0), (a = ((a = (a + Math.imul(f, W)) | 0) + Math.imul(_, Y)) | 0);
        var eE = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, W)) | 0) + (a >>> 13)) | 0) + (eE >>> 26)) | 0), (eE &= 67108863), (i = Math.imul(E, V)), (a = ((a = Math.imul(E, j)) + Math.imul(v, V)) | 0), (s = Math.imul(v, j)), (i = (i + Math.imul(p, Y)) | 0), (a = ((a = (a + Math.imul(p, W)) | 0) + Math.imul(m, Y)) | 0), (s = (s + Math.imul(m, W)) | 0), (i = (i + Math.imul(f, z)) | 0), (a = ((a = (a + Math.imul(f, q)) | 0) + Math.imul(_, z)) | 0);
        var ev = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, q)) | 0) + (a >>> 13)) | 0) + (ev >>> 26)) | 0), (ev &= 67108863), (i = Math.imul(T, V)), (a = ((a = Math.imul(T, j)) + Math.imul(b, V)) | 0), (s = Math.imul(b, j)), (i = (i + Math.imul(E, Y)) | 0), (a = ((a = (a + Math.imul(E, W)) | 0) + Math.imul(v, Y)) | 0), (s = (s + Math.imul(v, W)) | 0), (i = (i + Math.imul(p, z)) | 0), (a = ((a = (a + Math.imul(p, q)) | 0) + Math.imul(m, z)) | 0), (s = (s + Math.imul(m, q)) | 0), (i = (i + Math.imul(f, X)) | 0), (a = ((a = (a + Math.imul(f, J)) | 0) + Math.imul(_, X)) | 0);
        var eI = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, J)) | 0) + (a >>> 13)) | 0) + (eI >>> 26)) | 0), (eI &= 67108863), (i = Math.imul(S, V)), (a = ((a = Math.imul(S, j)) + Math.imul(A, V)) | 0), (s = Math.imul(A, j)), (i = (i + Math.imul(T, Y)) | 0), (a = ((a = (a + Math.imul(T, W)) | 0) + Math.imul(b, Y)) | 0), (s = (s + Math.imul(b, W)) | 0), (i = (i + Math.imul(E, z)) | 0), (a = ((a = (a + Math.imul(E, q)) | 0) + Math.imul(v, z)) | 0), (s = (s + Math.imul(v, q)) | 0), (i = (i + Math.imul(p, X)) | 0), (a = ((a = (a + Math.imul(p, J)) | 0) + Math.imul(m, X)) | 0), (s = (s + Math.imul(m, J)) | 0), (i = (i + Math.imul(f, ee)) | 0), (a = ((a = (a + Math.imul(f, et)) | 0) + Math.imul(_, ee)) | 0);
        var eT = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, et)) | 0) + (a >>> 13)) | 0) + (eT >>> 26)) | 0), (eT &= 67108863), (i = Math.imul(C, V)), (a = ((a = Math.imul(C, j)) + Math.imul(R, V)) | 0), (s = Math.imul(R, j)), (i = (i + Math.imul(S, Y)) | 0), (a = ((a = (a + Math.imul(S, W)) | 0) + Math.imul(A, Y)) | 0), (s = (s + Math.imul(A, W)) | 0), (i = (i + Math.imul(T, z)) | 0), (a = ((a = (a + Math.imul(T, q)) | 0) + Math.imul(b, z)) | 0), (s = (s + Math.imul(b, q)) | 0), (i = (i + Math.imul(E, X)) | 0), (a = ((a = (a + Math.imul(E, J)) | 0) + Math.imul(v, X)) | 0), (s = (s + Math.imul(v, J)) | 0), (i = (i + Math.imul(p, ee)) | 0), (a = ((a = (a + Math.imul(p, et)) | 0) + Math.imul(m, ee)) | 0), (s = (s + Math.imul(m, et)) | 0), (i = (i + Math.imul(f, er)) | 0), (a = ((a = (a + Math.imul(f, ei)) | 0) + Math.imul(_, er)) | 0);
        var eb = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, ei)) | 0) + (a >>> 13)) | 0) + (eb >>> 26)) | 0), (eb &= 67108863), (i = Math.imul(D, V)), (a = ((a = Math.imul(D, j)) + Math.imul(L, V)) | 0), (s = Math.imul(L, j)), (i = (i + Math.imul(C, Y)) | 0), (a = ((a = (a + Math.imul(C, W)) | 0) + Math.imul(R, Y)) | 0), (s = (s + Math.imul(R, W)) | 0), (i = (i + Math.imul(S, z)) | 0), (a = ((a = (a + Math.imul(S, q)) | 0) + Math.imul(A, z)) | 0), (s = (s + Math.imul(A, q)) | 0), (i = (i + Math.imul(T, X)) | 0), (a = ((a = (a + Math.imul(T, J)) | 0) + Math.imul(b, X)) | 0), (s = (s + Math.imul(b, J)) | 0), (i = (i + Math.imul(E, ee)) | 0), (a = ((a = (a + Math.imul(E, et)) | 0) + Math.imul(v, ee)) | 0), (s = (s + Math.imul(v, et)) | 0), (i = (i + Math.imul(p, er)) | 0), (a = ((a = (a + Math.imul(p, ei)) | 0) + Math.imul(m, er)) | 0), (s = (s + Math.imul(m, ei)) | 0), (i = (i + Math.imul(f, es)) | 0), (a = ((a = (a + Math.imul(f, eo)) | 0) + Math.imul(_, es)) | 0);
        var ey = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, eo)) | 0) + (a >>> 13)) | 0) + (ey >>> 26)) | 0), (ey &= 67108863), (i = Math.imul(w, V)), (a = ((a = Math.imul(w, j)) + Math.imul(P, V)) | 0), (s = Math.imul(P, j)), (i = (i + Math.imul(D, Y)) | 0), (a = ((a = (a + Math.imul(D, W)) | 0) + Math.imul(L, Y)) | 0), (s = (s + Math.imul(L, W)) | 0), (i = (i + Math.imul(C, z)) | 0), (a = ((a = (a + Math.imul(C, q)) | 0) + Math.imul(R, z)) | 0), (s = (s + Math.imul(R, q)) | 0), (i = (i + Math.imul(S, X)) | 0), (a = ((a = (a + Math.imul(S, J)) | 0) + Math.imul(A, X)) | 0), (s = (s + Math.imul(A, J)) | 0), (i = (i + Math.imul(T, ee)) | 0), (a = ((a = (a + Math.imul(T, et)) | 0) + Math.imul(b, ee)) | 0), (s = (s + Math.imul(b, et)) | 0), (i = (i + Math.imul(E, er)) | 0), (a = ((a = (a + Math.imul(E, ei)) | 0) + Math.imul(v, er)) | 0), (s = (s + Math.imul(v, ei)) | 0), (i = (i + Math.imul(p, es)) | 0), (a = ((a = (a + Math.imul(p, eo)) | 0) + Math.imul(m, es)) | 0), (s = (s + Math.imul(m, eo)) | 0), (i = (i + Math.imul(f, eu)) | 0), (a = ((a = (a + Math.imul(f, ec)) | 0) + Math.imul(_, eu)) | 0);
        var eS = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, ec)) | 0) + (a >>> 13)) | 0) + (eS >>> 26)) | 0), (eS &= 67108863), (i = Math.imul(k, V)), (a = ((a = Math.imul(k, j)) + Math.imul(U, V)) | 0), (s = Math.imul(U, j)), (i = (i + Math.imul(w, Y)) | 0), (a = ((a = (a + Math.imul(w, W)) | 0) + Math.imul(P, Y)) | 0), (s = (s + Math.imul(P, W)) | 0), (i = (i + Math.imul(D, z)) | 0), (a = ((a = (a + Math.imul(D, q)) | 0) + Math.imul(L, z)) | 0), (s = (s + Math.imul(L, q)) | 0), (i = (i + Math.imul(C, X)) | 0), (a = ((a = (a + Math.imul(C, J)) | 0) + Math.imul(R, X)) | 0), (s = (s + Math.imul(R, J)) | 0), (i = (i + Math.imul(S, ee)) | 0), (a = ((a = (a + Math.imul(S, et)) | 0) + Math.imul(A, ee)) | 0), (s = (s + Math.imul(A, et)) | 0), (i = (i + Math.imul(T, er)) | 0), (a = ((a = (a + Math.imul(T, ei)) | 0) + Math.imul(b, er)) | 0), (s = (s + Math.imul(b, ei)) | 0), (i = (i + Math.imul(E, es)) | 0), (a = ((a = (a + Math.imul(E, eo)) | 0) + Math.imul(v, es)) | 0), (s = (s + Math.imul(v, eo)) | 0), (i = (i + Math.imul(p, eu)) | 0), (a = ((a = (a + Math.imul(p, ec)) | 0) + Math.imul(m, eu)) | 0), (s = (s + Math.imul(m, ec)) | 0), (i = (i + Math.imul(f, ef)) | 0), (a = ((a = (a + Math.imul(f, e_)) | 0) + Math.imul(_, ef)) | 0);
        var eA = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, e_)) | 0) + (a >>> 13)) | 0) + (eA >>> 26)) | 0), (eA &= 67108863), (i = Math.imul(G, V)), (a = ((a = Math.imul(G, j)) + Math.imul(Z, V)) | 0), (s = Math.imul(Z, j)), (i = (i + Math.imul(k, Y)) | 0), (a = ((a = (a + Math.imul(k, W)) | 0) + Math.imul(U, Y)) | 0), (s = (s + Math.imul(U, W)) | 0), (i = (i + Math.imul(w, z)) | 0), (a = ((a = (a + Math.imul(w, q)) | 0) + Math.imul(P, z)) | 0), (s = (s + Math.imul(P, q)) | 0), (i = (i + Math.imul(D, X)) | 0), (a = ((a = (a + Math.imul(D, J)) | 0) + Math.imul(L, X)) | 0), (s = (s + Math.imul(L, J)) | 0), (i = (i + Math.imul(C, ee)) | 0), (a = ((a = (a + Math.imul(C, et)) | 0) + Math.imul(R, ee)) | 0), (s = (s + Math.imul(R, et)) | 0), (i = (i + Math.imul(S, er)) | 0), (a = ((a = (a + Math.imul(S, ei)) | 0) + Math.imul(A, er)) | 0), (s = (s + Math.imul(A, ei)) | 0), (i = (i + Math.imul(T, es)) | 0), (a = ((a = (a + Math.imul(T, eo)) | 0) + Math.imul(b, es)) | 0), (s = (s + Math.imul(b, eo)) | 0), (i = (i + Math.imul(E, eu)) | 0), (a = ((a = (a + Math.imul(E, ec)) | 0) + Math.imul(v, eu)) | 0), (s = (s + Math.imul(v, ec)) | 0), (i = (i + Math.imul(p, ef)) | 0), (a = ((a = (a + Math.imul(p, e_)) | 0) + Math.imul(m, ef)) | 0), (s = (s + Math.imul(m, e_)) | 0), (i = (i + Math.imul(f, ep)) | 0), (a = ((a = (a + Math.imul(f, em)) | 0) + Math.imul(_, ep)) | 0);
        var eN = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(_, em)) | 0) + (a >>> 13)) | 0) + (eN >>> 26)) | 0), (eN &= 67108863), (i = Math.imul(G, Y)), (a = ((a = Math.imul(G, W)) + Math.imul(Z, Y)) | 0), (s = Math.imul(Z, W)), (i = (i + Math.imul(k, z)) | 0), (a = ((a = (a + Math.imul(k, q)) | 0) + Math.imul(U, z)) | 0), (s = (s + Math.imul(U, q)) | 0), (i = (i + Math.imul(w, X)) | 0), (a = ((a = (a + Math.imul(w, J)) | 0) + Math.imul(P, X)) | 0), (s = (s + Math.imul(P, J)) | 0), (i = (i + Math.imul(D, ee)) | 0), (a = ((a = (a + Math.imul(D, et)) | 0) + Math.imul(L, ee)) | 0), (s = (s + Math.imul(L, et)) | 0), (i = (i + Math.imul(C, er)) | 0), (a = ((a = (a + Math.imul(C, ei)) | 0) + Math.imul(R, er)) | 0), (s = (s + Math.imul(R, ei)) | 0), (i = (i + Math.imul(S, es)) | 0), (a = ((a = (a + Math.imul(S, eo)) | 0) + Math.imul(A, es)) | 0), (s = (s + Math.imul(A, eo)) | 0), (i = (i + Math.imul(T, eu)) | 0), (a = ((a = (a + Math.imul(T, ec)) | 0) + Math.imul(b, eu)) | 0), (s = (s + Math.imul(b, ec)) | 0), (i = (i + Math.imul(E, ef)) | 0), (a = ((a = (a + Math.imul(E, e_)) | 0) + Math.imul(v, ef)) | 0), (s = (s + Math.imul(v, e_)) | 0), (i = (i + Math.imul(p, ep)) | 0), (a = ((a = (a + Math.imul(p, em)) | 0) + Math.imul(m, ep)) | 0);
        var eC = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(m, em)) | 0) + (a >>> 13)) | 0) + (eC >>> 26)) | 0), (eC &= 67108863), (i = Math.imul(G, z)), (a = ((a = Math.imul(G, q)) + Math.imul(Z, z)) | 0), (s = Math.imul(Z, q)), (i = (i + Math.imul(k, X)) | 0), (a = ((a = (a + Math.imul(k, J)) | 0) + Math.imul(U, X)) | 0), (s = (s + Math.imul(U, J)) | 0), (i = (i + Math.imul(w, ee)) | 0), (a = ((a = (a + Math.imul(w, et)) | 0) + Math.imul(P, ee)) | 0), (s = (s + Math.imul(P, et)) | 0), (i = (i + Math.imul(D, er)) | 0), (a = ((a = (a + Math.imul(D, ei)) | 0) + Math.imul(L, er)) | 0), (s = (s + Math.imul(L, ei)) | 0), (i = (i + Math.imul(C, es)) | 0), (a = ((a = (a + Math.imul(C, eo)) | 0) + Math.imul(R, es)) | 0), (s = (s + Math.imul(R, eo)) | 0), (i = (i + Math.imul(S, eu)) | 0), (a = ((a = (a + Math.imul(S, ec)) | 0) + Math.imul(A, eu)) | 0), (s = (s + Math.imul(A, ec)) | 0), (i = (i + Math.imul(T, ef)) | 0), (a = ((a = (a + Math.imul(T, e_)) | 0) + Math.imul(b, ef)) | 0), (s = (s + Math.imul(b, e_)) | 0), (i = (i + Math.imul(E, ep)) | 0), (a = ((a = (a + Math.imul(E, em)) | 0) + Math.imul(v, ep)) | 0);
        var eR = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(v, em)) | 0) + (a >>> 13)) | 0) + (eR >>> 26)) | 0), (eR &= 67108863), (i = Math.imul(G, X)), (a = ((a = Math.imul(G, J)) + Math.imul(Z, X)) | 0), (s = Math.imul(Z, J)), (i = (i + Math.imul(k, ee)) | 0), (a = ((a = (a + Math.imul(k, et)) | 0) + Math.imul(U, ee)) | 0), (s = (s + Math.imul(U, et)) | 0), (i = (i + Math.imul(w, er)) | 0), (a = ((a = (a + Math.imul(w, ei)) | 0) + Math.imul(P, er)) | 0), (s = (s + Math.imul(P, ei)) | 0), (i = (i + Math.imul(D, es)) | 0), (a = ((a = (a + Math.imul(D, eo)) | 0) + Math.imul(L, es)) | 0), (s = (s + Math.imul(L, eo)) | 0), (i = (i + Math.imul(C, eu)) | 0), (a = ((a = (a + Math.imul(C, ec)) | 0) + Math.imul(R, eu)) | 0), (s = (s + Math.imul(R, ec)) | 0), (i = (i + Math.imul(S, ef)) | 0), (a = ((a = (a + Math.imul(S, e_)) | 0) + Math.imul(A, ef)) | 0), (s = (s + Math.imul(A, e_)) | 0), (i = (i + Math.imul(T, ep)) | 0), (a = ((a = (a + Math.imul(T, em)) | 0) + Math.imul(b, ep)) | 0);
        var eO = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(b, em)) | 0) + (a >>> 13)) | 0) + (eO >>> 26)) | 0), (eO &= 67108863), (i = Math.imul(G, ee)), (a = ((a = Math.imul(G, et)) + Math.imul(Z, ee)) | 0), (s = Math.imul(Z, et)), (i = (i + Math.imul(k, er)) | 0), (a = ((a = (a + Math.imul(k, ei)) | 0) + Math.imul(U, er)) | 0), (s = (s + Math.imul(U, ei)) | 0), (i = (i + Math.imul(w, es)) | 0), (a = ((a = (a + Math.imul(w, eo)) | 0) + Math.imul(P, es)) | 0), (s = (s + Math.imul(P, eo)) | 0), (i = (i + Math.imul(D, eu)) | 0), (a = ((a = (a + Math.imul(D, ec)) | 0) + Math.imul(L, eu)) | 0), (s = (s + Math.imul(L, ec)) | 0), (i = (i + Math.imul(C, ef)) | 0), (a = ((a = (a + Math.imul(C, e_)) | 0) + Math.imul(R, ef)) | 0), (s = (s + Math.imul(R, e_)) | 0), (i = (i + Math.imul(S, ep)) | 0), (a = ((a = (a + Math.imul(S, em)) | 0) + Math.imul(A, ep)) | 0);
        var eD = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(A, em)) | 0) + (a >>> 13)) | 0) + (eD >>> 26)) | 0), (eD &= 67108863), (i = Math.imul(G, er)), (a = ((a = Math.imul(G, ei)) + Math.imul(Z, er)) | 0), (s = Math.imul(Z, ei)), (i = (i + Math.imul(k, es)) | 0), (a = ((a = (a + Math.imul(k, eo)) | 0) + Math.imul(U, es)) | 0), (s = (s + Math.imul(U, eo)) | 0), (i = (i + Math.imul(w, eu)) | 0), (a = ((a = (a + Math.imul(w, ec)) | 0) + Math.imul(P, eu)) | 0), (s = (s + Math.imul(P, ec)) | 0), (i = (i + Math.imul(D, ef)) | 0), (a = ((a = (a + Math.imul(D, e_)) | 0) + Math.imul(L, ef)) | 0), (s = (s + Math.imul(L, e_)) | 0), (i = (i + Math.imul(C, ep)) | 0), (a = ((a = (a + Math.imul(C, em)) | 0) + Math.imul(R, ep)) | 0);
        var eL = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(R, em)) | 0) + (a >>> 13)) | 0) + (eL >>> 26)) | 0), (eL &= 67108863), (i = Math.imul(G, es)), (a = ((a = Math.imul(G, eo)) + Math.imul(Z, es)) | 0), (s = Math.imul(Z, eo)), (i = (i + Math.imul(k, eu)) | 0), (a = ((a = (a + Math.imul(k, ec)) | 0) + Math.imul(U, eu)) | 0), (s = (s + Math.imul(U, ec)) | 0), (i = (i + Math.imul(w, ef)) | 0), (a = ((a = (a + Math.imul(w, e_)) | 0) + Math.imul(P, ef)) | 0), (s = (s + Math.imul(P, e_)) | 0), (i = (i + Math.imul(D, ep)) | 0), (a = ((a = (a + Math.imul(D, em)) | 0) + Math.imul(L, ep)) | 0);
        var ex = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(L, em)) | 0) + (a >>> 13)) | 0) + (ex >>> 26)) | 0), (ex &= 67108863), (i = Math.imul(G, eu)), (a = ((a = Math.imul(G, ec)) + Math.imul(Z, eu)) | 0), (s = Math.imul(Z, ec)), (i = (i + Math.imul(k, ef)) | 0), (a = ((a = (a + Math.imul(k, e_)) | 0) + Math.imul(U, ef)) | 0), (s = (s + Math.imul(U, e_)) | 0), (i = (i + Math.imul(w, ep)) | 0), (a = ((a = (a + Math.imul(w, em)) | 0) + Math.imul(P, ep)) | 0);
        var ew = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(P, em)) | 0) + (a >>> 13)) | 0) + (ew >>> 26)) | 0), (ew &= 67108863), (i = Math.imul(G, ef)), (a = ((a = Math.imul(G, e_)) + Math.imul(Z, ef)) | 0), (s = Math.imul(Z, e_)), (i = (i + Math.imul(k, ep)) | 0), (a = ((a = (a + Math.imul(k, em)) | 0) + Math.imul(U, ep)) | 0);
        var eP = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        (c = ((((s = (s + Math.imul(U, em)) | 0) + (a >>> 13)) | 0) + (eP >>> 26)) | 0), (eP &= 67108863), (i = Math.imul(G, ep)), (a = ((a = Math.imul(G, em)) + Math.imul(Z, ep)) | 0);
        var eM = (((c + i) | 0) + ((8191 & a) << 13)) | 0;
        return (c = ((((s = Math.imul(Z, em)) + (a >>> 13)) | 0) + (eM >>> 26)) | 0), (eM &= 67108863), (u[0] = eg), (u[1] = eE), (u[2] = ev), (u[3] = eI), (u[4] = eT), (u[5] = eb), (u[6] = ey), (u[7] = eS), (u[8] = eA), (u[9] = eN), (u[10] = eC), (u[11] = eR), (u[12] = eO), (u[13] = eD), (u[14] = eL), (u[15] = ex), (u[16] = ew), (u[17] = eP), (u[18] = eM), 0 !== c && ((u[19] = c), r.length++), r;
    };
    function I(e, n, r) {
        (r.negative = n.negative ^ e.negative), (r.length = e.length + n.length);
        for (var i = 0, a = 0, s = 0; s < r.length - 1; s++) {
            var o = a;
            a = 0;
            for (var l = 67108863 & i, u = Math.min(s, n.length - 1), c = Math.max(0, s - e.length + 1); c <= u; c++) {
                var d = s - c,
                    f = (0 | e.words[d]) * (0 | n.words[c]),
                    _ = 67108863 & f;
                (o = (o + ((f / 67108864) | 0)) | 0), (l = 67108863 & (_ = (_ + l) | 0)), (a += (o = (o + (_ >>> 26)) | 0) >>> 26), (o &= 67108863);
            }
            (r.words[s] = l), (i = o), (o = a);
        }
        return 0 !== i ? (r.words[s] = i) : r.length--, r._strip();
    }
    function T(e, n, r) {
        return I(e, n, r);
    }
    function b(e, n) {
        (this.x = e), (this.y = n);
    }
    !Math.imul && (v = E),
        (s.prototype.mulTo = function (e, n) {
            var r,
                i = this.length + e.length;
            return (r = 10 === this.length && 10 === e.length ? v(this, e, n) : i < 63 ? E(this, e, n) : i < 1024 ? I(this, e, n) : T(this, e, n));
        }),
        (b.prototype.makeRBT = function (e) {
            for (var n = Array(e), r = s.prototype._countBits(e) - 1, i = 0; i < e; i++) n[i] = this.revBin(i, r, e);
            return n;
        }),
        (b.prototype.revBin = function (e, n, r) {
            if (0 === e || e === r - 1) return e;
            for (var i = 0, a = 0; a < n; a++) (i |= (1 & e) << (n - a - 1)), (e >>= 1);
            return i;
        }),
        (b.prototype.permute = function (e, n, r, i, a, s) {
            for (var o = 0; o < s; o++) (i[o] = n[e[o]]), (a[o] = r[e[o]]);
        }),
        (b.prototype.transform = function (e, n, r, i, a, s) {
            this.permute(s, e, n, r, i, a);
            for (var o = 1; o < a; o <<= 1) {
                for (var l = o << 1, u = Math.cos((2 * Math.PI) / l), c = Math.sin((2 * Math.PI) / l), d = 0; d < a; d += l) {
                    for (var f = u, _ = c, h = 0; h < o; h++) {
                        var p = r[d + h],
                            m = i[d + h],
                            g = r[d + h + o],
                            E = i[d + h + o],
                            v = f * g - _ * E;
                        (E = f * E + _ * g), (g = v), (r[d + h] = p + g), (i[d + h] = m + E), (r[d + h + o] = p - g), (i[d + h + o] = m - E), h !== l && ((v = u * f - c * _), (_ = u * _ + c * f), (f = v));
                    }
                }
            }
        }),
        (b.prototype.guessLen13b = function (e, n) {
            var r = 1 | Math.max(n, e),
                i = 1 & r,
                a = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) a++;
            return 1 << (a + 1 + i);
        }),
        (b.prototype.conjugate = function (e, n, r) {
            if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                    var a = e[i];
                    (e[i] = e[r - i - 1]), (e[r - i - 1] = a), (a = n[i]), (n[i] = -n[r - i - 1]), (n[r - i - 1] = -a);
                }
        }),
        (b.prototype.normalize13b = function (e, n) {
            for (var r = 0, i = 0; i < n / 2; i++) {
                var a = 8192 * Math.round(e[2 * i + 1] / n) + Math.round(e[2 * i] / n) + r;
                (e[i] = 67108863 & a), (r = a < 67108864 ? 0 : (a / 67108864) | 0);
            }
            return e;
        }),
        (b.prototype.convert13b = function (e, n, r, a) {
            for (var s = 0, o = 0; o < n; o++) (s += 0 | e[o]), (r[2 * o] = 8191 & s), (s >>>= 13), (r[2 * o + 1] = 8191 & s), (s >>>= 13);
            for (o = 2 * n; o < a; ++o) r[o] = 0;
            i(0 === s), i((-8192 & s) == 0);
        }),
        (b.prototype.stub = function (e) {
            for (var n = Array(e), r = 0; r < e; r++) n[r] = 0;
            return n;
        }),
        (b.prototype.mulp = function (e, n, r) {
            var i = 2 * this.guessLen13b(e.length, n.length),
                a = this.makeRBT(i),
                s = this.stub(i),
                o = Array(i),
                l = Array(i),
                u = Array(i),
                c = Array(i),
                d = Array(i),
                f = Array(i),
                _ = r.words;
            (_.length = i), this.convert13b(e.words, e.length, o, i), this.convert13b(n.words, n.length, c, i), this.transform(o, s, l, u, i, a), this.transform(c, s, d, f, i, a);
            for (var h = 0; h < i; h++) {
                var p = l[h] * d[h] - u[h] * f[h];
                (u[h] = l[h] * f[h] + u[h] * d[h]), (l[h] = p);
            }
            return this.conjugate(l, u, i), this.transform(l, u, _, s, i, a), this.conjugate(_, s, i), this.normalize13b(_, i), (r.negative = e.negative ^ n.negative), (r.length = e.length + n.length), r._strip();
        }),
        (s.prototype.mul = function (e) {
            var n = new s(null);
            return (n.words = Array(this.length + e.length)), this.mulTo(e, n);
        }),
        (s.prototype.mulf = function (e) {
            var n = new s(null);
            return (n.words = Array(this.length + e.length)), T(this, e, n);
        }),
        (s.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
        }),
        (s.prototype.imuln = function (e) {
            var n = e < 0;
            n && (e = -e), i('number' == typeof e), i(e < 67108864);
            for (var r = 0, a = 0; a < this.length; a++) {
                var s = (0 | this.words[a]) * e,
                    o = (67108863 & s) + (67108863 & r);
                (r >>= 26), (r += ((s / 67108864) | 0) + (o >>> 26)), (this.words[a] = 67108863 & o);
            }
            return 0 !== r && ((this.words[a] = r), this.length++), n ? this.ineg() : this;
        }),
        (s.prototype.muln = function (e) {
            return this.clone().imuln(e);
        }),
        (s.prototype.sqr = function () {
            return this.mul(this);
        }),
        (s.prototype.isqr = function () {
            return this.imul(this.clone());
        }),
        (s.prototype.pow = function (e) {
            var n = g(e);
            if (0 === n.length) return new s(1);
            for (var r = this, i = 0; i < n.length && 0 === n[i]; i++, r = r.sqr());
            if (++i < n.length) for (var a = r.sqr(); i < n.length; i++, a = a.sqr()) 0 !== n[i] && (r = r.mul(a));
            return r;
        }),
        (s.prototype.iushln = function (e) {
            i('number' == typeof e && e >= 0);
            var n,
                r = e % 26,
                a = (e - r) / 26,
                s = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
                var o = 0;
                for (n = 0; n < this.length; n++) {
                    var l = this.words[n] & s,
                        u = ((0 | this.words[n]) - l) << r;
                    (this.words[n] = u | o), (o = l >>> (26 - r));
                }
                o && ((this.words[n] = o), this.length++);
            }
            if (0 !== a) {
                for (n = this.length - 1; n >= 0; n--) this.words[n + a] = this.words[n];
                for (n = 0; n < a; n++) this.words[n] = 0;
                this.length += a;
            }
            return this._strip();
        }),
        (s.prototype.ishln = function (e) {
            return i(0 === this.negative), this.iushln(e);
        }),
        (s.prototype.iushrn = function (e, n, r) {
            i('number' == typeof e && e >= 0), (a = n ? (n - (n % 26)) / 26 : 0);
            var a,
                s = e % 26,
                o = Math.min((e - s) / 26, this.length),
                l = 67108863 ^ ((67108863 >>> s) << s),
                u = r;
            if (((a -= o), (a = Math.max(0, a)), u)) {
                for (var c = 0; c < o; c++) u.words[c] = this.words[c];
                u.length = o;
            }
            if (0 === o);
            else if (this.length > o) for (this.length -= o, c = 0; c < this.length; c++) this.words[c] = this.words[c + o];
            else (this.words[0] = 0), (this.length = 1);
            var d = 0;
            for (c = this.length - 1; c >= 0 && (0 !== d || c >= a); c--) {
                var f = 0 | this.words[c];
                (this.words[c] = (d << (26 - s)) | (f >>> s)), (d = f & l);
            }
            return u && 0 !== d && (u.words[u.length++] = d), 0 === this.length && ((this.words[0] = 0), (this.length = 1)), this._strip();
        }),
        (s.prototype.ishrn = function (e, n, r) {
            return i(0 === this.negative), this.iushrn(e, n, r);
        }),
        (s.prototype.shln = function (e) {
            return this.clone().ishln(e);
        }),
        (s.prototype.ushln = function (e) {
            return this.clone().iushln(e);
        }),
        (s.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
        }),
        (s.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
        }),
        (s.prototype.testn = function (e) {
            i('number' == typeof e && e >= 0);
            var n = e % 26,
                r = (e - n) / 26,
                a = 1 << n;
            return !(this.length <= r) && !!(this.words[r] & a);
        }),
        (s.prototype.imaskn = function (e) {
            i('number' == typeof e && e >= 0);
            var n = e % 26,
                r = (e - n) / 26;
            if ((i(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r)) return this;
            if ((0 !== n && r++, (this.length = Math.min(r, this.length)), 0 !== n)) {
                var a = 67108863 ^ ((67108863 >>> n) << n);
                this.words[this.length - 1] &= a;
            }
            return this._strip();
        }),
        (s.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
        }),
        (s.prototype.iaddn = function (e) {
            if ((i('number' == typeof e), i(e < 67108864), e < 0)) return this.isubn(-e);
            if (0 !== this.negative) return 1 === this.length && (0 | this.words[0]) <= e ? ((this.words[0] = e - (0 | this.words[0])), (this.negative = 0), this) : ((this.negative = 0), this.isubn(e), (this.negative = 1), this);
            return this._iaddn(e);
        }),
        (s.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var n = 0; n < this.length && this.words[n] >= 67108864; n++) (this.words[n] -= 67108864), n === this.length - 1 ? (this.words[n + 1] = 1) : this.words[n + 1]++;
            return (this.length = Math.max(this.length, n + 1)), this;
        }),
        (s.prototype.isubn = function (e) {
            if ((i('number' == typeof e), i(e < 67108864), e < 0)) return this.iaddn(-e);
            if (0 !== this.negative) return (this.negative = 0), this.iaddn(e), (this.negative = 1), this;
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0)) (this.words[0] = -this.words[0]), (this.negative = 1);
            else for (var n = 0; n < this.length && this.words[n] < 0; n++) (this.words[n] += 67108864), (this.words[n + 1] -= 1);
            return this._strip();
        }),
        (s.prototype.addn = function (e) {
            return this.clone().iaddn(e);
        }),
        (s.prototype.subn = function (e) {
            return this.clone().isubn(e);
        }),
        (s.prototype.iabs = function () {
            return (this.negative = 0), this;
        }),
        (s.prototype.abs = function () {
            return this.clone().iabs();
        }),
        (s.prototype._ishlnsubmul = function (e, n, r) {
            var a,
                s,
                o = e.length + r;
            this._expand(o);
            var l = 0;
            for (a = 0; a < e.length; a++) {
                s = (0 | this.words[a + r]) + l;
                var u = (0 | e.words[a]) * n;
                (s -= 67108863 & u), (l = (s >> 26) - ((u / 67108864) | 0)), (this.words[a + r] = 67108863 & s);
            }
            for (; a < this.length - r; a++) (l = (s = (0 | this.words[a + r]) + l) >> 26), (this.words[a + r] = 67108863 & s);
            if (0 === l) return this._strip();
            for (i(-1 === l), l = 0, a = 0; a < this.length; a++) (l = (s = -(0 | this.words[a]) + l) >> 26), (this.words[a] = 67108863 & s);
            return (this.negative = 1), this._strip();
        }),
        (s.prototype._wordDiv = function (e, n) {
            var r,
                i = this.length - e.length,
                a = this.clone(),
                o = e,
                l = 0 | o.words[o.length - 1];
            0 != (i = 26 - this._countBits(l)) && ((o = o.ushln(i)), a.iushln(i), (l = 0 | o.words[o.length - 1]));
            var u = a.length - o.length;
            if ('mod' !== n) {
                ((r = new s(null)).length = u + 1), (r.words = Array(r.length));
                for (var c = 0; c < r.length; c++) r.words[c] = 0;
            }
            var d = a.clone()._ishlnsubmul(o, 1, u);
            0 === d.negative && ((a = d), r && (r.words[u] = 1));
            for (var f = u - 1; f >= 0; f--) {
                var _ = (0 | a.words[o.length + f]) * 67108864 + (0 | a.words[o.length + f - 1]);
                for (_ = Math.min((_ / l) | 0, 67108863), a._ishlnsubmul(o, _, f); 0 !== a.negative; ) _--, (a.negative = 0), a._ishlnsubmul(o, 1, f), !a.isZero() && (a.negative ^= 1);
                r && (r.words[f] = _);
            }
            return (
                r && r._strip(),
                a._strip(),
                'div' !== n && 0 !== i && a.iushrn(i),
                {
                    div: r || null,
                    mod: a
                }
            );
        }),
        (s.prototype.divmod = function (e, n, r) {
            var a, o, l;
            if ((i(!e.isZero()), this.isZero()))
                return {
                    div: new s(0),
                    mod: new s(0)
                };
            if (0 !== this.negative && 0 === e.negative)
                return (
                    (l = this.neg().divmod(e, n)),
                    'mod' !== n && (a = l.div.neg()),
                    'div' !== n && ((o = l.mod.neg()), r && 0 !== o.negative && o.iadd(e)),
                    {
                        div: a,
                        mod: o
                    }
                );
            if (0 === this.negative && 0 !== e.negative)
                return (
                    (l = this.divmod(e.neg(), n)),
                    'mod' !== n && (a = l.div.neg()),
                    {
                        div: a,
                        mod: l.mod
                    }
                );
            if ((this.negative & e.negative) != 0)
                return (
                    (l = this.neg().divmod(e.neg(), n)),
                    'div' !== n && ((o = l.mod.neg()), r && 0 !== o.negative && o.isub(e)),
                    {
                        div: l.div,
                        mod: o
                    }
                );
            if (e.length > this.length || 0 > this.cmp(e))
                return {
                    div: new s(0),
                    mod: this
                };
            if (1 === e.length)
                return 'div' === n
                    ? {
                          div: this.divn(e.words[0]),
                          mod: null
                      }
                    : 'mod' === n
                      ? {
                            div: null,
                            mod: new s(this.modrn(e.words[0]))
                        }
                      : {
                            div: this.divn(e.words[0]),
                            mod: new s(this.modrn(e.words[0]))
                        };
            return this._wordDiv(e, n);
        }),
        (s.prototype.div = function (e) {
            return this.divmod(e, 'div', !1).div;
        }),
        (s.prototype.mod = function (e) {
            return this.divmod(e, 'mod', !1).mod;
        }),
        (s.prototype.umod = function (e) {
            return this.divmod(e, 'mod', !0).mod;
        }),
        (s.prototype.divRound = function (e) {
            var n = this.divmod(e);
            if (n.mod.isZero()) return n.div;
            var r = 0 !== n.div.negative ? n.mod.isub(e) : n.mod,
                i = e.ushrn(1),
                a = e.andln(1),
                s = r.cmp(i);
            return s < 0 || (1 === a && 0 === s) ? n.div : 0 !== n.div.negative ? n.div.isubn(1) : n.div.iaddn(1);
        }),
        (s.prototype.modrn = function (e) {
            var n = e < 0;
            n && (e = -e), i(e <= 67108863);
            for (var r = 67108864 % e, a = 0, s = this.length - 1; s >= 0; s--) a = (r * a + (0 | this.words[s])) % e;
            return n ? -a : a;
        }),
        (s.prototype.modn = function (e) {
            return this.modrn(e);
        }),
        (s.prototype.idivn = function (e) {
            var n = e < 0;
            n && (e = -e), i(e <= 67108863);
            for (var r = 0, a = this.length - 1; a >= 0; a--) {
                var s = (0 | this.words[a]) + 67108864 * r;
                (this.words[a] = (s / e) | 0), (r = s % e);
            }
            return this._strip(), n ? this.ineg() : this;
        }),
        (s.prototype.divn = function (e) {
            return this.clone().idivn(e);
        }),
        (s.prototype.egcd = function (e) {
            i(0 === e.negative), i(!e.isZero());
            var n = this,
                r = e.clone();
            n = 0 !== n.negative ? n.umod(e) : n.clone();
            for (var a = new s(1), o = new s(0), l = new s(0), u = new s(1), c = 0; n.isEven() && r.isEven(); ) n.iushrn(1), r.iushrn(1), ++c;
            for (var d = r.clone(), f = n.clone(); !n.isZero(); ) {
                for (var _ = 0, h = 1; (n.words[0] & h) == 0 && _ < 26; ++_, h <<= 1);
                if (_ > 0) for (n.iushrn(_); _-- > 0; ) (a.isOdd() || o.isOdd()) && (a.iadd(d), o.isub(f)), a.iushrn(1), o.iushrn(1);
                for (var p = 0, m = 1; (r.words[0] & m) == 0 && p < 26; ++p, m <<= 1);
                if (p > 0) for (r.iushrn(p); p-- > 0; ) (l.isOdd() || u.isOdd()) && (l.iadd(d), u.isub(f)), l.iushrn(1), u.iushrn(1);
                n.cmp(r) >= 0 ? (n.isub(r), a.isub(l), o.isub(u)) : (r.isub(n), l.isub(a), u.isub(o));
            }
            return {
                a: l,
                b: u,
                gcd: r.iushln(c)
            };
        }),
        (s.prototype._invmp = function (e) {
            i(0 === e.negative), i(!e.isZero());
            var n,
                r = this,
                a = e.clone();
            r = 0 !== r.negative ? r.umod(e) : r.clone();
            for (var o = new s(1), l = new s(0), u = a.clone(); r.cmpn(1) > 0 && a.cmpn(1) > 0; ) {
                for (var c = 0, d = 1; (r.words[0] & d) == 0 && c < 26; ++c, d <<= 1);
                if (c > 0) for (r.iushrn(c); c-- > 0; ) o.isOdd() && o.iadd(u), o.iushrn(1);
                for (var f = 0, _ = 1; (a.words[0] & _) == 0 && f < 26; ++f, _ <<= 1);
                if (f > 0) for (a.iushrn(f); f-- > 0; ) l.isOdd() && l.iadd(u), l.iushrn(1);
                r.cmp(a) >= 0 ? (r.isub(a), o.isub(l)) : (a.isub(r), l.isub(o));
            }
            return 0 > (n = 0 === r.cmpn(1) ? o : l).cmpn(0) && n.iadd(e), n;
        }),
        (s.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var n = this.clone(),
                r = e.clone();
            (n.negative = 0), (r.negative = 0);
            for (var i = 0; n.isEven() && r.isEven(); i++) n.iushrn(1), r.iushrn(1);
            for (;;) {
                for (; n.isEven(); ) n.iushrn(1);
                for (; r.isEven(); ) r.iushrn(1);
                var a = n.cmp(r);
                if (a < 0) {
                    var s = n;
                    (n = r), (r = s);
                } else if (0 === a || 0 === r.cmpn(1)) break;
                n.isub(r);
            }
            return r.iushln(i);
        }),
        (s.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
        }),
        (s.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
        }),
        (s.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
        }),
        (s.prototype.andln = function (e) {
            return this.words[0] & e;
        }),
        (s.prototype.bincn = function (e) {
            i('number' == typeof e);
            var n = e % 26,
                r = (e - n) / 26,
                a = 1 << n;
            if (this.length <= r) return this._expand(r + 1), (this.words[r] |= a), this;
            for (var s = a, o = r; 0 !== s && o < this.length; o++) {
                var l = 0 | this.words[o];
                (l += s), (s = l >>> 26), (l &= 67108863), (this.words[o] = l);
            }
            return 0 !== s && ((this.words[o] = s), this.length++), this;
        }),
        (s.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
        }),
        (s.prototype.cmpn = function (e) {
            var n,
                r = e < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) n = 1;
            else {
                r && (e = -e), i(e <= 67108863, 'Number is too big');
                var a = 0 | this.words[0];
                n = a === e ? 0 : a < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -n : n;
        }),
        (s.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var n = this.ucmp(e);
            return 0 !== this.negative ? 0 | -n : n;
        }),
        (s.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var n = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                    a = 0 | e.words[r];
                if (i !== a) {
                    i < a ? (n = -1) : i > a && (n = 1);
                    break;
                }
            }
            return n;
        }),
        (s.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
        }),
        (s.prototype.gt = function (e) {
            return 1 === this.cmp(e);
        }),
        (s.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
        }),
        (s.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
        }),
        (s.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
        }),
        (s.prototype.lt = function (e) {
            return -1 === this.cmp(e);
        }),
        (s.prototype.lten = function (e) {
            return 0 >= this.cmpn(e);
        }),
        (s.prototype.lte = function (e) {
            return 0 >= this.cmp(e);
        }),
        (s.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
        }),
        (s.prototype.eq = function (e) {
            return 0 === this.cmp(e);
        }),
        (s.red = function (e) {
            return new O(e);
        }),
        (s.prototype.toRed = function (e) {
            return i(!this.red, 'Already a number in reduction context'), i(0 === this.negative, 'red works only with positives'), e.convertTo(this)._forceRed(e);
        }),
        (s.prototype.fromRed = function () {
            return i(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
        }),
        (s.prototype._forceRed = function (e) {
            return (this.red = e), this;
        }),
        (s.prototype.forceRed = function (e) {
            return i(!this.red, 'Already a number in reduction context'), this._forceRed(e);
        }),
        (s.prototype.redAdd = function (e) {
            return i(this.red, 'redAdd works only with red numbers'), this.red.add(this, e);
        }),
        (s.prototype.redIAdd = function (e) {
            return i(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, e);
        }),
        (s.prototype.redSub = function (e) {
            return i(this.red, 'redSub works only with red numbers'), this.red.sub(this, e);
        }),
        (s.prototype.redISub = function (e) {
            return i(this.red, 'redISub works only with red numbers'), this.red.isub(this, e);
        }),
        (s.prototype.redShl = function (e) {
            return i(this.red, 'redShl works only with red numbers'), this.red.shl(this, e);
        }),
        (s.prototype.redMul = function (e) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.mul(this, e);
        }),
        (s.prototype.redIMul = function (e) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.imul(this, e);
        }),
        (s.prototype.redSqr = function () {
            return i(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
        }),
        (s.prototype.redISqr = function () {
            return i(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
        }),
        (s.prototype.redSqrt = function () {
            return i(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
        }),
        (s.prototype.redInvm = function () {
            return i(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
        }),
        (s.prototype.redNeg = function () {
            return i(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
        }),
        (s.prototype.redPow = function (e) {
            return i(this.red && !e.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, e);
        });
    var y = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    function S(e, n) {
        (this.name = e), (this.p = new s(n, 16)), (this.n = this.p.bitLength()), (this.k = new s(1).iushln(this.n).isub(this.p)), (this.tmp = this._tmp());
    }
    function A() {
        S.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    function N() {
        S.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    function C() {
        S.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    function R() {
        S.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    function O(e) {
        if ('string' == typeof e) {
            var n = s._prime(e);
            (this.m = n.p), (this.prime = n);
        } else i(e.gtn(1), 'modulus must be greater than 1'), (this.m = e), (this.prime = null);
    }
    function D(e) {
        O.call(this, e), (this.shift = this.m.bitLength()), this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)), (this.r = new s(1).iushln(this.shift)), (this.r2 = this.imod(this.r.sqr())), (this.rinv = this.r._invmp(this.m)), (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)), (this.minv = this.minv.umod(this.r)), (this.minv = this.r.sub(this.minv));
    }
    (S.prototype._tmp = function () {
        var e = new s(null);
        return (e.words = Array(Math.ceil(this.n / 13))), e;
    }),
        (S.prototype.ireduce = function (e) {
            var n,
                r = e;
            do this.split(r, this.tmp), (n = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (n > this.n);
            var i = n < this.n ? -1 : r.ucmp(this.p);
            return 0 === i ? ((r.words[0] = 0), (r.length = 1)) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r;
        }),
        (S.prototype.split = function (e, n) {
            e.iushrn(this.n, 0, n);
        }),
        (S.prototype.imulK = function (e) {
            return e.imul(this.k);
        }),
        a(A, S),
        (A.prototype.split = function (e, n) {
            for (var r = 4194303, i = Math.min(e.length, 9), a = 0; a < i; a++) n.words[a] = e.words[a];
            if (((n.length = i), e.length <= 9)) {
                (e.words[0] = 0), (e.length = 1);
                return;
            }
            var s = e.words[9];
            for (a = 10, n.words[n.length++] = s & r; a < e.length; a++) {
                var o = 0 | e.words[a];
                (e.words[a - 10] = ((o & r) << 4) | (s >>> 22)), (s = o);
            }
            (s >>>= 22), (e.words[a - 10] = s), 0 === s && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
        }),
        (A.prototype.imulK = function (e) {
            (e.words[e.length] = 0), (e.words[e.length + 1] = 0), (e.length += 2);
            for (var n = 0, r = 0; r < e.length; r++) {
                var i = 0 | e.words[r];
                (n += 977 * i), (e.words[r] = 67108863 & n), (n = 64 * i + ((n / 67108864) | 0));
            }
            return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
        }),
        a(N, S),
        a(C, S),
        a(R, S),
        (R.prototype.imulK = function (e) {
            for (var n = 0, r = 0; r < e.length; r++) {
                var i = (0 | e.words[r]) * 19 + n,
                    a = 67108863 & i;
                (i >>>= 26), (e.words[r] = a), (n = i);
            }
            return 0 !== n && (e.words[e.length++] = n), e;
        }),
        (s._prime = function (e) {
            var n;
            if (y[e]) return y[e];
            if ('k256' === e) n = new A();
            else if ('p224' === e) n = new N();
            else if ('p192' === e) n = new C();
            else if ('p25519' === e) n = new R();
            else throw Error('Unknown prime ' + e);
            return (y[e] = n), n;
        }),
        (O.prototype._verify1 = function (e) {
            i(0 === e.negative, 'red works only with positives'), i(e.red, 'red works only with red numbers');
        }),
        (O.prototype._verify2 = function (e, n) {
            i((e.negative | n.negative) == 0, 'red works only with positives'), i(e.red && e.red === n.red, 'red works only with red numbers');
        }),
        (O.prototype.imod = function (e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : (c(e, e.umod(this.m)._forceRed(this)), e);
        }),
        (O.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
        }),
        (O.prototype.add = function (e, n) {
            this._verify2(e, n);
            var r = e.add(n);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
        }),
        (O.prototype.iadd = function (e, n) {
            this._verify2(e, n);
            var r = e.iadd(n);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
        }),
        (O.prototype.sub = function (e, n) {
            this._verify2(e, n);
            var r = e.sub(n);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
        }),
        (O.prototype.isub = function (e, n) {
            this._verify2(e, n);
            var r = e.isub(n);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
        }),
        (O.prototype.shl = function (e, n) {
            return this._verify1(e), this.imod(e.ushln(n));
        }),
        (O.prototype.imul = function (e, n) {
            return this._verify2(e, n), this.imod(e.imul(n));
        }),
        (O.prototype.mul = function (e, n) {
            return this._verify2(e, n), this.imod(e.mul(n));
        }),
        (O.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
        }),
        (O.prototype.sqr = function (e) {
            return this.mul(e, e);
        }),
        (O.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var n = this.m.andln(3);
            if ((i(n % 2 == 1), 3 === n)) {
                var r = this.m.add(new s(1)).iushrn(2);
                return this.pow(e, r);
            }
            for (var a = this.m.subn(1), o = 0; !a.isZero() && 0 === a.andln(1); ) o++, a.iushrn(1);
            i(!a.isZero());
            var l = new s(1).toRed(this),
                u = l.redNeg(),
                c = this.m.subn(1).iushrn(1),
                d = this.m.bitLength();
            for (d = new s(2 * d * d).toRed(this); 0 !== this.pow(d, c).cmp(u); ) d.redIAdd(u);
            for (var f = this.pow(d, a), _ = this.pow(e, a.addn(1).iushrn(1)), h = this.pow(e, a), p = o; 0 !== h.cmp(l); ) {
                for (var m = h, g = 0; 0 !== m.cmp(l); g++) m = m.redSqr();
                i(g < p);
                var E = this.pow(f, new s(1).iushln(p - g - 1));
                (_ = _.redMul(E)), (f = E.redSqr()), (h = h.redMul(f)), (p = g);
            }
            return _;
        }),
        (O.prototype.invm = function (e) {
            var n = e._invmp(this.m);
            return 0 !== n.negative ? ((n.negative = 0), this.imod(n).redNeg()) : this.imod(n);
        }),
        (O.prototype.pow = function (e, n) {
            if (n.isZero()) return new s(1).toRed(this);
            if (0 === n.cmpn(1)) return e.clone();
            var r = 4,
                i = Array(16);
            (i[0] = new s(1).toRed(this)), (i[1] = e);
            for (var a = 2; a < i.length; a++) i[a] = this.mul(i[a - 1], e);
            var o = i[0],
                l = 0,
                u = 0,
                c = n.bitLength() % 26;
            for (0 === c && (c = 26), a = n.length - 1; a >= 0; a--) {
                for (var d = n.words[a], f = c - 1; f >= 0; f--) {
                    var _ = (d >> f) & 1;
                    if ((o !== i[0] && (o = this.sqr(o)), 0 === _ && 0 === l)) {
                        u = 0;
                        continue;
                    }
                    (l <<= 1), (l |= _), (++u === r || (0 === a && 0 === f)) && ((o = this.mul(o, i[l])), (u = 0), (l = 0));
                }
                c = 26;
            }
            return o;
        }),
        (O.prototype.convertTo = function (e) {
            var n = e.umod(this.m);
            return n === e ? n.clone() : n;
        }),
        (O.prototype.convertFrom = function (e) {
            var n = e.clone();
            return (n.red = null), n;
        }),
        (s.mont = function (e) {
            return new D(e);
        }),
        a(D, O),
        (D.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
        }),
        (D.prototype.convertFrom = function (e) {
            var n = this.imod(e.mul(this.rinv));
            return (n.red = null), n;
        }),
        (D.prototype.imul = function (e, n) {
            if (e.isZero() || n.isZero()) return (e.words[0] = 0), (e.length = 1), e;
            var r = e.imul(n),
                i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                a = r.isub(i).iushrn(this.shift),
                s = a;
            return a.cmp(this.m) >= 0 ? (s = a.isub(this.m)) : 0 > a.cmpn(0) && (s = a.iadd(this.m)), s._forceRed(this);
        }),
        (D.prototype.mul = function (e, n) {
            if (e.isZero() || n.isZero()) return new s(0)._forceRed(this);
            var r = e.mul(n),
                i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                a = r.isub(i).iushrn(this.shift),
                o = a;
            return a.cmp(this.m) >= 0 ? (o = a.isub(this.m)) : 0 > a.cmpn(0) && (o = a.iadd(this.m)), o._forceRed(this);
        }),
        (D.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
        });
})((e = r.nmd(e)), this);
