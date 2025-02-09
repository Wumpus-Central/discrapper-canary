n.d(t, { W: () => c });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(388032),
    s = n(461569),
    o = n(560580);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: d, dismissible: u = !0 } = e,
        h = l.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, i.jsxs)('div', {
        className: s.safetyBanner,
        children: [
            (0, i.jsxs)('div', {
                className: s.shieldAndHeading,
                children: [
                    (0, i.jsx)('img', {
                        className: s.safetyShieldIcon,
                        src: o,
                        alt: ''
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: t
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                children: n
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s.buttons,
                children:
                    null == d
                        ? void 0
                        : d.map((e, t) => {
                              var n;
                              return (0, i.jsx)(
                                  a.zxk,
                                  {
                                      size: null !== (n = e.size) && void 0 !== n ? n : a.zxk.Sizes.SMALL,
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
            u
                ? (0, i.jsx)(a.P3F, {
                      className: s.closeButton,
                      onClick: h,
                      role: 'button',
                      'aria-label': r.intl.string(r.t.WAI6xs),
                      children: (0, i.jsx)(a.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: s.closeButton
                      })
                  })
                : null
        ]
    });
}
