n.d(t, {
    $e: () => y,
    DY: () => I,
    Eg: () => u,
    FO: () => E,
    J_: () => d,
    L1: () => O,
    Od: () => S,
    VQ: () => s,
    ZY: () => A,
    d9: () => v,
    fv: () => h,
    gE: () => T,
    qb: () => f,
    t2: () => i,
    wz: () => b,
    zU: () => m
});
var r = n(686942),
    i = function (e, t, n, r, i, o) {
        return void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === o && (o = 0), new Date(Date.UTC(e, t - 1, n, r, i, o));
    },
    o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    a = 86400000,
    s = 9999,
    l = i(1970, 1, 1),
    c = [6, 0, 1, 2, 3, 4, 5],
    u = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    d = function (e) {
        return e instanceof Date;
    },
    f = function (e) {
        return d(e) && !isNaN(e.getTime());
    },
    _ = function (e) {
        return 60 * e.getTimezoneOffset() * 1000;
    },
    p = function (e, t) {
        return Math.round((e.getTime() - _(e) - (t.getTime() - _(t))) / a);
    },
    h = function (e) {
        return p(e, l);
    },
    m = function (e) {
        return new Date(l.getTime() + e * a);
    },
    g = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && u(e.getUTCFullYear()) ? 29 : o[t];
    },
    E = function (e) {
        return c[e.getUTCDay()];
    },
    b = function (e, t) {
        var n = i(e, t + 1, 1);
        return [E(n), g(n)];
    },
    y = function (e, t) {
        return (t = t || e), new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    },
    v = function (e) {
        return new Date(e.getTime());
    },
    O = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(v(e[n]));
        return t;
    },
    I = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    S = function (e, t) {
        void 0 === t && (t = !0);
        var n = new Date(e);
        return [(0, r.Sk)(n.getUTCFullYear().toString(), 4, '0'), (0, r.Sk)(n.getUTCMonth() + 1, 2, '0'), (0, r.Sk)(n.getUTCDate(), 2, '0'), 'T', (0, r.Sk)(n.getUTCHours(), 2, '0'), (0, r.Sk)(n.getUTCMinutes(), 2, '0'), (0, r.Sk)(n.getUTCSeconds(), 2, '0'), t ? 'Z' : ''].join('');
    },
    T = function (e) {
        var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
        if (!t) throw Error('Invalid UNTIL value: '.concat(e));
        return new Date(Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10) || 0, parseInt(t[6], 10) || 0, parseInt(t[7], 10) || 0));
    },
    N = function (e, t) {
        return e.toLocaleString('sv-SE', { timeZone: t }).replace(' ', 'T') + 'Z';
    },
    A = function (e, t) {
        var n = new Date(N(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            r = new Date(N(e, null != t ? t : 'UTC')).getTime() - n.getTime();
        return new Date(e.getTime() - r);
    };
