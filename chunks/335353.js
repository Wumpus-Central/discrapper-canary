n.d(t, { Z: () => s });
var r = n(200651),
    i = n(192379),
    l = n(70097),
    o = n(576645),
    a = n(489953);
function s(e) {
    let { children: t, channel: n } = e,
        s = (0, i.useRef)(null);
    return ((0, o.J)(n, () => {
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
        ? (0, r.jsxs)('div', {
              className: a.container,
              onMouseEnter: () => {
                  null != s.current && s.current.play();
              },
              onMouseLeave: () => {
                  null != s.current && s.current.pause();
              },
              children: [
                  (0, r.jsx)('div', {
                      className: a.videoContainer,
                      children: (0, r.jsx)(l.Z, {
                          ref: s,
                          className: a.video,
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
                      className: a.content,
                      children: t
                  })
              ]
          })
        : t;
}
