n.d(t, { B: () => r });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(314582);
function r(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: r,
            onSelectionChange: s,
            inputType: o,
            textInputValue: d,
            onTextInputChange: c,
        } = e,
        u = "true" === n.TextEntry,
        m = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: a.NV,
        children: [
            (0, i.jsxs)(l.DUT, {
                className: a.d,
                onClick: () => {
                    s(t);
                },
                role: o,
                "aria-checked": r,
                "aria-labelledby": m,
                children: [
                    (0, i.jsx)("div", {
                        className: a.jl,
                        children:
                            "radio" === o
                                ? (0, i.jsx)(l.TN6, { disabled: !1, checked: r })
                                : (0, i.jsx)(l.P7L, { disabled: !1, checked: r }),
                    }),
                    (0, i.jsx)(l.Text, {
                        id: m,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            u &&
                (0, i.jsx)("div", {
                    className: a.Vi,
                    children: (0, i.jsx)(l.ksK, {
                        value: d ?? "",
                        onChange: (e) => {
                            r || s(t), c?.(t, e);
                        },
                        disabled: !r,
                    }),
                }),
        ],
    });
}
