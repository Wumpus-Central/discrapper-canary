var r = a(154028),
    n = a(77025),
    _ = a(436207),
    o = a(568033),
    i = a(769827),
    c = a(190289),
    s = a(316096),
    E = a(176682),
    l = a(759319),
    u = a(179351),
    I = a(903225),
    R = a(507604),
    d = a(511696);
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
