var r = n(566885),
    i = n(926515),
    o = n(24033),
    a = n(938507),
    s = n(908355),
    l = n(49693),
    c = n(838957),
    u = n(981971),
    d = n(11697),
    f = n(776245),
    _ = TypeError,
    p = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    h = p.prototype;
e.exports = function (e, t, n) {
    var m,
        g,
        E,
        b,
        y,
        v,
        O,
        I = n && n.that,
        S = !!(n && n.AS_ENTRIES),
        T = !!(n && n.IS_RECORD),
        N = !!(n && n.IS_ITERATOR),
        A = !!(n && n.INTERRUPTED),
        C = r(t, I),
        R = function (e) {
            return m && f(m, 'normal', e), new p(!0, e);
        },
        P = function (e) {
            return S ? (o(e), A ? C(e[0], e[1], R) : C(e[0], e[1])) : A ? C(e, R) : C(e);
        };
    if (T) m = e.iterator;
    else if (N) m = e;
    else {
        if (!(g = d(e))) throw _(a(e) + ' is not iterable');
        if (s(g)) {
            for (E = 0, b = l(e); b > E; E++) if ((y = P(e[E])) && c(h, y)) return y;
            return new p(!1);
        }
        m = u(e, g);
    }
    for (v = T ? e.next : m.next; !(O = i(v, m)).done; ) {
        try {
            y = P(O.value);
        } catch (e) {
            f(m, 'throw', e);
        }
        if ('object' == typeof y && y && c(h, y)) return y;
    }
    return new p(!1);
};
