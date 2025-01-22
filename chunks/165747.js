r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(475413),
    o = r(955418),
    s = r(388032),
    l = r(591156);
function u(e) {
    let { user: n, hideMessageInput: r, hideExampleButton: u } = e;
    return r
        ? (0, i.jsx)('footer', {
              className: l.footer,
              children:
                  !u &&
                  (0, i.jsx)(a.tG, {
                      text: s.intl.string(s.t.hZkfwc),
                      fullWidth: !0
                  })
          })
        : (0, i.jsx)('footer', {
              inert: '',
              className: l.footer,
              children: (0, i.jsx)(o.Z, { user: n })
          });
}
