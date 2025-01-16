n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(392681);
function l(e) {
    let { onClick: t, Icon: n, 'aria-label': l } = e,
        o = (0, i.useToken)(i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        s = (0, r.jsx)(n, {
            color: o.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == t
        ? (0, r.jsx)('div', {
              className: a.container,
              'aria-label': l,
              children: s
          })
        : (0, r.jsx)(i.Tooltip, {
              text: l,
              children: (e) =>
                  (0, r.jsx)(i.Clickable, {
                      className: a.container,
                      ...e,
                      onClick: t,
                      children: s
                  })
          });
}
