n.d(t, { Z: () => s });
var r = n(200651),
    l = n(192379),
    i = n(70097),
    a = n(576645),
    o = n(190362);
function s(e) {
    let { baseTileRef: t, cleanup: n } = e,
        s = (0, a.bK)(),
        u = (0, l.useRef)(s);
    return null == t || 0 === t.offsetHeight || u.current
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
