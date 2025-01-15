n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(838436),
    c = n(978236);
function d(e) {
    let { value: t, onChange: n, className: s, note: d, title: u, disabled: m } = e,
        g = r.useRef(null),
        h = r.useRef(null),
        p = r.useId(),
        x = (0, i.jsx)(l.Switch, {
            id: p,
            checked: t,
            onChange: n,
            focusProps: { enabled: !1 },
            innerRef: g,
            disabled: m
        });
    return (0, i.jsx)('div', {
        className: a()(c.container, s, { [c.disabled]: m }),
        children: (0, i.jsx)(l.FocusRing, {
            within: !0,
            offset: -4,
            focusTarget: g,
            ringTarget: h,
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: c.text,
                        children: (0, i.jsx)(o.H, {
                            header: u,
                            description: d,
                            relatedId: p,
                            disabled: m
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: c.control,
                        children: x
                    })
                ]
            })
        })
    });
}
