"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(118019),
    a = n(383501),
    o = n(728458),
    c = n(38050),
    d = n(998740),
    u = n(572808),
    h = n(241080);
let A = () => {
    let e = (0, l.bG)([a.A], () => a.A.getChannelId()),
        t = (0, l.bG)([d.A], () => null != e && d.A.isUserConnected(e)),
        n = (0, c.n)((e) => e.genre),
        A = (0, c.n)((e) => e.songIndex),
        p = (0, c.n)((e) => e.playRadio),
        g = (0, c.n)((e) => e.globalMute),
        m = (0, c.n)((e) => e.playNextSong),
        _ = (0, c.n)((e) => e.volumes),
        f = s.useRef(null),
        x = s.useRef(null),
        C = s.useRef(null),
        E = (0, h.A)(n, A),
        I = (0, l.bG)([d.A], () => d.A.assets);
    return (s.useEffect(() => {
        let e = f.current;
        null != e &&
            E?.src != null &&
            (e.pause(),
            (e.src = E.src),
            !g &&
                p &&
                t &&
                e.play()?.catch((e) => {
                    o.A.captureException(e);
                }));
    }, [E?.src, g, p, t]),
    s.useEffect(() => {
        let e = x.current,
            n = C.current;
        null != e &&
            (g || !t
                ? e.pause()
                : e.play()?.catch((e) => {
                      o.A.captureException(e);
                  })),
            null != n &&
                (g || !t
                    ? n.pause()
                    : n.play()?.catch((e) => {
                          o.A.captureException(e);
                      }));
    }, [g, t]),
    t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.A, {
                      ref: f,
                      onEnded: m,
                      volume: g ? 0 : _.radio,
                      children: (0, i.jsx)("source", { src: E?.src }),
                  }),
                  (0, i.jsx)(r.A, {
                      ref: x,
                      volume: g ? 0 : _.environment,
                      children: (0, i.jsx)("source", { src: I?.sounds?.[u.qi.ENVIRONMENT] }),
                  }),
                  (0, i.jsx)(r.A, {
                      ref: C,
                      volume: g ? 0 : _.campfire,
                      children: (0, i.jsx)("source", { src: I?.sounds?.[u.qi.CAMPFIRE] }),
                  }),
              ],
          })
        : null;
};
