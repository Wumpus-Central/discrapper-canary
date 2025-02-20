var r = n(67867),
    i = n(668530),
    o = n(938988),
    a = n(821819),
    s = n(948634),
    l = n(730427),
    c = n(13780),
    u = n(735471),
    d = n(982665),
    f = n(250765),
    p = n(414847),
    _ = n(349446).f,
    h = n(804104).forEach,
    m = n(447631),
    g = n(29461),
    E = g.set,
    v = g.getterFor;
e.exports = function (e, t, n) {
    var g,
        b = -1 !== e.indexOf('Map'),
        y = -1 !== e.indexOf('Weak'),
        O = b ? 'set' : 'add',
        S = i[e],
        I = S && S.prototype,
        T = {};
    if (
        m &&
        u(S) &&
        (y ||
            (I.forEach &&
                !a(function () {
                    new S().entries().next();
                })))
    ) {
        var N = (g = t(function (t, n) {
                E(c(t, N), {
                    type: e,
                    collection: new S()
                }),
                    f(n) ||
                        l(n, t[O], {
                            that: t,
                            AS_ENTRIES: b
                        });
            })).prototype,
            A = v(e);
        h(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (e) {
            var t = 'add' === e || 'set' === e;
            e in I &&
                !(y && 'clear' === e) &&
                s(N, e, function (n, r) {
                    var i = A(this).collection;
                    if (!t && y && !d(n)) return 'get' === e && void 0;
                    var o = i[e](0 === n ? 0 : n, r);
                    return t ? this : o;
                });
        }),
            y ||
                _(N, 'size', {
                    configurable: !0,
                    get: function () {
                        return A(this).collection.size;
                    }
                });
    } else (g = n.getConstructor(t, e, b, O)), o.enable();
    return (
        p(g, e, !1, !0),
        (T[e] = g),
        r(
            {
                global: !0,
                forced: !0
            },
            T
        ),
        y || n.setStrong(g, e, b),
        g
    );
};
