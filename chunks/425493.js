n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(873546),
    s = n(481060),
    l = n(388032),
    c = n(594619),
    u = (function (e) {
        return (e.DEFAULT = ''), (e.BOLD = 'Bold'), (e.SOLID = 'Solid'), e;
    })(u || {});
function d(e) {
    let { closeAction: t, variant: n = '', keybind: i, className: u } = e;
    return (0, r.jsxs)('div', {
        className: a()(c.container, u),
        children: [
            (0, r.jsx)(s.P3F, {
                className: a()(c.closeButton, {
                    [c.closeButtonBold]: 'Bold' === n,
                    [c.closeButtonSolid]: 'Solid' === n
                }),
                onClick: t,
                'aria-label': l.NW.string(l.t.cpT0Cg),
                children:
                    'Solid' === n
                        ? (0, r.jsx)(s.k$p, {
                              size: 'md',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
                        : (0, r.jsx)(s.Dio, {
                              size: 'sm',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
            }),
            o.tq
                ? null
                : (0, r.jsx)('div', {
                      className: c.keybind,
                      'aria-hidden': !0,
                      children: i
                  })
        ]
    });
}
d.Variants = u;
