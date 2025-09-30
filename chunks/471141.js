n.d(t, { j: () => f });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(28664),
    c = n(481060),
    u = n(534542),
    d = n(171931);
function f(e) {
    let {
            value: t,
            disabled: n = !1,
            hideBorder: a = !1,
            tooltipNote: f,
            onChange: _,
            className: p,
            style: h,
            note: m,
            children: g,
            disabledText: E,
            containerRef: b,
        } = e,
        y = i.useRef(null),
        O = i.useRef(null),
        v = i.useId(),
        I = (0, r.jsx)(c.T2P, {
            id: v,
            checked: t,
            onChange: _,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: y,
        });
    return (0, r.jsxs)("div", {
        ref: b,
        style: h,
        className: o()(d.container, p, { [d.disabled]: n }),
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                offset: -4,
                focusTarget: y,
                ringTarget: O,
                children: (0, r.jsxs)("div", {
                    className: d.labelRow,
                    ref: O,
                    children: [
                        (0, r.jsx)("label", {
                            htmlFor: v,
                            className: d.title,
                            children: g,
                        }),
                        (0, r.jsx)("div", {
                            className: d.control,
                            children:
                                null != f
                                    ? (0, r.jsx)(l.u, {
                                          asContainer: !0,
                                          text: f,
                                          children: I,
                                      })
                                    : I,
                        }),
                    ],
                }),
            }),
            null != m &&
                (0, r.jsx)("div", {
                    className: d.note,
                    children: (0, r.jsx)(u.R, {
                        disabled: n,
                        type: u.g.DESCRIPTION,
                        children: m,
                    }),
                }),
            n &&
                null != E &&
                (0, r.jsx)("div", {
                    className: d.disabledText,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: E,
                    }),
                }),
            !a && (0, r.jsx)(s.izJ, { className: d.dividerDefault }),
        ],
    });
}
