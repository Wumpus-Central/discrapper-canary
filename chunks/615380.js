e.exports = (function () {
    "use strict";
    var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function t(e, t) {
        var r = e[0],
            n = e[1],
            o = e[2],
            i = e[3];
        (r += (((n & o) | (~n & i)) + t[0] - 0x28955b88) | 0),
            (i += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & o)) + t[1] - 0x173848aa) | 0),
            (o += ((((i = (((i << 12) | (i >>> 20)) + r) | 0) & r) | (~i & n)) + t[2] + 0x242070db) | 0),
            (n += ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & r)) + t[3] - 0x3e423112) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + o) | 0) & o) | (~n & i)) + t[4] - 0xa83f051) | 0),
            (i += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & o)) + t[5] + 0x4787c62a) | 0),
            (o += ((((i = (((i << 12) | (i >>> 20)) + r) | 0) & r) | (~i & n)) + t[6] - 0x57cfb9ed) | 0),
            (n += ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & r)) + t[7] - 0x2b96aff) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + o) | 0) & o) | (~n & i)) + t[8] + 0x698098d8) | 0),
            (i += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & o)) + t[9] - 0x74bb0851) | 0),
            (o += ((((i = (((i << 12) | (i >>> 20)) + r) | 0) & r) | (~i & n)) + t[10] - 42063) | 0),
            (n += ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & r)) + t[11] - 0x76a32842) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + o) | 0) & o) | (~n & i)) + t[12] + 0x6b901122) | 0),
            (i += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & o)) + t[13] - 0x2678e6d) | 0),
            (o += ((((i = (((i << 12) | (i >>> 20)) + r) | 0) & r) | (~i & n)) + t[14] - 0x5986bc72) | 0),
            (n += ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & r)) + t[15] + 0x49b40821) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + o) | 0) & i) | (o & ~i)) + t[1] - 0x9e1da9e) | 0),
            (i += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & o) | (n & ~o)) + t[6] - 0x3fbf4cc0) | 0),
            (o += ((((i = (((i << 9) | (i >>> 23)) + r) | 0) & n) | (r & ~n)) + t[11] + 0x265e5a51) | 0),
            (n += ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & r) | (i & ~r)) + t[0] - 0x16493856) | 0),
            (r += ((((n = (((n << 20) | (n >>> 12)) + o) | 0) & i) | (o & ~i)) + t[5] - 0x29d0efa3) | 0),
            (i += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & o) | (n & ~o)) + t[10] + 0x2441453) | 0),
            (o += ((((i = (((i << 9) | (i >>> 23)) + r) | 0) & n) | (r & ~n)) + t[15] - 0x275e197f) | 0),
            (n += ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & r) | (i & ~r)) + t[4] - 0x182c0438) | 0),
            (r += ((((n = (((n << 20) | (n >>> 12)) + o) | 0) & i) | (o & ~i)) + t[9] + 0x21e1cde6) | 0),
            (i += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & o) | (n & ~o)) + t[14] - 0x3cc8f82a) | 0),
            (o += ((((i = (((i << 9) | (i >>> 23)) + r) | 0) & n) | (r & ~n)) + t[3] - 0xb2af279) | 0),
            (n += ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & r) | (i & ~r)) + t[8] + 0x455a14ed) | 0),
            (r += ((((n = (((n << 20) | (n >>> 12)) + o) | 0) & i) | (o & ~i)) + t[13] - 0x561c16fb) | 0),
            (i += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & o) | (n & ~o)) + t[2] - 0x3105c08) | 0),
            (o += ((((i = (((i << 9) | (i >>> 23)) + r) | 0) & n) | (r & ~n)) + t[7] + 0x676f02d9) | 0),
            (n += ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & r) | (i & ~r)) + t[12] - 0x72d5b376) | 0),
            (r += (((n = (((n << 20) | (n >>> 12)) + o) | 0) ^ o ^ i) + t[5] - 378558) | 0),
            (i += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ o) + t[8] - 0x788e097f) | 0),
            (o += (((i = (((i << 11) | (i >>> 21)) + r) | 0) ^ r ^ n) + t[11] + 0x6d9d6122) | 0),
            (n += (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ r) + t[14] - 0x21ac7f4) | 0),
            (r += (((n = (((n << 23) | (n >>> 9)) + o) | 0) ^ o ^ i) + t[1] - 0x5b4115bc) | 0),
            (i += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ o) + t[4] + 0x4bdecfa9) | 0),
            (o += (((i = (((i << 11) | (i >>> 21)) + r) | 0) ^ r ^ n) + t[7] - 0x944b4a0) | 0),
            (n += (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ r) + t[10] - 0x41404390) | 0),
            (r += (((n = (((n << 23) | (n >>> 9)) + o) | 0) ^ o ^ i) + t[13] + 0x289b7ec6) | 0),
            (i += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ o) + t[0] - 0x155ed806) | 0),
            (o += (((i = (((i << 11) | (i >>> 21)) + r) | 0) ^ r ^ n) + t[3] - 0x2b10cf7b) | 0),
            (n += (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ r) + t[6] + 0x4881d05) | 0),
            (r += (((n = (((n << 23) | (n >>> 9)) + o) | 0) ^ o ^ i) + t[9] - 0x262b2fc7) | 0),
            (i += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ o) + t[12] - 0x1924661b) | 0),
            (o += (((i = (((i << 11) | (i >>> 21)) + r) | 0) ^ r ^ n) + t[15] + 0x1fa27cf8) | 0),
            (n += (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ r) + t[2] - 0x3b53a99b) | 0),
            (n = (((n << 23) | (n >>> 9)) + o) | 0),
            (r += ((o ^ (n | ~i)) + t[0] - 0xbd6ddbc) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~o)) + t[7] + 0x432aff97) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (o += ((r ^ (i | ~n)) + t[14] - 0x546bdc59) | 0),
            (o = (((o << 15) | (o >>> 17)) + i) | 0),
            (n += ((i ^ (o | ~r)) + t[5] - 0x36c5fc7) | 0),
            (n = (((n << 21) | (n >>> 11)) + o) | 0),
            (r += ((o ^ (n | ~i)) + t[12] + 0x655b59c3) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~o)) + t[3] - 0x70f3336e) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (o += ((r ^ (i | ~n)) + t[10] - 1051523) | 0),
            (o = (((o << 15) | (o >>> 17)) + i) | 0),
            (n += ((i ^ (o | ~r)) + t[1] - 0x7a7ba22f) | 0),
            (n = (((n << 21) | (n >>> 11)) + o) | 0),
            (r += ((o ^ (n | ~i)) + t[8] + 0x6fa87e4f) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~o)) + t[15] - 0x1d31920) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (o += ((r ^ (i | ~n)) + t[6] - 0x5cfebcec) | 0),
            (o = (((o << 15) | (o >>> 17)) + i) | 0),
            (n += ((i ^ (o | ~r)) + t[13] + 0x4e0811a1) | 0),
            (n = (((n << 21) | (n >>> 11)) + o) | 0),
            (r += ((o ^ (n | ~i)) + t[4] - 0x8ac817e) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~o)) + t[11] - 0x42c50dcb) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (o += ((r ^ (i | ~n)) + t[2] + 0x2ad7d2bb) | 0),
            (o = (((o << 15) | (o >>> 17)) + i) | 0),
            (n += ((i ^ (o | ~r)) + t[9] - 0x14792c6f) | 0),
            (n = (((n << 21) | (n >>> 11)) + o) | 0),
            (e[0] = (r + e[0]) | 0),
            (e[1] = (n + e[1]) | 0),
            (e[2] = (o + e[2]) | 0),
            (e[3] = (i + e[3]) | 0);
    }
    function r(e) {
        var t,
            r = [];
        for (t = 0; t < 64; t += 4)
            r[t >> 2] =
                e.charCodeAt(t) +
                (e.charCodeAt(t + 1) << 8) +
                (e.charCodeAt(t + 2) << 16) +
                (e.charCodeAt(t + 3) << 24);
        return r;
    }
    function n(e) {
        var t,
            r = [];
        for (t = 0; t < 64; t += 4) r[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
        return r;
    }
    function o(e) {
        var n,
            o,
            i,
            a,
            s,
            l,
            u = e.length,
            c = [0x67452301, -0x10325477, -0x67452302, 0x10325476];
        for (n = 64; n <= u; n += 64) t(c, r(e.substring(n - 64, n)));
        for (
            o = (e = e.substring(n - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0;
            n < o;
            n += 1
        )
            i[n >> 2] |= e.charCodeAt(n) << ((n % 4) << 3);
        if (((i[n >> 2] |= 128 << ((n % 4) << 3)), n > 55)) for (t(c, i), n = 0; n < 16; n += 1) i[n] = 0;
        return (
            (s = parseInt((a = (a = 8 * u).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
            (l = parseInt(a[1], 16) || 0),
            (i[14] = s),
            (i[15] = l),
            t(c, i),
            c
        );
    }
    function i(t) {
        var r;
        for (r = 0; r < t.length; r += 1)
            t[r] = (function (t) {
                var r,
                    n = "";
                for (r = 0; r < 4; r += 1) n += e[(t >> (8 * r + 4)) & 15] + e[(t >> (8 * r)) & 15];
                return n;
            })(t[r]);
        return t.join("");
    }
    function a(e) {
        return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
    }
    function s(e) {
        var t,
            r = [],
            n = e.length;
        for (t = 0; t < n - 1; t += 2) r.push(parseInt(e.substr(t, 2), 16));
        return String.fromCharCode.apply(String, r);
    }
    function l() {
        this.reset();
    }
    return (
        i(o("hello")),
        "u" > typeof ArrayBuffer &&
            !ArrayBuffer.prototype.slice &&
            (function () {
                function e(e, t) {
                    return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t);
                }
                ArrayBuffer.prototype.slice = function (t, r) {
                    var n,
                        o,
                        i,
                        a,
                        s = this.byteLength,
                        l = e(t, s),
                        u = s;
                    return (void 0 !== r && (u = e(r, s)), l > u)
                        ? new ArrayBuffer(0)
                        : ((i = new Uint8Array((o = new ArrayBuffer((n = u - l))))),
                          (a = new Uint8Array(this, l, n)),
                          i.set(a),
                          o);
                };
            })(),
        (l.prototype.append = function (e) {
            return this.appendBinary(a(e)), this;
        }),
        (l.prototype.appendBinary = function (e) {
            (this._buff += e), (this._length += e.length);
            var n,
                o = this._buff.length;
            for (n = 64; n <= o; n += 64) t(this._hash, r(this._buff.substring(n - 64, n)));
            return (this._buff = this._buff.substring(n - 64)), this;
        }),
        (l.prototype.end = function (e) {
            var t,
                r,
                n = this._buff,
                o = n.length,
                a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < o; t += 1) a[t >> 2] |= n.charCodeAt(t) << ((t % 4) << 3);
            return this._finish(a, o), (r = i(this._hash)), e && (r = s(r)), this.reset(), r;
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
        (l.prototype._finish = function (e, r) {
            var n,
                o,
                i,
                a = r;
            if (((e[a >> 2] |= 128 << ((a % 4) << 3)), a > 55)) for (t(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
            (o = parseInt((n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
                (i = parseInt(n[1], 16) || 0),
                (e[14] = o),
                (e[15] = i),
                t(this._hash, e);
        }),
        (l.hash = function (e, t) {
            return l.hashBinary(a(e), t);
        }),
        (l.hashBinary = function (e, t) {
            var r = i(o(e));
            return t ? s(r) : r;
        }),
        (l.ArrayBuffer = function () {
            this.reset();
        }),
        (l.ArrayBuffer.prototype.append = function (e) {
            var r,
                o,
                i,
                a =
                    ((r = this._buff.buffer),
                    (o = new Uint8Array(r.byteLength + e.byteLength)).set(new Uint8Array(r)),
                    o.set(new Uint8Array(e), r.byteLength),
                    o),
                s = a.length;
            for (this._length += e.byteLength, i = 64; i <= s; i += 64) t(this._hash, n(a.subarray(i - 64, i)));
            return (this._buff = new Uint8Array(i - 64 < s ? a.buffer.slice(i - 64) : 0)), this;
        }),
        (l.ArrayBuffer.prototype.end = function (e) {
            var t,
                r,
                n = this._buff,
                o = n.length,
                a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < o; t += 1) a[t >> 2] |= n[t] << ((t % 4) << 3);
            return this._finish(a, o), (r = i(this._hash)), e && (r = s(r)), this.reset(), r;
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
                    var r,
                        n = e.length,
                        o = new ArrayBuffer(n),
                        i = new Uint8Array(o);
                    for (r = 0; r < n; r += 1) i[r] = e.charCodeAt(r);
                    return t ? i : o;
                })(e.buff, !0)),
                l.prototype.setState.call(this, e)
            );
        }),
        (l.ArrayBuffer.prototype.destroy = l.prototype.destroy),
        (l.ArrayBuffer.prototype._finish = l.prototype._finish),
        (l.ArrayBuffer.hash = function (e, r) {
            var o = i(
                (function (e) {
                    var r,
                        o,
                        i,
                        a,
                        s,
                        l,
                        u = e.length,
                        c = [0x67452301, -0x10325477, -0x67452302, 0x10325476];
                    for (r = 64; r <= u; r += 64) t(c, n(e.subarray(r - 64, r)));
                    for (
                        o = (e = r - 64 < u ? e.subarray(r - 64) : new Uint8Array(0)).length,
                            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            r = 0;
                        r < o;
                        r += 1
                    )
                        i[r >> 2] |= e[r] << ((r % 4) << 3);
                    if (((i[r >> 2] |= 128 << ((r % 4) << 3)), r > 55)) for (t(c, i), r = 0; r < 16; r += 1) i[r] = 0;
                    return (
                        (s = parseInt((a = (a = 8 * u).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
                        (l = parseInt(a[1], 16) || 0),
                        (i[14] = s),
                        (i[15] = l),
                        t(c, i),
                        c
                    );
                })(new Uint8Array(e)),
            );
            return r ? s(o) : o;
        }),
        l
    );
})();
