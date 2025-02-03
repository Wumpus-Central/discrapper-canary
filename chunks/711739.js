let t = 2147483647,
    n = 36,
    i = 1,
    r = 26,
    a = 38,
    s = 700,
    o = 72,
    l = 128,
    u = '-',
    c = /^xn--/,
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
        i = e.length;
    for (; i--; ) n[i] = t(e[i]);
    return n;
}
function v(e, t) {
    let n = e.split('@'),
        i = '';
    return n.length > 1 && ((i = n[0] + '@'), (e = n[1])), i + E((e = e.replace(f, '.')).split('.'), t).join('.');
}
function y(e) {
    let t = [],
        n = 0,
        i = e.length;
    for (; n < i; ) {
        let r = e.charCodeAt(n++);
        if (r >= 55296 && r <= 56319 && n < i) {
            let i = e.charCodeAt(n++);
            (64512 & i) == 56320 ? t.push(((1023 & r) << 10) + (1023 & i) + 65536) : (t.push(r), n--);
        } else t.push(r);
    }
    return t;
}
let I = function (e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : n;
    },
    b = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    T = function (e, t, i) {
        let o = 0;
        for (e = i ? h(e / s) : e >> 1, e += h(e / t); e > (p * r) >> 1; o += n) e = h(e / p);
        return h(o + ((p + 1) * e) / (e + a));
    },
    S = function (e) {
        let a = [],
            s = e.length,
            c = 0,
            d = l,
            f = o,
            _ = e.lastIndexOf(u);
        _ < 0 && (_ = 0);
        for (let t = 0; t < _; ++t) e.charCodeAt(t) >= 128 && g('not-basic'), a.push(e.charCodeAt(t));
        for (let o = _ > 0 ? _ + 1 : 0; o < s; ) {
            let l = c;
            for (let a = 1, l = n; ; l += n) {
                o >= s && g('invalid-input');
                let u = I(e.charCodeAt(o++));
                (u >= n || u > h((t - c) / a)) && g('overflow'), (c += u * a);
                let d = l <= f ? i : l >= f + r ? r : l - f;
                if (u < d) break;
                let _ = n - d;
                a > h(t / _) && g('overflow'), (a *= _);
            }
            let u = a.length + 1;
            (f = T(c - l, u, 0 == l)), h(c / u) > t - d && g('overflow'), (d += h(c / u)), (c %= u), a.splice(c++, 0, d);
        }
        return String.fromCodePoint(...a);
    },
    A = function (e) {
        let a = [],
            s = (e = y(e)).length,
            c = l,
            d = 0,
            f = o;
        for (let t of e) t < 128 && a.push(m(t));
        let _ = a.length,
            p = _;
        for (_ && a.push(u); p < s; ) {
            let s = t;
            for (let t of e) t >= c && t < s && (s = t);
            let o = p + 1;
            for (let l of (s - c > h((t - d) / o) && g('overflow'), (d += (s - c) * o), (c = s), e))
                if ((l < c && ++d > t && g('overflow'), l == c)) {
                    let e = d;
                    for (let t = n; ; t += n) {
                        let s = t <= f ? i : t >= f + r ? r : t - f;
                        if (e < s) break;
                        let o = e - s,
                            l = n - s;
                        a.push(m(b(s + (o % l), 0))), (e = h(o / l));
                    }
                    a.push(m(b(e, 0))), (f = T(d, o, p == _)), (d = 0), ++p;
                }
            ++d, ++c;
        }
        return a.join('');
    },
    N = function (e) {
        return v(e, function (e) {
            return c.test(e) ? S(e.slice(4).toLowerCase()) : e;
        });
    },
    C = function (e) {
        return v(e, function (e) {
            return d.test(e) ? 'xn--' + A(e) : e;
        });
    },
    R = {
        version: '2.1.0',
        ucs2: {
            decode: y,
            encode: (e) => String.fromCodePoint(...e)
        },
        decode: S,
        encode: A,
        toASCII: C,
        toUnicode: N
    };
e.exports = R;
