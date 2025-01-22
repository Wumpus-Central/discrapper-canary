var i = r(668530),
    a = r(156741),
    o = r(43740),
    s = r(735471),
    l = r(65007).f,
    u = r(902538),
    c = r(974802),
    d = r(476508),
    f = r(948634),
    p = r(141603),
    h = function (e) {
        var n = function (r, i, o) {
            if (this instanceof n) {
                switch (arguments.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(r);
                    case 2:
                        return new e(r, i);
                }
                return new e(r, i, o);
            }
            return a(e, this, arguments);
        };
        return (n.prototype = e.prototype), n;
    };
e.exports = function (e, n) {
    var r,
        a,
        _,
        m,
        g,
        E,
        v,
        y,
        b,
        I = e.target,
        T = e.global,
        S = e.stat,
        A = e.proto,
        C = T ? i : S ? i[I] : (i[I] || {}).prototype,
        N = T ? c : c[I] || f(c, I, {})[I],
        R = N.prototype;
    for (m in n) (a = !(r = u(T ? m : I + (S ? '.' : '#') + m, e.forced)) && C && p(C, m)), (E = N[m]), a && (v = e.dontCallGetSet ? (b = l(C, m)) && b.value : C[m]), (g = a && v ? v : n[m]), (!a || typeof E != typeof g) && ((y = e.bind && a ? d(g, i) : e.wrap && a ? h(g) : A && s(g) ? o(g) : g), (e.sham || (g && g.sham) || (E && E.sham)) && f(y, 'sham', !0), f(N, m, y), A && (!p(c, (_ = I + 'Prototype')) && f(c, _, {}), f(c[_], m, g), e.real && R && (r || !R[m]) && f(R, m, g)));
};
