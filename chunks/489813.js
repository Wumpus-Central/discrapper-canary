n.d(t, {
    Ih: () => s,
    PU: () => c,
    hK: () => o
});
var a = n(200651);
n(192379);
var i = n(692547),
    r = n(481060),
    l = n(933078);
function o(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)('div', {
        className: l.questionContainer,
        children: [
            (0, a.jsx)(r.Text, {
                className: l.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function s(e) {
    let { icon: t, text: n, meetsRequirement: o } = e;
    return (0, a.jsxs)('div', {
        className: l.requirementContainer,
        children: [
            (0, a.jsx)(t, {
                className: l.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, a.jsx)(r.Text, {
                className: l.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            o
                ? (0, a.jsx)(r.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: l.requirementSuccess,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
                : (0, a.jsx)(r.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: l.requirementFailure,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: t, text: n, footnote: o, meetsRequirement: s, children: c } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: l.requirementContainer,
                children: [
                    (0, a.jsx)(t, {
                        className: l.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, a.jsx)(r.Text, {
                        className: l.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    s
                        ? (0, a.jsx)(r.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: l.requirementSuccess,
                              secondaryColor: i.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != o &&
                (0, a.jsx)(r.Text, {
                    color: 'header-secondary',
                    className: l.footnote,
                    variant: 'text-xs/normal',
                    children: o
                })
        ]
    });
}
