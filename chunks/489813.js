n.d(t, {
    CA: () => d,
    Ih: () => u,
    PU: () => C,
    hK: () => c,
});
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    o = n(692547),
    a = n(481060),
    s = n(758075);
function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: s.questionContainer,
        children: [
            (0, r.jsx)(a.Text, {
                className: s.questionTitle,
                variant: "text-md/normal",
                color: "text-strong",
                children: t,
            }),
            n,
        ],
    });
}
function d(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: s.disabledQuestionContainer,
        children: [
            (0, r.jsx)(a.Text, {
                className: s.questionTitle,
                variant: "text-sm/medium",
                color: "text-muted",
                children: t,
            }),
            n,
        ],
    });
}
function u(e) {
    let { icon: t, text: n, meetsRequirement: l } = e;
    return (0, r.jsxs)("div", {
        className: s.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: s.requirementIcon,
                height: 16,
                width: 16,
                size: "custom",
                color: "currentColor",
            }),
            (0, r.jsx)(a.Text, {
                className: s.requirementText,
                variant: "text-sm/medium",
                children: n,
            }),
            l
                ? (0, r.jsx)(a.owK, {
                      size: "sm",
                      color: "currentColor",
                      className: s.requirementSuccess,
                      secondaryColor: o.Z.colors.WHITE.css,
                  })
                : (0, r.jsx)(a.k$p, {
                      size: "sm",
                      color: "currentColor",
                      className: s.requirementFailure,
                      secondaryColor: o.Z.colors.WHITE.css,
                  }),
        ],
    });
}
function C(e) {
    let { icon: t, text: n, footnote: l, meetsRequirement: c, children: d, className: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: i()(s.requirementContainer, u),
                children: [
                    (0, r.jsx)(t, {
                        className: s.requirementIcon,
                        height: 20,
                        width: 20,
                        size: "custom",
                        color: "currentColor",
                    }),
                    (0, r.jsx)(a.Text, {
                        className: s.requirementText,
                        variant: "text-md/normal",
                        children: n,
                    }),
                    c
                        ? (0, r.jsx)(a.owK, {
                              size: "md",
                              color: "currentColor",
                              className: s.requirementSuccess,
                              secondaryColor: o.Z.colors.WHITE.css,
                          })
                        : d,
                ],
            }),
            null != l &&
                (0, r.jsx)(a.Text, {
                    color: "text-default",
                    className: s.footnote,
                    variant: "text-xs/normal",
                    children: l,
                }),
        ],
    });
}
