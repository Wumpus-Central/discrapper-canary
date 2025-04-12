r.d(t, {
    CA: () => u,
    Ih: () => d,
    PU: () => f,
    hK: () => c
});
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    l = r(692547),
    s = r(481060),
    a = r(747995);
function c(e) {
    let { title: t, children: r } = e;
    return (0, n.jsxs)('div', {
        className: a.questionContainer,
        children: [
            (0, n.jsx)(s.Text, {
                className: a.questionTitle,
                variant: 'text-md/normal',
                color: 'header-primary',
                children: t
            }),
            r
        ]
    });
}
function u(e) {
    let { title: t, children: r } = e;
    return (0, n.jsxs)('div', {
        className: a.disabledQuestionContainer,
        children: [
            (0, n.jsx)(s.Text, {
                className: a.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: t
            }),
            r
        ]
    });
}
function d(e) {
    let { icon: t, text: r, meetsRequirement: i } = e;
    return (0, n.jsxs)('div', {
        className: a.requirementContainer,
        children: [
            (0, n.jsx)(t, {
                className: a.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, n.jsx)(s.Text, {
                className: a.requirementText,
                variant: 'text-sm/medium',
                children: r
            }),
            i
                ? (0, n.jsx)(s.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: a.requirementSuccess,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
                : (0, n.jsx)(s.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: a.requirementFailure,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
        ]
    });
}
function f(e) {
    let { icon: t, text: r, footnote: i, meetsRequirement: c, children: u, className: d } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)('div', {
                className: o()(a.requirementContainer, d),
                children: [
                    (0, n.jsx)(t, {
                        className: a.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(s.Text, {
                        className: a.requirementText,
                        variant: 'text-md/normal',
                        children: r
                    }),
                    c
                        ? (0, n.jsx)(s.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.requirementSuccess,
                              secondaryColor: l.Z.colors.WHITE.css
                          })
                        : u
                ]
            }),
            null != i &&
                (0, n.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: a.footnote,
                    variant: 'text-xs/normal',
                    children: i
                })
        ]
    });
}
