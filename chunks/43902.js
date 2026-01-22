var r = n(230606),
    i = n(210140),
    a = n(706938),
    s = n(524152),
    o = n(458680),
    l = n(517771),
    c = n(878765),
    u = n(486724),
    d = n(862784),
    f = n(573467),
    p = n(770652),
    _ = n(257943),
    h = n(105712);
e.exports = function (e, t, n, m) {
    var g = "stackTraceLimit",
        E = m ? 2 : 1,
        b = e.split("."),
        y = b[b.length - 1],
        O = r.apply(null, b);
    if (O) {
        var A = O.prototype;
        if ((!h && i(A, "cause") && delete A.cause, !n)) return O;
        var v = r("Error"),
            S = t(function (e, t) {
                var n = d(m ? t : e, void 0),
                    r = m ? new O(e) : new O();
                return (
                    void 0 !== n && a(r, "message", n),
                    p(r, S, r.stack, 2),
                    this && s(A, this) && u(r, this, S),
                    arguments.length > E && f(r, arguments[E]),
                    r
                );
            });
        if (
            ((S.prototype = A),
            "Error" !== y
                ? o
                    ? o(S, v)
                    : l(S, v, { name: !0 })
                : _ && g in O && (c(S, O, g), c(S, O, "prepareStackTrace")),
            l(S, O),
            !h)
        )
            try {
                A.name !== y && a(A, "name", y), (A.constructor = S);
            } catch (e) {}
        return S;
    }
};
