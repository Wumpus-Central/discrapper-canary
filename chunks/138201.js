(n.d(e, {
    ZP: () => d,
    rT: () => _
}),
    n(953529));
var o = n(255367);
n(73800);
var i = n(120356),
    r = n.n(i),
    s = n(755721),
    l = n(481060),
    c = n(754363);
function a(t) {
    let { title: e } = t;
    return (0, o.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        color: 'header-secondary',
        children: e
    });
}
function _(t) {
    let { children: e, title: n, description: i, accessibilityRole: r = 'none', accessibilityLabel: s } = t;
    return (0, o.jsxs)('div', {
        className: c.tableRowGroup,
        children: [
            null != n && (0, o.jsx)(a, { title: n }),
            null != i &&
                (0, o.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: i
                }),
            (0, o.jsx)('div', {
                className: c.content,
                role: r,
                'aria-label': s,
                children: e
            })
        ]
    });
}
function d(t) {
    let { icon: e, title: n, titleVariant: i = 'text-md/semibold', description: a, descriptionVariant: _ = 'text-xs/medium', iconClassName: d, color: E, buttonText: u, buttonColor: I = s.zx.Colors.PRIMARY, buttonSize: N = s.zx.Sizes.SMALL, buttonLook: m = s.zx.Looks.FILLED, buttonDisabled: L, buttonIcon: T, buttonIconColor: S, buttonLoading: C, onButtonPress: A, listType: p = 'icon', index: R } = t,
        x =
            null != u
                ? (0, o.jsx)(s.zx, {
                      className: c.button,
                      size: N,
                      color: I,
                      look: m,
                      disabled: L,
                      'aria-label': u,
                      onClick: A,
                      submitting: C,
                      children: (0, o.jsxs)('div', {
                          className: c.buttonContainer,
                          children: [
                              u,
                              null != T &&
                                  (0, o.jsx)(T, {
                                      color: null != S ? S : 'currentColor',
                                      className: c.buttonIcon
                                  })
                          ]
                      })
                  })
                : void 0;
    return (0, o.jsxs)('div', {
        className: c.row,
        children: [
            'numbered' === p && null != R
                ? (0, o.jsx)(l.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: c.number,
                      children: R + 1
                  })
                : null != e &&
                  (0, o.jsx)('div', {
                      className: c.iconContainer,
                      children: (0, o.jsx)(e, {
                          color: null != E ? E : 'currentColor',
                          className: r()(c.icon, d)
                      })
                  }),
            (0, o.jsxs)('div', {
                className: c.textContainer,
                children: [
                    (0, o.jsx)(l.Text, {
                        variant: i,
                        color: 'header-primary',
                        children: n
                    }),
                    null != a &&
                        (0, o.jsx)(l.Text, {
                            variant: _,
                            color: 'text-secondary',
                            children: a
                        })
                ]
            }),
            null != x && x
        ]
    });
}
