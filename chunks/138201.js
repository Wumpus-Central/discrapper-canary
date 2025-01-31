n.d(t, {
    ZP: () => c,
    rT: () => u
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(829820);
function l(e) {
    let { title: t } = e;
    return (0, i.jsx)(s.Text, {
        variant: 'text-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function u(e) {
    let { children: t, title: n, description: r, accessibilityRole: a = 'none', accessibilityLabel: u } = e;
    return (0, i.jsxs)('div', {
        className: o.tableRowGroup,
        children: [
            null != n && (0, i.jsx)(l, { title: n }),
            null != r &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: r
                }),
            (0, i.jsx)('div', {
                className: o.content,
                role: a,
                'aria-label': u,
                children: t
            })
        ]
    });
}
function c(e) {
    let { icon: t, title: n, titleVariant: r = 'text-md/semibold', description: l, descriptionVariant: u = 'text-xs/medium', iconClassName: c, color: d, buttonText: f, buttonColor: _ = s.zxk.Colors.PRIMARY, buttonSize: p = s.zxk.Sizes.SMALL, buttonLook: h = s.zxk.Looks.FILLED, buttonDisabled: m, onButtonPress: g, listType: E = 'icon', index: v } = e,
        y =
            null != f
                ? (0, i.jsx)(s.zxk, {
                      className: o.button,
                      size: p,
                      color: _,
                      look: h,
                      disabled: m,
                      'aria-label': f,
                      onClick: g,
                      children: f
                  })
                : void 0;
    return (0, i.jsxs)('div', {
        className: o.row,
        children: [
            'numbered' === E && null != v
                ? (0, i.jsx)(s.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: o.number,
                      children: v + 1
                  })
                : null != t &&
                  (0, i.jsx)('div', {
                      className: o.iconContainer,
                      children: (0, i.jsx)(t, {
                          color: null != d ? d : 'currentColor',
                          className: a()(o.icon, c)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: r,
                        color: 'header-primary',
                        children: n
                    }),
                    null != l &&
                        (0, i.jsx)(s.Text, {
                            variant: u,
                            color: 'text-secondary',
                            children: l
                        })
                ]
            }),
            null != y && y
        ]
    });
}
