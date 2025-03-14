n.d(t, { Z: () => c });
var r = n(200651),
    i = n(442837),
    o = n(607070),
    a = n(70097),
    s = n(92190),
    l = n(106376);
let c = (e) => {
    let { className: t } = e;
    return (0, i.e7)([o.Z], () => o.Z.useReducedMotion)
        ? (0, r.jsx)('img', {
              src: s.Z,
              className: t,
              alt: 'Orb'
          })
        : (0, r.jsxs)(a.Z, {
              autoPlay: !0,
              loop: !0,
              className: t,
              children: [
                  (0, r.jsx)('source', {
                      src: l.Z,
                      type: 'video/webm'
                  }),
                  (0, r.jsx)('img', {
                      src: s.Z,
                      className: t,
                      alt: 'Orb'
                  })
              ]
          });
};
