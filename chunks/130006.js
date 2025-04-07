var n = e(98405),
    o = e(580983),
    i = e(511696),
    a = e(938373),
    s = e(880181),
    u = e(280481),
    c = e(961050),
    f = e(769827),
    l = e(25124),
    p = e(436207),
    v = e(556585),
    h = e(751736),
    d = e(933121),
    y = e(112493),
    g = a.PROPER,
    L = a.CONFIGURABLE,
    m = y.IteratorPrototype,
    x = y.BUGGY_SAFARI_ITERATORS,
    S = h('iterator'),
    b = 'keys',
    k = 'values',
    M = 'entries',
    T = function () {
        return this;
    };
t.exports = function (t, r, e, a, h, y, A) {
    u(e, r, a);
    var O,
        w,
        C,
        I = function (t) {
            if (t === h && E) return E;
            if (!x && t && t in G) return G[t];
            switch (t) {
                case b:
                case k:
                case M:
                    return function () {
                        return new e(this, t);
                    };
            }
            return function () {
                return new e(this);
            };
        },
        P = r + ' Iterator',
        R = !1,
        G = t.prototype,
        j = G[S] || G['@@iterator'] || (h && G[h]),
        E = (!x && j) || I(h),
        D = ('Array' === r && G.entries) || j;
    if (
        (D && (O = c(D.call(new t()))) !== Object.prototype && O.next && (!i && c(O) !== m && (f ? f(O, m) : s(O[S]) || v(O, S, T)), l(O, P, !0, !0), i && (d[P] = T)),
        g &&
            h === k &&
            j &&
            j.name !== k &&
            (!i && L
                ? p(G, 'name', k)
                : ((R = !0),
                  (E = function () {
                      return o(j, this);
                  }))),
        h)
    )
        if (
            ((w = {
                values: I(k),
                keys: y ? E : I(b),
                entries: I(M)
            }),
            A)
        )
            for (C in w) (!x && !R && C in G) || v(G, C, w[C]);
        else
            n(
                {
                    target: r,
                    proto: !0,
                    forced: x || R
                },
                w
            );
    return (!i || A) && G[S] !== E && v(G, S, E, { name: h }), (d[r] = E), w;
};
