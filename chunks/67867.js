var i = n(668530),
    r = n(156741),
    a = n(43740),
    s = n(735471),
    o = n(65007).f,
    l = n(902538),
    u = n(974802),
    c = n(476508),
    d = n(948634),
    f = n(141603),
    _ = function (e) {
        var t = function (n, i, a) {
            if (this instanceof t) {
                switch (arguments.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(n);
                    case 2:
                        return new e(n, i);
                }
                return new e(n, i, a);
            }
            return r(e, this, arguments);
        };
        return (t.prototype = e.prototype), t;
    };
e.exports = function (e, t) {
    var n,
        r,
        p,
        h,
        m,
        g,
        E,
        v,
        y,
        I = e.target,
        b = e.global,
        T = e.stat,
        S = e.proto,
        A = b ? i : T ? i[I] : (i[I] || {}).prototype,
        N = b ? u : u[I] || d(u, I, {})[I],
        C = N.prototype;
    for (h in t) (r = !(n = l(b ? h : I + (T ? '.' : '#') + h, e.forced)) && A && f(A, h)), (g = N[h]), r && (E = e.dontCallGetSet ? (y = o(A, h)) && y.value : A[h]), (m = r && E ? E : t[h]), (!r || typeof g != typeof m) && ((v = e.bind && r ? c(m, i) : e.wrap && r ? _(m) : S && s(m) ? a(m) : m), (e.sham || (m && m.sham) || (g && g.sham)) && d(v, 'sham', !0), d(N, h, v), S && (f(u, (p = I + 'Prototype')) || d(u, p, {}), d(u[p], h, m), e.real && C && (n || !C[h]) && d(C, h, m)));
};
