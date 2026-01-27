n.d(t, {
    B: () => a,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(314582);

function a(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: a,
            onSelectionChange: s,
            inputType: o,
            textInputValue: c,
            onTextInputChange: u,
        } = e,
        d = "true" === n.TextEntry,
        p = "choice-label-".concat(t);
    return (0, r.jsxs)("div", {
        className: l.NV,
        children: [
            (0, r.jsxs)(i.DUT, {
                className: l.d,
                onClick: () => {
                    s(t);
                },
                role: o,
                "aria-checked": a,
                "aria-labelledby": p,
                children: [
                    (0, r.jsx)("div", {
                        className: l.jl,
                        children:
                            "radio" === o
                                ? (0, r.jsx)(i.TN6, {
                                      disabled: !1,
                                      checked: a,
                                  })
                                : (0, r.jsx)(i.P7L, {
                                      disabled: !1,
                                      checked: a,
                                  }),
                    }),
                    (0, r.jsx)(i.Text, {
                        id: p,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: n.Display,
                            },
                        }),
                    }),
                ],
            }),
            d &&
                (0, r.jsx)("div", {
                    className: l.Vi,
                    children: (0, r.jsx)(i.ksK, {
                        value: null != c ? c : "",
                        onChange: (e) => {
                            a || s(t), null == u || u(t, e);
                        },
                        disabled: !a,
                    }),
                }),
        ],
    });
}
