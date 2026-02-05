n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(118019),
    r = n(383501),
    o = n(728458),
    d = n(38050),
    c = n(998740),
    u = n(572808),
    h = n(241080);
let A = () => {
    let e = (0, s.bG)([r.A], () => r.A.getChannelId()),
        t = (0, s.bG)([c.A], () => null != e && c.A.isUserConnected(e)),
        n = (0, d.n)((e) => e.genre),
        A = (0, d.n)((e) => e.songIndex),
        g = (0, d.n)((e) => e.playRadio),
        m = (0, d.n)((e) => e.globalMute),
        p = (0, d.n)((e) => e.playNextSong),
        _ = (0, d.n)((e) => e.volumes),
        x = l.useRef(null),
        f = l.useRef(null),
        E = l.useRef(null),
        C = (0, h.A)(n, A),
        I = (0, s.bG)([c.A], () => c.A.assets);
    return (l.useEffect(() => {
        let e = x.current;
        null != e &&
            C?.src != null &&
            (e.pause(),
            (e.src = C.src),
            !m &&
                g &&
                t &&
                e.play()?.catch((e) => {
                    o.A.captureException(e);
                }));
    }, [C?.src, m, g, t]),
    l.useEffect(() => {
        let e = f.current,
            n = E.current;
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
                  (0, i.jsx)(a.A, {
                      ref: x,
                      onEnded: p,
                      volume: m ? 0 : _.radio,
                      children: (0, i.jsx)("source", { src: C?.src }),
                  }),
                  (0, i.jsx)(a.A, {
                      ref: f,
                      volume: m ? 0 : _.environment,
                      children: (0, i.jsx)("source", { src: I?.sounds?.[u.qi.ENVIRONMENT] }),
                  }),
                  (0, i.jsx)(a.A, {
                      ref: E,
                      volume: m ? 0 : _.campfire,
                      children: (0, i.jsx)("source", { src: I?.sounds?.[u.qi.CAMPFIRE] }),
                  }),
              ],
          })
        : null;
};
