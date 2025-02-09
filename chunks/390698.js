n.d(t, { U: () => d });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(388032),
    o = n(309475);
let d = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(a.ua7, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: s.intl.string(s.t['2MCxfX']),
              children: (e) =>
                  (0, r.jsxs)('div', {
                      className: i()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, r.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, r.jsx)(a.d3s, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-md/semibold',
                              children: s.intl.string(s.t['5b+JhY'])
                          })
                      ]
                  })
          })
        : (0, r.jsx)(a.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: s.intl.string(s.t['/bUsx8'])
          });
};
