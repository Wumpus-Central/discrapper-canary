n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(131388),
    c = n(607070),
    u = n(70097),
    d = n(409813),
    f = n(750143),
    _ = n(177116),
    p = n(315853),
    h = n(420602),
    m = n(197099);
let g = (e) => {
    let { className: t } = e;
    return (0, a.e7)([c.Z], () => c.Z.useReducedMotion)
        ? (0, r.jsx)('img', {
              src: h.Z,
              className: t,
              alt: ''
          })
        : (0, r.jsxs)(u.Z, {
              className: t,
              autoPlay: !0,
              loop: !0,
              children: [
                  (0, r.jsx)('source', {
                      src: m.Z,
                      type: 'video/webm'
                  }),
                  (0, r.jsx)('img', {
                      src: h.Z,
                      className: t,
                      alt: ''
                  })
              ]
          });
};
function E(e) {
    let { step: t, onClose: n, isOrbCheckout: i } = e,
        a = (0, l.Z)(f.X);
    return t === d.h8.BENEFITS || t === d.h8.CONFIRM
        ? null
        : (0, r.jsxs)('div', {
              className: _.headerContainer,
              children: [
                  !a &&
                      (0, r.jsx)('div', {
                          className: _.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: i
                              ? (0, r.jsx)(g, { className: o()(_.headerImage, _.orbCheckoutHeaderVideo) })
                              : (0, r.jsx)('img', {
                                    src: p,
                                    alt: '',
                                    className: _.headerImage
                                })
                      }),
                  (0, r.jsx)(s.olH, {
                      withCircleBackground: !0,
                      className: _.closeButton,
                      onClick: n
                  })
              ]
          });
}
