n.d(t, {
    CA: () => c,
    Ih: () => d,
    PU: () => m,
    hK: () => u
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(692547),
    o = n(481060),
    a = n(130948);
function u(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: a.questionContainer,
        children: [
            (0, i.jsx)(o.Text, {
                className: a.questionTitle,
                variant: 'text-md/normal',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function c(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: a.disabledQuestionContainer,
        children: [
            (0, i.jsx)(o.Text, {
                className: a.questionTitle,
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
    return (0, i.jsxs)('div', {
        className: a.requirementContainer,
        children: [
            (0, i.jsx)(t, {
                className: a.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                className: a.requirementText,
                variant: 'text-sm/medium',
                children: n
            }),
            l
                ? (0, i.jsx)(o.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: a.requirementSuccess,
                      secondaryColor: s.Z.colors.WHITE.css
                  })
                : (0, i.jsx)(o.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: a.requirementFailure,
                      secondaryColor: s.Z.colors.WHITE.css
                  })
        ]
    });
}
function m(e) {
    let { icon: t, text: n, footnote: l, meetsRequirement: u, children: c, className: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: r()(a.requirementContainer, d),
                children: [
                    (0, i.jsx)(t, {
                        className: a.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(o.Text, {
                        className: a.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    u
                        ? (0, i.jsx)(o.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.requirementSuccess,
                              secondaryColor: s.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != l &&
                (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: a.footnote,
                    variant: 'text-xs/normal',
                    children: l
                })
        ]
    });
}
