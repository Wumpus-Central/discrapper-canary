n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(111304);
function o(e) {
    let { onClick: t, Icon: n, 'aria-label': o } = e,
        l = (0, a.dQu)(a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        s = (0, r.jsx)(n, {
            color: l.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == t
        ? (0, r.jsx)('div', {
              className: i.container,
              'aria-label': o,
              children: s
          })
        : (0, r.jsx)(a.ua7, {
              text: o,
              children: (e) =>
                  (0, r.jsx)(a.P3F, {
                      className: i.container,
                      ...e,
                      onClick: t,
                      children: s
                  })
          });
}
