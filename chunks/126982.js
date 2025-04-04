n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(131388),
    s = n(607070),
    l = n(70097),
    c = n(409813),
    u = n(750143),
    d = n(177116),
    f = n(315853),
    _ = n(420602),
    p = n(197099);
let h = (e) => {
    let { className: t } = e;
    return (0, i.e7)([s.Z], () => s.Z.useReducedMotion)
        ? (0, r.jsx)('img', {
              src: _.Z,
              className: t,
              alt: ''
          })
        : (0, r.jsxs)(l.Z, {
              className: t,
              autoPlay: !0,
              loop: !0,
              children: [
                  (0, r.jsx)('source', {
                      src: p.Z,
                      type: 'video/webm'
                  }),
                  (0, r.jsx)('img', {
                      src: _.Z,
                      className: t,
                      alt: ''
                  })
              ]
          });
};
function m(e) {
    let { step: t, onClose: n, isOrbCheckout: i } = e,
        s = (0, a.Z)(u.X);
    return t === c.h8.BENEFITS || t === c.h8.CONFIRM
        ? null
        : (0, r.jsxs)('div', {
              className: d.headerContainer,
              children: [
                  !s &&
                      (0, r.jsx)('div', {
                          className: d.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: i
                              ? (0, r.jsx)(h, { className: d.headerImage })
                              : (0, r.jsx)('img', {
                                    src: f,
                                    alt: '',
                                    className: d.headerImage
                                })
                      }),
                  (0, r.jsx)(o.olH, {
                      withCircleBackground: !0,
                      className: d.closeButton,
                      onClick: n
                  })
              ]
          });
}
