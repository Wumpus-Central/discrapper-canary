n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(704215),
    l = n(481060),
    a = n(243778),
    s = n(921944),
    c = n(388032),
    u = n(63791);
function d(e) {
    let { locked: t } = e,
        [n, d] = (0, a.US)(t ? [] : [o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && d(s.L.AUTO_DISMISS);
            };
    }, [t, d, n]),
    t || n !== o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, i.jsx)('div', {
              className: u.overlayBackgroundNux,
              children: (0, i.jsxs)('div', {
                  className: u.mainContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: u.mainTitleContainer,
                          children: [
                              (0, i.jsx)(l.X6q, {
                                  variant: 'heading-xl/medium',
                                  color: 'header-primary',
                                  children: c.NW.string(c.t.jzjJQk)
                              }),
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: c.NW.string(c.t['5dOfxc'])
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: u.widgetCalloutContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(l.qjv, {}),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.NW.string(c.t.S6VRyM)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(l.Dkj, {}),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.NW.string(c.t.xq8CKS)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(l.Odl, {}),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.NW.string(c.t.GwpRe3)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: u.widgetCallout,
                                  children: [
                                      (0, i.jsx)(l.KY1, {}),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/medium',
                                          color: 'interactive-normal',
                                          children: c.NW.string(c.t.VUoC5O)
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          });
}
