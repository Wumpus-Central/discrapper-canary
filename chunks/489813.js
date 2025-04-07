n.d(t, {
    Ih: () => s,
    PU: () => c,
    hK: () => i
});
var r = n(200651);
n(192379);
var l = n(692547),
    o = n(481060),
    a = n(396561);
function i(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: a.questionContainer,
        children: [
            (0, r.jsx)(o.Text, {
                className: a.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function s(e) {
    let { icon: t, text: n, meetsRequirement: i } = e;
    return (0, r.jsxs)('div', {
        className: a.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: a.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(o.Text, {
                className: a.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            i
                ? (0, r.jsx)(o.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementSuccess,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(o.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementFailure,
                      secondaryColor: l.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: t, text: n, footnote: i, meetsRequirement: s, children: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a.requirementContainer,
                children: [
                    (0, r.jsx)(t, {
                        className: a.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(o.Text, {
                        className: a.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    s
                        ? (0, r.jsx)(o.owK, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.requirementSuccess,
                              secondaryColor: l.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != i &&
                (0, r.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: a.footnote,
                    variant: 'text-xs/normal',
                    children: i
                })
        ]
    });
}
