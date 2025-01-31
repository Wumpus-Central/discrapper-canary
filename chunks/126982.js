n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(131388),
    s = n(409813),
    o = n(750143),
    l = n(457207),
    u = n(60314);
function c(e) {
    let { step: t, onClose: n } = e,
        c = (0, a.Z)(o.X);
    return t === s.h8.BENEFITS || t === s.h8.CONFIRM
        ? null
        : (0, i.jsxs)('div', {
              className: l.headerContainer,
              children: [
                  !c &&
                      (0, i.jsx)('div', {
                          className: l.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, i.jsx)('img', {
                              src: u,
                              alt: '',
                              className: l.headerImage
                          })
                      }),
                  (0, i.jsx)(r.olH, {
                      withCircleBackground: !0,
                      className: l.closeButton,
                      onClick: n
                  })
              ]
          });
}
