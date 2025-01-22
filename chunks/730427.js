var i = r(476508),
    a = r(570596),
    o = r(28886),
    s = r(858698),
    l = r(987100),
    u = r(474883),
    c = r(875604),
    d = r(86930),
    f = r(749915),
    p = r(736849),
    h = TypeError,
    _ = function (e, n) {
        (this.stopped = e), (this.result = n);
    },
    m = _.prototype;
e.exports = function (e, n, r) {
    var g,
        E,
        v,
        y,
        b,
        I,
        T,
        S = r && r.that,
        A = !!(r && r.AS_ENTRIES),
        C = !!(r && r.IS_RECORD),
        N = !!(r && r.IS_ITERATOR),
        R = !!(r && r.INTERRUPTED),
        O = i(n, S),
        D = function (e) {
            return g && p(g, 'normal', e), new _(!0, e);
        },
        x = function (e) {
            return A ? (o(e), R ? O(e[0], e[1], D) : O(e[0], e[1])) : R ? O(e, D) : O(e);
        };
    if (C) g = e.iterator;
    else if (N) g = e;
    else {
        if (!(E = f(e))) throw new h(s(e) + ' is not iterable');
        if (l(E)) {
            for (v = 0, y = u(e); y > v; v++) if ((b = x(e[v])) && c(m, b)) return b;
            return new _(!1);
        }
        g = d(e, E);
    }
    for (I = C ? e.next : g.next; !(T = a(I, g)).done; ) {
        try {
            b = x(T.value);
        } catch (e) {
            p(g, 'throw', e);
        }
        if ('object' == typeof b && b && c(m, b)) return b;
    }
    return new _(!1);
};
