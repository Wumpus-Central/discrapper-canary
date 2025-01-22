let n = 2147483647,
    r = 36,
    i = 1,
    a = 26,
    o = 38,
    s = 700,
    l = 72,
    u = 128,
    c = '-',
    d = /^xn--/,
    f = /[^\0-\x7E]/,
    p = /[\x2E\u3002\uFF0E\uFF61]/g,
    h = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    },
    _ = 35,
    m = Math.floor,
    g = String.fromCharCode;
function E(e) {
    throw RangeError(h[e]);
}
function v(e, n) {
    let r = [],
        i = e.length;
    for (; i--; ) r[i] = n(e[i]);
    return r;
}
function y(e, n) {
    let r = e.split('@'),
        i = '';
    return r.length > 1 && ((i = r[0] + '@'), (e = r[1])), i + v((e = e.replace(p, '.')).split('.'), n).join('.');
}
function b(e) {
    let n = [],
        r = 0,
        i = e.length;
    for (; r < i; ) {
        let a = e.charCodeAt(r++);
        if (a >= 55296 && a <= 56319 && r < i) {
            let i = e.charCodeAt(r++);
            (64512 & i) == 56320 ? n.push(((1023 & a) << 10) + (1023 & i) + 65536) : (n.push(a), r--);
        } else n.push(a);
    }
    return n;
}
let I = function (e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : r;
    },
    T = function (e, n) {
        return e + 22 + 75 * (e < 26) - ((0 != n) << 5);
    },
    S = function (e, n, i) {
        let l = 0;
        for (e = i ? m(e / s) : e >> 1, e += m(e / n); e > (_ * a) >> 1; l += r) e = m(e / _);
        return m(l + ((_ + 1) * e) / (e + o));
    },
    A = function (e) {
        let o = [],
            s = e.length,
            d = 0,
            f = u,
            p = l,
            h = e.lastIndexOf(c);
        h < 0 && (h = 0);
        for (let n = 0; n < h; ++n) e.charCodeAt(n) >= 128 && E('not-basic'), o.push(e.charCodeAt(n));
        for (let l = h > 0 ? h + 1 : 0; l < s; ) {
            let u = d;
            for (let o = 1, u = r; ; u += r) {
                l >= s && E('invalid-input');
                let c = I(e.charCodeAt(l++));
                (c >= r || c > m((n - d) / o)) && E('overflow'), (d += c * o);
                let f = u <= p ? i : u >= p + a ? a : u - p;
                if (c < f) break;
                let h = r - f;
                o > m(n / h) && E('overflow'), (o *= h);
            }
            let c = o.length + 1;
            (p = S(d - u, c, 0 == u)), m(d / c) > n - f && E('overflow'), (f += m(d / c)), (d %= c), o.splice(d++, 0, f);
        }
        return String.fromCodePoint(...o);
    },
    C = function (e) {
        let o = [],
            s = (e = b(e)).length,
            d = u,
            f = 0,
            p = l;
        for (let n of e) n < 128 && o.push(g(n));
        let h = o.length,
            _ = h;
        for (h && o.push(c); _ < s; ) {
            let s = n;
            for (let n of e) n >= d && n < s && (s = n);
            let l = _ + 1;
            for (let u of (s - d > m((n - f) / l) && E('overflow'), (f += (s - d) * l), (d = s), e))
                if ((u < d && ++f > n && E('overflow'), u == d)) {
                    let e = f;
                    for (let n = r; ; n += r) {
                        let s = n <= p ? i : n >= p + a ? a : n - p;
                        if (e < s) break;
                        let l = e - s,
                            u = r - s;
                        o.push(g(T(s + (l % u), 0))), (e = m(l / u));
                    }
                    o.push(g(T(e, 0))), (p = S(f, l, _ == h)), (f = 0), ++_;
                }
            ++f, ++d;
        }
        return o.join('');
    },
    N = function (e) {
        return y(e, function (e) {
            return d.test(e) ? A(e.slice(4).toLowerCase()) : e;
        });
    },
    R = function (e) {
        return y(e, function (e) {
            return f.test(e) ? 'xn--' + C(e) : e;
        });
    },
    O = {
        version: '2.1.0',
        ucs2: {
            decode: b,
            encode: (e) => String.fromCodePoint(...e)
        },
        decode: A,
        encode: C,
        toASCII: R,
        toUnicode: N
    };
e.exports = O;
