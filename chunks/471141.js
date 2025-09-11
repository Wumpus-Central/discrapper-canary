n.d(t, { j: () => p });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(497039),
    c = n(28664),
    u = n(481060),
    d = n(770102),
    f = n(534542),
    _ = n(171931);
function p(e) {
    let {
            value: t,
            disabled: n = !1,
            hideBorder: a = !1,
            tooltipNote: p,
            onChange: h,
            className: m,
            style: g,
            note: E,
            children: b,
            disabledText: y,
            containerRef: O,
        } = e,
        v = i.useRef(null),
        I = i.useRef(null),
        T = i.useId(),
        S = (0, r.jsx)(l.T, {
            id: T,
            checked: t,
            onChange: h,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: v,
        });
    return (0, r.jsxs)("div", {
        ref: O,
        style: g,
        className: o()(_.container, m, { [_.disabled]: n }),
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                offset: -4,
                focusTarget: v,
                ringTarget: I,
                children: (0, r.jsxs)("div", {
                    className: _.labelRow,
                    ref: I,
                    children: [
                        (0, r.jsx)("label", {
                            htmlFor: T,
                            className: _.title,
                            children: b,
                        }),
                        (0, r.jsx)("div", {
                            className: _.control,
                            children:
                                null != p
                                    ? (0, r.jsx)(c.u, {
                                          asContainer: !0,
                                          text: p,
                                          children: S,
                                      })
                                    : S,
                        }),
                    ],
                }),
            }),
            null != E &&
                (0, r.jsx)("div", {
                    className: _.note,
                    children: (0, r.jsx)(f.R, {
                        disabled: n,
                        type: f.g.DESCRIPTION,
                        children: E,
                    }),
                }),
            n &&
                null != y &&
                (0, r.jsx)("div", {
                    className: _.disabledText,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: y,
                    }),
                }),
            !a && (0, r.jsx)(d.$, { className: _.dividerDefault }),
        ],
    });
}
