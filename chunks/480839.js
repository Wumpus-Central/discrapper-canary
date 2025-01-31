var i = n(161581),
    r = n(173850),
    a = n(936940),
    s = n(526988),
    o = n(976418),
    l = n(192291),
    u = n(679622),
    c = n(310731),
    d = n(106295),
    f = n(361270),
    _ = l.aTypedArray,
    p = l.exportTypedArrayMethod,
    h = i.Uint16Array,
    m = h && r(h.prototype.sort),
    g =
        !!m &&
        !(
            a(function () {
                m(new h(2), null);
            }) &&
            a(function () {
                m(new h(2), {});
            })
        ),
    E =
        !!m &&
        !a(function () {
            if (d) return d < 74;
            if (u) return u < 67;
            if (c) return !0;
            if (f) return f < 602;
            var e,
                t,
                n = new h(516),
                i = Array(516);
            for (e = 0; e < 516; e++) (t = e % 4), (n[e] = 515 - e), (i[e] = e - 2 * t + 3);
            for (
                m(n, function (e, t) {
                    return ((e / 4) | 0) - ((t / 4) | 0);
                }),
                    e = 0;
                e < 516;
                e++
            )
                if (n[e] !== i[e]) return !0;
        }),
    v = function (e) {
        return function (t, n) {
            return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? (1 / t > 0 && 1 / n < 0 ? 1 : -1) : t > n;
        };
    };
p(
    'sort',
    function (e) {
        return (void 0 !== e && s(e), E) ? m(this, e) : o(_(this), v(e));
    },
    !E || g
);
