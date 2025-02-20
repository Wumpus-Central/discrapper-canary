var r = n(668530),
    i = n(156741),
    o = n(43740),
    a = n(735471),
    s = n(65007).f,
    l = n(902538),
    c = n(974802),
    u = n(476508),
    d = n(948634),
    f = n(141603),
    p = function (e) {
        var t = function (n, r, o) {
            if (this instanceof t) {
                switch (arguments.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(n);
                    case 2:
                        return new e(n, r);
                }
                return new e(n, r, o);
            }
            return i(e, this, arguments);
        };
        return (t.prototype = e.prototype), t;
    };
e.exports = function (e, t) {
    var n,
        i,
        _,
        h,
        m,
        g,
        E,
        v,
        b,
        y = e.target,
        O = e.global,
        S = e.stat,
        I = e.proto,
        T = O ? r : S ? r[y] : (r[y] || {}).prototype,
        N = O ? c : c[y] || d(c, y, {})[y],
        A = N.prototype;
    for (h in t) (i = !(n = l(O ? h : y + (S ? '.' : '#') + h, e.forced)) && T && f(T, h)), (g = N[h]), i && (E = e.dontCallGetSet ? (b = s(T, h)) && b.value : T[h]), (m = i && E ? E : t[h]), (!i || typeof g != typeof m) && ((v = e.bind && i ? u(m, r) : e.wrap && i ? p(m) : I && a(m) ? o(m) : m), (e.sham || (m && m.sham) || (g && g.sham)) && d(v, 'sham', !0), d(N, h, v), I && (f(c, (_ = y + 'Prototype')) || d(c, _, {}), d(c[_], h, m), e.real && A && (n || !A[h]) && d(A, h, m)));
};
