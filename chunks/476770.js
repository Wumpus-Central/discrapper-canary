n.d(t, {
    CA: () => d,
    Ih: () => u,
    PU: () => m,
    hK: () => c
});
var o = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(692547),
    s = n(481060),
    l = n(76396);
function c(e) {
    let { title: t, children: n } = e;
    return (0, o.jsxs)('div', {
        className: l.questionContainer,
        children: [
            (0, o.jsx)(s.Text, {
                className: l.questionTitle,
                variant: 'text-md/normal',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function d(e) {
    let { title: t, children: n } = e;
    return (0, o.jsxs)('div', {
        className: l.disabledQuestionContainer,
        children: [
            (0, o.jsx)(s.Text, {
                className: l.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: t
            }),
            n
        ]
    });
}
function u(e) {
    let { icon: t, text: n, meetsRequirement: r } = e;
    return (0, o.jsxs)('div', {
        className: l.requirementContainer,
        children: [
            (0, o.jsx)(t, {
                className: l.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, o.jsx)(s.Text, {
                className: l.requirementText,
                variant: 'text-sm/medium',
                children: n
            }),
            r
                ? (0, o.jsx)(s.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: l.requirementSuccess,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
                : (0, o.jsx)(s.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: l.requirementFailure,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
        ]
    });
}
function m(e) {
    let { icon: t, text: n, footnote: r, meetsRequirement: c, children: d, className: u } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: i()(l.requirementContainer, u),
                children: [
                    (0, o.jsx)(t, {
                        className: l.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, o.jsx)(s.Text, {
                        className: l.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    c
                        ? (0, o.jsx)(s.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: l.requirementSuccess,
                              secondaryColor: a.Z.colors.WHITE.css
                          })
                        : d
                ]
            }),
            null != r &&
                (0, o.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: l.footnote,
                    variant: 'text-xs/normal',
                    children: r
                })
        ]
    });
}
