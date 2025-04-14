n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
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
                children: o.NW.string(o.t.GcZzp6)
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.NW.string(o.t['/NEGrK'])
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.NW.string(o.t.eUbuHB)
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.NW.string(o.t.sCAZeH)
            })
        ]
    });
function m(e) {
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
                                      children: o.NW.string(o.t.Sx8Ezs)
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: c.descriptionText,
                                      children: o.NW.string(o.t.JUzPho)
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      children: o.NW.format(o.t.Vh7rPz, { suggestionsHook: d })
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: c.image,
                              children: (0, r.jsx)('img', {
                                  src: u,
                                  alt: o.NW.string(o.t['uIm/n5'])
                              })
                          })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: c.footer,
                      children: [
                          (0, r.jsx)(i.zxk, {
                              onClick: t,
                              color: i.zxk.Colors.PRIMARY,
                              size: i.zxk.Sizes.SMALL,
                              className: c.button,
                              children: o.NW.string(o.t['X/3SyM'])
                          }),
                          (0, r.jsx)(i.zxk, {
                              onClick: () => {
                                  s.Kw(a.v6.STAGE_CHANNEL_UPSELL);
                              },
                              color: i.zxk.Colors.TRANSPARENT,
                              size: i.zxk.Sizes.SMALL,
                              look: i.iLD.LINK,
                              children: o.NW.string(o.t['5E9SBw'])
                          })
                      ]
                  })
              ]
          });
}
