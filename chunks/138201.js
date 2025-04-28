t.d(n, {
    ZP: () => d,
    rT: () => c
}),
    t(953529);
var i = t(200651);
t(192379);
var o = t(120356),
    l = t.n(o),
    r = t(481060),
    s = t(754363);
function a(e) {
    let { title: n } = e;
    return (0, i.jsx)(r.Text, {
        variant: 'text-sm/semibold',
        color: 'header-secondary',
        children: n
    });
}
function c(e) {
    let { children: n, title: t, description: o, accessibilityRole: l = 'none', accessibilityLabel: c } = e;
    return (0, i.jsxs)('div', {
        className: s.tableRowGroup,
        children: [
            null != t && (0, i.jsx)(a, { title: t }),
            null != o &&
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: o
                }),
            (0, i.jsx)('div', {
                className: s.content,
                role: l,
                'aria-label': c,
                children: n
            })
        ]
    });
}
function d(e) {
    let { icon: n, title: t, titleVariant: o = 'text-md/semibold', description: a, descriptionVariant: c = 'text-xs/medium', iconClassName: d, color: u, buttonText: f, buttonColor: m = r.zxk.Colors.PRIMARY, buttonSize: p = r.zxk.Sizes.SMALL, buttonLook: h = r.zxk.Looks.FILLED, buttonDisabled: x, buttonIcon: I, buttonIconColor: v, buttonLoading: b, onButtonPress: j, listType: _ = 'icon', index: g } = e,
        Z =
            null != f
                ? (0, i.jsx)(r.zxk, {
                      className: s.button,
                      size: p,
                      color: m,
                      look: h,
                      disabled: x,
                      'aria-label': f,
                      onClick: j,
                      submitting: b,
                      children: (0, i.jsxs)('div', {
                          className: s.buttonContainer,
                          children: [
                              f,
                              null != I &&
                                  (0, i.jsx)(I, {
                                      color: null != v ? v : 'currentColor',
                                      className: s.buttonIcon
                                  })
                          ]
                      })
                  })
                : void 0;
    return (0, i.jsxs)('div', {
        className: s.row,
        children: [
            'numbered' === _ && null != g
                ? (0, i.jsx)(r.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: s.number,
                      children: g + 1
                  })
                : null != n &&
                  (0, i.jsx)('div', {
                      className: s.iconContainer,
                      children: (0, i.jsx)(n, {
                          color: null != u ? u : 'currentColor',
                          className: l()(s.icon, d)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: o,
                        color: 'header-primary',
                        children: t
                    }),
                    null != a &&
                        (0, i.jsx)(r.Text, {
                            variant: c,
                            color: 'text-secondary',
                            children: a
                        })
                ]
            }),
            null != Z && Z
        ]
    });
}
