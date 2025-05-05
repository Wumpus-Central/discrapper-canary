var r = n(127849),
    i = n(35760),
    o = n(621523),
    a = n(896471),
    s = n(992914),
    l = n(840475),
    c = n(358932),
    u = n(635464),
    d = n(287353),
    f = n(920542),
    _ = l.aTypedArray,
    p = l.exportTypedArrayMethod,
    h = r.Uint16Array,
    m = h && i(h.prototype.sort),
    g =
        !!m &&
        !(
            o(function () {
                m(new h(2), null);
            }) &&
            o(function () {
                m(new h(2), {});
            })
        ),
    E =
        !!m &&
        !o(function () {
            if (d) return d < 74;
            if (c) return c < 67;
            if (u) return !0;
            if (f) return f < 602;
            var e,
                t,
                n = new h(516),
                r = Array(516);
            for (e = 0; e < 516; e++) (t = e % 4), (n[e] = 515 - e), (r[e] = e - 2 * t + 3);
            for (
                m(n, function (e, t) {
                    return ((e / 4) | 0) - ((t / 4) | 0);
                }),
                    e = 0;
                e < 516;
                e++
            )
                if (n[e] !== r[e]) return !0;
        }),
    b = function (e) {
        return function (t, n) {
            return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? (1 / t > 0 && 1 / n < 0 ? 1 : -1) : t > n;
        };
    };
p(
    'sort',
    function (e) {
        return (void 0 !== e && a(e), E) ? m(this, e) : s(_(this), b(e));
    },
    !E || g
);
