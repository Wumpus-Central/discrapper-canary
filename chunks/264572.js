"use strict";
var r = n(827762),
    i = n(936287),
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
        return d(e);
    }
    return l(e, t, n);
}
function l(e, t, n) {
    if ("string" == typeof e) {
        var r = e,
            i = t;
        if ((("string" != typeof i || "" === i) && (i = "utf8"), !o.isEncoding(i)))
            throw TypeError("Unknown encoding: " + i);
        var s = 0 | f(r, i),
            l = a(s),
            u = l.write(r, i);
        return u !== s && (l = l.slice(0, u)), l;
    }
    if (ArrayBuffer.isView(e)) return c(e);
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
            var r;
            if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
            return (
                Object.setPrototypeOf(
                    (r =
                        void 0 === t && void 0 === n
                            ? new Uint8Array(e)
                            : void 0 === n
                              ? new Uint8Array(e, t)
                              : new Uint8Array(e, t, n)),
                    o.prototype,
                ),
                r
            );
        })(e, t, n);
    if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
    var d = e.valueOf && e.valueOf();
    if (null != d && d !== e) return o.from(d, t, n);
    var E = (function (e) {
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
                : c(e)
            : "Buffer" === e.type && Array.isArray(e.data)
              ? c(e.data)
              : void 0;
    })(e);
    if (E) return E;
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
function d(e) {
    return u(e), a(e < 0 ? 0 : 0 | _(e));
}
function c(e) {
    for (var t = e.length < 0 ? 0 : 0 | _(e.length), n = a(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
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
        return d(e);
    }),
    (o.allocUnsafeSlow = function (e) {
        return d(e);
    });
function _(e) {
    if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
    return 0 | e;
}
function f(e, t) {
    if (o.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || b(e, ArrayBuffer)) return e.byteLength;
    if ("string" != typeof e)
        throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e,
        );
    var n = e.length,
        r = arguments.length > 2 && !0 === arguments[2];
    if (!r && 0 === n) return 0;
    for (var i = !1; ; )
        switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
                return O(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return v(e).length;
            default:
                if (i) return r ? -1 : O(e).length;
                (t = ("" + t).toLowerCase()), (i = !0);
        }
}
function E(e, t, n) {
    var i,
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
                    var r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var i = "", s = t; s < n; ++s) i += D[e[s]];
                    return i;
                })(this, t, n);
            case "utf8":
            case "utf-8":
                return g(this, t, n);
            case "ascii":
                return (function (e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r;
                })(this, t, n);
            case "latin1":
            case "binary":
                return (function (e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r;
                })(this, t, n);
            case "base64":
                return (
                    (i = this),
                    (s = t),
                    (a = n),
                    0 === s && a === i.length ? r.fromByteArray(i) : r.fromByteArray(i.slice(s, a))
                );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return (function (e, t, n) {
                    for (var r = e.slice(t, n), i = "", s = 0; s < r.length; s += 2)
                        i += String.fromCharCode(r[s] + 256 * r[s + 1]);
                    return i;
                })(this, t, n);
            default:
                if (o) throw TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (o = !0);
        }
}
function h(e, t, n) {
    var r = e[t];
    (e[t] = e[n]), (e[n] = r);
}
function p(e, t, n, r, i) {
    var s;
    if (0 === e.length) return -1;
    if (
        ("string" == typeof n
            ? ((r = n), (n = 0))
            : n > 0x7fffffff
              ? (n = 0x7fffffff)
              : n < -0x80000000 && (n = -0x80000000),
        (s = n *= 1) != s && (n = i ? 0 : e.length - 1),
        n < 0 && (n = e.length + n),
        n >= e.length)
    )
        if (i) return -1;
        else n = e.length - 1;
    else if (n < 0)
        if (!i) return -1;
        else n = 0;
    if (("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t))) return 0 === t.length ? -1 : m(e, t, n, r, i);
    if ("number" == typeof t) {
        if (((t &= 255), "function" == typeof Uint8Array.prototype.indexOf))
            if (i) return Uint8Array.prototype.indexOf.call(e, t, n);
            else return Uint8Array.prototype.lastIndexOf.call(e, t, n);
        return m(e, [t], n, r, i);
    }
    throw TypeError("val must be string, number or Buffer");
}
function m(e, t, n, r, i) {
    var s,
        a = 1,
        o = e.length,
        l = t.length;
    if (
        void 0 !== r &&
        ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)
    ) {
        if (e.length < 2 || t.length < 2) return -1;
        (a = 2), (o /= 2), (l /= 2), (n /= 2);
    }
    function u(e, t) {
        return 1 === a ? e[t] : e.readUInt16BE(t * a);
    }
    if (i) {
        var d = -1;
        for (s = n; s < o; s++)
            if (u(e, s) === u(t, -1 === d ? 0 : s - d)) {
                if ((-1 === d && (d = s), s - d + 1 === l)) return d * a;
            } else -1 !== d && (s -= s - d), (d = -1);
    } else
        for (n + l > o && (n = o - l), s = n; s >= 0; s--) {
            for (var c = !0, _ = 0; _ < l; _++)
                if (u(e, s + _) !== u(t, _)) {
                    c = !1;
                    break;
                }
            if (c) return s;
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
        for (var n = e.length, r = t.length, i = 0, s = Math.min(n, r); i < s; ++i)
            if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
            }
        return n < r ? -1 : +(r < n);
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
            r = o.allocUnsafe(t),
            i = 0;
        for (n = 0; n < e.length; ++n) {
            var s = e[n];
            if ((b(s, Uint8Array) && (s = o.from(s)), !o.isBuffer(s)))
                throw TypeError('"list" argument must be an Array of Buffers');
            s.copy(r, i), (i += s.length);
        }
        return r;
    }),
    (o.byteLength = f),
    (o.prototype._isBuffer = !0),
    (o.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) h(this, t, t + 1);
        return this;
    }),
    (o.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2);
        return this;
    }),
    (o.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8)
            h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4);
        return this;
    }),
    (o.prototype.toString = function () {
        var e = this.length;
        return 0 === e ? "" : 0 == arguments.length ? g(this, 0, e) : E.apply(this, arguments);
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
    (o.prototype.compare = function (e, t, n, r, i) {
        if ((b(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)))
            throw TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e,
            );
        if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
        )
            throw RangeError("out of range index");
        if (r >= i && t >= n) return 0;
        if (r >= i) return -1;
        if (t >= n) return 1;
        if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) return 0;
        for (var s = i - r, a = n - t, l = Math.min(s, a), u = this.slice(r, i), d = e.slice(t, n), c = 0; c < l; ++c)
            if (u[c] !== d[c]) {
                (s = u[c]), (a = d[c]);
                break;
            }
        return s < a ? -1 : +(a < s);
    }),
    (o.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n);
    }),
    (o.prototype.indexOf = function (e, t, n) {
        return p(this, e, t, n, !0);
    }),
    (o.prototype.lastIndexOf = function (e, t, n) {
        return p(this, e, t, n, !1);
    });
