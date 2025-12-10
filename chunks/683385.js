var r = n(48657),
    i = n(580983),
    a = n(179122),
    o = n(449285),
    s = n(760725),
    l = n(914331),
    c = n(568033),
    u = n(533610),
    d = n(800054),
    f = n(709369),
    p = TypeError,
    _ = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    m = _.prototype;
e.exports = function (e, t, n) {
    var h,
        g,
        E,
        b,
        y,
        O,
        v,
        S = n && n.that,
        I = !!(n && n.AS_ENTRIES),
        T = !!(n && n.IS_RECORD),
        C = !!(n && n.IS_ITERATOR),
        A = !!(n && n.INTERRUPTED),
        N = r(t, S),
        P = function (e) {
            return h && f(h, "normal", e), new _(!0, e);
        },
        R = function (e) {
            return I ? (a(e), A ? N(e[0], e[1], P) : N(e[0], e[1])) : A ? N(e, P) : N(e);
        };
    if (T) h = e.iterator;
    else if (C) h = e;
    else {
        if (!(g = d(e))) throw new p(o(e) + " is not iterable");
        if (s(g)) {
            for (E = 0, b = l(e); b > E; E++) if ((y = R(e[E])) && c(m, y)) return y;
            return new _(!1);
        }
        h = u(e, g);
    }
    for (O = T ? e.next : h.next; !(v = i(O, h)).done; ) {
        try {
            y = R(v.value);
        } catch (e) {
            f(h, "throw", e);
        }
        if ("object" == typeof y && y && c(m, y)) return y;
    }
    return new _(!1);
};
