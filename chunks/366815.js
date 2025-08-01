n.d(t, { Z: () => x });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    a = n(536442),
    s = n(142497),
    o = n(388032),
    c = n(482945),
    u = n(137707);
let d = () =>
    (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.GcZzp6)
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t['/NEGrK'])
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.eUbuHB)
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.sCAZeH)
            })
        ]
    });
function x(e) {
    let { onClick: t } = e;
    return (0, l.e7)([a.qc], () => !a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, r.jsxs)('div', {
              className: c.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: c.content,
                      children: [
                          (0, r.jsxs)('div', {
                              className: c.textContainer,
                              children: [
                                  (0, r.jsx)(i.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: o.intl.string(o.t.Sx8Ezs)
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: c.descriptionText,
                                      children: o.intl.string(o.t.JUzPho)
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      children: o.intl.format(o.t.Vh7rPz, { suggestionsHook: d })
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: c.image,
                              children: (0, r.jsx)('img', {
                                  src: u,
                                  alt: o.intl.string(o.t['uIm/n5'])
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: c.footer,
                      children: (0, r.jsxs)(i.hE2, {
                          direction: 'horizontal',
                          size: 'sm',
                          children: [
                              (0, r.jsx)(i.zxk, {
                                  onClick: t,
                                  variant: 'secondary',
                                  text: o.intl.string(o.t['X/3SyM'])
                              }),
                              (0, r.jsx)('div', {
                                  className: c.textButtonWrapper,
                                  children: (0, r.jsx)(i.Avr, {
                                      onClick: () => {
                                          s.Kw(a.v6.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: 'secondary',
                                      textVariant: 'text-sm/medium',
                                      text: o.intl.string(o.t['5E9SBw'])
                                  })
                              })
                          ]
                      })
                  })
              ]
          });
}
