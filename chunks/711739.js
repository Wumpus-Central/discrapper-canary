let t = 2147483647,
    n = 36,
    r = 1,
    i = 26,
    a = 38,
    o = 700,
    s = 72,
    l = 128,
    c = '-',
    u = /^xn--/,
    d = /[^\0-\x7E]/,
    _ = /[\x2E\u3002\uFF0E\uFF61]/g,
    f = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
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
function b(e, t) {
    let n = e.split('@'),
        r = '';
    return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + E((e = e.replace(_, '.')).split('.'), t).join('.');
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
    v = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    I = function (e, t, r) {
        let s = 0;
        for (e = r ? h(e / o) : e >> 1, e += h(e / t); e > (p * i) >> 1; s += n) e = h(e / p);
        return h(s + ((p + 1) * e) / (e + a));
    },
    T = function (e) {
        let a = [],
            o = e.length,
            u = 0,
            d = l,
            _ = s,
            f = e.lastIndexOf(c);
        f < 0 && (f = 0);
        for (let t = 0; t < f; ++t) e.charCodeAt(t) >= 128 && g('not-basic'), a.push(e.charCodeAt(t));
        for (let s = f > 0 ? f + 1 : 0; s < o; ) {
            let l = u;
            for (let a = 1, l = n; ; l += n) {
                s >= o && g('invalid-input');
                let c = O(e.charCodeAt(s++));
                (c >= n || c > h((t - u) / a)) && g('overflow'), (u += c * a);
                let d = l <= _ ? r : l >= _ + i ? i : l - _;
                if (c < d) break;
                let f = n - d;
                a > h(t / f) && g('overflow'), (a *= f);
            }
            let c = a.length + 1;
            (_ = I(u - l, c, 0 == l)), h(u / c) > t - d && g('overflow'), (d += h(u / c)), (u %= c), a.splice(u++, 0, d);
        }
        return String.fromCodePoint(...a);
    },
    S = function (e) {
        let a = [],
            o = (e = y(e)).length,
            u = l,
            d = 0,
            _ = s;
        for (let t of e) t < 128 && a.push(m(t));
        let f = a.length,
            p = f;
        for (f && a.push(c); p < o; ) {
            let o = t;
            for (let t of e) t >= u && t < o && (o = t);
            let s = p + 1;
            for (let l of (o - u > h((t - d) / s) && g('overflow'), (d += (o - u) * s), (u = o), e))
                if ((l < u && ++d > t && g('overflow'), l == u)) {
                    let e = d;
                    for (let t = n; ; t += n) {
                        let o = t <= _ ? r : t >= _ + i ? i : t - _;
                        if (e < o) break;
                        let s = e - o,
                            l = n - o;
                        a.push(m(v(o + (s % l), 0))), (e = h(s / l));
                    }
                    a.push(m(v(e, 0))), (_ = I(d, s, p == f)), (d = 0), ++p;
                }
            ++d, ++u;
        }
        return a.join('');
    },
    A = function (e) {
        return b(e, function (e) {
            return u.test(e) ? T(e.slice(4).toLowerCase()) : e;
        });
    },
    N = function (e) {
        return b(e, function (e) {
            return d.test(e) ? 'xn--' + S(e) : e;
        });
    };
e.exports = {
    version: '2.1.0',
    ucs2: {
        decode: y,
        encode: (e) => String.fromCodePoint(...e)
    },
    decode: T,
    encode: S,
    toASCII: N,
    toUnicode: A
};
