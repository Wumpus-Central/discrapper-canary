r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(131388),
    s = r(409813),
    l = r(750143),
    u = r(457207),
    c = r(60314);
function d(e) {
    let { step: n, onClose: r } = e,
        d = (0, o.Z)(l.X);
    return n === s.h8.BENEFITS || n === s.h8.CONFIRM
        ? null
        : (0, i.jsxs)('div', {
              className: u.headerContainer,
              children: [
                  !d &&
                      (0, i.jsx)('div', {
                          className: u.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, i.jsx)('img', {
                              src: c,
                              alt: '',
                              className: u.headerImage
                          })
                      }),
                  (0, i.jsx)(a.ModalCloseButton, {
                      withCircleBackground: !0,
                      className: u.closeButton,
                      onClick: r
                  })
              ]
          });
}
