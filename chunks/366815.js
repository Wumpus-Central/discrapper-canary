l.d(n, { Z: () => x });
var t = l(200651);
l(192379);
var i = l(442837),
    a = l(481060),
    r = l(536442),
    s = l(142497),
    o = l(388032),
    d = l(213665),
    c = l(137707);
let u = () =>
    (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: d.inlineText,
                children: o.intl.string(o.t.GcZzp6)
            }),
            (0, t.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: d.inlineText,
                children: o.intl.string(o.t['/NEGrK'])
            }),
            (0, t.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: d.inlineText,
                children: o.intl.string(o.t.eUbuHB)
            }),
            (0, t.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: d.inlineText,
                children: o.intl.string(o.t.sCAZeH)
            })
        ]
    });
function x(e) {
    let { onClick: n } = e;
    return (0, i.e7)([r.qc], () => !r.qc.hasHotspot(r.v6.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, t.jsxs)('div', {
              className: d.container,
              children: [
                  (0, t.jsxs)('div', {
                      className: d.content,
                      children: [
                          (0, t.jsxs)('div', {
                              className: d.textContainer,
                              children: [
                                  (0, t.jsx)(a.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: o.intl.string(o.t.Sx8Ezs)
                                  }),
                                  (0, t.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: d.descriptionText,
                                      children: o.intl.string(o.t.JUzPho)
                                  }),
                                  (0, t.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      children: o.intl.format(o.t.Vh7rPz, { suggestionsHook: u })
                                  })
                              ]
                          }),
                          (0, t.jsx)('div', {
                              className: d.image,
                              children: (0, t.jsx)('img', {
                                  src: c,
                                  alt: o.intl.string(o.t['uIm/n5'])
                              })
                          })
                      ]
                  }),
                  (0, t.jsxs)('div', {
                      className: d.footer,
                      children: [
                          (0, t.jsx)(a.zxk, {
                              onClick: n,
                              color: a.zxk.Colors.PRIMARY,
                              size: a.zxk.Sizes.SMALL,
                              className: d.button,
                              children: o.intl.string(o.t['X/3SyM'])
                          }),
                          (0, t.jsx)(a.zxk, {
                              onClick: () => {
                                  s.Kw(r.v6.STAGE_CHANNEL_UPSELL);
                              },
                              color: a.zxk.Colors.TRANSPARENT,
                              size: a.zxk.Sizes.SMALL,
                              look: a.iLD.LINK,
                              children: o.intl.string(o.t['5E9SBw'])
                          })
                      ]
                  })
              ]
          });
}
