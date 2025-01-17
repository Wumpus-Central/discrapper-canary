var i = r(250683),
    a = r(932093),
    s = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
(n.Buffer = c), (n.SlowBuffer = I), (n.INSPECT_MAX_BYTES = 50);
var o = 2147483647;
function l() {
    try {
        var e = new Uint8Array(1),
            n = {
                foo: function () {
                    return 42;
                }
            };
        return Object.setPrototypeOf(n, Uint8Array.prototype), Object.setPrototypeOf(e, n), 42 === e.foo();
    } catch (e) {
        return !1;
    }
}
function u(e) {
    if (e > o) throw RangeError('The value "' + e + '" is invalid for option "size"');
    var n = new Uint8Array(e);
    return Object.setPrototypeOf(n, c.prototype), n;
}
function c(e, n, r) {
    if ('number' == typeof e) {
        if ('string' == typeof n) throw TypeError('The "string" argument must be of type string. Received type number');
        return h(e);
    }
    return d(e, n, r);
}
function d(e, n, r) {
    if ('string' == typeof e) return p(e, n);
    if (ArrayBuffer.isView(e)) return m(e);
    if (null == e) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
    if (J(e, ArrayBuffer) || (e && J(e.buffer, ArrayBuffer)) || ('undefined' != typeof SharedArrayBuffer && (J(e, SharedArrayBuffer) || (e && J(e.buffer, SharedArrayBuffer))))) return g(e, n, r);
    if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
    var i = e.valueOf && e.valueOf();
    if (null != i && i !== e) return c.from(i, n, r);
    var a = E(e);
    if (a) return a;
    if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]('string'), n, r);
    throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
}
function f(e) {
    if ('number' != typeof e) throw TypeError('"size" argument must be of type number');
    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
}
function _(e, n, r) {
    return (f(e), e <= 0) ? u(e) : void 0 !== n ? ('string' == typeof r ? u(e).fill(n, r) : u(e).fill(n)) : u(e);
}
function h(e) {
    return f(e), u(e < 0 ? 0 : 0 | v(e));
}
function p(e, n) {
    if ((('string' != typeof n || '' === n) && (n = 'utf8'), !c.isEncoding(n))) throw TypeError('Unknown encoding: ' + n);
    var r = 0 | T(e, n),
        i = u(r),
        a = i.write(e, n);
    return a !== r && (i = i.slice(0, a)), i;
}
function m(e) {
    for (var n = e.length < 0 ? 0 : 0 | v(e.length), r = u(n), i = 0; i < n; i += 1) r[i] = 255 & e[i];
    return r;
}
function g(e, n, r) {
    var i;
    if (n < 0 || e.byteLength < n) throw RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < n + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
    return Object.setPrototypeOf((i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r)), c.prototype), i;
}
function E(e) {
    if (c.isBuffer(e)) {
        var n = 0 | v(e.length),
            r = u(n);
        return 0 === r.length ? r : (e.copy(r, 0, 0, n), r);
    }
    if (void 0 !== e.length) return 'number' != typeof e.length || $(e.length) ? u(0) : m(e);
    if ('Buffer' === e.type && Array.isArray(e.data)) return m(e.data);
}
function v(e) {
    if (e >= o) throw RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + o.toString(16) + ' bytes');
    return 0 | e;
}
function I(e) {
    return +e != e && (e = 0), c.alloc(+e);
}
function T(e, n) {
    if (c.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || J(e, ArrayBuffer)) return e.byteLength;
    if ('string' != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    var r = e.length,
        i = arguments.length > 2 && !0 === arguments[2];
    if (!i && 0 === r) return 0;
    for (var a = !1; ; )
        switch (n) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                return r;
            case 'utf8':
            case 'utf-8':
                return K(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 2 * r;
            case 'hex':
                return r >>> 1;
            case 'base64':
                return Q(e).length;
            default:
                if (a) return i ? -1 : K(e).length;
                (n = ('' + n).toLowerCase()), (a = !0);
        }
}
function b(e, n, r) {
    var i = !1;
    if (((void 0 === n || n < 0) && (n = 0), n > this.length)) return '';
    if (((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (n >>>= 0))) return '';
    for (!e && (e = 'utf8'); ; )
        switch (e) {
            case 'hex':
                return B(this, n, r);
            case 'utf8':
            case 'utf-8':
                return w(this, n, r);
            case 'ascii':
                return k(this, n, r);
            case 'latin1':
            case 'binary':
                return U(this, n, r);
            case 'base64':
                return x(this, n, r);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return G(this, n, r);
            default:
                if (i) throw TypeError('Unknown encoding: ' + e);
                (e = (e + '').toLowerCase()), (i = !0);
        }
}
function y(e, n, r) {
    var i = e[n];
    (e[n] = e[r]), (e[r] = i);
}
function S(e, n, r, i, a) {
    if (0 === e.length) return -1;
    if (('string' == typeof r ? ((i = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648), $((r = +r)) && (r = a ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)) {
        if (a) return -1;
        r = e.length - 1;
    } else if (r < 0) {
        if (!a) return -1;
        r = 0;
    }
    if (('string' == typeof n && (n = c.from(n, i)), c.isBuffer(n))) return 0 === n.length ? -1 : A(e, n, r, i, a);
    if ('number' == typeof n) {
        if (((n &= 255), 'function' == typeof Uint8Array.prototype.indexOf)) return a ? Uint8Array.prototype.indexOf.call(e, n, r) : Uint8Array.prototype.lastIndexOf.call(e, n, r);
        return A(e, [n], r, i, a);
    }
    throw TypeError('val must be string, number or Buffer');
}
function A(e, n, r, i, a) {
    var s,
        o = 1,
        l = e.length,
        u = n.length;
    if (void 0 !== i && ('ucs2' === (i = String(i).toLowerCase()) || 'ucs-2' === i || 'utf16le' === i || 'utf-16le' === i)) {
        if (e.length < 2 || n.length < 2) return -1;
        (o = 2), (l /= 2), (u /= 2), (r /= 2);
    }
    function c(e, n) {
        return 1 === o ? e[n] : e.readUInt16BE(n * o);
    }
    if (a) {
        var d = -1;
        for (s = r; s < l; s++)
            if (c(e, s) === c(n, -1 === d ? 0 : s - d)) {
                if ((-1 === d && (d = s), s - d + 1 === u)) return d * o;
            } else -1 !== d && (s -= s - d), (d = -1);
    } else
        for (r + u > l && (r = l - u), s = r; s >= 0; s--) {
            for (var f = !0, _ = 0; _ < u; _++)
                if (c(e, s + _) !== c(n, _)) {
                    f = !1;
                    break;
                }
            if (f) return s;
        }
    return -1;
}
function N(e, n, r, i) {
    r = Number(r) || 0;
    var a = e.length - r;
    i ? (i = Number(i)) > a && (i = a) : (i = a);
    var s = n.length;
    i > s / 2 && (i = s / 2);
    for (var o = 0; o < i; ++o) {
        var l = parseInt(n.substr(2 * o, 2), 16);
        if ($(l)) break;
        e[r + o] = l;
    }
    return o;
}
function C(e, n, r, i) {
    return X(K(n, e.length - r), e, r, i);
}
function R(e, n, r, i) {
    return X(z(n), e, r, i);
}
function O(e, n, r, i) {
    return R(e, n, r, i);
}
function D(e, n, r, i) {
    return X(Q(n), e, r, i);
}
function L(e, n, r, i) {
    return X(q(n, e.length - r), e, r, i);
}
function x(e, n, r) {
    return 0 === n && r === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(n, r));
}
function w(e, n, r) {
    r = Math.min(e.length, r);
    for (var i = [], a = n; a < r; ) {
        var s,
            o,
            l,
            u,
            c = e[a],
            d = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (a + f <= r)
            switch (f) {
                case 1:
                    c < 128 && (d = c);
                    break;
                case 2:
                    (192 & (s = e[a + 1])) == 128 && (u = ((31 & c) << 6) | (63 & s)) > 127 && (d = u);
                    break;
                case 3:
                    (s = e[a + 1]), (o = e[a + 2]), (192 & s) == 128 && (192 & o) == 128 && (u = ((15 & c) << 12) | ((63 & s) << 6) | (63 & o)) > 2047 && (u < 55296 || u > 57343) && (d = u);
                    break;
                case 4:
                    (s = e[a + 1]), (o = e[a + 2]), (l = e[a + 3]), (192 & s) == 128 && (192 & o) == 128 && (192 & l) == 128 && (u = ((15 & c) << 18) | ((63 & s) << 12) | ((63 & o) << 6) | (63 & l)) > 65535 && u < 1114112 && (d = u);
            }
        null === d ? ((d = 65533), (f = 1)) : d > 65535 && ((d -= 65536), i.push(((d >>> 10) & 1023) | 55296), (d = 56320 | (1023 & d))), i.push(d), (a += f);
    }
    return M(i);
}
(n.kMaxLength = o),
    (c.TYPED_ARRAY_SUPPORT = l()),
    !c.TYPED_ARRAY_SUPPORT && 'undefined' != typeof console && 'function' == typeof console.error && console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'),
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
    (c.from = function (e, n, r) {
        return d(e, n, r);
    }),
    Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(c, Uint8Array),
    (c.alloc = function (e, n, r) {
        return _(e, n, r);
    }),
    (c.allocUnsafe = function (e) {
        return h(e);
    }),
    (c.allocUnsafeSlow = function (e) {
        return h(e);
    }),
    (c.isBuffer = function (e) {
        return null != e && !0 === e._isBuffer && e !== c.prototype;
    }),
    (c.compare = function (e, n) {
        if ((J(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), J(n, Uint8Array) && (n = c.from(n, n.offset, n.byteLength)), !c.isBuffer(e) || !c.isBuffer(n))) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === n) return 0;
        for (var r = e.length, i = n.length, a = 0, s = Math.min(r, i); a < s; ++a)
            if (e[a] !== n[a]) {
                (r = e[a]), (i = n[a]);
                break;
            }
        return r < i ? -1 : i < r ? 1 : 0;
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
    (c.concat = function (e, n) {
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return c.alloc(0);
        if (void 0 === n) for (r = 0, n = 0; r < e.length; ++r) n += e[r].length;
        var r,
            i = c.allocUnsafe(n),
            a = 0;
        for (r = 0; r < e.length; ++r) {
            var s = e[r];
            if ((J(s, Uint8Array) && (s = c.from(s)), !c.isBuffer(s))) throw TypeError('"list" argument must be an Array of Buffers');
            s.copy(i, a), (a += s.length);
        }
        return i;
    }),
    (c.byteLength = T),
    (c.prototype._isBuffer = !0),
    (c.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw RangeError('Buffer size must be a multiple of 16-bits');
        for (var n = 0; n < e; n += 2) y(this, n, n + 1);
        return this;
    }),
    (c.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw RangeError('Buffer size must be a multiple of 32-bits');
        for (var n = 0; n < e; n += 4) y(this, n, n + 3), y(this, n + 1, n + 2);
        return this;
    }),
    (c.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw RangeError('Buffer size must be a multiple of 64-bits');
        for (var n = 0; n < e; n += 8) y(this, n, n + 7), y(this, n + 1, n + 6), y(this, n + 2, n + 5), y(this, n + 3, n + 4);
        return this;
    }),
    (c.prototype.toString = function () {
        var e = this.length;
        return 0 === e ? '' : 0 == arguments.length ? w(this, 0, e) : b.apply(this, arguments);
    }),
    (c.prototype.toLocaleString = c.prototype.toString),
    (c.prototype.equals = function (e) {
        if (!c.isBuffer(e)) throw TypeError('Argument must be a Buffer');
        return this === e || 0 === c.compare(this, e);
    }),
    (c.prototype.inspect = function () {
        var e = '',
            r = n.INSPECT_MAX_BYTES;
        return (
            (e = this.toString('hex', 0, r)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
            this.length > r && (e += ' ... '),
            '<Buffer ' + e + '>'
        );
    }),
    s && (c.prototype[s] = c.prototype.inspect),
    (c.prototype.compare = function (e, n, r, i, a) {
        if ((J(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e))) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if ((void 0 === n && (n = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === a && (a = this.length), n < 0 || r > e.length || i < 0 || a > this.length)) throw RangeError('out of range index');
        if (i >= a && n >= r) return 0;
        if (i >= a) return -1;
        if (n >= r) return 1;
        if (((n >>>= 0), (r >>>= 0), (i >>>= 0), (a >>>= 0), this === e)) return 0;
        for (var s = a - i, o = r - n, l = Math.min(s, o), u = this.slice(i, a), d = e.slice(n, r), f = 0; f < l; ++f)
            if (u[f] !== d[f]) {
                (s = u[f]), (o = d[f]);
                break;
            }
        return s < o ? -1 : o < s ? 1 : 0;
    }),
    (c.prototype.includes = function (e, n, r) {
        return -1 !== this.indexOf(e, n, r);
    }),
    (c.prototype.indexOf = function (e, n, r) {
        return S(this, e, n, r, !0);
    }),
    (c.prototype.lastIndexOf = function (e, n, r) {
        return S(this, e, n, r, !1);
    }),
    (c.prototype.write = function (e, n, r, i) {
        if (void 0 === n) (i = 'utf8'), (r = this.length), (n = 0);
        else if (void 0 === r && 'string' == typeof n) (i = n), (r = this.length), (n = 0);
        else if (isFinite(n)) (n >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === i && (i = 'utf8')) : ((i = r), (r = void 0));
        else throw Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        var a = this.length - n;
        if (((void 0 === r || r > a) && (r = a), (e.length > 0 && (r < 0 || n < 0)) || n > this.length)) throw RangeError('Attempt to write outside buffer bounds');
        !i && (i = 'utf8');
        for (var s = !1; ; )
            switch (i) {
                case 'hex':
                    return N(this, e, n, r);
                case 'utf8':
                case 'utf-8':
                    return C(this, e, n, r);
                case 'ascii':
                    return R(this, e, n, r);
                case 'latin1':
                case 'binary':
                    return O(this, e, n, r);
                case 'base64':
                    return D(this, e, n, r);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return L(this, e, n, r);
                default:
                    if (s) throw TypeError('Unknown encoding: ' + i);
                    (i = ('' + i).toLowerCase()), (s = !0);
            }
    }),
    (c.prototype.toJSON = function () {
        return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    });
var P = 4096;
function M(e) {
    var n = e.length;
    if (n <= P) return String.fromCharCode.apply(String, e);
    for (var r = '', i = 0; i < n; ) r += String.fromCharCode.apply(String, e.slice(i, (i += P)));
    return r;
}
function k(e, n, r) {
    var i = '';
    r = Math.min(e.length, r);
    for (var a = n; a < r; ++a) i += String.fromCharCode(127 & e[a]);
    return i;
}
function U(e, n, r) {
    var i = '';
    r = Math.min(e.length, r);
    for (var a = n; a < r; ++a) i += String.fromCharCode(e[a]);
    return i;
}
function B(e, n, r) {
    var i = e.length;
    (!n || n < 0) && (n = 0), (!r || r < 0 || r > i) && (r = i);
    for (var a = '', s = n; s < r; ++s) a += ee[e[s]];
    return a;
}
function G(e, n, r) {
    for (var i = e.slice(n, r), a = '', s = 0; s < i.length; s += 2) a += String.fromCharCode(i[s] + 256 * i[s + 1]);
    return a;
}
function Z(e, n, r) {
    if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
    if (e + n > r) throw RangeError('Trying to access beyond buffer length');
}
function F(e, n, r, i, a, s) {
    if (!c.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (n > a || n < s) throw RangeError('"value" argument is out of bounds');
    if (r + i > e.length) throw RangeError('Index out of range');
}
function V(e, n, r, i, a, s) {
    if (r + i > e.length || r < 0) throw RangeError('Index out of range');
}
function j(e, n, r, i, s) {
    return (n = +n), (r >>>= 0), !s && V(e, n, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), a.write(e, n, r, i, 23, 4), r + 4;
}
function H(e, n, r, i, s) {
    return (n = +n), (r >>>= 0), !s && V(e, n, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), a.write(e, n, r, i, 52, 8), r + 8;
}
(c.prototype.slice = function (e, n) {
    var r = this.length;
    (e = ~~e), (n = void 0 === n ? r : ~~n), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), n < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < e && (n = e);
    var i = this.subarray(e, n);
    return Object.setPrototypeOf(i, c.prototype), i;
}),
    (c.prototype.readUIntLE = function (e, n, r) {
        (e >>>= 0), (n >>>= 0), !r && Z(e, n, this.length);
        for (var i = this[e], a = 1, s = 0; ++s < n && (a *= 256); ) i += this[e + s] * a;
        return i;
    }),
    (c.prototype.readUIntBE = function (e, n, r) {
        (e >>>= 0), (n >>>= 0), !r && Z(e, n, this.length);
        for (var i = this[e + --n], a = 1; n > 0 && (a *= 256); ) i += this[e + --n] * a;
        return i;
    }),
    (c.prototype.readUInt8 = function (e, n) {
        return (e >>>= 0), !n && Z(e, 1, this.length), this[e];
    }),
    (c.prototype.readUInt16LE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (c.prototype.readUInt16BE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (c.prototype.readUInt32LE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
    }),
    (c.prototype.readUInt32BE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
    }),
    (c.prototype.readIntLE = function (e, n, r) {
        (e >>>= 0), (n >>>= 0), !r && Z(e, n, this.length);
        for (var i = this[e], a = 1, s = 0; ++s < n && (a *= 256); ) i += this[e + s] * a;
        return i >= (a *= 128) && (i -= Math.pow(2, 8 * n)), i;
    }),
    (c.prototype.readIntBE = function (e, n, r) {
        (e >>>= 0), (n >>>= 0), !r && Z(e, n, this.length);
        for (var i = n, a = 1, s = this[e + --i]; i > 0 && (a *= 256); ) s += this[e + --i] * a;
        return s >= (a *= 128) && (s -= Math.pow(2, 8 * n)), s;
    }),
    (c.prototype.readInt8 = function (e, n) {
        return ((e >>>= 0), !n && Z(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
    }),
    (c.prototype.readInt16LE = function (e, n) {
        (e >>>= 0), !n && Z(e, 2, this.length);
        var r = this[e] | (this[e + 1] << 8);
        return 32768 & r ? 4294901760 | r : r;
    }),
    (c.prototype.readInt16BE = function (e, n) {
        (e >>>= 0), !n && Z(e, 2, this.length);
        var r = this[e + 1] | (this[e] << 8);
        return 32768 & r ? 4294901760 | r : r;
    }),
    (c.prototype.readInt32LE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
    }),
    (c.prototype.readInt32BE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
    }),
    (c.prototype.readFloatLE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 4, this.length), a.read(this, e, !0, 23, 4);
    }),
    (c.prototype.readFloatBE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 4, this.length), a.read(this, e, !1, 23, 4);
    }),
    (c.prototype.readDoubleLE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 8, this.length), a.read(this, e, !0, 52, 8);
    }),
    (c.prototype.readDoubleBE = function (e, n) {
        return (e >>>= 0), !n && Z(e, 8, this.length), a.read(this, e, !1, 52, 8);
    }),
    (c.prototype.writeUIntLE = function (e, n, r, i) {
        if (((e = +e), (n >>>= 0), (r >>>= 0), !i)) {
            var a = Math.pow(2, 8 * r) - 1;
            F(this, e, n, r, a, 0);
        }
        var s = 1,
            o = 0;
        for (this[n] = 255 & e; ++o < r && (s *= 256); ) this[n + o] = (e / s) & 255;
        return n + r;
    }),
    (c.prototype.writeUIntBE = function (e, n, r, i) {
        if (((e = +e), (n >>>= 0), (r >>>= 0), !i)) {
            var a = Math.pow(2, 8 * r) - 1;
            F(this, e, n, r, a, 0);
        }
        var s = r - 1,
            o = 1;
        for (this[n + s] = 255 & e; --s >= 0 && (o *= 256); ) this[n + s] = (e / o) & 255;
        return n + r;
    }),
    (c.prototype.writeUInt8 = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 1, 255, 0), (this[n] = 255 & e), n + 1;
    }),
    (c.prototype.writeUInt16LE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 2, 65535, 0), (this[n] = 255 & e), (this[n + 1] = e >>> 8), n + 2;
    }),
    (c.prototype.writeUInt16BE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 2, 65535, 0), (this[n] = e >>> 8), (this[n + 1] = 255 & e), n + 2;
    }),
    (c.prototype.writeUInt32LE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 4, 4294967295, 0), (this[n + 3] = e >>> 24), (this[n + 2] = e >>> 16), (this[n + 1] = e >>> 8), (this[n] = 255 & e), n + 4;
    }),
    (c.prototype.writeUInt32BE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 4, 4294967295, 0), (this[n] = e >>> 24), (this[n + 1] = e >>> 16), (this[n + 2] = e >>> 8), (this[n + 3] = 255 & e), n + 4;
    }),
    (c.prototype.writeIntLE = function (e, n, r, i) {
        if (((e = +e), (n >>>= 0), !i)) {
            var a = Math.pow(2, 8 * r - 1);
            F(this, e, n, r, a - 1, -a);
        }
        var s = 0,
            o = 1,
            l = 0;
        for (this[n] = 255 & e; ++s < r && (o *= 256); ) e < 0 && 0 === l && 0 !== this[n + s - 1] && (l = 1), (this[n + s] = (((e / o) >> 0) - l) & 255);
        return n + r;
    }),
    (c.prototype.writeIntBE = function (e, n, r, i) {
        if (((e = +e), (n >>>= 0), !i)) {
            var a = Math.pow(2, 8 * r - 1);
            F(this, e, n, r, a - 1, -a);
        }
        var s = r - 1,
            o = 1,
            l = 0;
        for (this[n + s] = 255 & e; --s >= 0 && (o *= 256); ) e < 0 && 0 === l && 0 !== this[n + s + 1] && (l = 1), (this[n + s] = (((e / o) >> 0) - l) & 255);
        return n + r;
    }),
    (c.prototype.writeInt8 = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[n] = 255 & e), n + 1;
    }),
    (c.prototype.writeInt16LE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 2, 32767, -32768), (this[n] = 255 & e), (this[n + 1] = e >>> 8), n + 2;
    }),
    (c.prototype.writeInt16BE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 2, 32767, -32768), (this[n] = e >>> 8), (this[n + 1] = 255 & e), n + 2;
    }),
    (c.prototype.writeInt32LE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 4, 2147483647, -2147483648), (this[n] = 255 & e), (this[n + 1] = e >>> 8), (this[n + 2] = e >>> 16), (this[n + 3] = e >>> 24), n + 4;
    }),
    (c.prototype.writeInt32BE = function (e, n, r) {
        return (e = +e), (n >>>= 0), !r && F(this, e, n, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[n] = e >>> 24), (this[n + 1] = e >>> 16), (this[n + 2] = e >>> 8), (this[n + 3] = 255 & e), n + 4;
    }),
    (c.prototype.writeFloatLE = function (e, n, r) {
        return j(this, e, n, !0, r);
    }),
    (c.prototype.writeFloatBE = function (e, n, r) {
        return j(this, e, n, !1, r);
    }),
    (c.prototype.writeDoubleLE = function (e, n, r) {
        return H(this, e, n, !0, r);
    }),
    (c.prototype.writeDoubleBE = function (e, n, r) {
        return H(this, e, n, !1, r);
    }),
    (c.prototype.copy = function (e, n, r, i) {
        if (!c.isBuffer(e)) throw TypeError('argument should be a Buffer');
        if ((!r && (r = 0), !i && 0 !== i && (i = this.length), n >= e.length && (n = e.length), !n && (n = 0), i > 0 && i < r && (i = r), i === r || 0 === e.length || 0 === this.length)) return 0;
        if (n < 0) throw RangeError('targetStart out of bounds');
        if (r < 0 || r >= this.length) throw RangeError('Index out of range');
        if (i < 0) throw RangeError('sourceEnd out of bounds');
        i > this.length && (i = this.length), e.length - n < i - r && (i = e.length - n + r);
        var a = i - r;
        if (this === e && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, r, i);
        else if (this === e && r < n && n < i) for (var s = a - 1; s >= 0; --s) e[s + n] = this[s + r];
        else Uint8Array.prototype.set.call(e, this.subarray(r, i), n);
        return a;
    }),
    (c.prototype.fill = function (e, n, r, i) {
        if ('string' == typeof e) {
            if (('string' == typeof n ? ((i = n), (n = 0), (r = this.length)) : 'string' == typeof r && ((i = r), (r = this.length)), void 0 !== i && 'string' != typeof i)) throw TypeError('encoding must be a string');
            if ('string' == typeof i && !c.isEncoding(i)) throw TypeError('Unknown encoding: ' + i);
            if (1 === e.length) {
                var a,
                    s = e.charCodeAt(0);
                (('utf8' === i && s < 128) || 'latin1' === i) && (e = s);
            }
        } else 'number' == typeof e ? (e &= 255) : 'boolean' == typeof e && (e = Number(e));
        if (n < 0 || this.length < n || this.length < r) throw RangeError('Out of range index');
        if (r <= n) return this;
        if (((n >>>= 0), (r = void 0 === r ? this.length : r >>> 0), !e && (e = 0), 'number' == typeof e)) for (a = n; a < r; ++a) this[a] = e;
        else {
            var o = c.isBuffer(e) ? e : c.from(e, i),
                l = o.length;
            if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (a = 0; a < r - n; ++a) this[a + n] = o[a % l];
        }
        return this;
    });
