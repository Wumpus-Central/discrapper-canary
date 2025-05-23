t.d(n, { Z: () => c }), t(388685);
var l = t(255367),
    i = t(73800),
    o = t(120356),
    r = t.n(o),
    a = t(225433),
    s = t(642516);
function c(e) {
    let { hasSetEmoji: n, onClick: t, children: o, className: c, buttonClassName: u, look: d } = e,
        [m, f] = i.useState(!1),
        j = i.useCallback(() => {
            t(), f(!1);
        }, [t, f]);
    return (0, l.jsxs)('div', {
        className: r()(s.container, c),
        onMouseEnter: () => {
            if (n) return void f(!0);
            f(!1);
        },
        onMouseLeave: () => {
            f(!1);
        },
        children: [
            o,
            n && m
                ? (0, l.jsx)(a.Z, {
                      onClick: j,
                      className: r()(s.removeButton, u),
                      look: d
                  })
                : null
        ]
    });
}
