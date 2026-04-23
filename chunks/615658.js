n.d(t, { A: () => h });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(118019),
    r = n(383501),
    o = n(728458),
    c = n(38050),
    d = n(998740),
    u = n(572808),
    p = n(241080);
let h = () => {
    let e = (0, l.bG)([r.A], () => r.A.getChannelId()),
        t = (0, l.bG)([d.A], () => null != e && d.A.isUserConnected(e)),
        n = (0, c.n)((e) => e.genre),
        h = (0, c.n)((e) => e.songIndex),
        _ = (0, c.n)((e) => e.playRadio),
        m = (0, c.n)((e) => e.globalMute),
        A = (0, c.n)((e) => e.playNextSong),
        x = (0, c.n)((e) => e.volumes),
        f = a.useRef(null),
        g = a.useRef(null),
        C = a.useRef(null),
        y = (0, p.A)(n, h),
        v = (0, l.bG)([d.A], () => d.A.assets);
    return (a.useEffect(() => {
        let e = f.current;
        null != e &&
            y?.src != null &&
            (e.pause(),
            (e.src = y.src),
            !m &&
                _ &&
                t &&
                e.play()?.catch((e) => {
                    o.A.captureException(e);
                }));
    }, [y?.src, m, _, t]),
    a.useEffect(() => {
        let e = g.current,
            n = C.current;
        null != e &&
            (m || !t
                ? e.pause()
                : e.play()?.catch((e) => {
                      o.A.captureException(e);
                  })),
            null != n &&
                (m || !t
                    ? n.pause()
                    : n.play()?.catch((e) => {
                          o.A.captureException(e);
                      }));
    }, [m, t]),
    t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.A, {
                      ref: f,
                      onEnded: A,
                      volume: m ? 0 : x.radio,
                      children: (0, i.jsx)("source", { src: y?.src }),
                  }),
                  (0, i.jsx)(s.A, {
                      ref: g,
                      volume: m ? 0 : x.environment,
                      children: (0, i.jsx)("source", { src: v?.sounds?.[u.qi.ENVIRONMENT] }),
                  }),
                  (0, i.jsx)(s.A, {
                      ref: C,
                      volume: m ? 0 : x.campfire,
                      children: (0, i.jsx)("source", { src: v?.sounds?.[u.qi.CAMPFIRE] }),
                  }),
              ],
          })
        : null;
};
