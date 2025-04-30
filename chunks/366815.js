n.d(t, { Z: () => m });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    a = n(536442),
    s = n(142497),
    o = n(388032),
    c = n(482945),
    u = n(137707);
let d = () =>
    (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.GcZzp6)
            }),
            (0, l.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t['/NEGrK'])
            }),
            (0, l.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.eUbuHB)
            }),
            (0, l.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.sCAZeH)
            })
        ]
    });
function m(e) {
    let { onClick: t } = e;
    return (0, r.e7)([a.qc], () => !a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, l.jsxs)('div', {
              className: c.container,
              children: [
                  (0, l.jsxs)('div', {
                      className: c.content,
                      children: [
                          (0, l.jsxs)('div', {
                              className: c.textContainer,
                              children: [
                                  (0, l.jsx)(i.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: o.intl.string(o.t.Sx8Ezs)
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: c.descriptionText,
                                      children: o.intl.string(o.t.JUzPho)
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      children: o.intl.format(o.t.Vh7rPz, { suggestionsHook: d })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: c.image,
                              children: (0, l.jsx)('img', {
                                  src: u,
                                  alt: o.intl.string(o.t['uIm/n5'])
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)('div', {
                      className: c.footer,
                      children: [
                          (0, l.jsx)(i.zxk, {
                              onClick: t,
                              color: i.zxk.Colors.PRIMARY,
                              size: i.zxk.Sizes.SMALL,
                              className: c.button,
                              children: o.intl.string(o.t['X/3SyM'])
                          }),
                          (0, l.jsx)(i.zxk, {
                              onClick: () => {
                                  s.Kw(a.v6.STAGE_CHANNEL_UPSELL);
                              },
                              color: i.zxk.Colors.TRANSPARENT,
                              size: i.zxk.Sizes.SMALL,
                              look: i.iLD.LINK,
                              children: o.intl.string(o.t['5E9SBw'])
                          })
                      ]
                  })
              ]
          });
}
