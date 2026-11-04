let r = [
        { offset: 0, span: 0.66, ease: 1.6 },
        { offset: 0.08, span: 0.78, ease: 1.6 },
        { offset: 0.08, span: 0.9, ease: 7.5 },
        { offset: 0.08, span: 0.92, ease: 9 },
    ],
    a = [0.5, 0.5, 0.45, 0.9];
function l(e, t, n) {
    let r = 1 - e;
    return 3 * r * r * e * t + 3 * r * e * e * n + e * e * e;
}
function o(e) {
    if (e <= 0) return 0;
    if (e >= 1) return 1;
    let [t, n, r, o] = a,
        u = 0,
        i = 1;
    for (let n = 0; n < 20; n++) {
        let n = (u + i) / 2;
        l(n, t, r) < e ? (u = n) : (i = n);
    }
    return l((u + i) / 2, n, o);
}
function u(e, t) {
    if (t <= 0) return 0;
    let n = 0,
        r = 1;
    for (let a = 0; a < 24; a++) {
        let a = (n + r) / 2;
        f(e, o(a)) < t ? (n = a) : (r = a);
    }
    return (n + r) / 2;
}
let i = "123456",
    s = "789ABC";
function c(e, t) {
    let n = e.charCodeAt(0);
    return n >= 65 && n <= 90
        ? String.fromCharCode(65 + ((n - 65 + t) % 26))
        : n >= 97 && n <= 122
          ? String.fromCharCode(97 + ((n - 97 + t) % 26))
          : n >= 48 && n <= 57
            ? String.fromCharCode(48 + ((n - 48 + t) % 10))
            : e;
}
function f(e, t) {
    let { offset: n, span: a, ease: l } = r[e],
        o = (t - n) / a;
    return o <= 0 ? 0 : o >= 1 ? 1 : o ** l;
}
n.d(
    t,
    {},
    {
        GL: function (e, t, n) {
            let r = f(1, t) * n,
                a = f(2, t) * n,
                l = e + 0.5;
            return l >= r || l < a
                ? -1
                : Math.max(0, Math.min(Math.floor((Math.min(l - a, r - l) / 4) * i.length), i.length));
        },
        Hz: function (e, t, n, r) {
            switch (r) {
                case 0:
                    return e[n] ?? "";
                case 1:
                case 2:
                    return c(e[n] ?? "", 6);
                case 3:
                    return c(t[n] ?? "", 6);
                default:
                    return t[n] ?? "";
            }
        },
        M8: function (e) {
            let t = f(1, e),
                n = t - f(2, e);
            if (n <= 0) return 0;
            let r = Math.min(1, n / (t < 1 ? 0.15 : 0.5));
            return r * r * (3 - 2 * r);
        },
        T: function (e) {
            return u(2, e);
        },
        Xu: function (e, t, n) {
            let a = 0;
            for (let l = 0; l < r.length; l++) f(l, t) * n > e + 0.5 && (a = l + 1);
            return a;
        },
        _R: function (e) {
            return u(1, e);
        },
        k6: function (e, t) {
            let n = Array(e);
            for (let r = 0; r < e; r++) n[r] = s.charAt((t() * s.length) | 0);
            return n;
        },
        py: function (e, t) {
            return { start: Math.max(0, Math.floor(f(r.length - 1, e) * t)), end: Math.min(t, Math.ceil(f(0, e) * t)) };
        },
        qR: function (e) {
            return e >= 3;
        },
        xf: function (e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return 0 === e || 0 === t ? Math.max(1, n) : Math.max(1, Math.ceil((e + r) / t));
        },
        xm: o,
    },
);
