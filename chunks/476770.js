t.d(n, {
    CA: function () {
        return u;
    },
    Ih: function () {
        return c;
    },
    PU: function () {
        return a;
    },
    hK: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var r = t(692547),
    l = t(481060),
    s = t(130948);
function o(e) {
    let { title: n, children: t } = e;
    return (0, i.jsxs)('div', {
        className: s.questionContainer,
        children: [
            (0, i.jsx)(l.Text, {
                className: s.questionTitle,
                variant: 'text-md/normal',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function u(e) {
    let { title: n, children: t } = e;
    return (0, i.jsxs)('div', {
        className: s.disabledQuestionContainer,
        children: [
            (0, i.jsx)(l.Text, {
                className: s.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: n
            }),
            t
        ]
    });
}
function c(e) {
    let { icon: n, text: t, meetsRequirement: o } = e;
    return (0, i.jsxs)('div', {
        className: s.requirementContainer,
        children: [
            (0, i.jsx)(n, {
                className: s.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, i.jsx)(l.Text, {
                className: s.requirementText,
                variant: 'text-md/normal',
                children: t
            }),
            o
                ? (0, i.jsx)(l.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: s.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
                : (0, i.jsx)(l.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: s.requirementFailure,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
        ]
    });
}
function a(e) {
    let { icon: n, text: t, footnote: o, meetsRequirement: u, children: c } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: s.requirementContainer,
                children: [
                    (0, i.jsx)(n, {
                        className: s.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(l.Text, {
                        className: s.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    u
                        ? (0, i.jsx)(l.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.requirementSuccess,
                              secondaryColor: r.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != o &&
                (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: s.footnote,
                    variant: 'text-xs/normal',
                    children: o
                })
        ]
    });
}
