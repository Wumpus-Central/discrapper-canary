r.d(n, {
    j: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(84735),
    u = r(437337),
    c = r(981729),
    d = r(770102),
    f = r(534542),
    _ = r(489222);
function h(e) {
    let { value: n, disabled: r = !1, hideBorder: s = !1, tooltipNote: h, onChange: p, className: m, style: g, note: E, children: v, disabledText: I } = e,
        T = a.useRef(null),
        b = a.useRef(null),
        y = a.useId(),
        S = (0, i.jsx)(u.r, {
            id: y,
            checked: n,
            onChange: p,
            disabled: r,
            focusProps: { enabled: !1 },
            innerRef: T
        });
    return (0, i.jsxs)('div', {
        style: g,
        className: o()(_.container, m, { [_.disabled]: r }),
        children: [
            (0, i.jsx)(l.t, {
                within: !0,
                offset: -4,
                focusTarget: T,
                ringTarget: b,
                children: (0, i.jsxs)('div', {
                    className: _.labelRow,
                    ref: b,
                    children: [
                        (0, i.jsx)('label', {
                            htmlFor: y,
                            className: _.title,
                            children: v
                        }),
                        (0, i.jsx)('div', {
                            className: _.control,
                            children:
                                null != h
                                    ? (0, i.jsx)(c.DY, {
                                          text: h,
                                          children: S
                                      })
                                    : S
                        })
                    ]
                })
            }),
            null != E &&
                (0, i.jsx)('div', {
                    className: _.note,
                    children: (0, i.jsx)(f.R, {
                        disabled: r,
                        type: f.g.DESCRIPTION,
                        children: E
                    })
                }),
            r &&
                null != I &&
                (0, i.jsx)('div', {
                    className: _.disabledText,
                    children: (0, i.jsx)(f.R, {
                        type: f.g.ERROR,
                        children: I
                    })
                }),
            !s && (0, i.jsx)(d.$, { className: _.dividerDefault })
        ]
    });
}
