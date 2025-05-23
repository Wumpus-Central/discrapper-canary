n.d(t, { Z: () => u });
var r = n(255367),
    l = n(73800),
    i = n(70097),
    a = n(576645),
    o = n(938173);
function u(e) {
    let { baseTileRef: t, cleanup: n } = e,
        u = (0, a.bK)(),
        s = (0, l.useRef)(u);
    return null == t || 0 === t.offsetHeight || s.current
        ? null
        : (0, r.jsx)('div', {
              style: {
                  width: 1.22 * t.offsetWidth,
                  height: 1.22 * t.offsetHeight
              },
              className: o.demoEffectOverlay,
              children: (0, r.jsx)(i.Z, {
                  autoPlay: !0,
                  className: o.demoEffectImg,
                  onEnded: n,
                  children: (0, r.jsx)('source', {
                      src: 'https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm',
                      type: 'video/webm'
                  })
              })
          });
}
