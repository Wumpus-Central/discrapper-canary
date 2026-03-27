n.d(t, { B: () => r });
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(486529);
function r(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: r,
            onSelectionChange: s,
            inputType: o,
            textInputValue: c,
            onTextInputChange: d,
        } = e,
        u = "true" === n.TextEntry,
        _ = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: l.NV,
        children: [
            (0, i.jsxs)(a.DUT, {
                className: l.d,
                onClick: () => {
                    s(t);
                },
                role: o,
                "aria-checked": r,
                "aria-labelledby": _,
                children: [
                    (0, i.jsx)("div", {
                        className: l.jl,
                        children:
                            "radio" === o
                                ? (0, i.jsx)(a.TN6, { disabled: !1, checked: r })
                                : (0, i.jsx)(a.P7L, { disabled: !1, checked: r }),
                    }),
                    (0, i.jsx)(a.Text, {
                        id: _,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            u &&
                (0, i.jsx)("div", {
                    className: l.Vi,
                    children: (0, i.jsx)(a.ksK, {
                        value: c ?? "",
                        onChange: (e) => {
                            r || s(t), d?.(t, e);
                        },
                        disabled: !r,
                    }),
                }),
        ],
    });
}
