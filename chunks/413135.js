var i = n(250683),
    r = n(932093),
    a = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
(t.Buffer = u), (t.SlowBuffer = v), (t.INSPECT_MAX_BYTES = 50);
var s = 2147483647;
function o() {
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
}
function l(e) {
    if (e > s) throw RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, u.prototype), t;
}
function u(e, t, n) {
    if ('number' == typeof e) {
        if ('string' == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
        return _(e);
    }
    return c(e, t, n);
}
function c(e, t, n) {
    if ('string' == typeof e) return p(e, t);
    if (ArrayBuffer.isView(e)) return h(e);
    if (null == e) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
    if (X(e, ArrayBuffer) || (e && X(e.buffer, ArrayBuffer)) || ('undefined' != typeof SharedArrayBuffer && (X(e, SharedArrayBuffer) || (e && X(e.buffer, SharedArrayBuffer))))) return m(e, t, n);
    if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
    var i = e.valueOf && e.valueOf();
    if (null != i && i !== e) return u.from(i, t, n);
    var r = g(e);
    if (r) return r;
    if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof e[Symbol.toPrimitive]) return u.from(e[Symbol.toPrimitive]('string'), t, n);
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
    if ((('string' != typeof t || '' === t) && (t = 'utf8'), !u.isEncoding(t))) throw TypeError('Unknown encoding: ' + t);
    var n = 0 | y(e, t),
        i = l(n),
        r = i.write(e, t);
    return r !== n && (i = i.slice(0, r)), i;
}
function h(e) {
    for (var t = e.length < 0 ? 0 : 0 | E(e.length), n = l(t), i = 0; i < t; i += 1) n[i] = 255 & e[i];
    return n;
}
function m(e, t, n) {
    var i;
    if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
    return Object.setPrototypeOf((i = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n)), u.prototype), i;
}
function g(e) {
    if (u.isBuffer(e)) {
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
function v(e) {
    return +e != e && (e = 0), u.alloc(+e);
}
function y(e, t) {
    if (u.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
    if ('string' != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    var n = e.length,
        i = arguments.length > 2 && !0 === arguments[2];
    if (!i && 0 === n) return 0;
    for (var r = !1; ; )
        switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                return n;
            case 'utf8':
            case 'utf-8':
                return W(e).length;
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
                if (r) return i ? -1 : W(e).length;
                (t = ('' + t).toLowerCase()), (r = !0);
        }
}
function I(e, t, n) {
    var i = !1;
    if (((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0)))) return '';
    for (e || (e = 'utf8'); ; )
        switch (e) {
            case 'hex':
                return U(this, t, n);
            case 'utf8':
            case 'utf-8':
                return x(this, t, n);
            case 'ascii':
                return M(this, t, n);
            case 'latin1':
            case 'binary':
                return k(this, t, n);
            case 'base64':
                return L(this, t, n);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return G(this, t, n);
            default:
                if (i) throw TypeError('Unknown encoding: ' + e);
                (e = (e + '').toLowerCase()), (i = !0);
        }
}
function T(e, t, n) {
    var i = e[t];
    (e[t] = e[n]), (e[n] = i);
}
function b(e, t, n, i, r) {
    if (0 === e.length) return -1;
    if (('string' == typeof n ? ((i = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648), J((n = +n)) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length)) {
        if (r) return -1;
        n = e.length - 1;
    } else if (n < 0) {
        if (!r) return -1;
        n = 0;
    }
    if (('string' == typeof t && (t = u.from(t, i)), u.isBuffer(t))) return 0 === t.length ? -1 : S(e, t, n, i, r);
    if ('number' == typeof t) return ((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf) ? (r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n)) : S(e, [t], n, i, r);
    throw TypeError('val must be string, number or Buffer');
}
function S(e, t, n, i, r) {
    var a,
        s = 1,
        o = e.length,
        l = t.length;
    if (void 0 !== i && ('ucs2' === (i = String(i).toLowerCase()) || 'ucs-2' === i || 'utf16le' === i || 'utf-16le' === i)) {
        if (e.length < 2 || t.length < 2) return -1;
        (s = 2), (o /= 2), (l /= 2), (n /= 2);
    }
    function u(e, t) {
        return 1 === s ? e[t] : e.readUInt16BE(t * s);
    }
    if (r) {
        var c = -1;
        for (a = n; a < o; a++)
            if (u(e, a) === u(t, -1 === c ? 0 : a - c)) {
                if ((-1 === c && (c = a), a - c + 1 === l)) return c * s;
            } else -1 !== c && (a -= a - c), (c = -1);
    } else
        for (n + l > o && (n = o - l), a = n; a >= 0; a--) {
            for (var d = !0, f = 0; f < l; f++)
                if (u(e, a + f) !== u(t, f)) {
                    d = !1;
                    break;
                }
            if (d) return a;
        }
    return -1;
}
function A(e, t, n, i) {
    n = Number(n) || 0;
    var r = e.length - n;
    i ? (i = Number(i)) > r && (i = r) : (i = r);
    var a = t.length;
    i > a / 2 && (i = a / 2);
    for (var s = 0; s < i; ++s) {
        var o = parseInt(t.substr(2 * s, 2), 16);
        if (J(o)) break;
        e[n + s] = o;
    }
    return s;
}
function N(e, t, n, i) {
    return Q(W(t, e.length - n), e, n, i);
}
function C(e, t, n, i) {
    return Q(K(t), e, n, i);
}
function R(e, t, n, i) {
    return C(e, t, n, i);
}
function O(e, t, n, i) {
    return Q(q(t), e, n, i);
}
function D(e, t, n, i) {
    return Q(z(t, e.length - n), e, n, i);
}
function L(e, t, n) {
    return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n));
}
function x(e, t, n) {
    n = Math.min(e.length, n);
    for (var i = [], r = t; r < n; ) {
        var a,
            s,
            o,
            l,
            u = e[r],
            c = null,
            d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (r + d <= n)
            switch (d) {
                case 1:
                    u < 128 && (c = u);
                    break;
                case 2:
                    (192 & (a = e[r + 1])) == 128 && (l = ((31 & u) << 6) | (63 & a)) > 127 && (c = l);
                    break;
                case 3:
                    (a = e[r + 1]), (s = e[r + 2]), (192 & a) == 128 && (192 & s) == 128 && (l = ((15 & u) << 12) | ((63 & a) << 6) | (63 & s)) > 2047 && (l < 55296 || l > 57343) && (c = l);
                    break;
                case 4:
                    (a = e[r + 1]), (s = e[r + 2]), (o = e[r + 3]), (192 & a) == 128 && (192 & s) == 128 && (192 & o) == 128 && (l = ((15 & u) << 18) | ((63 & a) << 12) | ((63 & s) << 6) | (63 & o)) > 65535 && l < 1114112 && (c = l);
            }
        null === c ? ((c = 65533), (d = 1)) : c > 65535 && ((c -= 65536), i.push(((c >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))), i.push(c), (r += d);
    }
    return w(i);
}
(t.kMaxLength = s),
    (u.TYPED_ARRAY_SUPPORT = o()),
    u.TYPED_ARRAY_SUPPORT || 'undefined' == typeof console || 'function' != typeof console.error || console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'),
    Object.defineProperty(u.prototype, 'parent', {
        enumerable: !0,
        get: function () {
            if (u.isBuffer(this)) return this.buffer;
        }
    }),
    Object.defineProperty(u.prototype, 'offset', {
        enumerable: !0,
        get: function () {
            if (u.isBuffer(this)) return this.byteOffset;
        }
    }),
    (u.poolSize = 8192),
    (u.from = function (e, t, n) {
        return c(e, t, n);
    }),
    Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(u, Uint8Array),
    (u.alloc = function (e, t, n) {
        return f(e, t, n);
    }),
    (u.allocUnsafe = function (e) {
        return _(e);
    }),
    (u.allocUnsafeSlow = function (e) {
        return _(e);
    }),
    (u.isBuffer = function (e) {
        return null != e && !0 === e._isBuffer && e !== u.prototype;
    }),
    (u.compare = function (e, t) {
        if ((X(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(e) || !u.isBuffer(t))) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for (var n = e.length, i = t.length, r = 0, a = Math.min(n, i); r < a; ++r)
            if (e[r] !== t[r]) {
                (n = e[r]), (i = t[r]);
                break;
            }
        return n < i ? -1 : i < n ? 1 : 0;
    }),
    (u.isEncoding = function (e) {
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
    (u.concat = function (e, t) {
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return u.alloc(0);
        if (void 0 === t) for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
        var n,
            i = u.allocUnsafe(t),
            r = 0;
        for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if ((X(a, Uint8Array) && (a = u.from(a)), !u.isBuffer(a))) throw TypeError('"list" argument must be an Array of Buffers');
            a.copy(i, r), (r += a.length);
        }
        return i;
    }),
    (u.byteLength = y),
    (u.prototype._isBuffer = !0),
    (u.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw RangeError('Buffer size must be a multiple of 16-bits');
        for (var t = 0; t < e; t += 2) T(this, t, t + 1);
        return this;
    }),
    (u.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw RangeError('Buffer size must be a multiple of 32-bits');
        for (var t = 0; t < e; t += 4) T(this, t, t + 3), T(this, t + 1, t + 2);
        return this;
    }),
    (u.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw RangeError('Buffer size must be a multiple of 64-bits');
        for (var t = 0; t < e; t += 8) T(this, t, t + 7), T(this, t + 1, t + 6), T(this, t + 2, t + 5), T(this, t + 3, t + 4);
        return this;
    }),
    (u.prototype.toString = function () {
        var e = this.length;
        return 0 === e ? '' : 0 == arguments.length ? x(this, 0, e) : I.apply(this, arguments);
    }),
    (u.prototype.toLocaleString = u.prototype.toString),
    (u.prototype.equals = function (e) {
        if (!u.isBuffer(e)) throw TypeError('Argument must be a Buffer');
        return this === e || 0 === u.compare(this, e);
    }),
    (u.prototype.inspect = function () {
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
    a && (u.prototype[a] = u.prototype.inspect),
    (u.prototype.compare = function (e, t, n, i, r) {
        if ((X(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(e))) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if ((void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length)) throw RangeError('out of range index');
        if (i >= r && t >= n) return 0;
        if (i >= r) return -1;
        if (t >= n) return 1;
        if (((t >>>= 0), (n >>>= 0), (i >>>= 0), (r >>>= 0), this === e)) return 0;
        for (var a = r - i, s = n - t, o = Math.min(a, s), l = this.slice(i, r), c = e.slice(t, n), d = 0; d < o; ++d)
            if (l[d] !== c[d]) {
                (a = l[d]), (s = c[d]);
                break;
            }
        return a < s ? -1 : s < a ? 1 : 0;
    }),
    (u.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n);
    }),
    (u.prototype.indexOf = function (e, t, n) {
        return b(this, e, t, n, !0);
    }),
    (u.prototype.lastIndexOf = function (e, t, n) {
        return b(this, e, t, n, !1);
    }),
    (u.prototype.write = function (e, t, n, i) {
        if (void 0 === t) (i = 'utf8'), (n = this.length), (t = 0);
        else if (void 0 === n && 'string' == typeof t) (i = t), (n = this.length), (t = 0);
        else if (isFinite(t)) (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === i && (i = 'utf8')) : ((i = n), (n = void 0));
        else throw Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        var r = this.length - t;
        if (((void 0 === n || n > r) && (n = r), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw RangeError('Attempt to write outside buffer bounds');
        i || (i = 'utf8');
        for (var a = !1; ; )
            switch (i) {
                case 'hex':
                    return A(this, e, t, n);
                case 'utf8':
                case 'utf-8':
                    return N(this, e, t, n);
                case 'ascii':
                    return C(this, e, t, n);
                case 'latin1':
                case 'binary':
                    return R(this, e, t, n);
                case 'base64':
                    return O(this, e, t, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return D(this, e, t, n);
                default:
                    if (a) throw TypeError('Unknown encoding: ' + i);
                    (i = ('' + i).toLowerCase()), (a = !0);
            }
    }),
    (u.prototype.toJSON = function () {
        return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    });
var P = 4096;
function w(e) {
    var t = e.length;
    if (t <= P) return String.fromCharCode.apply(String, e);
    for (var n = '', i = 0; i < t; ) n += String.fromCharCode.apply(String, e.slice(i, (i += P)));
    return n;
}
function M(e, t, n) {
    var i = '';
    n = Math.min(e.length, n);
    for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
    return i;
}
function k(e, t, n) {
    var i = '';
    n = Math.min(e.length, n);
    for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
    return i;
}
function U(e, t, n) {
    var i = e.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
    for (var r = '', a = t; a < n; ++a) r += $[e[a]];
    return r;
}
function G(e, t, n) {
    for (var i = e.slice(t, n), r = '', a = 0; a < i.length; a += 2) r += String.fromCharCode(i[a] + 256 * i[a + 1]);
    return r;
}
function B(e, t, n) {
    if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
    if (e + t > n) throw RangeError('Trying to access beyond buffer length');
}
function Z(e, t, n, i, r, a) {
    if (!u.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (t > r || t < a) throw RangeError('"value" argument is out of bounds');
    if (n + i > e.length) throw RangeError('Index out of range');
}
function F(e, t, n, i, r, a) {
    if (n + i > e.length || n < 0) throw RangeError('Index out of range');
}
function V(e, t, n, i, a) {
    return (t = +t), (n >>>= 0), a || F(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), r.write(e, t, n, i, 23, 4), n + 4;
}
function j(e, t, n, i, a) {
    return (t = +t), (n >>>= 0), a || F(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), r.write(e, t, n, i, 52, 8), n + 8;
}
(u.prototype.slice = function (e, t) {
    var n = this.length;
    (e = ~~e), (t = void 0 === t ? n : ~~t), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
    var i = this.subarray(e, t);
    return Object.setPrototypeOf(i, u.prototype), i;
}),
    (u.prototype.readUIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || B(e, t, this.length);
        for (var i = this[e], r = 1, a = 0; ++a < t && (r *= 256); ) i += this[e + a] * r;
        return i;
    }),
    (u.prototype.readUIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || B(e, t, this.length);
        for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); ) i += this[e + --t] * r;
        return i;
    }),
    (u.prototype.readUInt8 = function (e, t) {
        return (e >>>= 0), t || B(e, 1, this.length), this[e];
    }),
    (u.prototype.readUInt16LE = function (e, t) {
        return (e >>>= 0), t || B(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (u.prototype.readUInt16BE = function (e, t) {
        return (e >>>= 0), t || B(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (u.prototype.readUInt32LE = function (e, t) {
        return (e >>>= 0), t || B(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
    }),
    (u.prototype.readUInt32BE = function (e, t) {
        return (e >>>= 0), t || B(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
    }),
    (u.prototype.readIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || B(e, t, this.length);
        for (var i = this[e], r = 1, a = 0; ++a < t && (r *= 256); ) i += this[e + a] * r;
        return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }),
    (u.prototype.readIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || B(e, t, this.length);
        for (var i = t, r = 1, a = this[e + --i]; i > 0 && (r *= 256); ) a += this[e + --i] * r;
        return a >= (r *= 128) && (a -= Math.pow(2, 8 * t)), a;
    }),
    (u.prototype.readInt8 = function (e, t) {
        return ((e >>>= 0), t || B(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
    }),
    (u.prototype.readInt16LE = function (e, t) {
        (e >>>= 0), t || B(e, 2, this.length);
        var n = this[e] | (this[e + 1] << 8);
        return 32768 & n ? 4294901760 | n : n;
    }),
    (u.prototype.readInt16BE = function (e, t) {
        (e >>>= 0), t || B(e, 2, this.length);
        var n = this[e + 1] | (this[e] << 8);
        return 32768 & n ? 4294901760 | n : n;
    }),
    (u.prototype.readInt32LE = function (e, t) {
        return (e >>>= 0), t || B(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
    }),
    (u.prototype.readInt32BE = function (e, t) {
        return (e >>>= 0), t || B(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
    }),
    (u.prototype.readFloatLE = function (e, t) {
        return (e >>>= 0), t || B(e, 4, this.length), r.read(this, e, !0, 23, 4);
    }),
    (u.prototype.readFloatBE = function (e, t) {
        return (e >>>= 0), t || B(e, 4, this.length), r.read(this, e, !1, 23, 4);
    }),
    (u.prototype.readDoubleLE = function (e, t) {
        return (e >>>= 0), t || B(e, 8, this.length), r.read(this, e, !0, 52, 8);
    }),
    (u.prototype.readDoubleBE = function (e, t) {
        return (e >>>= 0), t || B(e, 8, this.length), r.read(this, e, !1, 52, 8);
    }),
    (u.prototype.writeUIntLE = function (e, t, n, i) {
        if (((e = +e), (t >>>= 0), (n >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n) - 1;
            Z(this, e, t, n, r, 0);
        }
        var a = 1,
            s = 0;
        for (this[t] = 255 & e; ++s < n && (a *= 256); ) this[t + s] = (e / a) & 255;
        return t + n;
    }),
    (u.prototype.writeUIntBE = function (e, t, n, i) {
        if (((e = +e), (t >>>= 0), (n >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n) - 1;
            Z(this, e, t, n, r, 0);
        }
        var a = n - 1,
            s = 1;
        for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); ) this[t + a] = (e / s) & 255;
        return t + n;
    }),
    (u.prototype.writeUInt8 = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
    }),
    (u.prototype.writeUInt16LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
    }),
    (u.prototype.writeUInt16BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
    }),
    (u.prototype.writeUInt32LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e), t + 4;
    }),
    (u.prototype.writeUInt32BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
    }),
    (u.prototype.writeIntLE = function (e, t, n, i) {
        if (((e = +e), (t >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n - 1);
            Z(this, e, t, n, r - 1, -r);
        }
        var a = 0,
            s = 1,
            o = 0;
        for (this[t] = 255 & e; ++a < n && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + a - 1] && (o = 1), (this[t + a] = (((e / s) >> 0) - o) & 255);
        return t + n;
    }),
    (u.prototype.writeIntBE = function (e, t, n, i) {
        if (((e = +e), (t >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n - 1);
            Z(this, e, t, n, r - 1, -r);
        }
        var a = n - 1,
            s = 1,
            o = 0;
        for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + a + 1] && (o = 1), (this[t + a] = (((e / s) >> 0) - o) & 255);
        return t + n;
    }),
    (u.prototype.writeInt8 = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
    }),
    (u.prototype.writeInt16LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
    }),
    (u.prototype.writeInt16BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
    }),
    (u.prototype.writeInt32LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 4, 2147483647, -2147483648), (this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24), t + 4;
    }),
    (u.prototype.writeInt32BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), n || Z(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
    }),
    (u.prototype.writeFloatLE = function (e, t, n) {
        return V(this, e, t, !0, n);
    }),
    (u.prototype.writeFloatBE = function (e, t, n) {
        return V(this, e, t, !1, n);
    }),
    (u.prototype.writeDoubleLE = function (e, t, n) {
        return j(this, e, t, !0, n);
    }),
    (u.prototype.writeDoubleBE = function (e, t, n) {
        return j(this, e, t, !1, n);
    }),
    (u.prototype.copy = function (e, t, n, i) {
        if (!u.isBuffer(e)) throw TypeError('argument should be a Buffer');
        if ((n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || 0 === e.length || 0 === this.length)) return 0;
        if (t < 0) throw RangeError('targetStart out of bounds');
        if (n < 0 || n >= this.length) throw RangeError('Index out of range');
        if (i < 0) throw RangeError('sourceEnd out of bounds');
        i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
        var r = i - n;
        if (this === e && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, i);
        else if (this === e && n < t && t < i) for (var a = r - 1; a >= 0; --a) e[a + t] = this[a + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, i), t);
        return r;
    }),
    (u.prototype.fill = function (e, t, n, i) {
        if ('string' == typeof e) {
            if (('string' == typeof t ? ((i = t), (t = 0), (n = this.length)) : 'string' == typeof n && ((i = n), (n = this.length)), void 0 !== i && 'string' != typeof i)) throw TypeError('encoding must be a string');
            if ('string' == typeof i && !u.isEncoding(i)) throw TypeError('Unknown encoding: ' + i);
            if (1 === e.length) {
                var r,
                    a = e.charCodeAt(0);
                (('utf8' === i && a < 128) || 'latin1' === i) && (e = a);
            }
        } else 'number' == typeof e ? (e &= 255) : 'boolean' == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw RangeError('Out of range index');
        if (n <= t) return this;
        if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), 'number' == typeof e)) for (r = t; r < n; ++r) this[r] = e;
        else {
            var s = u.isBuffer(e) ? e : u.from(e, i),
                o = s.length;
            if (0 === o) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (r = 0; r < n - t; ++r) this[r + t] = s[r % o];
        }
        return this;
    });
