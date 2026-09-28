t.d(e, { l: () => p });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(408278),
    c = t(834040),
    o = t(95477),
    d = t(307301),
    h = t(375708),
    u = t(241321);
function m(a) {
    return "" === a || "-" === a;
}
function p(a) {
    let { value: e, onChange: t, className: r, minValue: p, maxValue: x } = a,
        [E, C] = n.useState(e),
        A = m(E) || (null != p && E <= p),
        g = m(E) || (null != x && E >= x);
    function v(a) {
        (t(m(a) ? (p ?? 0) : a), C(a));
    }
    return (0, l.jsxs)("div", {
        className: s()(u.o, r),
        children: [
            (0, l.jsx)(i.K, {
                variant: "icon-only",
                size: "sm",
                icon: c.MinusIcon,
                onClick: function (a) {
                    (a.stopPropagation(), A || v(E - 1));
                },
                "aria-label": h.intl.string(h.t["k+ohJm"]),
                disabled: A,
            }),
            (0, l.jsx)("div", {
                className: u.U,
                children: (0, l.jsx)(o.k, {
                    value: `${E}`,
                    onChange: function (a) {
                        if (m(a)) return v(a);
                        let e = parseInt(a);
                        if (!isNaN(e)) return null != x && e >= x ? v(x) : null != p && e <= p ? v(p) : v(e);
                    },
                }),
            }),
            (0, l.jsx)(i.K, {
                size: "sm",
                variant: "icon-only",
                icon: d.j,
                onClick: function (a) {
                    (a.stopPropagation(), g || v(E + 1));
                },
                "aria-label": h.intl.string(h.t.w8Sc4B),
                disabled: g,
            }),
        ],
    });
}
