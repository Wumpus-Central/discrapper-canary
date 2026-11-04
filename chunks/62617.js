var i = n(503698),
    r = n.n(i),
    a = n(457515);
n.d(
    t,
    {},
    {
        H: function (e) {
            let { width: t, height: n, intrinsicWidth: i, intrinsicHeight: r, style: a } = e;
            return null == t && null == n
                ? { width: i, height: r, ...a }
                : null != t && null != n
                  ? { width: t, height: n, ...a }
                  : { width: t ?? "auto", height: n ?? "auto", aspectRatio: `${i} / ${r}`, ...a };
        },
        Z: function (e) {
            return r()(a.l, e);
        },
    },
);
