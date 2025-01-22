r.d(n, {
    $e: function () {
        return b;
    },
    DY: function () {
        return S;
    },
    Eg: function () {
        return d;
    },
    FO: function () {
        return v;
    },
    J_: function () {
        return f;
    },
    L1: function () {
        return T;
    },
    Od: function () {
        return A;
    },
    VQ: function () {
        return l;
    },
    ZY: function () {
        return R;
    },
    d9: function () {
        return I;
    },
    fv: function () {
        return m;
    },
    gE: function () {
        return C;
    },
    qb: function () {
        return p;
    },
    t2: function () {
        return a;
    },
    wz: function () {
        return y;
    },
    zU: function () {
        return g;
    }
});
var i = r(686942),
    a = function (e, n, r, i, a, o) {
        return void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === o && (o = 0), new Date(Date.UTC(e, n - 1, r, i, a, o));
    },
    o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    s = 86400000,
    l = 9999,
    u = a(1970, 1, 1),
    c = [6, 0, 1, 2, 3, 4, 5],
    d = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    f = function (e) {
        return e instanceof Date;
    },
    p = function (e) {
        return f(e) && !isNaN(e.getTime());
    },
    h = function (e) {
        return 60000 * e.getTimezoneOffset();
    },
    _ = function (e, n) {
        return Math.round((e.getTime() - h(e) - (n.getTime() - h(n))) / s);
    },
    m = function (e) {
        return _(e, u);
    },
    g = function (e) {
        return new Date(u.getTime() + e * s);
    },
    E = function (e) {
        var n = e.getUTCMonth();
        return 1 === n && d(e.getUTCFullYear()) ? 29 : o[n];
    },
    v = function (e) {
        return c[e.getUTCDay()];
    },
    y = function (e, n) {
        var r = a(e, n + 1, 1);
        return [v(r), E(r)];
    },
    b = function (e, n) {
        return (n = n || e), new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
    },
    I = function (e) {
        return new Date(e.getTime());
    },
    T = function (e) {
        for (var n = [], r = 0; r < e.length; r++) n.push(I(e[r]));
        return n;
    },
    S = function (e) {
        e.sort(function (e, n) {
            return e.getTime() - n.getTime();
        });
    },
    A = function (e, n) {
        void 0 === n && (n = !0);
        var r = new Date(e);
        return [(0, i.Sk)(r.getUTCFullYear().toString(), 4, '0'), (0, i.Sk)(r.getUTCMonth() + 1, 2, '0'), (0, i.Sk)(r.getUTCDate(), 2, '0'), 'T', (0, i.Sk)(r.getUTCHours(), 2, '0'), (0, i.Sk)(r.getUTCMinutes(), 2, '0'), (0, i.Sk)(r.getUTCSeconds(), 2, '0'), n ? 'Z' : ''].join('');
    },
    C = function (e) {
        var n = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
        if (!n) throw Error('Invalid UNTIL value: '.concat(e));
        return new Date(Date.UTC(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10), parseInt(n[5], 10) || 0, parseInt(n[6], 10) || 0, parseInt(n[7], 10) || 0));
    },
    N = function (e, n) {
        return e.toLocaleString('sv-SE', { timeZone: n }).replace(' ', 'T') + 'Z';
    },
    R = function (e, n) {
        var r = new Date(N(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            i = new Date(N(e, null != n ? n : 'UTC')).getTime() - r.getTime();
        return new Date(e.getTime() - i);
    };
