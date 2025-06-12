n.d(t, { j: () => f });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(84735),
    l = n(437337),
    c = n(981729),
    u = n(770102),
    d = n(534542),
    _ = n(538285);
function f(e) {
    let { value: t, disabled: n = !1, hideBorder: a = !1, tooltipNote: f, onChange: p, className: h, style: m, note: g, children: E, disabledText: b, containerRef: y } = e,
        O = i.useRef(null),
        v = i.useRef(null),
        I = i.useId(),
        T = (0, r.jsx)(l.r, {
            id: I,
            checked: t,
            onChange: p,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: O
        });
    return (0, r.jsxs)('div', {
        ref: y,
        style: m,
        className: o()(_.container, h, { [_.disabled]: n }),
        children: [
            (0, r.jsx)(s.t, {
                within: !0,
                offset: -4,
                focusTarget: O,
                ringTarget: v,
                children: (0, r.jsxs)('div', {
                    className: _.labelRow,
                    ref: v,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: I,
                            className: _.title,
                            children: E
                        }),
                        (0, r.jsx)('div', {
                            className: _.control,
                            children:
                                null != f
                                    ? (0, r.jsx)(c.DY, {
                                          text: f,
                                          children: T
                                      })
                                    : T
                        })
                    ]
                })
            }),
            null != g &&
                (0, r.jsx)('div', {
                    className: _.note,
                    children: (0, r.jsx)(d.R, {
                        disabled: n,
                        type: d.g.DESCRIPTION,
                        children: g
                    })
                }),
            n &&
                null != b &&
                (0, r.jsx)('div', {
                    className: _.disabledText,
                    children: (0, r.jsx)(d.R, {
                        type: d.g.ERROR,
                        children: b
                    })
                }),
            !a && (0, r.jsx)(u.$, { className: _.dividerDefault })
        ]
    });
}
