e.d(t, {
    ZP: () => d,
    rT: () => c
});
var i = e(200651);
e(192379);
var r = e(120356),
    o = e.n(r),
    l = e(481060),
    s = e(559701);
function a(n) {
    let { title: t } = n;
    return (0, i.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function c(n) {
    let { children: t, title: e, description: r, accessibilityRole: o = 'none', accessibilityLabel: c } = n;
    return (0, i.jsxs)('div', {
        className: s.tableRowGroup,
        children: [
            null != e && (0, i.jsx)(a, { title: e }),
            null != r &&
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: r
                }),
            (0, i.jsx)('div', {
                className: s.content,
                role: o,
                'aria-label': c,
                children: t
            })
        ]
    });
}
function d(n) {
    let { icon: t, title: e, titleVariant: r = 'text-md/semibold', description: a, descriptionVariant: c = 'text-xs/medium', iconClassName: d, color: x, buttonText: u, buttonColor: m = l.zxk.Colors.PRIMARY, buttonSize: f = l.zxk.Sizes.SMALL, buttonLook: h = l.zxk.Looks.FILLED, buttonDisabled: j, onButtonPress: _, listType: C = 'icon', index: N } = n,
        g =
            null != u
                ? (0, i.jsx)(l.zxk, {
                      className: s.button,
                      size: f,
                      color: m,
                      look: h,
                      disabled: j,
                      'aria-label': u,
                      onClick: _,
                      children: u
                  })
                : void 0;
    return (0, i.jsxs)('div', {
        className: s.row,
        children: [
            'numbered' === C && null != N
                ? (0, i.jsx)(l.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: s.number,
                      children: N + 1
                  })
                : null != t &&
                  (0, i.jsx)('div', {
                      className: s.iconContainer,
                      children: (0, i.jsx)(t, {
                          color: null != x ? x : 'currentColor',
                          className: o()(s.icon, d)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: r,
                        color: 'header-primary',
                        children: e
                    }),
                    null != a &&
                        (0, i.jsx)(l.Text, {
                            variant: c,
                            color: 'text-secondary',
                            children: a
                        })
                ]
            }),
            null != g && g
        ]
    });
}
