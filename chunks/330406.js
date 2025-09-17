n.d(t, { C: () => c });
var r = n(951288),
    i = n(647438),
    a = n(42650),
    o = n(499339),
    s = n(481060),
    l = n(31471);
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
            labelSize: h = "medium",
        } = e,
        m = i.useRef(null),
        g = i.useRef(null),
        E = void 0 !== t ? t : g,
        b = null != _ && "" !== _;
    return (0, r.jsx)(s.tEY, {
        focusTarget: E,
        ringTarget: m,
        children: (0, r.jsx)(a.XZ, {
            inputRef: E,
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
                        ref: m,
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
                    b &&
                        (0, r.jsx)(o._, {
                            className: l.label,
                            children: (0, r.jsx)(s.Text, {
                                variant: "small" === h ? "text-sm/normal" : "text-md/normal",
                                children: _,
                            }),
                        }),
                ],
            }),
        }),
    });
}
