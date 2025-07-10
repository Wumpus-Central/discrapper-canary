n.d(t, {
    CA: () => u,
    Ih: () => d,
    PU: () => m,
    hK: () => c
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(692547),
    s = n(481060),
    a = n(396561);
function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: a.questionContainer,
        children: [
            (0, r.jsx)(s.Text, {
                className: a.questionTitle,
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
        className: a.disabledQuestionContainer,
        children: [
            (0, r.jsx)(s.Text, {
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
    let { icon: t, text: n, meetsRequirement: i } = e;
    return (0, r.jsxs)('div', {
        className: a.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: a.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                className: a.requirementText,
                variant: 'text-sm/medium',
                children: n
            }),
            i
                ? (0, r.jsx)(s.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: a.requirementSuccess,
                      secondaryColor: o.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(s.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: a.requirementFailure,
                      secondaryColor: o.Z.colors.WHITE.css
                  })
        ]
    });
}
function m(e) {
    let { icon: t, text: n, footnote: i, meetsRequirement: c, children: u, className: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: l()(a.requirementContainer, d),
                children: [
                    (0, r.jsx)(t, {
                        className: a.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(s.Text, {
                        className: a.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    c
                        ? (0, r.jsx)(s.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.requirementSuccess,
                              secondaryColor: o.Z.colors.WHITE.css
                          })
                        : u
                ]
            }),
            null != i &&
                (0, r.jsx)(s.Text, {
                    color: 'header-secondary',
                    className: a.footnote,
                    variant: 'text-xs/normal',
                    children: i
                })
        ]
    });
}
