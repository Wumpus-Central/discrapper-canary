r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(829820);
function u(e) {
    let { icon: n, title: r, titleVariant: a = 'text-md/semibold', description: u, descriptionVariant: c = 'text-xs/medium', iconClassName: d, color: f, buttonText: _, buttonColor: h = o.Button.Colors.PRIMARY, buttonSize: p = o.Button.Sizes.SMALL, buttonLook: m = o.Button.Looks.FILLED, buttonDisabled: g, onButtonPress: E, listType: v = 'icon', index: I } = e,
        T =
            null != _
                ? (0, i.jsx)(o.Button, {
                      className: l.button,
                      size: p,
                      color: h,
                      look: m,
                      disabled: g,
                      'aria-label': _,
                      onClick: E,
                      children: _
                  })
                : void 0;
    return (0, i.jsxs)('div', {
        className: l.row,
        children: [
            'numbered' === v && null != I
                ? (0, i.jsx)(o.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: l.number,
                      children: I + 1
                  })
                : null != n &&
                  (0, i.jsx)('div', {
                      className: l.iconContainer,
                      children: (0, i.jsx)(n, {
                          color: null != f ? f : 'currentColor',
                          className: s()(l.icon, d)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: a,
                        color: 'header-primary',
                        children: r
                    }),
                    null != u &&
                        (0, i.jsx)(o.Text, {
                            variant: c,
                            color: 'text-secondary',
                            children: u
                        })
                ]
            }),
            null != T && T
        ]
    });
}
