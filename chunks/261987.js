var r = a(545576),
    n = a(740362),
    _ = a(251069),
    o = a(838957),
    i = a(276321),
    c = a(381740),
    s = a(504559),
    E = a(95948),
    l = a(892725),
    u = a(668788),
    I = a(154154),
    R = a(325008),
    d = a(992051);
t.exports = function (t, e, a, A) {
    var f = 'stackTraceLimit',
        p = A ? 2 : 1,
        N = t.split('.'),
        T = N[N.length - 1],
        L = r.apply(null, N);
    if (L) {
        var h = L.prototype;
        if ((!d && n(h, 'cause') && delete h.cause, !a)) return L;
        var O = r('Error'),
            D = e(function (t, e) {
                var a = l(A ? e : t, void 0),
                    r = A ? new L(t) : new L();
                return void 0 !== a && _(r, 'message', a), I(r, D, r.stack, 2), this && o(h, this) && E(r, this, D), arguments.length > p && u(r, arguments[p]), r;
            });
        if (((D.prototype = h), 'Error' !== T ? (i ? i(D, O) : c(D, O, { name: !0 })) : R && f in L && (s(D, L, f), s(D, L, 'prepareStackTrace')), c(D, L), !d))
            try {
                h.name !== T && _(h, 'name', T), (h.constructor = D);
            } catch (t) {}
        return D;
    }
};
