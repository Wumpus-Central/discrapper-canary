n.d(t, {
    CA: () => u,
    Ih: () => d,
    PU: () => C,
    hK: () => c
});
var r = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(692547),
    i = n(481060),
    s = n(396561);
function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: s.questionContainer,
        children: [
            (0, r.jsx)(i.Text, {
                className: s.questionTitle,
                variant: 'text-md/normal',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function u(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: s.disabledQuestionContainer,
        children: [
            (0, r.jsx)(i.Text, {
                className: s.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: t
            }),
            n
        ]
    });
}
function d(e) {
    let { icon: t, text: n, meetsRequirement: l } = e;
    return (0, r.jsxs)('div', {
        className: s.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: s.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(i.Text, {
                className: s.requirementText,
                variant: 'text-sm/medium',
                children: n
            }),
            l
                ? (0, r.jsx)(i.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: s.requirementSuccess,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(i.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: s.requirementFailure,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
        ]
    });
}
function C(e) {
    let { icon: t, text: n, footnote: l, meetsRequirement: c, children: u, className: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o()(s.requirementContainer, d),
                children: [
                    (0, r.jsx)(t, {
                        className: s.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(i.Text, {
                        className: s.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    c
                        ? (0, r.jsx)(i.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.requirementSuccess,
                              secondaryColor: a.Z.colors.WHITE.css
                          })
                        : u
                ]
            }),
            null != l &&
                (0, r.jsx)(i.Text, {
                    color: 'header-secondary',
                    className: s.footnote,
                    variant: 'text-xs/normal',
                    children: l
                })
        ]
    });
}
