n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(70097),
    r = n(576645),
    s = n(22728);
function o(e) {
    let { baseTileRef: t, cleanup: n } = e,
        o = (0, r.bK)(),
        c = (0, l.useRef)(o);
    return null == t || 0 === t.offsetHeight || c.current
        ? null
        : (0, i.jsx)('div', {
              style: {
                  width: 1.22 * t.offsetWidth,
                  height: 1.22 * t.offsetHeight
              },
              className: s.demoEffectOverlay,
              children: (0, i.jsx)(a.Z, {
                  autoPlay: !0,
                  className: s.demoEffectImg,
                  onEnded: n,
                  children: (0, i.jsx)('source', {
                      src: 'https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm',
                      type: 'video/webm'
                  })
              })
          });
}
