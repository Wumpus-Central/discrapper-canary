var e = n(424353),
    o = n(498996),
    i = n(661155),
    u = n(971428),
    s = n(378105).f,
    c = n(417791),
    f = n(981994),
    a = n(324474),
    p = n(285007),
    l = n(185698);
n(723217);
var v = function (t) {
    var r = function (n, e, i) {
        if (this instanceof r) {
            switch (arguments.length) {
                case 0:
                    return new t();
                case 1:
                    return new t(n);
                case 2:
                    return new t(n, e);
            }
            return new t(n, e, i);
        }
        return o(t, this, arguments);
    };
    return (r.prototype = t.prototype), r;
};
t.exports = function (t, r) {
    var n,
        o,
        y,
        h,
        x,
        d,
        g,
        b,
        m,
        S = t.target,
        w = t.global,
        O = t.stat,
        j = t.proto,
        A = w ? e : O ? e[S] : e[S] && e[S].prototype,
        E = w ? f : f[S] || p(f, S, {})[S],
        T = E.prototype;
    for (h in r) (o = !(n = c(w ? h : S + (O ? '.' : '#') + h, t.forced)) && A && l(A, h)), (d = E[h]), o && (g = t.dontCallGetSet ? (m = s(A, h)) && m.value : A[h]), (x = o && g ? g : r[h]), (n || j || typeof d != typeof x) && ((b = t.bind && o ? a(x, e) : t.wrap && o ? v(x) : j && u(x) ? i(x) : x), (t.sham || (x && x.sham) || (d && d.sham)) && p(b, 'sham', !0), p(E, h, b), j && (l(f, (y = S + 'Prototype')) || p(f, y, {}), p(f[y], h, x), t.real && T && (n || !T[h]) && p(T, h, x)));
};
