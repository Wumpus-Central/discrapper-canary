var e = n(67867),
    o = n(668530),
    i = n(938988),
    u = n(821819),
    s = n(948634),
    c = n(730427),
    f = n(13780),
    a = n(735471),
    p = n(982665),
    v = n(250765),
    l = n(414847),
    y = n(349446).f,
    h = n(804104).forEach,
    x = n(447631),
    d = n(29461),
    g = d.set,
    b = d.getterFor;
t.exports = function (t, r, n) {
    var d,
        m = -1 !== t.indexOf('Map'),
        S = -1 !== t.indexOf('Weak'),
        w = m ? 'set' : 'add',
        O = o[t],
        j = O && O.prototype,
        A = {};
    if (
        x &&
        a(O) &&
        (S ||
            (j.forEach &&
                !u(function () {
                    new O().entries().next();
                })))
    ) {
        var E = (d = r(function (r, n) {
                g(f(r, E), {
                    type: t,
                    collection: new O()
                }),
                    v(n) ||
                        c(n, r[w], {
                            that: r,
                            AS_ENTRIES: m
                        });
            })).prototype,
            P = b(t);
        h(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (t) {
            var r = 'add' === t || 'set' === t;
            t in j &&
                !(S && 'clear' === t) &&
                s(E, t, function (n, e) {
                    var o = P(this).collection;
                    if (!r && S && !p(n)) return 'get' === t && void 0;
                    var i = o[t](0 === n ? 0 : n, e);
                    return r ? this : i;
                });
        }),
            S ||
                y(E, 'size', {
                    configurable: !0,
                    get: function () {
                        return P(this).collection.size;
                    }
                });
    } else (d = n.getConstructor(r, t, m, w)), i.enable();
    return (
        l(d, t, !1, !0),
        (A[t] = d),
        e(
            {
                global: !0,
                forced: !0
            },
            A
        ),
        S || n.setStrong(d, t, m),
        d
    );
};
