n.d(t, {
    $e: () => y,
    DY: () => T,
    Eg: () => c,
    FO: () => E,
    J_: () => d,
    L1: () => b,
    Od: () => S,
    VQ: () => o,
    ZY: () => C,
    d9: () => I,
    fv: () => h,
    gE: () => A,
    qb: () => f,
    t2: () => r,
    wz: () => v,
    zU: () => m
});
var i = n(686942),
    r = function (e, t, n, i, r, a) {
        return void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === a && (a = 0), new Date(Date.UTC(e, t - 1, n, i, r, a));
    },
    a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    s = 86400000,
    o = 9999,
    l = r(1970, 1, 1),
    u = [6, 0, 1, 2, 3, 4, 5],
    c = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    d = function (e) {
        return e instanceof Date;
    },
    f = function (e) {
        return d(e) && !isNaN(e.getTime());
    },
    _ = function (e) {
        return 60000 * e.getTimezoneOffset();
    },
    p = function (e, t) {
        return Math.round((e.getTime() - _(e) - (t.getTime() - _(t))) / s);
    },
    h = function (e) {
        return p(e, l);
    },
    m = function (e) {
        return new Date(l.getTime() + e * s);
    },
    g = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && c(e.getUTCFullYear()) ? 29 : a[t];
    },
    E = function (e) {
        return u[e.getUTCDay()];
    },
    v = function (e, t) {
        var n = r(e, t + 1, 1);
        return [E(n), g(n)];
    },
    y = function (e, t) {
        return (t = t || e), new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    },
    I = function (e) {
        return new Date(e.getTime());
    },
    b = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(I(e[n]));
        return t;
    },
    T = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    S = function (e, t) {
        void 0 === t && (t = !0);
        var n = new Date(e);
        return [(0, i.Sk)(n.getUTCFullYear().toString(), 4, '0'), (0, i.Sk)(n.getUTCMonth() + 1, 2, '0'), (0, i.Sk)(n.getUTCDate(), 2, '0'), 'T', (0, i.Sk)(n.getUTCHours(), 2, '0'), (0, i.Sk)(n.getUTCMinutes(), 2, '0'), (0, i.Sk)(n.getUTCSeconds(), 2, '0'), t ? 'Z' : ''].join('');
    },
    A = function (e) {
        var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
        if (!t) throw Error('Invalid UNTIL value: '.concat(e));
        return new Date(Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10) || 0, parseInt(t[6], 10) || 0, parseInt(t[7], 10) || 0));
    },
    N = function (e, t) {
        return e.toLocaleString('sv-SE', { timeZone: t }).replace(' ', 'T') + 'Z';
    },
    C = function (e, t) {
        var n = new Date(N(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            i = new Date(N(e, null != t ? t : 'UTC')).getTime() - n.getTime();
        return new Date(e.getTime() - i);
    };
