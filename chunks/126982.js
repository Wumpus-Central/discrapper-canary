n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(131388),
    a = n(409813),
    s = n(750143),
    l = n(564237),
    c = n(60314);
function u(e) {
    let { step: t, onClose: n } = e,
        u = (0, o.Z)(s.X);
    return t === a.h8.BENEFITS || t === a.h8.CONFIRM
        ? null
        : (0, r.jsxs)('div', {
              className: l.headerContainer,
              children: [
                  !u &&
                      (0, r.jsx)('div', {
                          className: l.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, r.jsx)('img', {
                              src: c,
                              alt: '',
                              className: l.headerImage
                          })
                      }),
                  (0, r.jsx)(i.olH, {
                      withCircleBackground: !0,
                      className: l.closeButton,
                      onClick: n
                  })
              ]
          });
}
