var r = n(48657),
    i = n(580983),
    o = n(179122),
    a = n(449285),
    s = n(760725),
    l = n(914331),
    c = n(568033),
    u = n(533610),
    d = n(800054),
    f = n(709369),
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
        if (!(g = d(e))) throw new _(a(e) + ' is not iterable');
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
