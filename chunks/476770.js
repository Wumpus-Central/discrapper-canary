t.d(n, {
    CA: function () {
        return c;
    },
    Ih: function () {
        return d;
    },
    PU: function () {
        return f;
    },
    hK: function () {
        return a;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    s = t(692547),
    o = t(481060),
    u = t(130948);
function a(e) {
    let { title: n, children: t } = e;
    return (0, i.jsxs)('div', {
        className: u.questionContainer,
        children: [
            (0, i.jsx)(o.Text, {
                className: u.questionTitle,
                variant: 'text-md/normal',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function c(e) {
    let { title: n, children: t } = e;
    return (0, i.jsxs)('div', {
        className: u.disabledQuestionContainer,
        children: [
            (0, i.jsx)(o.Text, {
                className: u.questionTitle,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: n
            }),
            t
        ]
    });
}
function d(e) {
    let { icon: n, text: t, meetsRequirement: r } = e;
    return (0, i.jsxs)('div', {
        className: u.requirementContainer,
        children: [
            (0, i.jsx)(n, {
                className: u.requirementIcon,
                height: 16,
                width: 16,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                className: u.requirementText,
                variant: 'text-sm/medium',
                children: t
            }),
            r
                ? (0, i.jsx)(o.CircleCheckIcon, {
                      size: 'sm',
                      color: 'currentColor',
                      className: u.requirementSuccess,
                      secondaryColor: s.Z.colors.WHITE.css
                  })
                : (0, i.jsx)(o.CircleXIcon, {
                      size: 'sm',
                      color: 'currentColor',
                      className: u.requirementFailure,
                      secondaryColor: s.Z.colors.WHITE.css
                  })
        ]
    });
}
function f(e) {
    let { icon: n, text: t, footnote: r, meetsRequirement: a, children: c, className: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(u.requirementContainer, d),
                children: [
                    (0, i.jsx)(n, {
                        className: u.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(o.Text, {
                        className: u.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    a
                        ? (0, i.jsx)(o.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: u.requirementSuccess,
                              secondaryColor: s.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != r &&
                (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: u.footnote,
                    variant: 'text-xs/normal',
                    children: r
                })
        ]
    });
}
