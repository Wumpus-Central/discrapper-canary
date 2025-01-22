var i = r(566885),
    a = r(926515),
    o = r(24033),
    s = r(938507),
    l = r(908355),
    u = r(49693),
    c = r(838957),
    d = r(981971),
    f = r(11697),
    p = r(776245),
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
        L = function (e) {
            return A ? (o(e), R ? O(e[0], e[1], D) : O(e[0], e[1])) : R ? O(e, D) : O(e);
        };
    if (C) g = e.iterator;
    else if (N) g = e;
    else {
        if (!(E = f(e))) throw h(s(e) + ' is not iterable');
        if (l(E)) {
            for (v = 0, y = u(e); y > v; v++) if ((b = L(e[v])) && c(m, b)) return b;
            return new _(!1);
        }
        g = d(e, E);
    }
    for (I = C ? e.next : g.next; !(T = a(I, g)).done; ) {
        try {
            b = L(T.value);
        } catch (e) {
            p(g, 'throw', e);
        }
        if ('object' == typeof b && b && c(m, b)) return b;
    }
    return new _(!1);
};