var H = /[^+/0-9A-Za-z-_]/g;
function Y(e) {
    if ((e = (e = e.split('=')[0]).trim().replace(H, '')).length < 2) return '';
    for (; e.length % 4 != 0; ) e += '=';
    return e;
}
function W(e, t) {
    t = t || 1 / 0;
    for (var n, i = e.length, r = null, a = [], s = 0; s < i; ++s) {
        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!r) {
                if (n > 56319 || s + 1 === i) {
                    (t -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                }
                r = n;
                continue;
            }
            if (n < 56320) {
                (t -= 3) > -1 && a.push(239, 191, 189), (r = n);
                continue;
            }
            n = (((r - 55296) << 10) | (n - 56320)) + 65536;
        } else r && (t -= 3) > -1 && a.push(239, 191, 189);
        if (((r = null), n < 128)) {
            if ((t -= 1) < 0) break;
            a.push(n);
        } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            a.push((n >> 6) | 192, (63 & n) | 128);
        } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else if (n < 1114112) {
            if ((t -= 4) < 0) break;
            a.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else throw Error('Invalid code point');
    }
    return a;
}
function K(e) {
    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
    return t;
}
function z(e, t) {
    for (var n, i, r = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) (i = (n = e.charCodeAt(a)) >> 8), r.push(n % 256), r.push(i);
    return r;
}
function q(e) {
    return i.toByteArray(Y(e));
}
function Q(e, t, n, i) {
    for (var r = 0; r < i && !(r + n >= t.length) && !(r >= e.length); ++r) t[r + n] = e[r];
    return r;
}
function X(e, t) {
    return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
}
function J(e) {
    return e != e;
}
var $ = (function () {
    for (var e = '0123456789abcdef', t = Array(256), n = 0; n < 16; ++n) for (var i = 16 * n, r = 0; r < 16; ++r) t[i + r] = e[n] + e[r];
    return t;
})();
