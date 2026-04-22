"use strict";
let t = /^xn--/,
    n = /[^\0-\x7E]/,
    r = /[\x2E\u3002\uFF0E\uFF61]/g,
    i = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    s = Math.floor,
    a = String.fromCharCode;
function o(e) {
    throw RangeError(i[e]);
}
function l(e, t) {
    let n = e.split("@"),
        i = "";
    return (
        n.length > 1 && ((i = n[0] + "@"), (e = n[1])),
        i +
            (function (e, t) {
                let n = [],
                    r = e.length;
                for (; r--; ) n[r] = t(e[r]);
                return n;
            })((e = e.replace(r, ".")).split("."), t).join(".")
    );
}
function u(e) {
    let t = [],
        n = 0,
        r = e.length;
    for (; n < r; ) {
        let i = e.charCodeAt(n++);
        if (i >= 55296 && i <= 56319 && n < r) {
            let r = e.charCodeAt(n++);
            (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), n--);
        } else t.push(i);
    }
    return t;
}
let d = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    c = function (e, t, n) {
        let r = 0;
        for (e = n ? s(e / 700) : e >> 1, e += s(e / t); e > 455; r += 36) e = s(e / 35);
        return s(r + (36 * e) / (e + 38));
    },
    _ = function (e) {
        let t = [],
            n = e.length,
            r = 0,
            i = 128,
            a = 72,
            l = e.lastIndexOf("-");
        l < 0 && (l = 0);
        for (let n = 0; n < l; ++n) e.charCodeAt(n) >= 128 && o("not-basic"), t.push(e.charCodeAt(n));
        for (let d = l > 0 ? l + 1 : 0; d < n; ) {
            let l = r;
            for (let t = 1, i = 36; ; i += 36) {
                var u;
                d >= n && o("invalid-input");
                let l = (u = e.charCodeAt(d++)) - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : 36;
                (l >= 36 || l > s((0x7fffffff - r) / t)) && o("overflow"), (r += l * t);
                let c = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
                if (l < c) break;
                let _ = 36 - c;
                t > s(0x7fffffff / _) && o("overflow"), (t *= _);
            }
            let _ = t.length + 1;
            (a = c(r - l, _, 0 == l)),
                s(r / _) > 0x7fffffff - i && o("overflow"),
                (i += s(r / _)),
                (r %= _),
                t.splice(r++, 0, i);
        }
        return String.fromCodePoint(...t);
    },
    f = function (e) {
        let t = [],
            n = (e = u(e)).length,
            r = 128,
            i = 0,
            l = 72;
        for (let n of e) n < 128 && t.push(a(n));
        let _ = t.length,
            f = _;
        for (_ && t.push("-"); f < n; ) {
            let n = 0x7fffffff;
            for (let t of e) t >= r && t < n && (n = t);
            let u = f + 1;
            for (let E of (n - r > s((0x7fffffff - i) / u) && o("overflow"), (i += (n - r) * u), (r = n), e))
                if ((E < r && ++i > 0x7fffffff && o("overflow"), E == r)) {
                    let e = i;
                    for (let n = 36; ; n += 36) {
                        let r = n <= l ? 1 : n >= l + 26 ? 26 : n - l;
                        if (e < r) break;
                        let i = e - r,
                            o = 36 - r;
                        t.push(a(d(r + (i % o), 0))), (e = s(i / o));
                    }
                    t.push(a(d(e, 0))), (l = c(i, u, f == _)), (i = 0), ++f;
                }
            ++i, ++r;
        }
        return t.join("");
    };
e.exports = {
    version: "2.1.0",
    ucs2: { decode: u, encode: (e) => String.fromCodePoint(...e) },
    decode: _,
    encode: f,
    toASCII: function (e) {
        return l(e, function (e) {
            return n.test(e) ? "xn--" + f(e) : e;
        });
    },
    toUnicode: function (e) {
        return l(e, function (e) {
            return t.test(e) ? _(e.slice(4).toLowerCase()) : e;
        });
    },
};
