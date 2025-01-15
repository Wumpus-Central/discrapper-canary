n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(70097),
    a = n(576645),
    o = n(264040);
function s(e) {
    let { children: t, channel: n } = e,
        s = (0, l.useRef)(null);
    return ((0, a.J)(n, () => {
        if (null != s.current) {
            let e = s.current;
            e.play();
            let t = setTimeout(() => {
                e.pause();
            }, 23000);
            return () => {
                clearTimeout(t);
            };
        }
    }),
    n.isHDStreamSplashed)
        ? (0, i.jsxs)('div', {
              className: o.container,
              onMouseEnter: () => {
                  null != s.current && s.current.play();
              },
              onMouseLeave: () => {
                  null != s.current && s.current.pause();
              },
              children: [
                  (0, i.jsx)('div', {
                      className: o.videoContainer,
                      children: (0, i.jsx)(r.Z, {
                          ref: s,
                          className: o.video,
                          muted: !0,
                          loop: !0,
                          preload: 'auto',
                          children: (0, i.jsx)('source', {
                              src: 'https://cdn.discordapp.com/assets/content/d9e11f6867e4d7ce641f72ee40be0d96b085239067f94564f79ca3920a50397f.mp4',
                              type: 'video/mp4'
                          })
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: o.content,
                      children: t
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: t });
}
