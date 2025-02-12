n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(873546),
    o = n(481060),
    l = n(388032),
    u = n(657775),
    c = (function (e) {
        return (e.DEFAULT = ''), (e.BOLD = 'Bold'), (e.SOLID = 'Solid'), e;
    })(c || {});
function d(e) {
    let { closeAction: t, variant: n = '', keybind: r, className: c } = e;
    return (0, i.jsxs)('div', {
        className: a()(u.container, c),
        children: [
            (0, i.jsx)(o.P3F, {
                className: a()(u.closeButton, {
                    [u.closeButtonBold]: 'Bold' === n,
                    [u.closeButtonSolid]: 'Solid' === n
                }),
                onClick: t,
                'aria-label': l.intl.string(l.t.cpT0Cg),
                children:
                    'Solid' === n
                        ? (0, i.jsx)(o.k$p, {
                              size: 'md',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
                        : (0, i.jsx)(o.Dio, {
                              size: 'sm',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
            }),
            s.tq
                ? null
                : (0, i.jsx)('div', {
                      className: a()(u.keybind),
                      'aria-hidden': !0,
                      children: r
                  })
        ]
    });
}
d.Variants = c;
