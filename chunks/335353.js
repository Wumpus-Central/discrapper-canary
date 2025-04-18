n.d(t, { Z: () => a });
var r = n(200651),
    i = n(192379),
    l = n(70097),
    o = n(576645),
    s = n(311829);
function a(e) {
    let { children: t, channel: n } = e,
        a = (0, i.useRef)(null);
    return ((0, o.J)(n, () => {
        if (null != a.current) {
            let e = a.current;
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
        ? (0, r.jsxs)('div', {
              className: s.container,
              onMouseEnter: () => {
                  null != a.current && a.current.play();
              },
              onMouseLeave: () => {
                  null != a.current && a.current.pause();
              },
              children: [
                  (0, r.jsx)('div', {
                      className: s.videoContainer,
                      children: (0, r.jsx)(l.Z, {
                          ref: a,
                          className: s.video,
                          muted: !0,
                          loop: !0,
                          preload: 'auto',
                          children: (0, r.jsx)('source', {
                              src: 'https://cdn.discordapp.com/assets/content/d9e11f6867e4d7ce641f72ee40be0d96b085239067f94564f79ca3920a50397f.mp4',
                              type: 'video/mp4'
                          })
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: s.content,
                      children: t
                  })
              ]
          })
        : t;
}
