var r = n(221015),
    i = n(446474),
    a = n(101968),
    s = n(406208),
    o = n(151860),
    l = n(503199),
    c = n(524152),
    u = n(327036),
    d = n(331336),
    f = n(350714),
    p = TypeError,
    _ = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    h = _.prototype;
e.exports = function (e, t, n) {
    var m,
        g,
        E,
        b,
        y,
        O,
        A,
        v = n && n.that,
        S = !!(n && n.AS_ENTRIES),
        I = !!(n && n.IS_RECORD),
        T = !!(n && n.IS_ITERATOR),
        C = !!(n && n.INTERRUPTED),
        N = r(t, v),
        R = function (e) {
            return m && f(m, "normal", e), new _(!0, e);
        },
        w = function (e) {
            return S ? (a(e), C ? N(e[0], e[1], R) : N(e[0], e[1])) : C ? N(e, R) : N(e);
        };
    if (I) m = e.iterator;
    else if (T) m = e;
    else {
        if (!(g = d(e))) throw new p(s(e) + " is not iterable");
        if (o(g)) {
            for (E = 0, b = l(e); b > E; E++) if ((y = w(e[E])) && c(h, y)) return y;
            return new _(!1);
        }
        m = u(e, g);
    }
    for (O = I ? e.next : m.next; !(A = i(O, m)).done; ) {
        try {
            y = w(A.value);
        } catch (e) {
            f(m, "throw", e);
        }
        if ("object" == typeof y && y && c(h, y)) return y;
    }
    return new _(!1);
};
