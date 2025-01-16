r.d(n, {
    Z: function () {
        return f;
    }
});
var i,
    a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(873546),
    u = r(481060),
    c = r(388032),
    d = r(121139);
function f(e) {
    let { closeAction: n, variant: r = '', keybind: i, className: s } = e;
    return (0, a.jsxs)('div', {
        className: o()(d.container, s),
        children: [
            (0, a.jsx)(u.Clickable, {
                className: o()(d.closeButton, {
                    [d.closeButtonBold]: 'Bold' === r,
                    [d.closeButtonSolid]: 'Solid' === r
                }),
                onClick: n,
                'aria-label': c.intl.string(c.t.cpT0Cg),
                children:
                    'Solid' === r
                        ? (0, a.jsx)(u.CircleXIcon, {
                              size: 'md',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
                        : (0, a.jsx)(u.XSmallIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
            }),
            l.tq
                ? null
                : (0, a.jsx)('div', {
                      className: o()(d.keybind),
                      'aria-hidden': !0,
                      children: i
                  })
        ]
    });
}
!(function (e) {
    (e.DEFAULT = ''), (e.BOLD = 'Bold'), (e.SOLID = 'Solid');
})(i || (i = {})),
    (f.Variants = i);
