let t = /^xn--/,
    r = /[^\0-\x7E]/,
    n = /[\x2E\u3002\uFF0E\uFF61]/g,
    i = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    o = Math.floor,
    a = String.fromCharCode;
function s(e) {
    throw RangeError(i[e]);
}
function l(e, t) {
    let r = e.split("@"),
        i = "";
    return (
        r.length > 1 && ((i = r[0] + "@"), (e = r[1])),
        i +
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
        let i = e.charCodeAt(r++);
        if (i >= 55296 && i <= 56319 && r < n) {
            let n = e.charCodeAt(r++);
            (64512 & n) == 56320 ? t.push(((1023 & i) << 10) + (1023 & n) + 65536) : (t.push(i), r--);
        } else t.push(i);
    }
    return t;
}
let c = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    f = function (e, t, r) {
        let n = 0;
        for (e = r ? o(e / 700) : e >> 1, e += o(e / t); e > 455; n += 36) e = o(e / 35);
        return o(n + (36 * e) / (e + 38));
    },
    d = function (e) {
        let t = [],
            r = e.length,
            n = 0,
            i = 128,
            a = 72,
            l = e.lastIndexOf("-");
        l < 0 && (l = 0);
        for (let r = 0; r < l; ++r) e.charCodeAt(r) >= 128 && s("not-basic"), t.push(e.charCodeAt(r));
        for (let c = l > 0 ? l + 1 : 0; c < r; ) {
            let l = n;
            for (let t = 1, i = 36; ; i += 36) {
                var u;
                c >= r && s("invalid-input");
                let l = (u = e.charCodeAt(c++)) - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : 36;
                (l >= 36 || l > o((0x7fffffff - n) / t)) && s("overflow"), (n += l * t);
                let f = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
                if (l < f) break;
                let d = 36 - f;
                t > o(0x7fffffff / d) && s("overflow"), (t *= d);
            }
            let d = t.length + 1;
            (a = f(n - l, d, 0 == l)),
                o(n / d) > 0x7fffffff - i && s("overflow"),
                (i += o(n / d)),
                (n %= d),
                t.splice(n++, 0, i);
        }
        return String.fromCodePoint(...t);
    },
    p = function (e) {
        let t = [],
            r = (e = u(e)).length,
            n = 128,
            i = 0,
            l = 72;
        for (let r of e) r < 128 && t.push(a(r));
        let d = t.length,
            p = d;
        for (d && t.push("-"); p < r; ) {
            let r = 0x7fffffff;
            for (let t of e) t >= n && t < r && (r = t);
            let u = p + 1;
            for (let h of (r - n > o((0x7fffffff - i) / u) && s("overflow"), (i += (r - n) * u), (n = r), e))
                if ((h < n && ++i > 0x7fffffff && s("overflow"), h == n)) {
                    let e = i;
                    for (let r = 36; ; r += 36) {
                        let n = r <= l ? 1 : r >= l + 26 ? 26 : r - l;
                        if (e < n) break;
                        let i = e - n,
                            s = 36 - n;
                        t.push(a(c(n + (i % s), 0))), (e = o(i / s));
                    }
                    t.push(a(c(e, 0))), (l = f(i, u, p == d)), (i = 0), ++p;
                }
            ++i, ++n;
        }
        return t.join("");
    };
e.exports = {
    version: "2.1.0",
    ucs2: { decode: u, encode: (e) => String.fromCodePoint(...e) },
    decode: d,
    encode: p,
    toASCII: function (e) {
        return l(e, function (e) {
            return r.test(e) ? "xn--" + p(e) : e;
        });
    },
    toUnicode: function (e) {
        return l(e, function (e) {
            return t.test(e) ? d(e.slice(4).toLowerCase()) : e;
        });
    },
};
