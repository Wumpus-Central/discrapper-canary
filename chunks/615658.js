n.d(t, { A: () => p });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(745601),
    r = n(763827),
    o = n(38405),
    c = n(38050),
    d = n(998740),
    u = n(572808),
    h = n(241080);
let p = function () {
    let e = (0, a.bG)([r.A], () => r.A.getChannelId()),
        t = (0, a.bG)([d.A], () => null != e && d.A.isUserConnected(e)),
        n = (0, c.n)((e) => e.genre),
        p = (0, c.n)((e) => e.songIndex),
        m = (0, c.n)((e) => e.playRadio),
        A = (0, c.n)((e) => e.globalMute),
        f = (0, c.n)((e) => e.playNextSong),
        x = (0, c.n)((e) => e.volumes),
        g = l.useRef(null),
        C = l.useRef(null),
        y = l.useRef(null),
        j = (0, h.A)(n, p),
        v = (0, a.bG)([d.A], () => d.A.assets);
    return (l.useEffect(() => {
        let e = g.current;
        null != e &&
            j?.src != null &&
            (e.pause(),
            (e.src = j.src),
            !A &&
                m &&
                t &&
                e.play()?.catch((e) => {
                    o.A.captureException(e);
                }));
    }, [j?.src, A, m, t]),
    l.useEffect(() => {
        let e = C.current,
            n = y.current;
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
                      ref: g,
                      onEnded: f,
                      volume: A ? 0 : x.radio,
                      children: (0, i.jsx)("source", { src: j?.src }),
                  }),
                  (0, i.jsx)(s.A, {
                      ref: C,
                      volume: A ? 0 : x.environment,
                      children: (0, i.jsx)("source", { src: v?.sounds?.[u.qi.ENVIRONMENT] }),
                  }),
                  (0, i.jsx)(s.A, {
                      ref: y,
                      volume: A ? 0 : x.campfire,
                      children: (0, i.jsx)("source", { src: v?.sounds?.[u.qi.CAMPFIRE] }),
                  }),
              ],
          })
        : null;
};
