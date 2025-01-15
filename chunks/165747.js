t.d(n, {
    Z: function () {
        return r;
    }
});
var a = t(200651);
t(192379);
var i = t(475413),
    c = t(955418),
    o = t(388032),
    s = t(977011);
function r(e) {
    let { user: n, hideMessageInput: t, hideExampleButton: r } = e;
    return t
        ? (0, a.jsx)('footer', {
              className: s.footer,
              children:
                  !r &&
                  (0, a.jsx)(i.tG, {
                      text: o.intl.string(o.t.hZkfwc),
                      fullWidth: !0
                  })
          })
        : (0, a.jsx)('footer', {
              inert: '',
              className: s.footer,
              children: (0, a.jsx)(c.Z, { user: n })
          });
}
