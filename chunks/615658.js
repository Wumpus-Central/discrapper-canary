n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(745601),
    r = n(763827),
    o = n(38405),
    c = n(38050),
    d = n(998740),
    u = n(572808),
    h = n(241080);
let p = () => {
    let e = (0, a.bG)([r.A], () => r.A.getChannelId()),
        t = (0, a.bG)([d.A], () => null != e && d.A.isUserConnected(e)),
        n = (0, c.n)((e) => e.genre),
        p = (0, c.n)((e) => e.songIndex),
        m = (0, c.n)((e) => e.playRadio),
        A = (0, c.n)((e) => e.globalMute),
        x = (0, c.n)((e) => e.playNextSong),
        g = (0, c.n)((e) => e.volumes),
        C = l.useRef(null),
        f = l.useRef(null),
        E = l.useRef(null),
        y = (0, h.A)(n, p),
        N = (0, a.bG)([d.A], () => d.A.assets);
    return (l.useEffect(() => {
        let e = C.current;
        null != e &&
            y?.src != null &&
            (e.pause(),
            (e.src = y.src),
            !A &&
                m &&
                t &&
                e.play()?.catch((e) => {
                    o.A.captureException(e);
                }));
    }, [y?.src, A, m, t]),
    l.useEffect(() => {
        let e = f.current,
            n = E.current;
        null != e &&
            (A || !t
                ? e.pause()
                : e.play()?.catch((e) => {
                      o.A.captureException(e);
                  })),
            null != n &&
                (A || !t
                    ? n.pause()
                    : n.play()?.catch((e) => {
                          o.A.captureException(e);
                      }));
    }, [A, t]),
    t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.A, {
                      ref: C,
                      onEnded: x,
                      volume: A ? 0 : g.radio,
                      children: (0, i.jsx)("source", { src: y?.src }),
                  }),
                  (0, i.jsx)(s.A, {
                      ref: f,
                      volume: A ? 0 : g.environment,
                      children: (0, i.jsx)("source", { src: N?.sounds?.[u.qi.ENVIRONMENT] }),
                  }),
                  (0, i.jsx)(s.A, {
                      ref: E,
                      volume: A ? 0 : g.campfire,
                      children: (0, i.jsx)("source", { src: N?.sounds?.[u.qi.CAMPFIRE] }),
                  }),
              ],
          })
        : null;
};
