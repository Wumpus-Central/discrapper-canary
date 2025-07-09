(n.d(t, { W: () => u }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(755721),
    a = n(481060),
    o = n(388032),
    s = n(392819),
    c = n(560580);
function u(e) {
    let { header: t, description: n, onDismiss: u, buttons: d, dismissible: p = !0 } = e,
        h = i.useCallback(() => {
            null == u || u();
        }, [u]);
    return (0, r.jsxs)('div', {
        className: s.safetyBanner,
        children: [
            (0, r.jsxs)('div', {
                className: s.shieldAndHeading,
                children: [
                    (0, r.jsx)('img', {
                        className: s.safetyShieldIcon,
                        src: c,
                        alt: ''
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: t
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                children: n
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s.buttons,
                children:
                    null == d
                        ? void 0
                        : d.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  l.zx,
                                  {
                                      size: null != (n = e.size) ? n : l.zx.Sizes.SMALL,
                                      color: e.color,
                                      'aria-label': e.text,
                                      onClick: e.onclick,
                                      className: s.ctaButton,
                                      children: e.text
                                  },
                                  t
                              );
                          })
            }),
            p
                ? (0, r.jsx)(a.P3F, {
                      className: s.closeButton,
                      onClick: h,
                      role: 'button',
                      'aria-label': o.intl.string(o.t.WAI6xs),
                      children: (0, r.jsx)(a.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: s.closeButton
                      })
                  })
                : null
        ]
    });
}
