n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(838436),
    c = n(169957);
function d(e) {
    let { value: t, onChange: n, className: s, note: d, title: u, disabled: m } = e,
        g = r.useRef(null),
        p = r.useRef(null),
        h = r.useId(),
        f = (0, i.jsx)(a.rsf, {
            id: h,
            checked: t,
            onChange: n,
            focusProps: { enabled: !1 },
            innerRef: g,
            disabled: m
        });
    return (0, i.jsx)('div', {
        className: l()(c.container, s, { [c.disabled]: m }),
        children: (0, i.jsx)(a.tEY, {
            within: !0,
            offset: -4,
            focusTarget: g,
            ringTarget: p,
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: c.text,
                        children: (0, i.jsx)(o.H, {
                            header: u,
                            description: d,
                            relatedId: h,
                            disabled: m
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: c.control,
                        children: f
                    })
                ]
            })
        })
    });
}
