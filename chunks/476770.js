t.d(n, {
    CA: () => d,
    Ih: () => u,
    PU: () => m,
    hK: () => c
});
var o = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(692547),
    a = t(481060),
    l = t(174503);
function c(e) {
    let { title: n, children: t } = e;
    return (0, o.jsxs)('div', {
        className: l.questionContainer,
        children: [
            (0, o.jsx)(a.Text, {
                className: l.questionTitle,
                variant: 'text-md/normal',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function d(e) {
    let { title: n, children: t } = e;
    return (0, o.jsxs)('div', {
        className: l.disabledQuestionContainer,
        children: [
            (0, o.jsx)(a.Text, {
                className: l.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: n
            }),
            t
        ]
    });
}
function u(e) {
    let { icon: n, text: t, meetsRequirement: r } = e;
    return (0, o.jsxs)('div', {
        className: l.requirementContainer,
        children: [
            (0, o.jsx)(n, {
                className: l.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, o.jsx)(a.Text, {
                className: l.requirementText,
                variant: 'text-sm/medium',
                children: t
            }),
            r
                ? (0, o.jsx)(a.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: l.requirementSuccess,
                      secondaryColor: s.Z.colors.WHITE.css
                  })
                : (0, o.jsx)(a.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: l.requirementFailure,
                      secondaryColor: s.Z.colors.WHITE.css
                  })
        ]
    });
}
function m(e) {
    let { icon: n, text: t, footnote: r, meetsRequirement: c, children: d, className: u } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: i()(l.requirementContainer, u),
                children: [
                    (0, o.jsx)(n, {
                        className: l.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, o.jsx)(a.Text, {
                        className: l.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    c
                        ? (0, o.jsx)(a.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: l.requirementSuccess,
                              secondaryColor: s.Z.colors.WHITE.css
                          })
                        : d
                ]
            }),
            null != r &&
                (0, o.jsx)(a.Text, {
                    color: 'header-secondary',
                    className: l.footnote,
                    variant: 'text-xs/normal',
                    children: r
                })
        ]
    });
}
