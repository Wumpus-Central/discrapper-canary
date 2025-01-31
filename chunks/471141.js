n.d(t, { j: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(84735),
    l = n(437337),
    u = n(981729),
    c = n(770102),
    d = n(534542),
    f = n(489222);
function _(e) {
    let { value: t, disabled: n = !1, hideBorder: a = !1, tooltipNote: _, onChange: p, className: h, style: m, note: g, children: E, disabledText: v, containerRef: y } = e,
        I = r.useRef(null),
        b = r.useRef(null),
        T = r.useId(),
        S = (0, i.jsx)(l.r, {
            id: T,
            checked: t,
            onChange: p,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: I
        });
    return (0, i.jsxs)('div', {
        ref: y,
        style: m,
        className: s()(f.container, h, { [f.disabled]: n }),
        children: [
            (0, i.jsx)(o.t, {
                within: !0,
                offset: -4,
                focusTarget: I,
                ringTarget: b,
                children: (0, i.jsxs)('div', {
                    className: f.labelRow,
                    ref: b,
                    children: [
                        (0, i.jsx)('label', {
                            htmlFor: T,
                            className: f.title,
                            children: E
                        }),
                        (0, i.jsx)('div', {
                            className: f.control,
                            children:
                                null != _
                                    ? (0, i.jsx)(u.DY, {
                                          text: _,
                                          children: S
                                      })
                                    : S
                        })
                    ]
                })
            }),
            null != g &&
                (0, i.jsx)('div', {
                    className: f.note,
                    children: (0, i.jsx)(d.R, {
                        disabled: n,
                        type: d.g.DESCRIPTION,
                        children: g
                    })
                }),
            n &&
                null != v &&
                (0, i.jsx)('div', {
                    className: f.disabledText,
                    children: (0, i.jsx)(d.R, {
                        type: d.g.ERROR,
                        children: v
                    })
                }),
            !a && (0, i.jsx)(c.$, { className: f.dividerDefault })
        ]
    });
}
