n.d(t, { U: () => d });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    a = n(388032),
    o = n(994238);
let d = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(s.ua7, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: a.intl.string(a.t['2MCxfX']),
              children: (e) =>
                  (0, r.jsxs)('div', {
                      className: i()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, r.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, r.jsx)(s.d3s, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: 'text-md/semibold',
                              children: a.intl.string(a.t['5b+JhY'])
                          })
                      ]
                  })
          })
        : (0, r.jsx)(s.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: a.intl.string(a.t['/bUsx8'])
          });
};
