n.d(t, { L: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(643357);
function o(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: o,
            onSelectionChange: s,
            inputType: l,
            textInputValue: c,
            onTextInputChange: u,
        } = e,
        d = "true" === n.TextEntry,
        f = "choice-label-".concat(t),
        p = () => {
            s(t);
        },
        _ = (e) => {
            o || s(t), null == u || u(t, e);
        };
    return (0, r.jsxs)("div", {
        className: a.optionContainer,
        children: [
            (0, r.jsxs)(i.P3F, {
                className: a.clickableRow,
                onClick: p,
                role: l,
                "aria-checked": o,
                "aria-labelledby": f,
                children: [
                    (0, r.jsx)("div", {
                        className: a.indicatorWrapper,
                        children:
                            "radio" === l
                                ? (0, r.jsx)(i.Fj9, {
                                      disabled: !1,
                                      checked: o,
                                  })
                                : (0, r.jsx)(i.FZ5, {
                                      disabled: !1,
                                      checked: o,
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
                    className: a.textInputWrapper,
                    children: (0, r.jsx)(i.oil, {
                        value: null != c ? c : "",
                        onChange: _,
                        disabled: !o,
                    }),
                }),
        ],
    });
}
