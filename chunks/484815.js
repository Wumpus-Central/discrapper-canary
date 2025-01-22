var i = r(67867),
    a = r(668530),
    o = r(938988),
    s = r(821819),
    l = r(948634),
    u = r(730427),
    c = r(13780),
    d = r(735471),
    f = r(982665),
    p = r(250765),
    h = r(414847),
    _ = r(349446).f,
    m = r(804104).forEach,
    g = r(447631),
    E = r(29461),
    v = E.set,
    y = E.getterFor;
e.exports = function (e, n, r) {
    var E,
        b = -1 !== e.indexOf('Map'),
        I = -1 !== e.indexOf('Weak'),
        T = b ? 'set' : 'add',
        S = a[e],
        A = S && S.prototype,
        C = {};
    if (
        g &&
        d(S) &&
        (I ||
            (A.forEach &&
                !s(function () {
                    new S().entries().next();
                })))
    ) {
        var N = (E = n(function (n, r) {
                v(c(n, N), {
                    type: e,
                    collection: new S()
                }),
                    !p(r) &&
                        u(r, n[T], {
                            that: n,
                            AS_ENTRIES: b
                        });
            })).prototype,
            R = y(e);
        m(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (e) {
            var n = 'add' === e || 'set' === e;
            e in A &&
                !(I && 'clear' === e) &&
                l(N, e, function (r, i) {
                    var a = R(this).collection;
                    if (!n && I && !f(r)) return 'get' === e && void 0;
                    var o = a[e](0 === r ? 0 : r, i);
                    return n ? this : o;
                });
        }),
            I ||
                _(N, 'size', {
                    configurable: !0,
                    get: function () {
                        return R(this).collection.size;
                    }
                });
    } else (E = r.getConstructor(n, e, b, T)), o.enable();
    return (
        h(E, e, !1, !0),
        (C[e] = E),
        i(
            {
                global: !0,
                forced: !0
            },
            C
        ),
        !I && r.setStrong(E, e, b),
        E
    );
};
