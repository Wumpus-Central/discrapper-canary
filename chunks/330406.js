n.d(t, { C: () => c });
var r = n(951288),
    i = n(647438),
    a = n(42650),
    o = n(499339),
    s = n(481060),
    l = n(615730);
function c(e) {
    let {
            inputRef: t,
            checked: n,
            defaultChecked: c,
            onChange: u,
            disabled: d = !1,
            displayOnly: f,
            label: _,
            labeledBy: p,
        } = e,
        h = i.useRef(null),
        m = i.useRef(null),
        g = void 0 !== t ? t : m,
        E = null != _ && "" !== _;
    return (0, r.jsx)(s.tEY, {
        focusTarget: g,
        ringTarget: h,
        children: (0, r.jsx)(a.XZ, {
            inputRef: g,
            "aria-hidden": f || void 0,
            "aria-labelledby": p,
            isSelected: n,
            defaultSelected: c,
            onChange: u,
            isDisabled: d,
            isReadOnly: f,
            "data-mana-component": "checkbox",
            className: l.checkboxWrapper,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        ref: h,
                        className: l.checkbox,
                        style: {
                            width: 24,
                            height: 24,
                        },
                        children: (0, r.jsx)(s.kSu, {
                            size: "sm",
                            "aria-hidden": !0,
                            color: "currentColor",
                        }),
                    }),
                    E &&
                        (0, r.jsx)(o._, {
                            className: l.label,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: _,
                            }),
                        }),
                ],
            }),
        }),
    });
}
