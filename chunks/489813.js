n.d(i, {
    Ih: () => o,
    PU: () => u,
    hK: () => s
});
var t = n(200651);
n(192379);
var r = n(692547),
    l = n(481060),
    a = n(933078);
function s(e) {
    let { title: i, children: n } = e;
    return (0, t.jsxs)('div', {
        className: a.questionContainer,
        children: [
            (0, t.jsx)(l.Text, {
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
            (0, t.jsx)(l.Text, {
                className: a.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            s
                ? (0, t.jsx)(l.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
                : (0, t.jsx)(l.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementFailure,
                      secondaryColor: r.Z.colors.WHITE.css
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
                    (0, t.jsx)(l.Text, {
                        className: a.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    o
                        ? (0, t.jsx)(l.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.requirementSuccess,
                              secondaryColor: r.Z.colors.WHITE.css
                          })
                        : u
                ]
            }),
            null != s &&
                (0, t.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: a.footnote,
                    variant: 'text-xs/normal',
                    children: s
                })
        ]
    });
}
