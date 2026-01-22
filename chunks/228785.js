let t = 0x7fffffff,
    n = 36,
    r = 1,
    i = 26,
    a = 38,
    s = 700,
    o = 72,
    l = 128,
    c = "-",
    u = /^xn--/,
    d = /[^\0-\x7E]/,
    f = /[\x2E\u3002\uFF0E\uFF61]/g,
    p = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    _ = 35,
    h = Math.floor,
    m = String.fromCharCode;

function g(e) {
    throw RangeError(p[e]);
}

function E(e, t) {
    let n = [],
        r = e.length;
    for (; r--; ) n[r] = t(e[r]);
    return n;
}

function b(e, t) {
    let n = e.split("@"),
        r = "";
    return n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + E((e = e.replace(f, ".")).split("."), t).join(".");
}

function y(e) {
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
let O = function (e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : n;
    },
    A = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    v = function (e, t, r) {
        let o = 0;
        for (e = r ? h(e / s) : e >> 1, e += h(e / t); e > (_ * i) >> 1; o += n) e = h(e / _);
        return h(o + ((_ + 1) * e) / (e + a));
    },
    S = function (e) {
        let a = [],
            s = e.length,
            u = 0,
            d = l,
            f = o,
            p = e.lastIndexOf(c);
        p < 0 && (p = 0);
        for (let t = 0; t < p; ++t) e.charCodeAt(t) >= 128 && g("not-basic"), a.push(e.charCodeAt(t));
        for (let o = p > 0 ? p + 1 : 0; o < s; ) {
            let l = u;
            for (let a = 1, l = n; ; l += n) {
                o >= s && g("invalid-input");
                let c = O(e.charCodeAt(o++));
                (c >= n || c > h((t - u) / a)) && g("overflow"), (u += c * a);
                let d = l <= f ? r : l >= f + i ? i : l - f;
                if (c < d) break;
                let p = n - d;
                a > h(t / p) && g("overflow"), (a *= p);
            }
            let c = a.length + 1;
            (f = v(u - l, c, 0 == l)),
                h(u / c) > t - d && g("overflow"),
                (d += h(u / c)),
                (u %= c),
                a.splice(u++, 0, d);
        }
        return String.fromCodePoint(...a);
    },
    I = function (e) {
        let a = [],
            s = (e = y(e)).length,
            u = l,
            d = 0,
            f = o;
        for (let t of e) t < 128 && a.push(m(t));
        let p = a.length,
            _ = p;
        for (p && a.push(c); _ < s; ) {
            let s = t;
            for (let t of e) t >= u && t < s && (s = t);
            let o = _ + 1;
            for (let l of (s - u > h((t - d) / o) && g("overflow"), (d += (s - u) * o), (u = s), e))
                if ((l < u && ++d > t && g("overflow"), l == u)) {
                    let e = d;
                    for (let t = n; ; t += n) {
                        let s = t <= f ? r : t >= f + i ? i : t - f;
                        if (e < s) break;
                        let o = e - s,
                            l = n - s;
                        a.push(m(A(s + (o % l), 0))), (e = h(o / l));
                    }
                    a.push(m(A(e, 0))), (f = v(d, o, _ == p)), (d = 0), ++_;
                }
            ++d, ++u;
        }
        return a.join("");
    },
    T = function (e) {
        return b(e, function (e) {
            return u.test(e) ? S(e.slice(4).toLowerCase()) : e;
        });
    },
    C = function (e) {
        return b(e, function (e) {
            return d.test(e) ? "xn--" + I(e) : e;
        });
    };
e.exports = {
    version: "2.1.0",
    ucs2: {
        decode: y,
        encode: (e) => String.fromCodePoint(...e),
    },
    decode: S,
    encode: I,
    toASCII: C,
    toUnicode: T,
};
