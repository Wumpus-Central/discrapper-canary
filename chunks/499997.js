n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(607070),
    s = n(70097),
    l = n(92190),
    c = n(106376);
let u = (e) => {
    let { className: t, animationState: n = 'on' } = e,
        u = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
        [d, f] = (0, i.useState)(!1),
        _ = (0, i.useRef)(null),
        p = 'on' === n || ('on_hover' === n && d);
    return (
        (0, i.useEffect)(() => {
            null !== _.current && (p ? _.current.play() : ((_.current.currentTime = 0), _.current.pause()));
        }, [p]),
        (0, r.jsx)('div', {
            onMouseEnter: 'on_hover' === n ? () => f(!0) : void 0,
            onMouseLeave: 'on_hover' === n ? () => f(!1) : void 0,
            children: u
                ? (0, r.jsx)('img', {
                      src: l.Z,
                      className: t,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(s.Z, {
                      className: t,
                      autoPlay: !0,
                      loop: !0,
                      ref: _,
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
    );
};
