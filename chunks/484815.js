var i = n(67867),
    r = n(668530),
    a = n(938988),
    s = n(821819),
    o = n(948634),
    l = n(730427),
    u = n(13780),
    c = n(735471),
    d = n(982665),
    f = n(250765),
    _ = n(414847),
    p = n(349446).f,
    h = n(804104).forEach,
    m = n(447631),
    g = n(29461),
    E = g.set,
    v = g.getterFor;
e.exports = function (e, t, n) {
    var g,
        y = -1 !== e.indexOf('Map'),
        I = -1 !== e.indexOf('Weak'),
        b = y ? 'set' : 'add',
        T = r[e],
        S = T && T.prototype,
        A = {};
    if (
        m &&
        c(T) &&
        (I ||
            (S.forEach &&
                !s(function () {
                    new T().entries().next();
                })))
    ) {
        var N = (g = t(function (t, n) {
                E(u(t, N), {
                    type: e,
                    collection: new T()
                }),
                    f(n) ||
                        l(n, t[b], {
                            that: t,
                            AS_ENTRIES: y
                        });
            })).prototype,
            C = v(e);
        h(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (e) {
            var t = 'add' === e || 'set' === e;
            e in S &&
                !(I && 'clear' === e) &&
                o(N, e, function (n, i) {
                    var r = C(this).collection;
                    if (!t && I && !d(n)) return 'get' === e && void 0;
                    var a = r[e](0 === n ? 0 : n, i);
                    return t ? this : a;
                });
        }),
            I ||
                p(N, 'size', {
                    configurable: !0,
                    get: function () {
                        return C(this).collection.size;
                    }
                });
    } else (g = n.getConstructor(t, e, y, b)), a.enable();
    return (
        _(g, e, !1, !0),
        (A[e] = g),
        i(
            {
                global: !0,
                forced: !0
            },
            A
        ),
        I || n.setStrong(g, e, y),
        g
    );
};