function g(e, t, n) {
    n = Math.min(e.length, n);
    for (var r = [], i = t; i < n; ) {
        var s,
            a,
            o,
            l,
            u = e[i],
            d = null,
            c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (i + c <= n)
            switch (c) {
                case 1:
                    u < 128 && (d = u);
                    break;
                case 2:
                    (192 & (s = e[i + 1])) == 128 && (l = ((31 & u) << 6) | (63 & s)) > 127 && (d = l);
                    break;
                case 3:
                    (s = e[i + 1]),
                        (a = e[i + 2]),
                        (192 & s) == 128 &&
                            (192 & a) == 128 &&
                            (l = ((15 & u) << 12) | ((63 & s) << 6) | (63 & a)) > 2047 &&
                            (l < 55296 || l > 57343) &&
                            (d = l);
                    break;
                case 4:
                    (s = e[i + 1]),
                        (a = e[i + 2]),
                        (o = e[i + 3]),
                        (192 & s) == 128 &&
                            (192 & a) == 128 &&
                            (192 & o) == 128 &&
                            (l = ((15 & u) << 18) | ((63 & s) << 12) | ((63 & a) << 6) | (63 & o)) > 65535 &&
                            l < 1114112 &&
                            (d = l);
            }
        null === d
            ? ((d = 65533), (c = 1))
            : d > 65535 && ((d -= 65536), r.push(((d >>> 10) & 1023) | 55296), (d = 56320 | (1023 & d))),
            r.push(d),
            (i += c);
    }
    var _ = r,
        f = _.length;
    if (f <= 4096) return String.fromCharCode.apply(String, _);
    for (var E = "", h = 0; h < f; ) E += String.fromCharCode.apply(String, _.slice(h, (h += 4096)));
    return E;
}
function A(e, t, n) {
    if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
    if (e + t > n) throw RangeError("Trying to access beyond buffer length");
}
function I(e, t, n, r, i, s) {
    if (!o.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < s) throw RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw RangeError("Index out of range");
}
function T(e, t, n, r, i, s) {
    if (n + r > e.length || n < 0) throw RangeError("Index out of range");
}
function S(e, t, n, r, s) {
    return (
        (t *= 1),
        (n >>>= 0),
        s || T(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
        i.write(e, t, n, r, 23, 4),
        n + 4
    );
}
function y(e, t, n, r, s) {
    return (
        (t *= 1),
        (n >>>= 0),
        s || T(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
        i.write(e, t, n, r, 52, 8),
        n + 8
    );
}
(o.prototype.write = function (e, t, n, r) {
    if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
    else if (void 0 === n && "string" == typeof t) (r = t), (n = this.length), (t = 0);
    else if (isFinite(t))
        (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var i,
        s,
        a,
        o,
        l,
        u,
        d,
        c,
        _ = this.length - t;
    if (((void 0 === n || n > _) && (n = _), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
        throw RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");
    for (var f = !1; ; )
        switch (r) {
            case "hex":
                return (function (e, t, n, r) {
                    n = Number(n) || 0;
                    var i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : (r = i);
                    var s = t.length;
                    r > s / 2 && (r = s / 2);
                    for (var a = 0; a < r; ++a) {
                        var o,
                            l = parseInt(t.substr(2 * a, 2), 16);
                        if ((o = l) != o) break;
                        e[n + a] = l;
                    }
                    return a;
                })(this, e, t, n);
            case "utf8":
            case "utf-8":
                return (i = t), (s = n), C(O(e, this.length - i), this, i, s);
            case "ascii":
                return (a = t), (o = n), C(R(e), this, a, o);
            case "latin1":
            case "binary":
                return (function (e, t, n, r) {
                    return C(R(t), e, n, r);
                })(this, e, t, n);
            case "base64":
                return (l = t), (u = n), C(v(e), this, l, u);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return (
                    (d = t),
                    (c = n),
                    C(
                        (function (e, t) {
                            for (var n, r, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                                (r = (n = e.charCodeAt(s)) >> 8), i.push(n % 256), i.push(r);
                            return i;
                        })(e, this.length - d),
                        this,
                        d,
                        c,
                    )
                );
            default:
                if (f) throw TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (f = !0);
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
        var r = this.subarray(e, t);
        return Object.setPrototypeOf(r, o.prototype), r;
    }),
    (o.prototype.readUIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || A(e, t, this.length);
        for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256); ) r += this[e + s] * i;
        return r;
    }),
    (o.prototype.readUIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || A(e, t, this.length);
        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) r += this[e + --t] * i;
        return r;
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
        for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256); ) r += this[e + s] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }),
    (o.prototype.readIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), n || A(e, t, this.length);
        for (var r = t, i = 1, s = this[e + --r]; r > 0 && (i *= 256); ) s += this[e + --r] * i;
        return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
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
        return (e >>>= 0), t || A(e, 4, this.length), i.read(this, e, !0, 23, 4);
    }),
    (o.prototype.readFloatBE = function (e, t) {
        return (e >>>= 0), t || A(e, 4, this.length), i.read(this, e, !1, 23, 4);
    }),
    (o.prototype.readDoubleLE = function (e, t) {
        return (e >>>= 0), t || A(e, 8, this.length), i.read(this, e, !0, 52, 8);
    }),
    (o.prototype.readDoubleBE = function (e, t) {
        return (e >>>= 0), t || A(e, 8, this.length), i.read(this, e, !1, 52, 8);
    }),
    (o.prototype.writeUIntLE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), (n >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n) - 1;
            I(this, e, t, n, i, 0);
        }
        var s = 1,
            a = 0;
        for (this[t] = 255 & e; ++a < n && (s *= 256); ) this[t + a] = (e / s) & 255;
        return t + n;
    }),
    (o.prototype.writeUIntBE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), (n >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n) - 1;
            I(this, e, t, n, i, 0);
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
    (o.prototype.writeIntLE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            I(this, e, t, n, i - 1, -i);
        }
        var s = 0,
            a = 1,
            o = 0;
        for (this[t] = 255 & e; ++s < n && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1), (this[t + s] = (((e / a) | 0) - o) & 255);
        return t + n;
    }),
    (o.prototype.writeIntBE = function (e, t, n, r) {
        if (((e *= 1), (t >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            I(this, e, t, n, i - 1, -i);
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
    (o.prototype.copy = function (e, t, n, r) {
        if (!o.isBuffer(e)) throw TypeError("argument should be a Buffer");
        if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n || 0 === e.length || 0 === this.length)
        )
            return 0;
        if (t < 0) throw RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw RangeError("Index out of range");
        if (r < 0) throw RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var i = r - n;
        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
        else if (this === e && n < t && t < r) for (var s = i - 1; s >= 0; --s) e[s + t] = this[s + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
        return i;
    }),
    (o.prototype.fill = function (e, t, n, r) {
        if ("string" == typeof e) {
            if (
                ("string" == typeof t
                    ? ((r = t), (t = 0), (n = this.length))
                    : "string" == typeof n && ((r = n), (n = this.length)),
                void 0 !== r && "string" != typeof r)
            )
                throw TypeError("encoding must be a string");
            if ("string" == typeof r && !o.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
            if (1 === e.length) {
                var i,
                    s = e.charCodeAt(0);
                (("utf8" === r && s < 128) || "latin1" === r) && (e = s);
            }
        } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
        if (n <= t) return this;
        if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), "number" == typeof e))
            for (i = t; i < n; ++i) this[i] = e;
        else {
            var a = o.isBuffer(e) ? e : o.from(e, r),
                l = a.length;
            if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (i = 0; i < n - t; ++i) this[i + t] = a[i % l];
        }
        return this;
    });
var N = /[^+/0-9A-Za-z-_]/g;
function O(e, t) {
    t = t || 1 / 0;
    for (var n, r = e.length, i = null, s = [], a = 0; a < r; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
                if (n > 56319 || a + 1 === r) {
                    (t -= 3) > -1 && s.push(239, 191, 189);
                    continue;
                }
                i = n;
                continue;
            }
            if (n < 56320) {
                (t -= 3) > -1 && s.push(239, 191, 189), (i = n);
                continue;
            }
            n = (((i - 55296) << 10) | (n - 56320)) + 65536;
        } else i && (t -= 3) > -1 && s.push(239, 191, 189);
        if (((i = null), n < 128)) {
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
function R(e) {
    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
    return t;
}
function v(e) {
    return r.toByteArray(
        (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(N, "")).length < 2) return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
        })(e),
    );
}
function C(e, t, n, r) {
    for (var i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
    return i;
}
function b(e, t) {
    return (
        e instanceof t ||
        (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name)
    );
}
var D = (function () {
    for (var e = "0123456789abcdef", t = Array(256), n = 0; n < 16; ++n)
        for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
    return t;
})();
