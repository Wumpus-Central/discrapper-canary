t.d(n, {
    Ih: function () {
        return o;
    },
    PU: function () {
        return s;
    },
    hK: function () {
        return a;
    }
});
var i = t(200651);
t(192379);
var r = t(692547),
    l = t(481060),
    u = t(933078);
function a(e) {
    let { title: n, children: t } = e;
    return (0, i.jsxs)('div', {
        className: u.questionContainer,
        children: [
            (0, i.jsx)(l.Text, {
                className: u.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function o(e) {
    let { icon: n, text: t, meetsRequirement: a } = e;
    return (0, i.jsxs)('div', {
        className: u.requirementContainer,
        children: [
            (0, i.jsx)(n, {
                className: u.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, i.jsx)(l.Text, {
                className: u.requirementText,
                variant: 'text-md/normal',
                children: t
            }),
            a
                ? (0, i.jsx)(l.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: u.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
                : (0, i.jsx)(l.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: u.requirementFailure,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
        ]
    });
}
function s(e) {
    let { icon: n, text: t, footnote: a, meetsRequirement: o, children: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: u.requirementContainer,
                children: [
                    (0, i.jsx)(n, {
                        className: u.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(l.Text, {
                        className: u.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    o
                        ? (0, i.jsx)(l.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: u.requirementSuccess,
                              secondaryColor: r.Z.colors.WHITE.css
                          })
                        : s
                ]
            }),
            null != a &&
                (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: u.footnote,
                    variant: 'text-xs/normal',
                    children: a
                })
        ]
    });
}
