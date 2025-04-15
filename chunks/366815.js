n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    i = n(536442),
    s = n(142497),
    o = n(388032),
    c = n(482945),
    u = n(137707);
let d = () =>
    (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.NW.string(o.t.GcZzp6)
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.NW.string(o.t['/NEGrK'])
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.NW.string(o.t.eUbuHB)
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.NW.string(o.t.sCAZeH)
            })
        ]
    });
function m(e) {
    let { onClick: t } = e;
    return (0, l.e7)([i.qc], () => !i.qc.hasHotspot(i.v6.STAGE_CHANNEL_UPSELL))
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
                                  (0, r.jsx)(a.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: o.NW.string(o.t.Sx8Ezs)
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: c.descriptionText,
                                      children: o.NW.string(o.t.JUzPho)
                                  }),
                                  (0, r.jsx)(a.Text, {
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
                          (0, r.jsx)(a.zxk, {
                              onClick: t,
                              color: a.zxk.Colors.PRIMARY,
                              size: a.zxk.Sizes.SMALL,
                              className: c.button,
                              children: o.NW.string(o.t['X/3SyM'])
                          }),
                          (0, r.jsx)(a.zxk, {
                              onClick: () => {
                                  s.Kw(i.v6.STAGE_CHANNEL_UPSELL);
                              },
                              color: a.zxk.Colors.TRANSPARENT,
                              size: a.zxk.Sizes.SMALL,
                              look: a.iLD.LINK,
                              children: o.NW.string(o.t['5E9SBw'])
                          })
                      ]
                  })
              ]
          });
}
