"use strict";
var i = n(827762),
    r = n(936287),
    s =
        "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
function a(e) {
    if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, o.prototype), t;
}
function o(e, t, n) {
    if ("number" == typeof e) {
        if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
        return c(e);
    }
    return l(e, t, n);
}
function l(e, t, n) {
    if ("string" == typeof e) {
        var i = e,
            r = t;
        if ((("string" != typeof r || "" === r) && (r = "utf8"), !o.isEncoding(r)))
            throw TypeError("Unknown encoding: " + r);
        var s = 0 | h(i, r),
            l = a(s),
            u = l.write(i, r);
        return u !== s && (l = l.slice(0, u)), l;
    }
    if (ArrayBuffer.isView(e)) return d(e);
    if (null == e)
        throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof e,
        );
    if (
        b(e, ArrayBuffer) ||
        (e && b(e.buffer, ArrayBuffer)) ||
        ("u" > typeof SharedArrayBuffer && (b(e, SharedArrayBuffer) || (e && b(e.buffer, SharedArrayBuffer))))
    )
        return (function (e, t, n) {
            var i;
            if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
            return (
                Object.setPrototypeOf(
                    (i =
                        void 0 === t && void 0 === n
                            ? new Uint8Array(e)
                            : void 0 === n
                              ? new Uint8Array(e, t)
                              : new Uint8Array(e, t, n)),
                    o.prototype,
                ),
                i
            );
        })(e, t, n);
    if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
    var c = e.valueOf && e.valueOf();
    if (null != c && c !== e) return o.from(c, t, n);
    var f = (function (e) {
        if (o.isBuffer(e)) {
            var t = 0 | _(e.length),
                n = a(t);
            return 0 === n.length || e.copy(n, 0, 0, t), n;
        }
        return void 0 !== e.length
            ? "number" != typeof e.length ||
              (function (e) {
                  return e != e;
              })(e.length)
                ? a(0)
                : d(e)
            : "Buffer" === e.type && Array.isArray(e.data)
              ? d(e.data)
              : void 0;
    })(e);
    if (f) return f;
    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
        return o.from(e[Symbol.toPrimitive]("string"), t, n);
    throw TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e,
    );
}
function u(e) {
    if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
}
function c(e) {
    return u(e), a(e < 0 ? 0 : 0 | _(e));
}
function d(e) {
    for (var t = e.length < 0 ? 0 : 0 | _(e.length), n = a(t), i = 0; i < t; i += 1) n[i] = 255 & e[i];
    return n;
}
(t.Buffer = o),
    (t.SlowBuffer = function (e) {
        return +e != e && (e = 0), o.alloc(+e);
    }),
    (t.INSPECT_MAX_BYTES = 50),
    (t.kMaxLength = 0x7fffffff),
    (o.TYPED_ARRAY_SUPPORT = (function () {
        try {
            var e = new Uint8Array(1),
                t = {
                    foo: function () {
                        return 42;
                    },
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
        } catch (e) {
            return !1;
        }
    })()),
    !o.TYPED_ARRAY_SUPPORT &&
        "u" > typeof console &&
        "function" == typeof console.error &&
        console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
        ),
    Object.defineProperty(o.prototype, "parent", {
        enumerable: !0,
        get: function () {
            if (o.isBuffer(this)) return this.buffer;
        },
    }),
    Object.defineProperty(o.prototype, "offset", {
        enumerable: !0,
        get: function () {
            if (o.isBuffer(this)) return this.byteOffset;
        },
    }),
    (o.poolSize = 8192),
    (o.from = function (e, t, n) {
        return l(e, t, n);
    }),
    Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(o, Uint8Array),
    (o.alloc = function (e, t, n) {
        return (u(e), e <= 0) ? a(e) : void 0 !== t ? ("string" == typeof n ? a(e).fill(t, n) : a(e).fill(t)) : a(e);
    }),
    (o.allocUnsafe = function (e) {
        return c(e);
    }),
    (o.allocUnsafeSlow = function (e) {
        return c(e);
    });
