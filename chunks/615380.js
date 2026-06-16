e.exports = (function () {
    "use strict";
    var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function t(e, t) {
        var n = e[0],
            i = e[1],
            r = e[2],
            s = e[3];
        (n += (((i & r) | (~i & s)) + t[0] - 0x28955b88) | 0),
            (s += ((((n = (((n << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[1] - 0x173848aa) | 0),
            (r += ((((s = (((s << 12) | (s >>> 20)) + n) | 0) & n) | (~s & i)) + t[2] + 0x242070db) | 0),
            (i += ((((r = (((r << 17) | (r >>> 15)) + s) | 0) & s) | (~r & n)) + t[3] - 0x3e423112) | 0),
            (n += ((((i = (((i << 22) | (i >>> 10)) + r) | 0) & r) | (~i & s)) + t[4] - 0xa83f051) | 0),
            (s += ((((n = (((n << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[5] + 0x4787c62a) | 0),
            (r += ((((s = (((s << 12) | (s >>> 20)) + n) | 0) & n) | (~s & i)) + t[6] - 0x57cfb9ed) | 0),
            (i += ((((r = (((r << 17) | (r >>> 15)) + s) | 0) & s) | (~r & n)) + t[7] - 0x2b96aff) | 0),
            (n += ((((i = (((i << 22) | (i >>> 10)) + r) | 0) & r) | (~i & s)) + t[8] + 0x698098d8) | 0),
            (s += ((((n = (((n << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[9] - 0x74bb0851) | 0),
            (r += ((((s = (((s << 12) | (s >>> 20)) + n) | 0) & n) | (~s & i)) + t[10] - 42063) | 0),
            (i += ((((r = (((r << 17) | (r >>> 15)) + s) | 0) & s) | (~r & n)) + t[11] - 0x76a32842) | 0),
            (n += ((((i = (((i << 22) | (i >>> 10)) + r) | 0) & r) | (~i & s)) + t[12] + 0x6b901122) | 0),
            (s += ((((n = (((n << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[13] - 0x2678e6d) | 0),
            (r += ((((s = (((s << 12) | (s >>> 20)) + n) | 0) & n) | (~s & i)) + t[14] - 0x5986bc72) | 0),
            (i += ((((r = (((r << 17) | (r >>> 15)) + s) | 0) & s) | (~r & n)) + t[15] + 0x49b40821) | 0),
            (n += ((((i = (((i << 22) | (i >>> 10)) + r) | 0) & s) | (r & ~s)) + t[1] - 0x9e1da9e) | 0),
            (s += ((((n = (((n << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[6] - 0x3fbf4cc0) | 0),
            (r += ((((s = (((s << 9) | (s >>> 23)) + n) | 0) & i) | (n & ~i)) + t[11] + 0x265e5a51) | 0),
            (i += ((((r = (((r << 14) | (r >>> 18)) + s) | 0) & n) | (s & ~n)) + t[0] - 0x16493856) | 0),
            (n += ((((i = (((i << 20) | (i >>> 12)) + r) | 0) & s) | (r & ~s)) + t[5] - 0x29d0efa3) | 0),
            (s += ((((n = (((n << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[10] + 0x2441453) | 0),
            (r += ((((s = (((s << 9) | (s >>> 23)) + n) | 0) & i) | (n & ~i)) + t[15] - 0x275e197f) | 0),
            (i += ((((r = (((r << 14) | (r >>> 18)) + s) | 0) & n) | (s & ~n)) + t[4] - 0x182c0438) | 0),
            (n += ((((i = (((i << 20) | (i >>> 12)) + r) | 0) & s) | (r & ~s)) + t[9] + 0x21e1cde6) | 0),
            (s += ((((n = (((n << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[14] - 0x3cc8f82a) | 0),
            (r += ((((s = (((s << 9) | (s >>> 23)) + n) | 0) & i) | (n & ~i)) + t[3] - 0xb2af279) | 0),
            (i += ((((r = (((r << 14) | (r >>> 18)) + s) | 0) & n) | (s & ~n)) + t[8] + 0x455a14ed) | 0),
            (n += ((((i = (((i << 20) | (i >>> 12)) + r) | 0) & s) | (r & ~s)) + t[13] - 0x561c16fb) | 0),
            (s += ((((n = (((n << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[2] - 0x3105c08) | 0),
            (r += ((((s = (((s << 9) | (s >>> 23)) + n) | 0) & i) | (n & ~i)) + t[7] + 0x676f02d9) | 0),
            (i += ((((r = (((r << 14) | (r >>> 18)) + s) | 0) & n) | (s & ~n)) + t[12] - 0x72d5b376) | 0),
            (n += (((i = (((i << 20) | (i >>> 12)) + r) | 0) ^ r ^ s) + t[5] - 378558) | 0),
            (s += (((n = (((n << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[8] - 0x788e097f) | 0),
            (r += (((s = (((s << 11) | (s >>> 21)) + n) | 0) ^ n ^ i) + t[11] + 0x6d9d6122) | 0),
            (i += (((r = (((r << 16) | (r >>> 16)) + s) | 0) ^ s ^ n) + t[14] - 0x21ac7f4) | 0),
            (n += (((i = (((i << 23) | (i >>> 9)) + r) | 0) ^ r ^ s) + t[1] - 0x5b4115bc) | 0),
            (s += (((n = (((n << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[4] + 0x4bdecfa9) | 0),
            (r += (((s = (((s << 11) | (s >>> 21)) + n) | 0) ^ n ^ i) + t[7] - 0x944b4a0) | 0),
            (i += (((r = (((r << 16) | (r >>> 16)) + s) | 0) ^ s ^ n) + t[10] - 0x41404390) | 0),
            (n += (((i = (((i << 23) | (i >>> 9)) + r) | 0) ^ r ^ s) + t[13] + 0x289b7ec6) | 0),
            (s += (((n = (((n << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[0] - 0x155ed806) | 0),
            (r += (((s = (((s << 11) | (s >>> 21)) + n) | 0) ^ n ^ i) + t[3] - 0x2b10cf7b) | 0),
            (i += (((r = (((r << 16) | (r >>> 16)) + s) | 0) ^ s ^ n) + t[6] + 0x4881d05) | 0),
            (n += (((i = (((i << 23) | (i >>> 9)) + r) | 0) ^ r ^ s) + t[9] - 0x262b2fc7) | 0),
            (s += (((n = (((n << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[12] - 0x1924661b) | 0),
            (r += (((s = (((s << 11) | (s >>> 21)) + n) | 0) ^ n ^ i) + t[15] + 0x1fa27cf8) | 0),
            (i += (((r = (((r << 16) | (r >>> 16)) + s) | 0) ^ s ^ n) + t[2] - 0x3b53a99b) | 0),
            (i = (((i << 23) | (i >>> 9)) + r) | 0),
            (n += ((r ^ (i | ~s)) + t[0] - 0xbd6ddbc) | 0),
            (n = (((n << 6) | (n >>> 26)) + i) | 0),
            (s += ((i ^ (n | ~r)) + t[7] + 0x432aff97) | 0),
            (s = (((s << 10) | (s >>> 22)) + n) | 0),
            (r += ((n ^ (s | ~i)) + t[14] - 0x546bdc59) | 0),
            (r = (((r << 15) | (r >>> 17)) + s) | 0),
            (i += ((s ^ (r | ~n)) + t[5] - 0x36c5fc7) | 0),
            (i = (((i << 21) | (i >>> 11)) + r) | 0),
            (n += ((r ^ (i | ~s)) + t[12] + 0x655b59c3) | 0),
            (n = (((n << 6) | (n >>> 26)) + i) | 0),
            (s += ((i ^ (n | ~r)) + t[3] - 0x70f3336e) | 0),
            (s = (((s << 10) | (s >>> 22)) + n) | 0),
            (r += ((n ^ (s | ~i)) + t[10] - 1051523) | 0),
            (r = (((r << 15) | (r >>> 17)) + s) | 0),
            (i += ((s ^ (r | ~n)) + t[1] - 0x7a7ba22f) | 0),
            (i = (((i << 21) | (i >>> 11)) + r) | 0),
            (n += ((r ^ (i | ~s)) + t[8] + 0x6fa87e4f) | 0),
            (n = (((n << 6) | (n >>> 26)) + i) | 0),
            (s += ((i ^ (n | ~r)) + t[15] - 0x1d31920) | 0),
            (s = (((s << 10) | (s >>> 22)) + n) | 0),
            (r += ((n ^ (s | ~i)) + t[6] - 0x5cfebcec) | 0),
            (r = (((r << 15) | (r >>> 17)) + s) | 0),
            (i += ((s ^ (r | ~n)) + t[13] + 0x4e0811a1) | 0),
            (i = (((i << 21) | (i >>> 11)) + r) | 0),
            (n += ((r ^ (i | ~s)) + t[4] - 0x8ac817e) | 0),
            (n = (((n << 6) | (n >>> 26)) + i) | 0),
            (s += ((i ^ (n | ~r)) + t[11] - 0x42c50dcb) | 0),
            (s = (((s << 10) | (s >>> 22)) + n) | 0),
            (r += ((n ^ (s | ~i)) + t[2] + 0x2ad7d2bb) | 0),
            (r = (((r << 15) | (r >>> 17)) + s) | 0),
            (i += ((s ^ (r | ~n)) + t[9] - 0x14792c6f) | 0),
            (i = (((i << 21) | (i >>> 11)) + r) | 0),
            (e[0] = (n + e[0]) | 0),
            (e[1] = (i + e[1]) | 0),
            (e[2] = (r + e[2]) | 0),
            (e[3] = (s + e[3]) | 0);
    }
    function n(e) {
        var t,
            n = [];
        for (t = 0; t < 64; t += 4)
            n[t >> 2] =
                e.charCodeAt(t) +
                (e.charCodeAt(t + 1) << 8) +
                (e.charCodeAt(t + 2) << 16) +
                (e.charCodeAt(t + 3) << 24);
        return n;
    }
    function i(e) {
        var t,
            n = [];
        for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
        return n;
    }
    function r(e) {
        var i,
            r,
            s,
            a,
            o,
            l,
            u = e.length,
            c = [0x67452301, -0x10325477, -0x67452302, 0x10325476];
        for (i = 64; i <= u; i += 64) t(c, n(e.substring(i - 64, i)));
        for (
            r = (e = e.substring(i - 64)).length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = 0;
            i < r;
            i += 1
        )
            s[i >> 2] |= e.charCodeAt(i) << ((i % 4) << 3);
        if (((s[i >> 2] |= 128 << ((i % 4) << 3)), i > 55)) for (t(c, s), i = 0; i < 16; i += 1) s[i] = 0;
        return (
            (o = parseInt((a = (a = 8 * u).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
            (l = parseInt(a[1], 16) || 0),
            (s[14] = o),
            (s[15] = l),
            t(c, s),
            c
        );
    }
    function s(t) {
        var n;
        for (n = 0; n < t.length; n += 1)
            t[n] = (function (t) {
                var n,
                    i = "";
                for (n = 0; n < 4; n += 1) i += e[(t >> (8 * n + 4)) & 15] + e[(t >> (8 * n)) & 15];
                return i;
            })(t[n]);
        return t.join("");
    }
    function a(e) {
        return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
    }
    function o(e) {
        var t,
            n = [],
            i = e.length;
        for (t = 0; t < i - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
        return String.fromCharCode.apply(String, n);
    }
    function l() {
        this.reset();
    }
    return (
        s(r("hello")),
        "u" > typeof ArrayBuffer &&
            !ArrayBuffer.prototype.slice &&
            (function () {
                function e(e, t) {
                    return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t);
                }
                ArrayBuffer.prototype.slice = function (t, n) {
                    var i,
                        r,
                        s,
                        a,
                        o = this.byteLength,
                        l = e(t, o),
                        u = o;
                    return (void 0 !== n && (u = e(n, o)), l > u)
                        ? new ArrayBuffer(0)
                        : ((s = new Uint8Array((r = new ArrayBuffer((i = u - l))))),
                          (a = new Uint8Array(this, l, i)),
                          s.set(a),
                          r);
                };
            })(),
        (l.prototype.append = function (e) {
            return this.appendBinary(a(e)), this;
        }),
        (l.prototype.appendBinary = function (e) {
            (this._buff += e), (this._length += e.length);
            var i,
                r = this._buff.length;
            for (i = 64; i <= r; i += 64) t(this._hash, n(this._buff.substring(i - 64, i)));
            return (this._buff = this._buff.substring(i - 64)), this;
        }),
        (l.prototype.end = function (e) {
            var t,
                n,
                i = this._buff,
                r = i.length,
                a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < r; t += 1) a[t >> 2] |= i.charCodeAt(t) << ((t % 4) << 3);
            return this._finish(a, r), (n = s(this._hash)), e && (n = o(n)), this.reset(), n;
        }),
        (l.prototype.reset = function () {
            return (
                (this._buff = ""),
                (this._length = 0),
                (this._hash = [0x67452301, -0x10325477, -0x67452302, 0x10325476]),
                this
            );
        }),
        (l.prototype.getState = function () {
            return { buff: this._buff, length: this._length, hash: this._hash.slice() };
        }),
        (l.prototype.setState = function (e) {
            return (this._buff = e.buff), (this._length = e.length), (this._hash = e.hash), this;
        }),
        (l.prototype.destroy = function () {
            delete this._hash, delete this._buff, delete this._length;
        }),
        (l.prototype._finish = function (e, n) {
            var i,
                r,
                s,
                a = n;
            if (((e[a >> 2] |= 128 << ((a % 4) << 3)), a > 55)) for (t(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
            (r = parseInt((i = (i = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
                (s = parseInt(i[1], 16) || 0),
                (e[14] = r),
                (e[15] = s),
                t(this._hash, e);
        }),
        (l.hash = function (e, t) {
            return l.hashBinary(a(e), t);
        }),
        (l.hashBinary = function (e, t) {
            var n = s(r(e));
            return t ? o(n) : n;
        }),
        (l.ArrayBuffer = function () {
            this.reset();
        }),
        (l.ArrayBuffer.prototype.append = function (e) {
            var n,
                r,
                s,
                a =
                    ((n = this._buff.buffer),
                    (r = new Uint8Array(n.byteLength + e.byteLength)).set(new Uint8Array(n)),
                    r.set(new Uint8Array(e), n.byteLength),
                    r),
                o = a.length;
            for (this._length += e.byteLength, s = 64; s <= o; s += 64) t(this._hash, i(a.subarray(s - 64, s)));
            return (this._buff = new Uint8Array(s - 64 < o ? a.buffer.slice(s - 64) : 0)), this;
        }),
        (l.ArrayBuffer.prototype.end = function (e) {
            var t,
                n,
                i = this._buff,
                r = i.length,
                a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < r; t += 1) a[t >> 2] |= i[t] << ((t % 4) << 3);
            return this._finish(a, r), (n = s(this._hash)), e && (n = o(n)), this.reset(), n;
        }),
        (l.ArrayBuffer.prototype.reset = function () {
            return (
                (this._buff = new Uint8Array(0)),
                (this._length = 0),
                (this._hash = [0x67452301, -0x10325477, -0x67452302, 0x10325476]),
                this
            );
        }),
        (l.ArrayBuffer.prototype.getState = function () {
            var e,
                t = l.prototype.getState.call(this);
            return (e = t.buff), (t.buff = String.fromCharCode.apply(null, new Uint8Array(e))), t;
        }),
        (l.ArrayBuffer.prototype.setState = function (e) {
            return (
                (e.buff = (function (e, t) {
                    var n,
                        i = e.length,
                        r = new ArrayBuffer(i),
                        s = new Uint8Array(r);
                    for (n = 0; n < i; n += 1) s[n] = e.charCodeAt(n);
                    return t ? s : r;
                })(e.buff, !0)),
                l.prototype.setState.call(this, e)
            );
        }),
        (l.ArrayBuffer.prototype.destroy = l.prototype.destroy),
        (l.ArrayBuffer.prototype._finish = l.prototype._finish),
        (l.ArrayBuffer.hash = function (e, n) {
            var r = s(
                (function (e) {
                    var n,
                        r,
                        s,
                        a,
                        o,
                        l,
                        u = e.length,
                        c = [0x67452301, -0x10325477, -0x67452302, 0x10325476];
                    for (n = 64; n <= u; n += 64) t(c, i(e.subarray(n - 64, n)));
                    for (
                        r = (e = n - 64 < u ? e.subarray(n - 64) : new Uint8Array(0)).length,
                            s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            n = 0;
                        n < r;
                        n += 1
                    )
                        s[n >> 2] |= e[n] << ((n % 4) << 3);
                    if (((s[n >> 2] |= 128 << ((n % 4) << 3)), n > 55)) for (t(c, s), n = 0; n < 16; n += 1) s[n] = 0;
                    return (
                        (o = parseInt((a = (a = 8 * u).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
                        (l = parseInt(a[1], 16) || 0),
                        (s[14] = o),
                        (s[15] = l),
                        t(c, s),
                        c
                    );
                })(new Uint8Array(e)),
            );
            return n ? o(r) : r;
        }),
        l
    );
})();
