n.d(t, {
    Ih: () => s,
    PU: () => c,
    hK: () => l
});
var r = n(200651);
n(192379);
var a = n(692547),
    i = n(481060),
    o = n(396561);
function l(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: o.questionContainer,
        children: [
            (0, r.jsx)(i.Text, {
                className: o.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function s(e) {
    let { icon: t, text: n, meetsRequirement: l } = e;
    return (0, r.jsxs)('div', {
        className: o.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: o.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(i.Text, {
                className: o.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            l
                ? (0, r.jsx)(i.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementSuccess,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(i.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementFailure,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: t, text: n, footnote: l, meetsRequirement: s, children: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o.requirementContainer,
                children: [
                    (0, r.jsx)(t, {
                        className: o.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(i.Text, {
                        className: o.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    s
                        ? (0, r.jsx)(i.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: o.requirementSuccess,
                              secondaryColor: a.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != l &&
                (0, r.jsx)(i.Text, {
                    color: 'header-secondary',
                    className: o.footnote,
                    variant: 'text-xs/normal',
                    children: l
                })
        ]
    });
}
