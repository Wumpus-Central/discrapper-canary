n.d(t, { Z: () => m });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(755721),
    a = n(481060),
    s = n(536442),
    o = n(142497),
    c = n(388032),
    u = n(482945),
    d = n(137707);
let x = () =>
    (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: u.inlineText,
                children: c.intl.string(c.t.GcZzp6)
            }),
            (0, l.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: u.inlineText,
                children: c.intl.string(c.t['/NEGrK'])
            }),
            (0, l.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: u.inlineText,
                children: c.intl.string(c.t.eUbuHB)
            }),
            (0, l.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: u.inlineText,
                children: c.intl.string(c.t.sCAZeH)
            })
        ]
    });
function m(e) {
    let { onClick: t } = e;
    return (0, r.e7)([s.qc], () => !s.qc.hasHotspot(s.v6.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, l.jsxs)('div', {
              className: u.container,
              children: [
                  (0, l.jsxs)('div', {
                      className: u.content,
                      children: [
                          (0, l.jsxs)('div', {
                              className: u.textContainer,
                              children: [
                                  (0, l.jsx)(a.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: c.intl.string(c.t.Sx8Ezs)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: u.descriptionText,
                                      children: c.intl.string(c.t.JUzPho)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      children: c.intl.format(c.t.Vh7rPz, { suggestionsHook: x })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: u.image,
                              children: (0, l.jsx)('img', {
                                  src: d,
                                  alt: c.intl.string(c.t['uIm/n5'])
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)('div', {
                      className: u.footer,
                      children: [
                          (0, l.jsx)(i.zx, {
                              onClick: t,
                              color: i.zx.Colors.PRIMARY,
                              size: i.zx.Sizes.SMALL,
                              className: u.button,
                              children: c.intl.string(c.t['X/3SyM'])
                          }),
                          (0, l.jsx)(i.zx, {
                              onClick: () => {
                                  o.Kw(s.v6.STAGE_CHANNEL_UPSELL);
                              },
                              color: i.zx.Colors.TRANSPARENT,
                              size: i.zx.Sizes.SMALL,
                              look: i.iL.LINK,
                              children: c.intl.string(c.t['5E9SBw'])
                          })
                      ]
                  })
              ]
          });
}