var Y = /[^+/0-9A-Za-z-_]/g;
function W(e) {
    if ((e = (e = e.split('=')[0]).trim().replace(Y, '')).length < 2) return '';
    for (; e.length % 4 != 0; ) e += '=';
    return e;
}
function K(e, n) {
    n = n || 1 / 0;
    for (var r, i = e.length, a = null, s = [], o = 0; o < i; ++o) {
        if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
            if (!a) {
                if (r > 56319) {
                    (n -= 3) > -1 && s.push(239, 191, 189);
                    continue;
                }
                if (o + 1 === i) {
                    (n -= 3) > -1 && s.push(239, 191, 189);
                    continue;
                }
                a = r;
                continue;
            }
            if (r < 56320) {
                (n -= 3) > -1 && s.push(239, 191, 189), (a = r);
                continue;
            }
            r = (((a - 55296) << 10) | (r - 56320)) + 65536;
        } else a && (n -= 3) > -1 && s.push(239, 191, 189);
        if (((a = null), r < 128)) {
            if ((n -= 1) < 0) break;
            s.push(r);
        } else if (r < 2048) {
            if ((n -= 2) < 0) break;
            s.push((r >> 6) | 192, (63 & r) | 128);
        } else if (r < 65536) {
            if ((n -= 3) < 0) break;
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
        } else if (r < 1114112) {
            if ((n -= 4) < 0) break;
            s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
        } else throw Error('Invalid code point');
    }
    return s;
}
function z(e) {
    for (var n = [], r = 0; r < e.length; ++r) n.push(255 & e.charCodeAt(r));
    return n;
}
function q(e, n) {
    for (var r, i, a, s = [], o = 0; o < e.length && !((n -= 2) < 0); ++o) (i = (r = e.charCodeAt(o)) >> 8), (a = r % 256), s.push(a), s.push(i);
    return s;
}
function Q(e) {
    return i.toByteArray(W(e));
}
function X(e, n, r, i) {
    for (var a = 0; a < i && !(a + r >= n.length) && !(a >= e.length); ++a) n[a + r] = e[a];
    return a;
}
function J(e, n) {
    return e instanceof n || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === n.name);
}
function $(e) {
    return e != e;
}
var ee = (function () {
    for (var e = '0123456789abcdef', n = Array(256), r = 0; r < 16; ++r) {
        for (var i = 16 * r, a = 0; a < 16; ++a) n[i + a] = e[r] + e[a];
    }
    return n;
})();
