n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(607070),
    s = n(70097),
    l = n(92190),
    c = n(106376);
let u = (e) => {
    let { className: t, animationState: n = 'always' } = e,
        u = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
        d = 'hover' === n,
        [f, _] = (0, i.useState)(!1),
        p = u || 'none' === n || (d && !f);
    return (0, r.jsx)('div', {
        onMouseEnter: d ? () => _(!0) : void 0,
        onMouseLeave: d ? () => _(!1) : void 0,
        children: p
            ? (0, r.jsx)('img', {
                  src: l.Z,
                  className: t,
                  alt: 'Orb'
              })
            : (0, r.jsx)('div', {
                  children: (0, r.jsxs)(s.Z, {
                      className: t,
                      autoPlay: !0,
                      loop: !0,
                      children: [
                          (0, r.jsx)('source', {
                              src: c.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: l.Z,
                              className: t,
                              alt: 'Orb'
                          })
                      ]
                  })
              })
    });
};
