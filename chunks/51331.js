n.d(t, { Z: () => u });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(838436),
    c = n(43190);
function u(e) {
    let { value: t, onChange: n, className: a, note: u, title: d, disabled: f } = e,
        _ = i.useRef(null),
        p = i.useRef(null),
        h = i.useId(),
        m = (0, r.jsx)(s.rsf, {
            id: h,
            checked: t,
            onChange: n,
            focusProps: { enabled: !1 },
            innerRef: _,
            disabled: f,
        });
    return (0, r.jsx)("div", {
        className: o()(c.container, a, { [c.disabled]: f }),
        children: (0, r.jsx)(s.tEY, {
            within: !0,
            offset: -4,
            focusTarget: _,
            ringTarget: p,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: c.text,
                        children: (0, r.jsx)(l.H, {
                            header: d,
                            description: u,
                            relatedId: h,
                            disabled: f,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: c.control,
                        children: m,
                    }),
                ],
            }),
        }),
    });
}
