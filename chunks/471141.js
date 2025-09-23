n.d(t, { j: () => _ });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(28664),
    c = n(481060),
    u = n(770102),
    d = n(534542),
    f = n(873686);
function _(e) {
    let {
            value: t,
            disabled: n = !1,
            hideBorder: a = !1,
            tooltipNote: _,
            onChange: p,
            className: h,
            style: m,
            note: g,
            children: E,
            disabledText: b,
            containerRef: y,
        } = e,
        O = i.useRef(null),
        v = i.useRef(null),
        I = i.useId(),
        T = (0, r.jsx)(c.T2P, {
            id: I,
            checked: t,
            onChange: p,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: O,
        });
    return (0, r.jsxs)("div", {
        ref: y,
        style: m,
        className: o()(f.container, h, { [f.disabled]: n }),
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                offset: -4,
                focusTarget: O,
                ringTarget: v,
                children: (0, r.jsxs)("div", {
                    className: f.labelRow,
                    ref: v,
                    children: [
                        (0, r.jsx)("label", {
                            htmlFor: I,
                            className: f.title,
                            children: E,
                        }),
                        (0, r.jsx)("div", {
                            className: f.control,
                            children:
                                null != _
                                    ? (0, r.jsx)(l.u, {
                                          asContainer: !0,
                                          text: _,
                                          children: T,
                                      })
                                    : T,
                        }),
                    ],
                }),
            }),
            null != g &&
                (0, r.jsx)("div", {
                    className: f.note,
                    children: (0, r.jsx)(d.R, {
                        disabled: n,
                        type: d.g.DESCRIPTION,
                        children: g,
                    }),
                }),
            n &&
                null != b &&
                (0, r.jsx)("div", {
                    className: f.disabledText,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: b,
                    }),
                }),
            !a && (0, r.jsx)(u.$, { className: f.dividerDefault }),
        ],
    });
}