function _(e) {
    if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
    return 0 | e;
}
function h(e, t) {
    if (o.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || b(e, ArrayBuffer)) return e.byteLength;
    if ("string" != typeof e)
        throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e,
        );
    var n = e.length,
        i = arguments.length > 2 && !0 === arguments[2];
    if (!i && 0 === n) return 0;
    for (var r = !1; ; )
        switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
                return N(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return R(e).length;
            default:
                if (r) return i ? -1 : N(e).length;
                (t = ("" + t).toLowerCase()), (r = !0);
        }
}
function f(e, t, n) {
    var r,
        s,
        a,
        o = !1;
    if (
        ((void 0 === t || t < 0) && (t = 0),
        t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0)))
    )
        return "";
    for (e || (e = "utf8"); ; )
        switch (e) {
            case "hex":
                return (function (e, t, n) {
                    var i = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                    for (var r = "", s = t; s < n; ++s) r += D[e[s]];
                    return r;
                })(this, t, n);
            case "utf8":
            case "utf-8":
                return g(this, t, n);
            case "ascii":
                return (function (e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
                    return i;
                })(this, t, n);
            case "latin1":
            case "binary":
                return (function (e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
                    return i;
                })(this, t, n);
            case "base64":
                return (
                    (r = this),
                    (s = t),
                    (a = n),
                    0 === s && a === r.length ? i.fromByteArray(r) : i.fromByteArray(r.slice(s, a))
                );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return (function (e, t, n) {
                    for (var i = e.slice(t, n), r = "", s = 0; s < i.length; s += 2)
                        r += String.fromCharCode(i[s] + 256 * i[s + 1]);
                    return r;
                })(this, t, n);
            default:
                if (o) throw TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (o = !0);
        }
}
function p(e, t, n) {
    var i = e[t];
    (e[t] = e[n]), (e[n] = i);
}
function E(e, t, n, i, r) {
    var s;
    if (0 === e.length) return -1;
    if (
        ("string" == typeof n
            ? ((i = n), (n = 0))
            : n > 0x7fffffff
              ? (n = 0x7fffffff)
              : n < -0x80000000 && (n = -0x80000000),
        (s = n *= 1) != s && (n = r ? 0 : e.length - 1),
        n < 0 && (n = e.length + n),
        n >= e.length)
    )
        if (r) return -1;
        else n = e.length - 1;
    else if (n < 0)
        if (!r) return -1;
        else n = 0;
    if (("string" == typeof t && (t = o.from(t, i)), o.isBuffer(t))) return 0 === t.length ? -1 : m(e, t, n, i, r);
    if ("number" == typeof t) {
        if (((t &= 255), "function" == typeof Uint8Array.prototype.indexOf))
            if (r) return Uint8Array.prototype.indexOf.call(e, t, n);
            else return Uint8Array.prototype.lastIndexOf.call(e, t, n);
        return m(e, [t], n, i, r);
    }
    throw TypeError("val must be string, number or Buffer");
}
function m(e, t, n, i, r) {
    var s,
        a = 1,
        o = e.length,
        l = t.length;
    if (
        void 0 !== i &&
        ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)
    ) {
        if (e.length < 2 || t.length < 2) return -1;
        (a = 2), (o /= 2), (l /= 2), (n /= 2);
    }
    function u(e, t) {
        return 1 === a ? e[t] : e.readUInt16BE(t * a);
    }
    if (r) {
        var c = -1;
        for (s = n; s < o; s++)
            if (u(e, s) === u(t, -1 === c ? 0 : s - c)) {
                if ((-1 === c && (c = s), s - c + 1 === l)) return c * a;
            } else -1 !== c && (s -= s - c), (c = -1);
    } else
        for (n + l > o && (n = o - l), s = n; s >= 0; s--) {
            for (var d = !0, _ = 0; _ < l; _++)
                if (u(e, s + _) !== u(t, _)) {
                    d = !1;
                    break;
                }
            if (d) return s;
        }
    return -1;
}
(o.isBuffer = function (e) {
    return null != e && !0 === e._isBuffer && e !== o.prototype;
}),
    (o.compare = function (e, t) {
        if (
            (b(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)),
            b(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
            !o.isBuffer(e) || !o.isBuffer(t))
        )
            throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for (var n = e.length, i = t.length, r = 0, s = Math.min(n, i); r < s; ++r)
            if (e[r] !== t[r]) {
                (n = e[r]), (i = t[r]);
                break;
            }
        return n < i ? -1 : +(i < n);
    }),
    (o.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    }),
    (o.concat = function (e, t) {
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return o.alloc(0);
        if (void 0 === t) for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
        var n,
            i = o.allocUnsafe(t),
            r = 0;
        for (n = 0; n < e.length; ++n) {
            var s = e[n];
            if ((b(s, Uint8Array) && (s = o.from(s)), !o.isBuffer(s)))
                throw TypeError('"list" argument must be an Array of Buffers');
            s.copy(i, r), (r += s.length);
        }
        return i;
    }),
    (o.byteLength = h),
    (o.prototype._isBuffer = !0),
    (o.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) p(this, t, t + 1);
        return this;
    }),
    (o.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
        return this;
    }),
    (o.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8)
            p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
        return this;
    }),
    (o.prototype.toString = function () {
        var e = this.length;
        return 0 === e ? "" : 0 == arguments.length ? g(this, 0, e) : f.apply(this, arguments);
    }),
    (o.prototype.toLocaleString = o.prototype.toString),
    (o.prototype.equals = function (e) {
        if (!o.isBuffer(e)) throw TypeError("Argument must be a Buffer");
        return this === e || 0 === o.compare(this, e);
    }),
    (o.prototype.inspect = function () {
        var e = "",
            n = t.INSPECT_MAX_BYTES;
        return (
            (e = this.toString("hex", 0, n)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
            this.length > n && (e += " ... "),
            "<Buffer " + e + ">"
        );
    }),
    s && (o.prototype[s] = o.prototype.inspect),
    (o.prototype.compare = function (e, t, n, i, r) {
        if ((b(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)))
            throw TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e,
            );
        if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === r && (r = this.length),
            t < 0 || n > e.length || i < 0 || r > this.length)
        )
            throw RangeError("out of range index");
        if (i >= r && t >= n) return 0;
        if (i >= r) return -1;
        if (t >= n) return 1;
        if (((t >>>= 0), (n >>>= 0), (i >>>= 0), (r >>>= 0), this === e)) return 0;
        for (var s = r - i, a = n - t, l = Math.min(s, a), u = this.slice(i, r), c = e.slice(t, n), d = 0; d < l; ++d)
            if (u[d] !== c[d]) {
                (s = u[d]), (a = c[d]);
                break;
            }
        return s < a ? -1 : +(a < s);
    }),
    (o.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n);
    }),
    (o.prototype.indexOf = function (e, t, n) {
        return E(this, e, t, n, !0);
    }),
    (o.prototype.lastIndexOf = function (e, t, n) {
        return E(this, e, t, n, !1);
    });
