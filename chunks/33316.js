n.d(t, { Z: () => o });
var l = n(200651),
    i = n(192379),
    r = n(70097),
    a = n(576645),
    s = n(844069);
function o(e) {
    let { baseTileRef: t, cleanup: n } = e,
        o = (0, a.bK)(),
        u = (0, i.useRef)(o);
    return null == t || 0 === t.offsetHeight || u.current
        ? null
        : (0, l.jsx)('div', {
              style: {
                  width: 1.22 * t.offsetWidth,
                  height: 1.22 * t.offsetHeight
              },
              className: s.demoEffectOverlay,
              children: (0, l.jsx)(r.Z, {
                  autoPlay: !0,
                  className: s.demoEffectImg,
                  onEnded: n,
                  children: (0, l.jsx)('source', {
                      src: 'https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm',
                      type: 'video/webm'
                  })
              })
          });
}
