t.d(i, {
    Z: function () {
        return l;
    }
});
var n = t(200651);
t(192379);
var a = t(475413),
    r = t(955418),
    o = t(388032),
    s = t(591156);
function l(e) {
    let { user: i, hideMessageInput: t, hideExampleButton: l } = e;
    return t
        ? (0, n.jsx)('footer', {
              className: s.footer,
              children:
                  !l &&
                  (0, n.jsx)(a.tG, {
                      text: o.intl.string(o.t.hZkfwc),
                      fullWidth: !0
                  })
          })
        : (0, n.jsx)('footer', {
              inert: '',
              className: s.footer,
              children: (0, n.jsx)(r.Z, { user: i })
          });
}
