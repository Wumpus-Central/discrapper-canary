n.d(t, { Z: () => d });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(838436),
    c = n(340322);
function d(e) {
    let { value: t, onChange: n, className: r, note: d, title: u, disabled: m } = e,
        h = s.useRef(null),
        g = s.useRef(null),
        x = s.useId(),
        _ = (0, i.jsx)(a.rsf, {
            id: x,
            checked: t,
            onChange: n,
            focusProps: { enabled: !1 },
            innerRef: h,
            disabled: m
        });
    return (0, i.jsx)('div', {
        className: l()(c.container, r, { [c.disabled]: m }),
        children: (0, i.jsx)(a.tEY, {
            within: !0,
            offset: -4,
            focusTarget: h,
            ringTarget: g,
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: c.text,
                        children: (0, i.jsx)(o.H, {
                            header: u,
                            description: d,
                            relatedId: x,
                            disabled: m
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