function g(e, t, n) {
    n = Math.min(e.length, n);
    for (var i = [], r = t; r < n; ) {
        var s,
            a,
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
                    (192 & (s = e[r + 1])) == 128 && (l = ((31 & u) << 6) | (63 & s)) > 127 && (c = l);
                    break;
                case 3:
                    (s = e[r + 1]),
                        (a = e[r + 2]),
                        (192 & s) == 128 &&
                            (192 & a) == 128 &&
                            (l = ((15 & u) << 12) | ((63 & s) << 6) | (63 & a)) > 2047 &&
                            (l < 55296 || l > 57343) &&
                            (c = l);
                    break;
                case 4:
                    (s = e[r + 1]),
                        (a = e[r + 2]),
                        (o = e[r + 3]),
                        (192 & s) == 128 &&
                            (192 & a) == 128 &&
                            (192 & o) == 128 &&
                            (l = ((15 & u) << 18) | ((63 & s) << 12) | ((63 & a) << 6) | (63 & o)) > 65535 &&
                            l < 1114112 &&
                            (c = l);
            }
        null === c
            ? ((c = 65533), (d = 1))
            : c > 65535 && ((c -= 65536), i.push(((c >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))),
            i.push(c),
            (r += d);
    }
    var _ = i,
        h = _.length;
    if (h <= 4096) return String.fromCharCode.apply(String, _);
    for (var f = "", p = 0; p < h; ) f += String.fromCharCode.apply(String, _.slice(p, (p += 4096)));
    return f;
}
function A(e, t, n) {
    if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
    if (e + t > n) throw RangeError("Trying to access beyond buffer length");
}
function I(e, t, n, i, r, s) {
    if (!o.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (t > r || t < s) throw RangeError('"value" argument is out of bounds');
    if (n + i > e.length) throw RangeError("Index out of range");
}
function T(e, t, n, i, r, s) {
    if (n + i > e.length || n < 0) throw RangeError("Index out of range");
}
function S(e, t, n, i, s) {
    return (
        (t *= 1),
        (n >>>= 0),
        s || T(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
        r.write(e, t, n, i, 23, 4),
        n + 4
    );
}
function y(e, t, n, i, s) {
    return (
        (t *= 1),
        (n >>>= 0),
        s || T(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
        r.write(e, t, n, i, 52, 8),
        n + 8
    );
}
(o.prototype.write = function (e, t, n, i) {
    if (void 0 === t) (i = "utf8"), (n = this.length), (t = 0);
    else if (void 0 === n && "string" == typeof t) (i = t), (n = this.length), (t = 0);
    else if (isFinite(t))
        (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === i && (i = "utf8")) : ((i = n), (n = void 0));
    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var r,
        s,
        a,
        o,
        l,
        u,
        c,
        d,
        _ = this.length - t;
    if (((void 0 === n || n > _) && (n = _), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
        throw RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    for (var h = !1; ; )
        switch (i) {
            case "hex":
                return (function (e, t, n, i) {
                    n = Number(n) || 0;
                    var r = e.length - n;
                    i ? (i = Number(i)) > r && (i = r) : (i = r);
                    var s = t.length;
                    i > s / 2 && (i = s / 2);
                    for (var a = 0; a < i; ++a) {
                        var o,
                            l = parseInt(t.substr(2 * a, 2), 16);
                        if ((o = l) != o) break;
                        e[n + a] = l;
                    }
                    return a;
                })(this, e, t, n);
            case "utf8":
            case "utf-8":
                return (r = t), (s = n), O(N(e, this.length - r), this, r, s);
            case "ascii":
                return (a = t), (o = n), O(v(e), this, a, o);
            case "latin1":
            case "binary":
                return (function (e, t, n, i) {
                    return O(v(t), e, n, i);
                })(this, e, t, n);
            case "base64":
                return (l = t), (u = n), O(R(e), this, l, u);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return (
                    (c = t),
                    (d = n),
                    O(
                        (function (e, t) {
                            for (var n, i, r = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                                (i = (n = e.charCodeAt(s)) >> 8), r.push(n % 256), r.push(i);
                            return r;
                        })(e, this.length - c),
                        this,
                        c,
                        d,
                    )
                );
            default:
                if (h) throw TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (h = !0);
        }
}),
    (o.prototype.toJSON = function () {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    }),
    (o.prototype.slice = function (e, t) {
        var n = this.length;
        (e = ~~e),
            (t = void 0 === t ? n : ~~t),
            e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e);
        var i = this.subarray(e, t);
        return Object.setPrototypeOf(i, o.prototype), i;
    }),
    (o.prototype.readUIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || A(e, t, this.length);
        for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); ) i += this[e + s] * r;
        return i;
    }),
    (o.prototype.readUIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || A(e, t, this.length);
        for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); ) i += this[e + --t] * r;
        return i;
    }),
    (o.prototype.readUInt8 = function (e, t) {
        return (e >>>= 0), t || A(e, 1, this.length), this[e];
    }),
    (o.prototype.readUInt16LE = function (e, t) {
        return (e >>>= 0), t || A(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (o.prototype.readUInt16BE = function (e, t) {
        return (e >>>= 0), t || A(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (o.prototype.readUInt32LE = function (e, t) {
        return (
            (e >>>= 0),
            t || A(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 0x1000000 * this[e + 3]
        );
    }),
    (o.prototype.readUInt32BE = function (e, t) {
        return (
            (e >>>= 0),
            t || A(e, 4, this.length),
            0x1000000 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
        );
    }),
    (o.prototype.readIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || A(e, t, this.length);
        for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); ) i += this[e + s] * r;
        return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }),
    (o.prototype.readIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || A(e, t, this.length);
        for (var i = t, r = 1, s = this[e + --i]; i > 0 && (r *= 256); ) s += this[e + --i] * r;
        return s >= (r *= 128) && (s -= Math.pow(2, 8 * t)), s;
    }),
    (o.prototype.readInt8 = function (e, t) {
        return ((e >>>= 0), t || A(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
    }),
    (o.prototype.readInt16LE = function (e, t) {
        (e >>>= 0), t || A(e, 2, this.length);
        var n = this[e] | (this[e + 1] << 8);
        return 32768 & n ? 0xffff0000 | n : n;
    }),
    (o.prototype.readInt16BE = function (e, t) {
        (e >>>= 0), t || A(e, 2, this.length);
        var n = this[e + 1] | (this[e] << 8);
        return 32768 & n ? 0xffff0000 | n : n;
    }),
    (o.prototype.readInt32LE = function (e, t) {
        return (
            (e >>>= 0),
            t || A(e, 4, this.length),
            this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
        );
    }),
    (o.prototype.readInt32BE = function (e, t) {
        return (
            (e >>>= 0),
            t || A(e, 4, this.length),
            (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
        );
    }),
    (o.prototype.readFloatLE = function (e, t) {
        return (e >>>= 0), t || A(e, 4, this.length), r.read(this, e, !0, 23, 4);
    }),
    (o.prototype.readFloatBE = function (e, t) {
        return (e >>>= 0), t || A(e, 4, this.length), r.read(this, e, !1, 23, 4);
    }),
    (o.prototype.readDoubleLE = function (e, t) {
        return (e >>>= 0), t || A(e, 8, this.length), r.read(this, e, !0, 52, 8);
    }),
    (o.prototype.readDoubleBE = function (e, t) {
        return (e >>>= 0), t || A(e, 8, this.length), r.read(this, e, !1, 52, 8);
    }),
    (o.prototype.writeUIntLE = function (e, t, n, i) {
        if (((e *= 1), (t >>>= 0), (n >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n) - 1;
            I(this, e, t, n, r, 0);
        }
        var s = 1,
            a = 0;
        for (this[t] = 255 & e; ++a < n && (s *= 256); ) this[t + a] = (e / s) & 255;
        return t + n;
    }),
    (o.prototype.writeUIntBE = function (e, t, n, i) {
        if (((e *= 1), (t >>>= 0), (n >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n) - 1;
            I(this, e, t, n, r, 0);
        }
        var s = n - 1,
            a = 1;
        for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); ) this[t + s] = (e / a) & 255;
        return t + n;
    }),
    (o.prototype.writeUInt8 = function (e, t, n) {
        return (e *= 1), (t >>>= 0), n || I(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
    }),
    (o.prototype.writeUInt16LE = function (e, t, n) {
        return (
            (e *= 1), (t >>>= 0), n || I(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2
        );
    }),
    (o.prototype.writeUInt16BE = function (e, t, n) {
        return (
            (e *= 1), (t >>>= 0), n || I(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2
        );
    }),
    (o.prototype.writeUInt32LE = function (e, t, n) {
        return (
            (e *= 1),
            (t >>>= 0),
            n || I(this, e, t, 4, 0xffffffff, 0),
            (this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e),
            t + 4
        );
    }),
    (o.prototype.writeUInt32BE = function (e, t, n) {
        return (
            (e *= 1),
            (t >>>= 0),
            n || I(this, e, t, 4, 0xffffffff, 0),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
        );
    }),
    (o.prototype.writeIntLE = function (e, t, n, i) {
        if (((e *= 1), (t >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n - 1);
            I(this, e, t, n, r - 1, -r);
        }
        var s = 0,
            a = 1,
            o = 0;
        for (this[t] = 255 & e; ++s < n && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1), (this[t + s] = (((e / a) | 0) - o) & 255);
        return t + n;
    }),
    (o.prototype.writeIntBE = function (e, t, n, i) {
        if (((e *= 1), (t >>>= 0), !i)) {
            var r = Math.pow(2, 8 * n - 1);
            I(this, e, t, n, r - 1, -r);
        }
        var s = n - 1,
            a = 1,
            o = 0;
        for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1), (this[t + s] = (((e / a) | 0) - o) & 255);
        return t + n;
    }),
    (o.prototype.writeInt8 = function (e, t, n) {
        return (
            (e *= 1),
            (t >>>= 0),
            n || I(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
        );
    }),
    (o.prototype.writeInt16LE = function (e, t, n) {
        return (
            (e *= 1),
            (t >>>= 0),
            n || I(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
        );
    }),
    (o.prototype.writeInt16BE = function (e, t, n) {
        return (
            (e *= 1),
            (t >>>= 0),
            n || I(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
        );
    }),
    (o.prototype.writeInt32LE = function (e, t, n) {
        return (
            (e *= 1),
            (t >>>= 0),
            n || I(this, e, t, 4, 0x7fffffff, -0x80000000),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
        );
    }),
    (o.prototype.writeInt32BE = function (e, t, n) {
        return (
            (e *= 1),
            (t >>>= 0),
            n || I(this, e, t, 4, 0x7fffffff, -0x80000000),
            e < 0 && (e = 0xffffffff + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
        );
    }),
    (o.prototype.writeFloatLE = function (e, t, n) {
        return S(this, e, t, !0, n);
    }),
    (o.prototype.writeFloatBE = function (e, t, n) {
        return S(this, e, t, !1, n);
    }),
    (o.prototype.writeDoubleLE = function (e, t, n) {
        return y(this, e, t, !0, n);
    }),
    (o.prototype.writeDoubleBE = function (e, t, n) {
        return y(this, e, t, !1, n);
    }),
    (o.prototype.copy = function (e, t, n, i) {
        if (!o.isBuffer(e)) throw TypeError("argument should be a Buffer");
        if (
            (n || (n = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < n && (i = n),
            i === n || 0 === e.length || 0 === this.length)
        )
            return 0;
        if (t < 0) throw RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw RangeError("Index out of range");
        if (i < 0) throw RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
        var r = i - n;
        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, i);
        else if (this === e && n < t && t < i) for (var s = r - 1; s >= 0; --s) e[s + t] = this[s + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, i), t);
        return r;
    }),
    (o.prototype.fill = function (e, t, n, i) {
        if ("string" == typeof e) {
            if (
                ("string" == typeof t
                    ? ((i = t), (t = 0), (n = this.length))
                    : "string" == typeof n && ((i = n), (n = this.length)),
                void 0 !== i && "string" != typeof i)
            )
                throw TypeError("encoding must be a string");
            if ("string" == typeof i && !o.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
            if (1 === e.length) {
                var r,
                    s = e.charCodeAt(0);
                (("utf8" === i && s < 128) || "latin1" === i) && (e = s);
            }
        } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
        if (n <= t) return this;
        if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), "number" == typeof e))
            for (r = t; r < n; ++r) this[r] = e;
        else {
            var a = o.isBuffer(e) ? e : o.from(e, i),
                l = a.length;
            if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (r = 0; r < n - t; ++r) this[r + t] = a[r % l];
        }
        return this;
    });
var C = /[^+/0-9A-Za-z-_]/g;
function N(e, t) {
    t = t || 1 / 0;
    for (var n, i = e.length, r = null, s = [], a = 0; a < i; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
            if (!r) {
                if (n > 56319 || a + 1 === i) {
                    (t -= 3) > -1 && s.push(239, 191, 189);
                    continue;
                }
                r = n;
                continue;
            }
            if (n < 56320) {
                (t -= 3) > -1 && s.push(239, 191, 189), (r = n);
                continue;
            }
            n = (((r - 55296) << 10) | (n - 56320)) + 65536;
        } else r && (t -= 3) > -1 && s.push(239, 191, 189);
        if (((r = null), n < 128)) {
            if ((t -= 1) < 0) break;
            s.push(n);
        } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            s.push((n >> 6) | 192, (63 & n) | 128);
        } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            s.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else if (n < 1114112) {
            if ((t -= 4) < 0) break;
            s.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else throw Error("Invalid code point");
    }
    return s;
}
function v(e) {
    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
    return t;
}
function R(e) {
    return i.toByteArray(
        (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(C, "")).length < 2) return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
        })(e),
    );
}
function O(e, t, n, i) {
    for (var r = 0; r < i && !(r + n >= t.length) && !(r >= e.length); ++r) t[r + n] = e[r];
    return r;
}
function b(e, t) {
    return (
        e instanceof t ||
        (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name)
    );
}
var D = (function () {
    for (var e = "0123456789abcdef", t = Array(256), n = 0; n < 16; ++n)
        for (var i = 16 * n, r = 0; r < 16; ++r) t[i + r] = e[n] + e[r];
    return t;
})();
