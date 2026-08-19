"use strict";
let t = /^xn--/,
    r = /[^\0-\x7E]/,
    n = /[\x2E\u3002\uFF0E\uFF61]/g,
    o = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    i = Math.floor,
    a = String.fromCharCode;
function s(e) {
    throw RangeError(o[e]);
}
function l(e, t) {
    let r = e.split("@"),
        o = "";
    return (
        r.length > 1 && ((o = r[0] + "@"), (e = r[1])),
        o +
            (function (e, t) {
                let r = [],
                    n = e.length;
                for (; n--; ) r[n] = t(e[n]);
                return r;
            })((e = e.replace(n, ".")).split("."), t).join(".")
    );
}
function u(e) {
    let t = [],
        r = 0,
        n = e.length;
    for (; r < n; ) {
        let o = e.charCodeAt(r++);
        if (o >= 55296 && o <= 56319 && r < n) {
            let n = e.charCodeAt(r++);
            (64512 & n) == 56320 ? t.push(((1023 & o) << 10) + (1023 & n) + 65536) : (t.push(o), r--);
        } else t.push(o);
    }
    return t;
}
let c = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    f = function (e, t, r) {
        let n = 0;
        for (e = r ? i(e / 700) : e >> 1, e += i(e / t); e > 455; n += 36) e = i(e / 35);
        return i(n + (36 * e) / (e + 38));
    },
    p = function (e) {
        let t = [],
            r = e.length,
            n = 0,
            o = 128,
            a = 72,
            l = e.lastIndexOf("-");
        l < 0 && (l = 0);
        for (let r = 0; r < l; ++r) e.charCodeAt(r) >= 128 && s("not-basic"), t.push(e.charCodeAt(r));
        for (let c = l > 0 ? l + 1 : 0; c < r; ) {
            let l = n;
            for (let t = 1, o = 36; ; o += 36) {
                var u;
                c >= r && s("invalid-input");
                let l = (u = e.charCodeAt(c++)) - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : 36;
                (l >= 36 || l > i((0x7fffffff - n) / t)) && s("overflow"), (n += l * t);
                let f = o <= a ? 1 : o >= a + 26 ? 26 : o - a;
                if (l < f) break;
                let p = 36 - f;
                t > i(0x7fffffff / p) && s("overflow"), (t *= p);
            }
            let p = t.length + 1;
            (a = f(n - l, p, 0 == l)),
                i(n / p) > 0x7fffffff - o && s("overflow"),
                (o += i(n / p)),
                (n %= p),
                t.splice(n++, 0, o);
        }
        return String.fromCodePoint(...t);
    },
    d = function (e) {
        let t = [],
            r = (e = u(e)).length,
            n = 128,
            o = 0,
            l = 72;
        for (let r of e) r < 128 && t.push(a(r));
        let p = t.length,
            d = p;
        for (p && t.push("-"); d < r; ) {
            let r = 0x7fffffff;
            for (let t of e) t >= n && t < r && (r = t);
            let u = d + 1;
            for (let h of (r - n > i((0x7fffffff - o) / u) && s("overflow"), (o += (r - n) * u), (n = r), e))
                if ((h < n && ++o > 0x7fffffff && s("overflow"), h == n)) {
                    let e = o;
                    for (let r = 36; ; r += 36) {
                        let n = r <= l ? 1 : r >= l + 26 ? 26 : r - l;
                        if (e < n) break;
                        let o = e - n,
                            s = 36 - n;
                        t.push(a(c(n + (o % s), 0))), (e = i(o / s));
                    }
                    t.push(a(c(e, 0))), (l = f(o, u, d == p)), (o = 0), ++d;
                }
            ++o, ++n;
        }
        return t.join("");
    };
e.exports = {
    version: "2.1.0",
    ucs2: { decode: u, encode: (e) => String.fromCodePoint(...e) },
    decode: p,
    encode: d,
    toASCII: function (e) {
        return l(e, function (e) {
            return r.test(e) ? "xn--" + d(e) : e;
        });
    },
    toUnicode: function (e) {
        return l(e, function (e) {
            return t.test(e) ? p(e.slice(4).toLowerCase()) : e;
        });
    },
};
