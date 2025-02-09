n.d(t, { I: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(743236),
    l = n(939350),
    u = n(335765);
function c(e) {
    let { color: t = 'default', label: n, control: a, disabled: c, isFocused: d, showDefaultFocus: f = !1, menuItemProps: _, onClose: p } = e,
        h = r.useRef(null),
        m = r.useRef(null);
    r.useLayoutEffect(() => {
        var e, t, n;
        d ? ((0, o.F)(h), null === (e = m.current) || void 0 === e || e.focus()) : null === (n = m.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n);
    }, [d]);
    let g = r.useCallback(() => {
            var e, t;
            (null === (t = m.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && p();
        }, [p]),
        E = a(
            {
                onClose: p,
                disabled: c,
                isFocused: d
            },
            m
        );
    return (0, i.jsxs)('div', {
        onClick: g,
        className: s()(u.item, l._[t], {
            [u.disabled]: c,
            [u.focused]: f && d,
            [u.hideInteraction]: !f
        }),
        'aria-disabled': c,
        ..._,
        children: [
            null != n
                ? (0, i.jsx)('div', {
                      className: u.labelContainer,
                      children: (0, i.jsx)('div', {
                          className: u.label,
                          children: n
                      })
                  })
                : null,
            E
        ]
    });
}
