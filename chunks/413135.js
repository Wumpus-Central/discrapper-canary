var r,
    i = n(250683),
    o = n(932093),
    a = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
(t.Buffer = c), (r = b), (t.INSPECT_MAX_BYTES = 50);
var s = 2147483647;
function l(e) {
    if (e > s) throw RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, c.prototype), t;
}
function c(e, t, n) {
    if ('number' == typeof e) {
        if ('string' == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
        return _(e);
    }
    return u(e, t, n);
}
function u(e, t, n) {
    if ('string' == typeof e) return p(e, t);
    if (ArrayBuffer.isView(e)) return h(e);
    if (null == e) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
    if (X(e, ArrayBuffer) || (e && X(e.buffer, ArrayBuffer)) || ('undefined' != typeof SharedArrayBuffer && (X(e, SharedArrayBuffer) || (e && X(e.buffer, SharedArrayBuffer))))) return m(e, t, n);
    if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
    var r = e.valueOf && e.valueOf();
    if (null != r && r !== e) return c.from(r, t, n);
    var i = g(e);
    if (i) return i;
    if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]('string'), t, n);
    throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
}
function d(e) {
    if ('number' != typeof e) throw TypeError('"size" argument must be of type number');
    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
}
function f(e, t, n) {
    return (d(e), e <= 0) ? l(e) : void 0 !== t ? ('string' == typeof n ? l(e).fill(t, n) : l(e).fill(t)) : l(e);
}
function _(e) {
    return d(e), l(e < 0 ? 0 : 0 | E(e));
}
function p(e, t) {
    if ((('string' != typeof t || '' === t) && (t = 'utf8'), !c.isEncoding(t))) throw TypeError('Unknown encoding: ' + t);
    var n = 0 | y(e, t),
        r = l(n),
        i = r.write(e, t);
    return i !== n && (r = r.slice(0, i)), r;
}
function h(e) {
    for (var t = e.length < 0 ? 0 : 0 | E(e.length), n = l(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
    return n;
}
function m(e, t, n) {
    var r;
    if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
    return Object.setPrototypeOf((r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n)), c.prototype), r;
}
function g(e) {
    if (c.isBuffer(e)) {
        var t = 0 | E(e.length),
            n = l(t);
        return 0 === n.length || e.copy(n, 0, 0, t), n;
    }
    return void 0 !== e.length ? ('number' != typeof e.length || J(e.length) ? l(0) : h(e)) : 'Buffer' === e.type && Array.isArray(e.data) ? h(e.data) : void 0;
}
function E(e) {
    if (e >= s) throw RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + s.toString(16) + ' bytes');
    return 0 | e;
}
function b(e) {
    return +e != e && (e = 0), c.alloc(+e);
}
function y(e, t) {
    if (c.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
    if ('string' != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    var n = e.length,
        r = arguments.length > 2 && !0 === arguments[2];
    if (!r && 0 === n) return 0;
    for (var i = !1; ; )
        switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                return n;
            case 'utf8':
            case 'utf-8':
                return Y(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 2 * n;
            case 'hex':
                return n >>> 1;
            case 'base64':
                return q(e).length;
            default:
                if (i) return r ? -1 : Y(e).length;
                (t = ('' + t).toLowerCase()), (i = !0);
        }
}
function v(e, t, n) {
    var r = !1;
    if (((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0)))) return '';
    for (e || (e = 'utf8'); ; )
        switch (e) {
            case 'hex':
                return j(this, t, n);
            case 'utf8':
            case 'utf-8':
                return D(this, t, n);
            case 'ascii':
                return M(this, t, n);
            case 'latin1':
            case 'binary':
                return k(this, t, n);
            case 'base64':
                return w(this, t, n);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return U(this, t, n);
            default:
                if (r) throw TypeError('Unknown encoding: ' + e);
                (e = (e + '').toLowerCase()), (r = !0);
        }
}
function O(e, t, n) {
    var r = e[t];
    (e[t] = e[n]), (e[n] = r);
}
function I(e, t, n, r, i) {
    if (0 === e.length) return -1;
    if (('string' == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648), J((n *= 1)) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length))
        if (i) return -1;
        else n = e.length - 1;
    else if (n < 0)
        if (!i) return -1;
        else n = 0;
    if (('string' == typeof t && (t = c.from(t, r)), c.isBuffer(t))) return 0 === t.length ? -1 : S(e, t, n, r, i);
    if ('number' == typeof t) {
        if (((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf))
            if (i) return Uint8Array.prototype.indexOf.call(e, t, n);
            else return Uint8Array.prototype.lastIndexOf.call(e, t, n);
        return S(e, [t], n, r, i);
    }
    throw TypeError('val must be string, number or Buffer');
}
function S(e, t, n, r, i) {
    var o,
        a = 1,
        s = e.length,
        l = t.length;
    if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        (a = 2), (s /= 2), (l /= 2), (n /= 2);
    }
    function c(e, t) {
        return 1 === a ? e[t] : e.readUInt16BE(t * a);
    }
    if (i) {
        var u = -1;
        for (o = n; o < s; o++)
            if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                if ((-1 === u && (u = o), o - u + 1 === l)) return u * a;
            } else -1 !== u && (o -= o - u), (u = -1);
    } else
        for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
            for (var d = !0, f = 0; f < l; f++)
                if (c(e, o + f) !== c(t, f)) {
                    d = !1;
                    break;
                }
            if (d) return o;
        }
    return -1;
}
function T(e, t, n, r) {
    n = Number(n) || 0;
    var i = e.length - n;
    r ? (r = Number(r)) > i && (r = i) : (r = i);
    var o = t.length;
    r > o / 2 && (r = o / 2);
    for (var a = 0; a < r; ++a) {
        var s = parseInt(t.substr(2 * a, 2), 16);
        if (J(s)) break;
        e[n + a] = s;
    }
    return a;
}
function N(e, t, n, r) {
    return Q(Y(t, e.length - n), e, n, r);
}
function A(e, t, n, r) {
    return Q(K(t), e, n, r);
}
function C(e, t, n, r) {
    return A(e, t, n, r);
}
function R(e, t, n, r) {
    return Q(q(t), e, n, r);
}
function P(e, t, n, r) {
    return Q(z(t, e.length - n), e, n, r);
}
function w(e, t, n) {
    return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n));
}
function D(e, t, n) {
    n = Math.min(e.length, n);
    for (var r = [], i = t; i < n; ) {
        var o,
            a,
            s,
            l,
            c = e[i],
            u = null,
            d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (i + d <= n)
            switch (d) {
                case 1:
                    c < 128 && (u = c);
                    break;
                case 2:
                    (192 & (o = e[i + 1])) == 128 && (l = ((31 & c) << 6) | (63 & o)) > 127 && (u = l);
                    break;
                case 3:
                    (o = e[i + 1]), (a = e[i + 2]), (192 & o) == 128 && (192 & a) == 128 && (l = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 && (l < 55296 || l > 57343) && (u = l);
                    break;
                case 4:
                    (o = e[i + 1]), (a = e[i + 2]), (s = e[i + 3]), (192 & o) == 128 && (192 & a) == 128 && (192 & s) == 128 && (l = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 && l < 1114112 && (u = l);
            }
        null === u ? ((u = 65533), (d = 1)) : u > 65535 && ((u -= 65536), r.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (1023 & u))), r.push(u), (i += d);
    }
    return x(r);
}
(r = 2147483647),
    (c.TYPED_ARRAY_SUPPORT = (function e() {
        try {
            var e = new Uint8Array(1),
                t = {
                    foo: function () {
                        return 42;
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
        } catch (e) {
            return !1;
        }
    })()),
    c.TYPED_ARRAY_SUPPORT || 'undefined' == typeof console || 'function' != typeof console.error || console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'),
    Object.defineProperty(c.prototype, 'parent', {
        enumerable: !0,
        get: function () {
            if (c.isBuffer(this)) return this.buffer;
        }
    }),
    Object.defineProperty(c.prototype, 'offset', {
        enumerable: !0,
        get: function () {
            if (c.isBuffer(this)) return this.byteOffset;
        }
    }),
    (c.poolSize = 8192),
    (c.from = function (e, t, n) {
        return u(e, t, n);
    }),
    Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(c, Uint8Array),
    (c.alloc = function (e, t, n) {
        return f(e, t, n);
    }),
    (c.allocUnsafe = function (e) {
        return _(e);
    }),
    (c.allocUnsafeSlow = function (e) {
        return _(e);
    }),
    (c.isBuffer = function (e) {
        return null != e && !0 === e._isBuffer && e !== c.prototype;
    }),
    (c.compare = function (e, t) {
        if ((X(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t))) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
            if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
            }
        return n < r ? -1 : +(r < n);
    }),
    (c.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return !0;
            default:
                return !1;
        }
    }),
    (c.concat = function (e, t) {
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return c.alloc(0);
        if (void 0 === t) for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
        var n,
            r = c.allocUnsafe(t),
            i = 0;
        for (n = 0; n < e.length; ++n) {
            var o = e[n];
            if ((X(o, Uint8Array) && (o = c.from(o)), !c.isBuffer(o))) throw TypeError('"list" argument must be an Array of Buffers');
            o.copy(r, i), (i += o.length);
        }
        return r;
    }),
    (c.byteLength = y),
    (c.prototype._isBuffer = !0),
    (c.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw RangeError('Buffer size must be a multiple of 16-bits');
        for (var t = 0; t < e; t += 2) O(this, t, t + 1);
        return this;
    }),
    (c.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw RangeError('Buffer size must be a multiple of 32-bits');
        for (var t = 0; t < e; t += 4) O(this, t, t + 3), O(this, t + 1, t + 2);
        return this;
    }),
    (c.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw RangeError('Buffer size must be a multiple of 64-bits');
        for (var t = 0; t < e; t += 8) O(this, t, t + 7), O(this, t + 1, t + 6), O(this, t + 2, t + 5), O(this, t + 3, t + 4);
        return this;
    }),
    (c.prototype.toString = function () {
        var e = this.length;
        return 0 === e ? '' : 0 == arguments.length ? D(this, 0, e) : v.apply(this, arguments);
    }),
    (c.prototype.toLocaleString = c.prototype.toString),
    (c.prototype.equals = function (e) {
        if (!c.isBuffer(e)) throw TypeError('Argument must be a Buffer');
        return this === e || 0 === c.compare(this, e);
    }),
    (c.prototype.inspect = function () {
        var e = '',
            n = t.INSPECT_MAX_BYTES;
        return (
            (e = this.toString('hex', 0, n)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
            this.length > n && (e += ' ... '),
            '<Buffer ' + e + '>'
        );
    }),
    a && (c.prototype[a] = c.prototype.inspect),
    (c.prototype.compare = function (e, t, n, r, i) {
        if ((X(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e))) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if ((void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length)) throw RangeError('out of range index');
        if (r >= i && t >= n) return 0;
        if (r >= i) return -1;
        if (t >= n) return 1;
        if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) return 0;
        for (var o = i - r, a = n - t, s = Math.min(o, a), l = this.slice(r, i), u = e.slice(t, n), d = 0; d < s; ++d)
            if (l[d] !== u[d]) {
                (o = l[d]), (a = u[d]);
                break;
            }
        return o < a ? -1 : +(a < o);
    }),
    (c.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n);
    }),
    (c.prototype.indexOf = function (e, t, n) {
        return I(this, e, t, n, !0);
    }),
    (c.prototype.lastIndexOf = function (e, t, n) {
        return I(this, e, t, n, !1);
    }),
    (c.prototype.write = function (e, t, n, r) {
        if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
        else if (void 0 === n && 'string' == typeof t) (r = t), (n = this.length), (t = 0);
        else if (isFinite(t)) (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = 'utf8')) : ((r = n), (n = void 0));
        else throw Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        var i = this.length - t;
        if (((void 0 === n || n > i) && (n = i), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw RangeError('Attempt to write outside buffer bounds');
        r || (r = 'utf8');
        for (var o = !1; ; )
            switch (r) {
                case 'hex':
                    return T(this, e, t, n);
                case 'utf8':
                case 'utf-8':
                    return N(this, e, t, n);
                case 'ascii':
                    return A(this, e, t, n);
                case 'latin1':
                case 'binary':
                    return C(this, e, t, n);
                case 'base64':
                    return R(this, e, t, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return P(this, e, t, n);
                default:
                    if (o) throw TypeError('Unknown encoding: ' + r);
                    (r = ('' + r).toLowerCase()), (o = !0);
            }
    }),
    (c.prototype.toJSON = function () {
        return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    });
var L = 4096;
function x(e) {
    var t = e.length;
    if (t <= L) return String.fromCharCode.apply(String, e);
    for (var n = '', r = 0; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += L)));
    return n;
}
function M(e, t, n) {
    var r = '';
    n = Math.min(e.length, n);
    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
    return r;
}
function k(e, t, n) {
    var r = '';
    n = Math.min(e.length, n);
    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
    return r;
}
function j(e, t, n) {
    var r = e.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
    for (var i = '', o = t; o < n; ++o) i += $[e[o]];
    return i;
}
function U(e, t, n) {
    for (var r = e.slice(t, n), i = '', o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
    return i;
}
function G(e, t, n) {
    if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
    if (e + t > n) throw RangeError('Trying to access beyond buffer length');
}
function B(e, t, n, r, i, o) {
    if (!c.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o) throw RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw RangeError('Index out of range');
}
function F(e, t, n, r, i, o) {
    if (n + r > e.length || n < 0) throw RangeError('Index out of range');
}
function V(e, t, n, r, i) {
    return (t *= 1), (n >>>= 0), i || F(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), o.write(e, t, n, r, 23, 4), n + 4;
}
function Z(e, t, n, r, i) {
    return (t *= 1), (n >>>= 0), i || F(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), o.write(e, t, n, r, 52, 8), n + 8;
}
(c.prototype.slice = function (e, t) {
    var n = this.length;
    (e = ~~e), (t = void 0 === t ? n : ~~t), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
    var r = this.subarray(e, t);
    return Object.setPrototypeOf(r, c.prototype), r;
}),
    (c.prototype.readUIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || G(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
        return r;
    }),
    (c.prototype.readUIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || G(e, t, this.length);
        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) r += this[e + --t] * i;
        return r;
    }),
    (c.prototype.readUInt8 = function (e, t) {
        return (e >>>= 0), t || G(e, 1, this.length), this[e];
    }),
    (c.prototype.readUInt16LE = function (e, t) {
        return (e >>>= 0), t || G(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (c.prototype.readUInt16BE = function (e, t) {
        return (e >>>= 0), t || G(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (c.prototype.readUInt32LE = function (e, t) {
        return (e >>>= 0), t || G(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
    }),
    (c.prototype.readUInt32BE = function (e, t) {
        return (e >>>= 0), t || G(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
    }),
    (c.prototype.readIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || G(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }),
    (c.prototype.readIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || G(e, t, this.length);
        for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); ) o += this[e + --r] * i;
        return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
    }),
    (c.prototype.readInt8 = function (e, t) {
        return ((e >>>= 0), t || G(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
    }),
    (c.prototype.readInt16LE = function (e, t) {
        (e >>>= 0), t || G(e, 2, this.length);
        var n = this[e] | (this[e + 1] << 8);
        return 32768 & n ? 4294901760 | n : n;
    }),
    (c.prototype.readInt16BE = function (e, t) {
        (e >>>= 0), t || G(e, 2, this.length);
        var n = this[e + 1] | (this[e] << 8);
        return 32768 & n ? 4294901760 | n : n;
    }),
    (c.prototype.readInt32LE = function (e, t) {
        return (e >>>= 0), t || G(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
    }),
    (c.prototype.readInt32BE = function (e, t) {
        return (e >>>= 0), t || G(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
    }),
    (c.prototype.readFloatLE = function (e, t) {
        return (e >>>= 0), t || G(e, 4, this.length), o.read(this, e, !0, 23, 4);
    }),
    (c.prototype.readFloatBE = function (e, t) {
        return (e >>>= 0), t || G(e, 4, this.length), o.read(this, e, !1, 23, 4);
    }),
    (c.prototype.readDoubleLE = function (e, t) {
        return (e >>>= 0), t || G(e, 8, this.length), o.read(this, e, !0, 52, 8);
    }),
    (c.prototype.readDoubleBE = function (e, t) {
        return (e >>>= 0), t || G(e, 8, this.length), o.read(this, e, !1, 52, 8);
    }),
    (c.prototype.writeUIntLE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), (n >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n) - 1;
            B(this, e, t, n, i, 0);
        }
        var o = 1,
            a = 0;
        for (this[t] = 255 & e; ++a < n && (o *= 256); ) this[t + a] = (e / o) & 255;
        return t + n;
    }),
    (c.prototype.writeUIntBE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), (n >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n) - 1;
            B(this, e, t, n, i, 0);
        }
        var o = n - 1,
            a = 1;
        for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); ) this[t + o] = (e / a) & 255;
        return t + n;
    }),
    (c.prototype.writeUInt8 = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
    }),
    (c.prototype.writeUInt16LE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
    }),
    (c.prototype.writeUInt16BE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
    }),
    (c.prototype.writeUInt32LE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e), t + 4;
    }),
    (c.prototype.writeUInt32BE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
    }),
    (c.prototype.writeIntLE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            B(this, e, t, n, i - 1, -i);
        }
        var o = 0,
            a = 1,
            s = 0;
        for (this[t] = 255 & e; ++o < n && (a *= 256); ) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255);
        return t + n;
    }),
    (c.prototype.writeIntBE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            B(this, e, t, n, i - 1, -i);
        }
        var o = n - 1,
            a = 1,
            s = 0;
        for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); ) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255);
        return t + n;
    }),
    (c.prototype.writeInt8 = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
    }),
    (c.prototype.writeInt16LE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
    }),
    (c.prototype.writeInt16BE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
    }),
    (c.prototype.writeInt32LE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 4, 2147483647, -2147483648), (this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24), t + 4;
    }),
    (c.prototype.writeInt32BE = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
    }),
    (c.prototype.writeFloatLE = function (e, t, n) {
        return V(this, e, t, !0, n);
    }),
    (c.prototype.writeFloatBE = function (e, t, n) {
        return V(this, e, t, !1, n);
    }),
    (c.prototype.writeDoubleLE = function (e, t, n) {
        return Z(this, e, t, !0, n);
    }),
    (c.prototype.writeDoubleBE = function (e, t, n) {
        return Z(this, e, t, !1, n);
    }),
    (c.prototype.copy = function (e, t, n, r) {
        if (!c.isBuffer(e)) throw TypeError('argument should be a Buffer');
        if ((n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length)) return 0;
        if (t < 0) throw RangeError('targetStart out of bounds');
        if (n < 0 || n >= this.length) throw RangeError('Index out of range');
        if (r < 0) throw RangeError('sourceEnd out of bounds');
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var i = r - n;
        if (this === e && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
        else if (this === e && n < t && t < r) for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
        return i;
    }),
    (c.prototype.fill = function (e, t, n, r) {
        if ('string' == typeof e) {
            if (('string' == typeof t ? ((r = t), (t = 0), (n = this.length)) : 'string' == typeof n && ((r = n), (n = this.length)), void 0 !== r && 'string' != typeof r)) throw TypeError('encoding must be a string');
            if ('string' == typeof r && !c.isEncoding(r)) throw TypeError('Unknown encoding: ' + r);
            if (1 === e.length) {
                var i,
                    o = e.charCodeAt(0);
                (('utf8' === r && o < 128) || 'latin1' === r) && (e = o);
            }
        } else 'number' == typeof e ? (e &= 255) : 'boolean' == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw RangeError('Out of range index');
        if (n <= t) return this;
        if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), 'number' == typeof e)) for (i = t; i < n; ++i) this[i] = e;
        else {
            var a = c.isBuffer(e) ? e : c.from(e, r),
                s = a.length;
            if (0 === s) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (i = 0; i < n - t; ++i) this[i + t] = a[i % s];
        }
        return this;
    });
var H = /[^+/0-9A-Za-z-_]/g;
function W(e) {
    if ((e = (e = e.split('=')[0]).trim().replace(H, '')).length < 2) return '';
    for (; e.length % 4 != 0; ) e += '=';
    return e;
}
function Y(e, t) {
    t = t || 1 / 0;
    for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
                if (n > 56319 || a + 1 === r) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                }
                i = n;
                continue;
            }
            if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
            }
            n = (((i - 55296) << 10) | (n - 56320)) + 65536;
        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (((i = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
        } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
        } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else if (n < 1114112) {
            if ((t -= 4) < 0) break;
            o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else throw Error('Invalid code point');
    }
    return o;
}
function K(e) {
    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
    return t;
}
function z(e, t) {
    for (var n, r, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) (r = (n = e.charCodeAt(o)) >> 8), i.push(n % 256), i.push(r);
    return i;
}
function q(e) {
    return i.toByteArray(W(e));
}
function Q(e, t, n, r) {
    for (var i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
    return i;
}
function X(e, t) {
    return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
}
function J(e) {
    return e != e;
}
var $ = (function () {
    for (var e = '0123456789abcdef', t = Array(256), n = 0; n < 16; ++n) for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
    return t;
})();
