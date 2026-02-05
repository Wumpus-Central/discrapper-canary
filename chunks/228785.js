"use strict";
let t = 0x7fffffff,
    n = 36,
    r = 1,
    i = 26,
    a = 38,
    s = 700,
    o = 72,
    l = 128,
    u = "-",
    c = /^xn--/,
    d = /[^\0-\x7E]/,
    _ = /[\x2E\u3002\uFF0E\uFF61]/g,
    f = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    p = 35,
    h = Math.floor,
    m = String.fromCharCode;
function g(e) {
    throw RangeError(f[e]);
}
function E(e, t) {
    let n = [],
        r = e.length;
    for (; r--; ) n[r] = t(e[r]);
    return n;
}
function A(e, t) {
    let n = e.split("@"),
        r = "";
    return n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + E((e = e.replace(_, ".")).split("."), t).join(".");
}
function I(e) {
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
let T = function (e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : n;
    },
    y = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    S = function (e, t, r) {
        let o = 0;
        for (e = r ? h(e / s) : e >> 1, e += h(e / t); e > (p * i) >> 1; o += n) e = h(e / p);
        return h(o + ((p + 1) * e) / (e + a));
    },
    v = function (e) {
        let a = [],
            s = e.length,
            c = 0,
            d = l,
            _ = o,
            f = e.lastIndexOf(u);
        f < 0 && (f = 0);
        for (let t = 0; t < f; ++t) e.charCodeAt(t) >= 128 && g("not-basic"), a.push(e.charCodeAt(t));
        for (let o = f > 0 ? f + 1 : 0; o < s; ) {
            let l = c;
            for (let a = 1, l = n; ; l += n) {
                o >= s && g("invalid-input");
                let u = T(e.charCodeAt(o++));
                (u >= n || u > h((t - c) / a)) && g("overflow"), (c += u * a);
                let d = l <= _ ? r : l >= _ + i ? i : l - _;
                if (u < d) break;
                let f = n - d;
                a > h(t / f) && g("overflow"), (a *= f);
            }
            let u = a.length + 1;
            (_ = S(c - l, u, 0 == l)),
                h(c / u) > t - d && g("overflow"),
                (d += h(c / u)),
                (c %= u),
                a.splice(c++, 0, d);
        }
        return String.fromCodePoint(...a);
    },
    C = function (e) {
        let a = [],
            s = (e = I(e)).length,
            c = l,
            d = 0,
            _ = o;
        for (let t of e) t < 128 && a.push(m(t));
        let f = a.length,
            p = f;
        for (f && a.push(u); p < s; ) {
            let s = t;
            for (let t of e) t >= c && t < s && (s = t);
            let o = p + 1;
            for (let l of (s - c > h((t - d) / o) && g("overflow"), (d += (s - c) * o), (c = s), e))
                if ((l < c && ++d > t && g("overflow"), l == c)) {
                    let e = d;
                    for (let t = n; ; t += n) {
                        let s = t <= _ ? r : t >= _ + i ? i : t - _;
                        if (e < s) break;
                        let o = e - s,
                            l = n - s;
                        a.push(m(y(s + (o % l), 0))), (e = h(o / l));
                    }
                    a.push(m(y(e, 0))), (_ = S(d, o, p == f)), (d = 0), ++p;
                }
            ++d, ++c;
        }
        return a.join("");
    },
    b = function (e) {
        return A(e, function (e) {
            return c.test(e) ? v(e.slice(4).toLowerCase()) : e;
        });
    },
    N = function (e) {
        return A(e, function (e) {
            return d.test(e) ? "xn--" + C(e) : e;
        });
    };
e.exports = {
    version: "2.1.0",
    ucs2: { decode: I, encode: (e) => String.fromCodePoint(...e) },
    decode: v,
    encode: C,
    toASCII: N,
    toUnicode: b,
};
