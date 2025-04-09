n.d(t, {
    Ih: () => o,
    PU: () => c,
    hK: () => s
});
var r = n(200651);
n(192379);
var l = n(692547),
    a = n(481060),
    i = n(396561);
function s(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: i.questionContainer,
        children: [
            (0, r.jsx)(a.Text, {
                className: i.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function o(e) {
    let { icon: t, text: n, meetsRequirement: s } = e;
    return (0, r.jsxs)('div', {
        className: i.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: i.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(a.Text, {
                className: i.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            s
                ? (0, r.jsx)(a.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: i.requirementSuccess,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(a.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: i.requirementFailure,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: t, text: n, footnote: s, meetsRequirement: o, children: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: i.requirementContainer,
                children: [
                    (0, r.jsx)(t, {
                        className: i.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(a.Text, {
                        className: i.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    o
                        ? (0, r.jsx)(a.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: i.requirementSuccess,
                              secondaryColor: l.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != s &&
                (0, r.jsx)(a.Text, {
                    color: 'header-secondary',
                    className: i.footnote,
                    variant: 'text-xs/normal',
                    children: s
                })
        ]
    });
}
