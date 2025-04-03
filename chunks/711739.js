let t = 2147483647,
    n = 36,
    r = 1,
    i = 26,
    o = 38,
    a = 700,
    s = 72,
    l = 128,
    c = '-',
    u = /^xn--/,
    d = /[^\0-\x7E]/,
    f = /[\x2E\u3002\uFF0E\uFF61]/g,
    _ = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    },
    p = 35,
    h = Math.floor,
    m = String.fromCharCode;
function g(e) {
    throw RangeError(_[e]);
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
    return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + E((e = e.replace(f, '.')).split('.'), t).join('.');
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
let v = function (e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : n;
    },
    O = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    I = function (e, t, r) {
        let s = 0;
        for (e = r ? h(e / a) : e >> 1, e += h(e / t); e > (p * i) >> 1; s += n) e = h(e / p);
        return h(s + ((p + 1) * e) / (e + o));
    },
    S = function (e) {
        let o = [],
            a = e.length,
            u = 0,
            d = l,
            f = s,
            _ = e.lastIndexOf(c);
        _ < 0 && (_ = 0);
        for (let t = 0; t < _; ++t) e.charCodeAt(t) >= 128 && g('not-basic'), o.push(e.charCodeAt(t));
        for (let s = _ > 0 ? _ + 1 : 0; s < a; ) {
            let l = u;
            for (let o = 1, l = n; ; l += n) {
                s >= a && g('invalid-input');
                let c = v(e.charCodeAt(s++));
                (c >= n || c > h((t - u) / o)) && g('overflow'), (u += c * o);
                let d = l <= f ? r : l >= f + i ? i : l - f;
                if (c < d) break;
                let _ = n - d;
                o > h(t / _) && g('overflow'), (o *= _);
            }
            let c = o.length + 1;
            (f = I(u - l, c, 0 == l)), h(u / c) > t - d && g('overflow'), (d += h(u / c)), (u %= c), o.splice(u++, 0, d);
        }
        return String.fromCodePoint(...o);
    },
    T = function (e) {
        let o = [],
            a = (e = y(e)).length,
            u = l,
            d = 0,
            f = s;
        for (let t of e) t < 128 && o.push(m(t));
        let _ = o.length,
            p = _;
        for (_ && o.push(c); p < a; ) {
            let a = t;
            for (let t of e) t >= u && t < a && (a = t);
            let s = p + 1;
            for (let l of (a - u > h((t - d) / s) && g('overflow'), (d += (a - u) * s), (u = a), e))
                if ((l < u && ++d > t && g('overflow'), l == u)) {
                    let e = d;
                    for (let t = n; ; t += n) {
                        let a = t <= f ? r : t >= f + i ? i : t - f;
                        if (e < a) break;
                        let s = e - a,
                            l = n - a;
                        o.push(m(O(a + (s % l), 0))), (e = h(s / l));
                    }
                    o.push(m(O(e, 0))), (f = I(d, s, p == _)), (d = 0), ++p;
                }
            ++d, ++u;
        }
        return o.join('');
    },
    N = function (e) {
        return b(e, function (e) {
            return u.test(e) ? S(e.slice(4).toLowerCase()) : e;
        });
    },
    A = function (e) {
        return b(e, function (e) {
            return d.test(e) ? 'xn--' + T(e) : e;
        });
    };
e.exports = {
    version: '2.1.0',
    ucs2: {
        decode: y,
        encode: (e) => String.fromCodePoint(...e)
    },
    decode: S,
    encode: T,
    toASCII: A,
    toUnicode: N
};
