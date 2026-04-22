"use strict";
n.d(t, { B: () => u });
var i = n(627968);
n(64700);
var r = n(939249),
    l = n(954197),
    s = n(658675),
    a = n(834730),
    o = n(292666),
    c = n(793361);
function u(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: u,
            onSelectionChange: d,
            inputType: _,
            textInputValue: E,
            onTextInputChange: A,
        } = e,
        m = "true" === n.TextEntry,
        I = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: c.NV,
        children: [
            (0, i.jsxs)(r.D, {
                className: c.d,
                onClick: () => {
                    d(t);
                },
                role: _,
                "aria-checked": u,
                "aria-labelledby": I,
                children: [
                    (0, i.jsx)("div", {
                        className: c.jl,
                        children:
                            "radio" === _
                                ? (0, i.jsx)(l.T, { disabled: !1, checked: u })
                                : (0, i.jsx)(s.P, { disabled: !1, checked: u }),
                    }),
                    (0, i.jsx)(a.E, {
                        id: I,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            m &&
                (0, i.jsx)("div", {
                    className: c.Vi,
                    children: (0, i.jsx)(o.k, {
                        value: E ?? "",
                        onChange: (e) => {
                            u || d(t), A?.(t, e);
                        },
                        disabled: !u,
                    }),
                }),
        ],
    });
}
