var r = n(860511),
    i = n(517737),
    a = n(503628),
    s = n(514575),
    o = n(953937),
    l = n(739305),
    c = n(830368),
    u = n(701160),
    d = n(123166),
    f = n(450634),
    p = l.aTypedArray,
    _ = l.exportTypedArrayMethod,
    h = r.Uint16Array,
    m = h && i(h.prototype.sort),
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
            return void 0 !== e
                ? +e(t, n) || 0
                : n != n
                  ? -1
                  : t != t
                    ? 1
                    : 0 === t && 0 === n
                      ? 1 / t > 0 && 1 / n < 0
                          ? 1
                          : -1
                      : t > n;
        };
    };
_(
    "sort",
    function (e) {
        return (void 0 !== e && s(e), E) ? m(this, e) : o(p(this), b(e));
    },
    !E || g,
);
