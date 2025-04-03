n.d(t, { W: () => c }), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(388032),
    a = n(392819),
    s = n(560580);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: u, dismissible: d = !0 } = e,
        p = i.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, r.jsxs)('div', {
        className: a.safetyBanner,
        children: [
            (0, r.jsxs)('div', {
                className: a.shieldAndHeading,
                children: [
                    (0, r.jsx)('img', {
                        className: a.safetyShieldIcon,
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
                className: a.buttons,
                children:
                    null == u
                        ? void 0
                        : u.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  l.zxk,
                                  {
                                      size: null != (n = e.size) ? n : l.zxk.Sizes.SMALL,
                                      color: e.color,
                                      'aria-label': e.text,
                                      onClick: e.onclick,
                                      className: a.ctaButton,
                                      children: e.text
                                  },
                                  t
                              );
                          })
            }),
            d
                ? (0, r.jsx)(l.P3F, {
                      className: a.closeButton,
                      onClick: p,
                      role: 'button',
                      'aria-label': o.NW.string(o.t.WAI6xs),
                      children: (0, r.jsx)(l.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: a.closeButton
                      })
                  })
                : null
        ]
    });
}
