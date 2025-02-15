n.d(t, { U: () => d });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    s = n(388032),
    o = n(375556);
let d = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, l.jsx)(a.ua7, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: s.intl.string(s.t['2MCxfX']),
              children: (e) =>
                  (0, l.jsxs)('div', {
                      className: i()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, l.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, l.jsx)(a.d3s, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, l.jsx)(a.Text, {
                              variant: 'text-md/semibold',
                              children: s.intl.string(s.t['5b+JhY'])
                          })
                      ]
                  })
          })
        : (0, l.jsx)(a.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: s.intl.string(s.t['/bUsx8'])
          });
};
