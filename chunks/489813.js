i.d(n, {
    Ih: function () {
        return o;
    },
    PU: function () {
        return a;
    },
    hK: function () {
        return u;
    }
});
var e = i(200651);
i(192379);
var r = i(692547),
    l = i(481060),
    s = i(933078);
function u(t) {
    let { title: n, children: i } = t;
    return (0, e.jsxs)('div', {
        className: s.questionContainer,
        children: [
            (0, e.jsx)(l.Text, {
                className: s.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: n
            }),
            i
        ]
    });
}
function o(t) {
    let { icon: n, text: i, meetsRequirement: u } = t;
    return (0, e.jsxs)('div', {
        className: s.requirementContainer,
        children: [
            (0, e.jsx)(n, {
                className: s.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, e.jsx)(l.Text, {
                className: s.requirementText,
                variant: 'text-md/normal',
                children: i
            }),
            u
                ? (0, e.jsx)(l.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: s.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
                : (0, e.jsx)(l.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: s.requirementFailure,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
        ]
    });
}
function a(t) {
    let { icon: n, text: i, footnote: u, meetsRequirement: o, children: a } = t;
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsxs)('div', {
                className: s.requirementContainer,
                children: [
                    (0, e.jsx)(n, {
                        className: s.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, e.jsx)(l.Text, {
                        className: s.requirementText,
                        variant: 'text-md/normal',
                        children: i
                    }),
                    o
                        ? (0, e.jsx)(l.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.requirementSuccess,
                              secondaryColor: r.Z.colors.WHITE.css
                          })
                        : a
                ]
            }),
            null != u &&
                (0, e.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: s.footnote,
                    variant: 'text-xs/normal',
                    children: u
                })
        ]
    });
}
