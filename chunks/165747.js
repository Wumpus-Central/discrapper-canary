n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(475413),
    a = n(955418),
    s = n(388032),
    o = n(593401);
function l(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: l } = e;
    return n
        ? (0, i.jsx)('footer', {
              className: o.footer,
              children:
                  !l &&
                  (0, i.jsx)(r.tG, {
                      text: s.intl.string(s.t.hZkfwc),
                      fullWidth: !0
                  })
          })
        : (0, i.jsx)('footer', {
              inert: '',
              className: o.footer,
              children: (0, i.jsx)(a.Z, { user: t })
          });
}
