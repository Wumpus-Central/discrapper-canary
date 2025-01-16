r.d(n, {
    I: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(743236),
    u = r(939350),
    c = r(450793);
function d(e) {
    let { color: n = 'default', label: r, control: s, disabled: d, isFocused: f, showDefaultFocus: _ = !1, menuItemProps: h, onClose: p } = e,
        m = a.useRef(null),
        g = a.useRef(null);
    a.useLayoutEffect(() => {
        var e, n, r;
        f ? ((0, l.F)(m), null === (e = g.current) || void 0 === e || e.focus()) : null === (r = g.current) || void 0 === r || null === (n = r.blur) || void 0 === n || n.call(r);
    }, [f]);
    let E = a.useCallback(() => {
            var e, n;
            (null === (n = g.current) || void 0 === n ? void 0 : null === (e = n.activate) || void 0 === e ? void 0 : e.call(n)) && p();
        }, [p]),
        v = s(
            {
                onClose: p,
                disabled: d,
                isFocused: f
            },
            g
        );
    return (0, i.jsxs)('div', {
        onClick: E,
        className: o()(c.item, u._[n], {
            [c.disabled]: d,
            [c.focused]: _ && f,
            [c.hideInteraction]: !_
        }),
        'aria-disabled': d,
        ...h,
        children: [
            null != r
                ? (0, i.jsx)('div', {
                      className: c.labelContainer,
                      children: (0, i.jsx)('div', {
                          className: c.label,
                          children: r
                      })
                  })
                : null,
            v
        ]
    });
}
