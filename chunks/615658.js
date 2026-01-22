n.d(t, {
    A: () => p,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(118019),
    s = n(383501),
    o = n(728458),
    c = n(38050),
    u = n(998740),
    d = n(572808),
    f = n(241080);
let p = () => {
    var e, t;
    let n = (0, i.bG)([s.A], () => s.A.getChannelId()),
        p = (0, i.bG)([u.A], () => null != n && u.A.isUserConnected(n)),
        h = (0, c.n)((e) => e.genre),
        b = (0, c.n)((e) => e.songIndex),
        g = (0, c.n)((e) => e.playRadio),
        m = (0, c.n)((e) => e.globalMute),
        A = (0, c.n)((e) => e.playNextSong),
        y = (0, c.n)((e) => e.volumes),
        O = l.useRef(null),
        j = l.useRef(null),
        v = l.useRef(null),
        x = (0, f.A)(h, b),
        E = (0, i.bG)([u.A], () => u.A.assets);
    return (l.useEffect(() => {
        let e = O.current;
        if (null != e && (null == x ? void 0 : x.src) != null && (e.pause(), (e.src = x.src), !m && g && p)) {
            var t;
            null == (t = e.play()) ||
                t.catch((e) => {
                    o.A.captureException(e);
                });
        }
    }, [null == x ? void 0 : x.src, m, g, p]),
    l.useEffect(() => {
        var e, t;
        let n = j.current,
            r = v.current;
        null != n &&
            (m || !p
                ? n.pause()
                : null == (e = n.play()) ||
                  e.catch((e) => {
                      o.A.captureException(e);
                  })),
            null != r &&
                (m || !p
                    ? r.pause()
                    : null == (t = r.play()) ||
                      t.catch((e) => {
                          o.A.captureException(e);
                      }));
    }, [m, p]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.A, {
                      ref: O,
                      onEnded: A,
                      volume: m ? 0 : y.radio,
                      children: (0, r.jsx)("source", {
                          src: null == x ? void 0 : x.src,
                      }),
                  }),
                  (0, r.jsx)(a.A, {
                      ref: j,
                      volume: m ? 0 : y.environment,
                      children: (0, r.jsx)("source", {
                          src: null == E || null == (e = E.sounds) ? void 0 : e[d.qi.ENVIRONMENT],
                      }),
                  }),
                  (0, r.jsx)(a.A, {
                      ref: v,
                      volume: m ? 0 : y.campfire,
                      children: (0, r.jsx)("source", {
                          src: null == E || null == (t = E.sounds) ? void 0 : t[d.qi.CAMPFIRE],
                      }),
                  }),
              ],
          })
        : null;
};
