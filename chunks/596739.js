(n.d(t, { W: () => c }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(388032),
    o = n(392819),
    s = n(560580);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: u, dismissible: d = !0 } = e,
        p = i.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, r.jsxs)('div', {
        className: o.safetyBanner,
        children: [
            (0, r.jsxs)('div', {
                className: o.shieldAndHeading,
                children: [
                    (0, r.jsx)('img', {
                        className: o.safetyShieldIcon,
                        src: s,
                        alt: ''
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: t
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                children: n
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: o.buttons,
                children:
                    null == u
                        ? void 0
                        : u.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  l.zxk,
                                  {
                                      text: e.text,
                                      variant: null != (n = e.variant) ? n : 'secondary',
                                      onClick: e.onClick,
                                      size: 'sm'
                                  },
                                  t
                              );
                          })
            }),
            d
                ? (0, r.jsx)(l.P3F, {
                      className: o.closeButton,
                      onClick: p,
                      role: 'button',
                      'aria-label': a.intl.string(a.t.WAI6xs),
                      children: (0, r.jsx)(l.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: o.closeButton
                      })
                  })
                : null
        ]
    });
}
