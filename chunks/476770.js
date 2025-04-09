n.d(t, {
    CA: () => d,
    Ih: () => u,
    PU: () => m,
    hK: () => c
});
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    i = n(692547),
    s = n(481060),
    o = n(747995);
function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: o.questionContainer,
        children: [
            (0, r.jsx)(s.Text, {
                className: o.questionTitle,
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
    return (0, r.jsxs)('div', {
        className: o.disabledQuestionContainer,
        children: [
            (0, r.jsx)(s.Text, {
                className: o.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: t
            }),
            n
        ]
    });
}
function u(e) {
    let { icon: t, text: n, meetsRequirement: l } = e;
    return (0, r.jsxs)('div', {
        className: o.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: o.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                className: o.requirementText,
                variant: 'text-sm/medium',
                children: n
            }),
            l
                ? (0, r.jsx)(s.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: o.requirementSuccess,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(s.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: o.requirementFailure,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
        ]
    });
}
function m(e) {
    let { icon: t, text: n, footnote: l, meetsRequirement: c, children: d, className: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(o.requirementContainer, u),
                children: [
                    (0, r.jsx)(t, {
                        className: o.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(s.Text, {
                        className: o.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    c
                        ? (0, r.jsx)(s.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: o.requirementSuccess,
                              secondaryColor: i.Z.colors.WHITE.css
                          })
                        : d
                ]
            }),
            null != l &&
                (0, r.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: o.footnote,
                    variant: 'text-xs/normal',
                    children: l
                })
        ]
    });
}
