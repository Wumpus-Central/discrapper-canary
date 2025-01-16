n.d(t, {
    W: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(388032),
    s = n(985838),
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
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: t
                            }),
                            (0, i.jsx)(r.Text, {
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
                                  r.Button,
                                  {
                                      size: null !== (n = e.size) && void 0 !== n ? n : r.Button.Sizes.SMALL,
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
                ? (0, i.jsx)(r.Clickable, {
                      className: s.closeButton,
                      onClick: h,
                      role: 'button',
                      'aria-label': a.intl.string(a.t.WAI6xs),
                      children: (0, i.jsx)(r.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s.closeButton
                      })
                  })
                : null
        ]
    });
}
