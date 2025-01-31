n.d(i, {
    Ih: () => o,
    PU: () => u,
    hK: () => s
});
var t = n(200651);
n(192379);
var l = n(692547),
    r = n(481060),
    a = n(933078);
function s(e) {
    let { title: i, children: n } = e;
    return (0, t.jsxs)('div', {
        className: a.questionContainer,
        children: [
            (0, t.jsx)(r.Text, {
                className: a.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: i
            }),
            n
        ]
    });
}
function o(e) {
    let { icon: i, text: n, meetsRequirement: s } = e;
    return (0, t.jsxs)('div', {
        className: a.requirementContainer,
        children: [
            (0, t.jsx)(i, {
                className: a.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, t.jsx)(r.Text, {
                className: a.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            s
                ? (0, t.jsx)(r.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementSuccess,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
                : (0, t.jsx)(r.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementFailure,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
        ]
    });
}
function u(e) {
    let { icon: i, text: n, footnote: s, meetsRequirement: o, children: u } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: a.requirementContainer,
                children: [
                    (0, t.jsx)(i, {
                        className: a.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, t.jsx)(r.Text, {
                        className: a.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    o
                        ? (0, t.jsx)(r.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.requirementSuccess,
                              secondaryColor: l.Z.colors.WHITE.css
                          })
                        : u
                ]
            }),
            null != s &&
                (0, t.jsx)(r.Text, {
                    color: 'header-secondary',
                    className: a.footnote,
                    variant: 'text-xs/normal',
                    children: s
                })
        ]
    });
}
