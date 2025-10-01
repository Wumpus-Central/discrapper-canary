n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(838436),
    u = n(953821);
function d(e) {
    let { value: t, onChange: n, className: a, note: d, title: f, disabled: _ } = e,
        p = i.useRef(null),
        h = i.useRef(null),
        m = i.useId(),
        g = (0, r.jsx)(s.T2, {
            id: m,
            checked: t,
            onChange: n,
            focusProps: { enabled: !1 },
            innerRef: p,
            disabled: _,
        });
    return (0, r.jsx)("div", {
        className: o()(u.container, a, { [u.disabled]: _ }),
        children: (0, r.jsx)(l.tEY, {
            within: !0,
            offset: -4,
            focusTarget: p,
            ringTarget: h,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: u.text,
                        children: (0, r.jsx)(c.H, {
                            header: f,
                            description: d,
                            relatedId: m,
                            disabled: _,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.control,
                        children: g,
                    }),
                ],
            }),
        }),
    });
}
