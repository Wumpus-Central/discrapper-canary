var r = n(476508),
    i = n(570596),
    o = n(28886),
    a = n(858698),
    s = n(987100),
    l = n(474883),
    c = n(875604),
    u = n(86930),
    d = n(749915),
    f = n(736849),
    p = TypeError,
    _ = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    h = _.prototype;
e.exports = function (e, t, n) {
    var m,
        g,
        E,
        v,
        b,
        y,
        O,
        S = n && n.that,
        I = !!(n && n.AS_ENTRIES),
        T = !!(n && n.IS_RECORD),
        N = !!(n && n.IS_ITERATOR),
        A = !!(n && n.INTERRUPTED),
        C = r(t, S),
        R = function (e) {
            return m && f(m, 'normal', e), new _(!0, e);
        },
        P = function (e) {
            return I ? (o(e), A ? C(e[0], e[1], R) : C(e[0], e[1])) : A ? C(e, R) : C(e);
        };
    if (T) m = e.iterator;
    else if (N) m = e;
    else {
        if (!(g = d(e))) throw new p(a(e) + ' is not iterable');
        if (s(g)) {
            for (E = 0, v = l(e); v > E; E++) if ((b = P(e[E])) && c(h, b)) return b;
            return new _(!1);
        }
        m = u(e, g);
    }
    for (y = T ? e.next : m.next; !(O = i(y, m)).done; ) {
        try {
            b = P(O.value);
        } catch (e) {
            f(m, 'throw', e);
        }
        if ('object' == typeof b && b && c(h, b)) return b;
    }
    return new _(!1);
};
