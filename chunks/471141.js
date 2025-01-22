r.d(n, {
    j: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(84735),
    u = r(437337),
    c = r(981729),
    d = r(770102),
    f = r(534542),
    p = r(489222);
function h(e) {
    let { value: n, disabled: r = !1, hideBorder: o = !1, tooltipNote: h, onChange: _, className: m, style: g, note: E, children: v, disabledText: y, containerRef: b } = e,
        I = a.useRef(null),
        T = a.useRef(null),
        S = a.useId(),
        A = (0, i.jsx)(u.r, {
            id: S,
            checked: n,
            onChange: _,
            disabled: r,
            focusProps: { enabled: !1 },
            innerRef: I
        });
    return (0, i.jsxs)('div', {
        ref: b,
        style: g,
        className: s()(p.container, m, { [p.disabled]: r }),
        children: [
            (0, i.jsx)(l.t, {
                within: !0,
                offset: -4,
                focusTarget: I,
                ringTarget: T,
                children: (0, i.jsxs)('div', {
                    className: p.labelRow,
                    ref: T,
                    children: [
                        (0, i.jsx)('label', {
                            htmlFor: S,
                            className: p.title,
                            children: v
                        }),
                        (0, i.jsx)('div', {
                            className: p.control,
                            children:
                                null != h
                                    ? (0, i.jsx)(c.DY, {
                                          text: h,
                                          children: A
                                      })
                                    : A
                        })
                    ]
                })
            }),
            null != E &&
                (0, i.jsx)('div', {
                    className: p.note,
                    children: (0, i.jsx)(f.R, {
                        disabled: r,
                        type: f.g.DESCRIPTION,
                        children: E
                    })
                }),
            r &&
                null != y &&
                (0, i.jsx)('div', {
                    className: p.disabledText,
                    children: (0, i.jsx)(f.R, {
                        type: f.g.ERROR,
                        children: y
                    })
                }),
            !o && (0, i.jsx)(d.$, { className: p.dividerDefault })
        ]
    });
}
