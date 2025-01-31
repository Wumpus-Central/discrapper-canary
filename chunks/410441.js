n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(392681);
function l(e) {
    let { onClick: t, Icon: n, 'aria-label': l } = e,
        o = (0, r.dQu)(r.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        s = (0, i.jsx)(n, {
            color: o.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == t
        ? (0, i.jsx)('div', {
              className: a.container,
              'aria-label': l,
              children: s
          })
        : (0, i.jsx)(r.ua7, {
              text: l,
              children: (e) =>
                  (0, i.jsx)(r.P3F, {
                      className: a.container,
                      ...e,
                      onClick: t,
                      children: s
                  })
          });
}
