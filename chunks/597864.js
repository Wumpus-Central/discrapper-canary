n.d(t, { B: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(314582);
function s(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: s,
            onSelectionChange: o,
            inputType: l,
            textInputValue: c,
            onTextInputChange: u,
        } = e,
        d = "true" === n.TextEntry,
        f = "choice-label-".concat(t),
        p = () => {
            o(t);
        },
        _ = (e) => {
            s || o(t), null == u || u(t, e);
        };
    return (0, r.jsxs)("div", {
        className: a.NV,
        children: [
            (0, r.jsxs)(i.DUT, {
                className: a.d,
                onClick: p,
                role: l,
                "aria-checked": s,
                "aria-labelledby": f,
                children: [
                    (0, r.jsx)("div", {
                        className: a.jl,
                        children:
                            "radio" === l
                                ? (0, r.jsx)(i.TN6, {
                                      disabled: !1,
                                      checked: s,
                                  })
                                : (0, r.jsx)(i.P7L, {
                                      disabled: !1,
                                      checked: s,
                                  }),
                    }),
                    (0, r.jsx)(i.Text, {
                        id: f,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            d &&
                (0, r.jsx)("div", {
                    className: a.Vi,
                    children: (0, r.jsx)(i.ksK, {
                        value: null != c ? c : "",
                        onChange: _,
                        disabled: !s,
                    }),
                }),
        ],
    });
}
