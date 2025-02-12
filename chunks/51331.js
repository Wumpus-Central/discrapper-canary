n.d(t, { Z: () => d });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(838436),
    c = n(243505);
function d(e) {
    let { value: t, onChange: n, className: l, note: d, title: u, disabled: h } = e,
        m = s.useRef(null),
        g = s.useRef(null),
        x = s.useId(),
        _ = (0, i.jsx)(a.rsf, {
            id: x,
            checked: t,
            onChange: n,
            focusProps: { enabled: !1 },
            innerRef: m,
            disabled: h
        });
    return (0, i.jsx)('div', {
        className: r()(c.container, l, { [c.disabled]: h }),
        children: (0, i.jsx)(a.tEY, {
            within: !0,
            offset: -4,
            focusTarget: m,
            ringTarget: g,
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: c.text,
                        children: (0, i.jsx)(o.H, {
                            header: u,
                            description: d,
                            relatedId: x,
                            disabled: h
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: c.control,
                        children: _
                    })
                ]
            })
        })
    });
}
