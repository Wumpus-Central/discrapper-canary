n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(704215),
    o = n(481060),
    a = n(243778),
    s = n(921944),
    d = n(388032),
    u = n(87296);
function c(e) {
    let { locked: t } = e,
        [n, c] = (0, a.US)(t ? [] : [r.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (l.useEffect(() => {
        if (!t && n === r.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === r.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && c(s.L.AUTO_DISMISS);
            };
    }, [t, c, n]),
    t || n !== r.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, i.jsx)('div', {
              className: u.overlayBackgroundNux,
              children: (0, i.jsxs)('div', {
                  className: u.mainContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: u.mainTitleContainer,
                          children: [
                              (0, i.jsx)(o.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: d.intl.string(d.t.jzjJQk)
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: d.intl.string(d.t['5dOfxc'])
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: u.widgetCalloutContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.qjv, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: d.intl.string(d.t.S6VRyM)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Dkj, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: d.intl.string(d.t.xq8CKS)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Odl, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: d.intl.string(d.t.GwpRe3)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.KY1, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: d.intl.string(d.t.VUoC5O)
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          });
}
