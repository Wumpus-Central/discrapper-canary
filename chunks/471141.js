n.d(t, { j: () => p });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(84735),
    l = n(437337),
    c = n(981729),
    u = n(770102),
    d = n(534542),
    f = n(466372);
function p(e) {
    let { value: t, disabled: n = !1, hideBorder: o = !1, tooltipNote: p, onChange: _, className: h, style: m, note: g, children: E, disabledText: v, containerRef: b } = e,
        y = i.useRef(null),
        O = i.useRef(null),
        S = i.useId(),
        I = (0, r.jsx)(l.r, {
            id: S,
            checked: t,
            onChange: _,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: y
        });
    return (0, r.jsxs)('div', {
        ref: b,
        style: m,
        className: a()(f.container, h, { [f.disabled]: n }),
        children: [
            (0, r.jsx)(s.t, {
                within: !0,
                offset: -4,
                focusTarget: y,
                ringTarget: O,
                children: (0, r.jsxs)('div', {
                    className: f.labelRow,
                    ref: O,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: S,
                            className: f.title,
                            children: E
                        }),
                        (0, r.jsx)('div', {
                            className: f.control,
                            children:
                                null != p
                                    ? (0, r.jsx)(c.DY, {
                                          text: p,
                                          children: I
                                      })
                                    : I
                        })
                    ]
                })
            }),
            null != g &&
                (0, r.jsx)('div', {
                    className: f.note,
                    children: (0, r.jsx)(d.R, {
                        disabled: n,
                        type: d.g.DESCRIPTION,
                        children: g
                    })
                }),
            n &&
                null != v &&
                (0, r.jsx)('div', {
                    className: f.disabledText,
                    children: (0, r.jsx)(d.R, {
                        type: d.g.ERROR,
                        children: v
                    })
                }),
            !o && (0, r.jsx)(u.$, { className: f.dividerDefault })
        ]
    });
}
