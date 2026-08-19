e.exports = (function () {
    "use strict";
    var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function t(e, t) {
        var r = e[0],
            n = e[1],
            a = e[2],
            o = e[3];
        (r += (((n & a) | (~n & o)) + t[0] - 0x28955b88) | 0),
            (o += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & a)) + t[1] - 0x173848aa) | 0),
            (a += ((((o = (((o << 12) | (o >>> 20)) + r) | 0) & r) | (~o & n)) + t[2] + 0x242070db) | 0),
            (n += ((((a = (((a << 17) | (a >>> 15)) + o) | 0) & o) | (~a & r)) + t[3] - 0x3e423112) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + a) | 0) & a) | (~n & o)) + t[4] - 0xa83f051) | 0),
            (o += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & a)) + t[5] + 0x4787c62a) | 0),
            (a += ((((o = (((o << 12) | (o >>> 20)) + r) | 0) & r) | (~o & n)) + t[6] - 0x57cfb9ed) | 0),
            (n += ((((a = (((a << 17) | (a >>> 15)) + o) | 0) & o) | (~a & r)) + t[7] - 0x2b96aff) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + a) | 0) & a) | (~n & o)) + t[8] + 0x698098d8) | 0),
            (o += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & a)) + t[9] - 0x74bb0851) | 0),
            (a += ((((o = (((o << 12) | (o >>> 20)) + r) | 0) & r) | (~o & n)) + t[10] - 42063) | 0),
            (n += ((((a = (((a << 17) | (a >>> 15)) + o) | 0) & o) | (~a & r)) + t[11] - 0x76a32842) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + a) | 0) & a) | (~n & o)) + t[12] + 0x6b901122) | 0),
            (o += ((((r = (((r << 7) | (r >>> 25)) + n) | 0) & n) | (~r & a)) + t[13] - 0x2678e6d) | 0),
            (a += ((((o = (((o << 12) | (o >>> 20)) + r) | 0) & r) | (~o & n)) + t[14] - 0x5986bc72) | 0),
            (n += ((((a = (((a << 17) | (a >>> 15)) + o) | 0) & o) | (~a & r)) + t[15] + 0x49b40821) | 0),
            (r += ((((n = (((n << 22) | (n >>> 10)) + a) | 0) & o) | (a & ~o)) + t[1] - 0x9e1da9e) | 0),
            (o += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & a) | (n & ~a)) + t[6] - 0x3fbf4cc0) | 0),
            (a += ((((o = (((o << 9) | (o >>> 23)) + r) | 0) & n) | (r & ~n)) + t[11] + 0x265e5a51) | 0),
            (n += ((((a = (((a << 14) | (a >>> 18)) + o) | 0) & r) | (o & ~r)) + t[0] - 0x16493856) | 0),
            (r += ((((n = (((n << 20) | (n >>> 12)) + a) | 0) & o) | (a & ~o)) + t[5] - 0x29d0efa3) | 0),
            (o += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & a) | (n & ~a)) + t[10] + 0x2441453) | 0),
            (a += ((((o = (((o << 9) | (o >>> 23)) + r) | 0) & n) | (r & ~n)) + t[15] - 0x275e197f) | 0),
            (n += ((((a = (((a << 14) | (a >>> 18)) + o) | 0) & r) | (o & ~r)) + t[4] - 0x182c0438) | 0),
            (r += ((((n = (((n << 20) | (n >>> 12)) + a) | 0) & o) | (a & ~o)) + t[9] + 0x21e1cde6) | 0),
            (o += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & a) | (n & ~a)) + t[14] - 0x3cc8f82a) | 0),
            (a += ((((o = (((o << 9) | (o >>> 23)) + r) | 0) & n) | (r & ~n)) + t[3] - 0xb2af279) | 0),
            (n += ((((a = (((a << 14) | (a >>> 18)) + o) | 0) & r) | (o & ~r)) + t[8] + 0x455a14ed) | 0),
            (r += ((((n = (((n << 20) | (n >>> 12)) + a) | 0) & o) | (a & ~o)) + t[13] - 0x561c16fb) | 0),
            (o += ((((r = (((r << 5) | (r >>> 27)) + n) | 0) & a) | (n & ~a)) + t[2] - 0x3105c08) | 0),
            (a += ((((o = (((o << 9) | (o >>> 23)) + r) | 0) & n) | (r & ~n)) + t[7] + 0x676f02d9) | 0),
            (n += ((((a = (((a << 14) | (a >>> 18)) + o) | 0) & r) | (o & ~r)) + t[12] - 0x72d5b376) | 0),
            (r += (((n = (((n << 20) | (n >>> 12)) + a) | 0) ^ a ^ o) + t[5] - 378558) | 0),
            (o += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ a) + t[8] - 0x788e097f) | 0),
            (a += (((o = (((o << 11) | (o >>> 21)) + r) | 0) ^ r ^ n) + t[11] + 0x6d9d6122) | 0),
            (n += (((a = (((a << 16) | (a >>> 16)) + o) | 0) ^ o ^ r) + t[14] - 0x21ac7f4) | 0),
            (r += (((n = (((n << 23) | (n >>> 9)) + a) | 0) ^ a ^ o) + t[1] - 0x5b4115bc) | 0),
            (o += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ a) + t[4] + 0x4bdecfa9) | 0),
            (a += (((o = (((o << 11) | (o >>> 21)) + r) | 0) ^ r ^ n) + t[7] - 0x944b4a0) | 0),
            (n += (((a = (((a << 16) | (a >>> 16)) + o) | 0) ^ o ^ r) + t[10] - 0x41404390) | 0),
            (r += (((n = (((n << 23) | (n >>> 9)) + a) | 0) ^ a ^ o) + t[13] + 0x289b7ec6) | 0),
            (o += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ a) + t[0] - 0x155ed806) | 0),
            (a += (((o = (((o << 11) | (o >>> 21)) + r) | 0) ^ r ^ n) + t[3] - 0x2b10cf7b) | 0),
            (n += (((a = (((a << 16) | (a >>> 16)) + o) | 0) ^ o ^ r) + t[6] + 0x4881d05) | 0),
            (r += (((n = (((n << 23) | (n >>> 9)) + a) | 0) ^ a ^ o) + t[9] - 0x262b2fc7) | 0),
            (o += (((r = (((r << 4) | (r >>> 28)) + n) | 0) ^ n ^ a) + t[12] - 0x1924661b) | 0),
            (a += (((o = (((o << 11) | (o >>> 21)) + r) | 0) ^ r ^ n) + t[15] + 0x1fa27cf8) | 0),
            (n += (((a = (((a << 16) | (a >>> 16)) + o) | 0) ^ o ^ r) + t[2] - 0x3b53a99b) | 0),
            (n = (((n << 23) | (n >>> 9)) + a) | 0),
            (r += ((a ^ (n | ~o)) + t[0] - 0xbd6ddbc) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (o += ((n ^ (r | ~a)) + t[7] + 0x432aff97) | 0),
            (o = (((o << 10) | (o >>> 22)) + r) | 0),
            (a += ((r ^ (o | ~n)) + t[14] - 0x546bdc59) | 0),
            (a = (((a << 15) | (a >>> 17)) + o) | 0),
            (n += ((o ^ (a | ~r)) + t[5] - 0x36c5fc7) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (r += ((a ^ (n | ~o)) + t[12] + 0x655b59c3) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (o += ((n ^ (r | ~a)) + t[3] - 0x70f3336e) | 0),
            (o = (((o << 10) | (o >>> 22)) + r) | 0),
            (a += ((r ^ (o | ~n)) + t[10] - 1051523) | 0),
            (a = (((a << 15) | (a >>> 17)) + o) | 0),
            (n += ((o ^ (a | ~r)) + t[1] - 0x7a7ba22f) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (r += ((a ^ (n | ~o)) + t[8] + 0x6fa87e4f) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (o += ((n ^ (r | ~a)) + t[15] - 0x1d31920) | 0),
            (o = (((o << 10) | (o >>> 22)) + r) | 0),
            (a += ((r ^ (o | ~n)) + t[6] - 0x5cfebcec) | 0),
            (a = (((a << 15) | (a >>> 17)) + o) | 0),
            (n += ((o ^ (a | ~r)) + t[13] + 0x4e0811a1) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (r += ((a ^ (n | ~o)) + t[4] - 0x8ac817e) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (o += ((n ^ (r | ~a)) + t[11] - 0x42c50dcb) | 0),
            (o = (((o << 10) | (o >>> 22)) + r) | 0),
            (a += ((r ^ (o | ~n)) + t[2] + 0x2ad7d2bb) | 0),
            (a = (((a << 15) | (a >>> 17)) + o) | 0),
            (n += ((o ^ (a | ~r)) + t[9] - 0x14792c6f) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (e[0] = (r + e[0]) | 0),
            (e[1] = (n + e[1]) | 0),
            (e[2] = (a + e[2]) | 0),
            (e[3] = (o + e[3]) | 0);
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
    function a(e) {
        var n,
            a,
            o,
            i,
            s,
            l,
            c = e.length,
            u = [0x67452301, -0x10325477, -0x67452302, 0x10325476];
        for (n = 64; n <= c; n += 64) t(u, r(e.substring(n - 64, n)));
        for (
            a = (e = e.substring(n - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0;
            n < a;
            n += 1
        )
            o[n >> 2] |= e.charCodeAt(n) << ((n % 4) << 3);
        if (((o[n >> 2] |= 128 << ((n % 4) << 3)), n > 55)) for (t(u, o), n = 0; n < 16; n += 1) o[n] = 0;
        return (
            (s = parseInt((i = (i = 8 * c).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
            (l = parseInt(i[1], 16) || 0),
            (o[14] = s),
            (o[15] = l),
            t(u, o),
            u
        );
    }
    function o(t) {
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
    function i(e) {
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
        o(a("hello")),
        "u" > typeof ArrayBuffer &&
            !ArrayBuffer.prototype.slice &&
            (function () {
                function e(e, t) {
                    return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t);
                }
                ArrayBuffer.prototype.slice = function (t, r) {
                    var n,
                        a,
                        o,
                        i,
                        s = this.byteLength,
                        l = e(t, s),
                        c = s;
                    return (void 0 !== r && (c = e(r, s)), l > c)
                        ? new ArrayBuffer(0)
                        : ((o = new Uint8Array((a = new ArrayBuffer((n = c - l))))),
                          (i = new Uint8Array(this, l, n)),
                          o.set(i),
                          a);
                };
            })(),
        (l.prototype.append = function (e) {
            return this.appendBinary(i(e)), this;
        }),
        (l.prototype.appendBinary = function (e) {
            (this._buff += e), (this._length += e.length);
            var n,
                a = this._buff.length;
            for (n = 64; n <= a; n += 64) t(this._hash, r(this._buff.substring(n - 64, n)));
            return (this._buff = this._buff.substring(n - 64)), this;
        }),
        (l.prototype.end = function (e) {
            var t,
                r,
                n = this._buff,
                a = n.length,
                i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < a; t += 1) i[t >> 2] |= n.charCodeAt(t) << ((t % 4) << 3);
            return this._finish(i, a), (r = o(this._hash)), e && (r = s(r)), this.reset(), r;
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
                a,
                o,
                i = r;
            if (((e[i >> 2] |= 128 << ((i % 4) << 3)), i > 55)) for (t(this._hash, e), i = 0; i < 16; i += 1) e[i] = 0;
            (a = parseInt((n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
                (o = parseInt(n[1], 16) || 0),
                (e[14] = a),
                (e[15] = o),
                t(this._hash, e);
        }),
        (l.hash = function (e, t) {
            return l.hashBinary(i(e), t);
        }),
        (l.hashBinary = function (e, t) {
            var r = o(a(e));
            return t ? s(r) : r;
        }),
        (l.ArrayBuffer = function () {
            this.reset();
        }),
        (l.ArrayBuffer.prototype.append = function (e) {
            var r,
                a,
                o,
                i =
                    ((r = this._buff.buffer),
                    (a = new Uint8Array(r.byteLength + e.byteLength)).set(new Uint8Array(r)),
                    a.set(new Uint8Array(e), r.byteLength),
                    a),
                s = i.length;
            for (this._length += e.byteLength, o = 64; o <= s; o += 64) t(this._hash, n(i.subarray(o - 64, o)));
            return (this._buff = new Uint8Array(o - 64 < s ? i.buffer.slice(o - 64) : 0)), this;
        }),
        (l.ArrayBuffer.prototype.end = function (e) {
            var t,
                r,
                n = this._buff,
                a = n.length,
                i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < a; t += 1) i[t >> 2] |= n[t] << ((t % 4) << 3);
            return this._finish(i, a), (r = o(this._hash)), e && (r = s(r)), this.reset(), r;
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
                        a = new ArrayBuffer(n),
                        o = new Uint8Array(a);
                    for (r = 0; r < n; r += 1) o[r] = e.charCodeAt(r);
                    return t ? o : a;
                })(e.buff, !0)),
                l.prototype.setState.call(this, e)
            );
        }),
        (l.ArrayBuffer.prototype.destroy = l.prototype.destroy),
        (l.ArrayBuffer.prototype._finish = l.prototype._finish),
        (l.ArrayBuffer.hash = function (e, r) {
            var a = o(
                (function (e) {
                    var r,
                        a,
                        o,
                        i,
                        s,
                        l,
                        c = e.length,
                        u = [0x67452301, -0x10325477, -0x67452302, 0x10325476];
                    for (r = 64; r <= c; r += 64) t(u, n(e.subarray(r - 64, r)));
                    for (
                        a = (e = r - 64 < c ? e.subarray(r - 64) : new Uint8Array(0)).length,
                            o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            r = 0;
                        r < a;
                        r += 1
                    )
                        o[r >> 2] |= e[r] << ((r % 4) << 3);
                    if (((o[r >> 2] |= 128 << ((r % 4) << 3)), r > 55)) for (t(u, o), r = 0; r < 16; r += 1) o[r] = 0;
                    return (
                        (s = parseInt((i = (i = 8 * c).toString(16).match(/(.*?)(.{0,8})$/))[2], 16)),
                        (l = parseInt(i[1], 16) || 0),
                        (o[14] = s),
                        (o[15] = l),
                        t(u, o),
                        u
                    );
                })(new Uint8Array(e)),
            );
            return r ? s(a) : a;
        }),
        l
    );
})();
