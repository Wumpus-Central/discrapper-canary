t.d(n, {
    Z: function () {
        return x;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(536442),
    s = t(142497),
    o = t(388032),
    c = t(142863),
    d = t(137707);
let u = () =>
    (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.GcZzp6)
            }),
            (0, l.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t['/NEGrK'])
            }),
            (0, l.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.eUbuHB)
            }),
            (0, l.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-xs/normal',
                className: c.inlineText,
                children: o.intl.string(o.t.sCAZeH)
            })
        ]
    });
function x(e) {
    let { onClick: n } = e;
    return (0, i.e7)([a.qc], () => !a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL))
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
                                  (0, l.jsx)(r.Heading, {
                                      variant: 'heading-md/semibold',
                                      children: o.intl.string(o.t.Sx8Ezs)
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: c.descriptionText,
                                      children: o.intl.string(o.t.JUzPho)
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      children: o.intl.format(o.t.Vh7rPz, { suggestionsHook: u })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: c.image,
                              children: (0, l.jsx)('img', {
                                  src: d,
                                  alt: o.intl.string(o.t['uIm/n5'])
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)('div', {
                      className: c.footer,
                      children: [
                          (0, l.jsx)(r.Button, {
                              onClick: n,
                              color: r.Button.Colors.PRIMARY,
                              size: r.Button.Sizes.SMALL,
                              className: c.button,
                              children: o.intl.string(o.t['X/3SyM'])
                          }),
                          (0, l.jsx)(r.Button, {
                              onClick: () => {
                                  s.Kw(a.v6.STAGE_CHANNEL_UPSELL);
                              },
                              color: r.Button.Colors.TRANSPARENT,
                              size: r.Button.Sizes.SMALL,
                              look: r.ButtonLooks.LINK,
                              children: o.intl.string(o.t['5E9SBw'])
                          })
                      ]
                  })
              ]
          });
}
