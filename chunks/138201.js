r.d(n, {
    ZP: function () {
        return d;
    },
    rT: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(829820);
function u(e) {
    let { title: n } = e;
    return (0, i.jsx)(s.Text, {
        variant: 'text-sm/semibold',
        color: 'header-secondary',
        children: n
    });
}
function c(e) {
    let { children: n, title: r, description: a, accessibilityRole: o = 'none', accessibilityLabel: c } = e;
    return (0, i.jsxs)('div', {
        className: l.tableRowGroup,
        children: [
            null != r && (0, i.jsx)(u, { title: r }),
            null != a &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: a
                }),
            (0, i.jsx)('div', {
                className: l.content,
                role: o,
                'aria-label': c,
                children: n
            })
        ]
    });
}
function d(e) {
    let { icon: n, title: r, titleVariant: a = 'text-md/semibold', description: u, descriptionVariant: c = 'text-xs/medium', iconClassName: d, color: f, buttonText: p, buttonColor: h = s.Button.Colors.PRIMARY, buttonSize: _ = s.Button.Sizes.SMALL, buttonLook: m = s.Button.Looks.FILLED, buttonDisabled: g, onButtonPress: E, listType: v = 'icon', index: y } = e,
        b =
            null != p
                ? (0, i.jsx)(s.Button, {
                      className: l.button,
                      size: _,
                      color: h,
                      look: m,
                      disabled: g,
                      'aria-label': p,
                      onClick: E,
                      children: p
                  })
                : void 0;
    return (0, i.jsxs)('div', {
        className: l.row,
        children: [
            'numbered' === v && null != y
                ? (0, i.jsx)(s.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: l.number,
                      children: y + 1
                  })
                : null != n &&
                  (0, i.jsx)('div', {
                      className: l.iconContainer,
                      children: (0, i.jsx)(n, {
                          color: null != f ? f : 'currentColor',
                          className: o()(l.icon, d)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: a,
                        color: 'header-primary',
                        children: r
                    }),
                    null != u &&
                        (0, i.jsx)(s.Text, {
                            variant: c,
                            color: 'text-secondary',
                            children: u
                        })
                ]
            }),
            null != b && b
        ]
    });
}
