n.d(t, { U: () => d });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    s = n(481060),
    a = n(388032),
    o = n(309475);
let d = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, l.jsx)(s.ua7, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: a.intl.string(a.t['2MCxfX']),
              children: (e) =>
                  (0, l.jsxs)('div', {
                      className: i()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, l.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, l.jsx)(s.d3s, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/semibold',
                              children: a.intl.string(a.t['5b+JhY'])
                          })
                      ]
                  })
          })
        : (0, l.jsx)(s.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: a.intl.string(a.t['/bUsx8'])
          });
};
