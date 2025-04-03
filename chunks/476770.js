n.d(t, {
    CA: () => d,
    Ih: () => u,
    PU: () => m,
    hK: () => c
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(692547),
    l = n(481060),
    s = n(747995);
function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: s.questionContainer,
        children: [
            (0, r.jsx)(l.Text, {
                className: s.questionTitle,
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
        className: s.disabledQuestionContainer,
        children: [
            (0, r.jsx)(l.Text, {
                className: s.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: t
            }),
            n
        ]
    });
}
function u(e) {
    let { icon: t, text: n, meetsRequirement: a } = e;
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
            (0, r.jsx)(l.Text, {
                className: s.requirementText,
                variant: 'text-sm/medium',
                children: n
            }),
            a
                ? (0, r.jsx)(l.owK, {
                      size: 'sm',
                      color: 'currentColor',
                      className: s.requirementSuccess,
                      secondaryColor: o.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(l.k$p, {
                      size: 'sm',
                      color: 'currentColor',
                      className: s.requirementFailure,
                      secondaryColor: o.Z.colors.WHITE.css
                  })
        ]
    });
}
function m(e) {
    let { icon: t, text: n, footnote: a, meetsRequirement: c, children: d, className: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: i()(s.requirementContainer, u),
                children: [
                    (0, r.jsx)(t, {
                        className: s.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(l.Text, {
                        className: s.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    c
                        ? (0, r.jsx)(l.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.requirementSuccess,
                              secondaryColor: o.Z.colors.WHITE.css
                          })
                        : d
                ]
            }),
            null != a &&
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: s.footnote,
                    variant: 'text-xs/normal',
                    children: a
                })
        ]
    });
}
