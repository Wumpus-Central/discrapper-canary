t.d(n, {
    Ih: function () {
        return s;
    },
    PU: function () {
        return a;
    },
    hK: function () {
        return o;
    }
});
var r = t(200651);
t(192379);
var i = t(692547),
    l = t(481060),
    u = t(933078);
function o(e) {
    let { title: n, children: t } = e;
    return (0, r.jsxs)('div', {
        className: u.questionContainer,
        children: [
            (0, r.jsx)(l.Text, {
                className: u.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function s(e) {
    let { icon: n, text: t, meetsRequirement: o } = e;
    return (0, r.jsxs)('div', {
        className: u.requirementContainer,
        children: [
            (0, r.jsx)(n, {
                className: u.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(l.Text, {
                className: u.requirementText,
                variant: 'text-md/normal',
                children: t
            }),
            o
                ? (0, r.jsx)(l.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: u.requirementSuccess,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(l.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: u.requirementFailure,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
        ]
    });
}
function a(e) {
    let { icon: n, text: t, footnote: o, meetsRequirement: s, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: u.requirementContainer,
                children: [
                    (0, r.jsx)(n, {
                        className: u.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(l.Text, {
                        className: u.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    s
                        ? (0, r.jsx)(l.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: u.requirementSuccess,
                              secondaryColor: i.Z.colors.WHITE.css
                          })
                        : a
                ]
            }),
            null != o &&
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: u.footnote,
                    variant: 'text-xs/normal',
                    children: o
                })
        ]
    });
}
