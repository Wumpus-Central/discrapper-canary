n.d(t, {
    R: () => d,
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(571356),
    u = n(539289);

function c(e) {
    let { option: t, selected: n, onClick: i, disabled: c = !1 } = e,
        d = r.useCallback((e) => i(t), [i, t]);
    return (0, l.jsx)(a.DUT, {
        className: s()(u.AS, {
            [u.z2]: n,
            [u.r9]: c,
        }),
        "aria-disabled": c,
        onClick: c ? void 0 : d,
        onMouseEnter: t.onMouseEnter,
        onMouseLeave: t.onMouseLeave,
        children: (0, l.jsxs)(o.E, {
            className: u.JU,
            variant: "text-sm/medium",
            color: "none",
            children: [
                null != t.icon
                    ? (0, l.jsx)("span", {
                          className: u.Kk,
                          children: t.icon,
                      })
                    : null,
                t.name,
            ],
        }),
    });
}

function d(e) {
    let { options: t, value: n, onChange: i, className: a, disabled: o = !1 } = e,
        d = r.useMemo(() => t.findIndex((e) => e.value === n), [t, n]),
        p = r.useCallback(
            (e) => {
                var t;
                let r = n === e.value;
                return (0, l.jsx)(
                    c,
                    {
                        selected: r,
                        option: e,
                        onClick: i,
                        disabled: o,
                    },
                    null != (t = e.key) ? t : String(e.value),
                );
            },
            [n, i, o],
        );
    return (0, l.jsx)("div", {
        className: s()(u.kL, a, {
            [u.ii]: o,
            [u.zv]: 0 === d,
            [u.Y4]: 1 === d,
        }),
        children: t.map(p),
    });
}
