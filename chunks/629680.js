var e = r(127849),
    o = r(35760),
    i = r(621523),
    u = r(896471),
    c = r(992914),
    a = r(840475),
    f = r(358932),
    s = r(635464),
    l = r(287353),
    p = r(920542),
    d = a.aTypedArray,
    _ = a.exportTypedArrayMethod,
    h = e.Uint16Array,
    y = h && o(h.prototype.sort),
    b =
        !!y &&
        !(
            i(function () {
                y(new h(2), null);
            }) &&
            i(function () {
                y(new h(2), {});
            })
        ),
    g =
        !!y &&
        !i(function () {
            if (l) return l < 74;
            if (f) return f < 67;
            if (s) return !0;
            if (p) return p < 602;
            var t,
                n,
                r = new h(516),
                e = Array(516);
            for (t = 0; t < 516; t++) (n = t % 4), (r[t] = 515 - t), (e[t] = t - 2 * n + 3);
            for (
                y(r, function (t, n) {
                    return ((t / 4) | 0) - ((n / 4) | 0);
                }),
                    t = 0;
                t < 516;
                t++
            )
                if (r[t] !== e[t]) return !0;
        });
_(
    'sort',
    function (t) {
        return (void 0 !== t && u(t), g)
            ? y(this, t)
            : c(d(this), function (n, r) {
                  return void 0 !== t ? +t(n, r) || 0 : r != r ? -1 : n != n ? 1 : 0 === n && 0 === r ? (1 / n > 0 && 1 / r < 0 ? 1 : -1) : n > r;
              });
    },
    !g || b
);
