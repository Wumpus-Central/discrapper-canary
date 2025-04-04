n.d(t, { j: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(84735),
    l = n(437337),
    c = n(981729),
    u = n(770102),
    d = n(534542),
    f = n(538285);
function _(e) {
    let { value: t, disabled: n = !1, hideBorder: o = !1, tooltipNote: _, onChange: p, className: h, style: m, note: g, children: E, disabledText: b, containerRef: y } = e,
        v = i.useRef(null),
        O = i.useRef(null),
        I = i.useId(),
        S = (0, r.jsx)(l.r, {
            id: I,
            checked: t,
            onChange: p,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: v
        });
    return (0, r.jsxs)('div', {
        ref: y,
        style: m,
        className: a()(f.container, h, { [f.disabled]: n }),
        children: [
            (0, r.jsx)(s.t, {
                within: !0,
                offset: -4,
                focusTarget: v,
                ringTarget: O,
                children: (0, r.jsxs)('div', {
                    className: f.labelRow,
                    ref: O,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: I,
                            className: f.title,
                            children: E
                        }),
                        (0, r.jsx)('div', {
                            className: f.control,
                            children:
                                null != _
                                    ? (0, r.jsx)(c.DY, {
                                          text: _,
                                          children: S
                                      })
                                    : S
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
                null != b &&
                (0, r.jsx)('div', {
                    className: f.disabledText,
                    children: (0, r.jsx)(d.R, {
                        type: d.g.ERROR,
                        children: b
                    })
                }),
            !o && (0, r.jsx)(u.$, { className: f.dividerDefault })
        ]
    });
}
